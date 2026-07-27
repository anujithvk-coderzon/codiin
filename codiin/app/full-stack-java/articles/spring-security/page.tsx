import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Spring Security Guide: JWT, OAuth2 & Authentication",
  description: "Master Spring Security: authentication, authorization, JWT tokens, and OAuth2. Learn when to implement each security pattern and protect your Java applications.",
  keywords: ["Spring Security tutorial", "JWT authentication", "OAuth2", "Spring Boot security", "authentication authorization Java"],
  alternates: { canonical: "/full-stack-java/articles/spring-security" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/spring-security",
    title: "Spring Security: Complete Guide to Authentication & Authorization | CODiiN",
    description: "Learn Spring Security from basics to advanced: JWT, OAuth2, role-based access control, and security best practices.",
    images: ["/images/spring-security-og.jpg"],
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
  "headline": "Spring Security Guide: JWT, OAuth2 & Authentication",
  "description": "Master Spring Security: authentication, authorization, JWT tokens, and OAuth2",
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

export default function FullStackJavaSpringSecurityPage() {
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
              {"Spring Security"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Spring Security"}
            </h1>
            <p className="article-subtitle">
              {"Protecting Your Applications with Authentication, Authorization, JWT, and OAuth2"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"What is Spring Security?"}
                </h2>
                <p>
                  {"Imagine your application is a building. Spring Security is the comprehensive security system - the guards at the entrance, the key cards for different floors, the cameras, and the access logs. It controls who gets in (authentication) and what they can do inside (authorization)."}
                </p>
                <p>
                  {"Spring Security is the de facto standard for securing Spring-based applications. It handles authentication (verifying identity), authorization (checking permissions), protection against common attacks, and secure session management."}
                </p>
                <h3>
                  {"Why Security Matters"}
                </h3>
                <p>
                  {"In 2024, the average cost of a data breach was $4.45 million. Security isn't optional - it's essential. Every application that stores user data, processes payments, or handles sensitive information needs robust security."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Comprehensive Protection"}
                    </h3>
                    <p>
                      {"Spring Security protects against CSRF, session fixation, clickjacking, SQL injection, and other common attacks automatically."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Flexible Authentication"}
                    </h3>
                    <p>
                      {"Support for username/password, JWT tokens, OAuth2, LDAP, database authentication, and more - all configurable."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Fine-Grained Authorization"}
                    </h3>
                    <p>
                      {"Control access at method level, URL level, or even field level. Different users see different data."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Industry Standard"}
                    </h3>
                    <p>
                      {"Trusted by banks, healthcare systems, and government applications worldwide."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Core Security Concepts"}
                </h2>
                <h3>
                  {"Authentication vs Authorization"}
                </h3>
                <p>
                  {"These terms are often confused. Here's the difference:"}
                </p>
                <div className="code-block">
                  <pre>{`
Authentication: "Who are you?"
- Proving your identity
- Like showing your passport at airport security
- Example: Login with username and password

Authorization: "What can you do?"
- Checking your permissions
- Like checking if your ticket is for business class or economy
- Example: Only admins can delete users

// Real-world example
User logs in with email/password → Authentication
System checks if user has ADMIN role → Authorization
`}</pre>
                </div>
                <h3>
                  {"Principal, Credentials, and Authorities"}
                </h3>
                <div className="code-block">
                  <pre>{`
Principal: The user (their identity)
- Example: username, email, user ID

Credentials: Proof of identity
- Example: password, token, fingerprint

Authorities: Permissions/roles
- Example: ROLE_ADMIN, ROLE_USER, permission:delete
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Setting Up Spring Security"}
                </h2>
                <h3>
                  {"Step 1: Add Dependency"}
                </h3>
                <div className="code-block">
                  <pre>{`
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

// Just adding this dependency automatically secures ALL endpoints!
// Default behavior:
// - All URLs require authentication
// - Form login is enabled
// - HTTP Basic authentication is enabled
// - Default user: "user"
// - Password: printed in console logs
`}</pre>
                </div>
                <h3>
                  {"Step 2: Basic Configuration"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()  // Allow everyone
                .requestMatchers("/admin/**").hasRole("ADMIN")  // Only admins
                .anyRequest().authenticated()  // All other URLs need login
            )
            .formLogin(form -> form
                .loginPage("/login")  // Custom login page
                .defaultSuccessUrl("/dashboard")  // After successful login
                .permitAll()
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/")  // After logout
                .permitAll()
            );

        return http.build();
    }
}
`}</pre>
                </div>
                <h3>
                  {"Step 3: User Details Service"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        // Load user from database
        User user = userRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Convert to Spring Security's UserDetails
        return org.springframework.security.core.userdetails.User
            .withUsername(user.getEmail())
            .password(user.getPassword())  // Must be encrypted!
            .roles(user.getRoles())  // ADMIN, USER, etc.
            .accountExpired(!user.isActive())
            .build();
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Password Encoding: Never Store Plain Text"}
                </h2>
                <p>
                  {"Storing passwords in plain text is like leaving your house key under the doormat - everyone knows to look there. Always hash passwords using a strong algorithm."}
                </p>
                <div className="code-block">
                  <pre>{`
@Configuration
public class SecurityConfig {

    // Use BCrypt - industry standard password hashing
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(String email, String password) {
        User user = new User();
        user.setEmail(email);
        // Hash password before saving
        user.setPassword(passwordEncoder.encode(password));
        return userRepository.save(user);
    }
}

// When user logs in:
// 1. Spring Security loads user from database (hashed password)
// 2. Takes provided password, hashes it
// 3. Compares hashes
// 4. If match → authenticated

// Example:
// User registers with password: "myPassword123"
// Stored in DB: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
// User logs in with: "myPassword123"
// BCrypt hashes it → gets same hash → authenticated!
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Password Encoding Best Practices"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"BCrypt"}
                      </strong>
                      {" - Default choice, adaptive (gets stronger over time)"}
                    </li>
                    <li>
                      <strong>
                        {"Argon2"}
                      </strong>
                      {" - More modern, resistant to GPU attacks"}
                    </li>
                    <li>
                      <strong>
                        {"NEVER"}
                      </strong>
                      {" - Plain text, MD5, SHA1 (all insecure)"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"JWT (JSON Web Tokens): Stateless Authentication"}
                </h2>
                <p>
                  {"JWT is like a digital passport. Instead of the server remembering who you are (session), you carry proof of identity with every request."}
                </p>
                <h3>
                  {"Why JWT?"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Stateless"}
                    </strong>
                    {" - Server doesn't store sessions (scales better)"}
                  </li>
                  <li>
                    <strong>
                      {"Mobile-Friendly"}
                    </strong>
                    {" - Perfect for apps and SPAs"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices"}
                    </strong>
                    {" - Token works across multiple services"}
                  </li>
                  <li>
                    <strong>
                      {"Cross-Domain"}
                    </strong>
                    {" - Works with different domains (CORS-friendly)"}
                  </li>
                </ul>
                <h3>
                  {"JWT Structure"}
                </h3>
                <div className="code-block">
                  <pre>{`
// JWT Token Format: xxxxx.yyyyy.zzzzz

Header.Payload.Signature

// Header (Base64 encoded)
{
  "alg": "HS256",  // Algorithm
  "typ": "JWT"
}

// Payload (Base64 encoded) - Your data
{
  "sub": "user@example.com",  // Subject (user identifier)
  "name": "John Doe",
  "roles": ["USER", "ADMIN"],
  "iat": 1516239022,  // Issued at
  "exp": 1516242622   // Expiration
}

// Signature (encrypted)
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret_key
)

// Complete JWT:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyQGV4YW1wbGUuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`}</pre>
                </div>
                <h3>
                  {"Implementing JWT"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Add dependency
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>

// JWT Utility Class
@Component
public class JwtUtil {

    @Value("\${jwt.secret}")
    private String secret;

    private static final long EXPIRATION_TIME = 864_000_000; // 10 days

    // Generate token
    public String generateToken(String username, List<String> roles) {
        return Jwts.builder()
            .setSubject(username)
            .claim("roles", roles)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact();
    }

    // Extract username from token
    public String extractUsername(String token) {
        return Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }

    // Validate token
    public boolean validateToken(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return username.equals(userDetails.getUsername())
            && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
}

// Login Endpoint - Generate JWT
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // Authenticate user
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
            )
        );

        // Load user details
        UserDetails userDetails = userDetailsService
            .loadUserByUsername(request.getEmail());

        // Generate JWT
        String token = jwtUtil.generateToken(
            userDetails.getUsername(),
            userDetails.getAuthorities()
        );

        return ResponseEntity.ok(new AuthResponse(token));
    }
}

// JWT Filter - Validate token on each request
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain) {

        String token = extractTokenFromHeader(request);

        if (token != null && jwtUtil.validateToken(token)) {
            String username = jwtUtil.extractUsername(token);
            UserDetails userDetails = userDetailsService
                .loadUserByUsername(username);

            UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities()
                );

            SecurityContextHolder.getContext()
                .setAuthentication(authentication);
        }

        chain.doFilter(request, response);
    }
}

// Client usage:
// 1. Login → receive JWT token
// 2. Store token (localStorage, sessionStorage)
// 3. Send token with each request:
//    Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"When to Use JWT?"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"REST APIs"}
                      </strong>
                      {" - Perfect for stateless APIs"}
                    </li>
                    <li>
                      <strong>
                        {"Mobile Apps"}
                      </strong>
                      {" - Apps can store and send tokens"}
                    </li>
                    <li>
                      <strong>
                        {"Microservices"}
                      </strong>
                      {" - Share token across services"}
                    </li>
                    <li>
                      <strong>
                        {"Single Page Apps (SPAs)"}
                      </strong>
                      {" - React, Angular, Vue apps"}
                    </li>
                  </ul>
                  <p>
                    <strong>
                      {"Avoid JWT for:"}
                    </strong>
                    {" Traditional web apps with server-side rendering (use sessions), short-lived sessions (JWT can't be revoked easily), storing large amounts of data (tokens can get big)."}
                  </p>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"OAuth2: \"Login with Google/Facebook\""}
                </h2>
                <p>
                  {"OAuth2 is like having a VIP pass that works at multiple venues. Instead of creating accounts everywhere, you use your Google/Facebook/GitHub account to log in."}
                </p>
                <h3>
                  {"Why OAuth2?"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"User Convenience"}
                    </strong>
                    {" - No need to remember another password"}
                  </li>
                  <li>
                    <strong>
                      {"Security"}
                    </strong>
                    {" - Leverage Google/Facebook's security teams"}
                  </li>
                  <li>
                    <strong>
                      {"Trust"}
                    </strong>
                    {" - Users trust big providers more"}
                  </li>
                  <li>
                    <strong>
                      {"Social Data"}
                    </strong>
                    {" - Access user's profile, email, etc."}
                  </li>
                </ul>
                <h3>
                  {"OAuth2 Flow"}
                </h3>
                <div className="code-block">
                  <pre>{`
1. User clicks "Login with Google"
2. Redirect to Google login page
3. User logs in to Google
4. Google asks: "Allow MyApp to access your email and profile?"
5. User clicks "Allow"
6. Google redirects back to your app with authorization code
7. Your app exchanges code for access token
8. Your app uses token to fetch user's profile
9. Your app creates/logs in user

// This is all handled by Spring Security OAuth2!
`}</pre>
                </div>
                <h3>
                  {"Implementing OAuth2"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Add dependency
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>

// application.yml - Configure providers
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: YOUR_GOOGLE_CLIENT_ID
            client-secret: YOUR_GOOGLE_CLIENT_SECRET
            scope:
              - email
              - profile

          github:
            client-id: YOUR_GITHUB_CLIENT_ID
            client-secret: YOUR_GITHUB_CLIENT_SECRET
            scope:
              - user:email
              - read:user

// Security Configuration
@Configuration
@EnableWebSecurity
public class OAuth2SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
                .failureUrl("/login?error=true")
                .userInfoEndpoint(userInfo -> userInfo
                    .userService(customOAuth2UserService)
                )
            );

        return http.build();
    }
}

// Custom OAuth2 User Service
@Service
public class CustomOAuth2UserService
        extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        OAuth2User oauth2User = super.loadUser(userRequest);

        // Extract user information
        String email = oauth2User.getAttribute("email");
        String name = oauth2User.getAttribute("name");
        String provider = userRequest.getClientRegistration().getRegistrationId();

        // Create or update user in database
        User user = userRepository.findByEmail(email)
            .orElseGet(() -> {
                User newUser = new User();
                newUser.setEmail(email);
                newUser.setName(name);
                newUser.setProvider(provider);
                return userRepository.save(newUser);
            });

        return oauth2User;
    }
}

// HTML Login Page
<!-- Login with Google -->
<a href="/oauth2/authorization/google">
    <img src="google-logo.png"> Login with Google
</a>

<!-- Login with GitHub -->
<a href="/oauth2/authorization/github">
    <img src="github-logo.png"> Login with GitHub
</a>

// That's it! Spring Security handles the entire OAuth2 flow
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"When to Use OAuth2?"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Consumer Apps"}
                      </strong>
                      {" - Apps for general public (e.g., social media, productivity apps)"}
                    </li>
                    <li>
                      <strong>
                        {"Faster Onboarding"}
                      </strong>
                      {" - Reduce signup friction"}
                    </li>
                    <li>
                      <strong>
                        {"Third-party Access"}
                      </strong>
                      {" - When you need access to user's Google Drive, Facebook posts, etc."}
                    </li>
                  </ul>
                  <p>
                    <strong>
                      {"Don't use OAuth2 for:"}
                    </strong>
                    {" Internal enterprise apps (use LDAP/Active Directory), Banking/Finance (need direct control), High-security apps (don't want third-party dependency)."}
                  </p>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Role-Based Access Control (RBAC)"}
                </h2>
                <p>
                  {"RBAC is like assigning different levels of access in a company - interns, employees, managers, and executives all have different permissions."}
                </p>
                <h3>
                  {"Method-Level Security"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Enable method security
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {
}

// Protect methods with annotations
@Service
public class UserService {

    // Only ADMINs can call this
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    // Only if user owns the resource
    @PreAuthorize("@userSecurity.isOwner(#userId)")
    public User updateUser(Long userId, User updates) {
        User user = userRepository.findById(userId).orElseThrow();
        // Update logic
        return userRepository.save(user);
    }

    // Multiple roles
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Custom expression
    @PreAuthorize("hasRole('ADMIN') or #user.id == authentication.principal.id")
    public User viewProfile(User user) {
        return user;
    }

    // Check after method execution
    @PostAuthorize("returnObject.email == authentication.principal.username")
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }
}

// Custom Security Checker
@Component
public class UserSecurity {

    public boolean isOwner(Long userId) {
        Authentication auth = SecurityContextHolder
            .getContext().getAuthentication();

        String currentUsername = auth.getName();
        User user = userRepository.findById(userId).orElseThrow();

        return user.getEmail().equals(currentUsername);
    }
}
`}</pre>
                </div>
                <h3>
                  {"URL-Based Security"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            // Public endpoints
            .requestMatchers("/", "/home", "/about").permitAll()
            .requestMatchers("/api/public/**").permitAll()

            // Specific roles
            .requestMatchers("/admin/**").hasRole("ADMIN")
            .requestMatchers("/manager/**").hasAnyRole("ADMIN", "MANAGER")

            // HTTP method based
            .requestMatchers(HttpMethod.DELETE, "/api/users/**").hasRole("ADMIN")
            .requestMatchers(HttpMethod.POST, "/api/products/**").hasRole("MANAGER")
            .requestMatchers(HttpMethod.GET, "/api/**").hasRole("USER")

            // Authenticated users
            .anyRequest().authenticated()
        );

    return http.build();
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Security Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Always Use HTTPS in Production"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
# application-prod.properties
server.ssl.enabled=true
server.ssl.key-store=classpath:keystore.p12
server.ssl.key-store-password=yourPassword
server.ssl.key-store-type=PKCS12

# Force HTTPS
server.require-ssl=true
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Enable CSRF Protection for Forms"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// CSRF is enabled by default for forms
// Disable only for stateless REST APIs with JWT
http.csrf().disable();  // Only for JWT APIs

// For form-based apps, include CSRF token
<form action="/transfer" method="post">
    <input type="hidden" name="\${_csrf.parameterName}"
           value="\${_csrf.token}"/>
    <!-- form fields -->
</form>
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Implement Rate Limiting"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Prevent brute force attacks
@Component
public class LoginAttemptService {

    private final LoadingCache<String, Integer> attemptsCache;

    public LoginAttemptService() {
        attemptsCache = CacheBuilder.newBuilder()
            .expireAfterWrite(1, TimeUnit.DAYS)
            .build(new CacheLoader<String, Integer>() {
                public Integer load(String key) {
                    return 0;
                }
            });
    }

    public void loginFailed(String key) {
        int attempts = attemptsCache.getUnchecked(key);
        attempts++;
        attemptsCache.put(key, attempts);
    }

    public boolean isBlocked(String key) {
        return attemptsCache.getUnchecked(key) >= 3;
    }
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Use Security Headers"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
http
    .headers(headers -> headers
        .contentSecurityPolicy("default-src 'self'")
        .xssProtection()
        .frameOptions().deny()
        .httpStrictTransportSecurity()
    );
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Never Log Sensitive Data"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// BAD
log.info("User logged in: " + username + " with password: " + password);

// GOOD
log.info("User logged in: " + username);

// Mask sensitive data in logs
log.info("Processing payment for card: ****" + cardNumber.substring(12));
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"6. Validate Input"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
@PostMapping("/users")
public User createUser(@Valid @RequestBody UserDTO userDTO) {
    // @Valid triggers validation
    return userService.create(userDTO);
}

public class UserDTO {
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @Size(min = 8, message = "Password must be at least 8 characters")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d).*$",
             message = "Password must contain uppercase, lowercase, and number")
    private String password;
}
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
                {"Master Spring Security "}
                <span className="gradient-text">
                  {"with Expert Guidance"}
                </span>
              </h2>
              <p>
                {"Learn to build secure, production-ready applications with comprehensive Spring Security training."}
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
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot Fundamentals"}
                </h3>
                {" "}
                <p>
                  {"Master Spring Boot basics before diving into security implementation."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/rest-apis-java" className="article-card">
                <h3>
                  {"Building REST APIs"}
                </h3>
                {" "}
                <p>
                  {"Create secure REST APIs with Spring Boot and Spring Security."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices Architecture"}
                </h3>
                {" "}
                <p>
                  {"Learn how to implement security across distributed microservices."}
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

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Spring Security as part of the Full Stack Java program."} />
    </>
  );
}
