import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Schema Registry Guide",
  description: "Learn Schema Registry for Kafka - manage and evolve data schemas. Master Avro schemas, compatibility modes, and schema evolution patterns for data pipelines.",
  keywords: ["Schema Registry", "Kafka Schema Registry", "Avro", "data schemas", "schema evolution", "Confluent", "data contracts"],
  alternates: { canonical: "/data-engineering/articles/schema-registry" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/schema-registry",
    title: "Schema Registry: Managing Data Schemas",
    description: "Master schema management for streaming data pipelines.",
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
  "headline": "Schema Registry: Managing Data Schemas",
  "description": "Complete guide to Schema Registry for data pipelines",
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

export default function DataEngineeringSchemaRegistryPage() {
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
                {"Schema Registry"}
              </span>
            </div>
            <h1>
              {"Schema Registry"}
            </h1>
            <p className="article-subtitle">
              {"Managing Data Schemas for Streaming Pipelines"}
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
                  {"What is Schema Registry?"}
                </h2>
                <p>
                  {"Schema Registry is a centralized service for managing and validating schemas used in data pipelines. It acts as a single source of truth for schema definitions, enabling schema evolution while ensuring data compatibility."}
                </p>
                <p>
                  {"Most commonly used with Apache Kafka, Schema Registry stores Avro, JSON Schema, or Protobuf schemas and enforces compatibility rules to prevent breaking changes in your data contracts."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Schema Registry Matters"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│              Problems Without Schema Registry                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Producer                              Consumer                  │
│  ┌────────────┐                       ┌────────────┐            │
│  │ {"name":   │─────Kafka Topic─────▶│ Expecting: │            │
│  │  "John",   │                       │ user_name, │            │
│  │  "age": 30}│                       │ user_age   │ ❌ FAIL!   │
│  └────────────┘                       └────────────┘            │
│                                                                  │
│  Problems:                                                       │
│  ├── No contract between producers and consumers                │
│  ├── Schema changes break downstream systems                    │
│  ├── No validation before data enters pipeline                  │
│  ├── Difficult to discover data structure                       │
│  └── Wasted bandwidth sending schema with every message         │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│              Solutions With Schema Registry                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Producer ─────▶ Schema Registry ◀───── Consumer                │
│      │               │                     │                    │
│      │          ┌────┴────┐                │                    │
│      │          │ Schemas │                │                    │
│      │          │ v1, v2  │                │                    │
│      │          └────┬────┘                │                    │
│      │               │                     │                    │
│      └─────────Kafka Topic─────────────────┘                    │
│                                                                  │
│  Benefits:                                                       │
│  ├── Centralized schema storage                                 │
│  ├── Schema versioning and history                              │
│  ├── Compatibility enforcement                                  │
│  ├── Schema validation at produce time                          │
│  └── Compact messages (schema ID instead of full schema)        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Avro Schema Basics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Avro is the most common schema format with Schema Registry
# user.avsc - Avro schema definition
{
    "type": "record",
    "name": "User",
    "namespace": "com.example.events",
    "doc": "User profile event",
    "fields": [
        {
            "name": "user_id",
            "type": "string",
            "doc": "Unique user identifier"
        },
        {
            "name": "email",
            "type": "string"
        },
        {
            "name": "name",
            "type": ["null", "string"],
            "default": null,
            "doc": "Optional display name"
        },
        {
            "name": "age",
            "type": ["null", "int"],
            "default": null
        },
        {
            "name": "created_at",
            "type": {
                "type": "long",
                "logicalType": "timestamp-millis"
            }
        },
        {
            "name": "tags",
            "type": {
                "type": "array",
                "items": "string"
            },
            "default": []
        },
        {
            "name": "metadata",
            "type": {
                "type": "map",
                "values": "string"
            },
            "default": {}
        }
    ]
}

# Common Avro Types:
# Primitive: null, boolean, int, long, float, double, bytes, string
# Complex: record, enum, array, map, union, fixed
# Logical: date, time-millis, timestamp-millis, decimal, uuid`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Schema Registry Setup"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Docker Compose for Kafka with Schema Registry
# docker-compose.yml
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
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  schema-registry:
    image: confluentinc/cp-schema-registry:7.5.0
    depends_on:
      - kafka
    ports:
      - "8081:8081"
    environment:
      SCHEMA_REGISTRY_HOST_NAME: schema-registry
      SCHEMA_REGISTRY_KAFKASTORE_BOOTSTRAP_SERVERS: kafka:29092
      SCHEMA_REGISTRY_LISTENERS: http://0.0.0.0:8081

# Start services
$ docker-compose up -d

# Verify Schema Registry is running
$ curl http://localhost:8081/subjects`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Schema Registry REST API"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Register a new schema
curl -X POST -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  --data '{
    "schema": "{\\"type\\":\\"record\\",\\"name\\":\\"User\\",\\"fields\\":[{\\"name\\":\\"user_id\\",\\"type\\":\\"string\\"},{\\"name\\":\\"email\\",\\"type\\":\\"string\\"}]}"
  }' \\
  http://localhost:8081/subjects/users-value/versions

# Response: {"id": 1}

# List all subjects (schemas)
curl http://localhost:8081/subjects
# Response: ["users-value"]

# Get schema versions for a subject
curl http://localhost:8081/subjects/users-value/versions
# Response: [1, 2, 3]

# Get specific schema version
curl http://localhost:8081/subjects/users-value/versions/1

# Get latest schema
curl http://localhost:8081/subjects/users-value/versions/latest

# Get schema by global ID
curl http://localhost:8081/schemas/ids/1

# Delete a schema version
curl -X DELETE http://localhost:8081/subjects/users-value/versions/1

# Delete entire subject
curl -X DELETE http://localhost:8081/subjects/users-value

# Check schema compatibility before registering
curl -X POST -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  --data '{"schema": "{...}"}' \\
  http://localhost:8081/compatibility/subjects/users-value/versions/latest

# Response: {"is_compatible": true}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Compatibility Modes"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                 Schema Compatibility Modes                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  BACKWARD (Default)                                              │
│  ├── New schema can read data written by old schema             │
│  ├── Safe to upgrade consumers first                            │
│  ├── Can DELETE fields (with defaults) or ADD optional fields   │
│  └── Cannot add required fields or delete fields without defaults│
│                                                                  │
│  FORWARD                                                         │
│  ├── Old schema can read data written by new schema             │
│  ├── Safe to upgrade producers first                            │
│  ├── Can ADD fields (with defaults) or DELETE optional fields   │
│  └── Cannot delete required fields                              │
│                                                                  │
│  FULL                                                            │
│  ├── Both BACKWARD and FORWARD compatible                       │
│  ├── Safest for independent producer/consumer upgrades          │
│  ├── Can only ADD or DELETE optional fields with defaults       │
│  └── Most restrictive                                            │
│                                                                  │
│  NONE                                                            │
│  ├── No compatibility checking                                  │
│  └── Use only in development                                    │
│                                                                  │
│  BACKWARD_TRANSITIVE / FORWARD_TRANSITIVE / FULL_TRANSITIVE     │
│  └── Check against ALL previous versions, not just latest       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

# Set compatibility mode
curl -X PUT -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  --data '{"compatibility": "BACKWARD"}' \\
  http://localhost:8081/config/users-value

# Get current compatibility mode
curl http://localhost:8081/config/users-value

# Set global default compatibility
curl -X PUT -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  --data '{"compatibility": "FULL"}' \\
  http://localhost:8081/config`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Python Producer with Schema Registry"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from confluent_kafka import Producer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer
from confluent_kafka.serialization import SerializationContext, MessageField
import json

# Schema Registry configuration
schema_registry_conf = {
    'url': 'http://localhost:8081'
}
schema_registry_client = SchemaRegistryClient(schema_registry_conf)

# Define Avro schema
user_schema = """
{
    "type": "record",
    "name": "User",
    "namespace": "com.example",
    "fields": [
        {"name": "user_id", "type": "string"},
        {"name": "email", "type": "string"},
        {"name": "name", "type": ["null", "string"], "default": null},
        {"name": "created_at", "type": "long"}
    ]
}
"""

# Create serializer
avro_serializer = AvroSerializer(
    schema_registry_client,
    user_schema,
    lambda obj, ctx: obj  # Convert object to dict
)

# Producer configuration
producer_conf = {
    'bootstrap.servers': 'localhost:9092'
}
producer = Producer(producer_conf)

def delivery_report(err, msg):
    if err:
        print(f'Delivery failed: {err}')
    else:
        print(f'Message delivered to {msg.topic()} [{msg.partition()}]')

# Produce messages
def produce_user(user_data):
    producer.produce(
        topic='users',
        key=user_data['user_id'],
        value=avro_serializer(
            user_data,
            SerializationContext('users', MessageField.VALUE)
        ),
        on_delivery=delivery_report
    )
    producer.flush()

# Example usage
users = [
    {'user_id': 'u001', 'email': 'john@example.com', 'name': 'John', 'created_at': 1703500000000},
    {'user_id': 'u002', 'email': 'jane@example.com', 'name': None, 'created_at': 1703500001000},
]

for user in users:
    produce_user(user)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Python Consumer with Schema Registry"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from confluent_kafka import Consumer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroDeserializer
from confluent_kafka.serialization import SerializationContext, MessageField

# Schema Registry client
schema_registry_conf = {'url': 'http://localhost:8081'}
schema_registry_client = SchemaRegistryClient(schema_registry_conf)

# Create deserializer (will fetch schema from registry)
avro_deserializer = AvroDeserializer(
    schema_registry_client,
    lambda obj, ctx: obj
)

# Consumer configuration
consumer_conf = {
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'user-consumer-group',
    'auto.offset.reset': 'earliest'
}
consumer = Consumer(consumer_conf)
consumer.subscribe(['users'])

# Consume messages
try:
    while True:
        msg = consumer.poll(1.0)
        if msg is None:
            continue
        if msg.error():
            print(f'Consumer error: {msg.error()}')
            continue

        # Deserialize with schema from registry
        user = avro_deserializer(
            msg.value(),
            SerializationContext(msg.topic(), MessageField.VALUE)
        )
        print(f'Received: {user}')

except KeyboardInterrupt:
    pass
finally:
    consumer.close()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Schema Evolution Examples"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Original Schema (v1)
{
    "type": "record",
    "name": "Order",
    "fields": [
        {"name": "order_id", "type": "string"},
        {"name": "customer_id", "type": "string"},
        {"name": "amount", "type": "double"}
    ]
}

# BACKWARD Compatible Changes (v2)
# Adding optional field with default - consumers with v1 can still read
{
    "type": "record",
    "name": "Order",
    "fields": [
        {"name": "order_id", "type": "string"},
        {"name": "customer_id", "type": "string"},
        {"name": "amount", "type": "double"},
        {"name": "currency", "type": "string", "default": "USD"},  # ✅ New optional
        {"name": "notes", "type": ["null", "string"], "default": null}  # ✅ Nullable
    ]
}

# FORWARD Compatible Changes (v3)
# Removing optional field - producers with v2 can still write
{
    "type": "record",
    "name": "Order",
    "fields": [
        {"name": "order_id", "type": "string"},
        {"name": "customer_id", "type": "string"},
        {"name": "amount", "type": "double"},
        {"name": "currency", "type": "string", "default": "USD"}
        # notes field removed - ✅ OK if field was optional
    ]
}

# BREAKING Changes (Avoid!)
# ❌ Adding required field without default
# ❌ Removing required field
# ❌ Changing field type
# ❌ Renaming fields

# Python: Checking Compatibility Before Deployment
from confluent_kafka.schema_registry import SchemaRegistryClient, Schema

schema_registry = SchemaRegistryClient({'url': 'http://localhost:8081'})

new_schema = Schema(new_schema_str, 'AVRO')
is_compatible = schema_registry.test_compatibility(
    subject_name='orders-value',
    schema=new_schema
)
print(f'Schema compatible: {is_compatible}')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using with Spark"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql import SparkSession
from pyspark.sql.avro.functions import from_avro, to_avro
from confluent_kafka.schema_registry import SchemaRegistryClient
import json

spark = SparkSession.builder \\
    .appName("SchemaRegistryExample") \\
    .config("spark.jars.packages",
            "org.apache.spark:spark-avro_2.12:3.5.0,"
            "org.apache.spark:spark-sql-kafka-0-10_2.12:3.5.0") \\
    .getOrCreate()

# Fetch schema from registry
schema_registry = SchemaRegistryClient({'url': 'http://localhost:8081'})
schema_response = schema_registry.get_latest_version('users-value')
avro_schema = schema_response.schema.schema_str

# Read from Kafka with schema
df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "users") \\
    .load()

# Deserialize Avro data (skip first 5 bytes: magic byte + schema ID)
from pyspark.sql.functions import expr, col

parsed = df.select(
    col("key").cast("string"),
    from_avro(
        expr("substring(value, 6)"),  # Skip schema ID prefix
        avro_schema
    ).alias("user"),
    col("timestamp")
).select("key", "user.*", "timestamp")

# Write stream
query = parsed.writeStream \\
    .format("delta") \\
    .outputMode("append") \\
    .option("checkpointLocation", "/checkpoints/users") \\
    .start("/delta/users")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Subject Naming Strategies"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                 Subject Naming Strategies                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TopicNameStrategy (Default)                                     │
│  ├── Subject: {topic}-key, {topic}-value                        │
│  ├── Example: orders-key, orders-value                          │
│  └── One schema per topic                                       │
│                                                                  │
│  RecordNameStrategy                                              │
│  ├── Subject: {record_name}                                     │
│  ├── Example: com.example.Order                                 │
│  └── Multiple topics can share schema                           │
│                                                                  │
│  TopicRecordNameStrategy                                         │
│  ├── Subject: {topic}-{record_name}                             │
│  ├── Example: orders-com.example.Order                          │
│  └── Different schemas per topic/record combination             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

# Configure in producer
from confluent_kafka.schema_registry.avro import AvroSerializer

# TopicNameStrategy (default)
serializer = AvroSerializer(
    schema_registry_client,
    schema_str,
    conf={'subject.name.strategy': 'topic_name_strategy'}
)

# RecordNameStrategy
serializer = AvroSerializer(
    schema_registry_client,
    schema_str,
    conf={'subject.name.strategy': 'record_name_strategy'}
)

# TopicRecordNameStrategy
serializer = AvroSerializer(
    schema_registry_client,
    schema_str,
    conf={'subject.name.strategy': 'topic_record_name_strategy'}
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use FULL compatibility:"}
                    </strong>
                    {" Safest for production pipelines"}
                  </li>
                  <li>
                    <strong>
                      {"Always use defaults:"}
                    </strong>
                    {" For optional fields, specify defaults"}
                  </li>
                  <li>
                    <strong>
                      {"Test compatibility before deploy:"}
                    </strong>
                    {" Use compatibility API"}
                  </li>
                  <li>
                    <strong>
                      {"Version schemas in git:"}
                    </strong>
                    {" Store schemas alongside code"}
                  </li>
                  <li>
                    <strong>
                      {"Use namespaces:"}
                    </strong>
                    {" Avoid schema name collisions"}
                  </li>
                  <li>
                    <strong>
                      {"Document fields:"}
                    </strong>
                    {" Add \"doc\" attribute for clarity"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Schema Registry"}
                </h2>
                <p>
                  {"Our Data Engineering program covers schema management and data contracts for production pipelines."}
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
                  <Link href="/data-engineering/articles/great-expectations" className="related-article-card">
                    <h4>
                      {"Great Expectations"}
                    </h4>
                    {" "}
                    <p>
                      {"Data quality validation"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Schema Registry."} />
    </>
  );
}
