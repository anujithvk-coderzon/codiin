import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Kubernetes for Beginners: Complete Guide to Container Orchestration",
  description: "Learn Kubernetes fundamentals - container orchestration for modern applications. A beginner's guide to K8s concepts, architecture, and essential commands.",
  keywords: ["Kubernetes tutorial", "K8s for beginners", "container orchestration", "Kubernetes pods", "deployments", "services", "kubectl"],
  alternates: { canonical: "/full-stack-python/articles/kubernetes" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/kubernetes",
    title: "Kubernetes: Container Orchestration for Beginners",
    description: "Master Kubernetes to deploy, scale, and manage containerized applications.",
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
  "headline": "Kubernetes: Container Orchestration for Beginners",
  "description": "Complete guide to Kubernetes container orchestration",
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

export default function FullStackPythonKubernetesPage() {
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
                {"Kubernetes"}
              </span>
            </div>
            <h1>
              {"Kubernetes"}
            </h1>
            <p className="article-subtitle">
              {"Container Orchestration at Scale"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"22 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Kubernetes?"}
                </h2>
                <p>
                  {"Kubernetes (often abbreviated as K8s) is an open-source platform for automating the deployment, scaling, and management of containerized applications. Originally developed by Google and now maintained by the Cloud Native Computing Foundation (CNCF)."}
                </p>
                <p>
                  {"Think of Kubernetes as a conductor for an orchestra. Each musician (container) knows how to play their instrument, but the conductor (Kubernetes) ensures everyone plays together harmoniously, at the right time, and adapts if someone misses a beat."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Do We Need Kubernetes?"}
                </h2>
                <p>
                  {"Docker lets you create containers, but what happens when you need to:"}
                </p>
                <ul>
                  <li>
                    {"Run hundreds or thousands of containers?"}
                  </li>
                  <li>
                    {"Automatically restart crashed containers?"}
                  </li>
                  <li>
                    {"Scale up during high traffic and down during low traffic?"}
                  </li>
                  <li>
                    {"Deploy new versions without downtime?"}
                  </li>
                  <li>
                    {"Distribute containers across multiple servers?"}
                  </li>
                  <li>
                    {"Balance traffic between containers?"}
                  </li>
                </ul>
                <p>
                  {"Kubernetes handles all of this automatically. It's the difference between manually managing each container versus having an intelligent system do it for you."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Kubernetes Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────┐
│                    KUBERNETES CLUSTER                     │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │              CONTROL PLANE (Master)                  │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ │ │
│  │  │API Server│ │Scheduler │ │Controller│ │  etcd  │ │ │
│  │  │          │ │          │ │ Manager  │ │        │ │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └────────┘ │ │
│  └─────────────────────────────────────────────────────┘ │
│                           │                               │
│  ┌────────────────────────┴────────────────────────────┐ │
│  │                  WORKER NODES                        │ │
│  │  ┌─────────────────┐    ┌─────────────────┐         │ │
│  │  │    Node 1       │    │    Node 2       │         │ │
│  │  │ ┌─────┐ ┌─────┐ │    │ ┌─────┐ ┌─────┐ │         │ │
│  │  │ │Pod 1│ │Pod 2│ │    │ │Pod 3│ │Pod 4│ │         │ │
│  │  │ └─────┘ └─────┘ │    │ └─────┘ └─────┘ │         │ │
│  │  │    kubelet      │    │    kubelet      │         │ │
│  │  └─────────────────┘    └─────────────────┘         │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"Control Plane (Master Node)"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"API Server:"}
                    </strong>
                    {" The front door to Kubernetes. All commands go through here."}
                  </li>
                  <li>
                    <strong>
                      {"Scheduler:"}
                    </strong>
                    {" Decides which node should run each pod."}
                  </li>
                  <li>
                    <strong>
                      {"Controller Manager:"}
                    </strong>
                    {" Ensures the cluster state matches desired state."}
                  </li>
                  <li>
                    <strong>
                      {"etcd:"}
                    </strong>
                    {" Key-value store holding all cluster data."}
                  </li>
                </ul>
                <h3>
                  {"Worker Nodes"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Kubelet:"}
                    </strong>
                    {" Agent that ensures containers are running in pods."}
                  </li>
                  <li>
                    <strong>
                      {"Container Runtime:"}
                    </strong>
                    {" Software that runs containers (Docker, containerd)."}
                  </li>
                  <li>
                    <strong>
                      {"Kube-proxy:"}
                    </strong>
                    {" Handles network rules for pod communication."}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Kubernetes Concepts"}
                </h2>
                <h3>
                  {"Pod"}
                </h3>
                <p>
                  {"The smallest deployable unit in Kubernetes. A pod can contain one or more containers that share storage and network resources."}
                </p>
                <div className="code-block">
                  <pre><code>{`# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-python-app
  labels:
    app: web
spec:
  containers:
  - name: python-app
    image: my-python-app:1.0
    ports:
    - containerPort: 5000`}</code></pre>
                </div>
                <h3>
                  {"Deployment"}
                </h3>
                <p>
                  {"Manages pod replicas and handles updates. You usually create Deployments, not individual Pods."}
                </p>
                <div className="code-block">
                  <pre><code>{`# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: python-app-deployment
spec:
  replicas: 3  # Run 3 copies of the app
  selector:
    matchLabels:
      app: python-app
  template:
    metadata:
      labels:
        app: python-app
    spec:
      containers:
      - name: python-app
        image: my-python-app:1.0
        ports:
        - containerPort: 5000
        resources:
          limits:
            memory: "256Mi"
            cpu: "500m"`}</code></pre>
                </div>
                <h3>
                  {"Service"}
                </h3>
                <p>
                  {"Exposes pods to network traffic. Provides stable IP and DNS name even as pods change."}
                </p>
                <div className="code-block">
                  <pre><code>{`# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: python-app-service
spec:
  selector:
    app: python-app
  ports:
  - port: 80        # Service port
    targetPort: 5000  # Pod port
  type: LoadBalancer  # Exposes externally`}</code></pre>
                </div>
                <h3>
                  {"ConfigMap and Secrets"}
                </h3>
                <p>
                  {"Store configuration data and sensitive information separately from containers."}
                </p>
                <div className="code-block">
                  <pre><code>{`# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_HOST: "postgres-service"
  LOG_LEVEL: "INFO"

---
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  DATABASE_PASSWORD: cGFzc3dvcmQxMjM=  # base64 encoded`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential kubectl Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Cluster Information
kubectl cluster-info
kubectl get nodes

# Working with Pods
kubectl get pods
kubectl get pods -o wide  # More details
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- bash

# Working with Deployments
kubectl get deployments
kubectl create -f deployment.yaml
kubectl apply -f deployment.yaml  # Create or update
kubectl delete deployment <name>
kubectl scale deployment <name> --replicas=5

# Working with Services
kubectl get services
kubectl expose deployment <name> --port=80 --type=LoadBalancer

# Debugging
kubectl describe <resource> <name>
kubectl logs <pod-name> -f  # Follow logs
kubectl get events --sort-by='.lastTimestamp'

# Common shortcuts
kubectl get all  # See pods, services, deployments
kubectl delete -f <filename.yaml>  # Delete resources from file`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deploying a Python App to Kubernetes"}
                </h2>
                <p>
                  {"Complete example of deploying a Python application:"}
                </p>
                <h3>
                  {"Step 1: Create Dockerfile"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]`}</code></pre>
                </div>
                <h3>
                  {"Step 2: Build and Push Image"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Build image
docker build -t myregistry/python-app:1.0 .

# Push to registry
docker push myregistry/python-app:1.0`}</code></pre>
                </div>
                <h3>
                  {"Step 3: Create Kubernetes Manifests"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: python-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: python-app
  template:
    metadata:
      labels:
        app: python-app
    spec:
      containers:
      - name: python-app
        image: myregistry/python-app:1.0
        ports:
        - containerPort: 5000
        envFrom:
        - configMapRef:
            name: app-config
        - secretRef:
            name: app-secrets
        readinessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 15
          periodSeconds: 20

---
# k8s/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: python-app-service
spec:
  selector:
    app: python-app
  ports:
  - port: 80
    targetPort: 5000
  type: LoadBalancer`}</code></pre>
                </div>
                <h3>
                  {"Step 4: Deploy to Kubernetes"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Apply all manifests
kubectl apply -f k8s/

# Check status
kubectl get pods
kubectl get services

# Watch pods come up
kubectl get pods -w`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Scaling and Updates"}
                </h2>
                <h3>
                  {"Manual Scaling"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Scale to 5 replicas
kubectl scale deployment python-app --replicas=5

# Scale down to 2
kubectl scale deployment python-app --replicas=2`}</code></pre>
                </div>
                <h3>
                  {"Horizontal Pod Autoscaler"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Autoscale based on CPU usage
kubectl autoscale deployment python-app --min=2 --max=10 --cpu-percent=80

# Or with YAML
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: python-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: python-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80`}</code></pre>
                </div>
                <h3>
                  {"Rolling Updates"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Update image (triggers rolling update)
kubectl set image deployment/python-app python-app=myregistry/python-app:2.0

# Check rollout status
kubectl rollout status deployment/python-app

# View rollout history
kubectl rollout history deployment/python-app

# Rollback to previous version
kubectl rollout undo deployment/python-app`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Local Development with Kubernetes"}
                </h2>
                <p>
                  {"Options for running Kubernetes locally:"}
                </p>
                <h3>
                  {"Minikube"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Install minikube (see minikube.sigs.k8s.io)

# Start cluster
minikube start

# Access dashboard
minikube dashboard

# Get service URL
minikube service python-app-service --url`}</code></pre>
                </div>
                <h3>
                  {"Docker Desktop"}
                </h3>
                <p>
                  {"Enable Kubernetes in Docker Desktop settings. Simple and works well on Mac/Windows."}
                </p>
                <h3>
                  {"Kind (Kubernetes in Docker)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Install kind
# Create cluster
kind create cluster

# Delete cluster
kind delete cluster`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Kubernetes Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use Deployments:"}
                    </strong>
                    {" Don't create bare Pods. Let Deployments manage them."}
                  </li>
                  <li>
                    <strong>
                      {"Set resource limits:"}
                    </strong>
                    {" Always define CPU and memory limits."}
                  </li>
                  <li>
                    <strong>
                      {"Use health checks:"}
                    </strong>
                    {" Implement liveness and readiness probes."}
                  </li>
                  <li>
                    <strong>
                      {"Use namespaces:"}
                    </strong>
                    {" Organize resources by environment or team."}
                  </li>
                  <li>
                    <strong>
                      {"Version your images:"}
                    </strong>
                    {" Never use :latest in production."}
                  </li>
                  <li>
                    <strong>
                      {"Use ConfigMaps and Secrets:"}
                    </strong>
                    {" Externalize configuration."}
                  </li>
                  <li>
                    <strong>
                      {"Implement monitoring:"}
                    </strong>
                    {" Use Prometheus and Grafana."}
                  </li>
                  <li>
                    <strong>
                      {"Store manifests in Git:"}
                    </strong>
                    {" Practice GitOps for infrastructure."}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Kubernetes with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers container orchestration with Kubernetes. Learn to deploy, scale, and manage Python applications in production with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/microservices" className="related-article-card">
                    <h4>
                      {"Microservices"}
                    </h4>
                    {" "}
                    <p>
                      {"Build distributed systems"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Kubernetes."} />
    </>
  );
}
