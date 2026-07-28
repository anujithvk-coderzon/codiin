import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Docker Containerization for JavaScript Apps",
  description: "Learn Docker for containerizing JavaScript applications. Master images, containers, Dockerfile, Docker Compose, and deployment workflows.",
  keywords: ["Docker tutorial", "Docker containers", "Dockerfile", "Docker Compose", "Node.js Docker", "containerization", "DevOps"],
  alternates: { canonical: "/full-stack-javascript/articles/docker" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/docker",
    title: "Docker Containerization for JavaScript Apps",
    description: "Master Docker for deploying consistent, scalable applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Docker Containerization for JavaScript Apps",
  "description": "Complete guide to Docker for JavaScript developers",
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

export default function FullStackJavascriptDockerPage() {
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
              <Link href="/full-stack-javascript">
                {"Full Stack JavaScript"}
              </Link>
              {" / "}
              <span>
                {"Docker"}
              </span>
            </div>
            <h1>
              {"Docker Containerization"}
            </h1>
            <p className="article-subtitle">
              {"Deploy Anywhere, Run Everywhere"}
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
                  {"Docker is a platform for developing, shipping, and running applications in containers. Containers package your application with all its dependencies, ensuring it runs the same way everywhere - on your laptop, in testing, and in production."}
                </p>
                <div className="code-block">
                  <pre><code>{`The Problem Docker Solves:

WITHOUT DOCKER                       WITH DOCKER
─────────────────────────────────────────────────────────

Developer's Machine:                 Developer's Machine:
"Works on my machine!"               ┌─────────────────┐
- Node 18                            │   Container     │
- MongoDB 6                          │  Node 18        │
- Redis 7                            │  MongoDB 6      │
                                     │  Redis 7        │
Production Server:                   └─────────────────┘
"Why doesn't it work?!"                     ↓
- Node 16                            Same container
- MongoDB 5                          runs everywhere!
- No Redis                                  ↓
                                     Production Server:
                                     ┌─────────────────┐
                                     │   Container     │
                                     │  Node 18        │
                                     │  MongoDB 6      │
                                     │  Redis 7        │
                                     └─────────────────┘

Docker Benefits:
✓ Consistency across environments
✓ Isolation (apps don't interfere)
✓ Portability (runs anywhere Docker runs)
✓ Fast startup (seconds, not minutes)
✓ Efficient resource usage
✓ Easy scaling`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Concepts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Key Docker Terms:

IMAGE
├── A read-only template with instructions
├── Like a class in OOP
├── Built from a Dockerfile
└── Can be shared via Docker Hub

CONTAINER
├── A running instance of an image
├── Like an object in OOP
├── Isolated process with its own filesystem
└── Can be started, stopped, deleted

DOCKERFILE
├── A text file with build instructions
├── Defines what goes into the image
└── Each instruction creates a layer

DOCKER COMPOSE
├── Tool for multi-container applications
├── Defines services in YAML
└── One command to start everything

DOCKER HUB
├── Cloud registry for Docker images
├── Like npm for Docker
└── Pull official images (node, mongo, etc.)

Visual representation:

┌─────────────────────────────────────────────────┐
│                   DOCKERFILE                     │
│  FROM node:18                                   │
│  COPY . .                                       │
│  RUN npm install                                │
│  CMD ["node", "server.js"]                      │
└─────────────────┬───────────────────────────────┘
                  │ docker build
                  ▼
┌─────────────────────────────────────────────────┐
│                    IMAGE                         │
│  my-app:latest                                  │
│  (read-only template)                           │
└─────────────────┬───────────────────────────────┘
                  │ docker run
                  ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  CONTAINER 1 │ │  CONTAINER 2 │ │  CONTAINER 3 │
│  (running)   │ │  (running)   │ │  (stopped)   │
└──────────────┘ └──────────────┘ └──────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Installing Docker"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Docker Desktop
# Windows/Mac: Download from https://docker.com/get-started

# Linux (Ubuntu)
sudo apt update
sudo apt install docker.io docker-compose
sudo usermod -aG docker $USER  # Run without sudo

# Verify installation
docker --version
docker compose version

# Test Docker
docker run hello-world

# Useful Docker commands
docker images              # List images
docker ps                  # List running containers
docker ps -a               # List all containers
docker pull node:18        # Download image
docker run -it node:18     # Run interactively
docker stop <container>    # Stop container
docker rm <container>      # Remove container
docker rmi <image>         # Remove image
docker logs <container>    # View logs
docker exec -it <container> sh  # Shell into container`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Your First Dockerfile"}
                </h2>
                <p>
                  {"A Dockerfile defines how to build your application image."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Dockerfile for a Node.js application

# Base image - start with official Node image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port (documentation)
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]

# Build the image
docker build -t my-node-app .

# Run the container
docker run -p 3000:3000 my-node-app

# With environment variables
docker run -p 3000:3000 -e NODE_ENV=production my-node-app

# With volume mount (for development)
docker run -p 3000:3000 -v $(pwd):/app my-node-app

# Dockerfile best practices:

# 1. Use specific versions
FROM node:18-alpine        # Good
FROM node:latest           # Bad (unpredictable)

# 2. Use alpine images (smaller)
FROM node:18-alpine        # ~170MB
FROM node:18               # ~1GB

# 3. Order matters for caching
COPY package*.json ./      # Rarely changes
RUN npm ci
COPY . .                   # Changes often

# 4. Use multi-stage builds for production`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multi-Stage Builds"}
                </h2>
                <p>
                  {"Multi-stage builds create smaller, production-optimized images."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Multi-stage Dockerfile for React app

# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# nginx.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Multi-stage for Node.js API

# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build  # If using TypeScript

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Only copy what's needed
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

USER node  # Run as non-root

CMD ["node", "dist/server.js"]

# Image size comparison:
# Single stage: ~800MB
# Multi-stage:  ~150MB`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker Compose"}
                </h2>
                <p>
                  {"Docker Compose manages multi-container applications with a single configuration file."}
                </p>
                <div className="code-block">
                  <pre><code>{`# docker-compose.yml

version: '3.8'

services:
  # Node.js API
  api:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - MONGODB_URI=mongodb://mongo:27017/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - mongo
      - redis
    volumes:
      - ./backend:/app
      - /app/node_modules  # Preserve node_modules
    command: npm run dev

  # React Frontend
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    command: npm run dev

  # MongoDB Database
  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password

  # Redis Cache
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  mongo_data:
  redis_data:

# Commands
docker compose up              # Start all services
docker compose up -d           # Start in background
docker compose down            # Stop and remove containers
docker compose logs            # View logs
docker compose logs api        # View specific service logs
docker compose exec api sh     # Shell into container
docker compose build           # Rebuild images
docker compose up --build      # Rebuild and start`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Development Workflow"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Project structure
my-project/
├── docker-compose.yml
├── docker-compose.prod.yml
├── backend/
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   └── src/
└── frontend/
    ├── Dockerfile
    ├── Dockerfile.dev
    └── src/

# Dockerfile.dev (development)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Don't copy code - use volumes instead
# COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# docker-compose.yml (development)
version: '3.8'

services:
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile.dev
    volumes:
      - ./backend:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development

# docker-compose.prod.yml (production)
version: '3.8'

services:
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always

# Start development
docker compose up

# Start production
docker compose -f docker-compose.prod.yml up -d

# Hot reloading works because:
# 1. Code is mounted via volumes
# 2. nodemon/vite watches for changes
# 3. Changes on host reflect in container`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Networking"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Docker networks allow containers to communicate

# Compose creates a default network
# Services can reach each other by name

services:
  api:
    # ...
    environment:
      # Use service name as hostname
      - MONGODB_URI=mongodb://mongo:27017/db
      - REDIS_URL=redis://redis:6379

  mongo:
    image: mongo:6

  redis:
    image: redis:alpine

# How it works:
#
# ┌─────────────────────────────────────────────┐
# │           Docker Network                     │
# │                                              │
# │  ┌─────┐      ┌───────┐      ┌───────┐     │
# │  │ api │ ───► │ mongo │      │ redis │     │
# │  │     │ ───────────────────►│       │     │
# │  └─────┘      └───────┘      └───────┘     │
# │     ▲                                       │
# │     │ port 3000:3000                        │
# └─────┼───────────────────────────────────────┘
#       │
#    Outside world

# Custom networks
version: '3.8'

services:
  api:
    networks:
      - frontend
      - backend

  frontend:
    networks:
      - frontend

  mongo:
    networks:
      - backend

networks:
  frontend:
  backend:

# api can reach both frontend and backend
# frontend cannot reach mongo (different network)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Environment Variables & Secrets"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# .env file (development)
NODE_ENV=development
MONGODB_URI=mongodb://mongo:27017/myapp
JWT_SECRET=dev-secret-key
API_PORT=3000

# docker-compose.yml
services:
  api:
    env_file:
      - .env
    environment:
      # Override or add variables
      - EXTRA_VAR=value

# Or load specific env file
services:
  api:
    env_file:
      - .env.development

# .env.production
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=\${JWT_SECRET}  # From host

# Docker secrets (for sensitive data)
version: '3.8'

services:
  api:
    secrets:
      - db_password
      - jwt_secret
    environment:
      - DB_PASSWORD_FILE=/run/secrets/db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
  jwt_secret:
    external: true  # Created outside compose

# Reading secrets in Node.js
const fs = require('fs');

function getSecret(name) {
    try {
        return fs.readFileSync(\`/run/secrets/\${name}\`, 'utf8').trim();
    } catch {
        return process.env[name.toUpperCase()];
    }
}

const dbPassword = getSecret('db_password');

# .dockerignore (exclude from build)
node_modules
npm-debug.log
.env
.env.*
.git
.gitignore
README.md
docker-compose*.yml
Dockerfile*
.dockerignore`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Production Deployment"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Production Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --production  # Remove dev dependencies

FROM node:18-alpine

WORKDIR /app

# Security: run as non-root user
RUN addgroup -g 1001 nodejs && \\
    adduser -S -u 1001 -G nodejs nodejs

COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./

USER nodejs

EXPOSE 3000

# Use exec form for proper signal handling
CMD ["node", "dist/server.js"]

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# docker-compose.prod.yml
version: '3.8'

services:
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - api
    restart: always

# Deploy to server
scp docker-compose.prod.yml user@server:~/app/
ssh user@server "cd ~/app && docker compose -f docker-compose.prod.yml up -d"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Docker with CI/CD"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# GitHub Actions workflow
# .github/workflows/deploy.yml

name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: |
            username/myapp:latest
            username/myapp:\${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /app
            docker compose pull
            docker compose up -d
            docker image prune -f

# Push to Docker Hub manually
docker build -t username/myapp:latest .
docker push username/myapp:latest

# Pull and run on server
docker pull username/myapp:latest
docker run -d -p 3000:3000 username/myapp:latest`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Docker Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Image commands
docker build -t myapp .           # Build image
docker build -t myapp:v1 .        # With tag
docker images                      # List images
docker rmi myapp                   # Remove image
docker image prune                 # Remove unused images

# Container commands
docker run myapp                   # Run container
docker run -d myapp                # Run in background
docker run -p 3000:3000 myapp     # Map ports
docker run -v $(pwd):/app myapp   # Mount volume
docker run --name api myapp       # Name container
docker run -e NODE_ENV=prod myapp # Set env var
docker run --rm myapp             # Remove after stop

docker ps                          # List running
docker ps -a                       # List all
docker stop api                    # Stop container
docker start api                   # Start container
docker rm api                      # Remove container
docker logs api                    # View logs
docker logs -f api                 # Follow logs
docker exec -it api sh            # Shell access

# Compose commands
docker compose up                  # Start services
docker compose up -d               # Background
docker compose up --build          # Rebuild
docker compose down                # Stop and remove
docker compose logs                # View logs
docker compose ps                  # List containers
docker compose exec api sh        # Shell access

# Cleanup commands
docker system prune                # Remove unused data
docker volume prune                # Remove volumes
docker network prune               # Remove networks

# Debugging
docker inspect api                 # Container details
docker stats                       # Resource usage
docker top api                     # Running processes`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use specific image tags:"}
                    </strong>
                    {" node:18-alpine, not node:latest"}
                  </li>
                  <li>
                    <strong>
                      {"Use alpine images:"}
                    </strong>
                    {" Smaller and more secure"}
                  </li>
                  <li>
                    <strong>
                      {"Multi-stage builds:"}
                    </strong>
                    {" Reduce production image size"}
                  </li>
                  <li>
                    <strong>
                      {"Don't run as root:"}
                    </strong>
                    {" Create a non-root user"}
                  </li>
                  <li>
                    <strong>
                      {"Use .dockerignore:"}
                    </strong>
                    {" Exclude unnecessary files"}
                  </li>
                  <li>
                    <strong>
                      {"One process per container:"}
                    </strong>
                    {" Keep containers focused"}
                  </li>
                  <li>
                    <strong>
                      {"Use health checks:"}
                    </strong>
                    {" Monitor container health"}
                  </li>
                  <li>
                    <strong>
                      {"Tag images properly:"}
                    </strong>
                    {" Use semantic versioning"}
                  </li>
                  <li>
                    <strong>
                      {"Scan for vulnerabilities:"}
                    </strong>
                    {" docker scan myimage"}
                  </li>
                  <li>
                    <strong>
                      {"Keep images small:"}
                    </strong>
                    {" Remove unnecessary files and layers"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Docker for JavaScript"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers Docker and modern deployment practices. Build production-ready applications with expert guidance."}
                </p>
                <Link href="/full-stack-javascript" className="btn btn-primary">
                  {"Explore JavaScript Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-javascript/articles/nodejs" className="related-article-card">
                    <h4>
                      {"Node.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Build backend applications"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/git-version-control" className="related-article-card">
                    <h4>
                      {"Git Version Control"}
                    </h4>
                    {" "}
                    <p>
                      {"Version control basics"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/mongodb" className="related-article-card">
                    <h4>
                      {"MongoDB"}
                    </h4>
                    {" "}
                    <p>
                      {"Database in containers"}
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
