import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Celery for Beginners: Background Tasks in Python",
  description: "Learn Celery - distributed task queue for Python. Handle background jobs, scheduled tasks, and async processing in your Django and FastAPI applications.",
  keywords: ["Celery tutorial", "Celery Python", "background tasks", "task queue", "async processing", "scheduled tasks", "Django Celery", "FastAPI Celery"],
  alternates: { canonical: "/full-stack-python/articles/celery" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/celery",
    title: "Celery: Distributed Task Queue for Python",
    description: "Master background job processing with Celery for scalable applications.",
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
  "headline": "Celery: Distributed Task Queue for Python",
  "description": "Complete guide to Celery task queue",
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

export default function FullStackPythonCeleryPage() {
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
                {"Celery"}
              </span>
            </div>
            <h1>
              {"Celery"}
            </h1>
            <p className="article-subtitle">
              {"Distributed Task Queue for Python"}
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
                  {"What is Celery?"}
                </h2>
                <p>
                  {"Celery is a distributed task queue that allows you to run time-consuming operations in the background. Instead of making users wait while your application sends emails, processes images, or generates reports, you can offload these tasks to Celery workers."}
                </p>
                <p>
                  {"Think of Celery like a restaurant kitchen. When you order food, the waiter (your web app) doesn't cook it themselves - they send the order to the kitchen (Celery workers) and continue serving other customers. When the food is ready, it's brought to you."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Celery?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Faster response times:"}
                    </strong>
                    {" Users don't wait for slow operations"}
                  </li>
                  <li>
                    <strong>
                      {"Reliability:"}
                    </strong>
                    {" Tasks are retried if they fail"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Add more workers to handle more load"}
                  </li>
                  <li>
                    <strong>
                      {"Scheduling:"}
                    </strong>
                    {" Run tasks at specific times (like cron)"}
                  </li>
                  <li>
                    <strong>
                      {"Distributed:"}
                    </strong>
                    {" Workers can run on multiple machines"}
                  </li>
                </ul>
                <h3>
                  {"Common Use Cases"}
                </h3>
                <ul>
                  <li>
                    {"Sending emails and notifications"}
                  </li>
                  <li>
                    {"Processing uploaded images/videos"}
                  </li>
                  <li>
                    {"Generating reports and PDFs"}
                  </li>
                  <li>
                    {"Syncing data with external APIs"}
                  </li>
                  <li>
                    {"Periodic cleanup tasks"}
                  </li>
                  <li>
                    {"Machine learning model inference"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Celery Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Your App  │────>│   Broker     │────>│   Worker    │
│  (Producer) │     │ (Redis/RMQ)  │     │ (Consumer)  │
└─────────────┘     └──────────────┘     └─────────────┘
                           │                    │
                           │              ┌─────┴─────┐
                           │              │  Result   │
                           └─────────────>│  Backend  │
                                          └───────────┘

Producer: Your web app that sends tasks
Broker: Message queue (Redis, RabbitMQ)
Worker: Process that executes tasks
Result Backend: Stores task results (Redis, database)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Celery and Redis
pip install celery redis

# Start Redis (using Docker)
docker run -d -p 6379:6379 redis:alpine

# Project structure
myproject/
├── celery_app.py     # Celery configuration
├── tasks.py          # Task definitions
└── main.py           # Your application`}</code></pre>
                </div>
                <h3>
                  {"Configure Celery"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# celery_app.py
from celery import Celery

# Create Celery app
app = Celery(
    'myproject',
    broker='redis://localhost:6379/0',  # Message broker
    backend='redis://localhost:6379/1',  # Result backend
    include=['tasks']  # Module containing tasks
)

# Optional configuration
app.conf.update(
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    timezone='UTC',
    enable_utc=True,
    task_track_started=True,
    task_time_limit=3600,  # 1 hour max
)`}</code></pre>
                </div>
                <h3>
                  {"Define Tasks"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# tasks.py
from celery_app import app
import time

@app.task
def add(x, y):
    return x + y

@app.task
def send_email(to, subject, body):
    # Simulate sending email
    time.sleep(5)
    print(f"Email sent to {to}")
    return {"status": "sent", "to": to}

@app.task(bind=True, max_retries=3)
def process_image(self, image_path):
    try:
        # Process image
        result = do_image_processing(image_path)
        return result
    except Exception as exc:
        # Retry with exponential backoff
        self.retry(exc=exc, countdown=2 ** self.request.retries)`}</code></pre>
                </div>
                <h3>
                  {"Run the Worker"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Start Celery worker
celery -A celery_app worker --loglevel=info

# With multiple workers
celery -A celery_app worker --loglevel=info --concurrency=4`}</code></pre>
                </div>
                <h3>
                  {"Call Tasks"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# main.py
from tasks import add, send_email

# Synchronous call (blocks until complete)
result = add.apply_async((4, 4))
print(result.get())  # Wait for result: 8

# Asynchronous call (returns immediately)
task = send_email.delay("user@example.com", "Hello", "Body")
print(f"Task ID: {task.id}")  # Task is running in background

# Check task status
print(task.status)  # PENDING, STARTED, SUCCESS, FAILURE
print(task.ready())  # True if complete
print(task.successful())  # True if succeeded

# Get result (blocks until ready)
result = task.get(timeout=30)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Task Options and Features"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from celery_app import app
from celery import shared_task

# Task with options
@app.task(
    bind=True,           # Access to self (task instance)
    max_retries=3,       # Max retry attempts
    default_retry_delay=60,  # Delay between retries
    soft_time_limit=300,     # Soft timeout (raises exception)
    time_limit=360,          # Hard timeout (kills task)
    ignore_result=True,      # Don't store result
    queue='high-priority'    # Route to specific queue
)
def critical_task(self, data):
    try:
        process(data)
    except TransientError as exc:
        raise self.retry(exc=exc)

# Shared task (works across apps)
@shared_task
def my_shared_task():
    pass

# Chain tasks
from celery import chain

# Execute tasks in sequence
result = chain(
    add.s(2, 2),      # Returns 4
    add.s(4),         # 4 + 4 = 8
    add.s(8)          # 8 + 8 = 16
)()
print(result.get())  # 16

# Group tasks (run in parallel)
from celery import group

result = group(
    add.s(2, 2),
    add.s(4, 4),
    add.s(8, 8)
)()
print(result.get())  # [4, 8, 16]

# Chord (group + callback)
from celery import chord

callback = add.s(0)  # Sum all results
result = chord(
    [add.s(i, i) for i in range(10)],
    callback
)()
print(result.get())  # 90`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Periodic Tasks with Celery Beat"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# celery_app.py
from celery import Celery
from celery.schedules import crontab

app = Celery('myproject')

app.conf.beat_schedule = {
    # Run every 30 seconds
    'add-every-30-seconds': {
        'task': 'tasks.add',
        'schedule': 30.0,
        'args': (16, 16)
    },

    # Run every Monday at 7:30am
    'weekly-report': {
        'task': 'tasks.generate_report',
        'schedule': crontab(hour=7, minute=30, day_of_week=1),
    },

    # Run daily at midnight
    'cleanup': {
        'task': 'tasks.cleanup_old_data',
        'schedule': crontab(hour=0, minute=0),
    },

    # Run every hour
    'sync-data': {
        'task': 'tasks.sync_external_api',
        'schedule': crontab(minute=0),  # Every hour at :00
    },
}

# Start the beat scheduler
# celery -A celery_app beat --loglevel=info

# Or combined with worker
# celery -A celery_app worker --beat --loglevel=info`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Celery with Django"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# myproject/celery.py
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

app = Celery('myproject')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()  # Auto-discover tasks in all apps

# myproject/__init__.py
from .celery import app as celery_app
__all__ = ('celery_app',)

# settings.py
CELERY_BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/1'

# myapp/tasks.py
from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_welcome_email(user_id):
    from django.contrib.auth import get_user_model
    User = get_user_model()
    user = User.objects.get(id=user_id)
    send_mail(
        'Welcome!',
        'Thanks for signing up.',
        'from@example.com',
        [user.email],
    )

# views.py
from myapp.tasks import send_welcome_email

def register(request):
    user = User.objects.create(...)
    send_welcome_email.delay(user.id)  # Non-blocking
    return redirect('home')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Celery with FastAPI"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# celery_app.py
from celery import Celery

celery = Celery(
    'tasks',
    broker='redis://localhost:6379/0',
    backend='redis://localhost:6379/1'
)

@celery.task
def process_upload(file_id: int):
    # Process uploaded file
    import time
    time.sleep(10)
    return {"file_id": file_id, "status": "processed"}

# main.py
from fastapi import FastAPI, BackgroundTasks
from celery_app import celery, process_upload

app = FastAPI()

@app.post("/upload/")
async def upload_file(file_id: int):
    # Start Celery task
    task = process_upload.delay(file_id)
    return {"task_id": task.id, "status": "processing"}

@app.get("/status/{task_id}")
async def get_status(task_id: str):
    task = celery.AsyncResult(task_id)
    return {
        "task_id": task_id,
        "status": task.status,
        "result": task.result if task.ready() else None
    }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Monitoring with Flower"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Flower
pip install flower

# Run Flower
celery -A celery_app flower --port=5555

# Visit http://localhost:5555 for web dashboard

# Features:
# - Real-time task monitoring
# - Worker status
# - Task history
# - Resource usage
# - Task rate limiting`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Keep tasks idempotent:"}
                    </strong>
                    {" Running a task multiple times should have the same effect as running it once."}
                  </li>
                  <li>
                    <strong>
                      {"Use task retries:"}
                    </strong>
                    {" Handle transient failures gracefully."}
                  </li>
                  <li>
                    <strong>
                      {"Set timeouts:"}
                    </strong>
                    {" Prevent tasks from running forever."}
                  </li>
                  <li>
                    <strong>
                      {"Monitor your queues:"}
                    </strong>
                    {" Use Flower or similar tools."}
                  </li>
                  <li>
                    <strong>
                      {"Use result backend wisely:"}
                    </strong>
                    {" Disable if you don't need results."}
                  </li>
                  <li>
                    <strong>
                      {"Avoid passing large objects:"}
                    </strong>
                    {" Pass IDs instead of full objects."}
                  </li>
                  <li>
                    <strong>
                      {"Use separate queues:"}
                    </strong>
                    {" Route tasks by priority."}
                  </li>
                  <li>
                    <strong>
                      {"Handle exceptions:"}
                    </strong>
                    {" Log errors and use dead letter queues."}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# BAD: Passing large object
@app.task
def process_user(user):  # User object might fail to serialize
    ...

# GOOD: Pass ID, fetch in task
@app.task
def process_user(user_id):
    user = User.objects.get(id=user_id)
    ...`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Celery with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers background task processing with Celery. Learn to build scalable applications that handle async jobs efficiently with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/redis" className="related-article-card">
                    <h4>
                      {"Redis"}
                    </h4>
                    {" "}
                    <p>
                      {"In-memory data store"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/django" className="related-article-card">
                    <h4>
                      {"Django"}
                    </h4>
                    {" "}
                    <p>
                      {"Python web framework"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/fastapi" className="related-article-card">
                    <h4>
                      {"FastAPI"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern Python APIs"}
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
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Celery."} />
    </>
  );
}
