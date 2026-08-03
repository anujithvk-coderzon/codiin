import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Reactive Programming in Java: WebFlux & Project Reactor",
  description: "Master Reactive Programming in Java with Project Reactor and Spring WebFlux. Learn Mono, Flux, and non-blocking programming.",
  keywords: ["Reactive Java", "Spring WebFlux", "Project Reactor", "Mono Flux", "non-blocking Java", "reactive streams"],
  alternates: { canonical: "/full-stack-java/articles/reactive-programming" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/reactive-programming",
    title: "Reactive Programming: WebFlux & Project Reactor | CODiiN",
    description: "Build high-performance non-blocking applications with Spring WebFlux and Project Reactor.",
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
  "headline": "Reactive Programming in Java",
  "description": "Master non-blocking programming with WebFlux and Project Reactor",
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

export default function FullStackJavaReactiveProgrammingPage() {
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
              {"Reactive Programming"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Reactive Programming in Java"}
            </h1>
            <p className="article-subtitle">
              {"Build High-Performance, Non-Blocking Applications with WebFlux"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Reactive?"}
                </h2>
                <p>
                  {"Traditional blocking code waits for each operation: read database, wait, read file, wait, call API, wait. With reactive programming, you don't wait - you describe what to do when data arrives."}
                </p>
                <div className="code-block">
                  <pre>{`
// BLOCKING: Thread waits for each operation
User user = userRepository.findById(id);      // Wait...
List<Order> orders = orderService.getOrders(user); // Wait...
sendEmail(user);                              // Wait...
return orders;

// REACTIVE: Non-blocking, events trigger next step
return userRepository.findById(id)           // Returns Mono<User>
    .flatMap(user -> orderService.getOrders(user)) // When user arrives
    .doOnNext(orders -> sendEmail(user))     // When orders arrive
    .subscribe();                            // Start the flow
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Better Resource Usage"}
                    </h3>
                    <p>
                      {"Handle thousands of connections with fewer threads. No waiting = no wasted resources."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Backpressure"}
                    </h3>
                    <p>
                      {"Control data flow. If consumer is slow, tell producer to slow down."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Resilience"}
                    </h3>
                    <p>
                      {"Built-in error handling, retries, fallbacks, and timeouts."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Mono and Flux: Core Types"}
                </h2>
                <div className="code-block">
                  <pre>{`
// Mono: 0 or 1 element
Mono<User> user = Mono.just(new User("John"));
Mono<User> empty = Mono.empty();
Mono<User> error = Mono.error(new RuntimeException("Failed"));

// Flux: 0 to N elements
Flux<Integer> numbers = Flux.just(1, 2, 3, 4, 5);
Flux<String> names = Flux.fromIterable(List.of("John", "Jane"));
Flux<Long> interval = Flux.interval(Duration.ofSeconds(1)); // Infinite!

// Creating from async sources
Mono<User> fromFuture = Mono.fromFuture(asyncOperation());
Mono<User> fromCallable = Mono.fromCallable(() -> fetchUser());
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Common Operators"}
                </h2>
                <div className="code-block">
                  <pre>{`
// Transform
Flux.just(1, 2, 3)
    .map(n -> n * 2)        // [2, 4, 6]
    .filter(n -> n > 3)     // [4, 6]
    .subscribe(System.out::println);

// FlatMap: Async transformations
userService.findById(id)
    .flatMap(user -> orderService.findByUser(user))  // Returns Flux
    .subscribe();

// Combine
Mono<User> user = userService.findById(id);
Mono<Profile> profile = profileService.findById(id);

Mono.zip(user, profile)
    .map(tuple -> new UserWithProfile(tuple.getT1(), tuple.getT2()));

// Error handling
Mono.just(value)
    .onErrorReturn("default")           // Return default on error
    .onErrorResume(e -> fallbackMono()) // Switch to fallback
    .retry(3)                           // Retry 3 times
    .timeout(Duration.ofSeconds(5))     // Timeout after 5s
    .subscribe();
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Spring WebFlux"}
                </h2>
                <div className="code-block">
                  <pre>{`
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
`}</pre>
                </div>
                <h3>
                  {"Reactive Controller"}
                </h3>
                <div className="code-block">
                  <pre>{`
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public Flux<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public Mono<User> getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public Mono<User> createUser(@RequestBody Mono<User> user) {
        return user.flatMap(userService::save);
    }

    // Server-Sent Events (streaming)
    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<User> streamUsers() {
        return userService.findAll()
            .delayElements(Duration.ofSeconds(1));
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Reactive Repository"}
                </h2>
                <div className="code-block">
                  <pre>{`
// With R2DBC (Reactive Database)
public interface UserRepository extends ReactiveCrudRepository<User, Long> {
    Flux<User> findByAgeGreaterThan(int age);
    Mono<User> findByEmail(String email);
}

// With MongoDB
public interface ProductRepository extends ReactiveMongoRepository<Product, String> {
    Flux<Product> findByCategory(String category);
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"WebClient: Reactive HTTP"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Service
public class ApiClient {

    private final WebClient webClient = WebClient.create("https://api.example.com");

    public Mono<User> getUser(Long id) {
        return webClient.get()
            .uri("/users/{id}", id)
            .retrieve()
            .bodyToMono(User.class)
            .timeout(Duration.ofSeconds(5))
            .onErrorResume(e -> Mono.empty());
    }

    public Flux<Product> getProducts() {
        return webClient.get()
            .uri("/products")
            .retrieve()
            .bodyToFlux(Product.class);
    }

    public Mono<User> createUser(User user) {
        return webClient.post()
            .uri("/users")
            .bodyValue(user)
            .retrieve()
            .bodyToMono(User.class);
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"When to Use Reactive"}
                </h2>
                <div className="when-to-use">
                  <h4>
                    {"Good Fit:"}
                  </h4>
                  <ul>
                    <li>
                      {"High concurrency (many simultaneous connections)"}
                    </li>
                    <li>
                      {"Streaming data (real-time feeds, SSE)"}
                    </li>
                    <li>
                      {"Microservices calling multiple external APIs"}
                    </li>
                    <li>
                      {"I/O bound applications"}
                    </li>
                  </ul>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Not Ideal:"}
                  </h4>
                  <ul>
                    <li>
                      {"CPU-bound tasks (heavy computation)"}
                    </li>
                    <li>
                      {"Simple CRUD with blocking database"}
                    </li>
                    <li>
                      {"Team unfamiliar with reactive patterns"}
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
                {"Master Reactive Java "}
                <span className="gradient-text">
                  {"Development"}
                </span>
              </h2>
              <p>
                {"Learn WebFlux and build high-performance applications."}
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
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot"}
                </h3>
                {" "}
                <p>
                  {"Foundation for WebFlux applications."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/multithreading" className="article-card">
                <h3>
                  {"Multithreading"}
                </h3>
                {" "}
                <p>
                  {"Compare reactive with traditional concurrency."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Reactive Programming."} />
    </>
  );
}
