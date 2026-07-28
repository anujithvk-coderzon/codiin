import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Slowly Changing Dimensions: SCD Types 1, 2, 3",
  description: "Learn Slowly Changing Dimensions (SCD) - handle historical data changes in data warehouses. Master SCD Types 1, 2, 3 with practical examples.",
  keywords: ["SCD", "Slowly Changing Dimensions", "SCD Type 2", "data warehouse history", "dimension tables", "historical tracking"],
  alternates: { canonical: "/data-engineering/articles/slowly-changing-dimensions" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/slowly-changing-dimensions",
    title: "Slowly Changing Dimensions (SCD): Complete Guide",
    description: "Master SCD patterns for tracking historical changes.",
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
  "headline": "Slowly Changing Dimensions (SCD): Complete Guide",
  "description": "Master SCD patterns for data warehouses",
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

export default function DataEngineeringSlowlyChangingDimensionsPage() {
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
                {"Slowly Changing Dimensions"}
              </span>
            </div>
            <h1>
              {"Slowly Changing Dimensions"}
            </h1>
            <p className="article-subtitle">
              {"Tracking Historical Changes in Dimension Tables"}
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
                  {"What are Slowly Changing Dimensions?"}
                </h2>
                <p>
                  {"Slowly Changing Dimensions (SCD) is a methodology for tracking changes in dimension attributes over time in a data warehouse. When a customer changes their address or a product changes its category, how do you handle it?"}
                </p>
                <p>
                  {"SCDs provide different strategies (Types 0-6) for preserving or updating historical data based on business requirements."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"SCD Types Overview"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                       SCD Types Summary                          │
├──────┬──────────────────────────────────────────────────────────┤
│ Type │ Description                                               │
├──────┼──────────────────────────────────────────────────────────┤
│  0   │ Retain Original - Never update, keep first value         │
│  1   │ Overwrite - Update in place, no history                  │
│  2   │ Add Row - Insert new row for each change (most common)   │
│  3   │ Add Column - Track current and previous value            │
│  4   │ Mini-Dimension - Separate table for changing attributes  │
│  6   │ Hybrid (1+2+3) - Combines multiple approaches            │
└──────┴──────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type 1: Overwrite"}
                </h2>
                <p>
                  {"Simply update the existing record. No history is preserved."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Type 1: Overwrite (No History)
-- Use when: History doesn't matter, corrections, typos

-- Before: Customer moved from NYC to LA
-- | customer_key | customer_id | name  | city |
-- |      1       |   C001      | Alice | NYC  |

-- After update:
-- | customer_key | customer_id | name  | city |
-- |      1       |   C001      | Alice | LA   |  ← City overwritten

-- SQL Implementation
UPDATE dim_customer
SET city = 'LA',
    updated_at = CURRENT_TIMESTAMP
WHERE customer_id = 'C001';

-- Delta Lake / Spark Implementation
from delta.tables import DeltaTable

dim_customer = DeltaTable.forPath(spark, "/delta/dim_customer")

dim_customer.alias("target").merge(
    source_df.alias("source"),
    "target.customer_id = source.customer_id"
).whenMatchedUpdate(set={
    "city": "source.city",
    "updated_at": "current_timestamp()"
}).whenNotMatchedInsertAll().execute()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type 2: Add New Row"}
                </h2>
                <p>
                  {"Insert a new row for each change, preserving full history. Most commonly used."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Type 2: Add New Row (Full History)
-- Use when: Full history required for analytics

-- Table structure with SCD Type 2 columns
CREATE TABLE dim_customer (
    customer_key    BIGINT PRIMARY KEY,    -- Surrogate key
    customer_id     VARCHAR(20),           -- Natural/business key
    name            VARCHAR(100),
    city            VARCHAR(50),
    effective_date  DATE,                  -- When this version started
    end_date        DATE,                  -- When this version ended (NULL = current)
    is_current      BOOLEAN                -- Flag for current record
);

-- Before: Customer in NYC
-- | customer_key | customer_id | name  | city | effective_date | end_date   | is_current |
-- |      1       |   C001      | Alice | NYC  | 2023-01-01     | NULL       | true       |

-- After customer moves to LA on 2024-06-15:
-- | customer_key | customer_id | name  | city | effective_date | end_date   | is_current |
-- |      1       |   C001      | Alice | NYC  | 2023-01-01     | 2024-06-14 | false      | ← Closed
-- |      2       |   C001      | Alice | LA   | 2024-06-15     | NULL       | true       | ← New

-- Implementation Steps:
-- 1. Expire the current record
UPDATE dim_customer
SET end_date = DATE('2024-06-14'),
    is_current = false
WHERE customer_id = 'C001'
  AND is_current = true;

-- 2. Insert new record
INSERT INTO dim_customer
(customer_key, customer_id, name, city, effective_date, end_date, is_current)
VALUES
(2, 'C001', 'Alice', 'LA', '2024-06-15', NULL, true);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type 2: Delta Lake Implementation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.functions import *
from delta.tables import DeltaTable

def apply_scd_type2(spark, target_path, source_df, key_column, tracked_columns):
    """
    Apply SCD Type 2 logic using Delta Lake MERGE
    """
    target = DeltaTable.forPath(spark, target_path)

    # Prepare source with change detection
    source_with_hash = source_df.withColumn(
        "source_hash",
        md5(concat_ws("||", *[col(c) for c in tracked_columns]))
    )

    # Get current records from target
    current_target = target.toDF().filter(col("is_current") == True)
    current_target = current_target.withColumn(
        "target_hash",
        md5(concat_ws("||", *[col(c) for c in tracked_columns]))
    )

    # Find changed records
    changes = source_with_hash.alias("s").join(
        current_target.alias("t"),
        col(f"s.{key_column}") == col(f"t.{key_column}")
    ).filter(col("source_hash") != col("target_hash")).select("s.*")

    # Find new records
    new_records = source_with_hash.alias("s").join(
        current_target.alias("t"),
        col(f"s.{key_column}") == col(f"t.{key_column}"),
        "left_anti"
    )

    # Expire changed records
    if changes.count() > 0:
        target.alias("t").merge(
            changes.alias("s"),
            f"t.{key_column} = s.{key_column} AND t.is_current = true"
        ).whenMatchedUpdate(set={
            "end_date": "current_date() - 1",
            "is_current": "false"
        }).execute()

    # Insert new versions and new records
    inserts = changes.union(new_records).select(
        *[col(c) for c in source_df.columns],
        current_date().alias("effective_date"),
        lit(None).cast("date").alias("end_date"),
        lit(True).alias("is_current")
    )

    inserts.write.format("delta").mode("append").save(target_path)

# Usage
apply_scd_type2(
    spark,
    "/delta/dim_customer",
    new_customers_df,
    key_column="customer_id",
    tracked_columns=["name", "city", "email"]
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type 3: Add Column"}
                </h2>
                <p>
                  {"Track current and previous values in separate columns. Limited history."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Type 3: Add Column (Limited History)
-- Use when: Only need previous value, not full history

CREATE TABLE dim_customer (
    customer_key    BIGINT PRIMARY KEY,
    customer_id     VARCHAR(20),
    name            VARCHAR(100),
    current_city    VARCHAR(50),
    previous_city   VARCHAR(50),    -- Stores one previous value
    city_change_date DATE
);

-- Before:
-- | customer_key | customer_id | name  | current_city | previous_city | city_change_date |
-- |      1       |   C001      | Alice | NYC          | NULL          | NULL             |

-- After moving to LA:
-- | customer_key | customer_id | name  | current_city | previous_city | city_change_date |
-- |      1       |   C001      | Alice | LA           | NYC           | 2024-06-15       |

-- SQL Implementation
UPDATE dim_customer
SET previous_city = current_city,
    current_city = 'LA',
    city_change_date = '2024-06-15'
WHERE customer_id = 'C001';

-- Limitation: If Alice moves again (LA → Chicago), NYC is lost!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type 6: Hybrid"}
                </h2>
                <p>
                  {"Combines Types 1, 2, and 3 for maximum flexibility."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Type 6: Hybrid (1 + 2 + 3)
-- Best of all worlds: Full history + current value everywhere

CREATE TABLE dim_customer (
    customer_key    BIGINT PRIMARY KEY,    -- Surrogate key
    customer_id     VARCHAR(20),           -- Business key
    name            VARCHAR(100),
    city            VARCHAR(50),           -- Historical value (Type 2)
    current_city    VARCHAR(50),           -- Current value (Type 1)
    effective_date  DATE,
    end_date        DATE,
    is_current      BOOLEAN
);

-- Example: Customer moved NYC → LA → Chicago

-- | customer_key | customer_id | name  | city    | current_city | effective  | end_date   | is_current |
-- |      1       |   C001      | Alice | NYC     | Chicago      | 2023-01-01 | 2024-03-14 | false      |
-- |      2       |   C001      | Alice | LA      | Chicago      | 2024-03-15 | 2024-09-14 | false      |
-- |      3       |   C001      | Alice | Chicago | Chicago      | 2024-09-15 | NULL       | true       |

-- Benefits:
-- • city column: Historical value at that point in time (for point-in-time analysis)
-- • current_city: Always shows current value (easy current-state queries)
-- • All history preserved

-- Query: Sales by customer's city AT TIME OF SALE
SELECT
    f.sale_date,
    d.city AS city_at_sale,        -- Historical (Type 2)
    f.amount
FROM fact_sales f
JOIN dim_customer d ON f.customer_key = d.customer_key;

-- Query: Current customer locations (simple)
SELECT customer_id, current_city
FROM dim_customer
WHERE is_current = true;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Choosing the Right Type"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│              When to Use Each SCD Type                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Type 1 (Overwrite)                                              │
│  ✓ Corrections/typos                                             │
│  ✓ Attributes that don't need history                            │
│  ✓ Data that is always "current" (e.g., calculated fields)       │
│                                                                  │
│  Type 2 (Add Row)                                                │
│  ✓ Full audit trail required                                     │
│  ✓ Point-in-time analysis needed                                 │
│  ✓ Regulatory/compliance requirements                            │
│  ✓ Most dimension attributes                                     │
│                                                                  │
│  Type 3 (Add Column)                                             │
│  ✓ Only need one previous value                                  │
│  ✓ Simple comparison current vs previous                         │
│  ✓ Changes are rare                                              │
│                                                                  │
│  Type 6 (Hybrid)                                                 │
│  ✓ Need both history AND easy current value access               │
│  ✓ Complex reporting requirements                                │
│  ✓ Performance-critical current-state queries                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use surrogate keys:"}
                    </strong>
                    {" Always use surrogate keys for Type 2 dimensions"}
                  </li>
                  <li>
                    <strong>
                      {"Standard columns:"}
                    </strong>
                    {" Use consistent naming (effective_date, end_date, is_current)"}
                  </li>
                  <li>
                    <strong>
                      {"Index properly:"}
                    </strong>
                    {" Index business key + is_current for fast lookups"}
                  </li>
                  <li>
                    <strong>
                      {"Handle deletes:"}
                    </strong>
                    {" Consider \"deleted\" flag instead of physical deletion"}
                  </li>
                  <li>
                    <strong>
                      {"Combine types:"}
                    </strong>
                    {" Different attributes can use different types within one table"}
                  </li>
                  <li>
                    <strong>
                      {"Document decisions:"}
                    </strong>
                    {" Record why each attribute uses a specific SCD type"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Modeling"}
                </h2>
                <p>
                  {"Our Data Engineering program covers SCDs, dimensional modeling, and data warehouse design."}
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
                  <Link href="/data-engineering/articles/data-modeling" className="related-article-card">
                    <h4>
                      {"Data Modeling"}
                    </h4>
                    {" "}
                    <p>
                      {"Dimensional design"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-warehousing" className="related-article-card">
                    <h4>
                      {"Data Warehousing"}
                    </h4>
                    {" "}
                    <p>
                      {"Warehouse concepts"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/dbt" className="related-article-card">
                    <h4>
                      {"dbt"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform dimensions"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn SCD."} />
    </>
  );
}
