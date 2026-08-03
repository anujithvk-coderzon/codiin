import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Python Data Visualization: Matplotlib & Seaborn",
  description: "Learn Python data visualization with Matplotlib and Seaborn. Create charts, plots, and professional visualizations for data analysis.",
  keywords: ["Python visualization", "Matplotlib tutorial", "Seaborn tutorial", "data visualization", "Python charts", "plotting in Python"],
  alternates: { canonical: "/data-analytics/articles/data-visualization-python" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/data-visualization-python",
    title: "Python Data Visualization: Matplotlib & Seaborn",
    description: "Master data visualization in Python with Matplotlib and Seaborn.",
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
  "headline": "Python Data Visualization: Matplotlib & Seaborn",
  "description": "Complete guide to data visualization in Python",
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

export default function DataAnalyticsDataVisualizationPythonPage() {
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
                {"Python Visualization"}
              </span>
            </div>
            <h1>
              {"Data Visualization in Python"}
            </h1>
            <p className="article-subtitle">
              {"Matplotlib & Seaborn Essentials"}
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
                  {"Why Python for Visualization?"}
                </h2>
                <p>
                  {"Python offers powerful libraries for creating publication-quality visualizations. Matplotlib provides complete control over every aspect of your plots, while Seaborn builds on top of it to offer beautiful statistical visualizations with minimal code."}
                </p>
                <p>
                  {"Together, they form the foundation of data visualization in Python's data science ecosystem."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Matplotlib Basics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import matplotlib.pyplot as plt
import numpy as np

# Basic Line Plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Simple Line Plot')
plt.legend()
plt.grid(True)
plt.show()

# Multiple Lines
plt.figure(figsize=(10, 6))
plt.plot(x, np.sin(x), label='sin(x)', color='blue')
plt.plot(x, np.cos(x), label='cos(x)', color='red')
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Multiple Lines')
plt.legend()
plt.show()

# Line Styles
plt.plot(x, y, linestyle='--')      # Dashed
plt.plot(x, y, linestyle='-.')      # Dash-dot
plt.plot(x, y, linewidth=2)         # Line width
plt.plot(x, y, marker='o')          # With markers`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Bar Charts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import matplotlib.pyplot as plt

# Simple Bar Chart
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]

plt.figure(figsize=(10, 6))
plt.bar(categories, values, color='steelblue')
plt.xlabel('Category')
plt.ylabel('Value')
plt.title('Bar Chart')
plt.show()

# Horizontal Bar Chart
plt.figure(figsize=(10, 6))
plt.barh(categories, values, color='coral')
plt.xlabel('Value')
plt.ylabel('Category')
plt.title('Horizontal Bar Chart')
plt.show()

# Grouped Bar Chart
x = np.arange(len(categories))
width = 0.35
values2 = [30, 35, 60, 65, 40]

fig, ax = plt.subplots(figsize=(10, 6))
bars1 = ax.bar(x - width/2, values, width, label='2023')
bars2 = ax.bar(x + width/2, values2, width, label='2024')

ax.set_xlabel('Category')
ax.set_ylabel('Value')
ax.set_title('Grouped Bar Chart')
ax.set_xticks(x)
ax.set_xticklabels(categories)
ax.legend()
plt.show()

# Stacked Bar Chart
fig, ax = plt.subplots(figsize=(10, 6))
ax.bar(categories, values, label='Product A')
ax.bar(categories, values2, bottom=values, label='Product B')
ax.legend()
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Scatter Plots & Histograms"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Scatter Plot
np.random.seed(42)
x = np.random.randn(100)
y = x + np.random.randn(100) * 0.5

plt.figure(figsize=(10, 6))
plt.scatter(x, y, alpha=0.6, c='purple', s=50)
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Scatter Plot')
plt.show()

# Scatter with Color Mapping
colors = np.random.randn(100)
sizes = np.abs(np.random.randn(100)) * 100

plt.figure(figsize=(10, 6))
scatter = plt.scatter(x, y, c=colors, s=sizes,
                       alpha=0.6, cmap='viridis')
plt.colorbar(scatter, label='Value')
plt.title('Scatter with Color & Size')
plt.show()

# Histogram
data = np.random.randn(1000)

plt.figure(figsize=(10, 6))
plt.hist(data, bins=30, edgecolor='black', alpha=0.7)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()

# Multiple Histograms
data1 = np.random.normal(0, 1, 1000)
data2 = np.random.normal(2, 1.5, 1000)

plt.figure(figsize=(10, 6))
plt.hist(data1, bins=30, alpha=0.5, label='Group 1')
plt.hist(data2, bins=30, alpha=0.5, label='Group 2')
plt.legend()
plt.title('Overlapping Histograms')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Subplots & Layouts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Multiple Subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Top-left: Line plot
axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Line Plot')

# Top-right: Bar chart
axes[0, 1].bar(categories, values)
axes[0, 1].set_title('Bar Chart')

# Bottom-left: Scatter plot
axes[1, 0].scatter(x[:50], np.cos(x[:50]))
axes[1, 0].set_title('Scatter Plot')

# Bottom-right: Histogram
axes[1, 1].hist(data, bins=20)
axes[1, 1].set_title('Histogram')

plt.tight_layout()
plt.show()

# Different Subplot Sizes
fig = plt.figure(figsize=(12, 8))

# Large plot on left
ax1 = fig.add_subplot(1, 2, 1)
ax1.plot(x, np.sin(x))
ax1.set_title('Main Plot')

# Two smaller plots on right
ax2 = fig.add_subplot(2, 2, 2)
ax2.bar(['A', 'B', 'C'], [1, 2, 3])

ax3 = fig.add_subplot(2, 2, 4)
ax3.scatter([1, 2, 3], [1, 4, 9])

plt.tight_layout()
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Seaborn Introduction"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import seaborn as sns
import pandas as pd

# Set style
sns.set_theme(style="whitegrid")

# Load sample dataset
tips = sns.load_dataset("tips")

# Distribution Plot
plt.figure(figsize=(10, 6))
sns.histplot(data=tips, x="total_bill", kde=True)
plt.title('Distribution of Total Bill')
plt.show()

# Box Plot
plt.figure(figsize=(10, 6))
sns.boxplot(data=tips, x="day", y="total_bill", hue="smoker")
plt.title('Total Bill by Day and Smoker Status')
plt.show()

# Violin Plot
plt.figure(figsize=(10, 6))
sns.violinplot(data=tips, x="day", y="total_bill", hue="sex")
plt.title('Total Bill Distribution by Day and Gender')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Seaborn Statistical Plots"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Scatter Plot with Regression
plt.figure(figsize=(10, 6))
sns.regplot(data=tips, x="total_bill", y="tip")
plt.title('Tip vs Total Bill with Regression Line')
plt.show()

# Scatter with Categories
plt.figure(figsize=(10, 6))
sns.scatterplot(data=tips, x="total_bill", y="tip",
                hue="day", size="size", sizes=(20, 200))
plt.title('Tips Analysis')
plt.show()

# Pair Plot - All numeric relationships
sns.pairplot(tips, hue="smoker", diag_kind="kde")
plt.suptitle('Pair Plot of Tips Dataset', y=1.02)
plt.show()

# Heatmap - Correlation Matrix
plt.figure(figsize=(8, 6))
correlation = tips[['total_bill', 'tip', 'size']].corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm',
            center=0, square=True)
plt.title('Correlation Matrix')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Categorical Plots"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Count Plot
plt.figure(figsize=(10, 6))
sns.countplot(data=tips, x="day", hue="sex")
plt.title('Count of Visits by Day and Gender')
plt.show()

# Bar Plot (with aggregation)
plt.figure(figsize=(10, 6))
sns.barplot(data=tips, x="day", y="total_bill",
            hue="sex", estimator=np.mean)
plt.title('Average Total Bill by Day and Gender')
plt.show()

# Strip Plot
plt.figure(figsize=(10, 6))
sns.stripplot(data=tips, x="day", y="total_bill",
              hue="smoker", dodge=True, alpha=0.7)
plt.title('Individual Bills by Day')
plt.show()

# Swarm Plot
plt.figure(figsize=(10, 6))
sns.swarmplot(data=tips, x="day", y="total_bill", hue="sex")
plt.title('Bills Distribution (Swarm)')
plt.show()

# Cat Plot - FacetGrid for categories
g = sns.catplot(data=tips, x="day", y="total_bill",
                hue="smoker", col="time", kind="box")
g.fig.suptitle('Total Bill Analysis', y=1.02)
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FacetGrid & Multi-Plot Layouts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# FacetGrid for multiple plots
g = sns.FacetGrid(tips, col="time", row="smoker",
                  height=4, aspect=1.2)
g.map(sns.scatterplot, "total_bill", "tip")
g.add_legend()
plt.show()

# Relational Plot with facets
sns.relplot(data=tips, x="total_bill", y="tip",
            hue="day", col="time", row="smoker",
            kind="scatter", height=4)
plt.show()

# Distribution across facets
g = sns.displot(data=tips, x="total_bill",
                col="day", col_wrap=2,
                kde=True, height=4)
plt.show()

# Joint Plot - Bivariate analysis
sns.jointplot(data=tips, x="total_bill", y="tip",
              kind="reg", height=8)
plt.show()

# Joint with KDE
sns.jointplot(data=tips, x="total_bill", y="tip",
              kind="kde", fill=True)
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Customizing Plots"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Seaborn Styles
styles = ['darkgrid', 'whitegrid', 'dark', 'white', 'ticks']
sns.set_style("whitegrid")

# Color Palettes
sns.set_palette("husl")           # Husl colors
sns.set_palette("Set2")           # Categorical
sns.color_palette("viridis")      # Sequential
sns.color_palette("coolwarm")     # Diverging

# Custom figure with both libraries
fig, ax = plt.subplots(figsize=(12, 6))

# Seaborn plot on matplotlib axis
sns.barplot(data=tips, x="day", y="total_bill",
            hue="sex", ax=ax)

# Matplotlib customizations
ax.set_title('Average Bill by Day', fontsize=16, fontweight='bold')
ax.set_xlabel('Day of Week', fontsize=12)
ax.set_ylabel('Average Total Bill ($)', fontsize=12)
ax.legend(title='Gender', loc='upper right')

# Remove top and right spines
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

plt.tight_layout()
plt.show()

# Saving Figures
fig.savefig('my_plot.png', dpi=300, bbox_inches='tight')
fig.savefig('my_plot.svg', format='svg')
fig.savefig('my_plot.pdf', format='pdf')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Time Series Visualization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create time series data
dates = pd.date_range('2023-01-01', periods=365, freq='D')
values = np.cumsum(np.random.randn(365)) + 100

df = pd.DataFrame({'date': dates, 'value': values})

# Line plot with dates
plt.figure(figsize=(14, 6))
plt.plot(df['date'], df['value'])
plt.xlabel('Date')
plt.ylabel('Value')
plt.title('Time Series Plot')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Seaborn line plot
plt.figure(figsize=(14, 6))
sns.lineplot(data=df, x='date', y='value')
plt.title('Seaborn Time Series')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Multiple time series
df['value2'] = np.cumsum(np.random.randn(365)) + 100

fig, ax = plt.subplots(figsize=(14, 6))
ax.plot(df['date'], df['value'], label='Series 1')
ax.plot(df['date'], df['value2'], label='Series 2')
ax.fill_between(df['date'], df['value'], alpha=0.3)
ax.legend()
ax.set_title('Multiple Time Series')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Choose the right chart:"}
                    </strong>
                    {" Bar for comparison, line for trends, scatter for relationships"}
                  </li>
                  <li>
                    <strong>
                      {"Keep it simple:"}
                    </strong>
                    {" Remove unnecessary gridlines, borders, and decorations"}
                  </li>
                  <li>
                    <strong>
                      {"Use color purposefully:"}
                    </strong>
                    {" Highlight key data, use colorblind-friendly palettes"}
                  </li>
                  <li>
                    <strong>
                      {"Label clearly:"}
                    </strong>
                    {" Always include titles, axis labels, and legends"}
                  </li>
                  <li>
                    <strong>
                      {"Consider your audience:"}
                    </strong>
                    {" Technical vs non-technical viewers"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate figure size:"}
                    </strong>
                    {" Match the display medium"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Python Visualization with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers Python visualization from basics to advanced dashboard creation. Create professional visualizations with guidance from industry experts."}
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
                      {"Pandas"}
                    </h4>
                    {" "}
                    <p>
                      {"Data manipulation in Python"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/tableau" className="related-article-card">
                    <h4>
                      {"Tableau"}
                    </h4>
                    {" "}
                    <p>
                      {"Visual analytics platform"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/power-bi" className="related-article-card">
                    <h4>
                      {"Power BI"}
                    </h4>
                    {" "}
                    <p>
                      {"Microsoft BI visualization"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Python visualization."} />
    </>
  );
}
