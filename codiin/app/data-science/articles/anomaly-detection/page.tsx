import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Anomaly Detection: Complete Guide",
  description: "Learn Anomaly Detection techniques - Isolation Forest, autoencoders, One-Class SVM, and statistical methods for fraud detection and outlier analysis.",
  keywords: ["anomaly detection", "outlier detection", "isolation forest", "autoencoder", "one-class SVM", "fraud detection", "statistical methods"],
  alternates: { canonical: "/data-science/articles/anomaly-detection" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/anomaly-detection",
    title: "Anomaly Detection: Complete Guide to Finding Outliers",
    description: "Master anomaly detection using Isolation Forest, autoencoders, One-Class SVM, and statistical methods.",
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
  "headline": "Anomaly Detection: Complete Guide to Finding Outliers",
  "description": "Comprehensive guide to anomaly detection techniques including Isolation Forest, autoencoders, and statistical methods",
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

export default function DataScienceAnomalyDetectionPage() {
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
                {"Anomaly Detection"}
              </span>
            </div>
            <h1>
              {"Anomaly Detection"}
            </h1>
            <p className="article-subtitle">
              {"Finding Outliers and Unusual Patterns in Your Data"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"12 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Anomaly Detection?"}
                </h2>
                <p>
                  {"Anomaly detection (also called outlier detection) is the process of identifying data points, events, or observations that deviate significantly from the expected pattern in a dataset. These unusual instances often indicate critical information such as fraud, equipment failure, or security breaches."}
                </p>
                <p>
                  {"Unlike supervised learning where you have labeled examples of both normal and anomalous data, anomaly detection often works with mostly normal data and must identify rare, unusual occurrences without explicit examples."}
                </p>
                <p>
                  <strong>
                    {"Key characteristics:"}
                  </strong>
                  {" Anomalies are rare (typically less than 5% of data), significantly different from normal patterns, and often the most valuable insights in your dataset."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Anomaly Detection Matters"}
                </h2>
                <p>
                  {"Anomaly detection has critical applications across industries:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Fraud Detection:"}
                    </strong>
                    {" Identify fraudulent credit card transactions, insurance claims, or online activities"}
                  </li>
                  <li>
                    <strong>
                      {"Network Security:"}
                    </strong>
                    {" Detect intrusions, DDoS attacks, and unusual network traffic patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Healthcare:"}
                    </strong>
                    {" Monitor patient vitals, detect disease outbreaks, identify medical imaging abnormalities"}
                  </li>
                  <li>
                    <strong>
                      {"Manufacturing:"}
                    </strong>
                    {" Predict equipment failures, detect defective products on assembly lines"}
                  </li>
                  <li>
                    <strong>
                      {"Finance:"}
                    </strong>
                    {" Detect market manipulation, unusual trading patterns, money laundering"}
                  </li>
                  <li>
                    <strong>
                      {"IoT & Sensors:"}
                    </strong>
                    {" Monitor sensor data for equipment health, environmental anomalies"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Anomaly Detection"}
                </h2>
                <p>
                  {"Choose anomaly detection when:"}
                </p>
                <ul>
                  <li>
                    {"You have mostly normal data with rare abnormal cases"}
                  </li>
                  <li>
                    {"Labeling anomalies is expensive or impossible"}
                  </li>
                  <li>
                    {"The nature of anomalies changes over time (fraud patterns evolve)"}
                  </li>
                  <li>
                    {"You need to monitor systems in real-time for unusual behavior"}
                  </li>
                  <li>
                    {"False positives are acceptable (can be reviewed by humans)"}
                  </li>
                  <li>
                    {"The cost of missing an anomaly is high (safety, security, financial loss)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Types of Anomalies"}
                </h2>
                <h3>
                  {"1. Point Anomalies"}
                </h3>
                <p>
                  {"Individual data points that are anomalous relative to the rest of the data. Example: A single fraudulent transaction in a stream of normal purchases."}
                </p>
                <h3>
                  {"2. Contextual Anomalies"}
                </h3>
                <p>
                  {"Data points that are anomalous in a specific context. Example: Temperature of 70°F is normal in summer but anomalous in winter."}
                </p>
                <h3>
                  {"3. Collective Anomalies"}
                </h3>
                <p>
                  {"A collection of data points that together represent an anomaly. Example: Multiple small withdrawals that together indicate suspicious activity."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Statistical Methods"}
                </h2>
                <p>
                  {"Statistical approaches assume data follows a known distribution and flag points that fall outside expected ranges."}
                </p>
                <h3>
                  {"Z-Score Method"}
                </h3>
                <p>
                  {"Measures how many standard deviations a point is from the mean. Points beyond 3 standard deviations are typically considered anomalies."}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from scipy import stats

# Calculate z-scores
z_scores = np.abs(stats.zscore(data))

# Flag anomalies (threshold = 3)
anomalies = z_scores > 3
print(f"Found {anomalies.sum()} anomalies")`}</code></pre>
                </div>
                <h3>
                  {"Interquartile Range (IQR)"}
                </h3>
                <p>
                  {"Uses quartiles to define normal range. Points below Q1 - 1.5*IQR or above Q3 + 1.5*IQR are anomalies."}
                </p>
                <div className="code-block">
                  <pre><code>{`import pandas as pd

# Calculate IQR
Q1 = data.quantile(0.25)
Q3 = data.quantile(0.75)
IQR = Q3 - Q1

# Define bounds
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Identify anomalies
anomalies = (data < lower_bound) | (data > upper_bound)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Isolation Forest"}
                </h2>
                <p>
                  {"Isolation Forest is a powerful tree-based algorithm that isolates anomalies instead of profiling normal points. It works on the principle that anomalies are few and different, making them easier to isolate."}
                </p>
                <h3>
                  {"How it Works"}
                </h3>
                <ul>
                  <li>
                    {"Randomly select a feature and split value"}
                  </li>
                  <li>
                    {"Recursively partition the data"}
                  </li>
                  <li>
                    {"Anomalies require fewer splits to isolate (shorter path length)"}
                  </li>
                  <li>
                    {"Average path length across multiple trees determines anomaly score"}
                  </li>
                </ul>
                <h3>
                  {"Implementation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from sklearn.ensemble import IsolationForest
import pandas as pd

# Load your data
df = pd.read_csv('transactions.csv')
X = df[['amount', 'time', 'merchant_type']]

# Train Isolation Forest
iso_forest = IsolationForest(
    contamination=0.05,  # Expected proportion of anomalies
    random_state=42,
    n_estimators=100
)

# Fit and predict (-1 for anomalies, 1 for normal)
predictions = iso_forest.fit_predict(X)

# Get anomaly scores (lower = more anomalous)
scores = iso_forest.score_samples(X)

# Add to dataframe
df['anomaly'] = predictions
df['anomaly_score'] = scores

# View anomalies
anomalies_df = df[df['anomaly'] == -1]
print(f"Found {len(anomalies_df)} anomalies")
print(anomalies_df.head())`}</code></pre>
                </div>
                <h3>
                  {"Advantages"}
                </h3>
                <ul>
                  <li>
                    {"Fast and scalable to large datasets"}
                  </li>
                  <li>
                    {"No assumptions about data distribution"}
                  </li>
                  <li>
                    {"Works well in high-dimensional spaces"}
                  </li>
                  <li>
                    {"Low memory requirements"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"One-Class SVM"}
                </h2>
                <p>
                  {"One-Class Support Vector Machine learns a decision boundary around normal data. Points that fall outside this boundary are considered anomalies."}
                </p>
                <h3>
                  {"Implementation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from sklearn.svm import OneClassSVM
from sklearn.preprocessing import StandardScaler

# Scale features (important for SVM)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train One-Class SVM
oc_svm = OneClassSVM(
    kernel='rbf',      # Radial basis function
    gamma='auto',      # Kernel coefficient
    nu=0.05           # Upper bound on fraction of anomalies
)

# Fit and predict
predictions = oc_svm.fit_predict(X_scaled)

# -1 for anomalies, 1 for normal
df['is_anomaly'] = predictions == -1

# Decision function gives distance from boundary
df['decision_score'] = oc_svm.decision_function(X_scaled)`}</code></pre>
                </div>
                <h3>
                  {"When to Use One-Class SVM"}
                </h3>
                <ul>
                  <li>
                    {"Small to medium-sized datasets (computationally expensive on large data)"}
                  </li>
                  <li>
                    {"Need a well-defined decision boundary"}
                  </li>
                  <li>
                    {"Data has complex, non-linear patterns"}
                  </li>
                  <li>
                    {"You can tune hyperparameters properly"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Autoencoders for Anomaly Detection"}
                </h2>
                <p>
                  {"Autoencoders are neural networks trained to reconstruct input data. They learn to compress normal patterns into a lower-dimensional representation. Anomalies, being different, have high reconstruction error."}
                </p>
                <h3>
                  {"How Autoencoders Work"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Encoder:"}
                    </strong>
                    {" Compresses input into a latent representation"}
                  </li>
                  <li>
                    <strong>
                      {"Decoder:"}
                    </strong>
                    {" Reconstructs the original input from the latent space"}
                  </li>
                  <li>
                    <strong>
                      {"Training:"}
                    </strong>
                    {" Minimize reconstruction error on normal data"}
                  </li>
                  <li>
                    <strong>
                      {"Detection:"}
                    </strong>
                    {" High reconstruction error indicates anomaly"}
                  </li>
                </ul>
                <h3>
                  {"Implementation with Keras"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from tensorflow import keras
from tensorflow.keras import layers
from sklearn.preprocessing import StandardScaler

# Prepare data (use only normal data for training)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

# Build autoencoder
input_dim = X_train_scaled.shape[1]
encoding_dim = 8  # Compression factor

# Encoder
encoder_input = layers.Input(shape=(input_dim,))
encoded = layers.Dense(32, activation='relu')(encoder_input)
encoded = layers.Dense(16, activation='relu')(encoded)
encoded = layers.Dense(encoding_dim, activation='relu')(encoded)

# Decoder
decoded = layers.Dense(16, activation='relu')(encoded)
decoded = layers.Dense(32, activation='relu')(decoded)
decoded = layers.Dense(input_dim, activation='linear')(decoded)

# Complete autoencoder
autoencoder = keras.Model(encoder_input, decoded)
autoencoder.compile(optimizer='adam', loss='mse')

# Train on normal data only
history = autoencoder.fit(
    X_train_scaled, X_train_scaled,
    epochs=50,
    batch_size=32,
    validation_split=0.1,
    verbose=1
)

# Detect anomalies on test data
X_test_scaled = scaler.transform(X_test)
reconstructions = autoencoder.predict(X_test_scaled)

# Calculate reconstruction error
mse = np.mean(np.power(X_test_scaled - reconstructions, 2), axis=1)

# Set threshold (e.g., 95th percentile of training errors)
train_reconstructions = autoencoder.predict(X_train_scaled)
train_mse = np.mean(np.power(X_train_scaled - train_reconstructions, 2), axis=1)
threshold = np.percentile(train_mse, 95)

# Flag anomalies
anomalies = mse > threshold
print(f"Detected {anomalies.sum()} anomalies")`}</code></pre>
                </div>
                <h3>
                  {"Advantages of Autoencoders"}
                </h3>
                <ul>
                  <li>
                    {"Excellent for high-dimensional data (images, sensor data)"}
                  </li>
                  <li>
                    {"Capture complex, non-linear patterns"}
                  </li>
                  <li>
                    {"No assumptions about data distribution"}
                  </li>
                  <li>
                    {"Can be adapted with different architectures (CNN, LSTM for sequences)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Comparing Methods"}
                </h2>
                <div className="table-wrap">
                  <table style={{ "width": "100%", "borderCollapse": "collapse", "margin": "20px 0" }}>
                    <thead>
                      <tr style={{ "backgroundColor": "#f8f9fa" }}>
                        <th style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Method"}
                        </th>
                        <th style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Best For"}
                        </th>
                        <th style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Pros"}
                        </th>
                        <th style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Cons"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Statistical"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Simple, 1D data"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Fast, interpretable"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Assumes distribution"}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Isolation Forest"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Large, mixed data"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Scalable, robust"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Less interpretable"}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"One-Class SVM"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Small, structured"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Strong boundaries"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Slow, needs tuning"}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Autoencoders"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Images, sequences"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Handles complexity"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Needs more data"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Understand Your Data:"}
                    </strong>
                    {" Know what \"normal\" looks like before detecting anomalies"}
                  </li>
                  <li>
                    <strong>
                      {"Feature Engineering:"}
                    </strong>
                    {" Create domain-specific features that highlight anomalies"}
                  </li>
                  <li>
                    <strong>
                      {"Set Appropriate Thresholds:"}
                    </strong>
                    {" Balance false positives vs false negatives based on business cost"}
                  </li>
                  <li>
                    <strong>
                      {"Validate with Domain Experts:"}
                    </strong>
                    {" Have experts review detected anomalies to refine your model"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor Over Time:"}
                    </strong>
                    {" Normal patterns change; retrain models regularly"}
                  </li>
                  <li>
                    <strong>
                      {"Combine Methods:"}
                    </strong>
                    {" Ensemble different techniques for better results"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Imbalance:"}
                    </strong>
                    {" Use contamination parameter carefully; anomalies are rare by definition"}
                  </li>
                  <li>
                    <strong>
                      {"Visualize:"}
                    </strong>
                    {" Use dimensionality reduction (PCA, t-SNE) to visualize anomalies"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Example: Credit Card Fraud Detection"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Load transaction data
df = pd.read_csv('credit_card_transactions.csv')

# Feature engineering
df['hour'] = pd.to_datetime(df['timestamp']).dt.hour
df['amount_log'] = np.log1p(df['amount'])  # Log transform for skewed amounts

# Select features
features = ['amount', 'amount_log', 'hour', 'merchant_category', 'distance_from_home']
X = df[features]

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train Isolation Forest
iso_forest = IsolationForest(
    contamination=0.01,  # Expect 1% fraud
    n_estimators=100,
    max_samples='auto',
    random_state=42
)

# Predict anomalies
df['is_fraud_predicted'] = iso_forest.fit_predict(X_scaled)
df['anomaly_score'] = iso_forest.score_samples(X_scaled)

# Sort by most anomalous
df_sorted = df.sort_values('anomaly_score')
high_risk = df_sorted.head(100)  # Top 100 most suspicious

print(f"Flagged {(df['is_fraud_predicted'] == -1).sum()} transactions as potential fraud")
print("\\nMost suspicious transactions:")
print(high_risk[['amount', 'merchant_category', 'anomaly_score']].head(10))

# If you have labels, evaluate performance
if 'is_fraud_actual' in df.columns:
    from sklearn.metrics import classification_report
    print("\\nPerformance:")
    print(classification_report(
        df['is_fraud_actual'],
        df['is_fraud_predicted'] == -1
    ))`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Anomaly Detection with Expert Guidance"}
                </h2>
                <p>
                  {"Our Data Science program covers anomaly detection in depth, from statistical methods to deep learning. Build fraud detection systems and learn from real-world case studies."}
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
                      {"Build a strong foundation in ML concepts and algorithms"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning Essentials"}
                    </h4>
                    {" "}
                    <p>
                      {"Master neural networks and advanced architectures"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/scikit-learn" className="related-article-card">
                    <h4>
                      {"Scikit-learn: The Essential ML Library"}
                    </h4>
                    {" "}
                    <p>
                      {"Master Python's most popular machine learning library"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Anomaly Detection."} />
    </>
  );
}
