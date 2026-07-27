import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "API Gateway with Spring Cloud Gateway in Java",
  description: "Learn API Gateway patterns with Spring Cloud Gateway. Route, filter, and secure your microservices with a single entry point.",
  keywords: ["API Gateway Java", "Spring Cloud Gateway", "microservices routing", "gateway patterns", "API security", "rate limiting"],
  alternates: { canonical: "/full-stack-java/articles/api-gateway" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/api-gateway",
    title: "API Gateway: Spring Cloud Gateway | CODiiN",
    description: "Create a single entry point for your microservices with routing, security, and rate limiting.",
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
  "headline": "API Gateway with Spring Cloud Gateway",
  "description": "Create a single entry point for your microservices",
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

export default function FullStackJavaApiGatewayPage() {
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
              {"API Gateway"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"API Gateway"}
            </h1>
            <p className="article-subtitle">
              {"One Door to All Your Microservices"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why API Gateway?"}
                </h2>
                <p>
                  {"Without a gateway, clients need to know about every microservice: user-service on port 8081, order-service on 8082, payment-service on 8083... The gateway provides a single entry point that routes requests to the right service."}
                </p>
                <div className="code-block">
                  <pre>{`
// WITHOUT Gateway - Client needs to know all services
fetch('http://user-service:8081/users/1')
fetch('http://order-service:8082/orders')
fetch('http://payment-service:8083/payments')

// WITH Gateway - One endpoint
fetch('http://api-gateway/users/1')
fetch('http://api-gateway/orders')
fetch('http://api-gateway/payments')
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Single Entry Point"}
                    </h3>
                    <p>
                      {"Clients only know about one URL. Gateway handles routing."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Cross-Cutting Concerns"}
                    </h3>
                    <p>
                      {"Authentication, logging, rate limiting - in one place."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Protocol Translation"}
                    </h3>
                    <p>
                      {"HTTP to gRPC, REST to WebSocket - gateway handles it."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Spring Cloud Gateway Setup"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
@SpringBootApplication
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Route Configuration"}
                </h2>
                <div className="code-block">
                  <pre>{`
# application.yml
spring:
  cloud:
    gateway:
      routes:
        # Route to User Service
        - id: user-service
          uri: lb://user-service  # lb = load balanced via Eureka
          predicates:
            - Path=/users/**
          filters:
            - StripPrefix=0

        # Route to Order Service
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/orders/**

        # Route with path rewrite
        - id: product-service
          uri: lb://product-service
          predicates:
            - Path=/api/products/**
          filters:
            - RewritePath=/api/products/(?<segment>.*), /products/\${segment}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Predicates: When to Route"}
                </h2>
                <div className="code-block">
                  <pre>{`
spring:
  cloud:
    gateway:
      routes:
        - id: example-route
          uri: lb://my-service
          predicates:
            # Path matching
            - Path=/api/**

            # HTTP method
            - Method=GET,POST

            # Header presence
            - Header=X-Request-Id

            # Query parameter
            - Query=category

            # Time-based routing
            - After=2024-01-01T00:00:00Z
            - Before=2025-01-01T00:00:00Z
            - Between=2024-01-01T00:00:00Z, 2024-12-31T23:59:59Z

            # Host matching
            - Host=**.example.com

            # Cookie
            - Cookie=session, abc123

            # Weight (for canary deployments)
            # - Weight=group1, 80  (80% traffic)
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Filters: Transform Requests/Responses"}
                </h2>
                <div className="code-block">
                  <pre>{`
spring:
  cloud:
    gateway:
      routes:
        - id: filter-example
          uri: lb://my-service
          predicates:
            - Path=/api/**
          filters:
            # Add headers
            - AddRequestHeader=X-Request-Source, gateway
            - AddResponseHeader=X-Response-Time, 123ms

            # Remove headers
            - RemoveRequestHeader=Cookie
            - RemoveResponseHeader=X-Internal-Header

            # Rewrite path
            - RewritePath=/api/(?<segment>.*), /\${segment}
            - StripPrefix=1
            - PrefixPath=/v2

            # Retry on failure
            - name: Retry
              args:
                retries: 3
                statuses: BAD_GATEWAY

            # Circuit breaker
            - name: CircuitBreaker
              args:
                name: myCircuitBreaker
                fallbackUri: forward:/fallback
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Rate Limiting"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- Add Redis for rate limiting -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis-reactive</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
spring:
  cloud:
    gateway:
      routes:
        - id: rate-limited-route
          uri: lb://user-service
          predicates:
            - Path=/users/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 10   # 10 requests/second
                redis-rate-limiter.burstCapacity: 20   # Allow burst up to 20
                key-resolver: "#{@userKeyResolver}"    # Rate limit by user
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
@Configuration
public class RateLimiterConfig {

    @Bean
    public KeyResolver userKeyResolver() {
        // Rate limit by user header or IP
        return exchange -> Mono.just(
            exchange.getRequest().getHeaders()
                .getFirst("X-User-Id") != null
                ? exchange.getRequest().getHeaders().getFirst("X-User-Id")
                : exchange.getRequest().getRemoteAddress().getAddress().getHostAddress()
        );
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Authentication Filter"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Component
public class AuthenticationFilter implements GlobalFilter, Ordered {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();

        // Skip auth for public paths
        if (isPublicPath(request.getPath().toString())) {
            return chain.filter(exchange);
        }

        // Check Authorization header
        String authHeader = request.getHeaders().getFirst("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return unauthorized(exchange);
        }

        String token = authHeader.substring(7);
        try {
            String userId = jwtUtil.validateAndGetUserId(token);

            // Add user info to request for downstream services
            ServerHttpRequest modifiedRequest = request.mutate()
                .header("X-User-Id", userId)
                .build();

            return chain.filter(exchange.mutate().request(modifiedRequest).build());

        } catch (Exception e) {
            return unauthorized(exchange);
        }
    }

    private Mono<Void> unauthorized(ServerWebExchange exchange) {
        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
        return exchange.getResponse().setComplete();
    }

    @Override
    public int getOrder() {
        return -1;  // Run before other filters
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Fallback Handler"}
                </h2>
                <div className="code-block">
                  <pre>{`
@RestController
public class FallbackController {

    @GetMapping("/fallback")
    public ResponseEntity<Map<String, String>> fallback() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "Service temporarily unavailable");
        response.put("message", "Please try again later");
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response);
    }

    @GetMapping("/fallback/users")
    public ResponseEntity<List<User>> userFallback() {
        // Return cached data or empty list
        return ResponseEntity.ok(Collections.emptyList());
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Programmatic Route Configuration"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user-service", r -> r
                .path("/users/**")
                .filters(f -> f
                    .addRequestHeader("X-Gateway", "spring-cloud")
                    .retry(3))
                .uri("lb://user-service"))

            .route("order-service", r -> r
                .path("/orders/**")
                .and()
                .method(HttpMethod.GET, HttpMethod.POST)
                .filters(f -> f
                    .circuitBreaker(c -> c
                        .setName("orderCircuitBreaker")
                        .setFallbackUri("forward:/fallback/orders")))
                .uri("lb://order-service"))

            .build();
    }
}
`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Master Microservices "}
                <span className="gradient-text">
                  {"Patterns"}
                </span>
              </h2>
              <p>
                {"Learn API gateways, service mesh, and cloud-native architecture."}
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
              <Link href="/full-stack-java/articles/service-discovery" className="article-card">
                <h3>
                  {"Service Discovery"}
                </h3>
                {" "}
                <p>
                  {"How gateway finds your services."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/circuit-breaker" className="article-card">
                <h3>
                  {"Circuit Breaker"}
                </h3>
                {" "}
                <p>
                  {"Handle failures gracefully."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning API Gateway."} />
    </>
  );
}
