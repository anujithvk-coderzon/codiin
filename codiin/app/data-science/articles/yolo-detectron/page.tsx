import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "YOLO & Detectron2: Real-Time Object Detection",
  description: "Master YOLO and Detectron2 for real-time object detection. Learn to build production-ready computer vision systems for detecting objects in images and video.",
  keywords: ["YOLO", "Detectron2", "object detection", "computer vision", "YOLOv8", "real-time detection", "instance segmentation"],
  alternates: { canonical: "/data-science/articles/yolo-detectron" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/yolo-detectron",
    title: "YOLO & Detectron2: Real-Time Object Detection",
    description: "Build production-ready object detection systems.",
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
  "headline": "YOLO & Detectron2: Real-Time Object Detection",
  "description": "Complete guide to object detection frameworks",
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

export default function DataScienceYoloDetectronPage() {
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
                {"YOLO & Detectron2"}
              </span>
            </div>
            <h1>
              {"YOLO & Detectron2"}
            </h1>
            <p className="article-subtitle">
              {"Real-Time Object Detection Frameworks"}
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
                  {"Object Detection Overview"}
                </h2>
                <p>
                  {"Object detection combines classification and localization - identifying what objects are in an image and where they're located. It's essential for autonomous vehicles, surveillance, retail analytics, and more."}
                </p>
                <p>
                  {"YOLO and Detectron2 are the two most popular frameworks for production object detection."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"YOLO: You Only Look Once"}
                </h2>
                <p>
                  {"YOLO revolutionized object detection by treating it as a single regression problem, enabling real-time detection:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Speed:"}
                    </strong>
                    {" Can process 30+ FPS on modern GPUs"}
                  </li>
                  <li>
                    <strong>
                      {"End-to-end:"}
                    </strong>
                    {" Single neural network predicts boxes and classes"}
                  </li>
                  <li>
                    <strong>
                      {"Versions:"}
                    </strong>
                    {" YOLOv5, YOLOv7, YOLOv8 (Ultralytics)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with YOLOv8"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Ultralytics
pip install ultralytics

from ultralytics import YOLO

# Load pretrained model
model = YOLO('yolov8n.pt')  # nano version (fastest)
# Options: yolov8n, yolov8s, yolov8m, yolov8l, yolov8x

# Inference on image
results = model('image.jpg')

# Display results
results[0].show()

# Access predictions
for result in results:
    boxes = result.boxes  # Bounding boxes
    for box in boxes:
        cls = int(box.cls[0])  # Class index
        conf = float(box.conf[0])  # Confidence
        xyxy = box.xyxy[0].tolist()  # Box coordinates
        class_name = model.names[cls]
        print(f"{class_name}: {conf:.2f} at {xyxy}")

# Save results
results[0].save('output.jpg')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Video Detection with YOLO"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from ultralytics import YOLO
import cv2

model = YOLO('yolov8n.pt')

# Process video file
results = model('video.mp4', stream=True)

for result in results:
    frame = result.plot()  # Draw boxes on frame
    cv2.imshow('Detection', frame)
    if cv2.waitKey(1) == ord('q'):
        break

cv2.destroyAllWindows()

# Or process webcam
cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    results = model(frame)
    annotated = results[0].plot()

    cv2.imshow('Webcam Detection', annotated)
    if cv2.waitKey(1) == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Training Custom YOLO Model"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Data structure:
# dataset/
#   train/
#     images/
#     labels/
#   val/
#     images/
#     labels/

# data.yaml
"""
path: ./dataset
train: train/images
val: val/images

names:
  0: cat
  1: dog
  2: bird
"""

from ultralytics import YOLO

# Load base model
model = YOLO('yolov8n.pt')

# Train on custom dataset
results = model.train(
    data='data.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    name='custom_detector'
)

# Validate
metrics = model.val()
print(f"mAP50: {metrics.box.map50}")
print(f"mAP50-95: {metrics.box.map}")

# Export for deployment
model.export(format='onnx')  # Or 'tflite', 'torchscript'`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"YOLO Label Format"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# YOLO uses normalized coordinates
# Each line in label file:
# class_id x_center y_center width height

# Example: label.txt
# 0 0.5 0.5 0.3 0.4
# 1 0.2 0.3 0.1 0.15

# Converting from other formats
def convert_bbox_to_yolo(img_width, img_height, x_min, y_min, x_max, y_max):
    """Convert bounding box to YOLO format."""
    x_center = (x_min + x_max) / 2 / img_width
    y_center = (y_min + y_max) / 2 / img_height
    width = (x_max - x_min) / img_width
    height = (y_max - y_min) / img_height
    return x_center, y_center, width, height

# Labelme to YOLO conversion
import json
import os

def labelme_to_yolo(json_file, class_names):
    with open(json_file) as f:
        data = json.load(f)

    img_width = data['imageWidth']
    img_height = data['imageHeight']

    yolo_labels = []
    for shape in data['shapes']:
        label = shape['label']
        class_id = class_names.index(label)
        points = shape['points']
        x_min = min(p[0] for p in points)
        y_min = min(p[1] for p in points)
        x_max = max(p[0] for p in points)
        y_max = max(p[1] for p in points)

        yolo_bbox = convert_bbox_to_yolo(img_width, img_height, x_min, y_min, x_max, y_max)
        yolo_labels.append(f"{class_id} {' '.join(map(str, yolo_bbox))}")

    return '\\n'.join(yolo_labels)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Detectron2: Facebook's Detection Framework"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Detectron2
pip install detectron2 -f https://dl.fbaipublicfiles.com/detectron2/wheels/cu118/torch2.0/index.html

import detectron2
from detectron2.engine import DefaultPredictor
from detectron2.config import get_cfg
from detectron2 import model_zoo
from detectron2.utils.visualizer import Visualizer
from detectron2.data import MetadataCatalog
import cv2

# Setup configuration
cfg = get_cfg()
cfg.merge_from_file(model_zoo.get_config_file(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
))
cfg.MODEL.ROI_HEADS.SCORE_THRESH_TEST = 0.5
cfg.MODEL.WEIGHTS = model_zoo.get_checkpoint_url(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
)

# Create predictor
predictor = DefaultPredictor(cfg)

# Run inference
image = cv2.imread("image.jpg")
outputs = predictor(image)

# Visualize
v = Visualizer(image[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]))
out = v.draw_instance_predictions(outputs["instances"].to("cpu"))

cv2.imshow("Detection", out.get_image()[:, :, ::-1])
cv2.waitKey(0)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Instance Segmentation with Detectron2"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from detectron2.engine import DefaultPredictor
from detectron2.config import get_cfg
from detectron2 import model_zoo

# Mask R-CNN for instance segmentation
cfg = get_cfg()
cfg.merge_from_file(model_zoo.get_config_file(
    "COCO-InstanceSegmentation/mask_rcnn_R_50_FPN_3x.yaml"
))
cfg.MODEL.ROI_HEADS.SCORE_THRESH_TEST = 0.5
cfg.MODEL.WEIGHTS = model_zoo.get_checkpoint_url(
    "COCO-InstanceSegmentation/mask_rcnn_R_50_FPN_3x.yaml"
)

predictor = DefaultPredictor(cfg)
outputs = predictor(image)

# Access masks
instances = outputs["instances"]
masks = instances.pred_masks  # Boolean masks for each instance
boxes = instances.pred_boxes
classes = instances.pred_classes
scores = instances.scores`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Training Custom Detectron2 Model"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from detectron2.data import DatasetCatalog, MetadataCatalog
from detectron2.engine import DefaultTrainer
from detectron2.config import get_cfg
from detectron2 import model_zoo
import os

# Register custom dataset
def get_custom_dicts(img_dir):
    # Return list of dicts with keys:
    # file_name, height, width, image_id, annotations
    # Each annotation: bbox, bbox_mode, category_id, (segmentation)
    pass

DatasetCatalog.register("custom_train", lambda: get_custom_dicts("train/"))
DatasetCatalog.register("custom_val", lambda: get_custom_dicts("val/"))
MetadataCatalog.get("custom_train").set(thing_classes=["class1", "class2"])

# Configure training
cfg = get_cfg()
cfg.merge_from_file(model_zoo.get_config_file(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
))
cfg.DATASETS.TRAIN = ("custom_train",)
cfg.DATASETS.TEST = ("custom_val",)
cfg.DATALOADER.NUM_WORKERS = 4
cfg.MODEL.WEIGHTS = model_zoo.get_checkpoint_url(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
)
cfg.SOLVER.IMS_PER_BATCH = 4
cfg.SOLVER.BASE_LR = 0.00025
cfg.SOLVER.MAX_ITER = 3000
cfg.MODEL.ROI_HEADS.NUM_CLASSES = 2  # Your number of classes

os.makedirs(cfg.OUTPUT_DIR, exist_ok=True)
trainer = DefaultTrainer(cfg)
trainer.resume_or_load(resume=False)
trainer.train()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"YOLO vs Detectron2"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"YOLO:"}
                    </strong>
                    {" Faster inference, easier to use, better for real-time"}
                  </li>
                  <li>
                    <strong>
                      {"Detectron2:"}
                    </strong>
                    {" More accurate, better for research, more flexible"}
                  </li>
                  <li>
                    <strong>
                      {"Use YOLO:"}
                    </strong>
                    {" When speed matters (edge devices, real-time apps)"}
                  </li>
                  <li>
                    <strong>
                      {"Use Detectron2:"}
                    </strong>
                    {" When accuracy matters (medical imaging, research)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Deployment Tips"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Export YOLO to ONNX for deployment
from ultralytics import YOLO

model = YOLO('best.pt')
model.export(format='onnx', dynamic=True, simplify=True)

# Run with ONNX Runtime
import onnxruntime as ort
import numpy as np
import cv2

session = ort.InferenceSession('best.onnx')

def preprocess(image):
    img = cv2.resize(image, (640, 640))
    img = img.transpose(2, 0, 1)  # HWC to CHW
    img = img.astype(np.float32) / 255.0
    return np.expand_dims(img, axis=0)

def detect(image):
    input_tensor = preprocess(image)
    outputs = session.run(None, {'images': input_tensor})
    return outputs

# TensorRT for maximum speed
# Export: model.export(format='engine')  # Creates TensorRT engine`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Object Detection Systems"}
                </h2>
                <p>
                  {"Our Data Science program covers computer vision and object detection with hands-on projects. Learn to build and deploy real-time detection systems."}
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
                  <Link href="/data-science/articles/computer-vision" className="related-article-card">
                    <h4>
                      {"Computer Vision"}
                    </h4>
                    {" "}
                    <p>
                      {"Fundamentals of image understanding"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/object-detection" className="related-article-card">
                    <h4>
                      {"Object Detection"}
                    </h4>
                    {" "}
                    <p>
                      {"Detection algorithms explained"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/pytorch" className="related-article-card">
                    <h4>
                      {"PyTorch"}
                    </h4>
                    {" "}
                    <p>
                      {"Build deep learning models"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Object Detection."} />
    </>
  );
}
