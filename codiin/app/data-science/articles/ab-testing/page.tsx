import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "A/B Testing: Complete Guide to Statistical Experiments",
  description: "Learn A/B Testing for data-driven decision making. Master hypothesis testing, statistical significance, sample size calculation, and experimental design with Python.",
  keywords: ["A/B testing", "hypothesis testing", "statistical significance", "sample size", "experimental design", "p-value", "conversion rate optimization"],
  alternates: { canonical: "/data-science/articles/ab-testing" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/ab-testing",
    title: "A/B Testing: Complete Guide to Statistical Experiments",
    description: "Master A/B testing and experimental design for data-driven decision making.",
    images: ["/images/ab-testing-article-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A/B Testing Guide | CODiiN",
    description: "Learn statistical experiment design with A/B testing.",
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
  "headline": "A/B Testing: Complete Guide to Statistical Experiments",
  "description": "Comprehensive guide to A/B testing and experimental design",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.codiin.com/img/codiin-logo.png"
    }
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-24"
} as const;

export default function DataScienceAbTestingPage() {
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
                {"A/B Testing"}
              </span>
            </div>
            <h1>
              {"A/B Testing: Statistical Experiment Design"}
            </h1>
            <p className="article-subtitle">
              {"The Complete Guide to Data-Driven Decision Making"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"17 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Introduction to A/B Testing"}
                </h2>
                <p>
                  {"A/B Testing, also known as split testing, is a randomized controlled experiment that compares two versions of something to determine which performs better. It's the gold standard for making data-driven decisions in product development, marketing, and business strategy."}
                </p>
                <p>
                  {"In an A/B test, users are randomly assigned to either the control group (A) or the treatment group (B), and their behavior is measured. Statistical analysis then determines whether observed differences are real or just due to chance."}
                </p>
                <p>
                  {"Companies like Google, Amazon, Netflix, and Facebook run thousands of A/B tests annually, continuously optimizing their products based on user data rather than opinions or assumptions."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why A/B Testing Matters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Data-driven decisions:"}
                    </strong>
                    {" Replace gut feelings with statistical evidence"}
                  </li>
                  <li>
                    <strong>
                      {"Risk mitigation:"}
                    </strong>
                    {" Test changes on a subset before full rollout"}
                  </li>
                  <li>
                    <strong>
                      {"Quantifiable impact:"}
                    </strong>
                    {" Measure the exact effect of changes on key metrics"}
                  </li>
                  <li>
                    <strong>
                      {"Continuous improvement:"}
                    </strong>
                    {" Incrementally optimize products and processes"}
                  </li>
                  <li>
                    <strong>
                      {"ROI justification:"}
                    </strong>
                    {" Prove the business value of changes with numbers"}
                  </li>
                  <li>
                    <strong>
                      {"User understanding:"}
                    </strong>
                    {" Learn what users actually want, not what they say they want"}
                  </li>
                  <li>
                    <strong>
                      {"Competitive advantage:"}
                    </strong>
                    {" Systematic testing beats random experimentation"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Concepts in A/B Testing"}
                </h2>
                <h3>
                  {"1. Null and Alternative Hypotheses"}
                </h3>
                <p>
                  <strong>
                    {"Null Hypothesis (H₀):"}
                  </strong>
                  {" There is no difference between A and B"}
                </p>
                <p>
                  <strong>
                    {"Alternative Hypothesis (H₁):"}
                  </strong>
                  {" There is a difference between A and B"}
                </p>
                <h3>
                  {"2. Statistical Significance (p-value)"}
                </h3>
                <p>
                  {"The probability that the observed difference occurred by chance. Common threshold: p < 0.05 (5% significance level)"}
                </p>
                <h3>
                  {"3. Type I and Type II Errors"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Type I Error (False Positive):"}
                    </strong>
                    {" Concluding there's a difference when there isn't (α = 0.05)"}
                  </li>
                  <li>
                    <strong>
                      {"Type II Error (False Negative):"}
                    </strong>
                    {" Missing a real difference (β, related to power)"}
                  </li>
                </ul>
                <h3>
                  {"4. Statistical Power"}
                </h3>
                <p>
                  {"The probability of detecting a real effect when it exists. Typically aim for 80% power (1 - β = 0.80)"}
                </p>
                <h3>
                  {"5. Minimum Detectable Effect (MDE)"}
                </h3>
                <p>
                  {"The smallest change in the metric you want to be able to detect reliably"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Sample Size Calculation"}
                </h2>
                <p>
                  {"Determining how many users you need is crucial for reliable results. Too few users lead to unreliable conclusions; too many waste resources."}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

def calculate_sample_size(baseline_rate, mde, alpha=0.05, power=0.80):
    """
    Calculate required sample size per group for A/B test

    Parameters:
    - baseline_rate: Current conversion rate (e.g., 0.10 for 10%)
    - mde: Minimum detectable effect (e.g., 0.02 for 2 percentage points)
    - alpha: Significance level (default 0.05)
    - power: Statistical power (default 0.80)

    Returns:
    - Required sample size per group
    """
    # Z-scores for alpha and power
    z_alpha = stats.norm.ppf(1 - alpha/2)  # Two-tailed test
    z_beta = stats.norm.ppf(power)

    # Expected rate in treatment group
    treatment_rate = baseline_rate + mde

    # Pooled standard error
    p_avg = (baseline_rate + treatment_rate) / 2
    se = np.sqrt(2 * p_avg * (1 - p_avg))

    # Sample size calculation
    n = ((z_alpha + z_beta) * se / mde) ** 2

    return int(np.ceil(n))

# Example: Calculate sample size for email campaign
baseline_rate = 0.10  # 10% current conversion rate
mde = 0.02            # Want to detect 2% improvement (to 12%)

sample_size = calculate_sample_size(baseline_rate, mde)
print(f"Required sample size per group: {sample_size:,}")
print(f"Total users needed: {sample_size * 2:,}")
print(f"\\nTest parameters:")
print(f"  Baseline conversion rate: {baseline_rate:.1%}")
print(f"  Target conversion rate: {baseline_rate + mde:.1%}")
print(f"  Minimum detectable effect: {mde:.1%}")
print(f"  Significance level (α): 0.05")
print(f"  Statistical power: 0.80")

# Output:
# Required sample size per group: 3,842
# Total users needed: 7,684`}</code></pre>
                </div>
                <h3>
                  {"Sample Size Sensitivity Analysis"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import matplotlib.pyplot as plt
import numpy as np

# Analyze how MDE affects sample size
baseline = 0.10
mde_values = np.linspace(0.005, 0.05, 50)
sample_sizes = [calculate_sample_size(baseline, mde) for mde in mde_values]

plt.figure(figsize=(10, 6))
plt.plot(mde_values * 100, sample_sizes, linewidth=2)
plt.xlabel('Minimum Detectable Effect (%)', fontsize=12)
plt.ylabel('Required Sample Size per Group', fontsize=12)
plt.title('Sample Size vs Minimum Detectable Effect\\n(Baseline=10%, α=0.05, Power=80%)', fontsize=14)
plt.grid(alpha=0.3)
plt.axhline(y=10000, color='r', linestyle='--', alpha=0.5, label='Budget constraint')
plt.legend()
plt.tight_layout()
plt.savefig('sample_size_analysis.png', dpi=150)
plt.show()

# Key insight: Smaller effects require much larger samples!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Conducting an A/B Test"}
                </h2>
                <h3>
                  {"Step 1: Formulate Hypothesis"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Example: Testing a new website button color

# Current situation
# - Green "Buy Now" button converts at 10%

# Hypothesis
# - Changing button to red will increase conversions

# H₀: Red button conversion rate = Green button conversion rate
# H₁: Red button conversion rate ≠ Green button conversion rate

# Key metric: Conversion rate (purchases / visitors)
# Success criterion: p < 0.05, practical significance > 1%`}</code></pre>
                </div>
                <h3>
                  {"Step 2: Collect Data"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np
import pandas as pd

# Simulate A/B test data
np.random.seed(42)

# Control group (A) - Green button
n_control = 5000
conversion_rate_control = 0.10
control_conversions = np.random.binomial(1, conversion_rate_control, n_control)

# Treatment group (B) - Red button (2% improvement)
n_treatment = 5000
conversion_rate_treatment = 0.12
treatment_conversions = np.random.binomial(1, conversion_rate_treatment, n_treatment)

# Create DataFrame
ab_test_data = pd.DataFrame({
    'group': ['control'] * n_control + ['treatment'] * n_treatment,
    'converted': np.concatenate([control_conversions, treatment_conversions])
})

print("A/B Test Results:")
print(ab_test_data.groupby('group')['converted'].agg(['count', 'sum', 'mean']))

# Output:
#           count   sum      mean
# group
# control    5000   484  0.0968
# treatment  5000   591  0.1182`}</code></pre>
                </div>
                <h3>
                  {"Step 3: Statistical Analysis"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from scipy import stats

def analyze_ab_test(control_conversions, treatment_conversions):
    """
    Perform statistical analysis of A/B test results

    Returns:
    - p-value
    - confidence interval
    - effect size
    - statistical power
    """
    n_control = len(control_conversions)
    n_treatment = len(treatment_conversions)

    # Conversion rates
    rate_control = control_conversions.mean()
    rate_treatment = treatment_conversions.mean()

    # Observed difference
    diff = rate_treatment - rate_control

    # Two-proportion z-test
    successes = np.array([control_conversions.sum(), treatment_conversions.sum()])
    samples = np.array([n_control, n_treatment])

    # Using statsmodels for better precision
    from statsmodels.stats.proportion import proportions_ztest
    z_stat, p_value = proportions_ztest(successes, samples)

    # Confidence interval for difference
    se_diff = np.sqrt(
        rate_control * (1 - rate_control) / n_control +
        rate_treatment * (1 - rate_treatment) / n_treatment
    )
    margin_of_error = 1.96 * se_diff  # 95% CI
    ci_lower = diff - margin_of_error
    ci_upper = diff + margin_of_error

    # Results
    results = {
        'control_rate': rate_control,
        'treatment_rate': rate_treatment,
        'absolute_difference': diff,
        'relative_lift': (diff / rate_control) * 100,
        'p_value': p_value,
        'ci_lower': ci_lower,
        'ci_upper': ci_upper,
        'statistically_significant': p_value < 0.05
    }

    return results

# Analyze the test
results = analyze_ab_test(control_conversions, treatment_conversions)

print("A/B Test Analysis Results")
print("=" * 50)
print(f"Control conversion rate:    {results['control_rate']:.2%}")
print(f"Treatment conversion rate:  {results['treatment_rate']:.2%}")
print(f"Absolute difference:        {results['absolute_difference']:.2%}")
print(f"Relative lift:              {results['relative_lift']:.1f}%")
print(f"P-value:                    {results['p_value']:.4f}")
print(f"95% Confidence Interval:    [{results['ci_lower']:.2%}, {results['ci_upper']:.2%}]")
print(f"Statistically significant:  {results['statistically_significant']}")

# Interpretation
if results['statistically_significant']:
    print("\\n✓ RESULT: The difference is statistically significant!")
    print(f"  We can be 95% confident that the red button improves")
    print(f"  conversion rate by {results['ci_lower']:.2%} to {results['ci_upper']:.2%}")
else:
    print("\\n✗ RESULT: No statistically significant difference detected")
    print("  Continue with current version or run a longer test")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Visualizing A/B Test Results"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import matplotlib.pyplot as plt
import seaborn as sns

def visualize_ab_test(control_conversions, treatment_conversions):
    """Create comprehensive visualization of A/B test results"""

    fig, axes = plt.subplots(2, 2, figsize=(14, 10))

    # 1. Conversion rate comparison
    ax1 = axes[0, 0]
    rates = [control_conversions.mean(), treatment_conversions.mean()]
    groups = ['Control\\n(Green)', 'Treatment\\n(Red)']
    colors = ['#2ecc71', '#e74c3c']

    bars = ax1.bar(groups, rates, color=colors, alpha=0.7, edgecolor='black')
    ax1.set_ylabel('Conversion Rate', fontsize=12)
    ax1.set_title('Conversion Rate Comparison', fontsize=14, fontweight='bold')
    ax1.set_ylim(0, max(rates) * 1.3)

    # Add value labels on bars
    for bar, rate in zip(bars, rates):
        height = bar.get_height()
        ax1.text(bar.get_x() + bar.get_width()/2., height,
                f'{rate:.2%}', ha='center', va='bottom', fontsize=12, fontweight='bold')

    # 2. Distribution of conversions
    ax2 = axes[0, 1]
    data_for_plot = pd.DataFrame({
        'Control': control_conversions,
        'Treatment': treatment_conversions
    })
    data_for_plot.plot(kind='hist', bins=2, ax=ax2, alpha=0.6, edgecolor='black')
    ax2.set_xlabel('Converted (0=No, 1=Yes)', fontsize=12)
    ax2.set_ylabel('Count', fontsize=12)
    ax2.set_title('Conversion Distribution', fontsize=14, fontweight='bold')
    ax2.legend(['Control', 'Treatment'])

    # 3. Confidence intervals
    ax3 = axes[1, 0]
    results = analyze_ab_test(control_conversions, treatment_conversions)

    means = [results['control_rate'], results['treatment_rate']]
    errors = [
        1.96 * np.sqrt(results['control_rate'] * (1 - results['control_rate']) / len(control_conversions)),
        1.96 * np.sqrt(results['treatment_rate'] * (1 - results['treatment_rate']) / len(treatment_conversions))
    ]

    ax3.errorbar(groups, means, yerr=errors, fmt='o', markersize=10,
                capsize=10, capthick=2, linewidth=2, color='navy')
    ax3.set_ylabel('Conversion Rate', fontsize=12)
    ax3.set_title('95% Confidence Intervals', fontsize=14, fontweight='bold')
    ax3.grid(axis='y', alpha=0.3)

    # 4. Statistical summary
    ax4 = axes[1, 1]
    ax4.axis('off')

    summary_text = f"""
    Statistical Summary
    {'=' * 40}

    Sample Sizes:
      Control:   {len(control_conversions):,}
      Treatment: {len(treatment_conversions):,}

    Conversion Rates:
      Control:   {results['control_rate']:.2%}
      Treatment: {results['treatment_rate']:.2%}

    Effect:
      Absolute: {results['absolute_difference']:.2%}
      Relative: {results['relative_lift']:.1f}%

    Statistical Test:
      P-value: {results['p_value']:.4f}
      Significant: {'YES ✓' if results['statistically_significant'] else 'NO ✗'}

    95% CI: [{results['ci_lower']:.2%}, {results['ci_upper']:.2%}]
    """

    ax4.text(0.1, 0.5, summary_text, fontsize=11, family='monospace',
            verticalalignment='center', bbox=dict(boxstyle='round',
            facecolor='wheat', alpha=0.3))

    plt.tight_layout()
    plt.savefig('ab_test_results.png', dpi=150, bbox_inches='tight')
    plt.show()

# Create visualization
visualize_ab_test(control_conversions, treatment_conversions)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced A/B Testing Techniques"}
                </h2>
                <h3>
                  {"1. Sequential Testing (Early Stopping)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from scipy import stats

def sequential_ab_test(control_data, treatment_data, alpha=0.05):
    """
    Perform sequential analysis to potentially stop test early

    Uses Sequential Probability Ratio Test (SPRT)
    """
    n_min = 1000  # Minimum sample size before checking

    results_over_time = []

    for i in range(n_min, min(len(control_data), len(treatment_data)), 100):
        # Analyze up to current point
        control_sample = control_data[:i]
        treatment_sample = treatment_data[:i]

        # Two-proportion z-test
        rate_control = control_sample.mean()
        rate_treatment = treatment_sample.mean()

        successes = np.array([control_sample.sum(), treatment_sample.sum()])
        samples = np.array([len(control_sample), len(treatment_sample)])

        from statsmodels.stats.proportion import proportions_ztest
        z_stat, p_value = proportions_ztest(successes, samples)

        results_over_time.append({
            'sample_size': i,
            'p_value': p_value,
            'control_rate': rate_control,
            'treatment_rate': rate_treatment,
            'significant': p_value < alpha
        })

        # Early stopping criteria
        if i >= n_min and p_value < alpha/10:  # Strong evidence
            print(f"✓ Early stop at n={i}: Strong evidence (p={p_value:.4f})")
            break

    return pd.DataFrame(results_over_time)

# Run sequential test
sequential_results = sequential_ab_test(control_conversions, treatment_conversions)

# Plot p-value over time
plt.figure(figsize=(12, 6))
plt.plot(sequential_results['sample_size'], sequential_results['p_value'],
        linewidth=2, marker='o')
plt.axhline(y=0.05, color='r', linestyle='--', label='α = 0.05')
plt.xlabel('Sample Size per Group', fontsize=12)
plt.ylabel('P-value', fontsize=12)
plt.title('Sequential A/B Test: P-value Over Time', fontsize=14)
plt.legend()
plt.grid(alpha=0.3)
plt.savefig('sequential_test.png', dpi=150)
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"2. Multi-Armed Bandit (Adaptive Testing)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np

class ThompsonSampling:
    """
    Thompson Sampling for multi-armed bandit problem
    Balances exploration and exploitation
    """
    def __init__(self, n_variants):
        self.n_variants = n_variants
        self.successes = np.ones(n_variants)  # Prior: Beta(1,1)
        self.failures = np.ones(n_variants)

    def select_variant(self):
        """Select variant to show to next user"""
        # Sample from Beta distribution for each variant
        samples = [
            np.random.beta(self.successes[i], self.failures[i])
            for i in range(self.n_variants)
        ]
        return np.argmax(samples)

    def update(self, variant, reward):
        """Update based on user's action"""
        if reward:
            self.successes[variant] += 1
        else:
            self.failures[variant] += 1

    def get_probabilities(self):
        """Get current estimate of conversion rates"""
        total = self.successes + self.failures
        return self.successes / total

# Simulate Thompson Sampling vs A/B Test
def simulate_bandit_vs_ab(true_rates, n_users=10000):
    """Compare bandit to traditional A/B test"""

    # Thompson Sampling
    bandit = ThompsonSampling(len(true_rates))
    bandit_rewards = []
    bandit_assignments = []

    for _ in range(n_users):
        variant = bandit.select_variant()
        reward = np.random.random() < true_rates[variant]
        bandit.update(variant, reward)
        bandit_rewards.append(reward)
        bandit_assignments.append(variant)

    # Traditional A/B (equal split)
    ab_rewards = []
    ab_assignments = []
    for i in range(n_users):
        variant = i % len(true_rates)
        reward = np.random.random() < true_rates[variant]
        ab_rewards.append(reward)
        ab_assignments.append(variant)

    print("Comparison: Thompson Sampling vs A/B Test")
    print("=" * 50)
    print(f"True conversion rates: {true_rates}")
    print(f"\\nBandit total reward: {sum(bandit_rewards)}")
    print(f"A/B total reward: {sum(ab_rewards)}")
    print(f"Regret reduction: {sum(bandit_rewards) - sum(ab_rewards)} conversions")

    return bandit, ab_assignments

# Example: 3 variants with different conversion rates
true_rates = [0.10, 0.12, 0.09]  # Variant B is best
bandit, _ = simulate_bandit_vs_ab(true_rates, n_users=10000)

print(f"\\nLearned probabilities: {bandit.get_probabilities()}")
# Bandit automatically allocates more traffic to better variants!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-World Applications"}
                </h2>
                <h3>
                  {"1. E-commerce: Product Page Optimization"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Test: Adding customer reviews to product page

# Control (A): No reviews shown
# Treatment (B): Display 5-star reviews

# Metrics to track:
metrics = {
    'primary': 'purchase_rate',      # Main metric
    'secondary': [
        'add_to_cart_rate',           # Leading indicator
        'time_on_page',               # Engagement
        'bounce_rate',                # Quality check
        'average_order_value'         # Revenue impact
    ]
}

# Guardrail metrics (should not worsen):
guardrails = {
    'page_load_time': 'max_2_seconds',
    'site_speed_score': 'no_degradation'
}

# Sample size calculation
baseline_purchase_rate = 0.05  # 5%
mde = 0.005                    # Want to detect 0.5% improvement
sample_size_per_group = calculate_sample_size(baseline_purchase_rate, mde)

print(f"Estimated test duration:")
print(f"  Daily visitors: 10,000")
print(f"  Sample needed: {sample_size_per_group * 2:,}")
print(f"  Test duration: {(sample_size_per_group * 2) / 10000:.0f} days")`}</code></pre>
                </div>
                <h3>
                  {"2. SaaS: Pricing Page Experiment"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Test: Monthly vs Annual pricing display

# Control: Show monthly pricing first
# Treatment: Show annual pricing first (with "Save 20%" badge)

# Business question: Does highlighting annual plans increase
#                   long-term revenue despite potential signup drop?

# Key metrics:
# - Free trial signup rate (immediate)
# - Paid conversion rate (within 14 days)
# - Average customer lifetime value (projected)

# Analysis approach
def analyze_pricing_test(signups_a, signups_b, conversions_a, conversions_b,
                        avg_value_a, avg_value_b):
    """Analyze pricing test with multiple metrics"""

    # Signup rate
    signup_rate_a = len(signups_a) / 10000  # Visitors
    signup_rate_b = len(signups_b) / 10000

    # Conversion rate
    conv_rate_a = sum(conversions_a) / len(signups_a)
    conv_rate_b = sum(conversions_b) / len(signups_b)

    # Expected value per visitor
    ev_a = signup_rate_a * conv_rate_a * avg_value_a
    ev_b = signup_rate_b * conv_rate_b * avg_value_b

    print("Pricing Test Results")
    print("=" * 60)
    print(f"                    Control (Monthly)  Treatment (Annual)")
    print(f"Signup rate:        {signup_rate_a:.2%}           {signup_rate_b:.2%}")
    print(f"Conversion rate:    {conv_rate_a:.2%}           {conv_rate_b:.2%}")
    print(f"Avg customer value: \${avg_value_a:,.2f}         \${avg_value_b:,.2f}")
    print(f"Expected value:     \${ev_a:.2f}            \${ev_b:.2f}")
    print(f"\\nRecommendation: {'Annual' if ev_b > ev_a else 'Monthly'} pricing")
    print(f"Projected revenue lift: {((ev_b / ev_a) - 1) * 100:.1f}%")`}</code></pre>
                </div>
                <h3>
                  {"3. Content: Email Subject Line Testing"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
from scipy import stats

# Test different email subject lines
subject_lines = {
    'A': "Your weekly newsletter is here",      # Control
    'B': "5 tips you don't want to miss",       # Benefit-focused
    'C': "Hi Sarah, special offer inside",      # Personalized
    'D': "URGENT: Limited time offer"           # Urgency
}

# Simulate email campaign results
np.random.seed(42)
n_per_group = 5000

# True open rates (unknown to experimenter)
true_rates = {'A': 0.20, 'B': 0.23, 'C': 0.25, 'D': 0.18}

# Simulate data
results = []
for variant, rate in true_rates.items():
    opens = np.random.binomial(1, rate, n_per_group)
    for i, opened in enumerate(opens):
        results.append({
            'variant': variant,
            'subject': subject_lines[variant],
            'opened': opened
        })

email_df = pd.DataFrame(results)

# Analyze results
print("Email Subject Line Test Results")
print("=" * 70)

summary = email_df.groupby('variant')['opened'].agg(['count', 'sum', 'mean'])
summary.columns = ['Sent', 'Opens', 'Open Rate']
summary = summary.sort_values('Open Rate', ascending=False)

for variant in summary.index:
    rate = summary.loc[variant, 'Open Rate']
    subject = subject_lines[variant]
    print(f"{variant}: {rate:.2%} - '{subject}'")

# Statistical comparison (all variants vs control)
control_opens = email_df[email_df['variant'] == 'A']['opened'].values

print("\\nStatistical Significance vs Control (A):")
for variant in ['B', 'C', 'D']:
    variant_opens = email_df[email_df['variant'] == variant]['opened'].values

    # Chi-square test
    contingency = pd.crosstab(
        [0]*len(control_opens) + [1]*len(variant_opens),
        np.concatenate([control_opens, variant_opens])
    )
    chi2, p_value, dof, expected = stats.chi2_contingency(contingency)

    sig = "✓ Significant" if p_value < 0.05 else "✗ Not significant"
    print(f"  {variant}: p={p_value:.4f} {sig}")

# Recommendation
best_variant = summary.index[0]
print(f"\\nRecommendation: Use variant {best_variant}")
print(f"Subject line: '{subject_lines[best_variant]}'")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Pitfalls and Best Practices"}
                </h2>
                <h3>
                  {"Common Pitfalls to Avoid"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Peeking at results:"}
                    </strong>
                    {" Checking significance repeatedly inflates false positive rate"}
                  </li>
                  <li>
                    <strong>
                      {"Small sample sizes:"}
                    </strong>
                    {" Underpowered tests lead to unreliable conclusions"}
                  </li>
                  <li>
                    <strong>
                      {"Multiple comparisons:"}
                    </strong>
                    {" Testing many variants increases false discovery rate"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring novelty effects:"}
                    </strong>
                    {" Users may react differently to changes initially"}
                  </li>
                  <li>
                    <strong>
                      {"Selection bias:"}
                    </strong>
                    {" Non-random assignment invalidates results"}
                  </li>
                  <li>
                    <strong>
                      {"Stopping too early:"}
                    </strong>
                    {" Ending tests when results look good leads to bias"}
                  </li>
                  <li>
                    <strong>
                      {"Testing too many things:"}
                    </strong>
                    {" Dilutes sample sizes and statistical power"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring segmentation:"}
                    </strong>
                    {" Effects may differ across user segments"}
                  </li>
                </ul>
                <h3>
                  {"Best Practices"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Pre-register your hypothesis:"}
                    </strong>
                    {" Define success criteria before starting"}
                  </li>
                  <li>
                    <strong>
                      {"Calculate sample size upfront:"}
                    </strong>
                    {" Know how long the test needs to run"}
                  </li>
                  <li>
                    <strong>
                      {"Use proper randomization:"}
                    </strong>
                    {" Ensure truly random assignment to groups"}
                  </li>
                  <li>
                    <strong>
                      {"Run for full business cycles:"}
                    </strong>
                    {" Include weekdays and weekends"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor key metrics continuously:"}
                    </strong>
                    {" Watch for bugs or unexpected behavior"}
                  </li>
                  <li>
                    <strong>
                      {"Document everything:"}
                    </strong>
                    {" Record test design, results, and decisions"}
                  </li>
                  <li>
                    <strong>
                      {"Apply Bonferroni correction:"}
                    </strong>
                    {" Adjust significance level for multiple tests"}
                  </li>
                  <li>
                    <strong>
                      {"Segment your analysis:"}
                    </strong>
                    {" Check if effects vary by user type, device, etc."}
                  </li>
                  <li>
                    <strong>
                      {"Consider practical significance:"}
                    </strong>
                    {" Statistical significance ≠ business significance"}
                  </li>
                  <li>
                    <strong>
                      {"Run holdout tests:"}
                    </strong>
                    {" Keep a small control group after rollout to verify long-term effects"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"A/B Testing Checklist"}
                </h2>
                <div className="code-block">
                  <pre><code>{`"""
A/B Testing Checklist
====================

Before Starting:
☐ Define clear, measurable hypothesis
☐ Choose primary metric (only one!)
☐ Identify secondary and guardrail metrics
☐ Calculate required sample size
☐ Determine test duration
☐ Set significance level (usually α = 0.05)
☐ Define minimum detectable effect (MDE)
☐ Document test in experiment log

During Test:
☐ Verify random assignment is working
☐ Monitor for technical issues
☐ Check sample ratio mismatch (should be 50/50)
☐ Track sample size progress
☐ Do NOT peek at results before planned end
☐ Ensure test runs for planned duration

After Test:
☐ Verify sufficient sample size achieved
☐ Calculate statistical significance
☐ Check confidence intervals
☐ Analyze by segments (mobile/desktop, new/returning)
☐ Verify guardrail metrics didn't worsen
☐ Consider practical significance vs statistical
☐ Document results and learnings
☐ Make decision: ship, iterate, or abandon
☐ Plan rollout or follow-up tests
☐ Share results with team
"""`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master A/B Testing and Experimentation"}
                </h2>
                <p>
                  {"Our Data Science program covers statistical experimentation in depth, from hypothesis testing fundamentals to advanced techniques. Learn to design, execute, and analyze experiments that drive data-driven decision making."}
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
                  <Link href="/data-science/articles/statistics" className="related-article-card">
                    <h4>
                      {"Statistics for Data Science"}
                    </h4>
                    {" "}
                    <p>
                      {"Master statistical concepts essential for data analysis"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/model-evaluation" className="related-article-card">
                    <h4>
                      {"Model Evaluation and Metrics"}
                    </h4>
                    {" "}
                    <p>
                      {"Learn to properly evaluate ML model performance"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Build strong foundations in ML algorithms"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about A/B testing and Data Science."} />
    </>
  );
}
