import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CI/CD with GitHub Actions - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/cicd" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/cicd",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptCicdPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <div className="container">
          <article className="article-content">
            <header className="article-header">
              <Link href="/full-stack-javascript" className="back-link">
                {"← Back to Full Stack JavaScript"}
              </Link>
              <h1>
                {"CI/CD with GitHub Actions"}
              </h1>
              <p className="article-meta">
                {"Automating testing, building, and deployment workflows"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Introduction to CI/CD"}
              </h2>
              <p>
                {"CI/CD (Continuous Integration/Continuous Deployment) automates the process of testing, building, and deploying code. GitHub Actions provides a powerful platform for creating these automated workflows directly in your repository."}
              </p>
              <h3>
                {"Key Concepts"}
              </h3>
              <pre><code>{`# CI/CD Pipeline Stages:
# 1. Source: Code pushed to repository
# 2. Build: Compile/bundle the application
# 3. Test: Run automated tests
# 4. Deploy: Push to staging/production

# GitHub Actions Terms:
# - Workflow: Automated process (YAML file)
# - Job: Set of steps that execute on same runner
# - Step: Individual task (run command or action)
# - Action: Reusable unit of code
# - Runner: Server that runs workflows`}</code></pre>
              <h2>
                {"Basic Workflow Structure"}
              </h2>
              <h3>
                {"Your First Workflow"}
              </h3>
              <pre><code>{`# .github/workflows/ci.yml
name: CI Pipeline

# Triggers
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

# Environment variables
env:
  NODE_VERSION: '20'
  CI: true

# Jobs
jobs:
  test:
    name: Run Tests
    runs-on: ubuntu-latest

    steps:
      # Checkout code
      - name: Checkout repository
        uses: actions/checkout@v4

      # Setup Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
          cache: 'npm'

      # Install dependencies
      - name: Install dependencies
        run: npm ci

      # Run linting
      - name: Run ESLint
        run: npm run lint

      # Run tests
      - name: Run tests
        run: npm test

      # Upload coverage
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info`}</code></pre>
              <h2>
                {"Node.js Application Workflows"}
              </h2>
              <h3>
                {"Complete CI Workflow"}
              </h3>
              <pre><code>{`# .github/workflows/ci.yml
name: Node.js CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  lint:
    name: Lint Code
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  test:
    name: Run Tests
    runs-on: ubuntu-latest
    needs: lint  # Run after lint passes

    strategy:
      matrix:
        node-version: [18, 20, 22]

    services:
      # MongoDB service for integration tests
      mongodb:
        image: mongo:7
        ports:
          - 27017:27017

      # Redis service
      redis:
        image: redis:7
        ports:
          - 6379:6379

    steps:
      - uses: actions/checkout@v4

      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit
        env:
          NODE_ENV: test

      - name: Run integration tests
        run: npm run test:integration
        env:
          NODE_ENV: test
          MONGODB_URI: mongodb://localhost:27017/test
          REDIS_URL: redis://localhost:6379

      - name: Upload coverage
        if: matrix.node-version == '20'
        uses: codecov/codecov-action@v3

  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: test

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run build

      # Upload build artifacts
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: dist/
          retention-days: 7`}</code></pre>
              <h3>
                {"React Application CI"}
              </h3>
              <pre><code>{`# .github/workflows/react-ci.yml
name: React CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint
        run: npm run lint

      - name: Run tests
        run: npm test -- --coverage --watchAll=false
        env:
          CI: true

      - name: Build
        run: npm run build
        env:
          REACT_APP_API_URL: \${{ secrets.API_URL }}

      - name: Upload build
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: build/

  # E2E tests with Playwright
  e2e:
    runs-on: ubuntu-latest
    needs: build-and-test

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Download build
        uses: actions/download-artifact@v4
        with:
          name: build
          path: build/

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/`}</code></pre>
              <h2>
                {"Deployment Workflows"}
              </h2>
              <h3>
                {"Deploy to Vercel"}
              </h3>
              <pre><code>{`# .github/workflows/deploy-vercel.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

env:
  VERCEL_ORG_ID: \${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: \${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Pull Vercel environment
        run: vercel pull --yes --environment=production --token=\${{ secrets.VERCEL_TOKEN }}

      - name: Build project
        run: vercel build --prod --token=\${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Vercel
        run: vercel deploy --prebuilt --prod --token=\${{ secrets.VERCEL_TOKEN }}`}</code></pre>
              <h3>
                {"Deploy to AWS (ECS/ECR)"}
              </h3>
              <pre><code>{`# .github/workflows/deploy-aws.yml
name: Deploy to AWS ECS

on:
  push:
    branches: [main]

env:
  AWS_REGION: us-east-1
  ECR_REPOSITORY: my-app
  ECS_SERVICE: my-app-service
  ECS_CLUSTER: my-cluster
  CONTAINER_NAME: my-app

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: \${{ env.AWS_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build, tag, and push Docker image
        id: build-image
        env:
          ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: \${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
          echo "image=$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG" >> $GITHUB_OUTPUT

      - name: Download task definition
        run: |
          aws ecs describe-task-definition --task-definition my-app \\
            --query taskDefinition > task-definition.json

      - name: Update task definition
        id: task-def
        uses: aws-actions/amazon-ecs-render-task-definition@v1
        with:
          task-definition: task-definition.json
          container-name: \${{ env.CONTAINER_NAME }}
          image: \${{ steps.build-image.outputs.image }}

      - name: Deploy to ECS
        uses: aws-actions/amazon-ecs-deploy-task-definition@v1
        with:
          task-definition: \${{ steps.task-def.outputs.task-definition }}
          service: \${{ env.ECS_SERVICE }}
          cluster: \${{ env.ECS_CLUSTER }}
          wait-for-service-stability: true`}</code></pre>
              <h3>
                {"Deploy Docker to Server"}
              </h3>
              <pre><code>{`# .github/workflows/deploy-docker.yml
name: Deploy with Docker

on:
  push:
    branches: [main]

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            \${{ secrets.DOCKERHUB_USERNAME }}/my-app:latest
            \${{ secrets.DOCKERHUB_USERNAME }}/my-app:\${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to server via SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /app
            docker compose pull
            docker compose up -d
            docker image prune -f`}</code></pre>
              <h2>
                {"Advanced Workflow Features"}
              </h2>
              <h3>
                {"Caching Dependencies"}
              </h3>
              <pre><code>{`# Automatic caching with setup-node
- uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'  # or 'yarn' or 'pnpm'

# Manual cache control
- name: Cache node modules
  uses: actions/cache@v4
  id: cache-npm
  with:
    path: ~/.npm
    key: \${{ runner.os }}-npm-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-npm-

- name: Install dependencies
  if: steps.cache-npm.outputs.cache-hit != 'true'
  run: npm ci

# Cache Playwright browsers
- name: Cache Playwright browsers
  uses: actions/cache@v4
  with:
    path: ~/.cache/ms-playwright
    key: playwright-\${{ runner.os }}-\${{ hashFiles('**/package-lock.json') }}`}</code></pre>
              <h3>
                {"Matrix Builds"}
              </h3>
              <pre><code>{`jobs:
  test:
    runs-on: \${{ matrix.os }}

    strategy:
      fail-fast: false  # Continue other jobs if one fails
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [18, 20, 22]
        exclude:
          - os: windows-latest
            node-version: 18
        include:
          - os: ubuntu-latest
            node-version: 20
            coverage: true

    steps:
      - uses: actions/checkout@v4

      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}

      - run: npm ci
      - run: npm test

      - name: Upload coverage
        if: matrix.coverage
        uses: codecov/codecov-action@v3`}</code></pre>
              <h3>
                {"Conditional Jobs and Steps"}
              </h3>
              <pre><code>{`jobs:
  # Only run on main branch
  deploy-production:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production"

  # Only run on pull requests
  preview:
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Creating preview deployment"

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # Skip for documentation changes
      - name: Check for code changes
        id: changes
        run: |
          if git diff --name-only HEAD^ | grep -qE '\\.(js|ts|jsx|tsx)$'; then
            echo "run_tests=true" >> $GITHUB_OUTPUT
          else
            echo "run_tests=false" >> $GITHUB_OUTPUT
          fi

      - name: Run tests
        if: steps.changes.outputs.run_tests == 'true'
        run: npm test

      # Only on success
      - name: Notify success
        if: success()
        run: echo "Tests passed!"

      # Only on failure
      - name: Notify failure
        if: failure()
        run: echo "Tests failed!"

      # Always run (cleanup)
      - name: Cleanup
        if: always()
        run: echo "Cleaning up..."`}</code></pre>
              <h3>
                {"Environment and Secrets"}
              </h3>
              <pre><code>{`# Using environments for staged deployments
jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    environment:
      name: staging
      url: https://staging.myapp.com

    steps:
      - run: echo "Deploying to staging"
        env:
          API_KEY: \${{ secrets.STAGING_API_KEY }}

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://myapp.com

    steps:
      - run: echo "Deploying to production"
        env:
          API_KEY: \${{ secrets.PRODUCTION_API_KEY }}

# Using repository secrets
env:
  DATABASE_URL: \${{ secrets.DATABASE_URL }}
  JWT_SECRET: \${{ secrets.JWT_SECRET }}

# Dynamic secrets from outputs
jobs:
  setup:
    runs-on: ubuntu-latest
    outputs:
      deploy-url: \${{ steps.deploy.outputs.url }}
    steps:
      - id: deploy
        run: echo "url=https://preview-123.myapp.com" >> $GITHUB_OUTPUT

  test:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: curl \${{ needs.setup.outputs.deploy-url }}`}</code></pre>
              <h2>
                {"Reusable Workflows"}
              </h2>
              <pre><code>{`# .github/workflows/reusable-test.yml
name: Reusable Test Workflow

on:
  workflow_call:
    inputs:
      node-version:
        required: false
        type: string
        default: '20'
      run-e2e:
        required: false
        type: boolean
        default: false
    secrets:
      npm-token:
        required: false

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: \${{ inputs.node-version }}
          cache: 'npm'
          registry-url: 'https://registry.npmjs.org'

      - run: npm ci
        env:
          NODE_AUTH_TOKEN: \${{ secrets.npm-token }}

      - run: npm test

      - name: Run E2E tests
        if: inputs.run-e2e
        run: npm run test:e2e

# Using the reusable workflow
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]

jobs:
  test:
    uses: ./.github/workflows/reusable-test.yml
    with:
      node-version: '20'
      run-e2e: true
    secrets:
      npm-token: \${{ secrets.NPM_TOKEN }}`}</code></pre>
              <h2>
                {"PR Automation"}
              </h2>
              <pre><code>{`# .github/workflows/pr-checks.yml
name: PR Checks

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  # Check PR title follows convention
  check-title:
    runs-on: ubuntu-latest
    steps:
      - name: Check PR title
        uses: amannn/action-semantic-pull-request@v5
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

  # Label PR based on files changed
  label:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v5
        with:
          repo-token: \${{ secrets.GITHUB_TOKEN }}

  # Comment with preview URL
  preview:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy preview
        id: deploy
        run: |
          # Deploy and get URL
          echo "url=https://preview-\${{ github.event.pull_request.number }}.myapp.com" >> $GITHUB_OUTPUT

      - name: Comment PR
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '🚀 Preview deployed: \${{ steps.deploy.outputs.url }}'
            })

# .github/labeler.yml (for actions/labeler)
frontend:
  - changed-files:
    - any-glob-to-any-file: 'src/components/**'

backend:
  - changed-files:
    - any-glob-to-any-file: 'server/**'

documentation:
  - changed-files:
    - any-glob-to-any-file: '**/*.md'`}</code></pre>
              <h2>
                {"Release Automation"}
              </h2>
              <pre><code>{`# .github/workflows/release.yml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - run: npm ci
      - run: npm run build
      - run: npm test

      # Generate changelog
      - name: Generate changelog
        id: changelog
        uses: metcalfc/changelog-generator@v4.1.0
        with:
          myToken: \${{ secrets.GITHUB_TOKEN }}

      # Create GitHub release
      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          body: \${{ steps.changelog.outputs.changelog }}
          files: |
            dist/*.js
            dist/*.map
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

      # Publish to npm
      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"GitHub Actions workflows are YAML files in .github/workflows/"}
                  </li>
                  <li>
                    {"Use matrix builds to test across multiple Node versions and OS"}
                  </li>
                  <li>
                    {"Cache dependencies to speed up workflows"}
                  </li>
                  <li>
                    {"Use environments for staged deployments with approvals"}
                  </li>
                  <li>
                    {"Store sensitive data in repository secrets"}
                  </li>
                  <li>
                    {"Create reusable workflows for common patterns"}
                  </li>
                  <li>
                    {"Use conditional jobs and steps for flexible pipelines"}
                  </li>
                  <li>
                    {"Automate PR checks, labeling, and preview deployments"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/error-handling" className="prev-article">
                {"← Error Handling"}
              </Link>
              <Link href="/full-stack-javascript/articles/environment-variables" className="next-article">
                {"Environment Variables →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
