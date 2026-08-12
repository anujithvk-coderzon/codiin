import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Deep Learning: Neural Networks from Scratch to Production",
  description: "Learn Deep Learning fundamentals - neural networks, backpropagation, CNNs, RNNs, and how to build models with TensorFlow and PyTorch.",
  keywords: ["deep learning tutorial", "neural networks", "CNN", "RNN", "TensorFlow", "PyTorch", "backpropagation", "AI"],
  alternates: { canonical: "/data-science/articles/deep-learning" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/deep-learning",
    title: "Deep Learning: Neural Networks from Scratch to Production",
    description: "Master deep learning - from neural network basics to building production models.",
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
  "headline": "Deep Learning: Neural Networks from Scratch to Production",
  "description": "Comprehensive guide to deep learning and neural networks",
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

export default function DataScienceDeepLearningPage() {
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
                {"Deep Learning"}
              </span>
            </div>
            <h1>
              {"Deep Learning Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"Neural Networks from Scratch to Production"}
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
                  {"What is Deep Learning?"}
                </h2>
                <p>
                  {"Deep Learning is a subset of machine learning that uses artificial neural networks with multiple layers (hence \"deep\") to learn complex patterns from data. These networks are inspired by the structure of the human brain and have revolutionized AI in the past decade."}
                </p>
                <p>
                  {"Deep learning powers breakthrough applications like image recognition, natural language processing, speech recognition, and autonomous vehicles. It excels when you have large amounts of data and computational resources."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Neural Network Basics"}
                </h2>
                <h3>
                  {"The Perceptron"}
                </h3>
                <p>
                  {"The simplest neural network is a single perceptron - it takes inputs, multiplies them by weights, adds a bias, and passes through an activation function:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Simple perceptron
output = activation(sum(inputs * weights) + bias)

# Example with numpy
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

inputs = np.array([0.5, 0.3, 0.2])
weights = np.array([0.4, 0.6, 0.8])
bias = 0.1

output = sigmoid(np.dot(inputs, weights) + bias)`}</code></pre>
                </div>
                <h3>
                  {"Layers and Architecture"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Input Layer:"}
                    </strong>
                    {" Receives the raw data"}
                  </li>
                  <li>
                    <strong>
                      {"Hidden Layers:"}
                    </strong>
                    {" Learn intermediate representations"}
                  </li>
                  <li>
                    <strong>
                      {"Output Layer:"}
                    </strong>
                    {" Produces final predictions"}
                  </li>
                </ul>
                <p>
                  {"The \"depth\" in deep learning refers to having many hidden layers, allowing the network to learn hierarchical features."}
                </p>
                <h3>
                  {"Activation Functions"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"ReLU:"}
                    </strong>
                    {" f(x) = max(0, x) - Most popular, helps with vanishing gradients"}
                  </li>
                  <li>
                    <strong>
                      {"Sigmoid:"}
                    </strong>
                    {" Squashes to 0-1, used for binary classification output"}
                  </li>
                  <li>
                    <strong>
                      {"Softmax:"}
                    </strong>
                    {" Outputs probability distribution for multi-class"}
                  </li>
                  <li>
                    <strong>
                      {"Tanh:"}
                    </strong>
                    {" Squashes to -1 to 1, centered at zero"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"How Neural Networks Learn"}
                </h2>
                <h3>
                  {"Forward Propagation"}
                </h3>
                <p>
                  {"Data flows through the network layer by layer, each applying weights, biases, and activations until producing an output."}
                </p>
                <h3>
                  {"Loss Functions"}
                </h3>
                <p>
                  {"Measure how wrong the predictions are:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"MSE:"}
                    </strong>
                    {" For regression tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Cross-Entropy:"}
                    </strong>
                    {" For classification tasks"}
                  </li>
                </ul>
                <h3>
                  {"Backpropagation"}
                </h3>
                <p>
                  {"The algorithm that makes learning possible. It calculates gradients of the loss with respect to each weight using the chain rule, then updates weights to minimize loss."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Gradient descent update rule
weight_new = weight_old - learning_rate * gradient`}</code></pre>
                </div>
                <h3>
                  {"Optimizers"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"SGD:"}
                    </strong>
                    {" Simple, stochastic gradient descent"}
                  </li>
                  <li>
                    <strong>
                      {"Adam:"}
                    </strong>
                    {" Adaptive learning rates, most popular choice"}
                  </li>
                  <li>
                    <strong>
                      {"RMSprop:"}
                    </strong>
                    {" Good for recurrent networks"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Types of Neural Networks"}
                </h2>
                <h3>
                  {"Feedforward Networks (MLPs)"}
                </h3>
                <p>
                  {"Information flows in one direction. Good for tabular data and simple tasks."}
                </p>
                <h3>
                  {"Convolutional Neural Networks (CNNs)"}
                </h3>
                <p>
                  {"Designed for image data. Use convolution layers to detect spatial patterns like edges, textures, and objects."}
                </p>
                <div className="code-block">
                  <pre><code>{`import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3)
        self.fc = nn.Linear(64 * 6 * 6, 10)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 64 * 6 * 6)
        return self.fc(x)`}</code></pre>
                </div>
                <h3>
                  {"Recurrent Neural Networks (RNNs)"}
                </h3>
                <p>
                  {"Process sequential data by maintaining hidden state. Variants include LSTM and GRU which handle long-term dependencies better."}
                </p>
                <h3>
                  {"Transformers"}
                </h3>
                <p>
                  {"The architecture behind modern NLP breakthroughs like GPT and BERT. Use attention mechanisms to process entire sequences in parallel."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Building with PyTorch"}
                </h2>
                <p>
                  {"PyTorch is the most popular framework for deep learning research and increasingly for production:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import torch
import torch.nn as nn
import torch.optim as optim

# Define model
model = nn.Sequential(
    nn.Linear(784, 256),
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(256, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

# Loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(10):
    for inputs, labels in train_loader:
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
    print(f"Epoch {epoch+1}, Loss: {loss.item():.4f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start Simple:"}
                    </strong>
                    {" Begin with small networks and add complexity as needed"}
                  </li>
                  <li>
                    <strong>
                      {"Use Pretrained Models:"}
                    </strong>
                    {" Transfer learning saves time and data"}
                  </li>
                  <li>
                    <strong>
                      {"Regularization:"}
                    </strong>
                    {" Dropout, weight decay, and batch normalization prevent overfitting"}
                  </li>
                  <li>
                    <strong>
                      {"Data Augmentation:"}
                    </strong>
                    {" Artificially expand training data for images"}
                  </li>
                  <li>
                    <strong>
                      {"Learning Rate Scheduling:"}
                    </strong>
                    {" Decrease learning rate as training progresses"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor Training:"}
                    </strong>
                    {" Use TensorBoard or Weights & Biases"}
                  </li>
                  <li>
                    <strong>
                      {"GPU Acceleration:"}
                    </strong>
                    {" Essential for training deep networks efficiently"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Deep Learning with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers deep learning from neural network basics to advanced architectures. Build real computer vision and NLP projects with guidance from industry experts."}
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
                  <Link href="/data-science/articles/pytorch" className="related-article-card">
                    <h4>
                      {"PyTorch: The Researcher's Deep Learning Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Master PyTorch for building neural networks"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/computer-vision" className="related-article-card">
                    <h4>
                      {"Computer Vision with Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Build systems that see and understand images"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/nlp-transformers" className="related-article-card">
                    <h4>
                      {"NLP with Transformers"}
                    </h4>
                    {" "}
                    <p>
                      {"Master modern natural language processing"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Deep Learning."} />
    </>
  );
}
