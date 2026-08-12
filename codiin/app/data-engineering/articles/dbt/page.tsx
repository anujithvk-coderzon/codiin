import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "dbt: Modern Data Transformation Tool",
  description: "Learn dbt (data build tool) - the transformation layer for modern data warehouses. Master models, tests, documentation, and analytics engineering.",
  keywords: ["dbt tutorial", "data build tool", "analytics engineering", "data transformation", "SQL models", "data warehouse"],
  alternates: { canonical: "/data-engineering/articles/dbt" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/dbt",
    title: "dbt: Modern Data Transformation Tool",
    description: "Master dbt for analytics engineering and data transformation.",
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
  "headline": "dbt: Modern Data Transformation Tool",
  "description": "Complete guide to dbt for analytics engineering",
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

export default function DataEngineeringDbtPage() {
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
                {"dbt"}
              </span>
            </div>
            <h1>
              {"dbt (data build tool)"}
            </h1>
            <p className="article-subtitle">
              {"The Transformation Layer for Modern Data Stacks"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is dbt?"}
                </h2>
                <p>
                  {"dbt (data build tool) is an open-source command-line tool that enables data analysts and engineers to transform data in their warehouse using SQL. It's the \"T\" in ELT - handling transformations after data has been loaded into your warehouse."}
                </p>
                <p>
                  {"dbt brings software engineering practices to analytics: version control, testing, documentation, and modular code. It's become the industry standard for analytics engineering."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Models:"}
                    </strong>
                    {" SQL SELECT statements that define transformations"}
                  </li>
                  <li>
                    <strong>
                      {"Sources:"}
                    </strong>
                    {" Raw data tables loaded into your warehouse"}
                  </li>
                  <li>
                    <strong>
                      {"Tests:"}
                    </strong>
                    {" Assertions about your data quality"}
                  </li>
                  <li>
                    <strong>
                      {"Documentation:"}
                    </strong>
                    {" Descriptions and metadata for your models"}
                  </li>
                  <li>
                    <strong>
                      {"Macros:"}
                    </strong>
                    {" Reusable SQL snippets with Jinja templating"}
                  </li>
                  <li>
                    <strong>
                      {"Seeds:"}
                    </strong>
                    {" CSV files loaded into your warehouse"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Project Structure"}
                </h2>
                <div className="code-block">
                  <pre><code>{`my_dbt_project/
├── dbt_project.yml      # Project configuration
├── models/
│   ├── staging/         # Raw data cleaning
│   │   ├── stg_customers.sql
│   │   └── stg_orders.sql
│   ├── intermediate/    # Business logic
│   │   └── int_orders_enriched.sql
│   └── marts/          # Final analytics tables
│       ├── dim_customers.sql
│       └── fct_orders.sql
├── tests/              # Custom tests
├── macros/             # Reusable SQL functions
├── seeds/              # Static CSV data
└── snapshots/          # Track slowly changing dimensions`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Writing Models"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- models/staging/stg_customers.sql
-- Configuration block
{{ config(
    materialized='view',
    schema='staging'
) }}

with source as (
    select * from {{ source('raw', 'customers') }}
),

renamed as (
    select
        id as customer_id,
        first_name,
        last_name,
        email,
        created_at,
        updated_at
    from source
)

select * from renamed`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`-- models/marts/fct_orders.sql
{{ config(
    materialized='table',
    schema='analytics'
) }}

with orders as (
    select * from {{ ref('stg_orders') }}
),

customers as (
    select * from {{ ref('stg_customers') }}
),

final as (
    select
        o.order_id,
        o.customer_id,
        c.customer_name,
        o.order_date,
        o.total_amount,
        o.status,
        -- Calculate metrics
        sum(o.total_amount) over (
            partition by o.customer_id
            order by o.order_date
        ) as cumulative_spend
    from orders o
    left join customers c on o.customer_id = c.customer_id
)

select * from final`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Defining Sources"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# models/staging/sources.yml
version: 2

sources:
  - name: raw
    database: raw_database
    schema: public
    tables:
      - name: customers
        description: "Raw customer data from CRM"
        columns:
          - name: id
            description: "Primary key"
            tests:
              - unique
              - not_null
      - name: orders
        description: "Raw order data from e-commerce platform"
        freshness:
          warn_after: {count: 12, period: hour}
          error_after: {count: 24, period: hour}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Testing Your Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# models/staging/schema.yml
version: 2

models:
  - name: stg_customers
    description: "Cleaned customer data"
    columns:
      - name: customer_id
        description: "Unique customer identifier"
        tests:
          - unique
          - not_null
      - name: email
        tests:
          - unique
          - not_null
      - name: status
        tests:
          - accepted_values:
              values: ['active', 'inactive', 'churned']

  - name: fct_orders
    tests:
      - dbt_utils.unique_combination_of_columns:
          combination_of_columns:
            - order_id
            - customer_id`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`-- tests/assert_total_amount_positive.sql
-- Custom singular test
select
    order_id,
    total_amount
from {{ ref('fct_orders') }}
where total_amount < 0`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Macros and Jinja"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- macros/cents_to_dollars.sql
{% macro cents_to_dollars(column_name) %}
    ({{ column_name }} / 100.0)::decimal(10,2)
{% endmacro %}

-- Usage in model
select
    order_id,
    {{ cents_to_dollars('amount_cents') }} as amount_dollars
from {{ ref('stg_orders') }}`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`-- macros/generate_schema_name.sql
{% macro generate_schema_name(custom_schema_name, node) %}
    {% if target.name == 'prod' %}
        {{ custom_schema_name | trim }}
    {% else %}
        {{ default__generate_schema_name(custom_schema_name, node) }}
    {% endif %}
{% endmacro %}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Incremental Models"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- models/marts/fct_events.sql
{{ config(
    materialized='incremental',
    unique_key='event_id',
    incremental_strategy='merge'
) }}

select
    event_id,
    user_id,
    event_type,
    event_timestamp,
    properties
from {{ source('raw', 'events') }}

{% if is_incremental() %}
    -- Only process new records since last run
    where event_timestamp > (
        select max(event_timestamp) from {{ this }}
    )
{% endif %}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"dbt Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Run all models
dbt run

# Run specific models
dbt run --select stg_customers
dbt run --select marts.*
dbt run --select +fct_orders  # Run with dependencies

# Test your models
dbt test
dbt test --select stg_customers

# Generate documentation
dbt docs generate
dbt docs serve

# Build (run + test)
dbt build

# Check source freshness
dbt source freshness

# Seed static data
dbt seed`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Follow naming conventions:"}
                    </strong>
                    {" stg_, int_, dim_, fct_ prefixes"}
                  </li>
                  <li>
                    <strong>
                      {"Use refs and sources:"}
                    </strong>
                    {" Never hardcode table names"}
                  </li>
                  <li>
                    <strong>
                      {"Test everything:"}
                    </strong>
                    {" Add tests for all critical columns"}
                  </li>
                  <li>
                    <strong>
                      {"Document your models:"}
                    </strong>
                    {" Write descriptions for columns and models"}
                  </li>
                  <li>
                    <strong>
                      {"Keep models modular:"}
                    </strong>
                    {" Small, focused transformations"}
                  </li>
                  <li>
                    <strong>
                      {"Use version control:"}
                    </strong>
                    {" Treat dbt like any software project"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master dbt with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers dbt from basics to production deployment. Build modern data pipelines with guidance from industry experts."}
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
                  <Link href="/data-engineering/articles/data-warehousing" className="related-article-card">
                    <h4>
                      {"Data Warehousing"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern warehouse architecture"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/sql" className="related-article-card">
                    <h4>
                      {"SQL for Data Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Advanced SQL techniques"}
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
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn dbt."} />
    </>
  );
}
