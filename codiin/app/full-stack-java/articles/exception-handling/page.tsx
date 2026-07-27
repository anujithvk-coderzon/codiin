import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Java Exception Handling: Try-Catch, Throw & Custom Exceptions",
  description: "Master Java Exception Handling - try-catch, throw, throws, custom exceptions. Learn to write robust, error-free applications with beginner-friendly examples.",
  keywords: ["Java exception handling", "try catch Java", "throw throws", "custom exceptions", "Java error handling", "checked unchecked exceptions"],
  alternates: { canonical: "/full-stack-java/articles/exception-handling" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/exception-handling",
    title: "Java Exception Handling: Complete Beginner's Guide | CODiiN",
    description: "Learn to handle errors gracefully in Java. Master try-catch, custom exceptions, and best practices for robust applications.",
    images: ["/images/exception-handling-og.jpg"],
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
  "headline": "Java Exception Handling: Complete Beginner's Guide",
  "description": "Master Java exception handling with try-catch, custom exceptions and best practices",
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

export default function FullStackJavaExceptionHandlingPage() {
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
              {"Exception Handling"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Exception Handling in Java"}
            </h1>
            <p className="article-subtitle">
              {"Write Robust, Error-Free Applications - Handle Errors Gracefully Like a Pro"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Exception Handling Matters"}
                </h2>
                <p>
                  {"Imagine you're a pilot. Everything's going smoothly until suddenly an engine fails. What happens next determines whether everyone lands safely or not. A good pilot has procedures for every possible problem."}
                </p>
                <p>
                  {"Exception handling is your \"emergency procedures\" for code. Things will go wrong - files won't exist, networks will fail, users will enter invalid data. Good exception handling ensures your application recovers gracefully instead of crashing."}
                </p>
                <div className="code-block">
                  <pre>{`
// WITHOUT exception handling - program crashes
String input = null;
int length = input.length();  // NullPointerException - CRASH!

// WITH exception handling - program continues
String input = null;
try {
    int length = input.length();
} catch (NullPointerException e) {
    System.out.println("Input was null, using default");
    int length = 0;
}
// Program continues normally
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Prevent Crashes"}
                    </h3>
                    <p>
                      {"Your application stays running even when errors occur. Users see friendly messages instead of scary error screens."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Find Bugs Faster"}
                    </h3>
                    <p>
                      {"Good exception messages tell you exactly what went wrong and where, making debugging much easier."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Clean Up Resources"}
                    </h3>
                    <p>
                      {"Properly close files, database connections, and network sockets even when errors occur."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Professional Code"}
                    </h3>
                    <p>
                      {"Enterprise applications require robust error handling. It's expected in professional development."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Understanding Exception Types"}
                </h2>
                <p>
                  {"Java has a hierarchy of exceptions. Understanding this helps you know which exceptions to catch and when."}
                </p>
                <div className="code-block">
                  <pre>{`
Throwable (root class)
├── Error (serious problems - don't catch these)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── VirtualMachineError
│
└── Exception (problems you should handle)
    ├── RuntimeException (unchecked - optional to catch)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── IllegalArgumentException
    │   ├── NumberFormatException
    │   └── ArithmeticException
    │
    └── Checked Exceptions (must catch or declare)
        ├── IOException
        ├── FileNotFoundException
        ├── SQLException
        └── ClassNotFoundException
`}</pre>
                </div>
                <h3>
                  {"Checked vs Unchecked Exceptions"}
                </h3>
                <div className="when-to-use">
                  <h4>
                    {"Checked Exceptions (Must Handle)"}
                  </h4>
                  <ul>
                    <li>
                      {"Compiler forces you to handle them"}
                    </li>
                    <li>
                      {"Usually external factors beyond your control"}
                    </li>
                    <li>
                      {"Examples: File not found, network failure, database error"}
                    </li>
                    <li>
                      {"Use when the caller can reasonably recover"}
                    </li>
                  </ul>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Unchecked Exceptions (Optional to Handle)"}
                  </h4>
                  <ul>
                    <li>
                      {"Extend RuntimeException"}
                    </li>
                    <li>
                      {"Usually programming errors (bugs)"}
                    </li>
                    <li>
                      {"Examples: Null pointer, array index, illegal argument"}
                    </li>
                    <li>
                      {"Fix the code instead of catching these"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Try-Catch: The Basics"}
                </h2>
                <p>
                  {"The try-catch block is your primary tool for handling exceptions. Put risky code in \"try\" and handle problems in \"catch\"."}
                </p>
                <div className="code-block">
                  <pre>{`
try {
    // Risky code that might throw an exception
    int result = 10 / 0;  // ArithmeticException!
} catch (ArithmeticException e) {
    // Handle the exception
    System.out.println("Cannot divide by zero!");
    System.out.println("Error: " + e.getMessage());
}

// Program continues here
System.out.println("After exception handling");
`}</pre>
                </div>
                <h3>
                  {"Catching Multiple Exceptions"}
                </h3>
                <div className="code-block">
                  <pre>{`
public void processFile(String filename) {
    try {
        // Multiple things can go wrong here
        FileReader file = new FileReader(filename);
        BufferedReader reader = new BufferedReader(file);
        String line = reader.readLine();
        int number = Integer.parseInt(line);
        System.out.println("Number: " + number);
        reader.close();
    } catch (FileNotFoundException e) {
        System.out.println("File not found: " + filename);
    } catch (IOException e) {
        System.out.println("Error reading file: " + e.getMessage());
    } catch (NumberFormatException e) {
        System.out.println("File doesn't contain a valid number");
    }
}

// Or catch multiple in one block (Java 7+)
try {
    // risky code
} catch (FileNotFoundException | NumberFormatException e) {
    System.out.println("Error: " + e.getMessage());
}
`}</pre>
                </div>
                <h3>
                  {"The Exception Object"}
                </h3>
                <div className="code-block">
                  <pre>{`
try {
    String text = null;
    text.length();
} catch (NullPointerException e) {
    // Useful methods on exception objects:

    // Get error message
    String message = e.getMessage();  // null

    // Get full stack trace as string
    e.printStackTrace();  // Prints where error occurred

    // Get the class name of exception
    String type = e.getClass().getName();

    // Get cause (if this exception was caused by another)
    Throwable cause = e.getCause();
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Finally: Cleanup Code"}
                </h2>
                <p>
                  {"The \"finally\" block runs NO MATTER WHAT - whether an exception occurred or not. It's perfect for cleanup code like closing files or connections."}
                </p>
                <div className="code-block">
                  <pre>{`
FileReader reader = null;
try {
    reader = new FileReader("data.txt");
    // Process file...
    String data = readAllData(reader);
} catch (FileNotFoundException e) {
    System.out.println("File not found");
} catch (IOException e) {
    System.out.println("Error reading file");
} finally {
    // This ALWAYS runs - even if exception occurred
    if (reader != null) {
        try {
            reader.close();
        } catch (IOException e) {
            System.out.println("Error closing file");
        }
    }
    System.out.println("Cleanup complete");
}
`}</pre>
                </div>
                <h3>
                  {"Try-With-Resources (Modern Way)"}
                </h3>
                <p>
                  {"Java 7 introduced try-with-resources which automatically closes resources. This is the preferred approach - cleaner and safer."}
                </p>
                <div className="code-block">
                  <pre>{`
// OLD WAY: Manual cleanup with finally
FileReader reader = null;
try {
    reader = new FileReader("data.txt");
    // use reader...
} finally {
    if (reader != null) {
        reader.close();
    }
}

// MODERN WAY: Try-with-resources (automatic cleanup!)
try (FileReader reader = new FileReader("data.txt")) {
    // use reader...
}  // reader automatically closed here!

// Multiple resources
try (
    FileReader reader = new FileReader("input.txt");
    FileWriter writer = new FileWriter("output.txt")
) {
    // use both...
}  // Both automatically closed!

// Works with any class implementing AutoCloseable
try (Connection conn = database.getConnection();
     PreparedStatement stmt = conn.prepareStatement(sql);
     ResultSet rs = stmt.executeQuery()) {
    while (rs.next()) {
        // process results
    }
}  // All three closed automatically!
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Throw and Throws"}
                </h2>
                <h3>
                  {"throw: Create an Exception"}
                </h3>
                <p>
                  {"Use \"throw\" to create and throw an exception yourself. This is useful when you detect an error condition."}
                </p>
                <div className="code-block">
                  <pre>{`
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative: " + age);
    }
    if (age > 150) {
        throw new IllegalArgumentException("Age seems unrealistic: " + age);
    }
    this.age = age;
}

public void withdraw(double amount) {
    if (amount <= 0) {
        throw new IllegalArgumentException("Amount must be positive");
    }
    if (amount > balance) {
        throw new IllegalStateException("Insufficient funds");
    }
    balance -= amount;
}
`}</pre>
                </div>
                <h3>
                  {"throws: Declare Exceptions"}
                </h3>
                <p>
                  {"Use \"throws\" in a method signature to declare that this method might throw certain exceptions. The caller must handle them."}
                </p>
                <div className="code-block">
                  <pre>{`
// This method might throw IOException - caller must handle it
public String readFile(String filename) throws IOException {
    BufferedReader reader = new BufferedReader(new FileReader(filename));
    StringBuilder content = new StringBuilder();
    String line;
    while ((line = reader.readLine()) != null) {
        content.append(line);
    }
    reader.close();
    return content.toString();
}

// Caller must handle the exception
public void processData() {
    try {
        String data = readFile("data.txt");
        // process data...
    } catch (IOException e) {
        System.out.println("Failed to read file: " + e.getMessage());
    }
}

// Or pass it up the chain
public void processData() throws IOException {
    String data = readFile("data.txt");  // Exception passed to caller
}
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"throw vs throws"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"throw"}
                      </strong>
                      {" - Actually throws an exception (action)"}
                    </li>
                    <li>
                      <strong>
                        {"throws"}
                      </strong>
                      {" - Declares that method might throw exception (declaration)"}
                    </li>
                    <li>
                      {"throw is used inside method body"}
                    </li>
                    <li>
                      {"throws is used in method signature"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Custom Exceptions"}
                </h2>
                <p>
                  {"Create your own exception classes when standard exceptions don't fit your needs. This makes your code more expressive and easier to debug."}
                </p>
                <div className="code-block">
                  <pre>{`
// Simple custom exception
public class InsufficientFundsException extends Exception {

    private double shortfall;

    public InsufficientFundsException(String message) {
        super(message);
    }

    public InsufficientFundsException(String message, double shortfall) {
        super(message);
        this.shortfall = shortfall;
    }

    public double getShortfall() {
        return shortfall;
    }
}

// Usage
public class BankAccount {
    private double balance;

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            double shortfall = amount - balance;
            throw new InsufficientFundsException(
                "Cannot withdraw $" + amount + ". Balance is only $" + balance,
                shortfall
            );
        }
        balance -= amount;
    }
}

// Handling it
try {
    account.withdraw(1000);
} catch (InsufficientFundsException e) {
    System.out.println(e.getMessage());
    System.out.println("You need $" + e.getShortfall() + " more");
}
`}</pre>
                </div>
                <h3>
                  {"Unchecked Custom Exception"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Extend RuntimeException for unchecked exception
public class UserNotFoundException extends RuntimeException {

    private String userId;

    public UserNotFoundException(String userId) {
        super("User not found with ID: " + userId);
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }
}

// Usage - no need to declare or catch (but you can)
public User findUser(String userId) {
    User user = database.find(userId);
    if (user == null) {
        throw new UserNotFoundException(userId);
    }
    return user;
}
`}</pre>
                </div>
                <h3>
                  {"Exception Hierarchy for Your App"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Base exception for your application
public class ApplicationException extends Exception {
    public ApplicationException(String message) {
        super(message);
    }
    public ApplicationException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Specific exceptions extend the base
public class UserException extends ApplicationException {
    public UserException(String message) {
        super(message);
    }
}

public class PaymentException extends ApplicationException {
    public PaymentException(String message) {
        super(message);
    }
}

public class UserNotFoundException extends UserException {
    public UserNotFoundException(String userId) {
        super("User not found: " + userId);
    }
}

// Now you can catch broadly or specifically
try {
    processPayment(user, amount);
} catch (UserException e) {
    // Handle all user-related errors
} catch (PaymentException e) {
    // Handle all payment-related errors
} catch (ApplicationException e) {
    // Handle any application error
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Common Exceptions & How to Handle Them"}
                </h2>
                <h3>
                  {"NullPointerException"}
                </h3>
                <div className="code-block">
                  <pre>{`
// PROBLEM: Accessing method/property on null
String name = null;
name.length();  // NullPointerException!

// SOLUTION 1: Check for null
if (name != null) {
    int length = name.length();
}

// SOLUTION 2: Use Optional (modern Java)
Optional<String> maybeName = Optional.ofNullable(name);
int length = maybeName.map(String::length).orElse(0);

// SOLUTION 3: Use Objects.requireNonNull for validation
public void setName(String name) {
    this.name = Objects.requireNonNull(name, "Name cannot be null");
}
`}</pre>
                </div>
                <h3>
                  {"ArrayIndexOutOfBoundsException"}
                </h3>
                <div className="code-block">
                  <pre>{`
// PROBLEM: Accessing array with invalid index
int[] numbers = {1, 2, 3};
int value = numbers[5];  // ArrayIndexOutOfBoundsException!

// SOLUTION: Check bounds before accessing
if (index >= 0 && index < numbers.length) {
    int value = numbers[index];
}
`}</pre>
                </div>
                <h3>
                  {"NumberFormatException"}
                </h3>
                <div className="code-block">
                  <pre>{`
// PROBLEM: Parsing invalid number string
String input = "abc";
int number = Integer.parseInt(input);  // NumberFormatException!

// SOLUTION: Catch and provide default
public int parseNumber(String input, int defaultValue) {
    try {
        return Integer.parseInt(input);
    } catch (NumberFormatException e) {
        return defaultValue;
    }
}

// Or validate first
public boolean isValidNumber(String input) {
    return input != null && input.matches("-?\\\\d+");
}
`}</pre>
                </div>
                <h3>
                  {"IOException"}
                </h3>
                <div className="code-block">
                  <pre>{`
// PROBLEM: File operations can fail
public String readFile(String path) {
    try (BufferedReader reader = Files.newBufferedReader(Paths.get(path))) {
        return reader.lines().collect(Collectors.joining("\\n"));
    } catch (NoSuchFileException e) {
        System.out.println("File not found: " + path);
        return "";
    } catch (AccessDeniedException e) {
        System.out.println("No permission to read: " + path);
        return "";
    } catch (IOException e) {
        System.out.println("Error reading file: " + e.getMessage());
        return "";
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Exception Handling Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Don't Catch Generic Exception"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Catches everything including bugs
try {
    processData();
} catch (Exception e) {
    System.out.println("Something went wrong");
}

// GOOD: Catch specific exceptions
try {
    processData();
} catch (FileNotFoundException e) {
    System.out.println("Data file not found");
} catch (DataFormatException e) {
    System.out.println("Invalid data format");
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Don't Swallow Exceptions"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// TERRIBLE: Exception completely ignored
try {
    riskyOperation();
} catch (Exception e) {
    // Do nothing - silent failure!
}

// BAD: Just printing isn't enough
try {
    riskyOperation();
} catch (Exception e) {
    e.printStackTrace();  // Then what?
}

// GOOD: Handle appropriately or rethrow
try {
    riskyOperation();
} catch (IOException e) {
    logger.error("Operation failed: " + e.getMessage(), e);
    throw new ServiceException("Could not complete operation", e);
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Include Context in Exception Messages"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Useless message
throw new Exception("Error");

// GOOD: Helpful message with context
throw new UserNotFoundException(
    "User with ID '" + userId + "' not found in database '" + dbName + "'"
);

// GOOD: Include what was attempted and what went wrong
throw new PaymentException(
    "Failed to process payment of $" + amount +
    " for order #" + orderId +
    ": " + e.getMessage()
);
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Preserve the Original Exception"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Original exception lost
try {
    database.save(user);
} catch (SQLException e) {
    throw new DataException("Failed to save user");  // Original cause lost!
}

// GOOD: Chain exceptions
try {
    database.save(user);
} catch (SQLException e) {
    throw new DataException("Failed to save user", e);  // Cause preserved
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Use Exceptions for Exceptional Cases"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD: Using exceptions for flow control
public boolean userExists(String email) {
    try {
        findUser(email);
        return true;
    } catch (UserNotFoundException e) {
        return false;
    }
}

// GOOD: Use normal control flow
public boolean userExists(String email) {
    return database.countByEmail(email) > 0;
}

// Exceptions are for UNEXPECTED situations, not normal conditions
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"6. Document Exceptions"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
/**
 * Withdraws money from the account.
 *
 * @param amount the amount to withdraw (must be positive)
 * @throws IllegalArgumentException if amount is negative or zero
 * @throws InsufficientFundsException if balance is less than amount
 */
public void withdraw(double amount)
        throws IllegalArgumentException, InsufficientFundsException {
    if (amount <= 0) {
        throw new IllegalArgumentException("Amount must be positive");
    }
    if (amount > balance) {
        throw new InsufficientFundsException(balance, amount);
    }
    balance -= amount;
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"7. Clean Up Resources Properly"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// ALWAYS use try-with-resources for closeable resources
try (Connection conn = dataSource.getConnection();
     PreparedStatement stmt = conn.prepareStatement(sql)) {
    stmt.setString(1, userId);
    try (ResultSet rs = stmt.executeQuery()) {
        // process results
    }
}  // Everything closed automatically, even if exception occurs
`}</pre>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Real-World Example: User Registration"}
                </h2>
                <div className="code-block">
                  <pre>{`
// Custom exceptions
public class RegistrationException extends Exception {
    public RegistrationException(String message) {
        super(message);
    }
    public RegistrationException(String message, Throwable cause) {
        super(message, cause);
    }
}

public class EmailAlreadyExistsException extends RegistrationException {
    public EmailAlreadyExistsException(String email) {
        super("Email already registered: " + email);
    }
}

public class InvalidEmailException extends RegistrationException {
    public InvalidEmailException(String email) {
        super("Invalid email format: " + email);
    }
}

public class WeakPasswordException extends RegistrationException {
    public WeakPasswordException(String reason) {
        super("Password is too weak: " + reason);
    }
}

// Registration service
public class UserRegistrationService {

    private final UserRepository userRepository;
    private final EmailValidator emailValidator;
    private final PasswordValidator passwordValidator;

    public User register(String email, String password, String name)
            throws RegistrationException {

        // Validate email format
        if (!emailValidator.isValid(email)) {
            throw new InvalidEmailException(email);
        }

        // Check if email already exists
        if (userRepository.existsByEmail(email)) {
            throw new EmailAlreadyExistsException(email);
        }

        // Validate password strength
        ValidationResult passwordResult = passwordValidator.validate(password);
        if (!passwordResult.isValid()) {
            throw new WeakPasswordException(passwordResult.getReason());
        }

        // Create user
        try {
            User user = new User(email, hashPassword(password), name);
            return userRepository.save(user);
        } catch (DatabaseException e) {
            throw new RegistrationException("Failed to create user account", e);
        }
    }
}

// Controller handling the registration
public class RegistrationController {

    public Response register(RegistrationRequest request) {
        try {
            User user = registrationService.register(
                request.getEmail(),
                request.getPassword(),
                request.getName()
            );
            return Response.success("Registration successful", user);

        } catch (EmailAlreadyExistsException e) {
            return Response.error(409, "This email is already registered");

        } catch (InvalidEmailException e) {
            return Response.error(400, "Please enter a valid email address");

        } catch (WeakPasswordException e) {
            return Response.error(400, e.getMessage());

        } catch (RegistrationException e) {
            logger.error("Registration failed", e);
            return Response.error(500, "Registration failed. Please try again.");
        }
    }
}
`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Write Robust Java Code "}
                <span className="gradient-text">
                  {"with Expert Guidance"}
                </span>
              </h2>
              <p>
                {"Learn to build production-ready applications that handle errors gracefully."}
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
                  {"Master the basics of Java including OOP concepts."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/unit-testing" className="article-card">
                <h3>
                  {"Unit Testing"}
                </h3>
                {" "}
                <p>
                  {"Test your exception handling with JUnit and Mockito."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot"}
                </h3>
                {" "}
                <p>
                  {"Learn exception handling in Spring Boot applications."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Java Exception Handling as part of the Full Stack Java program."} />
    </>
  );
}
