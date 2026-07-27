import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "ASP.NET Identity: Secure Your Applications",
  description: "Learn ASP.NET Identity - Authentication, authorization, JWT tokens, and roles. Understand security in the .NET ecosystem for building secure applications.",
  keywords: ["ASP.NET Identity tutorial", "authentication .NET", "JWT", "authorization", "roles", "security"],
  alternates: { canonical: "/full-stack-dotnet/articles/aspnet-identity" },
  openGraph: {
    type: "article",
    url: "/full-stack-dotnet/articles/aspnet-identity",
    title: "ASP.NET Identity: Secure Your Applications",
    description: "Master authentication and authorization in .NET with ASP.NET Identity and JWT.",
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
  "headline": "ASP.NET Identity: Secure Your Applications",
  "description": "Complete guide to authentication and authorization in .NET",
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

export default function FullStackDotnetAspnetIdentityPage() {
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
                {"ASP.NET Identity"}
              </span>
            </div>
            <h1>
              {"ASP.NET Identity"}
            </h1>
            <p className="article-subtitle">
              {"Authentication and Authorization for .NET Applications"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"24 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is ASP.NET Identity?"}
                </h2>
                <p>
                  {"ASP.NET Identity is Microsoft's membership system for .NET applications. Think of it as a complete security system for your app - handling user registration, login, password management, roles, and permissions."}
                </p>
                <p>
                  {"Instead of building authentication from scratch (which is complex and risky), ASP.NET Identity provides a battle-tested, secure foundation that handles everything from password hashing to two-factor authentication."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Authentication vs Authorization"}
                </h2>
                <p>
                  {"These terms are often confused. Think of entering a building:"}
                </p>
                <div className="code-block">
                  <pre><code>{`AUTHENTICATION (Who are you?)
─────────────────────────────
Like showing your ID card at the entrance

Questions answered:
- Are you who you claim to be?
- Do you have valid credentials?
- Have you logged in?

Examples:
✅ Username + Password
✅ Email + Password
✅ Social login (Google, Facebook)
✅ Two-factor authentication
✅ Biometrics

---

AUTHORIZATION (What can you do?)
────────────────────────────────
Like checking which floors you can access

Questions answered:
- What are you allowed to do?
- Which resources can you access?
- What's your role/permissions?

Examples:
✅ Admin can delete users
✅ Manager can approve requests
✅ User can view own profile only
✅ Guest can only read, not write

---

ANALOGY
───────
Authentication: Proving you're John Doe (showing passport)
Authorization: Checking if John Doe is allowed in VIP lounge`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use ASP.NET Identity?"}
                </h2>
                <p>
                  {"Building authentication yourself is like building a car from scratch when you can buy a Tesla. Here's why you should use ASP.NET Identity:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Security Best Practices:"}
                    </strong>
                    {" Built-in password hashing (PBKDF2), protection against common attacks"}
                  </li>
                  <li>
                    <strong>
                      {"Ready-to-Use Features:"}
                    </strong>
                    {" User registration, login, password reset, email confirmation - all included"}
                  </li>
                  <li>
                    <strong>
                      {"Role-Based Access:"}
                    </strong>
                    {" Assign roles (Admin, Manager, User) and permissions easily"}
                  </li>
                  <li>
                    <strong>
                      {"Claims-Based Identity:"}
                    </strong>
                    {" Modern, flexible way to manage user information and permissions"}
                  </li>
                  <li>
                    <strong>
                      {"Two-Factor Authentication:"}
                    </strong>
                    {" Built-in support for SMS, email, authenticator apps"}
                  </li>
                  <li>
                    <strong>
                      {"Social Login:"}
                    </strong>
                    {" Integrate Google, Facebook, Microsoft login easily"}
                  </li>
                  <li>
                    <strong>
                      {"Entity Framework Integration:"}
                    </strong>
                    {" Works seamlessly with EF Core for database storage"}
                  </li>
                  <li>
                    <strong>
                      {"JWT Support:"}
                    </strong>
                    {" Perfect for APIs and mobile apps"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Setting Up ASP.NET Identity"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// 1. INSTALL PACKAGES
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

// 2. CREATE USER MODEL
public class ApplicationUser : IdentityUser
{
    // Add custom properties
    public string FullName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string ProfilePictureUrl { get; set; }
}

// 3. CREATE DbContext
public class AppDbContext : IdentityDbContext<ApplicationUser>
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // Your other DbSets
    public DbSet<Product> Products { get; set; }
}

// 4. CONFIGURE IN Program.cs
var builder = WebApplication.CreateBuilder(args);

// Add DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    // Password settings
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 8;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = true;

    // Lockout settings
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 5;

    // User settings
    options.User.RequireUniqueEmail = true;
    options.SignIn.RequireConfirmedEmail = true;
})
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();

// Add Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]))
    };
});

var app = builder.Build();

// Add middleware
app.UseAuthentication();  // Who are you?
app.UseAuthorization();   // What can you do?

app.MapControllers();
app.Run();

// 5. CREATE MIGRATION
dotnet ef migrations add AddIdentity
dotnet ef database update`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"User Registration and Login"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// REGISTER REQUEST MODEL
public class RegisterRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MinLength(8)]
    public string Password { get; set; }

    [Required]
    public string FullName { get; set; }
}

// LOGIN REQUEST MODEL
public class LoginRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
}

// AUTH CONTROLLER
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly IConfiguration _configuration;

    public AuthController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        IConfiguration configuration)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _configuration = configuration;
    }

    // REGISTER
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest model)
    {
        // Create user
        var user = new ApplicationUser
        {
            UserName = model.Email,
            Email = model.Email,
            FullName = model.FullName
        };

        var result = await _userManager.CreateAsync(user, model.Password);

        if (!result.Succeeded)
        {
            return BadRequest(result.Errors);
        }

        // Assign default role
        await _userManager.AddToRoleAsync(user, "User");

        // Generate email confirmation token
        var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

        // Send confirmation email (implement email service)
        // await _emailService.SendConfirmationEmailAsync(user.Email, token);

        return Ok(new { Message = "User registered successfully. Please confirm your email." });
    }

    // LOGIN
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);

        if (user == null)
        {
            return Unauthorized(new { Message = "Invalid email or password" });
        }

        // Check if email is confirmed
        if (!user.EmailConfirmed)
        {
            return Unauthorized(new { Message = "Please confirm your email first" });
        }

        // Check password
        var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, lockoutOnFailure: true);

        if (!result.Succeeded)
        {
            if (result.IsLockedOut)
            {
                return Unauthorized(new { Message = "Account locked. Try again later." });
            }
            return Unauthorized(new { Message = "Invalid email or password" });
        }

        // Generate JWT token
        var token = GenerateJwtToken(user);

        return Ok(new
        {
            Token = token,
            Email = user.Email,
            FullName = user.FullName
        });
    }

    // GENERATE JWT TOKEN
    private async Task<string> GenerateJwtToken(ApplicationUser user)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        // Add roles to claims
        var roles = await _userManager.GetRolesAsync(user);
        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expires = DateTime.Now.AddDays(7);

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: expires,
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    // CONFIRM EMAIL
    [HttpGet("confirm-email")]
    public async Task<IActionResult> ConfirmEmail(string userId, string token)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            return BadRequest("Invalid user");
        }

        var result = await _userManager.ConfirmEmailAsync(user, token);
        if (result.Succeeded)
        {
            return Ok("Email confirmed successfully");
        }

        return BadRequest("Error confirming email");
    }

    // FORGOT PASSWORD
    [HttpPost("forgot-password")]
    public async Task<IActionResult> ForgotPassword([FromBody] string email)
    {
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null)
        {
            // Don't reveal that user doesn't exist
            return Ok("If email exists, reset link has been sent");
        }

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);

        // Send email with reset link
        // await _emailService.SendPasswordResetEmailAsync(email, token);

        return Ok("If email exists, reset link has been sent");
    }

    // RESET PASSWORD
    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            return BadRequest("Invalid request");
        }

        var result = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);

        if (result.Succeeded)
        {
            return Ok("Password reset successfully");
        }

        return BadRequest(result.Errors);
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Role-Based Authorization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// SEED ROLES (run once at startup)
public static class RoleSeeder
{
    public static async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager)
    {
        string[] roleNames = { "Admin", "Manager", "User" };

        foreach (var roleName in roleNames)
        {
            if (!await roleManager.RoleExistsAsync(roleName))
            {
                await roleManager.CreateAsync(new IdentityRole(roleName));
            }
        }
    }
}

// Call in Program.cs
using (var scope = app.Services.CreateScope())
{
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    await RoleSeeder.SeedRolesAsync(roleManager);
}

---

// ASSIGN ROLE TO USER
[HttpPost("assign-role")]
[Authorize(Roles = "Admin")]
public async Task<IActionResult> AssignRole(string userId, string roleName)
{
    var user = await _userManager.FindByIdAsync(userId);
    if (user == null)
    {
        return NotFound("User not found");
    }

    var result = await _userManager.AddToRoleAsync(user, roleName);

    if (result.Succeeded)
    {
        return Ok($"Role {roleName} assigned to user");
    }

    return BadRequest(result.Errors);
}

---

// PROTECT ENDPOINTS WITH ROLES
[HttpGet("admin-only")]
[Authorize(Roles = "Admin")]
public IActionResult AdminOnly()
{
    return Ok("You are an admin!");
}

[HttpGet("admin-or-manager")]
[Authorize(Roles = "Admin,Manager")]
public IActionResult AdminOrManager()
{
    return Ok("You are admin or manager");
}

[HttpGet("authenticated")]
[Authorize]  // Any logged-in user
public IActionResult Authenticated()
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
    var email = User.FindFirstValue(ClaimTypes.Email);
    return Ok($"Hello {email}");
}

---

// CHECK ROLES IN CODE
public async Task<IActionResult> SomeAction()
{
    var user = await _userManager.GetUserAsync(User);

    if (await _userManager.IsInRoleAsync(user, "Admin"))
    {
        // Admin-specific logic
    }

    var roles = await _userManager.GetRolesAsync(user);
    // List of roles user belongs to
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Claims-Based Authorization"}
                </h2>
                <p>
                  {"Claims are more flexible than roles. Think of claims as attributes about a user (like \"CanApproveExpenses\" or \"Department:Sales\"):"}
                </p>
                <div className="code-block">
                  <pre><code>{`// ADD CLAIMS TO USER
[HttpPost("add-claim")]
public async Task<IActionResult> AddClaim(string userId, string claimType, string claimValue)
{
    var user = await _userManager.FindByIdAsync(userId);

    var claim = new Claim(claimType, claimValue);
    await _userManager.AddClaimAsync(user, claim);

    return Ok("Claim added");
}

// Examples:
// ("Department", "Sales")
// ("CanApproveExpenses", "true")
// ("MaxApprovalAmount", "10000")

---

// POLICY-BASED AUTHORIZATION
// Program.cs
builder.Services.AddAuthorization(options =>
{
    // Require specific claim
    options.AddPolicy("CanApproveExpenses", policy =>
        policy.RequireClaim("CanApproveExpenses", "true"));

    // Require role AND claim
    options.AddPolicy("SeniorManager", policy =>
        policy.RequireRole("Manager")
              .RequireClaim("Seniority", "Senior"));

    // Custom requirement
    options.AddPolicy("Over18", policy =>
        policy.Requirements.Add(new MinimumAgeRequirement(18)));
});

---

// USE IN CONTROLLER
[HttpPost("approve-expense")]
[Authorize(Policy = "CanApproveExpenses")]
public IActionResult ApproveExpense(int expenseId)
{
    // Only users with "CanApproveExpenses" claim can access
    return Ok("Expense approved");
}

---

// CUSTOM AUTHORIZATION HANDLER
public class MinimumAgeRequirement : IAuthorizationRequirement
{
    public int MinimumAge { get; }
    public MinimumAgeRequirement(int minimumAge)
    {
        MinimumAge = minimumAge;
    }
}

public class MinimumAgeHandler : AuthorizationHandler<MinimumAgeRequirement>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        MinimumAgeRequirement requirement)
    {
        var dateOfBirthClaim = context.User.FindFirst(c => c.Type == "DateOfBirth");

        if (dateOfBirthClaim != null)
        {
            var dateOfBirth = DateTime.Parse(dateOfBirthClaim.Value);
            var age = DateTime.Today.Year - dateOfBirth.Year;

            if (age >= requirement.MinimumAge)
            {
                context.Succeed(requirement);
            }
        }

        return Task.CompletedTask;
    }
}

// Register handler
builder.Services.AddSingleton<IAuthorizationHandler, MinimumAgeHandler>();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JWT Authentication for APIs"}
                </h2>
                <p>
                  {"JWT (JSON Web Token) is perfect for APIs and mobile apps. It's like a digitally signed passport that proves who you are:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// appsettings.json
{
  "Jwt": {
    "SecretKey": "YourVeryLongSecretKeyHere_AtLeast32Characters!",
    "Issuer": "YourAppName",
    "Audience": "YourAppUsers",
    "ExpiryMinutes": 60
  }
}

// HOW JWT WORKS
1. User logs in with username/password
2. Server validates credentials
3. Server generates JWT token with user info
4. Server sends token to client
5. Client stores token (localStorage/secure storage)
6. Client sends token with every API request
7. Server validates token and processes request

---

// JWT TOKEN STRUCTURE
Header.Payload.Signature

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.      ← Header
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp     ← Payload (user info)
vaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c   ← Signature

Payload contains:
- User ID
- Email
- Roles
- Claims
- Expiration time

---

// CLIENT USAGE (JavaScript)
// After login, save token
localStorage.setItem('token', response.token);

// Send with every request
fetch('https://api.example.com/products', {
    headers: {
        'Authorization': \`Bearer \${localStorage.getItem('token')}\`
    }
});

---

// CLIENT USAGE (C# Blazor)
// Save token
await localStorage.SetItemAsync("token", loginResponse.Token);

// HTTP Client with token
public class AuthenticatedHttpClient
{
    private readonly HttpClient _http;
    private readonly ILocalStorageService _localStorage;

    public async Task<HttpResponseMessage> GetAsync(string url)
    {
        var token = await _localStorage.GetItemAsync<string>("token");
        _http.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        return await _http.GetAsync(url);
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Two-Factor Authentication (2FA)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// ENABLE 2FA FOR USER
[HttpPost("enable-2fa")]
[Authorize]
public async Task<IActionResult> EnableTwoFactor()
{
    var user = await _userManager.GetUserAsync(User);

    await _userManager.SetTwoFactorEnabledAsync(user, true);

    // Generate authenticator key
    var key = await _userManager.GetAuthenticatorKeyAsync(user);
    if (string.IsNullOrEmpty(key))
    {
        await _userManager.ResetAuthenticatorKeyAsync(user);
        key = await _userManager.GetAuthenticatorKeyAsync(user);
    }

    // Return QR code data for authenticator app
    var authenticatorUri = $"otpauth://totp/YourApp:{user.Email}?secret={key}&issuer=YourApp";

    return Ok(new { Key = key, QrCodeUri = authenticatorUri });
}

// VERIFY 2FA CODE
[HttpPost("verify-2fa")]
public async Task<IActionResult> VerifyTwoFactor(string email, string password, string code)
{
    var user = await _userManager.FindByEmailAsync(email);

    // Verify password first
    var passwordValid = await _userManager.CheckPasswordAsync(user, password);
    if (!passwordValid)
    {
        return Unauthorized("Invalid credentials");
    }

    // Verify 2FA code
    var isValid = await _userManager.VerifyTwoFactorTokenAsync(
        user,
        _userManager.Options.Tokens.AuthenticatorTokenProvider,
        code);

    if (!isValid)
    {
        return Unauthorized("Invalid 2FA code");
    }

    // Generate token
    var token = GenerateJwtToken(user);
    return Ok(new { Token = token });
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Security Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Never store passwords in plain text:"}
                    </strong>
                    {" ASP.NET Identity handles hashing automatically"}
                  </li>
                  <li>
                    <strong>
                      {"Use HTTPS everywhere:"}
                    </strong>
                    {" Tokens and passwords should never travel over HTTP"}
                  </li>
                  <li>
                    <strong>
                      {"Set strong password requirements:"}
                    </strong>
                    {" Minimum 8 characters, mixed case, numbers"}
                  </li>
                  <li>
                    <strong>
                      {"Implement account lockout:"}
                    </strong>
                    {" Prevent brute-force attacks"}
                  </li>
                  <li>
                    <strong>
                      {"Use secure JWT secret keys:"}
                    </strong>
                    {" At least 32 characters, randomly generated"}
                  </li>
                  <li>
                    <strong>
                      {"Set appropriate token expiration:"}
                    </strong>
                    {" Shorter for sensitive apps (1 hour), longer for convenience (7 days)"}
                  </li>
                  <li>
                    <strong>
                      {"Implement refresh tokens:"}
                    </strong>
                    {" For long-lived sessions without compromising security"}
                  </li>
                  <li>
                    <strong>
                      {"Validate email addresses:"}
                    </strong>
                    {" Confirm ownership before activation"}
                  </li>
                  <li>
                    <strong>
                      {"Log authentication events:"}
                    </strong>
                    {" Track failed login attempts, password changes"}
                  </li>
                  <li>
                    <strong>
                      {"Use claims for fine-grained access:"}
                    </strong>
                    {" More flexible than roles alone"}
                  </li>
                  <li>
                    <strong>
                      {"Implement rate limiting:"}
                    </strong>
                    {" Prevent abuse of login endpoints"}
                  </li>
                  <li>
                    <strong>
                      {"Consider 2FA for sensitive operations:"}
                    </strong>
                    {" Not just login, but also critical actions"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Authentication Patterns"}
                </h2>
                <div className="code-block">
                  <pre><code>{`PATTERN 1: Cookie-Based (Traditional Web Apps)
───────────────────────────────────────────────
- User logs in
- Server creates session cookie
- Cookie sent with every request
- Good for: MVC apps, Blazor Server

---

PATTERN 2: JWT Token (APIs, SPAs, Mobile)
──────────────────────────────────────────
- User logs in
- Server returns JWT token
- Client stores token
- Token sent in Authorization header
- Good for: React/Angular SPAs, Mobile apps, Microservices

---

PATTERN 3: OAuth2 / OpenID Connect (Enterprise)
────────────────────────────────────────────────
- Login via external provider (Google, Microsoft, Okta)
- Receive identity token
- Use token to access resources
- Good for: Enterprise apps, SSO scenarios

---

PATTERN 4: API Keys (Simple APIs)
──────────────────────────────────
- Generate API key for user
- Include in request header
- Server validates key
- Good for: Simple APIs, IoT, webhooks`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Security with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack .NET program covers authentication and authorization in depth. Build secure applications with industry best practices and personalized guidance."}
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
                      {"Build APIs to secure"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/entity-framework" className="related-article-card">
                    <h4>
                      {"Entity Framework Core"}
                    </h4>
                    {" "}
                    <p>
                      {"Store user data securely"}
                    </p>
                  </Link>
                  <Link href="/full-stack-dotnet/articles/blazor" className="related-article-card">
                    <h4>
                      {"Blazor"}
                    </h4>
                    {" "}
                    <p>
                      {"Add authentication to Blazor apps"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn ASP.NET Identity."} />
    </>
  );
}
