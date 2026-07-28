import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dashboard Design Principles: Complete Guide",
  description: "Learn dashboard design principles for Power BI, Tableau, and Excel. Create effective, user-friendly dashboards that drive decisions.",
  keywords: ["dashboard design", "data visualization", "Power BI dashboard", "Tableau dashboard", "dashboard best practices", "KPI dashboard"],
  alternates: { canonical: "/data-analytics/articles/dashboard-design" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/dashboard-design",
    title: "Dashboard Design: Principles for Effective Visualization",
    description: "Create dashboards that users actually use.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-analytics", label: "Learn Data Analytics", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Dashboard Design: Principles for Effective Visualization",
  "description": "Complete guide to designing effective dashboards",
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

export default function DataAnalyticsDashboardDesignPage() {
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
                {"Dashboard Design"}
              </span>
            </div>
            <h1>
              {"Dashboard Design"}
            </h1>
            <p className="article-subtitle">
              {"Create Dashboards That Drive Decisions"}
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
                  {"What Makes a Good Dashboard?"}
                </h2>
                <p>
                  {"A great dashboard answers questions "}
                  <strong>
                    {"at a glance"}
                  </strong>
                  {". If users have to think hard to understand it, the dashboard has failed."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Good vs Bad Dashboard

❌ BAD DASHBOARD:
┌─────────────────────────────────────────────────────────────────┐
│ [3D Pie Chart]  [3D Bar Chart]  [Rainbow Line Chart]          │
│     Sales by        Region           Trends                    │
│     Category        Data           (6 metrics)                 │
│                                                                 │
│ [Dense Table with 50 rows]  [Gauge] [Gauge] [Gauge] [Gauge]   │
│                                                                 │
│ [Another Pie]  [Bubble Chart]  [Word Cloud]  [Donut]          │
└─────────────────────────────────────────────────────────────────┘
Problems: Cluttered, 3D distortion, too many charts, no focus

✅ GOOD DASHBOARD:
┌─────────────────────────────────────────────────────────────────┐
│  MONTHLY SALES PERFORMANCE                        Dec 2024     │
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐              │
│  │ $2.4M      │  │ 1,234      │  │ 89%        │              │
│  │ Revenue    │  │ Orders     │  │ Target     │              │
│  │ ▲ +12%     │  │ ▲ +8%      │  │ ▲ +5pp     │              │
│  └────────────┘  └────────────┘  └────────────┘              │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │             Monthly Revenue Trend                        │  │
│  │  $3M │                                            ●     │  │
│  │      │                                    ●              │  │
│  │  $2M │                    ●       ●                      │  │
│  │      │     ●      ●                                      │  │
│  │  $1M │──●──────────────────────────────────────────────  │  │
│  │      └─Jan──Feb──Mar──Apr──May──Jun──Jul──Aug──Sep──Oct  │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────┐  ┌───────────────────────────┐  │
│  │ Revenue by Region       │  │ Top Products              │  │
│  │ ████████████ North 45%  │  │ 1. Widget Pro    $500K   │  │
│  │ ████████ South 32%      │  │ 2. Gadget Plus   $380K   │  │
│  │ █████ East 15%          │  │ 3. Tool Basic    $220K   │  │
│  │ ██ West 8%              │  │ 4. Accessory A   $180K   │  │
│  └─────────────────────────┘  └───────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
Better: Clean, focused, hierarchy, quick to understand`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"The 5-Second Rule"}
                </h2>
                <p>
                  {"Users should understand the main message within 5 seconds. Test your dashboard:"}
                </p>
                <div className="code-block">
                  <pre><code>{`5-Second Test:

1. Show dashboard to someone for 5 seconds
2. Hide it and ask:
   - "What was this dashboard about?"
   - "What's the main insight?"
   - "Is performance good or bad?"

If they can't answer, redesign for clarity.

Design for the Glance:
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│    5 Seconds:  See the BIG PICTURE (KPIs, status)            │
│                     ↓                                          │
│   30 Seconds:  Understand CONTEXT (trends, comparisons)       │
│                     ↓                                          │
│    5 Minutes:  EXPLORE details (drill-down, filters)          │
│                                                                │
└────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dashboard Layout Principles"}
                </h2>
                <h3>
                  {"1. The Z-Pattern"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Users scan in a Z-pattern (left to right, top to bottom):

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   1. START ─────────────────────────────────► 2. TOP RIGHT     │
│   (Title, KPIs)                                (Filters, Date) │
│                                                                 │
│           ╲                                                     │
│            ╲                                                    │
│             ╲                                                   │
│              ╲                                                  │
│               ╲                                                 │
│                ╲                                                │
│                                                                 │
│   3. LEFT ◄─────────────────────────────────── 4. END          │
│   (Supporting)                                (Details)         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Put most important info at positions 1 and 4.`}</code></pre>
                </div>
                <h3>
                  {"2. Visual Hierarchy"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Create hierarchy with size and position:

MOST IMPORTANT (Top, Large)
├── KPI Cards: Revenue, Growth, Target
│
CONTEXT (Middle, Medium)
├── Main trend chart
├── Key comparison
│
DETAILS (Bottom, Smaller)
├── Supporting charts
├── Data tables
└── Filters

Use Size to Show Importance:
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  │               MAIN CHART (50% of space)                  │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌────────────────────┐  ┌────────────────────┐              │
│  │ Supporting (25%)   │  │ Supporting (25%)   │              │
│  └────────────────────┘  └────────────────────┘              │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"3. Consistent Alignment"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Align elements on a grid:

❌ BAD:
┌─────────────────────────────────────────────────────────────────┐
│  [Chart]              [Chart]                                  │
│         [Chart]                      [Chart]                   │
│                [Chart]        [Chart]                          │
└─────────────────────────────────────────────────────────────────┘
Misaligned, chaotic

✅ GOOD:
┌─────────────────────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │    Chart     │  │    Chart     │  │    Chart     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│  ┌──────────────────────────┐  ┌──────────────────────────┐   │
│  │         Chart            │  │         Chart            │   │
│  └──────────────────────────┘  └──────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
Clean grid alignment`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Color Best Practices"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Color Rules:

1. LIMIT YOUR PALETTE
   ❌ Rainbow of colors
   ✅ 3-5 colors maximum

2. USE COLOR WITH PURPOSE
   - Gray: Default, background, context
   - Brand color: Primary data
   - Red/Green: Good/bad, up/down (careful with colorblindness)
   - Highlight color: Call attention

3. BE CONSISTENT
   If "North Region" is blue on one chart,
   it should be blue on ALL charts.

4. COLORBLIND-FRIENDLY
   - Don't rely on color alone
   - Use patterns, labels, or shapes
   - Tools: Color Oracle, Coblis simulator

Example Palette:
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ██ Primary (Blue)     - Main data series                     │
│  ██ Secondary (Gray)   - Context, comparison                  │
│  ██ Accent (Orange)    - Highlights, alerts                   │
│  ██ Positive (Green)   - Above target, growth                 │
│  ██ Negative (Red)     - Below target, decline                │
│                                                                │
└────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Chart Selection Guide"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Choose the Right Chart for Your Data:

COMPARISON
├── Bar Chart: Compare categories
│   "Sales by product"
├── Grouped Bar: Compare categories across groups
│   "Sales by product, by region"
└── Bullet Chart: Actual vs target
    "Revenue vs goal"

TREND OVER TIME
├── Line Chart: Continuous trends
│   "Monthly revenue"
├── Area Chart: Cumulative trends
│   "Cumulative sales"
└── Sparkline: Compact trend indicator
    "Quick trend in a KPI card"

COMPOSITION
├── Stacked Bar: Parts of whole by category
│   "Revenue sources by quarter"
├── Pie/Donut: Simple composition (MAX 5 slices)
│   "Market share"
└── Treemap: Hierarchical composition
    "Sales by category > product"

DISTRIBUTION
├── Histogram: Value distribution
│   "Customer age distribution"
├── Box Plot: Compare distributions
│   "Salary ranges by department"
└── Scatter: Relationship between variables
    "Price vs sales volume"

SINGLE VALUE
├── Card/Big Number: Most important KPI
│   "Total Revenue: $2.4M"
├── Gauge: Progress toward goal
│   "75% of target"
└── Indicator: Status (red/yellow/green)
    "Performance status"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"KPI Card Design"}
                </h2>
                <p>
                  {"KPI cards are often the first thing users see:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Anatomy of a Good KPI Card:

┌─────────────────────────────────────┐
│                                     │
│  Total Revenue          [sparkline]│
│                         ─────────   │
│  $2.4M                              │
│  ▲ +12.5% vs last month            │
│                                     │
│  Target: $2.2M ✓                   │
│                                     │
└─────────────────────────────────────┘

Components:
1. LABEL: What is this metric?
2. VALUE: The number (large, prominent)
3. TREND: Is it going up or down?
4. COMPARISON: vs last period, vs target
5. CONTEXT: Sparkline or mini-chart (optional)

❌ BAD KPI Card:
┌─────────────────┐
│ 2400000         │  (No label, hard to read, no context)
└─────────────────┘

✅ GOOD KPI Card:
┌─────────────────────────┐
│ Revenue                 │
│ $2.4M                   │
│ ▲ 12% vs LY             │
└─────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dashboard Types"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Match Dashboard Type to Purpose:

1. STRATEGIC DASHBOARD (Executive)
   Purpose: High-level overview, decision-making
   Audience: C-suite, leadership
   Features:
   - Few, critical KPIs
   - Summary-level data
   - Alerts and exceptions
   - Minimal interaction needed

2. TACTICAL DASHBOARD (Manager)
   Purpose: Monitor performance, spot issues
   Audience: Department managers
   Features:
   - More detailed metrics
   - Trend analysis
   - Drill-down capability
   - Comparison to targets

3. OPERATIONAL DASHBOARD (Analyst)
   Purpose: Daily operations, detailed analysis
   Audience: Analysts, operators
   Features:
   - Real-time or near-real-time
   - Detailed data
   - Interactive filters
   - Export capabilities

4. ANALYTICAL DASHBOARD (Explorer)
   Purpose: Deep dive, ad-hoc analysis
   Audience: Data analysts
   Features:
   - Highly interactive
   - Multiple filter combinations
   - Detail tables
   - What-if scenarios`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Interactive Design"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Make Dashboards Interactive (But Not Too Much):

GOOD INTERACTIVITY:
✓ Date range filters
✓ Category filters (region, product)
✓ Drill-down (click to see details)
✓ Cross-filtering (click chart A filters chart B)
✓ Tooltips for details

TOO MUCH INTERACTIVITY:
✗ 20+ filter dropdowns
✗ Everything is clickable with no guidance
✗ Required clicks to see basic info
✗ Filters that confuse users

Golden Rule:
The dashboard should be useful with ZERO clicks.
Interactivity should ENHANCE, not REQUIRE.

Filter Placement:
┌─────────────────────────────────────────────────────────────────┐
│  DASHBOARD TITLE              [Date: Dec 2024 ▼] [Region ▼]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [KPI]  [KPI]  [KPI]                                          │
│                                                                 │
│  [Main Chart]                 [Secondary Chart]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Put filters at TOP RIGHT where users expect them.`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Mistakes to Avoid"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Dashboard Design Mistakes:

1. TOO MANY CHARTS
   ❌ 15 charts crammed on one page
   ✅ 5-7 focused visualizations

2. 3D CHARTS
   ❌ 3D pie charts, 3D bars
   ✅ Simple 2D charts (3D distorts perception)

3. PIE CHARTS WITH MANY SLICES
   ❌ Pie with 12 slices
   ✅ Bar chart, or pie with max 5 slices

4. DUAL Y-AXES
   ❌ Two different scales on one chart
   ✅ Separate charts, or indexed values

5. TRUNCATED AXES
   ❌ Y-axis starting at 95 (exaggerates small changes)
   ✅ Start at 0, or clearly indicate break

6. RAINBOW COLORS
   ❌ Every bar a different color
   ✅ Consistent, purposeful color use

7. NO WHITE SPACE
   ❌ Elements touching, cramped
   ✅ Breathing room between elements

8. DECORATIVE ELEMENTS
   ❌ Clip art, heavy borders, shadows
   ✅ Clean, minimal design

9. MISSING TITLES/LABELS
   ❌ Charts with no context
   ✅ Clear titles that state the insight`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dashboard Design Checklist"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Before Publishing Your Dashboard:

□ PURPOSE
  □ Clear objective defined
  □ Target audience identified
  □ Key questions answered

□ LAYOUT
  □ Important info at top-left
  □ Logical flow (overview → details)
  □ Clean grid alignment
  □ Adequate white space

□ CHARTS
  □ Appropriate chart types
  □ Titles describe insights (not just data)
  □ Axes labeled with units
  □ Legend included (if needed)

□ COLOR
  □ Limited palette (3-5 colors)
  □ Consistent use across charts
  □ Colorblind-friendly
  □ Color conveys meaning

□ KPIs
  □ Most important metrics visible
  □ Comparison to target/previous period
  □ Trend indicator

□ INTERACTIVITY
  □ Useful filters included
  □ Not overly complex
  □ Clear filter labels
  □ Default view is meaningful

□ PERFORMANCE
  □ Loads quickly
  □ Filters respond fast
  □ No errors or blank visuals

□ USABILITY
  □ Passes 5-second test
  □ Tested with actual users
  □ Mobile-friendly (if needed)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Example Dashboard Layouts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Template 1: Executive Overview

┌─────────────────────────────────────────────────────────────────┐
│  COMPANY PERFORMANCE                            Dec 2024       │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ Revenue  │  │ Profit   │  │ Customers│  │ NPS      │       │
│  │ $24.5M   │  │ $4.2M    │  │ 12,400   │  │ 72       │       │
│  │ ▲ +15%   │  │ ▲ +8%    │  │ ▲ +22%   │  │ ▲ +5     │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                 Revenue Trend (12 months)               │   │
│  │         ________________________________________________│   │
│  │  $30M │                                          ●──●  │   │
│  │       │                              ●──●──●          │   │
│  │  $20M │      ●──●──●──●──●──●──●                      │   │
│  │       │──●──●                                          │   │
│  │  $10M │                                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────┐  ┌───────────────────────────┐   │
│  │ Revenue by Region       │  │ Top Issues               │   │
│  │ North   ████████  45%   │  │ ! Delayed shipments (5)  │   │
│  │ South   ██████ 30%      │  │ ! Inventory low (3)      │   │
│  │ East    ████ 15%        │  │ ✓ Support queue clear    │   │
│  │ West    ██ 10%          │  │                          │   │
│  └─────────────────────────┘  └───────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘


Template 2: Sales Performance

┌─────────────────────────────────────────────────────────────────┐
│  SALES DASHBOARD           [This Month ▼] [All Regions ▼]     │
├─────────────────────────────────────────────────────────────────┤
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐      │
│  │ Sales     │ │ Target    │ │ Deals     │ │ Pipeline  │      │
│  │ $1.2M     │ │ 85%       │ │ 45 Closed │ │ $3.5M     │      │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘      │
│                                                                 │
│  ┌────────────────────────────────┐ ┌────────────────────────┐ │
│  │ Weekly Sales vs Target        │ │ Sales by Rep           │ │
│  │                                │ │                        │ │
│  │  Target ----                  │ │ Sarah   ████████ $300K│ │
│  │  Actual ────                  │ │ Mike    ██████ $250K  │ │
│  │                                │ │ Alex    █████ $200K   │ │
│  │  [Line chart showing both]    │ │ Kim     ████ $180K    │ │
│  └────────────────────────────────┘ └────────────────────────┘ │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Recent Deals                                              │  │
│  │ Company          │ Amount   │ Stage    │ Close Date      │  │
│  │ Acme Corp        │ $50,000  │ ✓ Closed │ Dec 15          │  │
│  │ Beta Inc         │ $35,000  │ ✓ Closed │ Dec 12          │  │
│  │ Gamma LLC        │ $80,000  │ Proposal │ Dec 28 (est)    │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Dashboard Design"}
                </h2>
                <p>
                  {"Our Data Analytics program covers Power BI, Tableau, and dashboard design principles."}
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
                  <Link href="/data-analytics/articles/power-bi" className="related-article-card">
                    <h4>
                      {"Power BI Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Build dashboards in Power BI"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/tableau" className="related-article-card">
                    <h4>
                      {"Tableau Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Create visualizations in Tableau"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/data-storytelling" className="related-article-card">
                    <h4>
                      {"Data Storytelling"}
                    </h4>
                    {" "}
                    <p>
                      {"Present your insights"}
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
