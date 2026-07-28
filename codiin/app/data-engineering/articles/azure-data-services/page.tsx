import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Azure Data Services Guide",
  description: "Learn Azure Data Services - Azure Synapse Analytics, Data Factory, Azure Data Lake, Event Hubs. Master cloud data engineering on Microsoft Azure platform.",
  keywords: ["Azure", "Synapse Analytics", "Data Factory", "Azure Data Lake", "Event Hubs", "Microsoft Azure", "cloud data engineering"],
  alternates: { canonical: "/data-engineering/articles/azure-data-services" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/azure-data-services",
    title: "Azure Data Services: Cloud Data Engineering",
    description: "Master data engineering on Microsoft Azure platform.",
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
  "headline": "Azure Data Services: Cloud Data Engineering",
  "description": "Complete guide to Azure data services for data engineering",
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

export default function DataEngineeringAzureDataServicesPage() {
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
                {"Azure Data Services"}
              </span>
            </div>
            <h1>
              {"Azure Data Services"}
            </h1>
            <p className="article-subtitle">
              {"Cloud Data Engineering on Microsoft Azure"}
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
                  {"Azure Data Services Overview"}
                </h2>
                <p>
                  {"Microsoft Azure provides a comprehensive suite of data services for building modern data platforms. From data ingestion to analytics and machine learning, Azure offers managed services that integrate seamlessly."}
                </p>
                <p>
                  {"This guide covers key Azure services used in data engineering: Synapse Analytics, Data Factory, Data Lake Storage, Event Hubs, and Stream Analytics."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Data Platform Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                  Azure Data Platform Architecture                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Data Sources                                                   │
│   ├── Databases (SQL, CosmosDB, MySQL)                          │
│   ├── Applications (APIs, SaaS)                                 │
│   ├── IoT Devices                                               │
│   └── Files (CSV, JSON, Parquet)                                │
│                          │                                       │
│   ┌──────────────────────▼───────────────────────────────────┐  │
│   │              Azure Data Factory                           │  │
│   │    - Data orchestration & ETL                            │  │
│   │    - 100+ connectors                                     │  │
│   │    - Mapping data flows (Spark-based)                    │  │
│   └──────────────────────┬───────────────────────────────────┘  │
│                          │                                       │
│   ┌──────────────────────▼───────────────────────────────────┐  │
│   │           Azure Data Lake Storage Gen2                    │  │
│   │    - Hierarchical namespace                              │  │
│   │    - Raw / Curated / Serving zones                       │  │
│   │    - Parquet, Delta Lake formats                         │  │
│   └──────────────────────┬───────────────────────────────────┘  │
│                          │                                       │
│   ┌──────────────────────▼───────────────────────────────────┐  │
│   │             Azure Synapse Analytics                       │  │
│   │    - SQL pools (dedicated & serverless)                  │  │
│   │    - Spark pools                                         │  │
│   │    - Data Explorer                                       │  │
│   │    - Pipelines (Data Factory integration)                │  │
│   └──────────────────────┬───────────────────────────────────┘  │
│                          │                                       │
│   Consumers: Power BI, Azure ML, Applications                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Data Lake Storage Gen2"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Azure Data Lake Storage Gen2 - Foundation of Azure data platform
# Combines Azure Blob Storage with hierarchical namespace

# Python SDK
pip install azure-storage-file-datalake azure-identity

from azure.storage.filedatalake import DataLakeServiceClient
from azure.identity import DefaultAzureCredential

# Connect to Data Lake
account_url = "https://mystorageaccount.dfs.core.windows.net"
credential = DefaultAzureCredential()
service_client = DataLakeServiceClient(account_url, credential=credential)

# Create file system (container)
file_system_client = service_client.create_file_system(file_system="raw-data")

# Create directory structure (Medallion Architecture)
directories = ['bronze', 'silver', 'gold']
for dir_name in directories:
    file_system_client.create_directory(dir_name)

# Upload file
directory_client = file_system_client.get_directory_client("bronze/sales")
directory_client.create_directory()

file_client = directory_client.create_file("sales_2024.parquet")
with open("local_sales.parquet", "rb") as f:
    file_client.upload_data(f.read(), overwrite=True)

# List files
paths = file_system_client.get_paths(path="bronze")
for path in paths:
    print(f'{path.name} - {path.content_length} bytes')

# Access Control (ACLs)
from azure.storage.filedatalake import AccessControlChangeResult

# Set ACL on directory
acl = 'user::rwx,group::r-x,other::---'
directory_client.set_access_control(acl=acl)

# Best Practice: Organize data in zones
"""
raw-data/
├── bronze/           # Raw data as-is
│   ├── sales/
│   ├── customers/
│   └── products/
├── silver/           # Cleaned, validated
│   ├── sales_cleaned/
│   └── customers_enriched/
└── gold/             # Business-level aggregates
    ├── daily_sales/
    └── customer_360/
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Data Factory"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Azure Data Factory - Cloud ETL and data orchestration

# Python SDK for programmatic pipeline management
pip install azure-mgmt-datafactory azure-identity

from azure.mgmt.datafactory import DataFactoryManagementClient
from azure.identity import DefaultAzureCredential

# Initialize client
credential = DefaultAzureCredential()
adf_client = DataFactoryManagementClient(
    credential,
    subscription_id="your-subscription-id"
)

# Create Data Factory
from azure.mgmt.datafactory.models import Factory

factory = Factory(location='eastus')
adf_client.factories.create_or_update(
    resource_group_name='my-resource-group',
    factory_name='my-data-factory',
    factory=factory
)

# Create Linked Service (connection)
from azure.mgmt.datafactory.models import (
    LinkedServiceResource,
    AzureBlobStorageLinkedService
)

blob_ls = LinkedServiceResource(
    properties=AzureBlobStorageLinkedService(
        connection_string={
            'type': 'SecureString',
            'value': 'DefaultEndpointsProtocol=https;...'
        }
    )
)
adf_client.linked_services.create_or_update(
    'my-resource-group', 'my-data-factory',
    'AzureBlobStorage', blob_ls
)

# Create Dataset
from azure.mgmt.datafactory.models import (
    DatasetResource,
    AzureBlobDataset,
    LinkedServiceReference
)

dataset = DatasetResource(
    properties=AzureBlobDataset(
        linked_service_name=LinkedServiceReference(
            reference_name='AzureBlobStorage'
        ),
        folder_path='raw-data/sales',
        format={'type': 'ParquetFormat'}
    )
)

# Pipeline JSON definition (typically defined in Azure Portal or ARM templates)
"""
{
    "name": "SalesETLPipeline",
    "properties": {
        "activities": [
            {
                "name": "CopyFromSource",
                "type": "Copy",
                "inputs": [{"referenceName": "SourceDataset", "type": "DatasetReference"}],
                "outputs": [{"referenceName": "SinkDataset", "type": "DatasetReference"}],
                "typeProperties": {
                    "source": {"type": "SqlSource"},
                    "sink": {"type": "ParquetSink"}
                }
            },
            {
                "name": "TransformData",
                "type": "DataFlow",
                "typeProperties": {
                    "dataflow": {"referenceName": "SalesTransform", "type": "DataFlowReference"}
                },
                "dependsOn": [{"activity": "CopyFromSource", "dependencyConditions": ["Succeeded"]}]
            }
        ]
    }
}
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Synapse Analytics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Azure Synapse - Unified analytics platform
# Combines data warehouse, Spark, and data integration

# SQL Pool - Serverless (pay per query)
-- Query data in Data Lake directly
SELECT
    product_category,
    COUNT(*) as transaction_count,
    SUM(amount) as total_revenue
FROM OPENROWSET(
    BULK 'https://datalake.dfs.core.windows.net/gold/sales/*.parquet',
    FORMAT = 'PARQUET'
) AS sales
GROUP BY product_category
ORDER BY total_revenue DESC;

-- Create external table
CREATE EXTERNAL DATA SOURCE DataLake
WITH (
    LOCATION = 'https://datalake.dfs.core.windows.net/gold'
);

CREATE EXTERNAL FILE FORMAT ParquetFormat
WITH (FORMAT_TYPE = PARQUET);

CREATE EXTERNAL TABLE sales_external (
    sale_id VARCHAR(50),
    product_id VARCHAR(50),
    amount DECIMAL(10,2),
    sale_date DATE
)
WITH (
    LOCATION = '/sales/',
    DATA_SOURCE = DataLake,
    FILE_FORMAT = ParquetFormat
);

-- Query external table
SELECT * FROM sales_external WHERE sale_date >= '2024-01-01';

# Dedicated SQL Pool (provisioned)
-- Create distributed table
CREATE TABLE sales_fact
WITH (
    DISTRIBUTION = HASH(customer_id),
    CLUSTERED COLUMNSTORE INDEX
)
AS
SELECT * FROM sales_external;

# Synapse Spark Pool
from pyspark.sql import SparkSession

spark = SparkSession.builder.getOrCreate()

# Read from Data Lake
df = spark.read.parquet("abfss://raw-data@datalake.dfs.core.windows.net/sales/")

# Transform
from pyspark.sql.functions import col, sum, avg

aggregated = df.groupBy("product_category", "region") \\
    .agg(
        sum("amount").alias("total_sales"),
        avg("amount").alias("avg_order_value")
    )

# Write to gold zone
aggregated.write \\
    .mode("overwrite") \\
    .parquet("abfss://raw-data@datalake.dfs.core.windows.net/gold/sales_summary/")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Event Hubs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Azure Event Hubs - Real-time data ingestion
# Similar to Apache Kafka, Kafka API compatible

pip install azure-eventhub

from azure.eventhub import EventHubProducerClient, EventData
from azure.eventhub.aio import EventHubConsumerClient
import json
import asyncio

# Producer
connection_str = "Endpoint=sb://namespace.servicebus.windows.net/;SharedAccessKeyName=..."
eventhub_name = "events"

producer = EventHubProducerClient.from_connection_string(
    conn_str=connection_str,
    eventhub_name=eventhub_name
)

def send_events(events):
    with producer:
        event_batch = producer.create_batch()
        for event in events:
            event_batch.add(EventData(json.dumps(event)))
        producer.send_batch(event_batch)
        print(f'Sent {len(events)} events')

# Send sample events
events = [
    {'event_type': 'purchase', 'user_id': 'u1', 'amount': 99.99},
    {'event_type': 'view', 'user_id': 'u2', 'product_id': 'p123'},
]
send_events(events)

# Consumer (async)
async def on_event(partition_context, event):
    data = json.loads(event.body_as_str())
    print(f'Received: {data}')
    await partition_context.update_checkpoint(event)

async def consume_events():
    consumer = EventHubConsumerClient.from_connection_string(
        conn_str=connection_str,
        consumer_group='$Default',
        eventhub_name=eventhub_name
    )
    async with consumer:
        await consumer.receive(
            on_event=on_event,
            starting_position="-1"  # Start from beginning
        )

# Run consumer
asyncio.run(consume_events())

# Kafka compatibility - use existing Kafka clients
"""
from confluent_kafka import Producer

kafka_config = {
    'bootstrap.servers': 'namespace.servicebus.windows.net:9093',
    'security.protocol': 'SASL_SSL',
    'sasl.mechanism': 'PLAIN',
    'sasl.username': '$ConnectionString',
    'sasl.password': 'Endpoint=sb://...'
}

producer = Producer(kafka_config)
producer.produce('events', json.dumps(event).encode())
producer.flush()
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Stream Analytics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Azure Stream Analytics - Real-time analytics on streaming data
-- SQL-like query language for stream processing

-- Basic query: Filter and project
SELECT
    event_type,
    user_id,
    amount,
    EventProcessedUtcTime as processed_time
INTO [output-eventhub]
FROM [input-eventhub]
WHERE event_type = 'purchase'

-- Tumbling window aggregation
SELECT
    System.Timestamp() as window_end,
    event_type,
    COUNT(*) as event_count,
    SUM(amount) as total_amount
INTO [output-sql]
FROM [input-eventhub]
TIMESTAMP BY event_time
GROUP BY
    event_type,
    TumblingWindow(minute, 5)

-- Sliding window for moving average
SELECT
    System.Timestamp() as window_end,
    product_id,
    AVG(amount) as avg_price,
    COUNT(*) as transaction_count
INTO [output-blob]
FROM [input-eventhub]
TIMESTAMP BY event_time
GROUP BY
    product_id,
    SlidingWindow(minute, 10)
HAVING COUNT(*) > 5

-- Session window for user sessions
SELECT
    user_id,
    COUNT(*) as events_in_session,
    SUM(CASE WHEN event_type = 'purchase' THEN amount ELSE 0 END) as session_revenue,
    MIN(event_time) as session_start,
    MAX(event_time) as session_end
INTO [output-cosmos]
FROM [input-eventhub]
TIMESTAMP BY event_time
GROUP BY
    user_id,
    SessionWindow(minute, 30)

-- Join stream with reference data
SELECT
    e.user_id,
    e.amount,
    u.segment,
    u.region
INTO [output-enriched]
FROM [input-events] e
JOIN [reference-users] u ON e.user_id = u.user_id

-- Anomaly detection (built-in ML)
SELECT
    event_time,
    sensor_id,
    temperature,
    AnomalyDetection_SpikeAndDip(temperature, 95, 120, 'spikesanddips')
        OVER(PARTITION BY sensor_id LIMIT DURATION(minute, 10)) as anomaly
INTO [output-alerts]
FROM [input-iot]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Databricks Integration"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Azure Databricks - Managed Spark platform on Azure
# Tightly integrated with Azure services

# Mount Data Lake Storage
dbutils.fs.mount(
    source = "abfss://raw-data@datalake.dfs.core.windows.net/",
    mount_point = "/mnt/datalake",
    extra_configs = {
        "fs.azure.account.auth.type": "OAuth",
        "fs.azure.account.oauth.provider.type": "org.apache.hadoop.fs.azurebfs.oauth2.ClientCredsTokenProvider",
        "fs.azure.account.oauth2.client.id": dbutils.secrets.get("scope", "client-id"),
        "fs.azure.account.oauth2.client.secret": dbutils.secrets.get("scope", "client-secret"),
        "fs.azure.account.oauth2.client.endpoint": "https://login.microsoftonline.com/tenant-id/oauth2/token"
    }
)

# Read from mounted storage
df = spark.read.parquet("/mnt/datalake/bronze/sales/")

# Write Delta Lake format
df.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save("/mnt/datalake/silver/sales_cleaned/")

# Read from Event Hubs (Spark Structured Streaming)
from pyspark.sql.functions import col, from_json
from pyspark.sql.types import StructType, StringType, DoubleType

ehConf = {
    'eventhubs.connectionString': sc._jvm.org.apache.spark.eventhubs.EventHubsUtils.encrypt(connection_string)
}

stream_df = spark.readStream \\
    .format("eventhubs") \\
    .options(**ehConf) \\
    .load()

# Parse JSON body
schema = StructType() \\
    .add("event_type", StringType()) \\
    .add("user_id", StringType()) \\
    .add("amount", DoubleType())

parsed = stream_df.select(
    from_json(col("body").cast("string"), schema).alias("data")
).select("data.*")

# Write to Delta Lake with streaming
query = parsed.writeStream \\
    .format("delta") \\
    .outputMode("append") \\
    .option("checkpointLocation", "/mnt/datalake/checkpoints/events") \\
    .start("/mnt/datalake/silver/events/")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Infrastructure as Code (Bicep/ARM)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Azure Bicep - Deploy data infrastructure
// main.bicep

@description('Storage account name')
param storageAccountName string = 'datalake\${uniqueString(resourceGroup().id)}'

@description('Location for resources')
param location string = resourceGroup().location

// Data Lake Storage Gen2
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    isHnsEnabled: true  // Enable hierarchical namespace
    accessTier: 'Hot'
  }
}

// Synapse Workspace
resource synapseWorkspace 'Microsoft.Synapse/workspaces@2021-06-01' = {
  name: 'synapse-workspace'
  location: location
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    defaultDataLakeStorage: {
      accountUrl: 'https://\${storageAccountName}.dfs.core.windows.net'
      filesystem: 'synapse'
    }
  }
}

// Spark Pool
resource sparkPool 'Microsoft.Synapse/workspaces/bigDataPools@2021-06-01' = {
  parent: synapseWorkspace
  name: 'sparkpool'
  location: location
  properties: {
    nodeCount: 3
    nodeSizeFamily: 'MemoryOptimized'
    nodeSize: 'Small'
    autoScale: {
      enabled: true
      minNodeCount: 3
      maxNodeCount: 10
    }
    sparkVersion: '3.3'
  }
}

// Event Hub
resource eventHubNamespace 'Microsoft.EventHub/namespaces@2022-10-01-preview' = {
  name: 'eventhub-namespace'
  location: location
  sku: {
    name: 'Standard'
    tier: 'Standard'
    capacity: 1
  }
}

resource eventHub 'Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview' = {
  parent: eventHubNamespace
  name: 'events'
  properties: {
    partitionCount: 4
    messageRetentionInDays: 7
  }
}

// Deploy: az deployment group create -g my-rg --template-file main.bicep`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use Data Lake Gen2:"}
                    </strong>
                    {" Foundation for all analytics workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Implement Medallion Architecture:"}
                    </strong>
                    {" Bronze/Silver/Gold zones"}
                  </li>
                  <li>
                    <strong>
                      {"Choose right compute:"}
                    </strong>
                    {" Serverless SQL for ad-hoc, dedicated for heavy workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Use managed identities:"}
                    </strong>
                    {" Avoid storing credentials in code"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor costs:"}
                    </strong>
                    {" Use Azure Cost Management and set budgets"}
                  </li>
                  <li>
                    <strong>
                      {"Infrastructure as Code:"}
                    </strong>
                    {" Use Bicep/Terraform for reproducibility"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Azure Data Engineering"}
                </h2>
                <p>
                  {"Our Data Engineering program covers cloud data platforms including Azure, AWS, and GCP."}
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
                  <Link href="/data-engineering/articles/bigquery" className="related-article-card">
                    <h4>
                      {"BigQuery"}
                    </h4>
                    {" "}
                    <p>
                      {"GCP data warehouse"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/databricks" className="related-article-card">
                    <h4>
                      {"Databricks"}
                    </h4>
                    {" "}
                    <p>
                      {"Unified analytics platform"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Azure Data Services."} />
    </>
  );
}
