import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "NumPy & Pandas Guide",
  description: "Master NumPy and Pandas for Data Science - arrays, DataFrames, data manipulation, cleaning, and analysis. Essential Python libraries for data scientists.",
  keywords: ["NumPy tutorial", "Pandas tutorial", "data manipulation Python", "DataFrame", "array operations", "data cleaning"],
  alternates: { canonical: "/data-science/articles/numpy-pandas" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/numpy-pandas",
    title: "NumPy & Pandas: Data Manipulation Essentials",
    description: "Master the foundational libraries for data science in Python.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "NumPy & Pandas: Data Manipulation Essentials",
  "description": "Complete guide to NumPy and Pandas for data science",
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

export default function DataScienceNumpyPandasPage() {
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
              <Link href="/data-science">
                {"Data Science"}
              </Link>
              {" / "}
              <span>
                {"NumPy & Pandas"}
              </span>
            </div>
            <h1>
              {"NumPy & Pandas"}
            </h1>
            <p className="article-subtitle">
              {"Essential Data Manipulation for Data Science"}
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
                  {"Why NumPy & Pandas?"}
                </h2>
                <p>
                  {"NumPy and Pandas are the foundation of data science in Python. You'll use them in every project, every analysis, and every ML pipeline."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"NumPy:"}
                    </strong>
                    {" Fast numerical computing with arrays. Powers all ML libraries."}
                  </li>
                  <li>
                    <strong>
                      {"Pandas:"}
                    </strong>
                    {" Data manipulation with DataFrames. Makes data cleaning and analysis easy."}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`import numpy as np
import pandas as pd

# 90% of your data science code will start with these imports!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"NumPy Basics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import numpy as np

# Creating arrays
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros((3, 4))        # 3x4 matrix of zeros
ones = np.ones((2, 3))          # 2x3 matrix of ones
range_arr = np.arange(0, 10, 2) # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5) # 5 evenly spaced points

# Random arrays (for ML initialization)
random_uniform = np.random.rand(3, 4)     # Uniform [0, 1)
random_normal = np.random.randn(3, 4)     # Standard normal
random_int = np.random.randint(0, 10, 5)  # Random integers

# Array properties
print(f"Shape: {arr.shape}")    # (5,)
print(f"Dtype: {arr.dtype}")    # int64
print(f"Size: {arr.size}")      # 5
print(f"Ndim: {arr.ndim}")      # 1`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"NumPy Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Vectorized operations (100x faster than loops!)
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# Element-wise operations
print(a + b)      # [6, 8, 10, 12]
print(a * b)      # [5, 12, 21, 32]
print(a ** 2)     # [1, 4, 9, 16]
print(np.sqrt(a)) # [1, 1.41, 1.73, 2]

# Aggregations
print(np.sum(a))     # 10
print(np.mean(a))    # 2.5
print(np.std(a))     # 1.118
print(np.max(a))     # 4
print(np.argmax(a))  # 3 (index of max)

# Matrix operations
X = np.array([[1, 2], [3, 4]])
Y = np.array([[5, 6], [7, 8]])

print(X @ Y)         # Matrix multiplication
print(X.T)           # Transpose
print(np.dot(X, Y))  # Same as @

# Reshaping
arr = np.arange(12)
reshaped = arr.reshape(3, 4)  # 12 -> 3x4 matrix
flattened = reshaped.flatten() # Back to 1D`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"NumPy Indexing & Slicing"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Slicing works like Python lists but more powerful
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

print(arr[0, 1])      # 2 (row 0, col 1)
print(arr[0])         # [1, 2, 3] (first row)
print(arr[:, 0])      # [1, 4, 7] (first column)
print(arr[0:2, 1:3])  # [[2, 3], [5, 6]] (submatrix)

# Boolean indexing (super useful for filtering!)
data = np.array([1, 5, 3, 8, 2, 9, 4])
mask = data > 4
print(data[mask])     # [5, 8, 9]

# Fancy indexing
indices = np.array([0, 2, 4])
print(data[indices])  # [1, 3, 2]

# Where (conditional selection)
result = np.where(data > 4, data, 0)
print(result)         # [0, 5, 0, 8, 0, 9, 0]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Pandas: DataFrames"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd

# Creating DataFrames
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'salary': [50000, 60000, 75000, 55000],
    'department': ['Engineering', 'Sales', 'Engineering', 'Marketing']
})

print(df)
#       name  age  salary   department
# 0    Alice   25   50000  Engineering
# 1      Bob   30   60000        Sales
# 2  Charlie   35   75000  Engineering
# 3    Diana   28   55000    Marketing

# From CSV (most common)
df = pd.read_csv('data.csv')

# DataFrame properties
print(df.shape)      # (4, 4)
print(df.columns)    # Index(['name', 'age', ...])
print(df.dtypes)     # Data types of each column
print(df.info())     # Overview of DataFrame
print(df.describe()) # Statistical summary`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Selecting Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Column selection
df['name']           # Single column (Series)
df[['name', 'age']]  # Multiple columns (DataFrame)

# Row selection with loc (label-based)
df.loc[0]            # First row by label
df.loc[0:2]          # Rows 0, 1, 2
df.loc[0, 'name']    # Specific cell

# Row selection with iloc (integer-based)
df.iloc[0]           # First row by position
df.iloc[0:2]         # First 2 rows
df.iloc[0, 1]        # Row 0, Column 1

# Filtering (most important!)
df[df['age'] > 28]                    # Age > 28
df[df['department'] == 'Engineering'] # Engineers only
df[(df['age'] > 25) & (df['salary'] > 55000)]  # Multiple conditions

# Query (more readable for complex filters)
df.query('age > 28 and salary > 55000')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Cleaning"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Handling missing values
df.isna().sum()           # Count missing per column
df.dropna()               # Drop rows with any missing
df.dropna(subset=['age']) # Drop only if age is missing
df.fillna(0)              # Fill missing with 0
df.fillna(df.mean())      # Fill with column means
df['age'].fillna(df['age'].median(), inplace=True)

# Duplicates
df.duplicated().sum()     # Count duplicates
df.drop_duplicates()      # Remove duplicates
df.drop_duplicates(subset=['name'], keep='first')

# Data types
df['age'] = df['age'].astype(int)
df['date'] = pd.to_datetime(df['date'])

# String operations
df['name'] = df['name'].str.lower()
df['name'] = df['name'].str.strip()
df['name'].str.contains('ali')

# Renaming columns
df.rename(columns={'name': 'full_name'}, inplace=True)
df.columns = ['col1', 'col2', 'col3', 'col4']  # Rename all`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregation & Grouping"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Basic aggregations
df['salary'].mean()
df['age'].max()
df['salary'].sum()

# GroupBy (SQL-like aggregation)
# "Split-Apply-Combine" pattern
df.groupby('department')['salary'].mean()
# department
# Engineering    62500
# Marketing      55000
# Sales          60000

# Multiple aggregations
df.groupby('department').agg({
    'salary': ['mean', 'min', 'max'],
    'age': 'mean'
})

# Custom aggregations
df.groupby('department').agg(
    avg_salary=('salary', 'mean'),
    employee_count=('name', 'count'),
    oldest=('age', 'max')
)

# Pivot tables
pd.pivot_table(df,
    values='salary',
    index='department',
    aggfunc=['mean', 'count']
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Creating New Columns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Simple calculations
df['salary_monthly'] = df['salary'] / 12
df['age_group'] = df['age'] // 10 * 10  # 20, 30, 40...

# Conditional columns
df['senior'] = df['age'] > 30

# Using apply (for complex logic)
def categorize_salary(salary):
    if salary < 55000:
        return 'Low'
    elif salary < 70000:
        return 'Medium'
    else:
        return 'High'

df['salary_category'] = df['salary'].apply(categorize_salary)

# Using np.where (faster)
df['is_engineer'] = np.where(
    df['department'] == 'Engineering',
    'Yes',
    'No'
)

# Using map (for simple mappings)
dept_codes = {'Engineering': 'ENG', 'Sales': 'SAL', 'Marketing': 'MKT'}
df['dept_code'] = df['department'].map(dept_codes)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Merging & Joining"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Merge (like SQL JOIN)
employees = pd.DataFrame({
    'emp_id': [1, 2, 3, 4],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'dept_id': [101, 102, 101, 103]
})

departments = pd.DataFrame({
    'dept_id': [101, 102, 103],
    'dept_name': ['Engineering', 'Sales', 'Marketing']
})

# Inner join (default)
merged = pd.merge(employees, departments, on='dept_id')

# Left join
merged = pd.merge(employees, departments, on='dept_id', how='left')

# Concatenation (stacking DataFrames)
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

pd.concat([df1, df2])              # Stack vertically
pd.concat([df1, df2], axis=1)      # Stack horizontally`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Time Series with Pandas"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Datetime handling
df['date'] = pd.to_datetime(df['date'])
df.set_index('date', inplace=True)

# Date components
df['year'] = df.index.year
df['month'] = df.index.month
df['day_of_week'] = df.index.dayofweek

# Resampling (aggregation by time period)
daily_sales = df['sales'].resample('D').sum()    # Daily
weekly_sales = df['sales'].resample('W').mean()  # Weekly
monthly_sales = df['sales'].resample('M').sum()  # Monthly

# Rolling windows
df['rolling_mean'] = df['sales'].rolling(window=7).mean()
df['rolling_std'] = df['sales'].rolling(window=7).std()

# Shift (for lag features)
df['previous_day'] = df['sales'].shift(1)
df['next_day'] = df['sales'].shift(-1)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-World Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Complete data preparation pipeline
import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('customer_data.csv')

# Quick exploration
print(df.shape)
print(df.info())
print(df.describe())
print(df.isna().sum())

# Clean data
df = df.dropna(subset=['customer_id'])  # Drop if ID missing
df['age'] = df['age'].fillna(df['age'].median())
df['income'] = df['income'].fillna(df['income'].mean())

# Remove outliers (IQR method)
Q1 = df['income'].quantile(0.25)
Q3 = df['income'].quantile(0.75)
IQR = Q3 - Q1
df = df[(df['income'] >= Q1 - 1.5*IQR) & (df['income'] <= Q3 + 1.5*IQR)]

# Feature engineering
df['age_group'] = pd.cut(df['age'], bins=[0, 25, 40, 60, 100],
                         labels=['Young', 'Adult', 'Middle', 'Senior'])
df['income_per_age'] = df['income'] / df['age']

# Encode categorical variables
df = pd.get_dummies(df, columns=['gender', 'region'], drop_first=True)

# Prepare for ML
X = df.drop(['target', 'customer_id'], axis=1)
y = df['target']

print(f"Features: {X.shape}")
print(f"Ready for model training!")`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Manipulation"}
                </h2>
                <p>
                  {"Our Data Science program builds your NumPy and Pandas skills from the ground up."}
                </p>
                <Link href="/data-science" className="btn btn-primary">
                  {"Explore Data Science Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-science/articles/eda" className="related-article-card">
                    <h4>
                      {"Exploratory Data Analysis"}
                    </h4>
                    {" "}
                    <p>
                      {"Discover patterns in your data"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/data-preprocessing" className="related-article-card">
                    <h4>
                      {"Data Preprocessing"}
                    </h4>
                    {" "}
                    <p>
                      {"Prepare data for ML models"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Create powerful features"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn NumPy and Pandas."} />
    </>
  );
}
