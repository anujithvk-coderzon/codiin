import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Distributed Tracing with Zipkin & Jaeger in Java",
  description: "Learn Distributed Tracing with Zipkin and Jaeger in Java microservices. Track requests across services and debug production issues.",
  keywords: ["Distributed Tracing Java", "Zipkin", "Jaeger", "Spring Cloud Sleuth", "Micrometer Tracing", "observability"],
  alternates: { canonical: "/full-stack-java/articles/distributed-tracing" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/distributed-tracing",
    title: "Distributed Tracing: Zipkin & Jaeger | CODiiN",
    description: "Track requests across microservices and debug production issues with distributed tracing.",
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
  "headline": "Distributed Tracing with Zipkin & Jaeger",
  "description": "Track requests across microservices and debug production issues",
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

export default function FullStackJavaDistributedTracingPage() {
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
              {"Distributed Tracing"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Distributed Tracing"}
            </h1>
            <p className="article-subtitle">
              {"Follow a Request's Journey Across Your Microservices"}
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
                  {"User reports: \"The checkout is slow.\" In a monolith, you check one log file. With microservices? The request touches API Gateway → User Service → Inventory Service → Payment Service → Order Service → Notification Service. Which one is slow? Good luck finding it in 6 different log files."}
                </p>
                <p>
                  {"Distributed tracing assigns a unique ID to each request and tracks it across all services."}
                </p>
                <div className="code-block">
                  <pre>{`
// Logs WITHOUT tracing
[user-service]  Processing user 123
[order-service] Creating order
[payment-service] Processing payment
// Which request is which? No idea.

// Logs WITH tracing
[user-service]  [trace-id: abc123] Processing user 123
[order-service] [trace-id: abc123] Creating order
[payment-service] [trace-id: abc123] Processing payment
// All from the same request!
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Key Concepts"}
                </h2>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Trace"}
                    </h3>
                    <p>
                      {"The entire journey of a request. Has a unique trace ID."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Span"}
                    </h3>
                    <p>
                      {"A single operation within a trace (e.g., one service call)."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Context Propagation"}
                    </h3>
                    <p>
                      {"Passing trace ID from service to service via HTTP headers."}
                    </p>
                  </div>
                </div>
                <div className="code-block">
                  <pre>{`
Trace: abc123
├── Span: API Gateway (50ms)
│   └── Span: User Service (20ms)
│       └── Span: Database Query (5ms)
├── Span: Order Service (100ms)
│   ├── Span: Inventory Check (30ms)
│   └── Span: Payment Service (60ms)
└── Span: Notification Service (10ms)

Total: 160ms (some parallel, some sequential)
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Setup with Micrometer Tracing"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml (Spring Boot 3.x) -->
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-tracing-bridge-brave</artifactId>
</dependency>
<dependency>
    <groupId>io.zipkin.reporter2</groupId>
    <artifactId>zipkin-reporter-brave</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml
management:
  tracing:
    sampling:
      probability: 1.0  # 100% of requests (use 0.1 for 10% in production)
  zipkin:
    tracing:
      endpoint: http://localhost:9411/api/v2/spans

logging:
  pattern:
    level: "%5p [\${spring.application.name:},%X{traceId:-},%X{spanId:-}]"
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Run Zipkin"}
                </h2>
                <div className="code-block">
                  <pre>{`
# Using Docker
docker run -d -p 9411:9411 openzipkin/zipkin

# Or download and run
curl -sSL https://zipkin.io/quickstart.sh | bash -s
java -jar zipkin.jar

# Access UI at http://localhost:9411
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Automatic Instrumentation"}
                </h2>
                <p>
                  {"With the dependencies added, tracing works automatically for:"}
                </p>
                <ul>
                  <li>
                    {"Spring MVC controllers"}
                  </li>
                  <li>
                    {"RestTemplate / WebClient calls"}
                  </li>
                  <li>
                    {"Feign clients"}
                  </li>
                  <li>
                    {"Spring Data repositories"}
                  </li>
                  <li>
                    {"Message queues (Kafka, RabbitMQ)"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre>{`
@RestController
public class OrderController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/orders/{id}")
    public Order getOrder(@PathVariable Long id) {
        // Trace ID automatically propagated in header
        User user = restTemplate.getForObject(
            "http://user-service/users/{userId}",
            User.class,
            order.getUserId()
        );
        // Both services share the same trace ID!
        return orderService.findById(id);
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Custom Spans"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Service
public class PaymentService {

    @Autowired
    private Tracer tracer;

    public PaymentResult processPayment(Payment payment) {
        // Create custom span for important operations
        Span span = tracer.nextSpan().name("process-payment").start();
        try (Tracer.SpanInScope ws = tracer.withSpan(span)) {
            // Add useful tags
            span.tag("payment.amount", payment.getAmount().toString());
            span.tag("payment.method", payment.getMethod());

            PaymentResult result = paymentGateway.process(payment);

            span.tag("payment.status", result.getStatus());
            return result;

        } catch (Exception e) {
            span.error(e);  // Record error in trace
            throw e;
        } finally {
            span.end();
        }
    }
}
`}</pre>
                </div>
                <h3>
                  {"Using Annotation"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class InventoryService {

    @NewSpan("check-inventory")
    public boolean checkAvailability(
        @SpanTag("product.id") Long productId,
        @SpanTag("quantity") int quantity) {

        return inventoryRepository.checkStock(productId, quantity);
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Jaeger Alternative"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- Use OpenTelemetry for Jaeger -->
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-tracing-bridge-otel</artifactId>
</dependency>
<dependency>
    <groupId>io.opentelemetry</groupId>
    <artifactId>opentelemetry-exporter-otlp</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# Run Jaeger
docker run -d --name jaeger \\
  -p 16686:16686 \\
  -p 4318:4318 \\
  jaegertracing/all-in-one:latest

# application.yml
management:
  otlp:
    tracing:
      endpoint: http://localhost:4318/v1/traces

# Access UI at http://localhost:16686
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Correlating Logs with Traces"}
                </h2>
                <div className="code-block">
                  <pre>{`
// Logback pattern in logback-spring.xml
<pattern>
    %d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36}
    [traceId=%X{traceId}, spanId=%X{spanId}] - %msg%n
</pattern>

// Now your logs include trace context:
2024-01-15 10:30:45 [http-nio-8080-exec-1] INFO  OrderService
[traceId=abc123, spanId=def456] - Processing order 789
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Zipkin vs Jaeger"}
                </h2>
                <div className="comparison-table">
                  <div className="table-wrap">
                    <table>
                      <tr>
                        <th>
                          {"Feature"}
                        </th>
                        <th>
                          {"Zipkin"}
                        </th>
                        <th>
                          {"Jaeger"}
                        </th>
                      </tr>
                      <tr>
                        <td>
                          {"Setup"}
                        </td>
                        <td>
                          {"Simpler, single jar"}
                        </td>
                        <td>
                          {"More components"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"UI"}
                        </td>
                        <td>
                          {"Basic but functional"}
                        </td>
                        <td>
                          {"More features, DAG view"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Storage"}
                        </td>
                        <td>
                          {"Memory, MySQL, Cassandra, ES"}
                        </td>
                        <td>
                          {"Memory, Cassandra, ES, Kafka"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Best For"}
                        </td>
                        <td>
                          {"Getting started quickly"}
                        </td>
                        <td>
                          {"Production at scale"}
                        </td>
                      </tr>
                    </table>
                  </div>
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
                        {"Sample in production:"}
                      </strong>
                      {" Don't trace 100% of requests - use 1-10% sampling"}
                    </li>
                    <li>
                      <strong>
                        {"Add meaningful tags:"}
                      </strong>
                      {" user.id, order.id, payment.status - things you'll search for"}
                    </li>
                    <li>
                      <strong>
                        {"Name spans well:"}
                      </strong>
                      {" \"db-query-users\" not \"span1\""}
                    </li>
                    <li>
                      <strong>
                        {"Set up alerts:"}
                      </strong>
                      {" Alert on traces over X duration"}
                    </li>
                    <li>
                      <strong>
                        {"Correlate with metrics:"}
                      </strong>
                      {" Link traces to dashboards"}
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
                {"Master "}
                <span className="gradient-text">
                  {"Observability"}
                </span>
              </h2>
              <p>
                {"Learn tracing, metrics, and logging for production systems."}
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
              <Link href="/full-stack-java/articles/logging-monitoring" className="article-card">
                <h3>
                  {"Logging & Monitoring"}
                </h3>
                {" "}
                <p>
                  {"Complete observability stack."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices"}
                </h3>
                {" "}
                <p>
                  {"Architecture that needs tracing."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Distributed Tracing."} />
    </>
  );
}
