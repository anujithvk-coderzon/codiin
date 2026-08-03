import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Entity Framework Core: Modern ORM for .NET",
  description: "Learn Entity Framework Core - Modern ORM for .NET. Master DbContext, migrations, LINQ queries, and relationships. Code-First vs Database-First explained.",
  keywords: ["Entity Framework Core tutorial", "EF Core", "ORM", "DbContext", "migrations", "LINQ", "database .NET"],
  alternates: { canonical: "/full-stack-dotnet/articles/entity-framework" },
  openGraph: {
    type: "article",
    url: "/full-stack-dotnet/articles/entity-framework",
    title: "Entity Framework Core: Modern ORM for .NET",
    description: "Master Entity Framework Core for seamless database access in .NET applications.",
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
  "headline": "Entity Framework Core: Modern ORM for .NET",
  "description": "Complete guide to Entity Framework Core for database access",
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

export default function FullStackDotnetEntityFrameworkPage() {
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
                {"Entity Framework Core"}
              </span>
            </div>
            <h1>
              {"Entity Framework Core"}
            </h1>
            <p className="article-subtitle">
              {"Modern Object-Relational Mapper for .NET"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"22 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Entity Framework Core?"}
                </h2>
                <p>
                  {"Entity Framework Core (EF Core) is an Object-Relational Mapper (ORM) that lets you work with databases using C# objects instead of writing raw SQL. Think of it as a translator between your C# code and your database - you speak C#, it translates to SQL."}
                </p>
                <p>
                  {"Instead of writing SQL like "}
                  <code>
                    {"SELECT * FROM Products WHERE Price > 100"}
                  </code>
                  {", you write C# like "}
                  <code>
                    {"products.Where(p => p.Price > 100)"}
                  </code>
                  {". Much more natural for developers!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Entity Framework Core?"}
                </h2>
                <p>
                  {"Imagine building a house. You could dig foundations by hand (raw SQL), or use excavators (EF Core). Both work, but one is much faster and less error-prone:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Write C# Instead of SQL:"}
                    </strong>
                    {" Use familiar LINQ queries instead of string-based SQL - fewer syntax errors, better IDE support"}
                  </li>
                  <li>
                    <strong>
                      {"Type Safety:"}
                    </strong>
                    {" Compiler catches database errors before runtime - no more \"column not found\" at 3 AM"}
                  </li>
                  <li>
                    <strong>
                      {"Automatic Database Updates:"}
                    </strong>
                    {" Migrations automatically update database schema when your models change"}
                  </li>
                  <li>
                    <strong>
                      {"Cross-Database Support:"}
                    </strong>
                    {" Same code works with SQL Server, PostgreSQL, MySQL, SQLite - just change connection string"}
                  </li>
                  <li>
                    <strong>
                      {"Navigation Properties:"}
                    </strong>
                    {" Access related data naturally ("}
                    <code>
                      {"order.Customer.Name"}
                    </code>
                    {") instead of complex JOINs"}
                  </li>
                  <li>
                    <strong>
                      {"Change Tracking:"}
                    </strong>
                    {" EF Core automatically tracks changes and generates efficient UPDATE statements"}
                  </li>
                  <li>
                    <strong>
                      {"Performance:"}
                    </strong>
                    {" Built-in caching, lazy loading, and query optimization"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use EF Core?"}
                </h2>
                <p>
                  {"Entity Framework Core is perfect for:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Most Business Applications:"}
                    </strong>
                    {" CRUD operations, data management, enterprise apps"}
                  </li>
                  <li>
                    <strong>
                      {"Rapid Development:"}
                    </strong>
                    {" Quickly prototype and iterate on database schema"}
                  </li>
                  <li>
                    <strong>
                      {"Code-First Projects:"}
                    </strong>
                    {" When you want to design your domain models in C# and generate database from code"}
                  </li>
                  <li>
                    <strong>
                      {"Multi-Database Apps:"}
                    </strong>
                    {" Need to support SQL Server, PostgreSQL, MySQL with same code"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices:"}
                    </strong>
                    {" Each service manages its own database with EF Core"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When to use raw SQL instead:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Complex reporting with advanced SQL features (CTEs, window functions)"}
                  </li>
                  <li>
                    {"Extremely high-performance scenarios where every millisecond counts"}
                  </li>
                  <li>
                    {"Legacy databases with complex stored procedures"}
                  </li>
                  <li>
                    {"Bulk operations (though EF Core 7+ has improved here)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"DbContext: Your Database Gateway"}
                </h2>
                <p>
                  {"DbContext is the main class for interacting with your database. Think of it as your database connection manager and query factory:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// DEFINE YOUR MODELS (C# classes)
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public int CategoryId { get; set; }

    // Navigation property - access related Category
    public Category Category { get; set; }
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }

    // Collection navigation - access all products in this category
    public List<Product> Products { get; set; }
}

// DbContext - Your database connection
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // DbSets represent tables
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    // Configure relationships and constraints
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure Product
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(p => p.Id);
            entity.Property(p => p.Name).IsRequired().HasMaxLength(200);
            entity.Property(p => p.Price).HasColumnType("decimal(18,2)");

            // Define relationship: Product belongs to Category
            entity.HasOne(p => p.Category)
                  .WithMany(c => c.Products)
                  .HasForeignKey(p => p.CategoryId);
        });

        // Seed data
        modelBuilder.Entity<Category>().HasData(
            new Category { Id = 1, Name = "Electronics" },
            new Category { Id = 2, Name = "Books" }
        );
    }
}

// REGISTER IN Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Or PostgreSQL: options.UseNpgsql(connectionString)
// Or SQLite: options.UseSqlite(connectionString)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Code-First vs Database-First"}
                </h2>
                <p>
                  {"Two approaches to using EF Core:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// CODE-FIRST (Recommended for new projects)
// Write C# classes first, generate database from them

Step 1: Define models in C#
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
}

Step 2: Add to DbContext
public DbSet<Customer> Customers { get; set; }

Step 3: Create migration
dotnet ef migrations add InitialCreate

Step 4: Update database
dotnet ef database update

Benefits:
✅ Full control over domain model
✅ Easy version control (migrations are code files)
✅ Great for new projects
✅ Database agnostic

---

// DATABASE-FIRST (For existing databases)
// Start with existing database, generate C# classes from it

Step 1: Have an existing database

Step 2: Scaffold DbContext and models
dotnet ef dbcontext scaffold "Server=localhost;Database=MyDb;..."
    Microsoft.EntityFrameworkCore.SqlServer -o Models

Step 3: Auto-generated models
public partial class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
}

Benefits:
✅ Works with existing databases
✅ Quick setup
✅ Stays in sync with database

Downsides:
⚠️ Models can be overwritten when re-scaffolding
⚠️ Less control over model design`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Most modern projects use Code-First"}
                  </strong>
                  {" because it gives you more control and works better with version control systems."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Migrations: Managing Database Changes"}
                </h2>
                <p>
                  {"Migrations are like Git commits for your database schema. They track changes over time:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// CREATE INITIAL MIGRATION
dotnet ef migrations add InitialCreate

// This generates a migration file:
public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Products",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Name = table.Column<string>(maxLength: 200, nullable: false),
                Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Products", x => x.Id);
            });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "Products");
    }
}

// APPLY MIGRATION TO DATABASE
dotnet ef database update

// ADD NEW PROPERTY TO MODEL
public class Product
{
    // ... existing properties ...
    public string Description { get; set; }  // NEW!
}

// CREATE MIGRATION FOR CHANGE
dotnet ef migrations add AddProductDescription

// APPLY TO DATABASE
dotnet ef database update

// ROLLBACK MIGRATION
dotnet ef database update PreviousMigrationName

// REMOVE LAST MIGRATION (if not applied)
dotnet ef migrations remove

// VIEW MIGRATION HISTORY
dotnet ef migrations list`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Migration Best Practices:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Create migrations frequently - one per logical change"}
                  </li>
                  <li>
                    {"Review generated SQL before applying to production"}
                  </li>
                  <li>
                    {"Test migrations in development first"}
                  </li>
                  <li>
                    {"Never modify applied migrations - create new ones instead"}
                  </li>
                  <li>
                    {"Commit migration files to source control"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"LINQ Queries with EF Core"}
                </h2>
                <p>
                  {"Query databases using natural C# syntax instead of SQL strings:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// INJECT DbContext
public class ProductService
{
    private readonly AppDbContext _context;

    public ProductService(AppDbContext context)
    {
        _context = context;
    }

    // SIMPLE QUERY - Get all products
    public async Task<List<Product>> GetAllProductsAsync()
    {
        return await _context.Products.ToListAsync();
    }

    // FILTER - Where clause
    public async Task<List<Product>> GetExpensiveProductsAsync()
    {
        return await _context.Products
            .Where(p => p.Price > 1000)
            .ToListAsync();
    }

    // SORT - OrderBy
    public async Task<List<Product>> GetProductsByPriceAsync()
    {
        return await _context.Products
            .OrderBy(p => p.Price)
            .ToListAsync();
    }

    // PAGINATION
    public async Task<List<Product>> GetProductsPageAsync(int page, int pageSize)
    {
        return await _context.Products
            .OrderBy(p => p.Name)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }

    // SINGLE ITEM
    public async Task<Product> GetProductByIdAsync(int id)
    {
        // FirstOrDefaultAsync returns null if not found
        return await _context.Products
            .FirstOrDefaultAsync(p => p.Id == id);

        // Alternative: FindAsync (only works with primary key)
        // return await _context.Products.FindAsync(id);
    }

    // JOIN - Include related data
    public async Task<List<Product>> GetProductsWithCategoriesAsync()
    {
        return await _context.Products
            .Include(p => p.Category)  // JOIN with Categories
            .ToListAsync();
    }

    // COMPLEX QUERY - Multiple conditions
    public async Task<List<Product>> SearchProductsAsync(string searchTerm, decimal? minPrice, int? categoryId)
    {
        var query = _context.Products.AsQueryable();

        if (!string.IsNullOrEmpty(searchTerm))
            query = query.Where(p => p.Name.Contains(searchTerm));

        if (minPrice.HasValue)
            query = query.Where(p => p.Price >= minPrice.Value);

        if (categoryId.HasValue)
            query = query.Where(p => p.CategoryId == categoryId.Value);

        return await query
            .Include(p => p.Category)
            .OrderBy(p => p.Name)
            .ToListAsync();
    }

    // AGGREGATIONS
    public async Task<decimal> GetAveragePriceAsync()
    {
        return await _context.Products.AverageAsync(p => p.Price);
    }

    public async Task<int> GetProductCountAsync()
    {
        return await _context.Products.CountAsync();
    }

    // GROUPING
    public async Task<List<CategorySummary>> GetCategorySummaryAsync()
    {
        return await _context.Products
            .GroupBy(p => p.Category)
            .Select(g => new CategorySummary
            {
                CategoryName = g.Key.Name,
                ProductCount = g.Count(),
                AveragePrice = g.Average(p => p.Price),
                TotalValue = g.Sum(p => p.Price)
            })
            .ToListAsync();
    }

    // RAW SQL (when needed)
    public async Task<List<Product>> ExecuteRawSqlAsync()
    {
        return await _context.Products
            .FromSqlRaw("SELECT * FROM Products WHERE Price > {0}", 1000)
            .ToListAsync();
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CRUD Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// CREATE
public async Task<Product> CreateProductAsync(Product product)
{
    _context.Products.Add(product);
    await _context.SaveChangesAsync();  // Executes INSERT
    return product;  // Id is now populated
}

// READ (covered in LINQ section above)

// UPDATE
public async Task UpdateProductAsync(Product product)
{
    // Option 1: Attach and mark as modified
    _context.Products.Update(product);
    await _context.SaveChangesAsync();

    // Option 2: Fetch, modify, save (better for partial updates)
    var existing = await _context.Products.FindAsync(product.Id);
    if (existing != null)
    {
        existing.Name = product.Name;
        existing.Price = product.Price;
        // EF Core tracks changes automatically
        await _context.SaveChangesAsync();
    }
}

// DELETE
public async Task DeleteProductAsync(int id)
{
    var product = await _context.Products.FindAsync(id);
    if (product != null)
    {
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
    }
}

// BULK CREATE
public async Task CreateProductsAsync(List<Product> products)
{
    _context.Products.AddRange(products);
    await _context.SaveChangesAsync();
}

// BULK DELETE
public async Task DeleteProductsByCategoryAsync(int categoryId)
{
    var products = await _context.Products
        .Where(p => p.CategoryId == categoryId)
        .ToListAsync();

    _context.Products.RemoveRange(products);
    await _context.SaveChangesAsync();
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Relationships in EF Core"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// ONE-TO-MANY (Most common)
// Example: One Category has many Products
public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<Product> Products { get; set; }  // Collection navigation
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int CategoryId { get; set; }  // Foreign key
    public Category Category { get; set; }  // Reference navigation
}

// Configuration (optional - EF Core can infer this)
modelBuilder.Entity<Product>()
    .HasOne(p => p.Category)
    .WithMany(c => c.Products)
    .HasForeignKey(p => p.CategoryId);

---

// ONE-TO-ONE
// Example: One User has one Profile
public class User
{
    public int Id { get; set; }
    public string Email { get; set; }
    public UserProfile Profile { get; set; }
}

public class UserProfile
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Bio { get; set; }
    public User User { get; set; }
}

modelBuilder.Entity<User>()
    .HasOne(u => u.Profile)
    .WithOne(p => p.User)
    .HasForeignKey<UserProfile>(p => p.UserId);

---

// MANY-TO-MANY
// Example: Students and Courses
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<Course> Courses { get; set; }
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; }
    public List<Student> Students { get; set; }
}

// EF Core 5+ handles join table automatically!
// Creates StudentCourse table behind the scenes

// To access with extra data on join:
public class StudentCourse
{
    public int StudentId { get; set; }
    public Student Student { get; set; }

    public int CourseId { get; set; }
    public Course Course { get; set; }

    public DateTime EnrolledDate { get; set; }
    public int Grade { get; set; }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Loading Related Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// EAGER LOADING - Load related data upfront
var products = await _context.Products
    .Include(p => p.Category)  // Load Category with Product
    .ToListAsync();

// Access without extra query
var categoryName = products[0].Category.Name;

// MULTIPLE LEVELS
var orders = await _context.Orders
    .Include(o => o.Customer)
        .ThenInclude(c => c.Address)
    .Include(o => o.OrderItems)
        .ThenInclude(oi => oi.Product)
    .ToListAsync();

---

// LAZY LOADING (Automatic - requires configuration)
// Install: Microsoft.EntityFrameworkCore.Proxies

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString)
           .UseLazyLoadingProxies());

// Make navigation properties virtual
public virtual Category Category { get; set; }

// Now accessing Category automatically loads it
var product = await _context.Products.FindAsync(1);
var categoryName = product.Category.Name;  // Automatic query!

---

// EXPLICIT LOADING - Load when needed
var product = await _context.Products.FindAsync(1);

// Later, load Category explicitly
await _context.Entry(product)
    .Reference(p => p.Category)
    .LoadAsync();

// Load collection
var category = await _context.Categories.FindAsync(1);
await _context.Entry(category)
    .Collection(c => c.Products)
    .LoadAsync();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Performance Optimization"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use AsNoTracking for read-only queries:"}
                    </strong>
                    <code>
                      {".AsNoTracking()"}
                    </code>
                    {" - faster, less memory"}
                  </li>
                  <li>
                    <strong>
                      {"Select only needed columns:"}
                    </strong>
                    <code>
                      {".Select(p => new { p.Id, p.Name })"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Use pagination:"}
                    </strong>
                    {" Don't load thousands of rows at once"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid N+1 queries:"}
                    </strong>
                    {" Use "}
                    <code>
                      {".Include()"}
                    </code>
                    {" to eager load related data"}
                  </li>
                  <li>
                    <strong>
                      {"Use compiled queries:"}
                    </strong>
                    {" For frequently executed queries"}
                  </li>
                  <li>
                    <strong>
                      {"Enable query splitting:"}
                    </strong>
                    {" For complex includes"}
                  </li>
                  <li>
                    <strong>
                      {"Use indexes:"}
                    </strong>
                    {" Add indexes in OnModelCreating for frequently queried columns"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// GOOD - Read-only query
var products = await _context.Products
    .AsNoTracking()
    .Where(p => p.Price > 100)
    .ToListAsync();

// BAD - N+1 Query Problem
var categories = await _context.Categories.ToListAsync();
foreach (var category in categories)
{
    var products = await _context.Products
        .Where(p => p.CategoryId == category.Id)
        .ToListAsync();  // Executes one query per category!
}

// GOOD - Single query with Include
var categories = await _context.Categories
    .Include(c => c.Products)
    .ToListAsync();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices for EF Core"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Always use async methods:"}
                    </strong>
                    <code>
                      {"ToListAsync(), FindAsync(), SaveChangesAsync()"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Use DbContext per request:"}
                    </strong>
                    {" Register as Scoped in DI, don't share across requests"}
                  </li>
                  <li>
                    <strong>
                      {"Handle concurrency:"}
                    </strong>
                    {" Use row versioning or optimistic concurrency tokens"}
                  </li>
                  <li>
                    <strong>
                      {"Use transactions for multiple operations:"}
                    </strong>
                    {" Ensure all succeed or all fail together"}
                  </li>
                  <li>
                    <strong>
                      {"Configure relationships explicitly:"}
                    </strong>
                    {" Don't rely solely on conventions"}
                  </li>
                  <li>
                    <strong>
                      {"Use value objects:"}
                    </strong>
                    {" For complex types like Address, Money"}
                  </li>
                  <li>
                    <strong>
                      {"Log SQL queries in development:"}
                    </strong>
                    {" See what EF Core generates"}
                  </li>
                  <li>
                    <strong>
                      {"Test migrations:"}
                    </strong>
                    {" Before applying to production"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Entity Framework Core with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack .NET program covers Entity Framework Core in depth - from basics to advanced optimization. Build real-world data access layers with personalized guidance."}
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
                      {"LINQ queries for EF Core"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/aspnet-core" className="related-article-card">
                    <h4>
                      {"ASP.NET Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Use EF Core in web APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/sql-server" className="related-article-card">
                    <h4>
                      {"SQL Server"}
                    </h4>
                    {" "}
                    <p>
                      {"Database fundamentals"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Entity Framework Core."} />
    </>
  );
}
