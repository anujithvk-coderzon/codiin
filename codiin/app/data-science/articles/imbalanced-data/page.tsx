import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Handling Imbalanced Data: SMOTE & Sampling Techniques",
  description: "Learn to handle imbalanced datasets with SMOTE, undersampling, oversampling, class weights, and proper evaluation metrics for imbalanced classification.",
  keywords: ["imbalanced data", "SMOTE", "class imbalance", "undersampling", "oversampling", "class weights", "imbalanced classification", "precision recall"],
  alternates: { canonical: "/data-science/articles/imbalanced-data" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/imbalanced-data",
    title: "Handling Imbalanced Data: Complete Guide to Classification",
    description: "Master techniques for imbalanced datasets including SMOTE, sampling methods, and proper evaluation metrics.",
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
  "headline": "Handling Imbalanced Data: Complete Guide to Classification",
  "description": "Comprehensive guide to handling imbalanced datasets with SMOTE, sampling techniques, and evaluation metrics",
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

export default function DataScienceImbalancedDataPage() {
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
                {"Imbalanced Data"}
              </span>
            </div>
            <h1>
              {"Handling Imbalanced Data"}
            </h1>
            <p className="article-subtitle">
              {"Techniques for Imbalanced Classification Problems"}
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
                  {"What is Imbalanced Data?"}
                </h2>
                <p>
                  {"Imbalanced data occurs when one class significantly outnumbers other classes in a classification problem. For example, in fraud detection, legitimate transactions might be 99.5% of the data while fraudulent ones are only 0.5%."}
                </p>
                <p>
                  {"This imbalance causes models to be biased toward the majority class. A naive model that always predicts \"not fraud\" would achieve 99.5% accuracy but would be completely useless - it would never catch any fraud!"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Imbalanced Data is Problematic"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Biased Models:"}
                    </strong>
                    {" Classifiers tend to predict the majority class, ignoring minorities"}
                  </li>
                  <li>
                    <strong>
                      {"Misleading Accuracy:"}
                    </strong>
                    {" High accuracy doesn't mean good performance"}
                  </li>
                  <li>
                    <strong>
                      {"Poor Minority Detection:"}
                    </strong>
                    {" The rare class (often the important one) gets ignored"}
                  </li>
                  <li>
                    <strong>
                      {"Skewed Decision Boundaries:"}
                    </strong>
                    {" Models don't learn proper patterns for rare classes"}
                  </li>
                  <li>
                    <strong>
                      {"Gradient Descent Issues:"}
                    </strong>
                    {" Learning is dominated by the majority class"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-World Examples"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Fraud Detection:"}
                    </strong>
                    {" 0.1-1% fraudulent transactions"}
                  </li>
                  <li>
                    <strong>
                      {"Medical Diagnosis:"}
                    </strong>
                    {" 1-5% disease prevalence"}
                  </li>
                  <li>
                    <strong>
                      {"Anomaly Detection:"}
                    </strong>
                    {" 0.01-0.1% anomalies"}
                  </li>
                  <li>
                    <strong>
                      {"Customer Churn:"}
                    </strong>
                    {" 5-10% customers leaving"}
                  </li>
                  <li>
                    <strong>
                      {"Manufacturing Defects:"}
                    </strong>
                    {" 0.1-1% defective products"}
                  </li>
                  <li>
                    <strong>
                      {"Email Spam:"}
                    </strong>
                    {" 10-30% spam emails"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"1. Understanding the Imbalance"}
                </h2>
                <p>
                  {"First, quantify and visualize the imbalance in your data."}
                </p>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Check class distribution
print(y.value_counts())
print(y.value_counts(normalize=True))

# Visualize imbalance
plt.figure(figsize=(10, 6))
y.value_counts().plot(kind='bar')
plt.title('Class Distribution')
plt.xlabel('Class')
plt.ylabel('Count')
plt.xticks(rotation=0)
plt.show()

# Calculate imbalance ratio
majority_class = y.value_counts().max()
minority_class = y.value_counts().min()
imbalance_ratio = majority_class / minority_class
print(f"Imbalance Ratio: {imbalance_ratio:.2f}:1")

# Severity assessment
if imbalance_ratio < 3:
    print("Mild imbalance")
elif imbalance_ratio < 10:
    print("Moderate imbalance")
elif imbalance_ratio < 100:
    print("Severe imbalance")
else:
    print("Extreme imbalance")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"2. Resampling Techniques"}
                </h2>
                <p>
                  {"Modify the training data to balance class distribution."}
                </p>
                <h3>
                  {"Random Undersampling"}
                </h3>
                <p>
                  {"Reduce the majority class by randomly removing samples. Fast but loses information."}
                </p>
                <div className="code-block">
                  <pre><code>{`from imblearn.under_sampling import RandomUnderSampler

# Initialize undersampler
rus = RandomUnderSampler(random_state=42)

# Resample
X_resampled, y_resampled = rus.fit_resample(X, y)

print(f"Original: {y.value_counts()}")
print(f"Resampled: {pd.Series(y_resampled).value_counts()}")

# Use in pipeline
from imblearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier

pipeline = Pipeline([
    ('undersample', RandomUnderSampler(random_state=42)),
    ('classifier', RandomForestClassifier())
])

pipeline.fit(X_train, y_train)`}</code></pre>
                </div>
                <h3>
                  {"Random Oversampling"}
                </h3>
                <p>
                  {"Increase the minority class by duplicating samples. Simple but risks overfitting."}
                </p>
                <div className="code-block">
                  <pre><code>{`from imblearn.over_sampling import RandomOverSampler

# Initialize oversampler
ros = RandomOverSampler(random_state=42)

# Resample
X_resampled, y_resampled = ros.fit_resample(X, y)

print(f"Original shape: {X.shape}")
print(f"Resampled shape: {X_resampled.shape}")
print(f"Class distribution: {pd.Series(y_resampled).value_counts()}")`}</code></pre>
                </div>
                <h3>
                  {"SMOTE (Synthetic Minority Over-sampling Technique)"}
                </h3>
                <p>
                  {"Creates synthetic samples by interpolating between minority class examples. Most popular technique."}
                </p>
                <div className="code-block">
                  <pre><code>{`from imblearn.over_sampling import SMOTE

# Basic SMOTE
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X, y)

# SMOTE with custom ratio
smote = SMOTE(sampling_strategy=0.5, random_state=42)  # Minority will be 50% of majority
X_resampled, y_resampled = smote.fit_resample(X, y)

# SMOTE with k-neighbors parameter
smote = SMOTE(k_neighbors=3, random_state=42)
X_resampled, y_resampled = smote.fit_resample(X, y)

# Visualize SMOTE effect
from sklearn.decomposition import PCA

pca = PCA(n_components=2)
X_pca_original = pca.fit_transform(X)
X_pca_smote = pca.transform(X_resampled)

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))

# Original
ax1.scatter(X_pca_original[y==0, 0], X_pca_original[y==0, 1],
           label='Majority', alpha=0.5)
ax1.scatter(X_pca_original[y==1, 0], X_pca_original[y==1, 1],
           label='Minority', alpha=0.5)
ax1.set_title('Original Data')
ax1.legend()

# After SMOTE
ax2.scatter(X_pca_smote[y_resampled==0, 0], X_pca_smote[y_resampled==0, 1],
           label='Majority', alpha=0.5)
ax2.scatter(X_pca_smote[y_resampled==1, 0], X_pca_smote[y_resampled==1, 1],
           label='Minority (with synthetic)', alpha=0.5)
ax2.set_title('After SMOTE')
ax2.legend()

plt.show()`}</code></pre>
                </div>
                <h3>
                  {"SMOTE Variants"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from imblearn.over_sampling import SVMSMOTE, BorderlineSMOTE, ADASYN

# BorderlineSMOTE: Only oversamples minority samples near decision boundary
borderline_smote = BorderlineSMOTE(random_state=42)
X_resampled, y_resampled = borderline_smote.fit_resample(X, y)

# SVMSMOTE: Uses SVM to identify support vectors before SMOTE
svm_smote = SVMSMOTE(random_state=42)
X_resampled, y_resampled = svm_smote.fit_resample(X, y)

# ADASYN: Adaptive synthetic sampling (focuses on harder-to-learn samples)
adasyn = ADASYN(random_state=42)
X_resampled, y_resampled = adasyn.fit_resample(X, y)`}</code></pre>
                </div>
                <h3>
                  {"Combination Methods"}
                </h3>
                <p>
                  {"Combine oversampling and undersampling for best results."}
                </p>
                <div className="code-block">
                  <pre><code>{`from imblearn.combine import SMOTETomek, SMOTEENN

# SMOTE + Tomek Links (removes overlapping samples)
smote_tomek = SMOTETomek(random_state=42)
X_resampled, y_resampled = smote_tomek.fit_resample(X, y)

# SMOTE + Edited Nearest Neighbors (cleans noisy samples)
smote_enn = SMOTEENN(random_state=42)
X_resampled, y_resampled = smote_enn.fit_resample(X, y)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"3. Algorithmic Approaches"}
                </h2>
                <h3>
                  {"Class Weights"}
                </h3>
                <p>
                  {"Penalize misclassification of minority class more heavily. No data modification needed."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.utils.class_weight import compute_class_weight

# Option 1: Automatic class weights
rf = RandomForestClassifier(class_weight='balanced', random_state=42)
lr = LogisticRegression(class_weight='balanced', random_state=42)
svc = SVC(class_weight='balanced', random_state=42)

# Option 2: Custom class weights
class_weights = compute_class_weight('balanced', classes=np.unique(y), y=y)
class_weight_dict = dict(enumerate(class_weights))
print(f"Class weights: {class_weight_dict}")

rf = RandomForestClassifier(class_weight=class_weight_dict, random_state=42)

# Option 3: Manual class weights (give minority class 10x weight)
custom_weights = {0: 1, 1: 10}
rf = RandomForestClassifier(class_weight=custom_weights, random_state=42)

# For XGBoost
import xgboost as xgb

# Calculate scale_pos_weight
scale_pos_weight = len(y[y==0]) / len(y[y==1])
print(f"Scale pos weight: {scale_pos_weight:.2f}")

xgb_model = xgb.XGBClassifier(scale_pos_weight=scale_pos_weight, random_state=42)
xgb_model.fit(X_train, y_train)`}</code></pre>
                </div>
                <h3>
                  {"Ensemble Methods"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from imblearn.ensemble import BalancedRandomForestClassifier, EasyEnsembleClassifier
from imblearn.ensemble import BalancedBaggingClassifier, RUSBoostClassifier

# Balanced Random Forest (undersamples each tree's bootstrap)
brf = BalancedRandomForestClassifier(n_estimators=100, random_state=42)
brf.fit(X_train, y_train)

# Easy Ensemble (multiple undersampled AdaBoost classifiers)
eec = EasyEnsembleClassifier(n_estimators=10, random_state=42)
eec.fit(X_train, y_train)

# Balanced Bagging
bbc = BalancedBaggingClassifier(
    estimator=LogisticRegression(),
    n_estimators=10,
    random_state=42
)
bbc.fit(X_train, y_train)

# RUSBoost (combines undersampling with boosting)
rusboost = RUSBoostClassifier(n_estimators=100, random_state=42)
rusboost.fit(X_train, y_train)`}</code></pre>
                </div>
                <h3>
                  {"Anomaly Detection Approaches"}
                </h3>
                <p>
                  {"For extreme imbalance, treat minority class as anomalies."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.ensemble import IsolationForest
from sklearn.svm import OneClassSVM

# Isolation Forest (train only on majority class)
iso_forest = IsolationForest(contamination=0.01, random_state=42)
iso_forest.fit(X_train[y_train == 0])  # Train on majority class

# Predict (-1 for anomalies/minority, 1 for normal/majority)
predictions = iso_forest.predict(X_test)

# One-Class SVM
oc_svm = OneClassSVM(nu=0.01)  # nu = expected proportion of outliers
oc_svm.fit(X_train[y_train == 0])
predictions = oc_svm.predict(X_test)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"4. Proper Evaluation Metrics"}
                </h2>
                <p>
                  {"Accuracy is misleading for imbalanced data. Use these metrics instead."}
                </p>
                <h3>
                  {"Confusion Matrix"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay

# Get predictions
y_pred = model.predict(X_test)

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
print(cm)

# Visualize
disp = ConfusionMatrixDisplay(confusion_matrix=cm,
                               display_labels=['Negative', 'Positive'])
disp.plot(cmap='Blues')
plt.title('Confusion Matrix')
plt.show()

# Manual interpretation
tn, fp, fn, tp = cm.ravel()
print(f"True Negatives: {tn}")
print(f"False Positives: {fp}")
print(f"False Negatives: {fn}")
print(f"True Positives: {tp}")`}</code></pre>
                </div>
                <h3>
                  {"Precision, Recall, and F1-Score"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import precision_score, recall_score, f1_score
from sklearn.metrics import classification_report

# Calculate metrics
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print(f"Precision: {precision:.3f}")  # Of predicted positives, how many correct?
print(f"Recall: {recall:.3f}")        # Of actual positives, how many found?
print(f"F1-Score: {f1:.3f}")          # Harmonic mean of precision and recall

# Comprehensive report
print(classification_report(y_test, y_pred,
                           target_names=['Negative', 'Positive']))

# F-beta score (adjustable trade-off)
from sklearn.metrics import fbeta_score

# F2-score: weights recall higher (better for fraud detection)
f2 = fbeta_score(y_test, y_pred, beta=2)
print(f"F2-Score: {f2:.3f}")

# F0.5-score: weights precision higher (better for spam detection)
f05 = fbeta_score(y_test, y_pred, beta=0.5)
print(f"F0.5-Score: {f05:.3f}")`}</code></pre>
                </div>
                <h3>
                  {"ROC-AUC and Precision-Recall AUC"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import roc_auc_score, roc_curve
from sklearn.metrics import precision_recall_curve, average_precision_score

# Get probability predictions
y_proba = model.predict_proba(X_test)[:, 1]

# ROC-AUC
roc_auc = roc_auc_score(y_test, y_proba)
print(f"ROC-AUC: {roc_auc:.3f}")

# Plot ROC curve
fpr, tpr, thresholds = roc_curve(y_test, y_proba)
plt.figure(figsize=(10, 6))
plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {roc_auc:.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.show()

# Precision-Recall AUC (better for imbalanced data)
pr_auc = average_precision_score(y_test, y_proba)
print(f"PR-AUC: {pr_auc:.3f}")

# Plot Precision-Recall curve
precision, recall, thresholds = precision_recall_curve(y_test, y_proba)
plt.figure(figsize=(10, 6))
plt.plot(recall, precision, label=f'PR Curve (AUC = {pr_auc:.3f})')
plt.xlabel('Recall')
plt.ylabel('Precision')
plt.title('Precision-Recall Curve')
plt.legend()
plt.show()`}</code></pre>
                </div>
                <h3>
                  {"Threshold Tuning"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Default threshold is 0.5, but we can optimize it
y_proba = model.predict_proba(X_test)[:, 1]

# Try different thresholds
thresholds = np.arange(0.1, 0.9, 0.05)
f1_scores = []

for threshold in thresholds:
    y_pred_threshold = (y_proba >= threshold).astype(int)
    f1 = f1_score(y_test, y_pred_threshold)
    f1_scores.append(f1)

# Find optimal threshold
optimal_idx = np.argmax(f1_scores)
optimal_threshold = thresholds[optimal_idx]
print(f"Optimal threshold: {optimal_threshold:.2f}")
print(f"Best F1-score: {f1_scores[optimal_idx]:.3f}")

# Plot threshold vs metrics
plt.figure(figsize=(10, 6))
plt.plot(thresholds, f1_scores, marker='o')
plt.axvline(optimal_threshold, color='r', linestyle='--',
            label=f'Optimal: {optimal_threshold:.2f}')
plt.xlabel('Threshold')
plt.ylabel('F1-Score')
plt.title('Threshold Optimization')
plt.legend()
plt.grid(True)
plt.show()

# Use optimal threshold for predictions
y_pred_optimal = (y_proba >= optimal_threshold).astype(int)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"5. Complete Pipeline Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import cross_val_score, StratifiedKFold
from imblearn.pipeline import Pipeline
from imblearn.over_sampling import SMOTE
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import make_scorer, f1_score

# Build pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('smote', SMOTE(random_state=42)),
    ('classifier', RandomForestClassifier(class_weight='balanced', random_state=42))
])

# Use stratified k-fold (maintains class distribution in folds)
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

# Cross-validation with F1-score
f1_scorer = make_scorer(f1_score)
cv_scores = cross_val_score(pipeline, X_train, y_train,
                            cv=cv, scoring=f1_scorer, n_jobs=-1)

print(f"CV F1-Scores: {cv_scores}")
print(f"Mean F1-Score: {cv_scores.mean():.3f} (+/- {cv_scores.std():.3f})")

# Train final model
pipeline.fit(X_train, y_train)

# Evaluate on test set
y_pred = pipeline.predict(X_test)
y_proba = pipeline.predict_proba(X_test)[:, 1]

print("\\nTest Set Performance:")
print(classification_report(y_test, y_pred))
print(f"ROC-AUC: {roc_auc_score(y_test, y_proba):.3f}")
print(f"PR-AUC: {average_precision_score(y_test, y_proba):.3f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Always Use Stratified Splits:"}
                    </strong>
                    {" Maintain class distribution in train/test/validation"}
                  </li>
                  <li>
                    <strong>
                      {"Apply Resampling Only to Training Data:"}
                    </strong>
                    {" Never resample test data"}
                  </li>
                  <li>
                    <strong>
                      {"Choose Metrics Wisely:"}
                    </strong>
                    {" Prefer F1, PR-AUC over accuracy"}
                  </li>
                  <li>
                    <strong>
                      {"Start Simple:"}
                    </strong>
                    {" Try class weights before complex resampling"}
                  </li>
                  <li>
                    <strong>
                      {"Validate on Original Distribution:"}
                    </strong>
                    {" Test set should reflect real-world imbalance"}
                  </li>
                  <li>
                    <strong>
                      {"Consider Business Context:"}
                    </strong>
                    {" False negatives vs false positives cost"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor Both Classes:"}
                    </strong>
                    {" Don't sacrifice majority class performance too much"}
                  </li>
                  <li>
                    <strong>
                      {"Use Cross-Validation:"}
                    </strong>
                    {" Single train/test split can be misleading"}
                  </li>
                  <li>
                    <strong>
                      {"Collect More Minority Data:"}
                    </strong>
                    {" If possible, this is the best solution"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Each Technique"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Class Weights:"}
                    </strong>
                    {" First approach - simple, no data modification"}
                  </li>
                  <li>
                    <strong>
                      {"Random Oversampling:"}
                    </strong>
                    {" When you have very few minority samples (<100)"}
                  </li>
                  <li>
                    <strong>
                      {"SMOTE:"}
                    </strong>
                    {" Most common choice for moderate imbalance (1:10 to 1:100)"}
                  </li>
                  <li>
                    <strong>
                      {"Undersampling:"}
                    </strong>
                    {" When you have lots of majority class data you can afford to lose"}
                  </li>
                  <li>
                    <strong>
                      {"Combination Methods:"}
                    </strong>
                    {" For severe imbalance (>1:100)"}
                  </li>
                  <li>
                    <strong>
                      {"Anomaly Detection:"}
                    </strong>
                    {" For extreme imbalance (>1:1000)"}
                  </li>
                  <li>
                    <strong>
                      {"Ensemble Methods:"}
                    </strong>
                    {" When you need robust performance"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Imbalanced Data Techniques"}
                </h2>
                <p>
                  {"Our Data Science program covers advanced techniques for handling imbalanced datasets with real-world examples from fraud detection, medical diagnosis, and more."}
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
                      {"Build a strong foundation in machine learning concepts"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Create features that help models distinguish classes better"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/xgboost" className="related-article-card">
                    <h4>
                      {"XGBoost: Gradient Boosting"}
                    </h4>
                    {" "}
                    <p>
                      {"Advanced algorithm with built-in class weight support"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about handling imbalanced data."} />
    </>
  );
}
