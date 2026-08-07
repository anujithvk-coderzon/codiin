import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Fundamentals: Complete Guide to Variables, OOP & Collections",
  description: "Master Java fundamentals including variables, OOP concepts, collections, and streams. Learn why Java is the enterprise standard and when to use it for your applications.",
  keywords: ["Java fundamentals", "Java OOP", "Java collections", "Java streams", "learn Java", "enterprise Java", "Java programming basics"],
  alternates: { canonical: "/full-stack-java/articles/java-fundamentals" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/java-fundamentals",
    title: "Java Fundamentals: Variables, OOP & Collections | CODiiN",
    description: "Comprehensive guide to Java fundamentals. Learn variables, OOP, collections, and streams with beginner-friendly explanations and real-world examples.",
    images: ["/images/java-fundamentals-og.jpg"],
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Java Fundamentals: Complete Guide to Variables, OOP & Collections",
  "description": "Master Java fundamentals including variables, OOP concepts, collections, and streams",
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

export default function FullStackJavaJavaFundamentalsPage() {
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
              {"Java Fundamentals"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Java Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"Understanding Variables, OOP, Collections, and Streams - The Building Blocks of Enterprise Development"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Java? The Enterprise Standard"}
                </h2>
                <p>
                  {"Imagine building a skyscraper. You wouldn't use wood or cardboard - you'd use steel and concrete because they're reliable, tested, and built to last decades. That's exactly what Java is in the software world."}
                </p>
                <p>
                  {"Java has been the backbone of enterprise software for over 25 years. When banks process your transactions, when healthcare systems manage patient records, when e-commerce platforms handle millions of orders - Java is often running behind the scenes. But why?"}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Rock-Solid Stability"}
                    </h3>
                    <p>
                      {"Java's strong typing system catches errors before your code even runs. Think of it like a spell-checker that won't let you submit a document with typos. This prevents bugs from reaching production."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Write Once, Run Anywhere"}
                    </h3>
                    <p>
                      {"Java code runs on any device with a JVM (Java Virtual Machine) - Windows, Mac, Linux, servers, even mobile devices. It's like speaking a universal language everyone understands."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Massive Ecosystem"}
                    </h3>
                    <p>
                      {"Need to connect to a database? Send emails? Process payments? There's a battle-tested Java library for that. You're never starting from scratch."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Enterprise Job Market"}
                    </h3>
                    <p>
                      {"90% of Fortune 500 companies use Java. Learning Java opens doors to stable, well-paying careers in banking, healthcare, insurance, and enterprise software."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Variables: Containers for Your Data"}
                </h2>
                <p>
                  {"Think of variables as labeled boxes where you store different types of information. In Java, you must declare what type of data goes in each box - this is called \"strong typing.\""}
                </p>
                <h3>
                  {"Primitive Types: The Basic Building Blocks"}
                </h3>
                <p>
                  {"Java has 8 primitive types - think of them as the atoms of programming:"}
                </p>
                <div className="code-block">
                  <pre>{`
// Numbers
int age = 25;                    // Whole numbers (-2 billion to 2 billion)
long population = 8000000000L;   // Really big whole numbers
double price = 99.99;            // Decimal numbers
float rating = 4.5f;             // Smaller decimals

// Text and logic
char grade = 'A';                // Single character
boolean isActive = true;         // true or false
byte data = 127;                 // Small numbers (-128 to 127)
short count = 30000;             // Medium numbers
`}</pre>
                </div>
                <h3>
                  {"Reference Types: Complex Data"}
                </h3>
                <p>
                  {"For anything more complex than simple values, we use reference types. The most common is String:"}
                </p>
                <div className="code-block">
                  <pre>{`
String name = "John Doe";
String email = "john@example.com";

// Strings are immutable - once created, they can't be changed
String greeting = "Hello";
greeting = greeting + " World";  // Creates a NEW string
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"When to Use What?"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"int"}
                      </strong>
                      {" - Age, quantity, IDs (most common)"}
                    </li>
                    <li>
                      <strong>
                        {"long"}
                      </strong>
                      {" - Timestamps, file sizes, population"}
                    </li>
                    <li>
                      <strong>
                        {"double"}
                      </strong>
                      {" - Prices, measurements, calculations"}
                    </li>
                    <li>
                      <strong>
                        {"boolean"}
                      </strong>
                      {" - Flags, status checks (is logged in? is active?)"}
                    </li>
                    <li>
                      <strong>
                        {"String"}
                      </strong>
                      {" - Names, addresses, any text data"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Object-Oriented Programming (OOP): Modeling the Real World"}
                </h2>
                <p>
                  {"OOP is like creating blueprints for real-world objects. Instead of writing spaghetti code where everything is mixed together, you organize code into logical, reusable units."}
                </p>
                <h3>
                  {"Classes and Objects: The Blueprint and The Building"}
                </h3>
                <p>
                  {"A "}
                  <strong>
                    {"class"}
                  </strong>
                  {" is a blueprint (like architectural plans), and an "}
                  <strong>
                    {"object"}
                  </strong>
                  {" is the actual building constructed from those plans."}
                </p>
                <div className="code-block">
                  <pre>{`
// Class: Blueprint for a Bank Account
public class BankAccount {
    // Properties (data)
    private String accountNumber;
    private double balance;
    private String ownerName;

    // Constructor: How to create an account
    public BankAccount(String accountNumber, String ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0;  // New accounts start with $0
    }

    // Methods (actions the account can perform)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            System.out.println("Withdrew: $" + amount);
            return true;
        }
        return false;  // Insufficient funds
    }

    public double getBalance() {
        return balance;
    }
}

// Creating objects (actual bank accounts)
BankAccount johns = new BankAccount("ACC001", "John Doe");
johns.deposit(1000);
johns.withdraw(200);
System.out.println("Balance: $" + johns.getBalance());  // $800
`}</pre>
                </div>
                <h3>
                  {"The Four Pillars of OOP"}
                </h3>
                <h4>
                  {"1. Encapsulation: Protecting Your Data"}
                </h4>
                <p>
                  {"Think of encapsulation like a car. You don't need to know how the engine works internally - you just use the steering wheel, pedals, and gear shift. The complex internals are hidden."}
                </p>
                <div className="code-block">
                  <pre>{`
public class User {
    // Private data - hidden from outside access
    private String password;

    // Public methods - controlled access
    public void setPassword(String newPassword) {
        if (newPassword.length() >= 8) {  // Validation!
            this.password = hashPassword(newPassword);
        }
    }

    public boolean checkPassword(String input) {
        return hashPassword(input).equals(password);
    }
}
// You can't access user.password directly - it's protected!
`}</pre>
                </div>
                <h4>
                  {"2. Inheritance: Reusing Code"}
                </h4>
                <p>
                  {"Inheritance is like family traits. Children inherit characteristics from parents but can also have their own unique features."}
                </p>
                <div className="code-block">
                  <pre>{`
// Parent class (general concept)
public class Animal {
    protected String name;

    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class (specific type)
public class Dog extends Animal {
    public Dog(String name) {
        this.name = name;
    }

    // Dogs can do everything animals can, PLUS bark
    public void bark() {
        System.out.println(name + " says: Woof!");
    }
}

Dog buddy = new Dog("Buddy");
buddy.eat();   // Inherited from Animal
buddy.bark();  // Specific to Dog
`}</pre>
                </div>
                <h4>
                  {"3. Polymorphism: Many Forms"}
                </h4>
                <p>
                  {"Polymorphism means \"one interface, many implementations.\" It's like a remote control - the \"power\" button works for TV, AC, stereo, but does different things."}
                </p>
                <div className="code-block">
                  <pre>{`
public interface PaymentProcessor {
    void processPayment(double amount);
}

public class CreditCardProcessor implements PaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " via Credit Card");
        // Credit card specific logic
    }
}

public class PayPalProcessor implements PaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " via PayPal");
        // PayPal specific logic
    }
}

// Same method call, different behavior!
PaymentProcessor processor = new CreditCardProcessor();
processor.processPayment(100);  // Uses credit card

processor = new PayPalProcessor();
processor.processPayment(100);  // Uses PayPal
`}</pre>
                </div>
                <h4>
                  {"4. Abstraction: Hiding Complexity"}
                </h4>
                <p>
                  {"Abstraction is like driving a car without knowing how the engine works. You focus on the \"what,\" not the \"how.\""}
                </p>
                <div className="code-block">
                  <pre>{`
public abstract class Report {
    // Common to all reports
    public void generate() {
        fetchData();
        formatData();
        sendToUser();
    }

    // Each report type implements these differently
    protected abstract void fetchData();
    protected abstract void formatData();

    private void sendToUser() {
        System.out.println("Report sent!");
    }
}

public class SalesReport extends Report {
    protected void fetchData() {
        // Get sales data from database
    }

    protected void formatData() {
        // Format as sales chart
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Collections: Managing Groups of Data"}
                </h2>
                <p>
                  {"Collections are like different types of containers for storing multiple items. Choosing the right container makes your code faster and cleaner."}
                </p>
                <h3>
                  {"List: Ordered Collection (Like a Queue)"}
                </h3>
                <p>
                  {"Use when order matters and you want to access items by position."}
                </p>
                <div className="code-block">
                  <pre>{`
import java.util.ArrayList;
import java.util.List;

// Shopping cart - order matters!
List<String> cart = new ArrayList<>();
cart.add("Laptop");      // Position 0
cart.add("Mouse");       // Position 1
cart.add("Keyboard");    // Position 2

System.out.println(cart.get(0));  // "Laptop"
cart.remove("Mouse");
System.out.println(cart.size());  // 2

// Iterate through items
for (String item : cart) {
    System.out.println("Item: " + item);
}
`}</pre>
                </div>
                <h3>
                  {"Set: Unique Items (No Duplicates)"}
                </h3>
                <p>
                  {"Use when you want to ensure uniqueness, like tags or unique user IDs."}
                </p>
                <div className="code-block">
                  <pre>{`
import java.util.HashSet;
import java.util.Set;

// User's skills - no duplicates
Set<String> skills = new HashSet<>();
skills.add("Java");
skills.add("Python");
skills.add("Java");  // Ignored - already exists!

System.out.println(skills.size());  // 2, not 3
System.out.println(skills.contains("Java"));  // true
`}</pre>
                </div>
                <h3>
                  {"Map: Key-Value Pairs (Like a Dictionary)"}
                </h3>
                <p>
                  {"Use when you want to look up values by a unique key, like a phone book."}
                </p>
                <div className="code-block">
                  <pre>{`
import java.util.HashMap;
import java.util.Map;

// User preferences - key: setting name, value: setting value
Map<String, String> preferences = new HashMap<>();
preferences.put("theme", "dark");
preferences.put("language", "en");
preferences.put("notifications", "enabled");

System.out.println(preferences.get("theme"));  // "dark"

// Check if key exists
if (preferences.containsKey("theme")) {
    System.out.println("Theme is set");
}

// Iterate through entries
for (Map.Entry<String, String> entry : preferences.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Which Collection to Use?"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"ArrayList"}
                      </strong>
                      {" - Shopping carts, todo lists, ordered items"}
                    </li>
                    <li>
                      <strong>
                        {"LinkedList"}
                      </strong>
                      {" - Queues, when adding/removing from start/end frequently"}
                    </li>
                    <li>
                      <strong>
                        {"HashSet"}
                      </strong>
                      {" - Tags, unique IDs, removing duplicates"}
                    </li>
                    <li>
                      <strong>
                        {"HashMap"}
                      </strong>
                      {" - User settings, configuration, lookups by ID"}
                    </li>
                    <li>
                      <strong>
                        {"TreeMap"}
                      </strong>
                      {" - When you need sorted keys"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Streams: Modern Data Processing"}
                </h2>
                <p>
                  {"Streams are like assembly lines for data. Instead of manually looping through collections, you create a pipeline of operations that process data efficiently."}
                </p>
                <h3>
                  {"Why Streams?"}
                </h3>
                <p>
                  {"Imagine you have 1000 products and need to find all products priced under $50, sort them by name, and get just the names. Without streams, that's a lot of loops. With streams, it's clean and readable."}
                </p>
                <div className="code-block">
                  <pre>{`
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;

// List of products
List<Product> products = Arrays.asList(
    new Product("Laptop", 999.99),
    new Product("Mouse", 29.99),
    new Product("Keyboard", 79.99),
    new Product("USB Cable", 9.99),
    new Product("Monitor", 299.99)
);

// OLD WAY: Multiple loops, temporary variables
List<String> result = new ArrayList<>();
for (Product p : products) {
    if (p.getPrice() < 100) {
        result.add(p.getName());
    }
}
Collections.sort(result);

// STREAM WAY: Clean, declarative pipeline
List<String> affordableProducts = products.stream()
    .filter(p -> p.getPrice() < 100)      // Keep only cheap items
    .map(Product::getName)                 // Extract just names
    .sorted()                              // Sort alphabetically
    .collect(Collectors.toList());         // Collect results

System.out.println(affordableProducts);
// [Keyboard, Mouse, USB Cable]
`}</pre>
                </div>
                <h3>
                  {"Common Stream Operations"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter: Keep only items matching condition
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// [2, 4, 6, 8, 10]

// Map: Transform each item
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Reduce: Combine all items into one result
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
// 55

// Find first match
Integer firstEven = numbers.stream()
    .filter(n -> n % 2 == 0)
    .findFirst()
    .orElse(null);
// 2

// Check if any/all match condition
boolean hasLargeNumber = numbers.stream()
    .anyMatch(n -> n > 100);
// false

// Count items
long count = numbers.stream()
    .filter(n -> n > 5)
    .count();
// 5
`}</pre>
                </div>
                <h3>
                  {"Real-World Example: Processing User Data"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<User> users = getUsersFromDatabase();

// Find active users in USA, get their emails, send newsletter
List<String> emailList = users.stream()
    .filter(user -> user.isActive())
    .filter(user -> user.getCountry().equals("USA"))
    .map(User::getEmail)
    .distinct()  // Remove duplicates
    .collect(Collectors.toList());

// Calculate average age of premium users
double avgAge = users.stream()
    .filter(User::isPremium)
    .mapToInt(User::getAge)
    .average()
    .orElse(0.0);

// Group users by country
Map<String, List<User>> usersByCountry = users.stream()
    .collect(Collectors.groupingBy(User::getCountry));
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"When to Use Streams?"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Filtering data"}
                      </strong>
                      {" - Finding specific items in collections"}
                    </li>
                    <li>
                      <strong>
                        {"Transforming data"}
                      </strong>
                      {" - Converting one type to another"}
                    </li>
                    <li>
                      <strong>
                        {"Aggregating data"}
                      </strong>
                      {" - Calculating sums, averages, counts"}
                    </li>
                    <li>
                      <strong>
                        {"Processing collections"}
                      </strong>
                      {" - When you need multiple operations on data"}
                    </li>
                  </ul>
                  <p>
                    <strong>
                      {"Avoid streams for:"}
                    </strong>
                    {" Simple single operations (just use a for loop), very small collections (overhead not worth it), modifying external state (streams should be side-effect free)."}
                  </p>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Use Meaningful Names"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD
int a = 25;
String s = "john@email.com";

// GOOD
int userAge = 25;
String userEmail = "john@email.com";
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Follow Naming Conventions"}
                  </h3>
                  <ul>
                    <li>
                      <strong>
                        {"Classes:"}
                      </strong>
                      {" PascalCase (UserAccount, PaymentProcessor)"}
                    </li>
                    <li>
                      <strong>
                        {"Methods/Variables:"}
                      </strong>
                      {" camelCase (getUserName, totalAmount)"}
                    </li>
                    <li>
                      <strong>
                        {"Constants:"}
                      </strong>
                      {" UPPER_SNAKE_CASE (MAX_USERS, API_KEY)"}
                    </li>
                  </ul>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Keep Methods Small"}
                  </h3>
                  <p>
                    {"Each method should do ONE thing well. If a method is over 20-30 lines, consider breaking it up."}
                  </p>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Use the Right Collection"}
                  </h3>
                  <p>
                    {"Don't use ArrayList for everything. Choose based on your needs: List for order, Set for uniqueness, Map for lookups."}
                  </p>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Prefer Immutability"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Make classes immutable when possible
public final class User {
    private final String name;
    private final String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Only getters, no setters
    public String getName() { return name; }
    public String getEmail() { return email; }
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"6. Handle Nulls Carefully"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Use Optional to avoid NullPointerException
Optional<User> user = findUserById(123);
String name = user.map(User::getName).orElse("Guest");

// Always check before accessing
if (email != null && !email.isEmpty()) {
    sendEmail(email);
}
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
                {"Master Java Fundamentals "}
                <span className="gradient-text">
                  {"with Expert Guidance"}
                </span>
              </h2>
              <p>
                {"Learn Java the right way with personalized 1:1 mentorship. Build strong foundations for your enterprise development career."}
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
                  {"Learn auto-configuration, dependency injection, and why Spring Boot revolutionized Java development."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/rest-apis-java" className="article-card">
                <h3>
                  {"Building REST APIs in Java"}
                </h3>
                {" "}
                <p>
                  {"Create robust RESTful services with Spring Boot controllers and best practices."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/hibernate-jpa" className="article-card">
                <h3>
                  {"Hibernate & JPA"}
                </h3>
                {" "}
                <p>
                  {"Master ORM concepts and database operations with JPA and Hibernate."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Fundamentals as part of the Full Stack Java program."} />
    </>
  );
}
