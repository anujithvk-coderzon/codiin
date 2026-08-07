import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "A/B Testing: Complete Guide with Examples",
  description: "Master A/B testing for data-driven decisions. Learn hypothesis testing, sample size calculation, statistical significance, and common pitfalls to avoid.",
  keywords: ["A/B testing", "split testing", "hypothesis testing", "statistical significance", "conversion optimization", "experiment design"],
  alternates: { canonical: "/data-analytics/articles/ab-testing" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/ab-testing",
    title: "A/B Testing: The Complete Guide",
    description: "Run experiments that drive real business results.",
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
  "headline": "A/B Testing: The Complete Guide",
  "description": "Master A/B testing for data-driven decisions",
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

export default function DataAnalyticsAbTestingPage() {
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
                {"A/B Testing"}
              </span>
            </div>
            <h1>
              {"A/B Testing"}
            </h1>
            <p className="article-subtitle">
              {"Run Experiments That Drive Real Business Results"}
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
                  {"What is A/B Testing?"}
                </h2>
                <p>
                  {"A/B testing (split testing) is a method to compare two versions of something to see which performs better. Instead of guessing what works, you "}
                  <strong>
                    {"let the data decide"}
                  </strong>
                  {"."}
                </p>
                <div className="code-block">
                  <pre><code>{`# A/B Testing in Action

                         YOUR WEBSITE VISITORS
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
              ┌───────────┐               ┌───────────┐
              │ VERSION A │               │ VERSION B │
              │ (Control) │               │ (Variant) │
              │           │               │           │
              │  [Green   │               │  [Orange  │
              │   Button] │               │   Button] │
              │           │               │           │
              │ 2.5% Conv │               │ 3.1% Conv │
              └───────────┘               └───────────┘
                    │                           │
                    └─────────────┬─────────────┘
                                  │
                                  ▼
                    ┌───────────────────────┐
                    │ STATISTICAL ANALYSIS  │
                    │ Is the difference     │
                    │ significant or luck?  │
                    └───────────────────────┘
                                  │
                                  ▼
                    ┌───────────────────────┐
                    │ DECISION: Implement   │
                    │ Version B (Winner)    │
                    └───────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"Common A/B Test Examples"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Button colors:"}
                    </strong>
                    {" Green vs. Orange \"Buy Now\" button"}
                  </li>
                  <li>
                    <strong>
                      {"Headlines:"}
                    </strong>
                    {" \"Save Money\" vs. \"Get 20% Off\""}
                  </li>
                  <li>
                    <strong>
                      {"Pricing:"}
                    </strong>
                    {" $99 vs. $97 vs. $100"}
                  </li>
                  <li>
                    <strong>
                      {"Email subject lines:"}
                    </strong>
                    {" Test open rates"}
                  </li>
                  <li>
                    <strong>
                      {"Page layouts:"}
                    </strong>
                    {" Single column vs. two columns"}
                  </li>
                  <li>
                    <strong>
                      {"Features:"}
                    </strong>
                    {" New feature on vs. off"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"The A/B Testing Process"}
                </h2>
                <div className="code-block">
                  <pre><code>{`A/B Testing Framework:

Step 1: HYPOTHESIS
   │  "If we change X, then Y will improve because Z"
   ▼
Step 2: DESIGN
   │  Define metrics, sample size, duration
   ▼
Step 3: IMPLEMENT
   │  Build variants, set up tracking
   ▼
Step 4: RUN
   │  Split traffic, collect data
   ▼
Step 5: ANALYZE
   │  Statistical significance check
   ▼
Step 6: DECIDE
   │  Implement winner or iterate
   ▼
Step 7: DOCUMENT
   └  Record learnings for future tests`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 1: Form a Hypothesis"}
                </h2>
                <p>
                  {"A good hypothesis is specific and testable:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Hypothesis Formula:

"If we [CHANGE], then [METRIC] will [IMPROVE/DECREASE]
 because [REASON]."

Examples:

❌ Bad: "A new button color will be better"
   (Vague, no reasoning)

✅ Good: "If we change the CTA button from gray to green,
   then click-through rate will increase by 10%
   because green stands out more against our blue theme
   and signals 'go' to users."

❌ Bad: "Users will like the new design"
   (Can't measure "like")

✅ Good: "If we simplify the checkout to 2 steps instead of 4,
   then cart abandonment will decrease by 15%
   because fewer steps reduce friction and cognitive load."`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 2: Calculate Sample Size"}
                </h2>
                <p>
                  {"Running a test too short leads to false conclusions. Calculate how many visitors you need:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Sample Size Calculation

Key Inputs:
1. Baseline conversion rate (current performance)
2. Minimum Detectable Effect (MDE) - smallest change you care about
3. Statistical significance level (typically 95%)
4. Statistical power (typically 80%)

Formula (simplified):
n = 16 × σ² / δ²

Where:
- n = sample size per group
- σ = standard deviation
- δ = minimum detectable effect

For conversion rates (rule of thumb):
n ≈ 16 × p × (1-p) / (MDE)²

Example:
- Current conversion: 5% (p = 0.05)
- Want to detect: 20% relative lift (MDE = 0.01)
- Sample size per group: 16 × 0.05 × 0.95 / 0.01² = 7,600

Total: ~15,200 visitors needed (7,600 per group)`}</code></pre>
                </div>
                <h3>
                  {"Python Sample Size Calculator"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

def calculate_sample_size(baseline_rate, mde_relative,
                         alpha=0.05, power=0.80):
    """
    Calculate required sample size for A/B test.

    Parameters:
    - baseline_rate: Current conversion rate (e.g., 0.05 for 5%)
    - mde_relative: Minimum detectable effect as relative change
                    (e.g., 0.20 for 20% lift)
    - alpha: Significance level (default 0.05 for 95% confidence)
    - power: Statistical power (default 0.80)

    Returns:
    - Sample size needed per group
    """
    # Calculate absolute effect
    new_rate = baseline_rate * (1 + mde_relative)

    # Calculate effect size (Cohen's h)
    effect_size = proportion_effectsize(new_rate, baseline_rate)

    # Calculate sample size
    analysis = NormalIndPower()
    sample_size = analysis.solve_power(
        effect_size=effect_size,
        alpha=alpha,
        power=power,
        ratio=1,  # Equal group sizes
        alternative='two-sided'
    )

    return int(sample_size)

# Example usage
baseline = 0.05  # 5% conversion rate
mde = 0.20       # Want to detect 20% relative improvement

n = calculate_sample_size(baseline, mde)
print(f"Sample size per group: {n:,}")
print(f"Total sample needed: {n*2:,}")

# Output:
# Sample size per group: 7,664
# Total sample needed: 15,328`}</code></pre>
                </div>
                <h3>
                  {"Test Duration"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# How Long Should Your Test Run?

Minimum Duration:
- At least 1 full business cycle (usually 1-2 weeks)
- Captures weekday vs. weekend patterns
- Accounts for day-of-week variations

Duration = Sample Size Needed / Daily Traffic per Group

Example:
- Need: 15,000 total visitors
- Daily traffic: 1,000 visitors
- Split: 500 per group per day
- Duration: 15,000 / 1,000 = 15 days

⚠️ IMPORTANT RULES:
1. Never stop early because results "look good"
2. Run for at least 7 days regardless of traffic
3. Don't peek and make decisions mid-test
4. Account for holidays and special events`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Step 5: Analyze Results"}
                </h2>
                <h3>
                  {"Understanding Statistical Significance"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# What is Statistical Significance?

It answers: "Is the difference REAL or just RANDOM CHANCE?"

p-value:
- Probability that the observed difference happened by chance
- Lower p-value = more confident the difference is real

Common thresholds:
- p < 0.05 (95% confidence) - Standard for most tests
- p < 0.01 (99% confidence) - High-stakes decisions
- p < 0.10 (90% confidence) - Exploratory tests

Example Interpretation:
┌────────────────────────────────────────────────────────────────┐
│ Version A: 5.0% conversion (1,000 / 20,000)                   │
│ Version B: 5.5% conversion (1,100 / 20,000)                   │
│                                                                │
│ Lift: +10% relative improvement                               │
│ p-value: 0.03                                                 │
│                                                                │
│ Interpretation:                                               │
│ "There's only a 3% chance this difference is due to luck.    │
│  We're 97% confident Version B is genuinely better."         │
│                                                                │
│ Decision: Implement Version B ✓                               │
└────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"Python Analysis Example"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import scipy.stats as stats
import numpy as np

def analyze_ab_test(visitors_a, conversions_a,
                    visitors_b, conversions_b,
                    alpha=0.05):
    """
    Analyze A/B test results.
    """
    # Calculate conversion rates
    rate_a = conversions_a / visitors_a
    rate_b = conversions_b / visitors_b

    # Calculate lift
    lift = (rate_b - rate_a) / rate_a * 100

    # Perform chi-square test
    contingency_table = [
        [conversions_a, visitors_a - conversions_a],
        [conversions_b, visitors_b - conversions_b]
    ]
    chi2, p_value, dof, expected = stats.chi2_contingency(
        contingency_table
    )

    # Calculate confidence interval for the difference
    se = np.sqrt(rate_a*(1-rate_a)/visitors_a +
                 rate_b*(1-rate_b)/visitors_b)
    z = stats.norm.ppf(1 - alpha/2)
    ci_lower = (rate_b - rate_a) - z * se
    ci_upper = (rate_b - rate_a) + z * se

    # Results
    print("=" * 50)
    print("A/B TEST RESULTS")
    print("=" * 50)
    print(f"\\nVersion A: {rate_a:.2%} ({conversions_a:,}/{visitors_a:,})")
    print(f"Version B: {rate_b:.2%} ({conversions_b:,}/{visitors_b:,})")
    print(f"\\nRelative Lift: {lift:+.1f}%")
    print(f"Absolute Difference: {(rate_b-rate_a)*100:+.2f} pp")
    print(f"\\np-value: {p_value:.4f}")
    print(f"95% CI: [{ci_lower*100:.2f}%, {ci_upper*100:.2f}%]")

    if p_value < alpha:
        print(f"\\n✅ STATISTICALLY SIGNIFICANT (p < {alpha})")
        if rate_b > rate_a:
            print("   Recommend: Implement Version B")
        else:
            print("   Recommend: Keep Version A")
    else:
        print(f"\\n❌ NOT STATISTICALLY SIGNIFICANT (p >= {alpha})")
        print("   Recommend: Continue testing or try larger change")

    return {
        'rate_a': rate_a,
        'rate_b': rate_b,
        'lift': lift,
        'p_value': p_value,
        'significant': p_value < alpha
    }

# Example usage
results = analyze_ab_test(
    visitors_a=20000, conversions_a=1000,   # Version A: 5.0%
    visitors_b=20000, conversions_b=1100    # Version B: 5.5%
)

# Output:
# ==================================================
# A/B TEST RESULTS
# ==================================================
#
# Version A: 5.00% (1,000/20,000)
# Version B: 5.50% (1,100/20,000)
#
# Relative Lift: +10.0%
# Absolute Difference: +0.50 pp
#
# p-value: 0.0201
# 95% CI: [0.08%, 0.92%]
#
# ✅ STATISTICALLY SIGNIFICANT (p < 0.05)
#    Recommend: Implement Version B`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common A/B Testing Mistakes"}
                </h2>
                <h3>
                  {"1. Peeking Problem"}
                </h3>
                <div className="code-block">
                  <pre><code>{`❌ MISTAKE: Checking results daily and stopping when "significant"

Day 3: "p = 0.04, Version B wins! Let's stop!"

PROBLEM:
If you check results repeatedly, you'll eventually see
a "significant" result by pure chance.

Checking 10 times = ~40% chance of false positive!

✅ SOLUTION:
- Pre-define sample size and duration
- Only analyze once the test is complete
- Use sequential testing if you must peek`}</code></pre>
                </div>
                <h3>
                  {"2. Underpowered Tests"}
                </h3>
                <div className="code-block">
                  <pre><code>{`❌ MISTAKE: Running tests with too few visitors

"We ran the test for 3 days with 500 visitors total.
 No significant result. The new design doesn't work."

PROBLEM:
Low sample size means you can't detect real differences.
80% of true 10% improvements would be missed!

✅ SOLUTION:
- Calculate required sample size BEFORE testing
- If you can't reach it, accept you can only detect
  larger effects
- Consider running tests longer`}</code></pre>
                </div>
                <h3>
                  {"3. Multiple Comparisons"}
                </h3>
                <div className="code-block">
                  <pre><code>{`❌ MISTAKE: Testing many variations and picking the winner

"We tested 10 headlines. #7 had p=0.03, so it wins!"

PROBLEM:
With 10 comparisons at α=0.05, there's a 40% chance
at least one will be "significant" by chance alone.

✅ SOLUTION:
- Apply Bonferroni correction: α/n (0.05/10 = 0.005)
- Limit the number of variants
- Pre-specify primary comparison`}</code></pre>
                </div>
                <h3>
                  {"4. Winner's Curse"}
                </h3>
                <div className="code-block">
                  <pre><code>{`❌ MISTAKE: Expecting the winning variant to perform as well
           after implementation

Test Result: "Version B shows +15% lift!"
After Launch: "We're only seeing +5% improvement..."

PROBLEM:
Measured effect includes noise. The true effect
is usually smaller than what you measured.

✅ SOLUTION:
- Use larger sample sizes
- Be conservative in projections
- Monitor actual results after implementation`}</code></pre>
                </div>
                <h3>
                  {"5. Testing Too Many Things at Once"}
                </h3>
                <div className="code-block">
                  <pre><code>{`❌ MISTAKE: Changing multiple elements in Version B

Version A: Green button, "Buy Now", Price $99
Version B: Orange button, "Shop Now", Price $97

If B wins, you don't know WHY!
- Was it the color? Text? Price? All of them?

✅ SOLUTION:
- Change ONE variable at a time
- Or use proper multivariate testing with sufficient traffic
- Document exactly what changed`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced: Bayesian A/B Testing"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Bayesian vs Frequentist Approach

Frequentist (Traditional):
- Answers: "If there's no difference, what's the probability
  of seeing this data?"
- Gives: p-value
- Limitation: Can't say "B is probably better"

Bayesian:
- Answers: "Given the data, what's the probability B is better?"
- Gives: Probability of B > A directly
- More intuitive for decision-making

Bayesian Example:
┌────────────────────────────────────────────────────────────────┐
│ "There's a 95% probability that Version B outperforms A,     │
│  with an expected lift of 8-12%."                             │
│                                                                │
│ vs.                                                            │
│                                                                │
│ "We reject the null hypothesis with p=0.03"                   │
└────────────────────────────────────────────────────────────────┘

Which is easier to explain to your boss?`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from scipy import stats

def bayesian_ab_test(visitors_a, conversions_a,
                     visitors_b, conversions_b,
                     simulations=100000):
    """
    Bayesian A/B test using Beta distributions.
    """
    # Beta distribution parameters (using Jeffreys prior)
    alpha_a = conversions_a + 0.5
    beta_a = visitors_a - conversions_a + 0.5
    alpha_b = conversions_b + 0.5
    beta_b = visitors_b - conversions_b + 0.5

    # Sample from posterior distributions
    samples_a = np.random.beta(alpha_a, beta_a, simulations)
    samples_b = np.random.beta(alpha_b, beta_b, simulations)

    # Calculate probability B > A
    prob_b_better = (samples_b > samples_a).mean()

    # Calculate expected lift
    lift_samples = (samples_b - samples_a) / samples_a
    expected_lift = lift_samples.mean()
    lift_ci = np.percentile(lift_samples, [2.5, 97.5])

    print("=" * 50)
    print("BAYESIAN A/B TEST RESULTS")
    print("=" * 50)
    print(f"\\nProbability B > A: {prob_b_better:.1%}")
    print(f"Expected Lift: {expected_lift:.1%}")
    print(f"95% Credible Interval: [{lift_ci[0]:.1%}, {lift_ci[1]:.1%}]")

    if prob_b_better > 0.95:
        print("\\n✅ High confidence B is better (>95%)")
    elif prob_b_better < 0.05:
        print("\\n✅ High confidence A is better (>95%)")
    else:
        print("\\n⚠️ Inconclusive - continue testing")

# Example
bayesian_ab_test(20000, 1000, 20000, 1100)

# Output:
# Probability B > A: 97.3%
# Expected Lift: 10.1%
# 95% Credible Interval: [1.8%, 18.9%]
# ✅ High confidence B is better (>95%)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"A/B Testing Tools"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Popular A/B Testing Platforms:

WEBSITE TESTING
├── Google Optimize (Free, being sunset)
├── Optimizely (Enterprise)
├── VWO (Mid-market)
├── AB Tasty (Mid-market)
└── Convert (Mid-market)

EMAIL TESTING
├── Mailchimp (Built-in)
├── Klaviyo (Built-in)
└── Most email platforms have A/B features

PRODUCT/APP TESTING
├── LaunchDarkly (Feature flags)
├── Split.io (Feature flags)
├── Amplitude Experiment
└── Statsig

ANALYSIS TOOLS
├── Python (scipy, statsmodels)
├── R (built-in statistics)
└── Excel (with Stats add-in)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"A/B Testing Checklist"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Before Running Your Test:

□ HYPOTHESIS
  □ Clear hypothesis with expected outcome
  □ One variable being tested
  □ Measurable success metric defined

□ DESIGN
  □ Sample size calculated
  □ Test duration determined
  □ Traffic split decided (usually 50/50)
  □ Tracking/analytics verified

□ IMPLEMENTATION
  □ Both versions working correctly
  □ No bugs in either variant
  □ Randomization working properly
  □ No overlap with other tests

After Running Your Test:

□ ANALYSIS
  □ Waited for full sample size
  □ Statistical significance checked
  □ Confidence intervals calculated
  □ Segmentation analysis (if needed)

□ DECISION
  □ Results documented
  □ Winner implemented (if significant)
  □ Learnings shared with team
  □ Next test planned`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data-Driven Decisions"}
                </h2>
                <p>
                  {"Our Data Analytics program covers A/B testing, statistical analysis, and experiment design."}
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
                  <Link href="/data-analytics/articles/statistics-analytics" className="related-article-card">
                    <h4>
                      {"Statistics for Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical foundations"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/google-analytics" className="related-article-card">
                    <h4>
                      {"Google Analytics 4"}
                    </h4>
                    {" "}
                    <p>
                      {"Web analytics platform"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/data-storytelling" className="related-article-card">
                    <h4>
                      {"Data Storytelling"}
                    </h4>
                    {" "}
                    <p>
                      {"Present your findings"}
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
