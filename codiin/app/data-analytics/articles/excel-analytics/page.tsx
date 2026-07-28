import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Excel for Data Analytics: Advanced Techniques",
  description: "Learn Advanced Excel for Data Analytics - pivot tables, VLOOKUP, INDEX-MATCH, Power Query, and dashboard creation for business analysis.",
  keywords: ["Excel analytics tutorial", "pivot tables", "VLOOKUP", "INDEX MATCH", "Excel dashboards", "data analysis Excel"],
  alternates: { canonical: "/data-analytics/articles/excel-analytics" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/excel-analytics",
    title: "Excel for Data Analytics: Advanced Techniques",
    description: "Master Excel for professional data analysis.",
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
  "headline": "Excel for Data Analytics: Advanced Techniques",
  "description": "Complete guide to Excel for data analytics",
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

export default function DataAnalyticsExcelAnalyticsPage() {
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
                {"Excel Analytics"}
              </span>
            </div>
            <h1>
              {"Excel for Data Analytics"}
            </h1>
            <p className="article-subtitle">
              {"Advanced Techniques for Business Analysis"}
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
                  {"Why Excel for Analytics?"}
                </h2>
                <p>
                  {"Excel remains the most widely used tool for data analysis in business. It's accessible, powerful, and often the first tool analysts reach for. Mastering Excel is essential for any data professional."}
                </p>
                <p>
                  {"Modern Excel includes Power Query for data transformation, Power Pivot for data modeling, and a rich set of analytical functions."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential Lookup Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// VLOOKUP - Vertical Lookup
=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])

// Example: Find product price
=VLOOKUP(A2, Products!$A$2:$C$100, 3, FALSE)

// HLOOKUP - Horizontal Lookup
=HLOOKUP(lookup_value, table_array, row_index, [range_lookup])

// INDEX-MATCH - More Flexible Alternative
=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))

// Example: Look up in any direction
=INDEX(C2:C100, MATCH(A2, A2:A100, 0))

// Two-way lookup
=INDEX(B2:E10, MATCH(G1, A2:A10, 0), MATCH(G2, B1:E1, 0))

// XLOOKUP (Excel 365) - Modern Replacement
=XLOOKUP(lookup_value, lookup_array, return_array, [not_found], [match_mode])

// Example: With default value
=XLOOKUP(A2, Products[ID], Products[Price], "Not Found")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Conditional Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// SUMIF - Sum with condition
=SUMIF(range, criteria, [sum_range])
=SUMIF(A2:A100, "Electronics", B2:B100)

// SUMIFS - Multiple conditions
=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)
=SUMIFS(Sales, Region, "East", Year, 2024)

// COUNTIF / COUNTIFS
=COUNTIF(A2:A100, ">100")
=COUNTIFS(Status, "Complete", Region, "North")

// AVERAGEIF / AVERAGEIFS
=AVERAGEIF(A2:A100, "<>0", B2:B100)

// IF with multiple conditions
=IF(AND(A2>100, B2="Active"), "High", "Low")
=IF(OR(A2="Red", A2="Orange"), "Warning", "OK")

// IFS (multiple conditions)
=IFS(A2>=90, "A", A2>=80, "B", A2>=70, "C", TRUE, "F")

// Nested IF alternative
=SWITCH(A2, "A", 4, "B", 3, "C", 2, "D", 1, 0)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Text Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Extract text
=LEFT(A2, 3)         // First 3 characters
=RIGHT(A2, 4)        // Last 4 characters
=MID(A2, 2, 5)       // 5 chars starting at position 2

// Find and extract
=FIND("@", A2)       // Position of @ (case-sensitive)
=SEARCH("text", A2)  // Position (not case-sensitive)

// Text manipulation
=TRIM(A2)            // Remove extra spaces
=CLEAN(A2)           // Remove non-printable characters
=UPPER(A2)           // Convert to uppercase
=LOWER(A2)           // Convert to lowercase
=PROPER(A2)          // Title case

// Combine text
=CONCAT(A2, " ", B2)
=TEXTJOIN(", ", TRUE, A2:A10)

// Split text (Excel 365)
=TEXTSPLIT(A2, " ")  // Split by space

// Extract numbers from text
=SUMPRODUCT(MID(0&A2, LARGE(INDEX(ISNUMBER(--MID(A2,
  ROW($1:$25),1))*ROW($1:$25),0), ROW($1:$25))+1,1)*10^ROW($1:$25)/10)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Date Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Current date/time
=TODAY()             // Current date
=NOW()               // Current date and time

// Extract components
=YEAR(A2)            // Year from date
=MONTH(A2)           // Month number
=DAY(A2)             // Day of month
=WEEKDAY(A2)         // Day of week (1=Sunday)
=WEEKNUM(A2)         // Week number

// Date calculations
=DATEDIF(A2, B2, "Y")   // Years between dates
=DATEDIF(A2, B2, "M")   // Months between dates
=DATEDIF(A2, B2, "D")   // Days between dates
=NETWORKDAYS(A2, B2)    // Working days

// Create dates
=DATE(2024, 1, 15)      // Create date
=EOMONTH(A2, 0)         // End of month
=EOMONTH(A2, -1)        // End of previous month

// Fiscal year (if starts in April)
=IF(MONTH(A2)>=4, YEAR(A2), YEAR(A2)-1)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Pivot Tables"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Pivot Table Best Practices:

1. DATA PREPARATION
   - Use tables (Ctrl+T) for auto-expanding ranges
   - Clean data: no blanks, consistent formatting
   - Include headers

2. STRUCTURE
   - Rows: Categories to analyze
   - Columns: Second dimension (often time)
   - Values: Metrics (Sum, Count, Average)
   - Filters: High-level filtering

3. CALCULATED FIELDS
   - Create custom calculations
   - PivotTable Analyze → Fields, Items & Sets

   Example: Profit Margin
   = Profit / Revenue

4. GROUPING
   - Group dates by Month/Quarter/Year
   - Group numbers into ranges
   - Right-click → Group

5. SLICERS
   - Visual filters
   - Connect to multiple pivot tables
   - PivotTable Analyze → Insert Slicer

6. PIVOT CHARTS
   - Linked to pivot table
   - Updates automatically
   - Best for dashboards`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Power Query"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Power Query Transformations:

1. IMPORT DATA
   - Data → Get Data → From File/Database/Web

2. COMMON STEPS
   - Remove columns
   - Filter rows
   - Change data types
   - Replace values
   - Split columns
   - Merge columns
   - Pivot/Unpivot
   - Group by

3. MERGE QUERIES (JOIN)
   - Left Outer: All from left, matching from right
   - Right Outer: All from right, matching from left
   - Full Outer: All from both
   - Inner: Only matching rows

4. APPEND QUERIES (UNION)
   - Stack tables vertically
   - Columns must match

5. CUSTOM COLUMNS
   // M Language examples
   = [Price] * [Quantity]
   = if [Status] = "Active" then "Yes" else "No"
   = Text.Upper([Name])

6. REFRESH
   - Manual: Data → Refresh All
   - Automatic: Set refresh on file open`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Array Formulas (Excel 365)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Dynamic arrays spill automatically

// UNIQUE - Get unique values
=UNIQUE(A2:A100)

// SORT - Sort data
=SORT(A2:C100, 2, -1)  // Sort by column 2, descending

// FILTER - Filter data
=FILTER(A2:C100, B2:B100>100, "No results")

// SORTBY - Sort by another column
=SORTBY(A2:C100, D2:D100, -1)

// SEQUENCE - Generate number sequence
=SEQUENCE(10)           // 1 to 10
=SEQUENCE(5, 3, 0, 2)   // 5 rows, 3 cols, start 0, step 2

// Combine for powerful analysis
// Top 5 products by sales
=TAKE(SORT(UNIQUE(A2:B100), 2, -1), 5)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dashboard Techniques"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Named Ranges:"}
                    </strong>
                    {" Use descriptive names for key ranges"}
                  </li>
                  <li>
                    <strong>
                      {"Data Validation:"}
                    </strong>
                    {" Create dropdowns for user input"}
                  </li>
                  <li>
                    <strong>
                      {"Conditional Formatting:"}
                    </strong>
                    {" Highlight important values"}
                  </li>
                  <li>
                    <strong>
                      {"Sparklines:"}
                    </strong>
                    {" Mini charts in cells"}
                  </li>
                  <li>
                    <strong>
                      {"Form Controls:"}
                    </strong>
                    {" Buttons, checkboxes, sliders"}
                  </li>
                  <li>
                    <strong>
                      {"Camera Tool:"}
                    </strong>
                    {" Live snapshots of ranges"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Excel with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Analytics program covers advanced Excel from formulas to Power Query. Build professional dashboards with guidance from industry experts."}
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
                      {"Beyond Excel visualization"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/sql-analytics" className="related-article-card">
                    <h4>
                      {"SQL for Analytics"}
                    </h4>
                    {" "}
                    <p>
                      {"Query large datasets"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/pandas" className="related-article-card">
                    <h4>
                      {"Pandas"}
                    </h4>
                    {" "}
                    <p>
                      {"Python alternative to Excel"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Excel Analytics."} />
    </>
  );
}
