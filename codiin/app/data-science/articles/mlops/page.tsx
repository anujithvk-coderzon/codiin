import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "MLOps: Deploying Machine Learning to Production",
  description: "Learn MLOps - deploy machine learning models to production. MLflow, Docker, FastAPI, model monitoring, CI/CD for ML, and best practices.",
  keywords: ["MLOps tutorial", "ML deployment", "MLflow", "Docker", "FastAPI", "model serving", "ML CI/CD", "model monitoring"],
  alternates: { canonical: "/data-science/articles/mlops" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/mlops",
    title: "MLOps: Deploying Machine Learning to Production",
    description: "Learn to deploy and manage ML models in production environments.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "MLOps: Deploying Machine Learning to Production",
  "description": "Complete guide to MLOps and ML deployment",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-22",
  "dateModified": "2024-12-22"
} as const;

export default function DataScienceMlopsPage() {
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
              <Link href="/data-science">
                {"Data Science"}
              </Link>
              {" / "}
              <span>
                {"MLOps"}
              </span>
            </div>
            <h1>
              {"MLOps"}
            </h1>
            <p className="article-subtitle">
              {"Deploying Machine Learning Models to Production"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"17 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is MLOps?"}
                </h2>
                <p>
                  {"MLOps (Machine Learning Operations) is the practice of deploying, monitoring, and maintaining machine learning models in production. It combines ML, DevOps, and data engineering to make ML systems reliable, scalable, and reproducible."}
                </p>
                <p>
                  {"A model in a Jupyter notebook isn't delivering value. MLOps bridges the gap between data science and production systems."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"The ML Lifecycle"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Data Collection & Preparation:"}
                    </strong>
                    {" ETL pipelines, data validation"}
                  </li>
                  <li>
                    <strong>
                      {"Feature Engineering:"}
                    </strong>
                    {" Feature stores, transformation pipelines"}
                  </li>
                  <li>
                    <strong>
                      {"Model Training:"}
                    </strong>
                    {" Experiment tracking, hyperparameter tuning"}
                  </li>
                  <li>
                    <strong>
                      {"Model Evaluation:"}
                    </strong>
                    {" Metrics, validation, testing"}
                  </li>
                  <li>
                    <strong>
                      {"Deployment:"}
                    </strong>
                    {" Model serving, API development"}
                  </li>
                  <li>
                    <strong>
                      {"Monitoring:"}
                    </strong>
                    {" Performance tracking, drift detection"}
                  </li>
                  <li>
                    <strong>
                      {"Retraining:"}
                    </strong>
                    {" Continuous improvement loops"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Experiment Tracking with MLflow"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score

# Start MLflow experiment
mlflow.set_experiment("customer_churn")

with mlflow.start_run(run_name="random_forest_v1"):
    # Log parameters
    params = {"n_estimators": 100, "max_depth": 10, "random_state": 42}
    mlflow.log_params(params)

    # Train model
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)

    # Evaluate
    predictions = model.predict(X_test)
    accuracy = accuracy_score(y_test, predictions)
    f1 = f1_score(y_test, predictions)

    # Log metrics
    mlflow.log_metrics({"accuracy": accuracy, "f1_score": f1})

    # Log model
    mlflow.sklearn.log_model(model, "model")

    # Log artifacts (plots, data)
    mlflow.log_artifact("confusion_matrix.png")

# View results: mlflow ui`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Serving with FastAPI"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# app.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="ML Model API")

# Load model at startup
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

class PredictionInput(BaseModel):
    features: list[float]

class PredictionOutput(BaseModel):
    prediction: int
    probability: float

@app.post("/predict", response_model=PredictionOutput)
def predict(input_data: PredictionInput):
    try:
        # Preprocess
        features = np.array(input_data.features).reshape(1, -1)
        features_scaled = scaler.transform(features)

        # Predict
        prediction = model.predict(features_scaled)[0]
        probability = model.predict_proba(features_scaled)[0].max()

        return PredictionOutput(
            prediction=int(prediction),
            probability=float(probability)
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Run: uvicorn app:app --host 0.0.0.0 --port 8000`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Containerization with Docker"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Dockerfile
FROM python:3.10-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY app.py .
COPY model.pkl .
COPY scaler.pkl .

# Expose port
EXPOSE 8000

# Run server
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

# Build and run:
# docker build -t ml-api .
# docker run -p 8000:8000 ml-api`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Monitoring"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
from scipy import stats

def detect_data_drift(reference_data, production_data, threshold=0.05):
    """Detect drift using KS test for numerical features"""
    drift_report = {}

    for column in reference_data.columns:
        if reference_data[column].dtype in ['float64', 'int64']:
            stat, p_value = stats.ks_2samp(
                reference_data[column],
                production_data[column]
            )
            drift_report[column] = {
                'statistic': stat,
                'p_value': p_value,
                'drift_detected': p_value < threshold
            }

    return drift_report

# Monitor prediction distribution
def monitor_predictions(predictions, expected_distribution):
    """Compare prediction distribution to expected"""
    actual_dist = pd.Series(predictions).value_counts(normalize=True)
    # Alert if distribution shifts significantly
    pass

# Log metrics to monitoring system
def log_inference_metrics(prediction_time, input_features, output):
    # Log to Prometheus, CloudWatch, etc.
    pass`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CI/CD for ML"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# .github/workflows/ml-pipeline.yml
name: ML Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest tests/
      - name: Run model validation
        run: python scripts/validate_model.py

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: |
          # Deploy updated model
          echo "Deploying..."`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Version everything:"}
                    </strong>
                    {" Code, data, models, and configs"}
                  </li>
                  <li>
                    <strong>
                      {"Automate testing:"}
                    </strong>
                    {" Unit tests, integration tests, model validation"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor continuously:"}
                    </strong>
                    {" Track performance, data drift, and system health"}
                  </li>
                  <li>
                    <strong>
                      {"Use feature stores:"}
                    </strong>
                    {" Centralize feature computation and serving"}
                  </li>
                  <li>
                    <strong>
                      {"Implement rollback:"}
                    </strong>
                    {" Quickly revert to previous model versions"}
                  </li>
                  <li>
                    <strong>
                      {"Document everything:"}
                    </strong>
                    {" Model cards, API docs, runbooks"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master MLOps with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers MLOps from experiment tracking to production deployment. Deploy real models with guidance from industry experts."}
                </p>
                <Link href="/data-science" className="btn btn-primary">
                  {"Explore Data Science Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Build models to deploy"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/scikit-learn" className="related-article-card">
                    <h4>
                      {"Scikit-learn"}
                    </h4>
                    {" "}
                    <p>
                      {"ML library for production"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Neural networks at scale"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn MLOps."} />
    </>
  );
}
