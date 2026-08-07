import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Flask Framework Guide: Lightweight Python Web Apps",
  description: "Learn Flask - Python's micro-framework for web development. Master routing, templates, extensions, and understand when to choose Flask over Django.",
  keywords: ["Flask tutorial", "Flask framework", "Python micro-framework", "Flask routing", "Flask templates", "Flask vs Django"],
  alternates: { canonical: "/full-stack-python/articles/flask" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/flask",
    title: "Flask: The Micro-Framework for Python Web Development",
    description: "Master Flask to build lightweight, flexible web applications with Python.",
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
  "headline": "Flask: The Micro-Framework for Python Web Development",
  "description": "Complete guide to Flask micro-framework for building web applications",
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

export default function FullStackPythonFlaskPage() {
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
                {"Flask"}
              </span>
            </div>
            <h1>
              {"Flask Framework"}
            </h1>
            <p className="article-subtitle">
              {"The Micro-Framework for Python Web Development"}
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
                  {"What is Flask?"}
                </h2>
                <p>
                  {"Flask is a lightweight, flexible Python web framework that provides the essentials for building web applications without imposing a specific structure or dependencies. Created by Armin Ronacher in 2010, Flask follows the \"micro\" philosophy - it's minimal at its core but easily extensible."}
                </p>
                <p>
                  {"Think of Flask as a minimalist apartment - you get the essentials (walls, floor, ceiling), and you choose which furniture to add. Unlike Django's fully-furnished mansion, Flask gives you the freedom to pick exactly what you need."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Flask? The \"Micro\" Philosophy"}
                </h2>
                <p>
                  {"Flask's minimalist approach offers unique advantages:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Simplicity:"}
                    </strong>
                    {" Learn the core in an afternoon, minimal boilerplate code"}
                  </li>
                  <li>
                    <strong>
                      {"Flexibility:"}
                    </strong>
                    {" Choose your own database, ORM, template engine, or auth system"}
                  </li>
                  <li>
                    <strong>
                      {"Lightweight:"}
                    </strong>
                    {" Small codebase, minimal dependencies, easy to understand"}
                  </li>
                  <li>
                    <strong>
                      {"Control:"}
                    </strong>
                    {" You decide the structure and components of your application"}
                  </li>
                  <li>
                    <strong>
                      {"Perfect for APIs:"}
                    </strong>
                    {" Excellent for building RESTful APIs and microservices"}
                  </li>
                  <li>
                    <strong>
                      {"Easy Testing:"}
                    </strong>
                    {" Simple to test due to minimal magic and clear structure"}
                  </li>
                  <li>
                    <strong>
                      {"Great Documentation:"}
                    </strong>
                    {" Clear, comprehensive, and beginner-friendly"}
                  </li>
                  <li>
                    <strong>
                      {"Extensible:"}
                    </strong>
                    {" Rich ecosystem of extensions for any feature you need"}
                  </li>
                </ul>
                <p>
                  {"Flask doesn't include an ORM, form validation, or admin panel by default - but you can add them with extensions when needed!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Flask vs Django: When to Choose Flask"}
                </h2>
                <p>
                  <strong>
                    {"Use Flask when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Building APIs:"}
                    </strong>
                    {" Microservices, REST APIs, or GraphQL backends"}
                  </li>
                  <li>
                    <strong>
                      {"Small to medium projects:"}
                    </strong>
                    {" Personal projects, prototypes, or MVPs"}
                  </li>
                  <li>
                    <strong>
                      {"Learning web development:"}
                    </strong>
                    {" Simpler to understand than Django"}
                  </li>
                  <li>
                    <strong>
                      {"You need flexibility:"}
                    </strong>
                    {" Want to choose your own tools and structure"}
                  </li>
                  <li>
                    <strong>
                      {"Microservices architecture:"}
                    </strong>
                    {" Each service can be a small Flask app"}
                  </li>
                  <li>
                    <strong>
                      {"Minimalist applications:"}
                    </strong>
                    {" Single-page apps, landing pages, or simple tools"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Use Django when:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Complex applications:"}
                    </strong>
                    {" CMS, e-commerce, social networks"}
                  </li>
                  <li>
                    <strong>
                      {"Need built-in admin:"}
                    </strong>
                    {" Django's admin panel saves weeks of development"}
                  </li>
                  <li>
                    <strong>
                      {"Rapid development:"}
                    </strong>
                    {" Django's batteries-included approach is faster initially"}
                  </li>
                  <li>
                    <strong>
                      {"Team with conventions:"}
                    </strong>
                    {" Django enforces structure (good for teams)"}
                  </li>
                </ul>
                <p>
                  {"Many developers use both: Django for full-featured apps, Flask for APIs and microservices!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started: Hello Flask"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Flask
pip install flask

# Minimal Flask application (app.py)
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)

# Run the app
python app.py
# Visit http://127.0.0.1:5000/

# That's it! You have a working web application!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Routing: URL Patterns"}
                </h2>
                <p>
                  {"Routes map URLs to Python functions. Flask makes routing elegant and intuitive."}
                </p>
                <div className="code-block">
                  <pre><code>{`from flask import Flask

app = Flask(__name__)

# Basic route
@app.route('/')
def home():
    return 'Home Page'

# Route with variable
@app.route('/user/<username>')
def profile(username):
    return f'Profile page for {username}'

# Route with type converter
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f'Post {post_id}'

# Multiple HTTP methods
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return 'Processing login...'
    return 'Login form'

# URL building (reverse routing)
from flask import url_for

@app.route('/user/<username>')
def profile(username):
    return f'User: {username}'

# Elsewhere in your code
url = url_for('profile', username='alice')
# url = '/user/alice'

# Dynamic URLs with query parameters
@app.route('/search')
def search():
    query = request.args.get('q', '')
    return f'Searching for: {query}'
# URL: /search?q=flask`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Templates: Jinja2 Templating"}
                </h2>
                <p>
                  {"Flask uses Jinja2 for templates, allowing you to generate dynamic HTML."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Flask view
from flask import render_template

@app.route('/user/<name>')
def user(name):
    return render_template('user.html', username=name)

@app.route('/posts')
def posts():
    posts_list = [
        {'title': 'First Post', 'author': 'Alice'},
        {'title': 'Second Post', 'author': 'Bob'}
    ]
    return render_template('posts.html', posts=posts_list)`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`<!-- templates/base.html -->
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My App{% endblock %}</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <nav>
        <a href="{{ url_for('home') }}">Home</a>
        <a href="{{ url_for('posts') }}">Posts</a>
    </nav>

    <main>
        {% block content %}{% endblock %}
    </main>

    <footer>
        <p>&copy; 2024 My App</p>
    </footer>
</body>
</html>

<!-- templates/user.html -->
{% extends 'base.html' %}

{% block title %}{{ username }}'s Profile{% endblock %}

{% block content %}
    <h1>Welcome, {{ username }}!</h1>
    <p>This is your profile page.</p>
{% endblock %}

<!-- templates/posts.html -->
{% extends 'base.html' %}

{% block content %}
    <h1>Blog Posts</h1>

    {% for post in posts %}
        <article>
            <h2>{{ post.title }}</h2>
            <p>By {{ post.author }}</p>
        </article>
    {% else %}
        <p>No posts available.</p>
    {% endfor %}
{% endblock %}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Request and Response Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from flask import Flask, request, jsonify, redirect, url_for

app = Flask(__name__)

# Access request data
@app.route('/form', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        # Form data
        username = request.form.get('username')
        email = request.form.get('email')

        # Query parameters (?key=value)
        page = request.args.get('page', 1, type=int)

        # JSON data
        data = request.get_json()

        # Headers
        user_agent = request.headers.get('User-Agent')

        # Files
        file = request.files.get('photo')
        if file:
            file.save(f'uploads/{file.filename}')

        return 'Form processed!'

    return '''
        <form method="post">
            <input name="username">
            <input name="email">
            <button>Submit</button>
        </form>
    '''

# Return JSON (perfect for APIs)
@app.route('/api/users')
def api_users():
    users = [
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'}
    ]
    return jsonify(users)

# Redirects
@app.route('/old-page')
def old_page():
    return redirect(url_for('home'))

# Custom status codes
@app.route('/not-found')
def not_found():
    return 'This page does not exist', 404

# Set cookies
from flask import make_response

@app.route('/set-cookie')
def set_cookie():
    response = make_response('Cookie set!')
    response.set_cookie('username', 'alice')
    return response

@app.route('/get-cookie')
def get_cookie():
    username = request.cookies.get('username')
    return f'Username: {username}'`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flask Extensions: Adding Features"}
                </h2>
                <p>
                  {"Flask's extension ecosystem allows you to add features as needed:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install extensions
pip install flask-sqlalchemy flask-login flask-wtf flask-migrate

# Flask-SQLAlchemy (Database ORM)
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)

    def __repr__(self):
        return f'<User {self.username}>'

# Create tables
with app.app_context():
    db.create_all()

# Flask-WTF (Forms with validation)
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # Process login
        return redirect(url_for('home'))
    return render_template('login.html', form=form)

# Flask-Login (User session management)
from flask_login import LoginManager, login_user, logout_user, login_required

login_manager = LoginManager(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/dashboard')
@login_required  # Must be logged in to access
def dashboard():
    return 'Dashboard'

# Flask-Migrate (Database migrations)
from flask_migrate import Migrate

migrate = Migrate(app, db)

# Commands:
# flask db init      (initialize migrations)
# flask db migrate   (create migration)
# flask db upgrade   (apply migration)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a REST API with Flask"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'year': self.year
        }

# GET all books
@app.route('/api/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    return jsonify([book.to_dict() for book in books])

# GET single book
@app.route('/api/books/<int:id>', methods=['GET'])
def get_book(id):
    book = Book.query.get_or_404(id)
    return jsonify(book.to_dict())

# POST create book
@app.route('/api/books', methods=['POST'])
def create_book():
    data = request.get_json()

    book = Book(
        title=data['title'],
        author=data['author'],
        year=data.get('year')
    )
    db.session.add(book)
    db.session.commit()

    return jsonify(book.to_dict()), 201

# PUT update book
@app.route('/api/books/<int:id>', methods=['PUT'])
def update_book(id):
    book = Book.query.get_or_404(id)
    data = request.get_json()

    book.title = data.get('title', book.title)
    book.author = data.get('author', book.author)
    book.year = data.get('year', book.year)

    db.session.commit()
    return jsonify(book.to_dict())

# DELETE book
@app.route('/api/books/<int:id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get_or_404(id)
    db.session.delete(book)
    db.session.commit()
    return '', 204

# Error handling
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Application Structure"}
                </h2>
                <p>
                  {"For larger applications, organize code using Flask blueprints:"}
                </p>
                <div className="code-block">
                  <pre><code>{`myapp/
├── app/
│   ├── __init__.py         # Application factory
│   ├── models.py           # Database models
│   ├── auth/               # Authentication blueprint
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── forms.py
│   ├── blog/               # Blog blueprint
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── forms.py
│   ├── api/                # API blueprint
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── templates/
│   │   ├── base.html
│   │   ├── auth/
│   │   └── blog/
│   └── static/
│       ├── css/
│       └── js/
├── config.py               # Configuration
├── requirements.txt        # Dependencies
└── run.py                  # Entry point

# app/__init__.py (Application Factory)
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)

    from app.auth import auth_bp
    from app.blog import blog_bp
    from app.api import api_bp

    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(blog_bp, url_prefix='/blog')
    app.register_blueprint(api_bp, url_prefix='/api')

    return app

# app/blog/__init__.py
from flask import Blueprint

blog_bp = Blueprint('blog', __name__)

from app.blog import routes

# app/blog/routes.py
from app.blog import blog_bp
from flask import render_template

@blog_bp.route('/')
def index():
    return render_template('blog/index.html')

# run.py
from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Configuration and Environment Variables"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# config.py
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \\
        'sqlite:///app.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False

# .env file
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:pass@localhost/dbname

# Load environment variables
from dotenv import load_dotenv
load_dotenv()

app.config.from_object('config.DevelopmentConfig')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use application factory:"}
                    </strong>
                    {" Create app in a function for flexibility"}
                  </li>
                  <li>
                    <strong>
                      {"Use blueprints:"}
                    </strong>
                    {" Organize code into modules for larger apps"}
                  </li>
                  <li>
                    <strong>
                      {"Environment variables:"}
                    </strong>
                    {" Never hardcode secrets or config"}
                  </li>
                  <li>
                    <strong>
                      {"Use Flask-SQLAlchemy:"}
                    </strong>
                    {" Better than raw SQLAlchemy with Flask"}
                  </li>
                  <li>
                    <strong>
                      {"Error handling:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"@app.errorhandler"}
                    </code>
                    {" for custom error pages"}
                  </li>
                  <li>
                    <strong>
                      {"Use extensions:"}
                    </strong>
                    {" Don't reinvent wheels (auth, forms, migrations)"}
                  </li>
                  <li>
                    <strong>
                      {"Debug mode only in development:"}
                    </strong>
                    {" Never in production!"}
                  </li>
                  <li>
                    <strong>
                      {"Use HTTPS in production:"}
                    </strong>
                    {" Always secure your application"}
                  </li>
                  <li>
                    <strong>
                      {"Write tests:"}
                    </strong>
                    {" Flask has excellent testing support"}
                  </li>
                  <li>
                    <strong>
                      {"Use a production server:"}
                    </strong>
                    {" Gunicorn, uWSGI, not the dev server"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Flask with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers Flask alongside Django, teaching you when to use each framework. Build APIs, microservices, and lightweight web applications with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/rest-apis-python" className="related-article-card">
                    <h4>
                      {"REST APIs in Python"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs with Flask and DRF"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/sqlalchemy" className="related-article-card">
                    <h4>
                      {"SQLAlchemy ORM"}
                    </h4>
                    {" "}
                    <p>
                      {"Database toolkit for Python"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Flask framework."} />
    </>
  );
}
