import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Docker Basics for Java Developers",
  description: "Learn Docker basics for Java developers. Understand containers, images, Dockerfile, and Docker Compose with beginner-friendly explanations.",
  keywords: ["Docker tutorial", "containers", "Dockerfile", "Docker Compose", "containerization", "Java Docker", "DevOps basics"],
  alternates: { canonical: "/full-stack-java/articles/docker-basics" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/docker-basics",
    title: "Docker Basics: A Beginner's Guide",
    description: "Understand containers, images, and Docker Compose for Java application deployment.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-java", label: "Learn Java", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Docker Basics for Java Developers",
  "description": "Learn Docker containerization for Java applications including Dockerfile, Docker Compose, and best practices",
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

export default function FullStackJavaDockerBasicsPage() {
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
              <Link href="/full-stack-java">
                {"Full Stack Java"}
              </Link>
              {" / "}
              <span>
                {"Docker"}
              </span>
            </div>
            <h1>
              {"Docker Basics"}
            </h1>
            <p className="article-subtitle">
              {"Containerization for Java Developers"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"15 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Docker?"}
                </h2>
                <p>
                  {"Think of Docker like shipping containers for software. Before shipping containers, loading cargo was chaotic - different sizes, shapes, and handling requirements. Shipping containers standardized everything."}
                </p>
                <p>
                  <strong>
                    {"Docker does the same for software."}
                  </strong>
                  {" It packages your application with everything it needs (code, runtime, libraries, settings) into a standardized container that runs the same way everywhere."}
                </p>
                <div className="code-block">
                  <pre><code>{`THE PROBLEM DOCKER SOLVES:

Developer: "It works on my machine!"
Operations: "Well, it doesn't work on the server..."

WITH DOCKER:
┌─────────────────────────────────────┐
│         Docker Container            │
│  ┌─────────────────────────────┐   │
│  │  Your Application           │   │
│  │  + Java Runtime             │   │
│  │  + Dependencies             │   │
│  │  + Configuration            │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
        Runs the same EVERYWHERE!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Docker?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Consistency:"}
                    </strong>
                    {" Same environment from development to production"}
                  </li>
                  <li>
                    <strong>
                      {"Isolation:"}
                    </strong>
                    {" Each container is independent, no conflicts"}
                  </li>
                  <li>
                    <strong>
                      {"Portability:"}
                    </strong>
                    {" Run on any machine with Docker installed"}
                  </li>
                  <li>
                    <strong>
                      {"Speed:"}
                    </strong>
                    {" Containers start in seconds, not minutes like VMs"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Easily run multiple instances"}
                  </li>
                  <li>
                    <strong>
                      {"Version Control:"}
                    </strong>
                    {" Version your infrastructure like code"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Concepts"}
                </h2>
                <h3>
                  {"Image vs Container"}
                </h3>
                <div className="code-block">
                  <pre><code>{`IMAGE = Recipe (Blueprint)
- Read-only template
- Contains instructions to create a container
- Can be shared and reused

CONTAINER = Dish (Running Instance)
- Running instance of an image
- Has its own isolated environment
- Can be started, stopped, deleted

Analogy:
Image = Cookie Cutter
Container = Cookie (made from the cutter)`}</code></pre>
                </div>
                <h3>
                  {"Dockerfile"}
                </h3>
                <p>
                  {"A text file with instructions to build an image - like a recipe for your container."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Dockerfile for a Spring Boot application

# Start from a base image with Java
FROM eclipse-temurin:17-jdk-alpine

# Set working directory inside container
WORKDIR /app

# Copy the JAR file
COPY target/myapp.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Command to run when container starts
ENTRYPOINT ["java", "-jar", "app.jar"]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential Docker Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# BUILD an image from Dockerfile
docker build -t myapp:1.0 .

# RUN a container from an image
docker run -p 8080:8080 myapp:1.0

# LIST running containers
docker ps

# LIST all containers (including stopped)
docker ps -a

# STOP a container
docker stop container_id

# REMOVE a container
docker rm container_id

# LIST images
docker images

# REMOVE an image
docker rmi image_id

# VIEW container logs
docker logs container_id

# EXECUTE command in running container
docker exec -it container_id /bin/sh`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dockerfile Best Practices"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# GOOD: Multi-stage build (smaller final image)
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

# This results in a smaller image because:
# - Build stage has Maven + JDK (large)
# - Final image only has JRE + JAR (small)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Compose"}
                </h2>
                <p>
                  {"When you need multiple containers (app + database + cache), Docker Compose manages them all with one file."}
                </p>
                <div className="code-block">
                  <pre><code>{`# docker-compose.yml
version: '3.8'

services:
  # Your Spring Boot application
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydb
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=secret
    depends_on:
      - db
      - redis

  # PostgreSQL database
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

  # Redis cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:`}</code></pre>
                </div>
                <h3>
                  {"Docker Compose Commands"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Start all services
docker-compose up

# Start in background (detached)
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and start
docker-compose up --build`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Docker?"}
                </h2>
                <div className="code-block">
                  <pre><code>{`USE DOCKER WHEN:
✓ You want consistent environments across dev/staging/prod
✓ Working with microservices
✓ Need easy local development setup for new team members
✓ Deploying to cloud platforms (AWS, Azure, GCP)
✓ Running CI/CD pipelines

MIGHT NOT NEED DOCKER WHEN:
✓ Simple scripts or one-off tasks
✓ Legacy applications that are hard to containerize
✓ Learning basic programming (adds complexity)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use official base images:"}
                    </strong>
                    {" They're secure and well-maintained"}
                  </li>
                  <li>
                    <strong>
                      {"Keep images small:"}
                    </strong>
                    {" Use Alpine variants, multi-stage builds"}
                  </li>
                  <li>
                    <strong>
                      {"Don't run as root:"}
                    </strong>
                    {" Create a non-root user in your Dockerfile"}
                  </li>
                  <li>
                    <strong>
                      {"Use .dockerignore:"}
                    </strong>
                    {" Exclude unnecessary files from build context"}
                  </li>
                  <li>
                    <strong>
                      {"Tag your images:"}
                    </strong>
                    {" Use meaningful version tags, not just \"latest\""}
                  </li>
                  <li>
                    <strong>
                      {"Use environment variables:"}
                    </strong>
                    {" For configuration that changes between environments"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Docker with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Java program covers Docker containerization and deployment. Learn to deploy microservices with guidance from industry experts."}
                </p>
                <Link href="/full-stack-java" className="btn btn-primary">
                  {"Explore Java Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-java/articles/microservices" className="related-article-card">
                    <h4>
                      {"Microservices"}
                    </h4>
                    {" "}
                    <p>
                      {"Build distributed systems"}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/spring-boot" className="related-article-card">
                    <h4>
                      {"Spring Boot"}
                    </h4>
                    {" "}
                    <p>
                      {"Build containerized apps"}
                    </p>
                  </Link>
                  <Link href="/full-stack-java/articles/rest-apis-java" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Build service endpoints"}
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
                  <Link href="/full-stack-java">
                    {"Full Stack Java"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Docker."} />
    </>
  );
}
