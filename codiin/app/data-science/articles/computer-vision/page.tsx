import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Computer Vision: Building AI That Sees",
  description: "Learn Computer Vision with Deep Learning - image classification, object detection, CNNs, OpenCV, YOLO, and building vision AI applications.",
  keywords: ["computer vision tutorial", "image classification", "object detection", "CNN", "OpenCV", "YOLO", "deep learning vision"],
  alternates: { canonical: "/data-science/articles/computer-vision" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/computer-vision",
    title: "Computer Vision: Building AI That Sees",
    description: "Master computer vision with CNNs, object detection, and modern deep learning techniques.",
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
  "headline": "Computer Vision: Building AI That Sees",
  "description": "Complete guide to computer vision and deep learning",
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

export default function DataScienceComputerVisionPage() {
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
                {"Computer Vision"}
              </span>
            </div>
            <h1>
              {"Computer Vision"}
            </h1>
            <p className="article-subtitle">
              {"Building AI Systems That See and Understand Images"}
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
                  {"What is Computer Vision?"}
                </h2>
                <p>
                  {"Computer Vision is the field of AI that enables machines to interpret and understand visual information from the world - images, videos, and real-time camera feeds. It powers autonomous vehicles, medical imaging, facial recognition, and countless other applications."}
                </p>
                <p>
                  {"Deep learning, particularly Convolutional Neural Networks (CNNs), has revolutionized computer vision, achieving superhuman performance on many tasks."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Computer Vision Tasks"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Image Classification:"}
                    </strong>
                    {" Assign a label to an entire image (cat, dog, car)"}
                  </li>
                  <li>
                    <strong>
                      {"Object Detection:"}
                    </strong>
                    {" Locate and classify multiple objects with bounding boxes"}
                  </li>
                  <li>
                    <strong>
                      {"Semantic Segmentation:"}
                    </strong>
                    {" Classify every pixel in the image"}
                  </li>
                  <li>
                    <strong>
                      {"Instance Segmentation:"}
                    </strong>
                    {" Identify individual object instances"}
                  </li>
                  <li>
                    <strong>
                      {"Pose Estimation:"}
                    </strong>
                    {" Detect human body keypoints"}
                  </li>
                  <li>
                    <strong>
                      {"Face Recognition:"}
                    </strong>
                    {" Identify or verify individuals"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Image Processing with OpenCV"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import cv2
import numpy as np

# Read image
img = cv2.imread('image.jpg')
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Resize
resized = cv2.resize(img, (224, 224))

# Grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Blur
blurred = cv2.GaussianBlur(img, (5, 5), 0)

# Edge detection
edges = cv2.Canny(gray, 100, 200)

# Draw on images
cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)
cv2.putText(img, 'Label', (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

# Save
cv2.imwrite('output.jpg', img)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Image Classification with PyTorch"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import torch
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image

# Load pretrained model
model = models.resnet50(pretrained=True)
model.eval()

# Image preprocessing
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

# Load and process image
img = Image.open('cat.jpg')
img_tensor = transform(img).unsqueeze(0)

# Predict
with torch.no_grad():
    outputs = model(img_tensor)
    _, predicted = torch.max(outputs, 1)

# Get class name
print(f"Predicted class: {predicted.item()}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Transfer Learning"}
                </h2>
                <p>
                  {"Use pretrained models and fine-tune for your specific task:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import torch.nn as nn
import torchvision.models as models

# Load pretrained ResNet
model = models.resnet50(pretrained=True)

# Freeze all layers
for param in model.parameters():
    param.requires_grad = False

# Replace final layer for your number of classes
num_classes = 5
model.fc = nn.Sequential(
    nn.Linear(model.fc.in_features, 256),
    nn.ReLU(),
    nn.Dropout(0.4),
    nn.Linear(256, num_classes)
)

# Only train new layers
optimizer = torch.optim.Adam(model.fc.parameters(), lr=0.001)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Object Detection with YOLO"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from ultralytics import YOLO

# Load pretrained YOLOv8
model = YOLO('yolov8n.pt')  # nano model for speed

# Run inference
results = model('image.jpg')

# Process results
for result in results:
    boxes = result.boxes
    for box in boxes:
        # Bounding box coordinates
        x1, y1, x2, y2 = box.xyxy[0]
        # Confidence score
        confidence = box.conf[0]
        # Class ID
        class_id = box.cls[0]
        class_name = model.names[int(class_id)]

        print(f"{class_name}: {confidence:.2f}")

# Save annotated image
results[0].save('detected.jpg')

# Real-time detection from webcam
results = model(source=0, show=True)  # webcam`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Augmentation"}
                </h2>
                <p>
                  {"Artificially expand your training data:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from torchvision import transforms

train_transform = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.RandomRotation(15),
    transforms.ColorJitter(
        brightness=0.2, contrast=0.2,
        saturation=0.2, hue=0.1
    ),
    transforms.RandomAffine(degrees=0, translate=(0.1, 0.1)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# For more advanced augmentations
import albumentations as A

transform = A.Compose([
    A.RandomCrop(224, 224),
    A.HorizontalFlip(p=0.5),
    A.RandomBrightnessContrast(p=0.2),
    A.GaussNoise(p=0.1),
    A.Normalize(),
])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start with pretrained models:"}
                    </strong>
                    {" ImageNet pretrained weights transfer well"}
                  </li>
                  <li>
                    <strong>
                      {"Augment your data:"}
                    </strong>
                    {" Prevents overfitting, improves generalization"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate image sizes:"}
                    </strong>
                    {" Balance between detail and memory"}
                  </li>
                  <li>
                    <strong>
                      {"Normalize inputs:"}
                    </strong>
                    {" Match the normalization used in pretraining"}
                  </li>
                  <li>
                    <strong>
                      {"Handle class imbalance:"}
                    </strong>
                    {" Use weighted loss or oversampling"}
                  </li>
                  <li>
                    <strong>
                      {"Visualize predictions:"}
                    </strong>
                    {" Grad-CAM shows what the model focuses on"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Computer Vision with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers computer vision from basics to advanced object detection. Build real vision AI projects with guidance from industry experts."}
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
                      {"Neural network foundations"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/pytorch" className="related-article-card">
                    <h4>
                      {"PyTorch Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Build deep learning models"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/nlp-transformers" className="related-article-card">
                    <h4>
                      {"NLP with Transformers"}
                    </h4>
                    {" "}
                    <p>
                      {"Language AI applications"}
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
                {"Empowering the next generation of tech professionals."}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Computer Vision."} />
    </>
  );
}
