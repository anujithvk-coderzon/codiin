import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "GANs: Generative Adversarial Networks Guide",
  description: "Learn Generative Adversarial Networks (GANs) - build generators and discriminators for image generation, style transfer, and creative AI applications.",
  keywords: ["GANs", "generative adversarial networks", "generator", "discriminator", "image generation", "deep learning", "neural networks"],
  alternates: { canonical: "/data-science/articles/gans" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/gans",
    title: "GANs: Complete Guide to Generative Adversarial Networks",
    description: "Master GANs for image generation, style transfer, and creative AI with practical examples.",
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
  "headline": "GANs: Complete Guide to Generative Adversarial Networks",
  "description": "Comprehensive guide to understanding and building Generative Adversarial Networks for image generation",
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

export default function DataScienceGansPage() {
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
                {"GANs"}
              </span>
            </div>
            <h1>
              {"Generative Adversarial Networks"}
            </h1>
            <p className="article-subtitle">
              {"Creating Synthetic Data with Generator vs Discriminator"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"13 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What are GANs?"}
                </h2>
                <p>
                  {"Generative Adversarial Networks (GANs) are a revolutionary deep learning architecture for generating new, synthetic data that resembles your training data. Introduced by Ian Goodfellow in 2014, GANs have become one of the most exciting developments in AI."}
                </p>
                <p>
                  {"The GAN architecture consists of two neural networks in a unique adversarial relationship:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Generator:"}
                    </strong>
                    {" Creates fake data trying to fool the discriminator"}
                  </li>
                  <li>
                    <strong>
                      {"Discriminator:"}
                    </strong>
                    {" Tries to distinguish real data from fake data"}
                  </li>
                </ul>
                <p>
                  {"Think of it like a forger (generator) trying to create fake paintings, while an art detective (discriminator) tries to spot the fakes. As they compete, both get better - the forger creates increasingly realistic paintings, and the detective becomes better at spotting fakes."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why GANs Matter"}
                </h2>
                <p>
                  {"GANs have transformative applications across industries:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Image Generation:"}
                    </strong>
                    {" Create photorealistic faces, artwork, product designs"}
                  </li>
                  <li>
                    <strong>
                      {"Data Augmentation:"}
                    </strong>
                    {" Generate synthetic training data when real data is limited"}
                  </li>
                  <li>
                    <strong>
                      {"Image-to-Image Translation:"}
                    </strong>
                    {" Convert sketches to photos, day to night, summer to winter"}
                  </li>
                  <li>
                    <strong>
                      {"Super Resolution:"}
                    </strong>
                    {" Enhance low-resolution images to high quality"}
                  </li>
                  <li>
                    <strong>
                      {"Video Generation:"}
                    </strong>
                    {" Create realistic video sequences and deepfakes"}
                  </li>
                  <li>
                    <strong>
                      {"Drug Discovery:"}
                    </strong>
                    {" Generate molecular structures for pharmaceutical research"}
                  </li>
                  <li>
                    <strong>
                      {"Fashion & Design:"}
                    </strong>
                    {" Create new clothing designs, interior layouts"}
                  </li>
                  <li>
                    <strong>
                      {"Gaming:"}
                    </strong>
                    {" Generate game assets, characters, environments"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use GANs"}
                </h2>
                <p>
                  {"Consider GANs when you need to:"}
                </p>
                <ul>
                  <li>
                    {"Generate new data samples that look like your training data"}
                  </li>
                  <li>
                    {"Augment limited datasets with synthetic examples"}
                  </li>
                  <li>
                    {"Transform images from one domain to another (style transfer)"}
                  </li>
                  <li>
                    {"Create variations of existing designs"}
                  </li>
                  <li>
                    {"Fill in missing parts of images (inpainting)"}
                  </li>
                  <li>
                    {"Upscale low-resolution images"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Note:"}
                  </strong>
                  {" GANs are notoriously difficult to train and require significant computational resources. For simpler tasks, consider alternatives like VAEs (Variational Autoencoders) or diffusion models."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"How GANs Work"}
                </h2>
                <h3>
                  {"The Adversarial Game"}
                </h3>
                <p>
                  {"GANs work through a competitive training process:"}
                </p>
                <ol>
                  <li>
                    <strong>
                      {"Generator generates:"}
                    </strong>
                    {" Takes random noise as input, produces fake data (e.g., images)"}
                  </li>
                  <li>
                    <strong>
                      {"Discriminator discriminates:"}
                    </strong>
                    {" Receives both real data and fake data, tries to classify each as real or fake"}
                  </li>
                  <li>
                    <strong>
                      {"Generator learns:"}
                    </strong>
                    {" Adjusts to fool the discriminator (make fake data seem real)"}
                  </li>
                  <li>
                    <strong>
                      {"Discriminator learns:"}
                    </strong>
                    {" Gets better at spotting fakes"}
                  </li>
                  <li>
                    <strong>
                      {"Repeat:"}
                    </strong>
                    {" This adversarial process continues until the generator produces realistic data"}
                  </li>
                </ol>
                <h3>
                  {"Training Objective"}
                </h3>
                <p>
                  {"The generator and discriminator play a minimax game:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Discriminator:"}
                    </strong>
                    {" Maximize ability to correctly classify real vs fake"}
                  </li>
                  <li>
                    <strong>
                      {"Generator:"}
                    </strong>
                    {" Minimize discriminator's ability to detect fakes"}
                  </li>
                </ul>
                <p>
                  {"When training converges, the discriminator can't tell real from fake (50% accuracy), meaning the generator has learned to create realistic data."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a Simple GAN"}
                </h2>
                <h3>
                  {"Example: Generating Handwritten Digits (MNIST)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt

# Load MNIST dataset
(X_train, _), (_, _) = keras.datasets.mnist.load_data()
X_train = X_train.astype('float32') / 255.0
X_train = X_train.reshape(-1, 28, 28, 1)

# Generator Model
def build_generator(latent_dim):
    model = keras.Sequential([
        # Start with dense layer
        layers.Dense(7 * 7 * 128, input_dim=latent_dim),
        layers.Reshape((7, 7, 128)),
        layers.BatchNormalization(),
        layers.LeakyReLU(alpha=0.2),

        # Upsample to 14x14
        layers.Conv2DTranspose(128, (5, 5), strides=(2, 2), padding='same'),
        layers.BatchNormalization(),
        layers.LeakyReLU(alpha=0.2),

        # Upsample to 28x28
        layers.Conv2DTranspose(64, (5, 5), strides=(2, 2), padding='same'),
        layers.BatchNormalization(),
        layers.LeakyReLU(alpha=0.2),

        # Output layer
        layers.Conv2D(1, (5, 5), padding='same', activation='sigmoid')
    ], name='generator')

    return model

# Discriminator Model
def build_discriminator(img_shape):
    model = keras.Sequential([
        # Downsample
        layers.Conv2D(64, (5, 5), strides=(2, 2), padding='same',
                     input_shape=img_shape),
        layers.LeakyReLU(alpha=0.2),
        layers.Dropout(0.3),

        # Downsample again
        layers.Conv2D(128, (5, 5), strides=(2, 2), padding='same'),
        layers.LeakyReLU(alpha=0.2),
        layers.Dropout(0.3),

        # Flatten and classify
        layers.Flatten(),
        layers.Dense(1, activation='sigmoid')
    ], name='discriminator')

    return model

# Build and compile
latent_dim = 100
generator = build_generator(latent_dim)
discriminator = build_discriminator((28, 28, 1))

discriminator.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.0002, beta_1=0.5),
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Build GAN
discriminator.trainable = False
gan_input = layers.Input(shape=(latent_dim,))
generated_image = generator(gan_input)
gan_output = discriminator(generated_image)
gan = keras.Model(gan_input, gan_output)

gan.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.0002, beta_1=0.5),
    loss='binary_crossentropy'
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Training the GAN"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Training loop
def train_gan(epochs, batch_size=128):
    # Labels for real and fake images
    real_labels = np.ones((batch_size, 1))
    fake_labels = np.zeros((batch_size, 1))

    for epoch in range(epochs):
        # Train Discriminator
        # Select random real images
        idx = np.random.randint(0, X_train.shape[0], batch_size)
        real_images = X_train[idx]

        # Generate fake images
        noise = np.random.normal(0, 1, (batch_size, latent_dim))
        fake_images = generator.predict(noise, verbose=0)

        # Train discriminator on real and fake
        d_loss_real = discriminator.train_on_batch(real_images, real_labels)
        d_loss_fake = discriminator.train_on_batch(fake_images, fake_labels)
        d_loss = 0.5 * np.add(d_loss_real, d_loss_fake)

        # Train Generator
        noise = np.random.normal(0, 1, (batch_size, latent_dim))
        # We want generator to fool discriminator (label as real)
        g_loss = gan.train_on_batch(noise, real_labels)

        # Print progress
        if epoch % 100 == 0:
            print(f"Epoch {epoch}, D Loss: {d_loss[0]:.4f}, "
                  f"D Acc: {100*d_loss[1]:.2f}%, G Loss: {g_loss:.4f}")

            # Save generated images
            save_generated_images(epoch)

def save_generated_images(epoch, examples=10):
    noise = np.random.normal(0, 1, (examples, latent_dim))
    generated_images = generator.predict(noise, verbose=0)

    plt.figure(figsize=(10, 1))
    for i in range(examples):
        plt.subplot(1, examples, i + 1)
        plt.imshow(generated_images[i].reshape(28, 28), cmap='gray')
        plt.axis('off')
    plt.tight_layout()
    plt.savefig(f'gan_epoch_{epoch}.png')
    plt.close()

# Train the GAN
train_gan(epochs=10000, batch_size=128)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced GAN Architectures"}
                </h2>
                <h3>
                  {"1. DCGAN (Deep Convolutional GAN)"}
                </h3>
                <p>
                  {"Uses convolutional layers instead of fully connected layers, making it more stable and effective for image generation."}
                </p>
                <ul>
                  <li>
                    {"Replace pooling with strided convolutions"}
                  </li>
                  <li>
                    {"Use batch normalization in both networks"}
                  </li>
                  <li>
                    {"Remove fully connected hidden layers"}
                  </li>
                  <li>
                    {"Use ReLU in generator (except output layer)"}
                  </li>
                  <li>
                    {"Use LeakyReLU in discriminator"}
                  </li>
                </ul>
                <h3>
                  {"2. Conditional GAN (cGAN)"}
                </h3>
                <p>
                  {"Conditions the generation on additional information (labels, text, images). You can control what gets generated."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Conditional Generator - takes noise + label
def build_conditional_generator(latent_dim, num_classes):
    noise_input = layers.Input(shape=(latent_dim,))
    label_input = layers.Input(shape=(num_classes,))

    # Merge inputs
    merged = layers.Concatenate()([noise_input, label_input])

    # Build generator...
    x = layers.Dense(7 * 7 * 128)(merged)
    # ... rest of architecture

    return keras.Model([noise_input, label_input], output)`}</code></pre>
                </div>
                <h3>
                  {"3. StyleGAN"}
                </h3>
                <p>
                  {"NVIDIA's architecture for high-quality face generation. Allows fine-grained control over image features at different scales."}
                </p>
                <h3>
                  {"4. CycleGAN"}
                </h3>
                <p>
                  {"Translates images from one domain to another without paired examples (e.g., horses to zebras, photos to paintings)."}
                </p>
                <h3>
                  {"5. Pix2Pix"}
                </h3>
                <p>
                  {"Image-to-image translation with paired examples (e.g., sketches to photos, black & white to color)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Common GAN Challenges"}
                </h2>
                <h3>
                  {"1. Mode Collapse"}
                </h3>
                <p>
                  {"Generator produces limited variety - keeps generating the same few outputs."}
                </p>
                <p>
                  <strong>
                    {"Solutions:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Use mini-batch discrimination"}
                  </li>
                  <li>
                    {"Add feature matching"}
                  </li>
                  <li>
                    {"Try Wasserstein GAN (WGAN) loss"}
                  </li>
                  <li>
                    {"Increase model capacity"}
                  </li>
                </ul>
                <h3>
                  {"2. Training Instability"}
                </h3>
                <p>
                  {"Generator and discriminator don't converge; losses oscillate wildly."}
                </p>
                <p>
                  <strong>
                    {"Solutions:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Use label smoothing (0.9 instead of 1.0 for real labels)"}
                  </li>
                  <li>
                    {"Add noise to discriminator inputs"}
                  </li>
                  <li>
                    {"Use different learning rates for G and D"}
                  </li>
                  <li>
                    {"Try WGAN or WGAN-GP"}
                  </li>
                  <li>
                    {"Use spectral normalization"}
                  </li>
                </ul>
                <h3>
                  {"3. Vanishing Gradients"}
                </h3>
                <p>
                  {"If discriminator is too good, generator gradients vanish and learning stops."}
                </p>
                <p>
                  <strong>
                    {"Solutions:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Don't train discriminator too much (1:1 ratio or train G more)"}
                  </li>
                  <li>
                    {"Use least squares GAN (LSGAN) or WGAN loss"}
                  </li>
                  <li>
                    {"Add noise to labels (label flipping)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"GAN Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Normalize Inputs:"}
                    </strong>
                    {" Scale images to [-1, 1] or [0, 1]"}
                  </li>
                  <li>
                    <strong>
                      {"Use LeakyReLU:"}
                    </strong>
                    {" In discriminator (alpha=0.2)"}
                  </li>
                  <li>
                    <strong>
                      {"Batch Normalization:"}
                    </strong>
                    {" Use in both networks, but not in output layers"}
                  </li>
                  <li>
                    <strong>
                      {"Label Smoothing:"}
                    </strong>
                    {" Use 0.9 for real labels, 0.1 for fake"}
                  </li>
                  <li>
                    <strong>
                      {"Adam Optimizer:"}
                    </strong>
                    {" Learning rate 0.0002, beta1=0.5"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor Both Losses:"}
                    </strong>
                    {" D and G losses should stay relatively balanced"}
                  </li>
                  <li>
                    <strong>
                      {"Generate Samples Often:"}
                    </strong>
                    {" Visual inspection is crucial"}
                  </li>
                  <li>
                    <strong>
                      {"Use Transposed Convolutions:"}
                    </strong>
                    {" For upsampling in generator"}
                  </li>
                  <li>
                    <strong>
                      {"Start Simple:"}
                    </strong>
                    {" Get basic GAN working before trying complex architectures"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Evaluating GANs"}
                </h2>
                <p>
                  {"Unlike supervised learning, GAN evaluation is tricky. Common metrics:"}
                </p>
                <h3>
                  {"Inception Score (IS)"}
                </h3>
                <p>
                  {"Measures quality and diversity of generated images using a pre-trained Inception network."}
                </p>
                <h3>
                  {"Frechet Inception Distance (FID)"}
                </h3>
                <p>
                  {"Compares statistics of generated and real images. Lower is better."}
                </p>
                <div className="code-block">
                  <pre><code>{`from scipy.linalg import sqrtm
from keras.applications.inception_v3 import InceptionV3

def calculate_fid(real_images, generated_images):
    # Load pre-trained model
    model = InceptionV3(include_top=False, pooling='avg')

    # Get activations
    act_real = model.predict(real_images)
    act_gen = model.predict(generated_images)

    # Calculate mean and covariance
    mu1, sigma1 = act_real.mean(axis=0), np.cov(act_real, rowvar=False)
    mu2, sigma2 = act_gen.mean(axis=0), np.cov(act_gen, rowvar=False)

    # Calculate FID
    ssdiff = np.sum((mu1 - mu2)**2.0)
    covmean = sqrtm(sigma1.dot(sigma2))
    fid = ssdiff + np.trace(sigma1 + sigma2 - 2.0*covmean)

    return fid`}</code></pre>
                </div>
                <h3>
                  {"Visual Inspection"}
                </h3>
                <p>
                  {"Often the best metric - do the images look realistic to humans?"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Example: Face Generation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# For CelebA dataset
img_height, img_width = 64, 64
latent_dim = 128

def build_generator():
    model = keras.Sequential([
        layers.Dense(8 * 8 * 256, input_dim=latent_dim),
        layers.Reshape((8, 8, 256)),
        layers.BatchNormalization(),
        layers.LeakyReLU(0.2),

        # 8x8 -> 16x16
        layers.Conv2DTranspose(128, 5, strides=2, padding='same'),
        layers.BatchNormalization(),
        layers.LeakyReLU(0.2),

        # 16x16 -> 32x32
        layers.Conv2DTranspose(64, 5, strides=2, padding='same'),
        layers.BatchNormalization(),
        layers.LeakyReLU(0.2),

        # 32x32 -> 64x64
        layers.Conv2DTranspose(3, 5, strides=2, padding='same',
                              activation='tanh')
    ])
    return model

def build_discriminator():
    model = keras.Sequential([
        layers.Conv2D(64, 5, strides=2, padding='same',
                     input_shape=(64, 64, 3)),
        layers.LeakyReLU(0.2),
        layers.Dropout(0.3),

        layers.Conv2D(128, 5, strides=2, padding='same'),
        layers.LeakyReLU(0.2),
        layers.Dropout(0.3),

        layers.Flatten(),
        layers.Dense(1, activation='sigmoid')
    ])
    return model

# Build and compile models
generator = build_generator()
discriminator = build_discriminator()

# Set up optimizers
g_optimizer = keras.optimizers.Adam(0.0002, beta_1=0.5)
d_optimizer = keras.optimizers.Adam(0.0002, beta_1=0.5)

# Training step using GradientTape for flexibility
@tf.function
def train_step(real_images):
    batch_size = tf.shape(real_images)[0]
    noise = tf.random.normal([batch_size, latent_dim])

    with tf.GradientTape() as gen_tape, tf.GradientTape() as disc_tape:
        generated_images = generator(noise, training=True)

        real_output = discriminator(real_images, training=True)
        fake_output = discriminator(generated_images, training=True)

        gen_loss = keras.losses.binary_crossentropy(
            tf.ones_like(fake_output), fake_output
        )
        disc_loss = keras.losses.binary_crossentropy(
            tf.ones_like(real_output), real_output
        ) + keras.losses.binary_crossentropy(
            tf.zeros_like(fake_output), fake_output
        )

    gen_gradients = gen_tape.gradient(gen_loss, generator.trainable_variables)
    disc_gradients = disc_tape.gradient(disc_loss, discriminator.trainable_variables)

    g_optimizer.apply_gradients(zip(gen_gradients, generator.trainable_variables))
    d_optimizer.apply_gradients(zip(disc_gradients, discriminator.trainable_variables))

    return gen_loss, disc_loss`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master GANs with Expert Guidance"}
                </h2>
                <p>
                  {"Our Data Science program covers GANs and generative models in depth. Learn to build image generators, style transfer systems, and creative AI applications with hands-on projects."}
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
                      {"Build your neural network foundation"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/computer-vision" className="related-article-card">
                    <h4>
                      {"Computer Vision Essentials"}
                    </h4>
                    {" "}
                    <p>
                      {"Master CNNs and image processing techniques"}
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

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about GANs."} />
    </>
  );
}
