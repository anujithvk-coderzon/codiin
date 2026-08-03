import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Node.js: JavaScript on the Server",
  description: "Learn Node.js - JavaScript runtime for building scalable server-side applications. Master event loop, non-blocking I/O, npm, and modules.",
  keywords: ["Node.js tutorial", "server-side JavaScript", "event loop", "npm", "asynchronous programming", "backend development"],
  alternates: { canonical: "/full-stack-javascript/articles/nodejs" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/nodejs",
    title: "Node.js: JavaScript on the Server",
    description: "Master Node.js for building fast, scalable backend applications.",
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
  "headline": "Node.js: JavaScript on the Server",
  "description": "Complete guide to Node.js for server-side development",
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

export default function FullStackJavascriptNodejsPage() {
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
                {"Node.js"}
              </span>
            </div>
            <h1>
              {"Node.js"}
            </h1>
            <p className="article-subtitle">
              {"JavaScript on the Server"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"17 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Node.js?"}
                </h2>
                <p>
                  {"Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server. Before Node.js, JavaScript could only run in browsers. Now, you can build complete applications using just JavaScript."}
                </p>
                <p>
                  {"Think of Node.js as giving JavaScript superpowers - it can now read/write files, access databases, handle network requests, and everything else a server needs to do. It's like giving a browser-based language the ability to work anywhere."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Node.js?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"One Language Everywhere:"}
                    </strong>
                    {" Use JavaScript for frontend and backend - no context switching"}
                  </li>
                  <li>
                    <strong>
                      {"Fast and Efficient:"}
                    </strong>
                    {" Non-blocking I/O handles thousands of concurrent connections with minimal overhead"}
                  </li>
                  <li>
                    <strong>
                      {"NPM Ecosystem:"}
                    </strong>
                    {" Over 2 million packages - largest software registry in the world"}
                  </li>
                  <li>
                    <strong>
                      {"Real-time Applications:"}
                    </strong>
                    {" Perfect for chat apps, live updates, collaborative tools"}
                  </li>
                  <li>
                    <strong>
                      {"Scalable:"}
                    </strong>
                    {" Event-driven architecture scales well for I/O-intensive applications"}
                  </li>
                  <li>
                    <strong>
                      {"Industry Adoption:"}
                    </strong>
                    {" Used by Netflix, LinkedIn, Uber, PayPal, NASA"}
                  </li>
                  <li>
                    <strong>
                      {"Active Community:"}
                    </strong>
                    {" Huge developer community, abundant learning resources"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"How Node.js Works: The Event Loop"}
                </h2>
                <p>
                  {"The event loop is Node.js's secret sauce. It's what makes Node.js fast and able to handle many connections simultaneously."}
                </p>
                <div className="code-block">
                  <pre><code>{`Traditional Server (PHP, Ruby):
Each request = New thread

Request 1 → Thread 1 (waits for database...)
Request 2 → Thread 2 (waits for database...)
Request 3 → Thread 3 (waits for database...)
...
Request 1000 → Thread 1000 (system crashes!)

Node.js (Event Loop):
All requests = Single thread + Event Loop

Request 1 → Event Loop → Database (callback queued)
Request 2 → Event Loop → Database (callback queued)
Request 3 → Event Loop → Database (callback queued)
...
Database responds → Execute callbacks

The Event Loop Cycle:
┌───────────────────────────┐
│   1. Execute Timers       │ setTimeout, setInterval
│   2. Execute I/O Callbacks│ Network, File operations
│   3. Poll for Events      │ Wait for new events
│   4. Execute setImmediate │ Special timers
│   5. Close Events         │ Cleanup
└───────────────────────────┘
      ↓
   Repeat

Non-Blocking I/O Example:

// ✗ Blocking (bad - freezes entire server)
const data = fs.readFileSync('file.txt');
console.log(data); // Wait for file read
console.log('Next line'); // Executes after file read

// ✓ Non-blocking (good - server keeps running)
fs.readFile('file.txt', (err, data) => {
    console.log(data); // Executes when file is ready
});
console.log('Next line'); // Executes immediately`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Node.js"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Real-time Applications:"}
                    </strong>
                    {" Chat apps, collaboration tools, live dashboards"}
                  </li>
                  <li>
                    <strong>
                      {"REST APIs:"}
                    </strong>
                    {" Backend services for mobile/web apps"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices:"}
                    </strong>
                    {" Small, focused services that work together"}
                  </li>
                  <li>
                    <strong>
                      {"Streaming Applications:"}
                    </strong>
                    {" Video/audio streaming, file uploads"}
                  </li>
                  <li>
                    <strong>
                      {"SPAs (Single Page Applications):"}
                    </strong>
                    {" Serve React/Angular/Vue apps"}
                  </li>
                  <li>
                    <strong>
                      {"I/O Heavy Operations:"}
                    </strong>
                    {" File operations, database queries, API calls"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When NOT to use Node.js:"}
                  </strong>
                  {" CPU-intensive tasks (video encoding, image processing, complex calculations) - use Python, Go, or Java instead."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Modules: Built-in Functionality"}
                </h2>
                <p>
                  {"Node.js comes with powerful built-in modules. No installation needed!"}
                </p>
                <div className="code-block">
                  <pre><code>{`// 1. File System (fs) - read/write files
const fs = require('fs');

// Read file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Write file
fs.writeFile('output.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('File saved!');
});

// 2. HTTP - create web servers
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// 3. Path - work with file paths
const path = require('path');

console.log(path.join('/users', 'john', 'docs')); // /users/john/docs
console.log(path.basename('/users/john/file.txt')); // file.txt
console.log(path.extname('file.txt')); // .txt

// 4. OS - operating system info
const os = require('os');

console.log(os.platform()); // darwin, win32, linux
console.log(os.cpus().length); // Number of CPU cores
console.log(os.freemem()); // Free memory in bytes

// 5. Events - create custom events
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', { message });
    }
}

const logger = new Logger();
logger.on('messageLogged', (data) => {
    console.log('Event received:', data);
});
logger.log('Hello!');

// 6. Stream - handle large data efficiently
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream); // Efficient file copy`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"NPM: Node Package Manager"}
                </h2>
                <p>
                  {"NPM is the world's largest software registry. It lets you install and manage third-party packages (libraries) for your projects."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Initialize a new Node project
npm init -y

// Creates package.json:
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {},
  "devDependencies": {}
}

// Install packages
npm install express          // Add to dependencies
npm install nodemon --save-dev  // Add to devDependencies
npm install                  // Install all packages in package.json

// Remove packages
npm uninstall express

// Update packages
npm update

// Run scripts
npm start    // Runs "node index.js"
npm run dev  // Runs "nodemon index.js"

// Global installation (command-line tools)
npm install -g nodemon
npm install -g typescript

// Popular packages:
- express: Web framework
- mongoose: MongoDB ODM
- axios: HTTP client
- dotenv: Environment variables
- jsonwebtoken: JWT authentication
- bcrypt: Password hashing
- cors: Cross-origin requests
- nodemon: Auto-restart during development`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Modules: Organizing Code"}
                </h2>
                <p>
                  {"Modules help organize code into reusable files. Node.js supports CommonJS (traditional) and ES Modules (modern)."}
                </p>
                <div className="code-block">
                  <pre><code>{`// CommonJS (traditional Node.js way)

// math.js - export module
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
// or: exports.add = add;

// app.js - import module
const math = require('./math');
console.log(math.add(5, 3)); // 8

// Destructuring import
const { add, subtract } = require('./math');
console.log(add(5, 3)); // 8

// ES Modules (modern way)
// Add "type": "module" to package.json

// math.mjs - export module
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Default export
export default class Calculator {
    add(a, b) { return a + b; }
}

// app.mjs - import module
import { add, subtract } from './math.mjs';
import Calculator from './math.mjs';

console.log(add(5, 3)); // 8

// Built-in vs Third-party vs Local modules
const fs = require('fs');           // Built-in
const express = require('express');  // Third-party (npm)
const myModule = require('./my-module'); // Local`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Asynchronous Programming"}
                </h2>
                <p>
                  {"Node.js is all about async programming. Here are the three ways to handle async operations:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// 1. Callbacks (old way)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Callback hell (nested callbacks - hard to read)
fs.readFile('file1.txt', (err, data1) => {
    fs.readFile('file2.txt', (err, data2) => {
        fs.readFile('file3.txt', (err, data3) => {
            // Too many nested callbacks!
        });
    });
});

// 2. Promises (better)
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
    .then(data => {
        console.log(data);
        return fs.readFile('file2.txt', 'utf8');
    })
    .then(data2 => {
        console.log(data2);
    })
    .catch(err => {
        console.error(err);
    });

// 3. Async/Await (best - modern way)
async function readFiles() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        const data2 = await fs.readFile('file2.txt', 'utf8');
        const data3 = await fs.readFile('file3.txt', 'utf8');
        console.log(data1, data2, data3);
    } catch (err) {
        console.error('Error:', err);
    }
}

readFiles();

// Parallel async operations
async function fetchMultiple() {
    try {
        // Wait for all promises simultaneously
        const [user, posts, comments] = await Promise.all([
            fetchUser(),
            fetchPosts(),
            fetchComments()
        ]);
        console.log(user, posts, comments);
    } catch (err) {
        console.error(err);
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Creating a Simple HTTP Server"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Basic HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send response
    res.write('<h1>Hello World</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Routing (handling different URLs)
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    } else if (url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ users: ['Alice', 'Bob'] }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000);

// Reading from file and serving
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(3000);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Environment Variables"}
                </h2>
                <p>
                  {"Store sensitive information (API keys, database passwords) in environment variables, not in code."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Install dotenv package
npm install dotenv

// Create .env file (DON'T commit to Git!)
PORT=3000
DB_URL=mongodb://localhost:27017/mydb
API_KEY=your-secret-key
NODE_ENV=development

// Load environment variables in your app
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
const apiKey = process.env.API_KEY;

console.log('Server port:', port);

// Access built-in environment variables
console.log(process.env.NODE_ENV); // development/production
console.log(process.env.HOME); // User home directory
console.log(process.argv); // Command line arguments`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Try-catch for synchronous code
try {
    const data = JSON.parse('invalid json');
} catch (err) {
    console.error('Parse error:', err.message);
}

// Error-first callbacks (Node.js convention)
fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

// Promise error handling
fetch('/api/users')
    .then(res => res.json())
    .catch(err => console.error('Fetch failed:', err));

// Async/await error handling
async function getUser() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Re-throw if needed
    }
}

// Global error handlers
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Promise Rejection:', reason);
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use async/await:"}
                    </strong>
                    {" Cleaner than callbacks and promises"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors properly:"}
                    </strong>
                    {" Always catch errors in async operations"}
                  </li>
                  <li>
                    <strong>
                      {"Use environment variables:"}
                    </strong>
                    {" Never hardcode secrets in code"}
                  </li>
                  <li>
                    <strong>
                      {"Keep functions small:"}
                    </strong>
                    {" Each function should do one thing"}
                  </li>
                  <li>
                    <strong>
                      {"Use nodemon in development:"}
                    </strong>
                    {" Auto-restart server on file changes"}
                  </li>
                  <li>
                    <strong>
                      {"Use ESLint:"}
                    </strong>
                    {" Catch errors and enforce code style"}
                  </li>
                  <li>
                    <strong>
                      {"Validate user input:"}
                    </strong>
                    {" Never trust client data"}
                  </li>
                  <li>
                    <strong>
                      {"Use a framework:"}
                    </strong>
                    {" Express.js for web apps, avoid raw HTTP module"}
                  </li>
                  <li>
                    <strong>
                      {"Log properly:"}
                    </strong>
                    {" Use winston or bunyan instead of console.log"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Where Node.js Fits in the Stack"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Full Stack JavaScript Architecture:

┌─────────────────────────────────┐
│   Frontend (Browser)            │
│   - React / Angular / Vue       │
│   - HTML, CSS, JavaScript       │
└───────────┬─────────────────────┘
            │ HTTP Requests
            ↓
┌─────────────────────────────────┐
│   Backend (Node.js)             │ ← Node.js sits here
│   - Express.js (Web Framework)  │
│   - REST APIs / GraphQL         │
│   - Business Logic              │
│   - Authentication              │
└───────────┬─────────────────────┘
            │ Database Queries
            ↓
┌─────────────────────────────────┐
│   Database                      │
│   - MongoDB (NoSQL)             │
│   - PostgreSQL (SQL)            │
│   - Redis (Cache)               │
└─────────────────────────────────┘

Node.js is the glue that connects:
- Frontend (receives requests)
- Database (queries data)
- External APIs (third-party services)
- File System (uploads, logging)
- Real-time features (WebSockets)`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Node.js for Backend Development"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers Node.js from basics to production-ready applications. Build scalable APIs with expert mentorship."}
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
                      {"Web framework for Node.js"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/mongodb" className="related-article-card">
                    <h4>
                      {"MongoDB"}
                    </h4>
                    {" "}
                    <p>
                      {"Database for Node.js apps"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/rest-apis" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs with Node.js"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Node.js."} />
    </>
  );
}
