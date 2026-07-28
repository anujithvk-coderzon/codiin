import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Data Warehousing: Modern Analytics Architecture",
  description: "Learn Data Warehousing - dimensional modeling, star schema, slowly changing dimensions, and modern cloud data warehouses like Snowflake and BigQuery.",
  keywords: ["data warehousing tutorial", "dimensional modeling", "star schema", "Snowflake", "BigQuery", "data warehouse design"],
  alternates: { canonical: "/data-engineering/articles/data-warehousing" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/data-warehousing",
    title: "Data Warehousing: Modern Analytics Architecture",
    description: "Master dimensional modeling and modern cloud data warehouses.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-engineering", label: "Learn Data Engineering", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Data Warehousing: Modern Analytics Architecture",
  "description": "Complete guide to data warehouse design and implementation",
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

export default function DataEngineeringDataWarehousingPage() {
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
                {"Data Warehousing"}
              </span>
            </div>
            <h1>
              {"Data Warehousing"}
            </h1>
            <p className="article-subtitle">
              {"Building Analytics-Ready Data Platforms"}
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
                  {"What is a Data Warehouse?"}
                </h2>
                <p>
                  {"A data warehouse is a centralized repository designed for query and analysis rather than transaction processing. It stores historical data from various sources in a structured format optimized for analytical queries."}
                </p>
                <p>
                  {"Modern cloud data warehouses like Snowflake, BigQuery, and Redshift have revolutionized analytics by separating storage and compute, enabling massive scale and cost efficiency."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Dimensional Modeling"}
                </h2>
                <p>
                  {"Dimensional modeling organizes data into facts (measurements) and dimensions (context):"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Fact Tables:"}
                    </strong>
                    {" Contain measurable, quantitative data (sales, clicks, transactions)"}
                  </li>
                  <li>
                    <strong>
                      {"Dimension Tables:"}
                    </strong>
                    {" Contain descriptive attributes (customers, products, dates)"}
                  </li>
                  <li>
                    <strong>
                      {"Star Schema:"}
                    </strong>
                    {" Fact table in center, dimension tables around it"}
                  </li>
                  <li>
                    <strong>
                      {"Snowflake Schema:"}
                    </strong>
                    {" Normalized dimensions with sub-dimensions"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Star Schema Design"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Fact Table: Sales
CREATE TABLE fact_sales (
    sale_id BIGINT PRIMARY KEY,
    date_key INT REFERENCES dim_date(date_key),
    customer_key INT REFERENCES dim_customer(customer_key),
    product_key INT REFERENCES dim_product(product_key),
    store_key INT REFERENCES dim_store(store_key),
    quantity INT,
    unit_price DECIMAL(10,2),
    total_amount DECIMAL(12,2),
    discount_amount DECIMAL(10,2)
);

-- Dimension Table: Customer
CREATE TABLE dim_customer (
    customer_key INT PRIMARY KEY,
    customer_id VARCHAR(50),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    segment VARCHAR(50),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    -- SCD Type 2 fields
    effective_date DATE,
    end_date DATE,
    is_current BOOLEAN
);

-- Dimension Table: Date
CREATE TABLE dim_date (
    date_key INT PRIMARY KEY,
    full_date DATE,
    day_of_week INT,
    day_name VARCHAR(10),
    month INT,
    month_name VARCHAR(10),
    quarter INT,
    year INT,
    is_weekend BOOLEAN,
    is_holiday BOOLEAN
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Slowly Changing Dimensions (SCD)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- SCD Type 1: Overwrite (lose history)
UPDATE dim_customer
SET email = 'new@email.com'
WHERE customer_id = 'C001';

-- SCD Type 2: Add new row (preserve history)
-- First, close the current record
UPDATE dim_customer
SET end_date = CURRENT_DATE - 1,
    is_current = FALSE
WHERE customer_id = 'C001'
  AND is_current = TRUE;

-- Then insert new record
INSERT INTO dim_customer (
    customer_key, customer_id, first_name, last_name,
    email, segment, effective_date, end_date, is_current
) VALUES (
    NEW_KEY, 'C001', 'John', 'Doe',
    'new@email.com', 'Premium',
    CURRENT_DATE, '9999-12-31', TRUE
);

-- SCD Type 3: Add column for previous value
ALTER TABLE dim_customer
ADD COLUMN previous_segment VARCHAR(50);

UPDATE dim_customer
SET previous_segment = segment,
    segment = 'Premium'
WHERE customer_id = 'C001';`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Modern Cloud Warehouses"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Snowflake Example
-- Create warehouse (compute)
CREATE WAREHOUSE analytics_wh
    WAREHOUSE_SIZE = 'MEDIUM'
    AUTO_SUSPEND = 300
    AUTO_RESUME = TRUE;

-- Create database and schema
CREATE DATABASE analytics;
CREATE SCHEMA analytics.sales;

-- Create table with clustering
CREATE TABLE analytics.sales.fact_orders (
    order_id NUMBER,
    order_date DATE,
    customer_id NUMBER,
    total_amount NUMBER(12,2)
)
CLUSTER BY (order_date);

-- Load data from S3
COPY INTO analytics.sales.fact_orders
FROM 's3://bucket/orders/'
FILE_FORMAT = (TYPE = PARQUET);

-- Time travel query
SELECT * FROM analytics.sales.fact_orders
AT(TIMESTAMP => '2024-01-01 00:00:00'::TIMESTAMP);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"BigQuery Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Create dataset
CREATE SCHEMA \`project.analytics\`;

-- Create partitioned table
CREATE TABLE \`project.analytics.fact_events\`
(
    event_id STRING,
    event_timestamp TIMESTAMP,
    user_id STRING,
    event_type STRING,
    properties JSON
)
PARTITION BY DATE(event_timestamp)
CLUSTER BY user_id, event_type;

-- Query with partition filter
SELECT
    event_type,
    COUNT(*) as event_count
FROM \`project.analytics.fact_events\`
WHERE DATE(event_timestamp) BETWEEN '2024-01-01' AND '2024-01-31'
GROUP BY event_type;

-- Create materialized view
CREATE MATERIALIZED VIEW \`project.analytics.daily_events\`
AS
SELECT
    DATE(event_timestamp) as event_date,
    event_type,
    COUNT(*) as event_count
FROM \`project.analytics.fact_events\`
GROUP BY 1, 2;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"ETL vs ELT"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"ETL (Extract, Transform, Load):"}
                    </strong>
                    {" Transform data before loading into warehouse. Used with traditional warehouses where compute is limited."}
                  </li>
                  <li>
                    <strong>
                      {"ELT (Extract, Load, Transform):"}
                    </strong>
                    {" Load raw data first, transform using warehouse compute. Preferred with modern cloud warehouses."}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`-- ELT Pattern with dbt
-- 1. Load raw data (using Fivetran, Airbyte, etc.)
-- 2. Transform in warehouse

-- models/staging/stg_orders.sql
SELECT
    id as order_id,
    created_at as order_date,
    customer_id,
    CAST(total_cents AS DECIMAL) / 100 as total_amount
FROM {{ source('raw', 'orders') }}

-- models/marts/fct_orders.sql
SELECT
    o.order_id,
    o.order_date,
    c.customer_name,
    o.total_amount,
    SUM(o.total_amount) OVER (
        PARTITION BY o.customer_id
        ORDER BY o.order_date
    ) as cumulative_spend
FROM {{ ref('stg_orders') }} o
JOIN {{ ref('dim_customers') }} c
    ON o.customer_id = c.customer_id`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Performance Optimization"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Partitioning:"}
                    </strong>
                    {" Divide tables by date or category for faster queries"}
                  </li>
                  <li>
                    <strong>
                      {"Clustering:"}
                    </strong>
                    {" Co-locate related data for better scan performance"}
                  </li>
                  <li>
                    <strong>
                      {"Materialized Views:"}
                    </strong>
                    {" Pre-compute expensive aggregations"}
                  </li>
                  <li>
                    <strong>
                      {"Column Statistics:"}
                    </strong>
                    {" Enable query optimizer with accurate stats"}
                  </li>
                  <li>
                    <strong>
                      {"Result Caching:"}
                    </strong>
                    {" Cache query results for repeated queries"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid SELECT *:"}
                    </strong>
                    {" Query only needed columns"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Design for analytics:"}
                    </strong>
                    {" Denormalize for query performance"}
                  </li>
                  <li>
                    <strong>
                      {"Use surrogate keys:"}
                    </strong>
                    {" Don't rely on natural keys from source systems"}
                  </li>
                  <li>
                    <strong>
                      {"Track history:"}
                    </strong>
                    {" Implement SCD Type 2 for important dimensions"}
                  </li>
                  <li>
                    <strong>
                      {"Document everything:"}
                    </strong>
                    {" Maintain data dictionary and lineage"}
                  </li>
                  <li>
                    <strong>
                      {"Test data quality:"}
                    </strong>
                    {" Validate data at every stage"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor costs:"}
                    </strong>
                    {" Track query costs in cloud warehouses"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Warehousing with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers dimensional modeling and modern cloud warehouses. Build analytics platforms with guidance from industry experts."}
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
                  <Link href="/data-engineering/articles/data-lakes" className="related-article-card">
                    <h4>
                      {"Data Lakes"}
                    </h4>
                    {" "}
                    <p>
                      {"Lakehouse architecture"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt for Transformation"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern data modeling"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/sql" className="related-article-card">
                    <h4>
                      {"SQL for Data Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Advanced SQL techniques"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Data Warehousing."} />
    </>
  );
}
