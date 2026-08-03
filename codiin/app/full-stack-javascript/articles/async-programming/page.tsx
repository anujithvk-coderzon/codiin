import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Async Programming - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/async-programming" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/async-programming",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptAsyncProgrammingPage() {
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
                {"Async Programming"}
              </h1>
              <p className="article-meta">
                {"Mastering Promises, async/await, and asynchronous patterns"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Understanding Asynchronous JavaScript"}
              </h2>
              <p>
                {"JavaScript is single-threaded but non-blocking. Async programming allows operations like API calls, file reads, and timers to run without blocking the main thread."}
              </p>
              <h3>
                {"The Event Loop"}
              </h3>
              <pre><code>{`// JavaScript execution model
console.log('1: Start');

setTimeout(() => {
  console.log('2: Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise callback');
});

console.log('4: End');

// Output order:
// 1: Start
// 4: End
// 3: Promise callback (microtask - higher priority)
// 2: Timeout callback (macrotask)

// Event Loop Priority:
// 1. Call Stack (synchronous code)
// 2. Microtask Queue (Promises, queueMicrotask)
// 3. Macrotask Queue (setTimeout, setInterval, I/O)`}</code></pre>
              <h2>
                {"Callbacks"}
              </h2>
              <h3>
                {"Basic Callbacks"}
              </h3>
              <pre><code>{`// Callback pattern (older style)
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: 'John' };
    callback(null, user);
  }, 1000);
}

fetchUserData(1, (error, user) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('User:', user);
});

// Callback Hell (Pyramid of Doom)
fetchUserData(1, (err, user) => {
  if (err) return handleError(err);

  fetchUserPosts(user.id, (err, posts) => {
    if (err) return handleError(err);

    fetchComments(posts[0].id, (err, comments) => {
      if (err) return handleError(err);

      fetchReplies(comments[0].id, (err, replies) => {
        if (err) return handleError(err);
        // Deeply nested, hard to maintain
      });
    });
  });
});`}</code></pre>
              <h2>
                {"Promises"}
              </h2>
              <h3>
                {"Promise Basics"}
              </h3>
              <pre><code>{`// Creating a Promise
const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ data: 'Success!' });
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000);
});

// Consuming a Promise
promise
  .then(result => {
    console.log('Result:', result);
    return result.data;
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Cleanup - always runs');
  });

// Promise-based function
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    fetch(\`/api/users/\${id}\`)
      .then(response => {
        if (!response.ok) {
          throw new Error(\`HTTP error: \${response.status}\`);
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
}`}</code></pre>
              <h3>
                {"Promise Chaining"}
              </h3>
              <pre><code>{`// Chaining promises (solving callback hell)
fetchUser(1)
  .then(user => {
    console.log('User:', user.name);
    return fetchUserPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts.length);
    return fetchComments(posts[0].id);
  })
  .then(comments => {
    console.log('Comments:', comments.length);
  })
  .catch(error => {
    // Catches any error in the chain
    console.error('Error:', error.message);
  });

// Returning values vs promises
Promise.resolve(5)
  .then(x => x * 2)        // Returns value: 10
  .then(x => Promise.resolve(x + 5))  // Returns promise: 15
  .then(x => {
    console.log(x); // 15
  });`}</code></pre>
              <h3>
                {"Promise Static Methods"}
              </h3>
              <pre><code>{`// Promise.all - Wait for all, fail if any fails
const promises = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments'),
];

Promise.all(promises)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(([users, posts, comments]) => {
    console.log('All data loaded:', { users, posts, comments });
  })
  .catch(error => {
    console.error('One request failed:', error);
  });

// Promise.allSettled - Wait for all, never fails
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/might-fail'),
  fetch('/api/posts'),
]);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(\`Request \${index} succeeded:\`, result.value);
  } else {
    console.log(\`Request \${index} failed:\`, result.reason);
  }
});

// Promise.race - First to settle wins
const timeout = new Promise((_, reject) => {
  setTimeout(() => reject(new Error('Timeout')), 5000);
});

Promise.race([fetch('/api/data'), timeout])
  .then(response => response.json())
  .catch(error => console.error('Failed or timed out:', error));

// Promise.any - First to resolve wins (ignores rejections)
Promise.any([
  fetch('https://server1.com/api'),
  fetch('https://server2.com/api'),
  fetch('https://server3.com/api'),
])
  .then(response => {
    console.log('First successful response:', response);
  })
  .catch(error => {
    // AggregateError - all promises rejected
    console.error('All requests failed:', error.errors);
  });`}</code></pre>
              <h2>
                {"Async/Await"}
              </h2>
              <h3>
                {"Basic Syntax"}
              </h3>
              <pre><code>{`// async function always returns a Promise
async function fetchUserData(userId) {
  // await pauses execution until Promise resolves
  const response = await fetch(\`/api/users/\${userId}\`);
  const user = await response.json();
  return user;
}

// Equivalent Promise code
function fetchUserDataPromise(userId) {
  return fetch(\`/api/users/\${userId}\`)
    .then(response => response.json());
}

// Using async function
fetchUserData(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));

// Arrow function syntax
const getUser = async (id) => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};`}</code></pre>
              <h3>
                {"Error Handling"}
              </h3>
              <pre><code>{`// Try-catch with async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');

    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error; // Re-throw to propagate
  } finally {
    console.log('Fetch attempt completed');
  }
}

// Multiple try-catch blocks
async function processOrder(orderId) {
  let order;

  try {
    order = await fetchOrder(orderId);
  } catch (error) {
    console.error('Failed to fetch order');
    return null;
  }

  try {
    await processPayment(order);
  } catch (error) {
    console.error('Payment failed');
    await refundOrder(order);
    throw error;
  }

  try {
    await sendConfirmation(order);
  } catch (error) {
    // Log but don't fail - confirmation is non-critical
    console.warn('Failed to send confirmation');
  }

  return order;
}

// Error handling utility
async function tryCatch(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

// Usage
const [user, error] = await tryCatch(fetchUser(1));
if (error) {
  console.error('Failed:', error);
} else {
  console.log('User:', user);
}`}</code></pre>
              <h3>
                {"Sequential vs Parallel Execution"}
              </h3>
              <pre><code>{`// Sequential - one after another (slower)
async function sequential() {
  const user = await fetchUser(1);      // Wait ~1s
  const posts = await fetchPosts(1);    // Wait ~1s
  const comments = await fetchComments(1); // Wait ~1s
  // Total: ~3 seconds
  return { user, posts, comments };
}

// Parallel - all at once (faster)
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),      // Start immediately
    fetchPosts(1),     // Start immediately
    fetchComments(1),  // Start immediately
  ]);
  // Total: ~1 second (longest request)
  return { user, posts, comments };
}

// Start parallel, await later
async function startParallelAwaitLater() {
  // Start all requests immediately
  const userPromise = fetchUser(1);
  const postsPromise = fetchPosts(1);
  const commentsPromise = fetchComments(1);

  // Do other work while requests are in flight
  console.log('Requests started...');

  // Now await the results
  const user = await userPromise;
  const posts = await postsPromise;
  const comments = await commentsPromise;

  return { user, posts, comments };
}

// Conditional parallel
async function conditionalFetch(userId, includePosts) {
  const promises = [fetchUser(userId)];

  if (includePosts) {
    promises.push(fetchPosts(userId));
  }

  const results = await Promise.all(promises);

  return {
    user: results[0],
    posts: results[1] || [],
  };
}`}</code></pre>
              <h2>
                {"Advanced Patterns"}
              </h2>
              <h3>
                {"Async Iteration"}
              </h3>
              <pre><code>{`// for await...of with async iterables
async function* asyncGenerator() {
  const urls = ['/api/page1', '/api/page2', '/api/page3'];

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    yield data;
  }
}

async function processPages() {
  for await (const page of asyncGenerator()) {
    console.log('Processing page:', page);
  }
}

// Async iterator for pagination
class AsyncPaginator {
  constructor(baseUrl, pageSize = 10) {
    this.baseUrl = baseUrl;
    this.pageSize = pageSize;
    this.currentPage = 0;
    this.hasMore = true;
  }

  async *[Symbol.asyncIterator]() {
    while (this.hasMore) {
      const response = await fetch(
        \`\${this.baseUrl}?page=\${this.currentPage}&size=\${this.pageSize}\`
      );
      const { data, hasNextPage } = await response.json();

      this.hasMore = hasNextPage;
      this.currentPage++;

      yield data;
    }
  }
}

// Usage
const paginator = new AsyncPaginator('/api/users');
for await (const users of paginator) {
  console.log('Batch of users:', users);
}`}</code></pre>
              <h3>
                {"Retry Pattern"}
              </h3>
              <pre><code>{`async function retry(fn, maxAttempts = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(\`Attempt \${attempt} failed: \${error.message}\`);

      if (attempt < maxAttempts) {
        // Exponential backoff
        const waitTime = delay * Math.pow(2, attempt - 1);
        await new Promise(r => setTimeout(r, waitTime));
      }
    }
  }

  throw lastError;
}

// Usage
const data = await retry(
  () => fetch('/api/flaky-endpoint').then(r => r.json()),
  3,
  1000
);

// With abort controller
async function retryWithTimeout(fn, options = {}) {
  const { maxAttempts = 3, delay = 1000, timeout = 5000 } = options;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const result = await fn(controller.signal);
      clearTimeout(timeoutId);
      return result;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === 'AbortError') {
        console.log(\`Attempt \${attempt} timed out\`);
      } else {
        console.log(\`Attempt \${attempt} failed: \${error.message}\`);
      }

      if (attempt < maxAttempts) {
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw error;
      }
    }
  }
}

// Usage
const data = await retryWithTimeout(
  (signal) => fetch('/api/data', { signal }).then(r => r.json()),
  { maxAttempts: 3, timeout: 5000 }
);`}</code></pre>
              <h3>
                {"Debounce and Throttle"}
              </h3>
              <pre><code>{`// Debounce - wait until calls stop
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Async debounce with latest result
function asyncDebounce(fn, delay) {
  let timeoutId;
  let pendingPromise = null;

  return function (...args) {
    return new Promise((resolve, reject) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(async () => {
        try {
          const result = await fn.apply(this, args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

// Usage - search as you type
const debouncedSearch = asyncDebounce(async (query) => {
  const response = await fetch(\`/api/search?q=\${query}\`);
  return response.json();
}, 300);

input.addEventListener('input', async (e) => {
  const results = await debouncedSearch(e.target.value);
  displayResults(results);
});

// Throttle - execute at most once per interval
function throttle(fn, interval) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      return fn.apply(this, args);
    }
  };
}

// Async throttle
function asyncThrottle(fn, interval) {
  let lastTime = 0;
  let pendingPromise = null;

  return async function (...args) {
    const now = Date.now();

    if (pendingPromise) {
      return pendingPromise;
    }

    if (now - lastTime >= interval) {
      lastTime = now;
      pendingPromise = fn.apply(this, args);

      try {
        return await pendingPromise;
      } finally {
        pendingPromise = null;
      }
    }

    return null;
  };
}`}</code></pre>
              <h3>
                {"Queue Pattern"}
              </h3>
              <pre><code>{`// Process items one at a time
class AsyncQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  async add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.process();
    });
  }

  async process() {
    if (this.processing || this.queue.length === 0) return;

    this.processing = true;

    while (this.queue.length > 0) {
      const { task, resolve, reject } = this.queue.shift();

      try {
        const result = await task();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }

    this.processing = false;
  }
}

// Usage
const queue = new AsyncQueue();

// These run sequentially, not in parallel
queue.add(() => fetch('/api/1').then(r => r.json()));
queue.add(() => fetch('/api/2').then(r => r.json()));
queue.add(() => fetch('/api/3').then(r => r.json()));

// Concurrent queue with limit
class ConcurrentQueue {
  constructor(concurrency = 3) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  async add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.process();
    });
  }

  async process() {
    while (this.running < this.concurrency && this.queue.length > 0) {
      const { task, resolve, reject } = this.queue.shift();
      this.running++;

      task()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.running--;
          this.process();
        });
    }
  }
}

// Process 100 items with max 5 concurrent
const concurrentQueue = new ConcurrentQueue(5);
const urls = Array.from({ length: 100 }, (_, i) => \`/api/item/\${i}\`);

const results = await Promise.all(
  urls.map(url => concurrentQueue.add(() => fetch(url)))
);`}</code></pre>
              <h3>
                {"Cancellation with AbortController"}
              </h3>
              <pre><code>{`// Cancellable fetch
async function cancellableFetch(url, options = {}) {
  const controller = new AbortController();

  const fetchPromise = fetch(url, {
    ...options,
    signal: controller.signal,
  });

  return {
    promise: fetchPromise,
    cancel: () => controller.abort(),
  };
}

// Usage
const { promise, cancel } = cancellableFetch('/api/data');

// Cancel after 5 seconds
setTimeout(cancel, 5000);

try {
  const response = await promise;
  const data = await response.json();
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request was cancelled');
  } else {
    throw error;
  }
}

// React hook with cleanup
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup - cancel on unmount or url change
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}`}</code></pre>
              <h2>
                {"Common Async Mistakes"}
              </h2>
              <pre><code>{`// ❌ Mistake 1: Forgetting await
async function badExample() {
  const data = fetch('/api/data'); // Missing await!
  console.log(data); // Promise object, not the data
}

// ✅ Correct
async function goodExample() {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
}

// ❌ Mistake 2: await in loop (sequential when could be parallel)
async function slowLoop(ids) {
  const results = [];
  for (const id of ids) {
    const data = await fetchItem(id); // One at a time
    results.push(data);
  }
  return results;
}

// ✅ Correct - parallel execution
async function fastLoop(ids) {
  return Promise.all(ids.map(id => fetchItem(id)));
}

// ❌ Mistake 3: Swallowing errors
async function swallowError() {
  try {
    await riskyOperation();
  } catch (error) {
    // Error is swallowed - no logging, no re-throwing
  }
}

// ✅ Correct - handle or propagate
async function handleError() {
  try {
    await riskyOperation();
  } catch (error) {
    console.error('Operation failed:', error);
    throw error; // Or handle appropriately
  }
}

// ❌ Mistake 4: Missing error handling in Promise.all
async function noErrorHandling() {
  // If any fails, all fail
  const results = await Promise.all([
    fetch('/api/1'),
    fetch('/api/2'), // If this fails, we lose api/1 result too
    fetch('/api/3'),
  ]);
}

// ✅ Correct - use allSettled or individual try-catch
async function withErrorHandling() {
  const results = await Promise.allSettled([
    fetch('/api/1'),
    fetch('/api/2'),
    fetch('/api/3'),
  ]);

  return results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);
}

// ❌ Mistake 5: Creating promise in wrong scope
function badPromiseScope(condition) {
  const promise = fetch('/api/data'); // Always created!

  if (condition) {
    return promise;
  }
  return null;
}

// ✅ Correct - create only when needed
function goodPromiseScope(condition) {
  if (condition) {
    return fetch('/api/data');
  }
  return null;
}`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"JavaScript uses an event loop with microtasks and macrotasks"}
                  </li>
                  <li>
                    {"Promises provide a cleaner way to handle async operations"}
                  </li>
                  <li>
                    {"async/await makes async code look synchronous"}
                  </li>
                  <li>
                    {"Use Promise.all for parallel execution"}
                  </li>
                  <li>
                    {"Use Promise.allSettled when you need all results regardless of failures"}
                  </li>
                  <li>
                    {"Always handle errors with try-catch in async functions"}
                  </li>
                  <li>
                    {"Use AbortController for cancellable operations"}
                  </li>
                  <li>
                    {"Avoid sequential awaits when operations can run in parallel"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/websockets" className="prev-article">
                {"← WebSockets"}
              </Link>
              <Link href="/full-stack-javascript/articles/tailwind" className="next-article">
                {"Tailwind CSS →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
