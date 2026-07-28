import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "PostgreSQL Database Guide for Developers",
  description: "Learn PostgreSQL - the powerful open-source relational database. Master tables, queries, joins, indexes, transactions, and understand when to use PostgreSQL.",
  keywords: ["PostgreSQL tutorial", "PostgreSQL database", "SQL queries", "database joins", "PostgreSQL indexes", "relational database"],
  alternates: { canonical: "/full-stack-python/articles/postgresql" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/postgresql",
    title: "PostgreSQL: The World's Most Advanced Open Source Database",
    description: "Master PostgreSQL for building robust, scalable data-driven applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PostgreSQL: The World's Most Advanced Open Source Database",
  "description": "Complete guide to PostgreSQL for web developers",
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

export default function FullStackPythonPostgresqlPage() {
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
              <Link href="/full-stack-python">
                {"Full Stack Python"}
              </Link>
              {" / "}
              <span>
                {"PostgreSQL"}
              </span>
            </div>
            <h1>
              {"PostgreSQL"}
            </h1>
            <p className="article-subtitle">
              {"The World's Most Advanced Open Source Database"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"25 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is PostgreSQL?"}
                </h2>
                <p>
                  {"PostgreSQL (often called \"Postgres\") is a powerful, open-source relational database management system (RDBMS) with over 35 years of active development. It's known for its reliability, feature robustness, and performance."}
                </p>
                <p>
                  {"Think of PostgreSQL as a highly organized filing cabinet where data is stored in tables (like spreadsheets), and you can create complex relationships between different pieces of information. It ensures your data is safe, consistent, and quickly retrievable."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why PostgreSQL?"}
                </h2>
                <p>
                  {"PostgreSQL has become the preferred database for modern web applications:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"ACID Compliance:"}
                    </strong>
                    {" Guarantees data integrity with Atomicity, Consistency, Isolation, Durability"}
                  </li>
                  <li>
                    <strong>
                      {"Advanced Features:"}
                    </strong>
                    {" JSON support, full-text search, geospatial data (PostGIS)"}
                  </li>
                  <li>
                    <strong>
                      {"Open Source:"}
                    </strong>
                    {" Free, with a permissive license and active community"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Handles small apps to enterprise systems with billions of rows"}
                  </li>
                  <li>
                    <strong>
                      {"Standards Compliant:"}
                    </strong>
                    {" Follows SQL standards closely"}
                  </li>
                  <li>
                    <strong>
                      {"Extensible:"}
                    </strong>
                    {" Custom functions, data types, and operators"}
                  </li>
                  <li>
                    <strong>
                      {"Python Integration:"}
                    </strong>
                    {" Excellent support via psycopg2 and Django/SQLAlchemy"}
                  </li>
                  <li>
                    <strong>
                      {"Reliability:"}
                    </strong>
                    {" Known for data integrity and crash recovery"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use PostgreSQL (Relational Databases)"}
                </h2>
                <p>
                  <strong>
                    {"Use PostgreSQL when you need:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Structured Data:"}
                    </strong>
                    {" Data fits naturally into tables with defined relationships"}
                  </li>
                  <li>
                    <strong>
                      {"Data Integrity:"}
                    </strong>
                    {" Banking, e-commerce, or any app where accuracy is critical"}
                  </li>
                  <li>
                    <strong>
                      {"Complex Queries:"}
                    </strong>
                    {" Joins, aggregations, and complex filtering"}
                  </li>
                  <li>
                    <strong>
                      {"ACID Transactions:"}
                    </strong>
                    {" Need to ensure all-or-nothing operations (e.g., money transfers)"}
                  </li>
                  <li>
                    <strong>
                      {"Reporting:"}
                    </strong>
                    {" Analytics and business intelligence queries"}
                  </li>
                  <li>
                    <strong>
                      {"Multi-user Applications:"}
                    </strong>
                    {" Concurrent access with proper locking"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When NOT to use relational databases:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Unstructured Data:"}
                    </strong>
                    {" Use MongoDB or document stores for flexible schemas"}
                  </li>
                  <li>
                    <strong>
                      {"Simple Key-Value Storage:"}
                    </strong>
                    {" Redis is faster for caching"}
                  </li>
                  <li>
                    <strong>
                      {"Extreme Horizontal Scaling:"}
                    </strong>
                    {" Cassandra or DynamoDB for massive scale"}
                  </li>
                  <li>
                    <strong>
                      {"Graph Relationships:"}
                    </strong>
                    {" Neo4j for social networks or recommendation engines"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Database Basics: Tables and Data Types"}
                </h2>
                <p>
                  {"Tables are the foundation of relational databases. Each table has columns (fields) with specific data types."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Create a table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,           -- Auto-incrementing integer
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Common data types
-- Text types
VARCHAR(n)      -- Variable-length string (max n characters)
TEXT            -- Unlimited text
CHAR(n)         -- Fixed-length string

-- Numeric types
INTEGER         -- Whole numbers (-2B to 2B)
BIGINT          -- Large whole numbers
DECIMAL(p,s)    -- Exact decimals (e.g., money)
REAL            -- Floating point (approximate)
SERIAL          -- Auto-incrementing integer

-- Date/Time types
DATE            -- Date only (YYYY-MM-DD)
TIME            -- Time only (HH:MM:SS)
TIMESTAMP       -- Date and time
INTERVAL        -- Time interval (e.g., '2 days')

-- Other types
BOOLEAN         -- TRUE/FALSE
JSON            -- JSON data
JSONB           -- Binary JSON (faster, recommended)
UUID            -- Universally unique identifier
ARRAY           -- Arrays of any type`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CRUD Operations: Create, Read, Update, Delete"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- CREATE (INSERT)
INSERT INTO users (username, email, password_hash)
VALUES ('alice', 'alice@example.com', 'hashed_password_123');

-- Insert multiple rows
INSERT INTO users (username, email, password_hash)
VALUES
    ('bob', 'bob@example.com', 'hashed_pass'),
    ('charlie', 'charlie@example.com', 'hashed_pass');

-- READ (SELECT)
-- Get all users
SELECT * FROM users;

-- Get specific columns
SELECT username, email FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE is_active = TRUE;

-- Multiple conditions
SELECT * FROM users
WHERE is_active = TRUE AND created_at > '2024-01-01';

-- Pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- Sorting
SELECT * FROM users ORDER BY created_at DESC;

-- Limit results
SELECT * FROM users LIMIT 10 OFFSET 20;  -- Pagination

-- UPDATE
UPDATE users
SET is_active = FALSE
WHERE username = 'alice';

-- Update multiple columns
UPDATE users
SET
    email = 'newemail@example.com',
    updated_at = CURRENT_TIMESTAMP
WHERE id = 1;

-- DELETE
DELETE FROM users WHERE id = 1;

-- Delete with condition
DELETE FROM users WHERE is_active = FALSE;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Relationships: Foreign Keys and Joins"}
                </h2>
                <p>
                  {"Relationships connect tables together, allowing you to model real-world data structures."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Create related tables
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Relationship Types:
-- ON DELETE CASCADE    → Delete related records
-- ON DELETE SET NULL   → Set foreign key to NULL
-- ON DELETE RESTRICT   → Prevent deletion if references exist

-- INNER JOIN (only matching records)
SELECT users.username, posts.title
FROM users
INNER JOIN posts ON users.id = posts.user_id;

-- LEFT JOIN (all from left table, matching from right)
SELECT users.username, COUNT(posts.id) as post_count
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.username;

-- Multiple joins
SELECT
    users.username,
    posts.title,
    comments.content
FROM comments
INNER JOIN posts ON comments.post_id = posts.id
INNER JOIN users ON comments.user_id = users.id
WHERE posts.id = 1;

-- Self join (join table to itself)
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    manager_id INTEGER REFERENCES employees(id)
);

SELECT
    e.name as employee,
    m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregation and Grouping"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Aggregate functions
SELECT COUNT(*) FROM users;                    -- Total users
SELECT COUNT(*) FROM users WHERE is_active;   -- Active users
SELECT MAX(created_at) FROM posts;            -- Most recent post
SELECT MIN(created_at) FROM posts;            -- Oldest post
SELECT AVG(age) FROM users;                   -- Average age
SELECT SUM(price) FROM orders;                -- Total sales

-- GROUP BY
SELECT user_id, COUNT(*) as post_count
FROM posts
GROUP BY user_id;

-- GROUP BY with JOIN
SELECT users.username, COUNT(posts.id) as total_posts
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.username
ORDER BY total_posts DESC;

-- HAVING (filter after grouping)
SELECT user_id, COUNT(*) as post_count
FROM posts
GROUP BY user_id
HAVING COUNT(*) > 5;  -- Users with more than 5 posts

-- Complex aggregation
SELECT
    DATE_TRUNC('month', created_at) as month,
    COUNT(*) as posts_count,
    COUNT(DISTINCT user_id) as unique_users
FROM posts
WHERE created_at >= '2024-01-01'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Indexes: Making Queries Fast"}
                </h2>
                <p>
                  {"Indexes are like book indexes - they help the database find data quickly without scanning every row."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Create an index
CREATE INDEX idx_users_email ON users(email);

-- Unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- Composite index (multiple columns)
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at DESC);

-- Partial index (only index some rows)
CREATE INDEX idx_active_users ON users(email) WHERE is_active = TRUE;

-- Full-text search index
CREATE INDEX idx_posts_content ON posts USING GIN(to_tsvector('english', content));

-- View indexes
\\di  -- In psql

-- Drop an index
DROP INDEX idx_users_email;

-- When to use indexes:
-- ✅ Columns used in WHERE clauses
-- ✅ Columns used in JOIN conditions
-- ✅ Columns used in ORDER BY
-- ✅ Foreign keys (usually)
-- ❌ Small tables (overhead not worth it)
-- ❌ Columns with low cardinality (e.g., boolean)
-- ❌ Tables with frequent INSERTs/UPDATEs (indexes slow these down)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Transactions: Ensuring Data Integrity"}
                </h2>
                <p>
                  {"Transactions ensure that multiple operations either all succeed or all fail - no partial changes."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Example: Transfer money between accounts
BEGIN;  -- Start transaction

UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

COMMIT;  -- Save changes

-- If something goes wrong
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
-- Oops, error occurred!

ROLLBACK;  -- Undo all changes in this transaction

-- Real-world example: E-commerce order
BEGIN;

-- Insert order
INSERT INTO orders (user_id, total) VALUES (1, 99.99) RETURNING id;

-- Insert order items
INSERT INTO order_items (order_id, product_id, quantity)
VALUES (1, 5, 2);

-- Update inventory
UPDATE products SET stock = stock - 2 WHERE id = 5;

-- If all succeed
COMMIT;

-- Transaction properties (ACID):
-- A = Atomicity     → All or nothing
-- C = Consistency   → Data remains valid
-- I = Isolation     → Transactions don't interfere
-- D = Durability    → Changes are permanent`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Constraints: Enforcing Data Rules"}
                </h2>
                <div className="code-block">
                  <pre><code>{`CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) CHECK (price > 0),          -- Must be positive
    stock INTEGER DEFAULT 0 CHECK (stock >= 0),      -- Can't be negative
    category VARCHAR(50) NOT NULL,
    sku VARCHAR(50) UNIQUE NOT NULL,                 -- Must be unique
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Primary key (unique identifier)
PRIMARY KEY             -- Unique and not null

-- Foreign key (relationship)
FOREIGN KEY            -- Links to another table

-- NOT NULL (required field)
NOT NULL               -- Must have a value

-- UNIQUE (no duplicates)
UNIQUE                 -- All values must be different

-- CHECK (custom validation)
CHECK (price > 0)      -- Custom condition

-- DEFAULT (default value)
DEFAULT 0              -- Value if none provided

-- Add constraint to existing table
ALTER TABLE users
ADD CONSTRAINT check_email_format
CHECK (email LIKE '%@%.%');`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Working with JSON in PostgreSQL"}
                </h2>
                <p>
                  {"PostgreSQL's JSON support lets you combine relational structure with flexible schema."}
                </p>
                <div className="code-block">
                  <pre><code>{`-- Create table with JSON
CREATE TABLE user_preferences (
    user_id INTEGER PRIMARY KEY REFERENCES users(id),
    settings JSONB  -- Use JSONB (not JSON) for better performance
);

-- Insert JSON data
INSERT INTO user_preferences (user_id, settings)
VALUES (1, '{"theme": "dark", "notifications": true, "language": "en"}');

-- Query JSON data
SELECT settings->>'theme' as theme FROM user_preferences WHERE user_id = 1;

-- Filter by JSON field
SELECT * FROM user_preferences
WHERE settings->>'theme' = 'dark';

-- Update JSON field
UPDATE user_preferences
SET settings = jsonb_set(settings, '{theme}', '"light"')
WHERE user_id = 1;

-- Check if JSON key exists
SELECT * FROM user_preferences
WHERE settings ? 'notifications';

-- Array in JSON
INSERT INTO user_preferences (user_id, settings)
VALUES (2, '{"tags": ["developer", "python", "postgres"]}');

-- Query JSON array
SELECT * FROM user_preferences
WHERE settings->'tags' @> '["python"]';`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Connecting PostgreSQL with Python"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Using psycopg2 (raw SQL)
import psycopg2

# Connect to database
conn = psycopg2.connect(
    dbname="myapp",
    user="postgres",
    password="password",
    host="localhost",
    port="5432"
)

cur = conn.cursor()

# Execute query
cur.execute("SELECT * FROM users WHERE username = %s", ('alice',))
users = cur.fetchall()

# Insert data
cur.execute(
    "INSERT INTO users (username, email) VALUES (%s, %s)",
    ('bob', 'bob@example.com')
)
conn.commit()

# Close connection
cur.close()
conn.close()

# Using with Django (see Django article)
# Django automatically handles connections via settings.py

# Using with SQLAlchemy (see SQLAlchemy article)
from sqlalchemy import create_engine

engine = create_engine('postgresql://user:pass@localhost/mydb')
# Then use with SQLAlchemy ORM or raw SQL`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Query Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`-- Find duplicates
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Top N per group
SELECT DISTINCT ON (category) category, name, price
FROM products
ORDER BY category, price DESC;

-- Running total
SELECT
    created_at,
    amount,
    SUM(amount) OVER (ORDER BY created_at) as running_total
FROM orders;

-- Rank by score
SELECT
    username,
    score,
    RANK() OVER (ORDER BY score DESC) as rank
FROM leaderboard;

-- Find records not in another table
SELECT * FROM users
WHERE id NOT IN (SELECT user_id FROM posts);

-- Or use LEFT JOIN
SELECT users.*
FROM users
LEFT JOIN posts ON users.id = posts.user_id
WHERE posts.id IS NULL;

-- Upsert (insert or update if exists)
INSERT INTO users (id, username, email)
VALUES (1, 'alice', 'alice@example.com')
ON CONFLICT (id)
DO UPDATE SET email = EXCLUDED.email;`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use indexes wisely:"}
                    </strong>
                    {" Index columns used in WHERE, JOIN, ORDER BY"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid SELECT *:"}
                    </strong>
                    {" Only select columns you need"}
                  </li>
                  <li>
                    <strong>
                      {"Use EXPLAIN:"}
                    </strong>
                    {" Analyze query performance with "}
                    <code>
                      {"EXPLAIN ANALYZE"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Use transactions:"}
                    </strong>
                    {" For multi-step operations that must be atomic"}
                  </li>
                  <li>
                    <strong>
                      {"Parameterize queries:"}
                    </strong>
                    {" Prevent SQL injection, use placeholders"}
                  </li>
                  <li>
                    <strong>
                      {"Choose right data types:"}
                    </strong>
                    {" VARCHAR(50) not TEXT if length is limited"}
                  </li>
                  <li>
                    <strong>
                      {"Use foreign keys:"}
                    </strong>
                    {" Enforce referential integrity"}
                  </li>
                  <li>
                    <strong>
                      {"Regular backups:"}
                    </strong>
                    {" Use pg_dump for backups"}
                  </li>
                  <li>
                    <strong>
                      {"Connection pooling:"}
                    </strong>
                    {" Reuse database connections in production"}
                  </li>
                  <li>
                    <strong>
                      {"Normalize data:"}
                    </strong>
                    {" Avoid redundancy, but denormalize for performance when needed"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master PostgreSQL with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers PostgreSQL from basics to advanced query optimization. Learn database design, indexing strategies, and integration with Django and SQLAlchemy."}
                </p>
                <Link href="/full-stack-python" className="btn btn-primary">
                  {"Explore Full Stack Python Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-python/articles/sqlalchemy" className="related-article-card">
                    <h4>
                      {"SQLAlchemy ORM"}
                    </h4>
                    {" "}
                    <p>
                      {"Python ORM for databases"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/django" className="related-article-card">
                    <h4>
                      {"Django Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Web framework with built-in ORM"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/rest-apis-python" className="related-article-card">
                    <h4>
                      {"REST APIs in Python"}
                    </h4>
                    {" "}
                    <p>
                      {"Build data-driven APIs"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn PostgreSQL database."} />
    </>
  );
}
