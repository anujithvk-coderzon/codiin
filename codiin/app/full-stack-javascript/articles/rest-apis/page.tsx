import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "REST APIs: Building Web Services",
  description: "Learn REST APIs - design principles, HTTP methods, status codes, endpoints, request/response patterns. Understand API design and when to use REST vs GraphQL.",
  keywords: ["REST API tutorial", "API design", "HTTP methods", "RESTful services", "status codes", "web services"],
  alternates: { canonical: "/full-stack-javascript/articles/rest-apis" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/rest-apis",
    title: "REST APIs: Building Web Services",
    description: "Master REST API design and implementation for modern web applications.",
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
  "headline": "REST APIs: Building Web Services",
  "description": "Complete guide to REST API design and implementation",
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

export default function FullStackJavascriptRestApisPage() {
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
                {"REST APIs"}
              </span>
            </div>
            <h1>
              {"REST APIs"}
            </h1>
            <p className="article-subtitle">
              {"Building Web Services"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"19 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is a REST API?"}
                </h2>
                <p>
                  {"REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API is a way for different applications to communicate over the internet using HTTP requests, just like your browser does when visiting websites."}
                </p>
                <p>
                  {"Think of a REST API as a waiter in a restaurant. You (the client) look at the menu (API documentation), tell the waiter what you want (make a request), the waiter takes your order to the kitchen (server), and brings back your food (response). The waiter doesn't need to know how the kitchen works - they just follow a set of rules (REST principles)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why REST APIs?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Separation of Concerns:"}
                    </strong>
                    {" Frontend and backend can be developed independently"}
                  </li>
                  <li>
                    <strong>
                      {"Platform Independent:"}
                    </strong>
                    {" Any client (web, mobile, IoT) can consume the API"}
                  </li>
                  <li>
                    <strong>
                      {"Scalable:"}
                    </strong>
                    {" Stateless design makes it easy to scale horizontally"}
                  </li>
                  <li>
                    <strong>
                      {"Cacheable:"}
                    </strong>
                    {" Responses can be cached for better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Simple and Standard:"}
                    </strong>
                    {" Uses HTTP methods everyone knows"}
                  </li>
                  <li>
                    <strong>
                      {"Language Agnostic:"}
                    </strong>
                    {" Build in Node.js, consume from Python/Java/etc."}
                  </li>
                  <li>
                    <strong>
                      {"Industry Standard:"}
                    </strong>
                    {" Most web services are RESTful"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"HTTP Methods: CRUD Operations"}
                </h2>
                <p>
                  {"REST APIs use HTTP methods to indicate the action you want to perform. These map to CRUD (Create, Read, Update, Delete) operations."}
                </p>
                <div className="code-block">
                  <pre><code>{`HTTP Method    CRUD     Purpose                Safe?  Idempotent?
GET            Read     Retrieve data          Yes    Yes
POST           Create   Create new resource    No     No
PUT            Update   Replace entire resource No     Yes
PATCH          Update   Modify part of resource No     No
DELETE         Delete   Remove resource        No     Yes

Safe: Doesn't modify data (read-only)
Idempotent: Same request multiple times = same result

Examples:

GET /api/users
→ Get list of all users
→ Returns: 200 OK with array of users

GET /api/users/123
→ Get user with ID 123
→ Returns: 200 OK with user object

POST /api/users
Body: { "name": "Alice", "email": "alice@example.com" }
→ Create new user
→ Returns: 201 Created with new user object

PUT /api/users/123
Body: { "name": "Alice Updated", "email": "new@example.com" }
→ Replace entire user 123
→ Returns: 200 OK with updated user

PATCH /api/users/123
Body: { "email": "newemail@example.com" }
→ Update only email of user 123
→ Returns: 200 OK with updated user

DELETE /api/users/123
→ Delete user 123
→ Returns: 204 No Content

PUT vs PATCH:
PUT    - Replace entire resource (send all fields)
PATCH  - Update specific fields (send only changed fields)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"HTTP Status Codes: Communication Results"}
                </h2>
                <p>
                  {"Status codes tell the client what happened with their request. Always use appropriate status codes!"}
                </p>
                <div className="code-block">
                  <pre><code>{`2xx - Success
200 OK              - Request succeeded
201 Created         - Resource created successfully
204 No Content      - Success but no data to return (DELETE)

3xx - Redirection
301 Moved Permanently  - Resource permanently moved
302 Found              - Resource temporarily moved
304 Not Modified       - Cached version is still valid

4xx - Client Errors (user's fault)
400 Bad Request        - Invalid request data
401 Unauthorized       - Authentication required
403 Forbidden          - Authenticated but no permission
404 Not Found          - Resource doesn't exist
409 Conflict           - Conflict with current state (duplicate)
422 Unprocessable      - Validation failed
429 Too Many Requests  - Rate limit exceeded

5xx - Server Errors (server's fault)
500 Internal Server Error  - Something went wrong on server
502 Bad Gateway           - Invalid response from upstream server
503 Service Unavailable   - Server temporarily down
504 Gateway Timeout       - Upstream server timeout

Example responses:

// Success
res.status(200).json({ users: [...] });

// Created
res.status(201).json({ message: 'User created', user: newUser });

// No Content
res.status(204).send();

// Bad Request
res.status(400).json({ error: 'Email is required' });

// Unauthorized
res.status(401).json({ error: 'Invalid token' });

// Not Found
res.status(404).json({ error: 'User not found' });

// Server Error
res.status(500).json({ error: 'Database connection failed' });`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Endpoint Design: URL Structure"}
                </h2>
                <p>
                  {"Well-designed endpoints are intuitive and follow consistent patterns. Use nouns (not verbs) and be hierarchical."}
                </p>
                <div className="code-block">
                  <pre><code>{`Good API Design:

// ✓ Use nouns for resources
GET    /api/users
POST   /api/users
GET    /api/users/123
PUT    /api/users/123
DELETE /api/users/123

// ✗ Don't use verbs in URLs
GET    /api/getUsers        // Bad
POST   /api/createUser      // Bad
DELETE /api/deleteUser/123  // Bad

// ✓ Use plural nouns
GET /api/users              // Good
GET /api/products           // Good

// ✗ Don't mix singular/plural
GET /api/user               // Bad
GET /api/product            // Bad

// ✓ Nested resources (hierarchical)
GET /api/users/123/posts         // Get posts by user 123
GET /api/posts/456/comments      // Get comments on post 456
POST /api/users/123/posts        // Create post for user 123

// ✗ Don't nest too deep (max 2-3 levels)
GET /api/users/123/posts/456/comments/789/likes  // Too deep!

// ✓ Use query parameters for filtering/sorting
GET /api/users?role=admin
GET /api/users?sort=name&order=asc
GET /api/products?category=electronics&price_max=1000
GET /api/posts?page=2&limit=10

// ✓ Versioning
GET /api/v1/users
GET /api/v2/users

// Complete example
GET    /api/v1/users              // List all users
GET    /api/v1/users?role=admin   // Filter by role
GET    /api/v1/users/123          // Get user 123
POST   /api/v1/users              // Create user
PUT    /api/v1/users/123          // Update user 123
PATCH  /api/v1/users/123          // Partial update
DELETE /api/v1/users/123          // Delete user 123
GET    /api/v1/users/123/posts    // Get posts by user 123`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Request and Response Format"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// REQUEST FORMAT

// Headers
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept: application/json

// Body (POST/PUT/PATCH)
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "age": 25,
  "roles": ["user", "admin"]
}

// RESPONSE FORMAT

// Success response (consistent structure)
{
  "success": true,
  "data": {
    "id": 123,
    "name": "Alice Smith",
    "email": "alice@example.com",
    "age": 25,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}

// List response with pagination
{
  "success": true,
  "data": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}

// Error response (consistent structure)
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      },
      {
        "field": "age",
        "message": "Age must be at least 18"
      }
    ]
  }
}

// Express.js example
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Email is required'
        }
      });
    }

    // Create user
    const user = await User.create({ name, email, age });

    // Success response
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (err) {
    // Error response
    res.status(500).json({
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: 'Failed to create user',
        details: err.message
      }
    });
  }
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Authentication and Authorization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Common authentication methods

// 1. JWT (JSON Web Token) - Most popular
// User logs in → Server creates JWT → Client stores JWT
// Client sends JWT with each request

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Verify credentials
  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Create JWT
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({ token, user });
});

// Protected route middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Use authentication
app.get('/api/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});

// Authorization (role-based access)
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};

// Admin-only route
app.delete('/api/users/:id',
  authenticate,
  authorize('admin'),
  (req, res) => {
    // Delete user
  }
);

// 2. API Keys (for server-to-server)
const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' });
  }
  next();
};

// 3. OAuth (social login)
// Use passport.js for Google/Facebook/GitHub login`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Pagination, Filtering, and Sorting"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Pagination - handle large datasets
app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const users = await User.find()
    .skip(skip)
    .limit(limit);

  const total = await User.countDocuments();

  res.json({
    data: users,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
});

// Usage:
// GET /api/users?page=2&limit=20

// Filtering
app.get('/api/products', async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (minPrice) filter.price = { $gte: parseInt(minPrice) };
  if (maxPrice) filter.price = { ...filter.price, $lte: parseInt(maxPrice) };

  const products = await Product.find(filter);
  res.json({ data: products });
});

// Usage:
// GET /api/products?category=electronics&minPrice=100&maxPrice=500

// Sorting
app.get('/api/posts', async (req, res) => {
  const { sort, order } = req.query;

  const sortObj = {};
  if (sort) {
    sortObj[sort] = order === 'desc' ? -1 : 1;
  } else {
    sortObj.createdAt = -1; // Default sort
  }

  const posts = await Post.find().sort(sortObj);
  res.json({ data: posts });
});

// Usage:
// GET /api/posts?sort=likes&order=desc
// GET /api/posts?sort=createdAt&order=asc

// Complete example with all features
app.get('/api/products', async (req, res) => {
  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Filtering
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  if (req.query.search) filter.name = { $regex: req.query.search, $options: 'i' };

  // Sorting
  const sort = {};
  if (req.query.sort) {
    sort[req.query.sort] = req.query.order === 'desc' ? -1 : 1;
  }

  const products = await Product.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const total = await Product.countDocuments(filter);

  res.json({
    data: products,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) }
  });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"REST API Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use nouns, not verbs:"}
                    </strong>
                    <code>
                      {"/users"}
                    </code>
                    {" not "}
                    <code>
                      {"/getUsers"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Use proper HTTP methods:"}
                    </strong>
                    {" GET for reading, POST for creating, etc."}
                  </li>
                  <li>
                    <strong>
                      {"Return proper status codes:"}
                    </strong>
                    {" 200, 201, 400, 404, 500, etc."}
                  </li>
                  <li>
                    <strong>
                      {"Version your API:"}
                    </strong>
                    <code>
                      {"/api/v1/users"}
                    </code>
                    {" for future changes"}
                  </li>
                  <li>
                    <strong>
                      {"Use consistent response format:"}
                    </strong>
                    {" Same structure for all endpoints"}
                  </li>
                  <li>
                    <strong>
                      {"Validate input:"}
                    </strong>
                    {" Check all user input before processing"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors gracefully:"}
                    </strong>
                    {" Return meaningful error messages"}
                  </li>
                  <li>
                    <strong>
                      {"Document your API:"}
                    </strong>
                    {" Use Swagger/OpenAPI for documentation"}
                  </li>
                  <li>
                    <strong>
                      {"Implement rate limiting:"}
                    </strong>
                    {" Prevent abuse"}
                  </li>
                  <li>
                    <strong>
                      {"Use HTTPS:"}
                    </strong>
                    {" Always encrypt data in transit"}
                  </li>
                  <li>
                    <strong>
                      {"Enable CORS:"}
                    </strong>
                    {" Allow cross-origin requests when needed"}
                  </li>
                  <li>
                    <strong>
                      {"Keep it stateless:"}
                    </strong>
                    {" Each request should be independent"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"REST vs GraphQL: When to Use What"}
                </h2>
                <div className="code-block">
                  <pre><code>{`REST API
✓ Simple, well-understood
✓ Cacheable
✓ Multiple endpoints (clear separation)
✓ Works well with HTTP/CDN
✗ Over-fetching (get more data than needed)
✗ Under-fetching (need multiple requests)
✗ Versioning can be complex

Example REST:
GET /api/users/123
→ Returns entire user object (might have unused fields)

GET /api/users/123/posts
→ Need separate request for posts

GraphQL
✓ Request exactly what you need
✓ Single endpoint
✓ Strongly typed
✓ Great for complex, nested data
✗ Harder to cache
✗ More complex to set up
✗ Can be overkill for simple APIs

Example GraphQL:
query {
  user(id: 123) {
    name
    email
    posts {
      title
      likes
    }
  }
}
→ Get user and posts in one request, only fields you need

When to use REST:
- Simple CRUD operations
- Public APIs
- Need caching
- Standard web apps
- Multiple clients (web, mobile)
- Team familiar with REST

When to use GraphQL:
- Complex, nested data
- Flexible frontend needs
- Mobile apps (minimize data transfer)
- Multiple client requirements
- Real-time features
- Internal APIs`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Testing REST APIs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Tools for testing
1. Postman - GUI tool for testing APIs
2. cURL - Command-line tool
3. VS Code REST Client - Test in VS Code
4. Jest/Supertest - Automated testing

// cURL examples
curl http://localhost:3000/api/users

curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice","email":"alice@example.com"}'

curl -X PUT http://localhost:3000/api/users/123 \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice Updated"}'

// Automated testing with Jest + Supertest
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  test('GET /api/users returns 200', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });

  test('POST /api/users creates user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'test@example.com'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.name).toBe('Test User');
  });

  test('GET /api/users/invalid returns 404', async () => {
    const res = await request(app).get('/api/users/999999');
    expect(res.statusCode).toBe(404);
  });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Professional REST APIs"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers REST API design, authentication, security, and best practices. Build production-ready APIs with expert guidance."}
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
                  <Link href="/full-stack-javascript/articles/expressjs" className="related-article-card">
                    <h4>
                      {"Express.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Build REST APIs with Express"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/nodejs" className="related-article-card">
                    <h4>
                      {"Node.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Backend runtime for APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/mongodb" className="related-article-card">
                    <h4>
                      {"MongoDB"}
                    </h4>
                    {" "}
                    <p>
                      {"Database for REST APIs"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn REST APIs."} />
    </>
  );
}
