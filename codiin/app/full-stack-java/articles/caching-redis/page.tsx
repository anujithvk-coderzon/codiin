import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Caching: Spring Cache & Redis Complete Guide",
  description: "Implement caching in Java with Spring Cache and Redis. Learn cache strategies, annotations, and best practices to make your applications faster.",
  keywords: ["Java caching", "Redis Java", "Spring Cache", "Caffeine cache", "cache strategies", "Redis Spring Boot"],
  alternates: { canonical: "/full-stack-java/articles/caching-redis" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/caching-redis",
    title: "Java Caching with Spring Cache & Redis | CODiiN",
    description: "Make your Java applications faster with caching. Learn Spring Cache and Redis integration.",
    images: ["/images/caching-redis-og.jpg"],
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
  "headline": "Java Caching with Spring Cache & Redis",
  "description": "Implement caching in Java with Spring Cache and Redis",
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

export default function FullStackJavaCachingRedisPage() {
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
              {"Caching with Redis"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Caching with Spring Cache & Redis"}
            </h1>
            <p className="article-subtitle">
              {"Make Your Application 10x Faster - Store Frequently Used Data in Memory"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Caching?"}
                </h2>
                <p>
                  {"Imagine a librarian who memorizes the locations of the most requested books. Instead of searching the entire library for \"Harry Potter\" every time, she says \"Shelf 3, Row 2\" from memory. That's caching!"}
                </p>
                <p>
                  {"Database queries are slow (10-100ms). Memory access is fast (0.1ms). Caching stores frequently used data in memory, so you don't hit the database repeatedly."}
                </p>
                <div className="code-block">
                  <pre>{`
WITHOUT CACHING:
Request → Database → 50ms → Response
Request → Database → 50ms → Response  (same data!)
Request → Database → 50ms → Response  (same data again!)

WITH CACHING:
Request → Database → 50ms → Cache → Response
Request → Cache → 0.1ms → Response  (from memory!)
Request → Cache → 0.1ms → Response  (instant!)

Result: 500x faster for cached requests!
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Reduced Latency"}
                    </h3>
                    <p>
                      {"Serve data in milliseconds instead of hundreds of milliseconds. Users notice the difference!"}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Lower Database Load"}
                    </h3>
                    <p>
                      {"Fewer queries mean your database can handle more users without expensive upgrades."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Cost Savings"}
                    </h3>
                    <p>
                      {"Less CPU usage, fewer database connections, lower cloud bills."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Better Scalability"}
                    </h3>
                    <p>
                      {"Handle traffic spikes easily. Cache absorbs the load."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Spring Cache: Simple Annotations"}
                </h2>
                <p>
                  {"Spring Cache adds caching with just annotations - no boilerplate code needed."}
                </p>
                <h3>
                  {"Setup"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
// Enable caching in your application
@SpringBootApplication
@EnableCaching
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
`}</pre>
                </div>
                <h3>
                  {"Basic Caching with @Cacheable"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // First call: hits database, stores result in cache
    // Subsequent calls: returns from cache, skips database!
    @Cacheable("users")
    public User findById(Long id) {
        System.out.println("Fetching from database...");
        return userRepository.findById(id).orElse(null);
    }

    // Cache with custom key
    @Cacheable(value = "users", key = "#email")
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Conditional caching
    @Cacheable(value = "users", condition = "#id > 0")
    public User findByIdIfPositive(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
`}</pre>
                </div>
                <h3>
                  {"Updating Cache with @CachePut"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Always executes the method AND updates the cache
@CachePut(value = "users", key = "#user.id")
public User updateUser(User user) {
    return userRepository.save(user);
}
`}</pre>
                </div>
                <h3>
                  {"Removing from Cache with @CacheEvict"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Remove specific entry from cache
@CacheEvict(value = "users", key = "#id")
public void deleteUser(Long id) {
    userRepository.deleteById(id);
}

// Clear entire cache
@CacheEvict(value = "users", allEntries = true)
public void clearUserCache() {
    // Cache cleared!
}

// Evict before method execution
@CacheEvict(value = "users", key = "#id", beforeInvocation = true)
public void deleteUserSafely(Long id) {
    userRepository.deleteById(id);
}
`}</pre>
                </div>
                <h3>
                  {"Multiple Cache Operations"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Caching(
    put = { @CachePut(value = "users", key = "#user.id") },
    evict = { @CacheEvict(value = "userList", allEntries = true) }
)
public User saveUser(User user) {
    return userRepository.save(user);
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"In-Memory Cache with Caffeine"}
                </h2>
                <p>
                  {"Caffeine is a high-performance in-memory cache. Great for single-server applications."}
                </p>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.cache.type=caffeine
spring.cache.caffeine.spec=maximumSize=500,expireAfterWrite=10m
`}</pre>
                </div>
                <h3>
                  {"Custom Cache Configuration"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();

        cacheManager.setCaffeine(Caffeine.newBuilder()
            .maximumSize(1000)              // Max entries
            .expireAfterWrite(10, TimeUnit.MINUTES)  // TTL
            .recordStats());                // Enable stats

        return cacheManager;
    }

    // Different settings for different caches
    @Bean
    public CacheManager customCacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();

        cacheManager.setCaches(Arrays.asList(
            buildCache("users", 100, 30),      // 100 entries, 30 min
            buildCache("products", 500, 60),   // 500 entries, 60 min
            buildCache("config", 50, 120)      // 50 entries, 2 hours
        ));

        return cacheManager;
    }

    private CaffeineCache buildCache(String name, int size, int minutes) {
        return new CaffeineCache(name, Caffeine.newBuilder()
            .maximumSize(size)
            .expireAfterWrite(minutes, TimeUnit.MINUTES)
            .build());
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Distributed Cache with Redis"}
                </h2>
                <p>
                  {"Redis is a distributed cache that works across multiple servers. Essential for microservices and scaled applications."}
                </p>
                <h3>
                  {"Setup"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.cache.type=redis
spring.data.redis.host=localhost
spring.data.redis.port=6379
spring.data.redis.password=yourpassword  # if needed
spring.cache.redis.time-to-live=3600000  # 1 hour in ms
`}</pre>
                </div>
                <h3>
                  {"Redis Configuration"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Configuration
@EnableCaching
public class RedisConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        // Default config
        RedisCacheConfiguration defaultConfig = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(30))
            .serializeKeysWith(RedisSerializationContext.SerializationPair
                .fromSerializer(new StringRedisSerializer()))
            .serializeValuesWith(RedisSerializationContext.SerializationPair
                .fromSerializer(new GenericJackson2JsonRedisSerializer()));

        // Custom config per cache
        Map<String, RedisCacheConfiguration> cacheConfigs = new HashMap<>();
        cacheConfigs.put("users", defaultConfig.entryTtl(Duration.ofHours(1)));
        cacheConfigs.put("products", defaultConfig.entryTtl(Duration.ofMinutes(15)));
        cacheConfigs.put("sessions", defaultConfig.entryTtl(Duration.ofHours(24)));

        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(defaultConfig)
            .withInitialCacheConfigurations(cacheConfigs)
            .build();
    }
}
`}</pre>
                </div>
                <h3>
                  {"Using RedisTemplate Directly"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class CacheService {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    // Store value
    public void set(String key, Object value, long timeoutMinutes) {
        redisTemplate.opsForValue().set(key, value, timeoutMinutes, TimeUnit.MINUTES);
    }

    // Get value
    public Object get(String key) {
        return redisTemplate.opsForValue().get(key);
    }

    // Delete value
    public void delete(String key) {
        redisTemplate.delete(key);
    }

    // Check if exists
    public boolean exists(String key) {
        return Boolean.TRUE.equals(redisTemplate.hasKey(key));
    }

    // Set expiration
    public void expire(String key, long timeoutMinutes) {
        redisTemplate.expire(key, timeoutMinutes, TimeUnit.MINUTES);
    }

    // Store hash (like a Map)
    public void setHash(String key, String field, Object value) {
        redisTemplate.opsForHash().put(key, field, value);
    }

    public Object getHash(String key, String field) {
        return redisTemplate.opsForHash().get(key, field);
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Caching Patterns"}
                </h2>
                <h3>
                  {"Cache-Aside (Lazy Loading)"}
                </h3>
                <p>
                  {"Most common pattern. Application manages the cache."}
                </p>
                <div className="code-block">
                  <pre>{`
public User getUser(Long id) {
    // 1. Check cache
    User user = cache.get("user:" + id);

    if (user != null) {
        return user;  // Cache hit
    }

    // 2. Cache miss - load from database
    user = userRepository.findById(id).orElse(null);

    // 3. Store in cache for next time
    if (user != null) {
        cache.set("user:" + id, user, 30);  // 30 min TTL
    }

    return user;
}

// With @Cacheable, Spring does this automatically!
@Cacheable("users")
public User getUser(Long id) {
    return userRepository.findById(id).orElse(null);
}
`}</pre>
                </div>
                <h3>
                  {"Write-Through"}
                </h3>
                <p>
                  {"Update cache immediately when data changes."}
                </p>
                <div className="code-block">
                  <pre>{`
@CachePut(value = "users", key = "#user.id")
public User saveUser(User user) {
    return userRepository.save(user);  // DB and cache updated together
}
`}</pre>
                </div>
                <h3>
                  {"Write-Behind (Write-Back)"}
                </h3>
                <p>
                  {"Update cache immediately, database later (async)."}
                </p>
                <div className="code-block">
                  <pre>{`
public User saveUser(User user) {
    // Update cache immediately
    cache.set("user:" + user.getId(), user, 60);

    // Queue database update for later
    asyncDatabaseService.saveAsync(user);

    return user;
}
`}</pre>
                </div>
                <h3>
                  {"Cache Stampede Prevention"}
                </h3>
                <p>
                  {"Prevent multiple requests from hitting the database when cache expires."}
                </p>
                <div className="code-block">
                  <pre>{`
@Service
public class UserService {

    private final LoadingCache<Long, User> userCache;

    public UserService(UserRepository userRepository) {
        this.userCache = Caffeine.newBuilder()
            .maximumSize(1000)
            .expireAfterWrite(30, TimeUnit.MINUTES)
            .build(userId -> {
                // Only ONE thread loads data, others wait
                return userRepository.findById(userId).orElse(null);
            });
    }

    public User getUser(Long id) {
        return userCache.get(id);  // Automatically prevents stampede
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Real-World Examples"}
                </h2>
                <h3>
                  {"API Rate Limiting"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class RateLimiter {

    @Autowired
    private RedisTemplate<String, Integer> redisTemplate;

    public boolean isAllowed(String clientId, int maxRequests, int windowSeconds) {
        String key = "rate:" + clientId;

        Long count = redisTemplate.opsForValue().increment(key);

        if (count == 1) {
            redisTemplate.expire(key, windowSeconds, TimeUnit.SECONDS);
        }

        return count <= maxRequests;
    }
}

// Usage in controller
@GetMapping("/api/data")
public ResponseEntity<?> getData(@RequestHeader("X-Client-Id") String clientId) {
    if (!rateLimiter.isAllowed(clientId, 100, 60)) {  // 100 req/min
        return ResponseEntity.status(429).body("Too many requests");
    }
    return ResponseEntity.ok(fetchData());
}
`}</pre>
                </div>
                <h3>
                  {"Session Storage"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.session</groupId>
    <artifactId>spring-session-data-redis</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.session.store-type=redis
spring.session.redis.namespace=myapp:sessions
server.servlet.session.timeout=30m
`}</pre>
                </div>
                <h3>
                  {"Caching Database Queries"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Cacheable("products")
    Optional<Product> findById(Long id);

    @Cacheable(value = "productsByCategory", key = "#category")
    List<Product> findByCategory(String category);

    @CacheEvict(value = {"products", "productsByCategory"}, allEntries = true)
    @Override
    <S extends Product> S save(S product);
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Caching Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Cache What Makes Sense"}
                  </h3>
                  <div className="when-to-use">
                    <h4>
                      {"Good Candidates for Caching:"}
                    </h4>
                    <ul>
                      <li>
                        {"Read-heavy data (read 100x more than written)"}
                      </li>
                      <li>
                        {"Expensive computations"}
                      </li>
                      <li>
                        {"Data that doesn't change often"}
                      </li>
                      <li>
                        {"Reference data (countries, categories)"}
                      </li>
                    </ul>
                  </div>
                  <div className="when-to-use">
                    <h4>
                      {"Poor Candidates:"}
                    </h4>
                    <ul>
                      <li>
                        {"Rapidly changing data"}
                      </li>
                      <li>
                        {"User-specific data that varies widely"}
                      </li>
                      <li>
                        {"Security-sensitive data"}
                      </li>
                      <li>
                        {"Data that must always be fresh"}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Set Appropriate TTLs"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Too short: cache isn't helpful
@Cacheable(value = "users", ttl = 10)  // 10 seconds - why bother?

// Too long: stale data problems
@Cacheable(value = "users", ttl = 86400000)  // 1 day - risky!

// Just right: balance freshness and performance
@Cacheable(value = "users", ttl = 1800000)  // 30 minutes
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Handle Cache Failures Gracefully"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
@Cacheable(value = "users", unless = "#result == null")
public User findUser(Long id) {
    try {
        return userRepository.findById(id).orElse(null);
    } catch (Exception e) {
        logger.error("Failed to fetch user", e);
        return null;  // Don't cache errors
    }
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Use Meaningful Cache Keys"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Generic keys
@Cacheable("data")

// GOOD: Descriptive keys
@Cacheable(value = "users", key = "'user:' + #id")
@Cacheable(value = "products", key = "'category:' + #category + ':page:' + #page")
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Monitor Cache Performance"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
# Expose cache metrics
management.endpoints.web.exposure.include=caches,metrics
# Access at: /actuator/caches and /actuator/metrics/cache.gets
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
                {"Build High-Performance "}
                <span className="gradient-text">
                  {"Java Applications"}
                </span>
              </h2>
              <p>
                {"Learn caching, Redis, and performance optimization with hands-on projects."}
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
                  {"Build applications with Spring Cache support."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/hibernate-jpa" className="article-card">
                <h3>
                  {"Hibernate & JPA"}
                </h3>
                {" "}
                <p>
                  {"Cache database queries with Hibernate."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices"}
                </h3>
                {" "}
                <p>
                  {"Distributed caching across services."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Caching with Redis as part of the Full Stack Java program."} />
    </>
  );
}
