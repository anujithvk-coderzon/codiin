import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "PyTorch: The Researcher's Deep Learning Framework",
  description: "Learn PyTorch - the dynamic deep learning framework favored by researchers. Build neural networks, train models, and deploy AI applications.",
  keywords: ["PyTorch tutorial", "deep learning framework", "neural networks", "tensors", "autograd", "torchvision", "PyTorch Python"],
  alternates: { canonical: "/data-science/articles/pytorch" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/pytorch",
    title: "PyTorch: The Researcher's Deep Learning Framework",
    description: "Master PyTorch for building and training neural networks.",
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
  "headline": "PyTorch: The Researcher's Deep Learning Framework",
  "description": "Complete guide to PyTorch for deep learning",
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

export default function DataSciencePytorchPage() {
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
                {"PyTorch"}
              </span>
            </div>
            <h1>
              {"PyTorch"}
            </h1>
            <p className="article-subtitle">
              {"The Researcher's Deep Learning Framework"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is PyTorch?"}
                </h2>
                <p>
                  {"PyTorch is an open-source deep learning framework developed by Meta AI (formerly Facebook). Known for its intuitive, Pythonic interface and dynamic computation graphs, PyTorch has become the go-to framework for AI research and is rapidly gaining ground in production deployments."}
                </p>
                <p>
                  {"If you read recent AI research papers, you'll find most are implemented in PyTorch. Its flexibility makes it perfect for experimenting with new architectures and ideas."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Choose PyTorch?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Dynamic Computation Graphs:"}
                    </strong>
                    {" Build and modify networks on-the-fly"}
                  </li>
                  <li>
                    <strong>
                      {"Pythonic:"}
                    </strong>
                    {" Feels like native Python, easy debugging"}
                  </li>
                  <li>
                    <strong>
                      {"Research Favorite:"}
                    </strong>
                    {" Most papers use PyTorch"}
                  </li>
                  <li>
                    <strong>
                      {"Strong Community:"}
                    </strong>
                    {" Extensive tutorials and pretrained models"}
                  </li>
                  <li>
                    <strong>
                      {"Production Ready:"}
                    </strong>
                    {" TorchServe, ONNX export, mobile deployment"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Tensors: The Foundation"}
                </h2>
                <p>
                  {"Tensors are multi-dimensional arrays, similar to NumPy arrays but with GPU support:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import torch

# Create tensors
x = torch.tensor([1, 2, 3])
zeros = torch.zeros(3, 4)
ones = torch.ones(2, 3)
random = torch.randn(2, 3)  # Normal distribution

# Convert from NumPy
import numpy as np
np_array = np.array([1, 2, 3])
tensor = torch.from_numpy(np_array)

# Move to GPU
if torch.cuda.is_available():
    x_gpu = x.to('cuda')
    # Or x.cuda()

# Tensor operations
y = torch.tensor([4, 5, 6])
print(x + y)          # Element-wise addition
print(x * y)          # Element-wise multiplication
print(torch.dot(x, y)) # Dot product
print(x.shape)        # Tensor shape`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Autograd: Automatic Differentiation"}
                </h2>
                <p>
                  {"PyTorch automatically computes gradients for backpropagation:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import torch

# Create tensor with gradient tracking
x = torch.tensor([2.0, 3.0], requires_grad=True)

# Forward pass
y = x ** 2
z = y.sum()

# Backward pass (compute gradients)
z.backward()

# Gradients
print(x.grad)  # tensor([4., 6.]) - derivative of x^2 is 2x

# In training loops
with torch.no_grad():  # Disable gradient tracking
    # Inference code here
    pass`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building Neural Networks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import torch
import torch.nn as nn
import torch.nn.functional as F

class NeuralNetwork(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super().__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.bn1 = nn.BatchNorm1d(hidden_size)
        self.dropout = nn.Dropout(0.2)
        self.fc2 = nn.Linear(hidden_size, hidden_size)
        self.fc3 = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        x = F.relu(self.bn1(self.fc1(x)))
        x = self.dropout(x)
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x

# Create model
model = NeuralNetwork(784, 256, 10)
print(model)

# Move to GPU
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = model.to(device)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Training Loop"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset

# Prepare data
train_dataset = TensorDataset(X_train, y_train)
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)

# Loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
num_epochs = 10
for epoch in range(num_epochs):
    model.train()
    total_loss = 0

    for batch_X, batch_y in train_loader:
        batch_X, batch_y = batch_X.to(device), batch_y.to(device)

        # Forward pass
        outputs = model(batch_X)
        loss = criterion(outputs, batch_y)

        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

    avg_loss = total_loss / len(train_loader)
    print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {avg_loss:.4f}')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Convolutional Neural Networks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`class CNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(128 * 4 * 4, 512)
        self.fc2 = nn.Linear(512, num_classes)
        self.dropout = nn.Dropout(0.5)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))  # 32x32 -> 16x16
        x = self.pool(F.relu(self.conv2(x)))  # 16x16 -> 8x8
        x = self.pool(F.relu(self.conv3(x)))  # 8x8 -> 4x4
        x = x.view(-1, 128 * 4 * 4)  # Flatten
        x = self.dropout(F.relu(self.fc1(x)))
        x = self.fc2(x)
        return x`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Transfer Learning"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import torchvision.models as models

# Load pretrained model
model = models.resnet50(pretrained=True)

# Freeze pretrained layers
for param in model.parameters():
    param.requires_grad = False

# Replace final layer for your task
num_classes = 5
model.fc = nn.Linear(model.fc.in_features, num_classes)

# Only train the new layer
optimizer = optim.Adam(model.fc.parameters(), lr=0.001)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Saving and Loading Models"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Save model
torch.save(model.state_dict(), 'model.pth')

# Load model
model = NeuralNetwork(784, 256, 10)
model.load_state_dict(torch.load('model.pth'))
model.eval()  # Set to evaluation mode

# Save complete checkpoint
checkpoint = {
    'epoch': epoch,
    'model_state_dict': model.state_dict(),
    'optimizer_state_dict': optimizer.state_dict(),
    'loss': loss
}
torch.save(checkpoint, 'checkpoint.pth')`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master PyTorch with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers PyTorch from basics to advanced architectures. Build real deep learning projects with guidance from industry experts."}
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
                      {"Deep Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Understand neural network concepts"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/computer-vision" className="related-article-card">
                    <h4>
                      {"Computer Vision with Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Build image classification and detection systems"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/nlp-transformers" className="related-article-card">
                    <h4>
                      {"NLP with Transformers"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern natural language processing"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn PyTorch."} />
    </>
  );
}
