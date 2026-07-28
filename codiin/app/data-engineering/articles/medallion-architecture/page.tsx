import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Medallion Architecture: Bronze, Silver, Gold",
  description: "Learn Medallion Architecture - Bronze, Silver, Gold data layers. Master the modern data lakehouse pattern for organizing data pipelines.",
  keywords: ["Medallion architecture", "Bronze Silver Gold", "data lakehouse", "data layers", "Delta Lake architecture", "data organization"],
  alternates: { canonical: "/data-engineering/articles/medallion-architecture" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/medallion-architecture",
    title: "Medallion Architecture: Bronze, Silver, Gold Pattern",
    description: "Master the medallion architecture for data lakehouses.",
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
  "headline": "Medallion Architecture: Bronze, Silver, Gold Pattern",
  "description": "Complete guide to medallion architecture",
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

export default function DataEngineeringMedallionArchitecturePage() {
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
                {"Medallion Architecture"}
              </span>
            </div>
            <h1>
              {"Medallion Architecture"}
            </h1>
            <p className="article-subtitle">
              {"Organizing Data with Bronze, Silver, and Gold Layers"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"15 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Medallion Architecture?"}
                </h2>
                <p>
                  {"Medallion architecture is a data design pattern used to logically organize data in a lakehouse. It consists of three layers - Bronze, Silver, and Gold - each serving a specific purpose in the data refinement process."}
                </p>
                <p>
                  {"This pattern provides a clear framework for incrementally improving data quality as it flows through each layer."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"The Three Layers"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    Medallion Architecture                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                     DATA SOURCES                         │    │
│  │     APIs    Databases    Files    Streams    IoT         │    │
│  └───────────────────────────┬─────────────────────────────┘    │
│                              │                                   │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  🥉 BRONZE LAYER (Raw)                                   │    │
│  │  • Raw data as-is from source                            │    │
│  │  • Append-only, immutable                                │    │
│  │  • Preserve source format and schema                     │    │
│  │  • Add metadata: ingestion time, source, batch ID        │    │
│  └───────────────────────────┬─────────────────────────────┘    │
│                              │                                   │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  🥈 SILVER LAYER (Cleansed)                              │    │
│  │  • Cleaned and validated data                            │    │
│  │  • Deduplicated records                                  │    │
│  │  • Standardized formats (dates, types)                   │    │
│  │  • Business rules applied                                │    │
│  │  • Conformed dimensions                                  │    │
│  └───────────────────────────┬─────────────────────────────┘    │
│                              │                                   │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  🥇 GOLD LAYER (Business-Ready)                          │    │
│  │  • Aggregated and enriched                               │    │
│  │  • Denormalized for performance                          │    │
│  │  • Business-level entities                               │    │
│  │  • Ready for reporting and ML                            │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Bronze Layer"}
                </h2>
                <p>
                  {"The landing zone for raw data. Keep it simple - just get the data in."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Bronze Layer Example
from pyspark.sql.functions import current_timestamp, lit, input_file_name

# Ingest raw data with metadata
raw_events = spark.read.json("/raw/events/2024-12-24/*.json")

bronze_events = raw_events \\
    .withColumn("_ingestion_timestamp", current_timestamp()) \\
    .withColumn("_source_file", input_file_name()) \\
    .withColumn("_batch_id", lit("batch_20241224_001"))

# Save to Bronze layer (append-only)
bronze_events.write \\
    .format("delta") \\
    .mode("append") \\
    .partitionBy("_ingestion_date") \\
    .save("/delta/bronze/events")

# Bronze table structure
"""
bronze.events
├── event_payload (original JSON as string or struct)
├── _ingestion_timestamp
├── _source_file
├── _batch_id
└── _ingestion_date (partition column)
"""

# Key principles:
# - Never modify or delete data
# - Keep original schema
# - Add metadata columns (prefix with _)
# - Partition by ingestion date for manageability`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Silver Layer"}
                </h2>
                <p>
                  {"Clean, deduplicate, and standardize. This is where data quality happens."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Silver Layer Example
from pyspark.sql.functions import col, when, to_timestamp, trim, lower
from pyspark.sql.window import Window

# Read from Bronze
bronze_df = spark.read.format("delta").load("/delta/bronze/events")

# 1. Parse and flatten
silver_df = bronze_df.select(
    col("event_id"),
    col("user_id"),
    col("event_type"),
    to_timestamp(col("event_timestamp")).alias("event_time"),
    col("properties.product_id").alias("product_id"),
    col("properties.amount").cast("decimal(10,2)").alias("amount")
)

# 2. Clean and standardize
silver_df = silver_df \\
    .filter(col("event_id").isNotNull()) \\
    .withColumn("event_type", lower(trim(col("event_type")))) \\
    .withColumn("amount", when(col("amount") < 0, 0).otherwise(col("amount")))

# 3. Deduplicate (keep latest)
window = Window.partitionBy("event_id").orderBy(col("_ingestion_timestamp").desc())
silver_df = silver_df \\
    .withColumn("row_num", row_number().over(window)) \\
    .filter(col("row_num") == 1) \\
    .drop("row_num")

# 4. Add silver metadata
silver_df = silver_df \\
    .withColumn("_silver_timestamp", current_timestamp()) \\
    .withColumn("_is_valid", lit(True))

# 5. Merge into Silver table
from delta.tables import DeltaTable

if DeltaTable.isDeltaTable(spark, "/delta/silver/events"):
    silver_table = DeltaTable.forPath(spark, "/delta/silver/events")
    silver_table.alias("target").merge(
        silver_df.alias("source"),
        "target.event_id = source.event_id"
    ).whenMatchedUpdateAll() \\
     .whenNotMatchedInsertAll() \\
     .execute()
else:
    silver_df.write.format("delta").save("/delta/silver/events")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Gold Layer"}
                </h2>
                <p>
                  {"Business-ready aggregations and feature tables for analytics and ML."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Gold Layer Example - Business Aggregations

# Read from Silver
events = spark.read.format("delta").load("/delta/silver/events")
users = spark.read.format("delta").load("/delta/silver/users")
products = spark.read.format("delta").load("/delta/silver/products")

# Gold table: Daily Sales Summary
daily_sales = events \\
    .filter(col("event_type") == "purchase") \\
    .join(products, "product_id") \\
    .groupBy(
        col("event_time").cast("date").alias("date"),
        col("product_category")
    ).agg(
        count("*").alias("transaction_count"),
        sum("amount").alias("total_revenue"),
        countDistinct("user_id").alias("unique_customers"),
        avg("amount").alias("avg_order_value")
    )

daily_sales.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save("/delta/gold/daily_sales_summary")

# Gold table: Customer 360 (feature table for ML)
customer_features = events \\
    .groupBy("user_id") \\
    .agg(
        count("*").alias("total_events"),
        countDistinct("event_type").alias("event_type_count"),
        sum(when(col("event_type") == "purchase", col("amount"))).alias("total_spent"),
        max("event_time").alias("last_activity"),
        datediff(current_date(), max("event_time")).alias("days_since_last_activity")
    ).join(users, "user_id")

customer_features.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save("/delta/gold/customer_360")

# Gold table: Product Performance
product_metrics = events \\
    .filter(col("event_type").isin(["view", "add_to_cart", "purchase"])) \\
    .groupBy("product_id") \\
    .pivot("event_type") \\
    .count() \\
    .withColumn("conversion_rate",
        col("purchase") / col("view") * 100
    )

product_metrics.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save("/delta/gold/product_metrics")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Folder Structure"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Recommended folder structure

/delta/
├── bronze/
│   ├── events/           # Raw event data
│   ├── users/            # Raw user data
│   ├── transactions/     # Raw transaction data
│   └── _checkpoints/     # Streaming checkpoints
│
├── silver/
│   ├── events/           # Cleaned events
│   ├── users/            # Cleaned users
│   ├── transactions/     # Cleaned transactions
│   └── dim_date/         # Conformed date dimension
│
├── gold/
│   ├── daily_sales_summary/
│   ├── customer_360/
│   ├── product_metrics/
│   └── executive_dashboard/
│
└── _schemas/             # Schema definitions
    ├── bronze/
    ├── silver/
    └── gold/`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Implementation Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Pattern 1: Streaming Bronze to Silver
bronze_stream = spark.readStream \\
    .format("delta") \\
    .load("/delta/bronze/events")

cleaned_stream = bronze_stream \\
    .filter(col("event_id").isNotNull()) \\
    .withColumn("event_type", lower(col("event_type")))

cleaned_stream.writeStream \\
    .format("delta") \\
    .outputMode("append") \\
    .option("checkpointLocation", "/delta/bronze/_checkpoints/events") \\
    .trigger(processingTime="5 minutes") \\
    .start("/delta/silver/events")

# Pattern 2: Incremental Silver to Gold
from delta.tables import DeltaTable

# Get last processed timestamp
last_run = spark.read.format("delta") \\
    .load("/delta/gold/_metadata/last_run") \\
    .collect()[0]["timestamp"]

# Process only new Silver data
new_data = spark.read.format("delta") \\
    .load("/delta/silver/events") \\
    .filter(col("_silver_timestamp") > last_run)

# Aggregate and merge to Gold
aggregated = new_data.groupBy("date", "product_id").agg(...)

gold_table = DeltaTable.forPath(spark, "/delta/gold/product_daily")
gold_table.alias("g").merge(
    aggregated.alias("n"),
    "g.date = n.date AND g.product_id = n.product_id"
).whenMatchedUpdate(...).whenNotMatchedInsert(...).execute()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Bronze is immutable:"}
                    </strong>
                    {" Never update or delete raw data"}
                  </li>
                  <li>
                    <strong>
                      {"Add metadata:"}
                    </strong>
                    {" Track lineage with ingestion timestamps and source info"}
                  </li>
                  <li>
                    <strong>
                      {"Validate at Silver:"}
                    </strong>
                    {" Apply data quality checks before Silver"}
                  </li>
                  <li>
                    <strong>
                      {"Incremental processing:"}
                    </strong>
                    {" Process only new/changed data"}
                  </li>
                  <li>
                    <strong>
                      {"Schema evolution:"}
                    </strong>
                    {" Plan for schema changes at each layer"}
                  </li>
                  <li>
                    <strong>
                      {"Document transformations:"}
                    </strong>
                    {" Clear mapping from Bronze to Gold"}
                  </li>
                  <li>
                    <strong>
                      {"Partition wisely:"}
                    </strong>
                    {" Date partitioning for Bronze/Silver, business keys for Gold"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Medallion Architecture"}
                </h2>
                <p>
                  {"Our Data Engineering program covers lakehouse architecture and production data platforms."}
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
                      {"ACID transactions"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/databricks" className="related-article-card">
                    <h4>
                      {"Databricks"}
                    </h4>
                    {" "}
                    <p>
                      {"Lakehouse platform"}
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
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Medallion Architecture."} />
    </>
  );
}
