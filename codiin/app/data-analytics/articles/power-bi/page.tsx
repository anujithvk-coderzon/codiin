import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Power BI: Business Intelligence Made Easy",
  description: "Learn Power BI - Microsoft's powerful business intelligence tool. Master data modeling, DAX, visualizations, and interactive dashboard creation.",
  keywords: ["Power BI tutorial", "business intelligence", "DAX", "data visualization", "Power Query", "dashboards"],
  alternates: { canonical: "/data-analytics/articles/power-bi" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/power-bi",
    title: "Power BI: Business Intelligence Made Easy",
    description: "Master Power BI for creating stunning dashboards and reports.",
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
  "headline": "Power BI: Business Intelligence Made Easy",
  "description": "Complete guide to Power BI for data analytics",
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

export default function DataAnalyticsPowerBiPage() {
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
                {"Power BI"}
              </span>
            </div>
            <h1>
              {"Power BI"}
            </h1>
            <p className="article-subtitle">
              {"Business Intelligence Made Easy"}
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
                  {"What is Power BI?"}
                </h2>
                <p>
                  {"Power BI is Microsoft's business analytics platform that enables you to visualize data, share insights, and make data-driven decisions. It's one of the most widely used BI tools in enterprises worldwide."}
                </p>
                <p>
                  {"Power BI consists of Power BI Desktop (for creating reports), Power BI Service (for sharing and collaboration), and Power BI Mobile (for on-the-go access)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Components"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Power Query:"}
                    </strong>
                    {" Data transformation and cleaning (ETL)"}
                  </li>
                  <li>
                    <strong>
                      {"Data Model:"}
                    </strong>
                    {" Relationships between tables"}
                  </li>
                  <li>
                    <strong>
                      {"DAX:"}
                    </strong>
                    {" Data Analysis Expressions for calculations"}
                  </li>
                  <li>
                    <strong>
                      {"Visualizations:"}
                    </strong>
                    {" Charts, graphs, and visual elements"}
                  </li>
                  <li>
                    <strong>
                      {"Reports:"}
                    </strong>
                    {" Collection of visuals on pages"}
                  </li>
                  <li>
                    <strong>
                      {"Dashboards:"}
                    </strong>
                    {" Pinned visuals from multiple reports"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Data"}
                </h2>
                <p>
                  {"Power BI can connect to hundreds of data sources:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Common Data Sources:
├── Files
│   ├── Excel (.xlsx, .xls)
│   ├── CSV / Text files
│   └── JSON, XML
├── Databases
│   ├── SQL Server
│   ├── PostgreSQL / MySQL
│   ├── Oracle
│   └── Azure SQL
├── Cloud Services
│   ├── SharePoint
│   ├── Dynamics 365
│   ├── Salesforce
│   └── Google Analytics
└── Other
    ├── Web pages
    ├── OData feeds
    └── REST APIs`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Power Query Transformations"}
                </h2>
                <p>
                  {"Power Query (M language) handles data transformation:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// Common Power Query Steps

// 1. Remove columns
= Table.RemoveColumns(Source, {"Column1", "Column2"})

// 2. Filter rows
= Table.SelectRows(Source, each [Status] = "Active")

// 3. Change data type
= Table.TransformColumnTypes(Source, {
    {"Date", type date},
    {"Amount", type number}
})

// 4. Replace values
= Table.ReplaceValue(Source, null, 0,
    Replacer.ReplaceValue, {"Sales"})

// 5. Add custom column
= Table.AddColumn(Source, "Profit",
    each [Revenue] - [Cost])

// 6. Merge queries (JOIN)
= Table.NestedJoin(
    Orders, {"CustomerID"},
    Customers, {"CustomerID"},
    "Customers", JoinKind.LeftOuter
)

// 7. Group by
= Table.Group(Source, {"Category"}, {
    {"Total Sales", each List.Sum([Sales]), type number},
    {"Count", each Table.RowCount(_), type number}
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Modeling"}
                </h2>
                <p>
                  {"Create relationships between tables for proper analysis:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Star Schema Design:

        ┌─────────────┐
        │  dim_Date   │
        └──────┬──────┘
               │
┌──────────────┼──────────────┐
│              │              │
▼              ▼              ▼
┌─────────┐ ┌─────────┐ ┌─────────────┐
│dim_Prod │ │fact_Sale│ │dim_Customer │
└─────────┘ └─────────┘ └─────────────┘

Relationship Types:
- One-to-Many (*) - Most common
- One-to-One (1:1) - Rare
- Many-to-Many (requires bridge table)

Best Practices:
- Use surrogate keys (integers)
- Create a dedicated date table
- Avoid bi-directional relationships
- Hide foreign keys from report view`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential DAX Formulas"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// BASIC AGGREGATIONS
Total Sales = SUM(Sales[Amount])
Average Price = AVERAGE(Products[Price])
Order Count = COUNTROWS(Orders)
Distinct Customers = DISTINCTCOUNT(Sales[CustomerID])

// TIME INTELLIGENCE
Sales YTD = TOTALYTD(SUM(Sales[Amount]), 'Date'[Date])
Sales MTD = TOTALMTD(SUM(Sales[Amount]), 'Date'[Date])

Sales Last Year =
CALCULATE(
    SUM(Sales[Amount]),
    SAMEPERIODLASTYEAR('Date'[Date])
)

YoY Growth =
DIVIDE(
    [Total Sales] - [Sales Last Year],
    [Sales Last Year],
    0
)

// CALCULATE - The Most Powerful Function
Sales in USA =
CALCULATE(
    SUM(Sales[Amount]),
    Customers[Country] = "USA"
)

Sales Top 10 Products =
CALCULATE(
    SUM(Sales[Amount]),
    TOPN(10, Products, [Total Sales], DESC)
)

// CONTEXT MODIFICATION
All Sales = CALCULATE(SUM(Sales[Amount]), ALL(Sales))

% of Total =
DIVIDE(
    [Total Sales],
    CALCULATE([Total Sales], ALL(Products)),
    0
)

// ITERATORS
Weighted Average =
SUMX(
    Sales,
    Sales[Quantity] * Sales[UnitPrice]
) / SUM(Sales[Quantity])

Running Total =
CALCULATE(
    SUM(Sales[Amount]),
    FILTER(
        ALL('Date'),
        'Date'[Date] <= MAX('Date'[Date])
    )
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Visualization Types"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Bar/Column Charts:"}
                    </strong>
                    {" Compare values across categories"}
                  </li>
                  <li>
                    <strong>
                      {"Line Charts:"}
                    </strong>
                    {" Show trends over time"}
                  </li>
                  <li>
                    <strong>
                      {"Pie/Donut Charts:"}
                    </strong>
                    {" Show parts of a whole (use sparingly)"}
                  </li>
                  <li>
                    <strong>
                      {"Cards:"}
                    </strong>
                    {" Display single KPI values"}
                  </li>
                  <li>
                    <strong>
                      {"Tables/Matrix:"}
                    </strong>
                    {" Detailed data with drill-down"}
                  </li>
                  <li>
                    <strong>
                      {"Maps:"}
                    </strong>
                    {" Geographic data visualization"}
                  </li>
                  <li>
                    <strong>
                      {"Scatter Charts:"}
                    </strong>
                    {" Show correlation between variables"}
                  </li>
                  <li>
                    <strong>
                      {"Gauges:"}
                    </strong>
                    {" Progress toward a goal"}
                  </li>
                  <li>
                    <strong>
                      {"Slicers:"}
                    </strong>
                    {" Interactive filters for reports"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Dashboard Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start with KPIs:"}
                    </strong>
                    {" Place key metrics at the top"}
                  </li>
                  <li>
                    <strong>
                      {"Use consistent colors:"}
                    </strong>
                    {" Create a color theme"}
                  </li>
                  <li>
                    <strong>
                      {"Limit visuals per page:"}
                    </strong>
                    {" 5-7 visuals maximum"}
                  </li>
                  <li>
                    <strong>
                      {"Add context:"}
                    </strong>
                    {" Include titles, labels, and tooltips"}
                  </li>
                  <li>
                    <strong>
                      {"Enable drill-through:"}
                    </strong>
                    {" Allow users to explore details"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize performance:"}
                    </strong>
                    {" Limit data volume, use aggregations"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Publishing and Sharing"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Sharing Options:
1. Publish to Power BI Service
   - Workspaces for collaboration
   - App for end users

2. Export Options
   - PDF reports
   - PowerPoint presentations
   - Excel data export

3. Embed Options
   - SharePoint
   - Teams
   - Custom applications

4. Security
   - Row-level security (RLS)
   - Workspace roles (Admin, Member, Contributor, Viewer)
   - Sensitivity labels`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Power BI with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers Power BI from basics to advanced dashboard creation. Build impressive visualizations with guidance from industry experts."}
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
                  <Link href="/data-analytics/articles/dax" className="related-article-card">
                    <h4>
                      {"DAX Formulas"}
                    </h4>
                    {" "}
                    <p>
                      {"Master Power BI calculations"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/tableau" className="related-article-card">
                    <h4>
                      {"Tableau"}
                    </h4>
                    {" "}
                    <p>
                      {"Alternative visualization tool"}
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
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Power BI."} />
    </>
  );
}
