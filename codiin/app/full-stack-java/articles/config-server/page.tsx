import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Spring Cloud Config Server: Centralized Configuration",
  description: "Learn Centralized Configuration with Spring Cloud Config Server. Manage configuration for all microservices from a single source.",
  keywords: ["Spring Cloud Config", "Config Server Java", "centralized configuration", "microservices config", "externalized configuration"],
  alternates: { canonical: "/full-stack-java/articles/config-server" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/config-server",
    title: "Config Server: Centralized Configuration | CODiiN",
    description: "Manage configuration for all your microservices from a single, centralized source.",
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
  "headline": "Spring Cloud Config Server",
  "description": "Manage configuration for all microservices from a centralized source",
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

export default function FullStackJavaConfigServerPage() {
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
              {"Config Server"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Config Server"}
            </h1>
            <p className="article-subtitle">
              {"One Place to Manage All Your Microservices Configuration"}
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
                  {"You have 20 microservices. Each has its own application.yml with database URLs, API keys, feature flags. Now you need to change the database password. Update 20 files? Redeploy 20 services? What if you miss one?"}
                </p>
                <p>
                  {"Config Server centralizes all configuration. Change once, all services pick it up."}
                </p>
                <div className="code-block">
                  <pre>{`
// WITHOUT Config Server
user-service/application.yml    → db.url=jdbc:mysql://old-db:3306
order-service/application.yml   → db.url=jdbc:mysql://old-db:3306
payment-service/application.yml → db.url=jdbc:mysql://old-db:3306
// Change all 20 manually...

// WITH Config Server
config-repo/application.yml → db.url=jdbc:mysql://new-db:3306
// All services automatically get the new value!
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Single Source of Truth"}
                    </h3>
                    <p>
                      {"All configuration in one Git repository."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Environment Specific"}
                    </h3>
                    <p>
                      {"Different values for dev, staging, production."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Dynamic Updates"}
                    </h3>
                    <p>
                      {"Change config without redeploying services."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Config Server Setup"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml for Config Server -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml for Config Server
server:
  port: 8888

spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/your-org/config-repo
          default-label: main
          search-paths: '{application}'  # Optional: folder per service
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Config Repository Structure"}
                </h2>
                <div className="code-block">
                  <pre>{`
config-repo/
├── application.yml          # Shared by ALL services
├── application-dev.yml      # Shared dev config
├── application-prod.yml     # Shared prod config
├── user-service.yml         # Specific to user-service
├── user-service-dev.yml     # user-service dev overrides
├── user-service-prod.yml    # user-service prod overrides
├── order-service.yml
└── payment-service.yml
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml (shared)
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver

logging:
  level:
    root: INFO

# user-service.yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/users

user:
  default-role: USER
  max-login-attempts: 5

# user-service-prod.yml
spring:
  datasource:
    url: jdbc:mysql://prod-db.example.com:3306/users

user:
  max-login-attempts: 3
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Config Client Setup"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml for any microservice -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.yml for user-service
spring:
  application:
    name: user-service  # Must match filename in config repo
  profiles:
    active: dev
  config:
    import: optional:configserver:http://localhost:8888

# Service starts → Fetches user-service.yml + user-service-dev.yml
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Accessing Configuration"}
                </h2>
                <div className="code-block">
                  <pre>{`
@RestController
public class UserController {

    @Value("\${user.default-role}")
    private String defaultRole;

    @Value("\${user.max-login-attempts}")
    private int maxLoginAttempts;

    // Or use @ConfigurationProperties for groups
}

@ConfigurationProperties(prefix = "user")
@Component
public class UserProperties {
    private String defaultRole;
    private int maxLoginAttempts;
    // getters, setters
}
`}</pre>
                </div>
                <p>
                  {"You can also fetch config directly from Config Server:"}
                </p>
                <div className="code-block">
                  <pre>{`
# Get user-service config for dev profile
GET http://localhost:8888/user-service/dev

# Response (JSON):
{
  "name": "user-service",
  "profiles": ["dev"],
  "propertySources": [
    {
      "name": "user-service-dev.yml",
      "source": {
        "user.default-role": "USER",
        "user.max-login-attempts": 5
      }
    }
  ]
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Dynamic Refresh"}
                </h2>
                <p>
                  {"Change config without restart using Spring Cloud Bus:"}
                </p>
                <div className="code-block">
                  <pre>{`
<!-- Add to services -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bus-amqp</artifactId>
</dependency>
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
        include: refresh, busrefresh

spring:
  rabbitmq:
    host: localhost
    port: 5672
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# After changing config in Git:
# Refresh single service
POST http://localhost:8080/actuator/refresh

# Refresh ALL services via message bus
POST http://localhost:8080/actuator/busrefresh
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
// Mark beans that should refresh
@RefreshScope
@Component
public class UserProperties {
    @Value("\${user.max-login-attempts}")
    private int maxLoginAttempts;
    // Will update when /refresh is called
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Encrypting Secrets"}
                </h2>
                <div className="code-block">
                  <pre>{`
# Config Server application.yml
encrypt:
  key: my-secret-encryption-key  # Or use keystore

# In config repo - store encrypted values:
spring:
  datasource:
    password: '{cipher}AQB+...encrypted...'

# Config Server decrypts before sending to clients
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# Encrypt a value
POST http://localhost:8888/encrypt
Body: my-secret-password
→ Returns: AQB+...encrypted...

# Decrypt a value
POST http://localhost:8888/decrypt
Body: AQB+...encrypted...
→ Returns: my-secret-password
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"High Availability"}
                </h2>
                <div className="code-block">
                  <pre>{`
# Run multiple Config Server instances behind load balancer
# Clients can specify multiple servers:

spring:
  config:
    import: >
      optional:configserver:http://config1:8888,
      optional:configserver:http://config2:8888

# With Eureka (recommended):
spring:
  cloud:
    config:
      discovery:
        enabled: true
        service-id: config-server
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Vault Integration"}
                </h2>
                <p>
                  {"For sensitive secrets, use HashiCorp Vault instead of Git:"}
                </p>
                <div className="code-block">
                  <pre>{`
spring:
  cloud:
    config:
      server:
        vault:
          host: vault.example.com
          port: 8200
          scheme: https
          authentication: TOKEN
          token: \${VAULT_TOKEN}
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
                        {"Use Git:"}
                      </strong>
                      {" Version control your configuration with history"}
                    </li>
                    <li>
                      <strong>
                        {"Encrypt secrets:"}
                      </strong>
                      {" Never store passwords in plain text"}
                    </li>
                    <li>
                      <strong>
                        {"Separate environments:"}
                      </strong>
                      {" Different branches or folders for dev/prod"}
                    </li>
                    <li>
                      <strong>
                        {"Use profiles:"}
                      </strong>
                      {" application-{profile}.yml for environment-specific config"}
                    </li>
                    <li>
                      <strong>
                        {"Cache config:"}
                      </strong>
                      {" Clients should cache and handle Config Server downtime"}
                    </li>
                    <li>
                      <strong>
                        {"Monitor changes:"}
                      </strong>
                      {" Track who changed what and when"}
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
                {"Master Cloud-Native "}
                <span className="gradient-text">
                  {"Architecture"}
                </span>
              </h2>
              <p>
                {"Learn configuration management, service discovery, and more."}
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
                  {"Find your Config Server dynamically."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices"}
                </h3>
                {" "}
                <p>
                  {"Architecture that benefits from Config Server."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Config Server."} />
    </>
  );
}
