import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "PySpark: Python API for Apache Spark",
  description: "Learn PySpark - Python API for Apache Spark. Master DataFrames, Spark SQL, transformations, and big data processing with Python.",
  keywords: ["PySpark tutorial", "PySpark DataFrames", "Spark SQL", "Python Spark", "big data Python", "PySpark examples"],
  alternates: { canonical: "/data-engineering/articles/pyspark" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/pyspark",
    title: "PySpark: Complete Guide to Python Spark Programming",
    description: "Master PySpark for big data processing with Python.",
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
  "headline": "PySpark: Complete Guide to Python Spark Programming",
  "description": "Master PySpark for big data processing",
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

export default function DataEngineeringPysparkPage() {
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
                {"PySpark"}
              </span>
            </div>
            <h1>
              {"PySpark"}
            </h1>
            <p className="article-subtitle">
              {"Python API for Apache Spark - Big Data Processing Made Easy"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"22 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is PySpark?"}
                </h2>
                <p>
                  {"PySpark is the Python API for Apache Spark, allowing you to write Spark applications using Python. It provides a simple way to parallelize your data processing across a cluster while writing familiar Python code."}
                </p>
                <p>
                  {"PySpark combines Python's ease of use with Spark's distributed computing power, making it the most popular way to work with Spark."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install PySpark
pip install pyspark

# For Jupyter notebook support
pip install pyspark[sql]

# Create a SparkSession
from pyspark.sql import SparkSession

spark = SparkSession.builder \\
    .appName("MyApp") \\
    .master("local[*]") \\
    .config("spark.sql.shuffle.partitions", "8") \\
    .getOrCreate()

# Check Spark version
print(spark.version)

# Access SparkContext
sc = spark.sparkContext`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Creating DataFrames"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# From Python list
data = [
    ("Alice", 28, "Engineering"),
    ("Bob", 35, "Marketing"),
    ("Charlie", 42, "Sales")
]
columns = ["name", "age", "department"]
df = spark.createDataFrame(data, columns)
df.show()
# +-------+---+-----------+
# |   name|age| department|
# +-------+---+-----------+
# |  Alice| 28|Engineering|
# |    Bob| 35|  Marketing|
# |Charlie| 42|      Sales|
# +-------+---+-----------+

# From CSV file
df_csv = spark.read \\
    .option("header", "true") \\
    .option("inferSchema", "true") \\
    .csv("data/employees.csv")

# From JSON file
df_json = spark.read.json("data/events.json")

# From Parquet (columnar format - recommended)
df_parquet = spark.read.parquet("data/sales.parquet")

# With explicit schema
from pyspark.sql.types import StructType, StructField, StringType, IntegerType

schema = StructType([
    StructField("name", StringType(), True),
    StructField("age", IntegerType(), True),
    StructField("department", StringType(), True)
])
df = spark.createDataFrame(data, schema)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DataFrame Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.functions import col, lit, when, count, sum, avg, max, min

# Select columns
df.select("name", "age").show()
df.select(col("name"), col("age") + 1).show()

# Filter rows
df.filter(col("age") > 30).show()
df.where("age > 30 AND department = 'Sales'").show()

# Add new columns
df = df.withColumn("senior", when(col("age") >= 40, True).otherwise(False))
df = df.withColumn("bonus", col("salary") * 0.1)
df = df.withColumn("country", lit("USA"))

# Rename columns
df = df.withColumnRenamed("name", "employee_name")

# Drop columns
df = df.drop("temp_column")

# Sort/Order
df.orderBy("age").show()  # Ascending
df.orderBy(col("age").desc()).show()  # Descending

# Distinct values
df.select("department").distinct().show()

# Handle nulls
df.na.drop()  # Drop rows with any null
df.na.drop(subset=["age"])  # Drop if age is null
df.na.fill(0, subset=["salary"])  # Fill nulls with 0`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.functions import count, sum, avg, max, min, countDistinct

# Basic aggregations
df.agg(
    count("*").alias("total_rows"),
    avg("age").alias("avg_age"),
    max("salary").alias("max_salary")
).show()

# Group by
df.groupBy("department").agg(
    count("*").alias("employee_count"),
    avg("salary").alias("avg_salary"),
    sum("salary").alias("total_salary")
).show()

# Multiple grouping columns
df.groupBy("department", "job_title").agg(
    count("*").alias("count")
).orderBy("department").show()

# Having (filter after grouping)
df.groupBy("department") \\
    .agg(count("*").alias("count")) \\
    .filter(col("count") > 10) \\
    .show()

# Pivot tables
df.groupBy("year") \\
    .pivot("quarter", ["Q1", "Q2", "Q3", "Q4"]) \\
    .agg(sum("revenue")) \\
    .show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Joins"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Sample DataFrames
employees = spark.createDataFrame([
    (1, "Alice", 101),
    (2, "Bob", 102),
    (3, "Charlie", 103)
], ["emp_id", "name", "dept_id"])

departments = spark.createDataFrame([
    (101, "Engineering"),
    (102, "Marketing"),
    (104, "HR")
], ["dept_id", "dept_name"])

# Inner join (default)
employees.join(departments, "dept_id").show()

# Left outer join
employees.join(departments, "dept_id", "left").show()

# Right outer join
employees.join(departments, "dept_id", "right").show()

# Full outer join
employees.join(departments, "dept_id", "outer").show()

# Cross join (Cartesian product)
employees.crossJoin(departments).show()

# Join on multiple columns
df1.join(df2, ["col1", "col2"], "inner").show()

# Join with different column names
employees.join(
    departments,
    employees.dept_id == departments.dept_id,
    "inner"
).drop(departments.dept_id).show()

# Self join
from pyspark.sql.functions import col
emp = employees.alias("e")
mgr = employees.alias("m")
emp.join(mgr, col("e.manager_id") == col("m.emp_id")).show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Window Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.window import Window
from pyspark.sql.functions import row_number, rank, dense_rank, lag, lead, sum

# Define window spec
window_spec = Window.partitionBy("department").orderBy(col("salary").desc())

# Row number within partition
df = df.withColumn("row_num", row_number().over(window_spec))

# Rank (gaps after ties)
df = df.withColumn("rank", rank().over(window_spec))

# Dense rank (no gaps)
df = df.withColumn("dense_rank", dense_rank().over(window_spec))

# Previous/Next row values
df = df.withColumn("prev_salary", lag("salary", 1).over(window_spec))
df = df.withColumn("next_salary", lead("salary", 1).over(window_spec))

# Running totals
running_window = Window.partitionBy("department") \\
    .orderBy("date") \\
    .rowsBetween(Window.unboundedPreceding, Window.currentRow)

df = df.withColumn("running_total", sum("amount").over(running_window))

# Moving average (last 3 rows)
moving_window = Window.partitionBy("product") \\
    .orderBy("date") \\
    .rowsBetween(-2, 0)

df = df.withColumn("moving_avg", avg("sales").over(moving_window))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Spark SQL"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Register DataFrame as temp view
df.createOrReplaceTempView("employees")

# Run SQL queries
result = spark.sql("""
    SELECT
        department,
        COUNT(*) as employee_count,
        AVG(salary) as avg_salary
    FROM employees
    WHERE age > 25
    GROUP BY department
    HAVING COUNT(*) > 5
    ORDER BY avg_salary DESC
""")
result.show()

# Global temp view (accessible across sessions)
df.createOrReplaceGlobalTempView("global_employees")
spark.sql("SELECT * FROM global_temp.global_employees").show()

# Mix SQL with DataFrame API
spark.sql("SELECT * FROM employees WHERE age > 30") \\
    .groupBy("department") \\
    .agg(count("*").alias("count")) \\
    .show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"User Defined Functions (UDFs)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.functions import udf, pandas_udf
from pyspark.sql.types import StringType, IntegerType
import pandas as pd

# Standard UDF
def categorize_age(age):
    if age < 30:
        return "Young"
    elif age < 50:
        return "Middle"
    else:
        return "Senior"

categorize_udf = udf(categorize_age, StringType())
df = df.withColumn("age_category", categorize_udf(col("age")))

# Register UDF for SQL
spark.udf.register("categorize_age", categorize_age, StringType())
spark.sql("SELECT name, categorize_age(age) FROM employees")

# Pandas UDF (vectorized - much faster!)
@pandas_udf(StringType())
def categorize_age_pandas(ages: pd.Series) -> pd.Series:
    return ages.apply(lambda x: "Young" if x < 30 else "Middle" if x < 50 else "Senior")

df = df.withColumn("age_category", categorize_age_pandas(col("age")))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Reading and Writing Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# CSV
df.write.option("header", "true").csv("output/data.csv")
df.write.mode("overwrite").csv("output/data.csv")

# Parquet (recommended for analytics)
df.write.parquet("output/data.parquet")
df.write.partitionBy("year", "month").parquet("output/partitioned")

# JSON
df.write.json("output/data.json")

# JDBC (databases)
df.write \\
    .format("jdbc") \\
    .option("url", "jdbc:postgresql://localhost:5432/mydb") \\
    .option("dbtable", "employees") \\
    .option("user", "user") \\
    .option("password", "password") \\
    .save()

# Delta Lake
df.write.format("delta").save("output/delta_table")

# Write modes
# overwrite - Replace existing data
# append    - Add to existing data
# ignore    - Skip if exists
# error     - Throw error if exists (default)

df.write.mode("overwrite").parquet("output/data")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Performance Optimization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# 1. Cache frequently used DataFrames
df.cache()  # or df.persist()
df.count()  # Trigger caching
df.unpersist()  # Release from memory

# 2. Broadcast small tables for joins
from pyspark.sql.functions import broadcast

small_df = spark.read.parquet("dim_product.parquet")
large_df = spark.read.parquet("fact_sales.parquet")

# Broadcast join (small table sent to all nodes)
result = large_df.join(broadcast(small_df), "product_id")

# 3. Repartition for parallelism
df = df.repartition(100)  # Increase partitions
df = df.repartition("department")  # Partition by column
df = df.coalesce(10)  # Decrease partitions (no shuffle)

# 4. Use appropriate data types
from pyspark.sql.types import IntegerType
df = df.withColumn("id", col("id").cast(IntegerType()))

# 5. Filter early (predicate pushdown)
df.filter(col("date") > "2024-01-01") \\
    .join(other_df, "id") \\
    .select("col1", "col2")  # Select only needed columns

# 6. Avoid UDFs when possible - use built-in functions

# 7. Check execution plan
df.explain()  # Logical plan
df.explain(True)  # Physical plan`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Deduplication
df_deduped = df.dropDuplicates(["id"])

# Get latest record per group
window = Window.partitionBy("customer_id").orderBy(col("updated_at").desc())
latest = df.withColumn("rn", row_number().over(window)) \\
    .filter(col("rn") == 1) \\
    .drop("rn")

# Flatten nested JSON
from pyspark.sql.functions import explode, col

df_exploded = df.select(
    col("id"),
    explode(col("items")).alias("item")
).select(
    col("id"),
    col("item.name"),
    col("item.price")
)

# Conditional aggregation
df.groupBy("category").agg(
    count(when(col("status") == "completed", 1)).alias("completed_count"),
    count(when(col("status") == "pending", 1)).alias("pending_count")
).show()

# Date operations
from pyspark.sql.functions import year, month, dayofmonth, datediff, date_add

df = df.withColumn("year", year(col("date")))
df = df.withColumn("month", month(col("date")))
df = df.withColumn("days_diff", datediff(col("end_date"), col("start_date")))`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master PySpark"}
                </h2>
                <p>
                  {"Our Data Engineering program provides hands-on PySpark training with real-world big data projects."}
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
                      {"Spark fundamentals"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/spark-streaming" className="related-article-card">
                    <h4>
                      {"Spark Streaming"}
                    </h4>
                    {" "}
                    <p>
                      {"Real-time processing"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/delta-lake" className="related-article-card">
                    <h4>
                      {"Delta Lake"}
                    </h4>
                    {" "}
                    <p>
                      {"ACID on data lakes"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Connect"}
              </h4>
              <ul>
                <li>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I want to learn PySpark."} />
    </>
  );
}
