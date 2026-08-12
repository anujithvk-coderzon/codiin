import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Apache Kafka: Real-Time Event Streaming Platform",
  description: "Learn Apache Kafka - the distributed event streaming platform. Master producers, consumers, topics, partitions, and real-time data pipelines.",
  keywords: ["Apache Kafka tutorial", "event streaming", "real-time data", "Kafka producers", "Kafka consumers", "message queue"],
  alternates: { canonical: "/data-engineering/articles/apache-kafka" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/apache-kafka",
    title: "Apache Kafka: Real-Time Event Streaming Platform",
    description: "Master Apache Kafka for building real-time data pipelines.",
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
  "headline": "Apache Kafka: Real-Time Event Streaming Platform",
  "description": "Complete guide to Apache Kafka for real-time data streaming",
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

export default function DataEngineeringApacheKafkaPage() {
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
                {"Apache Kafka"}
              </span>
            </div>
            <h1>
              {"Apache Kafka"}
            </h1>
            <p className="article-subtitle">
              {"The Distributed Event Streaming Platform"}
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
                  {"What is Apache Kafka?"}
                </h2>
                <p>
                  {"Apache Kafka is a distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications. Originally developed at LinkedIn, Kafka can handle trillions of events per day."}
                </p>
                <p>
                  {"Think of Kafka as a distributed commit log - events are written once and can be read by multiple consumers at different speeds."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Topics:"}
                    </strong>
                    {" Categories for organizing messages (like database tables)"}
                  </li>
                  <li>
                    <strong>
                      {"Partitions:"}
                    </strong>
                    {" Topics are split into partitions for parallelism"}
                  </li>
                  <li>
                    <strong>
                      {"Producers:"}
                    </strong>
                    {" Applications that publish messages to topics"}
                  </li>
                  <li>
                    <strong>
                      {"Consumers:"}
                    </strong>
                    {" Applications that read messages from topics"}
                  </li>
                  <li>
                    <strong>
                      {"Brokers:"}
                    </strong>
                    {" Kafka servers that store data and serve clients"}
                  </li>
                  <li>
                    <strong>
                      {"Consumer Groups:"}
                    </strong>
                    {" Multiple consumers sharing the work of reading a topic"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Producing Messages"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from kafka import KafkaProducer
import json

# Create producer
producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8'),
    key_serializer=lambda k: k.encode('utf-8') if k else None
)

# Send message
producer.send(
    'user-events',
    key='user123',
    value={'event': 'login', 'timestamp': '2024-01-01T10:00:00'}
)

# Send with callback
def on_success(metadata):
    print(f"Sent to {metadata.topic} partition {metadata.partition}")

def on_error(error):
    print(f"Error: {error}")

future = producer.send('user-events', value={'event': 'purchase'})
future.add_callback(on_success)
future.add_errback(on_error)

# Flush and close
producer.flush()
producer.close()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Consuming Messages"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from kafka import KafkaConsumer
import json

# Create consumer
consumer = KafkaConsumer(
    'user-events',
    bootstrap_servers=['localhost:9092'],
    group_id='my-consumer-group',
    auto_offset_reset='earliest',  # or 'latest'
    value_deserializer=lambda m: json.loads(m.decode('utf-8'))
)

# Consume messages
for message in consumer:
    print(f"Topic: {message.topic}")
    print(f"Partition: {message.partition}")
    print(f"Offset: {message.offset}")
    print(f"Key: {message.key}")
    print(f"Value: {message.value}")

# Consume with timeout
consumer.poll(timeout_ms=1000)

# Manual commit
consumer = KafkaConsumer(
    'user-events',
    enable_auto_commit=False,
    group_id='my-group'
)

for message in consumer:
    process(message)
    consumer.commit()  # Commit after processing`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Kafka Connect"}
                </h2>
                <p>
                  {"Kafka Connect is a framework for streaming data between Kafka and external systems:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# connector-config.json
{
  "name": "postgres-source",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "localhost",
    "database.port": "5432",
    "database.user": "postgres",
    "database.password": "password",
    "database.dbname": "mydb",
    "database.server.name": "myserver",
    "table.include.list": "public.users,public.orders"
  }
}

# Deploy connector via REST API
curl -X POST http://localhost:8083/connectors \\
  -H "Content-Type: application/json" \\
  -d @connector-config.json`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Schema Registry"}
                </h2>
                <p>
                  {"Manage schemas for your Kafka messages with Avro:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from confluent_kafka import Producer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer

schema_str = """
{
  "type": "record",
  "name": "User",
  "fields": [
    {"name": "id", "type": "int"},
    {"name": "name", "type": "string"},
    {"name": "email", "type": "string"}
  ]
}
"""

schema_registry = SchemaRegistryClient({'url': 'http://localhost:8081'})
avro_serializer = AvroSerializer(schema_registry, schema_str)

producer = Producer({'bootstrap.servers': 'localhost:9092'})

user = {"id": 1, "name": "John", "email": "john@example.com"}
producer.produce(
    'users',
    value=avro_serializer(user, None)
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Use Cases"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Event Sourcing:"}
                    </strong>
                    {" Store all changes as a sequence of events"}
                  </li>
                  <li>
                    <strong>
                      {"Log Aggregation:"}
                    </strong>
                    {" Collect logs from multiple services"}
                  </li>
                  <li>
                    <strong>
                      {"Stream Processing:"}
                    </strong>
                    {" Real-time analytics and transformations"}
                  </li>
                  <li>
                    <strong>
                      {"Data Integration:"}
                    </strong>
                    {" Connect different systems together"}
                  </li>
                  <li>
                    <strong>
                      {"Messaging:"}
                    </strong>
                    {" Decouple services in microarchitectures"}
                  </li>
                  <li>
                    <strong>
                      {"Activity Tracking:"}
                    </strong>
                    {" User behavior and clickstream data"}
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
                      {"Choose partition key wisely:"}
                    </strong>
                    {" Affects ordering and parallelism"}
                  </li>
                  <li>
                    <strong>
                      {"Set appropriate retention:"}
                    </strong>
                    {" Balance storage vs. replay needs"}
                  </li>
                  <li>
                    <strong>
                      {"Use consumer groups:"}
                    </strong>
                    {" Scale consumption horizontally"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor lag:"}
                    </strong>
                    {" Track how far behind consumers are"}
                  </li>
                  <li>
                    <strong>
                      {"Handle failures:"}
                    </strong>
                    {" Implement dead letter queues"}
                  </li>
                  <li>
                    <strong>
                      {"Use schemas:"}
                    </strong>
                    {" Schema Registry prevents data issues"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Apache Kafka with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers Kafka from basics to production deployment. Build real-time streaming pipelines with guidance from industry experts."}
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
                      {"Apache Spark for Big Data"}
                    </h4>
                    {" "}
                    <p>
                      {"Process large-scale data"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-airflow" className="related-article-card">
                    <h4>
                      {"Apache Airflow"}
                    </h4>
                    {" "}
                    <p>
                      {"Orchestrate data workflows"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/etl-pipelines" className="related-article-card">
                    <h4>
                      {"ETL Pipeline Design"}
                    </h4>
                    {" "}
                    <p>
                      {"Build robust data pipelines"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Apache Kafka."} />
    </>
  );
}
