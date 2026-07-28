import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "CI/CD for Beginners: Automate Your Software Delivery",
  description: "Learn CI/CD fundamentals - Continuous Integration and Continuous Deployment explained for beginners. Automate your software delivery pipeline.",
  keywords: ["CI/CD tutorial", "Continuous Integration", "Continuous Deployment", "DevOps pipeline", "automated testing", "deployment automation"],
  alternates: { canonical: "/full-stack-python/articles/cicd" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/cicd",
    title: "CI/CD: Continuous Integration and Deployment for Beginners",
    description: "Master CI/CD fundamentals to automate testing and deployment of your applications.",
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
  "headline": "CI/CD: Continuous Integration and Deployment",
  "description": "Complete guide to CI/CD for beginners",
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

export default function FullStackPythonCicdPage() {
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
                {"CI/CD"}
              </span>
            </div>
            <h1>
              {"CI/CD"}
            </h1>
            <p className="article-subtitle">
              {"Continuous Integration and Continuous Deployment Explained"}
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
                  {"What is CI/CD?"}
                </h2>
                <p>
                  {"CI/CD stands for Continuous Integration and Continuous Delivery (or Continuous Deployment). It's a set of practices that automate the process of integrating code changes, testing them, and deploying them to production."}
                </p>
                <p>
                  {"Think of CI/CD as an automated assembly line for software. Instead of manually checking code, running tests, and deploying - everything happens automatically whenever you push code changes."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Understanding the Components"}
                </h2>
                <h3>
                  {"Continuous Integration (CI)"}
                </h3>
                <p>
                  {"CI is the practice of frequently merging code changes into a shared repository. Each merge triggers an automated build and test process."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Frequent commits:"}
                    </strong>
                    {" Developers push code multiple times per day"}
                  </li>
                  <li>
                    <strong>
                      {"Automated builds:"}
                    </strong>
                    {" Code is compiled/packaged automatically"}
                  </li>
                  <li>
                    <strong>
                      {"Automated tests:"}
                    </strong>
                    {" Unit tests, integration tests run on every push"}
                  </li>
                  <li>
                    <strong>
                      {"Fast feedback:"}
                    </strong>
                    {" Developers know within minutes if something broke"}
                  </li>
                </ul>
                <h3>
                  {"Continuous Delivery (CD)"}
                </h3>
                <p>
                  {"CD extends CI by automatically preparing code for release. After passing all tests, code is ready to be deployed to production at any time with a single click."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Always deployable:"}
                    </strong>
                    {" The main branch is always in a deployable state"}
                  </li>
                  <li>
                    <strong>
                      {"Manual approval:"}
                    </strong>
                    {" A human decides when to actually deploy"}
                  </li>
                  <li>
                    <strong>
                      {"Staging environments:"}
                    </strong>
                    {" Code is tested in production-like environments"}
                  </li>
                </ul>
                <h3>
                  {"Continuous Deployment"}
                </h3>
                <p>
                  {"Takes CD one step further - every change that passes all tests is automatically deployed to production. No human intervention required."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Fully automated:"}
                    </strong>
                    {" Push code → automatically in production"}
                  </li>
                  <li>
                    <strong>
                      {"Requires confidence:"}
                    </strong>
                    {" Your tests must be comprehensive"}
                  </li>
                  <li>
                    <strong>
                      {"Small changes:"}
                    </strong>
                    {" Deploy many small changes rather than big releases"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"The CI/CD Pipeline"}
                </h2>
                <p>
                  {"A CI/CD pipeline is the automated workflow that takes code from commit to production:"}
                </p>
                <div className="code-block">
                  <pre><code>{`Developer pushes code
        ↓
    [Source Stage]
    - Code is pulled from repository
        ↓
    [Build Stage]
    - Dependencies installed
    - Code compiled/packaged
        ↓
    [Test Stage]
    - Unit tests
    - Integration tests
    - Code quality checks
        ↓
    [Deploy to Staging]
    - Deploy to test environment
    - Run end-to-end tests
        ↓
    [Deploy to Production]
    - Deploy to live servers
    - Monitor for issues`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Why CI/CD Matters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Catch bugs early:"}
                    </strong>
                    {" Find issues immediately after they're introduced"}
                  </li>
                  <li>
                    <strong>
                      {"Reduce risk:"}
                    </strong>
                    {" Small, frequent deployments are easier to fix than big releases"}
                  </li>
                  <li>
                    <strong>
                      {"Faster delivery:"}
                    </strong>
                    {" Get features to users quickly"}
                  </li>
                  <li>
                    <strong>
                      {"Developer productivity:"}
                    </strong>
                    {" Automate repetitive tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Consistent quality:"}
                    </strong>
                    {" Every change goes through the same checks"}
                  </li>
                  <li>
                    <strong>
                      {"Confidence:"}
                    </strong>
                    {" Trust that your code works because it's tested"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"CI/CD for Python Projects"}
                </h2>
                <p>
                  {"Here's how CI/CD typically looks for a Python application:"}
                </p>
                <h3>
                  {"Project Structure"}
                </h3>
                <div className="code-block">
                  <pre><code>{`my-python-app/
├── app/
│   ├── __init__.py
│   ├── main.py
│   └── models.py
├── tests/
│   ├── __init__.py
│   ├── test_main.py
│   └── test_models.py
├── requirements.txt
├── requirements-dev.txt
├── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CD pipeline definition
└── README.md`}</code></pre>
                </div>
                <h3>
                  {"Example GitHub Actions Pipeline"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

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
        pip install -r requirements-dev.txt

    - name: Run linting
      run: |
        pip install flake8
        flake8 app/ tests/

    - name: Run tests
      run: |
        pytest tests/ --cov=app --cov-report=xml

    - name: Upload coverage
      uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Build Docker image
      run: docker build -t myapp:\${{ github.sha }} .

    - name: Push to registry
      run: |
        docker tag myapp:\${{ github.sha }} registry.example.com/myapp:latest
        docker push registry.example.com/myapp:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to production
      run: |
        # SSH to server and pull new image
        ssh user@server "docker pull registry.example.com/myapp:latest && docker-compose up -d"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Types of Tests in CI/CD"}
                </h2>
                <h3>
                  {"Unit Tests"}
                </h3>
                <p>
                  {"Test individual functions or classes in isolation. Fast and run on every commit."}
                </p>
                <div className="code-block">
                  <pre><code>{`# tests/test_calculator.py
import pytest
from app.calculator import add, multiply

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_multiply():
    assert multiply(3, 4) == 12
    assert multiply(0, 5) == 0`}</code></pre>
                </div>
                <h3>
                  {"Integration Tests"}
                </h3>
                <p>
                  {"Test how different parts of your application work together."}
                </p>
                <div className="code-block">
                  <pre><code>{`# tests/test_api.py
import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_user():
    response = client.post("/users/", json={
        "username": "testuser",
        "email": "test@example.com"
    })
    assert response.status_code == 201
    assert response.json()["username"] == "testuser"

def test_get_user():
    response = client.get("/users/1")
    assert response.status_code == 200`}</code></pre>
                </div>
                <h3>
                  {"End-to-End Tests"}
                </h3>
                <p>
                  {"Test the entire application flow from user interface to database."}
                </p>
                <h3>
                  {"Code Quality Checks"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Linting:"}
                    </strong>
                    {" Check code style (flake8, pylint)"}
                  </li>
                  <li>
                    <strong>
                      {"Type checking:"}
                    </strong>
                    {" Verify type hints (mypy)"}
                  </li>
                  <li>
                    <strong>
                      {"Security scanning:"}
                    </strong>
                    {" Find vulnerabilities (bandit)"}
                  </li>
                  <li>
                    <strong>
                      {"Coverage:"}
                    </strong>
                    {" Measure test coverage"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Popular CI/CD Tools"}
                </h2>
                <h3>
                  {"GitHub Actions"}
                </h3>
                <p>
                  {"Built into GitHub, great for most projects. Free for public repositories."}
                </p>
                <h3>
                  {"GitLab CI"}
                </h3>
                <p>
                  {"Integrated with GitLab. Powerful and feature-rich."}
                </p>
                <h3>
                  {"Jenkins"}
                </h3>
                <p>
                  {"Open-source, self-hosted. Very flexible but requires more setup."}
                </p>
                <h3>
                  {"CircleCI"}
                </h3>
                <p>
                  {"Cloud-based, fast builds, good Docker support."}
                </p>
                <h3>
                  {"Travis CI"}
                </h3>
                <p>
                  {"Simple configuration, popular with open-source projects."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"CI/CD Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Keep pipelines fast:"}
                    </strong>
                    {" Aim for under 10 minutes. Slow pipelines kill productivity."}
                  </li>
                  <li>
                    <strong>
                      {"Fail fast:"}
                    </strong>
                    {" Run quick tests first to catch obvious errors early."}
                  </li>
                  <li>
                    <strong>
                      {"Make builds reproducible:"}
                    </strong>
                    {" Same code should always produce the same result."}
                  </li>
                  <li>
                    <strong>
                      {"Version your infrastructure:"}
                    </strong>
                    {" Pipeline configuration should be in version control."}
                  </li>
                  <li>
                    <strong>
                      {"Use feature branches:"}
                    </strong>
                    {" Test changes before merging to main."}
                  </li>
                  <li>
                    <strong>
                      {"Automate everything:"}
                    </strong>
                    {" If you do it manually more than twice, automate it."}
                  </li>
                  <li>
                    <strong>
                      {"Monitor deployments:"}
                    </strong>
                    {" Know immediately when something goes wrong."}
                  </li>
                  <li>
                    <strong>
                      {"Have rollback plans:"}
                    </strong>
                    {" Be able to quickly revert bad deployments."}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"A Simple CI/CD Setup"}
                </h2>
                <p>
                  {"Start simple and add complexity as needed:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# .github/workflows/simple-ci.yml
name: Simple CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: '3.11'

    - name: Install dependencies
      run: pip install -r requirements.txt

    - name: Run tests
      run: pytest

# That's it! Start here and add more steps as needed.`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common CI/CD Challenges"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Flaky tests:"}
                    </strong>
                    {" Tests that sometimes pass and sometimes fail. Fix them immediately."}
                  </li>
                  <li>
                    <strong>
                      {"Slow pipelines:"}
                    </strong>
                    {" Parallelize tests, cache dependencies, optimize Docker builds."}
                  </li>
                  <li>
                    <strong>
                      {"Environment differences:"}
                    </strong>
                    {" Use containers to ensure consistency."}
                  </li>
                  <li>
                    <strong>
                      {"Secret management:"}
                    </strong>
                    {" Never commit secrets. Use environment variables or secret managers."}
                  </li>
                  <li>
                    <strong>
                      {"Database testing:"}
                    </strong>
                    {" Use test databases or mocks, not production data."}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master CI/CD with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program includes hands-on CI/CD training. Learn to set up automated pipelines for testing and deploying Python applications with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/github-actions" className="related-article-card">
                    <h4>
                      {"GitHub Actions"}
                    </h4>
                    {" "}
                    <p>
                      {"Build CI/CD pipelines with GitHub"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/docker" className="related-article-card">
                    <h4>
                      {"Docker"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize your applications"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/devops-concepts" className="related-article-card">
                    <h4>
                      {"DevOps Concepts"}
                    </h4>
                    {" "}
                    <p>
                      {"Understanding DevOps fundamentals"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn CI/CD."} />
    </>
  );
}
