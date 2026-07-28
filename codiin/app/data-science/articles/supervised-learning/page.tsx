import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Supervised Learning: Regression & Classification",
  description: "Master Supervised Learning - understand regression, classification, algorithms like Linear Regression, Decision Trees, SVM, and best practices.",
  keywords: ["supervised learning", "machine learning", "regression", "classification", "linear regression", "logistic regression", "decision trees", "SVM"],
  alternates: { canonical: "/data-science/articles/supervised-learning" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/supervised-learning",
    title: "Supervised Learning: Regression & Classification",
    description: "Complete guide to supervised machine learning algorithms.",
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
  "headline": "Supervised Learning: Regression & Classification",
  "description": "Complete guide to supervised machine learning",
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

export default function DataScienceSupervisedLearningPage() {
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
                {"Supervised Learning"}
              </span>
            </div>
            <h1>
              {"Supervised Learning"}
            </h1>
            <p className="article-subtitle">
              {"Regression & Classification Algorithms"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Supervised Learning?"}
                </h2>
                <p>
                  {"Supervised learning is the most common type of machine learning where the model learns from labeled data. The algorithm learns a mapping function from input features (X) to output labels (y), enabling predictions on new, unseen data."}
                </p>
                <p>
                  {"Think of it as learning with a teacher - you have both questions and answers during training, and the model learns to predict answers for new questions."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Two Main Types"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Regression:"}
                    </strong>
                    {" Predicts continuous values (prices, temperatures, sales)"}
                  </li>
                  <li>
                    <strong>
                      {"Classification:"}
                    </strong>
                    {" Predicts categorical labels (spam/not spam, disease/healthy)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Linear Regression"}
                </h2>
                <p>
                  {"The foundation of regression - fits a linear relationship between features and target:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Prepare data
X = df[['sqft', 'bedrooms', 'bathrooms']]
y = df['price']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluate
print(f"R² Score: {r2_score(y_test, y_pred):.4f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.2f}")

# Coefficients
print("Coefficients:", dict(zip(X.columns, model.coef_)))
print("Intercept:", model.intercept_)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Polynomial Regression"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import PolynomialFeatures

# Create polynomial features
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)

# Train on polynomial features
model = LinearRegression()
model.fit(X_poly, y)

# For new predictions
X_new_poly = poly.transform(X_new)
predictions = model.predict(X_new_poly)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Regularized Regression"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.linear_model import Ridge, Lasso, ElasticNet

# Ridge Regression (L2 regularization)
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Lasso Regression (L1 regularization - feature selection)
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)

# ElasticNet (combines L1 and L2)
elastic = ElasticNet(alpha=0.1, l1_ratio=0.5)
elastic.fit(X_train, y_train)

# Cross-validation for alpha selection
from sklearn.linear_model import RidgeCV, LassoCV

ridge_cv = RidgeCV(alphas=[0.1, 1.0, 10.0, 100.0])
ridge_cv.fit(X_train, y_train)
print(f"Best alpha: {ridge_cv.alpha_}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Logistic Regression (Classification)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Binary classification
X = df[['age', 'income', 'credit_score']]
y = df['approved']  # 0 or 1

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LogisticRegression(random_state=42)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)[:, 1]  # Probability of class 1

# Evaluate
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))
print("\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Decision Trees"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor
from sklearn.tree import plot_tree
import matplotlib.pyplot as plt

# Classification tree
clf = DecisionTreeClassifier(
    max_depth=5,
    min_samples_split=10,
    min_samples_leaf=5,
    random_state=42
)
clf.fit(X_train, y_train)

# Regression tree
reg = DecisionTreeRegressor(max_depth=5, random_state=42)
reg.fit(X_train, y_train)

# Visualize tree
plt.figure(figsize=(20, 10))
plot_tree(clf, feature_names=X.columns, class_names=['No', 'Yes'],
          filled=True, rounded=True)
plt.savefig('decision_tree.png', dpi=150, bbox_inches='tight')

# Feature importance
importance = pd.DataFrame({
    'feature': X.columns,
    'importance': clf.feature_importances_
}).sort_values('importance', ascending=False)
print(importance)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Support Vector Machines (SVM)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.svm import SVC, SVR
from sklearn.preprocessing import StandardScaler

# SVM requires feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Classification with different kernels
svm_linear = SVC(kernel='linear', C=1.0)
svm_rbf = SVC(kernel='rbf', C=1.0, gamma='scale')
svm_poly = SVC(kernel='poly', degree=3, C=1.0)

svm_rbf.fit(X_train_scaled, y_train)
y_pred = svm_rbf.predict(X_test_scaled)

# Probability predictions
svm_prob = SVC(kernel='rbf', probability=True)
svm_prob.fit(X_train_scaled, y_train)
probabilities = svm_prob.predict_proba(X_test_scaled)

# SVM Regression
svr = SVR(kernel='rbf', C=100, epsilon=0.1)
svr.fit(X_train_scaled, y_train)
y_pred = svr.predict(X_test_scaled)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"K-Nearest Neighbors (KNN)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.neighbors import KNeighborsClassifier, KNeighborsRegressor

# Classification
knn = KNeighborsClassifier(n_neighbors=5, weights='distance')
knn.fit(X_train_scaled, y_train)
y_pred = knn.predict(X_test_scaled)

# Finding optimal K
from sklearn.model_selection import cross_val_score

k_range = range(1, 31)
k_scores = []

for k in k_range:
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X_train_scaled, y_train, cv=5)
    k_scores.append(scores.mean())

# Plot K vs accuracy
plt.plot(k_range, k_scores)
plt.xlabel('K')
plt.ylabel('Cross-Validation Accuracy')
plt.title('KNN: Choosing K')
plt.show()

optimal_k = k_range[np.argmax(k_scores)]
print(f"Optimal K: {optimal_k}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Naive Bayes"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.naive_bayes import GaussianNB, MultinomialNB, BernoulliNB

# Gaussian Naive Bayes (continuous features)
gnb = GaussianNB()
gnb.fit(X_train, y_train)
y_pred = gnb.predict(X_test)

# Multinomial Naive Bayes (text classification)
from sklearn.feature_extraction.text import CountVectorizer

vectorizer = CountVectorizer()
X_text = vectorizer.fit_transform(documents)

mnb = MultinomialNB()
mnb.fit(X_text, labels)

# Bernoulli Naive Bayes (binary features)
bnb = BernoulliNB()
bnb.fit(X_binary, y)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Comparison Pipeline"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# Define models
models = {
    'Logistic Regression': LogisticRegression(random_state=42),
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'SVM': SVC(random_state=42),
    'KNN': KNeighborsClassifier(),
    'Naive Bayes': GaussianNB()
}

# Compare with cross-validation
results = {}
for name, model in models.items():
    # Create pipeline with scaling
    pipeline = Pipeline([
        ('scaler', StandardScaler()),
        ('model', model)
    ])

    scores = cross_val_score(pipeline, X, y, cv=5, scoring='accuracy')
    results[name] = {
        'mean': scores.mean(),
        'std': scores.std()
    }
    print(f"{name}: {scores.mean():.4f} (+/- {scores.std():.4f})")

# Visualize comparison
names = list(results.keys())
means = [r['mean'] for r in results.values()]

plt.barh(names, means)
plt.xlabel('Accuracy')
plt.title('Model Comparison')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Choosing the Right Algorithm"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Linear/Logistic Regression:"}
                    </strong>
                    {" Simple, interpretable, good baseline"}
                  </li>
                  <li>
                    <strong>
                      {"Decision Trees:"}
                    </strong>
                    {" Handles non-linear relationships, interpretable"}
                  </li>
                  <li>
                    <strong>
                      {"SVM:"}
                    </strong>
                    {" Effective in high dimensions, works with clear margins"}
                  </li>
                  <li>
                    <strong>
                      {"KNN:"}
                    </strong>
                    {" Simple, no training time, good for small datasets"}
                  </li>
                  <li>
                    <strong>
                      {"Naive Bayes:"}
                    </strong>
                    {" Fast, works well with text, requires less data"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Machine Learning"}
                </h2>
                <p>
                  {"Our Data Science program covers supervised learning in depth with hands-on projects. Learn to build and deploy production-ready ML models."}
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
                  <Link href="/data-science/articles/unsupervised-learning" className="related-article-card">
                    <h4>
                      {"Unsupervised Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Clustering and dimensionality reduction"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/model-evaluation" className="related-article-card">
                    <h4>
                      {"Model Evaluation"}
                    </h4>
                    {" "}
                    <p>
                      {"Metrics and validation techniques"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Creating powerful features"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Supervised Learning."} />
    </>
  );
}
