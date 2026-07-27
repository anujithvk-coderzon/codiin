import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Circuit Breaker Pattern with Resilience4j in Java",
  description: "Learn Circuit Breaker pattern with Resilience4j in Java. Build fault-tolerant microservices with retry, fallback, and rate limiting.",
  keywords: ["Circuit Breaker Java", "Resilience4j", "fault tolerance", "microservices resilience", "retry pattern", "fallback pattern"],
  alternates: { canonical: "/full-stack-java/articles/circuit-breaker" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/circuit-breaker",
    title: "Circuit Breaker: Resilience4j Patterns | CODiiN",
    description: "Build fault-tolerant microservices with circuit breaker, retry, and fallback patterns.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#programs", label: "Programs" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Circuit Breaker Pattern with Resilience4j",
  "description": "Build fault-tolerant microservices with circuit breaker patterns",
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

export default function FullStackJavaCircuitBreakerPage() {
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
              {"Circuit Breaker"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Circuit Breaker Pattern"}
            </h1>
            <p className="article-subtitle">
              {"Stop Failures from Cascading Through Your System"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"The Problem"}
                </h2>
                <p>
                  {"Imagine Service A calls Service B, which calls Service C. Service C is down. What happens? Service B keeps trying and timing out. Service A waits for B. Every request piles up. Soon, your entire system is frozen - one failed service took everything down."}
                </p>
                <p>
                  {"A circuit breaker is like an electrical circuit breaker: when things fail too often, it \"trips\" and stops trying, returning a fallback response instead."}
                </p>
                <div className="code-block">
                  <pre>{`
// WITHOUT Circuit Breaker
User user = userService.getUser(id);  // Waits 30 seconds... timeout
User user = userService.getUser(id);  // Waits 30 seconds again...
// Thread pool exhausted, system crashes

// WITH Circuit Breaker
User user = userService.getUser(id);  // Fails
User user = userService.getUser(id);  // Fails
User user = userService.getUser(id);  // Circuit OPENS!
User user = userService.getUser(id);  // Returns fallback immediately
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Circuit Breaker States"}
                </h2>
                <div className="code-block">
                  <pre>{`
CLOSED (Normal)
    ↓ failures exceed threshold
OPEN (Failing fast - returns fallback immediately)
    ↓ wait duration expires
HALF-OPEN (Testing - allows limited requests)
    ↓ requests succeed → CLOSED
    ↓ requests fail → OPEN
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Closed"}
                    </h3>
                    <p>
                      {"Normal operation. Requests pass through. Failures are counted."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Open"}
                    </h3>
                    <p>
                      {"Too many failures. Requests fail immediately with fallback."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Half-Open"}
                    </h3>
                    <p>
                      {"Testing recovery. Limited requests allowed to check if service is back."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Resilience4j Setup"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Basic Circuit Breaker"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Service
public class UserService {

    @Autowired
    private UserClient userClient;

    @CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
    public User getUser(Long id) {
        return userClient.getUser(id);  // Calls external service
    }

    // Fallback when circuit is open or call fails
    public User getUserFallback(Long id, Exception ex) {
        log.warn("Circuit breaker triggered for user {}: {}", id, ex.getMessage());
        return new User(id, "Unknown", "Unavailable");  // Default user
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Configuration"}
                </h2>
                <div className="code-block">
                  <pre>{`
# application.yml
resilience4j:
  circuitbreaker:
    instances:
      userService:
        # When to open the circuit
        failure-rate-threshold: 50        # Open if 50% of calls fail
        slow-call-rate-threshold: 100     # Or if 100% of calls are slow
        slow-call-duration-threshold: 2s  # What counts as "slow"

        # How many calls to evaluate
        sliding-window-type: COUNT_BASED
        sliding-window-size: 10           # Last 10 calls
        minimum-number-of-calls: 5        # Need at least 5 calls to evaluate

        # Recovery
        wait-duration-in-open-state: 30s  # Wait before trying again
        permitted-number-of-calls-in-half-open-state: 3  # Test calls

        # What counts as failure
        record-exceptions:
          - java.io.IOException
          - java.net.SocketTimeoutException
        ignore-exceptions:
          - com.example.BusinessException
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Retry Pattern"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Service
public class PaymentService {

    @Retry(name = "paymentService", fallbackMethod = "paymentFallback")
    public PaymentResult processPayment(Payment payment) {
        return paymentClient.process(payment);
    }

    public PaymentResult paymentFallback(Payment payment, Exception ex) {
        log.error("Payment failed after retries: {}", ex.getMessage());
        return PaymentResult.pending("Will retry later");
    }
}
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml
resilience4j:
  retry:
    instances:
      paymentService:
        max-attempts: 3
        wait-duration: 1s
        exponential-backoff-multiplier: 2  # 1s, 2s, 4s
        retry-exceptions:
          - java.io.IOException
        ignore-exceptions:
          - com.example.InvalidPaymentException
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Rate Limiter"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Service
public class ApiService {

    @RateLimiter(name = "apiService", fallbackMethod = "rateLimitFallback")
    public Response callExternalApi(Request request) {
        return externalClient.call(request);
    }

    public Response rateLimitFallback(Request request, Exception ex) {
        throw new TooManyRequestsException("Rate limit exceeded. Try later.");
    }
}
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
resilience4j:
  ratelimiter:
    instances:
      apiService:
        limit-for-period: 10          # 10 requests
        limit-refresh-period: 1s       # per second
        timeout-duration: 0s           # Don't wait, fail immediately
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Bulkhead Pattern"}
                </h2>
                <p>
                  {"Isolate resources to prevent one slow service from consuming all threads."}
                </p>
                <div className="code-block">
                  <pre>{`
@Service
public class OrderService {

    @Bulkhead(name = "orderService", type = Bulkhead.Type.THREADPOOL)
    public Order processOrder(Order order) {
        return orderProcessor.process(order);
    }
}
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
resilience4j:
  bulkhead:
    instances:
      orderService:
        max-concurrent-calls: 10      # Max 10 concurrent requests
        max-wait-duration: 0s

  thread-pool-bulkhead:
    instances:
      orderService:
        max-thread-pool-size: 10
        core-thread-pool-size: 5
        queue-capacity: 20
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Combining Patterns"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Service
public class ProductService {

    // Order matters! Retry → CircuitBreaker → RateLimiter → Bulkhead
    @Retry(name = "productService")
    @CircuitBreaker(name = "productService", fallbackMethod = "getProductFallback")
    @RateLimiter(name = "productService")
    @Bulkhead(name = "productService")
    public Product getProduct(Long id) {
        return productClient.getProduct(id);
    }

    public Product getProductFallback(Long id, Exception ex) {
        return productCache.get(id)  // Try cache first
            .orElse(Product.unavailable(id));
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Monitoring with Actuator"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health, circuitbreakers, retries, ratelimiters
  health:
    circuitbreakers:
      enabled: true
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# Check circuit breaker status
GET /actuator/circuitbreakers

# Response:
{
  "circuitBreakers": {
    "userService": {
      "state": "CLOSED",
      "failureRate": "0%",
      "slowCallRate": "0%",
      "numberOfBufferedCalls": 5,
      "numberOfFailedCalls": 0
    }
  }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practices">
                  <ul>
                    <li>
                      <strong>
                        {"Tune thresholds:"}
                      </strong>
                      {" Start with defaults, adjust based on real traffic patterns"}
                    </li>
                    <li>
                      <strong>
                        {"Meaningful fallbacks:"}
                      </strong>
                      {" Cached data, default values, or graceful degradation"}
                    </li>
                    <li>
                      <strong>
                        {"Monitor metrics:"}
                      </strong>
                      {" Track circuit states, failure rates, and response times"}
                    </li>
                    <li>
                      <strong>
                        {"Test failure scenarios:"}
                      </strong>
                      {" Chaos engineering - deliberately break things"}
                    </li>
                    <li>
                      <strong>
                        {"Don't hide all errors:"}
                      </strong>
                      {" Let some failures surface so you know there's a problem"}
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
                {"Build Resilient "}
                <span className="gradient-text">
                  {"Microservices"}
                </span>
              </h2>
              <p>
                {"Learn fault tolerance, monitoring, and production-ready patterns."}
              </p>
              <Link href="/full-stack-java" className="btn btn-primary btn-lg">
                {"Explore Full Stack Java Course"}
              </Link>
            </div>
          </div>
        </section>
        <section className="related-articles">
          <div className="container">
            <h2>
              {"Related Articles"}
            </h2>
            <div className="articles-grid">
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices"}
                </h3>
                {" "}
                <p>
                  {"Foundation of distributed systems."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/distributed-tracing" className="article-card">
                <h3>
                  {"Distributed Tracing"}
                </h3>
                {" "}
                <p>
                  {"Track requests across services."}
                </p>
              </Link>
            </div>
          </div>
        </section>
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Circuit Breaker Pattern."} />
    </>
  );
}
