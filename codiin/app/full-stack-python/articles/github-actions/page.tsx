import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "GitHub Actions for Beginners: Automate Your Workflow",
  description: "Learn GitHub Actions - automate testing, building, and deployment of your Python projects. A beginner's guide to CI/CD with GitHub Actions.",
  keywords: ["GitHub Actions tutorial", "CI/CD GitHub", "automated testing", "deployment automation", "Python CI/CD", "GitHub workflows"],
  alternates: { canonical: "/full-stack-python/articles/github-actions" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/github-actions",
    title: "GitHub Actions: CI/CD for Your Python Projects",
    description: "Automate testing and deployment with GitHub Actions.",
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
  "headline": "GitHub Actions: CI/CD for Your Projects",
  "description": "Complete guide to GitHub Actions",
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

export default function FullStackPythonGithubActionsPage() {
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
                {"GitHub Actions"}
              </span>
            </div>
            <h1>
              {"GitHub Actions"}
            </h1>
            <p className="article-subtitle">
              {"Automate Your Development Workflow"}
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
                  {"What is GitHub Actions?"}
                </h2>
                <p>
                  {"GitHub Actions is a CI/CD platform built directly into GitHub. It allows you to automate tasks like testing code, building applications, and deploying to production - all triggered by events in your repository."}
                </p>
                <p>
                  {"Think of it as having a robot assistant that watches your repository. Whenever something happens (like pushing code), the robot performs tasks you've defined automatically."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Concepts"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Workflow:"}
                    </strong>
                    {" An automated process defined in a YAML file"}
                  </li>
                  <li>
                    <strong>
                      {"Event:"}
                    </strong>
                    {" Something that triggers a workflow (push, pull request, etc.)"}
                  </li>
                  <li>
                    <strong>
                      {"Job:"}
                    </strong>
                    {" A set of steps that run on the same runner"}
                  </li>
                  <li>
                    <strong>
                      {"Step:"}
                    </strong>
                    {" Individual task within a job"}
                  </li>
                  <li>
                    <strong>
                      {"Action:"}
                    </strong>
                    {" Reusable unit of code (like a function)"}
                  </li>
                  <li>
                    <strong>
                      {"Runner:"}
                    </strong>
                    {" Server that runs your workflows"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`Workflow Structure:
┌─────────────────────────────────────────┐
│  Workflow (.github/workflows/ci.yml)    │
│  ├── Event: push to main               │
│  ├── Job 1: test                        │
│  │   ├── Step 1: Checkout code         │
│  │   ├── Step 2: Setup Python          │
│  │   └── Step 3: Run tests             │
│  └── Job 2: deploy                      │
│      ├── Step 1: Build                  │
│      └── Step 2: Deploy                 │
└─────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Your First Workflow"}
                </h2>
                <p>
                  {"Create a file at "}
                  <code>
                    {".github/workflows/ci.yml"}
                  </code>
                  {":"}
                </p>
                <div className="code-block">
                  <pre><code>{`# .github/workflows/ci.yml
name: CI

# When to run
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

# What to run
jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: '3.11'

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt

    - name: Run tests
      run: pytest`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Triggers (Events)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# On push to specific branches
on:
  push:
    branches: [main, develop]

# On pull request
on:
  pull_request:
    branches: [main]

# On schedule (cron)
on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight

# Manual trigger
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        default: 'staging'

# Multiple triggers
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  release:
    types: [published]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Python CI Workflow"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# .github/workflows/python-ci.yml
name: Python CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: '3.11'

    - name: Install linting tools
      run: pip install flake8 black isort

    - name: Run linters
      run: |
        flake8 .
        black --check .
        isort --check-only .

  test:
    runs-on: ubuntu-latest
    needs: lint  # Run after lint job

    strategy:
      matrix:
        python-version: ['3.9', '3.10', '3.11']

    steps:
    - uses: actions/checkout@v4

    - name: Set up Python \${{ matrix.python-version }}
      uses: actions/setup-python@v5
      with:
        python-version: \${{ matrix.python-version }}

    - name: Cache pip dependencies
      uses: actions/cache@v3
      with:
        path: ~/.cache/pip
        key: \${{ runner.os }}-pip-\${{ hashFiles('**/requirements.txt') }}

    - name: Install dependencies
      run: |
        pip install -r requirements.txt
        pip install pytest pytest-cov

    - name: Run tests with coverage
      run: pytest --cov=app --cov-report=xml

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage.xml

  build:
    runs-on: ubuntu-latest
    needs: test
    if: github.ref == 'refs/heads/main'

    steps:
    - uses: actions/checkout@v4

    - name: Build Docker image
      run: docker build -t myapp:\${{ github.sha }} .

    - name: Log in to Docker Hub
      uses: docker/login-action@v3
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}

    - name: Push to Docker Hub
      run: |
        docker tag myapp:\${{ github.sha }} myuser/myapp:latest
        docker push myuser/myapp:latest`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using Secrets"}
                </h2>
                <p>
                  {"Store sensitive data securely:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# 1. Add secrets in GitHub:
#    Repository Settings → Secrets → Actions → New secret

# 2. Use in workflow:
env:
  DATABASE_URL: \${{ secrets.DATABASE_URL }}
  API_KEY: \${{ secrets.API_KEY }}

steps:
- name: Deploy
  run: ./deploy.sh
  env:
    SSH_KEY: \${{ secrets.SSH_PRIVATE_KEY }}
    SERVER_HOST: \${{ secrets.SERVER_HOST }}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Matrix Builds"}
                </h2>
                <p>
                  {"Test across multiple configurations:"}
                </p>
                <div className="code-block">
                  <pre><code>{`jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        python-version: ['3.9', '3.10', '3.11']
        exclude:
          - os: macos-latest
            python-version: '3.9'

    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-python@v5
      with:
        python-version: \${{ matrix.python-version }}
    - run: pytest`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deploy to Cloud Platforms"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Deploy to AWS
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1

- name: Deploy to S3
  run: aws s3 sync ./build s3://my-bucket

# Deploy to Heroku
- name: Deploy to Heroku
  uses: akhileshns/heroku-deploy@v3.12.12
  with:
    heroku_api_key: \${{ secrets.HEROKU_API_KEY }}
    heroku_app_name: my-app
    heroku_email: me@example.com

# Deploy to DigitalOcean
- name: Deploy to DigitalOcean
  uses: appleboy/ssh-action@v1.0.0
  with:
    host: \${{ secrets.DO_HOST }}
    username: \${{ secrets.DO_USERNAME }}
    key: \${{ secrets.DO_SSH_KEY }}
    script: |
      cd /var/www/myapp
      git pull
      docker-compose up -d --build`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Reusable Workflows"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# .github/workflows/reusable-test.yml
name: Reusable Test Workflow

on:
  workflow_call:
    inputs:
      python-version:
        required: true
        type: string

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-python@v5
      with:
        python-version: \${{ inputs.python-version }}
    - run: pip install -r requirements.txt
    - run: pytest

# Use in another workflow
jobs:
  call-tests:
    uses: ./.github/workflows/reusable-test.yml
    with:
      python-version: '3.11'`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Cache dependencies:"}
                    </strong>
                    {" Speed up builds by caching pip/npm packages"}
                  </li>
                  <li>
                    <strong>
                      {"Use specific versions:"}
                    </strong>
                    {" Pin action versions (e.g., "}
                    <code>
                      {"@v4"}
                    </code>
                    {" not "}
                    <code>
                      {"@latest"}
                    </code>
                    {")"}
                  </li>
                  <li>
                    <strong>
                      {"Fail fast:"}
                    </strong>
                    {" Run quick checks (lint) before slow ones (tests)"}
                  </li>
                  <li>
                    <strong>
                      {"Use secrets:"}
                    </strong>
                    {" Never hardcode credentials"}
                  </li>
                  <li>
                    <strong>
                      {"Parallel jobs:"}
                    </strong>
                    {" Run independent jobs concurrently"}
                  </li>
                  <li>
                    <strong>
                      {"Limit permissions:"}
                    </strong>
                    {" Use least privilege for tokens"}
                  </li>
                  <li>
                    <strong>
                      {"Add status badges:"}
                    </strong>
                    {" Show build status in README"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Add badge to README.md
![CI](https://github.com/username/repo/actions/workflows/ci.yml/badge.svg)`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master GitHub Actions with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers CI/CD with GitHub Actions. Learn to automate testing, building, and deployment with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/cicd" className="related-article-card">
                    <h4>
                      {"CI/CD"}
                    </h4>
                    {" "}
                    <p>
                      {"Continuous Integration basics"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/docker" className="related-article-card">
                    <h4>
                      {"Docker"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize your apps"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/git" className="related-article-card">
                    <h4>
                      {"Git"}
                    </h4>
                    {" "}
                    <p>
                      {"Version control fundamentals"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn GitHub Actions."} />
    </>
  );
}
