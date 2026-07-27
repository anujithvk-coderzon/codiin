import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Gunicorn + Nginx: Production Deployment Guide",
  description: "Learn Gunicorn and Nginx for production Python deployment. The definitive guide to serving Django and FastAPI applications in production.",
  keywords: ["Gunicorn tutorial", "Nginx Python", "production deployment", "WSGI server", "reverse proxy", "Django deployment", "FastAPI deployment"],
  alternates: { canonical: "/full-stack-python/articles/gunicorn-nginx" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/gunicorn-nginx",
    title: "Gunicorn + Nginx: Production Python Deployment",
    description: "Deploy Python web applications to production with Gunicorn and Nginx.",
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
  "headline": "Gunicorn + Nginx: Production Python Deployment",
  "description": "Complete guide to production deployment",
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

export default function FullStackPythonGunicornNginxPage() {
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
                {"Gunicorn + Nginx"}
              </span>
            </div>
            <h1>
              {"Gunicorn + Nginx"}
            </h1>
            <p className="article-subtitle">
              {"Production Deployment for Python Web Apps"}
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
                  {"Why Not Just Use the Development Server?"}
                </h2>
                <p>
                  {"Django's "}
                  <code>
                    {"runserver"}
                  </code>
                  {" and Flask/FastAPI's development servers are great for development but not suitable for production:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Single-threaded:"}
                    </strong>
                    {" Can only handle one request at a time"}
                  </li>
                  <li>
                    <strong>
                      {"Not secure:"}
                    </strong>
                    {" No protection against attacks"}
                  </li>
                  <li>
                    <strong>
                      {"Not optimized:"}
                    </strong>
                    {" Slow for serving static files"}
                  </li>
                  <li>
                    <strong>
                      {"Auto-reload:"}
                    </strong>
                    {" Wastes resources in production"}
                  </li>
                </ul>
                <p>
                  {"For production, you need a proper WSGI/ASGI server (Gunicorn) and a reverse proxy (Nginx)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"The Production Stack"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Internet
    │
    ▼
┌─────────────────┐
│      Nginx      │  ← Reverse proxy, SSL, static files
│  (Port 80/443)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Gunicorn     │  ← WSGI/ASGI server, manages workers
│  (Port 8000)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Your Python    │  ← Django, Flask, FastAPI
│      App        │
└─────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"What Each Component Does"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Nginx:"}
                    </strong>
                    {" Handles incoming requests, SSL/HTTPS, serves static files, load balancing"}
                  </li>
                  <li>
                    <strong>
                      {"Gunicorn:"}
                    </strong>
                    {" Runs your Python application, manages worker processes"}
                  </li>
                  <li>
                    <strong>
                      {"Your App:"}
                    </strong>
                    {" The actual application code"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Setting Up Gunicorn"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Gunicorn
pip install gunicorn

# Basic usage (Django)
gunicorn myproject.wsgi:application

# Basic usage (Flask)
gunicorn app:app

# Basic usage (FastAPI)
pip install uvicorn  # ASGI server
gunicorn -k uvicorn.workers.UvicornWorker main:app

# With options
gunicorn myproject.wsgi:application \\
    --bind 127.0.0.1:8000 \\
    --workers 4 \\
    --threads 2 \\
    --timeout 120 \\
    --access-logfile /var/log/gunicorn/access.log \\
    --error-logfile /var/log/gunicorn/error.log`}</code></pre>
                </div>
                <h3>
                  {"Gunicorn Configuration File"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# gunicorn.conf.py
import multiprocessing

# Server socket
bind = "127.0.0.1:8000"
backlog = 2048

# Workers
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = "sync"  # Use "uvicorn.workers.UvicornWorker" for ASGI
worker_connections = 1000
max_requests = 1000
max_requests_jitter = 50
timeout = 30
graceful_timeout = 30
keepalive = 2

# Logging
accesslog = "/var/log/gunicorn/access.log"
errorlog = "/var/log/gunicorn/error.log"
loglevel = "info"
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s"'

# Process naming
proc_name = "myapp"

# Security
limit_request_line = 4094
limit_request_fields = 100
limit_request_field_size = 8190

# Run with: gunicorn -c gunicorn.conf.py myproject.wsgi:application`}</code></pre>
                </div>
                <h3>
                  {"How Many Workers?"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Rule of thumb
workers = (2 * CPU cores) + 1

# For a 4-core server
workers = (2 * 4) + 1 = 9 workers

# For I/O-bound apps (lots of database/API calls)
# Use more workers or threads:
workers = 4
threads = 4  # 16 concurrent requests

# For CPU-bound apps
# Use fewer workers, more CPU per worker:
workers = CPU cores
threads = 1`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Setting Up Nginx"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Nginx
sudo apt update
sudo apt install nginx

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx`}</code></pre>
                </div>
                <h3>
                  {"Nginx Configuration"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name example.com www.example.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com www.example.com;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Logging
    access_log /var/log/nginx/myapp.access.log;
    error_log /var/log/nginx/myapp.error.log;

    # Static files
    location /static/ {
        alias /var/www/myapp/static/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Media files
    location /media/ {
        alias /var/www/myapp/media/;
        expires 7d;
    }

    # Proxy to Gunicorn
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support (for FastAPI)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Client max body size (file uploads)
    client_max_body_size 10M;
}

# Enable the site
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl reload nginx`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Running Gunicorn with Systemd"}
                </h2>
                <p>
                  {"Use systemd to run Gunicorn as a service that starts automatically:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# /etc/systemd/system/gunicorn.service
[Unit]
Description=Gunicorn daemon for myapp
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/myapp
Environment="PATH=/var/www/myapp/venv/bin"
ExecStart=/var/www/myapp/venv/bin/gunicorn \\
    --workers 4 \\
    --bind unix:/run/gunicorn/gunicorn.sock \\
    --access-logfile /var/log/gunicorn/access.log \\
    --error-logfile /var/log/gunicorn/error.log \\
    myproject.wsgi:application

ExecReload=/bin/kill -s HUP $MAINPID
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target

# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable gunicorn
sudo systemctl start gunicorn
sudo systemctl status gunicorn`}</code></pre>
                </div>
                <h3>
                  {"Using Unix Socket (Recommended)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Create socket directory
sudo mkdir -p /run/gunicorn
sudo chown www-data:www-data /run/gunicorn

# Nginx config for socket
location / {
    proxy_pass http://unix:/run/gunicorn/gunicorn.sock;
    # ... rest of proxy settings
}

# Socket is faster than TCP for local connections`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Deployment Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Project structure
/var/www/myapp/
├── venv/                  # Virtual environment
├── myproject/             # Django project
│   ├── settings.py
│   ├── wsgi.py
│   └── ...
├── static/                # Collected static files
├── media/                 # User uploads
├── gunicorn.conf.py       # Gunicorn config
└── requirements.txt

# 1. Create virtual environment
python3 -m venv /var/www/myapp/venv
source /var/www/myapp/venv/bin/activate
pip install -r requirements.txt
pip install gunicorn

# 2. Collect static files (Django)
python manage.py collectstatic --noinput

# 3. Set proper permissions
sudo chown -R www-data:www-data /var/www/myapp
sudo chmod -R 755 /var/www/myapp

# 4. Create log directories
sudo mkdir -p /var/log/gunicorn /var/log/nginx
sudo chown www-data:www-data /var/log/gunicorn

# 5. Set up systemd service
sudo nano /etc/systemd/system/gunicorn.service
sudo systemctl daemon-reload
sudo systemctl enable gunicorn
sudo systemctl start gunicorn

# 6. Configure Nginx
sudo nano /etc/nginx/sites-available/myapp
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 7. Get SSL certificate
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"ASGI Deployment (FastAPI)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# For FastAPI/Starlette (ASGI apps), use Uvicorn workers
pip install uvicorn gunicorn

# Run with Uvicorn workers
gunicorn main:app \\
    --workers 4 \\
    --worker-class uvicorn.workers.UvicornWorker \\
    --bind 127.0.0.1:8000

# Or use Uvicorn directly (simpler for single instance)
uvicorn main:app --host 127.0.0.1 --port 8000 --workers 4

# Systemd service for FastAPI
[Service]
ExecStart=/var/www/myapp/venv/bin/gunicorn \\
    --workers 4 \\
    --worker-class uvicorn.workers.UvicornWorker \\
    --bind unix:/run/gunicorn/gunicorn.sock \\
    main:app`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Performance Tuning"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Nginx tuning
worker_processes auto;
worker_connections 1024;

http {
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
    gzip_min_length 1000;

    # Buffer sizes
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;

    # Connection keep-alive
    keepalive_timeout 65;
    keepalive_requests 100;

    # Static file caching
    open_file_cache max=1000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
}

# Gunicorn tuning
# For I/O bound apps (database, API calls)
workers = 4
threads = 4
worker_class = "gthread"

# For CPU bound apps
workers = cpu_cores
threads = 1
worker_class = "sync"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Troubleshooting"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check Gunicorn status
sudo systemctl status gunicorn
sudo journalctl -u gunicorn

# Check Nginx status
sudo systemctl status nginx
sudo nginx -t  # Test configuration

# Check logs
tail -f /var/log/gunicorn/error.log
tail -f /var/log/nginx/error.log

# Common issues:

# 1. 502 Bad Gateway
# - Gunicorn not running
# - Wrong socket/port in Nginx config

# 2. Permission denied
# - Check file ownership (www-data)
# - Check socket permissions

# 3. Static files not loading
# - Run collectstatic
# - Check Nginx static location path

# 4. Timeout errors
# - Increase Gunicorn timeout
# - Increase Nginx proxy_read_timeout`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Deployment with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers production deployment with Gunicorn and Nginx. Learn to deploy scalable, secure Python applications with personalized guidance."}
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
                      {"Container deployment"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/devops-concepts" className="related-article-card">
                    <h4>
                      {"DevOps Concepts"}
                    </h4>
                    {" "}
                    <p>
                      {"Deployment fundamentals"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/cicd" className="related-article-card">
                    <h4>
                      {"CI/CD"}
                    </h4>
                    {" "}
                    <p>
                      {"Automated deployment"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn production deployment."} />
    </>
  );
}
