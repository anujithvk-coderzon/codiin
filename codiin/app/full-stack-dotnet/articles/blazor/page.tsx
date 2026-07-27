import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Blazor: Build Web UIs with C#",
  description: "Learn Blazor - Build interactive web UIs with C#. Master WebAssembly, Server mode, components, and data binding. Understand when to choose Blazor vs React.",
  keywords: ["Blazor tutorial", "WebAssembly", "Blazor Server", "C# frontend", "components", "Blazor vs React"],
  alternates: { canonical: "/full-stack-dotnet/articles/blazor" },
  openGraph: {
    type: "article",
    url: "/full-stack-dotnet/articles/blazor",
    title: "Blazor: Build Web UIs with C#",
    description: "Master Blazor for building interactive web applications using C# instead of JavaScript.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-dotnet", label: "Learn Full Stack .NET", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Blazor: Build Web UIs with C#",
  "description": "Complete guide to Blazor for building interactive web applications",
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

export default function FullStackDotnetBlazorPage() {
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
                {"Blazor"}
              </span>
            </div>
            <h1>
              {"Blazor"}
            </h1>
            <p className="article-subtitle">
              {"Build Interactive Web UIs with C#"}
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
                  {"What is Blazor?"}
                </h2>
                <p>
                  {"Blazor is a framework for building interactive web UIs using C# instead of JavaScript. Imagine being able to write your entire web application - frontend and backend - in the same language (C#). That's Blazor's superpower!"}
                </p>
                <p>
                  {"Blazor lets you build rich, interactive web applications using .NET and C#, with code that runs either in the browser via WebAssembly or on the server with real-time updates via SignalR."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Blazor?"}
                </h2>
                <p>
                  {"Think of learning a new spoken language. With traditional web dev, you learn C# for backend and JavaScript for frontend - two languages. Blazor lets you use just C# for everything:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"One Language, Full Stack:"}
                    </strong>
                    {" Write C# for both client and server - no context switching between languages"}
                  </li>
                  <li>
                    <strong>
                      {"Share Code:"}
                    </strong>
                    {" Reuse models, validation logic, and utilities between client and server"}
                  </li>
                  <li>
                    <strong>
                      {"Type Safety:"}
                    </strong>
                    {" Catch errors at compile-time instead of runtime in the browser"}
                  </li>
                  <li>
                    <strong>
                      {"Performance:"}
                    </strong>
                    {" WebAssembly runs near-native speed; Server mode reduces client download size"}
                  </li>
                  <li>
                    <strong>
                      {"Leverage .NET Ecosystem:"}
                    </strong>
                    {" Use NuGet packages, LINQ, async/await - all the C# features you know"}
                  </li>
                  <li>
                    <strong>
                      {"Strong Tooling:"}
                    </strong>
                    {" Visual Studio IntelliSense, debugging, and refactoring work for frontend code too"}
                  </li>
                  <li>
                    <strong>
                      {"SEO-Friendly:"}
                    </strong>
                    {" Server-side rendering available for search engine optimization"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Blazor WebAssembly vs Blazor Server"}
                </h2>
                <p>
                  {"Blazor comes in two flavors, like having ice cream delivered (Server) vs making it yourself (WebAssembly):"}
                </p>
                <div className="code-block">
                  <pre><code>{`BLAZOR WEBASSEMBLY (Client-Side)
─────────────────────────────────
How it works:
1. Downloads .NET runtime + your app to browser
2. Runs entirely in browser using WebAssembly
3. No server connection needed after initial load

Think of it as: Installing a desktop app in your browser

Pros:
✅ Works offline after initial load
✅ Reduced server load (logic runs on client)
✅ Can be hosted on static file servers (CDN)
✅ Fast after initial load

Cons:
⚠️ Large initial download (2-3 MB for .NET runtime)
⚠️ Slower initial load time
⚠️ No access to server resources directly
⚠️ Code visible to users (can be decompiled)

Best for:
- Progressive Web Apps (PWAs)
- Apps that need offline support
- Apps with heavy client-side logic
- Public-facing applications

---

BLAZOR SERVER (Server-Side)
───────────────────────────
How it works:
1. Small JavaScript downloads to browser
2. Establishes SignalR connection to server
3. UI events sent to server, DOM updates sent back

Think of it as: Remote desktop for your app

Pros:
✅ Small download size (~250 KB)
✅ Fast initial load
✅ Full .NET runtime on server
✅ Code stays on server (secure)
✅ Works on older browsers

Cons:
⚠️ Requires constant server connection
⚠️ Higher server resource usage
⚠️ Latency for every interaction
⚠️ Doesn't work offline

Best for:
- Internal enterprise apps
- Apps with sensitive business logic
- Apps targeting older devices
- Rapid prototyping

---

HYBRID APPROACH
───────────────
Blazor Auto (.NET 8+) can switch between Server and WebAssembly automatically!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Blazor?"}
                </h2>
                <p>
                  {"Blazor is perfect for:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {".NET Teams:"}
                    </strong>
                    {" Your team already knows C# and .NET - no need to learn JavaScript frameworks"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise Internal Apps:"}
                    </strong>
                    {" Admin panels, dashboards, management tools where offline support isn't critical"}
                  </li>
                  <li>
                    <strong>
                      {"Code Sharing:"}
                    </strong>
                    {" Need to share models, validation, and logic between client and server"}
                  </li>
                  <li>
                    <strong>
                      {"Progressive Web Apps:"}
                    </strong>
                    {" With Blazor WebAssembly for offline-capable applications"}
                  </li>
                  <li>
                    <strong>
                      {"Rapid Prototyping:"}
                    </strong>
                    {" Blazor Server lets you build and test quickly"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When NOT to use Blazor:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"SEO is critical (use React with SSR, Next.js, or Blazor with pre-rendering)"}
                  </li>
                  <li>
                    {"Team is experienced in React/Vue/Angular but not .NET"}
                  </li>
                  <li>
                    {"Need maximum performance for animations/games (use vanilla JS or React)"}
                  </li>
                  <li>
                    {"Building mobile apps primarily (use React Native or .NET MAUI)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Blazor Components: Building Blocks"}
                </h2>
                <p>
                  {"Components are like LEGO blocks - reusable pieces of UI. Here's a simple component:"}
                </p>
                <div className="code-block">
                  <pre><code>{`@* Counter.razor - A simple component *@
<div class="counter">
    <h3>Counter</h3>
    <p>Current count: @currentCount</p>
    <button class="btn btn-primary" @onclick="IncrementCount">Click me</button>
</div>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}

---

@* ProductCard.razor - Component with parameters *@
<div class="product-card">
    <h4>@Product.Name</h4>
    <p class="price">@Product.Price.ToString("C")</p>
    <button @onclick="OnAddToCart">Add to Cart</button>
</div>

@code {
    // Input parameter
    [Parameter]
    public Product Product { get; set; }

    // Output event
    [Parameter]
    public EventCallback<Product> OnAddToCart { get; set; }
}

---

@* Using the component in a page *@
@page "/products"

<h2>Our Products</h2>

@foreach (var product in products)
{
    <ProductCard Product="product" OnAddToCart="HandleAddToCart" />
}

@code {
    private List<Product> products = new();

    protected override async Task OnInitializedAsync()
    {
        products = await ProductService.GetProductsAsync();
    }

    private void HandleAddToCart(Product product)
    {
        // Add to cart logic
        Console.WriteLine($"Added {product.Name} to cart");
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Binding: Connecting UI and Code"}
                </h2>
                <div className="code-block">
                  <pre><code>{`@* ONE-WAY BINDING (display data) *@
<p>Hello, @userName!</p>
<p>Price: @product.Price.ToString("C")</p>

---

@* TWO-WAY BINDING (form inputs) *@
<input @bind="userName" />
<p>You typed: @userName</p>

@* Bind with event *@
<input @bind="searchTerm" @bind:event="oninput" />

@code {
    private string userName = "Guest";
    private string searchTerm = "";
}

---

@* BINDING TO COMPLEX OBJECTS *@
<EditForm Model="@customer" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    <ValidationSummary />

    <div class="form-group">
        <label>Name:</label>
        <InputText @bind-Value="customer.Name" class="form-control" />
        <ValidationMessage For="@(() => customer.Name)" />
    </div>

    <div class="form-group">
        <label>Email:</label>
        <InputText @bind-Value="customer.Email" class="form-control" />
        <ValidationMessage For="@(() => customer.Email)" />
    </div>

    <div class="form-group">
        <label>Age:</label>
        <InputNumber @bind-Value="customer.Age" class="form-control" />
    </div>

    <div class="form-group">
        <label>Active:</label>
        <InputCheckbox @bind-Value="customer.IsActive" />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</EditForm>

@code {
    private Customer customer = new();

    private async Task HandleSubmit()
    {
        await CustomerService.SaveAsync(customer);
        // Show success message
    }
}

---

@* EVENT HANDLING *@
<button @onclick="HandleClick">Click me</button>
<button @onclick="() => HandleClickWithParameter(42)">With parameter</button>
<button @onclick="async () => await HandleAsyncClick()">Async click</button>

<input @onchange="HandleInputChange" />
<input @oninput="HandleInputTyping" />

@code {
    private void HandleClick()
    {
        Console.WriteLine("Button clicked!");
    }

    private void HandleClickWithParameter(int id)
    {
        Console.WriteLine($"Clicked with id: {id}");
    }

    private async Task HandleAsyncClick()
    {
        await Task.Delay(1000);
        Console.WriteLine("Async operation completed");
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Component Lifecycle"}
                </h2>
                <p>
                  {"Components have a lifecycle, like a plant growing: seed → sprout → flower → wither. Here are the key stages:"}
                </p>
                <div className="code-block">
                  <pre><code>{`@code {
    // 1. CONSTRUCTOR - Component created (rarely used)
    public MyComponent()
    {
        // Avoid doing work here
    }

    // 2. SET PARAMETERS - Parameters assigned
    public override void SetParametersAsync(ParameterView parameters)
    {
        // Advanced: intercept parameter setting
    }

    // 3. INITIALIZED - Component initialized (before first render)
    protected override void OnInitialized()
    {
        // Initialize data
        userName = "Guest";
    }

    // ASYNC VERSION (most commonly used)
    protected override async Task OnInitializedAsync()
    {
        // Load data from API
        products = await ProductService.GetProductsAsync();
    }

    // 4. PARAMETERS SET - After parameters are set
    protected override void OnParametersSet()
    {
        // React to parameter changes
        if (ProductId != previousProductId)
        {
            // Product changed, reload data
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        await LoadProductAsync(ProductId);
    }

    // 5. AFTER RENDER - After component rendered to DOM
    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender)
        {
            // Run once after first render
            // Good for JavaScript interop
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeVoidAsync("initializeChart", chartData);
        }
    }

    // 6. DISPOSE - Component removed from UI
    public void Dispose()
    {
        // Clean up resources
        // Unsubscribe from events
        timer?.Dispose();
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dependency Injection in Blazor"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// REGISTER SERVICES (Program.cs)
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddHttpClient<IProductService, ProductService>(client =>
{
    client.BaseAddress = new Uri("https://api.example.com");
});

---

// INJECT IN COMPONENT
@inject IProductService ProductService
@inject NavigationManager Navigation
@inject IJSRuntime JSRuntime

<h2>Products</h2>

@if (products == null)
{
    <p>Loading...</p>
}
else
{
    @foreach (var product in products)
    {
        <div>@product.Name - @product.Price.ToString("C")</div>
    }
}

@code {
    private List<Product> products;

    protected override async Task OnInitializedAsync()
    {
        products = await ProductService.GetAllAsync();
    }

    private void NavigateToDetails(int id)
    {
        Navigation.NavigateTo($"/products/{id}");
    }

    private async Task ShowAlert()
    {
        await JSRuntime.InvokeVoidAsync("alert", "Hello from Blazor!");
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Routing and Navigation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`@* BASIC ROUTING *@
@page "/products"

<h2>All Products</h2>

---

@* ROUTE WITH PARAMETER *@
@page "/products/{id:int}"

<h2>Product Details - ID: @Id</h2>

@code {
    [Parameter]
    public int Id { get; set; }

    protected override async Task OnParametersSetAsync()
    {
        product = await ProductService.GetByIdAsync(Id);
    }
}

---

@* MULTIPLE ROUTES *@
@page "/products"
@page "/items"
@page "/shop"

---

@* OPTIONAL PARAMETER *@
@page "/search/{searchTerm?}"

@code {
    [Parameter]
    public string SearchTerm { get; set; }
}

---

@* NAVIGATION *@
@inject NavigationManager Navigation

<button @onclick='() => Navigation.NavigateTo("/products")'>
    Go to Products
</button>

<button @onclick="NavigateToProduct">View Product</button>

@code {
    private void NavigateToProduct()
    {
        Navigation.NavigateTo($"/products/{productId}");
    }
}

---

@* NAVIGATION LINKS *@
<NavLink href="/products" Match="NavLinkMatch.All">
    Products
</NavLink>

<NavLink href="/products/123">
    Product 123
</NavLink>

@* Active class automatically applied when route matches *@`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Calling APIs from Blazor"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// PRODUCT SERVICE
public class ProductService
{
    private readonly HttpClient _http;

    public ProductService(HttpClient http)
    {
        _http = http;
    }

    public async Task<List<Product>> GetAllAsync()
    {
        return await _http.GetFromJsonAsync<List<Product>>("api/products");
    }

    public async Task<Product> GetByIdAsync(int id)
    {
        return await _http.GetFromJsonAsync<Product>($"api/products/{id}");
    }

    public async Task<Product> CreateAsync(Product product)
    {
        var response = await _http.PostAsJsonAsync("api/products", product);
        return await response.Content.ReadFromJsonAsync<Product>();
    }

    public async Task UpdateAsync(int id, Product product)
    {
        await _http.PutAsJsonAsync($"api/products/{id}", product);
    }

    public async Task DeleteAsync(int id)
    {
        await _http.DeleteAsync($"api/products/{id}");
    }
}

---

// USE IN COMPONENT
@inject IProductService ProductService

@if (isLoading)
{
    <p>Loading...</p>
}
else if (error != null)
{
    <p class="error">Error: @error</p>
}
else
{
    <ul>
        @foreach (var product in products)
        {
            <li>@product.Name - @product.Price.ToString("C")</li>
        }
    </ul>
}

@code {
    private List<Product> products;
    private bool isLoading = true;
    private string error;

    protected override async Task OnInitializedAsync()
    {
        try
        {
            products = await ProductService.GetAllAsync();
        }
        catch (Exception ex)
        {
            error = ex.Message;
        }
        finally
        {
            isLoading = false;
        }
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"State Management"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// SHARED STATE SERVICE
public class CartService
{
    private List<CartItem> items = new();
    public event Action OnChange;

    public List<CartItem> Items => items;

    public void AddItem(Product product)
    {
        var existingItem = items.FirstOrDefault(i => i.ProductId == product.Id);
        if (existingItem != null)
        {
            existingItem.Quantity++;
        }
        else
        {
            items.Add(new CartItem
            {
                ProductId = product.Id,
                ProductName = product.Name,
                Price = product.Price,
                Quantity = 1
            });
        }
        NotifyStateChanged();
    }

    public void RemoveItem(int productId)
    {
        var item = items.FirstOrDefault(i => i.ProductId == productId);
        if (item != null)
        {
            items.Remove(item);
            NotifyStateChanged();
        }
    }

    public decimal GetTotal()
    {
        return items.Sum(i => i.Price * i.Quantity);
    }

    private void NotifyStateChanged() => OnChange?.Invoke();
}

// REGISTER AS SCOPED
builder.Services.AddScoped<CartService>();

---

// USE IN COMPONENT
@inject CartService CartService
@implements IDisposable

<h3>Shopping Cart (@CartService.Items.Count items)</h3>
<p>Total: @CartService.GetTotal().ToString("C")</p>

@code {
    protected override void OnInitialized()
    {
        CartService.OnChange += StateHasChanged;
    }

    public void Dispose()
    {
        CartService.OnChange -= StateHasChanged;
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Blazor vs React: When to Choose What?"}
                </h2>
                <div className="code-block">
                  <pre><code>{`CHOOSE BLAZOR WHEN:
───────────────────
✅ Team knows C# but not JavaScript
✅ Building internal enterprise apps
✅ Want to share code between client/server
✅ Need strong typing and compile-time safety
✅ Working within .NET ecosystem
✅ Blazor Server is acceptable (internal apps)
✅ Building Progressive Web Apps with offline support

CHOOSE REACT WHEN:
──────────────────
✅ Team knows JavaScript/TypeScript well
✅ SEO is critical (better SSR story with Next.js)
✅ Need largest ecosystem of components/libraries
✅ Building public-facing consumer apps
✅ Mobile app needed (React Native)
✅ Maximum animation/interaction performance required
✅ Need flexibility of JavaScript ecosystem

REALITY CHECK:
──────────────
Both are excellent frameworks. Choice often comes down to:
- Team skills (C# vs JavaScript)
- Project requirements (internal vs public)
- Ecosystem needs (.NET vs Node.js)

Many companies use BOTH:
- Blazor for internal admin panels
- React for customer-facing apps`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices for Blazor"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Keep components small:"}
                    </strong>
                    {" One component, one responsibility"}
                  </li>
                  <li>
                    <strong>
                      {"Use async/await:"}
                    </strong>
                    {" All I/O operations should be async"}
                  </li>
                  <li>
                    <strong>
                      {"Implement IDisposable:"}
                    </strong>
                    {" Clean up event subscriptions and timers"}
                  </li>
                  <li>
                    <strong>
                      {"Use proper lifecycle methods:"}
                    </strong>
                    {" OnInitializedAsync for data loading"}
                  </li>
                  <li>
                    <strong>
                      {"State management:"}
                    </strong>
                    {" Use services for shared state across components"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize rendering:"}
                    </strong>
                    {" Use @key for lists, ShouldRender for optimization"}
                  </li>
                  <li>
                    <strong>
                      {"Handle loading states:"}
                    </strong>
                    {" Show spinners, don't leave users guessing"}
                  </li>
                  <li>
                    <strong>
                      {"Error handling:"}
                    </strong>
                    {" Use try-catch and display friendly error messages"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Blazor with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack .NET program covers both Blazor and React, giving you flexibility to choose the right tool for each project. Build real applications with personalized guidance."}
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
                      {"Foundation for Blazor"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/aspnet-core" className="related-article-card">
                    <h4>
                      {"ASP.NET Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs for Blazor"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/aspnet-identity" className="related-article-card">
                    <h4>
                      {"ASP.NET Identity"}
                    </h4>
                    {" "}
                    <p>
                      {"Add authentication to Blazor"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-dotnet">
                    {"Full Stack .NET"}
                  </Link>
                </li>
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
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Connect"}
              </h4>
              <ul>
                <li>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
              </ul>
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Blazor."} />
    </>
  );
}
