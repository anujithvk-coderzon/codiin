import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Unsupervised Learning: Clustering & Dimensionality Reduction",
  description: "Master Unsupervised Learning - clustering algorithms like K-Means, DBSCAN, hierarchical clustering, and dimensionality reduction with PCA and t-SNE.",
  keywords: ["unsupervised learning", "clustering", "K-Means", "DBSCAN", "PCA", "dimensionality reduction", "t-SNE", "hierarchical clustering"],
  alternates: { canonical: "/data-science/articles/unsupervised-learning" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/unsupervised-learning",
    title: "Unsupervised Learning: Clustering & Dimensionality Reduction",
    description: "Complete guide to unsupervised machine learning algorithms.",
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
  "headline": "Unsupervised Learning: Clustering & Dimensionality Reduction",
  "description": "Complete guide to unsupervised machine learning",
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

export default function DataScienceUnsupervisedLearningPage() {
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
                {"Unsupervised Learning"}
              </span>
            </div>
            <h1>
              {"Unsupervised Learning"}
            </h1>
            <p className="article-subtitle">
              {"Clustering & Dimensionality Reduction"}
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
                  {"What is Unsupervised Learning?"}
                </h2>
                <p>
                  {"Unlike supervised learning, unsupervised learning works with unlabeled data. The algorithm discovers hidden patterns, structures, and relationships within the data without predefined outcomes."}
                </p>
                <p>
                  {"It's like exploring a new city without a map - you discover neighborhoods, landmarks, and connections on your own."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Main Categories"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Clustering:"}
                    </strong>
                    {" Group similar data points together (customer segmentation)"}
                  </li>
                  <li>
                    <strong>
                      {"Dimensionality Reduction:"}
                    </strong>
                    {" Reduce features while preserving information (visualization, compression)"}
                  </li>
                  <li>
                    <strong>
                      {"Association Rules:"}
                    </strong>
                    {" Find relationships between variables (market basket analysis)"}
                  </li>
                  <li>
                    <strong>
                      {"Anomaly Detection:"}
                    </strong>
                    {" Identify unusual data points (fraud detection)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"K-Means Clustering"}
                </h2>
                <p>
                  {"The most popular clustering algorithm - partitions data into K clusters:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Scale features (important for K-Means)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Fit K-Means
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_scaled)

# Add clusters to dataframe
df['cluster'] = clusters

# Cluster centers
print("Cluster Centers:")
print(scaler.inverse_transform(kmeans.cluster_centers_))

# Visualize clusters (2D)
plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=clusters, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1],
            s=300, c='red', marker='X', label='Centroids')
plt.legend()
plt.title('K-Means Clustering')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Finding Optimal K (Elbow Method)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Elbow Method
inertias = []
K_range = range(1, 11)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)

# Plot elbow curve
plt.figure(figsize=(10, 5))
plt.plot(K_range, inertias, 'bo-')
plt.xlabel('Number of Clusters (K)')
plt.ylabel('Inertia')
plt.title('Elbow Method for Optimal K')
plt.show()

# Silhouette Score
from sklearn.metrics import silhouette_score

silhouette_scores = []
for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = kmeans.fit_predict(X_scaled)
    score = silhouette_score(X_scaled, labels)
    silhouette_scores.append(score)
    print(f"K={k}: Silhouette Score = {score:.4f}")

optimal_k = range(2, 11)[np.argmax(silhouette_scores)]
print(f"\\nOptimal K: {optimal_k}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DBSCAN (Density-Based Clustering)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.cluster import DBSCAN

# DBSCAN doesn't require specifying number of clusters
dbscan = DBSCAN(eps=0.5, min_samples=5)
clusters = dbscan.fit_predict(X_scaled)

# Number of clusters (excluding noise labeled as -1)
n_clusters = len(set(clusters)) - (1 if -1 in clusters else 0)
n_noise = list(clusters).count(-1)

print(f"Number of clusters: {n_clusters}")
print(f"Noise points: {n_noise}")

# Visualize
plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=clusters, cmap='viridis')
plt.title(f'DBSCAN Clustering ({n_clusters} clusters)')
plt.show()

# Finding optimal eps using k-distance graph
from sklearn.neighbors import NearestNeighbors

neighbors = NearestNeighbors(n_neighbors=5)
neighbors_fit = neighbors.fit(X_scaled)
distances, indices = neighbors_fit.kneighbors(X_scaled)

distances = np.sort(distances[:, 4])
plt.plot(distances)
plt.xlabel('Points')
plt.ylabel('5th Nearest Neighbor Distance')
plt.title('K-Distance Graph (Elbow = eps)')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Hierarchical Clustering"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import dendrogram, linkage

# Agglomerative Clustering
hierarchical = AgglomerativeClustering(n_clusters=3, linkage='ward')
clusters = hierarchical.fit_predict(X_scaled)

# Create and plot dendrogram
linked = linkage(X_scaled, method='ward')

plt.figure(figsize=(12, 7))
dendrogram(linked, truncate_mode='level', p=5)
plt.xlabel('Sample Index or Cluster Size')
plt.ylabel('Distance')
plt.title('Hierarchical Clustering Dendrogram')
plt.show()

# Cut dendrogram at different heights
from scipy.cluster.hierarchy import fcluster

# Get clusters by distance threshold
clusters_by_distance = fcluster(linked, t=10, criterion='distance')

# Get specific number of clusters
clusters_by_count = fcluster(linked, t=4, criterion='maxclust')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Gaussian Mixture Models (GMM)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.mixture import GaussianMixture

# GMM - soft clustering (probabilistic)
gmm = GaussianMixture(n_components=3, random_state=42)
gmm.fit(X_scaled)

# Hard cluster assignments
clusters = gmm.predict(X_scaled)

# Soft cluster probabilities
probabilities = gmm.predict_proba(X_scaled)
print("Probability of belonging to each cluster:")
print(probabilities[:5])

# Model selection with BIC/AIC
n_components_range = range(1, 10)
bic_scores = []
aic_scores = []

for n in n_components_range:
    gmm = GaussianMixture(n_components=n, random_state=42)
    gmm.fit(X_scaled)
    bic_scores.append(gmm.bic(X_scaled))
    aic_scores.append(gmm.aic(X_scaled))

plt.plot(n_components_range, bic_scores, label='BIC')
plt.plot(n_components_range, aic_scores, label='AIC')
plt.xlabel('Number of Components')
plt.ylabel('Score')
plt.legend()
plt.title('GMM Model Selection')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Principal Component Analysis (PCA)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.decomposition import PCA

# PCA for dimensionality reduction
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# Explained variance
print("Explained Variance Ratio:", pca.explained_variance_ratio_)
print("Total Variance Explained:", sum(pca.explained_variance_ratio_))

# Cumulative variance plot
pca_full = PCA()
pca_full.fit(X_scaled)

cumulative_variance = np.cumsum(pca_full.explained_variance_ratio_)
plt.plot(range(1, len(cumulative_variance) + 1), cumulative_variance)
plt.xlabel('Number of Components')
plt.ylabel('Cumulative Explained Variance')
plt.axhline(y=0.95, color='r', linestyle='--', label='95% Variance')
plt.legend()
plt.title('PCA - Explained Variance')
plt.show()

# Choose components for 95% variance
n_components_95 = np.argmax(cumulative_variance >= 0.95) + 1
print(f"Components for 95% variance: {n_components_95}")

# Visualize PCA
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap='viridis', alpha=0.6)
plt.xlabel('First Principal Component')
plt.ylabel('Second Principal Component')
plt.title('PCA Visualization')
plt.colorbar(label='Target')
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"t-SNE (t-Distributed Stochastic Neighbor Embedding)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.manifold import TSNE

# t-SNE for visualization
tsne = TSNE(n_components=2, perplexity=30, random_state=42, n_iter=1000)
X_tsne = tsne.fit_transform(X_scaled)

# Visualize
plt.figure(figsize=(10, 8))
scatter = plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=clusters,
                      cmap='viridis', alpha=0.6)
plt.xlabel('t-SNE 1')
plt.ylabel('t-SNE 2')
plt.title('t-SNE Visualization')
plt.colorbar(scatter)
plt.show()

# Compare different perplexity values
fig, axes = plt.subplots(2, 2, figsize=(12, 12))
perplexities = [5, 30, 50, 100]

for ax, perplexity in zip(axes.flat, perplexities):
    tsne = TSNE(n_components=2, perplexity=perplexity, random_state=42)
    X_tsne = tsne.fit_transform(X_scaled)
    ax.scatter(X_tsne[:, 0], X_tsne[:, 1], c=clusters, cmap='viridis')
    ax.set_title(f'Perplexity = {perplexity}')

plt.tight_layout()
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"UMAP (Uniform Manifold Approximation)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# pip install umap-learn
import umap

# UMAP - often better than t-SNE
reducer = umap.UMAP(n_components=2, random_state=42)
X_umap = reducer.fit_transform(X_scaled)

plt.scatter(X_umap[:, 0], X_umap[:, 1], c=clusters, cmap='viridis')
plt.xlabel('UMAP 1')
plt.ylabel('UMAP 2')
plt.title('UMAP Visualization')
plt.show()

# UMAP preserves more global structure
# Also much faster than t-SNE on large datasets`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cluster Evaluation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import (
    silhouette_score,
    calinski_harabasz_score,
    davies_bouldin_score
)

# Internal metrics (no ground truth needed)
silhouette = silhouette_score(X_scaled, clusters)
calinski = calinski_harabasz_score(X_scaled, clusters)
davies = davies_bouldin_score(X_scaled, clusters)

print(f"Silhouette Score: {silhouette:.4f} (higher is better, max 1)")
print(f"Calinski-Harabasz: {calinski:.4f} (higher is better)")
print(f"Davies-Bouldin: {davies:.4f} (lower is better)")

# If ground truth available
from sklearn.metrics import adjusted_rand_score, normalized_mutual_info_score

ari = adjusted_rand_score(y_true, clusters)
nmi = normalized_mutual_info_score(y_true, clusters)
print(f"Adjusted Rand Index: {ari:.4f}")
print(f"Normalized Mutual Info: {nmi:.4f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Choosing the Right Algorithm"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"K-Means:"}
                    </strong>
                    {" Fast, spherical clusters, need to specify K"}
                  </li>
                  <li>
                    <strong>
                      {"DBSCAN:"}
                    </strong>
                    {" Arbitrary shapes, handles noise, no K needed"}
                  </li>
                  <li>
                    <strong>
                      {"Hierarchical:"}
                    </strong>
                    {" No K needed, provides dendrogram, slower"}
                  </li>
                  <li>
                    <strong>
                      {"GMM:"}
                    </strong>
                    {" Soft clustering, elliptical clusters, probabilistic"}
                  </li>
                  <li>
                    <strong>
                      {"PCA:"}
                    </strong>
                    {" Linear reduction, fast, preserves variance"}
                  </li>
                  <li>
                    <strong>
                      {"t-SNE:"}
                    </strong>
                    {" Visualization, non-linear, computationally expensive"}
                  </li>
                  <li>
                    <strong>
                      {"UMAP:"}
                    </strong>
                    {" Fast non-linear reduction, preserves global structure"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Unsupervised Learning"}
                </h2>
                <p>
                  {"Our Data Science program covers clustering, dimensionality reduction, and anomaly detection with real-world applications."}
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
                  <Link href="/data-science/articles/supervised-learning" className="related-article-card">
                    <h4>
                      {"Supervised Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Regression and classification algorithms"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/anomaly-detection" className="related-article-card">
                    <h4>
                      {"Anomaly Detection"}
                    </h4>
                    {" "}
                    <p>
                      {"Finding outliers in your data"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/recommendation-systems" className="related-article-card">
                    <h4>
                      {"Recommendation Systems"}
                    </h4>
                    {" "}
                    <p>
                      {"Build personalized recommendations"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Unsupervised Learning."} />
    </>
  );
}
