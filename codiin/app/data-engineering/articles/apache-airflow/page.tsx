import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Apache Airflow: Workflow Orchestration Platform",
  description: "Learn Apache Airflow - the platform for programmatically authoring, scheduling, and monitoring workflows. Master DAGs, operators, and pipeline orchestration.",
  keywords: ["Apache Airflow tutorial", "workflow orchestration", "DAGs", "data pipeline scheduling", "ETL automation"],
  alternates: { canonical: "/data-engineering/articles/apache-airflow" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/apache-airflow",
    title: "Apache Airflow: Workflow Orchestration Platform",
    description: "Master Apache Airflow for scheduling and monitoring data pipelines.",
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
  "headline": "Apache Airflow: Workflow Orchestration Platform",
  "description": "Complete guide to Apache Airflow for data pipeline orchestration",
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

export default function DataEngineeringApacheAirflowPage() {
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
                {"Apache Airflow"}
              </span>
            </div>
            <h1>
              {"Apache Airflow"}
            </h1>
            <p className="article-subtitle">
              {"The Platform for Workflow Orchestration"}
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
                  {"What is Apache Airflow?"}
                </h2>
                <p>
                  {"Apache Airflow is an open-source platform for programmatically authoring, scheduling, and monitoring workflows. Originally developed at Airbnb, it has become the industry standard for orchestrating data pipelines."}
                </p>
                <p>
                  {"Airflow uses Python to define workflows as Directed Acyclic Graphs (DAGs), making it flexible and powerful for any orchestration need."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"DAG:"}
                    </strong>
                    {" Directed Acyclic Graph - a collection of tasks with dependencies"}
                  </li>
                  <li>
                    <strong>
                      {"Task:"}
                    </strong>
                    {" A unit of work defined by an Operator"}
                  </li>
                  <li>
                    <strong>
                      {"Operator:"}
                    </strong>
                    {" Template for a predefined task (PythonOperator, BashOperator, etc.)"}
                  </li>
                  <li>
                    <strong>
                      {"Sensor:"}
                    </strong>
                    {" Operator that waits for a condition to be met"}
                  </li>
                  <li>
                    <strong>
                      {"Hook:"}
                    </strong>
                    {" Interface to external systems (databases, APIs)"}
                  </li>
                  <li>
                    <strong>
                      {"XCom:"}
                    </strong>
                    {" Cross-communication for passing data between tasks"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Your First DAG"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta

# Default arguments
default_args = {
    'owner': 'data_team',
    'depends_on_past': False,
    'email': ['alerts@company.com'],
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
}

# Define DAG
dag = DAG(
    'my_first_dag',
    default_args=default_args,
    description='A simple tutorial DAG',
    schedule_interval='0 0 * * *',  # Daily at midnight
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['example'],
)

# Define tasks
def extract_data():
    print("Extracting data...")
    return {'records': 100}

def transform_data(**context):
    extracted = context['ti'].xcom_pull(task_ids='extract')
    print(f"Transforming {extracted['records']} records")
    return {'transformed': extracted['records']}

extract = PythonOperator(
    task_id='extract',
    python_callable=extract_data,
    dag=dag,
)

transform = PythonOperator(
    task_id='transform',
    python_callable=transform_data,
    dag=dag,
)

load = BashOperator(
    task_id='load',
    bash_command='echo "Loading data to warehouse"',
    dag=dag,
)

# Set dependencies
extract >> transform >> load`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"TaskFlow API (Airflow 2.0+)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from airflow.decorators import dag, task
from datetime import datetime

@dag(
    schedule_interval='@daily',
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['etl']
)
def etl_pipeline():

    @task()
    def extract():
        """Extract data from source"""
        return {'data': [1, 2, 3, 4, 5]}

    @task()
    def transform(raw_data: dict):
        """Transform the extracted data"""
        return {'data': [x * 2 for x in raw_data['data']]}

    @task()
    def load(transformed_data: dict):
        """Load data to destination"""
        print(f"Loading: {transformed_data}")

    # Define dependencies via function calls
    raw = extract()
    transformed = transform(raw)
    load(transformed)

# Instantiate DAG
etl_dag = etl_pipeline()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Operators"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from airflow.providers.postgres.operators.postgres import PostgresOperator
from airflow.providers.http.operators.http import SimpleHttpOperator
from airflow.sensors.filesystem import FileSensor

# Python Operator
python_task = PythonOperator(
    task_id='python_task',
    python_callable=my_function,
    op_kwargs={'param': 'value'},
)

# Bash Operator
bash_task = BashOperator(
    task_id='bash_task',
    bash_command='python /scripts/process.py {{ ds }}',
)

# PostgreSQL Operator
sql_task = PostgresOperator(
    task_id='run_sql',
    postgres_conn_id='postgres_default',
    sql='SELECT * FROM users WHERE date = {{ ds }}',
)

# HTTP Operator
api_task = SimpleHttpOperator(
    task_id='call_api',
    http_conn_id='api_connection',
    endpoint='/data/{{ ds }}',
    method='GET',
)

# File Sensor - waits for file
wait_for_file = FileSensor(
    task_id='wait_for_file',
    filepath='/data/input/{{ ds }}.csv',
    poke_interval=60,
    timeout=3600,
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dynamic DAGs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Generate tasks dynamically
tables = ['users', 'orders', 'products']

for table in tables:
    task = PythonOperator(
        task_id=f'process_{table}',
        python_callable=process_table,
        op_kwargs={'table': table},
        dag=dag,
    )

    start >> task >> end

# Branching
from airflow.operators.python import BranchPythonOperator

def choose_branch(**context):
    if condition:
        return 'branch_a'
    return 'branch_b'

branch = BranchPythonOperator(
    task_id='branch',
    python_callable=choose_branch,
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
                      {"Idempotent tasks:"}
                    </strong>
                    {" Tasks should produce same result when re-run"}
                  </li>
                  <li>
                    <strong>
                      {"Atomic tasks:"}
                    </strong>
                    {" Each task does one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"No heavy processing in DAG file:"}
                    </strong>
                    {" DAG parsing should be fast"}
                  </li>
                  <li>
                    <strong>
                      {"Use Connections:"}
                    </strong>
                    {" Store credentials securely in Airflow"}
                  </li>
                  <li>
                    <strong>
                      {"Test DAGs:"}
                    </strong>
                    {" Write unit tests for your Python functions"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor:"}
                    </strong>
                    {" Set up alerts and monitor DAG runs"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Apache Airflow with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers Airflow from basics to production deployment. Build robust pipeline orchestration with guidance from industry experts."}
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
                      {"Big data processing"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/etl-pipelines" className="related-article-card">
                    <h4>
                      {"ETL Pipeline Design"}
                    </h4>
                    {" "}
                    <p>
                      {"Build data pipelines"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt for Data Transformation"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern data modeling"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Apache Airflow."} />
    </>
  );
}
