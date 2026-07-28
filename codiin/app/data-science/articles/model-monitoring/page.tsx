import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Model Monitoring & Drift Detection",
  description: "Master Model Monitoring and Drift Detection. Learn to track model performance, detect data drift, and maintain ML systems in production.",
  keywords: ["model monitoring", "model drift", "data drift", "ML observability", "production ML", "concept drift", "MLOps"],
  alternates: { canonical: "/data-science/articles/model-monitoring" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/model-monitoring",
    title: "Model Monitoring & Drift Detection",
    description: "Keep your ML models healthy in production.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Model Monitoring & Drift Detection",
  "description": "Complete guide to monitoring ML models in production",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-25",
  "dateModified": "2024-12-25"
} as const;

export default function DataScienceModelMonitoringPage() {
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
                {"Model Monitoring"}
              </span>
            </div>
            <h1>
              {"Model Monitoring & Drift Detection"}
            </h1>
            <p className="article-subtitle">
              {"Keep Your ML Models Healthy in Production"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Why Monitor ML Models?"}
                </h2>
                <p>
                  {"ML models degrade over time. Data distributions shift, user behavior changes, and the world evolves. Without monitoring, you won't know when your model stops working well."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Data Drift:"}
                    </strong>
                    {" Input data distribution changes"}
                  </li>
                  <li>
                    <strong>
                      {"Concept Drift:"}
                    </strong>
                    {" Relationship between features and target changes"}
                  </li>
                  <li>
                    <strong>
                      {"Model Decay:"}
                    </strong>
                    {" Performance degradation over time"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Metrics to Monitor"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

class ModelMonitor:
    def __init__(self, model):
        self.model = model
        self.predictions = []
        self.actuals = []
        self.latencies = []

    def log_prediction(self, features, prediction, actual=None, latency=None):
        """Log a single prediction for monitoring."""
        self.predictions.append(prediction)
        if actual is not None:
            self.actuals.append(actual)
        if latency is not None:
            self.latencies.append(latency)

    def get_performance_metrics(self):
        """Calculate performance metrics."""
        if not self.actuals:
            return {"error": "No ground truth available"}

        return {
            "accuracy": accuracy_score(self.actuals, self.predictions),
            "precision": precision_score(self.actuals, self.predictions, average='weighted'),
            "recall": recall_score(self.actuals, self.predictions, average='weighted'),
            "f1": f1_score(self.actuals, self.predictions, average='weighted'),
            "sample_count": len(self.predictions)
        }

    def get_operational_metrics(self):
        """Calculate operational metrics."""
        return {
            "avg_latency_ms": np.mean(self.latencies) if self.latencies else 0,
            "p95_latency_ms": np.percentile(self.latencies, 95) if self.latencies else 0,
            "p99_latency_ms": np.percentile(self.latencies, 99) if self.latencies else 0,
            "prediction_count": len(self.predictions)
        }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Drift Detection"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from scipy import stats
import numpy as np

def detect_drift_ks(reference_data, current_data, threshold=0.05):
    """
    Detect drift using Kolmogorov-Smirnov test.
    Returns True if drift detected.
    """
    statistic, p_value = stats.ks_2samp(reference_data, current_data)
    return p_value < threshold, statistic, p_value

def detect_drift_psi(reference_data, current_data, buckets=10):
    """
    Calculate Population Stability Index (PSI).
    PSI < 0.1: No drift
    0.1 <= PSI < 0.2: Moderate drift
    PSI >= 0.2: Significant drift
    """
    def get_bucket_percentages(data, bins):
        hist, _ = np.histogram(data, bins=bins)
        return hist / len(data)

    # Create bins from reference data
    _, bins = np.histogram(reference_data, bins=buckets)

    ref_pct = get_bucket_percentages(reference_data, bins)
    curr_pct = get_bucket_percentages(current_data, bins)

    # Avoid division by zero
    ref_pct = np.where(ref_pct == 0, 0.0001, ref_pct)
    curr_pct = np.where(curr_pct == 0, 0.0001, curr_pct)

    psi = np.sum((curr_pct - ref_pct) * np.log(curr_pct / ref_pct))
    return psi

# Example usage
reference = training_data['feature1']
current = production_data['feature1']

drift_detected, ks_stat, p_value = detect_drift_ks(reference, current)
psi_score = detect_drift_psi(reference, current)

print(f"KS Test - Drift: {drift_detected}, Statistic: {ks_stat:.4f}")
print(f"PSI Score: {psi_score:.4f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using Evidently for Monitoring"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# pip install evidently
from evidently import ColumnMapping
from evidently.report import Report
from evidently.metric_preset import DataDriftPreset, ClassificationPreset
from evidently.metrics import *

# Define column mapping
column_mapping = ColumnMapping(
    target='target',
    prediction='prediction',
    numerical_features=['feature1', 'feature2', 'feature3'],
    categorical_features=['category']
)

# Data Drift Report
data_drift_report = Report(metrics=[DataDriftPreset()])
data_drift_report.run(
    reference_data=reference_df,
    current_data=current_df,
    column_mapping=column_mapping
)
data_drift_report.save_html('data_drift_report.html')

# Model Performance Report
classification_report = Report(metrics=[ClassificationPreset()])
classification_report.run(
    reference_data=reference_df,
    current_data=current_df,
    column_mapping=column_mapping
)
classification_report.save_html('classification_report.html')

# Get metrics as dict
metrics = data_drift_report.as_dict()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Prometheus + Grafana Setup"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from prometheus_client import Counter, Histogram, Gauge, start_http_server
import time

# Define metrics
PREDICTIONS_TOTAL = Counter(
    'model_predictions_total',
    'Total number of predictions',
    ['model_version', 'prediction_class']
)

PREDICTION_LATENCY = Histogram(
    'model_prediction_latency_seconds',
    'Prediction latency in seconds',
    buckets=[0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0]
)

MODEL_ACCURACY = Gauge(
    'model_accuracy',
    'Current model accuracy',
    ['model_version']
)

DATA_DRIFT_SCORE = Gauge(
    'data_drift_psi',
    'PSI score for data drift',
    ['feature']
)

# Start metrics server
start_http_server(8000)

# Use in prediction endpoint
@app.post('/predict')
async def predict(request: PredictionRequest):
    start_time = time.time()

    # Make prediction
    prediction = model.predict(request.features)

    # Record metrics
    latency = time.time() - start_time
    PREDICTION_LATENCY.observe(latency)
    PREDICTIONS_TOTAL.labels(
        model_version='v1',
        prediction_class=str(prediction)
    ).inc()

    return {'prediction': prediction}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Alerting System"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import smtplib
from email.mime.text import MIMEText
import slack_sdk

class AlertManager:
    def __init__(self, slack_token=None, email_config=None):
        self.slack_client = slack_sdk.WebClient(token=slack_token) if slack_token else None
        self.email_config = email_config

    def send_alert(self, title, message, severity='warning'):
        """Send alert to configured channels."""
        if self.slack_client:
            self._send_slack_alert(title, message, severity)
        if self.email_config:
            self._send_email_alert(title, message)

    def _send_slack_alert(self, title, message, severity):
        color = {'critical': 'danger', 'warning': 'warning', 'info': 'good'}
        self.slack_client.chat_postMessage(
            channel='#ml-alerts',
            attachments=[{
                'color': color.get(severity, 'warning'),
                'title': title,
                'text': message
            }]
        )

    def check_drift_and_alert(self, feature_name, psi_score):
        """Check drift and send alert if threshold exceeded."""
        if psi_score >= 0.2:
            self.send_alert(
                title=f"Critical Data Drift Detected: {feature_name}",
                message=f"PSI score: {psi_score:.4f}. Immediate action required.",
                severity='critical'
            )
        elif psi_score >= 0.1:
            self.send_alert(
                title=f"Moderate Data Drift Detected: {feature_name}",
                message=f"PSI score: {psi_score:.4f}. Consider retraining.",
                severity='warning'
            )

    def check_performance_and_alert(self, metric_name, current_value, threshold):
        """Alert if performance drops below threshold."""
        if current_value < threshold:
            self.send_alert(
                title=f"Model Performance Degradation: {metric_name}",
                message=f"Current: {current_value:.4f}, Threshold: {threshold:.4f}",
                severity='critical'
            )`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Automated Retraining Pipeline"}
                </h2>
                <div className="code-block">
                  <pre><code>{`class RetrainingTrigger:
    def __init__(self, drift_threshold=0.2, performance_threshold=0.85):
        self.drift_threshold = drift_threshold
        self.performance_threshold = performance_threshold

    def should_retrain(self, drift_scores, performance_metrics):
        """Determine if model should be retrained."""
        # Check drift
        max_drift = max(drift_scores.values())
        if max_drift >= self.drift_threshold:
            return True, f"Drift detected: {max_drift:.4f}"

        # Check performance
        if performance_metrics.get('accuracy', 1.0) < self.performance_threshold:
            return True, f"Performance below threshold"

        return False, "No retraining needed"

    def trigger_retraining(self):
        """Trigger retraining pipeline."""
        # Option 1: Call Airflow DAG
        # requests.post('http://airflow/api/v1/dags/retrain/dagRuns', ...)

        # Option 2: GitHub Actions workflow
        # github_api.dispatch_workflow('retrain.yml')

        # Option 3: AWS Step Functions
        # stepfunctions.start_execution(...)
        pass

# Scheduled monitoring job
def monitoring_job():
    # Calculate drift
    drift_scores = {}
    for feature in features:
        psi = detect_drift_psi(reference[feature], current[feature])
        drift_scores[feature] = psi

    # Calculate performance (if ground truth available)
    performance = monitor.get_performance_metrics()

    # Check if retraining needed
    trigger = RetrainingTrigger()
    should_retrain, reason = trigger.should_retrain(drift_scores, performance)

    if should_retrain:
        alert_manager.send_alert("Retraining Triggered", reason)
        trigger.trigger_retraining()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Monitoring Dashboard Checklist"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Prediction Volume:"}
                    </strong>
                    {" Track request counts over time"}
                  </li>
                  <li>
                    <strong>
                      {"Latency:"}
                    </strong>
                    {" p50, p95, p99 latencies"}
                  </li>
                  <li>
                    <strong>
                      {"Error Rate:"}
                    </strong>
                    {" Failed predictions percentage"}
                  </li>
                  <li>
                    <strong>
                      {"Feature Distributions:"}
                    </strong>
                    {" Histograms of input features"}
                  </li>
                  <li>
                    <strong>
                      {"Prediction Distribution:"}
                    </strong>
                    {" Output class balance"}
                  </li>
                  <li>
                    <strong>
                      {"Drift Scores:"}
                    </strong>
                    {" PSI/KS test results per feature"}
                  </li>
                  <li>
                    <strong>
                      {"Model Performance:"}
                    </strong>
                    {" Accuracy, F1 (when labels available)"}
                  </li>
                  <li>
                    <strong>
                      {"Resource Usage:"}
                    </strong>
                    {" CPU, memory, GPU utilization"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master MLOps Monitoring"}
                </h2>
                <p>
                  {"Our Data Science program covers production ML monitoring, drift detection, and maintaining healthy ML systems."}
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
                  <Link href="/data-science/articles/mlops" className="related-article-card">
                    <h4>
                      {"MLOps"}
                    </h4>
                    {" "}
                    <p>
                      {"End-to-end ML lifecycle"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/mlflow-dvc" className="related-article-card">
                    <h4>
                      {"MLflow & DVC"}
                    </h4>
                    {" "}
                    <p>
                      {"Model versioning and tracking"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/model-serving" className="related-article-card">
                    <h4>
                      {"Model Serving"}
                    </h4>
                    {" "}
                    <p>
                      {"Deploy models to production"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Model Monitoring."} />
    </>
  );
}
