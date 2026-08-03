import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Express.js: Fast Web Framework for Node.js",
  description: "Learn Express.js - the fast, minimalist web framework for Node.js. Master routing, middleware, request/response cycle, and building REST APIs.",
  keywords: ["Express.js tutorial", "Node.js framework", "middleware", "routing", "REST API", "web development"],
  alternates: { canonical: "/full-stack-javascript/articles/expressjs" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/expressjs",
    title: "Express.js: Fast Web Framework for Node.js",
    description: "Master Express.js for building web applications and APIs.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Express.js: Fast Web Framework for Node.js",
  "description": "Complete guide to Express.js for building web applications",
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

export default function FullStackJavascriptExpressjsPage() {
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
                {"Express.js"}
              </span>
            </div>
            <h1>
              {"Express.js"}
            </h1>
            <p className="article-subtitle">
              {"Fast Web Framework for Node.js"}
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
                  {"What is Express.js?"}
                </h2>
                <p>
                  {"Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It's the de facto standard for building web servers with Node.js."}
                </p>
                <p>
                  {"Think of Express as a toolbox that simplifies building web servers. While you can build servers with raw Node.js (using the http module), Express makes it much easier - like using power tools instead of hand tools. It handles routing, request parsing, and much more with simple, clean code."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Express.js?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Simple and Minimal:"}
                    </strong>
                    {" Unopinionated framework, gives you freedom to structure your app"}
                  </li>
                  <li>
                    <strong>
                      {"Fast Development:"}
                    </strong>
                    {" Less code to write, faster time to market"}
                  </li>
                  <li>
                    <strong>
                      {"Robust Routing:"}
                    </strong>
                    {" Clean and powerful routing system"}
                  </li>
                  <li>
                    <strong>
                      {"Middleware Ecosystem:"}
                    </strong>
                    {" Hundreds of plugins for common tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Industry Standard:"}
                    </strong>
                    {" Used by IBM, Uber, Accenture, Fox Sports"}
                  </li>
                  <li>
                    <strong>
                      {"Great for APIs:"}
                    </strong>
                    {" Perfect for building RESTful APIs"}
                  </li>
                  <li>
                    <strong>
                      {"Large Community:"}
                    </strong>
                    {" Extensive documentation, tutorials, and support"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Express vs Other Frameworks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Express.js (Minimalist)
✓ Lightweight and fast
✓ Flexible, unopinionated
✓ Large ecosystem
✗ Need to choose libraries yourself
✗ More setup required

Nest.js (Full Framework)
✓ TypeScript-first
✓ Angular-like structure
✓ Everything included
✗ Steeper learning curve
✗ More opinionated

Fastify (Performance)
✓ Faster than Express
✓ Built-in schema validation
✓ Modern async/await
✗ Smaller ecosystem
✗ Less mature

Koa (Lightweight)
✓ By Express creators
✓ Modern async/await
✓ Smaller core
✗ Smaller community
✗ Need more middleware

When to choose Express:
- Building REST APIs
- Need flexibility and control
- Want largest ecosystem
- Quick prototyping/MVPs
- Learning backend development`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with Express"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Install Express
npm install express

// Basic Express server
const express = require('express');
const app = express();
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});

// Compare with raw Node.js
// Express (clean and simple):
app.get('/', (req, res) => res.send('Hello'));

// Raw Node.js (verbose):
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello');
    }
});

Express saves you from manually:
- Parsing URLs
- Setting headers
- Handling different HTTP methods
- Managing complex routing`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Routing: Handling Different URLs"}
                </h2>
                <p>
                  {"Routing determines how your application responds to client requests to specific endpoints (URLs)."}
                </p>
                <div className="code-block">
                  <pre><code>{`const express = require('express');
const app = express();

// GET request
app.get('/', (req, res) => {
    res.send('Home Page');
});

// POST request
app.post('/users', (req, res) => {
    res.send('Create new user');
});

// PUT request
app.put('/users/:id', (req, res) => {
    res.send(\`Update user \${req.params.id}\`);
});

// DELETE request
app.delete('/users/:id', (req, res) => {
    res.send(\`Delete user \${req.params.id}\`);
});

// Route parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(\`User ID: \${userId}\`);
});

// Multiple parameters
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params;
    res.json({ postId, commentId });
});

// Query parameters (?name=John&age=25)
app.get('/search', (req, res) => {
    const { name, age } = req.query;
    res.send(\`Search: \${name}, \${age}\`);
});

// Route handlers (multiple callbacks)
app.get('/example',
    (req, res, next) => {
        console.log('First handler');
        next(); // Pass to next handler
    },
    (req, res) => {
        res.send('Second handler');
    }
);

// Route chaining
app.route('/book')
    .get((req, res) => res.send('Get book'))
    .post((req, res) => res.send('Add book'))
    .put((req, res) => res.send('Update book'));

// Express Router (organize routes)
const router = express.Router();

router.get('/profile', (req, res) => {
    res.send('User profile');
});

router.get('/settings', (req, res) => {
    res.send('User settings');
});

app.use('/user', router);
// Routes: /user/profile, /user/settings`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Middleware: The Express Pipeline"}
                </h2>
                <p>
                  {"Middleware functions are functions that have access to the request and response objects. They can modify them, end the request, or pass control to the next middleware."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Middleware flow:
Request → Middleware 1 → Middleware 2 → Route Handler → Response

// Application-level middleware (runs on every request)
app.use((req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next(); // Must call next() to continue
});

// Built-in middleware

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Third-party middleware

// CORS - allow cross-origin requests
const cors = require('cors');
app.use(cors());

// Morgan - logging
const morgan = require('morgan');
app.use(morgan('dev'));

// Helmet - security headers
const helmet = require('helmet');
app.use(helmet());

// Custom middleware
const logger = (req, res, next) => {
    console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
    next();
};
app.use(logger);

// Authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    // Verify token
    req.user = { id: 1, name: 'John' }; // Add user to request
    next();
};

// Apply to specific routes
app.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'Protected data', user: req.user });
});

// Route-level middleware
const validateUser = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email required' });
    }
    next();
};

app.post('/register', validateUser, (req, res) => {
    res.send('User registered');
});

// Error-handling middleware (has 4 parameters)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Request and Response Objects"}
                </h2>
                <p>
                  {"The request (req) and response (res) objects contain all information about the HTTP request and provide methods to send responses."}
                </p>
                <div className="code-block">
                  <pre><code>{`// REQUEST OBJECT (req)

app.get('/example', (req, res) => {
    // Route parameters
    req.params.id // /users/:id

    // Query string
    req.query.name // /search?name=John

    // Request body (needs express.json() middleware)
    req.body.email // POST/PUT data

    // Headers
    req.headers['content-type']
    req.get('authorization')

    // Cookies (needs cookie-parser middleware)
    req.cookies.sessionId

    // Request info
    req.method // GET, POST, PUT, DELETE
    req.url // /users/123
    req.path // /users/123
    req.hostname // localhost
    req.ip // Client IP address
    req.protocol // http or https
});

// RESPONSE OBJECT (res)

app.get('/example', (req, res) => {
    // Send text
    res.send('Hello World');

    // Send JSON
    res.json({ message: 'Success', data: users });

    // Set status code
    res.status(404).send('Not Found');
    res.status(201).json({ message: 'Created' });

    // Redirect
    res.redirect('/home');
    res.redirect(301, '/new-url'); // Permanent redirect

    // Set headers
    res.set('Content-Type', 'text/html');
    res.type('json');

    // Send file
    res.sendFile('/path/to/file.pdf');

    // Download file
    res.download('/path/to/report.pdf', 'report.pdf');

    // Render template (with view engine)
    res.render('index', { title: 'Home' });

    // End response without sending data
    res.end();

    // Chain methods
    res
        .status(200)
        .set('X-Custom-Header', 'value')
        .json({ success: true });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a REST API"}
                </h2>
                <div className="code-block">
                  <pre><code>{`const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON bodies

// In-memory database (for demo)
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// CREATE new user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users.splice(index, 1);
    res.status(204).send(); // No content
});

app.listen(3000, () => {
    console.log('API server running on port 3000');
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Synchronous error handling
app.get('/sync-error', (req, res) => {
    throw new Error('Something went wrong!');
    // Express catches this automatically
});

// Asynchronous error handling
app.get('/async-error', async (req, res, next) => {
    try {
        const data = await fetchData();
        res.json(data);
    } catch (err) {
        next(err); // Pass error to error handler
    }
});

// Custom error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}

// Using custom error
app.get('/user/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new AppError('User not found', 404);
        }
        res.json(user);
    } catch (err) {
        next(err);
    }
});

// 404 handler (must be after all routes)
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.url
    });
});

// Global error handler (must have 4 parameters)
app.use((err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Organizing Routes with Express Router"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all users' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create user' });
});

router.get('/:id', (req, res) => {
    res.json({ message: \`Get user \${req.params.id}\` });
});

module.exports = router;

// routes/posts.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all posts' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create post' });
});

module.exports = router;

// app.js (main file)
const express = require('express');
const app = express();

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Routes become:
// GET  /api/users
// POST /api/users
// GET  /api/users/:id
// GET  /api/posts
// POST /api/posts

app.listen(3000);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use environment variables:"}
                    </strong>
                    {" Store config in .env files, never hardcode"}
                  </li>
                  <li>
                    <strong>
                      {"Validate input:"}
                    </strong>
                    {" Always validate and sanitize user input"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors properly:"}
                    </strong>
                    {" Use try-catch and error middleware"}
                  </li>
                  <li>
                    <strong>
                      {"Use async/await:"}
                    </strong>
                    {" Cleaner than callbacks and promises"}
                  </li>
                  <li>
                    <strong>
                      {"Organize routes:"}
                    </strong>
                    {" Use Express Router to keep code modular"}
                  </li>
                  <li>
                    <strong>
                      {"Enable CORS:"}
                    </strong>
                    {" Use cors middleware for cross-origin requests"}
                  </li>
                  <li>
                    <strong>
                      {"Use compression:"}
                    </strong>
                    {" Compress responses with compression middleware"}
                  </li>
                  <li>
                    <strong>
                      {"Implement rate limiting:"}
                    </strong>
                    {" Protect against abuse with express-rate-limit"}
                  </li>
                  <li>
                    <strong>
                      {"Use helmet:"}
                    </strong>
                    {" Security middleware for setting HTTP headers"}
                  </li>
                  <li>
                    <strong>
                      {"Log requests:"}
                    </strong>
                    {" Use morgan for development, winston for production"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Express.js"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"REST APIs:"}
                    </strong>
                    {" Building backend services for web/mobile apps"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices:"}
                    </strong>
                    {" Small, focused services"}
                  </li>
                  <li>
                    <strong>
                      {"Real-time Apps:"}
                    </strong>
                    {" With Socket.io for WebSocket support"}
                  </li>
                  <li>
                    <strong>
                      {"Server-Side Rendering:"}
                    </strong>
                    {" Serve React/Angular apps"}
                  </li>
                  <li>
                    <strong>
                      {"Proxy Server:"}
                    </strong>
                    {" Forward requests to other services"}
                  </li>
                  <li>
                    <strong>
                      {"Authentication Services:"}
                    </strong>
                    {" Login, signup, password reset"}
                  </li>
                  <li>
                    <strong>
                      {"File Upload Services:"}
                    </strong>
                    {" Handle file uploads with multer"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When NOT to use Express:"}
                  </strong>
                  {" CPU-intensive tasks (use worker threads or separate service), extremely high-performance needs (consider Fastify or Go)."}
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Production-Ready APIs with Express"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers Express.js from basics to advanced patterns. Build scalable REST APIs with security, authentication, and best practices."}
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
                      {"JavaScript runtime for Express"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/rest-apis" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"API design principles"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/mongodb" className="related-article-card">
                    <h4>
                      {"MongoDB"}
                    </h4>
                    {" "}
                    <p>
                      {"Database for Express apps"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Express.js."} />
    </>
  );
}
