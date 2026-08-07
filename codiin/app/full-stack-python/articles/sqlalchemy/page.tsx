import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SQLAlchemy ORM Guide for Python Developers",
  description: "Learn SQLAlchemy - Python's powerful ORM toolkit. Master models, sessions, queries, and understand when to use ORM vs raw SQL for database operations.",
  keywords: ["SQLAlchemy tutorial", "Python ORM", "SQLAlchemy models", "database sessions", "SQLAlchemy queries"],
  alternates: { canonical: "/full-stack-python/articles/sqlalchemy" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/sqlalchemy",
    title: "SQLAlchemy: The Database Toolkit for Python",
    description: "Master SQLAlchemy ORM for elegant database interactions in Python applications.",
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
  "headline": "SQLAlchemy: The Database Toolkit for Python",
  "description": "Complete guide to SQLAlchemy ORM for Python developers",
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

export default function FullStackPythonSqlalchemyPage() {
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
                {"SQLAlchemy"}
              </span>
            </div>
            <h1>
              {"SQLAlchemy"}
            </h1>
            <p className="article-subtitle">
              {"The Database Toolkit for Python"}
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
                  {"What is SQLAlchemy?"}
                </h2>
                <p>
                  {"SQLAlchemy is Python's most popular SQL toolkit and Object-Relational Mapping (ORM) library. It provides a full suite of well-known enterprise-level persistence patterns, designed for efficient and high-performing database access."}
                </p>
                <p>
                  {"Think of SQLAlchemy as a translator between Python objects and database tables. Instead of writing SQL queries, you work with Python classes and objects, and SQLAlchemy handles the translation behind the scenes."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use an ORM (SQLAlchemy)?"}
                </h2>
                <p>
                  {"ORMs provide several advantages for web development:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Python, Not SQL:"}
                    </strong>
                    {" Write database operations in Python you know, not SQL you're learning"}
                  </li>
                  <li>
                    <strong>
                      {"Database Agnostic:"}
                    </strong>
                    {" Switch from SQLite to PostgreSQL with minimal code changes"}
                  </li>
                  <li>
                    <strong>
                      {"Type Safety:"}
                    </strong>
                    {" Python IDE autocomplete and type checking for database operations"}
                  </li>
                  <li>
                    <strong>
                      {"Relationship Management:"}
                    </strong>
                    {" Automatically handle foreign keys and joins"}
                  </li>
                  <li>
                    <strong>
                      {"Prevents SQL Injection:"}
                    </strong>
                    {" Parameterized queries by default"}
                  </li>
                  <li>
                    <strong>
                      {"Migration Tools:"}
                    </strong>
                    {" Track and version database schema changes (with Alembic)"}
                  </li>
                  <li>
                    <strong>
                      {"Less Boilerplate:"}
                    </strong>
                    {" No manual cursor management or connection handling"}
                  </li>
                  <li>
                    <strong>
                      {"Powerful Query API:"}
                    </strong>
                    {" Complex queries using method chaining"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"ORM vs Raw SQL: When to Use Each"}
                </h2>
                <p>
                  <strong>
                    {"Use ORM (SQLAlchemy) when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Standard CRUD operations:"}
                    </strong>
                    {" Create, Read, Update, Delete are ORM's bread and butter"}
                  </li>
                  <li>
                    <strong>
                      {"Working with relationships:"}
                    </strong>
                    {" ORM excels at managing related data"}
                  </li>
                  <li>
                    <strong>
                      {"Rapid development:"}
                    </strong>
                    {" Faster to write and maintain than raw SQL"}
                  </li>
                  <li>
                    <strong>
                      {"Database independence:"}
                    </strong>
                    {" Code works across different databases"}
                  </li>
                  <li>
                    <strong>
                      {"Team with varying SQL skills:"}
                    </strong>
                    {" Python developers can contribute"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Use raw SQL when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Complex analytics queries:"}
                    </strong>
                    {" Window functions, complex aggregations"}
                  </li>
                  <li>
                    <strong>
                      {"Performance critical:"}
                    </strong>
                    {" Hand-optimized SQL can be faster"}
                  </li>
                  <li>
                    <strong>
                      {"Bulk operations:"}
                    </strong>
                    {" Inserting 100,000 rows is faster with raw SQL"}
                  </li>
                  <li>
                    <strong>
                      {"Database-specific features:"}
                    </strong>
                    {" PostgreSQL full-text search, JSON operators"}
                  </li>
                  <li>
                    <strong>
                      {"Reporting queries:"}
                    </strong>
                    {" Complex joins and subqueries sometimes clearer in SQL"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Best approach:"}
                  </strong>
                  {" Use ORM for 80% of operations, raw SQL for performance-critical 20%!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started: Setup and Connection"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install SQLAlchemy
pip install sqlalchemy

# Basic setup
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Create database engine
# SQLite (file-based, good for development)
engine = create_engine('sqlite:///myapp.db', echo=True)

# PostgreSQL (production)
engine = create_engine('postgresql://user:password@localhost/dbname')

# MySQL
engine = create_engine('mysql+pymysql://user:password@localhost/dbname')

# Create session factory
Session = sessionmaker(bind=engine)

# Create base class for models
Base = declarative_base()

# Session usage pattern
session = Session()
try:
    # Perform database operations
    session.commit()
except:
    session.rollback()
    raise
finally:
    session.close()

# Or use context manager (recommended)
with Session() as session:
    # Operations here
    session.commit()  # Auto-commits and closes`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Defining Models: Python Classes as Tables"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship (one-to-many)
    posts = relationship('Post', back_populates='author')

    def __repr__(self):
        return f"<User(username='{self.username}')>"

class Post(Base):
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    content = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'))
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    author = relationship('User', back_populates='posts')
    comments = relationship('Comment', back_populates='post')

    def __repr__(self):
        return f"<Post(title='{self.title}')>"

class Comment(Base):
    __tablename__ = 'comments'

    id = Column(Integer, primary_key=True)
    content = Column(String, nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'))
    user_id = Column(Integer, ForeignKey('users.id'))
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    post = relationship('Post', back_populates='comments')
    author = relationship('User')

# Create all tables
Base.metadata.create_all(engine)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CRUD Operations with SQLAlchemy"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# CREATE - Add new records
with Session() as session:
    # Single record
    new_user = User(
        username='alice',
        email='alice@example.com',
        password_hash='hashed_password'
    )
    session.add(new_user)
    session.commit()

    # Access the ID after commit
    print(f"Created user with ID: {new_user.id}")

    # Multiple records
    users = [
        User(username='bob', email='bob@example.com', password_hash='hash'),
        User(username='charlie', email='charlie@example.com', password_hash='hash')
    ]
    session.add_all(users)
    session.commit()

# READ - Query records
with Session() as session:
    # Get all users
    all_users = session.query(User).all()

    # Get first result
    user = session.query(User).first()

    # Get by primary key
    user = session.query(User).get(1)

    # Filter
    active_users = session.query(User).filter(User.is_active == True).all()

    # Multiple filters
    user = session.query(User).filter(
        User.username == 'alice',
        User.is_active == True
    ).first()

    # Or use filter_by (simpler for equality)
    user = session.query(User).filter_by(username='alice').first()

    # LIKE pattern
    users = session.query(User).filter(User.email.like('%@gmail.com')).all()

    # IN clause
    users = session.query(User).filter(User.id.in_([1, 2, 3])).all()

    # Ordering
    users = session.query(User).order_by(User.created_at.desc()).all()

    # Limit and offset (pagination)
    users = session.query(User).limit(10).offset(20).all()

# UPDATE - Modify records
with Session() as session:
    user = session.query(User).filter_by(username='alice').first()
    user.email = 'newemail@example.com'
    session.commit()

    # Bulk update
    session.query(User).filter(User.is_active == False).update({
        'is_active': True
    })
    session.commit()

# DELETE - Remove records
with Session() as session:
    user = session.query(User).filter_by(username='alice').first()
    session.delete(user)
    session.commit()

    # Bulk delete
    session.query(User).filter(User.is_active == False).delete()
    session.commit()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Working with Relationships"}
                </h2>
                <div className="code-block">
                  <pre><code>{`with Session() as session:
    # Create user with posts (one-to-many)
    user = User(username='alice', email='alice@example.com', password_hash='hash')

    post1 = Post(title='First Post', content='Hello World!', author=user)
    post2 = Post(title='Second Post', content='Learning SQLAlchemy', author=user)

    session.add(user)  # Also adds posts (cascade)
    session.commit()

    # Access related data (lazy loading by default)
    user = session.query(User).filter_by(username='alice').first()
    print(user.posts)  # Triggers another query to get posts

    # Eager loading (load relationships immediately)
    from sqlalchemy.orm import joinedload

    user = session.query(User).options(
        joinedload(User.posts)
    ).filter_by(username='alice').first()
    print(user.posts)  # No additional query!

    # Access relationship in reverse
    post = session.query(Post).first()
    print(post.author.username)  # Access user from post

    # Count related items
    user = session.query(User).filter_by(username='alice').first()
    post_count = len(user.posts)
    # Or better:
    from sqlalchemy import func
    post_count = session.query(func.count(Post.id)).filter(
        Post.user_id == user.id
    ).scalar()

# Many-to-many relationships
from sqlalchemy import Table

# Association table
post_tags = Table('post_tags', Base.metadata,
    Column('post_id', Integer, ForeignKey('posts.id')),
    Column('tag_id', Integer, ForeignKey('tags.id'))
)

class Tag(Base):
    __tablename__ = 'tags'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)

    posts = relationship('Post', secondary=post_tags, back_populates='tags')

# Update Post model
class Post(Base):
    # ... existing columns ...
    tags = relationship('Tag', secondary=post_tags, back_populates='posts')

# Usage
with Session() as session:
    post = Post(title='Python Tips', content='...')
    tag1 = Tag(name='python')
    tag2 = Tag(name='tutorial')

    post.tags.append(tag1)
    post.tags.append(tag2)

    session.add(post)
    session.commit()

    # Query posts by tag
    posts = session.query(Post).join(Post.tags).filter(
        Tag.name == 'python'
    ).all()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced Queries"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sqlalchemy import func, and_, or_

with Session() as session:
    # Joins
    results = session.query(User, Post).join(Post).all()
    for user, post in results:
        print(f"{user.username}: {post.title}")

    # Left join
    results = session.query(User).outerjoin(Post).all()

    # Aggregation
    post_counts = session.query(
        User.username,
        func.count(Post.id).label('post_count')
    ).join(Post).group_by(User.username).all()

    # Complex filters (AND)
    users = session.query(User).filter(
        and_(
            User.is_active == True,
            User.created_at > '2024-01-01'
        )
    ).all()

    # OR conditions
    users = session.query(User).filter(
        or_(
            User.username == 'alice',
            User.email.like('%@gmail.com')
        )
    ).all()

    # Subqueries
    from sqlalchemy import select
    subq = select(func.count(Post.id)).where(
        Post.user_id == User.id
    ).scalar_subquery()

    users_with_count = session.query(User, subq.label('post_count')).all()

    # Window functions
    from sqlalchemy import over
    query = session.query(
        Post.title,
        func.row_number().over(
            partition_by=Post.user_id,
            order_by=Post.created_at.desc()
        ).label('post_rank')
    )

    # Select specific columns
    usernames = session.query(User.username).all()

    # Distinct
    unique_emails = session.query(User.email).distinct().all()

    # Count
    user_count = session.query(User).count()

    # Exists
    has_posts = session.query(User).filter(
        User.posts.any()
    ).all()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Raw SQL in SQLAlchemy"}
                </h2>
                <p>
                  {"Sometimes you need raw SQL for complex queries or performance:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sqlalchemy import text

with Session() as session:
    # Execute raw SQL
    result = session.execute(
        text("SELECT * FROM users WHERE username = :username"),
        {"username": "alice"}
    )
    users = result.fetchall()

    # Return as model instances
    result = session.execute(
        text("SELECT * FROM users WHERE is_active = TRUE")
    )
    users = [User(**dict(row)) for row in result]

    # Insert with raw SQL
    session.execute(
        text("INSERT INTO users (username, email) VALUES (:user, :email)"),
        {"user": "bob", "email": "bob@example.com"}
    )
    session.commit()

    # Mix ORM and raw SQL
    user_ids = [1, 2, 3]
    result = session.execute(
        text("SELECT * FROM posts WHERE user_id IN :ids"),
        {"ids": tuple(user_ids)}
    )

# Using SQLAlchemy Core (lower level, still not raw SQL)
from sqlalchemy import select

with engine.connect() as conn:
    stmt = select(User).where(User.username == 'alice')
    result = conn.execute(stmt)
    users = result.fetchall()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Database Migrations with Alembic"}
                </h2>
                <p>
                  {"Alembic is SQLAlchemy's migration tool, similar to Django migrations."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install Alembic
pip install alembic

# Initialize Alembic
alembic init alembic

# Configure alembic.ini
sqlalchemy.url = postgresql://user:password@localhost/mydb

# Edit alembic/env.py to use your Base
from myapp.models import Base
target_metadata = Base.metadata

# Create a migration
alembic revision --autogenerate -m "Create users table"

# Review the migration file in alembic/versions/
# Example: alembic/versions/001_create_users_table.py
def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('username', sa.String(50), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )

def downgrade():
    op.drop_table('users')

# Apply migrations
alembic upgrade head

# Rollback
alembic downgrade -1  # One version back
alembic downgrade base  # All the way back

# Check current version
alembic current

# View history
alembic history`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"SQLAlchemy with Flask"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Using Flask-SQLAlchemy extension
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:pass@localhost/db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# Create tables
with app.app_context():
    db.create_all()

# Use in routes
@app.route('/users')
def users():
    all_users = User.query.all()
    return {'users': [u.username for u in all_users]}

@app.route('/user/<username>')
def user(username):
    user = User.query.filter_by(username=username).first_or_404()
    return {'username': user.username}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"SQLAlchemy with FastAPI"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session

DATABASE_URL = "postgresql://user:password@localhost/dbname"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Use in endpoints
@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

@app.post("/users")
def create_user(username: str, email: str, db: Session = Depends(get_db)):
    user = User(username=username, email=email, password_hash="hash")
    db.add(user)
    db.commit()
    db.refresh(user)
    return user`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use sessions properly:"}
                    </strong>
                    {" Always commit or rollback, close sessions"}
                  </li>
                  <li>
                    <strong>
                      {"Eager load relationships:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"joinedload()"}
                    </code>
                    {" to avoid N+1 queries"}
                  </li>
                  <li>
                    <strong>
                      {"Use indexes:"}
                    </strong>
                    {" Add "}
                    <code>
                      {"index=True"}
                    </code>
                    {" to frequently queried columns"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid lazy loading in loops:"}
                    </strong>
                    {" Causes N+1 query problem"}
                  </li>
                  <li>
                    <strong>
                      {"Use scoped sessions:"}
                    </strong>
                    {" For web apps, use "}
                    <code>
                      {"scoped_session"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Migration versioning:"}
                    </strong>
                    {" Use Alembic for all schema changes"}
                  </li>
                  <li>
                    <strong>
                      {"Connection pooling:"}
                    </strong>
                    {" Configure pool size for production"}
                  </li>
                  <li>
                    <strong>
                      {"Use "}
                      <code>
                        {"declarative_base"}
                      </code>
                      {":"}
                    </strong>
                    {" Not classical mapping (outdated)"}
                  </li>
                  <li>
                    <strong>
                      {"Validate at application level:"}
                    </strong>
                    {" ORM doesn't replace validation"}
                  </li>
                  <li>
                    <strong>
                      {"Profile queries:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"echo=True"}
                    </code>
                    {" in development to see SQL"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Pitfalls to Avoid"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"N+1 Query Problem:"}
                    </strong>
                    {" Loading related objects in a loop triggers one query per item"}
                  </li>
                  <li>
                    <strong>
                      {"Forgetting to commit:"}
                    </strong>
                    {" Changes aren't saved without "}
                    <code>
                      {"session.commit()"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Detached instances:"}
                    </strong>
                    {" Objects are detached after session closes"}
                  </li>
                  <li>
                    <strong>
                      {"Using == for None:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"is None"}
                    </code>
                    {", not "}
                    <code>
                      {"== None"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Not handling exceptions:"}
                    </strong>
                    {" Always rollback on errors"}
                  </li>
                  <li>
                    <strong>
                      {"Mixing sessions:"}
                    </strong>
                    {" Don't use objects from different sessions"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master SQLAlchemy with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers SQLAlchemy from basics to advanced ORM patterns. Learn database modeling, query optimization, and integration with Flask and FastAPI."}
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
                  <Link href="/full-stack-python/articles/postgresql" className="related-article-card">
                    <h4>
                      {"PostgreSQL"}
                    </h4>
                    {" "}
                    <p>
                      {"Relational database basics"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/flask" className="related-article-card">
                    <h4>
                      {"Flask Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Web framework using SQLAlchemy"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/rest-apis-python" className="related-article-card">
                    <h4>
                      {"REST APIs in Python"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs with database backends"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn SQLAlchemy ORM."} />
    </>
  );
}
