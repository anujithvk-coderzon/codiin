import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "AWS Data Engineering: Building Cloud Data Platforms",
  description: "Learn AWS Data Engineering - S3, Glue, Redshift, Athena, EMR, and building data platforms on Amazon Web Services.",
  keywords: ["AWS data engineering", "Amazon S3", "AWS Glue", "Redshift", "Athena", "EMR", "cloud data platform"],
  alternates: { canonical: "/data-engineering/articles/aws-data-engineering" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/aws-data-engineering",
    title: "AWS Data Engineering: Building Cloud Data Platforms",
    description: "Master AWS services for data engineering and analytics.",
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
  "headline": "AWS Data Engineering: Building Cloud Data Platforms",
  "description": "Complete guide to AWS services for data engineering",
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

export default function DataEngineeringAwsDataEngineeringPage() {
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
                {"AWS Data Engineering"}
              </span>
            </div>
            <h1>
              {"AWS Data Engineering"}
            </h1>
            <p className="article-subtitle">
              {"Building Cloud Data Platforms on AWS"}
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
                  {"AWS Data Services Overview"}
                </h2>
                <p>
                  {"Amazon Web Services offers a comprehensive suite of services for building data platforms. From storage to processing to analytics, AWS provides managed services that scale automatically and integrate seamlessly."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Storage:"}
                    </strong>
                    {" S3, EBS, EFS"}
                  </li>
                  <li>
                    <strong>
                      {"Databases:"}
                    </strong>
                    {" RDS, DynamoDB, Redshift"}
                  </li>
                  <li>
                    <strong>
                      {"Processing:"}
                    </strong>
                    {" Glue, EMR, Lambda"}
                  </li>
                  <li>
                    <strong>
                      {"Analytics:"}
                    </strong>
                    {" Athena, QuickSight"}
                  </li>
                  <li>
                    <strong>
                      {"Streaming:"}
                    </strong>
                    {" Kinesis, MSK (Kafka)"}
                  </li>
                  <li>
                    <strong>
                      {"Governance:"}
                    </strong>
                    {" Lake Formation, Glue Catalog"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Amazon S3 for Data Lakes"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import boto3

s3 = boto3.client('s3')

# Create bucket for data lake
s3.create_bucket(
    Bucket='my-data-lake',
    CreateBucketConfiguration={'LocationConstraint': 'us-west-2'}
)

# Upload data with lifecycle
s3.put_object(
    Bucket='my-data-lake',
    Key='bronze/events/2024/01/01/events.parquet',
    Body=data,
    StorageClass='INTELLIGENT_TIERING'
)

# Set lifecycle policy
lifecycle_policy = {
    'Rules': [{
        'ID': 'MoveToGlacier',
        'Status': 'Enabled',
        'Filter': {'Prefix': 'archive/'},
        'Transitions': [{
            'Days': 90,
            'StorageClass': 'GLACIER'
        }],
        'Expiration': {'Days': 365}
    }]
}

s3.put_bucket_lifecycle_configuration(
    Bucket='my-data-lake',
    LifecycleConfiguration=lifecycle_policy
)

# Enable versioning
s3.put_bucket_versioning(
    Bucket='my-data-lake',
    VersioningConfiguration={'Status': 'Enabled'}
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"AWS Glue ETL"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Glue ETL Job (PySpark)
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

args = getResolvedOptions(sys.argv, ['JOB_NAME'])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)

# Read from Glue Catalog
datasource = glueContext.create_dynamic_frame.from_catalog(
    database="raw_database",
    table_name="events"
)

# Transform
mapped = ApplyMapping.apply(
    frame=datasource,
    mappings=[
        ("event_id", "string", "event_id", "string"),
        ("event_type", "string", "event_type", "string"),
        ("timestamp", "string", "event_timestamp", "timestamp"),
        ("user_id", "long", "user_id", "long")
    ]
)

# Filter
filtered = Filter.apply(
    frame=mapped,
    f=lambda x: x["event_type"] in ["purchase", "signup"]
)

# Write to S3
glueContext.write_dynamic_frame.from_options(
    frame=filtered,
    connection_type="s3",
    format="parquet",
    connection_options={
        "path": "s3://my-data-lake/silver/events/",
        "partitionKeys": ["event_type"]
    }
)

job.commit()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Amazon Athena"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Create external table on S3 data
CREATE EXTERNAL TABLE events (
    event_id STRING,
    user_id BIGINT,
    event_type STRING,
    properties STRING,
    event_timestamp TIMESTAMP
)
PARTITIONED BY (year INT, month INT, day INT)
STORED AS PARQUET
LOCATION 's3://my-data-lake/silver/events/'
TBLPROPERTIES ('parquet.compression'='SNAPPY');

-- Add partitions
MSCK REPAIR TABLE events;

-- Query with partition pruning
SELECT
    event_type,
    COUNT(*) as event_count,
    COUNT(DISTINCT user_id) as unique_users
FROM events
WHERE year = 2024 AND month = 1
GROUP BY event_type
ORDER BY event_count DESC;

-- Create view
CREATE VIEW daily_metrics AS
SELECT
    DATE(event_timestamp) as event_date,
    COUNT(*) as total_events,
    COUNT(DISTINCT user_id) as dau
FROM events
GROUP BY DATE(event_timestamp);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Amazon Redshift"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Create Redshift table with distribution
CREATE TABLE fact_sales (
    sale_id BIGINT IDENTITY(1,1),
    sale_date DATE SORTKEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    amount DECIMAL(12,2)
)
DISTSTYLE KEY
DISTKEY (customer_id);

-- Load from S3 using COPY
COPY fact_sales (sale_date, customer_id, product_id, quantity, amount)
FROM 's3://my-data-lake/sales/'
IAM_ROLE 'arn:aws:iam::123456789:role/RedshiftLoadRole'
FORMAT AS PARQUET;

-- Query Redshift Spectrum (external tables)
CREATE EXTERNAL SCHEMA spectrum_schema
FROM DATA CATALOG
DATABASE 'my_glue_database'
IAM_ROLE 'arn:aws:iam::123456789:role/RedshiftSpectrumRole';

-- Join local and external tables
SELECT
    s.sale_date,
    c.customer_name,
    SUM(s.amount) as total_sales
FROM fact_sales s
JOIN spectrum_schema.dim_customers c
    ON s.customer_id = c.customer_id
GROUP BY s.sale_date, c.customer_name;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Amazon Kinesis"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import boto3
import json

kinesis = boto3.client('kinesis')

# Put record to stream
def put_event(stream_name, event):
    response = kinesis.put_record(
        StreamName=stream_name,
        Data=json.dumps(event).encode('utf-8'),
        PartitionKey=event['user_id']
    )
    return response

# Batch put records
def put_events_batch(stream_name, events):
    records = [{
        'Data': json.dumps(event).encode('utf-8'),
        'PartitionKey': str(event['user_id'])
    } for event in events]

    response = kinesis.put_records(
        StreamName=stream_name,
        Records=records
    )
    return response

# Consume with Kinesis Data Analytics (Flink)
# application.py
from pyflink.datastream import StreamExecutionEnvironment
from pyflink.table import StreamTableEnvironment

env = StreamExecutionEnvironment.get_execution_environment()
t_env = StreamTableEnvironment.create(env)

t_env.execute_sql("""
    CREATE TABLE events (
        event_id STRING,
        user_id BIGINT,
        event_type STRING,
        event_time TIMESTAMP(3),
        WATERMARK FOR event_time AS event_time - INTERVAL '5' SECOND
    ) WITH (
        'connector' = 'kinesis',
        'stream' = 'events-stream',
        'aws.region' = 'us-west-2',
        'format' = 'json'
    )
""")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"AWS Lake Formation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import boto3

lakeformation = boto3.client('lakeformation')

# Register S3 location
lakeformation.register_resource(
    ResourceArn='arn:aws:s3:::my-data-lake'
)

# Grant permissions
lakeformation.grant_permissions(
    Principal={'DataLakePrincipalIdentifier': 'arn:aws:iam::123456789:role/AnalystRole'},
    Resource={
        'Table': {
            'DatabaseName': 'analytics',
            'Name': 'events'
        }
    },
    Permissions=['SELECT'],
    PermissionsWithGrantOption=[]
)

# Create data filter (row-level security)
lakeformation.create_data_cells_filter(
    TableData={
        'TableCatalogId': '123456789',
        'DatabaseName': 'analytics',
        'TableName': 'events',
        'Name': 'us_only',
        'RowFilter': {
            'FilterExpression': "country = 'US'"
        },
        'ColumnNames': ['event_id', 'user_id', 'event_type']
    }
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"EMR for Big Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import boto3

emr = boto3.client('emr')

# Create EMR cluster
response = emr.run_job_flow(
    Name='DataProcessingCluster',
    ReleaseLabel='emr-6.10.0',
    Applications=[
        {'Name': 'Spark'},
        {'Name': 'Hive'},
        {'Name': 'Presto'}
    ],
    Instances={
        'MasterInstanceType': 'm5.xlarge',
        'SlaveInstanceType': 'm5.2xlarge',
        'InstanceCount': 5,
        'Ec2KeyName': 'my-key',
        'KeepJobFlowAliveWhenNoSteps': True
    },
    Steps=[{
        'Name': 'Spark ETL',
        'ActionOnFailure': 'CONTINUE',
        'HadoopJarStep': {
            'Jar': 'command-runner.jar',
            'Args': [
                'spark-submit',
                '--deploy-mode', 'cluster',
                's3://my-bucket/scripts/etl.py'
            ]
        }
    }],
    JobFlowRole='EMR_EC2_DefaultRole',
    ServiceRole='EMR_DefaultRole'
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
                      {"Use S3 as central storage:"}
                    </strong>
                    {" Store all data in S3, query with Athena/Redshift"}
                  </li>
                  <li>
                    <strong>
                      {"Partition data:"}
                    </strong>
                    {" Organize by date for efficient querying"}
                  </li>
                  <li>
                    <strong>
                      {"Use columnar formats:"}
                    </strong>
                    {" Parquet or ORC for analytics workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Implement least privilege:"}
                    </strong>
                    {" Use Lake Formation for fine-grained access"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor costs:"}
                    </strong>
                    {" Use Cost Explorer and set billing alerts"}
                  </li>
                  <li>
                    <strong>
                      {"Automate with Step Functions:"}
                    </strong>
                    {" Orchestrate complex workflows"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master AWS Data Engineering with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers AWS services for building production data platforms. Learn cloud architecture with guidance from industry experts."}
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
                  <Link href="/data-engineering/articles/data-lakes" className="related-article-card">
                    <h4>
                      {"Data Lakes"}
                    </h4>
                    {" "}
                    <p>
                      {"Lake architecture patterns"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-spark" className="related-article-card">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Big data processing"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-warehousing" className="related-article-card">
                    <h4>
                      {"Data Warehousing"}
                    </h4>
                    {" "}
                    <p>
                      {"Analytics architecture"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn AWS Data Engineering."} />
    </>
  );
}
