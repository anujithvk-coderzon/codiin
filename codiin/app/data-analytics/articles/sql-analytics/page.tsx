import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SQL for Data Analytics: Query Your Way to Insights",
  description: "Learn SQL for Data Analytics - SELECT queries, JOINs, aggregations, window functions, and CTEs for extracting business insights from databases.",
  keywords: ["SQL analytics tutorial", "SQL for data analysts", "SQL queries", "window functions", "CTEs", "data extraction"],
  alternates: { canonical: "/data-analytics/articles/sql-analytics" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/sql-analytics",
    title: "SQL for Data Analytics: Query Your Way to Insights",
    description: "Master SQL for extracting and analyzing business data.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-analytics", label: "Learn Data Analytics", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SQL for Data Analytics: Query Your Way to Insights",
  "description": "Complete guide to SQL for data analysts",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-22",
  "dateModified": "2024-12-22"
} as const;

export default function DataAnalyticsSqlAnalyticsPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="article-hero">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">
                {"Home"}
              </Link>
              {" / "}
              <Link href="/data-analytics">
                {"Data Analytics"}
              </Link>
              {" / "}
              <span>
                {"SQL for Analytics"}
              </span>
            </div>
            <h1>
              {"SQL for Data Analytics"}
            </h1>
            <p className="article-subtitle">
              {"Query Your Way to Insights"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Why SQL for Analytics?"}
                </h2>
                <p>
                  {"SQL (Structured Query Language) is the universal language for working with databases. As a data analyst, you'll use SQL daily to extract data, create reports, and answer business questions."}
                </p>
                <p>
                  {"SQL is used with databases like PostgreSQL, MySQL, SQL Server, and data warehouses like Snowflake, BigQuery, and Redshift."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic SELECT Queries"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Select all columns
SELECT * FROM customers;

-- Select specific columns
SELECT customer_id, name, email FROM customers;

-- Filter with WHERE
SELECT * FROM orders
WHERE status = 'completed'
  AND order_date >= '2024-01-01';

-- Sort results
SELECT * FROM products
ORDER BY price DESC;

-- Limit results
SELECT * FROM customers
ORDER BY created_at DESC
LIMIT 10;

-- Remove duplicates
SELECT DISTINCT category FROM products;

-- Aliases
SELECT
    first_name AS "First Name",
    last_name AS "Last Name",
    first_name || ' ' || last_name AS full_name
FROM customers;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Filtering Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Comparison operators
WHERE price > 100
WHERE price >= 100
WHERE price < 100
WHERE price != 100

-- Multiple conditions
WHERE status = 'active' AND region = 'East'
WHERE status = 'active' OR status = 'pending'
WHERE NOT status = 'cancelled'

-- IN operator
WHERE category IN ('Electronics', 'Clothing', 'Books')

-- BETWEEN
WHERE price BETWEEN 50 AND 100
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31'

-- LIKE for pattern matching
WHERE name LIKE 'John%'      -- Starts with John
WHERE email LIKE '%@gmail.com' -- Ends with @gmail.com
WHERE name LIKE '%Smith%'    -- Contains Smith
WHERE code LIKE 'A_B'        -- A, any char, B

-- NULL handling
WHERE phone IS NULL
WHERE phone IS NOT NULL
WHERE COALESCE(phone, 'N/A') -- Replace NULL with default`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Basic aggregations
SELECT
    COUNT(*) as total_orders,
    COUNT(DISTINCT customer_id) as unique_customers,
    SUM(amount) as total_revenue,
    AVG(amount) as average_order,
    MIN(amount) as smallest_order,
    MAX(amount) as largest_order
FROM orders;

-- GROUP BY
SELECT
    category,
    COUNT(*) as product_count,
    AVG(price) as avg_price
FROM products
GROUP BY category;

-- Multiple grouping
SELECT
    EXTRACT(YEAR FROM order_date) as year,
    EXTRACT(MONTH FROM order_date) as month,
    SUM(amount) as monthly_revenue
FROM orders
GROUP BY 1, 2
ORDER BY 1, 2;

-- HAVING (filter after aggregation)
SELECT
    customer_id,
    COUNT(*) as order_count,
    SUM(amount) as total_spent
FROM orders
GROUP BY customer_id
HAVING COUNT(*) >= 5
   AND SUM(amount) > 1000
ORDER BY total_spent DESC;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JOIN Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- INNER JOIN (matching rows only)
SELECT
    o.order_id,
    o.order_date,
    c.name as customer_name,
    o.amount
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;

-- LEFT JOIN (all from left table)
SELECT
    c.name,
    COUNT(o.order_id) as order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.name;

-- RIGHT JOIN (all from right table)
SELECT
    p.name as product,
    COALESCE(SUM(oi.quantity), 0) as total_sold
FROM order_items oi
RIGHT JOIN products p ON oi.product_id = p.product_id
GROUP BY p.name;

-- FULL OUTER JOIN (all from both)
SELECT
    c.name,
    o.order_id
FROM customers c
FULL OUTER JOIN orders o ON c.customer_id = o.customer_id;

-- Multiple joins
SELECT
    o.order_id,
    c.name as customer,
    p.name as product,
    oi.quantity,
    oi.unit_price
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Window Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Running total
SELECT
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) as running_total
FROM orders;

-- Partition by customer
SELECT
    customer_id,
    order_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY customer_id
        ORDER BY order_date
    ) as customer_running_total
FROM orders;

-- Ranking
SELECT
    product_name,
    category,
    revenue,
    ROW_NUMBER() OVER (ORDER BY revenue DESC) as overall_rank,
    RANK() OVER (PARTITION BY category ORDER BY revenue DESC) as category_rank
FROM product_sales;

-- LAG and LEAD
SELECT
    month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY month) as prev_month,
    revenue - LAG(revenue, 1) OVER (ORDER BY month) as mom_change,
    LEAD(revenue, 1) OVER (ORDER BY month) as next_month
FROM monthly_sales;

-- Percent of total
SELECT
    category,
    revenue,
    ROUND(100.0 * revenue / SUM(revenue) OVER (), 2) as pct_of_total
FROM category_sales;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Table Expressions (CTEs)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Basic CTE
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date) as month,
        SUM(amount) as revenue
    FROM orders
    GROUP BY 1
)
SELECT
    month,
    revenue,
    LAG(revenue) OVER (ORDER BY month) as prev_month,
    ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month))
        / LAG(revenue) OVER (ORDER BY month), 2) as growth_pct
FROM monthly_sales;

-- Multiple CTEs
WITH
customer_orders AS (
    SELECT
        customer_id,
        COUNT(*) as order_count,
        SUM(amount) as total_spent
    FROM orders
    GROUP BY customer_id
),
customer_segments AS (
    SELECT
        customer_id,
        order_count,
        total_spent,
        CASE
            WHEN total_spent >= 10000 THEN 'VIP'
            WHEN total_spent >= 5000 THEN 'Gold'
            WHEN total_spent >= 1000 THEN 'Silver'
            ELSE 'Bronze'
        END as segment
    FROM customer_orders
)
SELECT
    segment,
    COUNT(*) as customer_count,
    AVG(total_spent) as avg_spend
FROM customer_segments
GROUP BY segment;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Date Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Current date/time
SELECT CURRENT_DATE, CURRENT_TIMESTAMP, NOW();

-- Extract parts
SELECT
    EXTRACT(YEAR FROM order_date) as year,
    EXTRACT(MONTH FROM order_date) as month,
    EXTRACT(DAY FROM order_date) as day,
    EXTRACT(DOW FROM order_date) as day_of_week
FROM orders;

-- Date truncation
SELECT
    DATE_TRUNC('month', order_date) as month_start,
    DATE_TRUNC('week', order_date) as week_start
FROM orders;

-- Date arithmetic
SELECT
    order_date,
    order_date + INTERVAL '30 days' as due_date,
    AGE(CURRENT_DATE, order_date) as days_since_order
FROM orders;

-- Formatting
SELECT TO_CHAR(order_date, 'YYYY-MM') as year_month
FROM orders;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Format your queries:"}
                    </strong>
                    {" Use indentation and line breaks"}
                  </li>
                  <li>
                    <strong>
                      {"Use aliases:"}
                    </strong>
                    {" Make column names readable"}
                  </li>
                  <li>
                    <strong>
                      {"Filter early:"}
                    </strong>
                    {" WHERE before JOIN when possible"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid SELECT *:"}
                    </strong>
                    {" Select only needed columns"}
                  </li>
                  <li>
                    <strong>
                      {"Use CTEs:"}
                    </strong>
                    {" Break complex queries into steps"}
                  </li>
                  <li>
                    <strong>
                      {"Comment your code:"}
                    </strong>
                    {" Explain complex logic"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master SQL with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers SQL from basics to advanced analytics queries. Extract insights from data with guidance from industry experts."}
                </p>
                <Link href="/data-analytics" className="btn btn-primary">
                  {"Explore Data Analytics Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-analytics/articles/power-bi" className="related-article-card">
                    <h4>
                      {"Power BI"}
                    </h4>
                    {" "}
                    <p>
                      {"Visualize your SQL data"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/excel-analytics" className="related-article-card">
                    <h4>
                      {"Excel Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Complement SQL with Excel"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/pandas" className="related-article-card">
                    <h4>
                      {"Pandas"}
                    </h4>
                    {" "}
                    <p>
                      {"SQL-like operations in Python"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn SQL."} />
    </>
  );
}
