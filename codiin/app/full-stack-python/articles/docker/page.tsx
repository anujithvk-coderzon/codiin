import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Docker for Beginners: Complete Guide to Containerization",
  description: "Learn Docker fundamentals - containerize your applications for consistent deployment. A beginner's guide to Docker concepts, commands, and best practices.",
  keywords: ["Docker tutorial", "Docker for beginners", "containerization", "Docker commands", "Dockerfile", "Docker Compose", "container deployment"],
  alternates: { canonical: "/full-stack-python/articles/docker" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/docker",
    title: "Docker: Containerization for Beginners",
    description: "Master Docker to package and deploy your applications consistently anywhere.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Docker: Containerization for Beginners",
  "description": "Complete guide to Docker containerization for beginners",
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

export default function FullStackPythonDockerPage() {
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
              <Link href="/full-stack-python">
                {"Full Stack Python"}
              </Link>
              {" / "}
              <span>
                {"Docker"}
              </span>
            </div>
            <h1>
              {"Docker"}
            </h1>
            <p className="article-subtitle">
              {"Containerization Made Simple"}
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
                  {"What is Docker?"}
                </h2>
                <p>
                  {"Docker is a platform that allows you to package your application and all its dependencies into a standardized unit called a "}
                  <strong>
                    {"container"}
                  </strong>
                  {". This container can run consistently on any machine that has Docker installed."}
                </p>
                <p>
                  {"Think of Docker containers like shipping containers in the real world. Just as a shipping container can hold any goods and be transported by any ship, truck, or train - a Docker container holds your application and can run on any computer with Docker."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"The Problem Docker Solves"}
                </h2>
                <p>
                  {"Have you ever heard \"It works on my machine\"? This common problem occurs because:"}
                </p>
                <ul>
                  <li>
                    {"Different operating systems (Windows, Mac, Linux)"}
                  </li>
                  <li>
                    {"Different versions of programming languages"}
                  </li>
                  <li>
                    {"Different library versions"}
                  </li>
                  <li>
                    {"Different system configurations"}
                  </li>
                </ul>
                <p>
                  {"Docker solves this by packaging everything your application needs into a container. The container runs the same way everywhere - on your laptop, your colleague's computer, or a production server."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker vs Virtual Machines"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Virtual Machine:                    Docker Container:
┌─────────────────────┐            ┌─────────────────────┐
│      Your App       │            │      Your App       │
├─────────────────────┤            ├─────────────────────┤
│   Guest OS (Full)   │            │  Container Runtime  │
├─────────────────────┤            │    (Lightweight)    │
│     Hypervisor      │            └──────────┬──────────┘
├─────────────────────┤                       │
│      Host OS        │            ┌──────────┴──────────┐
├─────────────────────┤            │      Host OS        │
│     Hardware        │            ├─────────────────────┤
└─────────────────────┘            │     Hardware        │
                                   └─────────────────────┘

VMs: Heavy, slow to start         Containers: Light, start in seconds
Each VM has full OS               Containers share the host OS kernel`}</code></pre>
                </div>
                <p>
                  {"Containers are much lighter than VMs because they share the host operating system's kernel. This makes them faster to start and more efficient with resources."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Docker Concepts"}
                </h2>
                <h3>
                  {"Image"}
                </h3>
                <p>
                  {"A read-only template containing instructions for creating a container. Think of it as a recipe or blueprint."}
                </p>
                <h3>
                  {"Container"}
                </h3>
                <p>
                  {"A running instance of an image. You can create multiple containers from the same image."}
                </p>
                <h3>
                  {"Dockerfile"}
                </h3>
                <p>
                  {"A text file with instructions to build an image. It defines what goes into your container."}
                </p>
                <h3>
                  {"Docker Hub"}
                </h3>
                <p>
                  {"A registry where Docker images are stored and shared. Like GitHub but for Docker images."}
                </p>
                <h3>
                  {"Volume"}
                </h3>
                <p>
                  {"A way to persist data outside of containers. Data in volumes survives container restarts."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential Docker Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check Docker version
docker --version

# Pull an image from Docker Hub
docker pull python:3.11

# List downloaded images
docker images

# Run a container
docker run python:3.11 python --version

# Run a container interactively
docker run -it python:3.11 bash

# Run a container in the background (detached)
docker run -d --name myapp python:3.11

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop myapp

# Start a stopped container
docker start myapp

# Remove a container
docker rm myapp

# Remove an image
docker rmi python:3.11

# View container logs
docker logs myapp

# Execute a command in a running container
docker exec -it myapp bash`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Your First Dockerfile"}
                </h2>
                <p>
                  {"Let's create a Docker image for a simple Python application:"}
                </p>
                <h3>
                  {"Project Structure"}
                </h3>
                <div className="code-block">
                  <pre><code>{`my-python-app/
├── app.py
├── requirements.txt
└── Dockerfile`}</code></pre>
                </div>
                <h3>
                  {"app.py"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from Docker!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)`}</code></pre>
                </div>
                <h3>
                  {"requirements.txt"}
                </h3>
                <div className="code-block">
                  <pre><code>{`flask==3.0.0`}</code></pre>
                </div>
                <h3>
                  {"Dockerfile"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Use an official Python runtime as the base image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy requirements first (for better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run when the container starts
CMD ["python", "app.py"]`}</code></pre>
                </div>
                <h3>
                  {"Build and Run"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Build the image
docker build -t my-python-app .

# Run the container
docker run -p 5000:5000 my-python-app

# Visit http://localhost:5000 in your browser!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Understanding Dockerfile Instructions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# FROM - Base image to start from
FROM python:3.11-slim

# WORKDIR - Set working directory (created if doesn't exist)
WORKDIR /app

# COPY - Copy files from host to container
COPY . .

# RUN - Execute commands during build (creates a new layer)
RUN pip install -r requirements.txt
RUN apt-get update && apt-get install -y curl

# ENV - Set environment variables
ENV FLASK_ENV=production
ENV DATABASE_URL=postgres://localhost/db

# EXPOSE - Document which port the container listens on
EXPOSE 5000

# CMD - Default command to run (can be overridden)
CMD ["python", "app.py"]

# ENTRYPOINT - Command that always runs (harder to override)
ENTRYPOINT ["python"]
CMD ["app.py"]  # Default argument to ENTRYPOINT`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Compose"}
                </h2>
                <p>
                  {"Docker Compose lets you define and run multi-container applications. Perfect for apps that need a database, cache, or other services."}
                </p>
                <h3>
                  {"docker-compose.yml"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - .:/app  # Mount current directory for development

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

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

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs

# Rebuild images
docker-compose build

# Run a command in a service
docker-compose exec web bash`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker for Python Development"}
                </h2>
                <p>
                  {"A production-ready Dockerfile for a Python web application:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Dockerfile for Production
FROM python:3.11-slim as base

# Prevents Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1
# Keeps Python from buffering stdout/stderr
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    gcc \\
    libpq-dev \\
    && rm -rf /var/lib/apt/lists/*

# Create non-root user for security
RUN adduser --disabled-password --gecos '' appuser

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY --chown=appuser:appuser . .

# Switch to non-root user
USER appuser

EXPOSE 8000

# Use gunicorn for production
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "app:app"]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Volumes: Persisting Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Named volume (Docker manages storage)
docker run -v mydata:/app/data myapp

# Bind mount (use host directory)
docker run -v /path/on/host:/app/data myapp

# In docker-compose.yml
services:
  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data  # Named volume
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql  # Bind mount

volumes:
  postgres_data:  # Define named volume`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Networking"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# List networks
docker network ls

# Create a network
docker network create mynetwork

# Run container on a network
docker run --network mynetwork --name web myapp
docker run --network mynetwork --name db postgres

# Containers on the same network can communicate by name
# In web container: postgres://db:5432/myapp

# In docker-compose, services are automatically on the same network
services:
  web:
    ...
    # Can connect to 'db' by name
  db:
    ...`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use specific image tags:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"python:3.11-slim"}
                    </code>
                    {" not "}
                    <code>
                      {"python:latest"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Use slim/alpine images:"}
                    </strong>
                    {" Smaller images = faster builds and deploys"}
                  </li>
                  <li>
                    <strong>
                      {"Order Dockerfile for caching:"}
                    </strong>
                    {" Put rarely changing instructions first"}
                  </li>
                  <li>
                    <strong>
                      {"Don't run as root:"}
                    </strong>
                    {" Create a non-root user for security"}
                  </li>
                  <li>
                    <strong>
                      {"Use .dockerignore:"}
                    </strong>
                    {" Exclude unnecessary files from the build"}
                  </li>
                  <li>
                    <strong>
                      {"One process per container:"}
                    </strong>
                    {" Each container should do one thing"}
                  </li>
                  <li>
                    <strong>
                      {"Use multi-stage builds:"}
                    </strong>
                    {" Keep production images small"}
                  </li>
                  <li>
                    <strong>
                      {"Don't store secrets in images:"}
                    </strong>
                    {" Use environment variables or secrets management"}
                  </li>
                </ul>
                <h3>
                  {".dockerignore Example"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# .dockerignore
.git
.gitignore
__pycache__
*.pyc
.env
.venv
venv
*.md
.pytest_cache
.coverage
htmlcov`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multi-Stage Builds"}
                </h2>
                <p>
                  {"Use multi-stage builds to create smaller production images:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Multi-stage Dockerfile
# Stage 1: Build
FROM python:3.11 as builder

WORKDIR /app
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt

# Stage 2: Production
FROM python:3.11-slim

WORKDIR /app

# Copy only the wheels from builder stage
COPY --from=builder /app/wheels /wheels
RUN pip install --no-cache /wheels/*

COPY . .

CMD ["python", "app.py"]

# Result: Much smaller production image!`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Docker with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program includes comprehensive Docker training. Learn to containerize Python applications, use Docker Compose, and deploy to production with personalized guidance."}
                </p>
                <Link href="/full-stack-python" className="btn btn-primary">
                  {"Explore Full Stack Python Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-python/articles/kubernetes" className="related-article-card">
                    <h4>
                      {"Kubernetes"}
                    </h4>
                    {" "}
                    <p>
                      {"Container orchestration at scale"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/devops-concepts" className="related-article-card">
                    <h4>
                      {"DevOps Concepts"}
                    </h4>
                    {" "}
                    <p>
                      {"Understanding DevOps fundamentals"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/cicd" className="related-article-card">
                    <h4>
                      {"CI/CD"}
                    </h4>
                    {" "}
                    <p>
                      {"Automate testing and deployment"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Docker."} />
    </>
  );
}
