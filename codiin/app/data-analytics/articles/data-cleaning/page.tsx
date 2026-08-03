import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Data Cleaning & Preprocessing: Complete Guide",
  description: "Master data cleaning and preprocessing techniques. Handle missing values, outliers, duplicates, and transform messy data into analysis-ready datasets.",
  keywords: ["data cleaning", "data preprocessing", "missing values", "outliers", "data quality", "data wrangling", "ETL", "Python data cleaning"],
  alternates: { canonical: "/data-analytics/articles/data-cleaning" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/data-cleaning",
    title: "Data Cleaning & Preprocessing: The Complete Guide",
    description: "Transform messy data into clean, analysis-ready datasets.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-analytics", label: "Learn Data Analytics", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Data Cleaning & Preprocessing: Complete Guide",
  "description": "Master data cleaning techniques for data analytics",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-25",
  "dateModified": "2024-12-25"
} as const;

export default function DataAnalyticsDataCleaningPage() {
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
                {"Data Cleaning"}
              </span>
            </div>
            <h1>
              {"Data Cleaning & Preprocessing"}
            </h1>
            <p className="article-subtitle">
              {"Transform Messy Data into Analysis-Ready Datasets"}
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
                  {"Why Data Cleaning Matters"}
                </h2>
                <p>
                  {"Data analysts spend "}
                  <strong>
                    {"60-80% of their time"}
                  </strong>
                  {" cleaning and preparing data. Raw data is messy - it contains errors, missing values, duplicates, and inconsistencies that can lead to wrong conclusions."}
                </p>
                <div className="code-block">
                  <pre><code>{`# The Reality of Real-World Data

Raw Data Problems:
┌─────────────────────────────────────────────────────────────────┐
│  Issue              │  Example                │  Impact         │
├─────────────────────────────────────────────────────────────────┤
│  Missing Values     │  Age: NULL, N/A, ""     │  Skewed stats   │
│  Duplicates         │  Same customer twice    │  Inflated counts│
│  Inconsistent       │  "USA", "US", "U.S.A"   │  Wrong grouping │
│  Wrong Data Types   │  "25" as text, not int  │  Calc errors    │
│  Outliers           │  Age: 999               │  Skewed averages│
│  Invalid Values     │  Date: 2024-13-45       │  Processing fail│
└─────────────────────────────────────────────────────────────────┘

"Garbage In, Garbage Out" - Clean data = Reliable insights`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"The Data Cleaning Process"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Data Cleaning Workflow

Step 1: EXPLORE
   │  └── Understand your data first
   ▼
Step 2: HANDLE MISSING VALUES
   │  └── Drop, fill, or flag nulls
   ▼
Step 3: REMOVE DUPLICATES
   │  └── Identify and remove duplicate rows
   ▼
Step 4: FIX DATA TYPES
   │  └── Convert to correct types
   ▼
Step 5: STANDARDIZE VALUES
   │  └── Consistent formats and categories
   ▼
Step 6: HANDLE OUTLIERS
   │  └── Detect and decide what to do
   ▼
Step 7: VALIDATE
   └── Check data quality after cleaning`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 1: Explore Your Data"}
                </h2>
                <p>
                  {"Before cleaning, understand what you're working with:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np

# Load your data
df = pd.read_csv('sales_data.csv')

# First look at the data
print(df.head())           # First 5 rows
print(df.tail())           # Last 5 rows
print(df.shape)            # (rows, columns)

# Data types and missing values
print(df.info())
# Output:
# Column      Non-Null Count  Dtype
# ------      --------------  -----
# customer_id 1000 non-null   int64
# name        998 non-null    object  ← 2 missing!
# age         950 non-null    float64 ← 50 missing!
# country     1000 non-null   object

# Summary statistics
print(df.describe())
# Shows: count, mean, std, min, 25%, 50%, 75%, max

# Check for missing values
print(df.isnull().sum())
# customer_id    0
# name           2
# age           50
# country        0

# Check for duplicates
print(f"Duplicates: {df.duplicated().sum()}")

# Unique values in categorical columns
print(df['country'].value_counts())`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 2: Handle Missing Values"}
                </h2>
                <p>
                  {"Missing values are the most common data quality issue. You have several options:"}
                </p>
                <h3>
                  {"Option 1: Remove Rows with Missing Values"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Drop rows with ANY missing values
df_clean = df.dropna()

# Drop rows only if SPECIFIC columns are missing
df_clean = df.dropna(subset=['age', 'income'])

# Drop rows if ALL values are missing
df_clean = df.dropna(how='all')

# Drop rows if more than 2 values are missing
df_clean = df.dropna(thresh=len(df.columns) - 2)`}</code></pre>
                </div>
                <h3>
                  {"Option 2: Fill Missing Values"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Fill with a constant value
df['age'].fillna(0, inplace=True)
df['country'].fillna('Unknown', inplace=True)

# Fill with mean (for numerical data)
df['age'].fillna(df['age'].mean(), inplace=True)

# Fill with median (better for skewed data)
df['income'].fillna(df['income'].median(), inplace=True)

# Fill with mode (for categorical data)
df['country'].fillna(df['country'].mode()[0], inplace=True)

# Forward fill (use previous value) - good for time series
df['stock_price'].fillna(method='ffill', inplace=True)

# Backward fill (use next value)
df['stock_price'].fillna(method='bfill', inplace=True)

# Fill with group-specific values
df['age'] = df.groupby('country')['age'].transform(
    lambda x: x.fillna(x.mean())
)`}</code></pre>
                </div>
                <h3>
                  {"Option 3: Flag Missing Values"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Create a flag column before filling
df['age_missing'] = df['age'].isnull().astype(int)

# Now fill the value
df['age'].fillna(df['age'].median(), inplace=True)

# You can use the flag in analysis later
# to see if "missingness" affects outcomes`}</code></pre>
                </div>
                <h3>
                  {"When to Use Each Approach"}
                </h3>
                <div className="code-block">
                  <pre><code>{`┌──────────────────────────────────────────────────────────────────┐
│  Approach      │  When to Use                                    │
├──────────────────────────────────────────────────────────────────┤
│  DROP rows     │  • Few missing values (<5%)                     │
│                │  • Missing values are random                    │
│                │  • You have plenty of data                      │
├──────────────────────────────────────────────────────────────────┤
│  FILL mean     │  • Numerical data                               │
│                │  • Data is normally distributed                 │
│                │  • Missing values are random                    │
├──────────────────────────────────────────────────────────────────┤
│  FILL median   │  • Numerical data with outliers                 │
│                │  • Skewed distributions                         │
├──────────────────────────────────────────────────────────────────┤
│  FILL mode     │  • Categorical data                             │
│                │  • One category dominates                       │
├──────────────────────────────────────────────────────────────────┤
│  FLAG + fill   │  • "Missingness" might be meaningful            │
│                │  • You want to analyze patterns                 │
└──────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 3: Remove Duplicates"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check for duplicate rows
print(f"Total rows: {len(df)}")
print(f"Duplicate rows: {df.duplicated().sum()}")

# View the duplicates
print(df[df.duplicated(keep=False)])  # Shows all duplicates

# Remove exact duplicates (keep first occurrence)
df_clean = df.drop_duplicates()

# Remove duplicates based on specific columns
df_clean = df.drop_duplicates(subset=['email'])
df_clean = df.drop_duplicates(subset=['customer_id', 'order_date'])

# Keep last occurrence instead of first
df_clean = df.drop_duplicates(subset=['email'], keep='last')

# Remove ALL duplicates (don't keep any)
df_clean = df.drop_duplicates(subset=['email'], keep=False)`}</code></pre>
                </div>
                <h3>
                  {"Fuzzy Duplicates"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Sometimes duplicates aren't exact matches
# "John Smith" vs "john smith" vs "JOHN SMITH"

# Standardize before checking
df['name_clean'] = df['name'].str.lower().str.strip()
df_clean = df.drop_duplicates(subset=['name_clean'])

# For advanced fuzzy matching
from fuzzywuzzy import fuzz

def find_similar_names(df, column, threshold=80):
    """Find names that are similar but not exact matches."""
    names = df[column].unique()
    similar_pairs = []

    for i, name1 in enumerate(names):
        for name2 in names[i+1:]:
            score = fuzz.ratio(str(name1), str(name2))
            if score >= threshold:
                similar_pairs.append((name1, name2, score))

    return similar_pairs

# Find potential duplicates
similar = find_similar_names(df, 'company_name')
print(similar)
# [('Microsoft Corp', 'Microsoft Corporation', 92), ...]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 4: Fix Data Types"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check current data types
print(df.dtypes)

# Common conversions

# String to numeric
df['price'] = pd.to_numeric(df['price'], errors='coerce')  # Invalid → NaN
df['quantity'] = df['quantity'].astype(int)

# String to datetime
df['order_date'] = pd.to_datetime(df['order_date'])
df['order_date'] = pd.to_datetime(df['order_date'], format='%d/%m/%Y')

# Handle date errors
df['date'] = pd.to_datetime(df['date'], errors='coerce')  # Invalid → NaT

# Numeric to category (saves memory, enables ordering)
df['rating'] = df['rating'].astype('category')
df['size'] = pd.Categorical(df['size'],
                            categories=['S', 'M', 'L', 'XL'],
                            ordered=True)

# Boolean conversion
df['is_active'] = df['status'].map({'active': True, 'inactive': False})

# String cleaning before conversion
df['phone'] = df['phone'].str.replace(r'[^0-9]', '', regex=True)
df['phone'] = df['phone'].astype('Int64')  # Nullable integer`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 5: Standardize Values"}
                </h2>
                <h3>
                  {"Text Standardization"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Consistent case
df['name'] = df['name'].str.lower()
df['name'] = df['name'].str.title()  # "John Smith"
df['name'] = df['name'].str.upper()

# Remove extra whitespace
df['name'] = df['name'].str.strip()  # Leading/trailing
df['name'] = df['name'].str.replace(r'\\s+', ' ', regex=True)  # Multiple spaces

# Fix inconsistent categories
# Before: ['USA', 'US', 'U.S.A', 'United States', 'usa']
country_mapping = {
    'USA': 'United States',
    'US': 'United States',
    'U.S.A': 'United States',
    'U.S.A.': 'United States',
    'usa': 'United States'
}
df['country'] = df['country'].replace(country_mapping)

# Or use a function
def standardize_country(country):
    country = str(country).strip().upper()
    if country in ['USA', 'US', 'U.S.A', 'U.S.A.', 'UNITED STATES']:
        return 'United States'
    elif country in ['UK', 'U.K.', 'UNITED KINGDOM', 'GREAT BRITAIN']:
        return 'United Kingdom'
    return country.title()

df['country'] = df['country'].apply(standardize_country)`}</code></pre>
                </div>
                <h3>
                  {"Date Standardization"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Dates come in many formats
# '2024-01-15', '01/15/2024', '15-Jan-2024', 'January 15, 2024'

# Parse various formats
df['date'] = pd.to_datetime(df['date'], infer_datetime_format=True)

# Standardize to one format
df['date_str'] = df['date'].dt.strftime('%Y-%m-%d')

# Extract useful parts
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.day_name()
df['quarter'] = df['date'].dt.quarter`}</code></pre>
                </div>
                <h3>
                  {"Numerical Standardization"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Remove currency symbols and convert
df['price'] = df['price'].str.replace(r'[$,]', '', regex=True).astype(float)

# Standardize units (e.g., all weights in kg)
def convert_to_kg(value, unit):
    if unit == 'lb':
        return value * 0.453592
    elif unit == 'g':
        return value / 1000
    return value

df['weight_kg'] = df.apply(
    lambda x: convert_to_kg(x['weight'], x['unit']), axis=1
)

# Round to consistent decimal places
df['price'] = df['price'].round(2)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 6: Handle Outliers"}
                </h2>
                <p>
                  {"Outliers are extreme values that can skew your analysis."}
                </p>
                <h3>
                  {"Detecting Outliers"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np

# Method 1: IQR (Interquartile Range)
Q1 = df['age'].quantile(0.25)
Q3 = df['age'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = df[(df['age'] < lower_bound) | (df['age'] > upper_bound)]
print(f"Outliers found: {len(outliers)}")

# Method 2: Z-Score (for normally distributed data)
from scipy import stats

z_scores = np.abs(stats.zscore(df['age'].dropna()))
outliers = df[z_scores > 3]  # More than 3 standard deviations

# Method 3: Visual inspection
import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(12, 4))
df['age'].hist(ax=axes[0], bins=50)
axes[0].set_title('Distribution')
df.boxplot(column='age', ax=axes[1])
axes[1].set_title('Box Plot')
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"Handling Outliers"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Option 1: Remove outliers
df_clean = df[(df['age'] >= lower_bound) & (df['age'] <= upper_bound)]

# Option 2: Cap outliers (Winsorization)
df['age_capped'] = df['age'].clip(lower=lower_bound, upper=upper_bound)

# Option 3: Replace with NaN and handle as missing
df.loc[df['age'] > upper_bound, 'age'] = np.nan
df.loc[df['age'] < lower_bound, 'age'] = np.nan

# Option 4: Log transformation (reduces impact of outliers)
df['income_log'] = np.log1p(df['income'])  # log(1+x) handles zeros

# Option 5: Flag outliers for separate analysis
df['is_outlier'] = ((df['age'] < lower_bound) |
                    (df['age'] > upper_bound)).astype(int)`}</code></pre>
                </div>
                <h3>
                  {"When to Keep Outliers"}
                </h3>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│  KEEP OUTLIERS WHEN:           │  REMOVE OUTLIERS WHEN:         │
├─────────────────────────────────────────────────────────────────┤
│  • They're valid data points   │  • They're data entry errors   │
│  • They represent real events  │  • They're impossible values   │
│  • You're studying extremes    │  • They skew your analysis     │
│  • Your model handles them     │  • Small sample size           │
│                                │                                 │
│  Example: A billionaire in     │  Example: Age = 999            │
│  income data is real           │  is clearly an error           │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 7: Validate Your Clean Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create a data quality report

def data_quality_report(df):
    """Generate a data quality report."""

    report = pd.DataFrame({
        'Column': df.columns,
        'Type': df.dtypes.values,
        'Non-Null': df.count().values,
        'Null': df.isnull().sum().values,
        'Null %': (df.isnull().sum() / len(df) * 100).round(2).values,
        'Unique': df.nunique().values,
        'Sample': [df[col].iloc[0] if len(df) > 0 else None for col in df.columns]
    })

    return report

# Before cleaning
print("BEFORE CLEANING:")
print(data_quality_report(df_raw))

# After cleaning
print("\\nAFTER CLEANING:")
print(data_quality_report(df_clean))

# Validation checks
def validate_data(df):
    """Run validation checks on cleaned data."""

    issues = []

    # Check for remaining nulls
    null_counts = df.isnull().sum()
    if null_counts.any():
        issues.append(f"Remaining nulls: {null_counts[null_counts > 0].to_dict()}")

    # Check for duplicates
    dup_count = df.duplicated().sum()
    if dup_count > 0:
        issues.append(f"Remaining duplicates: {dup_count}")

    # Check value ranges
    if 'age' in df.columns:
        invalid_age = df[(df['age'] < 0) | (df['age'] > 120)]
        if len(invalid_age) > 0:
            issues.append(f"Invalid ages: {len(invalid_age)}")

    # Check date ranges
    if 'date' in df.columns:
        future_dates = df[df['date'] > pd.Timestamp.now()]
        if len(future_dates) > 0:
            issues.append(f"Future dates: {len(future_dates)}")

    if issues:
        print("VALIDATION ISSUES:")
        for issue in issues:
            print(f"  - {issue}")
    else:
        print("All validations passed!")

    return len(issues) == 0

validate_data(df_clean)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Cleaning in Excel"}
                </h2>
                <p>
                  {"Not everything needs Python. Excel has powerful cleaning tools:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Excel Data Cleaning Features:

1. REMOVE DUPLICATES
   Data → Remove Duplicates → Select columns

2. TEXT FUNCTIONS
   =TRIM(A1)              Remove extra spaces
   =UPPER(A1)             Convert to uppercase
   =LOWER(A1)             Convert to lowercase
   =PROPER(A1)            Title case
   =CLEAN(A1)             Remove non-printable characters
   =SUBSTITUTE(A1,"old","new")  Replace text

3. FIND & REPLACE
   Ctrl+H → Find and Replace

4. TEXT TO COLUMNS
   Data → Text to Columns → Split by delimiter

5. FLASH FILL (Ctrl+E)
   Excel learns your pattern and fills automatically

6. HANDLING ERRORS
   =IFERROR(A1/B1, 0)     Replace errors with 0
   =IFNA(VLOOKUP(...), "Not Found")

7. DATE FIXES
   =DATEVALUE(A1)         Convert text to date
   =TEXT(A1,"YYYY-MM-DD") Standardize format

8. CONDITIONAL FORMATTING
   Home → Conditional Formatting → Highlight duplicates`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Cleaning Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Document everything:"}
                    </strong>
                    {" Keep a log of what you changed and why"}
                  </li>
                  <li>
                    <strong>
                      {"Never modify raw data:"}
                    </strong>
                    {" Always work on a copy"}
                  </li>
                  <li>
                    <strong>
                      {"Automate with scripts:"}
                    </strong>
                    {" Make cleaning reproducible"}
                  </li>
                  <li>
                    <strong>
                      {"Validate early, validate often:"}
                    </strong>
                    {" Check after each step"}
                  </li>
                  <li>
                    <strong>
                      {"Understand your data:"}
                    </strong>
                    {" Talk to data owners about edge cases"}
                  </li>
                  <li>
                    <strong>
                      {"Be consistent:"}
                    </strong>
                    {" Apply the same rules throughout"}
                  </li>
                  <li>
                    <strong>
                      {"Handle edge cases explicitly:"}
                    </strong>
                    {" Don't let them slip through"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Template: Reusable Data Cleaning Pipeline

class DataCleaner:
    def __init__(self, df):
        self.df = df.copy()
        self.log = []

    def log_action(self, action, details):
        self.log.append(f"{action}: {details}")

    def remove_duplicates(self, subset=None):
        before = len(self.df)
        self.df = self.df.drop_duplicates(subset=subset)
        removed = before - len(self.df)
        self.log_action("Remove duplicates", f"Removed {removed} rows")
        return self

    def fill_missing(self, column, method='median'):
        nulls = self.df[column].isnull().sum()
        if method == 'median':
            self.df[column].fillna(self.df[column].median(), inplace=True)
        elif method == 'mean':
            self.df[column].fillna(self.df[column].mean(), inplace=True)
        elif method == 'mode':
            self.df[column].fillna(self.df[column].mode()[0], inplace=True)
        self.log_action(f"Fill {column}", f"Filled {nulls} nulls with {method}")
        return self

    def standardize_text(self, column):
        self.df[column] = self.df[column].str.strip().str.lower()
        self.log_action(f"Standardize {column}", "Trimmed and lowercased")
        return self

    def get_clean_data(self):
        print("Cleaning Log:")
        for entry in self.log:
            print(f"  - {entry}")
        return self.df

# Usage
cleaner = DataCleaner(df)
df_clean = (cleaner
    .remove_duplicates(subset=['email'])
    .fill_missing('age', method='median')
    .fill_missing('country', method='mode')
    .standardize_text('name')
    .get_clean_data()
)`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Analytics"}
                </h2>
                <p>
                  {"Our Data Analytics program covers data cleaning, analysis, and visualization with hands-on projects using real-world datasets."}
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
                  <Link href="/data-analytics/articles/pandas" className="related-article-card">
                    <h4>
                      {"Pandas Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Data manipulation with Python"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/sql-analytics" className="related-article-card">
                    <h4>
                      {"SQL for Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Query and transform data"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/excel-analytics" className="related-article-card">
                    <h4>
                      {"Excel Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Spreadsheet data analysis"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

    </>
  );
}
