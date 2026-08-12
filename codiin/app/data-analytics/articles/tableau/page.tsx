import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Tableau: Data Visualization Excellence",
  description: "Learn Tableau - the leading data visualization platform. Master charts, dashboards, calculated fields, and storytelling with data.",
  keywords: ["Tableau tutorial", "data visualization", "Tableau dashboards", "business intelligence", "Tableau calculated fields"],
  alternates: { canonical: "/data-analytics/articles/tableau" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/tableau",
    title: "Tableau: Data Visualization Excellence",
    description: "Master Tableau for creating stunning data visualizations.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-analytics", label: "Learn Data Analytics", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tableau: Data Visualization Excellence",
  "description": "Complete guide to Tableau for data analytics",
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

export default function DataAnalyticsTableauPage() {
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
                {"Tableau"}
              </span>
            </div>
            <h1>
              {"Tableau"}
            </h1>
            <p className="article-subtitle">
              {"Data Visualization Excellence"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Tableau?"}
                </h2>
                <p>
                  {"Tableau is the world's leading data visualization platform, known for its intuitive drag-and-drop interface and ability to create stunning, interactive visualizations. It connects to virtually any data source and makes data exploration accessible to everyone."}
                </p>
                <p>
                  {"Tableau products include Tableau Desktop, Tableau Server, Tableau Cloud, and Tableau Public (free for public data sharing)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Dimensions:"}
                    </strong>
                    {" Categorical data (names, dates, categories)"}
                  </li>
                  <li>
                    <strong>
                      {"Measures:"}
                    </strong>
                    {" Numerical data that can be aggregated"}
                  </li>
                  <li>
                    <strong>
                      {"Worksheets:"}
                    </strong>
                    {" Individual views/charts"}
                  </li>
                  <li>
                    <strong>
                      {"Dashboards:"}
                    </strong>
                    {" Collection of worksheets on one page"}
                  </li>
                  <li>
                    <strong>
                      {"Stories:"}
                    </strong>
                    {" Sequence of dashboards for presentations"}
                  </li>
                  <li>
                    <strong>
                      {"Marks:"}
                    </strong>
                    {" Visual elements (bars, lines, points)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Connecting to Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Data Connection Types:
├── Files
│   ├── Excel, CSV, JSON
│   ├── PDF, Statistical files
│   └── Spatial files (Shapefile, GeoJSON)
├── Servers
│   ├── SQL Server, PostgreSQL, MySQL
│   ├── Oracle, Amazon Redshift
│   ├── Google BigQuery, Snowflake
│   └── Databricks, SAP HANA
├── Cloud
│   ├── Google Sheets
│   ├── Salesforce
│   ├── Google Analytics
│   └── Azure SQL
└── Other
    ├── Web Data Connector
    └── OData

Connection Modes:
- Live: Real-time queries to data source
- Extract: Snapshot of data for performance`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building Visualizations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Chart Types and When to Use:

BAR CHART
- Compare values across categories
- Drag dimension to Rows, measure to Columns

LINE CHART
- Show trends over time
- Drag date to Columns, measure to Rows

SCATTER PLOT
- Show correlation between two measures
- Drag measures to Rows and Columns

MAPS
- Geographic data visualization
- Double-click geographic field

TREEMAP
- Hierarchical data, part-of-whole
- Drag dimension to Color, measure to Size

HEAT MAP
- Patterns in matrix data
- Two dimensions, one measure with color

DUAL AXIS
- Compare two measures with different scales
- Right-click second measure → Dual Axis`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Calculated Fields"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Basic Calculations
Profit Ratio = SUM([Profit]) / SUM([Sales])

// IF Statements
Profit Status =
IF [Profit] > 0 THEN "Profitable"
ELSEIF [Profit] = 0 THEN "Break Even"
ELSE "Loss"
END

// CASE Statements
Region Group =
CASE [Region]
    WHEN "East" THEN "Eastern Zone"
    WHEN "West" THEN "Western Zone"
    ELSE "Other"
END

// String Functions
Full Name = [First Name] + " " + [Last Name]
Initials = LEFT([First Name], 1) + LEFT([Last Name], 1)

// Date Functions
Year = YEAR([Order Date])
Quarter = "Q" + STR(DATEPART('quarter', [Order Date]))
Days Since Order = DATEDIFF('day', [Order Date], TODAY())

// Table Calculations
Running Total = RUNNING_SUM(SUM([Sales]))
Percent of Total = SUM([Sales]) / TOTAL(SUM([Sales]))
Year over Year Growth =
(ZN(SUM([Sales])) - LOOKUP(ZN(SUM([Sales])), -1))
/ ABS(LOOKUP(ZN(SUM([Sales])), -1))

// LOD Expressions (Level of Detail)
Sales per Customer = { FIXED [Customer ID] : SUM([Sales]) }
Avg Order Value = { INCLUDE [Order ID] : SUM([Sales]) }
Total Company Sales = { EXCLUDE [Region] : SUM([Sales]) }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Filters and Parameters"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Filter Types:
1. Extract Filters - Applied when creating extract
2. Data Source Filters - Filter before data enters Tableau
3. Context Filters - Creates temporary table
4. Dimension Filters - Filter specific values
5. Measure Filters - Filter by aggregated values

Filter Order of Operations:
Extract → Data Source → Context → Dimension → Measure

Parameters:
// Create dynamic calculations
Sales Target Parameter = 100000

Above Target =
IF SUM([Sales]) >= [Sales Target Parameter]
THEN "Above Target"
ELSE "Below Target"
END

// Dynamic Top N
Top N Products =
IF RANK(SUM([Sales])) <= [Top N Parameter]
THEN [Product Name]
ELSE "Other"
END`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dashboard Design"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Layout:"}
                    </strong>
                    {" Use containers (horizontal/vertical) for responsive design"}
                  </li>
                  <li>
                    <strong>
                      {"Interactivity:"}
                    </strong>
                    {" Add filters, highlighters, and URL actions"}
                  </li>
                  <li>
                    <strong>
                      {"Actions:"}
                    </strong>
                    {" Filter, highlight, URL, and parameter actions"}
                  </li>
                  <li>
                    <strong>
                      {"Device layouts:"}
                    </strong>
                    {" Design for desktop, tablet, and phone"}
                  </li>
                  <li>
                    <strong>
                      {"Performance:"}
                    </strong>
                    {" Optimize by reducing marks and using extracts"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`Dashboard Actions:
1. Filter Action
   - Click on chart A filters chart B
   - Source: Sales by Region
   - Target: Product Details

2. Highlight Action
   - Hover highlights related data
   - Useful for cross-chart analysis

3. URL Action
   - Click opens external link
   - Use field values in URL

4. Parameter Action
   - Click changes parameter value
   - Dynamic what-if analysis

5. Set Action
   - Click adds/removes from set
   - User-driven groupings`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Storytelling with Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Story Structure:
1. Introduction
   - Set context
   - State the question/problem

2. Body
   - Present evidence
   - Guide through findings
   - Use annotations liberally

3. Conclusion
   - Key insights
   - Recommendations
   - Call to action

Best Practices:
- One main point per story point
- Use captions to narrate
- Highlight key data points
- Keep it focused (5-7 points max)
- End with actionable insights`}</code></pre>
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
                    {" Match visualization to data type"}
                  </li>
                  <li>
                    <strong>
                      {"Start with questions:"}
                    </strong>
                    {" Know what you're trying to answer"}
                  </li>
                  <li>
                    <strong>
                      {"Use color purposefully:"}
                    </strong>
                    {" Highlight, not decorate"}
                  </li>
                  <li>
                    <strong>
                      {"Label clearly:"}
                    </strong>
                    {" Titles, axis labels, and tooltips"}
                  </li>
                  <li>
                    <strong>
                      {"Remove clutter:"}
                    </strong>
                    {" Eliminate unnecessary gridlines and borders"}
                  </li>
                  <li>
                    <strong>
                      {"Test with users:"}
                    </strong>
                    {" Ensure dashboards are intuitive"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Tableau with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers Tableau from fundamentals to advanced dashboard creation. Create stunning visualizations with guidance from industry experts."}
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
                      {"Power BI"}
                    </h4>
                    {" "}
                    <p>
                      {"Microsoft's BI platform"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/sql-analytics" className="related-article-card">
                    <h4>
                      {"SQL for Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Query data for analysis"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/data-visualization-python" className="related-article-card">
                    <h4>
                      {"Python Visualization"}
                    </h4>
                    {" "}
                    <p>
                      {"Matplotlib & Seaborn"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Tableau."} />
    </>
  );
}
