import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "MLflow & DVC: Model Versioning Guide",
  description: "Master MLflow and DVC for ML versioning. Track experiments, version models and data, and ensure reproducibility in your machine learning projects.",
  keywords: ["MLflow", "DVC", "model versioning", "experiment tracking", "ML reproducibility", "data versioning", "MLOps"],
  alternates: { canonical: "/data-science/articles/mlflow-dvc" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/mlflow-dvc",
    title: "MLflow & DVC: Model Versioning Guide",
    description: "Track experiments and version ML models effectively.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "MLflow & DVC: Model Versioning Guide",
  "description": "Complete guide to ML versioning and experiment tracking",
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

export default function DataScienceMlflowDvcPage() {
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
                {"MLflow & DVC"}
              </span>
            </div>
            <h1>
              {"MLflow & DVC"}
            </h1>
            <p className="article-subtitle">
              {"Model Versioning and Experiment Tracking"}
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
                  {"Why Version ML Projects?"}
                </h2>
                <p>
                  {"ML projects involve more than just code - you need to track data, models, hyperparameters, and metrics. Without proper versioning, reproducing results becomes impossible."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"MLflow:"}
                    </strong>
                    {" Experiment tracking, model registry, deployment"}
                  </li>
                  <li>
                    <strong>
                      {"DVC:"}
                    </strong>
                    {" Data and model versioning with Git-like workflow"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"MLflow: Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install MLflow
pip install mlflow

# Start the tracking server
mlflow ui --port 5000

# In your training script
import mlflow
import mlflow.sklearn

# Set experiment
mlflow.set_experiment("classification-experiment")

# Start a run
with mlflow.start_run(run_name="random-forest-v1"):
    # Log parameters
    mlflow.log_param("n_estimators", 100)
    mlflow.log_param("max_depth", 10)
    mlflow.log_param("random_state", 42)

    # Train model
    model = RandomForestClassifier(n_estimators=100, max_depth=10)
    model.fit(X_train, y_train)

    # Log metrics
    accuracy = model.score(X_test, y_test)
    mlflow.log_metric("accuracy", accuracy)
    mlflow.log_metric("f1_score", f1_score(y_test, predictions))

    # Log model
    mlflow.sklearn.log_model(model, "model")

    # Log artifacts (plots, data)
    mlflow.log_artifact("confusion_matrix.png")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"MLflow Autologging"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import mlflow

# Enable autologging for various frameworks
mlflow.sklearn.autolog()
mlflow.pytorch.autolog()
mlflow.tensorflow.autolog()
mlflow.xgboost.autolog()

# Now training automatically logs everything
from sklearn.ensemble import RandomForestClassifier

with mlflow.start_run():
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X_train, y_train)
    # Parameters, metrics, and model are automatically logged!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"MLflow Model Registry"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import mlflow
from mlflow.tracking import MlflowClient

# Register model from a run
mlflow.register_model(
    "runs:/run_id/model",
    "CustomerChurnModel"
)

# Or during logging
with mlflow.start_run():
    mlflow.sklearn.log_model(
        model, "model",
        registered_model_name="CustomerChurnModel"
    )

# Manage model versions
client = MlflowClient()

# Transition to staging
client.transition_model_version_stage(
    name="CustomerChurnModel",
    version=1,
    stage="Staging"
)

# Transition to production
client.transition_model_version_stage(
    name="CustomerChurnModel",
    version=1,
    stage="Production"
)

# Load production model
model = mlflow.pyfunc.load_model(
    "models:/CustomerChurnModel/Production"
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"MLflow Projects"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# MLproject file
name: ml-project

conda_env: conda.yaml

entry_points:
  main:
    parameters:
      n_estimators: {type: int, default: 100}
      max_depth: {type: int, default: 10}
    command: "python train.py --n_estimators {n_estimators} --max_depth {max_depth}"

  preprocess:
    command: "python preprocess.py"

# conda.yaml
name: ml-env
channels:
  - defaults
dependencies:
  - python=3.11
  - scikit-learn
  - pandas
  - pip:
    - mlflow

# Run the project
mlflow run . -P n_estimators=200 -P max_depth=15

# Run from Git
mlflow run https://github.com/user/ml-project -P n_estimators=200`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DVC: Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install DVC
pip install dvc
pip install dvc-s3  # For S3 storage

# Initialize DVC in your Git repo
git init
dvc init

# Track a data file
dvc add data/train.csv
git add data/train.csv.dvc data/.gitignore

# Commit to Git
git commit -m "Add training data"

# Configure remote storage
dvc remote add -d myremote s3://mybucket/dvcstore

# Push data to remote
dvc push

# Pull data from remote
dvc pull`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DVC Pipelines"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# dvc.yaml - Define pipeline stages
stages:
  preprocess:
    cmd: python src/preprocess.py
    deps:
      - src/preprocess.py
      - data/raw/
    outs:
      - data/processed/

  train:
    cmd: python src/train.py
    deps:
      - src/train.py
      - data/processed/
    params:
      - train.n_estimators
      - train.max_depth
    outs:
      - models/model.pkl
    metrics:
      - metrics/scores.json:
          cache: false

  evaluate:
    cmd: python src/evaluate.py
    deps:
      - src/evaluate.py
      - models/model.pkl
      - data/processed/test.csv
    metrics:
      - metrics/eval.json:
          cache: false
    plots:
      - metrics/confusion_matrix.csv

# params.yaml
train:
  n_estimators: 100
  max_depth: 10

# Run the pipeline
dvc repro

# Show metrics
dvc metrics show

# Compare experiments
dvc metrics diff`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DVC Experiments"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Run experiment with different parameters
dvc exp run -S train.n_estimators=200

# Run multiple experiments
dvc exp run --queue -S train.n_estimators=100
dvc exp run --queue -S train.n_estimators=200
dvc exp run --queue -S train.n_estimators=300
dvc exp run --run-all  # Run all queued

# Show experiments
dvc exp show

# Compare experiments
dvc exp diff exp-abc123 exp-def456

# Apply an experiment
dvc exp apply exp-abc123

# Branch from experiment
dvc exp branch exp-abc123 new-branch`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Combining MLflow and DVC"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# train.py - Use both tools together
import mlflow
import yaml
import joblib

# Load DVC params
with open("params.yaml") as f:
    params = yaml.safe_load(f)["train"]

# Set up MLflow
mlflow.set_experiment("my-experiment")

with mlflow.start_run():
    # Log parameters from DVC params.yaml
    mlflow.log_params(params)

    # Train model
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)

    # Evaluate
    accuracy = model.score(X_test, y_test)
    mlflow.log_metric("accuracy", accuracy)

    # Save model (tracked by DVC)
    joblib.dump(model, "models/model.pkl")

    # Log model to MLflow
    mlflow.sklearn.log_model(model, "model")

    # Save metrics for DVC
    with open("metrics/scores.json", "w") as f:
        json.dump({"accuracy": accuracy}, f)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Track everything:"}
                    </strong>
                    {" Parameters, metrics, artifacts, and data versions"}
                  </li>
                  <li>
                    <strong>
                      {"Use meaningful names:"}
                    </strong>
                    {" Name runs and experiments descriptively"}
                  </li>
                  <li>
                    <strong>
                      {"Automate:"}
                    </strong>
                    {" Use autologging and pipelines"}
                  </li>
                  <li>
                    <strong>
                      {"Remote storage:"}
                    </strong>
                    {" Store large files (data, models) remotely"}
                  </li>
                  <li>
                    <strong>
                      {"Code + Data:"}
                    </strong>
                    {" Version code with Git, data with DVC"}
                  </li>
                  <li>
                    <strong>
                      {"CI/CD:"}
                    </strong>
                    {" Integrate with your CI/CD pipeline"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master MLOps"}
                </h2>
                <p>
                  {"Our Data Science program covers MLflow, DVC, and the complete MLOps lifecycle. Build reproducible ML systems."}
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
                  <Link href="/data-science/articles/model-monitoring" className="related-article-card">
                    <h4>
                      {"Model Monitoring"}
                    </h4>
                    {" "}
                    <p>
                      {"Track model performance in production"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/docker-ml" className="related-article-card">
                    <h4>
                      {"Docker for ML"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize ML workflows"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn MLflow and DVC."} />
    </>
  );
}
