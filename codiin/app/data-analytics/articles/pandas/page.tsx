import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Pandas: Python Data Analysis Library",
  description: "Learn Pandas for Data Analysis - DataFrames, data manipulation, cleaning, aggregation, and analysis with Python's most powerful data library.",
  keywords: ["Pandas tutorial", "Python data analysis", "DataFrame", "data manipulation", "data cleaning", "Python analytics"],
  alternates: { canonical: "/data-analytics/articles/pandas" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/pandas",
    title: "Pandas: Python Data Analysis Library",
    description: "Master Pandas for data manipulation and analysis.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-analytics", label: "Learn Data Analytics", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pandas: Python Data Analysis Library",
  "description": "Complete guide to Pandas for data analytics",
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

export default function DataAnalyticsPandasPage() {
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
              <Link href="/data-analytics">
                {"Data Analytics"}
              </Link>
              {" / "}
              <span>
                {"Pandas"}
              </span>
            </div>
            <h1>
              {"Pandas"}
            </h1>
            <p className="article-subtitle">
              {"Python Data Analysis Library"}
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
                  {"What is Pandas?"}
                </h2>
                <p>
                  {"Pandas is Python's most popular library for data manipulation and analysis. It provides powerful data structures like DataFrame and Series that make working with structured data intuitive and efficient."}
                </p>
                <p>
                  {"Think of Pandas as Excel for Python - but with much more power and flexibility for handling large datasets."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Creating DataFrames"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd

# From dictionary
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NYC', 'LA', 'Chicago']
})

# From CSV file
df = pd.read_csv('data.csv')

# From Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# From SQL
import sqlalchemy
engine = sqlalchemy.create_engine('postgresql://...')
df = pd.read_sql('SELECT * FROM orders', engine)

# Quick look at data
print(df.head())       # First 5 rows
print(df.tail())       # Last 5 rows
print(df.info())       # Column types, non-null counts
print(df.describe())   # Statistical summary
print(df.shape)        # (rows, columns)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Selecting Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Select columns
df['name']                    # Single column (Series)
df[['name', 'age']]          # Multiple columns (DataFrame)

# Select rows by position
df.iloc[0]                    # First row
df.iloc[0:5]                  # First 5 rows
df.iloc[0:5, 0:2]            # Rows 0-4, columns 0-1

# Select rows by label
df.loc[0]                     # Row with index 0
df.loc[0:4, 'name':'city']   # Rows 0-4, columns name to city

# Conditional selection
df[df['age'] > 25]                              # Age over 25
df[(df['age'] > 25) & (df['city'] == 'NYC')]   # Multiple conditions
df[df['city'].isin(['NYC', 'LA'])]             # City in list
df[df['name'].str.contains('li')]              # Name contains 'li'

# Query method (SQL-like)
df.query('age > 25 and city == "NYC"')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Cleaning"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Handle missing values
df.isnull().sum()             # Count nulls per column
df.dropna()                   # Drop rows with any null
df.dropna(subset=['name'])    # Drop if 'name' is null
df.fillna(0)                  # Fill nulls with 0
df.fillna(df.mean())          # Fill with column mean
df['col'].fillna(method='ffill')  # Forward fill

# Remove duplicates
df.duplicated().sum()         # Count duplicates
df.drop_duplicates()          # Remove duplicates
df.drop_duplicates(subset=['email'])  # Based on column

# Data types
df['date'] = pd.to_datetime(df['date'])
df['amount'] = df['amount'].astype(float)
df['category'] = df['category'].astype('category')

# String operations
df['name'] = df['name'].str.lower()
df['name'] = df['name'].str.strip()
df['name'] = df['name'].str.replace('old', 'new')

# Rename columns
df.rename(columns={'old_name': 'new_name'}, inplace=True)
df.columns = df.columns.str.lower().str.replace(' ', '_')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Transformations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Add new columns
df['total'] = df['quantity'] * df['price']
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month

# Apply function to column
df['category'] = df['amount'].apply(
    lambda x: 'High' if x > 100 else 'Low'
)

# Apply function to DataFrame
def process_row(row):
    return row['qty'] * row['price'] * (1 - row['discount'])

df['net_amount'] = df.apply(process_row, axis=1)

# Map values
status_map = {'A': 'Active', 'I': 'Inactive'}
df['status'] = df['status_code'].map(status_map)

# Binning
df['age_group'] = pd.cut(df['age'],
    bins=[0, 18, 35, 50, 100],
    labels=['Youth', 'Young Adult', 'Middle Age', 'Senior']
)

# Pivot table
pivot = df.pivot_table(
    values='amount',
    index='region',
    columns='month',
    aggfunc='sum'
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Basic aggregations
df['amount'].sum()
df['amount'].mean()
df['amount'].median()
df['amount'].std()
df['customer_id'].nunique()  # Unique count

# Group by
df.groupby('category')['amount'].sum()
df.groupby('category').agg({
    'amount': 'sum',
    'quantity': 'mean',
    'order_id': 'count'
})

# Multiple aggregations
df.groupby('category').agg({
    'amount': ['sum', 'mean', 'count'],
    'quantity': ['sum', 'mean']
})

# Named aggregations (cleaner output)
df.groupby('category').agg(
    total_sales=('amount', 'sum'),
    avg_order=('amount', 'mean'),
    order_count=('order_id', 'count')
)

# Reset index after groupby
result = df.groupby('category')['amount'].sum().reset_index()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Merging and Joining"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Merge (SQL-style joins)
merged = pd.merge(
    orders,
    customers,
    on='customer_id',
    how='left'  # 'inner', 'outer', 'right'
)

# Merge on different column names
merged = pd.merge(
    orders,
    customers,
    left_on='cust_id',
    right_on='customer_id'
)

# Concatenate (stack vertically)
combined = pd.concat([df1, df2], ignore_index=True)

# Join on index
df1.join(df2, how='left')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Date Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Convert to datetime
df['date'] = pd.to_datetime(df['date'])

# Extract components
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['weekday'] = df['date'].dt.day_name()
df['quarter'] = df['date'].dt.quarter

# Date arithmetic
df['days_since'] = (pd.Timestamp.now() - df['date']).dt.days

# Resample time series
monthly = df.set_index('date').resample('M')['amount'].sum()
weekly = df.set_index('date').resample('W')['amount'].mean()

# Rolling calculations
df['rolling_avg'] = df['amount'].rolling(window=7).mean()
df['cumsum'] = df['amount'].cumsum()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Exporting Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# To CSV
df.to_csv('output.csv', index=False)

# To Excel
df.to_excel('output.xlsx', sheet_name='Data', index=False)

# Multiple sheets
with pd.ExcelWriter('report.xlsx') as writer:
    df1.to_excel(writer, sheet_name='Summary')
    df2.to_excel(writer, sheet_name='Details')

# To SQL
df.to_sql('table_name', engine, if_exists='replace')

# To JSON
df.to_json('output.json', orient='records')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use vectorized operations:"}
                    </strong>
                    {" Avoid loops, use built-in methods"}
                  </li>
                  <li>
                    <strong>
                      {"Chain methods:"}
                    </strong>
                    {" df.dropna().groupby('cat').sum()"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate dtypes:"}
                    </strong>
                    {" category for low-cardinality strings"}
                  </li>
                  <li>
                    <strong>
                      {"Copy when needed:"}
                    </strong>
                    {" df_copy = df.copy() to avoid warnings"}
                  </li>
                  <li>
                    <strong>
                      {"Use query for readability:"}
                    </strong>
                    {" df.query('col > 5')"}
                  </li>
                  <li>
                    <strong>
                      {"Chunk large files:"}
                    </strong>
                    {" pd.read_csv(file, chunksize=10000)"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Pandas with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers Pandas from basics to advanced analysis. Manipulate data like a pro with guidance from industry experts."}
                </p>
                <Link href="/data-analytics" className="btn btn-primary">
                  {"Explore Data Analytics Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-analytics/articles/data-visualization-python" className="related-article-card">
                    <h4>
                      {"Python Visualization"}
                    </h4>
                    {" "}
                    <p>
                      {"Visualize Pandas data"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/sql-analytics" className="related-article-card">
                    <h4>
                      {"SQL for Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Query data for Pandas"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/statistics-analytics" className="related-article-card">
                    <h4>
                      {"Statistics"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical analysis"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Pandas."} />
    </>
  );
}
