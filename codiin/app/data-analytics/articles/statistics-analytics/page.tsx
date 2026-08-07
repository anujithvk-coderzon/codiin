import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Statistics for Data Analytics",
  description: "Learn essential statistics for data analytics - descriptive statistics, probability, hypothesis testing, regression, and statistical analysis for business decisions.",
  keywords: ["statistics for analytics", "descriptive statistics", "hypothesis testing", "regression analysis", "business statistics", "data analysis statistics"],
  alternates: { canonical: "/data-analytics/articles/statistics-analytics" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/statistics-analytics",
    title: "Statistics for Data Analytics",
    description: "Master essential statistics for effective data analysis.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-analytics", label: "Learn Data Analytics", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Statistics for Data Analytics",
  "description": "Complete guide to statistics for data analysts",
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

export default function DataAnalyticsStatisticsAnalyticsPage() {
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
                {"Statistics"}
              </span>
            </div>
            <h1>
              {"Statistics for Data Analytics"}
            </h1>
            <p className="article-subtitle">
              {"Essential Statistical Concepts for Analysts"}
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
                  {"Why Statistics Matter in Analytics"}
                </h2>
                <p>
                  {"Statistics is the foundation of data analytics. It provides the tools to understand data, identify patterns, test hypotheses, and make data-driven decisions with confidence."}
                </p>
                <p>
                  {"A solid grasp of statistics helps you avoid common pitfalls, communicate findings effectively, and draw meaningful conclusions from data."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Descriptive Statistics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Measures of Central Tendency
─────────────────────────────
Mean (Average):     Sum of values / Count
                    Example: (10+20+30)/3 = 20

Median:             Middle value when sorted
                    Example: [10, 20, 30] → 20
                    Even count: average of two middle values

Mode:               Most frequent value
                    Example: [1, 2, 2, 3] → 2

When to Use:
• Mean: Symmetric data, no extreme outliers
• Median: Skewed data, with outliers
• Mode: Categorical data, finding most common


Measures of Spread
─────────────────────────────
Range:              Max - Min
                    Simple but sensitive to outliers

Variance:           Average of squared deviations from mean
                    σ² = Σ(x - μ)² / N

Standard Deviation: Square root of variance
                    σ = √variance
                    Same unit as original data

IQR (Interquartile Range):
                    Q3 - Q1 (75th - 25th percentile)
                    Robust to outliers`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Percentiles & Quartiles"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Percentiles
─────────────────────────────
P10: 10% of data falls below this value
P50: Median (50th percentile)
P90: 90% of data falls below this value
P99: Used for identifying extreme values

Quartiles
─────────────────────────────
Q1 (25th percentile): Lower quartile
Q2 (50th percentile): Median
Q3 (75th percentile): Upper quartile

Five-Number Summary
─────────────────────────────
Min, Q1, Median, Q3, Max
→ Used for box plots

Example:
Data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

Min = 2
Q1 = 5 (25th percentile)
Median = 11 (50th percentile)
Q3 = 17 (75th percentile)
Max = 20

IQR = Q3 - Q1 = 17 - 5 = 12

Outlier Detection (IQR Method):
Lower fence: Q1 - 1.5 × IQR
Upper fence: Q3 + 1.5 × IQR
Values outside fences = potential outliers`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Probability Basics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Probability Rules
─────────────────────────────
P(A) = Number of favorable outcomes / Total outcomes
0 ≤ P(A) ≤ 1

Complement Rule:
P(not A) = 1 - P(A)

Addition Rule:
P(A or B) = P(A) + P(B) - P(A and B)

Multiplication Rule (Independent):
P(A and B) = P(A) × P(B)

Conditional Probability:
P(A|B) = P(A and B) / P(B)
"Probability of A given B occurred"


Example: Customer Conversion
─────────────────────────────
1000 visitors
200 clicked ad (P = 0.20)
40 made purchase (P = 0.04)

P(purchase | clicked) = 40/200 = 0.20
"Given they clicked, 20% probability of purchase"


Bayes' Theorem
─────────────────────────────
P(A|B) = P(B|A) × P(A) / P(B)

Example: Spam Filter
P(Spam|Contains "free") =
    P("free"|Spam) × P(Spam) / P("free")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Probability Distributions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Normal Distribution (Gaussian)
─────────────────────────────
• Bell-shaped, symmetric
• Defined by mean (μ) and std dev (σ)
• 68% of data within 1 σ of mean
• 95% of data within 2 σ of mean
• 99.7% of data within 3 σ of mean

Use: Heights, test scores, measurement errors


Binomial Distribution
─────────────────────────────
• Fixed number of trials (n)
• Two outcomes: success/failure
• Probability of success (p) is constant
• Formula: P(k) = C(n,k) × p^k × (1-p)^(n-k)

Use: Conversion rates, defect rates, A/B tests


Poisson Distribution
─────────────────────────────
• Events occurring in fixed interval
• Events are independent
• Average rate (λ) is known
• Formula: P(k) = (λ^k × e^-λ) / k!

Use: Customer arrivals, website visits, call volume


Exponential Distribution
─────────────────────────────
• Time between events in Poisson process
• Memoryless property

Use: Time between purchases, system failures`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Sampling & Estimation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Sampling Methods
─────────────────────────────
Simple Random:     Each member has equal chance
Stratified:        Divide into groups, sample from each
Cluster:           Sample entire groups randomly
Systematic:        Every nth member

Sample Size Considerations
─────────────────────────────
Larger sample → More precise estimates
Diminishing returns after certain point
Budget and time constraints matter


Standard Error
─────────────────────────────
SE = σ / √n

Standard error decreases as sample size increases
Measures precision of sample mean


Confidence Intervals
─────────────────────────────
"We are 95% confident the true value lies in this range"

95% CI for mean = x̄ ± 1.96 × (σ/√n)

Example:
Sample mean = 50
Standard error = 2
95% CI = 50 ± 1.96 × 2 = [46.08, 53.92]

Common Confidence Levels:
90% CI: ± 1.645 × SE
95% CI: ± 1.960 × SE
99% CI: ± 2.576 × SE`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Hypothesis Testing"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Hypothesis Testing Framework
─────────────────────────────
1. State hypotheses
   H₀ (Null): No effect/difference
   H₁ (Alternative): There is an effect

2. Choose significance level (α)
   Common: 0.05 (5%), 0.01 (1%)

3. Calculate test statistic

4. Find p-value

5. Make decision
   p ≤ α → Reject H₀
   p > α → Fail to reject H₀


P-Value Interpretation
─────────────────────────────
p-value: Probability of observing results
         at least as extreme as the sample,
         assuming H₀ is true

p = 0.03 means: "If there's truly no effect,
there's only a 3% chance of seeing these results"


Common Tests
─────────────────────────────
Z-test:           Compare mean to known value
                  (known population std dev)

t-test:           Compare means
                  (unknown population std dev)

Chi-square:       Test categorical associations

ANOVA:            Compare means across 3+ groups

F-test:           Compare variances


Example: A/B Test
─────────────────────────────
H₀: Conversion rate A = Conversion rate B
H₁: Conversion rate A ≠ Conversion rate B

Control: 1000 visitors, 50 conversions (5%)
Test:    1000 visitors, 65 conversions (6.5%)

Calculate z-statistic → p-value = 0.12
p > 0.05 → Fail to reject H₀
Conclusion: Not enough evidence of difference`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Correlation & Regression"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Correlation
─────────────────────────────
Measures linear relationship between two variables

Pearson Correlation (r):
• Range: -1 to +1
• r = +1: Perfect positive correlation
• r = -1: Perfect negative correlation
• r = 0: No linear correlation

Interpretation:
|r| < 0.3:  Weak
0.3 ≤ |r| < 0.7: Moderate
|r| ≥ 0.7: Strong

⚠️ Correlation ≠ Causation!


Simple Linear Regression
─────────────────────────────
Y = β₀ + β₁X + ε

β₀: Intercept (Y when X = 0)
β₁: Slope (change in Y per unit X)
ε: Error term

Example:
Sales = 1000 + 50 × (Ad Spend in $1000s)

Interpretation: Each $1000 in ad spend
                associates with $50 more sales


R-squared (R²)
─────────────────────────────
• Proportion of variance explained by model
• Range: 0 to 1
• R² = 0.75 → Model explains 75% of variance

Adjusted R²:
• Penalizes adding unnecessary variables
• Use for multiple regression


Multiple Regression
─────────────────────────────
Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ε

Example:
Sales = 500 + 40×(Ad_Spend) + 30×(Season) - 5×(Competitor_Price)

Each coefficient shows effect holding others constant`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Statistical Significance vs Practical Significance"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Statistical Significance
─────────────────────────────
• p < 0.05 (or chosen α)
• Effect is unlikely due to chance
• Large samples can make tiny effects significant

Practical Significance
─────────────────────────────
• Is the effect size meaningful for business?
• Consider the real-world impact
• Cost-benefit analysis

Effect Size Measures
─────────────────────────────
Cohen's d: Difference in means / pooled std dev
• Small: 0.2
• Medium: 0.5
• Large: 0.8


Example
─────────────────────────────
A/B Test Result:
• Control: 5.0% conversion
• Test: 5.1% conversion
• p-value: 0.03 (statistically significant)
• Sample: 1,000,000 users each

Statistically significant? Yes
Practically significant?
• 0.1% improvement = 1000 more conversions
• But implementation cost = $100,000
• Value of 1000 conversions = $50,000
• Not worth implementing!

Always consider both statistical AND practical significance.`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Statistics in Python"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import numpy as np
import pandas as pd
from scipy import stats

# Descriptive Statistics
data = [23, 45, 67, 32, 89, 12, 45, 67, 34, 56]

np.mean(data)        # 47.0
np.median(data)      # 45.0
np.std(data)         # 22.19
np.percentile(data, 75)  # 66.25

# Using Pandas
df = pd.DataFrame({'values': data})
df.describe()        # Full summary


# Hypothesis Testing
# One-sample t-test
sample = [52, 48, 55, 51, 49, 53, 50, 52]
t_stat, p_value = stats.ttest_1samp(sample, 50)

# Two-sample t-test
group1 = [23, 25, 28, 24, 26]
group2 = [30, 32, 29, 31, 33]
t_stat, p_value = stats.ttest_ind(group1, group2)


# Correlation
x = [1, 2, 3, 4, 5]
y = [2, 4, 5, 4, 5]
correlation, p_value = stats.pearsonr(x, y)


# Chi-square test
observed = [[50, 30], [35, 85]]
chi2, p, dof, expected = stats.chi2_contingency(observed)


# Linear Regression
from scipy.stats import linregress
slope, intercept, r_value, p_value, std_err = linregress(x, y)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Pitfalls"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Confusing correlation with causation:"}
                    </strong>
                    {" Correlation shows relationship, not cause"}
                  </li>
                  <li>
                    <strong>
                      {"P-hacking:"}
                    </strong>
                    {" Running multiple tests until finding significant result"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring sample size:"}
                    </strong>
                    {" Small samples can be misleading"}
                  </li>
                  <li>
                    <strong>
                      {"Simpson's Paradox:"}
                    </strong>
                    {" Aggregated data can show opposite trend from disaggregated"}
                  </li>
                  <li>
                    <strong>
                      {"Survivorship bias:"}
                    </strong>
                    {" Only analyzing survivors, not failures"}
                  </li>
                  <li>
                    <strong>
                      {"Base rate neglect:"}
                    </strong>
                    {" Ignoring overall probability when interpreting results"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Statistics with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers essential statistics for business analysis. Build confidence in statistical analysis with guidance from industry experts."}
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
                  <Link href="/data-analytics/articles/excel-analytics" className="related-article-card">
                    <h4>
                      {"Excel Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical functions in Excel"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/pandas" className="related-article-card">
                    <h4>
                      {"Pandas"}
                    </h4>
                    {" "}
                    <p>
                      {"Data analysis in Python"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/data-visualization-python" className="related-article-card">
                    <h4>
                      {"Python Visualization"}
                    </h4>
                    {" "}
                    <p>
                      {"Visualize statistical data"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn statistics for analytics."} />
    </>
  );
}
