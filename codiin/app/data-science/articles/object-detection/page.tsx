import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Object Detection: YOLO & Detectron2 Guide",
  description: "Learn Object Detection with YOLO, Detectron2, and bounding boxes - build real-time detection systems for images and video.",
  keywords: ["object detection", "YOLO", "Detectron2", "bounding boxes", "computer vision", "deep learning", "real-time detection"],
  alternates: { canonical: "/data-science/articles/object-detection" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/object-detection",
    title: "Object Detection: Complete Guide to YOLO and Detectron2",
    description: "Master object detection with YOLO, Detectron2, and real-time detection techniques.",
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
  "headline": "Object Detection: Complete Guide to YOLO and Detectron2",
  "description": "Comprehensive guide to building real-time object detection systems with modern frameworks",
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

export default function DataScienceObjectDetectionPage() {
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
                {"Object Detection"}
              </span>
            </div>
            <h1>
              {"Object Detection"}
            </h1>
            <p className="article-subtitle">
              {"Real-Time Detection with YOLO, Detectron2, and Bounding Boxes"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Object Detection?"}
                </h2>
                <p>
                  {"Object detection is a computer vision task that involves identifying and locating objects within images or videos. Unlike image classification (which tells you what's in an image), object detection tells you "}
                  <strong>
                    {"what"}
                  </strong>
                  {" objects are present and "}
                  <strong>
                    {"where"}
                  </strong>
                  {" they are."}
                </p>
                <p>
                  {"For each detected object, the model outputs:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Class label:"}
                    </strong>
                    {" What the object is (e.g., \"person\", \"car\", \"dog\")"}
                  </li>
                  <li>
                    <strong>
                      {"Bounding box:"}
                    </strong>
                    {" Rectangle coordinates (x, y, width, height) around the object"}
                  </li>
                  <li>
                    <strong>
                      {"Confidence score:"}
                    </strong>
                    {" How certain the model is about the detection (0-1)"}
                  </li>
                </ul>
                <p>
                  {"Example: In a street photo, object detection might find 3 people at coordinates (50,100), 2 cars at (200,150), and 1 traffic light at (400,50)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Object Detection Matters"}
                </h2>
                <p>
                  {"Object detection powers critical applications across industries:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Autonomous Vehicles:"}
                    </strong>
                    {" Detect pedestrians, vehicles, traffic signs, lanes"}
                  </li>
                  <li>
                    <strong>
                      {"Surveillance & Security:"}
                    </strong>
                    {" Identify intruders, suspicious activities, abandoned objects"}
                  </li>
                  <li>
                    <strong>
                      {"Retail:"}
                    </strong>
                    {" Track inventory, monitor shelves, analyze customer behavior"}
                  </li>
                  <li>
                    <strong>
                      {"Healthcare:"}
                    </strong>
                    {" Detect tumors in medical scans, count cells, identify abnormalities"}
                  </li>
                  <li>
                    <strong>
                      {"Manufacturing:"}
                    </strong>
                    {" Quality control, defect detection on assembly lines"}
                  </li>
                  <li>
                    <strong>
                      {"Agriculture:"}
                    </strong>
                    {" Crop monitoring, disease detection, yield estimation"}
                  </li>
                  <li>
                    <strong>
                      {"Sports Analytics:"}
                    </strong>
                    {" Player tracking, ball detection, tactical analysis"}
                  </li>
                  <li>
                    <strong>
                      {"Augmented Reality:"}
                    </strong>
                    {" Recognize objects to overlay digital content"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Object Detection"}
                </h2>
                <p>
                  {"Choose object detection when you need to:"}
                </p>
                <ul>
                  <li>
                    {"Find and count multiple objects in an image"}
                  </li>
                  <li>
                    {"Know the precise location of objects (not just their presence)"}
                  </li>
                  <li>
                    {"Process images or video streams in real-time"}
                  </li>
                  <li>
                    {"Track objects across video frames"}
                  </li>
                  <li>
                    {"Build systems that react to objects' positions (robotics, AR)"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Note:"}
                  </strong>
                  {" If you only need to classify whether an object exists (not where), use image classification instead. If you need pixel-perfect boundaries, use instance segmentation."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Evolution of Object Detection"}
                </h2>
                <h3>
                  {"Traditional Methods (Pre-Deep Learning)"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Sliding Windows:"}
                    </strong>
                    {" Move a window across image, classify each patch (very slow)"}
                  </li>
                  <li>
                    <strong>
                      {"HOG + SVM:"}
                    </strong>
                    {" Histogram of Oriented Gradients features with SVM classifier"}
                  </li>
                  <li>
                    <strong>
                      {"DPM:"}
                    </strong>
                    {" Deformable Part Models for detecting object parts"}
                  </li>
                </ul>
                <h3>
                  {"Two-Stage Detectors"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"R-CNN (2014):"}
                    </strong>
                    {" Region proposals + CNN classification (slow but accurate)"}
                  </li>
                  <li>
                    <strong>
                      {"Fast R-CNN (2015):"}
                    </strong>
                    {" Share CNN features across proposals (faster)"}
                  </li>
                  <li>
                    <strong>
                      {"Faster R-CNN (2015):"}
                    </strong>
                    {" Neural network generates proposals (Region Proposal Network)"}
                  </li>
                  <li>
                    <strong>
                      {"Mask R-CNN (2017):"}
                    </strong>
                    {" Adds instance segmentation masks"}
                  </li>
                </ul>
                <h3>
                  {"One-Stage Detectors (Real-Time)"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"YOLO (2016):"}
                    </strong>
                    {" \"You Only Look Once\" - extremely fast, single forward pass"}
                  </li>
                  <li>
                    <strong>
                      {"SSD (2016):"}
                    </strong>
                    {" Single Shot Detector with multiple feature maps"}
                  </li>
                  <li>
                    <strong>
                      {"RetinaNet (2017):"}
                    </strong>
                    {" Focal loss to handle class imbalance"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Understanding Bounding Boxes"}
                </h2>
                <p>
                  {"A bounding box is defined by 4 values:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"x, y:"}
                    </strong>
                    {" Top-left corner coordinates"}
                  </li>
                  <li>
                    <strong>
                      {"w, h:"}
                    </strong>
                    {" Width and height"}
                  </li>
                </ul>
                <p>
                  {"Alternative format: (x_min, y_min, x_max, y_max) - top-left and bottom-right corners."}
                </p>
                <h3>
                  {"IoU (Intersection over Union)"}
                </h3>
                <p>
                  {"IoU measures overlap between predicted and ground truth boxes:"}
                </p>
                <p>
                  <strong>
                    {"IoU = Area of Overlap / Area of Union"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"IoU = 1.0: Perfect match"}
                  </li>
                  <li>
                    {"IoU > 0.5: Usually considered a good detection"}
                  </li>
                  <li>
                    {"IoU < 0.5: Poor detection"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`def calculate_iou(box1, box2):
    """Calculate IoU between two bounding boxes.
    Boxes format: [x, y, width, height]
    """
    # Get coordinates
    x1_min, y1_min = box1[0], box1[1]
    x1_max, y1_max = box1[0] + box1[2], box1[1] + box1[3]
    x2_min, y2_min = box2[0], box2[1]
    x2_max, y2_max = box2[0] + box2[2], box2[1] + box2[3]

    # Calculate intersection
    inter_x_min = max(x1_min, x2_min)
    inter_y_min = max(y1_min, y2_min)
    inter_x_max = min(x1_max, x2_max)
    inter_y_max = min(y1_max, y2_max)

    inter_area = max(0, inter_x_max - inter_x_min) * max(0, inter_y_max - inter_y_min)

    # Calculate union
    box1_area = box1[2] * box1[3]
    box2_area = box2[2] * box2[3]
    union_area = box1_area + box2_area - inter_area

    # Calculate IoU
    iou = inter_area / union_area if union_area > 0 else 0
    return iou`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"YOLO: You Only Look Once"}
                </h2>
                <p>
                  {"YOLO revolutionized object detection by treating it as a regression problem rather than classification. It predicts bounding boxes and class probabilities directly in a single forward pass."}
                </p>
                <h3>
                  {"How YOLO Works"}
                </h3>
                <ol>
                  <li>
                    <strong>
                      {"Divide image into grid:"}
                    </strong>
                    {" E.g., 13x13 grid cells"}
                  </li>
                  <li>
                    <strong>
                      {"Each cell predicts:"}
                    </strong>
                    {" Multiple bounding boxes (usually 2-3) and class probabilities"}
                  </li>
                  <li>
                    <strong>
                      {"For each box:"}
                    </strong>
                    {" Predict x, y, width, height, confidence, and class scores"}
                  </li>
                  <li>
                    <strong>
                      {"Non-Max Suppression:"}
                    </strong>
                    {" Remove duplicate detections"}
                  </li>
                </ol>
                <h3>
                  {"YOLO Versions"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"YOLOv1-v3:"}
                    </strong>
                    {" Original implementations by Joseph Redmon"}
                  </li>
                  <li>
                    <strong>
                      {"YOLOv4:"}
                    </strong>
                    {" Improved accuracy with bag of tricks"}
                  </li>
                  <li>
                    <strong>
                      {"YOLOv5:"}
                    </strong>
                    {" PyTorch implementation, easier to use"}
                  </li>
                  <li>
                    <strong>
                      {"YOLOv7:"}
                    </strong>
                    {" Current state-of-the-art for speed/accuracy"}
                  </li>
                  <li>
                    <strong>
                      {"YOLOv8:"}
                    </strong>
                    {" Latest from Ultralytics, user-friendly API"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Using YOLOv8 with Ultralytics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install
# pip install ultralytics

from ultralytics import YOLO
import cv2
import matplotlib.pyplot as plt

# Load pre-trained model
model = YOLO('yolov8n.pt')  # n=nano, s=small, m=medium, l=large, x=xlarge

# Predict on image
results = model('street_scene.jpg')

# Access results
for result in results:
    boxes = result.boxes  # Bounding boxes
    for box in boxes:
        # Get box coordinates
        x1, y1, x2, y2 = box.xyxy[0]  # Top-left, bottom-right
        confidence = box.conf[0]
        class_id = box.cls[0]
        class_name = model.names[int(class_id)]

        print(f"Detected {class_name} at [{x1:.0f}, {y1:.0f}, {x2:.0f}, {y2:.0f}] "
              f"with confidence {confidence:.2f}")

# Visualize results
annotated = results[0].plot()  # Draw boxes on image
plt.imshow(cv2.cvtColor(annotated, cv2.COLOR_BGR2RGB))
plt.axis('off')
plt.show()

# Save results
results[0].save('output.jpg')`}</code></pre>
                </div>
                <h3>
                  {"Real-Time Video Detection"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import cv2
from ultralytics import YOLO

# Load model
model = YOLO('yolov8n.pt')

# Open video
cap = cv2.VideoCapture(0)  # 0 for webcam, or path to video file

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Run detection
    results = model(frame, verbose=False)

    # Draw results
    annotated_frame = results[0].plot()

    # Display
    cv2.imshow('YOLO Detection', annotated_frame)

    # Press 'q' to quit
    if cv2.waitKey(1) & 0xFF == ord('q'):
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
                  <pre><code>{`from ultralytics import YOLO

# Load a model
model = YOLO('yolov8n.pt')  # Start with pre-trained weights

# Train on custom dataset
# Dataset should be in YOLO format with .yaml config
results = model.train(
    data='custom_dataset.yaml',  # Path to dataset config
    epochs=100,
    imgsz=640,
    batch=16,
    name='custom_detector',
    pretrained=True,
    optimizer='Adam',
    lr0=0.01,
    device=0  # GPU device
)

# Validate
metrics = model.val()
print(f"mAP50: {metrics.box.map50}")
print(f"mAP50-95: {metrics.box.map}")

# Export for deployment
model.export(format='onnx')  # or 'torchscript', 'tflite', etc.`}</code></pre>
                </div>
                <h3>
                  {"Dataset Format (YAML)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# custom_dataset.yaml
path: /path/to/dataset
train: images/train
val: images/val
test: images/test

# Classes
names:
  0: person
  1: car
  2: bicycle
  3: dog`}</code></pre>
                </div>
                <h3>
                  {"Annotation Format"}
                </h3>
                <p>
                  {"Each image needs a corresponding .txt file with one line per object:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# class_id x_center y_center width height (all normalized 0-1)
0 0.5 0.5 0.3 0.4
1 0.2 0.3 0.15 0.2`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Detectron2: Facebook's Detection Framework"}
                </h2>
                <p>
                  {"Detectron2 is a powerful library from Facebook AI Research (FAIR) supporting state-of-the-art detection and segmentation models."}
                </p>
                <h3>
                  {"Key Features"}
                </h3>
                <ul>
                  <li>
                    {"Faster R-CNN, Mask R-CNN, RetinaNet implementations"}
                  </li>
                  <li>
                    {"Instance segmentation support"}
                  </li>
                  <li>
                    {"Panoptic segmentation"}
                  </li>
                  <li>
                    {"Keypoint detection"}
                  </li>
                  <li>
                    {"Highly modular and customizable"}
                  </li>
                </ul>
                <h3>
                  {"Using Detectron2"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Install
# pip install detectron2 -f https://dl.fbaipublicfiles.com/detectron2/wheels/cu118/torch2.0/index.html

import detectron2
from detectron2 import model_zoo
from detectron2.engine import DefaultPredictor
from detectron2.config import get_cfg
from detectron2.utils.visualizer import Visualizer
from detectron2.data import MetadataCatalog
import cv2

# Configure model
cfg = get_cfg()
cfg.merge_from_file(model_zoo.get_config_file(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
))
cfg.MODEL.WEIGHTS = model_zoo.get_checkpoint_url(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
)
cfg.MODEL.ROI_HEADS.SCORE_THRESH_TEST = 0.5  # Confidence threshold
cfg.MODEL.DEVICE = "cuda"  # or "cpu"

# Create predictor
predictor = DefaultPredictor(cfg)

# Run inference
image = cv2.imread("image.jpg")
outputs = predictor(image)

# Access predictions
instances = outputs["instances"]
boxes = instances.pred_boxes  # Bounding boxes
scores = instances.scores      # Confidence scores
classes = instances.pred_classes  # Class IDs

# Visualize
v = Visualizer(
    image[:, :, ::-1],
    MetadataCatalog.get(cfg.DATASETS.TRAIN[0]),
    scale=1.0
)
out = v.draw_instance_predictions(instances.to("cpu"))
cv2.imwrite("output.jpg", out.get_image()[:, :, ::-1])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Training with Detectron2"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from detectron2.data.datasets import register_coco_instances
from detectron2.engine import DefaultTrainer

# Register your dataset (COCO format)
register_coco_instances(
    "my_dataset_train",
    {},
    "path/to/train_annotations.json",
    "path/to/train_images"
)
register_coco_instances(
    "my_dataset_val",
    {},
    "path/to/val_annotations.json",
    "path/to/val_images"
)

# Configure training
cfg = get_cfg()
cfg.merge_from_file(model_zoo.get_config_file(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
))
cfg.DATASETS.TRAIN = ("my_dataset_train",)
cfg.DATASETS.TEST = ("my_dataset_val",)
cfg.DATALOADER.NUM_WORKERS = 2
cfg.MODEL.WEIGHTS = model_zoo.get_checkpoint_url(
    "COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml"
)
cfg.SOLVER.IMS_PER_BATCH = 2
cfg.SOLVER.BASE_LR = 0.00025
cfg.SOLVER.MAX_ITER = 1000
cfg.MODEL.ROI_HEADS.NUM_CLASSES = 4  # Your number of classes

# Train
trainer = DefaultTrainer(cfg)
trainer.resume_or_load(resume=False)
trainer.train()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Non-Maximum Suppression (NMS)"}
                </h2>
                <p>
                  {"NMS removes duplicate detections of the same object by keeping only the highest-confidence box among overlapping detections."}
                </p>
                <h3>
                  {"Algorithm"}
                </h3>
                <ol>
                  <li>
                    {"Sort boxes by confidence score (highest first)"}
                  </li>
                  <li>
                    {"Select box with highest score"}
                  </li>
                  <li>
                    {"Remove all boxes with IoU > threshold (e.g., 0.5) with selected box"}
                  </li>
                  <li>
                    {"Repeat for remaining boxes"}
                  </li>
                </ol>
                <div className="code-block">
                  <pre><code>{`import numpy as np

def non_max_suppression(boxes, scores, iou_threshold=0.5):
    """
    boxes: array of [x, y, width, height]
    scores: confidence scores
    """
    # Sort by score
    order = scores.argsort()[::-1]

    keep = []
    while order.size > 0:
        # Pick highest score box
        i = order[0]
        keep.append(i)

        # Calculate IoU with remaining boxes
        ious = np.array([calculate_iou(boxes[i], boxes[j]) for j in order[1:]])

        # Keep boxes with IoU < threshold
        remaining = np.where(ious < iou_threshold)[0]
        order = order[remaining + 1]

    return keep`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Evaluation Metrics"}
                </h2>
                <h3>
                  {"Precision and Recall"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Precision:"}
                    </strong>
                    {" Of detected objects, how many are correct?"}
                  </li>
                  <li>
                    <strong>
                      {"Recall:"}
                    </strong>
                    {" Of all ground truth objects, how many did we detect?"}
                  </li>
                </ul>
                <h3>
                  {"Average Precision (AP)"}
                </h3>
                <p>
                  {"Area under the Precision-Recall curve for a single class."}
                </p>
                <h3>
                  {"Mean Average Precision (mAP)"}
                </h3>
                <p>
                  {"Average of AP across all classes. Most important metric for object detection."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"mAP@0.5:"}
                    </strong>
                    {" IoU threshold of 0.5 (easier)"}
                  </li>
                  <li>
                    <strong>
                      {"mAP@0.75:"}
                    </strong>
                    {" IoU threshold of 0.75 (stricter)"}
                  </li>
                  <li>
                    <strong>
                      {"mAP@0.5:0.95:"}
                    </strong>
                    {" Average across IoU thresholds 0.5 to 0.95 (COCO metric)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Data Quality:"}
                    </strong>
                    {" Accurate bounding box annotations are crucial"}
                  </li>
                  <li>
                    <strong>
                      {"Data Augmentation:"}
                    </strong>
                    {" Use flipping, rotation, color jittering, mosaic augmentation"}
                  </li>
                  <li>
                    <strong>
                      {"Anchor Boxes:"}
                    </strong>
                    {" Choose anchor sizes based on your object sizes"}
                  </li>
                  <li>
                    <strong>
                      {"Image Size:"}
                    </strong>
                    {" Larger images (640x640) improve accuracy but slow inference"}
                  </li>
                  <li>
                    <strong>
                      {"Batch Size:"}
                    </strong>
                    {" Larger batches stabilize training but need more GPU memory"}
                  </li>
                  <li>
                    <strong>
                      {"Learning Rate:"}
                    </strong>
                    {" Use warmup and decay schedules"}
                  </li>
                  <li>
                    <strong>
                      {"Class Imbalance:"}
                    </strong>
                    {" Address with focal loss or weighted sampling"}
                  </li>
                  <li>
                    <strong>
                      {"Transfer Learning:"}
                    </strong>
                    {" Always start with pre-trained weights (COCO dataset)"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor mAP:"}
                    </strong>
                    {" Track mAP during training, not just loss"}
                  </li>
                  <li>
                    <strong>
                      {"Test Time Augmentation:"}
                    </strong>
                    {" Run inference on flipped/scaled versions for better results"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Comparison: YOLO vs Detectron2"}
                </h2>
                <div className="table-wrap">
                  <table style={{ "width": "100%", "borderCollapse": "collapse", "margin": "20px 0" }}>
                    <thead>
                      <tr style={{ "backgroundColor": "#f8f9fa" }}>
                        <th style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Aspect"}
                        </th>
                        <th style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"YOLO"}
                        </th>
                        <th style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Detectron2"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Speed"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Very fast (real-time)"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Slower (more accurate)"}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Accuracy"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Good"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Excellent"}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Ease of Use"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Very easy"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Moderate"}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Segmentation"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Limited (YOLOv8-seg)"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Excellent (Mask R-CNN)"}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          <strong>
                            {"Best For"}
                          </strong>
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Real-time, embedded"}
                        </td>
                        <td style={{ "padding": "12px", "border": "1px solid #dee2e6" }}>
                          {"Research, high accuracy"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Example: Custom Object Detector"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from ultralytics import YOLO
import cv2
import numpy as np

class ObjectDetector:
    def __init__(self, model_path='yolov8n.pt', conf_threshold=0.5):
        self.model = YOLO(model_path)
        self.conf_threshold = conf_threshold

    def detect(self, image_path):
        """Detect objects in image."""
        results = self.model(image_path, conf=self.conf_threshold)
        return results[0]

    def detect_and_count(self, image_path):
        """Detect and count objects by class."""
        results = self.detect(image_path)
        counts = {}

        for box in results.boxes:
            class_name = self.model.names[int(box.cls[0])]
            counts[class_name] = counts.get(class_name, 0) + 1

        return counts

    def detect_specific_class(self, image_path, target_class):
        """Detect only specific class of objects."""
        results = self.detect(image_path)
        detections = []

        for box in results.boxes:
            class_name = self.model.names[int(box.cls[0])]
            if class_name == target_class:
                x1, y1, x2, y2 = box.xyxy[0]
                confidence = box.conf[0]
                detections.append({
                    'bbox': [int(x1), int(y1), int(x2), int(y2)],
                    'confidence': float(confidence)
                })

        return detections

    def track_video(self, video_path, output_path):
        """Track objects in video."""
        cap = cv2.VideoCapture(video_path)
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        fps = int(cap.get(cv2.CAP_PROP_FPS))

        # Video writer
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            # Detect with tracking
            results = self.model.track(frame, persist=True, conf=self.conf_threshold)
            annotated = results[0].plot()

            out.write(annotated)

        cap.release()
        out.release()

# Usage
detector = ObjectDetector('yolov8n.pt', conf_threshold=0.5)

# Count objects
counts = detector.detect_and_count('street.jpg')
print(f"Object counts: {counts}")

# Detect only people
people = detector.detect_specific_class('crowd.jpg', 'person')
print(f"Found {len(people)} people")

# Track objects in video
detector.track_video('input.mp4', 'output_tracked.mp4')`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Object Detection with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers object detection in depth. Build real-time detection systems, custom detectors, and learn deployment strategies with hands-on projects."}
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
                      {"Computer Vision Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Master CNNs and image processing techniques"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning Essentials"}
                    </h4>
                    {" "}
                    <p>
                      {"Build your neural network foundation"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/pytorch" className="related-article-card">
                    <h4>
                      {"PyTorch for Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Build and train neural networks with PyTorch"}
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
                {"Empowering the next generation of tech professionals through personalized mentorship and hands-on learning."}
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
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
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
                <li>
                  {"Kochi, Kerala"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Object Detection."} />
    </>
  );
}
