import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Kubernetes for Java Developers: Deploy Spring Boot Apps",
  description: "Deploy Java applications to Kubernetes. Learn pods, deployments, services, ConfigMaps, and Secrets with beginner-friendly examples.",
  keywords: ["Kubernetes Java", "K8s Java deployment", "Spring Boot Kubernetes", "Java containers", "Docker Kubernetes tutorial"],
  alternates: { canonical: "/full-stack-java/articles/kubernetes-java" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/kubernetes-java",
    title: "Kubernetes for Java Developers: Complete Guide | CODiiN",
    description: "Learn to deploy and manage Java applications on Kubernetes. Master pods, services, and deployments.",
    images: ["/images/kubernetes-java-og.jpg"],
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
  "headline": "Kubernetes for Java Developers: Complete Guide",
  "description": "Deploy Java applications to Kubernetes with pods, services, and deployments",
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

export default function FullStackJavaKubernetesJavaPage() {
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
              {"Kubernetes for Java"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Kubernetes for Java Developers"}
            </h1>
            <p className="article-subtitle">
              {"Deploy, Scale, and Manage Your Java Applications in the Cloud"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Kubernetes?"}
                </h2>
                <p>
                  {"Imagine you're running a pizza restaurant. On a quiet Monday, one chef is enough. But on Super Bowl Sunday, you need 10 chefs, more ovens, and extra delivery drivers. What if your restaurant could automatically scale up and down based on demand?"}
                </p>
                <p>
                  {"That's exactly what Kubernetes (K8s) does for your applications. It automatically manages your containers - starting new ones when traffic increases, restarting crashed ones, and distributing load across servers."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Auto-Scaling"}
                    </h3>
                    <p>
                      {"Automatically add more containers when traffic spikes and reduce when it's quiet. Pay only for what you use."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Self-Healing"}
                    </h3>
                    <p>
                      {"If a container crashes, Kubernetes automatically restarts it. Your app stays running 24/7."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Zero-Downtime Deployments"}
                    </h3>
                    <p>
                      {"Roll out updates gradually. If something goes wrong, automatically roll back to the previous version."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Industry Standard"}
                    </h3>
                    <p>
                      {"Used by Google, Amazon, Netflix, and most modern companies. Essential skill for cloud-native development."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Prerequisites: Docker First"}
                </h2>
                <p>
                  {"Before Kubernetes, you need to understand Docker. Your Java app must be containerized first."}
                </p>
                <h3>
                  {"Quick Docker Recap"}
                </h3>
                <div className="code-block">
                  <pre>{`
# Dockerfile for Spring Boot app
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy the JAR file
COPY target/myapp-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# Build and run locally
docker build -t myapp:1.0 .
docker run -p 8080:8080 myapp:1.0

# Push to registry (Docker Hub, ECR, GCR, etc.)
docker tag myapp:1.0 username/myapp:1.0
docker push username/myapp:1.0
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Kubernetes Core Concepts"}
                </h2>
                <p>
                  {"Think of Kubernetes like managing a fleet of delivery trucks:"}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Pod"}
                    </h3>
                    <p>
                      {"The smallest unit - like a single truck. Contains one or more containers that work together."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Deployment"}
                    </h3>
                    <p>
                      {"Manages a fleet of identical pods. \"I want 3 trucks running at all times.\""}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Service"}
                    </h3>
                    <p>
                      {"The dispatch center - routes requests to available pods. Provides a stable address."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"ConfigMap & Secret"}
                    </h3>
                    <p>
                      {"Configuration storage - like driver instructions and security codes."}
                    </p>
                  </div>
                </div>
                <h3>
                  {"Visual Overview"}
                </h3>
                <div className="code-block">
                  <pre>{`
                    Internet
                        |
                    Ingress (optional - routing rules)
                        |
                    Service (load balancer)
                   /    |    \\
                Pod   Pod   Pod  (your app instances)
                 |     |     |
            Container Container Container
            (Java app) (Java app) (Java app)
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Your First Kubernetes Deployment"}
                </h2>
                <h3>
                  {"Step 1: Create a Deployment"}
                </h3>
                <p>
                  {"A Deployment tells Kubernetes how to run your app:"}
                </p>
                <div className="code-block">
                  <pre>{`
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
  labels:
    app: myapp
spec:
  replicas: 3  # Run 3 instances of your app
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: username/myapp:1.0
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        readinessProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 30
`}</pre>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Understanding the YAML"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"replicas: 3"}
                      </strong>
                      {" - Keep 3 pods running at all times"}
                    </li>
                    <li>
                      <strong>
                        {"image"}
                      </strong>
                      {" - Your Docker image from a registry"}
                    </li>
                    <li>
                      <strong>
                        {"resources"}
                      </strong>
                      {" - Memory and CPU limits"}
                    </li>
                    <li>
                      <strong>
                        {"readinessProbe"}
                      </strong>
                      {" - Is the app ready to receive traffic?"}
                    </li>
                    <li>
                      <strong>
                        {"livenessProbe"}
                      </strong>
                      {" - Is the app still alive? Restart if not."}
                    </li>
                  </ul>
                </div>
                <h3>
                  {"Step 2: Create a Service"}
                </h3>
                <p>
                  {"A Service provides a stable way to access your pods:"}
                </p>
                <div className="code-block">
                  <pre>{`
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp  # Match pods with this label
  ports:
  - protocol: TCP
    port: 80        # External port
    targetPort: 8080  # Container port
  type: LoadBalancer  # Creates external IP (cloud providers)
`}</pre>
                </div>
                <h3>
                  {"Step 3: Apply to Kubernetes"}
                </h3>
                <div className="code-block">
                  <pre>{`
# Apply configurations
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Check status
kubectl get deployments
kubectl get pods
kubectl get services

# View pod logs
kubectl logs -f myapp-deployment-abc123

# Describe for debugging
kubectl describe pod myapp-deployment-abc123
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Configuration: ConfigMaps and Secrets"}
                </h2>
                <p>
                  {"Don't hardcode configuration in your Docker image. Use ConfigMaps for regular config and Secrets for sensitive data."}
                </p>
                <h3>
                  {"ConfigMap for Application Properties"}
                </h3>
                <div className="code-block">
                  <pre>{`
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  SPRING_PROFILES_ACTIVE: "production"
  SERVER_PORT: "8080"
  LOG_LEVEL: "INFO"
  application.properties: |
    spring.datasource.url=jdbc:postgresql://db-service:5432/mydb
    spring.jpa.hibernate.ddl-auto=validate
    server.tomcat.max-threads=200
`}</pre>
                </div>
                <h3>
                  {"Secrets for Sensitive Data"}
                </h3>
                <div className="code-block">
                  <pre>{`
# Create secret from command line (values are base64 encoded)
kubectl create secret generic myapp-secrets \\
  --from-literal=DB_USERNAME=admin \\
  --from-literal=DB_PASSWORD=supersecret123

# Or from YAML (values must be base64 encoded)
# echo -n 'admin' | base64 → YWRtaW4=
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
type: Opaque
data:
  DB_USERNAME: YWRtaW4=
  DB_PASSWORD: c3VwZXJzZWNyZXQxMjM=
`}</pre>
                </div>
                <h3>
                  {"Using Config in Deployment"}
                </h3>
                <div className="code-block">
                  <pre>{`
# Updated deployment.yaml
spec:
  containers:
  - name: myapp
    image: username/myapp:1.0
    ports:
    - containerPort: 8080

    # Environment variables from ConfigMap
    envFrom:
    - configMapRef:
        name: myapp-config

    # Environment variables from Secret
    env:
    - name: DB_USERNAME
      valueFrom:
        secretKeyRef:
          name: myapp-secrets
          key: DB_USERNAME
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: myapp-secrets
          key: DB_PASSWORD

    # Mount config file
    volumeMounts:
    - name: config-volume
      mountPath: /app/config

  volumes:
  - name: config-volume
    configMap:
      name: myapp-config
      items:
      - key: application.properties
        path: application.properties
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Scaling Your Application"}
                </h2>
                <h3>
                  {"Manual Scaling"}
                </h3>
                <div className="code-block">
                  <pre>{`
# Scale to 5 replicas
kubectl scale deployment myapp-deployment --replicas=5

# Check the scaling
kubectl get pods -w  # Watch pods come up
`}</pre>
                </div>
                <h3>
                  {"Auto-Scaling (HPA)"}
                </h3>
                <div className="code-block">
                  <pre>{`
# hpa.yaml - Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70  # Scale when CPU > 70%
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80  # Scale when Memory > 80%
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# Apply and monitor
kubectl apply -f hpa.yaml
kubectl get hpa -w

# Output:
# NAME        REFERENCE                 TARGETS   MINPODS   MAXPODS   REPLICAS
# myapp-hpa   Deployment/myapp-deploy   45%/70%   2         10        3
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Zero-Downtime Deployments"}
                </h2>
                <p>
                  {"Kubernetes can update your app without any downtime using rolling updates."}
                </p>
                <div className="code-block">
                  <pre>{`
# Update the image to a new version
kubectl set image deployment/myapp-deployment myapp=username/myapp:2.0

# Or edit the deployment
kubectl edit deployment myapp-deployment

# Watch the rollout
kubectl rollout status deployment/myapp-deployment

# View rollout history
kubectl rollout history deployment/myapp-deployment

# Rollback if something goes wrong!
kubectl rollout undo deployment/myapp-deployment
kubectl rollout undo deployment/myapp-deployment --to-revision=2
`}</pre>
                </div>
                <h3>
                  {"Deployment Strategy"}
                </h3>
                <div className="code-block">
                  <pre>{`
# In deployment.yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Max pods over desired count during update
      maxUnavailable: 0  # Never have less than desired count
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Spring Boot Kubernetes Best Practices"}
                </h2>
                <h3>
                  {"1. Enable Actuator Health Endpoints"}
                </h3>
                <div className="code-block">
                  <pre>{`
# pom.xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

# application.properties
management.endpoints.web.exposure.include=health,info,prometheus
management.endpoint.health.probes.enabled=true
management.health.livenessState.enabled=true
management.health.readinessState.enabled=true
`}</pre>
                </div>
                <h3>
                  {"2. Graceful Shutdown"}
                </h3>
                <div className="code-block">
                  <pre>{`
# application.properties
server.shutdown=graceful
spring.lifecycle.timeout-per-shutdown-phase=30s
`}</pre>
                </div>
                <h3>
                  {"3. Optimized Dockerfile"}
                </h3>
                <div className="code-block">
                  <pre>{`
# Use layered JAR for faster builds
FROM eclipse-temurin:17-jdk-alpine as builder
WORKDIR /app
COPY target/*.jar app.jar
RUN java -Djarmode=layertools -jar app.jar extract

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/dependencies/ ./
COPY --from=builder /app/spring-boot-loader/ ./
COPY --from=builder /app/snapshot-dependencies/ ./
COPY --from=builder /app/application/ ./

# Run as non-root user
RUN addgroup -S spring && adduser -S spring -G spring
USER spring

EXPOSE 8080
ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]
`}</pre>
                </div>
                <h3>
                  {"4. Resource Limits"}
                </h3>
                <div className="code-block">
                  <pre>{`
# Set JVM memory based on container limits
ENTRYPOINT ["java", \\
  "-XX:+UseContainerSupport", \\
  "-XX:MaxRAMPercentage=75.0", \\
  "-jar", "app.jar"]
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Essential kubectl Commands"}
                </h2>
                <div className="code-block">
                  <pre>{`
# Cluster info
kubectl cluster-info
kubectl get nodes

# Viewing resources
kubectl get pods
kubectl get pods -o wide  # More details
kubectl get all           # All resource types
kubectl get pods -n my-namespace  # Specific namespace

# Debugging
kubectl logs pod-name
kubectl logs -f pod-name  # Follow logs
kubectl logs pod-name -c container-name  # Specific container
kubectl describe pod pod-name
kubectl exec -it pod-name -- /bin/sh  # Shell into container

# Port forwarding (for local testing)
kubectl port-forward pod-name 8080:8080
kubectl port-forward service/myapp-service 8080:80

# Resource management
kubectl apply -f file.yaml
kubectl delete -f file.yaml
kubectl delete pod pod-name

# Namespaces
kubectl create namespace production
kubectl get pods -n production
kubectl config set-context --current --namespace=production
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Local Kubernetes Development"}
                </h2>
                <div className="when-to-use">
                  <h4>
                    {"Local K8s Options"}
                  </h4>
                  <ul>
                    <li>
                      <strong>
                        {"Minikube"}
                      </strong>
                      {" - Full K8s cluster in a VM (most popular)"}
                    </li>
                    <li>
                      <strong>
                        {"Docker Desktop"}
                      </strong>
                      {" - Built-in K8s (easiest for Mac/Windows)"}
                    </li>
                    <li>
                      <strong>
                        {"Kind"}
                      </strong>
                      {" - Kubernetes in Docker (lightweight)"}
                    </li>
                    <li>
                      <strong>
                        {"K3s"}
                      </strong>
                      {" - Lightweight K8s (great for learning)"}
                    </li>
                  </ul>
                </div>
                <div className="code-block">
                  <pre>{`
# Minikube setup
minikube start
minikube dashboard  # Opens web UI

# Docker Desktop
# Enable Kubernetes in Docker Desktop settings

# Use local images with Minikube
eval $(minikube docker-env)
docker build -t myapp:1.0 .
# Now minikube can use the local image
`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Master Cloud-Native Java "}
                <span className="gradient-text">
                  {"Development"}
                </span>
              </h2>
              <p>
                {"Learn Kubernetes, Docker, and cloud deployment with hands-on projects and expert mentorship."}
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
                  {"Containerize your Java applications with Docker."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/cicd-java" className="article-card">
                <h3>
                  {"CI/CD for Java"}
                </h3>
                {" "}
                <p>
                  {"Automate deployments with Jenkins and GitHub Actions."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices"}
                </h3>
                {" "}
                <p>
                  {"Build distributed systems with Spring Cloud."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Kubernetes for Java as part of the Full Stack Java program."} />
    </>
  );
}
