import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Spark Structured Streaming Guide",
  description: "Learn Spark Structured Streaming - real-time data processing with Apache Spark. Master streaming queries, watermarks, windowing, and Kafka integration.",
  keywords: ["Spark Streaming", "Structured Streaming", "real-time processing", "stream processing", "Kafka Spark", "windowing"],
  alternates: { canonical: "/data-engineering/articles/spark-streaming" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/spark-streaming",
    title: "Spark Structured Streaming: Real-Time Processing",
    description: "Master real-time data processing with Spark Streaming.",
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
  "headline": "Spark Structured Streaming: Real-Time Processing",
  "description": "Complete guide to Spark Streaming",
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

export default function DataEngineeringSparkStreamingPage() {
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
                {"Spark Streaming"}
              </span>
            </div>
            <h1>
              {"Spark Structured Streaming"}
            </h1>
            <p className="article-subtitle">
              {"Real-Time Data Processing at Scale"}
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
                  {"What is Spark Structured Streaming?"}
                </h2>
                <p>
                  {"Structured Streaming is a scalable, fault-tolerant stream processing engine built on Spark SQL. It allows you to express streaming computations the same way as batch computations on static data."}
                </p>
                <p>
                  {"Spark handles running the stream incrementally and continuously, updating the result as streaming data continues to arrive."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Concepts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│              Structured Streaming Concepts                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Input Sources                                                   │
│  ├── Kafka           (most common for production)               │
│  ├── Files           (JSON, CSV, Parquet, ORC)                  │
│  ├── Socket          (testing only)                             │
│  └── Rate Source     (testing/benchmarking)                     │
│                                                                  │
│  Output Sinks                                                    │
│  ├── Kafka           (streaming to Kafka)                       │
│  ├── Files           (Parquet, JSON, etc.)                      │
│  ├── Delta Lake      (ACID streaming)                           │
│  ├── Console         (debugging)                                │
│  ├── Memory          (testing)                                  │
│  └── foreach/Batch   (custom sinks)                             │
│                                                                  │
│  Output Modes                                                    │
│  ├── Append          (new rows only)                            │
│  ├── Complete        (all rows, for aggregations)               │
│  └── Update          (only changed rows)                        │
│                                                                  │
│  Triggers                                                        │
│  ├── Default         (process ASAP)                             │
│  ├── Fixed interval  (every X seconds/minutes)                  │
│  ├── Once            (one batch, then stop)                     │
│  └── Available-now   (process all available, then stop)         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic Streaming Query"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql import SparkSession
from pyspark.sql.functions import *

spark = SparkSession.builder \\
    .appName("StreamingExample") \\
    .getOrCreate()

# Read from Kafka
df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "events") \\
    .option("startingOffsets", "latest") \\
    .load()

# Kafka returns key, value, topic, partition, offset, timestamp
# Value is binary - need to cast and parse
events = df.select(
    col("key").cast("string"),
    from_json(col("value").cast("string"), schema).alias("data"),
    col("timestamp").alias("kafka_timestamp")
).select("key", "data.*", "kafka_timestamp")

# Transform
processed = events \\
    .filter(col("event_type") == "purchase") \\
    .withColumn("processed_at", current_timestamp())

# Write to Delta Lake
query = processed.writeStream \\
    .format("delta") \\
    .outputMode("append") \\
    .option("checkpointLocation", "/checkpoints/purchases") \\
    .start("/delta/purchases")

# Wait for termination
query.awaitTermination()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Windowed Aggregations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.functions import window, col, count, sum, avg

# Tumbling window (non-overlapping)
# Count events per 5-minute window
tumbling = events.groupBy(
    window(col("event_time"), "5 minutes"),
    col("event_type")
).agg(
    count("*").alias("event_count"),
    sum("amount").alias("total_amount")
)

# Sliding window (overlapping)
# 10-minute windows, sliding every 5 minutes
sliding = events.groupBy(
    window(col("event_time"), "10 minutes", "5 minutes"),
    col("product_id")
).agg(
    count("*").alias("count"),
    avg("amount").alias("avg_amount")
)

# Session window (gap-based)
# Sessions with 30-minute inactivity gap
session = events.groupBy(
    session_window(col("event_time"), "30 minutes"),
    col("user_id")
).agg(
    count("*").alias("events_in_session"),
    min("event_time").alias("session_start"),
    max("event_time").alias("session_end")
)

# Write windowed aggregations
query = tumbling.writeStream \\
    .format("delta") \\
    .outputMode("update")  # Update mode for aggregations \\
    .option("checkpointLocation", "/checkpoints/metrics") \\
    .start("/delta/event_metrics")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Watermarks (Late Data Handling)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Watermarks define how late data can arrive
# Data older than watermark is dropped

# Allow data up to 1 hour late
events_with_watermark = events \\
    .withWatermark("event_time", "1 hour")

# Aggregate with watermark
aggregated = events_with_watermark.groupBy(
    window(col("event_time"), "10 minutes"),
    col("product_id")
).agg(
    count("*").alias("count")
)

# Without watermark: State grows indefinitely
# With watermark: Old state is cleaned up

# Visualization of watermark behavior:
"""
Event Time:  12:00  12:10  12:20  12:30  12:40
Watermark:   11:00  11:10  11:20  11:30  11:40  (1 hour behind)

At 12:40:
- Events with event_time > 11:40 are processed
- Events with event_time < 11:40 are dropped (too late)
- State for windows ending before 11:40 is cleaned up
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Stream-Stream Joins"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Join two streams (e.g., clicks and impressions)
clicks = spark.readStream \\
    .format("kafka") \\
    .option("subscribe", "clicks") \\
    .load() \\
    .select(
        col("value.user_id"),
        col("value.ad_id"),
        col("value.click_time").alias("click_time")
    ).withWatermark("click_time", "10 minutes")

impressions = spark.readStream \\
    .format("kafka") \\
    .option("subscribe", "impressions") \\
    .load() \\
    .select(
        col("value.user_id"),
        col("value.ad_id"),
        col("value.impression_time").alias("impression_time")
    ).withWatermark("impression_time", "10 minutes")

# Join clicks with impressions
# Click must happen within 5 minutes after impression
joined = clicks.join(
    impressions,
    expr("""
        clicks.user_id = impressions.user_id AND
        clicks.ad_id = impressions.ad_id AND
        click_time >= impression_time AND
        click_time <= impression_time + interval 5 minutes
    """),
    "inner"
)

# Calculate click-through rate
ctr = joined.groupBy("ad_id").agg(
    count("*").alias("clicks"),
    countDistinct("user_id").alias("unique_users")
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"foreachBatch (Custom Sinks)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Process each micro-batch with custom logic
def process_batch(batch_df, batch_id):
    """Custom processing for each micro-batch"""
    print(f"Processing batch {batch_id} with {batch_df.count()} rows")

    # Write to multiple destinations
    batch_df.write \\
        .format("delta") \\
        .mode("append") \\
        .save("/delta/events")

    # Update aggregates in a database
    aggregates = batch_df.groupBy("event_type").count()
    aggregates.write \\
        .format("jdbc") \\
        .option("url", "jdbc:postgresql://localhost/db") \\
        .option("dbtable", "event_counts") \\
        .mode("append") \\
        .save()

    # Send alerts for specific events
    alerts = batch_df.filter(col("severity") == "critical")
    if alerts.count() > 0:
        send_alerts(alerts.collect())

# Apply foreachBatch
query = events.writeStream \\
    .foreachBatch(process_batch) \\
    .option("checkpointLocation", "/checkpoints/custom") \\
    .trigger(processingTime="1 minute") \\
    .start()

# Stateful processing with mapGroupsWithState
from pyspark.sql.streaming.state import GroupState

def update_user_state(key, events, state: GroupState):
    """Track user session state"""
    current_state = state.getOption or {"count": 0, "total": 0}
    for event in events:
        current_state["count"] += 1
        current_state["total"] += event.amount

    state.update(current_state)
    return (key, current_state["count"], current_state["total"])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Triggers"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.streaming import Trigger

# Default (process as fast as possible)
query = df.writeStream \\
    .format("delta") \\
    .start()

# Fixed interval (every 30 seconds)
query = df.writeStream \\
    .format("delta") \\
    .trigger(processingTime="30 seconds") \\
    .start()

# Once (single batch, useful for testing or backfill)
query = df.writeStream \\
    .format("delta") \\
    .trigger(once=True) \\
    .start()

# Available-now (process all available data, then stop)
query = df.writeStream \\
    .format("delta") \\
    .trigger(availableNow=True) \\
    .start()

# Continuous processing (experimental, sub-millisecond latency)
query = df.writeStream \\
    .format("kafka") \\
    .trigger(continuous="1 second") \\
    .start()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Monitoring & Debugging"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check query status
query = df.writeStream.format("delta").start()

# Get current status
print(query.status)
# {'message': 'Processing new data', 'isDataAvailable': True, ...}

# Get recent progress
print(query.recentProgress)
# [{'inputRowsPerSecond': 1000, 'processedRowsPerSecond': 5000, ...}]

# Last progress report
progress = query.lastProgress
print(f"Input rate: {progress['inputRowsPerSecond']}")
print(f"Processing rate: {progress['processedRowsPerSecond']}")
print(f"Batch duration: {progress['batchDuration']} ms")

# Stop query gracefully
query.stop()

# List active queries
for q in spark.streams.active:
    print(f"{q.name}: {q.status}")

# Exception handling
try:
    query.awaitTermination()
except StreamingQueryException as e:
    print(f"Query failed: {e}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Always use watermarks:"}
                    </strong>
                    {" Prevents unbounded state growth"}
                  </li>
                  <li>
                    <strong>
                      {"Choose right trigger:"}
                    </strong>
                    {" Balance latency vs throughput"}
                  </li>
                  <li>
                    <strong>
                      {"Checkpoint to durable storage:"}
                    </strong>
                    {" Enable recovery from failures"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor lag:"}
                    </strong>
                    {" Track processing time vs arrival time"}
                  </li>
                  <li>
                    <strong>
                      {"Test with batch:"}
                    </strong>
                    {" Same code works for batch debugging"}
                  </li>
                  <li>
                    <strong>
                      {"Use Delta Lake:"}
                    </strong>
                    {" ACID guarantees for streaming sinks"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Spark Streaming"}
                </h2>
                <p>
                  {"Our Data Engineering program covers real-time processing with Spark and Kafka."}
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
                      {"Spark fundamentals"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-kafka" className="related-article-card">
                    <h4>
                      {"Apache Kafka"}
                    </h4>
                    {" "}
                    <p>
                      {"Event streaming"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/delta-lake" className="related-article-card">
                    <h4>
                      {"Delta Lake"}
                    </h4>
                    {" "}
                    <p>
                      {"Streaming to lakehouse"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Spark Streaming."} />
    </>
  );
}
