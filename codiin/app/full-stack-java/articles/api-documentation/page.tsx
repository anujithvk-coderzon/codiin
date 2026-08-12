import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "API Documentation with Swagger & OpenAPI in Java",
  description: "Learn API Documentation with Swagger and OpenAPI in Java. Generate interactive API docs automatically from Spring Boot applications.",
  keywords: ["Swagger Java", "OpenAPI", "API documentation", "SpringDoc", "Spring Boot API docs", "REST API documentation"],
  alternates: { canonical: "/full-stack-java/articles/api-documentation" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/api-documentation",
    title: "API Documentation: Swagger & OpenAPI | CODiiN",
    description: "Generate beautiful, interactive API documentation automatically with Swagger and OpenAPI.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "API Documentation with Swagger & OpenAPI",
  "description": "Generate interactive API documentation automatically from Spring Boot",
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

export default function FullStackJavaApiDocumentationPage() {
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
              {"API Documentation"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"API Documentation with Swagger"}
            </h1>
            <p className="article-subtitle">
              {"Generate Beautiful, Interactive API Docs Automatically"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Document Your API?"}
                </h2>
                <p>
                  {"Your API is useless if no one knows how to use it. Good documentation tells developers: what endpoints exist, what data to send, and what to expect back. Swagger generates this documentation automatically from your code."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Always Up-to-Date"}
                    </h3>
                    <p>
                      {"Generated from code, so docs never become outdated."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Interactive Testing"}
                    </h3>
                    <p>
                      {"Try API calls directly from the documentation page."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Client Generation"}
                    </h3>
                    <p>
                      {"Generate SDKs for any language from OpenAPI spec."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Setup SpringDoc OpenAPI"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
`}</pre>
                </div>
                <p>
                  {"That's it! Now visit:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Swagger UI:"}
                    </strong>
                    {" http://localhost:8080/swagger-ui.html"}
                  </li>
                  <li>
                    <strong>
                      {"OpenAPI JSON:"}
                    </strong>
                    {" http://localhost:8080/v3/api-docs"}
                  </li>
                </ul>
              </div>
              <div className="concept-section">
                <h2>
                  {"Basic Configuration"}
                </h2>
                <div className="code-block">
                  <pre>{`
# application.properties
springdoc.api-docs.path=/api-docs
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
springdoc.swagger-ui.tagsSorter=alpha
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("User Management API")
                .version("1.0")
                .description("API for managing users and their profiles")
                .contact(new Contact()
                    .name("API Support")
                    .email("support@example.com")))
            .servers(List.of(
                new Server().url("http://localhost:8080").description("Development"),
                new Server().url("https://api.example.com").description("Production")
            ));
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Documenting Controllers"}
                </h2>
                <div className="code-block">
                  <pre>{`
@RestController
@RequestMapping("/api/users")
@Tag(name = "Users", description = "User management operations")
public class UserController {

    @Operation(
        summary = "Get all users",
        description = "Returns a list of all registered users"
    )
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Successfully retrieved users"),
        @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @Operation(summary = "Get user by ID")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "User found"),
        @ApiResponse(responseCode = "404", description = "User not found")
    })
    @GetMapping("/{id}")
    public User getUser(
        @Parameter(description = "User ID", required = true, example = "1")
        @PathVariable Long id) {
        return userService.findById(id);
    }

    @Operation(summary = "Create new user")
    @ApiResponse(responseCode = "201", description = "User created successfully")
    @PostMapping
    public ResponseEntity<User> createUser(
        @RequestBody @Valid CreateUserRequest request) {
        User user = userService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Documenting Request/Response Objects"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Schema(description = "Request to create a new user")
public class CreateUserRequest {

    @Schema(description = "User's full name", example = "John Doe", required = true)
    @NotBlank
    private String name;

    @Schema(description = "User's email address", example = "john@example.com")
    @Email
    private String email;

    @Schema(description = "User's age", minimum = "18", maximum = "120")
    @Min(18)
    private Integer age;

    @Schema(description = "Account type", allowableValues = {"BASIC", "PREMIUM", "ADMIN"})
    private String accountType;
}

@Schema(description = "User response object")
public class UserResponse {

    @Schema(description = "Unique identifier", example = "12345")
    private Long id;

    @Schema(description = "User's display name")
    private String name;

    @Schema(description = "Account creation date", example = "2024-01-15")
    private LocalDate createdAt;
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Authentication Documentation"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info().title("Secure API").version("1.0"))
            .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
            .components(new Components()
                .addSecuritySchemes("bearerAuth",
                    new SecurityScheme()
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")
                        .description("Enter JWT token")));
    }
}

// In controller - mark endpoint as secured
@Operation(summary = "Get current user profile",
           security = @SecurityRequirement(name = "bearerAuth"))
@GetMapping("/profile")
public UserProfile getProfile() {
    return userService.getCurrentProfile();
}

// Or mark as public (no auth required)
@Operation(summary = "Health check")
@SecurityRequirements  // Empty = no security
@GetMapping("/health")
public String health() {
    return "OK";
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Grouping APIs"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Configuration
public class OpenAPIConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
            .group("public")
            .pathsToMatch("/api/public/**")
            .build();
    }

    @Bean
    public GroupedOpenApi adminApi() {
        return GroupedOpenApi.builder()
            .group("admin")
            .pathsToMatch("/api/admin/**")
            .addOpenApiCustomizer(openApi ->
                openApi.info(new Info()
                    .title("Admin API")
                    .description("Administrative operations")))
            .build();
    }
}
`}</pre>
                </div>
                <p>
                  {"Access at: "}
                  <code>
                    {"/swagger-ui.html?group=public"}
                  </code>
                  {" or "}
                  <code>
                    {"/swagger-ui.html?group=admin"}
                  </code>
                </p>
              </div>
              <div className="concept-section">
                <h2>
                  {"Common Annotations Reference"}
                </h2>
                <div className="code-block">
                  <pre>{`
// Controller level
@Tag(name = "Users", description = "...")  // Group endpoints

// Method level
@Operation(summary = "...", description = "...")  // Describe endpoint
@ApiResponses({...})  // Document responses
@Hidden  // Hide from docs

// Parameter level
@Parameter(description = "...", required = true, example = "...")
@RequestBody(description = "...", required = true)

// Model level
@Schema(description = "...", example = "...", required = true)
@Schema(hidden = true)  // Hide field from docs
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
                {"Build Professional "}
                <span className="gradient-text">
                  {"REST APIs"}
                </span>
              </h2>
              <p>
                {"Learn API design, documentation, and best practices."}
              </p>
              <Link href="/full-stack-java" className="btn btn-primary btn-lg">
                {"Explore Full Stack Java Course"}
              </Link>
            </div>
          </div>
        </section>
        <section className="related-articles">
          <div className="container">
            <h2>
              {"Related Articles"}
            </h2>
            <div className="articles-grid">
              <Link href="/full-stack-java/articles/rest-apis-java" className="article-card">
                <h3>
                  {"REST APIs"}
                </h3>
                {" "}
                <p>
                  {"Build RESTful APIs with Spring Boot."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-security" className="article-card">
                <h3>
                  {"Spring Security"}
                </h3>
                {" "}
                <p>
                  {"Secure your documented APIs."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning API Documentation."} />
    </>
  );
}
