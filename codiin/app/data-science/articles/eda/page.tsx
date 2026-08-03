import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Exploratory Data Analysis (EDA) with Python",
  description: "Learn Exploratory Data Analysis (EDA) with pandas, matplotlib, and seaborn. Master data visualization, statistical analysis, and pattern discovery techniques.",
  keywords: ["exploratory data analysis", "EDA", "data visualization", "pandas", "matplotlib", "seaborn", "data analysis", "statistical analysis"],
  alternates: { canonical: "/data-science/articles/eda" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/eda",
    title: "Exploratory Data Analysis (EDA): Complete Python Guide",
    description: "Master EDA techniques with pandas, matplotlib, and seaborn. Learn to visualize and understand your data.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Exploratory Data Analysis (EDA): Complete Python Guide",
  "description": "Comprehensive guide to exploratory data analysis with pandas, matplotlib, and seaborn",
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

export default function DataScienceEdaPage() {
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
                {"EDA"}
              </span>
            </div>
            <h1>
              {"Exploratory Data Analysis (EDA)"}
            </h1>
            <p className="article-subtitle">
              {"Discover Patterns and Insights with Python Visualization"}
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
                  {"What is Exploratory Data Analysis?"}
                </h2>
                <p>
                  {"Exploratory Data Analysis (EDA) is the critical first step in any data science project. It's the process of analyzing and visualizing data to summarize its main characteristics, discover patterns, spot anomalies, test hypotheses, and check assumptions."}
                </p>
                <p>
                  {"John Tukey, who pioneered EDA in the 1970s, emphasized that \"The greatest value of a picture is when it forces us to notice what we never expected to see.\" EDA is about letting the data tell its story before you impose your models on it."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why EDA is Essential"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Understand Data Structure:"}
                    </strong>
                    {" Learn about features, types, and relationships"}
                  </li>
                  <li>
                    <strong>
                      {"Detect Data Quality Issues:"}
                    </strong>
                    {" Find missing values, outliers, and inconsistencies"}
                  </li>
                  <li>
                    <strong>
                      {"Discover Patterns:"}
                    </strong>
                    {" Identify trends, correlations, and distributions"}
                  </li>
                  <li>
                    <strong>
                      {"Generate Hypotheses:"}
                    </strong>
                    {" Form questions and theories to test"}
                  </li>
                  <li>
                    <strong>
                      {"Guide Feature Engineering:"}
                    </strong>
                    {" Decide which features to create or transform"}
                  </li>
                  <li>
                    <strong>
                      {"Select Models:"}
                    </strong>
                    {" Choose appropriate algorithms based on data characteristics"}
                  </li>
                  <li>
                    <strong>
                      {"Communicate Insights:"}
                    </strong>
                    {" Create visualizations that tell data stories"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"1. Initial Data Inspection"}
                </h2>
                <p>
                  {"Start by understanding the basic structure and content of your data."}
                </p>
                <h3>
                  {"Load and Examine Data"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set display options
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', 100)

# Load data
df = pd.read_csv('data.csv')

# First look at the data
print(df.head())        # First 5 rows
print(df.tail())        # Last 5 rows
print(df.sample(10))    # Random 10 rows

# Dataset shape
print(f"Rows: {df.shape[0]}, Columns: {df.shape[1]}")

# Column information
print(df.info())
print(df.dtypes)

# Column names
print(df.columns.tolist())`}</code></pre>
                </div>
                <h3>
                  {"Basic Statistics"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Summary statistics for numerical features
print(df.describe())

# Include categorical features
print(df.describe(include='all'))

# Custom statistics
print(df.describe(percentiles=[.1, .25, .5, .75, .9, .95, .99]))

# Statistics for specific columns
print(df[['age', 'salary', 'score']].describe())`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"2. Data Quality Assessment"}
                </h2>
                <h3>
                  {"Missing Values Analysis"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Count missing values
missing = df.isnull().sum()
print(missing[missing > 0])

# Percentage of missing values
missing_percent = (df.isnull().sum() / len(df)) * 100
print(missing_percent[missing_percent > 0].sort_values(ascending=False))

# Visualize missing data
import missingno as msno

# Bar chart of missing values
msno.bar(df)
plt.show()

# Matrix showing patterns of missingness
msno.matrix(df)
plt.show()

# Heatmap of missing value correlations
msno.heatmap(df)
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"Duplicate Detection"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Check for duplicates
duplicates = df.duplicated().sum()
print(f"Number of duplicate rows: {duplicates}")

# View duplicate rows
print(df[df.duplicated(keep=False)])

# Check duplicates on specific columns
duplicate_ids = df.duplicated(subset=['customer_id']).sum()
print(f"Duplicate customer IDs: {duplicate_ids}")`}</code></pre>
                </div>
                <h3>
                  {"Data Type Issues"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Check for mixed data types in columns
for col in df.columns:
    unique_types = df[col].apply(type).unique()
    if len(unique_types) > 1:
        print(f"{col} has mixed types: {unique_types}")

# Identify numeric columns stored as strings
for col in df.select_dtypes(include='object'):
    try:
        pd.to_numeric(df[col])
        print(f"{col} can be converted to numeric")
    except:
        pass`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"3. Univariate Analysis"}
                </h2>
                <p>
                  {"Analyze each variable individually to understand its distribution and characteristics."}
                </p>
                <h3>
                  {"Numerical Features"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Distribution plots
fig, axes = plt.subplots(2, 2, figsize=(15, 10))

# Histogram
df['age'].hist(bins=30, ax=axes[0, 0])
axes[0, 0].set_title('Age Distribution')

# Density plot (KDE)
df['salary'].plot(kind='density', ax=axes[0, 1])
axes[0, 1].set_title('Salary Density')

# Box plot (shows outliers)
df.boxplot(column='score', ax=axes[1, 0])
axes[1, 0].set_title('Score Box Plot')

# Violin plot (combines box plot and KDE)
sns.violinplot(y=df['experience'], ax=axes[1, 1])
axes[1, 1].set_title('Experience Violin Plot')

plt.tight_layout()
plt.show()

# Multiple distributions at once
df[['age', 'salary', 'score', 'experience']].hist(
    bins=30, figsize=(15, 10), edgecolor='black'
)
plt.tight_layout()
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"Categorical Features"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Value counts
print(df['category'].value_counts())
print(df['category'].value_counts(normalize=True))  # Percentages

# Bar plots
fig, axes = plt.subplots(1, 2, figsize=(15, 5))

# Count plot
sns.countplot(data=df, x='category', ax=axes[0])
axes[0].set_title('Category Distribution')
axes[0].tick_params(axis='x', rotation=45)

# Pie chart
df['category'].value_counts().plot(kind='pie', autopct='%1.1f%%', ax=axes[1])
axes[1].set_title('Category Proportions')

plt.tight_layout()
plt.show()

# For many categories, show top N
top_categories = df['city'].value_counts().head(10)
top_categories.plot(kind='barh', figsize=(10, 6))
plt.title('Top 10 Cities')
plt.xlabel('Count')
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"Statistical Tests"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from scipy import stats

# Test for normality
statistic, p_value = stats.normaltest(df['salary'].dropna())
print(f"Normal test p-value: {p_value}")
if p_value < 0.05:
    print("Data is NOT normally distributed")
else:
    print("Data appears normally distributed")

# Skewness and Kurtosis
print(f"Skewness: {df['salary'].skew()}")
print(f"Kurtosis: {df['salary'].kurt()}")

# Visual normality check: Q-Q plot
from scipy.stats import probplot

probplot(df['salary'], dist="norm", plot=plt)
plt.title('Q-Q Plot')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"4. Bivariate Analysis"}
                </h2>
                <p>
                  {"Explore relationships between two variables."}
                </p>
                <h3>
                  {"Numerical vs Numerical"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Scatter plot
plt.figure(figsize=(10, 6))
plt.scatter(df['experience'], df['salary'], alpha=0.5)
plt.xlabel('Experience (years)')
plt.ylabel('Salary')
plt.title('Experience vs Salary')
plt.show()

# Scatter plot with regression line
sns.regplot(data=df, x='experience', y='salary')
plt.show()

# Joint plot (scatter + distributions)
sns.jointplot(data=df, x='experience', y='salary', kind='scatter')
plt.show()

# Hexbin plot (for large datasets)
df.plot(kind='hexbin', x='experience', y='salary', gridsize=20, figsize=(10, 6))
plt.show()

# Correlation coefficient
correlation = df['experience'].corr(df['salary'])
print(f"Correlation: {correlation:.3f}")`}</code></pre>
                </div>
                <h3>
                  {"Categorical vs Numerical"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Box plots by category
plt.figure(figsize=(12, 6))
sns.boxplot(data=df, x='department', y='salary')
plt.xticks(rotation=45)
plt.title('Salary by Department')
plt.show()

# Violin plots (shows distribution shape)
sns.violinplot(data=df, x='education', y='salary')
plt.show()

# Strip plot (shows all points)
sns.stripplot(data=df, x='department', y='salary', alpha=0.5)
plt.show()

# Swarm plot (non-overlapping points, good for small datasets)
sns.swarmplot(data=df, x='department', y='salary', size=3)
plt.show()

# Statistical summary by category
print(df.groupby('department')['salary'].describe())`}</code></pre>
                </div>
                <h3>
                  {"Categorical vs Categorical"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Crosstab
crosstab = pd.crosstab(df['department'], df['education'])
print(crosstab)

# Normalized crosstab (proportions)
crosstab_norm = pd.crosstab(df['department'], df['education'], normalize='index')
print(crosstab_norm)

# Heatmap of crosstab
plt.figure(figsize=(10, 6))
sns.heatmap(crosstab, annot=True, fmt='d', cmap='YlOrRd')
plt.title('Department vs Education')
plt.show()

# Stacked bar chart
crosstab.plot(kind='bar', stacked=True, figsize=(10, 6))
plt.title('Department vs Education Distribution')
plt.legend(title='Education')
plt.xticks(rotation=45)
plt.show()

# Grouped bar chart
crosstab.plot(kind='bar', figsize=(12, 6))
plt.title('Department vs Education')
plt.legend(title='Education')
plt.xticks(rotation=45)
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"5. Multivariate Analysis"}
                </h2>
                <p>
                  {"Analyze relationships among multiple variables simultaneously."}
                </p>
                <h3>
                  {"Correlation Analysis"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Correlation matrix
correlation_matrix = df.corr()
print(correlation_matrix)

# Heatmap
plt.figure(figsize=(12, 10))
sns.heatmap(correlation_matrix, annot=True, fmt='.2f', cmap='coolwarm',
            center=0, square=True, linewidths=1)
plt.title('Correlation Matrix')
plt.show()

# Find highly correlated features
high_corr = correlation_matrix.abs() > 0.8
high_corr = high_corr[high_corr == True]
print("Highly correlated features:")
print(high_corr)

# Correlation with target variable
target_corr = df.corr()['target'].sort_values(ascending=False)
print(target_corr)`}</code></pre>
                </div>
                <h3>
                  {"Pair Plots"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Pair plot for selected features
selected_features = ['age', 'experience', 'salary', 'score', 'target']
sns.pairplot(df[selected_features])
plt.show()

# Pair plot with categorical hue
sns.pairplot(df[selected_features], hue='target')
plt.show()

# Customized pair plot
sns.pairplot(df[selected_features],
             diag_kind='kde',  # KDE on diagonal instead of histogram
             plot_kws={'alpha': 0.6})
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"Multi-dimensional Visualizations"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Scatter plot with size and color
plt.figure(figsize=(12, 8))
scatter = plt.scatter(df['experience'], df['salary'],
                     s=df['score']*10,  # Size by score
                     c=df['age'],        # Color by age
                     alpha=0.6, cmap='viridis')
plt.colorbar(scatter, label='Age')
plt.xlabel('Experience')
plt.ylabel('Salary')
plt.title('Multi-dimensional Scatter Plot')
plt.show()

# Bubble chart with seaborn
sns.scatterplot(data=df, x='experience', y='salary',
                size='score', hue='department',
                sizes=(50, 500), alpha=0.6)
plt.show()

# 3D scatter plot
from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure(figsize=(12, 8))
ax = fig.add_subplot(111, projection='3d')
ax.scatter(df['age'], df['experience'], df['salary'],
           c=df['score'], cmap='viridis')
ax.set_xlabel('Age')
ax.set_ylabel('Experience')
ax.set_zlabel('Salary')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"6. Outlier Detection"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Box plots for outlier visualization
df[['age', 'salary', 'score']].boxplot(figsize=(12, 6))
plt.show()

# Z-score method
from scipy import stats
z_scores = np.abs(stats.zscore(df[['age', 'salary', 'score']].dropna()))
outliers_z = (z_scores > 3).any(axis=1)
print(f"Outliers by Z-score: {outliers_z.sum()}")

# IQR method
Q1 = df['salary'].quantile(0.25)
Q3 = df['salary'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
outliers_iqr = (df['salary'] < lower_bound) | (df['salary'] > upper_bound)
print(f"Outliers by IQR: {outliers_iqr.sum()}")

# Isolation Forest (ML-based)
from sklearn.ensemble import IsolationForest

iso_forest = IsolationForest(contamination=0.1, random_state=42)
outliers_ml = iso_forest.fit_predict(df[['age', 'salary', 'score']].dropna())
print(f"Outliers by Isolation Forest: {(outliers_ml == -1).sum()}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"7. Advanced EDA Techniques"}
                </h2>
                <h3>
                  {"Feature Interactions"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Create interaction features
df['salary_per_year_experience'] = df['salary'] / (df['experience'] + 1)

# Visualize interactions
sns.scatterplot(data=df, x='age', y='salary', hue='education', style='department')
plt.show()

# Facet grid for multiple subplots
g = sns.FacetGrid(df, col='department', row='education', height=4)
g.map(plt.scatter, 'experience', 'salary', alpha=0.5)
g.add_legend()
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"Time Series Analysis (if applicable)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Convert to datetime
df['date'] = pd.to_datetime(df['date'])

# Set as index
df.set_index('date', inplace=True)

# Time-based aggregations
monthly_avg = df.resample('M')['value'].mean()
monthly_avg.plot(figsize=(12, 6))
plt.title('Monthly Average Values')
plt.show()

# Trend and seasonality
from statsmodels.tsa.seasonal import seasonal_decompose

decomposition = seasonal_decompose(df['value'], model='additive', period=12)
decomposition.plot()
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"8. Automated EDA Tools"}
                </h2>
                <p>
                  {"Use libraries that automate comprehensive EDA reports."}
                </p>
                <h3>
                  {"Pandas Profiling"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from ydata_profiling import ProfileReport

# Generate comprehensive report
profile = ProfileReport(df, title="EDA Report", explorative=True)

# Save to HTML
profile.to_file("eda_report.html")

# View in notebook
profile.to_widgets()

# Access specific sections
print(profile.get_description())`}</code></pre>
                </div>
                <h3>
                  {"Sweetviz"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import sweetviz as sv

# Generate report
report = sv.analyze(df)
report.show_html("sweetviz_report.html")

# Compare datasets (e.g., train vs test)
report = sv.compare([df_train, "Training"], [df_test, "Test"])
report.show_html("comparison_report.html")`}</code></pre>
                </div>
                <h3>
                  {"AutoViz"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from autoviz.AutoViz_Class import AutoViz_Class

AV = AutoViz_Class()
dft = AV.AutoViz('data.csv', sep=',', depVar='target',
                 dfte=None, header=0, verbose=1,
                 lowess=False, chart_format='png',
                 max_rows_analyzed=150000, max_cols_analyzed=30)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices for EDA"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start Simple:"}
                    </strong>
                    {" Begin with basic statistics before complex visualizations"}
                  </li>
                  <li>
                    <strong>
                      {"Ask Questions:"}
                    </strong>
                    {" Let curiosity guide your analysis"}
                  </li>
                  <li>
                    <strong>
                      {"Document Findings:"}
                    </strong>
                    {" Keep notes on insights and decisions"}
                  </li>
                  <li>
                    <strong>
                      {"Use Multiple Visualizations:"}
                    </strong>
                    {" Different plots reveal different patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Check Assumptions:"}
                    </strong>
                    {" Verify what you think you know about the data"}
                  </li>
                  <li>
                    <strong>
                      {"Look for Stories:"}
                    </strong>
                    {" Find narratives in the data to communicate"}
                  </li>
                  <li>
                    <strong>
                      {"Iterate:"}
                    </strong>
                    {" EDA is not linear - revisit earlier steps with new insights"}
                  </li>
                  <li>
                    <strong>
                      {"Consider Context:"}
                    </strong>
                    {" Domain knowledge is crucial for interpretation"}
                  </li>
                  <li>
                    <strong>
                      {"Be Skeptical:"}
                    </strong>
                    {" Question apparent patterns - they might be artifacts"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common EDA Workflow"}
                </h2>
                <ol>
                  <li>
                    <strong>
                      {"Load and Inspect:"}
                    </strong>
                    {" Import data, check shape and types"}
                  </li>
                  <li>
                    <strong>
                      {"Clean Data:"}
                    </strong>
                    {" Handle missing values and duplicates"}
                  </li>
                  <li>
                    <strong>
                      {"Univariate Analysis:"}
                    </strong>
                    {" Examine each feature individually"}
                  </li>
                  <li>
                    <strong>
                      {"Bivariate Analysis:"}
                    </strong>
                    {" Explore relationships between pairs"}
                  </li>
                  <li>
                    <strong>
                      {"Multivariate Analysis:"}
                    </strong>
                    {" Understand complex interactions"}
                  </li>
                  <li>
                    <strong>
                      {"Feature Engineering Ideas:"}
                    </strong>
                    {" Note transformations and new features"}
                  </li>
                  <li>
                    <strong>
                      {"Document Insights:"}
                    </strong>
                    {" Summarize findings and decisions"}
                  </li>
                  <li>
                    <strong>
                      {"Create Report:"}
                    </strong>
                    {" Compile visualizations and conclusions"}
                  </li>
                </ol>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master EDA with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program teaches comprehensive EDA techniques with real-world datasets. Learn to extract insights that drive business decisions."}
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
                  <Link href="/data-science/articles/data-preprocessing" className="related-article-card">
                    <h4>
                      {"Data Preprocessing"}
                    </h4>
                    {" "}
                    <p>
                      {"Clean and transform your data based on EDA insights"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Create powerful features discovered through EDA"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/statistics" className="related-article-card">
                    <h4>
                      {"Statistics for Data Science"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical foundations for understanding data"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Exploratory Data Analysis."} />
    </>
  );
}
