import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Design Patterns: Singleton, Factory, Builder & More",
  description: "Master essential Java Design Patterns - Singleton, Factory, Builder, Observer, Strategy, and more. Learn when and how to use each pattern with practical examples.",
  keywords: ["Java design patterns", "Singleton pattern", "Factory pattern", "Builder pattern", "Observer pattern", "Strategy pattern", "SOLID principles"],
  alternates: { canonical: "/full-stack-java/articles/design-patterns" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/design-patterns",
    title: "Java Design Patterns: Complete Guide with Examples | CODiiN",
    description: "Learn essential design patterns for Java. Master Singleton, Factory, Builder, and more with real-world examples.",
    images: ["/images/design-patterns-og.jpg"],
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
  "headline": "Java Design Patterns: Complete Guide with Examples",
  "description": "Master essential design patterns for Java development",
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

export default function FullStackJavaDesignPatternsPage() {
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
              {"Design Patterns"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Java Design Patterns"}
            </h1>
            <p className="article-subtitle">
              {"Proven Solutions to Common Problems - Write Better, More Maintainable Code"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"What Are Design Patterns?"}
                </h2>
                <p>
                  {"Imagine you're building houses. Instead of designing every house from scratch, architects use proven blueprints - \"colonial style,\" \"ranch style,\" etc. These blueprints solve common problems like \"how to organize bedrooms\" or \"where to place the kitchen.\""}
                </p>
                <p>
                  {"Design patterns are like those blueprints for code. They're proven solutions to common software problems. When you recognize a pattern, you know exactly how to structure your code."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Creational Patterns"}
                    </h3>
                    <p>
                      {"How to create objects. Singleton, Factory, Builder, Prototype."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Structural Patterns"}
                    </h3>
                    <p>
                      {"How to compose objects. Adapter, Decorator, Facade, Proxy."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Behavioral Patterns"}
                    </h3>
                    <p>
                      {"How objects communicate. Observer, Strategy, Command, Template."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Interview Essential"}
                    </h3>
                    <p>
                      {"Design patterns are a favorite interview topic. Master them to ace technical interviews."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Singleton: One Instance Only"}
                </h2>
                <p>
                  {"Ensures a class has only one instance and provides global access to it. Like having one CEO for a company."}
                </p>
                <h3>
                  {"When to Use"}
                </h3>
                <ul>
                  <li>
                    {"Database connection pools"}
                  </li>
                  <li>
                    {"Configuration managers"}
                  </li>
                  <li>
                    {"Logging services"}
                  </li>
                  <li>
                    {"Caches"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre>{`
// Thread-safe Singleton (Bill Pugh approach)
public class DatabaseConnection {

    // Private constructor - no one can create instances
    private DatabaseConnection() {
        System.out.println("Connecting to database...");
    }

    // Inner class holds the singleton instance
    private static class Holder {
        private static final DatabaseConnection INSTANCE = new DatabaseConnection();
    }

    // Global access point
    public static DatabaseConnection getInstance() {
        return Holder.INSTANCE;
    }

    public void query(String sql) {
        System.out.println("Executing: " + sql);
    }
}

// Usage - always get the same instance
DatabaseConnection db1 = DatabaseConnection.getInstance();
DatabaseConnection db2 = DatabaseConnection.getInstance();
System.out.println(db1 == db2);  // true - same instance!
`}</pre>
                </div>
                <h3>
                  {"Modern Java: Enum Singleton"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Simplest and safest way
public enum ConfigManager {
    INSTANCE;

    private Properties config = new Properties();

    public String get(String key) {
        return config.getProperty(key);
    }

    public void set(String key, String value) {
        config.setProperty(key, value);
    }
}

// Usage
ConfigManager.INSTANCE.set("app.name", "MyApp");
String name = ConfigManager.INSTANCE.get("app.name");
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Factory: Create Objects Without Specifying Class"}
                </h2>
                <p>
                  {"Instead of using \"new\" directly, ask a factory to create objects. Like ordering from a menu instead of cooking yourself."}
                </p>
                <h3>
                  {"Simple Factory"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Product interface
public interface Notification {
    void send(String message);
}

// Concrete products
public class EmailNotification implements Notification {
    public void send(String message) {
        System.out.println("Sending email: " + message);
    }
}

public class SMSNotification implements Notification {
    public void send(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

public class PushNotification implements Notification {
    public void send(String message) {
        System.out.println("Sending push: " + message);
    }
}

// Factory
public class NotificationFactory {

    public static Notification create(String type) {
        return switch (type.toLowerCase()) {
            case "email" -> new EmailNotification();
            case "sms" -> new SMSNotification();
            case "push" -> new PushNotification();
            default -> throw new IllegalArgumentException("Unknown type: " + type);
        };
    }
}

// Usage - client doesn't know concrete classes
Notification notif = NotificationFactory.create("email");
notif.send("Hello!");
`}</pre>
                </div>
                <h3>
                  {"Factory Method Pattern"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Abstract creator
public abstract class DocumentCreator {

    // Factory method - subclasses decide what to create
    protected abstract Document createDocument();

    public void openDocument() {
        Document doc = createDocument();
        doc.open();
        doc.render();
    }
}

// Concrete creators
public class PDFCreator extends DocumentCreator {
    @Override
    protected Document createDocument() {
        return new PDFDocument();
    }
}

public class WordCreator extends DocumentCreator {
    @Override
    protected Document createDocument() {
        return new WordDocument();
    }
}

// Usage
DocumentCreator creator = new PDFCreator();
creator.openDocument();  // Creates and opens PDF
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Builder: Construct Complex Objects Step by Step"}
                </h2>
                <p>
                  {"When an object has many optional parameters, Builder lets you construct it piece by piece. Like ordering a customized burger."}
                </p>
                <div className="code-block">
                  <pre>{`
public class User {
    // Required fields
    private final String email;
    private final String password;

    // Optional fields
    private final String firstName;
    private final String lastName;
    private final int age;
    private final String phone;
    private final String address;

    // Private constructor - use Builder
    private User(Builder builder) {
        this.email = builder.email;
        this.password = builder.password;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.phone = builder.phone;
        this.address = builder.address;
    }

    // Builder class
    public static class Builder {
        // Required
        private final String email;
        private final String password;

        // Optional - defaults
        private String firstName = "";
        private String lastName = "";
        private int age = 0;
        private String phone = "";
        private String address = "";

        public Builder(String email, String password) {
            this.email = email;
            this.password = password;
        }

        public Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder age(int age) {
            this.age = age;
            return this;
        }

        public Builder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public Builder address(String address) {
            this.address = address;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }

    // Getters...
}

// Usage - clean and readable!
User user = new User.Builder("john@email.com", "secret123")
    .firstName("John")
    .lastName("Doe")
    .age(30)
    .phone("123-456-7890")
    .build();

// Only required fields
User minimalUser = new User.Builder("jane@email.com", "pass456").build();
`}</pre>
                </div>
                <h3>
                  {"With Lombok (Less Code)"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Builder
@Getter
public class User {
    private final String email;
    private final String password;
    @Builder.Default
    private String firstName = "";
    @Builder.Default
    private int age = 0;
}

// Usage
User user = User.builder()
    .email("john@email.com")
    .password("secret")
    .firstName("John")
    .build();
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Strategy: Swap Algorithms at Runtime"}
                </h2>
                <p>
                  {"Define a family of algorithms and make them interchangeable. Like having different navigation apps - all give directions, but differently."}
                </p>
                <div className="code-block">
                  <pre>{`
// Strategy interface
public interface PaymentStrategy {
    void pay(double amount);
}

// Concrete strategies
public class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with credit card " +
            cardNumber.substring(cardNumber.length() - 4));
    }
}

public class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via PayPal: " + email);
    }
}

public class CryptoPayment implements PaymentStrategy {
    private String walletAddress;

    public CryptoPayment(String walletAddress) {
        this.walletAddress = walletAddress;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " in crypto to " + walletAddress);
    }
}

// Context that uses strategy
public class ShoppingCart {
    private List<Item> items = new ArrayList<>();
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public void checkout() {
        double total = items.stream()
            .mapToDouble(Item::getPrice)
            .sum();

        paymentStrategy.pay(total);
    }
}

// Usage - easily swap payment methods
ShoppingCart cart = new ShoppingCart();
cart.addItem(new Item("Laptop", 999.99));

// Pay with credit card
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout();

// Or pay with PayPal
cart.setPaymentStrategy(new PayPalPayment("john@email.com"));
cart.checkout();
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Observer: Notify When State Changes"}
                </h2>
                <p>
                  {"When one object changes, all dependent objects are notified. Like subscribing to a YouTube channel - you get notified of new videos."}
                </p>
                <div className="code-block">
                  <pre>{`
// Observer interface
public interface OrderObserver {
    void onOrderStatusChanged(Order order, String newStatus);
}

// Subject (Observable)
public class Order {
    private String id;
    private String status;
    private List<OrderObserver> observers = new ArrayList<>();

    public void addObserver(OrderObserver observer) {
        observers.add(observer);
    }

    public void removeObserver(OrderObserver observer) {
        observers.remove(observer);
    }

    public void setStatus(String status) {
        this.status = status;
        notifyObservers();
    }

    private void notifyObservers() {
        for (OrderObserver observer : observers) {
            observer.onOrderStatusChanged(this, status);
        }
    }
}

// Concrete observers
public class EmailNotifier implements OrderObserver {
    @Override
    public void onOrderStatusChanged(Order order, String newStatus) {
        System.out.println("Sending email: Order " + order.getId() +
            " is now " + newStatus);
    }
}

public class SMSNotifier implements OrderObserver {
    @Override
    public void onOrderStatusChanged(Order order, String newStatus) {
        System.out.println("Sending SMS: Your order status: " + newStatus);
    }
}

public class InventoryManager implements OrderObserver {
    @Override
    public void onOrderStatusChanged(Order order, String newStatus) {
        if ("SHIPPED".equals(newStatus)) {
            System.out.println("Updating inventory for order " + order.getId());
        }
    }
}

// Usage
Order order = new Order("ORD-123");
order.addObserver(new EmailNotifier());
order.addObserver(new SMSNotifier());
order.addObserver(new InventoryManager());

order.setStatus("PROCESSING");  // All observers notified
order.setStatus("SHIPPED");     // All observers notified again
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Decorator: Add Behavior Dynamically"}
                </h2>
                <p>
                  {"Wrap an object to add new behavior without modifying the original. Like adding toppings to ice cream."}
                </p>
                <div className="code-block">
                  <pre>{`
// Component interface
public interface Coffee {
    String getDescription();
    double getCost();
}

// Base component
public class SimpleCoffee implements Coffee {
    @Override
    public String getDescription() {
        return "Simple Coffee";
    }

    @Override
    public double getCost() {
        return 2.00;
    }
}

// Decorator base
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;

    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }
}

// Concrete decorators
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() + ", Milk";
    }

    @Override
    public double getCost() {
        return coffee.getCost() + 0.50;
    }
}

public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() + ", Sugar";
    }

    @Override
    public double getCost() {
        return coffee.getCost() + 0.25;
    }
}

public class WhippedCreamDecorator extends CoffeeDecorator {
    public WhippedCreamDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return coffee.getDescription() + ", Whipped Cream";
    }

    @Override
    public double getCost() {
        return coffee.getCost() + 0.75;
    }
}

// Usage - stack decorators!
Coffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new WhippedCreamDecorator(coffee);

System.out.println(coffee.getDescription());  // Simple Coffee, Milk, Sugar, Whipped Cream
System.out.println("$" + coffee.getCost());   // $3.50
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Adapter: Make Incompatible Interfaces Work Together"}
                </h2>
                <p>
                  {"Like using a power adapter when traveling - makes your charger work with different outlets."}
                </p>
                <div className="code-block">
                  <pre>{`
// Target interface (what client expects)
public interface MediaPlayer {
    void play(String filename);
}

// Existing class with different interface
public class VLCPlayer {
    public void playVLC(String filename) {
        System.out.println("Playing VLC: " + filename);
    }
}

public class MP4Player {
    public void playMP4(String filename) {
        System.out.println("Playing MP4: " + filename);
    }
}

// Adapter makes them compatible
public class MediaAdapter implements MediaPlayer {

    private VLCPlayer vlcPlayer;
    private MP4Player mp4Player;

    public MediaAdapter(String mediaType) {
        if (mediaType.equals("vlc")) {
            vlcPlayer = new VLCPlayer();
        } else if (mediaType.equals("mp4")) {
            mp4Player = new MP4Player();
        }
    }

    @Override
    public void play(String filename) {
        if (vlcPlayer != null) {
            vlcPlayer.playVLC(filename);
        } else if (mp4Player != null) {
            mp4Player.playMP4(filename);
        }
    }
}

// Client uses uniform interface
public class AudioPlayer implements MediaPlayer {
    private MediaAdapter mediaAdapter;

    @Override
    public void play(String filename) {
        String extension = getExtension(filename);

        if (extension.equals("mp3")) {
            System.out.println("Playing MP3: " + filename);
        } else if (extension.equals("vlc") || extension.equals("mp4")) {
            mediaAdapter = new MediaAdapter(extension);
            mediaAdapter.play(filename);
        }
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Quick Reference: When to Use Each Pattern"}
                </h2>
                <div className="when-to-use">
                  <h4>
                    {"Creational Patterns"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Singleton"}
                      </strong>
                      {" - Need exactly one instance (config, logging, connections)"}
                    </li>
                    <li>
                      <strong>
                        {"Factory"}
                      </strong>
                      {" - Create objects without specifying exact class"}
                    </li>
                    <li>
                      <strong>
                        {"Builder"}
                      </strong>
                      {" - Complex object with many optional parameters"}
                    </li>
                    <li>
                      <strong>
                        {"Prototype"}
                      </strong>
                      {" - Create copies of existing objects"}
                    </li>
                  </ul>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Structural Patterns"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Adapter"}
                      </strong>
                      {" - Make incompatible interfaces work together"}
                    </li>
                    <li>
                      <strong>
                        {"Decorator"}
                      </strong>
                      {" - Add behavior dynamically without inheritance"}
                    </li>
                    <li>
                      <strong>
                        {"Facade"}
                      </strong>
                      {" - Simple interface to complex subsystem"}
                    </li>
                    <li>
                      <strong>
                        {"Proxy"}
                      </strong>
                      {" - Control access to an object (caching, security)"}
                    </li>
                  </ul>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Behavioral Patterns"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Strategy"}
                      </strong>
                      {" - Swap algorithms at runtime"}
                    </li>
                    <li>
                      <strong>
                        {"Observer"}
                      </strong>
                      {" - Notify multiple objects of state changes"}
                    </li>
                    <li>
                      <strong>
                        {"Command"}
                      </strong>
                      {" - Encapsulate requests as objects (undo/redo)"}
                    </li>
                    <li>
                      <strong>
                        {"Template Method"}
                      </strong>
                      {" - Define algorithm skeleton, let subclasses fill in steps"}
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
                {"Master Design Patterns "}
                <span className="gradient-text">
                  {"with Expert Guidance"}
                </span>
              </h2>
              <p>
                {"Learn patterns through real projects and ace your technical interviews."}
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
                  {"Master OOP concepts that patterns build upon."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot"}
                </h3>
                {" "}
                <p>
                  {"See patterns in action in Spring Framework."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices"}
                </h3>
                {" "}
                <p>
                  {"Learn architecture patterns for distributed systems."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Design Patterns."} />
    </>
  );
}
