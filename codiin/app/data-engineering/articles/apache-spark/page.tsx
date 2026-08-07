import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Apache Spark: The Complete Guide to Big Data Processing",
  description: "Learn Apache Spark - the unified analytics engine for big data processing. Master PySpark, DataFrames, Spark SQL, and distributed computing.",
  keywords: ["Apache Spark tutorial", "PySpark", "Spark SQL", "big data processing", "distributed computing", "Spark DataFrames"],
  alternates: { canonical: "/data-engineering/articles/apache-spark" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/apache-spark",
    title: "Apache Spark: The Complete Guide to Big Data Processing",
    description: "Master Apache Spark for processing large-scale data with PySpark.",
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
  "headline": "Apache Spark: The Complete Guide to Big Data Processing",
  "description": "Comprehensive guide to Apache Spark and distributed data processing",
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

export default function DataEngineeringApacheSparkPage() {
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
                {"Apache Spark"}
              </span>
            </div>
            <h1>
              {"Apache Spark"}
            </h1>
            <p className="article-subtitle">
              {"The Unified Analytics Engine for Big Data Processing"}
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
                  {"What is Apache Spark?"}
                </h2>
                <p>
                  {"Apache Spark is a unified analytics engine for large-scale data processing. Originally developed at UC Berkeley, Spark has become the de facto standard for big data processing, offering speeds up to 100x faster than Hadoop MapReduce for in-memory operations."}
                </p>
                <p>
                  {"Spark provides APIs in Python (PySpark), Scala, Java, and R, with built-in modules for SQL, streaming, machine learning, and graph processing."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Spark?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Speed:"}
                    </strong>
                    {" In-memory computing makes it 100x faster than MapReduce"}
                  </li>
                  <li>
                    <strong>
                      {"Unified:"}
                    </strong>
                    {" One engine for batch, streaming, ML, and graph processing"}
                  </li>
                  <li>
                    <strong>
                      {"Easy to Use:"}
                    </strong>
                    {" High-level APIs that simplify complex operations"}
                  </li>
                  <li>
                    <strong>
                      {"Scalable:"}
                    </strong>
                    {" Scales from single machine to thousands of nodes"}
                  </li>
                  <li>
                    <strong>
                      {"Versatile:"}
                    </strong>
                    {" Runs on Hadoop, Kubernetes, standalone, or cloud"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Spark Architecture"}
                </h2>
                <p>
                  {"Spark uses a master-worker architecture:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Driver:"}
                    </strong>
                    {" The main program that creates SparkContext and coordinates execution"}
                  </li>
                  <li>
                    <strong>
                      {"Cluster Manager:"}
                    </strong>
                    {" Allocates resources (YARN, Kubernetes, Mesos, Standalone)"}
                  </li>
                  <li>
                    <strong>
                      {"Executors:"}
                    </strong>
                    {" Worker processes that run tasks and store data"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql import SparkSession

# Create Spark session
spark = SparkSession.builder \\
    .appName("MyApp") \\
    .config("spark.executor.memory", "4g") \\
    .config("spark.executor.cores", "2") \\
    .getOrCreate()

# Access SparkContext
sc = spark.sparkContext`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Working with DataFrames"}
                </h2>
                <p>
                  {"DataFrames are the primary abstraction in Spark - distributed collections of data organized into named columns:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Read data
df = spark.read.csv("data.csv", header=True, inferSchema=True)
df = spark.read.parquet("data.parquet")
df = spark.read.json("data.json")

# Basic operations
df.show(5)
df.printSchema()
df.describe().show()

# Select and filter
df.select("name", "age").show()
df.filter(df.age > 25).show()
df.filter((df.age > 25) & (df.city == "NYC")).show()

# Add/rename columns
from pyspark.sql.functions import col, lit, when

df = df.withColumn("age_plus_10", col("age") + 10)
df = df.withColumnRenamed("name", "full_name")
df = df.withColumn("category",
    when(col("age") < 30, "young")
    .when(col("age") < 50, "middle")
    .otherwise("senior")
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregations and Grouping"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from pyspark.sql.functions import sum, avg, count, max, min

# Group by with aggregations
df.groupBy("department") \\
    .agg(
        count("*").alias("employee_count"),
        avg("salary").alias("avg_salary"),
        max("salary").alias("max_salary")
    ).show()

# Multiple grouping columns
df.groupBy("department", "city") \\
    .agg(sum("sales").alias("total_sales")) \\
    .orderBy("total_sales", ascending=False) \\
    .show()

# Window functions
from pyspark.sql.window import Window

window = Window.partitionBy("department").orderBy("salary")
df = df.withColumn("rank", rank().over(window))
df = df.withColumn("running_total", sum("salary").over(window))`}</code></pre>
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
    SELECT department,
           COUNT(*) as emp_count,
           AVG(salary) as avg_salary
    FROM employees
    WHERE age > 25
    GROUP BY department
    HAVING COUNT(*) > 10
    ORDER BY avg_salary DESC
""")

result.show()

# Complex queries with CTEs
spark.sql("""
    WITH dept_stats AS (
        SELECT department, AVG(salary) as avg_sal
        FROM employees
        GROUP BY department
    )
    SELECT e.*, d.avg_sal
    FROM employees e
    JOIN dept_stats d ON e.department = d.department
    WHERE e.salary > d.avg_sal
""").show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Joins"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Different join types
joined = df1.join(df2, df1.id == df2.id, "inner")
joined = df1.join(df2, "id", "left")  # Simpler syntax for same column name
joined = df1.join(df2, ["id", "date"], "outer")

# Broadcast join for small tables
from pyspark.sql.functions import broadcast

# Small table is broadcast to all workers
result = large_df.join(broadcast(small_df), "key")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Performance Optimization"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Partitioning:"}
                    </strong>
                    {" Control data distribution across nodes"}
                  </li>
                  <li>
                    <strong>
                      {"Caching:"}
                    </strong>
                    {" Persist frequently used DataFrames in memory"}
                  </li>
                  <li>
                    <strong>
                      {"Broadcast:"}
                    </strong>
                    {" Broadcast small tables to avoid shuffles"}
                  </li>
                  <li>
                    <strong>
                      {"Predicate Pushdown:"}
                    </strong>
                    {" Push filters down to data source"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Repartition data
df = df.repartition(100)  # Increase partitions
df = df.repartition("date")  # Partition by column
df = df.coalesce(10)  # Reduce partitions (no shuffle)

# Cache DataFrames
df.cache()  # or df.persist()
df.count()  # Trigger caching

# Check execution plan
df.explain(True)

# Write partitioned data
df.write.partitionBy("year", "month") \\
    .parquet("output/data")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Spark Streaming"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Structured Streaming
from pyspark.sql.functions import window

# Read streaming data
stream_df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "events") \\
    .load()

# Process stream
processed = stream_df \\
    .selectExpr("CAST(value AS STRING)") \\
    .groupBy(window("timestamp", "5 minutes")) \\
    .count()

# Write stream
query = processed.writeStream \\
    .outputMode("complete") \\
    .format("console") \\
    .start()

query.awaitTermination()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use DataFrames over RDDs:"}
                    </strong>
                    {" Better optimization and cleaner code"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid UDFs when possible:"}
                    </strong>
                    {" Built-in functions are optimized"}
                  </li>
                  <li>
                    <strong>
                      {"Right-size partitions:"}
                    </strong>
                    {" ~128MB per partition is ideal"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate file formats:"}
                    </strong>
                    {" Parquet for analytics workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor and tune:"}
                    </strong>
                    {" Use Spark UI to identify bottlenecks"}
                  </li>
                  <li>
                    <strong>
                      {"Handle skew:"}
                    </strong>
                    {" Salt keys or use adaptive query execution"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Apache Spark with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers Spark from basics to production optimization. Build real big data pipelines with guidance from industry experts."}
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
                      {"Apache Kafka: Event Streaming Platform"}
                    </h4>
                    {" "}
                    <p>
                      {"Build real-time data pipelines"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-lakes" className="related-article-card">
                    <h4>
                      {"Data Lakes & Delta Lake"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern data lake architecture"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Apache Spark."} />
    </>
  );
}
