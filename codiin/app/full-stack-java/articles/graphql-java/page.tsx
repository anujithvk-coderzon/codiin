import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "GraphQL with Java: Build Flexible APIs with Spring Boot",
  description: "Build GraphQL APIs with Java and Spring Boot. Learn schemas, queries, mutations, and subscriptions with practical examples.",
  keywords: ["GraphQL Java", "Spring GraphQL", "GraphQL API", "GraphQL tutorial", "Java API", "GraphQL Spring Boot"],
  alternates: { canonical: "/full-stack-java/articles/graphql-java" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/graphql-java",
    title: "GraphQL with Java & Spring Boot | CODiiN",
    description: "Learn to build flexible GraphQL APIs with Java. Master queries, mutations, and subscriptions.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#programs", label: "Programs" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "GraphQL with Java & Spring Boot",
  "description": "Build flexible GraphQL APIs with Java and Spring Boot",
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

export default function FullStackJavaGraphqlJavaPage() {
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
              {"GraphQL"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"GraphQL with Java"}
            </h1>
            <p className="article-subtitle">
              {"Build Flexible APIs - Let Clients Ask for Exactly What They Need"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why GraphQL?"}
                </h2>
                <p>
                  {"REST APIs have a problem: you get what the server decides, not what you need. Want just the user's name? Too bad, here's their entire profile. Need data from 3 endpoints? Make 3 requests."}
                </p>
                <p>
                  {"GraphQL flips this: clients request exactly what they need in a single query. No over-fetching, no under-fetching."}
                </p>
                <div className="code-block">
                  <pre>{`
// REST: Multiple requests, over-fetching
GET /users/1        → { id, name, email, address, phone, ... }
GET /users/1/posts  → [ { id, title, content, ... }, ... ]
GET /users/1/friends → [ ... ]

// GraphQL: One request, exact data
query {
  user(id: 1) {
    name
    posts {
      title
    }
    friends {
      name
    }
  }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Setup with Spring Boot"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-graphql</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.graphql.graphiql.enabled=true
spring.graphql.path=/graphql
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Define Your Schema"}
                </h2>
                <p>
                  {"Create "}
                  <code>
                    {"src/main/resources/graphql/schema.graphqls"}
                  </code>
                  {":"}
                </p>
                <div className="code-block">
                  <pre>{`
type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
}

type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean!
}

type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
}

type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
}

input CreateUserInput {
    name: String!
    email: String!
}

input UpdateUserInput {
    name: String
    email: String
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Implement Resolvers"}
                </h2>
                <div className="code-block">
                  <pre>{`
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    // Query resolver
    @QueryMapping
    public List<User> users() {
        return userService.findAll();
    }

    @QueryMapping
    public User user(@Argument Long id) {
        return userService.findById(id);
    }

    // Mutation resolver
    @MutationMapping
    public User createUser(@Argument CreateUserInput input) {
        return userService.create(input.getName(), input.getEmail());
    }

    @MutationMapping
    public User updateUser(@Argument Long id, @Argument UpdateUserInput input) {
        return userService.update(id, input);
    }

    @MutationMapping
    public boolean deleteUser(@Argument Long id) {
        return userService.delete(id);
    }

    // Field resolver - loads posts for a user
    @SchemaMapping(typeName = "User", field = "posts")
    public List<Post> posts(User user) {
        return postService.findByAuthorId(user.getId());
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Making Queries"}
                </h2>
                <div className="code-block">
                  <pre>{`
# Get all users with their posts
query {
  users {
    id
    name
    posts {
      title
    }
  }
}

# Get specific user
query {
  user(id: "1") {
    name
    email
  }
}

# Create a user
mutation {
  createUser(input: { name: "John", email: "john@email.com" }) {
    id
    name
  }
}

# Variables (better for dynamic data)
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
  }
}

# With variables:
# { "input": { "name": "John", "email": "john@email.com" } }
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"N+1 Problem & DataLoader"}
                </h2>
                <p>
                  {"Without optimization, fetching users with posts makes N+1 database calls. DataLoader batches these."}
                </p>
                <div className="code-block">
                  <pre>{`
@Configuration
public class DataLoaderConfig {

    @Bean
    public BatchLoaderRegistry batchLoaderRegistry(PostService postService) {
        return registry -> {
            registry.forTypePair(Long.class, List.class)
                .registerMappedBatchLoader((userIds, env) -> {
                    // Single query for all posts
                    Map<Long, List<Post>> postsByUser = postService.findByAuthorIds(userIds);
                    return Mono.just(postsByUser);
                });
        };
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Error Handling"}
                </h2>
                <div className="code-block">
                  <pre>{`
@ControllerAdvice
public class GraphQLExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public GraphQLError handleUserNotFound(UserNotFoundException ex) {
        return GraphQLError.newError()
            .errorType(ErrorType.NOT_FOUND)
            .message(ex.getMessage())
            .build();
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
                {"Master Modern API Development "}
                <span className="gradient-text">
                  {"with GraphQL"}
                </span>
              </h2>
              <p>
                {"Learn GraphQL, REST, and API design with hands-on projects."}
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
                  {"Compare GraphQL with REST API design."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot"}
                </h3>
                {" "}
                <p>
                  {"Build applications with Spring GraphQL."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning GraphQL with Java."} />
    </>
  );
}
