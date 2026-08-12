import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Azure Cloud: Deploy .NET Applications",
  description: "Learn Azure Cloud for .NET - App Service, Azure SQL, Functions, and deployment. Understand why Azure is perfect for .NET and when to use each service.",
  keywords: ["Azure tutorial", "Azure App Service", "Azure Functions", "Azure SQL", "cloud deployment .NET"],
  alternates: { canonical: "/full-stack-dotnet/articles/azure-cloud" },
  openGraph: {
    type: "article",
    url: "/full-stack-dotnet/articles/azure-cloud",
    title: "Azure Cloud: Deploy .NET Applications",
    description: "Master Azure cloud services for deploying and scaling .NET applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-dotnet", label: "Learn Full Stack .NET", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Azure Cloud: Deploy .NET Applications",
  "description": "Complete guide to Azure cloud services for .NET developers",
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

export default function FullStackDotnetAzureCloudPage() {
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
                {"Azure Cloud"}
              </span>
            </div>
            <h1>
              {"Azure Cloud"}
            </h1>
            <p className="article-subtitle">
              {"Deploy and Scale .NET Applications in the Cloud"}
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
                  {"What is Azure?"}
                </h2>
                <p>
                  {"Microsoft Azure is a cloud computing platform with over 200 services - from hosting websites to AI and machine learning. Think of it as renting a data center where you can run your applications without buying physical servers."}
                </p>
                <p>
                  {"For .NET developers, Azure is like a native home - seamless integration, one-click deployments, and tools designed specifically for .NET applications."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Azure for .NET?"}
                </h2>
                <p>
                  {"Imagine you're building with LEGO. You could use generic blocks (AWS/GCP), or LEGO's own special kits designed for your specific project (Azure for .NET):"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Native .NET Integration:"}
                    </strong>
                    {" Visual Studio deploys directly to Azure with one click - no complex configuration"}
                  </li>
                  <li>
                    <strong>
                      {"Cost-Effective for .NET:"}
                    </strong>
                    {" Azure Hybrid Benefit lets you use existing Windows licenses, saving up to 40%"}
                  </li>
                  <li>
                    <strong>
                      {"Best Performance:"}
                    </strong>
                    {" Azure optimized for .NET workloads - ASP.NET Core runs fastest on Azure App Service"}
                  </li>
                  <li>
                    <strong>
                      {"Managed Services:"}
                    </strong>
                    {" Azure SQL, App Service, Functions - less ops work, more development time"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise-Grade Security:"}
                    </strong>
                    {" Azure Active Directory, Key Vault, and compliance certifications"}
                  </li>
                  <li>
                    <strong>
                      {"Excellent Tooling:"}
                    </strong>
                    {" Azure Portal, CLI, ARM templates, Bicep - everything works seamlessly with .NET"}
                  </li>
                  <li>
                    <strong>
                      {"Global Reach:"}
                    </strong>
                    {" 60+ regions worldwide - deploy close to your users"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Azure?"}
                </h2>
                <p>
                  {"Azure is perfect for:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {".NET Applications:"}
                    </strong>
                    {" Best cloud platform for ASP.NET Core, Blazor, and .NET APIs"}
                  </li>
                  <li>
                    <strong>
                      {"Microsoft Ecosystem:"}
                    </strong>
                    {" Already using Office 365, Active Directory, or SQL Server"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise Applications:"}
                    </strong>
                    {" Need compliance, security, and enterprise support"}
                  </li>
                  <li>
                    <strong>
                      {"Hybrid Cloud:"}
                    </strong>
                    {" Some workloads on-premises, some in cloud (Azure Arc)"}
                  </li>
                  <li>
                    <strong>
                      {"Windows Workloads:"}
                    </strong>
                    {" Running Windows Server or legacy .NET Framework apps"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Consider alternatives when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Team exclusively uses AWS/GCP and you're not using .NET"}
                  </li>
                  <li>
                    {"Need specific AWS-only services (though Azure has equivalents for most)"}
                  </li>
                  <li>
                    {"Working with non-Microsoft technologies primarily (though Azure supports them too)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure App Service: Host Your Web Apps"}
                </h2>
                <p>
                  {"App Service is Platform-as-a-Service (PaaS) for hosting web applications. Think of it as a managed server where you just upload your code and Azure handles everything else:"}
                </p>
                <div className="code-block">
                  <pre><code>{`WHAT IS APP SERVICE?
────────────────────
A fully managed platform for hosting:
- ASP.NET Core Web APIs
- Blazor applications
- Web apps with MVC
- Node.js, Python, Java apps too

Azure manages:
✅ Operating system updates
✅ Load balancing
✅ SSL certificates
✅ Auto-scaling
✅ Monitoring and logging

You focus on:
📝 Writing code
🚀 Deploying
📊 Monitoring performance

---

DEPLOYMENT METHODS
──────────────────
1. Visual Studio (One-Click)
   - Right-click project → Publish
   - Select Azure App Service
   - Click Publish

2. Azure CLI
   az webapp up --name myapp --resource-group mygroup

3. GitHub Actions (CI/CD)
   - Push to main branch
   - Automatic deployment

4. Docker Container
   - Deploy containerized apps
   - Great for microservices

---

PRICING TIERS
─────────────
Free (F1):
- 1 GB RAM, 1 GB storage
- 60 CPU minutes/day
- Good for: Learning, testing

Basic (B1): ~$13/month
- 1.75 GB RAM, 10 GB storage
- Custom domains, SSL
- Good for: Small production apps

Standard (S1): ~$70/month
- Auto-scaling (up to 10 instances)
- Daily backups
- Deployment slots (staging/production)
- Good for: Production apps

Premium (P1v3): ~$100/month
- More powerful hardware
- Better performance
- Good for: High-traffic apps`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"When to use App Service:"}
                  </strong>
                  {" Web APIs, web applications, microservices that run continuously."}
                </p>
                <p>
                  <strong>
                    {"When NOT to use:"}
                  </strong>
                  {" Background jobs (use Azure Functions), batch processing (use Azure Batch), extremely high-performance needs (use VMs or containers)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Functions: Serverless Computing"}
                </h2>
                <p>
                  {"Azure Functions is serverless compute - run code without managing servers. You only pay when your code runs, like paying for electricity only when lights are on:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// HTTP TRIGGER - Triggered by HTTP request
[FunctionName("GetProduct")]
public static async Task<IActionResult> GetProduct(
    [HttpTrigger(AuthorizationLevel.Function, "get", Route = "products/{id}")]
    HttpRequest req,
    int id,
    ILogger log)
{
    log.LogInformation($"Getting product {id}");

    var product = await _productService.GetByIdAsync(id);

    if (product == null)
        return new NotFoundResult();

    return new OkObjectResult(product);
}

---

// TIMER TRIGGER - Run on schedule
[FunctionName("CleanupOldData")]
public static async Task CleanupOldData(
    [TimerTrigger("0 0 2 * * *")] TimerInfo timer,  // 2 AM daily
    ILogger log)
{
    log.LogInformation("Starting cleanup job");
    await _cleanupService.DeleteOldRecordsAsync();
}

---

// QUEUE TRIGGER - Process messages from queue
[FunctionName("ProcessOrder")]
public static async Task ProcessOrder(
    [QueueTrigger("orders")] Order order,
    ILogger log)
{
    log.LogInformation($"Processing order {order.Id}");
    await _orderService.ProcessAsync(order);
}

---

// BLOB TRIGGER - Process uploaded files
[FunctionName("ProcessImage")]
public static async Task ProcessImage(
    [BlobTrigger("uploads/{name}")] Stream image,
    string name,
    ILogger log)
{
    log.LogInformation($"Processing image: {name}");
    var resized = await _imageService.ResizeAsync(image);
    // Save resized image
}

---

WHEN TO USE FUNCTIONS
─────────────────────
✅ Event-driven tasks (file uploaded, message received)
✅ Scheduled jobs (cleanup, reports, backups)
✅ Webhooks and API integrations
✅ Microservices architecture
✅ Background processing
✅ Cost-sensitive workloads (pay per execution)

WHEN NOT TO USE
───────────────
❌ Long-running processes (5-10 min limit on consumption plan)
❌ Applications requiring persistent state
❌ Real-time WebSocket connections
❌ CPU-intensive operations for extended periods

PRICING
───────
Consumption Plan:
- First 1 million executions FREE
- $0.20 per million executions
- $0.000016 per GB-second
- Perfect for: Occasional tasks, low traffic

Premium Plan: ~$150/month
- Pre-warmed instances (no cold start)
- VNet integration
- Unlimited execution time
- Perfect for: Production microservices`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure SQL Database: Managed Database"}
                </h2>
                <p>
                  {"Azure SQL is a fully managed SQL Server in the cloud. No server management, automatic backups, built-in high availability:"}
                </p>
                <div className="code-block">
                  <pre><code>{`WHAT IS AZURE SQL?
──────────────────
Managed SQL Server with:
✅ Automatic backups (point-in-time restore)
✅ Automatic updates and patching
✅ Built-in high availability (99.99% SLA)
✅ Intelligent performance tuning
✅ Advanced security features
✅ Geo-replication for disaster recovery

---

CONNECTION STRING
─────────────────
// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=tcp:myserver.database.windows.net,1433;
                         Database=mydb;
                         User ID=admin;
                         Password=SecurePassword123;
                         Encrypt=True;
                         TrustServerCertificate=False;"
  }
}

// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

---

DEPLOYMENT OPTIONS
──────────────────
1. Single Database
   - One database, dedicated resources
   - Best for: Most applications

2. Elastic Pool
   - Share resources across multiple databases
   - Best for: SaaS with many customer databases

3. Managed Instance
   - Nearly 100% SQL Server compatibility
   - Best for: Migrating existing SQL Server

---

PRICING
───────
Basic: ~$5/month
- 2 GB storage
- Good for: Development, testing

Standard S0: ~$15/month
- 250 GB storage
- 10 DTUs (Database Transaction Units)
- Good for: Small production apps

Premium P1: ~$465/month
- 500 GB storage
- 125 DTUs
- Good for: High-performance apps

Serverless (Auto-scaling): $0.50/vCore-hour
- Scales automatically based on load
- Pauses when inactive
- Good for: Intermittent workloads

---

SECURITY FEATURES
─────────────────
- Firewall rules (IP whitelist)
- Virtual Network integration
- Transparent Data Encryption (TDE)
- Always Encrypted (sensitive data)
- Advanced Threat Protection
- Auditing and compliance`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Azure SQL vs SQL Server on VM:"}
                  </strong>
                  {" Azure SQL is managed (no maintenance), while VM gives you full control but requires you to manage everything."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Deploying .NET Apps to Azure"}
                </h2>
                <div className="code-block">
                  <pre><code>{`METHOD 1: VISUAL STUDIO (EASIEST)
──────────────────────────────────
1. Right-click project → Publish
2. Select "Azure"
3. Choose "Azure App Service (Windows)"
4. Sign in to Azure
5. Create new or select existing App Service
6. Click "Publish"

Done! Your app is live.

---

METHOD 2: AZURE CLI
───────────────────
# Login to Azure
az login

# Create resource group
az group create --name myResourceGroup --location eastus

# Create App Service plan
az appservice plan create --name myPlan --resource-group myResourceGroup --sku B1

# Create web app
az webapp create --name myUniqueAppName --resource-group myResourceGroup --plan myPlan

# Deploy from local folder
az webapp up --name myUniqueAppName --resource-group myResourceGroup

---

METHOD 3: GITHUB ACTIONS (CI/CD)
─────────────────────────────────
# .github/workflows/azure-deploy.yml
name: Deploy to Azure

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Setup .NET
      uses: actions/setup-dotnet@v1
      with:
        dotnet-version: '8.0.x'

    - name: Build
      run: dotnet build --configuration Release

    - name: Publish
      run: dotnet publish -c Release -o \${{env.DOTNET_ROOT}}/myapp

    - name: Deploy to Azure
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'myUniqueAppName'
        publish-profile: \${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: \${{env.DOTNET_ROOT}}/myapp

---

METHOD 4: DOCKER CONTAINER
──────────────────────────
# Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "./"]
RUN dotnet restore "MyApp.csproj"
COPY . .
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]

# Build and push
docker build -t myapp .
docker tag myapp myregistry.azurecr.io/myapp:latest
docker push myregistry.azurecr.io/myapp:latest

# Deploy to App Service
az webapp create --name myapp --resource-group mygroup --plan myplan --deployment-container-image-name myregistry.azurecr.io/myapp:latest`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Other Essential Azure Services"}
                </h2>
                <div className="code-block">
                  <pre><code>{`AZURE BLOB STORAGE
──────────────────
Store files (images, documents, backups)

Use cases:
- User profile pictures
- Document uploads
- Application logs
- Static website hosting

Pricing: ~$0.018/GB per month

// C# Code
var blobServiceClient = new BlobServiceClient(connectionString);
var containerClient = blobServiceClient.GetBlobContainerClient("uploads");
var blobClient = containerClient.GetBlobClient("photo.jpg");
await blobClient.UploadAsync(fileStream);

---

AZURE KEY VAULT
───────────────
Securely store secrets, keys, certificates

Use cases:
- Database connection strings
- API keys
- Encryption keys
- SSL certificates

// C# Code
var client = new SecretClient(new Uri(keyVaultUrl), new DefaultAzureCredential());
var secret = await client.GetSecretAsync("DatabasePassword");
var password = secret.Value.Value;

---

AZURE SERVICE BUS
─────────────────
Enterprise message queue

Use cases:
- Microservices communication
- Decouple applications
- Guaranteed message delivery
- Publish/Subscribe patterns

Pricing: ~$0.05 per million operations

---

AZURE REDIS CACHE
─────────────────
In-memory cache for performance

Use cases:
- Session state
- Frequently accessed data
- Reduce database load

// C# Code
var redis = ConnectionMultiplexer.Connect(connectionString);
var db = redis.GetDatabase();
await db.StringSetAsync("user:123", userJson);
var cached = await db.StringGetAsync("user:123");

---

AZURE APPLICATION INSIGHTS
───────────────────────────
Application monitoring and analytics

Features:
- Live metrics dashboard
- Request tracking
- Exception logging
- Performance monitoring
- Custom events and metrics

// Automatic in ASP.NET Core
builder.Services.AddApplicationInsightsTelemetry();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Azure Architecture Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`PATTERN 1: SIMPLE WEB APP
─────────────────────────
┌─────────────────┐
│  Azure App      │
│  Service        │──► Azure SQL Database
│  (ASP.NET Core) │
└─────────────────┘
        │
        ▼
   Azure Blob Storage

Cost: ~$30-100/month
Good for: Small to medium apps

---

PATTERN 2: MICROSERVICES
────────────────────────
                  ┌─────────────┐
                  │ Azure API   │
                  │ Management  │
                  └──────┬──────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
    ┌─────────┐    ┌─────────┐    ┌─────────┐
    │Function │    │Function │    │Function │
    │Service A│    │Service B│    │Service C│
    └────┬────┘    └────┬────┘    └────┬────┘
         │              │              │
         ▼              ▼              ▼
    Azure SQL    Service Bus    Cosmos DB

Cost: ~$200-500/month
Good for: Scalable, distributed systems

---

PATTERN 3: SERVERLESS
─────────────────────
Event Grid ──► Azure Functions ──► Cosmos DB
                      │
                      ▼
              Storage Queue ──► Azure Functions ──► SendGrid

Cost: ~$10-50/month (pay per use)
Good for: Event-driven, low-traffic apps

---

PATTERN 4: ENTERPRISE
─────────────────────
                   Azure Front Door
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
   App Service 1   App Service 2   App Service 3
   (West US)      (East US)       (Europe)
          │               │               │
          └───────────────┼───────────────┘
                          ▼
                  Azure SQL (Geo-Replicated)
                          │
                  ┌───────┴────────┐
                  ▼                ▼
           Azure Cache      Application
           for Redis        Insights

Cost: ~$1,000+/month
Good for: Global, high-availability apps`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cost Optimization Tips"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start Small:"}
                    </strong>
                    {" Use Basic or Free tiers for development, scale up for production"}
                  </li>
                  <li>
                    <strong>
                      {"Use Serverless:"}
                    </strong>
                    {" Functions and Serverless SQL for intermittent workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Auto-Scaling:"}
                    </strong>
                    {" Scale down during off-hours, up during peak times"}
                  </li>
                  <li>
                    <strong>
                      {"Reserved Instances:"}
                    </strong>
                    {" 1-year or 3-year commitments save 30-50%"}
                  </li>
                  <li>
                    <strong>
                      {"Azure Hybrid Benefit:"}
                    </strong>
                    {" Use existing Windows/SQL licenses"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor Costs:"}
                    </strong>
                    {" Use Azure Cost Management to track spending"}
                  </li>
                  <li>
                    <strong>
                      {"Delete Unused Resources:"}
                    </strong>
                    {" Stop/delete dev/test resources when not in use"}
                  </li>
                  <li>
                    <strong>
                      {"Use Dev/Test Pricing:"}
                    </strong>
                    {" Discounted pricing for non-production workloads"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices for Azure"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use resource groups:"}
                    </strong>
                    {" Organize related resources together"}
                  </li>
                  <li>
                    <strong>
                      {"Tag everything:"}
                    </strong>
                    {" Cost center, environment, owner tags for better management"}
                  </li>
                  <li>
                    <strong>
                      {"Implement CI/CD:"}
                    </strong>
                    {" Automate deployments with GitHub Actions or Azure DevOps"}
                  </li>
                  <li>
                    <strong>
                      {"Use managed identities:"}
                    </strong>
                    {" No passwords in code - Azure handles authentication"}
                  </li>
                  <li>
                    <strong>
                      {"Enable monitoring:"}
                    </strong>
                    {" Application Insights for all production apps"}
                  </li>
                  <li>
                    <strong>
                      {"Implement staging slots:"}
                    </strong>
                    {" Test deployments before production"}
                  </li>
                  <li>
                    <strong>
                      {"Set up alerts:"}
                    </strong>
                    {" Get notified of errors, high CPU, or unusual activity"}
                  </li>
                  <li>
                    <strong>
                      {"Regular backups:"}
                    </strong>
                    {" Automated backups for databases and critical data"}
                  </li>
                  <li>
                    <strong>
                      {"Use Key Vault:"}
                    </strong>
                    {" Never hard-code secrets or connection strings"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Azure with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack .NET program covers Azure deployment end-to-end. Learn to deploy real applications to Azure with hands-on projects and personalized guidance."}
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
                      {"Build apps to deploy on Azure"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/entity-framework" className="related-article-card">
                    <h4>
                      {"Entity Framework Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Connect to Azure SQL"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/sql-server" className="related-article-card">
                    <h4>
                      {"SQL Server"}
                    </h4>
                    {" "}
                    <p>
                      {"Database for Azure deployments"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Azure Cloud."} />
    </>
  );
}
