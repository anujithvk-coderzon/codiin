import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Great Expectations: Data Quality & Validation",
  description: "Learn Great Expectations - data quality and validation for Python. Master data testing, expectations, checkpoints, and data documentation.",
  keywords: ["Great Expectations tutorial", "data quality", "data validation", "Python data testing", "data profiling", "data documentation"],
  alternates: { canonical: "/data-engineering/articles/great-expectations" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/great-expectations",
    title: "Great Expectations: Data Quality & Validation",
    description: "Master data quality testing with Great Expectations.",
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
  "headline": "Great Expectations: Data Quality & Validation",
  "description": "Complete guide to data quality testing",
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

export default function DataEngineeringGreatExpectationsPage() {
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
                {"Great Expectations"}
              </span>
            </div>
            <h1>
              {"Great Expectations"}
            </h1>
            <p className="article-subtitle">
              {"Data Quality, Validation, and Documentation"}
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
                  {"What is Great Expectations?"}
                </h2>
                <p>
                  {"Great Expectations (GX) is an open-source Python library for validating, documenting, and profiling your data. It helps you maintain data quality by defining \"expectations\" - assertions about your data that can be tested automatically."}
                </p>
                <p>
                  {"Think of it as unit testing for your data pipelines."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Data Quality Matters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Catch issues early:"}
                    </strong>
                    {" Identify data problems before they affect downstream systems"}
                  </li>
                  <li>
                    <strong>
                      {"Build trust:"}
                    </strong>
                    {" Stakeholders can rely on validated data"}
                  </li>
                  <li>
                    <strong>
                      {"Documentation:"}
                    </strong>
                    {" Auto-generate data docs from expectations"}
                  </li>
                  <li>
                    <strong>
                      {"Pipeline reliability:"}
                    </strong>
                    {" Stop bad data from propagating"}
                  </li>
                  <li>
                    <strong>
                      {"Debugging:"}
                    </strong>
                    {" Clear reports when validation fails"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Great Expectations
pip install great_expectations

# Initialize a project
great_expectations init

# Project structure created:
# great_expectations/
# ├── great_expectations.yml   # Main config
# ├── expectations/            # Expectation suites
# ├── checkpoints/             # Validation checkpoints
# ├── plugins/                 # Custom expectations
# └── uncommitted/             # Local files

# Or programmatically
import great_expectations as gx

context = gx.get_context()  # Uses great_expectations.yml
# Or create in-memory context
context = gx.get_context(mode="ephemeral")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    Great Expectations Concepts                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Data Source          → Where your data lives (files, DB, etc.) │
│         ↓                                                        │
│  Data Asset           → A specific dataset (table, file)        │
│         ↓                                                        │
│  Batch                → A subset of data to validate            │
│         ↓                                                        │
│  Expectation Suite    → Collection of expectations              │
│         ↓                                                        │
│  Checkpoint           → Combines batch + suite for validation   │
│         ↓                                                        │
│  Validation Result    → Pass/fail results with details          │
│         ↓                                                        │
│  Data Docs            → Auto-generated documentation            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Creating Expectations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import great_expectations as gx
import pandas as pd

# Create context
context = gx.get_context()

# Connect to data
data_source = context.sources.add_pandas("my_pandas_source")
data_asset = data_source.add_dataframe_asset("customers")

# Create a batch from DataFrame
df = pd.read_csv("customers.csv")
batch_request = data_asset.build_batch_request(dataframe=df)

# Create expectation suite
suite = context.add_expectation_suite("customers_suite")

# Get a validator
validator = context.get_validator(
    batch_request=batch_request,
    expectation_suite_name="customers_suite"
)

# Add expectations
validator.expect_column_to_exist("customer_id")
validator.expect_column_to_exist("email")
validator.expect_column_to_exist("created_at")

validator.expect_column_values_to_not_be_null("customer_id")
validator.expect_column_values_to_be_unique("customer_id")

validator.expect_column_values_to_match_regex(
    "email",
    regex=r"^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$"
)

validator.expect_column_values_to_be_between(
    "age",
    min_value=0,
    max_value=120
)

# Save the suite
validator.save_expectation_suite(discard_failed_expectations=False)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Expectations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Table-level expectations
validator.expect_table_row_count_to_be_between(min_value=1000, max_value=1000000)
validator.expect_table_column_count_to_equal(10)
validator.expect_table_columns_to_match_ordered_list(
    ["id", "name", "email", "created_at"]
)

# Column existence and type
validator.expect_column_to_exist("user_id")
validator.expect_column_values_to_be_of_type("amount", "float64")

# Null handling
validator.expect_column_values_to_not_be_null("user_id")
validator.expect_column_values_to_be_null("deleted_at")  # For soft deletes

# Uniqueness
validator.expect_column_values_to_be_unique("email")
validator.expect_compound_columns_to_be_unique(["order_id", "product_id"])

# Value constraints
validator.expect_column_values_to_be_in_set(
    "status",
    value_set=["pending", "completed", "cancelled"]
)
validator.expect_column_values_to_be_between(
    "price",
    min_value=0,
    max_value=10000
)

# String patterns
validator.expect_column_values_to_match_regex(
    "phone",
    regex=r"^\\+?[1-9]\\d{9,14}$"
)
validator.expect_column_value_lengths_to_be_between(
    "zip_code",
    min_value=5,
    max_value=10
)

# Date/time
validator.expect_column_values_to_be_dateutil_parseable("created_at")

# Statistical expectations
validator.expect_column_mean_to_be_between("amount", min_value=50, max_value=200)
validator.expect_column_median_to_be_between("age", min_value=25, max_value=45)
validator.expect_column_stdev_to_be_between("score", min_value=5, max_value=15)

# Distribution
validator.expect_column_distinct_values_to_be_in_set(
    "country",
    value_set=["US", "UK", "CA", "AU"]
)
validator.expect_column_proportion_of_unique_values_to_be_between(
    "user_id",
    min_value=0.9,
    max_value=1.0
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Running Validations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create a checkpoint
checkpoint = context.add_or_update_checkpoint(
    name="customers_checkpoint",
    validations=[
        {
            "batch_request": batch_request,
            "expectation_suite_name": "customers_suite"
        }
    ]
)

# Run the checkpoint
result = checkpoint.run()

# Check if validation passed
if result.success:
    print("All expectations passed!")
else:
    print("Validation failed!")
    # Get details
    for validation_result in result.run_results.values():
        for expectation_result in validation_result["validation_result"]["results"]:
            if not expectation_result["success"]:
                print(f"Failed: {expectation_result['expectation_config']}")

# Build and view data docs
context.build_data_docs()
context.open_data_docs()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Integration with Pipelines"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Airflow integration
from airflow import DAG
from airflow.operators.python import PythonOperator
from great_expectations_provider.operators.great_expectations import (
    GreatExpectationsOperator
)

with DAG("data_pipeline", schedule_interval="@daily") as dag:

    validate_source = GreatExpectationsOperator(
        task_id="validate_source_data",
        data_context_root_dir="/path/to/great_expectations",
        checkpoint_name="source_checkpoint",
        fail_task_on_validation_failure=True
    )

    transform = PythonOperator(
        task_id="transform_data",
        python_callable=transform_data
    )

    validate_output = GreatExpectationsOperator(
        task_id="validate_output_data",
        data_context_root_dir="/path/to/great_expectations",
        checkpoint_name="output_checkpoint"
    )

    validate_source >> transform >> validate_output


# Direct Python integration
def validate_and_process(df):
    import great_expectations as gx

    context = gx.get_context()
    result = context.run_checkpoint(
        checkpoint_name="my_checkpoint",
        batch_request={
            "runtime_parameters": {"batch_data": df},
            "batch_identifiers": {"batch_id": "runtime_batch"}
        }
    )

    if not result.success:
        raise ValueError("Data validation failed!")

    return process_data(df)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Custom Expectations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create custom expectation
from great_expectations.expectations.expectation import ColumnMapExpectation
from great_expectations.execution_engine import PandasExecutionEngine

class ExpectColumnValuesToBeValidEmail(ColumnMapExpectation):
    """Expect column values to be valid email addresses."""

    expectation_type = "expect_column_values_to_be_valid_email"

    @classmethod
    def _validate(
        cls,
        configuration,
        metrics,
        runtime_configuration=None,
        execution_engine=None,
    ):
        import re
        email_pattern = r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$'

        column_values = metrics["column_values"]
        valid_count = sum(
            1 for val in column_values
            if val and re.match(email_pattern, str(val))
        )
        total_count = len(column_values)

        success = valid_count == total_count

        return {
            "success": success,
            "result": {
                "element_count": total_count,
                "unexpected_count": total_count - valid_count,
            }
        }

# Use custom expectation
validator.expect_column_values_to_be_valid_email("email")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start simple:"}
                    </strong>
                    {" Begin with basic expectations, add complexity over time"}
                  </li>
                  <li>
                    <strong>
                      {"Profile first:"}
                    </strong>
                    {" Use auto-profiling to discover data patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Version suites:"}
                    </strong>
                    {" Store expectation suites in version control"}
                  </li>
                  <li>
                    <strong>
                      {"Fail fast:"}
                    </strong>
                    {" Validate at ingestion to catch issues early"}
                  </li>
                  <li>
                    <strong>
                      {"Document context:"}
                    </strong>
                    {" Add notes explaining why expectations exist"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor trends:"}
                    </strong>
                    {" Track validation results over time"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Quality"}
                </h2>
                <p>
                  {"Our Data Engineering program covers data quality, testing, and production-grade data pipelines."}
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
                  <Link href="/data-engineering/articles/etl-pipelines" className="related-article-card">
                    <h4>
                      {"ETL Pipelines"}
                    </h4>
                    {" "}
                    <p>
                      {"Build data pipelines"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-airflow" className="related-article-card">
                    <h4>
                      {"Apache Airflow"}
                    </h4>
                    {" "}
                    <p>
                      {"Orchestrate workflows"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform and test data"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Data Quality."} />
    </>
  );
}
