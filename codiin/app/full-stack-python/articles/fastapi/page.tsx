import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "FastAPI for Beginners: Build Modern Python APIs",
  description: "Learn FastAPI - the modern, fast Python web framework for building APIs. Understand async/await, Pydantic validation, automatic documentation, and more.",
  keywords: ["FastAPI tutorial", "FastAPI for beginners", "Python API framework", "async Python", "Pydantic", "OpenAPI", "REST API Python"],
  alternates: { canonical: "/full-stack-python/articles/fastapi" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/fastapi",
    title: "FastAPI: Modern Python Web Framework",
    description: "Build high-performance APIs with FastAPI's modern features.",
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
  "headline": "FastAPI: Modern Python Web Framework",
  "description": "Complete guide to FastAPI for building APIs",
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

export default function FullStackPythonFastapiPage() {
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
                {"FastAPI"}
              </span>
            </div>
            <h1>
              {"FastAPI"}
            </h1>
            <p className="article-subtitle">
              {"Modern, Fast Python Web Framework for APIs"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"25 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is FastAPI?"}
                </h2>
                <p>
                  {"FastAPI is a modern, high-performance Python web framework for building APIs. It's designed to be fast to code, fast to run, and to reduce bugs through type hints and automatic validation."}
                </p>
                <p>
                  {"Created by Sebastián Ramírez in 2018, FastAPI has quickly become one of the most popular Python frameworks due to its speed, developer experience, and modern features."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why FastAPI?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Fast:"}
                    </strong>
                    {" One of the fastest Python frameworks (on par with Node.js and Go)"}
                  </li>
                  <li>
                    <strong>
                      {"Fast to code:"}
                    </strong>
                    {" 200-300% faster development speed"}
                  </li>
                  <li>
                    <strong>
                      {"Fewer bugs:"}
                    </strong>
                    {" Type hints catch errors before runtime"}
                  </li>
                  <li>
                    <strong>
                      {"Intuitive:"}
                    </strong>
                    {" Great editor support with autocomplete"}
                  </li>
                  <li>
                    <strong>
                      {"Easy:"}
                    </strong>
                    {" Designed to be easy to use and learn"}
                  </li>
                  <li>
                    <strong>
                      {"Standards-based:"}
                    </strong>
                    {" Built on OpenAPI (Swagger) and JSON Schema"}
                  </li>
                  <li>
                    <strong>
                      {"Automatic docs:"}
                    </strong>
                    {" Interactive API documentation generated automatically"}
                  </li>
                  <li>
                    <strong>
                      {"Modern Python:"}
                    </strong>
                    {" Uses async/await for high concurrency"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install FastAPI and Uvicorn (ASGI server)
pip install fastapi uvicorn

# Create main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

# Run the server
# uvicorn main:app --reload

# Visit:
# http://127.0.0.1:8000        - Your API
# http://127.0.0.1:8000/docs   - Swagger UI
# http://127.0.0.1:8000/redoc  - ReDoc`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Path Parameters and Query Parameters"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, Query, Path
from typing import Optional

app = FastAPI()

# Path parameter
@app.get("/users/{user_id}")
def get_user(user_id: int):  # Automatically validated as integer
    return {"user_id": user_id}

# Query parameters
@app.get("/items/")
def list_items(
    skip: int = 0,
    limit: int = 10,
    search: Optional[str] = None  # Optional parameter
):
    return {"skip": skip, "limit": limit, "search": search}

# Validation with Query and Path
@app.get("/products/{product_id}")
def get_product(
    product_id: int = Path(..., gt=0, description="Product ID must be positive"),
    q: str = Query(None, min_length=3, max_length=50)
):
    return {"product_id": product_id, "query": q}

# Multiple path parameters
@app.get("/users/{user_id}/posts/{post_id}")
def get_user_post(user_id: int, post_id: int):
    return {"user_id": user_id, "post_id": post_id}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Request Body with Pydantic"}
                </h2>
                <p>
                  {"FastAPI uses Pydantic for data validation and serialization:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime

app = FastAPI()

# Define data models
class UserBase(BaseModel):
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=50)

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserResponse(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True  # For ORM models

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float = Field(..., gt=0)
    tax: Optional[float] = None
    tags: List[str] = []

# Use in endpoints
@app.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate):
    # user is automatically validated
    # Returns only fields in UserResponse (password excluded)
    return {
        "id": 1,
        "email": user.email,
        "username": user.username,
        "created_at": datetime.now()
    }

@app.post("/items/")
def create_item(item: Item):
    item_dict = item.dict()
    if item.tax:
        item_dict["price_with_tax"] = item.price + item.tax
    return item_dict

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_id": item_id, **item.dict()}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Async/Await for High Performance"}
                </h2>
                <p>
                  {"FastAPI is built on ASGI and supports async operations:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI
import httpx
import asyncio

app = FastAPI()

# Async endpoint
@app.get("/async-example")
async def async_example():
    # Non-blocking I/O
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.github.com")
        return response.json()

# Concurrent requests
@app.get("/fetch-multiple")
async def fetch_multiple():
    async with httpx.AsyncClient() as client:
        # Fetch multiple URLs concurrently
        tasks = [
            client.get("https://api.github.com/users/python"),
            client.get("https://api.github.com/users/fastapi"),
        ]
        responses = await asyncio.gather(*tasks)
        return [r.json() for r in responses]

# When to use async
# Use async def when:
# - Making HTTP requests (httpx, aiohttp)
# - Database queries (asyncpg, databases)
# - File I/O (aiofiles)

# Use regular def when:
# - CPU-bound operations
# - Calling sync libraries
# FastAPI handles both correctly`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dependency Injection"}
                </h2>
                <p>
                  {"FastAPI has a powerful dependency injection system:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

app = FastAPI()
security = HTTPBearer()

# Simple dependency
def get_db():
    db = DatabaseSession()
    try:
        yield db
    finally:
        db.close()

# Using dependencies
@app.get("/items/")
def read_items(db: Session = Depends(get_db)):
    return db.query(Item).all()

# Authentication dependency
def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    user = verify_token(token)  # Your verification logic
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication"
        )
    return user

@app.get("/protected")
def protected_route(user: User = Depends(get_current_user)):
    return {"message": f"Hello, {user.username}"}

# Class-based dependencies
class Pagination:
    def __init__(self, skip: int = 0, limit: int = 10):
        self.skip = skip
        self.limit = limit

@app.get("/users/")
def list_users(pagination: Pagination = Depends()):
    return {"skip": pagination.skip, "limit": pagination.limit}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Database Integration with SQLAlchemy"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql://user:pass@localhost/dbname"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# models.py
from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

# main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(
        email=user.email,
        username=user.username,
        hashed_password=hash_password(user.password)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel

app = FastAPI()

# Using HTTPException
@app.get("/items/{item_id}")
def get_item(item_id: int):
    if item_id not in items_db:
        raise HTTPException(
            status_code=404,
            detail="Item not found",
            headers={"X-Error": "Item missing"}
        )
    return items_db[item_id]

# Custom exception
class ItemNotFoundError(Exception):
    def __init__(self, item_id: int):
        self.item_id = item_id

@app.exception_handler(ItemNotFoundError)
async def item_not_found_handler(request: Request, exc: ItemNotFoundError):
    return JSONResponse(
        status_code=404,
        content={"message": f"Item {exc.item_id} not found"}
    )

# Global exception handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"message": "Internal server error"}
    )`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Background Tasks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, BackgroundTasks

app = FastAPI()

def send_email(email: str, message: str):
    # Simulate sending email
    import time
    time.sleep(5)  # This won't block the response
    print(f"Email sent to {email}")

def write_log(message: str):
    with open("log.txt", "a") as f:
        f.write(f"{message}\\n")

@app.post("/send-notification/")
async def send_notification(
    email: str,
    background_tasks: BackgroundTasks
):
    # Add tasks to run in background
    background_tasks.add_task(send_email, email, "Welcome!")
    background_tasks.add_task(write_log, f"Notification sent to {email}")

    # Response returned immediately
    return {"message": "Notification will be sent"}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"API Documentation"}
                </h2>
                <p>
                  {"FastAPI automatically generates interactive documentation:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="My API",
    description="This is my awesome API",
    version="1.0.0",
    docs_url="/docs",      # Swagger UI
    redoc_url="/redoc",    # ReDoc
)

class Item(BaseModel):
    """An item in the inventory."""
    name: str
    price: float

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Widget",
                "price": 9.99
            }
        }

@app.post(
    "/items/",
    summary="Create an item",
    description="Create a new item with name and price",
    response_description="The created item",
    tags=["items"]
)
def create_item(item: Item):
    """
    Create an item with the following info:

    - **name**: Item name (required)
    - **price**: Item price (required)
    """
    return item

# Visit /docs for Swagger UI
# Visit /redoc for ReDoc`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Project Structure"}
                </h2>
                <div className="code-block">
                  <pre><code>{`my_fastapi_app/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app instance
│   ├── config.py            # Settings and configuration
│   ├── database.py          # Database connection
│   ├── models/              # SQLAlchemy models
│   │   ├── __init__.py
│   │   └── user.py
│   ├── schemas/             # Pydantic models
│   │   ├── __init__.py
│   │   └── user.py
│   ├── routers/             # API routes
│   │   ├── __init__.py
│   │   ├── users.py
│   │   └── items.py
│   ├── services/            # Business logic
│   │   └── user_service.py
│   └── dependencies/        # Dependency injection
│       └── auth.py
├── tests/
│   └── test_main.py
├── requirements.txt
└── Dockerfile`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FastAPI vs Flask vs Django"}
                </h2>
                <div className="code-block">
                  <pre><code>{`                FastAPI         Flask           Django
────────────────────────────────────────────────────────────────
Speed           Very Fast       Moderate        Moderate
Async           Native          Extension       3.1+
Type Hints      Core Feature    Optional        Optional
Auto Docs       Yes             No              No
ORM             SQLAlchemy      SQLAlchemy      Django ORM
Learning        Easy            Very Easy       Moderate
Best For        APIs            Simple Apps     Full Apps

Use FastAPI when:
- Building high-performance APIs
- Need automatic documentation
- Want type safety and validation
- Modern async Python

Use Flask when:
- Simple applications
- Learning web development
- Maximum flexibility needed

Use Django when:
- Need admin interface
- Full-featured web apps
- Rapid development with conventions`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master FastAPI with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers FastAPI in depth. Learn to build high-performance APIs with automatic documentation, validation, and authentication with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/rest-apis-python" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"API design principles"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/jwt" className="related-article-card">
                    <h4>
                      {"JWT"}
                    </h4>
                    {" "}
                    <p>
                      {"Token authentication"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/sqlalchemy" className="related-article-card">
                    <h4>
                      {"SQLAlchemy"}
                    </h4>
                    {" "}
                    <p>
                      {"Database ORM"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn FastAPI."} />
    </>
  );
}
