import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Data Modeling: Star Schema, Snowflake & Data Vault",
  description: "Learn Data Modeling for data engineering - dimensional modeling, star schema, snowflake schema, and data vault. Master database design for analytics.",
  keywords: ["data modeling", "star schema", "snowflake schema", "data vault", "dimensional modeling", "database design", "data warehouse modeling"],
  alternates: { canonical: "/data-engineering/articles/data-modeling" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/data-modeling",
    title: "Data Modeling: Complete Guide to Dimensional Design",
    description: "Master data modeling techniques for building efficient data warehouses.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-engineering", label: "Learn Data Engineering", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Data Modeling: Complete Guide to Dimensional Design",
  "description": "Master data modeling techniques for data warehouses",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-24",
  "dateModified": "2024-12-24"
} as const;

export default function DataEngineeringDataModelingPage() {
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
                {"Data Modeling"}
              </span>
            </div>
            <h1>
              {"Data Modeling"}
            </h1>
            <p className="article-subtitle">
              {"Designing Schemas for Analytics and Data Warehouses"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Data Modeling?"}
                </h2>
                <p>
                  {"Data modeling is the process of creating a visual representation of data structures and their relationships. In data engineering, it focuses on organizing data for efficient storage, retrieval, and analysis in data warehouses and analytical systems."}
                </p>
                <p>
                  {"Good data models make queries faster, data easier to understand, and analytics more reliable."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"OLTP vs OLAP"}
                </h2>
                <p>
                  {"Understanding the difference is crucial for choosing the right model:"}
                </p>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────┐
│                    OLTP vs OLAP                             │
├─────────────────────────────────────────────────────────────┤
│  OLTP (Transactional)        │  OLAP (Analytical)          │
├──────────────────────────────┼─────────────────────────────┤
│  • Many small transactions   │  • Complex queries          │
│  • Insert, Update, Delete    │  • Read-heavy workloads     │
│  • Normalized (3NF)          │  • Denormalized             │
│  • Current data              │  • Historical data          │
│  • Application databases     │  • Data warehouses          │
│  • MySQL, PostgreSQL         │  • Redshift, Snowflake      │
└──────────────────────────────┴─────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dimensional Modeling Concepts"}
                </h2>
                <p>
                  {"Dimensional modeling organizes data into facts and dimensions:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Facts:"}
                    </strong>
                    {" Measurable events (sales, clicks, transactions) with numeric values"}
                  </li>
                  <li>
                    <strong>
                      {"Dimensions:"}
                    </strong>
                    {" Context for facts (who, what, when, where, why)"}
                  </li>
                  <li>
                    <strong>
                      {"Measures:"}
                    </strong>
                    {" Numeric values in facts (amount, quantity, duration)"}
                  </li>
                  <li>
                    <strong>
                      {"Attributes:"}
                    </strong>
                    {" Descriptive fields in dimensions (name, category, region)"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`-- Example: Sales Fact Table
CREATE TABLE fact_sales (
    sale_id         BIGINT PRIMARY KEY,
    date_key        INT REFERENCES dim_date(date_key),
    product_key     INT REFERENCES dim_product(product_key),
    customer_key    INT REFERENCES dim_customer(customer_key),
    store_key       INT REFERENCES dim_store(store_key),

    -- Measures (numeric, aggregatable)
    quantity        INT,
    unit_price      DECIMAL(10,2),
    total_amount    DECIMAL(12,2),
    discount_amount DECIMAL(10,2)
);

-- Example: Product Dimension Table
CREATE TABLE dim_product (
    product_key     INT PRIMARY KEY,
    product_id      VARCHAR(20),      -- Natural key
    product_name    VARCHAR(100),
    category        VARCHAR(50),
    subcategory     VARCHAR(50),
    brand           VARCHAR(50),
    unit_cost       DECIMAL(10,2)
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Star Schema"}
                </h2>
                <p>
                  {"The most common dimensional model - simple and fast for queries:"}
                </p>
                <div className="code-block">
                  <pre><code>{`                    ┌─────────────┐
                    │  dim_date   │
                    └──────┬──────┘
                           │
┌─────────────┐    ┌───────┴───────┐    ┌─────────────┐
│ dim_product │────│  fact_sales   │────│ dim_customer│
└─────────────┘    └───────┬───────┘    └─────────────┘
                           │
                    ┌──────┴──────┐
                    │  dim_store  │
                    └─────────────┘

Characteristics:
• Fact table in center, dimensions around it
• Dimensions are denormalized (flat)
• Simple joins (one level)
• Best query performance
• Some data redundancy`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`-- Star Schema Query Example
SELECT
    d.year,
    d.month_name,
    p.category,
    c.customer_segment,
    SUM(f.total_amount) as total_sales,
    COUNT(DISTINCT f.sale_id) as num_transactions
FROM fact_sales f
JOIN dim_date d ON f.date_key = d.date_key
JOIN dim_product p ON f.product_key = p.product_key
JOIN dim_customer c ON f.customer_key = c.customer_key
WHERE d.year = 2024
GROUP BY d.year, d.month_name, p.category, c.customer_segment
ORDER BY total_sales DESC;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Snowflake Schema"}
                </h2>
                <p>
                  {"Normalized version of star schema - dimensions are split into sub-dimensions:"}
                </p>
                <div className="code-block">
                  <pre><code>{`         ┌────────────┐
         │dim_category│
         └─────┬──────┘
               │
         ┌─────┴──────┐         ┌─────────────┐
         │dim_product │─────────│ fact_sales  │
         └────────────┘         └──────┬──────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
              ┌─────┴─────┐     ┌──────┴──────┐    ┌──────┴──────┐
              │ dim_date  │     │dim_customer │    │  dim_store  │
              └───────────┘     └──────┬──────┘    └──────┬──────┘
                                       │                  │
                                ┌──────┴──────┐    ┌──────┴──────┐
                                │ dim_segment │    │  dim_region │
                                └─────────────┘    └─────────────┘

Characteristics:
• Dimensions normalized into sub-tables
• Less data redundancy
• More complex joins
• Slower query performance
• Better for dimension maintenance`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Vault"}
                </h2>
                <p>
                  {"A modeling approach designed for agility and auditability:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Data Vault Components:
├── Hubs      → Business keys (unique identifiers)
├── Links     → Relationships between hubs
└── Satellites → Descriptive attributes with history

┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│  hub_customer│◄───────│link_cust_ord│───────►│  hub_order   │
└──────┬──────┘         └─────────────┘         └──────┬──────┘
       │                                                │
┌──────┴──────┐                                 ┌──────┴──────┐
│sat_customer │                                 │  sat_order  │
│  _details   │                                 │  _details   │
└─────────────┘                                 └─────────────┘`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`-- Hub: Business Keys
CREATE TABLE hub_customer (
    hub_customer_key    BIGINT PRIMARY KEY,
    customer_id         VARCHAR(50) NOT NULL,  -- Business key
    load_date           TIMESTAMP,
    record_source       VARCHAR(100)
);

-- Satellite: Descriptive Attributes (with history)
CREATE TABLE sat_customer_details (
    hub_customer_key    BIGINT REFERENCES hub_customer,
    load_date           TIMESTAMP,
    load_end_date       TIMESTAMP,
    customer_name       VARCHAR(100),
    email               VARCHAR(100),
    phone               VARCHAR(20),
    address             VARCHAR(200),
    record_source       VARCHAR(100),
    PRIMARY KEY (hub_customer_key, load_date)
);

-- Link: Relationships
CREATE TABLE link_customer_order (
    link_cust_ord_key   BIGINT PRIMARY KEY,
    hub_customer_key    BIGINT REFERENCES hub_customer,
    hub_order_key       BIGINT REFERENCES hub_order,
    load_date           TIMESTAMP,
    record_source       VARCHAR(100)
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Choosing the Right Model"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                  When to Use Each Model                         │
├─────────────────────────────────────────────────────────────────┤
│  Star Schema                                                    │
│  ✓ Simple reporting and BI tools                                │
│  ✓ Known, stable requirements                                   │
│  ✓ Query performance is priority                                │
│  ✓ Self-service analytics                                       │
├─────────────────────────────────────────────────────────────────┤
│  Snowflake Schema                                               │
│  ✓ Dimension tables are very large                              │
│  ✓ Storage is a concern                                         │
│  ✓ Dimension data changes frequently                            │
│  ✓ Strict normalization required                                │
├─────────────────────────────────────────────────────────────────┤
│  Data Vault                                                     │
│  ✓ Multiple source systems                                      │
│  ✓ Requirements change frequently                               │
│  ✓ Full audit trail needed                                      │
│  ✓ Agile/iterative development                                  │
│  ✓ Enterprise data warehouse                                    │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Date Dimension Best Practices"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Comprehensive Date Dimension
CREATE TABLE dim_date (
    date_key            INT PRIMARY KEY,        -- YYYYMMDD format
    full_date           DATE NOT NULL,

    -- Day attributes
    day_of_week         INT,                    -- 1-7
    day_name            VARCHAR(10),            -- Monday, Tuesday...
    day_of_month        INT,                    -- 1-31
    day_of_year         INT,                    -- 1-366
    is_weekend          BOOLEAN,
    is_holiday          BOOLEAN,
    holiday_name        VARCHAR(50),

    -- Week attributes
    week_of_year        INT,
    week_of_month       INT,

    -- Month attributes
    month_number        INT,                    -- 1-12
    month_name          VARCHAR(10),            -- January, February...
    month_abbr          VARCHAR(3),             -- Jan, Feb...

    -- Quarter attributes
    quarter             INT,                    -- 1-4
    quarter_name        VARCHAR(10),            -- Q1, Q2...

    -- Year attributes
    year                INT,
    fiscal_year         INT,
    fiscal_quarter      INT,

    -- Relative flags
    is_current_day      BOOLEAN,
    is_current_week     BOOLEAN,
    is_current_month    BOOLEAN
);

-- Generate date dimension (Python/PySpark)
from datetime import date, timedelta
import pandas as pd

def generate_date_dim(start_year, end_year):
    dates = pd.date_range(
        start=f'{start_year}-01-01',
        end=f'{end_year}-12-31',
        freq='D'
    )

    df = pd.DataFrame({'full_date': dates})
    df['date_key'] = df['full_date'].dt.strftime('%Y%m%d').astype(int)
    df['day_of_week'] = df['full_date'].dt.dayofweek + 1
    df['day_name'] = df['full_date'].dt.day_name()
    df['month_number'] = df['full_date'].dt.month
    df['month_name'] = df['full_date'].dt.month_name()
    df['quarter'] = df['full_date'].dt.quarter
    df['year'] = df['full_date'].dt.year
    df['is_weekend'] = df['day_of_week'].isin([6, 7])

    return df`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Surrogate Keys vs Natural Keys"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────┐
│            Surrogate Keys vs Natural Keys                   │
├─────────────────────────────────────────────────────────────┤
│  Natural Key                 │  Surrogate Key              │
│  (Business identifier)       │  (System-generated)         │
├──────────────────────────────┼─────────────────────────────┤
│  product_sku: 'SKU-12345'    │  product_key: 1001          │
│  customer_email: 'a@b.com'   │  customer_key: 5432         │
│  order_number: 'ORD-2024-01' │  order_key: 98765           │
├──────────────────────────────┼─────────────────────────────┤
│  Pros:                       │  Pros:                      │
│  • Meaningful to business    │  • Consistent, small size   │
│  • No lookup needed          │  • Handles key changes      │
│                              │  • Better join performance  │
│  Cons:                       │  • Supports SCD             │
│  • May change over time      │                             │
│  • Variable size/format      │  Cons:                      │
│  • From multiple sources     │  • Requires lookup          │
│                              │  • No business meaning      │
└──────────────────────────────┴─────────────────────────────┘

Best Practice: Use surrogate keys in dimension tables,
              keep natural keys for reference/lookup.`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Grain Definition"}
                </h2>
                <p>
                  {"The grain defines what one row in a fact table represents:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Grain Examples:
├── Sales Fact
│   └── One row per line item in an order
│
├── Daily Inventory Fact
│   └── One row per product per store per day
│
├── Website Clicks Fact
│   └── One row per click event
│
└── Monthly Summary Fact
    └── One row per customer per product per month

Questions to Define Grain:
1. What business process does this fact represent?
2. What is the most atomic level of detail?
3. What dimensions describe each fact row?

-- Example: Defining grain for order fact
-- Grain: One row per order line item

CREATE TABLE fact_order_line (
    order_line_key      BIGINT PRIMARY KEY,
    order_key           BIGINT,
    date_key            INT,
    product_key         INT,
    customer_key        INT,

    -- At this grain, we capture:
    quantity            INT,          -- Per line item
    unit_price          DECIMAL(10,2),
    line_total          DECIMAL(12,2),
    discount_percent    DECIMAL(5,2)
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Define grain first:"}
                    </strong>
                    {" Always start with the grain before adding dimensions"}
                  </li>
                  <li>
                    <strong>
                      {"Use surrogate keys:"}
                    </strong>
                    {" Integer keys for better join performance"}
                  </li>
                  <li>
                    <strong>
                      {"Conformed dimensions:"}
                    </strong>
                    {" Share dimensions across fact tables for consistency"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid null foreign keys:"}
                    </strong>
                    {" Use \"Unknown\" or \"N/A\" dimension rows instead"}
                  </li>
                  <li>
                    <strong>
                      {"Document everything:"}
                    </strong>
                    {" Maintain a data dictionary with business definitions"}
                  </li>
                  <li>
                    <strong>
                      {"Design for queries:"}
                    </strong>
                    {" Model based on how data will be analyzed"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Modeling"}
                </h2>
                <p>
                  {"Our Data Engineering program covers dimensional modeling, data vault, and warehouse design with hands-on projects."}
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
                  <Link href="/data-engineering/articles/data-warehousing" className="related-article-card">
                    <h4>
                      {"Data Warehousing"}
                    </h4>
                    {" "}
                    <p>
                      {"Build analytical warehouses"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/slowly-changing-dimensions" className="related-article-card">
                    <h4>
                      {"SCDs"}
                    </h4>
                    {" "}
                    <p>
                      {"Handle dimension changes"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform data models"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Data Modeling."} />
    </>
  );
}
