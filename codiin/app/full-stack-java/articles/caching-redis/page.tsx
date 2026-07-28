import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
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

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Caching with Redis as part of the Full Stack Java program."} />
    </>
  );
}
