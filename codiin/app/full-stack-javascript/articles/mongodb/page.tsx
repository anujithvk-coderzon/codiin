import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "MongoDB: NoSQL Database for Modern Apps",
  description: "Learn MongoDB - the popular NoSQL database. Master documents, collections, CRUD operations, queries, indexes, and data modeling for JavaScript applications.",
  keywords: ["MongoDB tutorial", "NoSQL database", "document database", "CRUD operations", "Mongoose", "database design"],
  alternates: { canonical: "/full-stack-javascript/articles/mongodb" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/mongodb",
    title: "MongoDB: NoSQL Database for Modern Apps",
    description: "Master MongoDB for storing and querying data in JavaScript applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "MongoDB: NoSQL Database for Modern Apps",
  "description": "Complete guide to MongoDB for JavaScript developers",
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

export default function FullStackJavascriptMongodbPage() {
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
              <Link href="/full-stack-javascript">
                {"Full Stack JavaScript"}
              </Link>
              {" / "}
              <span>
                {"MongoDB"}
              </span>
            </div>
            <h1>
              {"MongoDB"}
            </h1>
            <p className="article-subtitle">
              {"NoSQL Database for Modern Apps"}
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
                  {"What is MongoDB?"}
                </h2>
                <p>
                  {"MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. Unlike traditional SQL databases with tables and rows, MongoDB uses collections and documents, making it perfect for JavaScript applications."}
                </p>
                <p>
                  {"Think of MongoDB as a digital filing cabinet where each drawer (collection) holds folders (documents) that can contain different types of information. You're not locked into a rigid structure - each document can have its own fields, just like JSON objects in JavaScript."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use MongoDB?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"JavaScript-Friendly:"}
                    </strong>
                    {" Stores data as JSON-like documents, natural fit for Node.js"}
                  </li>
                  <li>
                    <strong>
                      {"Flexible Schema:"}
                    </strong>
                    {" No need to define table structure upfront, adapt as you grow"}
                  </li>
                  <li>
                    <strong>
                      {"Scalable:"}
                    </strong>
                    {" Horizontal scaling with sharding, handles massive data"}
                  </li>
                  <li>
                    <strong>
                      {"Fast Development:"}
                    </strong>
                    {" Quick to prototype, iterate, and deploy"}
                  </li>
                  <li>
                    <strong>
                      {"Rich Query Language:"}
                    </strong>
                    {" Powerful queries, aggregations, and indexing"}
                  </li>
                  <li>
                    <strong>
                      {"Industry Adoption:"}
                    </strong>
                    {" Used by Google, Facebook, eBay, Adobe"}
                  </li>
                  <li>
                    <strong>
                      {"Cloud-Ready:"}
                    </strong>
                    {" MongoDB Atlas provides managed cloud hosting"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"NoSQL vs SQL: Understanding the Difference"}
                </h2>
                <div className="code-block">
                  <pre><code>{`SQL (PostgreSQL, MySQL)
Structure: Tables with fixed columns
Example:
Users Table:
┌────┬──────────┬────────────────────┬─────┐
│ id │   name   │       email        │ age │
├────┼──────────┼────────────────────┼─────┤
│ 1  │ Alice    │ alice@example.com  │ 25  │
│ 2  │ Bob      │ bob@example.com    │ 30  │
└────┴──────────┴────────────────────┴─────┘

✓ ACID compliance (data integrity)
✓ Complex relationships (joins)
✓ Structured data
✗ Rigid schema
✗ Vertical scaling (expensive)

NoSQL (MongoDB)
Structure: Collections with flexible documents
Example:
Users Collection:
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25,
  "addresses": [
    { "city": "NYC", "zip": "10001" }
  ]
}
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Bob",
  "email": "bob@example.com",
  "age": 30,
  "preferences": { "theme": "dark" }
  // Different fields - no problem!
}

✓ Flexible schema
✓ Horizontal scaling
✓ Fast for reads
✓ JSON-like structure
✗ No joins (embed or reference)
✗ Eventual consistency

When to use MongoDB:
- Rapid development/prototyping
- Flexible or evolving data models
- Hierarchical data (comments, nested objects)
- High-volume, high-velocity data
- Real-time analytics
- Content management systems

When to use SQL:
- Complex transactions (banking)
- Strict data validation
- Many-to-many relationships
- Reporting/analytics with joins
- Mature, stable data model`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts: Collections and Documents"}
                </h2>
                <div className="code-block">
                  <pre><code>{`MongoDB Structure:

Database
  └── Collection (like SQL table)
        └── Document (like SQL row, but JSON)
              └── Field (like SQL column)

Example:
myapp (database)
  ├── users (collection)
  │     ├── { _id: 1, name: "Alice", ... } (document)
  │     ├── { _id: 2, name: "Bob", ... }
  │     └── { _id: 3, name: "Charlie", ... }
  ├── posts (collection)
  │     ├── { _id: 1, title: "My Post", ... }
  │     └── { _id: 2, title: "Another Post", ... }
  └── comments (collection)

Document Example:
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "username": "alice123",
  "email": "alice@example.com",
  "age": 25,
  "isActive": true,
  "createdAt": ISODate("2024-01-15T10:30:00Z"),
  "profile": {
    "bio": "Software developer",
    "avatar": "https://example.com/avatar.jpg",
    "social": {
      "twitter": "@alice",
      "github": "alice123"
    }
  },
  "tags": ["javascript", "mongodb", "nodejs"],
  "stats": {
    "posts": 42,
    "followers": 150
  }
}

Key Points:
- _id field is auto-generated (unique identifier)
- Fields can be any data type (string, number, boolean, array, object)
- Documents can have nested objects (embedded documents)
- No fixed schema - documents in same collection can differ`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CRUD Operations: Create, Read, Update, Delete"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Using MongoDB native driver with Node.js

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const db = client.db('myapp');
  const users = db.collection('users');

  // CREATE - Insert documents

  // Insert one
  const result = await users.insertOne({
    name: 'Alice',
    email: 'alice@example.com',
    age: 25
  });
  console.log('Inserted ID:', result.insertedId);

  // Insert many
  await users.insertMany([
    { name: 'Bob', email: 'bob@example.com', age: 30 },
    { name: 'Charlie', email: 'charlie@example.com', age: 28 }
  ]);

  // READ - Query documents

  // Find all
  const allUsers = await users.find({}).toArray();

  // Find with filter
  const user = await users.findOne({ name: 'Alice' });

  // Find with multiple conditions
  const adults = await users.find({
    age: { $gte: 18 },
    isActive: true
  }).toArray();

  // Find with operators
  const youngUsers = await users.find({
    age: { $lt: 30 },          // Less than 30
    name: { $in: ['Alice', 'Bob'] } // Name is Alice or Bob
  }).toArray();

  // Projection (select specific fields)
  const names = await users.find({}, {
    projection: { name: 1, email: 1, _id: 0 }
  }).toArray();

  // Sort and limit
  const top5 = await users.find({})
    .sort({ age: -1 })  // Descending
    .limit(5)
    .toArray();

  // UPDATE - Modify documents

  // Update one
  await users.updateOne(
    { name: 'Alice' },           // Filter
    { $set: { age: 26 } }        // Update
  );

  // Update many
  await users.updateMany(
    { age: { $lt: 18 } },
    { $set: { isMinor: true } }
  );

  // Update operators
  await users.updateOne(
    { name: 'Alice' },
    {
      $set: { email: 'newemail@example.com' },  // Set field
      $inc: { loginCount: 1 },                  // Increment
      $push: { tags: 'javascript' },            // Add to array
      $unset: { tempField: '' }                 // Remove field
    }
  );

  // Upsert (update or insert if not exists)
  await users.updateOne(
    { email: 'new@example.com' },
    { $set: { name: 'New User', age: 20 } },
    { upsert: true }
  );

  // DELETE - Remove documents

  // Delete one
  await users.deleteOne({ name: 'Bob' });

  // Delete many
  await users.deleteMany({ age: { $lt: 18 } });

  // Delete all documents (keep collection)
  await users.deleteMany({});

  await client.close();
}

run().catch(console.error);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Query Operators: Powerful Filtering"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Comparison Operators
{ age: { $eq: 25 } }        // Equal to 25
{ age: { $ne: 25 } }        // Not equal to 25
{ age: { $gt: 25 } }        // Greater than 25
{ age: { $gte: 25 } }       // Greater than or equal to 25
{ age: { $lt: 25 } }        // Less than 25
{ age: { $lte: 25 } }       // Less than or equal to 25
{ age: { $in: [25, 30] } }  // Age is 25 or 30
{ age: { $nin: [25, 30] } } // Age is not 25 or 30

// Logical Operators
{
  $and: [
    { age: { $gte: 18 } },
    { age: { $lte: 65 } }
  ]
}

{
  $or: [
    { status: 'active' },
    { premium: true }
  ]
}

{ age: { $not: { $lt: 18 } } }  // NOT less than 18

// Element Operators
{ email: { $exists: true } }    // Has email field
{ tags: { $type: 'array' } }    // Tags is an array

// Array Operators
{ tags: 'javascript' }                    // Array contains 'javascript'
{ tags: { $all: ['js', 'node'] } }       // Array contains both
{ tags: { $size: 3 } }                   // Array has 3 elements
{ ratings: { $elemMatch: { $gte: 4 } } } // At least one element >= 4

// String Operators (regex)
{ name: { $regex: /^Alice/, $options: 'i' } }  // Starts with Alice (case-insensitive)
{ email: { $regex: '@gmail.com$' } }           // Ends with @gmail.com

// Nested Field Queries
{ 'address.city': 'NYC' }
{ 'profile.social.twitter': '@alice' }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Mongoose: Elegant MongoDB for Node.js"}
                </h2>
                <p>
                  {"Mongoose is an ODM (Object Data Modeling) library that provides schema-based solutions for MongoDB. It's the most popular way to use MongoDB with Node.js."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Install Mongoose
npm install mongoose

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp');

// Define Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (v) => /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(v),
      message: 'Invalid email format'
    }
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  isActive: {
    type: Boolean,
    default: true
  },
  tags: [String],
  profile: {
    bio: String,
    avatar: String,
    social: {
      twitter: String,
      github: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add methods
userSchema.methods.getFullProfile = function() {
  return {
    name: this.name,
    email: this.email,
    bio: this.profile?.bio
  };
};

// Create Model
const User = mongoose.model('User', userSchema);

// CRUD with Mongoose

// Create
const user = new User({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
  tags: ['javascript', 'nodejs']
});
await user.save();

// Or using create()
const user2 = await User.create({
  name: 'Bob',
  email: 'bob@example.com',
  age: 30
});

// Read
const allUsers = await User.find();
const alice = await User.findOne({ name: 'Alice' });
const userById = await User.findById('507f1f77bcf86cd799439011');

// Update
await User.updateOne({ name: 'Alice' }, { age: 26 });
const updated = await User.findByIdAndUpdate(
  userId,
  { age: 26 },
  { new: true } // Return updated document
);

// Delete
await User.deleteOne({ name: 'Bob' });
await User.findByIdAndDelete(userId);

// Query chaining
const results = await User
  .find({ age: { $gte: 18 } })
  .select('name email')
  .sort({ createdAt: -1 })
  .limit(10)
  .exec();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Modeling: Embedded vs References"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// EMBEDDED (Denormalized) - Store related data in same document
// Use when: Data is frequently accessed together, 1-to-few relationships

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    name: String,
    email: String,
    avatar: String
  },
  comments: [{
    text: String,
    author: String,
    createdAt: Date
  }]
});

// ✓ Fast reads (single query)
// ✓ Atomic updates (update document and comments together)
// ✗ Data duplication (author info repeated)
// ✗ Document size limits (16MB max)

// REFERENCED (Normalized) - Store references to other documents
// Use when: Data is large, many-to-many relationships, data changes often

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // Reference to User collection
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Query with populate (like SQL join)
const post = await Post.findById(postId)
  .populate('author')           // Load author details
  .populate('comments')         // Load comments
  .exec();

// ✓ No data duplication
// ✓ Smaller document size
// ✗ Multiple queries (slower)
// ✗ No atomic updates

// HYBRID APPROACH (Best of both)
// Embed frequently accessed fields, reference for details

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    id: mongoose.Schema.Types.ObjectId,
    name: String,      // Embed name for display
    avatar: String     // Embed avatar for display
  }
  // Reference full user document if needed
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Indexes: Faster Queries"}
                </h2>
                <p>
                  {"Indexes improve query performance by creating a data structure that makes searching faster."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Create indexes in Mongoose schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,    // Creates unique index
    index: true      // Creates regular index
  },
  username: {
    type: String,
    index: true
  },
  age: Number,
  createdAt: Date
});

// Compound index (multiple fields)
userSchema.index({ age: 1, createdAt: -1 });
// 1 = ascending, -1 = descending

// Text index (full-text search)
userSchema.index({ bio: 'text', name: 'text' });

// Using text search
await User.find({ $text: { $search: 'javascript developer' } });

// Create index in MongoDB shell
db.users.createIndex({ email: 1 }, { unique: true });

// View all indexes
db.users.getIndexes();

// Drop index
db.users.dropIndex('email_1');

// Best Practices:
// ✓ Index fields used in queries, sorts, and joins
// ✓ Use compound indexes for multi-field queries
// ✓ Don't over-index (slows writes)
// ✗ Avoid indexing fields that change frequently`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Aggregation Pipeline: Complex Queries"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Aggregation pipeline processes documents through stages

// Example: Get user stats
const stats = await User.aggregate([
  // Stage 1: Filter
  { $match: { isActive: true } },

  // Stage 2: Group by age
  {
    $group: {
      _id: '$age',
      count: { $sum: 1 },
      avgPosts: { $avg: '$postCount' }
    }
  },

  // Stage 3: Sort
  { $sort: { count: -1 } },

  // Stage 4: Limit
  { $limit: 10 }
]);

// Common aggregation operators
{
  $sum: 1,                    // Count
  $avg: '$field',             // Average
  $min: '$field',             // Minimum
  $max: '$field',             // Maximum
  $push: '$field',            // Array of values
  $first: '$field',           // First value
  $last: '$field'             // Last value
}

// Complex example: Blog statistics
const blogStats = await Post.aggregate([
  // Join with users
  {
    $lookup: {
      from: 'users',
      localField: 'authorId',
      foreignField: '_id',
      as: 'author'
    }
  },

  // Unwind array
  { $unwind: '$author' },

  // Group by author
  {
    $group: {
      _id: '$author._id',
      authorName: { $first: '$author.name' },
      totalPosts: { $sum: 1 },
      totalViews: { $sum: '$views' },
      avgLikes: { $avg: '$likes' }
    }
  },

  // Sort by total posts
  { $sort: { totalPosts: -1 } },

  // Format output
  {
    $project: {
      _id: 0,
      author: '$authorName',
      posts: '$totalPosts',
      views: '$totalViews',
      avgLikes: { $round: ['$avgLikes', 2] }
    }
  }
]);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Design for your queries:"}
                    </strong>
                    {" Structure data based on how you'll access it"}
                  </li>
                  <li>
                    <strong>
                      {"Use Mongoose for schema validation:"}
                    </strong>
                    {" Catch errors early"}
                  </li>
                  <li>
                    <strong>
                      {"Index wisely:"}
                    </strong>
                    {" Speed up queries but don't over-index"}
                  </li>
                  <li>
                    <strong>
                      {"Limit document size:"}
                    </strong>
                    {" Keep documents under 16MB"}
                  </li>
                  <li>
                    <strong>
                      {"Use projection:"}
                    </strong>
                    {" Fetch only fields you need"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors properly:"}
                    </strong>
                    {" Use try-catch for async operations"}
                  </li>
                  <li>
                    <strong>
                      {"Use connection pooling:"}
                    </strong>
                    {" Reuse connections, don't create new ones"}
                  </li>
                  <li>
                    <strong>
                      {"Enable authentication:"}
                    </strong>
                    {" Never expose MongoDB without auth"}
                  </li>
                  <li>
                    <strong>
                      {"Backup regularly:"}
                    </strong>
                    {" Use MongoDB Atlas or mongodump"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Where MongoDB Fits in the Stack"}
                </h2>
                <div className="code-block">
                  <pre><code>{`MERN Stack Architecture:

┌─────────────────────────────────┐
│   Frontend (React)              │
│   - User interface              │
│   - State management            │
└───────────┬─────────────────────┘
            │ HTTP/REST API
            ↓
┌─────────────────────────────────┐
│   Backend (Express + Node.js)   │
│   - API routes                  │
│   - Business logic              │
│   - Mongoose models             │
└───────────┬─────────────────────┘
            │ Mongoose ODM
            ↓
┌─────────────────────────────────┐
│   Database (MongoDB)            │ ← MongoDB stores data
│   - Collections                 │
│   - Documents                   │
│   - Indexes                     │
└─────────────────────────────────┘

Data flow example:
1. User clicks "Create Post" in React
2. React sends POST request to Express API
3. Express validates data using Mongoose schema
4. Mongoose saves document to MongoDB
5. MongoDB returns saved document
6. Express sends response back to React
7. React updates UI with new post`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master MongoDB for Full Stack Development"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers MongoDB from basics to advanced aggregations. Build data-driven applications with Mongoose and best practices."}
                </p>
                <Link href="/full-stack-javascript" className="btn btn-primary">
                  {"Explore JavaScript Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-javascript/articles/nodejs" className="related-article-card">
                    <h4>
                      {"Node.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Backend runtime for MongoDB"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/expressjs" className="related-article-card">
                    <h4>
                      {"Express.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs with MongoDB"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/rest-apis" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Design APIs for MongoDB"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn MongoDB."} />
    </>
  );
}
