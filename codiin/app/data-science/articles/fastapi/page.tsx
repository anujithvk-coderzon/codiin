import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "FastAPI: Modern Python API Framework",
  description: "Master FastAPI for deploying ML models. Learn to build high-performance REST APIs with automatic documentation and async support.",
  keywords: ["FastAPI", "REST API", "Python API", "ML deployment", "model serving", "async Python", "Pydantic"],
  alternates: { canonical: "/data-science/articles/fastapi" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/fastapi",
    title: "FastAPI: Modern Python API Framework",
    description: "Build and deploy ML models as high-performance APIs.",
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
  "headline": "FastAPI: Modern Python API Framework",
  "description": "Complete guide to FastAPI for ML deployment",
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

export default function DataScienceFastapiPage() {
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
                {"FastAPI"}
              </span>
            </div>
            <h1>
              {"FastAPI"}
            </h1>
            <p className="article-subtitle">
              {"Modern Python API Framework for ML Deployment"}
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
                  {"Why FastAPI?"}
                </h2>
                <p>
                  {"FastAPI has become the go-to framework for deploying ML models as APIs. It offers high performance (on par with NodeJS and Go), automatic API documentation, and built-in data validation."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Fast:"}
                    </strong>
                    {" One of the fastest Python frameworks available"}
                  </li>
                  <li>
                    <strong>
                      {"Modern:"}
                    </strong>
                    {" Uses Python type hints for validation"}
                  </li>
                  <li>
                    <strong>
                      {"Auto-docs:"}
                    </strong>
                    {" Swagger UI and ReDoc out of the box"}
                  </li>
                  <li>
                    <strong>
                      {"Async:"}
                    </strong>
                    {" Native async/await support"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install FastAPI
pip install fastapi uvicorn

# main.py
from fastapi import FastAPI

app = FastAPI(
    title="ML Model API",
    description="API for ML predictions",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Welcome to ML API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Run with: uvicorn main:app --reload
# Docs at: http://localhost:8000/docs`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Request/Response Models with Pydantic"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import List, Optional

app = FastAPI()

# Request model
class PredictionRequest(BaseModel):
    features: List[float] = Field(..., min_items=1, description="Input features")
    model_version: Optional[str] = "v1"

    class Config:
        schema_extra = {
            "example": {
                "features": [5.1, 3.5, 1.4, 0.2],
                "model_version": "v1"
            }
        }

# Response model
class PredictionResponse(BaseModel):
    prediction: int
    probability: float
    class_name: str

@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    # Your model inference here
    prediction = 0
    probability = 0.95
    class_name = "setosa"

    return PredictionResponse(
        prediction=prediction,
        probability=probability,
        class_name=class_name
    )`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deploying a Scikit-learn Model"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
from typing import List

app = FastAPI()

# Load model at startup
model = None

@app.on_event("startup")
def load_model():
    global model
    model = joblib.load("model.joblib")
    print("Model loaded successfully")

class Features(BaseModel):
    data: List[List[float]]

class Prediction(BaseModel):
    predictions: List[int]
    probabilities: List[List[float]]

@app.post("/predict", response_model=Prediction)
def predict(features: Features):
    try:
        X = np.array(features.data)
        predictions = model.predict(X).tolist()
        probabilities = model.predict_proba(X).tolist()

        return Prediction(
            predictions=predictions,
            probabilities=probabilities
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/model-info")
def model_info():
    return {
        "model_type": type(model).__name__,
        "n_features": model.n_features_in_,
        "classes": model.classes_.tolist()
    }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deploying a PyTorch Model"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, File, UploadFile
from PIL import Image
import torch
import torchvision.transforms as transforms
import io

app = FastAPI()

# Load model
model = torch.load("model.pth", map_location="cpu")
model.eval()

# Image preprocessing
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

class_names = ["cat", "dog", "bird"]

@app.post("/predict/image")
async def predict_image(file: UploadFile = File(...)):
    # Read and preprocess image
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    input_tensor = transform(image).unsqueeze(0)

    # Inference
    with torch.no_grad():
        outputs = model(input_tensor)
        probabilities = torch.softmax(outputs, dim=1)
        predicted_idx = torch.argmax(probabilities, dim=1).item()
        confidence = probabilities[0][predicted_idx].item()

    return {
        "prediction": class_names[predicted_idx],
        "confidence": confidence,
        "all_probabilities": {
            name: prob.item()
            for name, prob in zip(class_names, probabilities[0])
        }
    }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Async for Better Performance"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI
import asyncio
import httpx

app = FastAPI()

# Async endpoint for I/O-bound operations
@app.get("/async-predict")
async def async_predict(data: str):
    # Simulate async model call or external API
    await asyncio.sleep(0.1)
    return {"result": "prediction"}

# Background tasks
from fastapi import BackgroundTasks

def log_prediction(prediction: dict):
    # Log to database or file
    with open("predictions.log", "a") as f:
        f.write(f"{prediction}\\n")

@app.post("/predict-with-logging")
async def predict_with_logging(
    features: Features,
    background_tasks: BackgroundTasks
):
    prediction = model.predict(features.data)

    # Log in background (non-blocking)
    background_tasks.add_task(log_prediction, {"input": features.data, "output": prediction})

    return {"prediction": prediction}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

app = FastAPI()

# Custom exception
class ModelNotLoadedError(Exception):
    pass

@app.exception_handler(ModelNotLoadedError)
async def model_not_loaded_handler(request: Request, exc: ModelNotLoadedError):
    return JSONResponse(
        status_code=503,
        content={"error": "Model is not loaded", "detail": str(exc)}
    )

# Validation error handling
from fastapi.exceptions import RequestValidationError

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content={
            "error": "Validation Error",
            "details": exc.errors()
        }
    )

@app.post("/predict")
def predict(features: Features):
    if model is None:
        raise ModelNotLoadedError("Model failed to load at startup")

    try:
        result = model.predict(features.data)
        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"API Security"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, Depends, HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials, APIKeyHeader
import jwt

app = FastAPI()

# API Key authentication
api_key_header = APIKeyHeader(name="X-API-Key")

async def verify_api_key(api_key: str = Security(api_key_header)):
    if api_key != "your-secret-key":
        raise HTTPException(status_code=403, detail="Invalid API key")
    return api_key

@app.post("/predict", dependencies=[Depends(verify_api_key)])
def predict(features: Features):
    return {"prediction": model.predict(features.data)}

# JWT authentication
security = HTTPBearer()

def verify_token(credentials: HTTPAuthorizationCredentials = Security(security)):
    try:
        payload = jwt.decode(credentials.credentials, "secret", algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

@app.get("/protected", dependencies=[Depends(verify_token)])
def protected_route():
    return {"message": "Access granted"}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Rate Limiting"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, Request, HTTPException
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter

@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"error": "Rate limit exceeded", "retry_after": exc.detail}
    )

@app.post("/predict")
@limiter.limit("10/minute")  # 10 requests per minute
async def predict(request: Request, features: Features):
    return {"prediction": model.predict(features.data)}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Production Deployment"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Run with Gunicorn + Uvicorn workers
CMD ["gunicorn", "main:app", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "-b", "0.0.0.0:8000"]

# docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - MODEL_PATH=/app/models/model.joblib
    volumes:
      - ./models:/app/models
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

# requirements.txt
fastapi==0.104.1
uvicorn[standard]==0.24.0
gunicorn==21.2.0
pydantic==2.5.2
joblib==1.3.2
numpy==1.26.2
scikit-learn==1.3.2`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Deploy ML Models Like a Pro"}
                </h2>
                <p>
                  {"Our Data Science program covers MLOps and deployment, including FastAPI, Docker, and cloud deployment. Build production-ready ML systems."}
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
                  <Link href="/data-science/articles/docker-ml" className="related-article-card">
                    <h4>
                      {"Docker for ML"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerize your ML models"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/model-serving" className="related-article-card">
                    <h4>
                      {"Model Serving"}
                    </h4>
                    {" "}
                    <p>
                      {"Deployment strategies and patterns"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/mlops" className="related-article-card">
                    <h4>
                      {"MLOps"}
                    </h4>
                    {" "}
                    <p>
                      {"End-to-end ML lifecycle"}
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
                {"Empowering the next generation of tech professionals through personalized mentorship."}
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
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn FastAPI."} />
    </>
  );
}
