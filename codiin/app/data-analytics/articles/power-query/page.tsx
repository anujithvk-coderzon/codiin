import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Power Query: Complete Guide for Excel & Power BI",
  description: "Master Power Query for data transformation in Excel and Power BI. Learn M language, ETL processes, and automated data cleaning workflows.",
  keywords: ["Power Query", "M language", "Excel Power Query", "Power BI data transformation", "ETL", "data cleaning automation"],
  alternates: { canonical: "/data-analytics/articles/power-query" },
  openGraph: {
    type: "article",
    url: "/data-analytics/articles/power-query",
    title: "Power Query: Data Transformation Made Easy",
    description: "Automate data cleaning and transformation in Excel and Power BI.",
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
  "headline": "Power Query: Data Transformation Made Easy",
  "description": "Complete guide to Power Query for data analytics",
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

export default function DataAnalyticsPowerQueryPage() {
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
                {"Power Query"}
              </span>
            </div>
            <h1>
              {"Power Query"}
            </h1>
            <p className="article-subtitle">
              {"Data Transformation Made Easy for Excel & Power BI"}
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
                  {"What is Power Query?"}
                </h2>
                <p>
                  {"Power Query is Microsoft's "}
                  <strong>
                    {"data transformation and preparation tool"}
                  </strong>
                  {" built into Excel and Power BI. It lets you connect to data sources, clean and transform data, and automate the entire process - all without writing complex formulas."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Power Query Workflow

┌─────────────────────────────────────────────────────────────────┐
│                    POWER QUERY PROCESS                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   DATA SOURCES              TRANSFORM                 OUTPUT    │
│  ┌───────────┐             ┌─────────┐             ┌─────────┐ │
│  │   Excel   │             │ Clean   │             │  Excel  │ │
│  │   CSV     │ ──────────► │ Shape   │ ──────────► │  Table  │ │
│  │   SQL     │   CONNECT   │ Merge   │   LOAD      │  or     │ │
│  │   Web     │             │ Filter  │             │Power BI │ │
│  │   JSON    │             │ Group   │             │  Model  │ │
│  └───────────┘             └─────────┘             └─────────┘ │
│                                                                  │
│   All steps are RECORDED and can be REFRESHED automatically!   │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"Why Use Power Query?"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"No coding required:"}
                    </strong>
                    {" Point-and-click interface for most tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Repeatable:"}
                    </strong>
                    {" Steps are recorded and can be refreshed with new data"}
                  </li>
                  <li>
                    <strong>
                      {"Multiple sources:"}
                    </strong>
                    {" Connect to 100+ data sources"}
                  </li>
                  <li>
                    <strong>
                      {"Powerful:"}
                    </strong>
                    {" Handle millions of rows efficiently"}
                  </li>
                  <li>
                    <strong>
                      {"Integrated:"}
                    </strong>
                    {" Built into Excel and Power BI"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <h3>
                  {"In Excel"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Opening Power Query in Excel:

1. Go to: Data tab → Get Data
2. Or: Data tab → Get & Transform Data section

Quick Access:
• From Table: Select data → Data → From Table/Range
• From File: Data → Get Data → From File → From Workbook/CSV
• From Database: Data → Get Data → From Database → From SQL Server`}</code></pre>
                </div>
                <h3>
                  {"In Power BI"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Opening Power Query in Power BI:

1. Home tab → Transform Data
2. Or: When you load data, click "Transform Data" instead of "Load"

The Power Query Editor opens with your data ready to transform.`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"The Power Query Editor"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Power Query Editor Layout:

┌─────────────────────────────────────────────────────────────────┐
│  File  Home  Transform  Add Column  View  Help                  │
├──────────┬──────────────────────────────────────┬───────────────┤
│          │                                      │               │
│ QUERIES  │         DATA PREVIEW                 │ QUERY         │
│          │                                      │ SETTINGS      │
│ □ Sales  │  ┌────┬────────┬────────┬────────┐  │               │
│ □ Products│  │ ID │ Name   │ Price  │ Date   │  │ Properties   │
│ □ Region │  ├────┼────────┼────────┼────────┤  │ Name: Sales  │
│          │  │ 1  │ Widget │ $10.00 │ 1/1/24 │  │               │
│          │  │ 2  │ Gadget │ $25.00 │ 1/2/24 │  │ APPLIED      │
│          │  │ 3  │ Tool   │ $15.00 │ 1/3/24 │  │ STEPS        │
│          │  └────┴────────┴────────┴────────┘  │               │
│          │                                      │ ○ Source     │
│          │                                      │ ○ Changed Type│
│          │                                      │ ○ Removed Cols│
│          │                                      │ ○ Filtered   │
└──────────┴──────────────────────────────────────┴───────────────┘

Key Areas:
• Queries Pane (left): List of all your queries
• Data Preview (center): See your data and changes
• Query Settings (right): Properties and Applied Steps
• Formula Bar (top): Shows M code for current step`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Transformations"}
                </h2>
                <h3>
                  {"1. Remove Columns"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Remove unwanted columns:

UI Method:
• Right-click column header → Remove
• Select multiple columns → Right-click → Remove Columns
• Home → Remove Columns → Remove Other Columns (keep selected only)

M Code:
= Table.RemoveColumns(PreviousStep, {"Column1", "Column2"})
= Table.SelectColumns(PreviousStep, {"Name", "Price", "Date"})`}</code></pre>
                </div>
                <h3>
                  {"2. Filter Rows"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Filter data:

UI Method:
• Click dropdown arrow on column header
• Uncheck values to exclude
• Use filters: Text Filters, Number Filters, Date Filters

Common Filters:
• Equals, Does Not Equal
• Contains, Does Not Contain
• Begins With, Ends With
• Greater Than, Less Than
• Between
• Top N, Bottom N

M Code:
= Table.SelectRows(Source, each [Price] > 100)
= Table.SelectRows(Source, each Text.Contains([Name], "Widget"))
= Table.SelectRows(Source, each [Date] >= #date(2024, 1, 1))`}</code></pre>
                </div>
                <h3>
                  {"3. Change Data Types"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Set correct data types:

UI Method:
• Click icon left of column name
• Select: Text, Whole Number, Decimal, Date, etc.
• Or: Transform → Data Type

Common Types:
• ABC → Text
• 123 → Whole Number
• 1.2 → Decimal Number
• 📅 → Date
• 🕐 → Date/Time
• ✓/✗ → True/False

M Code:
= Table.TransformColumnTypes(Source, {
    {"Price", type number},
    {"Date", type date},
    {"Quantity", Int64.Type}
})`}</code></pre>
                </div>
                <h3>
                  {"4. Split Columns"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Split one column into multiple:

Example: "John Smith" → "John" and "Smith"

UI Method:
• Select column → Transform → Split Column
• By Delimiter: comma, space, tab, custom
• By Number of Characters
• By Positions

Split "John Smith, Manager" by comma:
┌───────────────────┐     ┌──────────────┬───────────┐
│ Full Name         │ ──► │ Name         │ Title     │
├───────────────────┤     ├──────────────┼───────────┤
│ John Smith, Mgr   │     │ John Smith   │ Mgr       │
│ Jane Doe, Director│     │ Jane Doe     │ Director  │
└───────────────────┘     └──────────────┴───────────┘

M Code:
= Table.SplitColumn(Source, "FullName",
    Splitter.SplitTextByDelimiter(", "),
    {"Name", "Title"})`}</code></pre>
                </div>
                <h3>
                  {"5. Merge Columns"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Combine multiple columns:

UI Method:
• Select columns (Ctrl+click)
• Transform → Merge Columns
• Choose separator

Example:
┌──────────┬───────────┐     ┌─────────────────────┐
│ First    │ Last      │ ──► │ Full Name           │
├──────────┼───────────┤     ├─────────────────────┤
│ John     │ Smith     │     │ John Smith          │
│ Jane     │ Doe       │     │ Jane Doe            │
└──────────┴───────────┘     └─────────────────────┘

M Code:
= Table.CombineColumns(Source,
    {"First", "Last"},
    Combiner.CombineTextByDelimiter(" "),
    "Full Name")`}</code></pre>
                </div>
                <h3>
                  {"6. Replace Values"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Replace or clean values:

UI Method:
• Select column → Transform → Replace Values
• Enter value to find and replacement

Common Uses:
• Fix typos: "Recieved" → "Received"
• Standardize: "USA", "US" → "United States"
• Remove characters: Replace "$" with ""
• Handle nulls: Replace null with 0

M Code:
= Table.ReplaceValue(Source, "USA", "United States",
    Replacer.ReplaceText, {"Country"})

= Table.ReplaceValue(Source, null, 0,
    Replacer.ReplaceValue, {"Quantity"})`}</code></pre>
                </div>
                <h3>
                  {"7. Group By (Aggregate)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Summarize data by groups:

UI Method:
• Transform → Group By
• Select grouping columns
• Add aggregations: Sum, Average, Count, Min, Max

Example: Sales by Region
┌─────────┬────────┬───────┐     ┌─────────┬─────────────┐
│ Region  │Product │ Sales │     │ Region  │ Total Sales │
├─────────┼────────┼───────┤     ├─────────┼─────────────┤
│ North   │ A      │ 100   │     │ North   │ 350         │
│ North   │ B      │ 250   │ ──► │ South   │ 500         │
│ South   │ A      │ 300   │     │ East    │ 200         │
│ South   │ B      │ 200   │     └─────────┴─────────────┘
│ East    │ A      │ 200   │
└─────────┴────────┴───────┘

M Code:
= Table.Group(Source, {"Region"}, {
    {"Total Sales", each List.Sum([Sales]), type number},
    {"Order Count", each Table.RowCount(_), Int64.Type},
    {"Avg Sale", each List.Average([Sales]), type number}
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Merging Queries (JOINs)"}
                </h2>
                <p>
                  {"Combine data from multiple tables:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Merge Queries (like SQL JOIN):

UI Method:
• Home → Merge Queries
• Select tables and matching columns
• Choose join type

Join Types:
┌────────────────────────────────────────────────────────────────┐
│  Type              │  Description                              │
├────────────────────────────────────────────────────────────────┤
│  Left Outer        │  All from left + matches from right       │
│  Right Outer       │  All from right + matches from left       │
│  Full Outer        │  All from both tables                     │
│  Inner             │  Only matching rows                       │
│  Left Anti         │  Left rows with NO match in right         │
│  Right Anti        │  Right rows with NO match in left         │
└────────────────────────────────────────────────────────────────┘

Example: Add Product Names to Sales

Sales Table:              Products Table:
┌──────────┬──────────┐   ┌──────────┬────────────┐
│ProductID │ Quantity │   │ProductID │ Name       │
├──────────┼──────────┤   ├──────────┼────────────┤
│ 101      │ 5        │   │ 101      │ Widget     │
│ 102      │ 3        │   │ 102      │ Gadget     │
└──────────┴──────────┘   └──────────┴────────────┘

Result (Left Outer Join on ProductID):
┌──────────┬──────────┬────────────┐
│ProductID │ Quantity │ Name       │
├──────────┼──────────┼────────────┤
│ 101      │ 5        │ Widget     │
│ 102      │ 3        │ Gadget     │
└──────────┴──────────┴────────────┘

M Code:
= Table.NestedJoin(Sales, {"ProductID"},
    Products, {"ProductID"},
    "Products", JoinKind.LeftOuter)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Appending Queries (UNION)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Stack tables on top of each other:

UI Method:
• Home → Append Queries
• Select tables to combine

Example: Combine monthly sales files

January:                  February:
┌──────┬───────┐         ┌──────┬───────┐
│ Date │ Sales │         │ Date │ Sales │
├──────┼───────┤         ├──────┼───────┤
│ 1/1  │ 100   │         │ 2/1  │ 150   │
│ 1/2  │ 120   │         │ 2/2  │ 180   │
└──────┴───────┘         └──────┴───────┘

Result (Append):
┌──────┬───────┐
│ Date │ Sales │
├──────┼───────┤
│ 1/1  │ 100   │
│ 1/2  │ 120   │
│ 2/1  │ 150   │
│ 2/2  │ 180   │
└──────┴───────┘

M Code:
= Table.Combine({January, February, March})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Unpivot & Pivot"}
                </h2>
                <h3>
                  {"Unpivot (Wide to Long)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Transform columns into rows (normalize data):

Before (Wide format - hard to analyze):
┌─────────┬─────────┬─────────┬─────────┐
│ Product │ Jan     │ Feb     │ Mar     │
├─────────┼─────────┼─────────┼─────────┤
│ Widget  │ 100     │ 150     │ 200     │
│ Gadget  │ 80      │ 90      │ 120     │
└─────────┴─────────┴─────────┴─────────┘

After Unpivot (Long format - easy to analyze):
┌─────────┬─────────┬─────────┐
│ Product │ Month   │ Sales   │
├─────────┼─────────┼─────────┤
│ Widget  │ Jan     │ 100     │
│ Widget  │ Feb     │ 150     │
│ Widget  │ Mar     │ 200     │
│ Gadget  │ Jan     │ 80      │
│ Gadget  │ Feb     │ 90      │
│ Gadget  │ Mar     │ 120     │
└─────────┴─────────┴─────────┘

UI Method:
• Select columns to unpivot (Jan, Feb, Mar)
• Transform → Unpivot Columns

M Code:
= Table.UnpivotOtherColumns(Source, {"Product"},
    "Month", "Sales")`}</code></pre>
                </div>
                <h3>
                  {"Pivot (Long to Wide)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Transform rows into columns (summarize):

UI Method:
• Select column to pivot (e.g., Month)
• Transform → Pivot Column
• Choose values column and aggregation

M Code:
= Table.Pivot(Source,
    List.Distinct(Source[Month]),
    "Month", "Sales", List.Sum)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Custom Columns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Add calculated columns:

UI Method:
• Add Column → Custom Column
• Enter formula using M language

Common Examples:

// Concatenate text
[FirstName] & " " & [LastName]

// Math calculations
[Price] * [Quantity]
[Sales] * 0.1  // 10% commission

// Conditional logic
if [Amount] > 1000 then "High" else "Low"

if [Status] = "Active" then 1
else if [Status] = "Pending" then 2
else 0

// Date calculations
Date.Year([OrderDate])
Date.Month([OrderDate])
Date.DayOfWeek([OrderDate])
Duration.Days(DateTime.LocalNow() - [OrderDate])

// Text functions
Text.Upper([Name])
Text.Start([Code], 3)  // First 3 characters
Text.Contains([Description], "urgent")

// Null handling
if [Value] = null then 0 else [Value]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Parameters"}
                </h2>
                <p>
                  {"Make your queries dynamic:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Creating Parameters:

UI Method:
• Home → Manage Parameters → New Parameter
• Set Name, Type, and Default Value

Example: Date Range Parameter

1. Create parameters:
   - StartDate (Date) = 1/1/2024
   - EndDate (Date) = 12/31/2024

2. Use in filter:
   = Table.SelectRows(Source, each
       [OrderDate] >= StartDate and
       [OrderDate] <= EndDate
   )

3. Change parameters to refresh with different dates!

Use Cases:
• File paths (change source location)
• Date ranges (reporting periods)
• Filter values (specific regions, products)
• Connection strings (dev vs prod databases)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"M Language Basics"}
                </h2>
                <p>
                  {"Power Query uses M (Power Query Formula Language) behind the scenes:"}
                </p>
                <div className="code-block">
                  <pre><code>{`M Language Fundamentals:

// Structure of a query
let
    Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],
    Step2 = Table.TransformColumnTypes(Source, {{"Date", type date}}),
    Step3 = Table.SelectRows(Step2, each [Amount] > 100),
    Final = Table.RemoveColumns(Step3, {"TempColumn"})
in
    Final

Key Concepts:

// Variables (steps)
StepName = expression,

// each keyword (row-by-row operation)
each [ColumnName] > 100

// _ refers to current row
each _[Price] * _[Quantity]

// Accessing columns
[ColumnName]           // Current table
TableName[ColumnName]  // Specific table

// Common functions
Text.Upper([Name])
Number.Round([Price], 2)
Date.Year([Date])
List.Sum({1, 2, 3})
Table.RowCount(Source)

// Conditional
if condition then value1 else value2

// Try-otherwise (error handling)
try [Value] otherwise 0`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Practical Example: Monthly Report Automation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Scenario: Automate monthly sales report

Steps:
1. Connect to source files
2. Combine all files from folder
3. Clean and transform data
4. Add calculated columns
5. Load to Excel/Power BI

let
    // Step 1: Get all CSV files from folder
    Source = Folder.Files("C:\\Sales Data\\"),

    // Step 2: Filter for CSV files only
    FilteredFiles = Table.SelectRows(Source, each
        Text.EndsWith([Name], ".csv")),

    // Step 3: Add custom column to read each file
    AddContent = Table.AddColumn(FilteredFiles, "Data", each
        Csv.Document([Content])),

    // Step 4: Expand the data
    ExpandedData = Table.ExpandTableColumn(AddContent, "Data",
        {"Date", "Product", "Region", "Sales", "Quantity"}),

    // Step 5: Set data types
    TypedData = Table.TransformColumnTypes(ExpandedData, {
        {"Date", type date},
        {"Sales", type number},
        {"Quantity", Int64.Type}
    }),

    // Step 6: Remove unnecessary columns
    CleanData = Table.SelectColumns(TypedData,
        {"Date", "Product", "Region", "Sales", "Quantity"}),

    // Step 7: Add calculated columns
    WithCalculations = Table.AddColumn(CleanData, "Revenue",
        each [Sales] * [Quantity], type number),

    // Step 8: Add Month column for grouping
    WithMonth = Table.AddColumn(WithCalculations, "Month",
        each Date.ToText([Date], "yyyy-MM"), type text),

    // Step 9: Filter out invalid data
    ValidData = Table.SelectRows(WithMonth, each
        [Sales] > 0 and [Quantity] > 0)

in
    ValidData

// Now just click REFRESH to update with new monthly files!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Name your steps clearly:"}
                    </strong>
                    {" Rename \"Changed Type\" to \"Set Column Types\""}
                  </li>
                  <li>
                    <strong>
                      {"Remove unnecessary columns early:"}
                    </strong>
                    {" Improves performance"}
                  </li>
                  <li>
                    <strong>
                      {"Set data types explicitly:"}
                    </strong>
                    {" Don't rely on auto-detection"}
                  </li>
                  <li>
                    <strong>
                      {"Use parameters:"}
                    </strong>
                    {" For file paths, dates, filters"}
                  </li>
                  <li>
                    <strong>
                      {"Document with comments:"}
                    </strong>
                    {" Add step descriptions"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors:"}
                    </strong>
                    {" Use try-otherwise for robust queries"}
                  </li>
                  <li>
                    <strong>
                      {"Test with sample data:"}
                    </strong>
                    {" Before running on full dataset"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Analytics"}
                </h2>
                <p>
                  {"Our Data Analytics program covers Power Query, Power BI, and advanced data transformation techniques."}
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
                      {"Complete Power BI tutorial"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/dax" className="related-article-card">
                    <h4>
                      {"DAX Formulas"}
                    </h4>
                    {" "}
                    <p>
                      {"Power BI calculations"}
                    </p>
                  </Link>
                  <Link href="/data-analytics/articles/data-cleaning" className="related-article-card">
                    <h4>
                      {"Data Cleaning"}
                    </h4>
                    {" "}
                    <p>
                      {"Data preprocessing techniques"}
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
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}
