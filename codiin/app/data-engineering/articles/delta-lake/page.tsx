import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Delta Lake: ACID Transactions for Data Lakes",
  description: "Learn Delta Lake - open-source storage layer for data lakes. Master ACID transactions, time travel, schema evolution, and lakehouse architecture.",
  keywords: ["Delta Lake tutorial", "ACID data lake", "time travel", "schema evolution", "lakehouse", "Databricks Delta"],
  alternates: { canonical: "/data-engineering/articles/delta-lake" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/delta-lake",
    title: "Delta Lake: ACID Transactions for Data Lakes",
    description: "Master Delta Lake for reliable data lakehouse architecture.",
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
  "headline": "Delta Lake: ACID Transactions for Data Lakes",
  "description": "Complete guide to Delta Lake and lakehouse architecture",
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

export default function DataEngineeringDeltaLakePage() {
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
                {"Delta Lake"}
              </span>
            </div>
            <h1>
              {"Delta Lake"}
            </h1>
            <p className="article-subtitle">
              {"ACID Transactions and Reliability for Data Lakes"}
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
                  {"What is Delta Lake?"}
                </h2>
                <p>
                  {"Delta Lake is an open-source storage layer that brings ACID transactions to Apache Spark and data lakes. It provides reliability, quality, and performance to your data lake, enabling what's called a \"lakehouse\" architecture."}
                </p>
                <p>
                  {"Originally developed by Databricks, Delta Lake solves common data lake problems like data corruption, failed writes, and inconsistent reads."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Delta Lake?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"ACID Transactions:"}
                    </strong>
                    {" Atomic, consistent, isolated, and durable operations"}
                  </li>
                  <li>
                    <strong>
                      {"Time Travel:"}
                    </strong>
                    {" Query previous versions of your data"}
                  </li>
                  <li>
                    <strong>
                      {"Schema Evolution:"}
                    </strong>
                    {" Handle schema changes gracefully"}
                  </li>
                  <li>
                    <strong>
                      {"Unified Batch & Streaming:"}
                    </strong>
                    {" Same table for both workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Data Versioning:"}
                    </strong>
                    {" Full audit history of changes"}
                  </li>
                  <li>
                    <strong>
                      {"Scalable Metadata:"}
                    </strong>
                    {" Handles billions of files"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Delta Lake
pip install delta-spark

# Configure Spark with Delta Lake
from pyspark.sql import SparkSession

spark = SparkSession.builder \\
    .appName("DeltaLakeDemo") \\
    .config("spark.jars.packages", "io.delta:delta-core_2.12:2.4.0") \\
    .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension") \\
    .config("spark.sql.catalog.spark_catalog", "org.apache.spark.sql.delta.catalog.DeltaCatalog") \\
    .getOrCreate()

# Create a Delta table
data = [
    (1, "Alice", 28, "Engineering"),
    (2, "Bob", 35, "Marketing"),
    (3, "Charlie", 42, "Sales")
]
df = spark.createDataFrame(data, ["id", "name", "age", "department"])

# Write as Delta table
df.write.format("delta").save("/data/employees")

# Or with SQL
spark.sql("""
    CREATE TABLE employees (
        id INT,
        name STRING,
        age INT,
        department STRING
    ) USING DELTA
    LOCATION '/data/employees'
""")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CRUD Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from delta.tables import DeltaTable

# Read Delta table
df = spark.read.format("delta").load("/data/employees")
# Or
df = spark.table("employees")

# Append new data
new_data = [(4, "Diana", 29, "Engineering")]
spark.createDataFrame(new_data, ["id", "name", "age", "department"]) \\
    .write.format("delta").mode("append").save("/data/employees")

# Update records
delta_table = DeltaTable.forPath(spark, "/data/employees")

delta_table.update(
    condition="id = 1",
    set={"age": "29", "department": "'Data Engineering'"}
)

# Delete records
delta_table.delete("age < 30")

# Upsert (Merge) - most powerful operation
new_employees = spark.createDataFrame([
    (1, "Alice", 30, "Data Engineering"),  # Update existing
    (5, "Eve", 26, "Product")              # Insert new
], ["id", "name", "age", "department"])

delta_table.alias("target").merge(
    new_employees.alias("source"),
    "target.id = source.id"
).whenMatchedUpdate(set={
    "name": "source.name",
    "age": "source.age",
    "department": "source.department"
}).whenNotMatchedInsert(values={
    "id": "source.id",
    "name": "source.name",
    "age": "source.age",
    "department": "source.department"
}).execute()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Time Travel"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# View table history
delta_table = DeltaTable.forPath(spark, "/data/employees")
delta_table.history().show()

# +-------+-------------------+------+--------+
# |version|          timestamp|userId|operation|
# +-------+-------------------+------+--------+
# |      3|2024-12-24 10:30:00|  null|   UPDATE|
# |      2|2024-12-24 10:15:00|  null|   DELETE|
# |      1|2024-12-24 10:00:00|  null|    WRITE|
# |      0|2024-12-24 09:45:00|  null|    WRITE|
# +-------+-------------------+------+--------+

# Read specific version
df_v1 = spark.read.format("delta") \\
    .option("versionAsOf", 1) \\
    .load("/data/employees")

# Read at specific timestamp
df_timestamp = spark.read.format("delta") \\
    .option("timestampAsOf", "2024-12-24 10:00:00") \\
    .load("/data/employees")

# SQL syntax
spark.sql("SELECT * FROM employees VERSION AS OF 1")
spark.sql("SELECT * FROM employees TIMESTAMP AS OF '2024-12-24 10:00:00'")

# Restore to previous version
delta_table.restoreToVersion(1)
# Or
delta_table.restoreToTimestamp("2024-12-24 10:00:00")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Schema Evolution"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Add new columns automatically
new_data_with_column = spark.createDataFrame([
    (6, "Frank", 33, "HR", "frank@company.com")
], ["id", "name", "age", "department", "email"])

# Schema merge during write
new_data_with_column.write \\
    .format("delta") \\
    .mode("append") \\
    .option("mergeSchema", "true") \\
    .save("/data/employees")

# Enable auto schema evolution globally
spark.conf.set("spark.databricks.delta.schema.autoMerge.enabled", "true")

# Change column type (with care!)
spark.sql("""
    ALTER TABLE employees
    ALTER COLUMN age TYPE BIGINT
""")

# Add column with SQL
spark.sql("""
    ALTER TABLE employees
    ADD COLUMN hire_date DATE
""")

# View schema
delta_table.toDF().printSchema()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Medallion Architecture"}
                </h2>
                <p>
                  {"Delta Lake enables the popular Bronze-Silver-Gold data organization:"}
                </p>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    Medallion Architecture                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                   │
│  │  Bronze  │───▶│  Silver  │───▶│   Gold   │                   │
│  │   Layer  │    │   Layer  │    │   Layer  │                   │
│  └──────────┘    └──────────┘    └──────────┘                   │
│                                                                  │
│  Raw Data        Cleaned &       Aggregated &                    │
│  As-Is           Validated       Business-Ready                  │
├─────────────────────────────────────────────────────────────────┤
│  Bronze: Raw ingestion, preserve source format                   │
│  Silver: Cleaned, deduplicated, standardized                     │
│  Gold: Aggregated, denormalized for reporting                    │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`# Bronze Layer - Raw ingestion
raw_data = spark.read.json("/raw/events/")
raw_data.write \\
    .format("delta") \\
    .mode("append") \\
    .save("/delta/bronze/events")

# Silver Layer - Cleaned data
bronze_df = spark.read.format("delta").load("/delta/bronze/events")

silver_df = bronze_df \\
    .dropDuplicates(["event_id"]) \\
    .filter("event_type IS NOT NULL") \\
    .withColumn("processed_at", current_timestamp())

silver_df.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save("/delta/silver/events")

# Gold Layer - Aggregated for reporting
silver_df = spark.read.format("delta").load("/delta/silver/events")

gold_df = silver_df \\
    .groupBy("date", "event_type") \\
    .agg(
        count("*").alias("event_count"),
        countDistinct("user_id").alias("unique_users")
    )

gold_df.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save("/delta/gold/event_summary")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Optimization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Optimize (compact small files)
delta_table.optimize().executeCompaction()

# Optimize with Z-Order (co-locate related data)
delta_table.optimize().executeZOrderBy("date", "customer_id")

# Vacuum (remove old files)
# Default retention is 7 days
delta_table.vacuum()        # Use default retention
delta_table.vacuum(168)     # 168 hours = 7 days

# Shorter retention (use with caution!)
spark.conf.set("spark.databricks.delta.retentionDurationCheck.enabled", "false")
delta_table.vacuum(0)  # Remove all old files immediately

# Auto-optimize settings
spark.conf.set("spark.databricks.delta.optimizeWrite.enabled", "true")
spark.conf.set("spark.databricks.delta.autoCompact.enabled", "true")

# Analyze table for statistics
spark.sql("ANALYZE TABLE employees COMPUTE STATISTICS")

# Check table details
spark.sql("DESCRIBE DETAIL employees").show()
spark.sql("DESCRIBE HISTORY employees").show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Streaming with Delta"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Delta as streaming source
stream_df = spark.readStream \\
    .format("delta") \\
    .load("/delta/silver/events")

# Delta as streaming sink
query = stream_df \\
    .writeStream \\
    .format("delta") \\
    .outputMode("append") \\
    .option("checkpointLocation", "/checkpoints/gold") \\
    .start("/delta/gold/events")

# Process changes only (CDC)
stream_df = spark.readStream \\
    .format("delta") \\
    .option("readChangeFeed", "true") \\
    .option("startingVersion", 0) \\
    .load("/delta/silver/events")

# Change data includes _change_type column:
# insert, update_preimage, update_postimage, delete`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Partition wisely:"}
                    </strong>
                    {" Use date columns, avoid high cardinality"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize regularly:"}
                    </strong>
                    {" Compact small files to improve read performance"}
                  </li>
                  <li>
                    <strong>
                      {"Use Z-Ordering:"}
                    </strong>
                    {" For columns frequently used in filters"}
                  </li>
                  <li>
                    <strong>
                      {"Set retention:"}
                    </strong>
                    {" Configure vacuum retention based on needs"}
                  </li>
                  <li>
                    <strong>
                      {"Enable auto-optimize:"}
                    </strong>
                    {" For write-heavy workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor table size:"}
                    </strong>
                    {" Use DESCRIBE DETAIL to track growth"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Delta Lake"}
                </h2>
                <p>
                  {"Our Data Engineering program covers Delta Lake, lakehouse architecture, and modern data platforms."}
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
                  <Link href="/data-engineering/articles/apache-spark" className="related-article-card">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Big data processing"}
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
                  <Link href="/data-engineering/articles/medallion-architecture" className="related-article-card">
                    <h4>
                      {"Medallion Architecture"}
                    </h4>
                    {" "}
                    <p>
                      {"Bronze/Silver/Gold pattern"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Delta Lake."} />
    </>
  );
}
