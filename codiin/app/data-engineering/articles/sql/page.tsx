import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SQL for Data Engineering: Advanced Techniques",
  description: "Learn SQL for Data Engineering - advanced queries, window functions, CTEs, query optimization, and database design for data pipelines.",
  keywords: ["SQL tutorial", "data engineering SQL", "window functions", "CTEs", "query optimization", "database design"],
  alternates: { canonical: "/data-engineering/articles/sql" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/sql",
    title: "SQL for Data Engineering: Advanced Techniques",
    description: "Master advanced SQL for building data pipelines and analytics.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-engineering", label: "Learn Data Engineering", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SQL for Data Engineering: Advanced Techniques",
  "description": "Complete guide to advanced SQL for data engineering",
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

export default function DataEngineeringSqlPage() {
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
              <Link href="/data-engineering">
                {"Data Engineering"}
              </Link>
              {" / "}
              <span>
                {"SQL"}
              </span>
            </div>
            <h1>
              {"SQL for Data Engineering"}
            </h1>
            <p className="article-subtitle">
              {"Advanced Techniques for Data Pipelines"}
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
                  {"Why SQL Matters"}
                </h2>
                <p>
                  {"SQL is the universal language of data. Every data engineer needs to master SQL for querying databases, building transformations, and analyzing data. Modern data warehouses and tools like dbt use SQL as the primary interface."}
                </p>
                <p>
                  {"This guide covers advanced SQL techniques essential for data engineering work."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Window Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Running totals
SELECT
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) as running_total,
    SUM(amount) OVER (
        PARTITION BY customer_id
        ORDER BY order_date
    ) as customer_running_total
FROM orders;

-- Ranking
SELECT
    customer_id,
    amount,
    ROW_NUMBER() OVER (ORDER BY amount DESC) as row_num,
    RANK() OVER (ORDER BY amount DESC) as rank,
    DENSE_RANK() OVER (ORDER BY amount DESC) as dense_rank,
    NTILE(4) OVER (ORDER BY amount DESC) as quartile
FROM orders;

-- Lead and Lag (previous/next values)
SELECT
    customer_id,
    order_date,
    amount,
    LAG(amount, 1) OVER (
        PARTITION BY customer_id ORDER BY order_date
    ) as previous_amount,
    LEAD(amount, 1) OVER (
        PARTITION BY customer_id ORDER BY order_date
    ) as next_amount,
    amount - LAG(amount, 1) OVER (
        PARTITION BY customer_id ORDER BY order_date
    ) as amount_change
FROM orders;

-- First and Last values
SELECT
    customer_id,
    order_date,
    amount,
    FIRST_VALUE(amount) OVER (
        PARTITION BY customer_id ORDER BY order_date
    ) as first_order_amount,
    LAST_VALUE(amount) OVER (
        PARTITION BY customer_id
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) as last_order_amount
FROM orders;`}</code></pre>
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
        SUM(amount) as total_sales
    FROM orders
    GROUP BY 1
)
SELECT
    month,
    total_sales,
    LAG(total_sales) OVER (ORDER BY month) as prev_month,
    total_sales - LAG(total_sales) OVER (ORDER BY month) as mom_change
FROM monthly_sales;

-- Multiple CTEs
WITH
customers AS (
    SELECT customer_id, customer_name, segment
    FROM dim_customers
    WHERE is_active = true
),
orders AS (
    SELECT customer_id, SUM(amount) as total_spend
    FROM fact_orders
    WHERE order_date >= '2024-01-01'
    GROUP BY customer_id
),
enriched AS (
    SELECT
        c.customer_id,
        c.customer_name,
        c.segment,
        COALESCE(o.total_spend, 0) as total_spend
    FROM customers c
    LEFT JOIN orders o ON c.customer_id = o.customer_id
)
SELECT * FROM enriched WHERE total_spend > 1000;

-- Recursive CTE (hierarchical data)
WITH RECURSIVE org_hierarchy AS (
    -- Base case: top-level managers
    SELECT employee_id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case: employees with managers
    SELECT e.employee_id, e.name, e.manager_id, h.level + 1
    FROM employees e
    JOIN org_hierarchy h ON e.manager_id = h.employee_id
)
SELECT * FROM org_hierarchy ORDER BY level, name;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced Joins"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Self join (compare rows in same table)
SELECT
    a.employee_id,
    a.name as employee,
    b.name as manager
FROM employees a
LEFT JOIN employees b ON a.manager_id = b.employee_id;

-- Cross join (cartesian product)
SELECT
    d.date,
    p.product_id,
    COALESCE(s.quantity, 0) as quantity
FROM dim_dates d
CROSS JOIN dim_products p
LEFT JOIN fact_sales s
    ON d.date = s.sale_date
    AND p.product_id = s.product_id
WHERE d.date BETWEEN '2024-01-01' AND '2024-01-31';

-- Lateral join (correlated subquery as join)
SELECT
    c.customer_id,
    c.customer_name,
    recent.order_date,
    recent.amount
FROM customers c
CROSS JOIN LATERAL (
    SELECT order_date, amount
    FROM orders o
    WHERE o.customer_id = c.customer_id
    ORDER BY order_date DESC
    LIMIT 3
) recent;

-- Anti-join (records not in other table)
SELECT c.*
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.customer_id IS NULL;

-- Or using NOT EXISTS
SELECT c.*
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.customer_id
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregation Techniques"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- GROUPING SETS (multiple groupings in one query)
SELECT
    COALESCE(region, 'All Regions') as region,
    COALESCE(product_category, 'All Categories') as category,
    SUM(amount) as total_sales
FROM sales
GROUP BY GROUPING SETS (
    (region, product_category),
    (region),
    (product_category),
    ()
);

-- ROLLUP (hierarchical grouping)
SELECT
    year,
    quarter,
    month,
    SUM(amount) as total_sales
FROM sales
GROUP BY ROLLUP (year, quarter, month);

-- CUBE (all combinations)
SELECT
    region,
    product_category,
    SUM(amount) as total_sales
FROM sales
GROUP BY CUBE (region, product_category);

-- Conditional aggregation
SELECT
    customer_id,
    COUNT(*) as total_orders,
    COUNT(*) FILTER (WHERE status = 'completed') as completed_orders,
    SUM(amount) FILTER (WHERE order_date >= '2024-01-01') as ytd_spend,
    AVG(amount) FILTER (WHERE product_category = 'Electronics') as avg_electronics
FROM orders
GROUP BY customer_id;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Date and Time Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Date truncation
SELECT
    DATE_TRUNC('day', timestamp_col) as day,
    DATE_TRUNC('week', timestamp_col) as week_start,
    DATE_TRUNC('month', timestamp_col) as month_start,
    DATE_TRUNC('quarter', timestamp_col) as quarter_start
FROM events;

-- Date arithmetic
SELECT
    order_date,
    order_date + INTERVAL '30 days' as due_date,
    order_date - INTERVAL '1 year' as year_ago,
    CURRENT_DATE - order_date as days_since_order,
    DATE_PART('dow', order_date) as day_of_week,
    EXTRACT(MONTH FROM order_date) as month
FROM orders;

-- Generate date series
SELECT generate_series(
    '2024-01-01'::date,
    '2024-12-31'::date,
    '1 day'::interval
)::date as date;

-- Fill missing dates
WITH date_range AS (
    SELECT generate_series(
        MIN(order_date),
        MAX(order_date),
        '1 day'::interval
    )::date as date
    FROM orders
)
SELECT
    d.date,
    COALESCE(SUM(o.amount), 0) as daily_sales
FROM date_range d
LEFT JOIN orders o ON d.date = o.order_date
GROUP BY d.date
ORDER BY d.date;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Query Optimization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Use EXPLAIN ANALYZE to understand query performance
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 123;

-- Create indexes for common queries
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_date ON orders(order_date);

-- Composite index for multi-column filters
CREATE INDEX idx_orders_customer_date
ON orders(customer_id, order_date);

-- Partial index for filtered queries
CREATE INDEX idx_active_orders
ON orders(customer_id) WHERE status = 'active';

-- Avoid SELECT *
-- Bad:
SELECT * FROM orders WHERE customer_id = 123;

-- Good:
SELECT order_id, order_date, amount
FROM orders WHERE customer_id = 123;

-- Use EXISTS instead of IN for large subqueries
-- Slower:
SELECT * FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);

-- Faster:
SELECT * FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Quality Queries"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Find duplicates
SELECT
    email,
    COUNT(*) as count
FROM customers
GROUP BY email
HAVING COUNT(*) > 1;

-- Check for nulls
SELECT
    COUNT(*) as total_rows,
    COUNT(email) as non_null_email,
    COUNT(*) - COUNT(email) as null_email,
    ROUND(100.0 * COUNT(email) / COUNT(*), 2) as completeness_pct
FROM customers;

-- Validate referential integrity
SELECT o.*
FROM orders o
LEFT JOIN customers c ON o.customer_id = c.customer_id
WHERE c.customer_id IS NULL;

-- Check value distributions
SELECT
    status,
    COUNT(*) as count,
    ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER (), 2) as percentage
FROM orders
GROUP BY status
ORDER BY count DESC;

-- Find outliers
WITH stats AS (
    SELECT
        AVG(amount) as avg_amount,
        STDDEV(amount) as std_amount
    FROM orders
)
SELECT o.*
FROM orders o, stats s
WHERE o.amount > s.avg_amount + 3 * s.std_amount
   OR o.amount < s.avg_amount - 3 * s.std_amount;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use CTEs:"}
                    </strong>
                    {" Make queries readable and maintainable"}
                  </li>
                  <li>
                    <strong>
                      {"Index wisely:"}
                    </strong>
                    {" Create indexes based on query patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid SELECT *:"}
                    </strong>
                    {" Select only needed columns"}
                  </li>
                  <li>
                    <strong>
                      {"Filter early:"}
                    </strong>
                    {" Reduce data volume as soon as possible"}
                  </li>
                  <li>
                    <strong>
                      {"Use EXPLAIN:"}
                    </strong>
                    {" Understand query execution plans"}
                  </li>
                  <li>
                    <strong>
                      {"Test with data:"}
                    </strong>
                    {" Validate queries with realistic data volumes"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master SQL with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers advanced SQL techniques for building robust data pipelines. Learn from industry experts with hands-on practice."}
                </p>
                <Link href="/data-engineering" className="btn btn-primary">
                  {"Explore Data Engineering Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt for Transformation"}
                    </h4>
                    {" "}
                    <p>
                      {"SQL-based data modeling"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-warehousing" className="related-article-card">
                    <h4>
                      {"Data Warehousing"}
                    </h4>
                    {" "}
                    <p>
                      {"Dimensional modeling"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/etl-pipelines" className="related-article-card">
                    <h4>
                      {"ETL Pipeline Design"}
                    </h4>
                    {" "}
                    <p>
                      {"Build data pipelines"}
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
