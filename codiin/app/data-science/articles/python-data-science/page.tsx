import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Python for Data Science: Complete Guide",
  description: "Master Python for Data Science - learn essential libraries, data manipulation, visualization, and analysis techniques for becoming a data scientist.",
  keywords: ["Python data science", "Python tutorial", "data analysis Python", "Python programming", "Jupyter notebooks", "data science basics"],
  alternates: { canonical: "/data-science/articles/python-data-science" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/python-data-science",
    title: "Python for Data Science: Complete Guide",
    description: "Learn Python programming essentials for data science and machine learning.",
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
  "headline": "Python for Data Science: Complete Guide",
  "description": "Complete guide to Python programming for data science",
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

export default function DataSciencePythonDataSciencePage() {
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
                {"Python for Data Science"}
              </span>
            </div>
            <h1>
              {"Python for Data Science"}
            </h1>
            <p className="article-subtitle">
              {"The Foundation of Modern Data Science"}
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
                  {"Why Python for Data Science?"}
                </h2>
                <p>
                  {"Python has become the lingua franca of data science, and for good reason. Its readable syntax, extensive libraries, and active community make it the ideal choice for data analysis, machine learning, and AI development."}
                </p>
                <p>
                  {"From startups to Fortune 500 companies, Python powers data science workflows at organizations like Google, Netflix, NASA, and countless others."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Advantages of Python"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Readability:"}
                    </strong>
                    {" Clean syntax that reads like English"}
                  </li>
                  <li>
                    <strong>
                      {"Rich Ecosystem:"}
                    </strong>
                    {" NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch"}
                  </li>
                  <li>
                    <strong>
                      {"Community Support:"}
                    </strong>
                    {" Extensive documentation and tutorials"}
                  </li>
                  <li>
                    <strong>
                      {"Versatility:"}
                    </strong>
                    {" From data cleaning to deep learning to deployment"}
                  </li>
                  <li>
                    <strong>
                      {"Integration:"}
                    </strong>
                    {" Works with databases, APIs, and cloud services"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Setting Up Your Environment"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Anaconda or Miniconda for package management
# Create a new environment
conda create -n datascience python=3.11
conda activate datascience

# Install essential packages
conda install numpy pandas matplotlib seaborn scikit-learn jupyter

# Or use pip
pip install numpy pandas matplotlib seaborn scikit-learn jupyterlab

# Launch Jupyter Lab
jupyter lab`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Python Basics for Data Science"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Variables and Data Types
name = "Data Scientist"
age = 28
salary = 95000.50
is_employed = True

# Lists - ordered, mutable
skills = ["Python", "SQL", "Machine Learning"]
skills.append("Deep Learning")

# Dictionaries - key-value pairs
person = {
    "name": "Alice",
    "role": "Data Scientist",
    "skills": ["Python", "R", "SQL"]
}

# List Comprehensions - Pythonic way
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]

# Functions
def calculate_statistics(data):
    """Calculate basic statistics for a dataset."""
    return {
        "mean": sum(data) / len(data),
        "min": min(data),
        "max": max(data),
        "count": len(data)
    }

stats = calculate_statistics([10, 20, 30, 40, 50])
print(stats)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Working with Files"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Reading and writing text files
with open('data.txt', 'r') as file:
    content = file.read()

with open('output.txt', 'w') as file:
    file.write("Analysis Results\\n")

# Reading CSV files (basic Python)
import csv

with open('data.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row['column_name'])

# JSON handling
import json

# Read JSON
with open('config.json', 'r') as file:
    config = json.load(file)

# Write JSON
with open('results.json', 'w') as file:
    json.dump({"accuracy": 0.95, "model": "RandomForest"}, file)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential Data Science Libraries"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# NumPy - Numerical computing
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
matrix = np.random.randn(3, 3)
print(arr.mean(), arr.std())

# Pandas - Data manipulation
import pandas as pd

df = pd.read_csv('sales_data.csv')
print(df.head())
print(df.describe())
df_filtered = df[df['revenue'] > 1000]

# Matplotlib - Visualization
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 6))
plt.plot(df['date'], df['revenue'])
plt.xlabel('Date')
plt.ylabel('Revenue')
plt.title('Revenue Over Time')
plt.savefig('revenue_plot.png')
plt.show()

# Seaborn - Statistical visualization
import seaborn as sns

sns.histplot(df['revenue'], kde=True)
sns.heatmap(df.corr(), annot=True)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Object-Oriented Python for Data Science"}
                </h2>
                <div className="code-block">
                  <pre><code>{`class DataPipeline:
    """A reusable data processing pipeline."""

    def __init__(self, data):
        self.data = data
        self.processed = None

    def clean(self):
        """Remove missing values and duplicates."""
        self.processed = self.data.dropna().drop_duplicates()
        return self

    def transform(self, columns, func):
        """Apply transformation to specified columns."""
        for col in columns:
            self.processed[col] = self.processed[col].apply(func)
        return self

    def get_result(self):
        """Return processed data."""
        return self.processed

# Usage
pipeline = DataPipeline(df)
result = (pipeline
          .clean()
          .transform(['price'], lambda x: x * 1.1)
          .get_result())`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`def safe_divide(a, b):
    """Safely divide two numbers."""
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Invalid input types")
        return None
    else:
        return result
    finally:
        print("Division attempted")

# Custom exceptions
class DataValidationError(Exception):
    """Raised when data validation fails."""
    pass

def validate_dataframe(df, required_columns):
    missing = set(required_columns) - set(df.columns)
    if missing:
        raise DataValidationError(f"Missing columns: {missing}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Working with APIs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import requests

# GET request
response = requests.get('https://api.example.com/data')
if response.status_code == 200:
    data = response.json()

# POST request with authentication
headers = {'Authorization': 'Bearer YOUR_TOKEN'}
payload = {'query': 'machine learning'}

response = requests.post(
    'https://api.example.com/search',
    headers=headers,
    json=payload
)

# Handling API responses
def fetch_data(url, params=None):
    """Fetch data from API with error handling."""
    try:
        response = requests.get(url, params=params, timeout=30)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API Error: {e}")
        return None`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Jupyter Notebooks Best Practices"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Cell 1: Imports (always at the top)
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

%matplotlib inline
plt.style.use('seaborn-v0_8-whitegrid')

# Cell 2: Configuration
pd.set_option('display.max_columns', 50)
pd.set_option('display.max_rows', 100)

# Cell 3: Load Data
DATA_PATH = '../data/raw/'
df = pd.read_csv(f'{DATA_PATH}dataset.csv')

# Use markdown cells for documentation
# # Analysis Title
# ## Section Header
# Explain your methodology and findings

# Magic commands
%timeit df.groupby('category').mean()  # Time execution
%who DataFrame  # List all DataFrames
%load_ext autoreload  # Auto-reload modules
%autoreload 2`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Python for Data Science"}
                </h2>
                <p>
                  {"Our Data Science program provides comprehensive Python training from basics to advanced topics. Learn with hands-on projects and expert mentorship."}
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
                  <Link href="/data-science/articles/numpy-pandas" className="related-article-card">
                    <h4>
                      {"NumPy & Pandas Mastery"}
                    </h4>
                    {" "}
                    <p>
                      {"Deep dive into data manipulation"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/eda" className="related-article-card">
                    <h4>
                      {"Exploratory Data Analysis"}
                    </h4>
                    {" "}
                    <p>
                      {"Techniques for understanding your data"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/statistics" className="related-article-card">
                    <h4>
                      {"Statistics for Data Science"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical foundations you need"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Python for Data Science."} />
    </>
  );
}
