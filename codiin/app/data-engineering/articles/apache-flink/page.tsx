import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Apache Flink Guide",
  description: "Learn Apache Flink - distributed stream processing framework. Master DataStream API, windowing, state management, exactly-once semantics, and Kafka integration.",
  keywords: ["Apache Flink", "stream processing", "real-time analytics", "Flink DataStream", "event-driven", "stateful streaming"],
  alternates: { canonical: "/data-engineering/articles/apache-flink" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/apache-flink",
    title: "Apache Flink: Stream Processing Framework",
    description: "Master real-time stream processing with Apache Flink.",
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
  "headline": "Apache Flink: Stream Processing Framework",
  "description": "Complete guide to Apache Flink for stream processing",
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

export default function DataEngineeringApacheFlinkPage() {
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
                {"Apache Flink"}
              </span>
            </div>
            <h1>
              {"Apache Flink"}
            </h1>
            <p className="article-subtitle">
              {"Distributed Stream Processing at Scale"}
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
                  {"What is Apache Flink?"}
                </h2>
                <p>
                  {"Apache Flink is a distributed stream processing framework designed for stateful computations over unbounded and bounded data streams. Unlike batch-first systems, Flink treats batch as a special case of streaming."}
                </p>
                <p>
                  {"Flink provides exactly-once state consistency, event-time processing, and millisecond latency - making it ideal for real-time analytics and event-driven applications."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Flink vs Spark Streaming"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                 Flink vs Spark Streaming                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Apache Flink                                                    │
│  ├── True streaming (event-by-event)                            │
│  ├── Native event-time processing                               │
│  ├── Exactly-once with Chandy-Lamport checkpoints              │
│  ├── Millisecond latency                                        │
│  ├── Built-in state management with RocksDB                     │
│  └── SQL/Table API unified with DataStream                      │
│                                                                  │
│  Spark Structured Streaming                                      │
│  ├── Micro-batch processing                                     │
│  ├── Event-time with watermarks                                 │
│  ├── Exactly-once with checkpoints                              │
│  ├── Seconds to minutes latency (continuous mode: sub-ms)       │
│  ├── State via StateStore                                       │
│  └── Unified with batch DataFrame API                           │
│                                                                  │
│  When to Use Flink:                                              │
│  ├── Ultra-low latency requirements                             │
│  ├── Complex event processing (CEP)                             │
│  ├── Large stateful applications                                │
│  └── Event-driven architectures                                 │
│                                                                  │
│  When to Use Spark:                                              │
│  ├── Unified batch + streaming pipelines                        │
│  ├── Existing Spark ecosystem                                   │
│  ├── ML integration (MLlib)                                     │
│  └── Simpler learning curve                                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flink Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    Flink Cluster Architecture                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │                    Client (Job Submission)                │  │
│   │    - Builds JobGraph from user code                      │  │
│   │    - Submits to JobManager                               │  │
│   └────────────────────────┬─────────────────────────────────┘  │
│                            │                                     │
│   ┌────────────────────────▼─────────────────────────────────┐  │
│   │                     JobManager                            │  │
│   │    - Coordinates distributed execution                   │  │
│   │    - Schedules tasks                                     │  │
│   │    - Triggers checkpoints                                │  │
│   │    - Handles failover recovery                           │  │
│   └───────────┬─────────────┬──────────────┬─────────────────┘  │
│               │             │              │                     │
│   ┌───────────▼───┐  ┌──────▼──────┐  ┌───▼───────────┐        │
│   │ TaskManager 1 │  │TaskManager 2│  │ TaskManager 3 │        │
│   │ ┌───────────┐ │  │┌───────────┐│  │ ┌───────────┐ │        │
│   │ │  Task 1   │ │  ││  Task 3   ││  │ │  Task 5   │ │        │
│   │ │  Slot 1   │ │  ││  Slot 1   ││  │ │  Slot 1   │ │        │
│   │ └───────────┘ │  │└───────────┘│  │ └───────────┘ │        │
│   │ ┌───────────┐ │  │┌───────────┐│  │ ┌───────────┐ │        │
│   │ │  Task 2   │ │  ││  Task 4   ││  │ │  Task 6   │ │        │
│   │ │  Slot 2   │ │  ││  Slot 2   ││  │ │  Slot 2   │ │        │
│   │ └───────────┘ │  │└───────────┘│  │ └───────────┘ │        │
│   └───────────────┘  └─────────────┘  └───────────────┘        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DataStream API Basics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyflink.datastream import StreamExecutionEnvironment
from pyflink.datastream.connectors.kafka import KafkaSource, KafkaOffsetsInitializer
from pyflink.common.serialization import SimpleStringSchema

# Create execution environment
env = StreamExecutionEnvironment.get_execution_environment()
env.set_parallelism(4)

# Configure Kafka source
kafka_source = KafkaSource.builder() \\
    .set_bootstrap_servers("localhost:9092") \\
    .set_topics("events") \\
    .set_group_id("flink-consumer") \\
    .set_starting_offsets(KafkaOffsetsInitializer.latest()) \\
    .set_value_only_deserializer(SimpleStringSchema()) \\
    .build()

# Create DataStream from Kafka
stream = env.from_source(
    kafka_source,
    WatermarkStrategy.no_watermarks(),
    "Kafka Source"
)

# Basic transformations
result = stream \\
    .map(lambda x: json.loads(x)) \\
    .filter(lambda x: x['event_type'] == 'purchase') \\
    .map(lambda x: (x['user_id'], x['amount']))

# Execute the job
env.execute("Event Processing Job")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flink SQL & Table API"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyflink.table import StreamTableEnvironment, EnvironmentSettings

# Create Table Environment
env_settings = EnvironmentSettings.in_streaming_mode()
t_env = StreamTableEnvironment.create(environment_settings=env_settings)

# Create Kafka source table using SQL DDL
t_env.execute_sql("""
    CREATE TABLE events (
        event_id STRING,
        user_id STRING,
        event_type STRING,
        amount DECIMAL(10, 2),
        event_time TIMESTAMP(3),
        WATERMARK FOR event_time AS event_time - INTERVAL '5' SECOND
    ) WITH (
        'connector' = 'kafka',
        'topic' = 'events',
        'properties.bootstrap.servers' = 'localhost:9092',
        'properties.group.id' = 'flink-sql',
        'scan.startup.mode' = 'latest-offset',
        'format' = 'json'
    )
""")

# Create sink table
t_env.execute_sql("""
    CREATE TABLE purchase_metrics (
        window_start TIMESTAMP(3),
        window_end TIMESTAMP(3),
        user_id STRING,
        total_purchases BIGINT,
        total_amount DECIMAL(10, 2),
        PRIMARY KEY (window_start, user_id) NOT ENFORCED
    ) WITH (
        'connector' = 'jdbc',
        'url' = 'jdbc:postgresql://localhost:5432/analytics',
        'table-name' = 'purchase_metrics',
        'username' = 'postgres',
        'password' = 'password'
    )
""")

# Windowed aggregation with SQL
t_env.execute_sql("""
    INSERT INTO purchase_metrics
    SELECT
        TUMBLE_START(event_time, INTERVAL '5' MINUTE) as window_start,
        TUMBLE_END(event_time, INTERVAL '5' MINUTE) as window_end,
        user_id,
        COUNT(*) as total_purchases,
        SUM(amount) as total_amount
    FROM events
    WHERE event_type = 'purchase'
    GROUP BY
        TUMBLE(event_time, INTERVAL '5' MINUTE),
        user_id
""")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Event Time & Watermarks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyflink.common import WatermarkStrategy, Duration
from pyflink.common.watermark_strategy import TimestampAssigner

# Custom timestamp assigner
class EventTimestampAssigner(TimestampAssigner):
    def extract_timestamp(self, value, record_timestamp):
        # Extract timestamp from event
        return value['event_time_ms']

# Watermark strategy with bounded out-of-orderness
watermark_strategy = WatermarkStrategy \\
    .for_bounded_out_of_orderness(Duration.of_seconds(5)) \\
    .with_timestamp_assigner(EventTimestampAssigner())

# Apply watermark strategy
stream_with_watermarks = env.from_source(
    kafka_source,
    watermark_strategy,
    "Events with Watermarks"
)

# Using SQL with watermarks
"""
CREATE TABLE events (
    event_id STRING,
    user_id STRING,
    event_time TIMESTAMP(3),
    -- Declare watermark: events can be up to 5 seconds late
    WATERMARK FOR event_time AS event_time - INTERVAL '5' SECOND
) WITH (...)

-- Watermark visualization:
-- Event Time:    12:00:05  12:00:10  12:00:15  12:00:20
-- Watermark:     12:00:00  12:00:05  12:00:10  12:00:15
--                 (5 sec behind event time)
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Window Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Python DataStream API Windows
from pyflink.datastream.window import TumblingEventTimeWindows,
    SlidingEventTimeWindows, SessionWindows
from pyflink.common import Time

# Tumbling Window (non-overlapping)
tumbling = stream \\
    .key_by(lambda x: x['user_id']) \\
    .window(TumblingEventTimeWindows.of(Time.minutes(5))) \\
    .reduce(lambda a, b: {
        'user_id': a['user_id'],
        'count': a['count'] + b['count'],
        'total': a['total'] + b['total']
    })

# Sliding Window (overlapping)
sliding = stream \\
    .key_by(lambda x: x['product_id']) \\
    .window(SlidingEventTimeWindows.of(
        Time.minutes(10),  # window size
        Time.minutes(5)    # slide interval
    )) \\
    .aggregate(AverageAggregate())

# Session Window (gap-based)
session = stream \\
    .key_by(lambda x: x['session_id']) \\
    .window(SessionWindows.with_gap(Time.minutes(30))) \\
    .process(SessionAnalyzer())

# SQL Window Functions
"""
-- Tumbling Window
SELECT
    TUMBLE_START(event_time, INTERVAL '5' MINUTE) as window_start,
    user_id,
    COUNT(*) as event_count
FROM events
GROUP BY TUMBLE(event_time, INTERVAL '5' MINUTE), user_id;

-- Hop (Sliding) Window
SELECT
    HOP_START(event_time, INTERVAL '5' MINUTE, INTERVAL '10' MINUTE),
    product_id,
    AVG(amount) as avg_amount
FROM events
GROUP BY HOP(event_time, INTERVAL '5' MINUTE, INTERVAL '10' MINUTE), product_id;

-- Session Window
SELECT
    SESSION_START(event_time, INTERVAL '30' MINUTE) as session_start,
    user_id,
    COUNT(*) as events_in_session
FROM events
GROUP BY SESSION(event_time, INTERVAL '30' MINUTE), user_id;
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"State Management"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyflink.datastream import RuntimeContext
from pyflink.datastream.functions import KeyedProcessFunction
from pyflink.datastream.state import ValueStateDescriptor, MapStateDescriptor

class FraudDetector(KeyedProcessFunction):
    def open(self, runtime_context: RuntimeContext):
        # Define state for last transaction
        self.last_transaction = runtime_context.get_state(
            ValueStateDescriptor("last_transaction", Types.FLOAT())
        )
        # Map state for transaction history
        self.transaction_history = runtime_context.get_map_state(
            MapStateDescriptor("history", Types.LONG(), Types.FLOAT())
        )

    def process_element(self, value, ctx):
        last_amount = self.last_transaction.value()
        current_amount = value['amount']

        # Fraud detection logic
        if last_amount is not None:
            if current_amount > last_amount * 10:
                # Large increase - potential fraud
                yield {
                    'user_id': value['user_id'],
                    'alert': 'POTENTIAL_FRAUD',
                    'current': current_amount,
                    'previous': last_amount
                }

        # Update state
        self.last_transaction.update(current_amount)
        self.transaction_history.put(value['timestamp'], current_amount)

# Apply stateful function
alerts = stream \\
    .key_by(lambda x: x['user_id']) \\
    .process(FraudDetector())

# State Backends
"""
# RocksDB state backend (production)
env.set_state_backend(RocksDBStateBackend("hdfs://checkpoints"))

# HashMapStateBackend (in-memory, for small state)
env.set_state_backend(HashMapStateBackend())

State Backend Options:
├── HashMapStateBackend
│   ├── State stored in JVM heap
│   ├── Fast but limited by memory
│   └── Good for small state
│
└── RocksDBStateBackend
    ├── State stored on local disk with RocksDB
    ├── Can handle TB of state
    ├── Incremental checkpoints
    └── Recommended for production
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Checkpointing & Fault Tolerance"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyflink.datastream import CheckpointingMode
from pyflink.common import Duration

# Enable checkpointing
env.enable_checkpointing(60000)  # checkpoint every 60 seconds

# Checkpoint configuration
config = env.get_checkpoint_config()

# Exactly-once semantics
config.set_checkpointing_mode(CheckpointingMode.EXACTLY_ONCE)

# Minimum pause between checkpoints
config.set_min_pause_between_checkpoints(30000)  # 30 seconds

# Checkpoint timeout
config.set_checkpoint_timeout(600000)  # 10 minutes

# Number of concurrent checkpoints
config.set_max_concurrent_checkpoints(1)

# Enable externalized checkpoints for recovery
config.enable_externalized_checkpoints(
    ExternalizedCheckpointCleanup.RETAIN_ON_CANCELLATION
)

# Checkpoint storage
config.set_checkpoint_storage("hdfs://namenode:8020/flink/checkpoints")

# Savepoints for planned migrations
"""
# Create savepoint
$ flink savepoint <jobId> hdfs://savepoints/

# Stop with savepoint
$ flink stop --savepointPath hdfs://savepoints/ <jobId>

# Resume from savepoint
$ flink run -s hdfs://savepoints/savepoint-123 app.jar
"""

# Exactly-once with Kafka
"""
Flink achieves exactly-once with Kafka using:
1. Kafka transactions for sinks
2. Checkpointing with Chandy-Lamport algorithm
3. Two-phase commit protocol

Configuration:
env.get_config().set_auto_watermark_interval(200)
kafka_sink.set_semantic(DeliverySemantic.EXACTLY_ONCE)
kafka_sink.set_transaction_timeout(Duration.of_minutes(15))
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complex Event Processing (CEP)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Flink CEP - Pattern Detection
from pyflink.cep import CEP, Pattern

# Define a pattern: detect suspicious login attempts
# 3+ failed logins followed by a success within 5 minutes
pattern = Pattern.begin("failed") \\
    .where(lambda event: event['status'] == 'FAILED') \\
    .times_or_more(3) \\
    .consecutive() \\
    .within(Duration.of_minutes(5)) \\
    .followed_by("success") \\
    .where(lambda event: event['status'] == 'SUCCESS')

# Apply pattern to stream
pattern_stream = CEP.pattern(
    login_stream.key_by(lambda x: x['user_id']),
    pattern
)

# Process matched patterns
def detect_suspicious(match):
    failed_events = match['failed']
    success_event = match['success'][0]
    return {
        'user_id': success_event['user_id'],
        'alert_type': 'SUSPICIOUS_LOGIN',
        'failed_attempts': len(failed_events),
        'success_ip': success_event['ip_address']
    }

alerts = pattern_stream.select(detect_suspicious)

# SQL Pattern Recognition (MATCH_RECOGNIZE)
"""
SELECT *
FROM events
MATCH_RECOGNIZE (
    PARTITION BY user_id
    ORDER BY event_time
    MEASURES
        FIRST(FAIL.event_time) AS start_time,
        LAST(FAIL.event_time) AS end_time,
        COUNT(FAIL.event_id) AS failed_count,
        SUCCESS.ip_address AS success_ip
    ONE ROW PER MATCH
    AFTER MATCH SKIP PAST LAST ROW
    PATTERN (FAIL{3,} SUCCESS)
    DEFINE
        FAIL AS status = 'FAILED',
        SUCCESS AS status = 'SUCCESS'
) AS suspicious_logins;
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flink with Kafka"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyflink.datastream.connectors.kafka import (
    KafkaSource, KafkaSink, KafkaRecordSerializationSchema
)
from pyflink.common.serialization import SimpleStringSchema

# Kafka Source with exactly-once
kafka_source = KafkaSource.builder() \\
    .set_bootstrap_servers("kafka:9092") \\
    .set_topics("input-events") \\
    .set_group_id("flink-processor") \\
    .set_starting_offsets(KafkaOffsetsInitializer.committed_offsets(
        OffsetResetStrategy.EARLIEST
    )) \\
    .set_value_only_deserializer(SimpleStringSchema()) \\
    .build()

# Kafka Sink with exactly-once delivery
kafka_sink = KafkaSink.builder() \\
    .set_bootstrap_servers("kafka:9092") \\
    .set_record_serializer(
        KafkaRecordSerializationSchema.builder()
            .set_topic("output-events")
            .set_value_serialization_schema(SimpleStringSchema())
            .build()
    ) \\
    .set_delivery_guarantee(DeliveryGuarantee.EXACTLY_ONCE) \\
    .set_transactional_id_prefix("flink-sink") \\
    .build()

# Complete pipeline
stream = env.from_source(
    kafka_source,
    WatermarkStrategy.for_bounded_out_of_orderness(Duration.of_seconds(5)),
    "Kafka Source"
)

processed = stream \\
    .map(parse_json) \\
    .filter(lambda x: x['event_type'] == 'purchase') \\
    .map(enrich_event) \\
    .map(to_json_string)

processed.sink_to(kafka_sink)

env.execute("Kafka Pipeline")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deployment & Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Flink on Kubernetes (recommended for production)
# flink-deployment.yaml
"""
apiVersion: flink.apache.org/v1beta1
kind: FlinkDeployment
metadata:
  name: streaming-job
spec:
  image: flink:1.18
  flinkVersion: v1_18
  flinkConfiguration:
    taskmanager.numberOfTaskSlots: "4"
    state.backend: rocksdb
    state.checkpoints.dir: s3://bucket/checkpoints
    execution.checkpointing.interval: 60s
  serviceAccount: flink
  jobManager:
    resource:
      memory: "2048m"
      cpu: 1
  taskManager:
    resource:
      memory: "4096m"
      cpu: 2
    replicas: 3
  job:
    jarURI: s3://bucket/jobs/streaming-job.jar
    parallelism: 8
    upgradeMode: savepoint
"""

# Monitoring with Prometheus
"""
flink-conf.yaml:
  metrics.reporters: prom
  metrics.reporter.prom.factory.class:
    org.apache.flink.metrics.prometheus.PrometheusReporterFactory
  metrics.reporter.prom.port: 9249

Key Metrics to Monitor:
├── flink_jobmanager_job_uptime          (job health)
├── flink_taskmanager_job_task_operator_numRecordsIn
├── flink_taskmanager_job_task_operator_numRecordsOut
├── flink_taskmanager_job_task_checkpointDuration
├── flink_taskmanager_Status_JVM_Memory_Heap_Used
└── flink_taskmanager_job_latency_source_histogram
"""

# Common CLI commands
"""
# Submit a job
flink run -d -p 4 streaming-job.jar

# List running jobs
flink list

# Cancel a job
flink cancel <jobId>

# Create savepoint
flink savepoint <jobId> hdfs://savepoints/

# Resume from savepoint
flink run -s hdfs://savepoints/savepoint-xxx streaming-job.jar
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use RocksDB state backend:"}
                    </strong>
                    {" For production workloads with large state"}
                  </li>
                  <li>
                    <strong>
                      {"Configure proper watermarks:"}
                    </strong>
                    {" Balance latency vs completeness"}
                  </li>
                  <li>
                    <strong>
                      {"Enable incremental checkpoints:"}
                    </strong>
                    {" Reduces checkpoint overhead"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor checkpoint duration:"}
                    </strong>
                    {" Should be << checkpoint interval"}
                  </li>
                  <li>
                    <strong>
                      {"Test with Flink's exactly-once:"}
                    </strong>
                    {" Verify end-to-end semantics"}
                  </li>
                  <li>
                    <strong>
                      {"Use savepoints for upgrades:"}
                    </strong>
                    {" Allows state-preserving job updates"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Apache Flink"}
                </h2>
                <p>
                  {"Our Data Engineering program covers stream processing with Flink and other modern frameworks."}
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
                  <Link href="/data-engineering/articles/spark-streaming" className="related-article-card">
                    <h4>
                      {"Spark Streaming"}
                    </h4>
                    {" "}
                    <p>
                      {"Alternative streaming framework"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-kafka" className="related-article-card">
                    <h4>
                      {"Apache Kafka"}
                    </h4>
                    {" "}
                    <p>
                      {"Event streaming platform"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/change-data-capture" className="related-article-card">
                    <h4>
                      {"Change Data Capture"}
                    </h4>
                    {" "}
                    <p>
                      {"Stream database changes"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Apache Flink."} />
    </>
  );
}
