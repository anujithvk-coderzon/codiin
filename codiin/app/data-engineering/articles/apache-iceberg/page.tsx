import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Apache Iceberg: Data Lake Table Format",
  description: "Learn Apache Iceberg - open table format for data lakes. Master ACID transactions, schema evolution, time travel, and hidden partitioning.",
  keywords: ["Apache Iceberg", "table format", "data lakehouse", "ACID transactions", "schema evolution", "time travel", "partitioning"],
  alternates: { canonical: "/data-engineering/articles/apache-iceberg" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/apache-iceberg",
    title: "Apache Iceberg: Open Table Format for Data Lakes",
    description: "Master Apache Iceberg for reliable data lakehouses.",
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
  "headline": "Apache Iceberg: Open Table Format for Data Lakes",
  "description": "Complete guide to Apache Iceberg",
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

export default function DataEngineeringApacheIcebergPage() {
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
                {"Apache Iceberg"}
              </span>
            </div>
            <h1>
              {"Apache Iceberg"}
            </h1>
            <p className="article-subtitle">
              {"Open Table Format for Huge Analytic Datasets"}
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
                  {"What is Apache Iceberg?"}
                </h2>
                <p>
                  {"Apache Iceberg is an open table format for huge analytic datasets. Originally developed at Netflix, Iceberg provides reliable tables with ACID transactions, schema evolution, and time travel capabilities."}
                </p>
                <p>
                  {"Unlike Hive tables that depend on directories and file listings, Iceberg tracks individual files and their metadata, enabling much faster query planning and reliable transactions."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Iceberg vs Delta Lake vs Hudi"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│              Table Format Comparison                             │
├─────────────────────────────────────────────────────────────────┤
│ Feature           │ Iceberg  │ Delta Lake │ Hudi     │ Hive     │
├───────────────────┼──────────┼────────────┼──────────┼──────────┤
│ ACID Transactions │    ✓     │     ✓      │    ✓     │    ✗     │
│ Time Travel       │    ✓     │     ✓      │    ✓     │    ✗     │
│ Schema Evolution  │    ✓     │     ✓      │    ✓     │  Limited │
│ Hidden Partition  │    ✓     │     ✗      │    ✗     │    ✗     │
│ Engine Agnostic   │    ✓     │   Limited  │    ✓     │    ✓     │
│ Row-Level Deletes │    ✓     │     ✓      │    ✓     │    ✗     │
│ Concurrent Writes │    ✓     │     ✓      │    ✓     │    ✗     │
├───────────────────┴──────────┴────────────┴──────────┴──────────┤
│                                                                  │
│ Iceberg strengths:                                               │
│ • Truly open format (works with Spark, Flink, Trino, Dremio)    │
│ • Hidden partitioning (no partition columns in queries)         │
│ • Partition evolution without rewriting data                     │
│ • Excellent for very large tables (petabyte scale)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with Spark"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql import SparkSession

# Configure Spark with Iceberg
spark = SparkSession.builder \\
    .appName("IcebergDemo") \\
    .config("spark.jars.packages", "org.apache.iceberg:iceberg-spark-runtime-3.5_2.12:1.4.0") \\
    .config("spark.sql.extensions", "org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions") \\
    .config("spark.sql.catalog.demo", "org.apache.iceberg.spark.SparkCatalog") \\
    .config("spark.sql.catalog.demo.type", "hadoop") \\
    .config("spark.sql.catalog.demo.warehouse", "s3://my-bucket/warehouse") \\
    .getOrCreate()

# Create database
spark.sql("CREATE DATABASE IF NOT EXISTS demo.analytics")

# Create Iceberg table
spark.sql("""
    CREATE TABLE demo.analytics.events (
        event_id STRING,
        user_id STRING,
        event_type STRING,
        event_time TIMESTAMP,
        properties MAP<STRING, STRING>
    )
    USING iceberg
    PARTITIONED BY (days(event_time))
""")

# Insert data
df = spark.createDataFrame([
    ("e1", "u1", "click", "2024-12-24 10:00:00", {"page": "home"}),
    ("e2", "u2", "purchase", "2024-12-24 11:00:00", {"amount": "99.99"})
], ["event_id", "user_id", "event_type", "event_time", "properties"])

df.writeTo("demo.analytics.events").append()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Hidden Partitioning"}
                </h2>
                <p>
                  {"Iceberg's killer feature - partition values are derived from data, not exposed to users."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Create table with hidden partitioning
CREATE TABLE demo.analytics.logs (
    log_id STRING,
    message STRING,
    log_time TIMESTAMP,
    level STRING
)
USING iceberg
PARTITIONED BY (
    days(log_time),      -- Partition by day
    bucket(16, log_id)   -- Hash bucket for even distribution
)

-- Query WITHOUT specifying partition columns!
-- Iceberg figures out partitions automatically
SELECT * FROM demo.analytics.logs
WHERE log_time BETWEEN '2024-12-01' AND '2024-12-31'
  AND level = 'ERROR'

-- Benefits:
-- 1. Users don't need to know partition scheme
-- 2. Partition scheme can change without breaking queries
-- 3. No partition columns cluttering results

-- Partition transforms available:
-- years(ts)      → Extract year
-- months(ts)     → Extract year-month
-- days(ts)       → Extract date
-- hours(ts)      → Extract hour
-- bucket(n, col) → Hash into n buckets
-- truncate(w, s) → Truncate string to width w`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Schema Evolution"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Add new column
ALTER TABLE demo.analytics.events
ADD COLUMN browser STRING

-- Rename column
ALTER TABLE demo.analytics.events
RENAME COLUMN properties TO metadata

-- Change column type (safe widening only)
ALTER TABLE demo.analytics.events
ALTER COLUMN user_id TYPE BIGINT

-- Drop column
ALTER TABLE demo.analytics.events
DROP COLUMN browser

-- Reorder columns
ALTER TABLE demo.analytics.events
ALTER COLUMN event_type AFTER user_id

-- Make column required/optional
ALTER TABLE demo.analytics.events
ALTER COLUMN user_id SET NOT NULL

ALTER TABLE demo.analytics.events
ALTER COLUMN user_id DROP NOT NULL

-- Schema evolution is tracked in metadata
-- Old data files are NOT rewritten`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Time Travel"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# View table history
spark.sql("SELECT * FROM demo.analytics.events.history").show()
# +------------------+-------------------+---------+
# |     made_current |     snapshot_id   | parent_id|
# +------------------+-------------------+---------+
# | 2024-12-24 10:00 | 1234567890123456  |   null  |
# | 2024-12-24 12:00 | 1234567890123457  |  ...    |
# +------------------+-------------------+---------+

# Read at specific snapshot
spark.sql("""
    SELECT * FROM demo.analytics.events
    VERSION AS OF 1234567890123456
""")

# Read at specific timestamp
spark.sql("""
    SELECT * FROM demo.analytics.events
    TIMESTAMP AS OF '2024-12-24 10:00:00'
""")

# Rollback to previous version
spark.sql("""
    CALL demo.system.rollback_to_snapshot('analytics.events', 1234567890123456)
""")

# Cherry-pick changes from a snapshot
spark.sql("""
    CALL demo.system.cherrypick_snapshot('analytics.events', 1234567890123457)
""")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Maintenance"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Expire old snapshots (keep last 5 days)
spark.sql("""
    CALL demo.system.expire_snapshots(
        table => 'analytics.events',
        older_than => TIMESTAMP '2024-12-19 00:00:00',
        retain_last => 10
    )
""")

# Remove orphan files (not referenced by any snapshot)
spark.sql("""
    CALL demo.system.remove_orphan_files(
        table => 'analytics.events',
        older_than => TIMESTAMP '2024-12-20 00:00:00'
    )
""")

# Compact small files
spark.sql("""
    CALL demo.system.rewrite_data_files(
        table => 'analytics.events',
        options => map('target-file-size-bytes', '134217728')  -- 128MB
    )
""")

# Rewrite manifests (improve query planning)
spark.sql("""
    CALL demo.system.rewrite_manifests('analytics.events')
""")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Row-Level Updates & Deletes"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Delete rows
DELETE FROM demo.analytics.events
WHERE event_type = 'test'
  AND event_time < '2024-01-01'

-- Update rows
UPDATE demo.analytics.events
SET event_type = 'page_view'
WHERE event_type = 'view'

-- Merge (upsert)
MERGE INTO demo.analytics.events t
USING staging.new_events s
ON t.event_id = s.event_id
WHEN MATCHED THEN
    UPDATE SET t.properties = s.properties
WHEN NOT MATCHED THEN
    INSERT *

-- Iceberg uses two deletion strategies:
-- 1. Copy-on-write (COW): Rewrite affected files
-- 2. Merge-on-read (MOR): Write delete files, merge at read time

-- Configure write mode
ALTER TABLE demo.analytics.events
SET TBLPROPERTIES (
    'write.delete.mode' = 'merge-on-read',
    'write.update.mode' = 'merge-on-read'
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Partition Evolution"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Start with monthly partitioning
CREATE TABLE demo.analytics.sales (
    sale_id STRING,
    amount DECIMAL(10,2),
    sale_time TIMESTAMP
) USING iceberg
PARTITIONED BY (months(sale_time))

-- Later, evolve to daily partitioning
-- NO data rewrite needed!
ALTER TABLE demo.analytics.sales
ADD PARTITION FIELD days(sale_time)

-- Remove old partition scheme
ALTER TABLE demo.analytics.sales
DROP PARTITION FIELD months(sale_time)

-- Iceberg handles both partition schemes:
-- - Old files: queried using monthly partition
-- - New files: written with daily partition
-- - Queries work transparently on both`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use hidden partitioning:"}
                    </strong>
                    {" Let Iceberg manage partitions"}
                  </li>
                  <li>
                    <strong>
                      {"Right-size files:"}
                    </strong>
                    {" Target 128MB-512MB per file"}
                  </li>
                  <li>
                    <strong>
                      {"Compact regularly:"}
                    </strong>
                    {" Run rewrite_data_files to merge small files"}
                  </li>
                  <li>
                    <strong>
                      {"Expire snapshots:"}
                    </strong>
                    {" Clean up old metadata to save storage"}
                  </li>
                  <li>
                    <strong>
                      {"Use MOR for frequent updates:"}
                    </strong>
                    {" Merge-on-read for write-heavy tables"}
                  </li>
                  <li>
                    <strong>
                      {"Partition by time:"}
                    </strong>
                    {" days(ts) or hours(ts) for time-series data"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Apache Iceberg"}
                </h2>
                <p>
                  {"Our Data Engineering program covers modern table formats and lakehouse architecture."}
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
                      {"Alternative table format"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-lakes" className="related-article-card">
                    <h4>
                      {"Data Lakes"}
                    </h4>
                    {" "}
                    <p>
                      {"Lake architecture"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-spark" className="related-article-card">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Processing engine"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Apache Iceberg."} />
    </>
  );
}
