import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "TensorFlow & Keras Guide",
  description: "Learn TensorFlow and Keras for Deep Learning - build neural networks, CNNs, RNNs, and deploy models. Complete beginner's guide with practical examples.",
  keywords: ["TensorFlow tutorial", "Keras tutorial", "deep learning", "neural networks", "CNN", "model deployment", "Google TensorFlow"],
  alternates: { canonical: "/data-science/articles/tensorflow-keras" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/tensorflow-keras",
    title: "TensorFlow & Keras: Deep Learning Framework",
    description: "Master Google's deep learning framework for production ML.",
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
  "headline": "TensorFlow & Keras: Deep Learning Framework",
  "description": "Complete guide to TensorFlow and Keras for deep learning",
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

export default function DataScienceTensorflowKerasPage() {
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
                {"TensorFlow & Keras"}
              </span>
            </div>
            <h1>
              {"TensorFlow & Keras"}
            </h1>
            <p className="article-subtitle">
              {"Google's Deep Learning Framework for Production"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is TensorFlow?"}
                </h2>
                <p>
                  {"TensorFlow is Google's open-source deep learning framework. It powers Google Search, Gmail, Google Photos, and countless production ML systems worldwide."}
                </p>
                <p>
                  <strong>
                    {"Keras"}
                  </strong>
                  {" is TensorFlow's high-level API that makes building neural networks as simple as stacking Lego blocks. Since TensorFlow 2.0, Keras is the official high-level API."}
                </p>
                <div className="code-block">
                  <pre><code>{`# TensorFlow vs PyTorch
#
# TensorFlow:                  PyTorch:
# - Google's framework         - Facebook's framework
# - Production-focused         - Research-focused
# - TensorFlow Serving         - TorchServe
# - TensorFlow Lite (mobile)   - PyTorch Mobile
# - TensorFlow.js (browser)    - Limited web support
# - Keras (high-level API)     - Native Python feel
#
# Choose TensorFlow when:
# - Deploying to production (mobile, web, cloud)
# - Need ecosystem tools (TFX, TF Serving)
# - Prefer Keras simplicity`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Installation & Setup"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install TensorFlow
pip install tensorflow

# For GPU support (NVIDIA)
pip install tensorflow[and-cuda]

# Verify installation
import tensorflow as tf
print(f"TensorFlow version: {tf.__version__}")
print(f"GPU available: {tf.config.list_physical_devices('GPU')}")

# Common imports
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models, callbacks
import numpy as np`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Your First Neural Network"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Load sample data (MNIST digits)
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()

# Preprocess: normalize to 0-1 range
X_train = X_train.astype('float32') / 255.0
X_test = X_test.astype('float32') / 255.0

# Flatten images: 28x28 -> 784
X_train = X_train.reshape(-1, 784)
X_test = X_test.reshape(-1, 784)

# Build model using Sequential API
model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),  # Prevent overfitting
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')  # 10 digit classes
])

# Compile model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# View architecture
model.summary()

# Train model
history = model.fit(
    X_train, y_train,
    epochs=10,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)

# Evaluate
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f'Test accuracy: {test_acc:.4f}')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Understanding Layers"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Common layer types and when to use them

# Dense (Fully Connected) - for tabular data, final layers
layers.Dense(64, activation='relu')

# Conv2D - for images
layers.Conv2D(32, (3, 3), activation='relu', padding='same')

# MaxPooling2D - reduce spatial dimensions
layers.MaxPooling2D((2, 2))

# LSTM - for sequences (text, time series)
layers.LSTM(64, return_sequences=True)

# Embedding - convert integers to dense vectors (NLP)
layers.Embedding(vocab_size, embedding_dim)

# Dropout - regularization (prevent overfitting)
layers.Dropout(0.5)  # 50% dropout rate

# BatchNormalization - stabilize training
layers.BatchNormalization()

# Flatten - convert 2D to 1D
layers.Flatten()

# Activation functions:
# - relu: most common, use for hidden layers
# - sigmoid: binary classification output
# - softmax: multi-class classification output
# - tanh: alternative to relu, outputs -1 to 1`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CNN for Image Classification"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Convolutional Neural Network for CIFAR-10

# Load data
(X_train, y_train), (X_test, y_test) = keras.datasets.cifar10.load_data()
X_train = X_train.astype('float32') / 255.0
X_test = X_test.astype('float32') / 255.0

# Build CNN
model = keras.Sequential([
    # First conv block
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.BatchNormalization(),
    layers.Conv2D(32, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.25),

    # Second conv block
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.BatchNormalization(),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.25),

    # Dense layers
    layers.Flatten(),
    layers.Dense(512, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Data augmentation for better generalization
data_augmentation = keras.Sequential([
    layers.RandomFlip('horizontal'),
    layers.RandomRotation(0.1),
    layers.RandomZoom(0.1),
])

# Train with augmentation
history = model.fit(
    data_augmentation(X_train), y_train,
    epochs=50,
    validation_split=0.2,
    batch_size=64
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Transfer Learning"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Use pre-trained models for your tasks
# Much better than training from scratch!

from tensorflow.keras.applications import ResNet50, VGG16, MobileNetV2

# Load pre-trained model (without top classification layer)
base_model = MobileNetV2(
    weights='imagenet',     # Pre-trained on ImageNet
    include_top=False,      # Remove classification head
    input_shape=(224, 224, 3)
)

# Freeze base model weights
base_model.trainable = False

# Add custom classification head
model = keras.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(num_classes, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train only the new layers
model.fit(X_train, y_train, epochs=10)

# Fine-tuning: unfreeze some base layers
base_model.trainable = True
for layer in base_model.layers[:-20]:  # Freeze all but last 20 layers
    layer.trainable = False

# Re-compile with lower learning rate
model.compile(
    optimizer=keras.optimizers.Adam(1e-5),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Continue training
model.fit(X_train, y_train, epochs=10)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Callbacks for Better Training"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from tensorflow.keras import callbacks

# Early stopping: stop when validation loss stops improving
early_stop = callbacks.EarlyStopping(
    monitor='val_loss',
    patience=5,              # Wait 5 epochs before stopping
    restore_best_weights=True
)

# Model checkpoint: save best model
checkpoint = callbacks.ModelCheckpoint(
    'best_model.keras',
    monitor='val_accuracy',
    save_best_only=True,
    verbose=1
)

# Learning rate reduction
lr_scheduler = callbacks.ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,              # Reduce LR by half
    patience=3,
    min_lr=1e-7
)

# TensorBoard for visualization
tensorboard = callbacks.TensorBoard(
    log_dir='./logs',
    histogram_freq=1
)

# Train with callbacks
history = model.fit(
    X_train, y_train,
    epochs=100,
    validation_split=0.2,
    callbacks=[early_stop, checkpoint, lr_scheduler, tensorboard]
)

# View TensorBoard: tensorboard --logdir ./logs`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Functional API for Complex Models"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# For models with multiple inputs/outputs or skip connections

from tensorflow.keras import Model, Input

# Multi-input model
text_input = Input(shape=(100,), name='text')
image_input = Input(shape=(224, 224, 3), name='image')

# Text branch
x1 = layers.Embedding(10000, 128)(text_input)
x1 = layers.LSTM(64)(x1)

# Image branch
x2 = layers.Conv2D(32, (3, 3), activation='relu')(image_input)
x2 = layers.GlobalAveragePooling2D()(x2)

# Combine
combined = layers.concatenate([x1, x2])
output = layers.Dense(1, activation='sigmoid')(combined)

model = Model(inputs=[text_input, image_input], outputs=output)

# Residual connection (skip connection)
inputs = Input(shape=(256,))
x = layers.Dense(256, activation='relu')(inputs)
x = layers.Dense(256, activation='relu')(x)
outputs = layers.Add()([inputs, x])  # Skip connection
model = Model(inputs, outputs)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Custom Training Loop"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# For advanced use cases: custom losses, metrics, gradients

model = keras.Sequential([...])
optimizer = keras.optimizers.Adam()
loss_fn = keras.losses.SparseCategoricalCrossentropy()

@tf.function  # Compile to graph for speed
def train_step(x, y):
    with tf.GradientTape() as tape:
        predictions = model(x, training=True)
        loss = loss_fn(y, predictions)

    gradients = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(gradients, model.trainable_variables))
    return loss

# Training loop
for epoch in range(epochs):
    for x_batch, y_batch in train_dataset:
        loss = train_step(x_batch, y_batch)
    print(f'Epoch {epoch}, Loss: {loss:.4f}')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Saving & Loading Models"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Save entire model (architecture + weights + optimizer)
model.save('my_model.keras')

# Load model
loaded_model = keras.models.load_model('my_model.keras')

# Save weights only
model.save_weights('model_weights.weights.h5')
model.load_weights('model_weights.weights.h5')

# Export for TensorFlow Serving
model.export('saved_model/')

# Convert to TensorFlow Lite (mobile)
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()
with open('model.tflite', 'wb') as f:
    f.write(tflite_model)

# Convert to TensorFlow.js (browser)
# pip install tensorflowjs
# tensorflowjs_converter --input_format=keras model.keras tfjs_model/`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start simple:"}
                    </strong>
                    {" Begin with small models, add complexity as needed"}
                  </li>
                  <li>
                    <strong>
                      {"Use callbacks:"}
                    </strong>
                    {" EarlyStopping and ModelCheckpoint are essential"}
                  </li>
                  <li>
                    <strong>
                      {"Transfer learning:"}
                    </strong>
                    {" Almost always better than training from scratch"}
                  </li>
                  <li>
                    <strong>
                      {"Data augmentation:"}
                    </strong>
                    {" Free way to improve generalization"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor training:"}
                    </strong>
                    {" Use TensorBoard to visualize metrics"}
                  </li>
                  <li>
                    <strong>
                      {"Regularize:"}
                    </strong>
                    {" Use Dropout and BatchNormalization"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Deep Learning with TensorFlow"}
                </h2>
                <p>
                  {"Our Data Science program covers TensorFlow from basics to production deployment."}
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
                      {"PyTorch"}
                    </h4>
                    {" "}
                    <p>
                      {"Alternative deep learning framework"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Neural network concepts"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/computer-vision" className="related-article-card">
                    <h4>
                      {"Computer Vision"}
                    </h4>
                    {" "}
                    <p>
                      {"Image processing with CNNs"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn TensorFlow."} />
    </>
  );
}
