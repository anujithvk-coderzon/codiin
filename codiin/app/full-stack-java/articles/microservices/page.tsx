import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Microservices Architecture Guide",
  description: "Learn Microservices architecture with Spring Cloud. Understand when to use microservices, service discovery, API gateway, and distributed systems for beginners.",
  keywords: ["microservices tutorial", "Spring Cloud", "API Gateway", "Eureka", "service discovery", "distributed systems", "monolith vs microservices"],
  alternates: { canonical: "/full-stack-java/articles/microservices" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/microservices",
    title: "Microservices Architecture: A Beginner's Guide",
    description: "Understand microservices architecture, when to use it, and how to build distributed systems with Spring Cloud.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-java", label: "Learn Java", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Microservices Architecture: A Beginner's Guide",
  "description": "Learn microservices architecture with Spring Cloud, service discovery, and distributed systems concepts",
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

export default function FullStackJavaMicroservicesPage() {
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
              <Link href="/full-stack-java">
                {"Full Stack Java"}
              </Link>
              {" / "}
              <span>
                {"Microservices"}
              </span>
            </div>
            <h1>
              {"Microservices Architecture"}
            </h1>
            <p className="article-subtitle">
              {"Building Scalable Distributed Systems"}
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
                  {"What are Microservices?"}
                </h2>
                <p>
                  {"Imagine a large company where one person does everything - accounting, sales, customer support, and product development. If that person gets sick, the entire company stops. Now imagine breaking that into separate departments, each with its own team. If one department has issues, others continue working."}
                </p>
                <p>
                  <strong>
                    {"Microservices work the same way."}
                  </strong>
                  {" Instead of one big application (monolith), you break it into small, independent services that communicate with each other."}
                </p>
                <div className="code-block">
                  <pre><code>{`MONOLITH vs MICROSERVICES

Monolith Application:
┌─────────────────────────────────────┐
│         Single Application          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│  │Users│ │Order│ │Pay  │ │Ship │   │
│  └─────┘ └─────┘ └─────┘ └─────┘   │
│         One Database                │
└─────────────────────────────────────┘

Microservices:
┌─────────┐  ┌─────────┐  ┌─────────┐
│  User   │  │  Order  │  │ Payment │
│ Service │  │ Service │  │ Service │
│   DB    │  │   DB    │  │   DB    │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┼────────────┘
                  │
           API Gateway`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Microservices?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Independent Deployment:"}
                    </strong>
                    {" Update one service without affecting others"}
                  </li>
                  <li>
                    <strong>
                      {"Technology Freedom:"}
                    </strong>
                    {" Each service can use different languages/databases"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Scale only the services that need it"}
                  </li>
                  <li>
                    <strong>
                      {"Team Independence:"}
                    </strong>
                    {" Different teams own different services"}
                  </li>
                  <li>
                    <strong>
                      {"Fault Isolation:"}
                    </strong>
                    {" One service failing doesn't crash everything"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Microservices?"}
                </h2>
                <div className="code-block">
                  <pre><code>{`USE MICROSERVICES WHEN:
✓ Large team (10+ developers)
✓ Complex domain with clear boundaries
✓ Need independent scaling of components
✓ Different parts have different technology needs
✓ Rapid, independent deployments required

STICK WITH MONOLITH WHEN:
✓ Small team (less than 5 developers)
✓ Simple application
✓ Just starting a project (start monolith, split later)
✓ Limited DevOps expertise
✓ Tight deadlines for MVP`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Pro Tip:"}
                  </strong>
                  {" Don't start with microservices! Build a monolith first, understand your domain, then split when you need to."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Components of Microservices"}
                </h2>
                <h3>
                  {"1. API Gateway"}
                </h3>
                <p>
                  {"The \"front door\" for all client requests. It routes requests to appropriate services."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Spring Cloud Gateway Configuration
@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user-service", r -> r
                .path("/api/users/**")
                .uri("lb://USER-SERVICE"))
            .route("order-service", r -> r
                .path("/api/orders/**")
                .uri("lb://ORDER-SERVICE"))
            .build();
    }
}`}</code></pre>
                </div>
                <h3>
                  {"2. Service Discovery (Eureka)"}
                </h3>
                <p>
                  {"Services register themselves and discover other services dynamically - like a phone book for services."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}

// Eureka Client (in each microservice)
@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}`}</code></pre>
                </div>
                <h3>
                  {"3. Config Server"}
                </h3>
                <p>
                  {"Centralized configuration management for all services."}
                </p>
                <div className="code-block">
                  <pre><code>{`# application.yml for Config Server
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/your-org/config-repo
          default-label: main`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Communication Between Services"}
                </h2>
                <h3>
                  {"Synchronous (REST/HTTP)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// Using RestTemplate (simple)
@Service
public class OrderService {

    @Autowired
    private RestTemplate restTemplate;

    public User getUser(Long userId) {
        return restTemplate.getForObject(
            "http://USER-SERVICE/api/users/" + userId,
            User.class
        );
    }
}

// Using Feign Client (recommended)
@FeignClient(name = "USER-SERVICE")
public interface UserClient {

    @GetMapping("/api/users/{id}")
    User getUserById(@PathVariable Long id);
}`}</code></pre>
                </div>
                <h3>
                  {"Asynchronous (Message Queues)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// Publishing an event (RabbitMQ)
@Service
public class OrderService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void createOrder(Order order) {
        // Save order
        orderRepository.save(order);

        // Publish event for other services
        rabbitTemplate.convertAndSend(
            "order-exchange",
            "order.created",
            new OrderCreatedEvent(order.getId())
        );
    }
}

// Consuming the event
@Service
public class NotificationService {

    @RabbitListener(queues = "notification-queue")
    public void handleOrderCreated(OrderCreatedEvent event) {
        // Send notification to customer
        sendEmail(event.getOrderId());
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Handling Failures: Circuit Breaker"}
                </h2>
                <p>
                  {"When a service is down, don't keep trying - fail fast and provide fallback."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Using Resilience4j Circuit Breaker
@Service
public class OrderService {

    @CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
    public User getUser(Long userId) {
        return userClient.getUserById(userId);
    }

    // Fallback when user service is down
    public User getUserFallback(Long userId, Exception ex) {
        return new User(userId, "Unknown", "Service temporarily unavailable");
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"One service, one responsibility:"}
                    </strong>
                    {" Each service does one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"Own your data:"}
                    </strong>
                    {" Each service has its own database"}
                  </li>
                  <li>
                    <strong>
                      {"Design for failure:"}
                    </strong>
                    {" Assume services will fail, handle it gracefully"}
                  </li>
                  <li>
                    <strong>
                      {"Use async communication:"}
                    </strong>
                    {" Prefer message queues over REST for non-critical operations"}
                  </li>
                  <li>
                    <strong>
                      {"Implement health checks:"}
                    </strong>
                    {" Let the system know when a service is healthy"}
                  </li>
                  <li>
                    <strong>
                      {"Centralize logging:"}
                    </strong>
                    {" Use ELK stack or similar for distributed logging"}
                  </li>
                  <li>
                    <strong>
                      {"Use distributed tracing:"}
                    </strong>
                    {" Track requests across services (Zipkin, Jaeger)"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Microservices with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Java program covers microservices architecture from basics to advanced patterns with Spring Cloud. Build distributed systems with guidance from industry experts."}
                </p>
                <Link href="/full-stack-java" className="btn btn-primary">
                  {"Explore Java Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-java/articles/spring-boot" className="related-article-card">
                    <h4>
                      {"Spring Boot"}
                    </h4>
                    {" "}
                    <p>
                      {"Build microservices with Spring Boot"}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/docker-basics" className="related-article-card">
                    <h4>
                      {"Docker"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize your microservices"}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/rest-apis-java" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Build service endpoints"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn about microservices."} />
    </>
  );
}
