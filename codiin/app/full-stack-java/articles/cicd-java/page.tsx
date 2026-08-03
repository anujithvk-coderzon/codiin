import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "CI/CD for Java: Jenkins & GitHub Actions Complete Guide",
  description: "Set up CI/CD pipelines for Java applications using Jenkins and GitHub Actions. Automate builds, tests, and deployments with beginner-friendly examples.",
  keywords: ["CI/CD Java", "Jenkins Java", "GitHub Actions Java", "Maven pipeline", "Java automation", "DevOps Java"],
  alternates: { canonical: "/full-stack-java/articles/cicd-java" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/cicd-java",
    title: "CI/CD for Java: Jenkins & GitHub Actions Guide | CODiiN",
    description: "Automate your Java builds and deployments. Master CI/CD with Jenkins and GitHub Actions.",
    images: ["/images/cicd-java-og.jpg"],
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "CI/CD for Java: Jenkins & GitHub Actions Guide",
  "description": "Automate Java builds and deployments with CI/CD pipelines",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-27",
  "dateModified": "2024-12-27"
} as const;

export default function FullStackJavaCicdJavaPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="breadcrumb">
          <div className="container">
            <Link href="/">
              {"Home"}
            </Link>
            <span>
              {"/"}
            </span>
            <Link href="/full-stack-java">
              {"Full Stack Java"}
            </Link>
            <span>
              {"/"}
            </span>
            <span>
              {"CI/CD for Java"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"CI/CD for Java Applications"}
            </h1>
            <p className="article-subtitle">
              {"Automate Your Builds, Tests, and Deployments with Jenkins and GitHub Actions"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"What is CI/CD?"}
                </h2>
                <p>
                  {"Imagine you're baking cookies for a bakery. Would you bake all 1000 cookies, then check if the recipe works? Or would you test a small batch first, perfect the recipe, then automate the process?"}
                </p>
                <p>
                  {"CI/CD is the automated assembly line for your code. Every time you make changes, the system automatically builds, tests, and deploys your application - catching problems early before they reach customers."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"CI - Continuous Integration"}
                    </h3>
                    <p>
                      {"Automatically build and test code whenever developers push changes. Catch bugs early, before they pile up."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"CD - Continuous Delivery"}
                    </h3>
                    <p>
                      {"Automatically prepare releases. Code is always ready to deploy with one click."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"CD - Continuous Deployment"}
                    </h3>
                    <p>
                      {"Go further: automatically deploy to production. No manual steps needed."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Industry Standard"}
                    </h3>
                    <p>
                      {"Every professional team uses CI/CD. It's expected in modern software development."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Anatomy of a CI/CD Pipeline"}
                </h2>
                <p>
                  {"A typical Java pipeline has these stages:"}
                </p>
                <div className="code-block">
                  <pre>{`
Developer pushes code
        ↓
┌─────────────────────────────────────────────────────────┐
│                    CI/CD Pipeline                        │
├─────────────────────────────────────────────────────────┤
│  1. CHECKOUT     - Get the latest code                  │
│        ↓                                                │
│  2. BUILD        - Compile with Maven/Gradle            │
│        ↓                                                │
│  3. TEST         - Run unit tests                       │
│        ↓                                                │
│  4. CODE QUALITY - SonarQube, Checkstyle               │
│        ↓                                                │
│  5. PACKAGE      - Create JAR/Docker image             │
│        ↓                                                │
│  6. DEPLOY       - Push to staging/production          │
└─────────────────────────────────────────────────────────┘
        ↓
Application running in production!
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"GitHub Actions: The Modern Choice"}
                </h2>
                <p>
                  {"GitHub Actions is built into GitHub - no separate server needed. Perfect for open source and most projects."}
                </p>
                <h3>
                  {"Basic Java Workflow"}
                </h3>
                <p>
                  {"Create this file at "}
                  <code>
                    {".github/workflows/ci.yml"}
                  </code>
                  {":"}
                </p>
                <div className="code-block">
                  <pre>{`
name: Java CI/CD Pipeline

# When to run
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    # Step 1: Get the code
    - name: Checkout code
      uses: actions/checkout@v4

    # Step 2: Set up Java
    - name: Set up JDK 17
      uses: actions/setup-java@v4
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: maven  # Cache dependencies

    # Step 3: Build and test
    - name: Build with Maven
      run: mvn clean verify

    # Step 4: Upload test results
    - name: Upload test results
      uses: actions/upload-artifact@v4
      if: always()
      with:
        name: test-results
        path: target/surefire-reports/

    # Step 5: Upload JAR
    - name: Upload artifact
      uses: actions/upload-artifact@v4
      with:
        name: app-jar
        path: target/*.jar
`}</pre>
                </div>
                <h3>
                  {"Complete Pipeline with Deployment"}
                </h3>
                <div className="code-block">
                  <pre>{`
name: Full CI/CD Pipeline

on:
  push:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  # Job 1: Build and Test
  build:
    runs-on: ubuntu-latest
    outputs:
      version: \${{ steps.version.outputs.version }}

    steps:
    - uses: actions/checkout@v4

    - name: Set up JDK 17
      uses: actions/setup-java@v4
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: maven

    - name: Get version
      id: version
      run: echo "version=$(mvn help:evaluate -Dexpression=project.version -q -DforceStdout)" >> $GITHUB_OUTPUT

    - name: Build and test
      run: mvn clean verify

    - name: Upload JAR
      uses: actions/upload-artifact@v4
      with:
        name: app
        path: target/*.jar

  # Job 2: Build Docker Image
  docker:
    needs: build
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Download JAR
      uses: actions/download-artifact@v4
      with:
        name: app
        path: target/

    - name: Login to Container Registry
      uses: docker/login-action@v3
      with:
        registry: \${{ env.REGISTRY }}
        username: \${{ github.actor }}
        password: \${{ secrets.GITHUB_TOKEN }}

    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: |
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
          \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ needs.build.outputs.version }}

  # Job 3: Deploy to Staging
  deploy-staging:
    needs: docker
    runs-on: ubuntu-latest
    environment: staging

    steps:
    - name: Deploy to staging
      run: |
        echo "Deploying to staging..."
        # kubectl apply -f k8s/staging/
        # Or: ssh deploy@staging-server 'docker pull ... && docker-compose up -d'

  # Job 4: Deploy to Production (manual approval)
  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production  # Requires approval in GitHub settings

    steps:
    - name: Deploy to production
      run: |
        echo "Deploying to production..."
        # kubectl apply -f k8s/production/
`}</pre>
                </div>
                <h3>
                  {"Matrix Testing (Multiple Java Versions)"}
                </h3>
                <div className="code-block">
                  <pre>{`
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        java: [ '11', '17', '21' ]

    steps:
    - uses: actions/checkout@v4

    - name: Set up JDK \${{ matrix.java }}
      uses: actions/setup-java@v4
      with:
        java-version: \${{ matrix.java }}
        distribution: 'temurin'
        cache: maven

    - name: Test with JDK \${{ matrix.java }}
      run: mvn test
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Jenkins: The Enterprise Standard"}
                </h2>
                <p>
                  {"Jenkins is self-hosted and highly customizable. Popular in enterprises with complex requirements."}
                </p>
                <h3>
                  {"Jenkinsfile (Declarative Pipeline)"}
                </h3>
                <p>
                  {"Create a "}
                  <code>
                    {"Jenkinsfile"}
                  </code>
                  {" in your project root:"}
                </p>
                <div className="code-block">
                  <pre>{`
pipeline {
    agent any

    tools {
        maven 'Maven-3.9'
        jdk 'JDK-17'
    }

    environment {
        DOCKER_REGISTRY = 'your-registry.com'
        APP_NAME = 'myapp'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Building branch: \${env.BRANCH_NAME}"
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }

        stage('Code Quality') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar'
                }
            }
        }

        stage('Package') {
            steps {
                sh 'mvn package -DskipTests'
                archiveArtifacts artifacts: 'target/*.jar'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def image = docker.build("\${DOCKER_REGISTRY}/\${APP_NAME}:\${env.BUILD_NUMBER}")
                    docker.withRegistry("https://\${DOCKER_REGISTRY}", 'docker-credentials') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                sh '''
                    kubectl config use-context staging
                    kubectl set image deployment/\${APP_NAME} \${APP_NAME}=\${DOCKER_REGISTRY}/\${APP_NAME}:\${BUILD_NUMBER}
                '''
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            input {
                message "Deploy to production?"
                ok "Deploy"
            }
            steps {
                sh '''
                    kubectl config use-context production
                    kubectl set image deployment/\${APP_NAME} \${APP_NAME}=\${DOCKER_REGISTRY}/\${APP_NAME}:\${BUILD_NUMBER}
                '''
            }
        }
    }

    post {
        success {
            slackSend channel: '#deployments',
                      color: 'good',
                      message: "Build succeeded: \${env.JOB_NAME} #\${env.BUILD_NUMBER}"
        }
        failure {
            slackSend channel: '#deployments',
                      color: 'danger',
                      message: "Build failed: \${env.JOB_NAME} #\${env.BUILD_NUMBER}"
        }
        always {
            cleanWs()
        }
    }
}
`}</pre>
                </div>
                <h3>
                  {"Parallel Stages"}
                </h3>
                <div className="code-block">
                  <pre>{`
stage('Tests') {
    parallel {
        stage('Unit Tests') {
            steps {
                sh 'mvn test -Dtest=*UnitTest'
            }
        }
        stage('Integration Tests') {
            steps {
                sh 'mvn test -Dtest=*IntegrationTest'
            }
        }
        stage('Security Scan') {
            steps {
                sh 'mvn dependency-check:check'
            }
        }
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Maven Configuration for CI/CD"}
                </h2>
                <h3>
                  {"Essential Plugins"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<build>
    <plugins>
        <!-- Compiler plugin -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version>
            <configuration>
                <source>17</source>
                <target>17</target>
            </configuration>
        </plugin>

        <!-- Surefire for unit tests -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.1.2</version>
        </plugin>

        <!-- Failsafe for integration tests -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-failsafe-plugin</artifactId>
            <version>3.1.2</version>
            <executions>
                <execution>
                    <goals>
                        <goal>integration-test</goal>
                        <goal>verify</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>

        <!-- JaCoCo for code coverage -->
        <plugin>
            <groupId>org.jacoco</groupId>
            <artifactId>jacoco-maven-plugin</artifactId>
            <version>0.8.10</version>
            <executions>
                <execution>
                    <goals>
                        <goal>prepare-agent</goal>
                    </goals>
                </execution>
                <execution>
                    <id>report</id>
                    <phase>test</phase>
                    <goals>
                        <goal>report</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>

        <!-- Spring Boot plugin -->
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
`}</pre>
                </div>
                <h3>
                  {"Profiles for Different Environments"}
                </h3>
                <div className="code-block">
                  <pre>{`
<profiles>
    <profile>
        <id>ci</id>
        <properties>
            <skipTests>false</skipTests>
        </properties>
    </profile>

    <profile>
        <id>quick</id>
        <properties>
            <skipTests>true</skipTests>
            <maven.javadoc.skip>true</maven.javadoc.skip>
        </properties>
    </profile>
</profiles>

<!-- Usage: mvn package -Pci -->
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Code Quality Gates"}
                </h2>
                <h3>
                  {"SonarQube Integration"}
                </h3>
                <div className="code-block">
                  <pre>{`
# GitHub Actions
- name: SonarQube Scan
  uses: sonarsource/sonarqube-scan-action@master
  env:
    SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}
    SONAR_HOST_URL: \${{ secrets.SONAR_HOST_URL }}

# Or with Maven
- name: SonarQube Scan
  run: |
    mvn sonar:sonar \\
      -Dsonar.projectKey=myapp \\
      -Dsonar.host.url=\${{ secrets.SONAR_HOST_URL }} \\
      -Dsonar.login=\${{ secrets.SONAR_TOKEN }}
`}</pre>
                </div>
                <h3>
                  {"Quality Gate Check"}
                </h3>
                <div className="code-block">
                  <pre>{`
# sonar-project.properties
sonar.projectKey=myapp
sonar.projectName=My Application
sonar.sources=src/main/java
sonar.tests=src/test/java
sonar.java.binaries=target/classes
sonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml

# Quality gate thresholds
sonar.qualitygate.wait=true
`}</pre>
                </div>
                <h3>
                  {"Enforce Code Coverage"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- Fail build if coverage < 80% -->
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>check</id>
            <goals>
                <goal>check</goal>
            </goals>
            <configuration>
                <rules>
                    <rule>
                        <element>BUNDLE</element>
                        <limits>
                            <limit>
                                <counter>LINE</counter>
                                <value>COVEREDRATIO</value>
                                <minimum>0.80</minimum>
                            </limit>
                        </limits>
                    </rule>
                </rules>
            </configuration>
        </execution>
    </executions>
</plugin>
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Managing Secrets"}
                </h2>
                <h3>
                  {"GitHub Actions Secrets"}
                </h3>
                <div className="code-block">
                  <pre>{`
# In your workflow, access secrets like this:
env:
  DATABASE_URL: \${{ secrets.DATABASE_URL }}
  API_KEY: \${{ secrets.API_KEY }}

# Or in steps:
- name: Deploy
  env:
    KUBE_CONFIG: \${{ secrets.KUBE_CONFIG }}
  run: |
    echo "$KUBE_CONFIG" > kubeconfig
    kubectl --kubeconfig=kubeconfig apply -f k8s/
`}</pre>
                </div>
                <h3>
                  {"Jenkins Credentials"}
                </h3>
                <div className="code-block">
                  <pre>{`
// In Jenkinsfile
withCredentials([
    string(credentialsId: 'api-key', variable: 'API_KEY'),
    usernamePassword(credentialsId: 'docker-creds',
                     usernameVariable: 'DOCKER_USER',
                     passwordVariable: 'DOCKER_PASS')
]) {
    sh '''
        docker login -u $DOCKER_USER -p $DOCKER_PASS
        # Use $API_KEY here
    '''
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"CI/CD Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Fail Fast"}
                  </h3>
                  <p>
                    {"Run quick checks first. Don't wait for a 30-minute integration test to fail on a typo."}
                  </p>
                  <div className="code-block">
                    <pre>{`
# Order: Compile → Unit Tests → Integration Tests → Deploy
stages:
  - compile      # 30 seconds
  - unit-test    # 2 minutes
  - integration  # 10 minutes
  - deploy       # 5 minutes
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Cache Dependencies"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
# GitHub Actions
- uses: actions/setup-java@v4
  with:
    java-version: '17'
    distribution: 'temurin'
    cache: maven  # Automatically caches ~/.m2

# Or manually
- uses: actions/cache@v3
  with:
    path: ~/.m2/repository
    key: \${{ runner.os }}-maven-\${{ hashFiles('**/pom.xml') }}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Use Branch Protection"}
                  </h3>
                  <p>
                    {"Require CI to pass before merging. In GitHub: Settings → Branches → Add rule."}
                  </p>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Keep Pipelines DRY"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
# GitHub Actions: Reusable workflows
# .github/workflows/java-build.yml
name: Java Build
on:
  workflow_call:  # Can be called from other workflows
    inputs:
      java-version:
        required: true
        type: string

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: \${{ inputs.java-version }}
          distribution: 'temurin'
      - run: mvn verify

# Use in another workflow
jobs:
  call-build:
    uses: ./.github/workflows/java-build.yml
    with:
      java-version: '17'
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Notify on Failure"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
# Slack notification
- name: Notify Slack on Failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    channel: '#builds'
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}
`}</pre>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"GitHub Actions vs Jenkins"}
                </h2>
                <div className="when-to-use">
                  <h4>
                    {"Choose GitHub Actions When:"}
                  </h4>
                  <ul>
                    <li>
                      {"Your code is on GitHub"}
                    </li>
                    <li>
                      {"You want zero infrastructure to manage"}
                    </li>
                    <li>
                      {"You need quick setup (minutes, not hours)"}
                    </li>
                    <li>
                      {"Open source or small team projects"}
                    </li>
                  </ul>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Choose Jenkins When:"}
                  </h4>
                  <ul>
                    <li>
                      {"You need complex, custom pipelines"}
                    </li>
                    <li>
                      {"You're in an enterprise with specific requirements"}
                    </li>
                    <li>
                      {"You need to run on-premises for security"}
                    </li>
                    <li>
                      {"You have existing Jenkins infrastructure"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Master DevOps for Java "}
                <span className="gradient-text">
                  {"with Expert Mentorship"}
                </span>
              </h2>
              <p>
                {"Learn CI/CD, Docker, Kubernetes, and cloud deployment with hands-on projects."}
              </p>
              <div className="cta-buttons">
                <Link href="/full-stack-java" className="btn btn-primary btn-lg">
                  {"Explore Full Stack Java Course"}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="related-articles">
          <div className="container">
            <h2>
              {"Related Articles"}
            </h2>
            <div className="articles-grid">
              <Link href="/full-stack-java/articles/docker-basics" className="article-card">
                <h3>
                  {"Docker Basics"}
                </h3>
                {" "}
                <p>
                  {"Containerize your Java applications for CI/CD."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/kubernetes-java" className="article-card">
                <h3>
                  {"Kubernetes for Java"}
                </h3>
                {" "}
                <p>
                  {"Deploy your CI/CD pipeline to Kubernetes."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/unit-testing" className="article-card">
                <h3>
                  {"Unit Testing"}
                </h3>
                {" "}
                <p>
                  {"Write tests that run in your CI pipeline."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning CI/CD for Java as part of the Full Stack Java program."} />
    </>
  );
}
