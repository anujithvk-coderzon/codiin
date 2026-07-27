import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Logging & Monitoring: Complete Production Guide",
  description: "Master Java logging with SLF4J, Logback, and Spring Boot Actuator. Learn monitoring with Prometheus, Grafana, and ELK Stack for production applications.",
  keywords: ["Java logging", "SLF4J", "Logback", "Spring Boot Actuator", "Prometheus", "Grafana", "ELK Stack", "Java monitoring"],
  alternates: { canonical: "/full-stack-java/articles/logging-monitoring" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/logging-monitoring",
    title: "Java Logging & Monitoring: SLF4J, Actuator, Prometheus | CODiiN",
    description: "Learn production-ready logging and monitoring for Java applications with practical examples.",
    images: ["/images/logging-monitoring-og.jpg"],
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
  "headline": "Java Logging & Monitoring: Complete Production Guide",
  "description": "Master logging with SLF4J, Logback, and monitoring with Actuator, Prometheus",
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

export default function FullStackJavaLoggingMonitoringPage() {
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
              {"Logging & Monitoring"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Logging & Monitoring in Java"}
            </h1>
            <p className="article-subtitle">
              {"See Inside Your Running Application - Debug Issues Before Users Notice"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Logging & Monitoring?"}
                </h2>
                <p>
                  {"Imagine driving a car with no dashboard - no speedometer, no fuel gauge, no warning lights. You'd have no idea how fast you're going or when you're about to run out of gas until it's too late."}
                </p>
                <p>
                  {"Logging and monitoring are your application's dashboard. They tell you what's happening inside, help you find problems, and alert you before things break."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Logging"}
                    </h3>
                    <p>
                      {"Records what happened - like a flight recorder. \"User John logged in at 10:15\", \"Payment failed for order #123\"."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Monitoring"}
                    </h3>
                    <p>
                      {"Shows what's happening NOW - like a dashboard. CPU usage, memory, response times, error rates."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Alerting"}
                    </h3>
                    <p>
                      {"Notifies you when something's wrong - like warning lights. \"Error rate above 5%\", \"Memory usage critical\"."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Debugging"}
                    </h3>
                    <p>
                      {"Helps find the root cause - like a detective. Trace a request through your system to find where it failed."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Logging with SLF4J and Logback"}
                </h2>
                <p>
                  {"SLF4J (Simple Logging Facade for Java) is the standard logging API. Logback is the most popular implementation. Spring Boot uses both by default."}
                </p>
                <h3>
                  {"Basic Logging"}
                </h3>
                <div className="code-block">
                  <pre>{`
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserService {
    // Create a logger for this class
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public User createUser(String email, String name) {
        logger.info("Creating user with email: {}", email);

        try {
            User user = new User(email, name);
            userRepository.save(user);
            logger.info("User created successfully: id={}", user.getId());
            return user;
        } catch (Exception e) {
            logger.error("Failed to create user: email={}", email, e);
            throw e;
        }
    }

    public User findUser(Long id) {
        logger.debug("Looking up user with id: {}", id);
        User user = userRepository.findById(id).orElse(null);

        if (user == null) {
            logger.warn("User not found: id={}", id);
        }
        return user;
    }
}
`}</pre>
                </div>
                <h3>
                  {"Log Levels (From Most to Least Verbose)"}
                </h3>
                <div className="code-block">
                  <pre>{`
logger.trace("Very detailed info for tracing");  // Rarely used
logger.debug("Debugging information");           // Development only
logger.info("Normal operation info");            // Default for production
logger.warn("Something unexpected happened");    // Potential problems
logger.error("Something failed", exception);     // Errors that need attention
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"When to Use Each Level"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"TRACE"}
                      </strong>
                      {" - Method entry/exit, loop iterations (rarely needed)"}
                    </li>
                    <li>
                      <strong>
                        {"DEBUG"}
                      </strong>
                      {" - Variable values, internal state (development)"}
                    </li>
                    <li>
                      <strong>
                        {"INFO"}
                      </strong>
                      {" - User actions, business events (production)"}
                    </li>
                    <li>
                      <strong>
                        {"WARN"}
                      </strong>
                      {" - Recoverable problems, deprecated usage"}
                    </li>
                    <li>
                      <strong>
                        {"ERROR"}
                      </strong>
                      {" - Failed operations, exceptions"}
                    </li>
                  </ul>
                </div>
                <h3>
                  {"Logback Configuration"}
                </h3>
                <p>
                  {"Create "}
                  <code>
                    {"src/main/resources/logback-spring.xml"}
                  </code>
                  {":"}
                </p>
                <div className="code-block">
                  <pre>{`
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

    <!-- Console output -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- File output with daily rotation -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/application.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/application.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
            <totalSizeCap>1GB</totalSizeCap>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- JSON format for log aggregation -->
    <appender name="JSON" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/application.json</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/application.%d{yyyy-MM-dd}.json</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder class="net.logstash.logback.encoder.LogstashEncoder"/>
    </appender>

    <!-- Set log levels for packages -->
    <logger name="com.myapp" level="DEBUG"/>
    <logger name="org.springframework" level="INFO"/>
    <logger name="org.hibernate.SQL" level="DEBUG"/>

    <!-- Root level -->
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>

</configuration>
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Structured Logging"}
                </h2>
                <p>
                  {"Instead of plain text logs, use structured data that's easy to search and analyze."}
                </p>
                <div className="code-block">
                  <pre>{`
// BAD: Hard to parse and search
logger.info("User john@email.com placed order #123 for $99.99");

// GOOD: Structured with MDC (Mapped Diagnostic Context)
import org.slf4j.MDC;

public class OrderService {

    public void placeOrder(User user, Order order) {
        // Add context that appears in every log message
        MDC.put("userId", user.getId().toString());
        MDC.put("orderId", order.getId().toString());
        MDC.put("requestId", UUID.randomUUID().toString());

        try {
            logger.info("Order placed: amount={}, items={}",
                order.getTotal(), order.getItems().size());

            processPayment(order);
            sendConfirmation(order);

            logger.info("Order completed successfully");
        } finally {
            MDC.clear();  // Always clean up!
        }
    }
}

// Update logback pattern to include MDC
// %X{userId} %X{orderId} %X{requestId}
`}</pre>
                </div>
                <h3>
                  {"Request Tracing with Filters"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Component
public class RequestLoggingFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(RequestLoggingFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String requestId = UUID.randomUUID().toString().substring(0, 8);
        long startTime = System.currentTimeMillis();

        MDC.put("requestId", requestId);
        MDC.put("method", request.getMethod());
        MDC.put("path", request.getRequestURI());

        try {
            logger.info("Request started");
            filterChain.doFilter(request, response);
        } finally {
            long duration = System.currentTimeMillis() - startTime;
            MDC.put("status", String.valueOf(response.getStatus()));
            MDC.put("duration", duration + "ms");

            logger.info("Request completed");
            MDC.clear();
        }
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Spring Boot Actuator"}
                </h2>
                <p>
                  {"Actuator provides production-ready monitoring endpoints out of the box."}
                </p>
                <h3>
                  {"Setup"}
                </h3>
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
# application.properties
management.endpoints.web.exposure.include=health,info,metrics,prometheus,loggers
management.endpoint.health.show-details=when_authorized
management.endpoint.health.probes.enabled=true

# Custom info
info.app.name=My Application
info.app.version=@project.version@
info.app.description=My awesome application
`}</pre>
                </div>
                <h3>
                  {"Available Endpoints"}
                </h3>
                <div className="code-block">
                  <pre>{`
GET /actuator/health      # Application health status
GET /actuator/info        # Application information
GET /actuator/metrics     # All available metrics
GET /actuator/prometheus  # Prometheus format metrics
GET /actuator/loggers     # View/change log levels
POST /actuator/loggers/com.myapp  # Change log level at runtime

# Example: Change log level without restart
curl -X POST http://localhost:8080/actuator/loggers/com.myapp \\
  -H "Content-Type: application/json" \\
  -d '{"configuredLevel": "DEBUG"}'
`}</pre>
                </div>
                <h3>
                  {"Custom Health Indicators"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Component
public class DatabaseHealthIndicator implements HealthIndicator {

    @Autowired
    private DataSource dataSource;

    @Override
    public Health health() {
        try (Connection conn = dataSource.getConnection()) {
            if (conn.isValid(1)) {
                return Health.up()
                    .withDetail("database", "PostgreSQL")
                    .withDetail("status", "Connected")
                    .build();
            }
        } catch (SQLException e) {
            return Health.down()
                .withDetail("error", e.getMessage())
                .build();
        }
        return Health.down().build();
    }
}

// Response:
// {
//   "status": "UP",
//   "components": {
//     "database": {
//       "status": "UP",
//       "details": {
//         "database": "PostgreSQL",
//         "status": "Connected"
//       }
//     }
//   }
// }
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Metrics with Prometheus & Grafana"}
                </h2>
                <p>
                  {"Prometheus collects metrics, Grafana visualizes them in beautiful dashboards."}
                </p>
                <h3>
                  {"Setup Micrometer (Prometheus Integration)"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
`}</pre>
                </div>
                <h3>
                  {"Custom Metrics"}
                </h3>
                <div className="code-block">
                  <pre>{`
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;

@Service
public class OrderService {

    private final Counter ordersCounter;
    private final Counter failedOrdersCounter;
    private final Timer orderProcessingTimer;

    public OrderService(MeterRegistry registry) {
        // Count total orders
        this.ordersCounter = Counter.builder("orders.total")
            .description("Total number of orders")
            .register(registry);

        // Count failed orders
        this.failedOrdersCounter = Counter.builder("orders.failed")
            .description("Number of failed orders")
            .register(registry);

        // Time order processing
        this.orderProcessingTimer = Timer.builder("orders.processing.time")
            .description("Time to process orders")
            .register(registry);
    }

    public Order processOrder(OrderRequest request) {
        return orderProcessingTimer.record(() -> {
            try {
                Order order = createOrder(request);
                ordersCounter.increment();
                return order;
            } catch (Exception e) {
                failedOrdersCounter.increment();
                throw e;
            }
        });
    }
}
`}</pre>
                </div>
                <h3>
                  {"Prometheus Configuration"}
                </h3>
                <div className="code-block">
                  <pre>{`
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'spring-boot-app'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8080']

# Run Prometheus with Docker:
# docker run -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
`}</pre>
                </div>
                <h3>
                  {"Key Metrics to Monitor"}
                </h3>
                <div className="code-block">
                  <pre>{`
# JVM Metrics (automatic)
jvm_memory_used_bytes
jvm_gc_pause_seconds
jvm_threads_live_threads

# HTTP Metrics (automatic)
http_server_requests_seconds_count
http_server_requests_seconds_sum
http_server_requests_seconds_max

# Database Metrics
hikaricp_connections_active
hikaricp_connections_pending

# Custom Business Metrics
orders_total
orders_failed
orders_processing_time_seconds
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Centralized Logging with ELK Stack"}
                </h2>
                <p>
                  {"ELK (Elasticsearch, Logstash, Kibana) collects logs from all your services in one place."}
                </p>
                <div className="code-block">
                  <pre>{`
Your Apps → Logstash → Elasticsearch → Kibana
                ↑
        (Collects &    (Stores &      (Visualizes &
         processes)     indexes)       searches)
`}</pre>
                </div>
                <h3>
                  {"Logback Configuration for ELK"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>net.logstash.logback</groupId>
    <artifactId>logstash-logback-encoder</artifactId>
    <version>7.4</version>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
<!-- logback-spring.xml -->
<appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
    <destination>logstash:5000</destination>
    <encoder class="net.logstash.logback.encoder.LogstashEncoder">
        <customFields>{"app":"myapp","env":"production"}</customFields>
    </encoder>
</appender>

<root level="INFO">
    <appender-ref ref="CONSOLE"/>
    <appender-ref ref="LOGSTASH"/>
</root>
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Logging Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Don't Log Sensitive Data"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Logging passwords, credit cards
logger.info("User login: email={}, password={}", email, password);

// GOOD: Never log sensitive information
logger.info("User login attempt: email={}", email);
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Use Parameterized Logging"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: String concatenation (always evaluates)
logger.debug("User data: " + user.toString());

// GOOD: Parameters (only evaluated if level is enabled)
logger.debug("User data: {}", user);
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Log Actionable Information"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Not helpful
logger.error("Error occurred");

// GOOD: Actionable
logger.error("Failed to send email to {} after {} retries: {}",
    email, retryCount, exception.getMessage(), exception);
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Include Context"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Always include enough context to debug
logger.info("Order processed: orderId={}, userId={}, amount={}, items={}",
    order.getId(), user.getId(), order.getTotal(), order.getItems().size());
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Don't Over-Log"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Logging in tight loops
for (Item item : items) {
    logger.info("Processing item: {}", item);  // 10,000 log entries!
}

// GOOD: Log summary
logger.info("Processing {} items", items.size());
// ... process items ...
logger.info("Processed {} items successfully", successCount);
`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Build Production-Ready "}
                <span className="gradient-text">
                  {"Java Applications"}
                </span>
              </h2>
              <p>
                {"Learn logging, monitoring, and observability with hands-on projects and expert mentorship."}
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
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot"}
                </h3>
                {" "}
                <p>
                  {"Build applications with built-in Actuator support."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/kubernetes-java" className="article-card">
                <h3>
                  {"Kubernetes"}
                </h3>
                {" "}
                <p>
                  {"Deploy and monitor Java apps in Kubernetes."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/exception-handling" className="article-card">
                <h3>
                  {"Exception Handling"}
                </h3>
                {" "}
                <p>
                  {"Handle and log errors properly."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Logging and Monitoring as part of the Full Stack Java program."} />
    </>
  );
}
