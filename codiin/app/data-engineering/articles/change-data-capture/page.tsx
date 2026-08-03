import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Change Data Capture (CDC): Debezium & Kafka",
  description: "Learn Change Data Capture (CDC) - capture database changes in real-time. Master Debezium, Kafka Connect, and CDC patterns for data pipelines.",
  keywords: ["CDC", "Change Data Capture", "Debezium", "Kafka Connect", "database replication", "real-time data", "event sourcing"],
  alternates: { canonical: "/data-engineering/articles/change-data-capture" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/change-data-capture",
    title: "Change Data Capture (CDC): Real-Time Database Changes",
    description: "Master CDC for real-time data integration and streaming.",
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
  "headline": "Change Data Capture (CDC): Real-Time Database Changes",
  "description": "Complete guide to CDC and Debezium",
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

export default function DataEngineeringChangeDataCapturePage() {
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
                {"Change Data Capture"}
              </span>
            </div>
            <h1>
              {"Change Data Capture (CDC)"}
            </h1>
            <p className="article-subtitle">
              {"Capture Database Changes in Real-Time"}
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
                  {"What is Change Data Capture?"}
                </h2>
                <p>
                  {"Change Data Capture (CDC) is a design pattern that identifies and captures changes made to data in a database. Instead of querying entire tables, CDC tracks individual INSERT, UPDATE, and DELETE operations, enabling real-time data streaming."}
                </p>
                <p>
                  {"CDC is essential for building real-time data pipelines, synchronizing databases, and implementing event-driven architectures."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use CDC?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Real-time sync:"}
                    </strong>
                    {" Keep data warehouses up-to-date without batch jobs"}
                  </li>
                  <li>
                    <strong>
                      {"Low latency:"}
                    </strong>
                    {" Sub-second data propagation"}
                  </li>
                  <li>
                    <strong>
                      {"Reduced load:"}
                    </strong>
                    {" Only transfer changes, not full tables"}
                  </li>
                  <li>
                    <strong>
                      {"Event-driven:"}
                    </strong>
                    {" Enable reactive architectures"}
                  </li>
                  <li>
                    <strong>
                      {"Audit trail:"}
                    </strong>
                    {" Complete history of all changes"}
                  </li>
                  <li>
                    <strong>
                      {"Decoupling:"}
                    </strong>
                    {" Source database unaware of consumers"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"CDC Approaches"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                      CDC Approaches                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Log-Based CDC (Recommended)                                  │
│     • Reads database transaction logs (WAL, binlog)              │
│     • No impact on source database performance                   │
│     • Captures all changes including deletes                     │
│     • Tools: Debezium, AWS DMS, Fivetran                        │
│                                                                  │
│  2. Trigger-Based CDC                                            │
│     • Database triggers write changes to CDC table               │
│     • Simple to implement                                        │
│     • Performance overhead on source database                    │
│                                                                  │
│  3. Timestamp-Based CDC                                          │
│     • Query records modified since last sync                     │
│     • Requires updated_at column                                 │
│     • Cannot capture deletes                                     │
│     • Simple but not true real-time                              │
│                                                                  │
│  4. Diff-Based CDC                                               │
│     • Compare snapshots to find changes                          │
│     • Resource intensive                                         │
│     • Good for tables without timestamps                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Debezium"}
                </h2>
                <p>
                  {"Debezium is an open-source distributed platform for CDC. It captures row-level changes in databases and streams them to Kafka."}
                </p>
                <div className="code-block">
                  <pre><code>{`┌──────────────┐     ┌─────────────────┐     ┌──────────────┐
│   Database   │────▶│    Debezium     │────▶│    Kafka     │
│  (PostgreSQL)│     │ (Kafka Connect) │     │   Topics     │
└──────────────┘     └─────────────────┘     └──────────────┘
       │                                            │
       │                                            ▼
       │                                   ┌──────────────────┐
       │                                   │    Consumers     │
       └── Reads WAL/binlog                │ (Spark, Flink,   │
           without impacting               │  Applications)   │
           database performance            └──────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Setting Up Debezium"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Docker Compose for Debezium setup
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on:
      - zookeeper
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    command:
      - "postgres"
      - "-c"
      - "wal_level=logical"  # Required for CDC

  connect:
    image: debezium/connect:2.4
    depends_on:
      - kafka
      - postgres
    environment:
      BOOTSTRAP_SERVERS: kafka:9092
      GROUP_ID: debezium-connect
      CONFIG_STORAGE_TOPIC: connect_configs
      OFFSET_STORAGE_TOPIC: connect_offsets
      STATUS_STORAGE_TOPIC: connect_statuses
    ports:
      - "8083:8083"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"PostgreSQL CDC Connector"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create Debezium connector via REST API
curl -X POST http://localhost:8083/connectors \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "postgres-connector",
    "config": {
      "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
      "database.hostname": "postgres",
      "database.port": "5432",
      "database.user": "postgres",
      "database.password": "postgres",
      "database.dbname": "mydb",
      "database.server.name": "dbserver1",
      "table.include.list": "public.customers,public.orders",
      "plugin.name": "pgoutput",
      "slot.name": "debezium_slot",
      "publication.name": "dbz_publication",
      "topic.prefix": "dbserver1",
      "transforms": "unwrap",
      "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState"
    }
  }'

# Check connector status
curl http://localhost:8083/connectors/postgres-connector/status`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CDC Event Structure"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Debezium change event (Kafka message)
{
  "schema": { ... },
  "payload": {
    "before": {                    // Previous state (null for INSERT)
      "id": 1,
      "name": "Alice",
      "email": "alice@old.com"
    },
    "after": {                     // New state (null for DELETE)
      "id": 1,
      "name": "Alice",
      "email": "alice@new.com"
    },
    "source": {
      "version": "2.4.0",
      "connector": "postgresql",
      "name": "dbserver1",
      "ts_ms": 1703412345678,
      "snapshot": "false",
      "db": "mydb",
      "schema": "public",
      "table": "customers",
      "txId": 12345,
      "lsn": 98765432
    },
    "op": "u",                     // Operation: c=create, u=update, d=delete
    "ts_ms": 1703412345680,
    "transaction": null
  }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Consuming CDC Events"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Python consumer with kafka-python
from kafka import KafkaConsumer
import json

consumer = KafkaConsumer(
    'dbserver1.public.customers',
    bootstrap_servers=['localhost:9092'],
    auto_offset_reset='earliest',
    value_deserializer=lambda m: json.loads(m.decode('utf-8'))
)

for message in consumer:
    event = message.value
    operation = event['payload']['op']

    if operation == 'c':  # Create
        new_record = event['payload']['after']
        print(f"INSERT: {new_record}")

    elif operation == 'u':  # Update
        old_record = event['payload']['before']
        new_record = event['payload']['after']
        print(f"UPDATE: {old_record} -> {new_record}")

    elif operation == 'd':  # Delete
        deleted_record = event['payload']['before']
        print(f"DELETE: {deleted_record}")


# PySpark Streaming consumer
from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col

spark = SparkSession.builder \\
    .appName("CDC Consumer") \\
    .getOrCreate()

df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "dbserver1.public.customers") \\
    .load()

# Parse CDC events
parsed = df.select(
    from_json(col("value").cast("string"), schema).alias("data")
).select("data.payload.*")

# Process changes
query = parsed.writeStream \\
    .foreachBatch(process_batch) \\
    .start()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CDC to Data Lake"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Merge CDC changes into Delta Lake
from delta.tables import DeltaTable
from pyspark.sql.functions import col

def upsert_to_delta(batch_df, batch_id):
    # Filter by operation type
    inserts = batch_df.filter(col("op") == "c").select("after.*")
    updates = batch_df.filter(col("op") == "u").select("after.*")
    deletes = batch_df.filter(col("op") == "d").select("before.id")

    delta_table = DeltaTable.forPath(spark, "/delta/customers")

    # Merge inserts and updates
    changes = inserts.union(updates)
    if changes.count() > 0:
        delta_table.alias("target").merge(
            changes.alias("source"),
            "target.id = source.id"
        ).whenMatchedUpdateAll() \\
         .whenNotMatchedInsertAll() \\
         .execute()

    # Process deletes
    if deletes.count() > 0:
        delta_table.delete(
            col("id").isin([row.id for row in deletes.collect()])
        )

# Stream CDC to Delta Lake
cdc_stream = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "dbserver1.public.customers") \\
    .load()

cdc_stream.writeStream \\
    .foreachBatch(upsert_to_delta) \\
    .option("checkpointLocation", "/checkpoints/customers_cdc") \\
    .start()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use log-based CDC:"}
                    </strong>
                    {" Minimal impact on source database"}
                  </li>
                  <li>
                    <strong>
                      {"Handle schema changes:"}
                    </strong>
                    {" Plan for column additions/removals"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor lag:"}
                    </strong>
                    {" Track replication delay"}
                  </li>
                  <li>
                    <strong>
                      {"Idempotent consumers:"}
                    </strong>
                    {" Handle duplicate events gracefully"}
                  </li>
                  <li>
                    <strong>
                      {"Preserve ordering:"}
                    </strong>
                    {" Use single partition for strict ordering"}
                  </li>
                  <li>
                    <strong>
                      {"Initial snapshot:"}
                    </strong>
                    {" Load existing data before streaming"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master CDC Patterns"}
                </h2>
                <p>
                  {"Our Data Engineering program covers CDC, real-time streaming, and modern data architectures."}
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
                  <Link href="/data-engineering/articles/apache-kafka" className="related-article-card">
                    <h4>
                      {"Apache Kafka"}
                    </h4>
                    {" "}
                    <p>
                      {"Event streaming"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/spark-streaming" className="related-article-card">
                    <h4>
                      {"Spark Streaming"}
                    </h4>
                    {" "}
                    <p>
                      {"Process CDC events"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/delta-lake" className="related-article-card">
                    <h4>
                      {"Delta Lake"}
                    </h4>
                    {" "}
                    <p>
                      {"CDC to lakehouse"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn CDC."} />
    </>
  );
}
