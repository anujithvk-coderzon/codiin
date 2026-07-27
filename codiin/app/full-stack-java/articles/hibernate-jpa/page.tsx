import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Hibernate & JPA Tutorial: ORM, Entities & Relationships",
  description: "Master Hibernate and JPA: ORM concepts, entities, relationships, and JPQL. Learn why ORM matters and when to use JPA vs raw JDBC in Java applications.",
  keywords: ["Hibernate JPA tutorial", "ORM Java", "JPA entities", "JPQL", "Hibernate relationships", "Spring Data JPA"],
  alternates: { canonical: "/full-stack-java/articles/hibernate-jpa" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/hibernate-jpa",
    title: "Hibernate & JPA: Complete Guide to ORM in Java | CODiiN",
    description: "Learn ORM, entities, relationships, and JPQL with beginner-friendly explanations and real-world examples.",
    images: ["/images/hibernate-jpa-og.jpg"],
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
  "headline": "Hibernate & JPA Tutorial: ORM, Entities & Relationships",
  "description": "Master Hibernate and JPA: ORM concepts, entities, relationships, and JPQL",
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

export default function FullStackJavaHibernateJpaPage() {
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
              {"Hibernate & JPA"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Hibernate & JPA"}
            </h1>
            <p className="article-subtitle">
              {"Simplifying Database Operations with Object-Relational Mapping"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"What is ORM? Why Do We Need It?"}
                </h2>
                <p>
                  {"Imagine you're a translator between two people who speak different languages. One speaks Java (objects), the other speaks SQL (database tables). ORM (Object-Relational Mapping) is that translator - it converts between Java objects and database rows automatically."}
                </p>
                <h3>
                  {"The Problem: Impedance Mismatch"}
                </h3>
                <p>
                  {"Your Java code works with objects (Customer, Order, Product), but databases work with tables and rows. Without ORM, you write tons of repetitive code:"}
                </p>
                <div className="code-block">
                  <pre>{`
// WITHOUT ORM: Manual JDBC (painful!)
public User findUserById(Long id) {
    String sql = "SELECT * FROM users WHERE id = ?";
    try (Connection conn = dataSource.getConnection();
         PreparedStatement stmt = conn.prepareStatement(sql)) {

        stmt.setLong(1, id);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            User user = new User();
            user.setId(rs.getLong("id"));
            user.setName(rs.getString("name"));
            user.setEmail(rs.getString("email"));
            user.setCreatedAt(rs.getTimestamp("created_at"));
            return user;
        }
    } catch (SQLException e) {
        throw new RuntimeException(e);
    }
    return null;
}

// WITH ORM: Simple and clean!
User user = userRepository.findById(id);

// That's it! No SQL, no manual mapping, no boilerplate
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Less Boilerplate Code"}
                    </h3>
                    <p>
                      {"ORM eliminates 80% of database code. No more manual ResultSet mapping, connection management, or SQL string concatenation."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Database Independence"}
                    </h3>
                    <p>
                      {"Write code once, run on MySQL, PostgreSQL, Oracle, or any database. ORM handles SQL dialect differences."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Type Safety"}
                    </h3>
                    <p>
                      {"Catch errors at compile time, not runtime. No more typos in SQL strings or column names."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Object-Oriented Querying"}
                    </h3>
                    <p>
                      {"Query using Java objects and methods, not SQL strings. More intuitive for Java developers."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Automatic Relationship Management"}
                    </h3>
                    <p>
                      {"Load related objects automatically. No need to manually join tables or write complex queries."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Caching & Performance"}
                    </h3>
                    <p>
                      {"Built-in caching reduces database hits. ORM optimizes queries automatically."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"JPA vs Hibernate: What's the Difference?"}
                </h2>
                <p>
                  {"Think of JPA as a rulebook (specification) and Hibernate as the actual player following those rules (implementation)."}
                </p>
                <div className="code-block">
                  <pre>{`
JPA (Java Persistence API):
- Specification/Interface (just rules, no code)
- Defines how ORM should work in Java
- Standard annotations (@Entity, @Id, @OneToMany)
- Part of Jakarta EE (formerly Java EE)

Hibernate:
- Implementation of JPA (actual working code)
- Most popular JPA provider (90%+ market share)
- Adds extra features beyond JPA
- Can work standalone or with Spring

Analogy:
JPA = "How to drive a car" manual
Hibernate = The actual car that follows the manual

// You code against JPA (the interface)
import javax.persistence.*;  // JPA annotations

// But use Hibernate behind the scenes
// Spring Boot auto-configures Hibernate as the JPA provider
`}</pre>
                </div>
                <h3>
                  {"Other JPA Providers"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Hibernate"}
                    </strong>
                    {" - Most popular, feature-rich (90%+ adoption)"}
                  </li>
                  <li>
                    <strong>
                      {"EclipseLink"}
                    </strong>
                    {" - Official reference implementation"}
                  </li>
                  <li>
                    <strong>
                      {"OpenJPA"}
                    </strong>
                    {" - Apache project"}
                  </li>
                </ul>
                <p>
                  {"We use Hibernate because it's proven, mature, and has the best Spring Boot integration."}
                </p>
              </div>
              <div className="concept-section">
                <h2>
                  {"Entities: Java Classes Mapped to Database Tables"}
                </h2>
                <p>
                  {"An entity is a Java class that represents a database table. Each instance is a row in that table."}
                </p>
                <h3>
                  {"Creating Your First Entity"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Java Class
@Entity  // Marks this as a database table
@Table(name = "users")  // Optional: specify table name
public class User {

    @Id  // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment
    private Long id;

    @Column(name = "full_name", nullable = false, length = 100)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_active")
    private Boolean active = true;

    // Constructors
    public User() {}  // JPA requires no-arg constructor

    public User(String name, String email) {
        this.name = name;
        this.email = email;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and setters (required by JPA)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    // ... more getters/setters
}

// Hibernate automatically creates this table:
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP,
    is_active BOOLEAN
);
`}</pre>
                </div>
                <h3>
                  {"Common Entity Annotations"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Primary Keys
@Id - Marks primary key field
@GeneratedValue(strategy = GenerationType.IDENTITY) - Auto-increment
@GeneratedValue(strategy = GenerationType.UUID) - UUID generation
@GeneratedValue(strategy = GenerationType.SEQUENCE) - Database sequence

// Column Mapping
@Column(name = "column_name") - Map to specific column
@Column(nullable = false) - NOT NULL constraint
@Column(unique = true) - UNIQUE constraint
@Column(length = 500) - VARCHAR size
@Column(precision = 10, scale = 2) - For decimals (e.g., money)

// Special Fields
@Temporal(TemporalType.TIMESTAMP) - For Date/Time (legacy)
@Enumerated(EnumType.STRING) - Store enum as string
@Lob - Large objects (CLOB, BLOB)
@Transient - Don't save to database

// Auditing
@CreatedDate - Auto-set creation time
@LastModifiedDate - Auto-set update time
@CreatedBy - Who created
@LastModifiedBy - Who last updated
`}</pre>
                </div>
                <h3>
                  {"Example: Product Entity"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(columnDefinition = "TEXT")  // For long descriptions
    private String description;

    @Column(precision = 10, scale = 2, nullable = false)
    private BigDecimal price;

    @Column(name = "stock_quantity")
    private Integer stockQuantity;

    @Enumerated(EnumType.STRING)
    private ProductStatus status;  // AVAILABLE, OUT_OF_STOCK, DISCONTINUED

    @Column(name = "image_url")
    private String imageUrl;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    // Getters and setters
}

public enum ProductStatus {
    AVAILABLE, OUT_OF_STOCK, DISCONTINUED
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Entity Relationships: Connecting Tables"}
                </h2>
                <p>
                  {"In real applications, data is related. A customer has orders, an order has items, a post has comments. JPA manages these relationships automatically."}
                </p>
                <h3>
                  {"1. One-to-Many / Many-to-One"}
                </h3>
                <p>
                  {"Most common relationship. Example: One customer has many orders."}
                </p>
                <div className="code-block">
                  <pre>{`
// Customer entity (One side)
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // One customer has many orders
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();

    // Helper method to maintain relationship
    public void addOrder(Order order) {
        orders.add(order);
        order.setCustomer(this);
    }
}

// Order entity (Many side)
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime orderDate;
    private BigDecimal totalAmount;

    // Many orders belong to one customer
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")  // Foreign key column
    private Customer customer;
}

// Database structure:
// customers table: id, name, email
// orders table: id, order_date, total_amount, customer_id (FK)

// Usage:
Customer customer = new Customer("John Doe", "john@email.com");
Order order1 = new Order(LocalDateTime.now(), new BigDecimal("99.99"));
Order order2 = new Order(LocalDateTime.now(), new BigDecimal("149.99"));

customer.addOrder(order1);
customer.addOrder(order2);

customerRepository.save(customer);  // Saves customer AND orders!
`}</pre>
                </div>
                <h3>
                  {"2. Many-to-Many"}
                </h3>
                <p>
                  {"Example: Students enroll in courses, courses have students."}
                </p>
                <div className="code-block">
                  <pre>{`
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Many students can take many courses
    @ManyToMany
    @JoinTable(
        name = "student_course",  // Join table name
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
}

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String code;

    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}

// Database structure:
// students table: id, name
// courses table: id, title, code
// student_course table: student_id, course_id (both are FKs)

// Usage:
Student alice = new Student("Alice");
Student bob = new Student("Bob");

Course java = new Course("Java Programming", "CS101");
Course python = new Course("Python Basics", "CS102");

alice.getCourses().add(java);
alice.getCourses().add(python);
bob.getCourses().add(java);

studentRepository.save(alice);
studentRepository.save(bob);
`}</pre>
                </div>
                <h3>
                  {"3. One-to-One"}
                </h3>
                <p>
                  {"Example: User has one profile, profile belongs to one user."}
                </p>
                <div className="code-block">
                  <pre>{`
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private UserProfile profile;
}

@Entity
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bio;
    private String phoneNumber;
    private String address;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}

// Usage:
User user = new User("john_doe", "password123");
UserProfile profile = new UserProfile("Software Developer", "+1234567890");
user.setProfile(profile);
profile.setUser(user);

userRepository.save(user);
`}</pre>
                </div>
                <h3>
                  {"Cascade Types"}
                </h3>
                <div className="code-block">
                  <pre>{`
@OneToMany(cascade = CascadeType.ALL)
// Propagates all operations (save, update, delete)

CascadeType.PERSIST - Save parent → saves children
CascadeType.MERGE - Update parent → updates children
CascadeType.REMOVE - Delete parent → deletes children
CascadeType.REFRESH - Reload parent → reloads children
CascadeType.DETACH - Detach parent → detaches children
CascadeType.ALL - All of the above

// Example:
customer.addOrder(order);
customerRepository.save(customer);  // With CASCADE, order is saved too!

customerRepository.delete(customer);  // With CASCADE, orders deleted too!
`}</pre>
                </div>
                <h3>
                  {"Fetch Types"}
                </h3>
                <div className="code-block">
                  <pre>{`
// LAZY (default for collections) - Load data only when accessed
@OneToMany(fetch = FetchType.LAZY)
private List<Order> orders;

Customer customer = customerRepository.findById(1L);
// Orders NOT loaded yet
System.out.println(customer.getName());  // No query for orders

System.out.println(customer.getOrders().size());  // NOW orders are loaded

// EAGER - Load data immediately
@ManyToOne(fetch = FetchType.EAGER)
private Customer customer;

Order order = orderRepository.findById(1L);
// Customer is loaded automatically with the order

// Best Practice: Use LAZY for collections, EAGER sparingly
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Spring Data JPA: Repository Magic"}
                </h2>
                <p>
                  {"Spring Data JPA is like having a smart assistant who writes database code for you. You just declare what you want, and it implements it automatically."}
                </p>
                <h3>
                  {"Repository Interface"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Just create an interface - no implementation needed!
public interface UserRepository extends JpaRepository<User, Long> {
    // That's it! You get 20+ methods for free:
    // save(), findById(), findAll(), delete(), count(), etc.
}

// Usage:
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public long countUsers() {
        return userRepository.count();
    }

    public boolean userExists(Long id) {
        return userRepository.existsById(id);
    }
}
`}</pre>
                </div>
                <h3>
                  {"Query Methods: Name-Based Queries"}
                </h3>
                <p>
                  {"Spring Data JPA generates queries from method names automatically!"}
                </p>
                <div className="code-block">
                  <pre>{`
public interface UserRepository extends JpaRepository<User, Long> {

    // Find by single field
    User findByEmail(String email);
    List<User> findByName(String name);

    // Find with conditions
    List<User> findByActiveTrue();
    List<User> findByActiveFalse();

    // Multiple conditions (AND)
    User findByEmailAndActive(String email, boolean active);

    // Multiple conditions (OR)
    List<User> findByNameOrEmail(String name, String email);

    // Comparisons
    List<User> findByAgeGreaterThan(int age);
    List<User> findByAgeLessThanEqual(int age);
    List<User> findByAgeBetween(int start, int end);

    // String operations
    List<User> findByNameContaining(String keyword);
    List<User> findByNameStartingWith(String prefix);
    List<User> findByEmailEndingWith(String domain);
    List<User> findByNameIgnoreCase(String name);

    // Null checks
    List<User> findByPhoneIsNull();
    List<User> findByPhoneIsNotNull();

    // Collection operations
    List<User> findByRolesContaining(String role);

    // Sorting
    List<User> findByActiveOrderByNameAsc(boolean active);
    List<User> findByActiveOrderByCreatedAtDesc(boolean active);

    // Limiting results
    User findFirstByEmail(String email);
    List<User> findTop10ByActiveOrderByCreatedAtDesc(boolean active);

    // Exists checks
    boolean existsByEmail(String email);

    // Count
    long countByActive(boolean active);

    // Delete
    void deleteByEmail(String email);
}

// Spring Data JPA converts method names to SQL:
// findByEmail("john@email.com")
// → SELECT * FROM users WHERE email = 'john@email.com'

// findByActiveAndAgeGreaterThan(true, 18)
// → SELECT * FROM users WHERE active = true AND age > 18
`}</pre>
                </div>
                <h3>
                  {"Custom Queries with @Query"}
                </h3>
                <div className="code-block">
                  <pre>{`
public interface UserRepository extends JpaRepository<User, Long> {

    // JPQL (Java Persistence Query Language) - uses entity names
    @Query("SELECT u FROM User u WHERE u.email = ?1")
    User findByEmailJPQL(String email);

    // Named parameters (clearer)
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.active = :active")
    User findByEmailAndActive(@Param("email") String email,
                              @Param("active") boolean active);

    // Complex queries
    @Query("SELECT u FROM User u WHERE u.name LIKE %:keyword% OR u.email LIKE %:keyword%")
    List<User> searchUsers(@Param("keyword") String keyword);

    // Join queries
    @Query("SELECT u FROM User u JOIN u.orders o WHERE o.totalAmount > :amount")
    List<User> findUsersWithOrdersAbove(@Param("amount") BigDecimal amount);

    // Native SQL (when you need database-specific features)
    @Query(value = "SELECT * FROM users WHERE created_at > DATE_SUB(NOW(), INTERVAL 7 DAY)",
           nativeQuery = true)
    List<User> findUsersCreatedInLastWeek();

    // Modifying queries
    @Modifying
    @Query("UPDATE User u SET u.active = :status WHERE u.id = :id")
    void updateUserStatus(@Param("id") Long id, @Param("status") boolean status);

    // Delete queries
    @Modifying
    @Query("DELETE FROM User u WHERE u.active = false AND u.lastLogin < :date")
    void deleteInactiveUsersBefore(@Param("date") LocalDateTime date);
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"JPQL: Object-Oriented Queries"}
                </h2>
                <p>
                  {"JPQL (Java Persistence Query Language) is like SQL, but instead of table names, you use Java class names. Instead of column names, you use field names."}
                </p>
                <div className="code-block">
                  <pre>{`
// SQL (works with tables)
SELECT * FROM users WHERE email = 'john@email.com'

// JPQL (works with entities)
SELECT u FROM User u WHERE u.email = 'john@email.com'

// Key differences:
// - User (entity class) not users (table name)
// - u.email (object field) not email (column name)
// - Objects returned, not rows

// Simple JPQL queries
SELECT u FROM User u                           // Get all users
SELECT u FROM User u WHERE u.active = true     // Get active users
SELECT u.name FROM User u                      // Get only names
SELECT COUNT(u) FROM User u                    // Count users

// Joins (automatic with relationships)
SELECT o FROM Order o JOIN o.customer c WHERE c.email = :email

// Aggregations
SELECT c, COUNT(o) FROM Customer c JOIN c.orders o GROUP BY c
SELECT AVG(o.totalAmount) FROM Order o
SELECT MAX(p.price), MIN(p.price) FROM Product p

// Subqueries
SELECT u FROM User u WHERE u.id IN
    (SELECT o.customer.id FROM Order o WHERE o.totalAmount > 1000)

// Pagination
@Query("SELECT u FROM User u ORDER BY u.createdAt DESC")
Page<User> findAllUsers(Pageable pageable);

// Usage:
Pageable pageable = PageRequest.of(0, 10);  // Page 0, size 10
Page<User> page = userRepository.findAllUsers(pageable);
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"When to Use JPA vs Raw JDBC?"}
                </h2>
                <h3>
                  {"Use JPA When:"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"CRUD Operations"}
                    </strong>
                    {" - Creating, reading, updating, deleting records"}
                  </li>
                  <li>
                    <strong>
                      {"Object Relationships"}
                    </strong>
                    {" - Managing related entities (customers, orders, products)"}
                  </li>
                  <li>
                    <strong>
                      {"Standard Queries"}
                    </strong>
                    {" - Most business logic queries"}
                  </li>
                  <li>
                    <strong>
                      {"Rapid Development"}
                    </strong>
                    {" - Need to build features quickly"}
                  </li>
                  <li>
                    <strong>
                      {"Database Independence"}
                    </strong>
                    {" - Might switch databases later"}
                  </li>
                  <li>
                    <strong>
                      {"Team with OOP Background"}
                    </strong>
                    {" - Developers prefer working with objects"}
                  </li>
                </ul>
                <h3>
                  {"Use Raw JDBC When:"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Complex Reports"}
                    </strong>
                    {" - Multi-table joins with aggregations"}
                  </li>
                  <li>
                    <strong>
                      {"Bulk Operations"}
                    </strong>
                    {" - Updating millions of rows"}
                  </li>
                  <li>
                    <strong>
                      {"Database-Specific Features"}
                    </strong>
                    {" - PostgreSQL JSON, MySQL full-text search"}
                  </li>
                  <li>
                    <strong>
                      {"Performance Critical"}
                    </strong>
                    {" - Need complete control over SQL"}
                  </li>
                  <li>
                    <strong>
                      {"Legacy Databases"}
                    </strong>
                    {" - Complex schemas that don't map to objects well"}
                  </li>
                  <li>
                    <strong>
                      {"Data Warehousing"}
                    </strong>
                    {" - ETL processes, analytics queries"}
                  </li>
                </ul>
                <h3>
                  {"Hybrid Approach (Best of Both)"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Repository
public class UserRepositoryCustomImpl {

    @Autowired
    private EntityManager entityManager;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Use JPA for standard operations
    public User findById(Long id) {
        return entityManager.find(User.class, id);
    }

    // Use JDBC for complex reports
    public List<UserStatistics> getUserStatistics() {
        String sql = """
            SELECT
                u.id,
                u.name,
                COUNT(o.id) as order_count,
                SUM(o.total_amount) as total_spent
            FROM users u
            LEFT JOIN orders o ON u.id = o.customer_id
            GROUP BY u.id, u.name
            HAVING COUNT(o.id) > 10
            ORDER BY total_spent DESC
            LIMIT 100
        """;

        return jdbcTemplate.query(sql, new UserStatisticsRowMapper());
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Use LAZY Loading for Collections"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// GOOD - Load orders only when needed
@OneToMany(fetch = FetchType.LAZY, mappedBy = "customer")
private List<Order> orders;

// BAD - Loads all orders every time (N+1 problem)
@OneToMany(fetch = FetchType.EAGER, mappedBy = "customer")
private List<Order> orders;
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Use DTOs for API Responses"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Don't expose entities directly
@GetMapping("/users/{id}")
public UserDTO getUser(@PathVariable Long id) {
    User user = userService.findById(id);
    return new UserDTO(user);  // Convert to DTO
}

// DTO prevents:
// - Exposing sensitive data (passwords)
// - Lazy loading exceptions in JSON serialization
// - Tight coupling between database and API
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Use @Transactional Wisely"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
@Service
public class OrderService {

    @Transactional  // All operations succeed or all rollback
    public Order placeOrder(Long customerId, List<OrderItem> items) {
        Customer customer = customerRepository.findById(customerId)
            .orElseThrow();

        Order order = new Order(customer);
        items.forEach(order::addItem);

        // Update inventory
        items.forEach(item ->
            inventoryService.reduceStock(item.getProductId(), item.getQuantity())
        );

        return orderRepository.save(order);
        // If anything fails, entire transaction rolls back
    }
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Index Important Columns"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
@Entity
@Table(
    name = "users",
    indexes = {
        @Index(name = "idx_email", columnList = "email"),
        @Index(name = "idx_created_at", columnList = "created_at")
    }
)
public class User {
    // Fields that are frequently searched should be indexed
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Use Pagination for Large Results"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Don't fetch 10,000 records at once
@GetMapping("/users")
public Page<UserDTO> getUsers(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "20") int size) {

    Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
    return userRepository.findAll(pageable)
        .map(UserDTO::new);
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"6. Avoid N+1 Query Problem"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD - N+1 queries (1 for customers, N for orders)
List<Customer> customers = customerRepository.findAll();
customers.forEach(c -> System.out.println(c.getOrders().size()));
// This executes: 1 query for customers + 1 query per customer for orders

// GOOD - Single query with JOIN FETCH
@Query("SELECT c FROM Customer c JOIN FETCH c.orders")
List<Customer> findAllWithOrders();
// This executes: 1 query with JOIN
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
                {"Master Hibernate & JPA "}
                <span className="gradient-text">
                  {"with Expert Guidance"}
                </span>
              </h2>
              <p>
                {"Learn database operations the modern way with ORM. Build data-driven applications with personalized mentorship."}
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
                  {"Spring Boot Fundamentals"}
                </h3>
                {" "}
                <p>
                  {"Learn Spring Boot basics before diving into database operations with JPA."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/rest-apis-java" className="article-card">
                <h3>
                  {"Building REST APIs"}
                </h3>
                {" "}
                <p>
                  {"Create REST APIs that use JPA for database operations."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/java-fundamentals" className="article-card">
                <h3>
                  {"Java Fundamentals"}
                </h3>
                {" "}
                <p>
                  {"Strengthen your Java basics including OOP concepts used in JPA entities."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Hibernate and JPA as part of the Full Stack Java program."} />
    </>
  );
}
