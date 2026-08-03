import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Microservices Architecture for Beginners",
  description: "Learn Microservices architecture - build scalable, maintainable applications. Understand the concepts, patterns, and Python implementation of microservices.",
  keywords: ["Microservices tutorial", "microservices architecture", "distributed systems", "Python microservices", "FastAPI microservices", "service-oriented architecture"],
  alternates: { canonical: "/full-stack-python/articles/microservices" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/microservices",
    title: "Microservices: Building Distributed Systems",
    description: "Master microservices architecture for scalable applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Microservices: Building Distributed Systems",
  "description": "Complete guide to microservices architecture",
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

export default function FullStackPythonMicroservicesPage() {
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
                {"Microservices"}
              </span>
            </div>
            <h1>
              {"Microservices Architecture"}
            </h1>
            <p className="article-subtitle">
              {"Building Scalable Distributed Systems"}
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
                  {"What are Microservices?"}
                </h2>
                <p>
                  {"Microservices is an architectural style where an application is built as a collection of small, independent services. Each service runs in its own process, owns its data, and communicates with other services through well-defined APIs."}
                </p>
                <p>
                  {"Think of it like a restaurant kitchen. Instead of one chef doing everything, you have specialized stations: one for grilling, one for salads, one for desserts. Each station (service) does one thing well and communicates with others to deliver the complete meal."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Monolith vs Microservices"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Monolith:                          Microservices:
┌─────────────────────────┐       ┌───────┐ ┌───────┐ ┌───────┐
│                         │       │ User  │ │ Order │ │ Pay   │
│    Single Application   │       │Service│ │Service│ │Service│
│                         │       └───┬───┘ └───┬───┘ └───┬───┘
│  Users  Orders  Payment │           │         │         │
│                         │       ┌───┴───┐ ┌───┴───┐ ┌───┴───┐
│    Single Database      │       │  DB   │ │  DB   │ │  DB   │
└─────────────────────────┘       └───────┘ └───────┘ └───────┘

Monolith:                       Microservices:
+ Simple to develop             + Independent deployment
+ Easy to test                  + Technology flexibility
+ Simple deployment             + Scalability per service
- Hard to scale parts           + Fault isolation
- One failure affects all       - Complex infrastructure
- Technology lock-in            - Network complexity
                                - Data consistency challenges`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Principles"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Single Responsibility:"}
                    </strong>
                    {" Each service does one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"Autonomy:"}
                    </strong>
                    {" Services can be developed, deployed, and scaled independently"}
                  </li>
                  <li>
                    <strong>
                      {"Decentralization:"}
                    </strong>
                    {" No central database or governance"}
                  </li>
                  <li>
                    <strong>
                      {"Failure Isolation:"}
                    </strong>
                    {" One service failing doesn't crash others"}
                  </li>
                  <li>
                    <strong>
                      {"Business Domain:"}
                    </strong>
                    {" Services organized around business capabilities"}
                  </li>
                  <li>
                    <strong>
                      {"Smart Endpoints:"}
                    </strong>
                    {" Services contain logic, not the communication layer"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Communication Patterns"}
                </h2>
                <h3>
                  {"1. Synchronous (HTTP/REST)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Order Service calls User Service
import httpx

async def get_user_for_order(user_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"http://user-service/users/{user_id}")
        return response.json()

# Simple, but creates coupling
# If User Service is down, Order Service fails`}</code></pre>
                </div>
                <h3>
                  {"2. Asynchronous (Message Queue)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Order Service publishes event
import pika

def publish_order_created(order_data):
    connection = pika.BlockingConnection(
        pika.ConnectionParameters('rabbitmq')
    )
    channel = connection.channel()
    channel.queue_declare(queue='orders')
    channel.basic_publish(
        exchange='',
        routing_key='orders',
        body=json.dumps(order_data)
    )

# Payment Service consumes event
def callback(ch, method, properties, body):
    order = json.loads(body)
    process_payment(order)

channel.basic_consume(queue='orders', on_message_callback=callback)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Python Microservices Example"}
                </h2>
                <p>
                  {"Let's build a simple e-commerce system with three services:"}
                </p>
                <h3>
                  {"Project Structure"}
                </h3>
                <div className="code-block">
                  <pre><code>{`ecommerce/
├── user-service/
│   ├── app/
│   │   ├── main.py
│   │   └── models.py
│   ├── requirements.txt
│   └── Dockerfile
├── order-service/
│   ├── app/
│   │   ├── main.py
│   │   └── models.py
│   ├── requirements.txt
│   └── Dockerfile
├── notification-service/
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   └── Dockerfile
└── docker-compose.yml`}</code></pre>
                </div>
                <h3>
                  {"User Service"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# user-service/app/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="User Service")

# In-memory database (use PostgreSQL in production)
users_db = {}

class User(BaseModel):
    id: int
    name: str
    email: str

@app.post("/users/")
def create_user(user: User):
    users_db[user.id] = user
    return user

@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    return users_db[user_id]

@app.get("/health")
def health():
    return {"status": "healthy"}`}</code></pre>
                </div>
                <h3>
                  {"Order Service"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# order-service/app/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import httpx
import os

app = FastAPI(title="Order Service")
USER_SERVICE_URL = os.getenv("USER_SERVICE_URL", "http://user-service:8000")

orders_db = {}

class Order(BaseModel):
    id: int
    user_id: int
    product: str
    amount: float

@app.post("/orders/")
async def create_order(order: Order):
    # Verify user exists
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{USER_SERVICE_URL}/users/{order.user_id}")
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="User not found")

    orders_db[order.id] = order

    # Publish event for notification service
    # In production, use RabbitMQ or Kafka
    return {"order": order, "status": "created"}

@app.get("/orders/{order_id}")
def get_order(order_id: int):
    if order_id not in orders_db:
        raise HTTPException(status_code=404, detail="Order not found")
    return orders_db[order_id]`}</code></pre>
                </div>
                <h3>
                  {"Docker Compose"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# docker-compose.yml
version: '3.8'

services:
  user-service:
    build: ./user-service
    ports:
      - "8001:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@user-db/users

  order-service:
    build: ./order-service
    ports:
      - "8002:8000"
    environment:
      - USER_SERVICE_URL=http://user-service:8000
      - DATABASE_URL=postgresql://user:pass@order-db/orders
    depends_on:
      - user-service

  notification-service:
    build: ./notification-service
    environment:
      - RABBITMQ_URL=amqp://rabbitmq
    depends_on:
      - rabbitmq

  rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "15672:15672"

  api-gateway:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - user-service
      - order-service`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"API Gateway Pattern"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# nginx.conf - Simple API Gateway
events {}

http {
    upstream user_service {
        server user-service:8000;
    }

    upstream order_service {
        server order-service:8000;
    }

    server {
        listen 80;

        location /users {
            proxy_pass http://user_service;
        }

        location /orders {
            proxy_pass http://order_service;
        }
    }
}

# Clients only know about one endpoint (the gateway)
# Gateway routes to appropriate services`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Patterns"}
                </h2>
                <h3>
                  {"Service Discovery"}
                </h3>
                <p>
                  {"Services need to find each other. Options: DNS, Consul, Kubernetes DNS."}
                </p>
                <h3>
                  {"Circuit Breaker"}
                </h3>
                <p>
                  {"Prevent cascade failures when a service is down."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Using circuitbreaker library
from circuitbreaker import circuit

@circuit(failure_threshold=5, recovery_timeout=30)
async def call_user_service(user_id):
    response = await client.get(f"{USER_SERVICE}/users/{user_id}")
    return response.json()

# After 5 failures, circuit opens and calls fail fast
# After 30 seconds, tries again`}</code></pre>
                </div>
                <h3>
                  {"Event Sourcing"}
                </h3>
                <p>
                  {"Store events instead of current state. Rebuild state from events."}
                </p>
                <h3>
                  {"Saga Pattern"}
                </h3>
                <p>
                  {"Manage distributed transactions across services."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Microservices"}
                </h2>
                <p>
                  <strong>
                    {"Good for:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Large teams that can own individual services"}
                  </li>
                  <li>
                    {"Applications with varying scaling needs"}
                  </li>
                  <li>
                    {"Systems requiring technology diversity"}
                  </li>
                  <li>
                    {"Organizations with DevOps maturity"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Not ideal for:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Small teams or simple applications"}
                  </li>
                  <li>
                    {"Early-stage startups finding product-market fit"}
                  </li>
                  <li>
                    {"Teams without containerization experience"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Start with a monolith, extract microservices when needed."}
                  </strong>
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Microservices with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers microservices architecture with FastAPI. Learn to build, deploy, and manage distributed systems with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/docker" className="related-article-card">
                    <h4>
                      {"Docker"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize services"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/kubernetes" className="related-article-card">
                    <h4>
                      {"Kubernetes"}
                    </h4>
                    {" "}
                    <p>
                      {"Orchestrate containers"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/fastapi" className="related-article-card">
                    <h4>
                      {"FastAPI"}
                    </h4>
                    {" "}
                    <p>
                      {"Build Python APIs"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Microservices."} />
    </>
  );
}
