import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "ASP.NET Core: Modern Web Framework",
  description: "Learn ASP.NET Core - Build powerful web APIs and applications. Master MVC pattern, controllers, routing, middleware, and dependency injection.",
  keywords: ["ASP.NET Core tutorial", "Web API", "MVC", "middleware", "routing", ".NET web development"],
  alternates: { canonical: "/full-stack-dotnet/articles/aspnet-core" },
  openGraph: {
    type: "article",
    url: "/full-stack-dotnet/articles/aspnet-core",
    title: "ASP.NET Core: Modern Web Framework",
    description: "Master ASP.NET Core for building high-performance web APIs and applications.",
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
  "headline": "ASP.NET Core: Modern Web Framework",
  "description": "Complete guide to ASP.NET Core for building web APIs and applications",
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

export default function FullStackDotnetAspnetCorePage() {
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
                {"ASP.NET Core"}
              </span>
            </div>
            <h1>
              {"ASP.NET Core"}
            </h1>
            <p className="article-subtitle">
              {"Modern, Cross-Platform Web Framework"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is ASP.NET Core?"}
                </h2>
                <p>
                  {"ASP.NET Core is Microsoft's modern web framework for building web APIs, web applications, and microservices. Think of it as a powerful kitchen where you have all the professional tools to cook up web applications - from simple APIs to complex enterprise systems."}
                </p>
                <p>
                  {"Released in 2016 as a complete rewrite of ASP.NET, it's now cross-platform (runs on Windows, Linux, macOS), open-source, and one of the fastest web frameworks in the world according to TechEmpower benchmarks."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use ASP.NET Core?"}
                </h2>
                <p>
                  {"Imagine choosing between a bicycle and a sports car for a cross-country trip. ASP.NET Core is the sports car of web frameworks:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Blazing Fast:"}
                    </strong>
                    {" Consistently ranks in top 10 fastest web frameworks globally, handling millions of requests per second"}
                  </li>
                  <li>
                    <strong>
                      {"Cross-Platform:"}
                    </strong>
                    {" Develop on Windows, deploy to Linux containers, run on macOS - your choice"}
                  </li>
                  <li>
                    <strong>
                      {"Built-in Features:"}
                    </strong>
                    {" Authentication, authorization, dependency injection, logging - all included out of the box"}
                  </li>
                  <li>
                    <strong>
                      {"Cloud-Ready:"}
                    </strong>
                    {" Designed for Azure, but works perfectly with AWS, Google Cloud, or on-premises"}
                  </li>
                  <li>
                    <strong>
                      {"Modern Architecture:"}
                    </strong>
                    {" Supports microservices, containers, serverless, and traditional monoliths"}
                  </li>
                  <li>
                    <strong>
                      {"Great Tooling:"}
                    </strong>
                    {" Visual Studio, VS Code, and Rider provide excellent development experience"}
                  </li>
                  <li>
                    <strong>
                      {"Active Community:"}
                    </strong>
                    {" Backed by Microsoft with regular updates and strong enterprise adoption"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use ASP.NET Core?"}
                </h2>
                <p>
                  {"ASP.NET Core excels in these scenarios:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"REST APIs:"}
                    </strong>
                    {" Building backend APIs for mobile apps, SPAs (React, Angular), or third-party integrations"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise Applications:"}
                    </strong>
                    {" Large-scale systems requiring high performance, security, and maintainability"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices:"}
                    </strong>
                    {" Distributed systems with multiple small services communicating via HTTP"}
                  </li>
                  <li>
                    <strong>
                      {"Real-Time Apps:"}
                    </strong>
                    {" Chat applications, live dashboards, notifications using SignalR"}
                  </li>
                  <li>
                    <strong>
                      {"Cloud Applications:"}
                    </strong>
                    {" Azure-native apps, containerized workloads, serverless functions"}
                  </li>
                  <li>
                    <strong>
                      {"E-Commerce Platforms:"}
                    </strong>
                    {" High-traffic sites requiring performance and security"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When to consider alternatives:"}
                  </strong>
                  {" Simple static websites (use static site generators), or if your team is exclusively skilled in other ecosystems (Node.js, Django, Spring)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Understanding the MVC Pattern"}
                </h2>
                <p>
                  {"MVC (Model-View-Controller) is like organizing a restaurant:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Model:"}
                    </strong>
                    {" The kitchen (business logic and data) - where the actual work happens"}
                  </li>
                  <li>
                    <strong>
                      {"View:"}
                    </strong>
                    {" The dining area (UI) - what customers see"}
                  </li>
                  <li>
                    <strong>
                      {"Controller:"}
                    </strong>
                    {" The waiter (traffic cop) - takes orders from customers and brings food from kitchen"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// MODEL - Represents data and business logic
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; }
    public bool InStock { get; set; }
}

// CONTROLLER - Handles HTTP requests
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    // Dependency Injection - Framework provides the service
    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    // GET api/products
    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAllProducts()
    {
        var products = await _productService.GetAllAsync();
        return Ok(products);
    }

    // GET api/products/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _productService.GetByIdAsync(id);

        if (product == null)
            return NotFound();

        return Ok(product);
    }

    // POST api/products
    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct(Product product)
    {
        var created = await _productService.CreateAsync(product);
        return CreatedAtAction(nameof(GetProduct), new { id = created.Id }, created);
    }

    // PUT api/products/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, Product product)
    {
        if (id != product.Id)
            return BadRequest();

        await _productService.UpdateAsync(product);
        return NoContent();
    }

    // DELETE api/products/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        await _productService.DeleteAsync(id);
        return NoContent();
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Routing: Directing Traffic"}
                </h2>
                <p>
                  {"Routing is like a GPS for your application - it maps URLs to specific controller actions:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// ATTRIBUTE ROUTING (Recommended for APIs)
[Route("api/[controller]")]
public class CustomersController : ControllerBase
{
    // GET api/customers
    [HttpGet]
    public IActionResult GetAll() { }

    // GET api/customers/123
    [HttpGet("{id}")]
    public IActionResult GetById(int id) { }

    // GET api/customers/123/orders
    [HttpGet("{id}/orders")]
    public IActionResult GetCustomerOrders(int id) { }

    // POST api/customers/search?name=John&city=Kochi
    [HttpPost("search")]
    public IActionResult Search([FromQuery] string name, [FromQuery] string city) { }

    // POST api/customers (data in request body)
    [HttpPost]
    public IActionResult Create([FromBody] Customer customer) { }

    // PUT api/customers/activate/123
    [HttpPut("activate/{id}")]
    public IActionResult Activate(int id) { }
}

// ROUTE CONSTRAINTS
[HttpGet("products/{id:int}")]        // id must be integer
[HttpGet("products/{name:alpha}")]    // name must be alphabetic
[HttpGet("products/{id:range(1,100)}")] // id between 1 and 100

// MULTIPLE ROUTES
[HttpGet]
[Route("api/products")]
[Route("api/items")]  // Both URLs work
public IActionResult GetProducts() { }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Middleware: The Request Pipeline"}
                </h2>
                <p>
                  {"Middleware components are like security checkpoints at an airport. Each request passes through multiple middleware in order before reaching your controller:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// Program.cs - Configuring the middleware pipeline
var builder = WebApplication.CreateBuilder(args);

// Add services to dependency injection container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// MIDDLEWARE PIPELINE (order matters!)

// 1. Exception handling (catches errors from later middleware)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseExceptionHandler("/error");
    app.UseHsts();
}

// 2. HTTPS redirection
app.UseHttpsRedirection();

// 3. Static files (images, CSS, JS)
app.UseStaticFiles();

// 4. Routing
app.UseRouting();

// 5. CORS (if needed)
app.UseCors("AllowAll");

// 6. Authentication (who are you?)
app.UseAuthentication();

// 7. Authorization (what can you do?)
app.UseAuthorization();

// 8. Map controllers
app.MapControllers();

app.Run();

// CUSTOM MIDDLEWARE
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;

    public RequestLoggingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Before the controller
        Console.WriteLine($"Request: {context.Request.Method} {context.Request.Path}");

        await _next(context);  // Call next middleware

        // After the controller
        Console.WriteLine($"Response: {context.Response.StatusCode}");
    }
}

// Register custom middleware
app.UseMiddleware<RequestLoggingMiddleware>();`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Common Middleware Order:"}
                  </strong>
                  {" Exception Handling → HTTPS → Static Files → Routing → CORS → Authentication → Authorization → Endpoints"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Dependency Injection: Smart Object Creation"}
                </h2>
                <p>
                  {"Dependency Injection (DI) is like having a smart assistant who hands you exactly what you need when you need it, without you having to worry about creating it:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// SERVICE INTERFACE
public interface IEmailService
{
    Task SendEmailAsync(string to, string subject, string body);
}

// SERVICE IMPLEMENTATION
public class EmailService : IEmailService
{
    private readonly IConfiguration _config;

    public EmailService(IConfiguration config)
    {
        _config = config;
    }

    public async Task SendEmailAsync(string to, string subject, string body)
    {
        // Email sending logic
        await Task.CompletedTask;
    }
}

// REGISTER SERVICE (Program.cs)
builder.Services.AddScoped<IEmailService, EmailService>();

// SERVICE LIFETIMES
builder.Services.AddTransient<ITransientService, TransientService>();
// New instance every time (lightweight, stateless)

builder.Services.AddScoped<IScopedService, ScopedService>();
// One instance per HTTP request (most common for business logic)

builder.Services.AddSingleton<ISingletonService, SingletonService>();
// One instance for entire application lifetime (use for caching, shared state)

// USE IN CONTROLLER
public class OrdersController : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly ILogger<OrdersController> _logger;

    // Framework automatically injects dependencies
    public OrdersController(IEmailService emailService, ILogger<OrdersController> logger)
    {
        _emailService = emailService;
        _logger = logger;
    }

    [HttpPost("checkout")]
    public async Task<IActionResult> Checkout(Order order)
    {
        // Use injected services
        _logger.LogInformation("Processing order {OrderId}", order.Id);
        await _emailService.SendEmailAsync(order.CustomerEmail, "Order Confirmed", "Thank you!");
        return Ok();
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Validation and Binding"}
                </h2>
                <p>
                  {"Validation ensures data entering your system is correct and safe, like a bouncer checking IDs at a club:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// MODEL WITH VALIDATION ATTRIBUTES
public class RegisterRequest
{
    [Required(ErrorMessage = "Name is required")]
    [StringLength(100, MinimumLength = 2)]
    public string Name { get; set; }

    [Required]
    [EmailAddress(ErrorMessage = "Invalid email format")]
    public string Email { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 8, ErrorMessage = "Password must be 8-100 characters")]
    [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$",
        ErrorMessage = "Password must contain uppercase, lowercase, and number")]
    public string Password { get; set; }

    [Range(18, 120, ErrorMessage = "Age must be between 18 and 120")]
    public int Age { get; set; }

    [Phone]
    public string PhoneNumber { get; set; }

    [Url]
    public string Website { get; set; }
}

// CONTROLLER WITH VALIDATION
[HttpPost("register")]
public async Task<IActionResult> Register([FromBody] RegisterRequest request)
{
    // ModelState automatically checks validation attributes
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);  // Returns 400 with error details
    }

    // Validation passed - proceed with registration
    var user = await _userService.RegisterAsync(request);
    return Ok(user);
}

// CUSTOM VALIDATION
public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext context)
    {
        if (value is DateTime date && date > DateTime.Now)
        {
            return ValidationResult.Success;
        }
        return new ValidationResult("Date must be in the future");
    }
}

// FLUENT VALIDATION (more powerful alternative)
public class RegisterRequestValidator : AbstractValidator<RegisterRequest>
{
    public RegisterRequestValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .Must(BeUniqueEmail).WithMessage("Email already exists");

        RuleFor(x => x.Password)
            .MinimumLength(8)
            .Matches(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$");
    }

    private bool BeUniqueEmail(string email)
    {
        // Check database
        return true;
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Configuration and Environment Management"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=MyApp;..."
  },
  "Jwt": {
    "SecretKey": "your-secret-key",
    "Issuer": "MyApp",
    "ExpiryMinutes": 60
  },
  "EmailSettings": {
    "SmtpServer": "smtp.gmail.com",
    "Port": 587,
    "FromEmail": "noreply@myapp.com"
  }
}

// appsettings.Development.json (overrides for development)
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=MyApp_Dev;..."
  }
}

// STRONGLY-TYPED CONFIGURATION
public class EmailSettings
{
    public string SmtpServer { get; set; }
    public int Port { get; set; }
    public string FromEmail { get; set; }
}

// Program.cs
builder.Services.Configure<EmailSettings>(
    builder.Configuration.GetSection("EmailSettings"));

// USE IN SERVICE
public class EmailService
{
    private readonly EmailSettings _settings;

    public EmailService(IOptions<EmailSettings> settings)
    {
        _settings = settings.Value;
    }

    public void SendEmail()
    {
        var server = _settings.SmtpServer;
        var port = _settings.Port;
    }
}

// READ CONFIGURATION DIRECTLY
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var jwtKey = builder.Configuration["Jwt:SecretKey"];`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling and Logging"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// GLOBAL EXCEPTION HANDLER
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var error = context.Features.Get<IExceptionHandlerFeature>();
        if (error != null)
        {
            var logger = context.RequestServices.GetRequiredService<ILogger<Program>>();
            logger.LogError(error.Error, "Unhandled exception");

            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = 500,
                Message = "An error occurred processing your request"
            });
        }
    });
});

// CONTROLLER-LEVEL ERROR HANDLING
[HttpGet("{id}")]
public async Task<IActionResult> GetProduct(int id)
{
    try
    {
        var product = await _productService.GetByIdAsync(id);

        if (product == null)
            return NotFound(new { Message = $"Product {id} not found" });

        return Ok(product);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Error retrieving product {ProductId}", id);
        return StatusCode(500, new { Message = "Internal server error" });
    }
}

// LOGGING
public class ProductService
{
    private readonly ILogger<ProductService> _logger;

    public ProductService(ILogger<ProductService> logger)
    {
        _logger = logger;
    }

    public async Task<Product> GetProductAsync(int id)
    {
        _logger.LogInformation("Fetching product {ProductId}", id);

        try
        {
            // Business logic
            return product;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to fetch product {ProductId}", id);
            throw;
        }
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices for ASP.NET Core"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use async/await everywhere:"}
                    </strong>
                    {" All I/O operations should be asynchronous for better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Follow RESTful conventions:"}
                    </strong>
                    {" GET for reading, POST for creating, PUT for updating, DELETE for deleting"}
                  </li>
                  <li>
                    <strong>
                      {"Version your APIs:"}
                    </strong>
                    {" Use URL versioning (api/v1/products) or header versioning"}
                  </li>
                  <li>
                    <strong>
                      {"Implement proper error handling:"}
                    </strong>
                    {" Return meaningful error messages with appropriate HTTP status codes"}
                  </li>
                  <li>
                    <strong>
                      {"Use dependency injection:"}
                    </strong>
                    {" Don't create services manually - let the framework inject them"}
                  </li>
                  <li>
                    <strong>
                      {"Validate all inputs:"}
                    </strong>
                    {" Never trust client data - always validate"}
                  </li>
                  <li>
                    <strong>
                      {"Log important events:"}
                    </strong>
                    {" Use structured logging for debugging and monitoring"}
                  </li>
                  <li>
                    <strong>
                      {"Secure your APIs:"}
                    </strong>
                    {" Always use HTTPS, implement authentication/authorization"}
                  </li>
                  <li>
                    <strong>
                      {"Document with Swagger:"}
                    </strong>
                    {" Auto-generate API documentation for easier integration"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"ASP.NET Core vs Other Frameworks"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"vs Node.js/Express:"}
                    </strong>
                    {" ASP.NET Core is faster, strongly-typed, better for enterprise; Node.js better for real-time apps and if team knows JavaScript"}
                  </li>
                  <li>
                    <strong>
                      {"vs Django/Flask:"}
                    </strong>
                    {" ASP.NET Core has better performance, stronger typing; Python frameworks easier to learn, great for data science integration"}
                  </li>
                  <li>
                    <strong>
                      {"vs Spring Boot:"}
                    </strong>
                    {" Very similar in capabilities; ASP.NET Core is faster, Spring Boot has larger ecosystem; choose based on team skills (C# vs Java)"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master ASP.NET Core with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack .NET program covers ASP.NET Core from basics to building production-ready APIs. Learn through hands-on projects with personalized guidance."}
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
                  <Link href="/full-stack-dotnet/articles/csharp-fundamentals" className="related-article-card">
                    <h4>
                      {"C# Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Foundation for ASP.NET Core"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/entity-framework" className="related-article-card">
                    <h4>
                      {"Entity Framework Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Database access for your APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/aspnet-identity" className="related-article-card">
                    <h4>
                      {"ASP.NET Identity"}
                    </h4>
                    {" "}
                    <p>
                      {"Secure your applications"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn ASP.NET Core."} />
    </>
  );
}
