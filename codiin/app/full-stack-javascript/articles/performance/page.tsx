import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Performance Optimization - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/performance" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/performance",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptPerformancePage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <div className="container">
          <article className="article-content">
            <header className="article-header">
              <Link href="/full-stack-javascript" className="back-link">
                {"← Back to Full Stack JavaScript"}
              </Link>
              <h1>
                {"Performance Optimization"}
              </h1>
              <p className="article-meta">
                {"Techniques for building fast web applications"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Frontend Performance"}
              </h2>
              <h3>
                {"React Optimization"}
              </h3>
              <pre><code>{`// 1. Memoization with React.memo
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Render data */}</div>;
});

// Custom comparison function
const areEqual = (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
};
const MemoizedComponent = React.memo(Component, areEqual);

// 2. useMemo for expensive calculations
function DataTable({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.name.includes(filter));
  }, [items, filter]); // Only recalculate when items or filter change

  return <Table data={filteredItems} />;
}

// 3. useCallback for stable function references
function ParentComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback: new function on every render
  // const handleClick = () => setCount(c => c + 1);

  // With useCallback: stable reference
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <ChildComponent onClick={handleClick} />;
}

// 4. Lazy loading components
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// 5. Virtualization for long lists
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  );

  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}`}</code></pre>
              <h3>
                {"Avoiding Re-renders"}
              </h3>
              <pre><code>{`// Common causes of unnecessary re-renders:

// 1. Inline objects/arrays (new reference every render)
// Bad
<Child style={{ color: 'red' }} />
<Child items={[1, 2, 3]} />

// Good - define outside or use useMemo
const style = { color: 'red' };
const items = [1, 2, 3];
<Child style={style} />
<Child items={items} />

// 2. Inline functions
// Bad
<Button onClick={() => handleClick(id)} />

// Good
const handleButtonClick = useCallback(() => handleClick(id), [id]);
<Button onClick={handleButtonClick} />

// 3. State updates that don't change value
// Bad - creates new object every time
setUser({ ...user }); // Even if nothing changed

// Good - only update when needed
if (newValue !== user.name) {
  setUser({ ...user, name: newValue });
}

// 4. Context value changes
// Bad - new object every render
<Context.Provider value={{ user, setUser }}>

// Good - memoize the value
const contextValue = useMemo(() => ({ user, setUser }), [user]);
<Context.Provider value={contextValue}>`}</code></pre>
              <h3>
                {"Code Splitting"}
              </h3>
              <pre><code>{`// Route-based splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// Component-based splitting
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function Analytics() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>Show Chart</button>
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}

// Named exports with lazy
const { Modal } = lazy(() =>
  import('./components/Modal').then(module => ({
    default: module.Modal
  }))
);

// Preloading on hover/focus
const loadDashboard = () => import('./pages/Dashboard');

function NavLink() {
  return (
    <Link
      to="/dashboard"
      onMouseEnter={loadDashboard}
      onFocus={loadDashboard}
    >
      Dashboard
    </Link>
  );
}`}</code></pre>
              <h3>
                {"Image Optimization"}
              </h3>
              <pre><code>{`// 1. Lazy loading images
<img src="image.jpg" loading="lazy" alt="Description" />

// 2. Responsive images
<img
  src="image-800.jpg"
  srcSet="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Description"
/>

// 3. Modern formats with fallback
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>

// 4. React image component with loading state
function OptimizedImage({ src, alt, placeholder }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="image-container">
      {!loaded && <div className="placeholder">{placeholder}</div>}
      {error && <div className="error">Failed to load</div>}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}

// 5. Next.js Image component (automatic optimization)
import Image from 'next/image';

<Image
  src="/hero.jpg"
  width={1200}
  height={600}
  alt="Hero"
  priority  // Preload above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>`}</code></pre>
              <h2>
                {"Backend Performance"}
              </h2>
              <h3>
                {"Database Optimization"}
              </h3>
              <pre><code>{`// 1. Indexing
// Create indexes for frequently queried fields
db.users.createIndex({ email: 1 });
db.orders.createIndex({ customerId: 1, createdAt: -1 });
db.products.createIndex({ category: 1, price: 1 });

// Compound index for common query patterns
db.orders.createIndex({ status: 1, createdAt: -1 });

// 2. Query optimization
// Bad - fetches all fields
const users = await User.find({ status: 'active' });

// Good - select only needed fields
const users = await User.find({ status: 'active' })
  .select('name email')
  .lean(); // Returns plain objects (faster)

// 3. Pagination
// Bad - skip is slow for large offsets
const users = await User.find().skip(10000).limit(20);

// Good - cursor-based pagination
const users = await User.find({ _id: { $gt: lastId } })
  .sort({ _id: 1 })
  .limit(20);

// 4. Avoid N+1 queries
// Bad - N+1 problem
const orders = await Order.find();
for (const order of orders) {
  order.user = await User.findById(order.userId);
}

// Good - use populate or aggregation
const orders = await Order.find().populate('userId', 'name email');

// Or with $lookup
const orders = await Order.aggregate([
  { $lookup: {
    from: 'users',
    localField: 'userId',
    foreignField: '_id',
    as: 'user'
  }},
  { $unwind: '$user' }
]);

// 5. Batch operations
// Bad - individual inserts
for (const item of items) {
  await Item.create(item);
}

// Good - bulk insert
await Item.insertMany(items);

// Bulk updates
await Item.bulkWrite([
  { updateOne: { filter: { _id: id1 }, update: { $set: { status: 'active' } } } },
  { updateOne: { filter: { _id: id2 }, update: { $set: { status: 'inactive' } } } },
]);`}</code></pre>
              <h3>
                {"Caching Strategies"}
              </h3>
              <pre><code>{`// Redis caching
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

// Cache-aside pattern
async function getUser(userId) {
  const cacheKey = \`user:\${userId}\`;

  // Check cache first
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  // Fetch from database
  const user = await User.findById(userId).lean();

  // Store in cache
  await redis.setex(cacheKey, 3600, JSON.stringify(user)); // 1 hour TTL

  return user;
}

// Invalidate cache on update
async function updateUser(userId, data) {
  await User.findByIdAndUpdate(userId, data);
  await redis.del(\`user:\${userId}\`);
}

// Cache wrapper utility
function withCache(keyFn, ttl = 3600) {
  return function(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function(...args) {
      const key = keyFn(...args);
      const cached = await redis.get(key);

      if (cached) {
        return JSON.parse(cached);
      }

      const result = await originalMethod.apply(this, args);
      await redis.setex(key, ttl, JSON.stringify(result));

      return result;
    };

    return descriptor;
  };
}

// HTTP caching headers
app.get('/api/products', async (req, res) => {
  const products = await Product.find();

  res.set({
    'Cache-Control': 'public, max-age=300', // 5 minutes
    'ETag': generateETag(products),
  });

  res.json(products);
});

// Conditional request handling
app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  const etag = \`"\${product.updatedAt.getTime()}"\`;

  if (req.headers['if-none-match'] === etag) {
    return res.status(304).end(); // Not Modified
  }

  res.set('ETag', etag);
  res.json(product);
});`}</code></pre>
              <h3>
                {"API Response Optimization"}
              </h3>
              <pre><code>{`// 1. Compression
const compression = require('compression');
app.use(compression());

// 2. Response streaming
app.get('/api/export', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const cursor = Order.find().cursor();

  res.write('[');
  let first = true;

  for await (const doc of cursor) {
    if (!first) res.write(',');
    res.write(JSON.stringify(doc));
    first = false;
  }

  res.write(']');
  res.end();
});

// 3. Field filtering
app.get('/api/users', async (req, res) => {
  const fields = req.query.fields?.split(',') || ['name', 'email'];
  const projection = fields.reduce((acc, f) => ({ ...acc, [f]: 1 }), {});

  const users = await User.find({}, projection).lean();
  res.json(users);
});

// 4. Sparse fieldsets (GraphQL-like)
// ?fields[user]=name,email&fields[orders]=id,total
function parseFields(query) {
  const fields = {};
  for (const [key, value] of Object.entries(query)) {
    if (key.startsWith('fields[')) {
      const entity = key.match(/fields\\[(\\w+)\\]/)[1];
      fields[entity] = value.split(',');
    }
  }
  return fields;
}`}</code></pre>
              <h2>
                {"Network Optimization"}
              </h2>
              <h3>
                {"HTTP/2 and Preloading"}
              </h3>
              <pre><code>{`// Preload critical resources
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/api/user" as="fetch" crossorigin>
<link rel="preload" href="/hero.webp" as="image">

// Prefetch for next navigation
<link rel="prefetch" href="/dashboard">
<link rel="prefetch" href="/api/dashboard-data">

// DNS prefetch for external domains
<link rel="dns-prefetch" href="https://api.example.com">
<link rel="preconnect" href="https://api.example.com">

// React Helmet for dynamic preloading
import { Helmet } from 'react-helmet';

function ProductPage({ productId }) {
  return (
    <>
      <Helmet>
        <link rel="preload" href={\`/api/products/\${productId}\`} as="fetch" />
      </Helmet>
      {/* Component content */}
    </>
  );
}`}</code></pre>
              <h3>
                {"Bundle Optimization"}
              </h3>
              <pre><code>{`// webpack.config.js optimizations
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          minChunks: 2,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
  },
};

// Analyze bundle size
// npm install -D webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
};

// Tree shaking - use ES modules
// Bad - imports entire library
import _ from 'lodash';
_.map(items, fn);

// Good - import only what you need
import map from 'lodash/map';
map(items, fn);

// Or use lodash-es
import { map } from 'lodash-es';`}</code></pre>
              <h2>
                {"Measuring Performance"}
              </h2>
              <h3>
                {"Core Web Vitals"}
              </h3>
              <pre><code>{`// Measure Core Web Vitals
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, value, id }) {
  // Send to your analytics service
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({ name, value, id }),
  });
}

// Largest Contentful Paint (LCP) - < 2.5s
getLCP(sendToAnalytics);

// First Input Delay (FID) - < 100ms
getFID(sendToAnalytics);

// Cumulative Layout Shift (CLS) - < 0.1
getCLS(sendToAnalytics);

// First Contentful Paint (FCP)
getFCP(sendToAnalytics);

// Time to First Byte (TTFB)
getTTFB(sendToAnalytics);

// Custom performance marks
performance.mark('app-start');
// ... app initialization
performance.mark('app-ready');
performance.measure('app-initialization', 'app-start', 'app-ready');

const measure = performance.getEntriesByName('app-initialization')[0];
console.log(\`App initialization: \${measure.duration}ms\`);`}</code></pre>
              <h3>
                {"React DevTools Profiler"}
              </h3>
              <pre><code>{`// Enable Profiler in production build
// In your build config:
// REACT_APP_PROFILER=true

// Programmatic profiling
import { Profiler } from 'react';

function onRenderCallback(
  id, // Component ID
  phase, // "mount" or "update"
  actualDuration, // Time spent rendering
  baseDuration, // Estimated time without memoization
  startTime, // When React started rendering
  commitTime, // When React committed this update
) {
  console.log(\`\${id} \${phase}: \${actualDuration.toFixed(2)}ms\`);

  // Send to monitoring service
  if (actualDuration > 16) { // More than one frame
    reportSlowRender({ id, phase, actualDuration });
  }
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <MainContent />
    </Profiler>
  );
}`}</code></pre>
              <h3>
                {"Server Performance Monitoring"}
              </h3>
              <pre><code>{`// Response time middleware
app.use((req, res, next) => {
  const start = process.hrtime();

  res.on('finish', () => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const duration = seconds * 1000 + nanoseconds / 1000000;

    console.log({
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration: \`\${duration.toFixed(2)}ms\`,
    });

    // Alert on slow responses
    if (duration > 1000) {
      alertSlowEndpoint(req.path, duration);
    }
  });

  next();
});

// Memory monitoring
setInterval(() => {
  const usage = process.memoryUsage();
  console.log({
    heapUsed: \`\${Math.round(usage.heapUsed / 1024 / 1024)}MB\`,
    heapTotal: \`\${Math.round(usage.heapTotal / 1024 / 1024)}MB\`,
    external: \`\${Math.round(usage.external / 1024 / 1024)}MB\`,
  });

  // Alert on high memory usage
  if (usage.heapUsed > 500 * 1024 * 1024) { // 500MB
    alertHighMemory(usage);
  }
}, 60000);

// Database query logging
mongoose.set('debug', (collectionName, method, query, doc) => {
  console.log(\`\${collectionName}.\${method}\`, JSON.stringify(query));
});`}</code></pre>
              <h2>
                {"Performance Checklist"}
              </h2>
              <pre><code>{`// Frontend Checklist
□ Code splitting and lazy loading
□ Image optimization (format, size, lazy loading)
□ Memoization (React.memo, useMemo, useCallback)
□ Virtualization for long lists
□ Bundle size optimization
□ Critical CSS inlined
□ Fonts optimized (preload, display: swap)
□ Service worker for caching

// Backend Checklist
□ Database indexes on queried fields
□ Query optimization (select, lean, pagination)
□ Response caching (Redis, HTTP headers)
□ Compression enabled
□ Connection pooling
□ Async/non-blocking operations
□ Rate limiting

// Network Checklist
□ HTTP/2 enabled
□ Gzip/Brotli compression
□ CDN for static assets
□ Preload critical resources
□ Minimize third-party scripts
□ Efficient API design (batch, pagination)`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders"}
                  </li>
                  <li>
                    {"Implement code splitting and lazy loading for faster initial load"}
                  </li>
                  <li>
                    {"Optimize images with modern formats, responsive sizes, and lazy loading"}
                  </li>
                  <li>
                    {"Add database indexes and use projection to optimize queries"}
                  </li>
                  <li>
                    {"Implement caching at multiple levels (Redis, HTTP, CDN)"}
                  </li>
                  <li>
                    {"Monitor Core Web Vitals (LCP, FID, CLS)"}
                  </li>
                  <li>
                    {"Use virtualization for rendering large lists"}
                  </li>
                  <li>
                    {"Profile and measure before optimizing"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/microservices" className="prev-article">
                {"← Microservices"}
              </Link>
              <Link href="/full-stack-javascript/articles/javascript-fundamentals" className="next-article">
                {"JavaScript Fundamentals →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
