import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Databricks: Unified Analytics Platform",
  description: "Learn Databricks - unified analytics platform. Master Spark, Delta Lake, MLflow, and lakehouse architecture on Databricks.",
  keywords: ["Databricks tutorial", "lakehouse", "Unity Catalog", "Databricks notebooks", "Delta Lake", "MLflow", "Spark on Databricks"],
  alternates: { canonical: "/data-engineering/articles/databricks" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/databricks",
    title: "Databricks: Unified Analytics Platform",
    description: "Master Databricks for data engineering and analytics.",
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
  "headline": "Databricks: Unified Analytics Platform",
  "description": "Complete guide to Databricks platform",
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

export default function DataEngineeringDatabricksPage() {
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
                {"Databricks"}
              </span>
            </div>
            <h1>
              {"Databricks"}
            </h1>
            <p className="article-subtitle">
              {"The Unified Analytics Platform for Data and AI"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"18 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Databricks?"}
                </h2>
                <p>
                  {"Databricks is a unified analytics platform that combines data engineering, data science, and machine learning on a single platform. Founded by the creators of Apache Spark, it provides a managed Spark environment with additional tools for the entire data lifecycle."}
                </p>
                <p>
                  {"Databricks pioneered the \"lakehouse\" architecture, combining the best of data lakes and data warehouses."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Databricks Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    Databricks Lakehouse                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                   Unity Catalog                          │    │
│  │         (Governance, Security, Data Discovery)           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Workspaces                            │    │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │    │
│  │  │Notebooks│  │  Jobs   │  │ Repos   │  │Workflows│    │    │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Compute Layer                         │    │
│  │  ┌─────────────────┐  ┌─────────────────┐               │    │
│  │  │  All-Purpose    │  │   Job Clusters  │               │    │
│  │  │   Clusters      │  │   (Auto-scale)  │               │    │
│  │  └─────────────────┘  └─────────────────┘               │    │
│  │  ┌─────────────────┐  ┌─────────────────┐               │    │
│  │  │   SQL Warehouse │  │  Serverless     │               │    │
│  │  │   (Analytics)   │  │   Compute       │               │    │
│  │  └─────────────────┘  └─────────────────┘               │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            │                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              Delta Lake (Storage Layer)                  │    │
│  │              Cloud Storage (S3/ADLS/GCS)                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Databricks Notebooks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Databricks notebook basics
# Notebooks support Python, Scala, SQL, R

# Magic commands
%python   # Switch to Python
%sql      # Switch to SQL
%scala    # Switch to Scala
%md       # Markdown cell
%run      # Run another notebook
%fs       # File system commands

# Read data
df = spark.read.format("delta").load("/mnt/data/customers")
df.display()  # Databricks-specific display

# SQL in notebook
%sql
SELECT * FROM customers
WHERE created_at > '2024-01-01'
LIMIT 100

# Create widgets (parameters)
dbutils.widgets.text("start_date", "2024-01-01")
dbutils.widgets.dropdown("environment", "dev", ["dev", "staging", "prod"])

# Use widget values
start_date = dbutils.widgets.get("start_date")
environment = dbutils.widgets.get("environment")

# File system operations
dbutils.fs.ls("/mnt/data/")
dbutils.fs.head("/mnt/data/sample.csv")
dbutils.fs.cp("/source/", "/destination/", recurse=True)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Delta Lake on Databricks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create Delta table
df.write.format("delta").saveAsTable("bronze.raw_events")

# Read Delta table
events = spark.table("bronze.raw_events")

# SQL operations on Delta
%sql
-- Create managed table
CREATE TABLE silver.customers (
    customer_id STRING,
    name STRING,
    email STRING,
    created_at TIMESTAMP
) USING DELTA
PARTITIONED BY (date(created_at))

-- Insert data
INSERT INTO silver.customers
SELECT * FROM bronze.raw_customers

-- Merge (upsert)
MERGE INTO silver.customers AS target
USING staging.new_customers AS source
ON target.customer_id = source.customer_id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *

-- Time travel
SELECT * FROM silver.customers VERSION AS OF 5
SELECT * FROM silver.customers TIMESTAMP AS OF '2024-12-20'

-- Optimize
OPTIMIZE silver.customers ZORDER BY (customer_id)

-- Vacuum old files
VACUUM silver.customers RETAIN 168 HOURS`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Unity Catalog"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Unity Catalog - Unified governance for all data assets

%sql
-- Three-level namespace: catalog.schema.table
USE CATALOG main;
USE SCHEMA production;

-- Create catalog
CREATE CATALOG analytics;
CREATE SCHEMA analytics.sales;

-- Grant permissions
GRANT USAGE ON CATALOG analytics TO \`data-engineers\`;
GRANT SELECT ON SCHEMA analytics.sales TO \`analysts\`;
GRANT ALL PRIVILEGES ON TABLE analytics.sales.orders TO \`admin\`;

-- View permissions
SHOW GRANTS ON TABLE analytics.sales.orders;

-- Data lineage (automatic)
-- Unity Catalog tracks:
-- - Which tables read from which sources
-- - Which notebooks/jobs touch which tables
-- - Column-level lineage

-- Tag data for governance
ALTER TABLE analytics.sales.customers
SET TAGS ('pii' = 'true', 'retention' = '7years');

-- Search for tagged assets
SELECT * FROM system.information_schema.table_tags
WHERE tag_name = 'pii';`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Workflows & Jobs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create a job via API or UI
# Jobs can run notebooks, Python scripts, JARs, SQL

# Example: Multi-task job (DAG)
{
    "name": "daily_etl_pipeline",
    "tasks": [
        {
            "task_key": "extract_raw",
            "notebook_task": {
                "notebook_path": "/Repos/etl/extract_raw"
            },
            "new_cluster": {
                "spark_version": "13.3.x-scala2.12",
                "node_type_id": "i3.xlarge",
                "num_workers": 2
            }
        },
        {
            "task_key": "transform_silver",
            "depends_on": [{"task_key": "extract_raw"}],
            "notebook_task": {
                "notebook_path": "/Repos/etl/transform_silver",
                "base_parameters": {
                    "date": "{{job.start_time.iso_date}}"
                }
            }
        },
        {
            "task_key": "aggregate_gold",
            "depends_on": [{"task_key": "transform_silver"}],
            "notebook_task": {
                "notebook_path": "/Repos/etl/aggregate_gold"
            }
        }
    ],
    "schedule": {
        "quartz_cron_expression": "0 0 6 * * ?",
        "timezone_id": "UTC"
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"SQL Warehouse"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Databricks SQL for BI and analytics workloads

-- Create SQL Warehouse via UI or API
-- Serverless or Pro options available

-- Connect BI tools (Tableau, Power BI, Looker)
-- via JDBC/ODBC using warehouse endpoint

-- Example queries optimized for SQL Warehouse
SELECT
    DATE_TRUNC('month', order_date) AS month,
    product_category,
    SUM(revenue) AS total_revenue,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM gold.sales_summary
WHERE order_date >= '2024-01-01'
GROUP BY 1, 2
ORDER BY month, total_revenue DESC;

-- Create dashboard queries
-- Save as SQL queries in SQL Editor
-- Build dashboards with visualizations

-- Query Federation (query external sources)
CREATE CONNECTION my_postgres
    TYPE postgresql
    OPTIONS (
        host 'postgres.example.com',
        port '5432',
        user secret('postgres-creds', 'username'),
        password secret('postgres-creds', 'password')
    );

CREATE FOREIGN TABLE external.customers
    OPTIONS (dbtable 'public.customers')
    USING postgresql
    CONNECTION my_postgres;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"MLflow on Databricks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import mlflow
from sklearn.ensemble import RandomForestClassifier

# MLflow is built into Databricks
# Auto-logging enabled by default

# Train and log model
with mlflow.start_run():
    # Log parameters
    mlflow.log_param("n_estimators", 100)
    mlflow.log_param("max_depth", 10)

    # Train model
    model = RandomForestClassifier(n_estimators=100, max_depth=10)
    model.fit(X_train, y_train)

    # Log metrics
    accuracy = model.score(X_test, y_test)
    mlflow.log_metric("accuracy", accuracy)

    # Log model
    mlflow.sklearn.log_model(model, "model")

# Register model to Unity Catalog
mlflow.register_model(
    "runs:/abc123/model",
    "main.ml_models.customer_churn"
)

# Deploy model as endpoint
# Via UI or API, create serving endpoint
# Models auto-scale based on traffic`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use Unity Catalog:"}
                    </strong>
                    {" Centralized governance from day one"}
                  </li>
                  <li>
                    <strong>
                      {"Medallion architecture:"}
                    </strong>
                    {" Bronze/Silver/Gold for data organization"}
                  </li>
                  <li>
                    <strong>
                      {"Job clusters:"}
                    </strong>
                    {" Use job clusters for production, all-purpose for dev"}
                  </li>
                  <li>
                    <strong>
                      {"Repos:"}
                    </strong>
                    {" Version control notebooks with Git integration"}
                  </li>
                  <li>
                    <strong>
                      {"Secrets:"}
                    </strong>
                    {" Never hardcode credentials, use secret scopes"}
                  </li>
                  <li>
                    <strong>
                      {"Photon:"}
                    </strong>
                    {" Enable for faster SQL and Delta operations"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Databricks"}
                </h2>
                <p>
                  {"Our Data Engineering program covers Databricks, lakehouse architecture, and production data platforms."}
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
                  <Link href="/data-engineering/articles/delta-lake" className="related-article-card">
                    <h4>
                      {"Delta Lake"}
                    </h4>
                    {" "}
                    <p>
                      {"ACID on data lakes"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-spark" className="related-article-card">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Big data processing"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/medallion-architecture" className="related-article-card">
                    <h4>
                      {"Medallion Architecture"}
                    </h4>
                    {" "}
                    <p>
                      {"Data organization"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Databricks."} />
    </>
  );
}
