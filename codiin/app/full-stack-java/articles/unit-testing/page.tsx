import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Unit Testing: JUnit 5 & Mockito Complete Guide",
  description: "Learn Java unit testing with JUnit 5 and Mockito. Master TDD (Test-Driven Development) with beginner-friendly examples and real-world scenarios.",
  keywords: ["Java unit testing", "JUnit 5", "Mockito", "TDD", "test-driven development", "Java testing tutorial", "beginner unit testing"],
  alternates: { canonical: "/full-stack-java/articles/unit-testing" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/unit-testing",
    title: "Java Unit Testing: JUnit 5 & Mockito for Beginners | CODiiN",
    description: "Master Java unit testing with JUnit 5 and Mockito. Learn TDD with simple examples and build confidence in your code.",
    images: ["/images/unit-testing-og.jpg"],
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
  "headline": "Java Unit Testing: JUnit 5 & Mockito Complete Guide",
  "description": "Learn Java unit testing with JUnit 5 and Mockito for beginners",
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

export default function FullStackJavaUnitTestingPage() {
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
              {"Unit Testing"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Unit Testing in Java"}
            </h1>
            <p className="article-subtitle">
              {"Write Reliable Code with JUnit 5 and Mockito - A Beginner's Complete Guide"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Unit Testing? The Safety Net for Your Code"}
                </h2>
                <p>
                  {"Imagine you're a chef preparing a complex dish. Would you wait until the entire meal is ready to taste it, or would you taste each component as you go? Smart chefs taste along the way - and smart developers test their code the same way."}
                </p>
                <p>
                  {"Unit testing is like having a quality inspector for every small piece of your code. Each \"unit\" (usually a method or class) gets its own test to ensure it works correctly. When you make changes later, these tests catch any bugs you might accidentally introduce."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Catch Bugs Early"}
                    </h3>
                    <p>
                      {"Finding a bug during development costs minutes. Finding it in production costs hours (or days) and damages user trust. Tests catch issues before they become problems."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Confidence to Refactor"}
                    </h3>
                    <p>
                      {"Want to improve your code structure? With good tests, you can refactor fearlessly. If something breaks, your tests will tell you immediately."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Living Documentation"}
                    </h3>
                    <p>
                      {"Tests show exactly how your code is supposed to work. New team members can read tests to understand what each method does."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Required in Enterprise"}
                    </h3>
                    <p>
                      {"Professional teams require tests before code can be merged. Learning testing is essential for your career as a Java developer."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"JUnit 5: Your Testing Framework"}
                </h2>
                <p>
                  {"JUnit is the most popular testing framework for Java. Think of it as a special tool that runs your tests automatically and tells you if they pass or fail."}
                </p>
                <h3>
                  {"Setting Up JUnit 5"}
                </h3>
                <p>
                  {"First, add JUnit 5 to your project. If you're using Maven, add this to your pom.xml:"}
                </p>
                <div className="code-block">
                  <pre>{`
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
`}</pre>
                </div>
                <h3>
                  {"Your First Test"}
                </h3>
                <p>
                  {"Let's say you have a simple Calculator class:"}
                </p>
                <div className="code-block">
                  <pre>{`
// src/main/java/Calculator.java
public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        return a / b;
    }
}
`}</pre>
                </div>
                <p>
                  {"Here's how to test it:"}
                </p>
                <div className="code-block">
                  <pre>{`
// src/test/java/CalculatorTest.java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    private Calculator calculator = new Calculator();

    @Test
    @DisplayName("Adding two positive numbers")
    void testAddition() {
        // Given: two numbers
        int a = 5;
        int b = 3;

        // When: we add them
        int result = calculator.add(a, b);

        // Then: we get the sum
        assertEquals(8, result);
    }

    @Test
    @DisplayName("Subtracting gives correct difference")
    void testSubtraction() {
        assertEquals(7, calculator.subtract(10, 3));
    }

    @Test
    @DisplayName("Multiplying two numbers")
    void testMultiplication() {
        assertEquals(15, calculator.multiply(3, 5));
        assertEquals(0, calculator.multiply(5, 0));
        assertEquals(-6, calculator.multiply(-2, 3));
    }

    @Test
    @DisplayName("Division by zero throws exception")
    void testDivisionByZero() {
        // This test expects an exception to be thrown
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.divide(10, 0);
        });
    }
}
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Understanding the Test Structure"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"@Test"}
                      </strong>
                      {" - Marks a method as a test case"}
                    </li>
                    <li>
                      <strong>
                        {"@DisplayName"}
                      </strong>
                      {" - Gives your test a readable name"}
                    </li>
                    <li>
                      <strong>
                        {"assertEquals(expected, actual)"}
                      </strong>
                      {" - Checks if two values are equal"}
                    </li>
                    <li>
                      <strong>
                        {"assertThrows"}
                      </strong>
                      {" - Verifies that code throws an expected exception"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Common Assertions: Your Testing Toolkit"}
                </h2>
                <p>
                  {"Assertions are the \"checks\" in your tests. They compare what your code produces against what you expect. Here are the most useful ones:"}
                </p>
                <div className="code-block">
                  <pre>{`
import static org.junit.jupiter.api.Assertions.*;

class AssertionExamplesTest {

    @Test
    void basicAssertions() {
        // Check equality
        assertEquals(4, 2 + 2);
        assertEquals("hello", "hello");

        // Check not equal
        assertNotEquals(5, 2 + 2);

        // Check true/false
        assertTrue(5 > 3);
        assertFalse(3 > 5);

        // Check null
        String name = null;
        assertNull(name);

        name = "John";
        assertNotNull(name);
    }

    @Test
    void objectAssertions() {
        // Check same object reference
        String s1 = "hello";
        String s2 = s1;
        assertSame(s1, s2);

        // Check different object references
        String s3 = new String("hello");
        assertNotSame(s1, s3);

        // But they're still equal in value!
        assertEquals(s1, s3);
    }

    @Test
    void arrayAssertions() {
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};

        // Check arrays are equal
        assertArrayEquals(expected, actual);
    }

    @Test
    void exceptionAssertions() {
        // Check that exception is thrown
        Exception exception = assertThrows(
            IllegalArgumentException.class,
            () -> {
                throw new IllegalArgumentException("Invalid input");
            }
        );

        // You can also check the exception message
        assertEquals("Invalid input", exception.getMessage());
    }

    @Test
    void groupedAssertions() {
        User user = new User("John", 25, "john@email.com");

        // Check multiple things at once
        // All assertions run even if one fails
        assertAll("User properties",
            () -> assertEquals("John", user.getName()),
            () -> assertEquals(25, user.getAge()),
            () -> assertTrue(user.getEmail().contains("@"))
        );
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Test Lifecycle: Setup and Cleanup"}
                </h2>
                <p>
                  {"Sometimes you need to prepare something before tests run (like creating objects) or clean up afterward (like closing connections). JUnit provides lifecycle annotations for this:"}
                </p>
                <div className="code-block">
                  <pre>{`
import org.junit.jupiter.api.*;

class UserServiceTest {

    private UserService userService;
    private Database database;

    @BeforeAll
    static void setupAll() {
        // Runs ONCE before all tests in this class
        System.out.println("Starting test suite...");
        // Good for: expensive setup like starting a test server
    }

    @BeforeEach
    void setup() {
        // Runs before EACH test method
        database = new Database();
        userService = new UserService(database);
        // Good for: creating fresh objects for each test
    }

    @Test
    void testCreateUser() {
        User user = userService.createUser("John", "john@email.com");
        assertNotNull(user.getId());
    }

    @Test
    void testFindUser() {
        userService.createUser("Jane", "jane@email.com");
        User found = userService.findByEmail("jane@email.com");
        assertEquals("Jane", found.getName());
    }

    @AfterEach
    void cleanup() {
        // Runs after EACH test method
        database.clear();
        // Good for: cleaning up data created during test
    }

    @AfterAll
    static void cleanupAll() {
        // Runs ONCE after all tests in this class
        System.out.println("Test suite completed!");
        // Good for: closing connections, stopping servers
    }
}
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"When to Use Each Annotation"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"@BeforeEach"}
                      </strong>
                      {" - Reset state before each test (most common)"}
                    </li>
                    <li>
                      <strong>
                        {"@AfterEach"}
                      </strong>
                      {" - Clean up resources after each test"}
                    </li>
                    <li>
                      <strong>
                        {"@BeforeAll"}
                      </strong>
                      {" - One-time expensive setup (must be static)"}
                    </li>
                    <li>
                      <strong>
                        {"@AfterAll"}
                      </strong>
                      {" - One-time cleanup (must be static)"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Mockito: Testing in Isolation"}
                </h2>
                <p>
                  {"Here's a common problem: your class depends on other classes. For example, a UserService might depend on a Database. How do you test UserService without actually connecting to a database?"}
                </p>
                <p>
                  {"The answer is "}
                  <strong>
                    {"mocking"}
                  </strong>
                  {". A mock is a fake object that pretends to be the real thing. With Mockito, you can create fake versions of dependencies and control exactly what they do."}
                </p>
                <h3>
                  {"Setting Up Mockito"}
                </h3>
                <div className="code-block">
                  <pre>{`
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>5.7.0</version>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-junit-jupiter</artifactId>
    <version>5.7.0</version>
    <scope>test</scope>
</dependency>
`}</pre>
                </div>
                <h3>
                  {"Basic Mocking Example"}
                </h3>
                <p>
                  {"Let's say you have a UserService that uses a UserRepository to access the database:"}
                </p>
                <div className="code-block">
                  <pre>{`
// The class we want to test
public class UserService {
    private UserRepository userRepository;  // Database access
    private EmailService emailService;      // Sends emails

    public UserService(UserRepository repo, EmailService email) {
        this.userRepository = repo;
        this.emailService = email;
    }

    public User registerUser(String name, String email) {
        // Check if email already exists
        if (userRepository.findByEmail(email) != null) {
            throw new IllegalArgumentException("Email already registered");
        }

        // Save user
        User user = new User(name, email);
        User saved = userRepository.save(user);

        // Send welcome email
        emailService.sendWelcomeEmail(email);

        return saved;
    }
}
`}</pre>
                </div>
                <p>
                  {"Now let's test it with mocks:"}
                </p>
                <div className="code-block">
                  <pre>{`
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)  // Enable Mockito
class UserServiceTest {

    @Mock  // Create a fake UserRepository
    private UserRepository userRepository;

    @Mock  // Create a fake EmailService
    private EmailService emailService;

    @InjectMocks  // Create UserService with mocks injected
    private UserService userService;

    @Test
    void registerUser_Success() {
        // Given: email doesn't exist yet
        when(userRepository.findByEmail("john@email.com"))
            .thenReturn(null);

        // And: save returns the user with an ID
        when(userRepository.save(any(User.class)))
            .thenAnswer(invocation -> {
                User user = invocation.getArgument(0);
                user.setId(1L);
                return user;
            });

        // When: we register a new user
        User result = userService.registerUser("John", "john@email.com");

        // Then: user is created with ID
        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("John", result.getName());

        // And: welcome email was sent
        verify(emailService).sendWelcomeEmail("john@email.com");
    }

    @Test
    void registerUser_EmailAlreadyExists_ThrowsException() {
        // Given: email already exists
        User existingUser = new User("Jane", "john@email.com");
        when(userRepository.findByEmail("john@email.com"))
            .thenReturn(existingUser);

        // When/Then: registration fails
        assertThrows(IllegalArgumentException.class, () -> {
            userService.registerUser("John", "john@email.com");
        });

        // And: no user was saved
        verify(userRepository, never()).save(any());

        // And: no email was sent
        verify(emailService, never()).sendWelcomeEmail(any());
    }
}
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Key Mockito Concepts"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"@Mock"}
                      </strong>
                      {" - Creates a fake version of a class"}
                    </li>
                    <li>
                      <strong>
                        {"@InjectMocks"}
                      </strong>
                      {" - Creates the class under test with mocks injected"}
                    </li>
                    <li>
                      <strong>
                        {"when().thenReturn()"}
                      </strong>
                      {" - Define what the mock should return"}
                    </li>
                    <li>
                      <strong>
                        {"verify()"}
                      </strong>
                      {" - Check that a method was called"}
                    </li>
                    <li>
                      <strong>
                        {"any()"}
                      </strong>
                      {" - Match any argument"}
                    </li>
                    <li>
                      <strong>
                        {"never()"}
                      </strong>
                      {" - Verify method was never called"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Test-Driven Development (TDD)"}
                </h2>
                <p>
                  {"TDD is a development approach where you write tests BEFORE writing the actual code. It sounds backwards, but it leads to better-designed, more reliable code."}
                </p>
                <h3>
                  {"The TDD Cycle: Red-Green-Refactor"}
                </h3>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"1. Red: Write a Failing Test"}
                    </h3>
                    <p>
                      {"First, write a test for functionality that doesn't exist yet. Run it - it should fail (red). This proves your test actually tests something."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"2. Green: Make It Pass"}
                    </h3>
                    <p>
                      {"Write the minimum code needed to make the test pass. Don't worry about perfect code yet - just make it work."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"3. Refactor: Improve the Code"}
                    </h3>
                    <p>
                      {"Now clean up your code. Remove duplication, improve naming, optimize. Your tests ensure you don't break anything."}
                    </p>
                  </div>
                </div>
                <h3>
                  {"TDD Example: Building a Password Validator"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Step 1: RED - Write the test first (code doesn't exist yet!)

class PasswordValidatorTest {

    private PasswordValidator validator = new PasswordValidator();

    @Test
    void password_TooShort_Invalid() {
        assertFalse(validator.isValid("abc"));
    }

    @Test
    void password_NoNumbers_Invalid() {
        assertFalse(validator.isValid("abcdefgh"));
    }

    @Test
    void password_Valid() {
        assertTrue(validator.isValid("password123"));
    }
}

// This won't even compile yet! That's okay in TDD.
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
// Step 2: GREEN - Write minimum code to pass

public class PasswordValidator {

    public boolean isValid(String password) {
        // Minimum 8 characters
        if (password.length() < 8) {
            return false;
        }

        // Must contain at least one number
        boolean hasNumber = false;
        for (char c : password.toCharArray()) {
            if (Character.isDigit(c)) {
                hasNumber = true;
                break;
            }
        }

        return hasNumber;
    }
}

// Run tests - they should all pass now!
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
// Step 3: REFACTOR - Clean up the code

public class PasswordValidator {

    private static final int MIN_LENGTH = 8;

    public boolean isValid(String password) {
        return hasMinimumLength(password) && containsNumber(password);
    }

    private boolean hasMinimumLength(String password) {
        return password.length() >= MIN_LENGTH;
    }

    private boolean containsNumber(String password) {
        return password.chars().anyMatch(Character::isDigit);
    }
}

// Run tests again - still passing!
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Testing Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. One Assertion Per Concept"}
                  </h3>
                  <p>
                    {"Each test should verify one specific behavior. This makes failures easy to understand."}
                  </p>
                  <div className="code-block">
                    <pre>{`
// BAD: Testing too many things
@Test
void testUser() {
    User user = new User("John", 25);
    assertEquals("John", user.getName());
    assertEquals(25, user.getAge());
    assertTrue(user.isAdult());
    assertNotNull(user.getId());
}

// GOOD: Separate tests for each behavior
@Test void user_HasCorrectName() { ... }
@Test void user_HasCorrectAge() { ... }
@Test void user_IsAdult_WhenOver18() { ... }
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Use Descriptive Test Names"}
                  </h3>
                  <p>
                    {"Test names should describe what's being tested and expected outcome."}
                  </p>
                  <div className="code-block">
                    <pre>{`
// BAD
@Test void test1() { ... }
@Test void testLogin() { ... }

// GOOD
@Test void login_WithValidCredentials_ReturnsUser() { ... }
@Test void login_WithWrongPassword_ThrowsException() { ... }
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Follow the AAA Pattern"}
                  </h3>
                  <p>
                    {"Arrange-Act-Assert (or Given-When-Then) makes tests readable:"}
                  </p>
                  <div className="code-block">
                    <pre>{`
@Test
void withdraw_SufficientBalance_DecreasesBalance() {
    // Arrange (Given)
    BankAccount account = new BankAccount(100.0);

    // Act (When)
    account.withdraw(30.0);

    // Assert (Then)
    assertEquals(70.0, account.getBalance());
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Test Edge Cases"}
                  </h3>
                  <p>
                    {"Don't just test the happy path. Think about boundaries and errors:"}
                  </p>
                  <div className="code-block">
                    <pre>{`
@Test void divide_ByZero_ThrowsException() { ... }
@Test void list_WhenEmpty_ReturnsEmptyList() { ... }
@Test void search_NullInput_ThrowsException() { ... }
@Test void age_AtExactly18_IsAdult() { ... }
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Keep Tests Independent"}
                  </h3>
                  <p>
                    {"Tests should not depend on each other. Each test should set up its own data."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Learn Testing "}
                <span className="gradient-text">
                  {"the Right Way"}
                </span>
              </h2>
              <p>
                {"Master unit testing with hands-on projects and expert mentorship. Write code you can trust."}
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
                  {"Master the basics of Java including variables, OOP, and collections."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot Fundamentals"}
                </h3>
                {" "}
                <p>
                  {"Learn Spring Boot and build enterprise-ready applications."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/exception-handling" className="article-card">
                <h3>
                  {"Exception Handling"}
                </h3>
                {" "}
                <p>
                  {"Handle errors gracefully and write robust Java applications."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Unit Testing as part of the Full Stack Java program."} />
    </>
  );
}
