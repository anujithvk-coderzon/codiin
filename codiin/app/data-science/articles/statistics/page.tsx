import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Statistics for Data Science: The Essential Foundation",
  description: "Learn Statistics for Data Science - probability, distributions, hypothesis testing, A/B testing, and statistical foundations for machine learning.",
  keywords: ["statistics tutorial", "data science statistics", "probability", "hypothesis testing", "A/B testing", "statistical analysis"],
  alternates: { canonical: "/data-science/articles/statistics" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/statistics",
    title: "Statistics for Data Science: The Essential Foundation",
    description: "Master the statistical foundations needed for data science and machine learning.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Statistics for Data Science: The Essential Foundation",
  "description": "Complete guide to statistics for data science",
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

export default function DataScienceStatisticsPage() {
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
                {"Statistics"}
              </span>
            </div>
            <h1>
              {"Statistics for Data Science"}
            </h1>
            <p className="article-subtitle">
              {"The Essential Foundation for Machine Learning"}
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
                  {"Why Statistics Matters"}
                </h2>
                <p>
                  {"Statistics is the foundation of data science. Every model evaluation, A/B test, and data-driven decision relies on statistical principles. Understanding statistics helps you avoid common pitfalls and make sound conclusions from data."}
                </p>
                <p>
                  {"Machine learning is essentially applied statistics - regression, classification, and clustering all have deep statistical roots."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Descriptive Statistics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np

# Central tendency
mean = df['salary'].mean()
median = df['salary'].median()
mode = df['salary'].mode()[0]

# Spread
std = df['salary'].std()
variance = df['salary'].var()
range_val = df['salary'].max() - df['salary'].min()
iqr = df['salary'].quantile(0.75) - df['salary'].quantile(0.25)

# Shape
skewness = df['salary'].skew()  # 0 = symmetric
kurtosis = df['salary'].kurtosis()  # 0 = normal

# Summary statistics
print(df.describe())

# Correlation
correlation = df['salary'].corr(df['experience'])
corr_matrix = df.corr()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Probability Distributions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from scipy import stats
import numpy as np

# Normal Distribution
normal = stats.norm(loc=0, scale=1)  # mean=0, std=1
print(normal.pdf(0))      # Probability density at x=0
print(normal.cdf(1.96))   # P(X <= 1.96) = 0.975

# Generate random samples
samples = np.random.normal(100, 15, 1000)  # mean=100, std=15

# Binomial Distribution (n trials, p probability)
binomial = stats.binom(n=10, p=0.5)
print(binomial.pmf(5))    # P(X = 5)

# Poisson Distribution (events per interval)
poisson = stats.poisson(mu=5)  # average 5 events

# Check if data is normally distributed
stat, p_value = stats.normaltest(data)
if p_value > 0.05:
    print("Data appears normally distributed")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Hypothesis Testing"}
                </h2>
                <p>
                  {"The framework for making data-driven decisions:"}
                </p>
                <ol>
                  <li>
                    {"State null hypothesis (H0) and alternative (H1)"}
                  </li>
                  <li>
                    {"Choose significance level (alpha, typically 0.05)"}
                  </li>
                  <li>
                    {"Calculate test statistic"}
                  </li>
                  <li>
                    {"Find p-value"}
                  </li>
                  <li>
                    {"Reject H0 if p-value < alpha"}
                  </li>
                </ol>
                <div className="code-block">
                  <pre><code>{`from scipy import stats

# T-test: Compare means of two groups
group_a = [23, 25, 28, 22, 30]
group_b = [19, 21, 24, 18, 22]

# Independent t-test
t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"t-statistic: {t_stat:.4f}, p-value: {p_value:.4f}")

if p_value < 0.05:
    print("Significant difference between groups")

# Paired t-test (before/after)
before = [150, 155, 160, 148, 165]
after = [145, 150, 155, 142, 158]
t_stat, p_value = stats.ttest_rel(before, after)

# Chi-square test (categorical variables)
observed = [[50, 30], [20, 40]]
chi2, p_value, dof, expected = stats.chi2_contingency(observed)

# ANOVA (compare multiple groups)
f_stat, p_value = stats.f_oneway(group_a, group_b, group_c)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Confidence Intervals"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from scipy import stats

data = np.array([23, 25, 28, 22, 30, 27, 24, 26])

# 95% confidence interval for the mean
mean = np.mean(data)
sem = stats.sem(data)  # Standard error of mean
ci = stats.t.interval(0.95, len(data)-1, loc=mean, scale=sem)

print(f"Mean: {mean:.2f}")
print(f"95% CI: ({ci[0]:.2f}, {ci[1]:.2f})")

# Bootstrap confidence interval
def bootstrap_ci(data, n_bootstrap=10000, ci=0.95):
    boot_means = []
    for _ in range(n_bootstrap):
        sample = np.random.choice(data, size=len(data), replace=True)
        boot_means.append(np.mean(sample))

    lower = np.percentile(boot_means, (1-ci)/2 * 100)
    upper = np.percentile(boot_means, (1+ci)/2 * 100)
    return lower, upper`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"A/B Testing"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from scipy import stats

# Example: Testing conversion rates
control_visitors = 1000
control_conversions = 50
treatment_visitors = 1000
treatment_conversions = 65

# Conversion rates
control_rate = control_conversions / control_visitors
treatment_rate = treatment_conversions / treatment_visitors

print(f"Control: {control_rate:.2%}")
print(f"Treatment: {treatment_rate:.2%}")
print(f"Lift: {(treatment_rate - control_rate) / control_rate:.2%}")

# Two-proportion z-test
from statsmodels.stats.proportion import proportions_ztest

count = np.array([treatment_conversions, control_conversions])
nobs = np.array([treatment_visitors, control_visitors])

z_stat, p_value = proportions_ztest(count, nobs, alternative='larger')
print(f"p-value: {p_value:.4f}")

# Required sample size calculation
from statsmodels.stats.power import NormalIndPower

effect_size = 0.1  # Expected improvement
power = 0.8  # 80% power
alpha = 0.05

analysis = NormalIndPower()
sample_size = analysis.solve_power(effect_size, power=power, alpha=alpha)
print(f"Required sample size per group: {int(sample_size)}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Bayesian Statistics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Bayesian A/B testing
import numpy as np

def bayesian_ab_test(a_success, a_total, b_success, b_total, n_samples=100000):
    """
    Compare two proportions using Bayesian approach
    Uses Beta distribution as conjugate prior
    """
    # Posterior distributions (Beta)
    a_samples = np.random.beta(a_success + 1, a_total - a_success + 1, n_samples)
    b_samples = np.random.beta(b_success + 1, b_total - b_success + 1, n_samples)

    # P(B > A)
    prob_b_better = (b_samples > a_samples).mean()

    # Expected lift
    lift = ((b_samples - a_samples) / a_samples).mean()

    return prob_b_better, lift

prob, lift = bayesian_ab_test(50, 1000, 65, 1000)
print(f"P(B > A): {prob:.2%}")
print(f"Expected lift: {lift:.2%}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Pitfalls"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"p-hacking:"}
                    </strong>
                    {" Testing many hypotheses until one is significant"}
                  </li>
                  <li>
                    <strong>
                      {"Confusing correlation with causation:"}
                    </strong>
                    {" Correlation doesn't imply causation"}
                  </li>
                  <li>
                    <strong>
                      {"Small sample sizes:"}
                    </strong>
                    {" Results may not generalize"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring multiple comparisons:"}
                    </strong>
                    {" Use Bonferroni correction"}
                  </li>
                  <li>
                    <strong>
                      {"Stopping early:"}
                    </strong>
                    {" Wait for planned sample size in A/B tests"}
                  </li>
                  <li>
                    <strong>
                      {"Selection bias:"}
                    </strong>
                    {" Non-random samples mislead"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Statistics with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers statistics from fundamentals to advanced topics. Build a strong foundation with hands-on practice and expert guidance."}
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
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Apply statistics to ML"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical data preparation"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/time-series" className="related-article-card">
                    <h4>
                      {"Time Series Analysis"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical forecasting"}
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
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
                <li>
                  <Link href="/agentic-ai">
                    {"Agentic AI"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Statistics."} />
    </>
  );
}
