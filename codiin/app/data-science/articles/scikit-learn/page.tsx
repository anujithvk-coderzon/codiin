import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Scikit-learn: The Essential Machine Learning Library",
  description: "Master Scikit-learn - Python's essential machine learning library. Learn classification, regression, clustering, preprocessing, and model evaluation.",
  keywords: ["scikit-learn tutorial", "sklearn", "Python machine learning", "classification", "regression", "clustering", "ML library"],
  alternates: { canonical: "/data-science/articles/scikit-learn" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/scikit-learn",
    title: "Scikit-learn: The Essential Machine Learning Library",
    description: "Master Python's most popular ML library for building production-ready models.",
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
  "headline": "Scikit-learn: The Essential Machine Learning Library",
  "description": "Complete guide to using scikit-learn for machine learning in Python",
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

export default function DataScienceScikitLearnPage() {
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
                {"Scikit-learn"}
              </span>
            </div>
            <h1>
              {"Scikit-learn"}
            </h1>
            <p className="article-subtitle">
              {"The Essential Machine Learning Library for Python"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Scikit-learn?"}
                </h2>
                <p>
                  {"Scikit-learn (sklearn) is Python's most popular machine learning library. Built on NumPy, SciPy, and Matplotlib, it provides simple and efficient tools for data analysis and modeling. Whether you're building your first ML model or deploying to production, sklearn is likely your starting point."}
                </p>
                <p>
                  {"With consistent APIs across all algorithms, excellent documentation, and a massive community, scikit-learn is the Swiss Army knife of machine learning."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"The Sklearn API Pattern"}
                </h2>
                <p>
                  {"Every sklearn estimator follows the same pattern:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.some_module import SomeEstimator

# 1. Instantiate
model = SomeEstimator(hyperparameters)

# 2. Fit (train)
model.fit(X_train, y_train)

# 3. Predict
predictions = model.predict(X_test)

# 4. Evaluate
score = model.score(X_test, y_test)`}</code></pre>
                </div>
                <p>
                  {"This consistency makes it easy to swap algorithms and experiment quickly."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Classification"}
                </h2>
                <p>
                  {"Predict discrete categories:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier

# Random Forest - robust, handles non-linear relationships
rf = RandomForestClassifier(n_estimators=100, max_depth=10)
rf.fit(X_train, y_train)

# Logistic Regression - fast, interpretable
lr = LogisticRegression(C=1.0, max_iter=1000)
lr.fit(X_train, y_train)

# SVM - effective in high dimensions
svm = SVC(kernel='rbf', C=1.0)
svm.fit(X_train, y_train)

# KNN - simple, instance-based
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Regression"}
                </h2>
                <p>
                  {"Predict continuous values:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor

# Linear Regression - baseline
linear = LinearRegression()
linear.fit(X_train, y_train)

# Ridge - L2 regularization
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Lasso - L1 regularization, feature selection
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)

# Random Forest Regressor
rf_reg = RandomForestRegressor(n_estimators=100)
rf_reg.fit(X_train, y_train)

# Gradient Boosting
gb = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1)
gb.fit(X_train, y_train)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Clustering"}
                </h2>
                <p>
                  {"Find natural groupings in data:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering

# K-Means - specify number of clusters
kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(X)

# DBSCAN - density-based, finds arbitrary shapes
dbscan = DBSCAN(eps=0.5, min_samples=5)
clusters = dbscan.fit_predict(X)

# Hierarchical Clustering
hierarchical = AgglomerativeClustering(n_clusters=3)
clusters = hierarchical.fit_predict(X)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Preprocessing"}
                </h2>
                <p>
                  {"Prepare your data for modeling:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import (
    StandardScaler, MinMaxScaler,
    LabelEncoder, OneHotEncoder
)
from sklearn.impute import SimpleImputer

# Standardization (mean=0, std=1)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Normalization (0-1 range)
minmax = MinMaxScaler()
X_normalized = minmax.fit_transform(X_train)

# Handle missing values
imputer = SimpleImputer(strategy='mean')  # or 'median', 'most_frequent'
X_imputed = imputer.fit_transform(X)

# Encode categorical variables
encoder = OneHotEncoder(sparse=False, handle_unknown='ignore')
X_encoded = encoder.fit_transform(X_categorical)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Selection & Evaluation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import (
    train_test_split, cross_val_score, GridSearchCV
)
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    mean_squared_error, r2_score, classification_report
)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Cross-validation
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
print(f"CV Score: {scores.mean():.3f} (+/- {scores.std()*2:.3f})")

# Hyperparameter tuning with GridSearchCV
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 20, None],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(
    RandomForestClassifier(), param_grid,
    cv=5, scoring='f1', n_jobs=-1
)
grid_search.fit(X_train, y_train)

print(f"Best params: {grid_search.best_params_}")
print(f"Best score: {grid_search.best_score_:.3f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Pipelines"}
                </h2>
                <p>
                  {"Chain preprocessing and modeling steps:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

# Simple pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier())
])

pipeline.fit(X_train, y_train)
predictions = pipeline.predict(X_test)

# Complex pipeline with different preprocessing per column type
numeric_features = ['age', 'income', 'score']
categorical_features = ['gender', 'city']

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ]
)

full_pipeline = Pipeline([
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier())
])

full_pipeline.fit(X_train, y_train)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Feature Selection"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.feature_selection import (
    SelectKBest, f_classif, RFE
)

# Select K best features
selector = SelectKBest(f_classif, k=10)
X_selected = selector.fit_transform(X, y)

# Recursive Feature Elimination
rfe = RFE(estimator=RandomForestClassifier(), n_features_to_select=10)
X_rfe = rfe.fit_transform(X, y)

# Feature importance from tree-based models
model = RandomForestClassifier().fit(X, y)
importances = model.feature_importances_`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.pipeline import Pipeline

# Load data
df = pd.read_csv('customer_churn.csv')
X = df.drop('churned', axis=1)
y = df['churned']

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Create pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(n_estimators=100, random_state=42))
])

# Cross-validation
cv_scores = cross_val_score(pipeline, X_train, y_train, cv=5, scoring='f1')
print(f"CV F1: {cv_scores.mean():.3f} (+/- {cv_scores.std()*2:.3f})")

# Train and evaluate
pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)
print(classification_report(y_test, y_pred))`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Scikit-learn with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers scikit-learn extensively, from basics to advanced techniques. Build real ML pipelines with guidance from industry experts."}
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
                      {"Understand the core concepts behind ML"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform raw data into powerful features"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/xgboost" className="related-article-card">
                    <h4>
                      {"XGBoost: Advanced Gradient Boosting"}
                    </h4>
                    {" "}
                    <p>
                      {"Level up with competition-winning algorithms"}
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
                {"Empowering the next generation of tech professionals through personalized mentorship and hands-on learning."}
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
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
                <li>
                  <Link href="/agentic-ai">
                    {"Agentic AI"}
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
                <li>
                  {"Kochi, Kerala"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Scikit-learn."} />
    </>
  );
}
