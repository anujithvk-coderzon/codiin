import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Docker for Machine Learning: Complete Guide",
  description: "Master Docker for Machine Learning. Learn to containerize ML models, create reproducible environments, and deploy models consistently across any platform.",
  keywords: ["Docker", "machine learning", "containerization", "ML deployment", "Docker containers", "reproducibility", "DevOps"],
  alternates: { canonical: "/data-science/articles/docker-ml" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/docker-ml",
    title: "Docker for Machine Learning: Complete Guide",
    description: "Containerize and deploy ML models with Docker.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Docker for Machine Learning: Complete Guide",
  "description": "Complete guide to Docker for ML deployment",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-25",
  "dateModified": "2024-12-25"
} as const;

export default function DataScienceDockerMlPage() {
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
              <Link href="/data-science">
                {"Data Science"}
              </Link>
              {" / "}
              <span>
                {"Docker for ML"}
              </span>
            </div>
            <h1>
              {"Docker for Machine Learning"}
            </h1>
            <p className="article-subtitle">
              {"Containerize and Deploy ML Models"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"18 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Why Docker for ML?"}
                </h2>
                <p>
                  {"Docker solves the \"it works on my machine\" problem. It packages your model, code, and all dependencies into a container that runs identically everywhere."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Reproducibility:"}
                    </strong>
                    {" Same environment in dev, test, and production"}
                  </li>
                  <li>
                    <strong>
                      {"Portability:"}
                    </strong>
                    {" Run anywhere Docker runs"}
                  </li>
                  <li>
                    <strong>
                      {"Isolation:"}
                    </strong>
                    {" No dependency conflicts"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Easy to scale with Kubernetes"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Basics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check Docker installation
docker --version

# Pull an image
docker pull python:3.11-slim

# Run a container
docker run -it python:3.11-slim python --version

# List running containers
docker ps

# List all containers
docker ps -a

# Stop a container
docker stop container_id

# Remove a container
docker rm container_id

# List images
docker images

# Remove an image
docker rmi image_id`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic ML Dockerfile"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Dockerfile
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    build-essential \\
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for caching)
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Run the application
CMD ["python", "app.py"]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multi-Stage Builds for Smaller Images"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Multi-stage Dockerfile for production
FROM python:3.11-slim as builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y build-essential

# Create virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Production stage
FROM python:3.11-slim as production

WORKDIR /app

# Copy virtual environment from builder
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy application
COPY . .

# Create non-root user
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

EXPOSE 8000
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "app:app"]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GPU Support with NVIDIA Docker"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# GPU-enabled Dockerfile
FROM nvidia/cuda:11.8-cudnn8-runtime-ubuntu22.04

# Install Python
RUN apt-get update && apt-get install -y \\
    python3.11 \\
    python3-pip \\
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python3", "train.py"]

# Build
docker build -t ml-gpu .

# Run with GPU access
docker run --gpus all ml-gpu

# Or specific GPUs
docker run --gpus '"device=0,1"' ml-gpu`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Compose for ML Workflows"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# docker-compose.yml
version: '3.8'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    volumes:
      - ./models:/app/models
    environment:
      - MODEL_PATH=/app/models/model.pkl
      - LOG_LEVEL=INFO
    depends_on:
      - redis
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  worker:
    build: .
    command: celery -A tasks worker --loglevel=info
    depends_on:
      - redis

  mlflow:
    image: ghcr.io/mlflow/mlflow:v2.9.0
    ports:
      - "5000:5000"
    volumes:
      - ./mlruns:/mlruns
    command: mlflow server --host 0.0.0.0 --backend-store-uri sqlite:///mlflow.db

# Commands
docker-compose up -d
docker-compose logs -f api
docker-compose down`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Optimizing Docker Images for ML"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# .dockerignore
__pycache__
*.pyc
*.pyo
.git
.gitignore
*.md
.env
.venv
venv
notebooks/
tests/
*.ipynb
.pytest_cache
.coverage
htmlcov/
data/raw/
*.log

# Optimized requirements installation
# Install heavy packages first (better caching)
COPY requirements-base.txt .
RUN pip install --no-cache-dir -r requirements-base.txt

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Use slim or alpine images when possible
FROM python:3.11-slim  # ~150MB vs ~900MB for full
FROM python:3.11-alpine  # ~50MB (but may have compatibility issues)

# Clear pip cache
RUN pip install --no-cache-dir -r requirements.txt

# Combine RUN commands
RUN apt-get update && apt-get install -y \\
    package1 \\
    package2 \\
    && rm -rf /var/lib/apt/lists/* \\
    && apt-get clean`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Development vs Production"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Dockerfile.dev
FROM python:3.11-slim

WORKDIR /app

COPY requirements-dev.txt .
RUN pip install --no-cache-dir -r requirements-dev.txt

# Mount code as volume for hot reload
CMD ["uvicorn", "app:app", "--reload", "--host", "0.0.0.0"]

# docker-compose.dev.yml
version: '3.8'
services:
  api:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - .:/app  # Mount for hot reload
      - /app/.venv  # Exclude venv
    ports:
      - "8000:8000"
    environment:
      - DEBUG=true

# Run development environment
docker-compose -f docker-compose.dev.yml up`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Serving Models with Docker"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Complete ML API Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy model and code
COPY models/ ./models/
COPY src/ ./src/
COPY app.py .

# Set environment variables
ENV MODEL_PATH=/app/models/model.joblib
ENV PORT=8000

EXPOSE $PORT

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
    CMD curl -f http://localhost:$PORT/health || exit 1

# Run with Gunicorn
CMD gunicorn app:app \\
    --workers 4 \\
    --worker-class uvicorn.workers.UvicornWorker \\
    --bind 0.0.0.0:$PORT \\
    --timeout 120 \\
    --access-logfile - \\
    --error-logfile -`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Container Registry and Deployment"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Build and tag
docker build -t myapp:v1.0 .

# Tag for registry
docker tag myapp:v1.0 registry.example.com/myapp:v1.0

# Push to registry
docker push registry.example.com/myapp:v1.0

# AWS ECR
aws ecr get-login-password --region us-east-1 | \\
    docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com

docker tag myapp:v1.0 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:v1.0
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:v1.0

# Google Container Registry
gcloud auth configure-docker
docker tag myapp:v1.0 gcr.io/my-project/myapp:v1.0
docker push gcr.io/my-project/myapp:v1.0

# Docker Hub
docker login
docker tag myapp:v1.0 username/myapp:v1.0
docker push username/myapp:v1.0`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Pin versions:"}
                    </strong>
                    {" Use specific image tags, not :latest"}
                  </li>
                  <li>
                    <strong>
                      {"Non-root user:"}
                    </strong>
                    {" Run containers as non-root for security"}
                  </li>
                  <li>
                    <strong>
                      {"Health checks:"}
                    </strong>
                    {" Always include health check endpoints"}
                  </li>
                  <li>
                    <strong>
                      {"Logging:"}
                    </strong>
                    {" Log to stdout/stderr for container orchestrators"}
                  </li>
                  <li>
                    <strong>
                      {"Secrets:"}
                    </strong>
                    {" Use environment variables or secrets management"}
                  </li>
                  <li>
                    <strong>
                      {"Layer caching:"}
                    </strong>
                    {" Order Dockerfile commands by change frequency"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master ML Deployment"}
                </h2>
                <p>
                  {"Our Data Science program covers Docker, Kubernetes, and cloud deployment. Learn to deploy production-ready ML systems."}
                </p>
                <Link href="/data-science" className="btn btn-primary">
                  {"Explore Data Science Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-science/articles/fastapi" className="related-article-card">
                    <h4>
                      {"FastAPI"}
                    </h4>
                    {" "}
                    <p>
                      {"Build ML APIs with FastAPI"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/mlops" className="related-article-card">
                    <h4>
                      {"MLOps"}
                    </h4>
                    {" "}
                    <p>
                      {"End-to-end ML lifecycle"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/aws-sagemaker" className="related-article-card">
                    <h4>
                      {"AWS SageMaker"}
                    </h4>
                    {" "}
                    <p>
                      {"Cloud ML deployment"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Docker for ML."} />
    </>
  );
}
