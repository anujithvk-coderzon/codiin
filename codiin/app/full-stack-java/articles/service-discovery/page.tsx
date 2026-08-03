import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Service Discovery with Eureka & Consul in Java",
  description: "Learn Service Discovery with Eureka and Consul in Java microservices. Enable services to find each other automatically without hardcoded addresses.",
  keywords: ["Service Discovery Java", "Netflix Eureka", "Consul", "Spring Cloud", "microservices registry", "service registration"],
  alternates: { canonical: "/full-stack-java/articles/service-discovery" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/service-discovery",
    title: "Service Discovery: Eureka & Consul | CODiiN",
    description: "Enable microservices to find each other automatically with Eureka and Consul service discovery.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Service Discovery with Eureka & Consul",
  "description": "Enable microservices to find each other automatically",
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

export default function FullStackJavaServiceDiscoveryPage() {
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
              {"Service Discovery"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Service Discovery"}
            </h1>
            <p className="article-subtitle">
              {"How Microservices Find Each Other Without Hardcoded Addresses"}
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
                  {"In a monolith, everything is in one place. But with microservices, you have dozens of services running on different servers, different ports, constantly scaling up and down. How does the Order Service know where the User Service is?"}
                </p>
                <div className="code-block">
                  <pre>{`
// BAD: Hardcoded addresses
String userServiceUrl = "http://192.168.1.100:8080/users";
// What if the IP changes? What if there are 5 instances?

// GOOD: Service discovery
String userServiceUrl = discoveryClient.getService("user-service").getUri();
// Let the system figure out where it is!
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Dynamic Registration"}
                    </h3>
                    <p>
                      {"Services register themselves when they start, deregister when they stop."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Load Balancing"}
                    </h3>
                    <p>
                      {"Multiple instances? Discovery returns one - with built-in load balancing."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Health Checking"}
                    </h3>
                    <p>
                      {"Automatically removes unhealthy instances from the registry."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Netflix Eureka Setup"}
                </h2>
                <h3>
                  {"1. Eureka Server"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml for Eureka Server -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml for Eureka Server
server:
  port: 8761

eureka:
  client:
    register-with-eureka: false  # Server doesn't register itself
    fetch-registry: false
  server:
    enable-self-preservation: false  # For development
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"2. Eureka Client (Your Services)"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml for any microservice -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml for User Service
spring:
  application:
    name: user-service  # This is how other services find you

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true
`}</pre>
                </div>
                <p>
                  {"That's it! Your service now registers with Eureka automatically."}
                </p>
              </div>
              <div className="concept-section">
                <h2>
                  {"Calling Other Services"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Service
public class OrderService {

    @Autowired
    private DiscoveryClient discoveryClient;

    // Option 1: Manual discovery
    public User getUser(Long userId) {
        List<ServiceInstance> instances =
            discoveryClient.getInstances("user-service");

        if (instances.isEmpty()) {
            throw new RuntimeException("No user-service available");
        }

        ServiceInstance instance = instances.get(0);
        String url = instance.getUri() + "/users/" + userId;

        return restTemplate.getForObject(url, User.class);
    }
}
`}</pre>
                </div>
                <h3>
                  {"Better: Load-Balanced RestTemplate"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Configuration
public class RestTemplateConfig {

    @Bean
    @LoadBalanced  // Magic annotation!
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

@Service
public class OrderService {

    @Autowired
    private RestTemplate restTemplate;

    public User getUser(Long userId) {
        // Use service name instead of URL!
        return restTemplate.getForObject(
            "http://user-service/users/" + userId,
            User.class
        );
    }
}
`}</pre>
                </div>
                <h3>
                  {"Best: OpenFeign Client"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Just declare an interface - Spring handles the rest
@FeignClient(name = "user-service")
public interface UserClient {

    @GetMapping("/users/{id}")
    User getUser(@PathVariable Long id);

    @PostMapping("/users")
    User createUser(@RequestBody User user);
}

@Service
public class OrderService {

    @Autowired
    private UserClient userClient;

    public User getUser(Long userId) {
        return userClient.getUser(userId);  // So clean!
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Consul: Alternative to Eureka"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-consul-discovery</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml
spring:
  application:
    name: user-service
  cloud:
    consul:
      host: localhost
      port: 8500
      discovery:
        health-check-interval: 10s
        instance-id: \${spring.application.name}:\${random.value}
`}</pre>
                </div>
                <h3>
                  {"Eureka vs Consul"}
                </h3>
                <div className="comparison-table">
                  <div className="table-wrap">
                    <table>
                      <tr>
                        <th>
                          {"Feature"}
                        </th>
                        <th>
                          {"Eureka"}
                        </th>
                        <th>
                          {"Consul"}
                        </th>
                      </tr>
                      <tr>
                        <td>
                          {"Setup"}
                        </td>
                        <td>
                          {"Need to run Eureka Server"}
                        </td>
                        <td>
                          {"Standalone binary"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Health Checks"}
                        </td>
                        <td>
                          {"Client-side heartbeat"}
                        </td>
                        <td>
                          {"Active health checks"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Key-Value Store"}
                        </td>
                        <td>
                          {"No"}
                        </td>
                        <td>
                          {"Yes (config storage)"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Multi-Datacenter"}
                        </td>
                        <td>
                          {"Limited"}
                        </td>
                        <td>
                          {"Built-in support"}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"High Availability"}
                </h2>
                <div className="code-block">
                  <pre>{`
# Eureka Server 1 (peer with Server 2)
eureka:
  instance:
    hostname: eureka1
  client:
    service-url:
      defaultZone: http://eureka2:8761/eureka/

# Eureka Server 2 (peer with Server 1)
eureka:
  instance:
    hostname: eureka2
  client:
    service-url:
      defaultZone: http://eureka1:8761/eureka/

# Client connects to both
eureka:
  client:
    service-url:
      defaultZone: http://eureka1:8761/eureka/,http://eureka2:8761/eureka/
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Kubernetes Service Discovery"}
                </h2>
                <p>
                  {"In Kubernetes, you often don't need Eureka - K8s has built-in service discovery:"}
                </p>
                <div className="code-block">
                  <pre>{`
# Kubernetes handles discovery via DNS
# Just use the service name:
spring:
  cloud:
    kubernetes:
      discovery:
        enabled: true

# Or simply use K8s Service DNS:
user-service.default.svc.cluster.local
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
                  {"Architecture"}
                </span>
              </h2>
              <p>
                {"Learn service discovery, API gateways, and distributed systems."}
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
                  {"Introduction to microservices architecture."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/api-gateway" className="article-card">
                <h3>
                  {"API Gateway"}
                </h3>
                {" "}
                <p>
                  {"Route and secure your microservices."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Service Discovery."} />
    </>
  );
}
