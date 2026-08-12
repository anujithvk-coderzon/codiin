import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Django Framework Guide: Build Web Apps Fast",
  description: "Learn Django - Python's batteries-included web framework. Master MTV pattern, models, views, templates, ORM, and Django admin for building full-featured web applications.",
  keywords: ["Django tutorial", "Django framework", "Python web framework", "Django ORM", "MTV pattern", "Django admin"],
  alternates: { canonical: "/full-stack-python/articles/django" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/django",
    title: "Django: The Web Framework for Perfectionists with Deadlines",
    description: "Master Django to build powerful, scalable web applications rapidly.",
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
  "headline": "Django: The Web Framework for Perfectionists with Deadlines",
  "description": "Complete guide to Django web framework for building powerful applications",
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

export default function FullStackPythonDjangoPage() {
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
                {"Django"}
              </span>
            </div>
            <h1>
              {"Django Framework"}
            </h1>
            <p className="article-subtitle">
              {"The Web Framework for Perfectionists with Deadlines"}
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
                  {"What is Django?"}
                </h2>
                <p>
                  {"Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Created in 2005 at a newspaper company to meet fast-moving newsroom deadlines, Django has grown to power some of the world's busiest websites including Instagram, Pinterest, and Mozilla."}
                </p>
                <p>
                  {"Think of Django as a complete kitchen with all appliances included - you don't need to buy a separate oven, microwave, or refrigerator. Everything you need to build a web application comes bundled together."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Django? \"Batteries Included\" Philosophy"}
                </h2>
                <p>
                  {"Django's greatest strength is its comprehensive feature set right out of the box:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Admin Interface:"}
                    </strong>
                    {" Automatic, production-ready admin panel for managing data"}
                  </li>
                  <li>
                    <strong>
                      {"ORM (Object-Relational Mapping):"}
                    </strong>
                    {" Work with databases using Python instead of SQL"}
                  </li>
                  <li>
                    <strong>
                      {"Authentication System:"}
                    </strong>
                    {" User login, permissions, and security built-in"}
                  </li>
                  <li>
                    <strong>
                      {"Form Handling:"}
                    </strong>
                    {" Powerful form validation and rendering"}
                  </li>
                  <li>
                    <strong>
                      {"Template Engine:"}
                    </strong>
                    {" Dynamic HTML generation with inheritance"}
                  </li>
                  <li>
                    <strong>
                      {"URL Routing:"}
                    </strong>
                    {" Clean, elegant URL patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Security Features:"}
                    </strong>
                    {" CSRF protection, XSS prevention, SQL injection protection"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Used by sites serving millions of users"}
                  </li>
                </ul>
                <p>
                  {"You spend time building your unique features, not reinventing the wheel!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Django"}
                </h2>
                <p>
                  {"Django is perfect when you need:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Rapid Development:"}
                    </strong>
                    {" MVP, prototypes, or startup projects with tight deadlines"}
                  </li>
                  <li>
                    <strong>
                      {"Content Management:"}
                    </strong>
                    {" Blogs, news sites, e-commerce platforms"}
                  </li>
                  <li>
                    <strong>
                      {"Data-Driven Apps:"}
                    </strong>
                    {" Applications with complex database interactions"}
                  </li>
                  <li>
                    <strong>
                      {"Admin Dashboards:"}
                    </strong>
                    {" When you need a powerful backend interface"}
                  </li>
                  <li>
                    <strong>
                      {"Secure Applications:"}
                    </strong>
                    {" Banking, healthcare, or any security-critical app"}
                  </li>
                  <li>
                    <strong>
                      {"Scalable Systems:"}
                    </strong>
                    {" Apps that need to grow from thousands to millions of users"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When NOT to use Django:"}
                  </strong>
                  {" Very simple APIs (use Flask/FastAPI), real-time apps like chat (use FastAPI with WebSockets), or microservices (Django can be too heavy)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"MTV Pattern (Model-Template-View)"}
                </h2>
                <p>
                  {"Django uses MTV architecture, similar to MVC (Model-View-Controller) but with different terminology:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Django MTV Architecture:

┌─────────────┐
│   Browser   │
└──────┬──────┘
       │ HTTP Request
       ▼
┌─────────────────────────────┐
│      URLs (urls.py)         │  ← Routes requests to views
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│     VIEW (views.py)         │  ← Business logic
│  - Process request          │
│  - Query database via Model │
│  - Return response          │
└──────┬──────────────────────┘
       │                  ▲
       ▼                  │
┌──────────────┐   ┌──────────────┐
│   MODEL      │   │   TEMPLATE   │
│ (models.py)  │   │  (.html)     │
│              │   │              │
│ - Database   │   │ - HTML       │
│ - Data       │   │ - Dynamic    │
│ - Business   │   │   content    │
│   rules      │   │              │
└──────────────┘   └──────────────┘

M = Model      → Data and database logic
T = Template   → Presentation layer (HTML)
V = View       → Business logic (what data to show)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started: Django Project Setup"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Django
pip install django

# Create a new project
django-admin startproject myproject
cd myproject

# Project structure
myproject/
├── manage.py              # Command-line utility
└── myproject/
    ├── __init__.py
    ├── settings.py        # Project settings
    ├── urls.py            # URL routing
    ├── asgi.py            # Async server gateway
    └── wsgi.py            # Web server gateway

# Create an app (Django projects contain multiple apps)
python manage.py startapp blog

# App structure
blog/
├── __init__.py
├── admin.py              # Admin interface config
├── apps.py               # App configuration
├── models.py             # Database models
├── views.py              # View functions/classes
├── urls.py               # App-specific URLs (create this)
├── tests.py              # Unit tests
└── migrations/           # Database migrations

# Run development server
python manage.py runserver
# Visit http://127.0.0.1:8000/`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Models: Defining Your Data"}
                </h2>
                <p>
                  {"Models define your database structure using Python classes. Django automatically creates database tables from these models."}
                </p>
                <div className="code-block">
                  <pre><code>{`# blog/models.py
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Post(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    content = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    views = models.IntegerField(default=0)

    class Meta:
        ordering = ['-created_at']  # Newest first

    def __str__(self):
        return self.title

# Create migrations (blueprint for database changes)
python manage.py makemigrations

# Apply migrations (create actual tables)
python manage.py migrate`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Django ORM: Querying the Database"}
                </h2>
                <p>
                  {"The ORM lets you interact with databases using Python instead of writing SQL. It's like having a translator between Python and your database."}
                </p>
                <div className="code-block">
                  <pre><code>{`# CREATE - Adding data
post = Post.objects.create(
    title="My First Post",
    slug="my-first-post",
    author=user,
    content="Hello World!",
    status='published'
)

# Or create and save separately
post = Post(title="Second Post", slug="second-post")
post.author = user
post.save()

# READ - Retrieving data
# Get all posts
all_posts = Post.objects.all()

# Get published posts only
published = Post.objects.filter(status='published')

# Get single post (raises error if not found)
post = Post.objects.get(slug='my-first-post')

# Get or return None if not found
post = Post.objects.filter(slug='my-first-post').first()

# Exclude certain posts
drafts = Post.objects.exclude(status='published')

# Chaining filters
recent_posts = Post.objects.filter(
    status='published'
).filter(
    created_at__gte='2024-01-01'
).order_by('-views')[:10]

# UPDATE - Modifying data
post = Post.objects.get(id=1)
post.views += 1
post.save()

# Bulk update
Post.objects.filter(status='draft').update(status='published')

# DELETE - Removing data
post = Post.objects.get(id=1)
post.delete()

# Bulk delete
Post.objects.filter(status='draft').delete()

# ADVANCED QUERIES
# Count
post_count = Post.objects.filter(status='published').count()

# Aggregation
from django.db.models import Count, Avg, Max
stats = Post.objects.aggregate(
    total=Count('id'),
    avg_views=Avg('views'),
    max_views=Max('views')
)

# Related data (following foreign keys)
post = Post.objects.get(id=1)
author_name = post.author.username
category_name = post.category.name

# Reverse relationships
user = User.objects.get(username='alice')
user_posts = user.post_set.all()  # All posts by this user`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Views: Handling Requests"}
                </h2>
                <p>
                  {"Views are Python functions or classes that receive web requests and return web responses."}
                </p>
                <div className="code-block">
                  <pre><code>{`# blog/views.py
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Post, Category

# Function-based view
def post_list(request):
    posts = Post.objects.filter(status='published')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug, status='published')
    # Increment view count
    post.views += 1
    post.save()
    return render(request, 'blog/post_detail.html', {'post': post})

# Class-based view (more powerful)
from django.views.generic import ListView, DetailView

class PostListView(ListView):
    model = Post
    template_name = 'blog/post_list.html'
    context_object_name = 'posts'
    paginate_by = 10

    def get_queryset(self):
        return Post.objects.filter(status='published')

class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
    context_object_name = 'post'

    def get_object(self):
        post = super().get_object()
        post.views += 1
        post.save()
        return post`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"URL Routing: Connecting URLs to Views"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# blog/urls.py
from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.PostListView.as_view(), name='post_list'),
    path('post/<slug:slug>/', views.PostDetailView.as_view(), name='post_detail'),
    path('category/<slug:slug>/', views.category_posts, name='category_posts'),
]

# myproject/urls.py (main URL config)
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
]

# URL patterns support:
# - <int:id>      → integers
# - <slug:slug>   → slugs (letters, numbers, hyphens, underscores)
# - <str:name>    → strings
# - <uuid:id>     → UUIDs
# - <path:path>   → full paths with slashes`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Templates: Dynamic HTML"}
                </h2>
                <p>
                  {"Templates combine HTML with Django Template Language (DTL) to create dynamic pages."}
                </p>
                <div className="code-block">
                  <pre><code>{`<!-- templates/blog/post_list.html -->
{% extends 'base.html' %}

{% block title %}Blog Posts{% endblock %}

{% block content %}
    <h1>Latest Blog Posts</h1>

    {% for post in posts %}
        <article>
            <h2>
                <a href="{% url 'blog:post_detail' post.slug %}">
                    {{ post.title }}
                </a>
            </h2>
            <p class="meta">
                By {{ post.author.username }} on {{ post.created_at|date:"F d, Y" }}
            </p>
            <p>{{ post.content|truncatewords:30 }}</p>
        </article>
    {% empty %}
        <p>No posts available.</p>
    {% endfor %}

    <!-- Pagination -->
    {% if is_paginated %}
        <div class="pagination">
            {% if page_obj.has_previous %}
                <a href="?page=1">First</a>
                <a href="?page={{ page_obj.previous_page_number }}">Previous</a>
            {% endif %}

            Page {{ page_obj.number }} of {{ page_obj.paginator.num_pages }}

            {% if page_obj.has_next %}
                <a href="?page={{ page_obj.next_page_number }}">Next</a>
                <a href="?page={{ page_obj.paginator.num_pages }}">Last</a>
            {% endif %}
        </div>
    {% endif %}
{% endblock %}

<!-- templates/base.html -->
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    <nav>
        <a href="{% url 'blog:post_list' %}">Home</a>
    </nav>

    {% block content %}{% endblock %}

    <footer>
        <p>&copy; 2024 My Blog</p>
    </footer>
</body>
</html>`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Django Admin: Automatic Admin Interface"}
                </h2>
                <p>
                  {"One of Django's killer features - a production-ready admin interface with zero code!"}
                </p>
                <div className="code-block">
                  <pre><code>{`# blog/admin.py
from django.contrib import admin
from .models import Post, Category

# Simple registration
admin.site.register(Category)

# Customized admin
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'status', 'created_at', 'views']
    list_filter = ['status', 'created_at', 'category']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'
    ordering = ['-created_at']

    # Customize form layout
    fieldsets = (
        ('Basic Info', {
            'fields': ('title', 'slug', 'author', 'category')
        }),
        ('Content', {
            'fields': ('content', 'status')
        }),
        ('Metadata', {
            'fields': ('views',),
            'classes': ('collapse',)
        }),
    )

# Create superuser
python manage.py createsuperuser
# Visit http://127.0.0.1:8000/admin/`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Forms: User Input Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# blog/forms.py
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'slug', 'category', 'content', 'status']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 10}),
        }

    def clean_title(self):
        title = self.cleaned_data['title']
        if len(title) < 10:
            raise forms.ValidationError("Title must be at least 10 characters")
        return title

# blog/views.py
from .forms import PostForm

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('blog:post_detail', slug=post.slug)
    else:
        form = PostForm()
    return render(request, 'blog/post_form.html', {'form': form})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Authentication: User Management"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Built-in authentication views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]

# Protecting views with login required
from django.contrib.auth.decorators import login_required

@login_required
def create_post(request):
    # Only logged-in users can access this
    pass

# Check permissions in templates
{% if user.is_authenticated %}
    <a href="{% url 'create_post' %}">Create Post</a>
{% else %}
    <a href="{% url 'login' %}">Login</a>
{% endif %}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use environment variables:"}
                    </strong>
                    {" Never hardcode secrets in settings.py"}
                  </li>
                  <li>
                    <strong>
                      {"Create multiple apps:"}
                    </strong>
                    {" Separate concerns (blog, users, api, etc.)"}
                  </li>
                  <li>
                    <strong>
                      {"Use Class-Based Views:"}
                    </strong>
                    {" For complex views with reusable logic"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize queries:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"select_related()"}
                    </code>
                    {" and "}
                    <code>
                      {"prefetch_related()"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Use Django's forms:"}
                    </strong>
                    {" Built-in validation and security"}
                  </li>
                  <li>
                    <strong>
                      {"Write tests:"}
                    </strong>
                    {" Django has excellent testing tools"}
                  </li>
                  <li>
                    <strong>
                      {"Keep migrations in version control:"}
                    </strong>
                    {" Track database changes"}
                  </li>
                  <li>
                    <strong>
                      {"Use Django signals sparingly:"}
                    </strong>
                    {" Can make code hard to debug"}
                  </li>
                  <li>
                    <strong>
                      {"Follow the 12-factor app methodology:"}
                    </strong>
                    {" For deployment"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Django with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers Django from basics to building production-ready applications. Learn MTV architecture, ORM, authentication, and deployment with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/flask" className="related-article-card">
                    <h4>
                      {"Flask Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Lightweight alternative to Django"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/postgresql" className="related-article-card">
                    <h4>
                      {"PostgreSQL"}
                    </h4>
                    {" "}
                    <p>
                      {"Relational database for Django"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/rest-apis-python" className="related-article-card">
                    <h4>
                      {"REST APIs in Python"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs with Django REST Framework"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Django framework."} />
    </>
  );
}
