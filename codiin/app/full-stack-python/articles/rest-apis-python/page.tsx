import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "REST APIs in Python: Complete Guide",
  description: "Learn REST APIs in Python - Django REST Framework, Flask-RESTful, FastAPI, serializers, authentication. Master API design patterns in the Python ecosystem.",
  keywords: ["REST API Python", "Django REST Framework", "Flask API", "FastAPI", "API serializers", "Python web APIs"],
  alternates: { canonical: "/full-stack-python/articles/rest-apis-python" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/rest-apis-python",
    title: "REST APIs in Python: Building Modern Web Services",
    description: "Master REST API development with Django REST Framework, Flask, and FastAPI.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "REST APIs in Python: Building Modern Web Services",
  "description": "Complete guide to building REST APIs with Python frameworks",
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

export default function FullStackPythonRestApisPythonPage() {
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
                {"REST APIs in Python"}
              </span>
            </div>
            <h1>
              {"REST APIs in Python"}
            </h1>
            <p className="article-subtitle">
              {"Building Modern Web Services"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"30 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is a REST API?"}
                </h2>
                <p>
                  {"REST (Representational State Transfer) is an architectural style for building web services. A REST API allows different applications to communicate over HTTP using standard methods (GET, POST, PUT, DELETE) and exchange data in formats like JSON."}
                </p>
                <p>
                  {"Think of an API as a waiter in a restaurant: you (the client) tell the waiter (API) what you want from the menu (available endpoints), and the waiter brings it from the kitchen (server/database). You don't need to know how the food is prepared - you just need to know how to order!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why REST APIs?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Separation of Concerns:"}
                    </strong>
                    {" Frontend and backend can be developed independently"}
                  </li>
                  <li>
                    <strong>
                      {"Multiple Clients:"}
                    </strong>
                    {" Same API serves web, mobile, IoT, third-party apps"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Stateless design allows horizontal scaling"}
                  </li>
                  <li>
                    <strong>
                      {"Technology Independence:"}
                    </strong>
                    {" React frontend can talk to Python backend"}
                  </li>
                  <li>
                    <strong>
                      {"Reusability:"}
                    </strong>
                    {" One API for many different interfaces"}
                  </li>
                  <li>
                    <strong>
                      {"Standard Protocol:"}
                    </strong>
                    {" HTTP is universal and well-understood"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices:"}
                    </strong>
                    {" Break monoliths into independent services"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"REST API Principles"}
                </h2>
                <div className="code-block">
                  <pre><code>{`1. Resources and URLs
   - Everything is a resource (user, post, product)
   - Each resource has a unique URL

   GET  /api/users          → List all users
   GET  /api/users/1        → Get user with ID 1
   POST /api/users          → Create new user
   PUT  /api/users/1        → Update user 1
   DELETE /api/users/1      → Delete user 1

2. HTTP Methods (Verbs)
   GET     → Retrieve data (safe, idempotent)
   POST    → Create new resource
   PUT     → Update entire resource (idempotent)
   PATCH   → Update partial resource
   DELETE  → Remove resource (idempotent)

3. Status Codes
   200 OK              → Success
   201 Created         → Resource created
   204 No Content      → Success, no response body
   400 Bad Request     → Invalid input
   401 Unauthorized    → Authentication required
   403 Forbidden       → Authenticated but no permission
   404 Not Found       → Resource doesn't exist
   500 Server Error    → Something broke on server

4. Stateless
   - Each request contains all needed information
   - Server doesn't store client state
   - Use tokens (JWT) for authentication

5. JSON Format (standard)
   {
     "id": 1,
     "username": "alice",
     "email": "alice@example.com"
   }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Django REST Framework (DRF)"}
                </h2>
                <p>
                  {"DRF is the most popular toolkit for building Web APIs with Django. It's powerful, flexible, and production-ready."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install Django REST Framework
pip install djangorestframework

# settings.py
INSTALLED_APPS = [
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

# models.py
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    isbn = models.CharField(max_length=13, unique=True)
    published_date = models.DateField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.title

# serializers.py (convert models to/from JSON)
from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'isbn', 'published_date', 'price']

    # Custom validation
    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError("Price must be positive")
        return value

# views.py (using ViewSets - most powerful)
from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    # Custom action
    @action(detail=False, methods=['get'])
    def recent(self, request):
        recent_books = Book.objects.order_by('-published_date')[:5]
        serializer = self.get_serializer(recent_books, many=True)
        return Response(serializer.data)

# urls.py
from rest_framework.routers import DefaultRouter
from .views import BookViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

# This creates these endpoints automatically:
# GET    /api/books/          → List books
# POST   /api/books/          → Create book
# GET    /api/books/1/        → Get book 1
# PUT    /api/books/1/        → Update book 1
# PATCH  /api/books/1/        → Partial update
# DELETE /api/books/1/        → Delete book 1
# GET    /api/books/recent/   → Custom action`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DRF: Authentication and Permissions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}

# Generate token for users
from rest_framework.authtoken.models import Token
token = Token.objects.create(user=user)
print(token.key)

# Client sends token in header:
# Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b

# views.py - Custom permissions
from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read permissions for everyone
        if request.method in permissions.SAFE_METHODS:
            return True
        # Write permissions only for owner
        return obj.owner == request.user

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsOwnerOrReadOnly]

# JWT Authentication (more modern)
pip install djangorestframework-simplejwt

# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

# urls.py
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
]

# Client workflow:
# 1. POST /api/token/ with username/password
#    Returns: access token + refresh token
# 2. Use access token in requests:
#    Authorization: Bearer <access_token>
# 3. When access expires, POST to /api/token/refresh/
#    with refresh token to get new access token`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flask-RESTful"}
                </h2>
                <p>
                  {"Flask-RESTful is an extension for Flask that adds support for building REST APIs quickly."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install
pip install flask-restful flask-sqlalchemy

# app.py
from flask import Flask
from flask_restful import Resource, Api, reqparse, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)
api = Api(app)

# Model
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Book {self.title}>'

# Serialization format
book_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'author': fields.String,
    'price': fields.Float
}

# Request parser (validation)
book_parser = reqparse.RequestParser()
book_parser.add_argument('title', type=str, required=True, help='Title is required')
book_parser.add_argument('author', type=str, required=True)
book_parser.add_argument('price', type=float, required=True)

# Resources (endpoints)
class BookList(Resource):
    @marshal_with(book_fields)
    def get(self):
        return Book.query.all()

    @marshal_with(book_fields)
    def post(self):
        args = book_parser.parse_args()
        book = Book(
            title=args['title'],
            author=args['author'],
            price=args['price']
        )
        db.session.add(book)
        db.session.commit()
        return book, 201

class BookResource(Resource):
    @marshal_with(book_fields)
    def get(self, book_id):
        return Book.query.get_or_404(book_id)

    @marshal_with(book_fields)
    def put(self, book_id):
        book = Book.query.get_or_404(book_id)
        args = book_parser.parse_args()
        book.title = args['title']
        book.author = args['author']
        book.price = args['price']
        db.session.commit()
        return book

    def delete(self, book_id):
        book = Book.query.get_or_404(book_id)
        db.session.delete(book)
        db.session.commit()
        return '', 204

# Register routes
api.add_resource(BookList, '/api/books')
api.add_resource(BookResource, '/api/books/<int:book_id>')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FastAPI: Modern, Fast, and Auto-Documented"}
                </h2>
                <p>
                  {"FastAPI is a modern framework specifically designed for building APIs. It's incredibly fast and generates automatic API documentation."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install
pip install fastapi uvicorn sqlalchemy pydantic

# main.py
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import sessionmaker, Session, declarative_base
from pydantic import BaseModel, validator

# Database setup
DATABASE_URL = "sqlite:///./books.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# SQLAlchemy Model
class BookDB(Base):
    __tablename__ = "books"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    author = Column(String, nullable=False)
    price = Column(Float, nullable=False)

Base.metadata.create_all(bind=engine)

# Pydantic models (for validation and serialization)
class BookBase(BaseModel):
    title: str
    author: str
    price: float

    @validator('price')
    def price_must_be_positive(cls, v):
        if v <= 0:
            raise ValueError('Price must be positive')
        return v

class BookCreate(BookBase):
    pass

class Book(BookBase):
    id: int

    class Config:
        from_attributes = True

# FastAPI app
app = FastAPI(title="Book API", version="1.0.0")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Endpoints
@app.get("/api/books", response_model=list[Book])
def get_books(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    """Get all books with pagination"""
    books = db.query(BookDB).offset(skip).limit(limit).all()
    return books

@app.get("/api/books/{book_id}", response_model=Book)
def get_book(book_id: int, db: Session = Depends(get_db)):
    """Get a specific book by ID"""
    book = db.query(BookDB).filter(BookDB.id == book_id).first()
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    return book

@app.post("/api/books", response_model=Book, status_code=201)
def create_book(book: BookCreate, db: Session = Depends(get_db)):
    """Create a new book"""
    db_book = BookDB(**book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

@app.put("/api/books/{book_id}", response_model=Book)
def update_book(book_id: int, book: BookCreate, db: Session = Depends(get_db)):
    """Update a book"""
    db_book = db.query(BookDB).filter(BookDB.id == book_id).first()
    if not db_book:
        raise HTTPException(status_code=404, detail="Book not found")

    for key, value in book.dict().items():
        setattr(db_book, key, value)

    db.commit()
    db.refresh(db_book)
    return db_book

@app.delete("/api/books/{book_id}", status_code=204)
def delete_book(book_id: int, db: Session = Depends(get_db)):
    """Delete a book"""
    db_book = db.query(BookDB).filter(BookDB.id == book_id).first()
    if not db_book:
        raise HTTPException(status_code=404, detail="Book not found")
    db.delete(db_book)
    db.commit()
    return None

# Run with: uvicorn main:app --reload
# Visit http://127.0.0.1:8000/docs for auto-generated docs!
# Visit http://127.0.0.1:8000/redoc for alternative docs`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FastAPI: Advanced Features"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Authentication with JWT
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from datetime import datetime, timedelta
import jwt

security = HTTPBearer()
SECRET_KEY = "your-secret-key"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours=1)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm="HS256")

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

@app.post("/api/login")
def login(username: str, password: str):
    # Validate credentials (simplified)
    if username == "admin" and password == "secret":
        token = create_access_token({"sub": username})
        return {"access_token": token, "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/api/protected")
def protected_route(user = Depends(verify_token)):
    return {"message": f"Hello {user['sub']}"}

# Background tasks
from fastapi import BackgroundTasks

def send_email(email: str, message: str):
    # Simulate sending email
    print(f"Sending email to {email}: {message}")

@app.post("/api/send-notification")
def send_notification(email: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email, email, "Your book order confirmed!")
    return {"message": "Notification will be sent"}

# File uploads
from fastapi import File, UploadFile

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    # Process file
    return {"filename": file.filename, "size": len(contents)}

# CORS (for frontend integration)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Choosing the Right Framework"}
                </h2>
                <p>
                  <strong>
                    {"Use Django REST Framework when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Building a full-featured web app with admin panel"}
                  </li>
                  <li>
                    {"Need Django's ecosystem (ORM, auth, admin)"}
                  </li>
                  <li>
                    {"Working with an existing Django project"}
                  </li>
                  <li>
                    {"Team is already familiar with Django"}
                  </li>
                  <li>
                    {"Need robust, battle-tested solution"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Use Flask-RESTful when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Building a simple API without heavy framework"}
                  </li>
                  <li>
                    {"Want flexibility and minimalism"}
                  </li>
                  <li>
                    {"Already using Flask for your project"}
                  </li>
                  <li>
                    {"Need lightweight microservices"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Use FastAPI when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Building modern, high-performance APIs"}
                  </li>
                  <li>
                    {"Want automatic API documentation"}
                  </li>
                  <li>
                    {"Need async support for better performance"}
                  </li>
                  <li>
                    {"Type hints and data validation are priorities"}
                  </li>
                  <li>
                    {"Building microservices or standalone APIs"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"API Design Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use nouns for resources:"}
                    </strong>
                    <code>
                      {"/api/books"}
                    </code>
                    {" not "}
                    <code>
                      {"/api/getBooks"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Use plural names:"}
                    </strong>
                    <code>
                      {"/api/users"}
                    </code>
                    {" not "}
                    <code>
                      {"/api/user"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Nest resources logically:"}
                    </strong>
                    <code>
                      {"/api/users/1/posts"}
                    </code>
                    {" for user's posts"}
                  </li>
                  <li>
                    <strong>
                      {"Version your API:"}
                    </strong>
                    <code>
                      {"/api/v1/books"}
                    </code>
                    {" for future changes"}
                  </li>
                  <li>
                    <strong>
                      {"Use query params for filtering:"}
                    </strong>
                    <code>
                      {"/api/books?author=tolkien"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Implement pagination:"}
                    </strong>
                    {" Don't return 10,000 items at once"}
                  </li>
                  <li>
                    <strong>
                      {"Return appropriate status codes:"}
                    </strong>
                    {" 200, 201, 400, 404, 500"}
                  </li>
                  <li>
                    <strong>
                      {"Provide meaningful error messages:"}
                    </strong>
                    {" Not just \"Error\""}
                  </li>
                  <li>
                    <strong>
                      {"Use HTTPS in production:"}
                    </strong>
                    {" Always encrypt API traffic"}
                  </li>
                  <li>
                    <strong>
                      {"Document your API:"}
                    </strong>
                    {" Use Swagger/OpenAPI (FastAPI does this automatically)"}
                  </li>
                  <li>
                    <strong>
                      {"Rate limiting:"}
                    </strong>
                    {" Prevent abuse with throttling"}
                  </li>
                  <li>
                    <strong>
                      {"CORS headers:"}
                    </strong>
                    {" Allow frontend apps to access your API"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Testing APIs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Using pytest with FastAPI
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_books():
    response = client.get("/api/books")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_book():
    response = client.post("/api/books", json={
        "title": "Test Book",
        "author": "Test Author",
        "price": 19.99
    })
    assert response.status_code == 201
    assert response.json()["title"] == "Test Book"

# Using pytest with DRF
from rest_framework.test import APITestCase

class BookAPITest(APITestCase):
    def test_get_books(self):
        response = self.client.get('/api/books/')
        self.assertEqual(response.status_code, 200)

    def test_create_book(self):
        data = {'title': 'Test Book', 'author': 'Author', 'price': 19.99}
        response = self.client.post('/api/books/', data)
        self.assertEqual(response.status_code, 201)

# Manual testing with curl
curl http://localhost:8000/api/books

curl -X POST http://localhost:8000/api/books \\
  -H "Content-Type: application/json" \\
  -d '{"title": "New Book", "author": "Alice", "price": 29.99}'

# Or use Postman, Insomnia, or HTTPie for easier testing`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master API Development with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers REST API development with Django REST Framework, Flask, and FastAPI. Learn API design, authentication, testing, and deployment with real-world projects."}
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
                  <Link href="/full-stack-python/articles/django" className="related-article-card">
                    <h4>
                      {"Django Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Full-featured web framework"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/flask" className="related-article-card">
                    <h4>
                      {"Flask Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Micro-framework for APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/postgresql" className="related-article-card">
                    <h4>
                      {"PostgreSQL"}
                    </h4>
                    {" "}
                    <p>
                      {"Database for API backends"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn REST API development in Python."} />
    </>
  );
}
