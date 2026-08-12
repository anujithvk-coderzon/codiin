import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Machine Learning Fundamentals: Complete Beginner's Guide",
  description: "Learn Machine Learning fundamentals - supervised learning, unsupervised learning, model evaluation, and building predictive models with Python.",
  keywords: ["machine learning tutorial", "ML basics", "supervised learning", "unsupervised learning", "classification", "regression", "clustering"],
  alternates: { canonical: "/data-science/articles/machine-learning" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/machine-learning",
    title: "Machine Learning Fundamentals: Complete Beginner's Guide",
    description: "Master the fundamentals of machine learning - from basic concepts to building your first models.",
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
  "headline": "Machine Learning Fundamentals: Complete Beginner's Guide",
  "description": "Comprehensive guide to understanding machine learning concepts and building predictive models",
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

export default function DataScienceMachineLearningPage() {
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
                {"Machine Learning"}
              </span>
            </div>
            <h1>
              {"Machine Learning Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"The Complete Beginner's Guide to Building Predictive Models"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"15 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Machine Learning?"}
                </h2>
                <p>
                  {"Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed. Instead of writing rules, you provide data and let algorithms discover patterns."}
                </p>
                <p>
                  {"Arthur Samuel, who coined the term in 1959, defined it as \"the field of study that gives computers the ability to learn without being explicitly programmed.\" Today, ML powers everything from email spam filters to self-driving cars."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Types of Machine Learning"}
                </h2>
                <h3>
                  {"1. Supervised Learning"}
                </h3>
                <p>
                  {"In supervised learning, you train models on labeled data - data where you know the correct answer. The algorithm learns to map inputs to outputs."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Classification:"}
                    </strong>
                    {" Predict categories (spam/not spam, cat/dog, disease/healthy)"}
                  </li>
                  <li>
                    <strong>
                      {"Regression:"}
                    </strong>
                    {" Predict continuous values (house prices, temperature, sales)"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train a classification model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)`}</code></pre>
                </div>
                <h3>
                  {"2. Unsupervised Learning"}
                </h3>
                <p>
                  {"Unsupervised learning finds patterns in unlabeled data - you don't tell the algorithm what to look for."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Clustering:"}
                    </strong>
                    {" Group similar data points (customer segments, document topics)"}
                  </li>
                  <li>
                    <strong>
                      {"Dimensionality Reduction:"}
                    </strong>
                    {" Reduce features while preserving information (PCA, t-SNE)"}
                  </li>
                  <li>
                    <strong>
                      {"Anomaly Detection:"}
                    </strong>
                    {" Find unusual data points (fraud detection, system failures)"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`from sklearn.cluster import KMeans

# Create clusters
kmeans = KMeans(n_clusters=3)
clusters = kmeans.fit_predict(X)

# Each data point is assigned to a cluster (0, 1, or 2)`}</code></pre>
                </div>
                <h3>
                  {"3. Reinforcement Learning"}
                </h3>
                <p>
                  {"An agent learns by interacting with an environment, receiving rewards for good actions and penalties for bad ones. Used in robotics, game playing, and autonomous systems."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"The Machine Learning Workflow"}
                </h2>
                <p>
                  {"Every ML project follows a similar workflow:"}
                </p>
                <ol>
                  <li>
                    <strong>
                      {"Define the Problem:"}
                    </strong>
                    {" What are you trying to predict or discover?"}
                  </li>
                  <li>
                    <strong>
                      {"Collect Data:"}
                    </strong>
                    {" Gather relevant, high-quality data"}
                  </li>
                  <li>
                    <strong>
                      {"Explore & Clean Data:"}
                    </strong>
                    {" Understand patterns, handle missing values"}
                  </li>
                  <li>
                    <strong>
                      {"Feature Engineering:"}
                    </strong>
                    {" Create and select meaningful features"}
                  </li>
                  <li>
                    <strong>
                      {"Split Data:"}
                    </strong>
                    {" Separate into training, validation, and test sets"}
                  </li>
                  <li>
                    <strong>
                      {"Train Models:"}
                    </strong>
                    {" Try different algorithms"}
                  </li>
                  <li>
                    <strong>
                      {"Evaluate:"}
                    </strong>
                    {" Measure performance on unseen data"}
                  </li>
                  <li>
                    <strong>
                      {"Tune:"}
                    </strong>
                    {" Optimize hyperparameters"}
                  </li>
                  <li>
                    <strong>
                      {"Deploy:"}
                    </strong>
                    {" Put the model into production"}
                  </li>
                </ol>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Algorithms"}
                </h2>
                <h3>
                  {"For Classification"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Logistic Regression:"}
                    </strong>
                    {" Simple, interpretable, good baseline"}
                  </li>
                  <li>
                    <strong>
                      {"Decision Trees:"}
                    </strong>
                    {" Easy to understand and visualize"}
                  </li>
                  <li>
                    <strong>
                      {"Random Forest:"}
                    </strong>
                    {" Ensemble of trees, robust and accurate"}
                  </li>
                  <li>
                    <strong>
                      {"Support Vector Machines:"}
                    </strong>
                    {" Effective in high dimensions"}
                  </li>
                  <li>
                    <strong>
                      {"Neural Networks:"}
                    </strong>
                    {" Powerful for complex patterns"}
                  </li>
                </ul>
                <h3>
                  {"For Regression"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Linear Regression:"}
                    </strong>
                    {" Simple, interpretable baseline"}
                  </li>
                  <li>
                    <strong>
                      {"Ridge/Lasso:"}
                    </strong>
                    {" Linear regression with regularization"}
                  </li>
                  <li>
                    <strong>
                      {"Random Forest Regressor:"}
                    </strong>
                    {" Handles non-linear relationships"}
                  </li>
                  <li>
                    <strong>
                      {"XGBoost/LightGBM:"}
                    </strong>
                    {" State-of-the-art for tabular data"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Evaluation"}
                </h2>
                <p>
                  {"Choosing the right metrics is crucial:"}
                </p>
                <h3>
                  {"Classification Metrics"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Accuracy:"}
                    </strong>
                    {" Percentage of correct predictions (can be misleading with imbalanced data)"}
                  </li>
                  <li>
                    <strong>
                      {"Precision:"}
                    </strong>
                    {" Of predicted positives, how many are actually positive?"}
                  </li>
                  <li>
                    <strong>
                      {"Recall:"}
                    </strong>
                    {" Of actual positives, how many did we catch?"}
                  </li>
                  <li>
                    <strong>
                      {"F1 Score:"}
                    </strong>
                    {" Harmonic mean of precision and recall"}
                  </li>
                  <li>
                    <strong>
                      {"AUC-ROC:"}
                    </strong>
                    {" Model's ability to distinguish classes"}
                  </li>
                </ul>
                <h3>
                  {"Regression Metrics"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"MAE (Mean Absolute Error):"}
                    </strong>
                    {" Average absolute difference"}
                  </li>
                  <li>
                    <strong>
                      {"MSE (Mean Squared Error):"}
                    </strong>
                    {" Penalizes large errors more"}
                  </li>
                  <li>
                    <strong>
                      {"RMSE:"}
                    </strong>
                    {" Square root of MSE, same units as target"}
                  </li>
                  <li>
                    <strong>
                      {"R-squared:"}
                    </strong>
                    {" Proportion of variance explained"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import accuracy_score, classification_report

# Evaluate classification model
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")
print(classification_report(y_test, predictions))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Avoiding Common Pitfalls"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Overfitting:"}
                    </strong>
                    {" Model memorizes training data but fails on new data. Use cross-validation, regularization, and simpler models."}
                  </li>
                  <li>
                    <strong>
                      {"Data Leakage:"}
                    </strong>
                    {" Information from test set leaks into training. Always split data before any preprocessing."}
                  </li>
                  <li>
                    <strong>
                      {"Imbalanced Classes:"}
                    </strong>
                    {" When one class dominates, use stratified sampling, class weights, or resampling techniques."}
                  </li>
                  <li>
                    <strong>
                      {"Feature Scaling:"}
                    </strong>
                    {" Many algorithms require normalized features. Use StandardScaler or MinMaxScaler."}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring Business Context:"}
                    </strong>
                    {" The best model statistically might not be the best for your use case."}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <p>
                  {"Ready to build your first model? Here's a complete example:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Load data
df = pd.read_csv('your_data.csv')

# Prepare features and target
X = df.drop('target', axis=1)
y = df['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Evaluate
predictions = model.predict(X_test_scaled)
print(classification_report(y_test, predictions))`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Machine Learning with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers machine learning from fundamentals to advanced techniques. Build real projects with guidance from industry experts."}
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
                  <Link href="/data-science/articles/scikit-learn" className="related-article-card">
                    <h4>
                      {"Scikit-learn: The Essential ML Library"}
                    </h4>
                    {" "}
                    <p>
                      {"Master Python's most popular machine learning library"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering: The Art of Data Preparation"}
                    </h4>
                    {" "}
                    <p>
                      {"Transform raw data into powerful features"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/xgboost" className="related-article-card">
                    <h4>
                      {"XGBoost: Winning Kaggle Competitions"}
                    </h4>
                    {" "}
                    <p>
                      {"Master gradient boosting for tabular data"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Machine Learning."} />
    </>
  );
}
