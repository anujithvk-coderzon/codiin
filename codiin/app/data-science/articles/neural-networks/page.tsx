import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Neural Network Fundamentals: Complete Guide",
  description: "Learn Neural Network Fundamentals - understand perceptrons, activation functions, backpropagation, and build your first neural network from scratch.",
  keywords: ["neural networks", "deep learning", "perceptron", "backpropagation", "activation functions", "gradient descent", "MLP"],
  alternates: { canonical: "/data-science/articles/neural-networks" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/neural-networks",
    title: "Neural Network Fundamentals: Complete Guide",
    description: "Understand the building blocks of deep learning.",
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
  "headline": "Neural Network Fundamentals: Complete Guide",
  "description": "Complete guide to neural network basics",
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

export default function DataScienceNeuralNetworksPage() {
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
                {"Neural Networks"}
              </span>
            </div>
            <h1>
              {"Neural Network Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"The Building Blocks of Deep Learning"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"22 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What are Neural Networks?"}
                </h2>
                <p>
                  {"Neural networks are computing systems inspired by the biological neural networks in our brains. They consist of interconnected nodes (neurons) organized in layers that can learn patterns from data."}
                </p>
                <p>
                  {"From image recognition to language translation, neural networks power many of today's most impressive AI applications."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"The Perceptron: Simplest Neural Unit"}
                </h2>
                <p>
                  {"A perceptron takes inputs, multiplies by weights, sums them, and applies an activation function:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np

class Perceptron:
    def __init__(self, n_inputs, learning_rate=0.01):
        self.weights = np.random.randn(n_inputs)
        self.bias = 0
        self.lr = learning_rate

    def activation(self, x):
        """Step function"""
        return 1 if x >= 0 else 0

    def predict(self, X):
        linear_output = np.dot(X, self.weights) + self.bias
        return self.activation(linear_output)

    def train(self, X, y, epochs=100):
        for _ in range(epochs):
            for xi, yi in zip(X, y):
                prediction = self.predict(xi)
                error = yi - prediction
                # Update weights
                self.weights += self.lr * error * xi
                self.bias += self.lr * error

# Example: AND gate
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 0, 0, 1])

perceptron = Perceptron(n_inputs=2)
perceptron.train(X, y, epochs=10)

for xi in X:
    print(f"{xi} -> {perceptron.predict(xi)}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Activation Functions"}
                </h2>
                <p>
                  {"Activation functions introduce non-linearity, enabling networks to learn complex patterns:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np
import matplotlib.pyplot as plt

def sigmoid(x):
    """Maps to (0, 1) - good for probabilities"""
    return 1 / (1 + np.exp(-x))

def tanh(x):
    """Maps to (-1, 1) - zero-centered"""
    return np.tanh(x)

def relu(x):
    """ReLU - most popular for hidden layers"""
    return np.maximum(0, x)

def leaky_relu(x, alpha=0.01):
    """Prevents dead neurons"""
    return np.where(x > 0, x, alpha * x)

def softmax(x):
    """For multi-class classification output"""
    exp_x = np.exp(x - np.max(x))
    return exp_x / exp_x.sum()

# Derivatives for backpropagation
def sigmoid_derivative(x):
    s = sigmoid(x)
    return s * (1 - s)

def relu_derivative(x):
    return np.where(x > 0, 1, 0)

# Visualize
x = np.linspace(-5, 5, 100)
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

axes[0, 0].plot(x, sigmoid(x))
axes[0, 0].set_title('Sigmoid')

axes[0, 1].plot(x, tanh(x))
axes[0, 1].set_title('Tanh')

axes[1, 0].plot(x, relu(x))
axes[1, 0].set_title('ReLU')

axes[1, 1].plot(x, leaky_relu(x))
axes[1, 1].set_title('Leaky ReLU')

plt.tight_layout()
plt.show()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multi-Layer Perceptron (MLP)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`class NeuralNetwork:
    def __init__(self, layer_sizes):
        """
        layer_sizes: list of layer sizes [input, hidden..., output]
        e.g., [784, 128, 64, 10] for MNIST
        """
        self.layers = []
        self.biases = []

        # Initialize weights and biases
        for i in range(len(layer_sizes) - 1):
            # Xavier initialization
            w = np.random.randn(layer_sizes[i], layer_sizes[i+1]) * np.sqrt(2 / layer_sizes[i])
            b = np.zeros((1, layer_sizes[i+1]))
            self.layers.append(w)
            self.biases.append(b)

    def relu(self, x):
        return np.maximum(0, x)

    def relu_derivative(self, x):
        return (x > 0).astype(float)

    def softmax(self, x):
        exp_x = np.exp(x - np.max(x, axis=1, keepdims=True))
        return exp_x / np.sum(exp_x, axis=1, keepdims=True)

    def forward(self, X):
        """Forward pass through the network"""
        self.activations = [X]
        self.z_values = []

        for i, (w, b) in enumerate(zip(self.layers, self.biases)):
            z = np.dot(self.activations[-1], w) + b
            self.z_values.append(z)

            if i == len(self.layers) - 1:  # Output layer
                a = self.softmax(z)
            else:  # Hidden layers
                a = self.relu(z)

            self.activations.append(a)

        return self.activations[-1]

    def backward(self, y_true, learning_rate=0.01):
        """Backpropagation"""
        m = y_true.shape[0]
        gradients_w = []
        gradients_b = []

        # Output layer error
        delta = self.activations[-1] - y_true

        # Backpropagate through layers
        for i in reversed(range(len(self.layers))):
            grad_w = np.dot(self.activations[i].T, delta) / m
            grad_b = np.sum(delta, axis=0, keepdims=True) / m

            gradients_w.insert(0, grad_w)
            gradients_b.insert(0, grad_b)

            if i > 0:
                delta = np.dot(delta, self.layers[i].T) * self.relu_derivative(self.z_values[i-1])

        # Update weights and biases
        for i in range(len(self.layers)):
            self.layers[i] -= learning_rate * gradients_w[i]
            self.biases[i] -= learning_rate * gradients_b[i]

    def train(self, X, y, epochs, learning_rate=0.01, batch_size=32):
        """Train the network"""
        n_samples = X.shape[0]

        for epoch in range(epochs):
            # Shuffle data
            indices = np.random.permutation(n_samples)
            X_shuffled = X[indices]
            y_shuffled = y[indices]

            total_loss = 0
            for i in range(0, n_samples, batch_size):
                X_batch = X_shuffled[i:i+batch_size]
                y_batch = y_shuffled[i:i+batch_size]

                # Forward pass
                output = self.forward(X_batch)

                # Calculate loss (cross-entropy)
                loss = -np.mean(np.sum(y_batch * np.log(output + 1e-8), axis=1))
                total_loss += loss

                # Backward pass
                self.backward(y_batch, learning_rate)

            if epoch % 10 == 0:
                print(f"Epoch {epoch}, Loss: {total_loss / (n_samples // batch_size):.4f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Loss Functions"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Mean Squared Error (Regression)
def mse_loss(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

def mse_gradient(y_true, y_pred):
    return 2 * (y_pred - y_true) / len(y_true)

# Binary Cross-Entropy (Binary Classification)
def binary_cross_entropy(y_true, y_pred):
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

# Categorical Cross-Entropy (Multi-class Classification)
def categorical_cross_entropy(y_true, y_pred):
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.mean(np.sum(y_true * np.log(y_pred), axis=1))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Gradient Descent Optimizers"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Stochastic Gradient Descent
def sgd_update(params, grads, learning_rate):
    return params - learning_rate * grads

# SGD with Momentum
class SGDMomentum:
    def __init__(self, learning_rate=0.01, momentum=0.9):
        self.lr = learning_rate
        self.momentum = momentum
        self.velocity = None

    def update(self, params, grads):
        if self.velocity is None:
            self.velocity = np.zeros_like(params)

        self.velocity = self.momentum * self.velocity - self.lr * grads
        return params + self.velocity

# Adam Optimizer
class Adam:
    def __init__(self, learning_rate=0.001, beta1=0.9, beta2=0.999, epsilon=1e-8):
        self.lr = learning_rate
        self.beta1 = beta1
        self.beta2 = beta2
        self.epsilon = epsilon
        self.m = None  # First moment
        self.v = None  # Second moment
        self.t = 0

    def update(self, params, grads):
        if self.m is None:
            self.m = np.zeros_like(params)
            self.v = np.zeros_like(params)

        self.t += 1

        self.m = self.beta1 * self.m + (1 - self.beta1) * grads
        self.v = self.beta2 * self.v + (1 - self.beta2) * grads**2

        # Bias correction
        m_corrected = self.m / (1 - self.beta1**self.t)
        v_corrected = self.v / (1 - self.beta2**self.t)

        return params - self.lr * m_corrected / (np.sqrt(v_corrected) + self.epsilon)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Regularization Techniques"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# L2 Regularization (Weight Decay)
def l2_regularization(weights, lambda_reg):
    return lambda_reg * np.sum(weights ** 2)

# During training, add to loss:
# total_loss = data_loss + l2_regularization(weights, 0.01)

# Dropout
class Dropout:
    def __init__(self, drop_rate=0.5):
        self.drop_rate = drop_rate
        self.mask = None

    def forward(self, x, training=True):
        if training:
            self.mask = np.random.binomial(1, 1 - self.drop_rate, size=x.shape)
            return x * self.mask / (1 - self.drop_rate)  # Inverted dropout
        return x

    def backward(self, grad):
        return grad * self.mask / (1 - self.drop_rate)

# Batch Normalization
class BatchNorm:
    def __init__(self, num_features, epsilon=1e-5, momentum=0.1):
        self.gamma = np.ones(num_features)
        self.beta = np.zeros(num_features)
        self.epsilon = epsilon
        self.momentum = momentum
        self.running_mean = np.zeros(num_features)
        self.running_var = np.ones(num_features)

    def forward(self, x, training=True):
        if training:
            mean = np.mean(x, axis=0)
            var = np.var(x, axis=0)

            self.running_mean = (1 - self.momentum) * self.running_mean + self.momentum * mean
            self.running_var = (1 - self.momentum) * self.running_var + self.momentum * var
        else:
            mean = self.running_mean
            var = self.running_var

        x_norm = (x - mean) / np.sqrt(var + self.epsilon)
        return self.gamma * x_norm + self.beta`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building with PyTorch"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import torch
import torch.nn as nn
import torch.optim as optim

class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_sizes, num_classes):
        super().__init__()
        layers = []
        prev_size = input_size

        for hidden_size in hidden_sizes:
            layers.extend([
                nn.Linear(prev_size, hidden_size),
                nn.BatchNorm1d(hidden_size),
                nn.ReLU(),
                nn.Dropout(0.3)
            ])
            prev_size = hidden_size

        layers.append(nn.Linear(prev_size, num_classes))
        self.model = nn.Sequential(*layers)

    def forward(self, x):
        return self.model(x)

# Create model
model = NeuralNet(784, [256, 128, 64], 10)

# Loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(epochs):
    model.train()
    for batch_x, batch_y in train_loader:
        optimizer.zero_grad()
        outputs = model(batch_x)
        loss = criterion(outputs, batch_y)
        loss.backward()
        optimizer.step()

    # Evaluation
    model.eval()
    with torch.no_grad():
        correct = 0
        total = 0
        for batch_x, batch_y in test_loader:
            outputs = model(batch_x)
            _, predicted = torch.max(outputs, 1)
            total += batch_y.size(0)
            correct += (predicted == batch_y).sum().item()

    print(f'Epoch {epoch+1}, Accuracy: {100 * correct / total:.2f}%')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Concepts Summary"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Forward Propagation:"}
                    </strong>
                    {" Input flows through layers to produce output"}
                  </li>
                  <li>
                    <strong>
                      {"Backpropagation:"}
                    </strong>
                    {" Gradients flow backward to update weights"}
                  </li>
                  <li>
                    <strong>
                      {"Activation Functions:"}
                    </strong>
                    {" Add non-linearity (ReLU most common)"}
                  </li>
                  <li>
                    <strong>
                      {"Loss Functions:"}
                    </strong>
                    {" Measure prediction error"}
                  </li>
                  <li>
                    <strong>
                      {"Optimizers:"}
                    </strong>
                    {" Update weights (Adam recommended)"}
                  </li>
                  <li>
                    <strong>
                      {"Regularization:"}
                    </strong>
                    {" Prevent overfitting (Dropout, L2, BatchNorm)"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Deep Learning"}
                </h2>
                <p>
                  {"Our Data Science program covers neural networks from fundamentals to advanced architectures. Build real deep learning projects with expert guidance."}
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
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Advanced architectures and techniques"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/pytorch" className="related-article-card">
                    <h4>
                      {"PyTorch"}
                    </h4>
                    {" "}
                    <p>
                      {"Build neural networks with PyTorch"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/tensorflow-keras" className="related-article-card">
                    <h4>
                      {"TensorFlow & Keras"}
                    </h4>
                    {" "}
                    <p>
                      {"Google's deep learning framework"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Neural Networks."} />
    </>
  );
}
