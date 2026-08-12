import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SQL Server: Database for .NET Applications",
  description: "Learn SQL Server - T-SQL queries, stored procedures, indexes, and transactions. Understand why SQL Server is perfect for .NET and when to use it.",
  keywords: ["SQL Server tutorial", "T-SQL", "stored procedures", "indexes", "transactions", "database .NET"],
  alternates: { canonical: "/full-stack-dotnet/articles/sql-server" },
  openGraph: {
    type: "article",
    url: "/full-stack-dotnet/articles/sql-server",
    title: "SQL Server: Database for .NET Applications",
    description: "Master SQL Server for building robust data-driven .NET applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-dotnet", label: "Learn Full Stack .NET", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SQL Server: Database for .NET Applications",
  "description": "Complete guide to SQL Server for .NET developers",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-24",
  "dateModified": "2024-12-24"
} as const;

export default function FullStackDotnetSqlServerPage() {
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
              <Link href="/full-stack-dotnet">
                {"Full Stack .NET"}
              </Link>
              {" / "}
              <span>
                {"SQL Server"}
              </span>
            </div>
            <h1>
              {"SQL Server"}
            </h1>
            <p className="article-subtitle">
              {"Enterprise Database for .NET Applications"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is SQL Server?"}
                </h2>
                <p>
                  {"SQL Server is Microsoft's enterprise-grade relational database management system (RDBMS). Think of it as a highly organized digital filing cabinet where your application's data lives - from user accounts to product catalogs to transaction histories."}
                </p>
                <p>
                  {"SQL Server stores data in tables (like Excel spreadsheets), uses SQL (Structured Query Language) to retrieve and manipulate data, and provides enterprise features like high availability, security, and performance optimization."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use SQL Server?"}
                </h2>
                <p>
                  {"Imagine choosing between a filing cabinet and a professional document management system for important documents. SQL Server is the professional system:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Native .NET Integration:"}
                    </strong>
                    {" Best database for .NET apps - seamless integration with Entity Framework, ADO.NET, and Azure"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise Features:"}
                    </strong>
                    {" High availability, disaster recovery, advanced security, and compliance certifications"}
                  </li>
                  <li>
                    <strong>
                      {"T-SQL Power:"}
                    </strong>
                    {" Rich SQL dialect with advanced features like window functions, CTEs, and JSON support"}
                  </li>
                  <li>
                    <strong>
                      {"Performance:"}
                    </strong>
                    {" Intelligent query optimization, in-memory tables, columnstore indexes for analytics"}
                  </li>
                  <li>
                    <strong>
                      {"Excellent Tooling:"}
                    </strong>
                    {" SQL Server Management Studio (SSMS), Azure Data Studio, Visual Studio integration"}
                  </li>
                  <li>
                    <strong>
                      {"Azure Integration:"}
                    </strong>
                    {" Easy migration to Azure SQL Database with hybrid capabilities"}
                  </li>
                  <li>
                    <strong>
                      {"Business Intelligence:"}
                    </strong>
                    {" Built-in reporting (SSRS), analytics (SSAS), and integration services (SSIS)"}
                  </li>
                  <li>
                    <strong>
                      {"Strong Consistency:"}
                    </strong>
                    {" ACID transactions ensure data integrity"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use SQL Server?"}
                </h2>
                <p>
                  {"SQL Server is perfect for:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {".NET Applications:"}
                    </strong>
                    {" Best choice when building with .NET stack"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise Applications:"}
                    </strong>
                    {" Banking, healthcare, ERP - where data integrity is critical"}
                  </li>
                  <li>
                    <strong>
                      {"Transactional Systems:"}
                    </strong>
                    {" E-commerce, inventory management, financial systems"}
                  </li>
                  <li>
                    <strong>
                      {"Windows Environment:"}
                    </strong>
                    {" Already using Windows Server infrastructure"}
                  </li>
                  <li>
                    <strong>
                      {"Microsoft Ecosystem:"}
                    </strong>
                    {" Using Azure, Office 365, Power BI, Dynamics"}
                  </li>
                  <li>
                    <strong>
                      {"Complex Queries:"}
                    </strong>
                    {" Need advanced SQL features, stored procedures, and business logic in database"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Consider alternatives when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Building with non-.NET stack (PostgreSQL is excellent and free)"}
                  </li>
                  <li>
                    {"Need horizontal scaling (consider NoSQL like MongoDB, Cosmos DB)"}
                  </li>
                  <li>
                    {"Budget-constrained and can't use SQL Server Express/Azure SQL free tier"}
                  </li>
                  <li>
                    {"Simple key-value storage needs (Redis, DynamoDB)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"T-SQL: Querying Data"}
                </h2>
                <p>
                  {"T-SQL (Transact-SQL) is Microsoft's extended version of SQL. Here are the fundamentals:"}
                </p>
                <div className="code-block">
                  <pre><code>{`-- SELECT - Retrieve data
SELECT FirstName, LastName, Email
FROM Customers
WHERE City = 'Kochi'
ORDER BY LastName;

-- SELECT with calculations
SELECT
    ProductName,
    Price,
    Price * 1.18 AS PriceWithTax,
    CASE
        WHEN Price > 1000 THEN 'Expensive'
        WHEN Price > 500 THEN 'Medium'
        ELSE 'Affordable'
    END AS PriceCategory
FROM Products;

---

-- INSERT - Add new data
INSERT INTO Customers (FirstName, LastName, Email, City)
VALUES ('Rajesh', 'Kumar', 'rajesh@example.com', 'Kochi');

-- Insert multiple rows
INSERT INTO Products (Name, Price, CategoryId)
VALUES
    ('Laptop', 45000, 1),
    ('Mouse', 500, 2),
    ('Keyboard', 1500, 2);

---

-- UPDATE - Modify existing data
UPDATE Products
SET Price = 42000
WHERE ProductId = 1;

-- Update with calculation
UPDATE Employees
SET Salary = Salary * 1.10
WHERE Department = 'Sales';

---

-- DELETE - Remove data
DELETE FROM Orders
WHERE OrderDate < '2020-01-01';

-- Delete with JOIN
DELETE o
FROM Orders o
INNER JOIN Customers c ON o.CustomerId = c.CustomerId
WHERE c.IsActive = 0;

---

-- JOINS - Combine data from multiple tables
-- INNER JOIN - Only matching records
SELECT
    o.OrderId,
    c.FirstName + ' ' + c.LastName AS CustomerName,
    o.OrderDate,
    o.TotalAmount
FROM Orders o
INNER JOIN Customers c ON o.CustomerId = c.CustomerId
WHERE o.OrderDate >= '2024-01-01';

-- LEFT JOIN - All from left, matching from right
SELECT
    c.CustomerName,
    COUNT(o.OrderId) AS TotalOrders,
    ISNULL(SUM(o.TotalAmount), 0) AS TotalSpent
FROM Customers c
LEFT JOIN Orders o ON c.CustomerId = o.CustomerId
GROUP BY c.CustomerId, c.CustomerName;

---

-- AGGREGATIONS
SELECT
    CategoryId,
    COUNT(*) AS ProductCount,
    AVG(Price) AS AveragePrice,
    MIN(Price) AS CheapestProduct,
    MAX(Price) AS MostExpensive,
    SUM(Stock) AS TotalStock
FROM Products
GROUP BY CategoryId
HAVING COUNT(*) > 5;  -- Filter groups (not rows)

---

-- SUBQUERIES
-- Find products more expensive than average
SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);

-- Find customers who never ordered
SELECT CustomerName
FROM Customers
WHERE CustomerId NOT IN (
    SELECT DISTINCT CustomerId FROM Orders
);

---

-- WINDOW FUNCTIONS (Advanced)
-- Row number for pagination
SELECT
    ProductName,
    Price,
    ROW_NUMBER() OVER (ORDER BY Price DESC) AS PriceRank
FROM Products;

-- Running total
SELECT
    OrderDate,
    TotalAmount,
    SUM(TotalAmount) OVER (ORDER BY OrderDate) AS RunningTotal
FROM Orders;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Database Design Fundamentals"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- CREATE DATABASE
CREATE DATABASE EcommerceDB;
GO

USE EcommerceDB;
GO

-- CREATE TABLE with constraints
CREATE TABLE Categories (
    CategoryId INT PRIMARY KEY IDENTITY(1,1),
    CategoryName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500),
    CreatedAt DATETIME2 DEFAULT GETDATE()
);

CREATE TABLE Products (
    ProductId INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(18,2) NOT NULL CHECK (Price >= 0),
    Stock INT NOT NULL DEFAULT 0,
    CategoryId INT NOT NULL,
    IsActive BIT DEFAULT 1,
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2,

    -- Foreign key relationship
    CONSTRAINT FK_Products_Categories
        FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId)
);

CREATE TABLE Customers (
    CustomerId INT PRIMARY KEY IDENTITY(1,1),
    Email NVARCHAR(255) NOT NULL UNIQUE,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Phone NVARCHAR(20),
    CreatedAt DATETIME2 DEFAULT GETDATE()
);

CREATE TABLE Orders (
    OrderId INT PRIMARY KEY IDENTITY(1,1),
    CustomerId INT NOT NULL,
    OrderDate DATETIME2 DEFAULT GETDATE(),
    Status NVARCHAR(50) DEFAULT 'Pending',
    TotalAmount DECIMAL(18,2) NOT NULL,

    CONSTRAINT FK_Orders_Customers
        FOREIGN KEY (CustomerId) REFERENCES Customers(CustomerId)
);

CREATE TABLE OrderItems (
    OrderItemId INT PRIMARY KEY IDENTITY(1,1),
    OrderId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    UnitPrice DECIMAL(18,2) NOT NULL,

    CONSTRAINT FK_OrderItems_Orders
        FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
    CONSTRAINT FK_OrderItems_Products
        FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
);

---

-- NORMALIZATION EXAMPLE
-- BAD (Denormalized - data redundancy)
CREATE TABLE Orders_Bad (
    OrderId INT,
    CustomerName NVARCHAR(200),  -- Repeated for each order
    CustomerEmail NVARCHAR(255), -- Repeated for each order
    CustomerPhone NVARCHAR(20),  -- Repeated for each order
    ProductName NVARCHAR(200),
    Quantity INT
);

-- GOOD (Normalized - no redundancy)
-- Customers table (separate)
-- Orders table (references CustomerId)
-- Products table (separate)
-- OrderItems table (junction table)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Indexes: Speed Up Queries"}
                </h2>
                <p>
                  {"Indexes are like a book's index - instead of reading every page to find something, you look it up in the index. Same with databases:"}
                </p>
                <div className="code-block">
                  <pre><code>{`-- WITHOUT INDEX (slow - scans entire table)
SELECT * FROM Customers WHERE Email = 'user@example.com';
-- Scans all 1 million rows

---

-- CREATE INDEX
CREATE INDEX IX_Customers_Email ON Customers(Email);

-- NOW THE SAME QUERY IS FAST (uses index)
SELECT * FROM Customers WHERE Email = 'user@example.com';
-- Uses index, finds row instantly

---

-- COMPOSITE INDEX (multiple columns)
CREATE INDEX IX_Orders_CustomerDate
ON Orders(CustomerId, OrderDate);

-- Good for queries like:
SELECT * FROM Orders
WHERE CustomerId = 123 AND OrderDate >= '2024-01-01';

---

-- UNIQUE INDEX (enforce uniqueness)
CREATE UNIQUE INDEX IX_Customers_Email_Unique
ON Customers(Email);

---

-- INCLUDE COLUMNS (covering index - super fast)
CREATE INDEX IX_Products_CategoryId
ON Products(CategoryId)
INCLUDE (ProductName, Price);

-- Query doesn't even need to access table
SELECT ProductName, Price
FROM Products
WHERE CategoryId = 5;

---

-- DROP INDEX (if not needed)
DROP INDEX IX_Customers_Email ON Customers;

---

-- WHEN TO CREATE INDEXES
✅ Columns in WHERE clauses (Email, CategoryId)
✅ Columns in JOIN conditions
✅ Columns in ORDER BY
✅ Foreign keys

-- WHEN NOT TO CREATE INDEXES
❌ Small tables (< 1000 rows)
❌ Columns with few distinct values (Gender, Boolean)
❌ Columns updated frequently (indexes slow down writes)
❌ Too many indexes (each index slows INSERT/UPDATE)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Stored Procedures: Reusable SQL Code"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- SIMPLE STORED PROCEDURE
CREATE PROCEDURE GetCustomerOrders
    @CustomerId INT
AS
BEGIN
    SELECT
        o.OrderId,
        o.OrderDate,
        o.TotalAmount,
        o.Status
    FROM Orders o
    WHERE o.CustomerId = @CustomerId
    ORDER BY o.OrderDate DESC;
END;
GO

-- Execute
EXEC GetCustomerOrders @CustomerId = 123;

---

-- WITH MULTIPLE PARAMETERS
CREATE PROCEDURE SearchProducts
    @CategoryId INT = NULL,
    @MinPrice DECIMAL(18,2) = NULL,
    @MaxPrice DECIMAL(18,2) = NULL,
    @SearchTerm NVARCHAR(200) = NULL
AS
BEGIN
    SELECT ProductId, ProductName, Price, CategoryId
    FROM Products
    WHERE
        (@CategoryId IS NULL OR CategoryId = @CategoryId)
        AND (@MinPrice IS NULL OR Price >= @MinPrice)
        AND (@MaxPrice IS NULL OR Price <= @MaxPrice)
        AND (@SearchTerm IS NULL OR ProductName LIKE '%' + @SearchTerm + '%')
    ORDER BY ProductName;
END;
GO

-- Execute with different parameters
EXEC SearchProducts @CategoryId = 1;
EXEC SearchProducts @MinPrice = 1000, @MaxPrice = 5000;
EXEC SearchProducts @SearchTerm = 'laptop';

---

-- WITH OUTPUT PARAMETER
CREATE PROCEDURE CreateOrder
    @CustomerId INT,
    @TotalAmount DECIMAL(18,2),
    @OrderId INT OUTPUT
AS
BEGIN
    INSERT INTO Orders (CustomerId, TotalAmount, OrderDate, Status)
    VALUES (@CustomerId, @TotalAmount, GETDATE(), 'Pending');

    SET @OrderId = SCOPE_IDENTITY();  -- Get inserted ID
END;
GO

-- Execute and get OrderId back
DECLARE @NewOrderId INT;
EXEC CreateOrder
    @CustomerId = 123,
    @TotalAmount = 5000,
    @OrderId = @NewOrderId OUTPUT;

SELECT @NewOrderId AS OrderId;

---

-- WITH TRANSACTION
CREATE PROCEDURE TransferMoney
    @FromAccountId INT,
    @ToAccountId INT,
    @Amount DECIMAL(18,2)
AS
BEGIN
    BEGIN TRANSACTION;

    BEGIN TRY
        -- Deduct from source
        UPDATE Accounts
        SET Balance = Balance - @Amount
        WHERE AccountId = @FromAccountId;

        -- Add to destination
        UPDATE Accounts
        SET Balance = Balance + @Amount
        WHERE AccountId = @ToAccountId;

        COMMIT TRANSACTION;
        PRINT 'Transfer successful';
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        PRINT 'Transfer failed: ' + ERROR_MESSAGE();
    END CATCH
END;
GO

---

-- WHY USE STORED PROCEDURES?
✅ Better performance (compiled once, executed many times)
✅ Security (users execute SP, don't access tables directly)
✅ Reusability (write once, call from multiple apps)
✅ Maintainability (change logic in one place)
✅ Reduced network traffic (complex logic runs on server)

-- WHEN NOT TO USE
❌ Simple queries (overhead not worth it)
❌ When using ORM like EF Core (conflicts with code-first)
❌ Need database portability (SPs are vendor-specific)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Transactions: Ensure Data Integrity"}
                </h2>
                <p>
                  {"Transactions ensure all-or-nothing operations. Think of transferring money - either both debit and credit happen, or neither:"}
                </p>
                <div className="code-block">
                  <pre><code>{`-- BASIC TRANSACTION
BEGIN TRANSACTION;

    UPDATE Accounts SET Balance = Balance - 1000 WHERE AccountId = 1;
    UPDATE Accounts SET Balance = Balance + 1000 WHERE AccountId = 2;

COMMIT TRANSACTION;

---

-- WITH ERROR HANDLING
BEGIN TRANSACTION;

BEGIN TRY
    -- Create order
    INSERT INTO Orders (CustomerId, OrderDate, TotalAmount)
    VALUES (123, GETDATE(), 5000);

    DECLARE @OrderId INT = SCOPE_IDENTITY();

    -- Add order items
    INSERT INTO OrderItems (OrderId, ProductId, Quantity, UnitPrice)
    VALUES
        (@OrderId, 10, 2, 1500),
        (@OrderId, 20, 1, 2000);

    -- Update inventory
    UPDATE Products SET Stock = Stock - 2 WHERE ProductId = 10;
    UPDATE Products SET Stock = Stock - 1 WHERE ProductId = 20;

    COMMIT TRANSACTION;
    PRINT 'Order created successfully';
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Order creation failed: ' + ERROR_MESSAGE();
    THROW;
END CATCH

---

-- ISOLATION LEVELS
-- Control how transactions interact with each other

-- READ UNCOMMITTED (dirty reads possible)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- READ COMMITTED (default - no dirty reads)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- REPEATABLE READ (prevents non-repeatable reads)
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- SERIALIZABLE (full isolation - slowest)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

---

-- ACID PROPERTIES
A - Atomicity: All or nothing
C - Consistency: Data stays valid
I - Isolation: Transactions don't interfere
D - Durability: Committed data persists`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Views: Virtual Tables"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- CREATE VIEW (saved query)
CREATE VIEW CustomerOrderSummary AS
SELECT
    c.CustomerId,
    c.FirstName + ' ' + c.LastName AS CustomerName,
    c.Email,
    COUNT(o.OrderId) AS TotalOrders,
    ISNULL(SUM(o.TotalAmount), 0) AS TotalSpent,
    MAX(o.OrderDate) AS LastOrderDate
FROM Customers c
LEFT JOIN Orders o ON c.CustomerId = o.CustomerId
GROUP BY c.CustomerId, c.FirstName, c.LastName, c.Email;
GO

-- Use view like a table
SELECT * FROM CustomerOrderSummary
WHERE TotalOrders > 5
ORDER BY TotalSpent DESC;

---

-- BENEFITS OF VIEWS
✅ Simplify complex queries
✅ Security (show only needed columns)
✅ Consistent logic across applications
✅ Abstract underlying schema changes`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Table Expressions (CTEs)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- CTE for readable complex queries
WITH HighValueCustomers AS (
    SELECT CustomerId, SUM(TotalAmount) AS TotalSpent
    FROM Orders
    GROUP BY CustomerId
    HAVING SUM(TotalAmount) > 50000
)
SELECT
    c.FirstName,
    c.LastName,
    hvc.TotalSpent
FROM HighValueCustomers hvc
JOIN Customers c ON hvc.CustomerId = c.CustomerId
ORDER BY hvc.TotalSpent DESC;

---

-- RECURSIVE CTE (organizational hierarchy)
WITH EmployeeHierarchy AS (
    -- Anchor: Top-level managers
    SELECT EmployeeId, Name, ManagerId, 0 AS Level
    FROM Employees
    WHERE ManagerId IS NULL

    UNION ALL

    -- Recursive: Employees under managers
    SELECT e.EmployeeId, e.Name, e.ManagerId, eh.Level + 1
    FROM Employees e
    JOIN EmployeeHierarchy eh ON e.ManagerId = eh.EmployeeId
)
SELECT * FROM EmployeeHierarchy
ORDER BY Level, Name;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Performance Optimization"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use indexes wisely:"}
                    </strong>
                    {" Index columns in WHERE, JOIN, ORDER BY - but not too many"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid SELECT *:"}
                    </strong>
                    {" Select only columns you need"}
                  </li>
                  <li>
                    <strong>
                      {"Use WHERE instead of HAVING:"}
                    </strong>
                    {" Filter rows before grouping when possible"}
                  </li>
                  <li>
                    <strong>
                      {"Limit result sets:"}
                    </strong>
                    {" Use TOP or pagination, don't return millions of rows"}
                  </li>
                  <li>
                    <strong>
                      {"Use EXISTS instead of IN:"}
                    </strong>
                    {" For subqueries, EXISTS is often faster"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid functions in WHERE:"}
                    </strong>
                    <code>
                      {"WHERE YEAR(Date) = 2024"}
                    </code>
                    {" won't use index"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate data types:"}
                    </strong>
                    {" INT is faster than VARCHAR for IDs"}
                  </li>
                  <li>
                    <strong>
                      {"Update statistics:"}
                    </strong>
                    {" Helps query optimizer make better decisions"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor with Execution Plans:"}
                    </strong>
                    {" See how SQL Server executes queries"}
                  </li>
                  <li>
                    <strong>
                      {"Use stored procedures:"}
                    </strong>
                    {" Compiled once, executed many times"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"SQL Server Editions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`DEVELOPER EDITION
─────────────────
FREE for development/testing
All Enterprise features
Cannot use in production

BEST FOR: Learning, development

---

EXPRESS EDITION
───────────────
FREE for production
Limited to:
- 10 GB database size
- 1 GB RAM
- 4 cores

BEST FOR: Small apps, embedded databases

---

STANDARD EDITION
────────────────
~$3,717 (2-core license)
- Up to 128 GB RAM
- 24 cores
- Basic high availability

BEST FOR: Medium businesses

---

ENTERPRISE EDITION
──────────────────
~$14,256 (2-core license)
- Unlimited RAM/cores
- Advanced features
- Best performance

BEST FOR: Large enterprises

---

AZURE SQL DATABASE
──────────────────
Pay-as-you-go pricing
Fully managed (no maintenance)
Starting at ~$5/month

BEST FOR: Cloud applications, most modern apps`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices for SQL Server"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use parameterized queries:"}
                    </strong>
                    {" Prevent SQL injection, improve performance"}
                  </li>
                  <li>
                    <strong>
                      {"Regular backups:"}
                    </strong>
                    {" Full, differential, and transaction log backups"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor performance:"}
                    </strong>
                    {" Use SQL Server Profiler, Extended Events"}
                  </li>
                  <li>
                    <strong>
                      {"Implement proper security:"}
                    </strong>
                    {" Least privilege, encrypt sensitive data"}
                  </li>
                  <li>
                    <strong>
                      {"Use constraints:"}
                    </strong>
                    {" Primary keys, foreign keys, check constraints"}
                  </li>
                  <li>
                    <strong>
                      {"Normalize appropriately:"}
                    </strong>
                    {" Reduce redundancy, but don't over-normalize"}
                  </li>
                  <li>
                    <strong>
                      {"Document your schema:"}
                    </strong>
                    {" Comment complex logic, maintain ER diagrams"}
                  </li>
                  <li>
                    <strong>
                      {"Version control:"}
                    </strong>
                    {" Use migrations (EF Core) or database projects"}
                  </li>
                  <li>
                    <strong>
                      {"Test with production-like data:"}
                    </strong>
                    {" Performance issues appear with scale"}
                  </li>
                  <li>
                    <strong>
                      {"Plan for growth:"}
                    </strong>
                    {" Design scalable schema, consider partitioning"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master SQL Server with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack .NET program covers SQL Server from fundamentals to advanced optimization. Build data-driven applications with personalized guidance from industry experts."}
                </p>
                <Link href="/full-stack-dotnet" className="btn btn-primary">
                  {"Explore Full Stack .NET Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-dotnet/articles/entity-framework" className="related-article-card">
                    <h4>
                      {"Entity Framework Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Access SQL Server from C#"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/aspnet-core" className="related-article-card">
                    <h4>
                      {"ASP.NET Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs with SQL Server"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/azure-cloud" className="related-article-card">
                    <h4>
                      {"Azure Cloud"}
                    </h4>
                    {" "}
                    <p>
                      {"Deploy SQL Server to Azure"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn SQL Server."} />
    </>
  );
}
