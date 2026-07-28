import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "REST APIs with Spring Boot",
  description: "Learn REST API development with Spring Boot. Understand HTTP methods, status codes, request handling, and RESTful design principles for beginners.",
  keywords: ["REST API tutorial", "Spring Boot REST", "HTTP methods", "API design", "RESTful services", "Java API development"],
  alternates: { canonical: "/full-stack-java/articles/rest-apis-java" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/rest-apis-java",
    title: "REST APIs with Spring Boot: A Beginner's Guide",
    description: "Learn to build RESTful APIs with Spring Boot, understand HTTP methods and design principles.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-java", label: "Learn Java", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "REST APIs with Spring Boot: A Beginner's Guide",
  "description": "Learn to build RESTful APIs with Spring Boot including HTTP methods, status codes, and best practices",
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

export default function FullStackJavaRestApisJavaPage() {
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
                {"REST APIs"}
              </span>
            </div>
            <h1>
              {"REST APIs with Spring Boot"}
            </h1>
            <p className="article-subtitle">
              {"Building Web Services the Right Way"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is a REST API?"}
                </h2>
                <p>
                  {"Imagine a restaurant. You (the client) don't go into the kitchen to cook your food. Instead, you tell the waiter (API) what you want, and they bring it from the kitchen (server)."}
                </p>
                <p>
                  <strong>
                    {"REST API works the same way."}
                  </strong>
                  {" It's a set of rules for how clients and servers communicate over the internet, using standard HTTP methods."}
                </p>
                <div className="code-block">
                  <pre><code>{`CLIENT (Browser/Mobile App)
        │
        │  HTTP Request
        │  GET /api/users/123
        ▼
┌─────────────────────────────┐
│       REST API (Waiter)      │
│   Understands HTTP methods   │
│   Routes to right handler    │
└─────────────────────────────┘
        │
        │  Database Query
        ▼
┌─────────────────────────────┐
│     SERVER (Kitchen)         │
│   Processes the request      │
│   Returns JSON response      │
└─────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"HTTP Methods (CRUD Operations)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`HTTP Method   Purpose           Example
───────────────────────────────────────────────────
GET           Read data         GET /api/users        (get all users)
                               GET /api/users/123    (get user 123)

POST          Create new        POST /api/users       (create new user)
                               Body: {"name": "John"}

PUT           Update entire     PUT /api/users/123    (replace user 123)
              resource         Body: {"name": "Jane", "email": "jane@mail.com"}

PATCH         Partial update    PATCH /api/users/123  (update email only)
                               Body: {"email": "new@mail.com"}

DELETE        Remove            DELETE /api/users/123 (delete user 123)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"HTTP Status Codes"}
                </h2>
                <p>
                  {"Status codes tell the client what happened with their request."}
                </p>
                <div className="code-block">
                  <pre><code>{`CODE    MEANING                 WHEN TO USE
─────────────────────────────────────────────────────
2xx - SUCCESS
200     OK                      Request succeeded
201     Created                 New resource created (POST)
204     No Content              Success, nothing to return (DELETE)

4xx - CLIENT ERRORS
400     Bad Request             Invalid data sent by client
401     Unauthorized            Not logged in / invalid token
403     Forbidden               Logged in but not allowed
404     Not Found               Resource doesn't exist
409     Conflict                Duplicate entry, constraint violation

5xx - SERVER ERRORS
500     Internal Server Error   Something broke on the server
503     Service Unavailable     Server is overloaded or down`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building REST APIs with Spring Boot"}
                </h2>
                <h3>
                  {"1. Create a Controller"}
                </h3>
                <div className="code-block">
                  <pre><code>{`@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // GET all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    // GET single user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();  // 404
        }
        return ResponseEntity.ok(user);  // 200
    }

    // POST - Create new user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody @Valid User user) {
        User created = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);  // 201
    }

    // PUT - Update entire user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @RequestBody @Valid User user) {
        User updated = userService.update(id, user);
        return ResponseEntity.ok(updated);  // 200
    }

    // DELETE - Remove user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();  // 204
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Request Validation"}
                </h2>
                <p>
                  {"Always validate incoming data to prevent bad data entering your system."}
                </p>
                <div className="code-block">
                  <pre><code>{`public class User {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be 2-50 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email")
    private String email;

    @Min(value = 18, message = "Must be at least 18 years old")
    private int age;

    // getters and setters
}

// In controller, use @Valid annotation
@PostMapping
public ResponseEntity<User> createUser(@RequestBody @Valid User user) {
    // If validation fails, Spring returns 400 Bad Request automatically
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Exception Handling"}
                </h2>
                <p>
                  {"Handle errors gracefully and return meaningful error messages."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Global exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {

    // Handle resource not found
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    // Handle validation errors
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(
            MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .collect(Collectors.joining(", "));

        ErrorResponse error = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            message,
            LocalDateTime.now()
        );
        return ResponseEntity.badRequest().body(error);
    }
}

// Error response DTO
public class ErrorResponse {
    private int status;
    private String message;
    private LocalDateTime timestamp;
    // constructor, getters
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"REST API Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use nouns, not verbs:"}
                    </strong>
                    {" /api/users not /api/getUsers"}
                  </li>
                  <li>
                    <strong>
                      {"Use plural names:"}
                    </strong>
                    {" /api/users not /api/user"}
                  </li>
                  <li>
                    <strong>
                      {"Use proper HTTP methods:"}
                    </strong>
                    {" GET for reading, POST for creating"}
                  </li>
                  <li>
                    <strong>
                      {"Return appropriate status codes:"}
                    </strong>
                    {" 201 for created, 404 for not found"}
                  </li>
                  <li>
                    <strong>
                      {"Version your API:"}
                    </strong>
                    {" /api/v1/users for future compatibility"}
                  </li>
                  <li>
                    <strong>
                      {"Use pagination:"}
                    </strong>
                    {" Don't return 10,000 records at once"}
                  </li>
                  <li>
                    <strong>
                      {"Validate all input:"}
                    </strong>
                    {" Never trust client data"}
                  </li>
                  <li>
                    <strong>
                      {"Use DTOs:"}
                    </strong>
                    {" Don't expose your entity structure directly"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Pagination Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`@GetMapping
public Page<User> getUsers(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "id") String sortBy) {

    Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
    return userService.findAll(pageable);
}

// Response includes:
// {
//   "content": [...users...],
//   "totalElements": 100,
//   "totalPages": 10,
//   "size": 10,
//   "number": 0  (current page)
// }`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master REST APIs with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Java program covers REST API design and implementation with Spring Boot. Build production-ready APIs with guidance from industry experts."}
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
                      {"Foundation for REST APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/spring-security" className="related-article-card">
                    <h4>
                      {"Spring Security"}
                    </h4>
                    {" "}
                    <p>
                      {"Secure your APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/hibernate-jpa" className="related-article-card">
                    <h4>
                      {"Hibernate JPA"}
                    </h4>
                    {" "}
                    <p>
                      {"Database access for APIs"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn REST APIs."} />
    </>
  );
}
