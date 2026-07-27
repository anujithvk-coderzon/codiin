import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Snowflake: Cloud Data Warehouse Guide",
  description: "Learn Snowflake - the cloud data warehouse. Master data loading, SQL queries, data sharing, and Snowflake architecture for analytics.",
  keywords: ["Snowflake tutorial", "cloud data warehouse", "Snowflake SQL", "data warehousing", "Snowflake architecture", "SnowSQL"],
  alternates: { canonical: "/data-engineering/articles/snowflake" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/snowflake",
    title: "Snowflake: Cloud Data Warehouse Complete Guide",
    description: "Master Snowflake for modern cloud data warehousing.",
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
  "headline": "Snowflake: Cloud Data Warehouse Complete Guide",
  "description": "Master Snowflake for cloud data warehousing",
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

export default function DataEngineeringSnowflakePage() {
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
                {"Snowflake"}
              </span>
            </div>
            <h1>
              {"Snowflake"}
            </h1>
            <p className="article-subtitle">
              {"The Cloud Data Warehouse Built for the Modern Era"}
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
                  {"What is Snowflake?"}
                </h2>
                <p>
                  {"Snowflake is a cloud-native data warehouse that separates storage and compute, allowing you to scale each independently. Unlike traditional data warehouses, Snowflake requires no hardware management, indexing, or tuning."}
                </p>
                <p>
                  {"It runs on AWS, Azure, and GCP, providing a single platform for data warehousing, data lakes, data engineering, and data sharing."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Snowflake Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    Snowflake Architecture                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              Cloud Services Layer                        │    │
│  │  (Authentication, Metadata, Query Optimization)          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              Virtual Warehouses (Compute)                │    │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │    │
│  │  │   XS    │  │    M    │  │   XL    │  (Scale Up/Down) │    │
│  │  └─────────┘  └─────────┘  └─────────┘                  │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              Storage Layer (Cloud Storage)               │    │
│  │           S3 / Azure Blob / GCS (Compressed)             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Key Benefits:                                                   │
│  • Separate scaling of compute and storage                       │
│  • Pay only for what you use                                     │
│  • Zero management overhead                                      │
│  • Near-unlimited concurrency                                    │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Create a database
CREATE DATABASE analytics_db;
USE DATABASE analytics_db;

-- Create a schema
CREATE SCHEMA staging;
CREATE SCHEMA production;

-- Create a warehouse (compute)
CREATE WAREHOUSE etl_wh
    WAREHOUSE_SIZE = 'MEDIUM'
    AUTO_SUSPEND = 300        -- Suspend after 5 min of inactivity
    AUTO_RESUME = TRUE
    MIN_CLUSTER_COUNT = 1
    MAX_CLUSTER_COUNT = 3;    -- Multi-cluster for concurrency

-- Use the warehouse
USE WAREHOUSE etl_wh;

-- Create a table
CREATE TABLE staging.customers (
    customer_id INT,
    name VARCHAR(100),
    email VARCHAR(200),
    created_at TIMESTAMP_NTZ DEFAULT CURRENT_TIMESTAMP()
);

-- Create table with clustering (for large tables)
CREATE TABLE production.events (
    event_id VARCHAR(36),
    event_type VARCHAR(50),
    user_id INT,
    event_date DATE,
    payload VARIANT
)
CLUSTER BY (event_date, event_type);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Loading Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Create a stage (connection to cloud storage)
CREATE STAGE my_s3_stage
    URL = 's3://my-bucket/data/'
    CREDENTIALS = (AWS_KEY_ID = 'xxx' AWS_SECRET_KEY = 'xxx');

-- Or use Snowflake internal stage
CREATE STAGE my_internal_stage;

-- List files in stage
LIST @my_s3_stage;

-- Create file format
CREATE FILE FORMAT csv_format
    TYPE = 'CSV'
    FIELD_DELIMITER = ','
    SKIP_HEADER = 1
    NULL_IF = ('NULL', 'null', '')
    EMPTY_FIELD_AS_NULL = TRUE;

CREATE FILE FORMAT json_format
    TYPE = 'JSON'
    STRIP_OUTER_ARRAY = TRUE;

-- COPY INTO - Load data from stage
COPY INTO staging.customers
FROM @my_s3_stage/customers/
FILE_FORMAT = csv_format
PATTERN = '.*\\.csv'
ON_ERROR = 'CONTINUE';

-- Load JSON data
COPY INTO staging.events
FROM @my_s3_stage/events/
FILE_FORMAT = json_format;

-- Snowpipe - Continuous data ingestion
CREATE PIPE my_pipe
    AUTO_INGEST = TRUE
AS
COPY INTO staging.customers
FROM @my_s3_stage/customers/
FILE_FORMAT = csv_format;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Querying Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Standard SQL queries
SELECT
    DATE_TRUNC('month', order_date) AS month,
    SUM(amount) AS total_sales,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM production.orders
WHERE order_date >= '2024-01-01'
GROUP BY 1
ORDER BY 1;

-- Query semi-structured data (JSON)
SELECT
    event_id,
    payload:user.name::STRING AS user_name,
    payload:user.email::STRING AS email,
    payload:items[0].product_id::INT AS first_product
FROM staging.events
WHERE payload:event_type = 'purchase';

-- Flatten nested arrays
SELECT
    e.event_id,
    item.value:product_id::INT AS product_id,
    item.value:quantity::INT AS quantity
FROM staging.events e,
LATERAL FLATTEN(input => e.payload:items) AS item;

-- Window functions
SELECT
    customer_id,
    order_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY customer_id
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total,
    ROW_NUMBER() OVER (
        PARTITION BY customer_id
        ORDER BY amount DESC
    ) AS amount_rank
FROM production.orders;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Time Travel & Fail-Safe"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Query data as it was at a specific point
SELECT * FROM customers
AT(TIMESTAMP => '2024-12-20 10:00:00'::TIMESTAMP);

-- Query data from X seconds ago
SELECT * FROM customers
AT(OFFSET => -3600);  -- 1 hour ago

-- Query specific version
SELECT * FROM customers
BEFORE(STATEMENT => '<query_id>');

-- Restore a dropped table
DROP TABLE customers;
UNDROP TABLE customers;

-- Clone a table at a point in time
CREATE TABLE customers_backup
CLONE customers
AT(TIMESTAMP => '2024-12-20 10:00:00'::TIMESTAMP);

-- Set retention period (up to 90 days for Enterprise)
ALTER TABLE customers
SET DATA_RETENTION_TIME_IN_DAYS = 30;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Streams & Tasks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Create a stream to track changes (CDC)
CREATE STREAM customer_changes
ON TABLE staging.customers;

-- View changes
SELECT * FROM customer_changes;
-- Returns: METADATA$ACTION, METADATA$ISUPDATE, METADATA$ROW_ID

-- Create a task (scheduled job)
CREATE TASK process_customer_changes
    WAREHOUSE = etl_wh
    SCHEDULE = 'USING CRON 0 * * * * UTC'  -- Every hour
AS
    MERGE INTO production.customers t
    USING customer_changes s
    ON t.customer_id = s.customer_id
    WHEN MATCHED AND s.METADATA$ACTION = 'DELETE' THEN DELETE
    WHEN MATCHED AND s.METADATA$ACTION = 'INSERT' THEN UPDATE SET
        t.name = s.name,
        t.email = s.email
    WHEN NOT MATCHED AND s.METADATA$ACTION = 'INSERT' THEN INSERT
        (customer_id, name, email)
        VALUES (s.customer_id, s.name, s.email);

-- Resume the task
ALTER TASK process_customer_changes RESUME;

-- Task dependencies (DAG)
CREATE TASK downstream_task
    WAREHOUSE = etl_wh
    AFTER process_customer_changes
AS
    CALL update_aggregates();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Python Integration"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install connector
pip install snowflake-connector-python
pip install snowflake-sqlalchemy

# Using Snowflake connector
import snowflake.connector

conn = snowflake.connector.connect(
    user='your_user',
    password='your_password',
    account='your_account',    # e.g., 'abc123.us-east-1'
    warehouse='etl_wh',
    database='analytics_db',
    schema='production'
)

cursor = conn.cursor()
cursor.execute("SELECT * FROM customers LIMIT 10")
rows = cursor.fetchall()
for row in rows:
    print(row)

cursor.close()
conn.close()

# Using SQLAlchemy
from sqlalchemy import create_engine
import pandas as pd

engine = create_engine(
    'snowflake://{user}:{password}@{account}/{database}/{schema}?warehouse={warehouse}'.format(
        user='your_user',
        password='your_password',
        account='your_account',
        database='analytics_db',
        schema='production',
        warehouse='etl_wh'
    )
)

df = pd.read_sql("SELECT * FROM customers", engine)
print(df.head())

# Write DataFrame to Snowflake
df.to_sql('new_table', engine, index=False, if_exists='replace')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Right-size warehouses:"}
                    </strong>
                    {" Start small, scale up as needed"}
                  </li>
                  <li>
                    <strong>
                      {"Use auto-suspend:"}
                    </strong>
                    {" Save costs when warehouse is idle"}
                  </li>
                  <li>
                    <strong>
                      {"Cluster large tables:"}
                    </strong>
                    {" On frequently filtered columns"}
                  </li>
                  <li>
                    <strong>
                      {"Use stages:"}
                    </strong>
                    {" For efficient bulk loading"}
                  </li>
                  <li>
                    <strong>
                      {"Leverage streams:"}
                    </strong>
                    {" For incremental processing"}
                  </li>
                  <li>
                    <strong>
                      {"Separate warehouses:"}
                    </strong>
                    {" For different workloads (ETL vs reporting)"}
                  </li>
                  <li>
                    <strong>
                      {"Use resource monitors:"}
                    </strong>
                    {" To control costs"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`-- Create resource monitor
CREATE RESOURCE MONITOR monthly_limit
    WITH CREDIT_QUOTA = 1000
    FREQUENCY = MONTHLY
    START_TIMESTAMP = IMMEDIATELY
    TRIGGERS
        ON 75 PERCENT DO NOTIFY
        ON 90 PERCENT DO NOTIFY
        ON 100 PERCENT DO SUSPEND;

-- Apply to warehouse
ALTER WAREHOUSE etl_wh
SET RESOURCE_MONITOR = monthly_limit;`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Snowflake"}
                </h2>
                <p>
                  {"Our Data Engineering program covers Snowflake, cloud warehousing, and modern data platforms."}
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
                      {"Warehouse concepts"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform data in Snowflake"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-modeling" className="related-article-card">
                    <h4>
                      {"Data Modeling"}
                    </h4>
                    {" "}
                    <p>
                      {"Design star schemas"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Connect"}
              </h4>
              <ul>
                <li>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Snowflake."} />
    </>
  );
}
