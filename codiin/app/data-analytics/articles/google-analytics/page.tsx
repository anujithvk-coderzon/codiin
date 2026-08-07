import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Google Analytics 4 (GA4): Complete Guide",
  description: "Master Google Analytics 4 (GA4) for web analytics. Learn event tracking, conversions, audiences, reports, and how to extract actionable insights from your website data.",
  keywords: ["Google Analytics 4", "GA4", "web analytics", "event tracking", "conversion tracking", "user behavior", "website metrics"],
  alternates: { canonical: "/data-analytics/articles/google-analytics" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/google-analytics",
    title: "Google Analytics 4: Complete Guide",
    description: "Understand your website visitors with GA4.",
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
  "headline": "Google Analytics 4: Complete Guide",
  "description": "Master GA4 for web analytics",
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

export default function DataAnalyticsGoogleAnalyticsPage() {
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
                {"Google Analytics 4"}
              </span>
            </div>
            <h1>
              {"Google Analytics 4"}
            </h1>
            <p className="article-subtitle">
              {"Understand Your Website Visitors with GA4"}
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
                  {"What is Google Analytics 4?"}
                </h2>
                <p>
                  {"Google Analytics 4 (GA4) is Google's latest analytics platform that tracks how users interact with your website or app. It's "}
                  <strong>
                    {"event-based"}
                  </strong>
                  {", meaning it tracks user actions rather than just page views."}
                </p>
                <div className="code-block">
                  <pre><code>{`# GA4 vs Universal Analytics (Old Version)

Universal Analytics (Sunset July 2023):
- Session-based: Focused on visits
- Page views as primary metric
- Limited cross-device tracking

Google Analytics 4:
- Event-based: Every interaction is an event
- User-centric: Track users across devices
- Machine learning insights
- Better privacy compliance
- Free BigQuery export

Key Shift:
UA: "How many pageviews did we get?"
GA4: "What are users DOING on our site?"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GA4 Data Model"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Everything is an Event

In GA4, ALL data is captured as events:

┌─────────────────────────────────────────────────────────────────┐
│ EVENT NAME          │ WHAT IT TRACKS                           │
├─────────────────────────────────────────────────────────────────┤
│ page_view           │ User views a page                        │
│ scroll              │ User scrolls 90% of page                 │
│ click               │ User clicks outbound link                │
│ first_visit         │ First time visitor                       │
│ session_start       │ Session begins                           │
│ user_engagement     │ Site in focus for 10+ seconds           │
│ purchase            │ E-commerce transaction                   │
│ sign_up             │ User creates account                     │
│ [custom_event]      │ Anything you define                      │
└─────────────────────────────────────────────────────────────────┘

Each event has PARAMETERS (additional details):

Event: page_view
Parameters:
  - page_location: "https://example.com/products"
  - page_title: "Our Products"
  - page_referrer: "https://google.com"

Event: purchase
Parameters:
  - transaction_id: "T12345"
  - value: 99.99
  - currency: "USD"
  - items: [{name: "Widget", price: 99.99}]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Metrics in GA4"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Essential GA4 Metrics:

USER METRICS
├── Users: Unique visitors (based on cookies/device)
├── New Users: First-time visitors
├── Active Users: Users with engaged sessions
└── Returning Users: Users who came back

ENGAGEMENT METRICS
├── Sessions: Groups of user interactions
├── Engaged Sessions: Sessions > 10 sec, 2+ pages, or conversion
├── Engagement Rate: Engaged sessions / Total sessions
├── Average Engagement Time: How long users actively interact
├── Bounce Rate: Non-engaged sessions (opposite of engagement)
└── Views: Page/screen views

CONVERSION METRICS
├── Conversions: Completed goals (purchases, signups, etc.)
├── Conversion Rate: Conversions / Users
└── Revenue: Total transaction value

ACQUISITION METRICS
├── Session Source: Where traffic comes from (google, facebook)
├── Session Medium: Traffic type (organic, cpc, email)
├── Session Campaign: Marketing campaign name
└── First User Source: How they FIRST found you`}</code></pre>
                </div>
                <h3>
                  {"Engagement Rate vs Bounce Rate"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# New Way of Thinking About Engagement

OLD (Universal Analytics):
Bounce = Left after 1 page (even if they read for 10 minutes)
Not useful for blogs, single-page apps

NEW (GA4):
Engaged Session = Met ANY of these criteria:
  ✓ Lasted 10+ seconds
  ✓ Had 2+ page views
  ✓ Had a conversion event

Engagement Rate = Engaged Sessions / Total Sessions

Example:
- 1,000 sessions
- 700 were engaged (10+ sec or 2+ pages)
- Engagement Rate: 70%
- "Bounce Rate": 30% (non-engaged sessions)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GA4 Interface Overview"}
                </h2>
                <div className="code-block">
                  <pre><code>{`GA4 Navigation:

┌─────────────────────────────────────────────────────────────────┐
│  🏠 HOME                                                        │
│     Overview cards and AI insights                              │
├─────────────────────────────────────────────────────────────────┤
│  📊 REPORTS                                                      │
│     ├── Realtime: What's happening NOW                          │
│     ├── Life cycle                                              │
│     │   ├── Acquisition: How users find you                    │
│     │   ├── Engagement: What users do                          │
│     │   ├── Monetization: Revenue & purchases                  │
│     │   └── Retention: Users coming back                       │
│     ├── User                                                    │
│     │   ├── Demographics: Age, gender, interests              │
│     │   └── Tech: Devices, browsers, OS                       │
│     └── Custom Reports: Build your own                         │
├─────────────────────────────────────────────────────────────────┤
│  🔍 EXPLORE                                                      │
│     Advanced analysis & custom reports                          │
│     ├── Free Form: Flexible tables/charts                      │
│     ├── Funnel: Conversion funnels                             │
│     ├── Path: User journeys                                    │
│     └── Cohort: Retention analysis                             │
├─────────────────────────────────────────────────────────────────┤
│  📣 ADVERTISING                                                  │
│     Google Ads integration & attribution                        │
├─────────────────────────────────────────────────────────────────┤
│  ⚙️ ADMIN                                                        │
│     Account, property & data settings                           │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Setting Up Conversions"}
                </h2>
                <p>
                  {"Conversions (goals) are the most important actions on your site:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Common Conversions to Track:

E-COMMERCE
├── purchase         (automatic with e-commerce setup)
├── add_to_cart
├── begin_checkout
└── add_payment_info

LEAD GENERATION
├── form_submit      (custom event)
├── sign_up
├── generate_lead
└── contact_click

ENGAGEMENT
├── scroll           (built-in, 90% of page)
├── video_complete
├── file_download
└── outbound_click

How to Create a Conversion:

1. Go to: Admin → Events
2. Find the event you want as conversion
3. Toggle "Mark as conversion"

Or create from Admin → Conversions → New Conversion Event`}</code></pre>
                </div>
                <h3>
                  {"Custom Event Tracking"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Track Custom Events with gtag.js

// Button click tracking
document.getElementById('cta-button').addEventListener('click', function() {
    gtag('event', 'cta_click', {
        'button_text': 'Get Started',
        'button_location': 'hero_section'
    });
});

// Form submission tracking
document.getElementById('contact-form').addEventListener('submit', function() {
    gtag('event', 'form_submit', {
        'form_name': 'contact_form',
        'form_location': 'contact_page'
    });
});

// Video engagement tracking
gtag('event', 'video_progress', {
    'video_title': 'Product Demo',
    'video_percent': 50
});

// Custom purchase tracking
gtag('event', 'purchase', {
    'transaction_id': 'T12345',
    'value': 99.99,
    'currency': 'USD',
    'items': [{
        'item_id': 'SKU123',
        'item_name': 'Widget Pro',
        'price': 99.99,
        'quantity': 1
    }]
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential Reports"}
                </h2>
                <h3>
                  {"1. Traffic Acquisition Report"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Where is your traffic coming from?

Reports → Acquisition → Traffic Acquisition

Key Dimensions:
- Session default channel group
- Session source/medium
- Session campaign

Example Insights:
┌────────────────────┬─────────┬────────────┬──────────┐
│ Channel            │ Users   │ Engagement │ Converts │
├────────────────────┼─────────┼────────────┼──────────┤
│ Organic Search     │ 15,000  │ 65%        │ 2.1%     │
│ Direct             │ 8,000   │ 70%        │ 3.5%     │
│ Paid Search        │ 5,000   │ 45%        │ 4.2%     │
│ Social             │ 3,000   │ 40%        │ 0.8%     │
│ Email              │ 2,000   │ 75%        │ 5.1%     │
└────────────────────┴─────────┴────────────┴──────────┘

Insight: Email has highest engagement & conversion rate.
         Social needs improvement.`}</code></pre>
                </div>
                <h3>
                  {"2. Pages and Screens Report"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Which pages are most popular/engaging?

Reports → Engagement → Pages and screens

Key Metrics:
- Views
- Users
- Average engagement time
- Conversions

Example Analysis:
┌────────────────────────┬────────┬───────────┬──────────┐
│ Page                   │ Views  │ Avg Time  │ Converts │
├────────────────────────┼────────┼───────────┼──────────┤
│ /                      │ 50,000 │ 0:45      │ 500      │
│ /products              │ 20,000 │ 2:30      │ 800      │
│ /pricing               │ 15,000 │ 3:15      │ 450      │
│ /blog/popular-post     │ 12,000 │ 4:00      │ 120      │
│ /contact               │ 5,000  │ 1:30      │ 200      │
└────────────────────────┴────────┴───────────┴──────────┘

Insight: /products has high engagement and conversions.
         /pricing visitors spend longest - they're comparing.`}</code></pre>
                </div>
                <h3>
                  {"3. User Acquisition Report"}
                </h3>
                <div className="code-block">
                  <pre><code>{`How did users FIRST find you? (Different from session source)

Reports → Acquisition → User Acquisition

Why It Matters:
- User who found you via Google last week
- Returns today via direct link
- Session source: Direct
- First user source: Google (the REAL origin)

Use for: Understanding which channels bring new customers`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Exploration Reports"}
                </h2>
                <p>
                  {"Build custom analyses in the Explore section:"}
                </p>
                <h3>
                  {"Funnel Exploration"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Track conversion funnels:

Explore → Funnel exploration

Example: E-commerce Funnel
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  view_item ────► add_to_cart ────► begin_checkout ────► purchase│
│   10,000          3,000              1,500              500     │
│   100%            30%                15%                5%      │
│                                                                  │
│  Drop-off:        70%                50%                67%     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

Insights:
- 70% leave without adding to cart → improve product pages
- 67% abandon checkout → simplify checkout process`}</code></pre>
                </div>
                <h3>
                  {"Path Exploration"}
                </h3>
                <div className="code-block">
                  <pre><code>{`See how users navigate your site:

Explore → Path exploration

Starting Point: page_view (Homepage)
                    │
        ┌───────────┴───────────┐
        │                       │
   /products (40%)         /blog (30%)
        │                       │
   ┌────┴────┐             ┌────┴────┐
   │         │             │         │
/pricing  /demo        /article1  /article2
 (25%)    (15%)         (20%)      (10%)

Use for:
- Understanding user journeys
- Finding unexpected paths
- Identifying drop-off points`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Audiences"}
                </h2>
                <p>
                  {"Create user segments for analysis and remarketing:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Useful Audiences to Create:

HIGH-VALUE USERS
- Conditions: purchase event with value > $100
- Use: Target with VIP offers

CART ABANDONERS
- Conditions: add_to_cart event, NOT purchase event
- Time: Last 7 days
- Use: Remarketing campaigns

ENGAGED READERS
- Conditions: session duration > 5 min, 3+ page views
- Use: Newsletter targeting

RETURNING VISITORS
- Conditions: session count > 3
- Use: Loyalty analysis

Create Audience:
Admin → Audiences → New Audience → Create Custom Audience`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"UTM Parameters"}
                </h2>
                <p>
                  {"Track marketing campaigns with UTM tags:"}
                </p>
                <div className="code-block">
                  <pre><code>{`UTM Parameters:

https://example.com/page?
    utm_source=facebook          (WHERE: platform)
    &utm_medium=paid_social      (HOW: ad type)
    &utm_campaign=summer_sale    (WHAT: campaign name)
    &utm_content=banner_v2       (WHICH: ad variation)
    &utm_term=running_shoes      (KEYWORDS: for search)

Example URLs:

Email Newsletter:
https://example.com?utm_source=newsletter&utm_medium=email
&utm_campaign=weekly_digest

Facebook Ad:
https://example.com?utm_source=facebook&utm_medium=cpc
&utm_campaign=spring_promo&utm_content=carousel_ad

Google Search Ad:
https://example.com?utm_source=google&utm_medium=cpc
&utm_campaign=brand&utm_term=company+name

Tool: Use Google's Campaign URL Builder`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"BigQuery Export"}
                </h2>
                <p>
                  {"GA4 offers free daily export to BigQuery for advanced analysis:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Why Use BigQuery?

1. Raw event-level data
2. No sampling
3. Combine with other data sources
4. Custom SQL analysis
5. Historical data beyond GA4 limits

Example Query: Top Converting Pages

SELECT
    (SELECT value.string_value FROM UNNEST(event_params)
     WHERE key = 'page_location') AS page,
    COUNT(DISTINCT user_pseudo_id) AS users,
    COUNTIF(event_name = 'purchase') AS conversions,
    SAFE_DIVIDE(
        COUNTIF(event_name = 'purchase'),
        COUNT(DISTINCT user_pseudo_id)
    ) * 100 AS conversion_rate
FROM
    \`project.analytics_123456789.events_*\`
WHERE
    _TABLE_SUFFIX BETWEEN '20240101' AND '20240131'
GROUP BY
    page
HAVING
    users > 100
ORDER BY
    conversion_rate DESC
LIMIT 20;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common GA4 Questions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Frequently Asked Questions:

Q: Why are my numbers different from UA?
A: Different data models. GA4 counts users differently,
   especially across devices. GA4 also has different
   session timeout rules and engagement definitions.

Q: Where is Bounce Rate?
A: GA4 uses "Engagement Rate" instead. You can find
   non-engaged sessions (inverse of engagement rate)
   or add Bounce Rate to reports via customization.

Q: Why is my traffic lower in GA4?
A: - Cookie consent: GA4 respects user preferences
   - Different counting: Users vs Sessions
   - Filter settings: Check if filters are applied

Q: How long is data retained?
A: - Free: 2 or 14 months (you choose)
   - 360: Up to 50 months
   - BigQuery: Unlimited (export daily)

Q: Can I track across domains?
A: Yes! Admin → Data Streams → Configure tag settings
   → Configure your domains`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GA4 Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Set up conversions early:"}
                    </strong>
                    {" Track what matters to your business"}
                  </li>
                  <li>
                    <strong>
                      {"Use UTM parameters:"}
                    </strong>
                    {" Tag all marketing campaigns"}
                  </li>
                  <li>
                    <strong>
                      {"Create audiences:"}
                    </strong>
                    {" Segment users for insights and remarketing"}
                  </li>
                  <li>
                    <strong>
                      {"Enable BigQuery export:"}
                    </strong>
                    {" Even if you don't use it now"}
                  </li>
                  <li>
                    <strong>
                      {"Check data regularly:"}
                    </strong>
                    {" Verify tracking is working"}
                  </li>
                  <li>
                    <strong>
                      {"Use Explorations:"}
                    </strong>
                    {" Go beyond standard reports"}
                  </li>
                  <li>
                    <strong>
                      {"Document your setup:"}
                    </strong>
                    {" Track what events and conversions you've configured"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Web Analytics"}
                </h2>
                <p>
                  {"Our Data Analytics program covers GA4, web analytics, and data-driven marketing."}
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
                  <Link href="/data-analytics/articles/ab-testing" className="related-article-card">
                    <h4>
                      {"A/B Testing"}
                    </h4>
                    {" "}
                    <p>
                      {"Experiment with confidence"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/dashboard-design" className="related-article-card">
                    <h4>
                      {"Dashboard Design"}
                    </h4>
                    {" "}
                    <p>
                      {"Visualize your data"}
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
