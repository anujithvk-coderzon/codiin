import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Spring Boot Fundamentals: Complete Guide for Beginners",
  description: "Learn Spring Boot fundamentals: auto-configuration, dependency injection, annotations, and starters. Understand why Spring Boot revolutionized Java development and when to use it.",
  keywords: ["Spring Boot tutorial", "Spring Boot fundamentals", "dependency injection", "Spring annotations", "Spring starters", "Java Spring Boot"],
  alternates: { canonical: "/full-stack-java/articles/spring-boot" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/spring-boot",
    title: "Spring Boot Fundamentals: Auto-Configuration & Dependency Injection | CODiiN",
    description: "Master Spring Boot core concepts with beginner-friendly explanations. Learn why Spring Boot is the #1 Java framework.",
    images: ["/images/spring-boot-og.jpg"],
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Spring Boot Fundamentals: Complete Guide for Beginners",
  "description": "Learn Spring Boot fundamentals: auto-configuration, dependency injection, annotations, and starters",
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

export default function FullStackJavaSpringBootPage() {
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
              {"Spring Boot"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Spring Boot Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"Understanding Auto-Configuration, Dependency Injection, Annotations, and Why Spring Boot Changed Everything"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"What is Spring Boot? Why Does It Matter?"}
                </h2>
                <p>
                  {"Imagine you're building a house. The traditional way (plain Java) means you start from scratch - laying every brick, installing every pipe, wiring every socket yourself. Spring Boot is like buying a pre-fabricated house with electricity, plumbing, and walls already in place. You just add your furniture and move in."}
                </p>
                <p>
                  {"Before Spring Boot, setting up a Java web application meant writing hundreds of lines of XML configuration, manually configuring databases, servers, security, and dependencies. It could take days just to get \"Hello World\" running. Spring Boot changed everything."}
                </p>
                <h3>
                  {"The Problem Spring Boot Solved"}
                </h3>
                <p>
                  {"Traditional Spring Framework required:"}
                </p>
                <ul>
                  <li>
                    {"100+ lines of XML configuration files"}
                  </li>
                  <li>
                    {"Manual server setup and deployment"}
                  </li>
                  <li>
                    {"Explicit bean definitions for every component"}
                  </li>
                  <li>
                    {"Complex dependency management"}
                  </li>
                  <li>
                    {"Hours of troubleshooting configuration issues"}
                  </li>
                </ul>
                <p>
                  {"Spring Boot introduced "}
                  <strong>
                    {"\"Convention over Configuration\""}
                  </strong>
                  {" - sensible defaults that work out of the box. Now you can go from zero to a running REST API in minutes."}
                </p>
              </div>
              <div className="concept-section">
                <h2>
                  {"Why Spring Boot? The Game Changer"}
                </h2>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"1. Zero Configuration (Almost)"}
                    </h3>
                    <p>
                      {"Spring Boot auto-configures your application based on dependencies you add. Need a database? Just add the dependency - Spring Boot configures it automatically."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"2. Embedded Server"}
                    </h3>
                    <p>
                      {"No need to install Tomcat or deploy WAR files. Spring Boot includes an embedded server. Run your app like any Java program: "}
                      <code>
                        {"java -jar myapp.jar"}
                      </code>
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"3. Production-Ready Features"}
                    </h3>
                    <p>
                      {"Built-in health checks, metrics, monitoring endpoints, and externalized configuration. Everything enterprises need is included."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"4. Massive Ecosystem"}
                    </h3>
                    <p>
                      {"Spring Boot has \"starters\" for everything - databases, security, messaging, caching, cloud services. Add one dependency, get full functionality."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"5. Microservices Ready"}
                    </h3>
                    <p>
                      {"Perfect for building microservices. Lightweight, standalone applications that start fast and consume minimal resources."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"6. Industry Standard"}
                    </h3>
                    <p>
                      {"Used by Netflix, Amazon, Uber, and thousands of enterprises. If you're doing Java in 2025, you're likely using Spring Boot."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Auto-Configuration: Spring Boot's Magic"}
                </h2>
                <p>
                  {"Auto-configuration is Spring Boot's superpower. It looks at your classpath (the libraries you've included) and automatically configures beans based on what it finds."}
                </p>
                <h3>
                  {"How Auto-Configuration Works"}
                </h3>
                <p>
                  {"Think of auto-configuration like a smart assistant who sees what you're working on and sets up your tools automatically."}
                </p>
                <div className="code-block">
                  <pre>{`
// Traditional Spring: Manual configuration (XML or Java Config)
@Configuration
public class DataSourceConfig {
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource ds = new DriverManagerDataSource();
        ds.setDriverClassName("org.postgresql.Driver");
        ds.setUrl("jdbc:postgresql://localhost:5432/mydb");
        ds.setUsername("user");
        ds.setPassword("password");
        return ds;
    }
}

// Spring Boot: Just add dependency and properties
// application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=user
spring.datasource.password=password

// That's it! DataSource is auto-configured
`}</pre>
                </div>
                <h3>
                  {"@SpringBootApplication: The Magic Annotation"}
                </h3>
                <p>
                  {"This single annotation combines three powerful annotations:"}
                </p>
                <div className="code-block">
                  <pre>{`
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// This annotation is actually three annotations combined:
// @Configuration - Makes this class a source of bean definitions
// @EnableAutoConfiguration - Enables auto-configuration magic
// @ComponentScan - Scans for components in this package and sub-packages
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"When Auto-Configuration Happens"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"You add spring-boot-starter-web"}
                      </strong>
                      {" → Web server, REST controllers auto-configured"}
                    </li>
                    <li>
                      <strong>
                        {"You add spring-boot-starter-data-jpa"}
                      </strong>
                      {" → Database connection, repositories auto-configured"}
                    </li>
                    <li>
                      <strong>
                        {"You add spring-boot-starter-security"}
                      </strong>
                      {" → Security filters, authentication auto-configured"}
                    </li>
                    <li>
                      <strong>
                        {"You add H2 database"}
                      </strong>
                      {" → In-memory database auto-configured"}
                    </li>
                  </ul>
                  <p>
                    {"Spring Boot is smart - it only configures what you need based on your dependencies."}
                  </p>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Dependency Injection: The Heart of Spring"}
                </h2>
                <p>
                  {"Dependency Injection (DI) is a fancy term for a simple concept: instead of creating objects yourself, Spring creates and manages them for you."}
                </p>
                <h3>
                  {"The Problem Without DI"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Without DI: Manual object creation (tightly coupled)
public class OrderService {
    private EmailService emailService;
    private PaymentService paymentService;

    public OrderService() {
        // Creating dependencies manually - hard to test and maintain
        this.emailService = new EmailService();
        this.paymentService = new PaymentService();
    }

    public void placeOrder(Order order) {
        paymentService.processPayment(order);
        emailService.sendConfirmation(order);
    }
}

// Problem: How do you test this? How do you swap EmailService with a different implementation?
`}</pre>
                </div>
                <h3>
                  {"The Solution: Dependency Injection"}
                </h3>
                <div className="code-block">
                  <pre>{`
// With DI: Spring manages object creation
@Service
public class OrderService {
    private final EmailService emailService;
    private final PaymentService paymentService;

    // Constructor injection (recommended)
    @Autowired
    public OrderService(EmailService emailService, PaymentService paymentService) {
        this.emailService = emailService;
        this.paymentService = paymentService;
    }

    public void placeOrder(Order order) {
        paymentService.processPayment(order);
        emailService.sendConfirmation(order);
    }
}

// Spring creates EmailService and PaymentService, then injects them
// Easy to test - just pass mock objects
// Easy to swap implementations - change one line in configuration
`}</pre>
                </div>
                <h3>
                  {"Types of Dependency Injection"}
                </h3>
                <h4>
                  {"1. Constructor Injection (Recommended)"}
                </h4>
                <div className="code-block">
                  <pre>{`
@Service
public class UserService {
    private final UserRepository userRepository;

    // Best practice: Constructor injection with final fields
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// Benefits:
// - Immutable (final fields)
// - Required dependencies are clear
// - Easy to test
// - @Autowired is optional in Spring Boot with single constructor
`}</pre>
                </div>
                <h4>
                  {"2. Field Injection (Simple, but not recommended)"}
                </h4>
                <div className="code-block">
                  <pre>{`
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    // Simpler syntax, but harder to test
}

// Drawbacks:
// - Can't make fields final (mutable)
// - Harder to write unit tests
// - Hidden dependencies
`}</pre>
                </div>
                <h4>
                  {"3. Setter Injection (For optional dependencies)"}
                </h4>
                <div className="code-block">
                  <pre>{`
@Service
public class NotificationService {
    private EmailSender emailSender;

    @Autowired(required = false)  // Optional dependency
    public void setEmailSender(EmailSender emailSender) {
        this.emailSender = emailSender;
    }
}

// Use when dependency is optional
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Which Injection Type to Use?"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Constructor Injection"}
                      </strong>
                      {" - 95% of the time (required dependencies)"}
                    </li>
                    <li>
                      <strong>
                        {"Setter Injection"}
                      </strong>
                      {" - Optional dependencies"}
                    </li>
                    <li>
                      <strong>
                        {"Field Injection"}
                      </strong>
                      {" - Quick prototypes only (avoid in production)"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Key Spring Boot Annotations"}
                </h2>
                <p>
                  {"Annotations are like labels that tell Spring how to handle your classes. Think of them as instructions for Spring's automated system."}
                </p>
                <h3>
                  {"Core Stereotypes"}
                </h3>
                <div className="code-block">
                  <pre>{`
// @Component: Generic Spring-managed component
@Component
public class EmailValidator {
    public boolean isValid(String email) {
        return email.contains("@");
    }
}

// @Service: Business logic layer (same as @Component, but clearer intent)
@Service
public class OrderService {
    public void processOrder(Order order) {
        // Business logic here
    }
}

// @Repository: Data access layer (adds database exception translation)
@Repository
public class UserRepository {
    public User findById(Long id) {
        // Database operations
    }
}

// @Controller: Web layer (handles HTTP requests, returns views)
@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "index";  // Returns view name
    }
}

// @RestController: REST API layer (@Controller + @ResponseBody)
@RestController
public class UserApiController {
    @GetMapping("/api/users")
    public List<User> getUsers() {
        return userService.findAll();  // Returns JSON automatically
    }
}
`}</pre>
                </div>
                <h3>
                  {"Configuration Annotations"}
                </h3>
                <div className="code-block">
                  <pre>{`
// @Configuration: Defines a configuration class
@Configuration
public class AppConfig {
    // @Bean: Manually create and configure beans
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

// @Value: Inject values from properties files
@Service
public class EmailService {
    @Value("\${app.email.from}")
    private String fromEmail;

    @Value("\${app.email.enabled:true}")  // Default value: true
    private boolean emailEnabled;
}

// @ConfigurationProperties: Type-safe configuration
@ConfigurationProperties(prefix = "app.email")
public class EmailProperties {
    private String from;
    private String host;
    private int port;

    // Getters and setters
}
`}</pre>
                </div>
                <h3>
                  {"Web Annotations"}
                </h3>
                <div className="code-block">
                  <pre>{`
@RestController
@RequestMapping("/api/products")
public class ProductController {

    // GET request: /api/products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    // GET request: /api/products/123
    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.findById(id);
    }

    // POST request: Create new product
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.save(product);
    }

    // PUT request: Update product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.update(id, product);
    }

    // DELETE request: Delete product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.delete(id);
    }

    // Query parameters: /api/products/search?name=laptop
    @GetMapping("/search")
    public List<Product> search(@RequestParam String name) {
        return productService.searchByName(name);
    }
}
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Quick Reference: Which Annotation?"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"@Service"}
                      </strong>
                      {" - Business logic (OrderService, UserService)"}
                    </li>
                    <li>
                      <strong>
                        {"@Repository"}
                      </strong>
                      {" - Database access (UserRepository)"}
                    </li>
                    <li>
                      <strong>
                        {"@RestController"}
                      </strong>
                      {" - REST APIs (return JSON/XML)"}
                    </li>
                    <li>
                      <strong>
                        {"@Controller"}
                      </strong>
                      {" - Web pages (return HTML views)"}
                    </li>
                    <li>
                      <strong>
                        {"@Component"}
                      </strong>
                      {" - Everything else (utilities, helpers)"}
                    </li>
                    <li>
                      <strong>
                        {"@Configuration"}
                      </strong>
                      {" - Configuration classes"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Spring Boot Starters: Pre-Packaged Dependencies"}
                </h2>
                <p>
                  {"Starters are like combo meals at a restaurant. Instead of ordering each item separately, you get everything you need in one package."}
                </p>
                <h3>
                  {"What Are Starters?"}
                </h3>
                <p>
                  {"A starter is a single dependency that brings in all libraries needed for a specific feature. No need to hunt for compatible versions or figure out which libraries work together."}
                </p>
                <div className="code-block">
                  <pre>{`
<!-- Without Starter: Manual dependency management -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>6.0.0</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>6.0.0</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.0</version>
</dependency>
<!-- ...and 15 more dependencies -->

<!-- With Starter: One dependency includes everything -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
`}</pre>
                </div>
                <h3>
                  {"Essential Starters"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- Web Applications (REST APIs, web apps) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<!-- Includes: Tomcat, Spring MVC, Jackson JSON, validation -->

<!-- Database Access (JPA/Hibernate) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<!-- Includes: Hibernate, JPA, Spring Data JPA, JDBC -->

<!-- Security (Authentication, Authorization) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<!-- Includes: Spring Security core, web, config -->

<!-- Testing -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
</dependency>
<!-- Includes: JUnit, Mockito, AssertJ, Spring Test -->

<!-- Validation -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
<!-- Includes: Hibernate Validator, Bean Validation API -->

<!-- Caching -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

<!-- Email -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
`}</pre>
                </div>
                <h3>
                  {"Complete Application Example"}
                </h3>
                <div className="code-block">
                  <pre>{`
// pom.xml - Just add starters you need
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
    </dependency>
</dependencies>

// application.properties - Simple configuration
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.show-sql=true

// Main Application Class
@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}

// Entity
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    // Getters and setters
}

// Repository (no implementation needed!)
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data JPA generates implementation
    List<User> findByName(String name);
}

// Service
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

// REST Controller
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}

// That's it! You have a fully functional REST API with database
// Run the app and test: POST http://localhost:8080/api/users
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"When to Use Spring Boot?"}
                </h2>
                <h3>
                  {"Perfect For:"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"REST APIs"}
                    </strong>
                    {" - Build production-ready APIs in minutes"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices"}
                    </strong>
                    {" - Lightweight, standalone services"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise Applications"}
                    </strong>
                    {" - Complex business logic with database"}
                  </li>
                  <li>
                    <strong>
                      {"Web Applications"}
                    </strong>
                    {" - Full-stack web apps with server-side rendering"}
                  </li>
                  <li>
                    <strong>
                      {"Data Processing"}
                    </strong>
                    {" - Batch jobs, scheduled tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Cloud Applications"}
                    </strong>
                    {" - Deploy to AWS, Azure, Google Cloud"}
                  </li>
                </ul>
                <h3>
                  {"Not Ideal For:"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Simple Scripts"}
                    </strong>
                    {" - Overhead is too much for tiny utilities"}
                  </li>
                  <li>
                    <strong>
                      {"Mobile Apps"}
                    </strong>
                    {" - Use backend for APIs, not mobile UI"}
                  </li>
                  <li>
                    <strong>
                      {"Real-time Gaming"}
                    </strong>
                    {" - Too much overhead, use lower-level frameworks"}
                  </li>
                  <li>
                    <strong>
                      {"Embedded Systems"}
                    </strong>
                    {" - Memory footprint too large"}
                  </li>
                </ul>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Use Constructor Injection"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// GOOD
@Service
public class OrderService {
    private final PaymentService paymentService;

    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}

// AVOID
@Service
public class OrderService {
    @Autowired
    private PaymentService paymentService;
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Externalize Configuration"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// application.properties
app.payment.api-key=\${PAYMENT_API_KEY}
app.payment.timeout=5000

// Use @ConfigurationProperties for type safety
@ConfigurationProperties(prefix = "app.payment")
public class PaymentConfig {
    private String apiKey;
    private int timeout;
    // Getters and setters
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Use Profiles for Environments"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// application-dev.properties
spring.datasource.url=jdbc:h2:mem:testdb

// application-prod.properties
spring.datasource.url=jdbc:postgresql://prod-db:5432/mydb

// Activate with: java -jar app.jar --spring.profiles.active=prod
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Use DTOs for API Responses"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Don't expose entities directly
@GetMapping("/users/{id}")
public UserDTO getUser(@PathVariable Long id) {
    User user = userService.findById(id);
    return new UserDTO(user);  // Convert to DTO
}

// DTO filters sensitive data and controls API contract
public class UserDTO {
    private Long id;
    private String name;
    // No password, no internal fields
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Use Proper Exception Handling"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse("NOT_FOUND", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        ErrorResponse error = new ErrorResponse("ERROR", "Something went wrong");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"6. Enable Actuator for Monitoring"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
<!-- Add actuator dependency -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

# application.properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always

# Access: http://localhost:8080/actuator/health
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
                {"Master Spring Boot "}
                <span className="gradient-text">
                  {"with Expert Mentorship"}
                </span>
              </h2>
              <p>
                {"Build production-ready applications with Spring Boot. Learn from industry experts through personalized 1:1 mentorship."}
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
              <Link href="/full-stack-java/articles/java-fundamentals" className="article-card">
                <h3>
                  {"Java Fundamentals"}
                </h3>
                {" "}
                <p>
                  {"Master Java basics, OOP, collections, and streams before diving into Spring Boot."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-security" className="article-card">
                <h3>
                  {"Spring Security"}
                </h3>
                {" "}
                <p>
                  {"Secure your Spring Boot applications with authentication and authorization."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/rest-apis-java" className="article-card">
                <h3>
                  {"Building REST APIs"}
                </h3>
                {" "}
                <p>
                  {"Create professional REST APIs with Spring Boot and best practices."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Spring Boot as part of the Full Stack Java program."} />
    </>
  );
}
