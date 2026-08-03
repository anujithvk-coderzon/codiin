import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "C# Fundamentals: The Modern Programming Language",
  description: "Learn C# Fundamentals - Variables, data types, LINQ, async/await, and OOP. Understand why C# is the language of choice for enterprise development.",
  keywords: ["C# tutorial", "C# fundamentals", "LINQ", "async await", "OOP C#", "learn C#", "C# programming"],
  alternates: { canonical: "/full-stack-dotnet/articles/csharp-fundamentals" },
  openGraph: {
    type: "article",
    url: "/full-stack-dotnet/articles/csharp-fundamentals",
    title: "C# Fundamentals: The Modern Programming Language",
    description: "Master C# from basics to advanced concepts. Learn variables, LINQ, async/await, and OOP.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-dotnet", label: "Learn Full Stack .NET", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "C# Fundamentals: The Modern Programming Language",
  "description": "Complete guide to C# fundamentals for .NET development",
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

export default function FullStackDotnetCsharpFundamentalsPage() {
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
              <Link href="/full-stack-dotnet">
                {"Full Stack .NET"}
              </Link>
              {" / "}
              <span>
                {"C# Fundamentals"}
              </span>
            </div>
            <h1>
              {"C# Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"The Modern Programming Language for Enterprise Development"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"18 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container" />
          <section className="article-section">
            <h2>
              {"What is C#?"}
            </h2>
            <p>
              {"C# (pronounced \"C Sharp\") is a modern, object-oriented programming language developed by Microsoft. Think of C# as a Swiss Army knife for developers - it's versatile, powerful, and can build anything from desktop applications to mobile apps, games, and enterprise web services."}
            </p>
            <p>
              {"Created in 2000, C# has evolved into one of the most popular programming languages, consistently ranking in the top 5 worldwide. It combines the power of C++ with the simplicity of languages like Java and Python."}
            </p>
          </section>
          <section className="article-section">
            <h2>
              {"Why Learn C#?"}
            </h2>
            <p>
              {"Imagine you're building a house. You could use basic tools, or you could use professional-grade equipment that makes your job easier and your results better. C# is like professional-grade equipment for software development:"}
            </p>
            <ul>
              <li>
                <strong>
                  {"Microsoft Ecosystem:"}
                </strong>
                {" Seamlessly integrates with Azure, SQL Server, Visual Studio, and the entire Microsoft stack - essential for enterprise development"}
              </li>
              <li>
                <strong>
                  {"Modern Language Features:"}
                </strong>
                {" Nullable reference types, pattern matching, records, and LINQ make code cleaner and safer"}
              </li>
              <li>
                <strong>
                  {"Strong Typing:"}
                </strong>
                {" Catches errors at compile-time rather than runtime, saving hours of debugging"}
              </li>
              <li>
                <strong>
                  {"Cross-Platform:"}
                </strong>
                {" Build applications for Windows, Linux, macOS, iOS, and Android with .NET"}
              </li>
              <li>
                <strong>
                  {"High Performance:"}
                </strong>
                {" Compiled code runs fast, competing with languages like C++ for speed"}
              </li>
              <li>
                <strong>
                  {"Job Market:"}
                </strong>
                {" Thousands of enterprise companies actively hire C# developers with competitive salaries"}
              </li>
            </ul>
          </section>
          <section className="article-section">
            <h2>
              {"When to Use C#?"}
            </h2>
            <p>
              {"C# shines in these scenarios:"}
            </p>
            <ul>
              <li>
                <strong>
                  {"Enterprise Applications:"}
                </strong>
                {" Banking systems, ERP solutions, healthcare platforms - when reliability and security matter most"}
              </li>
              <li>
                <strong>
                  {"Web APIs:"}
                </strong>
                {" Building robust REST APIs with ASP.NET Core for mobile and web clients"}
              </li>
              <li>
                <strong>
                  {"Cloud Applications:"}
                </strong>
                {" Azure-native applications that need tight integration with cloud services"}
              </li>
              <li>
                <strong>
                  {"Game Development:"}
                </strong>
                {" Unity game engine uses C# as its primary scripting language"}
              </li>
              <li>
                <strong>
                  {"Desktop Applications:"}
                </strong>
                {" Windows desktop apps with WPF or WinForms"}
              </li>
              <li>
                <strong>
                  {"Microservices:"}
                </strong>
                {" Building scalable, distributed systems with .NET containers"}
              </li>
            </ul>
            <p>
              <strong>
                {"When NOT to use C#:"}
              </strong>
              {" Quick scripting tasks (use Python), simple websites without complex logic (use JavaScript), or when your team exclusively uses other ecosystems."}
            </p>
          </section>
          <section className="article-section">
            <h2>
              {"Variables and Data Types"}
            </h2>
            <p>
              {"Variables are like labeled boxes where you store information. C# has several types of boxes, each designed for different kinds of information:"}
            </p>
            <div className="code-block">
              <pre><code>{`// VALUE TYPES (stored directly in memory)

// Numbers
int age = 25;                    // Whole numbers (-2B to +2B)
long population = 8000000000L;   // Very large whole numbers
double price = 19.99;            // Decimal numbers (15-16 digits precision)
decimal money = 1999.99m;        // Financial calculations (28-29 digits precision)

// Text
char grade = 'A';                // Single character
string name = "John Doe";        // Text of any length

// Boolean
bool isActive = true;            // true or false only

// Date and Time
DateTime today = DateTime.Now;   // Current date and time
DateOnly birthDate = new DateOnly(1998, 5, 15);

// REFERENCE TYPES (stored as references to memory)

// Arrays
int[] scores = { 85, 90, 78, 92 };
string[] names = new string[5];

// Lists (dynamic arrays)
List<string> cities = new List<string> { "Kochi", "Mumbai", "Delhi" };
cities.Add("Bangalore");

// NULL HANDLING (C# 8.0+)
string? optionalName = null;     // Can be null
string requiredName = "John";    // Cannot be null

// Type inference with var
var count = 10;                  // Compiler knows it's int
var message = "Hello";           // Compiler knows it's string`}</code></pre>
            </div>
          </section>
          <section className="article-section">
            <h2>
              {"Object-Oriented Programming (OOP)"}
            </h2>
            <p>
              {"Think of OOP like building with LEGO blocks. Each block (object) has a specific purpose, and you combine them to create something larger. Here's how C# implements OOP:"}
            </p>
            <div className="code-block">
              <pre><code>{`// CLASS - Blueprint for creating objects
public class Employee
{
    // PROPERTIES - Characteristics of an employee
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Salary { get; private set; }  // Can only be modified inside class

    // CONSTRUCTOR - Runs when creating a new employee
    public Employee(int id, string name, decimal salary)
    {
        Id = id;
        Name = name;
        Salary = salary;
    }

    // METHODS - Actions an employee can perform
    public void GiveRaise(decimal amount)
    {
        Salary += amount;
        Console.WriteLine($"{Name} received a raise of {amount:C}");
    }

    public string GetDetails()
    {
        return $"ID: {Id}, Name: {Name}, Salary: {Salary:C}";
    }
}

// INHERITANCE - Manager IS AN Employee with extra features
public class Manager : Employee
{
    public List<Employee> TeamMembers { get; set; }

    public Manager(int id, string name, decimal salary)
        : base(id, name, salary)
    {
        TeamMembers = new List<Employee>();
    }

    public void AddTeamMember(Employee employee)
    {
        TeamMembers.Add(employee);
    }
}

// USING THE CLASSES
var employee = new Employee(1, "Rajesh Kumar", 50000);
employee.GiveRaise(5000);

var manager = new Manager(2, "Priya Sharma", 80000);
manager.AddTeamMember(employee);`}</code></pre>
            </div>
            <p>
              <strong>
                {"Key OOP Principles:"}
              </strong>
            </p>
            <ul>
              <li>
                <strong>
                  {"Encapsulation:"}
                </strong>
                {" Hide complex details (like how salary is stored) and expose only what's necessary"}
              </li>
              <li>
                <strong>
                  {"Inheritance:"}
                </strong>
                {" Manager reuses all Employee features plus adds its own"}
              </li>
              <li>
                <strong>
                  {"Polymorphism:"}
                </strong>
                {" Treat different objects uniformly (all employees can get raises, but managers might have different logic)"}
              </li>
              <li>
                <strong>
                  {"Abstraction:"}
                </strong>
                {" Work with concepts (Employee) rather than implementation details"}
              </li>
            </ul>
          </section>
          <section className="article-section">
            <h2>
              {"LINQ: Language Integrated Query"}
            </h2>
            <p>
              {"LINQ is like SQL for any data in C#. Instead of writing loops and if-statements, you write queries. It's one of C#'s most powerful features:"}
            </p>
            <div className="code-block">
              <pre><code>{`// Sample data
var employees = new List<Employee>
{
    new Employee(1, "Rajesh", 45000),
    new Employee(2, "Priya", 55000),
    new Employee(3, "Amit", 38000),
    new Employee(4, "Sneha", 62000),
    new Employee(5, "Vikram", 48000)
};

// FILTER - Find employees earning more than 40,000
var highEarners = employees
    .Where(e => e.Salary > 40000)
    .ToList();

// SELECT - Get just the names
var employeeNames = employees
    .Select(e => e.Name)
    .ToList();

// ORDER - Sort by salary (descending)
var sortedBySalary = employees
    .OrderByDescending(e => e.Salary)
    .ToList();

// AGGREGATE - Calculate total payroll
var totalPayroll = employees.Sum(e => e.Salary);
var averageSalary = employees.Average(e => e.Salary);
var highestPaid = employees.Max(e => e.Salary);

// COMPLEX QUERY - Find top 3 earners and get their names
var topThreeNames = employees
    .OrderByDescending(e => e.Salary)
    .Take(3)
    .Select(e => e.Name)
    .ToList();

// GROUPING - Group employees by salary range
var salaryGroups = employees
    .GroupBy(e => e.Salary > 50000 ? "High" : "Low")
    .Select(group => new
    {
        Category = group.Key,
        Count = group.Count(),
        AverageSalary = group.Average(e => e.Salary)
    });

// CHECKING CONDITIONS
bool anyHighEarner = employees.Any(e => e.Salary > 60000);    // true
bool allAbove30K = employees.All(e => e.Salary > 30000);      // true
var firstHighEarner = employees.First(e => e.Salary > 50000); // Sneha`}</code></pre>
            </div>
            <p>
              <strong>
                {"Why LINQ Matters:"}
              </strong>
              {" Code is more readable, less error-prone, and works with databases, collections, XML, and JSON using the same syntax."}
            </p>
          </section>
          <section className="article-section">
            <h2>
              {"Async/Await: Asynchronous Programming"}
            </h2>
            <p>
              {"Imagine you're cooking dinner. Instead of standing idle while water boils (blocking), you chop vegetables (async). C# async/await lets your program do the same - stay responsive while waiting for operations to complete:"}
            </p>
            <div className="code-block">
              <pre><code>{`// WITHOUT ASYNC - Blocks the thread
public string GetUserData(int userId)
{
    // Wait 2 seconds (simulating database call)
    Thread.Sleep(2000);
    return "User data for " + userId;
}

// WITH ASYNC - Doesn't block the thread
public async Task<string> GetUserDataAsync(int userId)
{
    // Await keyword says "come back when ready, meanwhile do other work"
    await Task.Delay(2000);  // Simulating async database call
    return "User data for " + userId;
}

// REAL-WORLD EXAMPLE: Fetching data from API
public async Task<Product> GetProductAsync(int productId)
{
    using var client = new HttpClient();

    // This doesn't block - thread is free to do other work
    var response = await client.GetAsync($"https://api.example.com/products/{productId}");

    // This also doesn't block
    var json = await response.Content.ReadAsStringAsync();

    return JsonSerializer.Deserialize<Product>(json);
}

// CALLING ASYNC METHODS
public async Task ProcessOrderAsync()
{
    // These run one after another (sequential)
    var product = await GetProductAsync(123);
    var user = await GetUserDataAsync(456);

    // These run at the same time (parallel)
    var productTask = GetProductAsync(123);
    var userTask = GetUserDataAsync(456);
    await Task.WhenAll(productTask, userTask);

    var product2 = productTask.Result;
    var user2 = userTask.Result;
}

// ERROR HANDLING
public async Task<string> SafeApiCallAsync()
{
    try
    {
        var data = await GetProductAsync(123);
        return data.ToString();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"API call failed: {ex.Message}");
        return "Error fetching data";
    }
}`}</code></pre>
            </div>
            <p>
              <strong>
                {"When to use async/await:"}
              </strong>
            </p>
            <ul>
              <li>
                {"Database queries (Entity Framework)"}
              </li>
              <li>
                {"API calls (HttpClient)"}
              </li>
              <li>
                {"File I/O operations"}
              </li>
              <li>
                {"Any operation that involves waiting (network, disk, etc.)"}
              </li>
            </ul>
            <p>
              <strong>
                {"Benefits:"}
              </strong>
              {" Applications stay responsive, servers handle more concurrent requests, better user experience."}
            </p>
          </section>
          <section className="article-section">
            <h2>
              {"Collections and Generics"}
            </h2>
            <p>
              {"Collections are containers for storing multiple items. Generics make collections type-safe:"}
            </p>
            <div className="code-block">
              <pre><code>{`// LIST - Dynamic array (most common)
List<string> fruits = new List<string> { "Apple", "Banana", "Orange" };
fruits.Add("Mango");
fruits.Remove("Banana");
int count = fruits.Count;

// DICTIONARY - Key-Value pairs
Dictionary<int, string> users = new Dictionary<int, string>
{
    { 1, "Rajesh" },
    { 2, "Priya" },
    { 3, "Amit" }
};
users[4] = "Sneha";  // Add new
string userName = users[2];  // Get value

// HASHSET - Unique items only
HashSet<string> uniqueCities = new HashSet<string> { "Kochi", "Mumbai", "Kochi" };
// Only contains: "Kochi", "Mumbai"

// QUEUE - First In, First Out (FIFO)
Queue<string> customerQueue = new Queue<string>();
customerQueue.Enqueue("Customer 1");
customerQueue.Enqueue("Customer 2");
string nextCustomer = customerQueue.Dequeue();  // Customer 1

// STACK - Last In, First Out (LIFO)
Stack<string> browserHistory = new Stack<string>();
browserHistory.Push("google.com");
browserHistory.Push("facebook.com");
string lastPage = browserHistory.Pop();  // facebook.com`}</code></pre>
            </div>
          </section>
          <section className="article-section">
            <h2>
              {"Modern C# Features"}
            </h2>
            <div className="code-block">
              <pre><code>{`// PATTERN MATCHING
object data = "Hello";
if (data is string text)
{
    Console.WriteLine($"String length: {text.Length}");
}

// SWITCH EXPRESSIONS
string GetGrade(int score) => score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _ => "F"
};

// RECORDS - Immutable data classes
public record Person(string Name, int Age);
var person = new Person("John", 30);

// NULL COALESCING
string name = userName ?? "Guest";  // Use "Guest" if userName is null

// STRING INTERPOLATION
var message = $"Hello, {name}! You are {age} years old.";

// COLLECTION INITIALIZERS
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var dict = new Dictionary<string, int>
{
    ["one"] = 1,
    ["two"] = 2
};`}</code></pre>
            </div>
          </section>
          <h2>
            {"Best Practices for C# Beginners"}
          </h2>
          <li>
            <strong>
              {"Use meaningful names:"}
            </strong>
            <code>
              {"customerName"}
            </code>
            {" instead of "}
            <code>
              {"cn"}
            </code>
            {" or "}
            <code>
              {"x"}
            </code>
          </li>
          <li>
            <strong>
              {"Follow naming conventions:"}
            </strong>
            {" PascalCase for classes/methods, camelCase for variables"}
          </li>
          <strong>
            {"Use var wisely:"}
          </strong>
          {" It's okay when type is obvious ("}
          {"var list = new List"}
          {"()"}
          {")"}
          <li>
            <strong>
              {"Prefer LINQ:"}
            </strong>
            {" More readable than loops for filtering/transforming collections"}
          </li>
          <li>
            <strong>
              {"Always use async for I/O:"}
            </strong>
            {" Database, files, network calls should be async"}
          </li>
          <li>
            <strong>
              {"Handle nulls:"}
            </strong>
            {" Use nullable reference types ("}
            <code>
              {"string?"}
            </code>
            {") and null checks"}
          </li>
          <li>
            <strong>
              {"Keep methods small:"}
            </strong>
            {" One method should do one thing well"}
          </li>
          <li>
            <strong>
              {"Use properties over fields:"}
            </strong>
            {" Encapsulation and future-proofing"}
          </li>
          <section className="article-section">
            <h2>
              {"Where C# Fits in the .NET Ecosystem"}
            </h2>
            <p>
              {"C# is the foundation of the entire .NET stack:"}
            </p>
            <ul>
              <li>
                <strong>
                  {"ASP.NET Core:"}
                </strong>
                {" Web APIs and web applications written in C#"}
              </li>
              <li>
                <strong>
                  {"Entity Framework:"}
                </strong>
                {" Database access using C# LINQ queries"}
              </li>
              <li>
                <strong>
                  {"Blazor:"}
                </strong>
                {" Build web UIs using C# instead of JavaScript"}
              </li>
              <li>
                <strong>
                  {"Azure Functions:"}
                </strong>
                {" Serverless code written in C#"}
              </li>
              <li>
                <strong>
                  {"Unity:"}
                </strong>
                {" Game development with C# scripting"}
              </li>
              <li>
                <strong>
                  {"Xamarin/MAUI:"}
                </strong>
                {" Mobile apps using C#"}
              </li>
            </ul>
            <p>
              {"Mastering C# fundamentals is the key that unlocks all these technologies."}
            </p>
          </section>
          <section className="article-section article-cta">
            <h2>
              {"Master C# with Expert Mentorship"}
            </h2>
            <p>
              {"Our Full Stack .NET program starts with C# fundamentals and takes you all the way to building enterprise applications. Learn from industry experts through personalized 1:1 mentorship."}
            </p>
            <Link href="/full-stack-dotnet" className="btn btn-primary">
              {"Explore Full Stack .NET Program"}
            </Link>
          </section>
          <section className="article-section">
            <h2>
              {"Related Articles"}
            </h2>
            <div className="related-articles">
              <Link href="/full-stack-dotnet/articles/aspnet-core" className="related-article-card">
                <h4>
                  {"ASP.NET Core"}
                </h4>
                {" "}
                <p>
                  {"Build web APIs with C#"}
                </p>
              </Link>
              <Link href="/full-stack-dotnet/articles/entity-framework" className="related-article-card">
                <h4>
                  {"Entity Framework Core"}
                </h4>
                {" "}
                <p>
                  {"Database access with LINQ"}
                </p>
              </Link>
              <Link href="/full-stack-dotnet/articles/blazor" className="related-article-card">
                <h4>
                  {"Blazor"}
                </h4>
                {" "}
                <p>
                  {"Frontend development with C#"}
                </p>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn C# and .NET."} />
    </>
  );
}
