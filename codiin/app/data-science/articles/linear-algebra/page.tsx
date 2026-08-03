import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Linear Algebra for Machine Learning",
  description: "Learn Linear Algebra for Machine Learning - vectors, matrices, eigenvalues, and matrix operations. Understand the math behind ML algorithms with intuitive explanations.",
  keywords: ["linear algebra machine learning", "vectors ML", "matrices data science", "eigenvalues", "matrix operations", "math for ML"],
  alternates: { canonical: "/data-science/articles/linear-algebra" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/linear-algebra",
    title: "Linear Algebra for Machine Learning",
    description: "Master the essential math behind machine learning algorithms.",
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
  "headline": "Linear Algebra for Machine Learning",
  "description": "Essential linear algebra concepts for understanding ML algorithms",
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

export default function DataScienceLinearAlgebraPage() {
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
                {"Linear Algebra"}
              </span>
            </div>
            <h1>
              {"Linear Algebra for Machine Learning"}
            </h1>
            <p className="article-subtitle">
              {"The Mathematical Foundation of Data Science"}
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
                  {"Why Linear Algebra Matters in ML"}
                </h2>
                <p>
                  {"Linear algebra is the language of machine learning. Every dataset is a matrix, every feature is a vector, and most ML algorithms are just matrix operations under the hood."}
                </p>
                <p>
                  {"Understanding linear algebra helps you:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Understand how algorithms work:"}
                    </strong>
                    {" Not just use them as black boxes"}
                  </li>
                  <li>
                    <strong>
                      {"Debug models:"}
                    </strong>
                    {" Recognize dimension mismatches and numerical issues"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize performance:"}
                    </strong>
                    {" Vectorized code runs 100x faster than loops"}
                  </li>
                  <li>
                    <strong>
                      {"Read research papers:"}
                    </strong>
                    {" Most ML papers use matrix notation"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Vectors: The Building Blocks"}
                </h2>
                <p>
                  {"A vector is simply an ordered list of numbers. In ML, each data point is a vector where each element represents a feature."}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np

# A data point: [age, income, credit_score]
customer = np.array([35, 75000, 720])

# This is a 3-dimensional vector
print(f"Shape: {customer.shape}")  # (3,)
print(f"Dimensions: {customer.ndim}")  # 1

# Real-world example: Image as a vector
# A 28x28 grayscale image = 784-dimensional vector
image = np.random.rand(784)  # Flattened image

# Vector operations
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Element-wise addition
print(a + b)  # [5, 7, 9]

# Scalar multiplication
print(2 * a)  # [2, 4, 6]

# Dot product (most important operation in ML!)
dot_product = np.dot(a, b)  # 1*4 + 2*5 + 3*6 = 32
print(f"Dot product: {dot_product}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"The Dot Product: Heart of ML"}
                </h2>
                <p>
                  {"The dot product measures similarity between vectors and is the core operation in neural networks, SVMs, and recommendation systems."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Why dot product matters in ML:

# 1. Linear Regression is just a dot product
weights = np.array([0.5, 0.3, 0.2])  # learned weights
features = np.array([100, 50, 30])   # input features
prediction = np.dot(weights, features)  # weighted sum

# 2. Cosine similarity (used in NLP, recommendations)
def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

doc1 = np.array([1, 0, 1, 0])  # word frequencies
doc2 = np.array([1, 0, 1, 1])
similarity = cosine_similarity(doc1, doc2)
print(f"Document similarity: {similarity:.2f}")  # 0.87

# 3. Neural network layer is matrix of dot products
# output = activation(weights @ inputs + bias)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Matrices: Data in Tabular Form"}
                </h2>
                <p>
                  {"A matrix is a 2D array of numbers. Your entire dataset is a matrix where rows are samples and columns are features."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Dataset as a matrix
# 100 customers, 5 features each
X = np.random.rand(100, 5)
print(f"Shape: {X.shape}")  # (100, 5) = (samples, features)

# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication (rows of A dot columns of B)
C = np.dot(A, B)  # or A @ B
print(C)
# [[19, 22],
#  [43, 50]]

# Transpose: swap rows and columns
print(A.T)
# [[1, 3],
#  [2, 4]]

# Why transpose matters:
# - Converting row vectors to column vectors
# - Computing covariance matrices
# - Backpropagation in neural networks

# Identity matrix: AI = IA = A
I = np.eye(3)
print(I)
# [[1, 0, 0],
#  [0, 1, 0],
#  [0, 0, 1]]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Matrix Multiplication in ML"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Neural Network: Just matrix multiplications!

# Input layer: 100 samples, 784 features (images)
X = np.random.rand(100, 784)

# Hidden layer weights: 784 inputs -> 128 neurons
W1 = np.random.rand(784, 128)

# Output layer weights: 128 -> 10 classes
W2 = np.random.rand(128, 10)

# Forward pass (simplified)
hidden = X @ W1          # (100, 784) @ (784, 128) = (100, 128)
output = hidden @ W2     # (100, 128) @ (128, 10) = (100, 10)

print(f"Hidden shape: {hidden.shape}")
print(f"Output shape: {output.shape}")

# The magic: 100 predictions in one operation!
# Without matrices: 100 * 784 * 128 individual multiplications
# With matrices: one optimized operation

# Matrix multiplication rule:
# (m, n) @ (n, p) = (m, p)
# Inner dimensions must match!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Eigenvalues & Eigenvectors"}
                </h2>
                <p>
                  {"Eigenvectors are special directions that don't change when a matrix transformation is applied - they only get scaled. This concept powers PCA, PageRank, and many ML algorithms."}
                </p>
                <div className="code-block">
                  <pre><code>{`# For a matrix A, eigenvector v satisfies: Av = λv
# λ (lambda) is the eigenvalue (scaling factor)

A = np.array([[4, 2], [1, 3]])

# Compute eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print(f"Eigenvalues: {eigenvalues}")   # [5, 2]
print(f"Eigenvectors:\\n{eigenvectors}")

# Verify: A @ v = λ * v
v = eigenvectors[:, 0]  # First eigenvector
lambda1 = eigenvalues[0]  # First eigenvalue

print(f"A @ v = {A @ v}")
print(f"λ * v = {lambda1 * v}")
# They're equal!

# Why eigenvectors matter:
# 1. PCA: Find directions of maximum variance
# 2. PageRank: Find stable ranking of web pages
# 3. Spectral clustering: Find graph structure
# 4. Covariance analysis: Understand data spread`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"PCA: Eigenvalues in Action"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.decomposition import PCA
from sklearn.datasets import load_iris

# Load data
iris = load_iris()
X = iris.data  # 150 samples, 4 features

# Manual PCA using eigenvalues
# Step 1: Center the data
X_centered = X - X.mean(axis=0)

# Step 2: Compute covariance matrix
cov_matrix = np.cov(X_centered.T)

# Step 3: Get eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)

# Step 4: Sort by eigenvalue (variance explained)
sorted_idx = np.argsort(eigenvalues)[::-1]
eigenvalues = eigenvalues[sorted_idx]
eigenvectors = eigenvectors[:, sorted_idx]

# Variance explained by each component
total_variance = eigenvalues.sum()
variance_ratio = eigenvalues / total_variance
print(f"Variance explained: {variance_ratio}")
# [0.92, 0.05, 0.02, 0.01] - First 2 components capture 97%!

# Using sklearn (does the same thing)
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)
print(f"Reduced shape: {X_reduced.shape}")  # (150, 2)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Norms: Measuring Vector Size"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Norms measure the "size" or "length" of a vector

v = np.array([3, 4])

# L2 Norm (Euclidean distance) - most common
l2_norm = np.linalg.norm(v)  # sqrt(3² + 4²) = 5
print(f"L2 norm: {l2_norm}")

# L1 Norm (Manhattan distance)
l1_norm = np.linalg.norm(v, ord=1)  # |3| + |4| = 7
print(f"L1 norm: {l1_norm}")

# Why norms matter in ML:
# 1. Regularization: L2 (Ridge) and L1 (Lasso)
# 2. Gradient clipping: Prevent exploding gradients
# 3. Normalization: Scale features to unit norm

# L2 Regularization: Penalize large weights
weights = np.array([0.5, -0.3, 0.8, -0.1])
l2_penalty = np.linalg.norm(weights) ** 2
print(f"L2 penalty: {l2_penalty}")

# L1 Regularization: Encourages sparsity (zeros)
l1_penalty = np.linalg.norm(weights, ord=1)
print(f"L1 penalty: {l1_penalty}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Broadcasting: NumPy Magic"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Broadcasting allows operations on arrays of different shapes

# Subtract mean from each column (centering)
X = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])

mean = X.mean(axis=0)  # [4, 5, 6]
X_centered = X - mean  # Broadcasts mean to each row

print(X_centered)
# [[-3, -3, -3],
#  [ 0,  0,  0],
#  [ 3,  3,  3]]

# Normalize each row to unit length
norms = np.linalg.norm(X, axis=1, keepdims=True)
X_normalized = X / norms  # Each row divided by its norm

# Add bias to each sample
bias = np.array([0.1, 0.2, 0.3])
X_biased = X + bias  # Broadcasts to all rows

# Broadcasting rules:
# 1. Dimensions are compared from right to left
# 2. Dimensions match if equal or one of them is 1
# (3, 4) + (4,) = (3, 4)  ✓
# (3, 4) + (3, 1) = (3, 4)  ✓
# (3, 4) + (3,) = Error  ✗`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Linear Algebra Cheat Sheet"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Essential operations for ML

import numpy as np

# Vector operations
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

np.dot(a, b)           # Dot product
np.linalg.norm(a)      # L2 norm (length)
a / np.linalg.norm(a)  # Unit vector

# Matrix operations
A = np.random.rand(3, 4)
B = np.random.rand(4, 5)

A @ B                  # Matrix multiplication
A.T                    # Transpose
np.linalg.inv(A @ A.T) # Inverse (square matrices only)
np.linalg.det(A @ A.T) # Determinant

# Decompositions
np.linalg.eig(A @ A.T) # Eigenvalues/vectors
np.linalg.svd(A)       # Singular Value Decomposition

# Solving linear systems: Ax = b
A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = np.linalg.solve(A, b)  # More stable than inv(A) @ b

# Random matrices (for initialization)
np.random.rand(3, 4)   # Uniform [0, 1)
np.random.randn(3, 4)  # Standard normal
np.eye(3)              # Identity matrix
np.zeros((3, 4))       # Zeros
np.ones((3, 4))        # Ones`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"When You'll Use This"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Neural Networks:"}
                    </strong>
                    {" Forward/backward pass are matrix multiplications"}
                  </li>
                  <li>
                    <strong>
                      {"PCA:"}
                    </strong>
                    {" Eigenvalue decomposition for dimensionality reduction"}
                  </li>
                  <li>
                    <strong>
                      {"Recommendation Systems:"}
                    </strong>
                    {" Matrix factorization (SVD)"}
                  </li>
                  <li>
                    <strong>
                      {"Word Embeddings:"}
                    </strong>
                    {" Vectors represent word meanings"}
                  </li>
                  <li>
                    <strong>
                      {"Image Processing:"}
                    </strong>
                    {" Images as matrices, convolutions as operations"}
                  </li>
                  <li>
                    <strong>
                      {"Regularization:"}
                    </strong>
                    {" L1/L2 norms prevent overfitting"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master the Math of ML"}
                </h2>
                <p>
                  {"Our Data Science program builds your mathematical intuition alongside practical skills."}
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
                  <Link href="/data-science/articles/statistics" className="related-article-card">
                    <h4>
                      {"Statistics for Data Science"}
                    </h4>
                    {" "}
                    <p>
                      {"Probability and statistical foundations"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/numpy-pandas" className="related-article-card">
                    <h4>
                      {"NumPy & Pandas"}
                    </h4>
                    {" "}
                    <p>
                      {"Data manipulation essentials"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Neural networks in practice"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Linear Algebra for ML."} />
    </>
  );
}
