import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "DAX: Master Power BI Calculations",
  description: "Learn DAX (Data Analysis Expressions) for Power BI - measures, calculated columns, time intelligence, and advanced formulas for business analytics.",
  keywords: ["DAX tutorial", "Power BI DAX", "DAX formulas", "time intelligence", "CALCULATE function", "DAX measures"],
  alternates: { canonical: "/data-analytics/articles/dax" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/dax",
    title: "DAX: Master Power BI Calculations",
    description: "Learn DAX formulas for powerful Power BI analytics.",
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
  "headline": "DAX: Master Power BI Calculations",
  "description": "Complete guide to DAX for Power BI",
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

export default function DataAnalyticsDaxPage() {
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
                {"DAX"}
              </span>
            </div>
            <h1>
              {"DAX Formulas"}
            </h1>
            <p className="article-subtitle">
              {"Master Power BI Calculations"}
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
                  {"What is DAX?"}
                </h2>
                <p>
                  {"DAX (Data Analysis Expressions) is the formula language used in Power BI, Power Pivot, and Analysis Services. It enables you to create custom calculations, from simple sums to complex business logic."}
                </p>
                <p>
                  {"DAX is essential for creating meaningful metrics, KPIs, and analytical calculations that go beyond basic aggregations."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Measures vs Calculated Columns"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Measures:"}
                    </strong>
                    {" Calculated at query time based on filter context. Use for aggregations and KPIs."}
                  </li>
                  <li>
                    <strong>
                      {"Calculated Columns:"}
                    </strong>
                    {" Computed row by row when data is refreshed. Use for categorization or row-level logic."}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// MEASURE - Aggregates based on context
Total Sales = SUM(Sales[Amount])

// CALCULATED COLUMN - Fixed value per row
Profit Margin = Sales[Profit] / Sales[Revenue]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic Aggregations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Sum
Total Revenue = SUM(Sales[Revenue])

// Count
Order Count = COUNTROWS(Orders)

// Distinct Count
Unique Customers = DISTINCTCOUNT(Sales[CustomerID])

// Average
Avg Order Value = AVERAGE(Orders[Amount])

// Min / Max
First Order Date = MIN(Orders[OrderDate])
Latest Order Date = MAX(Orders[OrderDate])

// Conditional Count
Active Customers = COUNTROWS(
    FILTER(Customers, Customers[Status] = "Active")
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CALCULATE - The Most Important Function"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// CALCULATE modifies filter context
// Syntax: CALCULATE(expression, filter1, filter2, ...)

// Sales for specific category
Electronics Sales = CALCULATE(
    SUM(Sales[Amount]),
    Products[Category] = "Electronics"
)

// Sales for multiple conditions
US Electronics Sales = CALCULATE(
    SUM(Sales[Amount]),
    Products[Category] = "Electronics",
    Customers[Country] = "USA"
)

// Remove filters with ALL
Total Sales All Products = CALCULATE(
    SUM(Sales[Amount]),
    ALL(Products)
)

// Percentage of total
% of Total = DIVIDE(
    SUM(Sales[Amount]),
    CALCULATE(SUM(Sales[Amount]), ALL(Sales)),
    0
)

// Keep certain filters, remove others
% of Category = DIVIDE(
    SUM(Sales[Amount]),
    CALCULATE(
        SUM(Sales[Amount]),
        ALLEXCEPT(Products, Products[Category])
    ),
    0
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Time Intelligence"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Requires a proper Date table!

// Year to Date
Sales YTD = TOTALYTD(
    SUM(Sales[Amount]),
    'Date'[Date]
)

// Month to Date
Sales MTD = TOTALMTD(
    SUM(Sales[Amount]),
    'Date'[Date]
)

// Quarter to Date
Sales QTD = TOTALQTD(
    SUM(Sales[Amount]),
    'Date'[Date]
)

// Same Period Last Year
Sales LY = CALCULATE(
    SUM(Sales[Amount]),
    SAMEPERIODLASTYEAR('Date'[Date])
)

// Year over Year Growth
YoY Growth =
VAR CurrentYear = SUM(Sales[Amount])
VAR LastYear = CALCULATE(
    SUM(Sales[Amount]),
    SAMEPERIODLASTYEAR('Date'[Date])
)
RETURN DIVIDE(CurrentYear - LastYear, LastYear, 0)

// Previous Month
Sales PM = CALCULATE(
    SUM(Sales[Amount]),
    PREVIOUSMONTH('Date'[Date])
)

// Rolling 12 Months
Sales Rolling 12M = CALCULATE(
    SUM(Sales[Amount]),
    DATESINPERIOD(
        'Date'[Date],
        MAX('Date'[Date]),
        -12,
        MONTH
    )
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Iterator Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// SUMX - Sum of expression evaluated row by row
Total Revenue = SUMX(
    Sales,
    Sales[Quantity] * Sales[UnitPrice]
)

// AVERAGEX
Avg Revenue Per Customer = AVERAGEX(
    VALUES(Sales[CustomerID]),
    [Total Revenue]
)

// MAXX / MINX
Highest Customer Revenue = MAXX(
    VALUES(Customers[CustomerID]),
    [Total Revenue]
)

// COUNTX with condition
Orders Above 100 = COUNTX(
    Orders,
    IF(Orders[Amount] > 100, 1, BLANK())
)

// RANKX
Customer Rank = RANKX(
    ALL(Customers),
    [Total Revenue],
    ,
    DESC,
    DENSE
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Variables for Cleaner Code"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Variables improve readability and performance
Profit Margin % =
VAR TotalRevenue = SUM(Sales[Revenue])
VAR TotalCost = SUM(Sales[Cost])
VAR Profit = TotalRevenue - TotalCost
RETURN
    DIVIDE(Profit, TotalRevenue, 0)

// Complex calculation with variables
Customer Lifetime Value =
VAR AvgOrderValue = AVERAGEX(
    VALUES(Orders[OrderID]),
    CALCULATE(SUM(Orders[Amount]))
)
VAR OrderFrequency = COUNTROWS(Orders) /
    DATEDIFF(MIN(Orders[Date]), MAX(Orders[Date]), MONTH)
VAR CustomerLifespan = 24 // months
RETURN
    AvgOrderValue * OrderFrequency * CustomerLifespan`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Logical Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// IF
Status = IF([Total Sales] > 10000, "High", "Low")

// Nested IF
Performance =
IF([Growth] > 0.1, "Excellent",
    IF([Growth] > 0, "Good",
        IF([Growth] > -0.1, "Fair", "Poor")
    )
)

// SWITCH (cleaner than nested IF)
Performance = SWITCH(
    TRUE(),
    [Growth] > 0.1, "Excellent",
    [Growth] > 0, "Good",
    [Growth] > -0.1, "Fair",
    "Poor"
)

// AND / OR
High Value Active =
IF(
    AND([Total Sales] > 10000, [Status] = "Active"),
    "Yes",
    "No"
)

// COALESCE (first non-blank)
Display Name = COALESCE(
    Customers[Nickname],
    Customers[FirstName],
    "Unknown"
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use measures over calculated columns:"}
                    </strong>
                    {" Better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Create a Date table:"}
                    </strong>
                    {" Required for time intelligence"}
                  </li>
                  <li>
                    <strong>
                      {"Use variables:"}
                    </strong>
                    {" Improve readability and debug"}
                  </li>
                  <li>
                    <strong>
                      {"Use DIVIDE:"}
                    </strong>
                    {" Handles division by zero gracefully"}
                  </li>
                  <li>
                    <strong>
                      {"Format your code:"}
                    </strong>
                    {" Use line breaks and indentation"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid circular references:"}
                    </strong>
                    {" Measures can't reference themselves"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master DAX with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers DAX from basics to advanced calculations. Create powerful Power BI measures with guidance from industry experts."}
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
                      {"Complete Power BI guide"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/sql-analytics" className="related-article-card">
                    <h4>
                      {"SQL for Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Query data for Power BI"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/excel-analytics" className="related-article-card">
                    <h4>
                      {"Excel Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Excel formulas foundation"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn DAX."} />
    </>
  );
}
