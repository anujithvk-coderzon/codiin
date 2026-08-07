import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Model Evaluation Guide",
  description: "Master Model Evaluation in Machine Learning - metrics, cross-validation, confusion matrix, ROC-AUC, bias-variance tradeoff. Choose the right metrics for your ML models.",
  keywords: ["model evaluation", "ML metrics", "cross-validation", "confusion matrix", "ROC AUC", "precision recall", "F1 score"],
  alternates: { canonical: "/data-science/articles/model-evaluation" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/model-evaluation",
    title: "Model Evaluation: ML Metrics & Validation",
    description: "Learn to properly evaluate and validate machine learning models.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Model Evaluation: ML Metrics & Validation",
  "description": "Complete guide to evaluating machine learning models",
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

export default function DataScienceModelEvaluationPage() {
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
                {"Model Evaluation"}
              </span>
            </div>
            <h1>
              {"Model Evaluation"}
            </h1>
            <p className="article-subtitle">
              {"Metrics, Validation, and Choosing What Matters"}
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
                  {"Why Model Evaluation Matters"}
                </h2>
                <p>
                  {"A model is only as good as its evaluation. You can't improve what you can't measure. Choosing the right metrics and validation strategy determines whether your model actually works in the real world."}
                </p>
                <p>
                  <strong>
                    {"Key Questions:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"How well does my model perform on unseen data?"}
                  </li>
                  <li>
                    {"Which errors matter most for my business problem?"}
                  </li>
                  <li>
                    {"Is my model overfitting or underfitting?"}
                  </li>
                  <li>
                    {"How confident can I be in my model's performance?"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Train-Test Split"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import train_test_split

# Basic split: 80% train, 20% test
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42  # For reproducibility
)

# For classification: use stratify to maintain class proportions
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    stratify=y,  # Same class ratio in train and test
    random_state=42
)

# Three-way split: Train, Validation, Test
X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.3)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5)

# Result: 70% train, 15% validation, 15% test
# - Train: fit the model
# - Validation: tune hyperparameters
# - Test: final evaluation (only once!)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cross-Validation"}
                </h2>
                <p>
                  {"Cross-validation gives more reliable performance estimates by using all data for both training and validation."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import cross_val_score, KFold, StratifiedKFold

# K-Fold Cross-Validation
# Data is split into K folds, model trained K times
# Each time, one fold is validation, rest is training

scores = cross_val_score(model, X, y, cv=5)  # 5-fold CV
print(f"Scores: {scores}")
print(f"Mean: {scores.mean():.3f} (+/- {scores.std()*2:.3f})")

# Stratified K-Fold (for classification)
# Maintains class proportions in each fold
stratified_kfold = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=stratified_kfold)

# Custom cross-validation loop
from sklearn.model_selection import cross_validate

results = cross_validate(
    model, X, y, cv=5,
    scoring=['accuracy', 'precision', 'recall', 'f1'],
    return_train_score=True
)
print(f"Test Accuracy: {results['test_accuracy'].mean():.3f}")
print(f"Train Accuracy: {results['train_accuracy'].mean():.3f}")

# Time Series: Never shuffle! Use TimeSeriesSplit
from sklearn.model_selection import TimeSeriesSplit
tscv = TimeSeriesSplit(n_splits=5)
for train_idx, test_idx in tscv.split(X):
    # Always trains on past, tests on future
    pass`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Classification Metrics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    confusion_matrix, classification_report, roc_auc_score
)

y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]  # For AUC

# Confusion Matrix
#                 Predicted
#              Neg    Pos
# Actual  Neg   TN     FP  (False Positive = Type I Error)
#         Pos   FN     TP  (False Negative = Type II Error)

cm = confusion_matrix(y_test, y_pred)
print(cm)

# Key Metrics:

# Accuracy: (TP + TN) / Total
# When to use: Balanced classes
# Problem: Misleading with imbalanced data
accuracy = accuracy_score(y_test, y_pred)

# Precision: TP / (TP + FP)
# "Of predicted positives, how many are correct?"
# Use when: False positives are costly (spam detection)
precision = precision_score(y_test, y_pred)

# Recall (Sensitivity): TP / (TP + FN)
# "Of actual positives, how many did we catch?"
# Use when: False negatives are costly (disease detection)
recall = recall_score(y_test, y_pred)

# F1 Score: Harmonic mean of precision and recall
# Use when: You need balance between precision and recall
f1 = f1_score(y_test, y_pred)

# ROC-AUC: Area under ROC curve
# Measures discrimination ability across all thresholds
# Use when: You want to compare models overall
auc = roc_auc_score(y_test, y_proba)

# Complete report
print(classification_report(y_test, y_pred))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Precision vs Recall Tradeoff"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# You can't maximize both! Choose based on business needs

# Example: Cancer Detection
# - False Negative (miss cancer): VERY BAD - patient dies
# - False Positive (false alarm): Bad but manageable - extra tests
# -> Prioritize RECALL (catch all cancers)

# Example: Email Spam Filter
# - False Negative (spam in inbox): Annoying but OK
# - False Positive (good email in spam): Very bad - miss important emails
# -> Prioritize PRECISION (don't mark good emails as spam)

# Adjusting threshold
from sklearn.metrics import precision_recall_curve

y_proba = model.predict_proba(X_test)[:, 1]
precisions, recalls, thresholds = precision_recall_curve(y_test, y_proba)

# Default threshold is 0.5
# Lower threshold -> higher recall, lower precision
# Higher threshold -> lower recall, higher precision

# Find threshold for desired recall
desired_recall = 0.9
idx = np.argmin(np.abs(recalls - desired_recall))
threshold = thresholds[idx]
print(f"Threshold for {desired_recall} recall: {threshold:.3f}")

# Apply custom threshold
y_pred_custom = (y_proba >= threshold).astype(int)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"ROC Curve & AUC"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import roc_curve, roc_auc_score
import matplotlib.pyplot as plt

# ROC Curve: True Positive Rate vs False Positive Rate
# at different classification thresholds

y_proba = model.predict_proba(X_test)[:, 1]
fpr, tpr, thresholds = roc_curve(y_test, y_proba)
auc = roc_auc_score(y_test, y_proba)

# Plot ROC curve
plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, label=f'Model (AUC = {auc:.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random (AUC = 0.5)')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.show()

# AUC Interpretation:
# 0.5 = Random guessing
# 0.7-0.8 = Fair
# 0.8-0.9 = Good
# 0.9-1.0 = Excellent

# Multi-class: Use one-vs-rest
from sklearn.preprocessing import label_binarize
from sklearn.metrics import roc_auc_score

y_test_bin = label_binarize(y_test, classes=[0, 1, 2])
y_proba = model.predict_proba(X_test)
auc = roc_auc_score(y_test_bin, y_proba, multi_class='ovr')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Regression Metrics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import (
    mean_absolute_error, mean_squared_error, r2_score,
    mean_absolute_percentage_error
)

y_pred = model.predict(X_test)

# MAE (Mean Absolute Error)
# Average of absolute differences
# Easy to interpret, same units as target
mae = mean_absolute_error(y_test, y_pred)

# MSE (Mean Squared Error)
# Penalizes large errors more than small errors
mse = mean_squared_error(y_test, y_pred)

# RMSE (Root Mean Squared Error)
# Same units as target, penalizes large errors
rmse = np.sqrt(mse)

# R² (Coefficient of Determination)
# Proportion of variance explained by model
# 1.0 = perfect, 0 = predicts mean, negative = worse than mean
r2 = r2_score(y_test, y_pred)

# MAPE (Mean Absolute Percentage Error)
# Useful when comparing across different scales
mape = mean_absolute_percentage_error(y_test, y_pred)

print(f"MAE: {mae:.2f}")
print(f"RMSE: {rmse:.2f}")
print(f"R²: {r2:.3f}")
print(f"MAPE: {mape:.1%}")

# When to use each:
# MAE: When all errors are equally important
# RMSE: When large errors are particularly bad
# R²: For comparing models on same dataset
# MAPE: When comparing across different scales`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Bias-Variance Tradeoff"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Understanding model errors:
# Total Error = Bias² + Variance + Irreducible Noise

# HIGH BIAS (Underfitting):
# - Model too simple
# - High training error, high test error
# - Fix: More features, complex model, less regularization

# HIGH VARIANCE (Overfitting):
# - Model too complex
# - Low training error, high test error
# - Fix: More data, simpler model, more regularization

# Diagnosing:
from sklearn.model_selection import learning_curve

train_sizes, train_scores, test_scores = learning_curve(
    model, X, y, cv=5, train_sizes=np.linspace(0.1, 1.0, 10)
)

# Plot learning curves
train_mean = np.mean(train_scores, axis=1)
test_mean = np.mean(test_scores, axis=1)

plt.plot(train_sizes, train_mean, label='Training score')
plt.plot(train_sizes, test_mean, label='Validation score')
plt.xlabel('Training set size')
plt.ylabel('Score')
plt.legend()
plt.show()

# Interpretation:
# Both curves low -> High bias (underfitting)
# Gap between curves -> High variance (overfitting)
# Both curves high and close -> Good fit!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Metrics for Imbalanced Data"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Accuracy is misleading with imbalanced classes!
# If 95% are negative, predicting all negative = 95% accuracy

# Better metrics for imbalanced data:

# 1. F1 Score (or F-beta for custom balance)
from sklearn.metrics import f1_score, fbeta_score
f1 = f1_score(y_test, y_pred)
f2 = fbeta_score(y_test, y_pred, beta=2)  # More weight on recall

# 2. Precision-Recall AUC (better than ROC-AUC for imbalanced)
from sklearn.metrics import average_precision_score
pr_auc = average_precision_score(y_test, y_proba)

# 3. Matthews Correlation Coefficient
from sklearn.metrics import matthews_corrcoef
mcc = matthews_corrcoef(y_test, y_pred)
# Ranges from -1 to 1, 0 = random

# 4. Balanced Accuracy
from sklearn.metrics import balanced_accuracy_score
bal_acc = balanced_accuracy_score(y_test, y_pred)
# Averages recall for each class

# 5. Cohen's Kappa
from sklearn.metrics import cohen_kappa_score
kappa = cohen_kappa_score(y_test, y_pred)
# Accounts for agreement by chance`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Comparison Framework"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
import pandas as pd

# Compare multiple models
models = {
    'Logistic Regression': LogisticRegression(),
    'Random Forest': RandomForestClassifier(),
    'SVM': SVC(probability=True)
}

results = []
for name, model in models.items():
    # Cross-validation scores
    cv_scores = cross_val_score(model, X, y, cv=5, scoring='f1')
    results.append({
        'Model': name,
        'Mean F1': cv_scores.mean(),
        'Std F1': cv_scores.std(),
        'Min': cv_scores.min(),
        'Max': cv_scores.max()
    })

# Create comparison table
comparison = pd.DataFrame(results).sort_values('Mean F1', ascending=False)
print(comparison)

# Statistical test for significance
from scipy import stats
model1_scores = cross_val_score(models['Random Forest'], X, y, cv=10)
model2_scores = cross_val_score(models['Logistic Regression'], X, y, cv=10)

# Paired t-test
t_stat, p_value = stats.ttest_rel(model1_scores, model2_scores)
print(f"P-value: {p_value:.4f}")
# If p < 0.05, difference is statistically significant`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Quick Reference: Choosing Metrics"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Balanced classification:"}
                    </strong>
                    {" Accuracy, F1"}
                  </li>
                  <li>
                    <strong>
                      {"Imbalanced classification:"}
                    </strong>
                    {" F1, PR-AUC, MCC"}
                  </li>
                  <li>
                    <strong>
                      {"False positives costly:"}
                    </strong>
                    {" Precision"}
                  </li>
                  <li>
                    <strong>
                      {"False negatives costly:"}
                    </strong>
                    {" Recall"}
                  </li>
                  <li>
                    <strong>
                      {"Probability ranking:"}
                    </strong>
                    {" ROC-AUC"}
                  </li>
                  <li>
                    <strong>
                      {"Regression (all errors equal):"}
                    </strong>
                    {" MAE"}
                  </li>
                  <li>
                    <strong>
                      {"Regression (penalize large errors):"}
                    </strong>
                    {" RMSE"}
                  </li>
                  <li>
                    <strong>
                      {"Regression (relative comparison):"}
                    </strong>
                    {" R²"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Model Evaluation"}
                </h2>
                <p>
                  {"Our Data Science program teaches you to evaluate models like an expert."}
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
                  <Link href="/data-science/articles/hyperparameter-tuning" className="related-article-card">
                    <h4>
                      {"Hyperparameter Tuning"}
                    </h4>
                    {" "}
                    <p>
                      {"Optimize your models"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/imbalanced-data" className="related-article-card">
                    <h4>
                      {"Imbalanced Data"}
                    </h4>
                    {" "}
                    <p>
                      {"Handle class imbalance"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"ML basics and algorithms"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Model Evaluation."} />
    </>
  );
}
