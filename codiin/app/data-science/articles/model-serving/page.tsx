import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Model Serving: Deploy ML Models to Production",
  description: "Learn Model Serving patterns and techniques. Deploy ML models with FastAPI, Flask, TensorFlow Serving, and Triton for production use.",
  keywords: ["model serving", "ML deployment", "FastAPI", "Flask", "TensorFlow Serving", "Triton", "REST API", "gRPC"],
  alternates: { canonical: "/data-science/articles/model-serving" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/model-serving",
    title: "Model Serving: Deploy ML Models to Production",
    description: "Learn patterns and tools for serving ML models.",
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
  "headline": "Model Serving: Deploy ML Models to Production",
  "description": "Complete guide to ML model serving",
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

export default function DataScienceModelServingPage() {
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
                {"Model Serving"}
              </span>
            </div>
            <h1>
              {"Model Serving"}
            </h1>
            <p className="article-subtitle">
              {"Deploy ML Models to Production"}
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
                  {"Model Serving Patterns"}
                </h2>
                <p>
                  {"Model serving is about making your trained ML models available for predictions. There are several patterns depending on your requirements:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"REST API:"}
                    </strong>
                    {" HTTP endpoints for synchronous predictions"}
                  </li>
                  <li>
                    <strong>
                      {"Batch Processing:"}
                    </strong>
                    {" Process large datasets offline"}
                  </li>
                  <li>
                    <strong>
                      {"Streaming:"}
                    </strong>
                    {" Real-time predictions on data streams"}
                  </li>
                  <li>
                    <strong>
                      {"Edge Deployment:"}
                    </strong>
                    {" Run models on devices"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Flask Model Server"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load model at startup
model = joblib.load('model.pkl')

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = np.array(data['features']).reshape(1, -1)

        prediction = model.predict(features)
        probability = model.predict_proba(features)

        return jsonify({
            'prediction': int(prediction[0]),
            'probability': probability[0].tolist()
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

# Production: use Gunicorn
# gunicorn -w 4 -b 0.0.0.0:5000 app:app`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FastAPI Model Server"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import joblib
import numpy as np

app = FastAPI(title="ML Model API")

model = joblib.load('model.pkl')

class PredictionRequest(BaseModel):
    features: List[float]

class PredictionResponse(BaseModel):
    prediction: int
    probability: List[float]

@app.post('/predict', response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    features = np.array(request.features).reshape(1, -1)
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0].tolist()

    return PredictionResponse(
        prediction=int(prediction),
        probability=probability
    )

# Run: uvicorn app:app --host 0.0.0.0 --port 8000`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"TensorFlow Serving"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Save model in SavedModel format
import tensorflow as tf

model.save('models/my_model/1/')  # Version 1

# Directory structure:
# models/
#   my_model/
#     1/
#       saved_model.pb
#       variables/

# Run TensorFlow Serving with Docker
docker run -p 8501:8501 \\
    -v "$(pwd)/models:/models" \\
    -e MODEL_NAME=my_model \\
    tensorflow/serving

# REST API prediction
import requests
import json

data = {"instances": [[1.0, 2.0, 3.0, 4.0]]}
response = requests.post(
    'http://localhost:8501/v1/models/my_model:predict',
    json=data
)
predictions = response.json()['predictions']

# gRPC client (faster)
import grpc
from tensorflow_serving.apis import predict_pb2, prediction_service_pb2_grpc

channel = grpc.insecure_channel('localhost:8500')
stub = prediction_service_pb2_grpc.PredictionServiceStub(channel)

request = predict_pb2.PredictRequest()
request.model_spec.name = 'my_model'
request.inputs['input'].CopyFrom(tf.make_tensor_proto(data))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"NVIDIA Triton Inference Server"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Model repository structure
model_repository/
  my_model/
    config.pbtxt
    1/
      model.onnx

# config.pbtxt
name: "my_model"
platform: "onnxruntime_onnx"
max_batch_size: 8
input [
  {
    name: "input"
    data_type: TYPE_FP32
    dims: [ 4 ]
  }
]
output [
  {
    name: "output"
    data_type: TYPE_FP32
    dims: [ 3 ]
  }
]

# Run Triton
docker run --gpus=all -p 8000:8000 -p 8001:8001 -p 8002:8002 \\
    -v $(pwd)/model_repository:/models \\
    nvcr.io/nvidia/tritonserver:23.10-py3 \\
    tritonserver --model-repository=/models

# Python client
import tritonclient.http as httpclient

client = httpclient.InferenceServerClient(url="localhost:8000")

inputs = [httpclient.InferInput("input", [1, 4], "FP32")]
inputs[0].set_data_from_numpy(np.array([[1.0, 2.0, 3.0, 4.0]], dtype=np.float32))

outputs = [httpclient.InferRequestedOutput("output")]
result = client.infer("my_model", inputs, outputs=outputs)
predictions = result.as_numpy("output")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Batch Prediction"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import joblib
from pathlib import Path

def batch_predict(input_path, output_path, model_path):
    """Run batch predictions on a CSV file."""
    # Load model
    model = joblib.load(model_path)

    # Load data
    df = pd.read_csv(input_path)

    # Preprocess
    features = df[['feature1', 'feature2', 'feature3']]

    # Predict
    predictions = model.predict(features)
    probabilities = model.predict_proba(features)

    # Add predictions to dataframe
    df['prediction'] = predictions
    df['probability'] = probabilities.max(axis=1)

    # Save results
    df.to_csv(output_path, index=False)
    print(f"Predictions saved to {output_path}")

# Using Apache Spark for large-scale batch
from pyspark.sql import SparkSession
from pyspark.ml import PipelineModel

spark = SparkSession.builder.appName("BatchPrediction").getOrCreate()
model = PipelineModel.load("spark_model")
df = spark.read.parquet("input_data")
predictions = model.transform(df)
predictions.write.parquet("predictions")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Caching and Optimization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from functools import lru_cache
import hashlib
import redis
import json

# In-memory caching with LRU
@lru_cache(maxsize=1000)
def predict_cached(features_tuple):
    features = np.array(features_tuple).reshape(1, -1)
    return model.predict(features)[0]

# Redis caching for distributed systems
redis_client = redis.Redis(host='localhost', port=6379)

def predict_with_redis_cache(features):
    # Create cache key
    key = hashlib.md5(str(features).encode()).hexdigest()

    # Check cache
    cached = redis_client.get(key)
    if cached:
        return json.loads(cached)

    # Compute prediction
    prediction = model.predict(np.array(features).reshape(1, -1))
    result = {'prediction': int(prediction[0])}

    # Store in cache (expire in 1 hour)
    redis_client.setex(key, 3600, json.dumps(result))

    return result

# Model optimization with ONNX
import onnx
from skl2onnx import convert_sklearn

# Convert to ONNX
onnx_model = convert_sklearn(model, initial_types=[('input', FloatTensorType([None, 4]))])
onnx.save_model(onnx_model, 'model.onnx')

# Run with ONNX Runtime (faster inference)
import onnxruntime as ort

session = ort.InferenceSession('model.onnx')
result = session.run(None, {'input': features.astype(np.float32)})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"A/B Testing Models"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import random

class ABTestingServer:
    def __init__(self):
        self.models = {
            'control': joblib.load('model_v1.pkl'),
            'treatment': joblib.load('model_v2.pkl')
        }
        self.traffic_split = {'control': 0.5, 'treatment': 0.5}

    def get_model(self, user_id):
        """Deterministic assignment based on user_id."""
        hash_value = hash(user_id) % 100
        if hash_value < self.traffic_split['control'] * 100:
            return 'control', self.models['control']
        return 'treatment', self.models['treatment']

    def predict(self, user_id, features):
        model_name, model = self.get_model(user_id)
        prediction = model.predict(features)

        # Log for analysis
        self.log_prediction(user_id, model_name, prediction)

        return {
            'prediction': prediction,
            'model_version': model_name
        }

# Usage in FastAPI
ab_server = ABTestingServer()

@app.post('/predict')
async def predict(request: PredictionRequest, user_id: str):
    return ab_server.predict(user_id, request.features)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deployment Checklist"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Health endpoints:"}
                    </strong>
                    {" /health, /ready endpoints"}
                  </li>
                  <li>
                    <strong>
                      {"Logging:"}
                    </strong>
                    {" Log predictions, latencies, errors"}
                  </li>
                  <li>
                    <strong>
                      {"Monitoring:"}
                    </strong>
                    {" Track latency, throughput, errors"}
                  </li>
                  <li>
                    <strong>
                      {"Rate limiting:"}
                    </strong>
                    {" Protect against abuse"}
                  </li>
                  <li>
                    <strong>
                      {"Authentication:"}
                    </strong>
                    {" Secure your endpoints"}
                  </li>
                  <li>
                    <strong>
                      {"Versioning:"}
                    </strong>
                    {" API versioning (v1/predict)"}
                  </li>
                  <li>
                    <strong>
                      {"Documentation:"}
                    </strong>
                    {" OpenAPI/Swagger docs"}
                  </li>
                  <li>
                    <strong>
                      {"Graceful shutdown:"}
                    </strong>
                    {" Handle SIGTERM properly"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Deploy Models Like a Pro"}
                </h2>
                <p>
                  {"Our Data Science program covers model serving, MLOps, and production deployment. Build scalable ML systems."}
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
                  <Link href="/data-science/articles/fastapi" className="related-article-card">
                    <h4>
                      {"FastAPI"}
                    </h4>
                    {" "}
                    <p>
                      {"Build high-performance ML APIs"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/docker-ml" className="related-article-card">
                    <h4>
                      {"Docker for ML"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize your models"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/model-monitoring" className="related-article-card">
                    <h4>
                      {"Model Monitoring"}
                    </h4>
                    {" "}
                    <p>
                      {"Monitor models in production"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Model Serving."} />
    </>
  );
}
