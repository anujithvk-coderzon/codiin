import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Multithreading: Threads, ExecutorService & CompletableFuture",
  description: "Master Java Multithreading and Concurrency. Learn threads, ExecutorService, CompletableFuture, and synchronization with beginner-friendly examples.",
  keywords: ["Java multithreading", "Java threads", "ExecutorService", "CompletableFuture", "Java concurrency", "thread synchronization", "parallel programming"],
  alternates: { canonical: "/full-stack-java/articles/multithreading" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/multithreading",
    title: "Java Multithreading: Complete Beginner's Guide | CODiiN",
    description: "Learn Java multithreading from scratch. Master threads, ExecutorService, and CompletableFuture with practical examples.",
    images: ["/images/multithreading-og.jpg"],
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Java Multithreading: Complete Beginner's Guide",
  "description": "Master Java multithreading with threads, ExecutorService, and CompletableFuture",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-27",
  "dateModified": "2024-12-27"
} as const;

export default function FullStackJavaMultithreadingPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="breadcrumb">
          <div className="container">
            <Link href="/">
              {"Home"}
            </Link>
            <span>
              {"/"}
            </span>
            <Link href="/full-stack-java">
              {"Full Stack Java"}
            </Link>
            <span>
              {"/"}
            </span>
            <span>
              {"Multithreading"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Multithreading in Java"}
            </h1>
            <p className="article-subtitle">
              {"Run Multiple Tasks Simultaneously - Make Your Applications Faster and More Responsive"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Multithreading?"}
                </h2>
                <p>
                  {"Imagine a restaurant with only one chef. Every customer waits while meals are prepared one at a time. Now imagine multiple chefs working simultaneously - orders get completed much faster!"}
                </p>
                <p>
                  {"Multithreading is like having multiple chefs in your program. Instead of doing tasks one after another, your application can run multiple tasks at the same time, making better use of modern multi-core processors."}
                </p>
                <div className="code-block">
                  <pre>{`
// WITHOUT multithreading: Tasks run one after another
downloadFile("file1.zip");    // Takes 5 seconds
downloadFile("file2.zip");    // Takes 5 seconds
downloadFile("file3.zip");    // Takes 5 seconds
// Total: 15 seconds!

// WITH multithreading: Tasks run simultaneously
Thread t1 = new Thread(() -> downloadFile("file1.zip"));
Thread t2 = new Thread(() -> downloadFile("file2.zip"));
Thread t3 = new Thread(() -> downloadFile("file3.zip"));
t1.start(); t2.start(); t3.start();
// Total: ~5 seconds (they run in parallel!)
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Better Performance"}
                    </h3>
                    <p>
                      {"Use all CPU cores. Modern computers have 4, 8, or even 16 cores - without threads, you're only using one!"}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Responsive Applications"}
                    </h3>
                    <p>
                      {"Keep your UI responsive while processing data in the background. No more frozen screens!"}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Handle Many Users"}
                    </h3>
                    <p>
                      {"Servers use threads to handle thousands of users simultaneously instead of making them wait in line."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Enterprise Required"}
                    </h3>
                    <p>
                      {"Understanding concurrency is essential for backend development, interviews, and building scalable applications."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Thread Basics"}
                </h2>
                <p>
                  {"A thread is a separate path of execution in your program. Your main program runs on the \"main thread\". You can create additional threads to run code in parallel."}
                </p>
                <h3>
                  {"Creating Threads: Two Ways"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Method 1: Extend Thread class
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running: " + getName());
        // Your code here
    }
}

MyThread thread = new MyThread();
thread.start();  // Starts the thread

// Method 2: Implement Runnable (preferred)
class MyTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Task running on: " + Thread.currentThread().getName());
    }
}

Thread thread = new Thread(new MyTask());
thread.start();

// Method 3: Lambda (simplest - Java 8+)
Thread thread = new Thread(() -> {
    System.out.println("Hello from thread!");
});
thread.start();
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"start() vs run()"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"start()"}
                      </strong>
                      {" - Creates a NEW thread and runs code on it (correct!)"}
                    </li>
                    <li>
                      <strong>
                        {"run()"}
                      </strong>
                      {" - Runs code on the CURRENT thread (not parallel!)"}
                    </li>
                    <li>
                      {"Always use start() to get actual parallelism"}
                    </li>
                  </ul>
                </div>
                <h3>
                  {"Basic Thread Operations"}
                </h3>
                <div className="code-block">
                  <pre>{`
Thread thread = new Thread(() -> {
    for (int i = 0; i < 5; i++) {
        System.out.println("Working... " + i);
        try {
            Thread.sleep(1000);  // Pause for 1 second
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted!");
            return;
        }
    }
});

// Start the thread
thread.start();

// Get thread info
System.out.println("Thread name: " + thread.getName());
System.out.println("Thread ID: " + thread.getId());
System.out.println("Is alive: " + thread.isAlive());

// Wait for thread to complete
thread.join();  // Main thread waits here
System.out.println("Thread finished!");

// Set thread name
thread.setName("WorkerThread-1");

// Set priority (1-10, default 5)
thread.setPriority(Thread.MAX_PRIORITY);  // 10
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Thread Safety: The Main Challenge"}
                </h2>
                <p>
                  {"When multiple threads access shared data, things can go wrong. This is called a \"race condition\" - threads race to modify data, and the result is unpredictable."}
                </p>
                <h3>
                  {"The Problem: Race Condition"}
                </h3>
                <div className="code-block">
                  <pre>{`
// DANGEROUS: Multiple threads modifying same variable
class Counter {
    private int count = 0;

    public void increment() {
        count++;  // NOT thread-safe!
        // This is actually 3 operations:
        // 1. Read count
        // 2. Add 1
        // 3. Write count
    }

    public int getCount() {
        return count;
    }
}

// If two threads call increment() at the same time:
// Thread 1 reads count = 0
// Thread 2 reads count = 0 (before Thread 1 writes!)
// Thread 1 writes count = 1
// Thread 2 writes count = 1 (should be 2!)
// Result: count = 1 instead of 2!
`}</pre>
                </div>
                <h3>
                  {"Solution 1: Synchronized"}
                </h3>
                <div className="code-block">
                  <pre>{`
class ThreadSafeCounter {
    private int count = 0;

    // Only one thread can execute this method at a time
    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}

// Now threads take turns - only one can increment at a time
// Result is always correct!

// You can also synchronize specific blocks
public void increment() {
    synchronized (this) {  // Lock on this object
        count++;
    }
}
`}</pre>
                </div>
                <h3>
                  {"Solution 2: AtomicInteger (Better for Simple Cases)"}
                </h3>
                <div className="code-block">
                  <pre>{`
import java.util.concurrent.atomic.AtomicInteger;

class AtomicCounter {
    private AtomicInteger count = new AtomicInteger(0);

    public void increment() {
        count.incrementAndGet();  // Thread-safe, no locking needed!
    }

    public int getCount() {
        return count.get();
    }
}

// Other atomic operations:
count.addAndGet(5);           // Add and get new value
count.getAndAdd(5);           // Get old value and add
count.compareAndSet(10, 20);  // Only set if current value is 10
`}</pre>
                </div>
                <h3>
                  {"Solution 3: Thread-Safe Collections"}
                </h3>
                <div className="code-block">
                  <pre>{`
import java.util.concurrent.*;

// Instead of ArrayList, HashMap, etc. use:

// Thread-safe list
List<String> list = new CopyOnWriteArrayList<>();

// Thread-safe set
Set<String> set = ConcurrentHashMap.newKeySet();

// Thread-safe map
Map<String, Integer> map = new ConcurrentHashMap<>();

// Thread-safe queue
Queue<String> queue = new ConcurrentLinkedQueue<>();

// Blocking queue (waits when empty/full)
BlockingQueue<String> blockingQueue = new LinkedBlockingQueue<>(100);
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"ExecutorService: Managing Threads Properly"}
                </h2>
                <p>
                  {"Creating threads manually is like hiring a new employee for every task. ExecutorService is like having a team of workers who handle tasks as they come in. It's more efficient and easier to manage."}
                </p>
                <h3>
                  {"Creating Thread Pools"}
                </h3>
                <div className="code-block">
                  <pre>{`
import java.util.concurrent.*;

// Fixed thread pool: exactly N threads
ExecutorService executor = Executors.newFixedThreadPool(4);

// Cached thread pool: creates threads as needed, reuses idle ones
ExecutorService executor = Executors.newCachedThreadPool();

// Single thread: one thread, tasks run sequentially
ExecutorService executor = Executors.newSingleThreadExecutor();

// Scheduled: run tasks after delay or periodically
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
`}</pre>
                </div>
                <h3>
                  {"Submitting Tasks"}
                </h3>
                <div className="code-block">
                  <pre>{`
ExecutorService executor = Executors.newFixedThreadPool(4);

// Submit Runnable (no return value)
executor.execute(() -> {
    System.out.println("Task running on: " + Thread.currentThread().getName());
});

// Submit Callable (with return value)
Future<Integer> future = executor.submit(() -> {
    Thread.sleep(1000);
    return 42;  // Return a result
});

// Get the result (blocks until complete)
try {
    Integer result = future.get();  // Waits for result
    System.out.println("Result: " + result);

    // Or with timeout
    Integer result2 = future.get(5, TimeUnit.SECONDS);
} catch (InterruptedException | ExecutionException e) {
    e.printStackTrace();
}

// Submit multiple tasks
List<Callable<String>> tasks = Arrays.asList(
    () -> "Result 1",
    () -> "Result 2",
    () -> "Result 3"
);

// Execute all and get results
List<Future<String>> futures = executor.invokeAll(tasks);

// ALWAYS shut down the executor when done!
executor.shutdown();  // Graceful shutdown
executor.awaitTermination(60, TimeUnit.SECONDS);
`}</pre>
                </div>
                <h3>
                  {"Real-World Example: Parallel File Processing"}
                </h3>
                <div className="code-block">
                  <pre>{`
public class FileProcessor {

    private final ExecutorService executor = Executors.newFixedThreadPool(4);

    public void processFiles(List<String> filenames) {
        List<Future<ProcessResult>> futures = new ArrayList<>();

        // Submit all files for processing
        for (String filename : filenames) {
            Future<ProcessResult> future = executor.submit(() -> {
                return processFile(filename);
            });
            futures.add(future);
        }

        // Collect results
        for (Future<ProcessResult> future : futures) {
            try {
                ProcessResult result = future.get();
                System.out.println("Processed: " + result);
            } catch (Exception e) {
                System.out.println("Failed: " + e.getMessage());
            }
        }
    }

    private ProcessResult processFile(String filename) {
        // Simulate processing
        System.out.println("Processing " + filename +
            " on " + Thread.currentThread().getName());
        return new ProcessResult(filename, "success");
    }

    public void shutdown() {
        executor.shutdown();
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"CompletableFuture: Modern Async Programming"}
                </h2>
                <p>
                  {"CompletableFuture is the modern way to handle asynchronous programming in Java. It's like Promises in JavaScript - you can chain operations and handle results when they're ready."}
                </p>
                <h3>
                  {"Basic Usage"}
                </h3>
                <div className="code-block">
                  <pre>{`
import java.util.concurrent.CompletableFuture;

// Run async task (no return value)
CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
    System.out.println("Running async task");
});

// Run async task with return value
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    return "Hello from async!";
});

// Get result (blocks)
String result = future.get();

// Or with callback (non-blocking)
future.thenAccept(result -> {
    System.out.println("Got result: " + result);
});
`}</pre>
                </div>
                <h3>
                  {"Chaining Operations"}
                </h3>
                <div className="code-block">
                  <pre>{`
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> {
        return "Hello";
    })
    .thenApply(s -> {
        return s + " World";  // Transform result
    })
    .thenApply(String::toUpperCase);

System.out.println(future.get());  // "HELLO WORLD"

// Multiple chains
CompletableFuture.supplyAsync(() -> getUserId())
    .thenApply(id -> fetchUser(id))        // Use result to fetch user
    .thenApply(user -> user.getEmail())    // Get email from user
    .thenAccept(email -> sendEmail(email)) // Send email
    .exceptionally(ex -> {                 // Handle any error
        System.out.println("Error: " + ex.getMessage());
        return null;
    });
`}</pre>
                </div>
                <h3>
                  {"Combining Multiple Futures"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Run two tasks and combine results
CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "Hello");
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "World");

// Combine when both complete
CompletableFuture<String> combined = future1.thenCombine(future2, (s1, s2) -> {
    return s1 + " " + s2;
});
System.out.println(combined.get());  // "Hello World"

// Wait for all to complete
CompletableFuture<Void> allDone = CompletableFuture.allOf(future1, future2);
allDone.join();  // Block until all complete

// Wait for any one to complete
CompletableFuture<Object> anyDone = CompletableFuture.anyOf(future1, future2);
System.out.println(anyDone.get());  // First result
`}</pre>
                </div>
                <h3>
                  {"Error Handling"}
                </h3>
                <div className="code-block">
                  <pre>{`
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> {
        if (Math.random() > 0.5) {
            throw new RuntimeException("Random failure!");
        }
        return "Success!";
    })
    .exceptionally(ex -> {
        // Handle exception, return fallback
        System.out.println("Failed: " + ex.getMessage());
        return "Fallback value";
    });

// Or use handle for both success and failure
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> riskyOperation())
    .handle((result, ex) -> {
        if (ex != null) {
            return "Error: " + ex.getMessage();
        }
        return "Success: " + result;
    });
`}</pre>
                </div>
                <h3>
                  {"Real-World Example: Fetching Data from Multiple APIs"}
                </h3>
                <div className="code-block">
                  <pre>{`
public class DashboardService {

    public CompletableFuture<Dashboard> loadDashboard(String userId) {
        // Fetch user, orders, and recommendations in parallel
        CompletableFuture<User> userFuture =
            CompletableFuture.supplyAsync(() -> fetchUser(userId));

        CompletableFuture<List<Order>> ordersFuture =
            CompletableFuture.supplyAsync(() -> fetchOrders(userId));

        CompletableFuture<List<Product>> recommendationsFuture =
            CompletableFuture.supplyAsync(() -> fetchRecommendations(userId));

        // Combine all results into Dashboard
        return userFuture.thenCombine(ordersFuture, (user, orders) -> {
            return new PartialDashboard(user, orders);
        }).thenCombine(recommendationsFuture, (partial, recommendations) -> {
            return new Dashboard(partial.user, partial.orders, recommendations);
        });
    }

    // Usage
    public void displayDashboard(String userId) {
        loadDashboard(userId)
            .thenAccept(dashboard -> {
                System.out.println("Welcome " + dashboard.getUser().getName());
                System.out.println("Orders: " + dashboard.getOrders().size());
            })
            .exceptionally(ex -> {
                System.out.println("Failed to load dashboard: " + ex.getMessage());
                return null;
            });
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Common Multithreading Patterns"}
                </h2>
                <h3>
                  {"Producer-Consumer Pattern"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Shared queue between producer and consumer
BlockingQueue<String> queue = new LinkedBlockingQueue<>(10);

// Producer: adds items to queue
Thread producer = new Thread(() -> {
    try {
        for (int i = 0; i < 100; i++) {
            queue.put("Item " + i);  // Blocks if queue is full
            System.out.println("Produced: Item " + i);
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});

// Consumer: takes items from queue
Thread consumer = new Thread(() -> {
    try {
        while (true) {
            String item = queue.take();  // Blocks if queue is empty
            System.out.println("Consumed: " + item);
            Thread.sleep(100);  // Simulate processing
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});

producer.start();
consumer.start();
`}</pre>
                </div>
                <h3>
                  {"Parallel Processing with Streams"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<Integer> numbers = IntStream.range(1, 1000000)
    .boxed()
    .collect(Collectors.toList());

// Sequential processing
long startSeq = System.currentTimeMillis();
long sumSeq = numbers.stream()
    .filter(n -> n % 2 == 0)
    .mapToLong(n -> n * n)
    .sum();
System.out.println("Sequential: " + (System.currentTimeMillis() - startSeq) + "ms");

// Parallel processing
long startPar = System.currentTimeMillis();
long sumPar = numbers.parallelStream()
    .filter(n -> n % 2 == 0)
    .mapToLong(n -> n * n)
    .sum();
System.out.println("Parallel: " + (System.currentTimeMillis() - startPar) + "ms");

// Results are identical, parallel is faster for large datasets!
`}</pre>
                </div>
                <h3>
                  {"Scheduled Tasks"}
                </h3>
                <div className="code-block">
                  <pre>{`
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

// Run once after delay
scheduler.schedule(() -> {
    System.out.println("Runs after 5 seconds");
}, 5, TimeUnit.SECONDS);

// Run repeatedly at fixed rate
scheduler.scheduleAtFixedRate(() -> {
    System.out.println("Runs every 10 seconds");
}, 0, 10, TimeUnit.SECONDS);

// Run repeatedly with fixed delay between runs
scheduler.scheduleWithFixedDelay(() -> {
    System.out.println("Runs 5 seconds after previous run completes");
}, 0, 5, TimeUnit.SECONDS);
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Prefer ExecutorService Over Raw Threads"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Creating threads manually
for (int i = 0; i < 100; i++) {
    new Thread(task).start();  // 100 threads! Resource hungry
}

// GOOD: Use thread pool
ExecutorService executor = Executors.newFixedThreadPool(4);
for (int i = 0; i < 100; i++) {
    executor.submit(task);  // 4 threads handle all tasks
}
executor.shutdown();
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Always Shut Down ExecutorService"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
ExecutorService executor = Executors.newFixedThreadPool(4);
try {
    // Submit tasks...
} finally {
    executor.shutdown();
    try {
        if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
            executor.shutdownNow();
        }
    } catch (InterruptedException e) {
        executor.shutdownNow();
    }
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Minimize Shared State"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Shared mutable state
class BadCounter {
    private int count = 0;  // Shared between threads
    public void increment() { count++; }
}

// GOOD: Each thread has its own data
class GoodProcessor {
    public Result process(Data data) {
        // No shared state - each call is independent
        return new Result(data.transform());
    }
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Use High-Level Concurrency Utilities"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Prefer these over low-level synchronization:
AtomicInteger count = new AtomicInteger(0);
ConcurrentHashMap<String, Value> map = new ConcurrentHashMap<>();
BlockingQueue<Task> queue = new LinkedBlockingQueue<>();
CountDownLatch latch = new CountDownLatch(3);
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Handle InterruptedException Properly"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Swallowing interrupt
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    // Ignored - thread can't be stopped properly!
}

// GOOD: Restore interrupt status or propagate
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();  // Restore flag
    return;  // Exit gracefully
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"6. Use CompletableFuture for Async Operations"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Modern, clean async code
CompletableFuture
    .supplyAsync(() -> fetchData())
    .thenApply(data -> processData(data))
    .thenAccept(result -> saveResult(result))
    .exceptionally(ex -> handleError(ex));
`}</pre>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Quick Reference"}
                </h2>
                <div className="when-to-use">
                  <h4>
                    {"When to Use What"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Raw Thread"}
                      </strong>
                      {" - Rarely, only for simple one-off tasks"}
                    </li>
                    <li>
                      <strong>
                        {"ExecutorService"}
                      </strong>
                      {" - Managing multiple tasks efficiently"}
                    </li>
                    <li>
                      <strong>
                        {"CompletableFuture"}
                      </strong>
                      {" - Modern async with chaining and composition"}
                    </li>
                    <li>
                      <strong>
                        {"synchronized"}
                      </strong>
                      {" - Protecting critical sections"}
                    </li>
                    <li>
                      <strong>
                        {"AtomicInteger"}
                      </strong>
                      {" - Simple thread-safe counters"}
                    </li>
                    <li>
                      <strong>
                        {"ConcurrentHashMap"}
                      </strong>
                      {" - Thread-safe maps"}
                    </li>
                    <li>
                      <strong>
                        {"BlockingQueue"}
                      </strong>
                      {" - Producer-consumer patterns"}
                    </li>
                    <li>
                      <strong>
                        {"parallelStream()"}
                      </strong>
                      {" - Easy parallel processing of collections"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Master Java Concurrency "}
                <span className="gradient-text">
                  {"with Expert Mentorship"}
                </span>
              </h2>
              <p>
                {"Learn to build high-performance, scalable Java applications with hands-on projects."}
              </p>
              <div className="cta-buttons">
                <Link href="/full-stack-java" className="btn btn-primary btn-lg">
                  {"Explore Full Stack Java Course"}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="related-articles">
          <div className="container">
            <h2>
              {"Related Articles"}
            </h2>
            <div className="articles-grid">
              <Link href="/full-stack-java/articles/java-streams" className="article-card">
                <h3>
                  {"Java Streams"}
                </h3>
                {" "}
                <p>
                  {"Process data with parallel streams for better performance."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/java-fundamentals" className="article-card">
                <h3>
                  {"Java Fundamentals"}
                </h3>
                {" "}
                <p>
                  {"Build a strong foundation in Java basics."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot"}
                </h3>
                {" "}
                <p>
                  {"Build enterprise applications with async support."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals through personalized mentorship and hands-on learning."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
              <div className="footer-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  {" "}
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {"AKL Heights, Seaport Road, Near Bharathmatha College, Kochi, Kerala - 682021"}
                </span>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-java">
                    {"Full Stack Java"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-dotnet">
                    {"Full Stack .NET"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Quick Links"}
              </h4>
              <ul>
                <li>
                  <Link href="/">
                    {"Home"}
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    {"About Us"}
                  </Link>
                </li>
                <li>
                  <Link href="/#why-us">
                    {"Why CODiiN"}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    {"Contact"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>
                {"Get in Touch"}
              </h4>
              <p>
                <a href="mailto:contact@codiin.com">
                  {"contact@codiin.com"}
                </a>
              </p>
              <p>
                <a href="tel:+918301890158">
                  {"+91 83018 90158"}
                </a>
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/CodiinTechnologies" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/codiin_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/codiin/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@codiin" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Multithreading as part of the Full Stack Java program."} />
    </>
  );
}
