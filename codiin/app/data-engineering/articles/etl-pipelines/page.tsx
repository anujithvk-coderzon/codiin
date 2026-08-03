import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "ETL Pipeline Design: Building Robust Data Pipelines",
  description: "Learn ETL Pipeline Design - extraction patterns, transformation strategies, loading techniques, and building robust data pipelines with Python.",
  keywords: ["ETL pipeline tutorial", "data pipeline design", "extract transform load", "data integration", "Python ETL"],
  alternates: { canonical: "/data-engineering/articles/etl-pipelines" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/etl-pipelines",
    title: "ETL Pipeline Design: Building Robust Data Pipelines",
    description: "Master ETL pipeline architecture and implementation patterns.",
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
  "headline": "ETL Pipeline Design: Building Robust Data Pipelines",
  "description": "Complete guide to ETL pipeline architecture",
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

export default function DataEngineeringEtlPipelinesPage() {
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
                {"ETL Pipelines"}
              </span>
            </div>
            <h1>
              {"ETL Pipeline Design"}
            </h1>
            <p className="article-subtitle">
              {"Building Robust Data Pipelines"}
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
                  {"What is ETL?"}
                </h2>
                <p>
                  {"ETL (Extract, Transform, Load) is the process of moving data from source systems into a data warehouse or data lake. It's the backbone of any data platform, enabling analytics and business intelligence."}
                </p>
                <p>
                  {"Modern pipelines often use ELT (Extract, Load, Transform), where raw data is loaded first and transformations happen in the target system using tools like dbt."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"ETL Architecture"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Extract:"}
                    </strong>
                    {" Pull data from source systems (databases, APIs, files)"}
                  </li>
                  <li>
                    <strong>
                      {"Transform:"}
                    </strong>
                    {" Clean, validate, and reshape data"}
                  </li>
                  <li>
                    <strong>
                      {"Load:"}
                    </strong>
                    {" Write data to destination (warehouse, lake, database)"}
                  </li>
                  <li>
                    <strong>
                      {"Orchestrate:"}
                    </strong>
                    {" Schedule and monitor pipeline execution"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Extraction Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import requests
from sqlalchemy import create_engine

# Extract from Database
def extract_from_database(connection_string, query):
    engine = create_engine(connection_string)
    return pd.read_sql(query, engine)

# Incremental extraction
def extract_incremental(connection_string, table, last_modified):
    query = f"""
        SELECT * FROM {table}
        WHERE updated_at > '{last_modified}'
    """
    return extract_from_database(connection_string, query)

# Extract from API
def extract_from_api(url, headers=None, params=None):
    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    return response.json()

# Paginated API extraction
def extract_paginated_api(base_url, headers):
    all_data = []
    page = 1

    while True:
        response = requests.get(
            f"{base_url}?page={page}",
            headers=headers
        )
        data = response.json()

        if not data['results']:
            break

        all_data.extend(data['results'])
        page += 1

    return all_data

# Extract from files
def extract_from_files(path, file_format='csv'):
    if file_format == 'csv':
        return pd.read_csv(path)
    elif file_format == 'parquet':
        return pd.read_parquet(path)
    elif file_format == 'json':
        return pd.read_json(path)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Transformation Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np

def transform_data(df):
    """Apply common transformations"""

    # 1. Data cleaning
    df = df.drop_duplicates()
    df = df.dropna(subset=['required_column'])

    # 2. Type casting
    df['date_column'] = pd.to_datetime(df['date_column'])
    df['amount'] = df['amount'].astype(float)

    # 3. String normalization
    df['email'] = df['email'].str.lower().str.strip()
    df['name'] = df['name'].str.title()

    # 4. Derived columns
    df['year'] = df['date_column'].dt.year
    df['month'] = df['date_column'].dt.month
    df['full_name'] = df['first_name'] + ' ' + df['last_name']

    # 5. Conditional logic
    df['segment'] = np.where(
        df['total_spend'] > 1000, 'Premium', 'Standard'
    )

    # 6. Aggregations
    summary = df.groupby('customer_id').agg({
        'order_id': 'count',
        'amount': 'sum'
    }).reset_index()

    # 7. Joins
    df = df.merge(
        lookup_table,
        on='key_column',
        how='left'
    )

    return df

# Data validation
def validate_data(df):
    """Validate data quality"""
    errors = []

    # Check for nulls in required columns
    null_counts = df[['id', 'email']].isnull().sum()
    if null_counts.any():
        errors.append(f"Null values found: {null_counts.to_dict()}")

    # Check for duplicates
    dup_count = df.duplicated(subset=['id']).sum()
    if dup_count > 0:
        errors.append(f"Found {dup_count} duplicate records")

    # Check value ranges
    invalid_amounts = df[df['amount'] < 0]
    if len(invalid_amounts) > 0:
        errors.append(f"Found {len(invalid_amounts)} negative amounts")

    if errors:
        raise ValueError(f"Validation failed: {errors}")

    return df`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Loading Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sqlalchemy import create_engine
import pandas as pd

def load_to_database(df, table_name, connection_string, mode='append'):
    """
    Load data to database
    mode: 'append', 'replace', or 'fail'
    """
    engine = create_engine(connection_string)

    df.to_sql(
        name=table_name,
        con=engine,
        if_exists=mode,
        index=False,
        chunksize=10000  # Batch inserts
    )

# Upsert pattern (merge)
def upsert_data(df, table_name, key_columns, connection_string):
    """Insert new records, update existing ones"""
    engine = create_engine(connection_string)

    # Load existing keys
    existing = pd.read_sql(
        f"SELECT {', '.join(key_columns)} FROM {table_name}",
        engine
    )

    # Split into inserts and updates
    merged = df.merge(existing, on=key_columns, how='left', indicator=True)
    to_insert = merged[merged['_merge'] == 'left_only'].drop('_merge', axis=1)
    to_update = merged[merged['_merge'] == 'both'].drop('_merge', axis=1)

    # Insert new records
    if len(to_insert) > 0:
        to_insert.to_sql(table_name, engine, if_exists='append', index=False)

    # Update existing records (simplified)
    for _, row in to_update.iterrows():
        update_query = build_update_query(table_name, row, key_columns)
        engine.execute(update_query)

# Load to data lake (S3/GCS)
def load_to_data_lake(df, path, partition_cols=None):
    """Write partitioned parquet to data lake"""
    df.to_parquet(
        path,
        partition_cols=partition_cols,
        compression='snappy',
        index=False
    )`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Pipeline Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ETLPipeline:
    def __init__(self, config):
        self.config = config
        self.metrics = {}

    def run(self):
        """Execute the full ETL pipeline"""
        try:
            logger.info("Starting ETL pipeline")
            start_time = datetime.now()

            # Extract
            logger.info("Extracting data...")
            raw_data = self.extract()
            self.metrics['extracted_rows'] = len(raw_data)

            # Transform
            logger.info("Transforming data...")
            transformed_data = self.transform(raw_data)
            self.metrics['transformed_rows'] = len(transformed_data)

            # Validate
            logger.info("Validating data...")
            self.validate(transformed_data)

            # Load
            logger.info("Loading data...")
            self.load(transformed_data)
            self.metrics['loaded_rows'] = len(transformed_data)

            # Record metrics
            self.metrics['duration'] = (datetime.now() - start_time).seconds
            self.metrics['status'] = 'success'

            logger.info(f"Pipeline completed: {self.metrics}")
            return self.metrics

        except Exception as e:
            self.metrics['status'] = 'failed'
            self.metrics['error'] = str(e)
            logger.error(f"Pipeline failed: {e}")
            raise

    def extract(self):
        # Implementation
        pass

    def transform(self, data):
        # Implementation
        pass

    def validate(self, data):
        # Implementation
        pass

    def load(self, data):
        # Implementation
        pass

# Usage
if __name__ == '__main__':
    config = {'source': 'postgres', 'destination': 'warehouse'}
    pipeline = ETLPipeline(config)
    pipeline.run()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import time
from functools import wraps

def retry(max_attempts=3, delay=1, backoff=2):
    """Retry decorator with exponential backoff"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            attempts = 0
            current_delay = delay

            while attempts < max_attempts:
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    attempts += 1
                    if attempts == max_attempts:
                        raise

                    logger.warning(
                        f"Attempt {attempts} failed: {e}. "
                        f"Retrying in {current_delay}s..."
                    )
                    time.sleep(current_delay)
                    current_delay *= backoff

        return wrapper
    return decorator

@retry(max_attempts=3, delay=5)
def extract_with_retry():
    """Extraction with automatic retry"""
    return extract_from_api(url)

# Dead letter queue pattern
def process_with_dlq(records, process_func, dlq_path):
    """Process records, send failures to dead letter queue"""
    successful = []
    failed = []

    for record in records:
        try:
            result = process_func(record)
            successful.append(result)
        except Exception as e:
            failed.append({
                'record': record,
                'error': str(e),
                'timestamp': datetime.now().isoformat()
            })

    # Save failed records for later reprocessing
    if failed:
        pd.DataFrame(failed).to_json(dlq_path)
        logger.warning(f"Sent {len(failed)} records to DLQ")

    return successful`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Idempotency:"}
                    </strong>
                    {" Pipeline should produce same result when re-run"}
                  </li>
                  <li>
                    <strong>
                      {"Incremental processing:"}
                    </strong>
                    {" Only process new/changed data"}
                  </li>
                  <li>
                    <strong>
                      {"Data validation:"}
                    </strong>
                    {" Validate at extraction and after transformation"}
                  </li>
                  <li>
                    <strong>
                      {"Logging and monitoring:"}
                    </strong>
                    {" Track metrics, errors, and data lineage"}
                  </li>
                  <li>
                    <strong>
                      {"Atomic operations:"}
                    </strong>
                    {" All-or-nothing loads prevent partial data"}
                  </li>
                  <li>
                    <strong>
                      {"Testing:"}
                    </strong>
                    {" Unit test transformations, integration test full pipeline"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master ETL Pipelines with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers ETL design patterns and implementation. Build production-ready pipelines with guidance from industry experts."}
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
                  <Link href="/data-engineering/articles/apache-airflow" className="related-article-card">
                    <h4>
                      {"Apache Airflow"}
                    </h4>
                    {" "}
                    <p>
                      {"Orchestrate your pipelines"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-spark" className="related-article-card">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Process at scale"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt for Transformation"}
                    </h4>
                    {" "}
                    <p>
                      {"SQL-based transformations"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn ETL Pipelines."} />
    </>
  );
}
