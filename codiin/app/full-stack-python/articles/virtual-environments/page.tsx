import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Python Virtual Environments Guide",
  description: "Learn Python virtual environments - venv, pip, requirements.txt, dependency management. Understand why isolation matters for Python projects.",
  keywords: ["Python venv", "virtual environments", "pip", "requirements.txt", "Python dependencies", "Python isolation"],
  alternates: { canonical: "/full-stack-python/articles/virtual-environments" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/virtual-environments",
    title: "Python Virtual Environments: Isolation and Dependency Management",
    description: "Master Python virtual environments for clean, isolated project dependencies.",
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
  "headline": "Python Virtual Environments: Isolation and Dependency Management",
  "description": "Complete guide to Python virtual environments and dependency management",
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

export default function FullStackPythonVirtualEnvironmentsPage() {
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
                {"Virtual Environments"}
              </span>
            </div>
            <h1>
              {"Virtual Environments"}
            </h1>
            <p className="article-subtitle">
              {"Isolation and Dependency Management"}
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
                  {"What are Virtual Environments?"}
                </h2>
                <p>
                  {"A virtual environment is an isolated Python environment that allows you to install packages for a specific project without affecting other projects or your system Python installation. Each project gets its own separate space for dependencies."}
                </p>
                <p>
                  {"Think of virtual environments like separate apartments in a building - each apartment (project) has its own furniture (packages), and changes in one apartment don't affect the others. You can have Django 3.2 in one project and Django 4.0 in another without conflicts!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Virtual Environments Matter"}
                </h2>
                <p>
                  {"Without virtual environments, you'll run into these problems:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Dependency Conflicts:"}
                    </strong>
                    {" Project A needs Django 3.2, Project B needs Django 4.0 - can't have both globally!"}
                  </li>
                  <li>
                    <strong>
                      {"Polluted System Python:"}
                    </strong>
                    {" Installing packages globally clutters your system"}
                  </li>
                  <li>
                    <strong>
                      {"Permission Issues:"}
                    </strong>
                    {" May need sudo/admin rights to install packages globally"}
                  </li>
                  <li>
                    <strong>
                      {"Reproducibility:"}
                    </strong>
                    {" Hard to share exact dependencies with teammates"}
                  </li>
                  <li>
                    <strong>
                      {"Version Lock-In:"}
                    </strong>
                    {" Upgrading one project's package breaks another project"}
                  </li>
                  <li>
                    <strong>
                      {"Deployment Issues:"}
                    </strong>
                    {" Production environment should match development exactly"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"With virtual environments:"}
                  </strong>
                  {" Each project is isolated, reproducible, and conflict-free!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Creating Virtual Environments with venv"}
                </h2>
                <p>
                  {"Python 3.3+ includes venv built-in. No installation needed!"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Create a virtual environment
# On Windows:
python -m venv venv

# On Mac/Linux:
python3 -m venv venv

# This creates a 'venv' folder with:
venv/
├── bin/          (or Scripts/ on Windows)
│   ├── python    # Python interpreter
│   ├── pip       # Package installer
│   └── activate  # Activation script
├── lib/          # Installed packages go here
└── include/      # C headers

# Activate the virtual environment
# On Windows:
venv\\Scripts\\activate

# On Mac/Linux:
source venv/bin/activate

# You'll see (venv) in your terminal prompt:
(venv) C:\\project>

# Now any pip install goes into THIS environment only!

# Deactivate when done
deactivate`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-World Workflow"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Step 1: Create project directory
mkdir myproject
cd myproject

# Step 2: Create virtual environment
python -m venv venv

# Step 3: Activate it
source venv/bin/activate  # Mac/Linux
venv\\Scripts\\activate     # Windows

# Step 4: Install packages
pip install django
pip install djangorestframework
pip install psycopg2-binary

# Step 5: Work on your project
python manage.py runserver

# Step 6: When done, deactivate
deactivate

# Next time you work on this project:
cd myproject
source venv/bin/activate  # Start where you left off!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"pip: Python Package Manager"}
                </h2>
                <p>
                  {"pip (Package Installer for Python) installs packages from PyPI (Python Package Index)."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install a package
pip install django

# Install specific version
pip install django==4.2
pip install "django>=4.0,<5.0"  # Version range

# Install multiple packages
pip install django djangorestframework psycopg2

# Upgrade a package
pip install --upgrade django

# Uninstall a package
pip uninstall django

# List installed packages
pip list

# Show package details
pip show django

# Search for packages (deprecated, use PyPI.org)
# pip search django

# Install from requirements file (explained below)
pip install -r requirements.txt

# Check for outdated packages
pip list --outdated

# Install package from GitHub
pip install git+https://github.com/django/django.git

# Install in editable mode (for development)
pip install -e .

# Install from local directory
pip install ./mypackage/`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"requirements.txt: Sharing Dependencies"}
                </h2>
                <p>
                  {"requirements.txt lists all packages your project needs. Essential for collaboration and deployment!"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Generate requirements.txt (lists ALL installed packages)
pip freeze > requirements.txt

# Example requirements.txt
Django==4.2.7
djangorestframework==3.14.0
psycopg2-binary==2.9.9
python-dotenv==1.0.0
gunicorn==21.2.0

# Install from requirements.txt
pip install -r requirements.txt

# Why this matters:
# 1. New teammate clones your repo
git clone https://github.com/yourrepo/project.git
cd project

# 2. Creates virtual environment
python -m venv venv
source venv/bin/activate

# 3. Installs exact same packages as you!
pip install -r requirements.txt

# 4. Now their environment matches yours perfectly!

# Pin versions for stability
Django==4.2.7              # Exact version (recommended)
djangorestframework~=3.14  # Compatible version (3.14.x)
psycopg2>=2.9             # Minimum version

# Multiple requirements files (common pattern)
requirements/
├── base.txt          # Common dependencies
├── dev.txt           # Development tools (debuggers, testing)
└── prod.txt          # Production only (gunicorn, logging)

# base.txt
Django==4.2.7
djangorestframework==3.14.0

# dev.txt
-r base.txt           # Include base
pytest==7.4.3
black==23.11.0
django-debug-toolbar==4.2.0

# prod.txt
-r base.txt           # Include base
gunicorn==21.2.0
sentry-sdk==1.38.0

# Install for development
pip install -r requirements/dev.txt`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Alternative Tools"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# virtualenv (older, more features than venv)
pip install virtualenv
virtualenv venv
source venv/bin/activate

# pipenv (combines pip + venv)
pip install pipenv
pipenv install django
pipenv shell  # Activates environment

# Uses Pipfile instead of requirements.txt
# Pipfile
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]
django = "==4.2.7"
djangorestframework = "*"

[dev-packages]
pytest = "*"

# poetry (modern dependency management)
pip install poetry
poetry init
poetry add django
poetry install
poetry shell

# Uses pyproject.toml
[tool.poetry.dependencies]
python = "^3.10"
django = "^4.2"

# conda (for data science)
conda create -n myenv python=3.10
conda activate myenv
conda install django

# Which to choose?
# - venv: Built-in, simple, sufficient for most projects
# - pipenv: Good for beginners, combines tools
# - poetry: Modern, best for libraries
# - conda: Data science projects (numpy, pandas, tensorflow)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Project Structure Best Practices"}
                </h2>
                <div className="code-block">
                  <pre><code>{`myproject/
├── venv/                    # Virtual environment (don't commit!)
├── .gitignore               # Ignore venv, __pycache__, etc.
├── requirements.txt         # Dependencies
├── .env                     # Environment variables (don't commit!)
├── README.md                # Project documentation
├── manage.py                # Django management (if Django)
├── myapp/                   # Application code
│   ├── __init__.py
│   ├── models.py
│   ├── views.py
│   └── tests.py
└── config/                  # Configuration
    ├── settings.py
    └── urls.py

# .gitignore (MUST HAVE!)
# Virtual environment
venv/
env/
ENV/

# Python cache
__pycache__/
*.py[cod]
*$py.class
*.so

# Environment variables
.env
.env.local

# Database
*.sqlite3
db.sqlite3

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Why ignore venv?
# - It's huge (100+ MB)
# - Anyone can recreate it with requirements.txt
# - Different OS have different files (Windows vs Mac)

# How to recreate environment on new machine:
git clone https://github.com/yourrepo/project.git
cd project
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Done! Same environment as original developer`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Workflows"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Starting a new Django project
mkdir mysite
cd mysite
python -m venv venv
source venv/bin/activate
pip install django
django-admin startproject config .
python manage.py runserver

# Adding a new package mid-project
source venv/bin/activate
pip install djangorestframework
# Add 'rest_framework' to INSTALLED_APPS
pip freeze > requirements.txt  # Update requirements

# Cloning teammate's project
git clone https://github.com/team/project.git
cd project
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Upgrading Python version
# 1. Install new Python version on your system
# 2. Delete old venv
rm -rf venv  # or manually delete folder
# 3. Create new venv with new Python
python3.11 -m venv venv
source venv/bin/activate
# 4. Reinstall packages
pip install -r requirements.txt

# Debugging "package not found" errors
# 1. Make sure venv is activated
which python  # Should show venv/bin/python

# 2. Install package
pip install package_name

# 3. Verify installation
pip show package_name

# 4. If still issues, restart Python interpreter

# Sharing code with non-Python users (Docker alternative)
# Use requirements.txt + README with setup instructions
# Or containerize with Docker (advanced)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Environment Variables with python-dotenv"}
                </h2>
                <p>
                  {"Never hardcode secrets (API keys, database passwords) in code. Use environment variables!"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install python-dotenv
pip install python-dotenv

# Create .env file (NEVER commit this to Git!)
# .env
SECRET_KEY=django-insecure-your-secret-key-here
DATABASE_URL=postgresql://user:password@localhost/dbname
API_KEY=your-api-key-here
DEBUG=True

# Load in Python
# settings.py
from dotenv import load_dotenv
import os

load_dotenv()  # Loads .env file

SECRET_KEY = os.getenv('SECRET_KEY')
DATABASE_URL = os.getenv('DATABASE_URL')
API_KEY = os.getenv('API_KEY')
DEBUG = os.getenv('DEBUG') == 'True'

# Provide defaults
DEBUG = os.getenv('DEBUG', 'False') == 'True'

# .env.example (commit this as template)
# .env.example
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:pass@localhost/db
API_KEY=your-api-key
DEBUG=True

# Team members copy .env.example to .env and fill in real values
cp .env.example .env
# Then edit .env with actual secrets`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Troubleshooting Common Issues"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# "python: command not found"
# Use python3 instead
python3 -m venv venv

# "pip: command not found" after activation
# Deactivate and reactivate
deactivate
source venv/bin/activate

# "Permission denied" when creating venv on Windows
# Run PowerShell as Administrator
Set-ExecutionPolicy RemoteSigned

# Virtual environment not activating
# Check you're using correct activation script:
# Windows: venv\\Scripts\\activate
# Mac/Linux: source venv/bin/activate

# "Module not found" even after pip install
# 1. Verify venv is activated (should see (venv) in prompt)
# 2. Verify correct Python
which python  # Should be venv/bin/python

# If not, deactivate and reactivate

# Packages installed in wrong location
# Always activate venv BEFORE pip install!
source venv/bin/activate  # First!
pip install django        # Then install

# "No space left on device"
# Clean pip cache
pip cache purge

# Virtual environment too large
# Don't commit venv to Git
# Recreate when needed from requirements.txt

# Multiple Python versions confusion
# Use specific version
python3.10 -m venv venv
python3.11 -m venv venv`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"One venv per project:"}
                    </strong>
                    {" Don't share venvs between projects"}
                  </li>
                  <li>
                    <strong>
                      {"Activate before coding:"}
                    </strong>
                    {" Make it a habit to activate venv first"}
                  </li>
                  <li>
                    <strong>
                      {"Never commit venv:"}
                    </strong>
                    {" Add to .gitignore, recreate from requirements.txt"}
                  </li>
                  <li>
                    <strong>
                      {"Use requirements.txt:"}
                    </strong>
                    {" Essential for collaboration and deployment"}
                  </li>
                  <li>
                    <strong>
                      {"Pin versions in production:"}
                    </strong>
                    {" Use exact versions (==) for stability"}
                  </li>
                  <li>
                    <strong>
                      {"Separate dev/prod requirements:"}
                    </strong>
                    {" Use requirements/ folder structure"}
                  </li>
                  <li>
                    <strong>
                      {"Update regularly:"}
                    </strong>
                    {" Keep packages updated but test changes"}
                  </li>
                  <li>
                    <strong>
                      {"Document setup:"}
                    </strong>
                    {" Clear README with setup instructions"}
                  </li>
                  <li>
                    <strong>
                      {"Use .env for secrets:"}
                    </strong>
                    {" Never hardcode sensitive data"}
                  </li>
                  <li>
                    <strong>
                      {"Name venv consistently:"}
                    </strong>
                    {" Use \"venv\" or \"env\" for all projects"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"IDE Integration"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# VS Code
# 1. Install Python extension
# 2. Open Command Palette (Ctrl+Shift+P)
# 3. "Python: Select Interpreter"
# 4. Choose venv/bin/python

# .vscode/settings.json
{
    "python.defaultInterpreterPath": "\${workspaceFolder}/venv/bin/python"
}

# PyCharm
# 1. File > Settings > Project > Python Interpreter
# 2. Add Interpreter > Existing Environment
# 3. Select venv/bin/python

# VS Code will now:
# - Auto-activate venv in terminal
# - Use correct Python for running/debugging
# - Provide autocomplete for installed packages`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Python Development with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program teaches professional development practices including virtual environments, dependency management, and project structure. Build production-ready applications with industry best practices."}
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
                  <Link href="/full-stack-python/articles/python-fundamentals" className="related-article-card">
                    <h4>
                      {"Python Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Start your Python journey"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/django" className="related-article-card">
                    <h4>
                      {"Django Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Build web apps with Django"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/flask" className="related-article-card">
                    <h4>
                      {"Flask Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Lightweight web development"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn about Python virtual environments."} />
    </>
  );
}
