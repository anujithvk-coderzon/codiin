import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Redis for Beginners: Caching and Beyond",
  description: "Learn Redis fundamentals - in-memory data store for caching, sessions, and real-time features. A beginner's guide to Redis with Python.",
  keywords: ["Redis tutorial", "Redis Python", "caching", "in-memory database", "session management", "Redis commands", "Django Redis"],
  alternates: { canonical: "/full-stack-python/articles/redis" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/redis",
    title: "Redis: In-Memory Data Store for Python",
    description: "Master Redis for caching and real-time applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Redis: In-Memory Data Store for Python",
  "description": "Complete guide to Redis with Python",
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

export default function FullStackPythonRedisPage() {
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
                {"Redis"}
              </span>
            </div>
            <h1>
              {"Redis"}
            </h1>
            <p className="article-subtitle">
              {"In-Memory Data Store for Speed"}
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
                  {"What is Redis?"}
                </h2>
                <p>
                  {"Redis (Remote Dictionary Server) is an in-memory data structure store. It keeps data in RAM, making it incredibly fast - operations complete in microseconds rather than milliseconds."}
                </p>
                <p>
                  {"Think of Redis like a super-fast notepad that your application can use to quickly store and retrieve information without going to the slower database every time."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Redis?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Speed:"}
                    </strong>
                    {" Reads/writes in microseconds (1000x faster than disk)"}
                  </li>
                  <li>
                    <strong>
                      {"Caching:"}
                    </strong>
                    {" Store frequently accessed data to reduce database load"}
                  </li>
                  <li>
                    <strong>
                      {"Sessions:"}
                    </strong>
                    {" Store user session data for web apps"}
                  </li>
                  <li>
                    <strong>
                      {"Real-time:"}
                    </strong>
                    {" Pub/sub messaging, leaderboards, counters"}
                  </li>
                  <li>
                    <strong>
                      {"Rate limiting:"}
                    </strong>
                    {" Control API request rates"}
                  </li>
                  <li>
                    <strong>
                      {"Queues:"}
                    </strong>
                    {" Simple job queues (with Celery)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Redis
# Mac: brew install redis
# Ubuntu: sudo apt install redis-server
# Windows: Use Docker or WSL

# Start Redis
redis-server

# Or with Docker
docker run -d -p 6379:6379 redis:alpine

# Install Python client
pip install redis

# Connect from Python
import redis

r = redis.Redis(host='localhost', port=6379, db=0)

# Test connection
r.ping()  # Returns True if connected`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic Operations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Strings (most common)
r.set('name', 'John')           # Set a value
r.get('name')                    # Get a value: 'John'
r.set('count', 10)
r.incr('count')                  # Increment: 11
r.decr('count')                  # Decrement: 10
r.incrby('count', 5)             # Increment by 5: 15

# Set with expiration
r.setex('token', 3600, 'abc123')  # Expires in 1 hour
r.set('temp', 'value', ex=60)     # Alternative syntax
r.ttl('token')                    # Check time to live

# Check if key exists
r.exists('name')                  # Returns 1 if exists

# Delete keys
r.delete('name')
r.delete('key1', 'key2', 'key3')  # Delete multiple

# Lists
r.lpush('queue', 'task1')         # Push to front
r.rpush('queue', 'task2')         # Push to back
r.lpop('queue')                   # Pop from front
r.rpop('queue')                   # Pop from back
r.lrange('queue', 0, -1)          # Get all items

# Sets (unique values)
r.sadd('tags', 'python', 'redis', 'web')
r.smembers('tags')                # Get all members
r.sismember('tags', 'python')     # Check membership

# Hashes (objects/dictionaries)
r.hset('user:1', 'name', 'John')
r.hset('user:1', 'email', 'john@example.com')
r.hget('user:1', 'name')          # Get single field
r.hgetall('user:1')               # Get all fields

# Sorted sets (with scores)
r.zadd('leaderboard', {'player1': 100, 'player2': 85})
r.zrange('leaderboard', 0, -1, withscores=True)
r.zincrby('leaderboard', 10, 'player1')  # Add to score`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Caching Pattern"}
                </h2>
                <p>
                  {"The most common use of Redis - cache expensive operations:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import redis
import json

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

def get_user_data(user_id: int):
    # Check cache first
    cache_key = f"user:{user_id}"
    cached = r.get(cache_key)

    if cached:
        print("Cache hit!")
        return json.loads(cached)

    # Cache miss - get from database
    print("Cache miss - querying database")
    user = db.query(User).filter(User.id == user_id).first()

    if user:
        # Store in cache for 1 hour
        r.setex(cache_key, 3600, json.dumps(user.to_dict()))

    return user.to_dict()

# Invalidate cache when data changes
def update_user(user_id: int, data: dict):
    db.query(User).filter(User.id == user_id).update(data)
    db.commit()

    # Delete cached data
    r.delete(f"user:{user_id}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Django with Redis"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install
pip install django-redis

# settings.py
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': 'redis://localhost:6379/1',
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}

# Session storage
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
SESSION_CACHE_ALIAS = 'default'

# Using cache in views
from django.core.cache import cache

def my_view(request):
    # Try to get from cache
    data = cache.get('my_data')

    if data is None:
        data = expensive_operation()
        cache.set('my_data', data, timeout=3600)

    return JsonResponse(data)

# Cache decorator
from django.views.decorators.cache import cache_page

@cache_page(60 * 15)  # Cache for 15 minutes
def my_view(request):
    return render(request, 'template.html')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FastAPI with Redis"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, Depends
import redis
import json

app = FastAPI()

# Connection pool for better performance
pool = redis.ConnectionPool(host='localhost', port=6379, db=0)

def get_redis():
    return redis.Redis(connection_pool=pool, decode_responses=True)

@app.get("/users/{user_id}")
async def get_user(user_id: int, r: redis.Redis = Depends(get_redis)):
    cache_key = f"user:{user_id}"

    # Try cache
    cached = r.get(cache_key)
    if cached:
        return json.loads(cached)

    # Get from database
    user = await fetch_user_from_db(user_id)

    # Cache for 1 hour
    r.setex(cache_key, 3600, json.dumps(user))
    return user`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Rate Limiting"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import redis
from datetime import datetime

r = redis.Redis(host='localhost', port=6379)

def is_rate_limited(user_id: str, limit: int = 100, window: int = 60) -> bool:
    """
    Allow 'limit' requests per 'window' seconds
    """
    key = f"rate_limit:{user_id}:{datetime.now().minute}"

    current = r.incr(key)

    if current == 1:
        r.expire(key, window)

    return current > limit

# Usage
user_id = "user123"

if is_rate_limited(user_id, limit=10, window=60):
    return {"error": "Rate limit exceeded. Try again later."}

# Process request...`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Pub/Sub (Real-time Messaging)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import redis

r = redis.Redis(host='localhost', port=6379)

# Publisher
def publish_message(channel, message):
    r.publish(channel, message)

publish_message('notifications', 'New order received!')

# Subscriber (run in separate process)
def subscribe_to_channel(channel):
    pubsub = r.pubsub()
    pubsub.subscribe(channel)

    for message in pubsub.listen():
        if message['type'] == 'message':
            print(f"Received: {message['data']}")

# Use case: Real-time notifications, chat, live updates`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use connection pools:"}
                    </strong>
                    {" Reuse connections for better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Set TTL on keys:"}
                    </strong>
                    {" Prevent memory from filling up"}
                  </li>
                  <li>
                    <strong>
                      {"Use namespaced keys:"}
                    </strong>
                    <code>
                      {"user:123:profile"}
                    </code>
                    {" not just "}
                    <code>
                      {"profile"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Monitor memory:"}
                    </strong>
                    {" Redis is in-memory, watch usage"}
                  </li>
                  <li>
                    <strong>
                      {"Use pipelines:"}
                    </strong>
                    {" Batch multiple commands for speed"}
                  </li>
                  <li>
                    <strong>
                      {"Don't cache everything:"}
                    </strong>
                    {" Only cache expensive operations"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Pipeline for multiple operations
pipe = r.pipeline()
pipe.set('key1', 'value1')
pipe.set('key2', 'value2')
pipe.incr('counter')
results = pipe.execute()  # All at once`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Redis with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers Redis for caching and real-time features. Learn to build high-performance applications with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/celery" className="related-article-card">
                    <h4>
                      {"Celery"}
                    </h4>
                    {" "}
                    <p>
                      {"Background tasks with Redis"}
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

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Redis."} />
    </>
  );
}
