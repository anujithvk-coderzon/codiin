import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Google BigQuery Guide",
  description: "Learn Google BigQuery - serverless data warehouse for analytics. Master SQL queries, partitioning, clustering, streaming inserts, and GCP data services integration.",
  keywords: ["BigQuery", "Google Cloud", "GCP", "data warehouse", "analytics", "serverless", "SQL analytics", "cloud data"],
  alternates: { canonical: "/data-engineering/articles/bigquery" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/bigquery",
    title: "Google BigQuery: Cloud Data Warehouse",
    description: "Master serverless analytics with Google BigQuery.",
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
  "headline": "Google BigQuery: Cloud Data Warehouse",
  "description": "Complete guide to BigQuery for data engineering",
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

export default function DataEngineeringBigqueryPage() {
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
                {"BigQuery"}
              </span>
            </div>
            <h1>
              {"Google BigQuery"}
            </h1>
            <p className="article-subtitle">
              {"Serverless Cloud Data Warehouse"}
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
                  {"What is BigQuery?"}
                </h2>
                <p>
                  {"Google BigQuery is a fully managed, serverless data warehouse that enables scalable analysis over petabytes of data. It separates storage and compute, allowing you to pay only for what you use."}
                </p>
                <p>
                  {"BigQuery uses a columnar storage format (Capacitor) and a distributed query engine (Dremel) to execute SQL queries across massive datasets in seconds."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"BigQuery Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    BigQuery Architecture                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │                 Dremel Query Engine                       │  │
│   │    - Distributed SQL execution                           │  │
│   │    - Automatic parallelization                           │  │
│   │    - In-memory shuffle                                   │  │
│   └──────────────────────────────────────────────────────────┘  │
│                            │                                     │
│   ┌────────────────────────▼─────────────────────────────────┐  │
│   │                  Colossus Storage                         │  │
│   │    - Columnar format (Capacitor)                         │  │
│   │    - Automatic compression                               │  │
│   │    - Replication & durability                            │  │
│   └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│   Key Concepts:                                                  │
│   ├── Project        (billing & access boundary)                │
│   ├── Dataset        (container for tables, like database)      │
│   ├── Table          (structured data storage)                  │
│   ├── View           (saved query, virtual table)               │
│   ├── Materialized View (cached query results)                  │
│   └── External Table (query data in GCS/Drive)                  │
│                                                                  │
│   Pricing Model:                                                 │
│   ├── Storage: ~$0.02/GB/month (active), $0.01/GB (long-term)  │
│   ├── Queries: $5/TB processed (on-demand)                      │
│   └── Slots: Flat-rate pricing for dedicated capacity          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Python client
pip install google-cloud-bigquery

# Authentication
# Option 1: Service account (recommended for production)
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"

# Option 2: User credentials (development)
gcloud auth application-default login

# Python: Initialize client
from google.cloud import bigquery

client = bigquery.Client(project='your-project-id')

# Create dataset
dataset_id = 'your-project-id.analytics'
dataset = bigquery.Dataset(dataset_id)
dataset.location = 'US'
dataset = client.create_dataset(dataset, exists_ok=True)
print(f'Created dataset {dataset.dataset_id}')

# Create table with schema
table_id = 'your-project-id.analytics.events'
schema = [
    bigquery.SchemaField('event_id', 'STRING', mode='REQUIRED'),
    bigquery.SchemaField('user_id', 'STRING', mode='REQUIRED'),
    bigquery.SchemaField('event_type', 'STRING'),
    bigquery.SchemaField('event_data', 'JSON'),
    bigquery.SchemaField('event_time', 'TIMESTAMP', mode='REQUIRED'),
    bigquery.SchemaField('amount', 'NUMERIC'),
]

table = bigquery.Table(table_id, schema=schema)
table = client.create_table(table, exists_ok=True)
print(f'Created table {table.table_id}')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Loading Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Load from local file
from google.cloud import bigquery

client = bigquery.Client()
table_id = 'project.dataset.events'

# CSV
job_config = bigquery.LoadJobConfig(
    source_format=bigquery.SourceFormat.CSV,
    skip_leading_rows=1,
    autodetect=True,
)
with open('events.csv', 'rb') as f:
    job = client.load_table_from_file(f, table_id, job_config=job_config)
job.result()  # Wait for completion

# JSON (newline-delimited)
job_config = bigquery.LoadJobConfig(
    source_format=bigquery.SourceFormat.NEWLINE_DELIMITED_JSON,
    autodetect=True,
)
job = client.load_table_from_uri(
    'gs://bucket/events/*.json',
    table_id,
    job_config=job_config
)

# Parquet (recommended for large datasets)
job_config = bigquery.LoadJobConfig(
    source_format=bigquery.SourceFormat.PARQUET,
)
job = client.load_table_from_uri(
    'gs://bucket/events/*.parquet',
    table_id,
    job_config=job_config
)

# Load from DataFrame
import pandas as pd

df = pd.DataFrame({
    'event_id': ['e1', 'e2'],
    'user_id': ['u1', 'u2'],
    'event_type': ['click', 'purchase'],
    'event_time': pd.to_datetime(['2024-01-01', '2024-01-02'])
})

job = client.load_table_from_dataframe(df, table_id)
job.result()
print(f'Loaded {job.output_rows} rows')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"SQL Queries"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Basic query
SELECT
    user_id,
    event_type,
    COUNT(*) as event_count,
    SUM(amount) as total_amount
FROM \`project.dataset.events\`
WHERE event_time >= '2024-01-01'
GROUP BY user_id, event_type
ORDER BY total_amount DESC
LIMIT 100;

-- Window functions
SELECT
    user_id,
    event_time,
    amount,
    SUM(amount) OVER (PARTITION BY user_id ORDER BY event_time) as running_total,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY event_time DESC) as event_rank
FROM \`project.dataset.events\`;

-- CTEs for complex queries
WITH daily_stats AS (
    SELECT
        DATE(event_time) as event_date,
        user_id,
        COUNT(*) as events,
        SUM(amount) as revenue
    FROM \`project.dataset.events\`
    WHERE event_type = 'purchase'
    GROUP BY event_date, user_id
),
user_segments AS (
    SELECT
        user_id,
        CASE
            WHEN SUM(revenue) > 1000 THEN 'high_value'
            WHEN SUM(revenue) > 100 THEN 'medium_value'
            ELSE 'low_value'
        END as segment
    FROM daily_stats
    GROUP BY user_id
)
SELECT
    s.segment,
    COUNT(DISTINCT d.user_id) as users,
    SUM(d.revenue) as total_revenue
FROM daily_stats d
JOIN user_segments s ON d.user_id = s.user_id
GROUP BY s.segment;

-- UNNEST arrays
SELECT
    event_id,
    tag
FROM \`project.dataset.events\`,
UNNEST(tags) as tag
WHERE tag LIKE 'promo%';

-- JSON functions
SELECT
    event_id,
    JSON_VALUE(event_data, '$.product_id') as product_id,
    CAST(JSON_VALUE(event_data, '$.quantity') AS INT64) as quantity
FROM \`project.dataset.events\`;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Python Query Execution"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from google.cloud import bigquery
import pandas as pd

client = bigquery.Client()

# Simple query
query = """
    SELECT user_id, COUNT(*) as event_count
    FROM \`project.dataset.events\`
    GROUP BY user_id
    LIMIT 1000
"""
results = client.query(query).to_dataframe()
print(results.head())

# Parameterized query (prevent SQL injection)
query = """
    SELECT *
    FROM \`project.dataset.events\`
    WHERE event_type = @event_type
    AND event_time >= @start_time
"""
job_config = bigquery.QueryJobConfig(
    query_parameters=[
        bigquery.ScalarQueryParameter('event_type', 'STRING', 'purchase'),
        bigquery.ScalarQueryParameter('start_time', 'TIMESTAMP', '2024-01-01'),
    ]
)
results = client.query(query, job_config=job_config).to_dataframe()

# Destination table (save results)
job_config = bigquery.QueryJobConfig(
    destination='project.dataset.aggregated_events',
    write_disposition=bigquery.WriteDisposition.WRITE_TRUNCATE,
)
query_job = client.query(
    "SELECT * FROM \`project.dataset.events\` WHERE amount > 100",
    job_config=job_config
)
query_job.result()

# Dry run (estimate cost)
job_config = bigquery.QueryJobConfig(dry_run=True, use_query_cache=False)
query_job = client.query(query, job_config=job_config)
print(f'Query will process {query_job.total_bytes_processed / 1e9:.2f} GB')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Partitioning & Clustering"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Partitioning reduces query cost by scanning less data

-- Time-partitioned table (most common)
CREATE TABLE \`project.dataset.events_partitioned\`
PARTITION BY DATE(event_time)
CLUSTER BY user_id, event_type
AS SELECT * FROM \`project.dataset.events\`;

-- Integer-range partitioning
CREATE TABLE \`project.dataset.events_by_id\`
PARTITION BY RANGE_BUCKET(user_shard, GENERATE_ARRAY(0, 100, 1))
AS SELECT *, MOD(ABS(FARM_FINGERPRINT(user_id)), 100) as user_shard
FROM \`project.dataset.events\`;

-- Query with partition filter (required if partition filter required is set)
SELECT *
FROM \`project.dataset.events_partitioned\`
WHERE DATE(event_time) = '2024-01-15'  -- Scans only one partition
AND user_id = 'u123';  -- Uses clustering for efficiency

-- Python: Create partitioned table
from google.cloud import bigquery

client = bigquery.Client()
table_id = 'project.dataset.sales_partitioned'

schema = [
    bigquery.SchemaField('sale_id', 'STRING'),
    bigquery.SchemaField('product_id', 'STRING'),
    bigquery.SchemaField('amount', 'NUMERIC'),
    bigquery.SchemaField('sale_date', 'DATE'),
]

table = bigquery.Table(table_id, schema=schema)

# Time partitioning
table.time_partitioning = bigquery.TimePartitioning(
    type_=bigquery.TimePartitioningType.DAY,
    field='sale_date',
    expiration_ms=90 * 24 * 60 * 60 * 1000,  # 90 days retention
)

# Clustering
table.clustering_fields = ['product_id']

# Require partition filter
table.require_partition_filter = True

table = client.create_table(table)
print(f'Created partitioned table {table.table_id}')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Streaming Inserts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from google.cloud import bigquery
from datetime import datetime

client = bigquery.Client()
table_id = 'project.dataset.events'

# Single row insert
rows_to_insert = [
    {
        'event_id': 'e001',
        'user_id': 'u123',
        'event_type': 'purchase',
        'event_time': datetime.utcnow().isoformat(),
        'amount': 99.99
    }
]

errors = client.insert_rows_json(table_id, rows_to_insert)
if errors:
    print(f'Errors: {errors}')
else:
    print('Rows inserted successfully')

# Batch streaming (more efficient)
from google.cloud.bigquery import StreamingBuffer
import json

def stream_events(events, batch_size=500):
    """Stream events in batches"""
    table_id = 'project.dataset.events'

    for i in range(0, len(events), batch_size):
        batch = events[i:i + batch_size]
        errors = client.insert_rows_json(table_id, batch)
        if errors:
            print(f'Batch {i//batch_size} errors: {errors}')
        else:
            print(f'Batch {i//batch_size} inserted: {len(batch)} rows')

# Note: Streaming has buffer delay (~90 seconds)
# For real-time queries, use:
# SELECT * FROM \`project.dataset.events\`
# WHERE _PARTITIONTIME IS NULL  -- Streaming buffer
# UNION ALL
# SELECT * FROM \`project.dataset.events\`
# WHERE _PARTITIONTIME IS NOT NULL  -- Committed data`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Materialized Views"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Materialized views cache query results
-- BigQuery automatically refreshes them

-- Create materialized view
CREATE MATERIALIZED VIEW \`project.dataset.daily_sales_mv\`
OPTIONS (
    enable_refresh = true,
    refresh_interval_minutes = 30
)
AS
SELECT
    DATE(sale_time) as sale_date,
    product_id,
    COUNT(*) as transaction_count,
    SUM(amount) as total_revenue,
    AVG(amount) as avg_order_value
FROM \`project.dataset.sales\`
GROUP BY sale_date, product_id;

-- Query automatically uses MV when beneficial
SELECT *
FROM \`project.dataset.daily_sales_mv\`
WHERE sale_date = '2024-01-15';

-- Force refresh
CALL BQ.REFRESH_MATERIALIZED_VIEW('project.dataset.daily_sales_mv');

-- Python: Create materialized view
client = bigquery.Client()

mv_query = """
    SELECT
        DATE(event_time) as event_date,
        event_type,
        COUNT(*) as count
    FROM \`project.dataset.events\`
    GROUP BY event_date, event_type
"""

mv_id = 'project.dataset.events_summary_mv'
mv = bigquery.Table(mv_id)
mv.mview_query = mv_query
mv.mview_enable_refresh = True
mv.mview_refresh_interval = datetime.timedelta(minutes=60)

mv = client.create_table(mv)
print(f'Created materialized view {mv.table_id}')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GCP Data Integration"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# BigQuery integrates with other GCP services

# 1. Cloud Storage (External Tables)
-- Query data directly from GCS without loading
CREATE EXTERNAL TABLE \`project.dataset.external_logs\`
OPTIONS (
    format = 'PARQUET',
    uris = ['gs://bucket/logs/*.parquet']
);

# 2. Dataflow (Apache Beam)
# Write streaming data to BigQuery
import apache_beam as beam
from apache_beam.io.gcp.bigquery import WriteToBigQuery

pipeline = beam.Pipeline()
(pipeline
    | 'Read' >> beam.io.ReadFromPubSub(topic='projects/proj/topics/events')
    | 'Parse' >> beam.Map(json.loads)
    | 'Write' >> WriteToBigQuery(
        'project:dataset.events',
        schema='event_id:STRING,user_id:STRING,event_time:TIMESTAMP',
        write_disposition=beam.io.BigQueryDisposition.WRITE_APPEND,
        create_disposition=beam.io.BigQueryDisposition.CREATE_IF_NEEDED
    )
)

# 3. Pub/Sub (BigQuery Subscription)
# Direct streaming from Pub/Sub to BigQuery
# gcloud pubsub subscriptions create bq-sub \\
#   --topic=events \\
#   --bigquery-table=project:dataset.events

# 4. Cloud Composer (Airflow)
from airflow.providers.google.cloud.operators.bigquery import (
    BigQueryInsertJobOperator
)

run_query = BigQueryInsertJobOperator(
    task_id='run_aggregation',
    configuration={
        'query': {
            'query': 'SELECT * FROM dataset.events',
            'destinationTable': {
                'projectId': 'project',
                'datasetId': 'dataset',
                'tableId': 'aggregated'
            },
            'writeDisposition': 'WRITE_TRUNCATE'
        }
    }
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"BigQuery ML"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Train ML models using SQL

-- Create a linear regression model
CREATE OR REPLACE MODEL \`project.dataset.revenue_model\`
OPTIONS (
    model_type='LINEAR_REG',
    input_label_cols=['revenue']
) AS
SELECT
    user_tenure_days,
    total_purchases,
    avg_order_value,
    revenue
FROM \`project.dataset.user_features\`;

-- Evaluate model
SELECT *
FROM ML.EVALUATE(MODEL \`project.dataset.revenue_model\`);

-- Make predictions
SELECT
    user_id,
    predicted_revenue
FROM ML.PREDICT(
    MODEL \`project.dataset.revenue_model\`,
    (SELECT * FROM \`project.dataset.new_users\`)
);

-- Classification model
CREATE OR REPLACE MODEL \`project.dataset.churn_model\`
OPTIONS (
    model_type='LOGISTIC_REG',
    input_label_cols=['churned'],
    auto_class_weights=TRUE
) AS
SELECT
    days_since_last_purchase,
    total_orders,
    support_tickets,
    churned
FROM \`project.dataset.user_churn_data\`;

-- Feature importance
SELECT *
FROM ML.FEATURE_IMPORTANCE(MODEL \`project.dataset.churn_model\`)
ORDER BY importance_weight DESC;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cost Optimization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- BigQuery cost optimization strategies

-- 1. Use partitioning and clustering
-- Always filter on partition column

-- 2. Select only needed columns
-- Bad: SELECT * FROM table
-- Good: SELECT col1, col2 FROM table

-- 3. Use LIMIT for exploration (doesn't reduce cost for full table)
-- Use WHERE clause to reduce data scanned

-- 4. Preview queries (dry run)
-- Shows bytes processed before running

-- 5. Use materialized views for repeated aggregations

-- 6. Set up cost controls
-- Project-level quota: bytes processed per day/user

-- Python: Monitor costs
from google.cloud import bigquery

client = bigquery.Client()

# Query to analyze costs
query = """
SELECT
    user_email,
    DATE(creation_time) as query_date,
    COUNT(*) as query_count,
    SUM(total_bytes_processed) / POW(10, 12) as tb_processed,
    SUM(total_bytes_processed) / POW(10, 12) * 5 as estimated_cost_usd
FROM \`region-us\`.INFORMATION_SCHEMA.JOBS
WHERE creation_time > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
    AND job_type = 'QUERY'
GROUP BY user_email, query_date
ORDER BY estimated_cost_usd DESC
"""

costs = client.query(query).to_dataframe()
print(costs.head(20))

# Set custom cost limit per query
job_config = bigquery.QueryJobConfig(
    maximum_bytes_billed=10 * 1024 * 1024 * 1024  # 10 GB limit
)
results = client.query(query, job_config=job_config)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Partition all large tables:"}
                    </strong>
                    {" Reduces query costs significantly"}
                  </li>
                  <li>
                    <strong>
                      {"Cluster frequently filtered columns:"}
                    </strong>
                    {" After partitioning"}
                  </li>
                  <li>
                    <strong>
                      {"Use column selection:"}
                    </strong>
                    {" Avoid SELECT * in production"}
                  </li>
                  <li>
                    <strong>
                      {"Set cost controls:"}
                    </strong>
                    {" Prevent runaway query costs"}
                  </li>
                  <li>
                    <strong>
                      {"Use materialized views:"}
                    </strong>
                    {" For repeated aggregations"}
                  </li>
                  <li>
                    <strong>
                      {"Schedule queries:"}
                    </strong>
                    {" Use BigQuery scheduled queries for ETL"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master BigQuery & GCP"}
                </h2>
                <p>
                  {"Our Data Engineering program covers cloud data warehousing with BigQuery and GCP services."}
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
                  <Link href="/data-engineering/articles/snowflake" className="related-article-card">
                    <h4>
                      {"Snowflake"}
                    </h4>
                    {" "}
                    <p>
                      {"Alternative cloud warehouse"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-modeling" className="related-article-card">
                    <h4>
                      {"Data Modeling"}
                    </h4>
                    {" "}
                    <p>
                      {"Design warehouse schemas"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/terraform" className="related-article-card">
                    <h4>
                      {"Terraform"}
                    </h4>
                    {" "}
                    <p>
                      {"Infrastructure as Code"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn BigQuery."} />
    </>
  );
}
