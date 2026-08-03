import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Docker for Data Engineering: Containerization Guide",
  description: "Learn Docker for Data Engineering - containerization, Docker Compose, building data pipeline images, and deploying data applications.",
  keywords: ["Docker tutorial", "containerization", "Docker Compose", "data engineering containers", "DevOps for data"],
  alternates: { canonical: "/data-engineering/articles/docker" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/docker",
    title: "Docker for Data Engineering: Containerization Guide",
    description: "Master Docker for building and deploying data applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-engineering", label: "Learn Data Engineering", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Docker for Data Engineering: Containerization Guide",
  "description": "Complete guide to Docker for data engineering applications",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-22",
  "dateModified": "2024-12-22"
} as const;

export default function DataEngineeringDockerPage() {
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
              <Link href="/data-engineering">
                {"Data Engineering"}
              </Link>
              {" / "}
              <span>
                {"Docker"}
              </span>
            </div>
            <h1>
              {"Docker for Data Engineering"}
            </h1>
            <p className="article-subtitle">
              {"Containerization for Data Applications"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Why Docker for Data Engineering?"}
                </h2>
                <p>
                  {"Docker enables consistent, reproducible environments for data applications. Whether running locally or in production, containerization ensures your data pipelines work the same everywhere."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Reproducibility:"}
                    </strong>
                    {" Same environment across dev, test, and production"}
                  </li>
                  <li>
                    <strong>
                      {"Isolation:"}
                    </strong>
                    {" Dependencies don't conflict between projects"}
                  </li>
                  <li>
                    <strong>
                      {"Portability:"}
                    </strong>
                    {" Run anywhere Docker is installed"}
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
                  <pre><code>{`# Pull an image
docker pull python:3.11-slim

# Run a container
docker run -it python:3.11-slim python

# Run with volume mount
docker run -v $(pwd):/app -w /app python:3.11-slim python script.py

# List containers
docker ps        # Running containers
docker ps -a     # All containers

# Stop and remove
docker stop container_id
docker rm container_id

# List and remove images
docker images
docker rmi image_id

# Execute command in running container
docker exec -it container_id bash

# View logs
docker logs container_id
docker logs -f container_id  # Follow logs`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dockerfile for Data Pipelines"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Dockerfile for Python ETL Pipeline
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    gcc \\
    libpq-dev \\
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY src/ ./src/
COPY config/ ./config/

# Set environment variables
ENV PYTHONPATH=/app
ENV PYTHONUNBUFFERED=1

# Create non-root user
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# Default command
CMD ["python", "src/main.py"]`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`# requirements.txt
pandas==2.1.0
sqlalchemy==2.0.0
psycopg2-binary==2.9.9
boto3==1.28.0
apache-airflow==2.7.0`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multi-Stage Builds"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Multi-stage build for smaller images
FROM python:3.11 AS builder

WORKDIR /app
COPY requirements.txt .

# Install dependencies in virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
RUN pip install --no-cache-dir -r requirements.txt

# Final stage
FROM python:3.11-slim

# Copy virtual environment from builder
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app
COPY src/ ./src/

# Run as non-root
RUN useradd -m appuser
USER appuser

CMD ["python", "src/main.py"]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Compose for Data Stack"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: dataeng
      POSTGRES_PASSWORD: password
      POSTGRES_DB: warehouse
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U dataeng"]
      interval: 5s
      timeout: 5s
      retries: 5

  airflow:
    image: apache/airflow:2.7.0
    environment:
      AIRFLOW__CORE__EXECUTOR: LocalExecutor
      AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: postgresql+psycopg2://dataeng:password@postgres/airflow
    volumes:
      - ./dags:/opt/airflow/dags
      - ./logs:/opt/airflow/logs
    ports:
      - "8080:8080"
    depends_on:
      postgres:
        condition: service_healthy
    command: >
      bash -c "airflow db init &&
               airflow users create --username admin --password admin
               --firstname Admin --lastname User --role Admin --email admin@example.com &&
               airflow webserver"

  spark:
    image: bitnami/spark:3.5
    environment:
      SPARK_MODE: master
    ports:
      - "8081:8080"
      - "7077:7077"
    volumes:
      - ./spark-apps:/opt/spark-apps

  spark-worker:
    image: bitnami/spark:3.5
    environment:
      SPARK_MODE: worker
      SPARK_MASTER_URL: spark://spark:7077
    depends_on:
      - spark

  jupyter:
    image: jupyter/pyspark-notebook:latest
    ports:
      - "8888:8888"
    volumes:
      - ./notebooks:/home/jovyan/work
    environment:
      JUPYTER_ENABLE_LAB: "yes"

volumes:
  postgres_data:`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Kafka Stack with Docker"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# docker-compose-kafka.yml
version: '3.8'

services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  schema-registry:
    image: confluentinc/cp-schema-registry:7.5.0
    depends_on:
      - kafka
    ports:
      - "8081:8081"
    environment:
      SCHEMA_REGISTRY_HOST_NAME: schema-registry
      SCHEMA_REGISTRY_KAFKASTORE_BOOTSTRAP_SERVERS: kafka:29092

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    ports:
      - "8080:8080"
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:29092
      KAFKA_CLUSTERS_0_SCHEMAREGISTRY: http://schema-registry:8081`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building and Pushing Images"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Build image
docker build -t my-etl-pipeline:1.0 .

# Tag for registry
docker tag my-etl-pipeline:1.0 myregistry.com/my-etl-pipeline:1.0

# Push to registry
docker push myregistry.com/my-etl-pipeline:1.0

# Build with build arguments
docker build \\
    --build-arg PYTHON_VERSION=3.11 \\
    --build-arg ENV=production \\
    -t my-pipeline:prod .

# Build for multiple platforms
docker buildx build \\
    --platform linux/amd64,linux/arm64 \\
    -t my-pipeline:multi \\
    --push .`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Environment Configuration"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# .env file
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USER=dataeng
POSTGRES_PASSWORD=secretpassword
POSTGRES_DB=warehouse
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

# docker-compose.yml with env file
services:
  etl:
    build: .
    env_file:
      - .env
    environment:
      - LOG_LEVEL=INFO

# Use secrets for sensitive data
services:
  etl:
    build: .
    secrets:
      - db_password
    environment:
      - DB_PASSWORD_FILE=/run/secrets/db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Start services
docker-compose up -d

# View logs
docker-compose logs -f service_name

# Scale services
docker-compose up -d --scale spark-worker=3

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Rebuild and restart
docker-compose up -d --build

# Execute command in service
docker-compose exec postgres psql -U dataeng -d warehouse

# Clean up unused resources
docker system prune -a
docker volume prune`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use slim base images:"}
                    </strong>
                    {" python:3.11-slim instead of python:3.11"}
                  </li>
                  <li>
                    <strong>
                      {"Layer caching:"}
                    </strong>
                    {" Copy requirements before code for better caching"}
                  </li>
                  <li>
                    <strong>
                      {"Run as non-root:"}
                    </strong>
                    {" Create and use non-root users"}
                  </li>
                  <li>
                    <strong>
                      {"Use .dockerignore:"}
                    </strong>
                    {" Exclude unnecessary files from build context"}
                  </li>
                  <li>
                    <strong>
                      {"Health checks:"}
                    </strong>
                    {" Add health checks for dependent services"}
                  </li>
                  <li>
                    <strong>
                      {"Tag versions:"}
                    </strong>
                    {" Use specific version tags, not :latest"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Docker with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Engineering program covers Docker and containerization for data applications. Deploy production-ready pipelines with guidance from industry experts."}
                </p>
                <Link href="/data-engineering" className="btn btn-primary">
                  {"Explore Data Engineering Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-engineering/articles/apache-airflow" className="related-article-card">
                    <h4>
                      {"Apache Airflow"}
                    </h4>
                    {" "}
                    <p>
                      {"Orchestrate containers"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/apache-spark" className="related-article-card">
                    <h4>
                      {"Apache Spark"}
                    </h4>
                    {" "}
                    <p>
                      {"Distributed processing"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/etl-pipelines" className="related-article-card">
                    <h4>
                      {"ETL Pipeline Design"}
                    </h4>
                    {" "}
                    <p>
                      {"Build containerized pipelines"}
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
