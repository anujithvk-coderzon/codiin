import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Streams API: Filter, Map, Reduce for Beginners",
  description: "Master Java Streams API with beginner-friendly examples. Learn filter, map, reduce, collect and functional programming in Java with practical use cases.",
  keywords: ["Java Streams", "Stream API", "Java functional programming", "filter map reduce", "Java 8 streams", "lambda expressions"],
  alternates: { canonical: "/full-stack-java/articles/java-streams" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/java-streams",
    title: "Java Streams API: Complete Beginner's Guide | CODiiN",
    description: "Learn Java Streams from scratch. Master filter, map, reduce with real-world examples and become proficient in functional programming.",
    images: ["/images/java-streams-og.jpg"],
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
  "headline": "Java Streams API: Complete Beginner's Guide",
  "description": "Master Java Streams with filter, map, reduce and functional programming",
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

export default function FullStackJavaJavaStreamsPage() {
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
              {"Java Streams"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Java Streams API"}
            </h1>
            <p className="article-subtitle">
              {"Process Data Like a Pro with Filter, Map, Reduce - The Modern Way to Handle Collections"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"What Are Streams?"}
                </h2>
                <p>
                  {"Imagine you're at a sushi restaurant with a conveyor belt. Dishes pass by, you pick what you want, skip what you don't, and maybe combine items on your plate. You don't touch every dish - you just process what flows past you."}
                </p>
                <p>
                  {"Java Streams work the same way. Instead of manually looping through collections with for-loops, you create a \"pipeline\" where data flows through operations. It's cleaner, more readable, and often faster."}
                </p>
                <div className="code-block">
                  <pre>{`
// OLD WAY: Manual loops
List<String> result = new ArrayList<>();
for (String name : names) {
    if (name.startsWith("A")) {
        result.add(name.toUpperCase());
    }
}

// STREAM WAY: Declarative pipeline
List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"More Readable"}
                    </h3>
                    <p>
                      {"Code reads like English: \"filter names starting with A, convert to uppercase, collect to list.\""}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Less Boilerplate"}
                    </h3>
                    <p>
                      {"No need for temporary variables, index counters, or nested loops."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Lazy Evaluation"}
                    </h3>
                    <p>
                      {"Streams don't process data until you need the result. This can be more efficient."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Easy Parallelism"}
                    </h3>
                    <p>
                      {"Change .stream() to .parallelStream() and Java automatically uses multiple CPU cores."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Lambda Expressions: The Building Blocks"}
                </h2>
                <p>
                  {"Before diving into streams, you need to understand lambdas. A lambda is a short way to write a function without giving it a name. Think of it as a mini-function you can pass around."}
                </p>
                <div className="code-block">
                  <pre>{`
// Traditional way: Anonymous class
Comparator<String> comparator = new Comparator<String>() {
    @Override
    public int compare(String s1, String s2) {
        return s1.length() - s2.length();
    }
};

// Lambda way: Same thing, much shorter!
Comparator<String> comparator = (s1, s2) -> s1.length() - s2.length();
`}</pre>
                </div>
                <h3>
                  {"Lambda Syntax"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Full syntax
(parameters) -> { statements; return value; }

// If single expression, braces and return are optional
(parameters) -> expression

// If single parameter, parentheses are optional
parameter -> expression

// Examples:
(x, y) -> x + y              // Add two numbers
x -> x * 2                   // Double a number
() -> System.out.println("Hi") // No parameters
(String s) -> s.length()     // Get string length

// Method references (even shorter!)
String::length               // Same as: s -> s.length()
System.out::println          // Same as: x -> System.out.println(x)
Integer::parseInt            // Same as: s -> Integer.parseInt(s)
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Creating Streams"}
                </h2>
                <p>
                  {"You can create streams from many sources:"}
                </p>
                <div className="code-block">
                  <pre>{`
import java.util.stream.Stream;
import java.util.Arrays;
import java.util.List;

// From a Collection
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream1 = list.stream();

// From an Array
String[] array = {"a", "b", "c"};
Stream<String> stream2 = Arrays.stream(array);

// Using Stream.of()
Stream<String> stream3 = Stream.of("a", "b", "c");

// Generate infinite streams
Stream<Integer> infiniteOnes = Stream.generate(() -> 1);
Stream<Integer> counting = Stream.iterate(0, n -> n + 1);

// From a range of numbers
IntStream range = IntStream.range(1, 10);      // 1 to 9
IntStream rangeClosed = IntStream.rangeClosed(1, 10); // 1 to 10

// From a file (each line is an element)
Stream<String> lines = Files.lines(Paths.get("file.txt"));
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Filter: Keep What You Want"}
                </h2>
                <p>
                  {"filter() keeps only elements that match a condition. Think of it as a sieve that lets some elements through and blocks others."}
                </p>
                <div className="code-block">
                  <pre>{`
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Keep only even numbers
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// [2, 4, 6, 8, 10]

// Keep numbers greater than 5
List<Integer> bigNumbers = numbers.stream()
    .filter(n -> n > 5)
    .collect(Collectors.toList());
// [6, 7, 8, 9, 10]

// Multiple conditions with && or ||
List<Integer> evenAndBig = numbers.stream()
    .filter(n -> n % 2 == 0 && n > 5)
    .collect(Collectors.toList());
// [6, 8, 10]
`}</pre>
                </div>
                <h3>
                  {"Real-World Example: Filtering Users"}
                </h3>
                <div className="code-block">
                  <pre>{`
public class User {
    private String name;
    private int age;
    private boolean active;
    private String country;
    // constructor, getters, setters...
}

List<User> users = getUsers();

// Find active users from India
List<User> activeIndianUsers = users.stream()
    .filter(User::isActive)
    .filter(user -> user.getCountry().equals("India"))
    .collect(Collectors.toList());

// Find users aged 18-25
List<User> youngUsers = users.stream()
    .filter(user -> user.getAge() >= 18 && user.getAge() <= 25)
    .collect(Collectors.toList());

// Find users whose name contains "John"
List<User> johns = users.stream()
    .filter(user -> user.getName().contains("John"))
    .collect(Collectors.toList());
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Map: Transform Elements"}
                </h2>
                <p>
                  {"map() transforms each element into something else. It's like a factory that takes raw materials and outputs products."}
                </p>
                <div className="code-block">
                  <pre>{`
List<String> names = Arrays.asList("john", "jane", "bob");

// Convert to uppercase
List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
// [JOHN, JANE, BOB]

// Get length of each name
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());
// [4, 4, 3]

// Transform numbers
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());
// [2, 4, 6, 8, 10]

List<Integer> squared = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());
// [1, 4, 9, 16, 25]
`}</pre>
                </div>
                <h3>
                  {"Extracting Data from Objects"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<User> users = getUsers();

// Get all user names
List<String> names = users.stream()
    .map(User::getName)
    .collect(Collectors.toList());

// Get all email addresses
List<String> emails = users.stream()
    .map(User::getEmail)
    .collect(Collectors.toList());

// Create display names: "John (25)"
List<String> displayNames = users.stream()
    .map(user -> user.getName() + " (" + user.getAge() + ")")
    .collect(Collectors.toList());
`}</pre>
                </div>
                <h3>
                  {"Combining Filter and Map"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Get names of active users, uppercase
List<String> activeUserNames = users.stream()
    .filter(User::isActive)           // Keep active users
    .map(User::getName)               // Extract names
    .map(String::toUpperCase)         // Convert to uppercase
    .collect(Collectors.toList());
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"FlatMap: Flatten Nested Collections"}
                </h2>
                <p>
                  {"flatMap() is like map(), but it \"flattens\" results. If map() would give you a list of lists, flatMap() combines them into a single list."}
                </p>
                <div className="code-block">
                  <pre>{`
// Each person has a list of phone numbers
class Person {
    private String name;
    private List<String> phoneNumbers;
    // getters...
}

List<Person> people = Arrays.asList(
    new Person("John", Arrays.asList("123", "456")),
    new Person("Jane", Arrays.asList("789", "012"))
);

// Get ALL phone numbers in one list
// With map() you'd get: [[123, 456], [789, 012]]
// With flatMap() you get: [123, 456, 789, 012]

List<String> allPhones = people.stream()
    .flatMap(person -> person.getPhoneNumbers().stream())
    .collect(Collectors.toList());
// [123, 456, 789, 012]
`}</pre>
                </div>
                <h3>
                  {"Real-World Example: Orders and Items"}
                </h3>
                <div className="code-block">
                  <pre>{`
class Order {
    private List<OrderItem> items;
}

class OrderItem {
    private String product;
    private double price;
}

List<Order> orders = getOrders();

// Get all products across all orders
List<String> allProducts = orders.stream()
    .flatMap(order -> order.getItems().stream())
    .map(OrderItem::getProduct)
    .distinct()  // Remove duplicates
    .collect(Collectors.toList());

// Calculate total revenue across all orders
double totalRevenue = orders.stream()
    .flatMap(order -> order.getItems().stream())
    .mapToDouble(OrderItem::getPrice)
    .sum();
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Reduce: Combine All Elements"}
                </h2>
                <p>
                  {"reduce() combines all elements into a single result. Think of it as boiling down a list into one value - like adding all numbers to get a sum."}
                </p>
                <div className="code-block">
                  <pre>{`
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Sum all numbers
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
// 0 + 1 + 2 + 3 + 4 + 5 = 15

// Same thing using method reference
int sum2 = numbers.stream()
    .reduce(0, Integer::sum);

// Multiply all numbers
int product = numbers.stream()
    .reduce(1, (a, b) -> a * b);
// 1 * 1 * 2 * 3 * 4 * 5 = 120

// Find maximum
Optional<Integer> max = numbers.stream()
    .reduce(Integer::max);
// Optional[5]

// Concatenate strings
List<String> words = Arrays.asList("Hello", " ", "World", "!");
String sentence = words.stream()
    .reduce("", (a, b) -> a + b);
// "Hello World!"
`}</pre>
                </div>
                <h3>
                  {"How Reduce Works"}
                </h3>
                <div className="code-block">
                  <pre>{`
// reduce(identity, accumulator)
// identity: starting value
// accumulator: function that combines two values

// Step by step for sum of [1, 2, 3, 4, 5]:
// Start: 0 (identity)
// Step 1: 0 + 1 = 1
// Step 2: 1 + 2 = 3
// Step 3: 3 + 3 = 6
// Step 4: 6 + 4 = 10
// Step 5: 10 + 5 = 15
// Result: 15
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Collect: Gather Results"}
                </h2>
                <p>
                  {"collect() is how you convert a stream back into a collection. The Collectors class provides many useful collectors."}
                </p>
                <div className="code-block">
                  <pre>{`
import java.util.stream.Collectors;

List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Alice");

// To List
List<String> list = names.stream()
    .collect(Collectors.toList());

// To Set (removes duplicates)
Set<String> set = names.stream()
    .collect(Collectors.toSet());

// To Map
Map<String, Integer> nameLengths = names.stream()
    .distinct()
    .collect(Collectors.toMap(
        name -> name,           // key
        name -> name.length()   // value
    ));
// {Alice=5, Bob=3, Charlie=7}

// Join strings
String joined = names.stream()
    .collect(Collectors.joining(", "));
// "Alice, Bob, Charlie, Alice"

// Count elements
long count = names.stream()
    .collect(Collectors.counting());
`}</pre>
                </div>
                <h3>
                  {"Grouping and Partitioning"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<User> users = getUsers();

// Group users by country
Map<String, List<User>> usersByCountry = users.stream()
    .collect(Collectors.groupingBy(User::getCountry));
// {India=[...], USA=[...], UK=[...]}

// Group and count
Map<String, Long> countByCountry = users.stream()
    .collect(Collectors.groupingBy(
        User::getCountry,
        Collectors.counting()
    ));
// {India=50, USA=30, UK=20}

// Partition (split into two groups)
Map<Boolean, List<User>> activeVsInactive = users.stream()
    .collect(Collectors.partitioningBy(User::isActive));
// {true=[active users], false=[inactive users]}

// Calculate statistics
IntSummaryStatistics ageStats = users.stream()
    .collect(Collectors.summarizingInt(User::getAge));

System.out.println("Average age: " + ageStats.getAverage());
System.out.println("Oldest: " + ageStats.getMax());
System.out.println("Youngest: " + ageStats.getMin());
System.out.println("Total users: " + ageStats.getCount());
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Other Useful Operations"}
                </h2>
                <h3>
                  {"Sorting"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");

// Natural order
List<String> sorted = names.stream()
    .sorted()
    .collect(Collectors.toList());
// [Alice, Bob, Charlie]

// Reverse order
List<String> reversed = names.stream()
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList());
// [Charlie, Bob, Alice]

// Sort by property
List<User> byAge = users.stream()
    .sorted(Comparator.comparing(User::getAge))
    .collect(Collectors.toList());

// Sort by multiple properties
List<User> byCountryThenAge = users.stream()
    .sorted(Comparator
        .comparing(User::getCountry)
        .thenComparing(User::getAge))
    .collect(Collectors.toList());
`}</pre>
                </div>
                <h3>
                  {"Distinct, Limit, Skip"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 3, 4, 5);

// Remove duplicates
List<Integer> unique = numbers.stream()
    .distinct()
    .collect(Collectors.toList());
// [1, 2, 3, 4, 5]

// Take first N elements
List<Integer> firstThree = numbers.stream()
    .limit(3)
    .collect(Collectors.toList());
// [1, 2, 2]

// Skip first N elements
List<Integer> skipThree = numbers.stream()
    .skip(3)
    .collect(Collectors.toList());
// [3, 3, 3, 4, 5]

// Pagination (skip + limit)
int page = 2;
int pageSize = 10;
List<User> pageOfUsers = users.stream()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .collect(Collectors.toList());
`}</pre>
                </div>
                <h3>
                  {"Finding Elements"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Find first matching element
Optional<Integer> firstEven = numbers.stream()
    .filter(n -> n % 2 == 0)
    .findFirst();
// Optional[2]

// Find any matching (useful for parallel)
Optional<Integer> anyEven = numbers.stream()
    .filter(n -> n % 2 == 0)
    .findAny();

// Check if any/all/none match
boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);  // true
boolean allEven = numbers.stream().allMatch(n -> n % 2 == 0);  // false
boolean noneNegative = numbers.stream().noneMatch(n -> n < 0); // true

// Using Optional safely
Optional<User> user = users.stream()
    .filter(u -> u.getEmail().equals("john@email.com"))
    .findFirst();

// Get value or default
User found = user.orElse(new User("Guest"));

// Get value or throw
User foundOrThrow = user.orElseThrow(
    () -> new RuntimeException("User not found")
);
`}</pre>
                </div>
                <h3>
                  {"Numeric Streams"}
                </h3>
                <div className="code-block">
                  <pre>{`
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Convert to IntStream for numeric operations
int sum = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum();

double average = numbers.stream()
    .mapToInt(Integer::intValue)
    .average()
    .orElse(0.0);

int max = numbers.stream()
    .mapToInt(Integer::intValue)
    .max()
    .orElse(0);

// Calculate total price of orders
double totalPrice = orders.stream()
    .mapToDouble(Order::getTotal)
    .sum();
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Real-World Examples"}
                </h2>
                <h3>
                  {"E-Commerce: Processing Orders"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Find high-value orders from premium customers
List<Order> highValueOrders = orders.stream()
    .filter(order -> order.getCustomer().isPremium())
    .filter(order -> order.getTotal() > 1000)
    .sorted(Comparator.comparing(Order::getTotal).reversed())
    .limit(10)
    .collect(Collectors.toList());

// Calculate revenue by category
Map<String, Double> revenueByCategory = orders.stream()
    .flatMap(order -> order.getItems().stream())
    .collect(Collectors.groupingBy(
        OrderItem::getCategory,
        Collectors.summingDouble(OrderItem::getPrice)
    ));

// Find most popular products
Map<String, Long> productCounts = orders.stream()
    .flatMap(order -> order.getItems().stream())
    .collect(Collectors.groupingBy(
        OrderItem::getProductName,
        Collectors.counting()
    ));

String mostPopular = productCounts.entrySet().stream()
    .max(Map.Entry.comparingByValue())
    .map(Map.Entry::getKey)
    .orElse("None");
`}</pre>
                </div>
                <h3>
                  {"User Analytics"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Get email list for marketing (active users only)
List<String> marketingEmails = users.stream()
    .filter(User::isActive)
    .filter(User::isMarketingOptIn)
    .map(User::getEmail)
    .collect(Collectors.toList());

// User demographics
Map<String, Map<String, Long>> demographics = users.stream()
    .collect(Collectors.groupingBy(
        User::getCountry,
        Collectors.groupingBy(
            user -> user.getAge() < 30 ? "Young" : "Adult",
            Collectors.counting()
        )
    ));
// {India={Young=30, Adult=20}, USA={Young=15, Adult=25}}

// Find inactive users to re-engage
List<User> toReengage = users.stream()
    .filter(user -> !user.isActive())
    .filter(user -> user.getLastLogin().isAfter(sixMonthsAgo))
    .sorted(Comparator.comparing(User::getLastLogin).reversed())
    .limit(100)
    .collect(Collectors.toList());
`}</pre>
                </div>
                <h3>
                  {"Text Processing"}
                </h3>
                <div className="code-block">
                  <pre>{`
String text = "Hello World Hello Java World";

// Word frequency count
Map<String, Long> wordCount = Arrays.stream(text.split(" "))
    .map(String::toLowerCase)
    .collect(Collectors.groupingBy(
        word -> word,
        Collectors.counting()
    ));
// {hello=2, world=2, java=1}

// Find longest word
String longest = Arrays.stream(text.split(" "))
    .max(Comparator.comparing(String::length))
    .orElse("");

// Get unique words sorted
List<String> uniqueWords = Arrays.stream(text.split(" "))
    .map(String::toLowerCase)
    .distinct()
    .sorted()
    .collect(Collectors.toList());
// [hello, java, world]
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Keep Streams Short and Readable"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Too complex
List<String> result = users.stream()
    .filter(u -> u.isActive() && u.getAge() > 18 && u.getCountry().equals("India"))
    .map(u -> u.getName().toUpperCase() + " (" + u.getAge() + ")")
    .sorted((a, b) -> a.compareTo(b))
    .collect(Collectors.toList());

// GOOD: Break into meaningful steps
List<String> result = users.stream()
    .filter(this::isEligibleUser)
    .map(this::formatUserDisplay)
    .sorted()
    .collect(Collectors.toList());

private boolean isEligibleUser(User user) {
    return user.isActive()
        && user.getAge() > 18
        && user.getCountry().equals("India");
}

private String formatUserDisplay(User user) {
    return user.getName().toUpperCase() + " (" + user.getAge() + ")";
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Avoid Side Effects"}
                  </h3>
                  <p>
                    {"Streams should not modify external state. They should be pure transformations."}
                  </p>
                  <div className="code-block">
                    <pre>{`
// BAD: Modifying external list
List<String> results = new ArrayList<>();
names.stream().forEach(name -> results.add(name.toUpperCase()));

// GOOD: Collect the result
List<String> results = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Use Method References When Possible"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Lambda
.map(s -> s.toUpperCase())
.filter(u -> u.isActive())
.forEach(x -> System.out.println(x))

// Method reference (cleaner)
.map(String::toUpperCase)
.filter(User::isActive)
.forEach(System.out::println)
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Don't Reuse Streams"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Streams can only be used once
Stream<String> stream = names.stream();
stream.forEach(System.out::println);
stream.count(); // ERROR! Stream already consumed

// GOOD: Create new stream each time
names.stream().forEach(System.out::println);
long count = names.stream().count();
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Use Parallel Streams Carefully"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Parallel processing (good for large datasets)
long count = hugeList.parallelStream()
    .filter(this::expensiveCheck)
    .count();

// DON'T use parallel for:
// - Small collections (overhead > benefit)
// - Operations with side effects
// - Order-dependent operations
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
                {"Master Java Streams "}
                <span className="gradient-text">
                  {"with Hands-On Practice"}
                </span>
              </h2>
              <p>
                {"Learn functional programming and streams through real projects with expert mentorship."}
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
              <Link href="/full-stack-java/articles/java-collections" className="article-card">
                <h3>
                  {"Java Collections"}
                </h3>
                {" "}
                <p>
                  {"Master List, Set, Map and choose the right data structure."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/java-fundamentals" className="article-card">
                <h3>
                  {"Java Fundamentals"}
                </h3>
                {" "}
                <p>
                  {"Build a strong foundation with Java basics and OOP."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/multithreading" className="article-card">
                <h3>
                  {"Multithreading"}
                </h3>
                {" "}
                <p>
                  {"Learn concurrent programming and parallel processing."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Streams as part of the Full Stack Java program."} />
    </>
  );
}
