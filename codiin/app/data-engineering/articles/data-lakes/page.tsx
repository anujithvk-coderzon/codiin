import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Data Lakes: Modern Data Architecture",
  description: "Learn Data Lakes architecture - storage, processing, governance, and the lakehouse paradigm. Master Delta Lake, Apache Iceberg, and modern data architectures.",
  keywords: ["data lake tutorial", "Delta Lake", "Apache Iceberg", "lakehouse", "data architecture", "big data storage"],
  alternates: { canonical: "/data-engineering/articles/data-lakes" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/data-lakes",
    title: "Data Lakes: Modern Data Architecture",
    description: "Master data lake architecture and the lakehouse paradigm.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-engineering", label: "Learn Data Engineering", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Data Lakes: Modern Data Architecture",
  "description": "Complete guide to data lake architecture and design",
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

export default function DataEngineeringDataLakesPage() {
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
                {"Data Lakes"}
              </span>
            </div>
            <h1>
              {"Data Lakes"}
            </h1>
            <p className="article-subtitle">
              {"Modern Data Architecture for Scale"}
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
                  {"What is a Data Lake?"}
                </h2>
                <p>
                  {"A data lake is a centralized repository that stores all your structured and unstructured data at any scale. Unlike traditional data warehouses, data lakes can store raw data without first defining the schema, following a \"schema-on-read\" approach."}
                </p>
                <p>
                  {"Modern data lakes have evolved into \"lakehouses\" - combining the flexibility of data lakes with the data management features of data warehouses."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Lake vs Data Warehouse"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Schema:"}
                    </strong>
                    {" Lake uses schema-on-read; Warehouse uses schema-on-write"}
                  </li>
                  <li>
                    <strong>
                      {"Data types:"}
                    </strong>
                    {" Lake stores any format; Warehouse stores structured data"}
                  </li>
                  <li>
                    <strong>
                      {"Cost:"}
                    </strong>
                    {" Lakes use cheap object storage; Warehouses use expensive compute"}
                  </li>
                  <li>
                    <strong>
                      {"Users:"}
                    </strong>
                    {" Lakes serve data scientists; Warehouses serve business analysts"}
                  </li>
                  <li>
                    <strong>
                      {"Processing:"}
                    </strong>
                    {" Lakes support batch and streaming; Warehouses focus on SQL queries"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Lake Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Medallion Architecture (Bronze, Silver, Gold)

data_lake/
├── bronze/              # Raw data (landing zone)
│   ├── sales/
│   │   └── 2024/01/01/raw_sales.parquet
│   └── customers/
│       └── 2024/01/01/raw_customers.json
├── silver/              # Cleaned, validated data
│   ├── sales/
│   │   └── cleaned_sales.parquet
│   └── customers/
│       └── validated_customers.parquet
└── gold/                # Business-ready aggregates
    ├── daily_revenue.parquet
    └── customer_360.parquet`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Delta Lake"}
                </h2>
                <p>
                  {"Delta Lake is an open-source storage layer that brings ACID transactions to data lakes:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from delta import *
from pyspark.sql import SparkSession

spark = SparkSession.builder \\
    .appName("DeltaLake") \\
    .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension") \\
    .config("spark.sql.catalog.spark_catalog", "org.apache.spark.sql.delta.catalog.DeltaCatalog") \\
    .getOrCreate()

# Write data as Delta table
df.write.format("delta").save("/data/delta/events")

# Read Delta table
events = spark.read.format("delta").load("/data/delta/events")

# Update data (ACID transaction)
from delta.tables import DeltaTable

delta_table = DeltaTable.forPath(spark, "/data/delta/events")

delta_table.update(
    condition="event_type = 'purchase'",
    set={"status": "'completed'"}
)

# Delete data
delta_table.delete("event_date < '2023-01-01'")

# Merge (upsert)
delta_table.alias("target").merge(
    new_data.alias("source"),
    "target.id = source.id"
).whenMatchedUpdateAll() \\
 .whenNotMatchedInsertAll() \\
 .execute()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Time Travel with Delta Lake"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Read data at a specific version
df_v0 = spark.read.format("delta") \\
    .option("versionAsOf", 0) \\
    .load("/data/delta/events")

# Read data at a specific timestamp
df_historical = spark.read.format("delta") \\
    .option("timestampAsOf", "2024-01-01 00:00:00") \\
    .load("/data/delta/events")

# View table history
history = delta_table.history()
history.show()

# Restore to previous version
delta_table.restoreToVersion(5)

# Vacuum old versions (clean up)
delta_table.vacuum(168)  # Retain 7 days`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Apache Iceberg"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql import SparkSession

spark = SparkSession.builder \\
    .appName("Iceberg") \\
    .config("spark.sql.catalog.iceberg", "org.apache.iceberg.spark.SparkCatalog") \\
    .config("spark.sql.catalog.iceberg.type", "hadoop") \\
    .config("spark.sql.catalog.iceberg.warehouse", "s3://bucket/warehouse") \\
    .getOrCreate()

# Create Iceberg table
spark.sql("""
    CREATE TABLE iceberg.db.events (
        id BIGINT,
        event_type STRING,
        timestamp TIMESTAMP,
        data STRING
    ) USING iceberg
    PARTITIONED BY (days(timestamp))
""")

# Insert data
spark.sql("""
    INSERT INTO iceberg.db.events
    SELECT * FROM staging_events
""")

# Schema evolution
spark.sql("""
    ALTER TABLE iceberg.db.events
    ADD COLUMN user_id BIGINT
""")

# Time travel
spark.sql("""
    SELECT * FROM iceberg.db.events
    FOR SYSTEM_TIME AS OF '2024-01-01 00:00:00'
""")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Lake on Cloud"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# AWS S3 Data Lake with Glue Catalog
import boto3

# Create S3 bucket for data lake
s3 = boto3.client('s3')
s3.create_bucket(
    Bucket='my-data-lake',
    CreateBucketConfiguration={'LocationConstraint': 'us-west-2'}
)

# Configure Spark to read from S3
spark = SparkSession.builder \\
    .appName("S3DataLake") \\
    .config("spark.hadoop.fs.s3a.access.key", ACCESS_KEY) \\
    .config("spark.hadoop.fs.s3a.secret.key", SECRET_KEY) \\
    .getOrCreate()

# Read Parquet from S3
df = spark.read.parquet("s3a://my-data-lake/bronze/events/")

# Write partitioned data to S3
df.write \\
    .partitionBy("year", "month", "day") \\
    .format("parquet") \\
    .save("s3a://my-data-lake/silver/events/")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Lake Governance"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Data Catalog:"}
                    </strong>
                    {" Track metadata, lineage, and schemas (AWS Glue, Apache Atlas)"}
                  </li>
                  <li>
                    <strong>
                      {"Access Control:"}
                    </strong>
                    {" Fine-grained permissions (Lake Formation, Ranger)"}
                  </li>
                  <li>
                    <strong>
                      {"Data Quality:"}
                    </strong>
                    {" Validate data at ingestion (Great Expectations, dbt tests)"}
                  </li>
                  <li>
                    <strong>
                      {"Lineage:"}
                    </strong>
                    {" Track data transformations end-to-end"}
                  </li>
                  <li>
                    <strong>
                      {"Encryption:"}
                    </strong>
                    {" Encrypt data at rest and in transit"}
                  </li>
                  <li>
                    <strong>
                      {"Retention:"}
                    </strong>
                    {" Implement lifecycle policies for cost optimization"}
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
                      {"Use columnar formats:"}
                    </strong>
                    {" Parquet or ORC for analytics"}
                  </li>
                  <li>
                    <strong>
                      {"Partition wisely:"}
                    </strong>
                    {" Choose partition keys based on query patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Implement medallion architecture:"}
                    </strong>
                    {" Bronze, Silver, Gold layers"}
                  </li>
                  <li>
                    <strong>
                      {"Enable versioning:"}
                    </strong>
                    {" Use Delta Lake or Iceberg for ACID support"}
                  </li>
                  <li>
                    <strong>
                      {"Catalog everything:"}
                    </strong>
                    {" Metadata is crucial for discoverability"}
                  </li>
                  <li>
                    <strong>
                      {"Compact small files:"}
                    </strong>
                    {" Regular maintenance for performance"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Lakes with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers modern data lake architecture and implementation. Build scalable data platforms with guidance from industry experts."}
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
                      {"Traditional warehouse design"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-spark" className="related-article-card">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Process data lake at scale"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/aws-data-engineering" className="related-article-card">
                    <h4>
                      {"AWS Data Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Cloud data lake services"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Data Lakes."} />
    </>
  );
}
