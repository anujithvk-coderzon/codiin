import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "NLP with Transformers: Modern Natural Language Processing",
  description: "Learn NLP with Transformers - BERT, GPT, Hugging Face, text classification, sentiment analysis, and modern natural language processing techniques.",
  keywords: ["NLP tutorial", "transformers", "BERT", "GPT", "Hugging Face", "text classification", "sentiment analysis", "natural language processing"],
  alternates: { canonical: "/data-science/articles/nlp-transformers" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/nlp-transformers",
    title: "NLP with Transformers: Modern Natural Language Processing",
    description: "Master NLP with BERT, GPT, and Hugging Face Transformers.",
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
  "headline": "NLP with Transformers: Modern Natural Language Processing",
  "description": "Complete guide to NLP with transformers and Hugging Face",
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

export default function DataScienceNlpTransformersPage() {
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
                {"NLP with Transformers"}
              </span>
            </div>
            <h1>
              {"NLP with Transformers"}
            </h1>
            <p className="article-subtitle">
              {"Modern Natural Language Processing with BERT, GPT & Hugging Face"}
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
                  {"The Transformer Revolution"}
                </h2>
                <p>
                  {"Transformers have revolutionized natural language processing since the 2017 \"Attention Is All You Need\" paper. They power ChatGPT, Google Search, translation services, and countless other applications that understand language."}
                </p>
                <p>
                  {"Unlike previous sequence models (RNNs, LSTMs), transformers process all words in parallel using self-attention, making them faster to train and better at capturing long-range dependencies."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Concepts"}
                </h2>
                <h3>
                  {"Self-Attention"}
                </h3>
                <p>
                  {"The core mechanism that allows each word to \"attend\" to every other word in the sentence, weighing their importance for understanding context."}
                </p>
                <h3>
                  {"Encoder vs Decoder"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Encoder-only (BERT):"}
                    </strong>
                    {" Best for understanding tasks (classification, NER)"}
                  </li>
                  <li>
                    <strong>
                      {"Decoder-only (GPT):"}
                    </strong>
                    {" Best for generation tasks (text completion, chat)"}
                  </li>
                  <li>
                    <strong>
                      {"Encoder-Decoder (T5, BART):"}
                    </strong>
                    {" Best for sequence-to-sequence (translation, summarization)"}
                  </li>
                </ul>
                <h3>
                  {"Transfer Learning"}
                </h3>
                <p>
                  {"Models are pretrained on massive text corpora, then fine-tuned for specific tasks with much smaller datasets."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Hugging Face Transformers"}
                </h2>
                <p>
                  {"Hugging Face provides easy access to thousands of pretrained models:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from transformers import pipeline

# Sentiment analysis (zero-shot)
classifier = pipeline("sentiment-analysis")
result = classifier("I love learning about transformers!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.99}]

# Text generation
generator = pipeline("text-generation", model="gpt2")
output = generator("Machine learning is", max_length=50)

# Question answering
qa = pipeline("question-answering")
result = qa(
    question="What is the capital of France?",
    context="France is a country in Europe. Paris is its capital city."
)

# Named Entity Recognition
ner = pipeline("ner", aggregation_strategy="simple")
entities = ner("Apple Inc. was founded by Steve Jobs in California.")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Fine-Tuning BERT for Classification"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from transformers import (
    AutoTokenizer, AutoModelForSequenceClassification,
    Trainer, TrainingArguments
)
from datasets import load_dataset

# Load dataset
dataset = load_dataset("imdb")

# Load pretrained model and tokenizer
model_name = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, num_labels=2
)

# Tokenize data
def tokenize(examples):
    return tokenizer(
        examples["text"],
        padding="max_length",
        truncation=True,
        max_length=512
    )

tokenized_data = dataset.map(tokenize, batched=True)

# Training arguments
training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=64,
    warmup_steps=500,
    weight_decay=0.01,
    logging_dir="./logs",
    evaluation_strategy="epoch"
)

# Train
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_data["train"],
    eval_dataset=tokenized_data["test"]
)

trainer.train()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common NLP Tasks"}
                </h2>
                <h3>
                  {"Text Classification"}
                </h3>
                <p>
                  {"Categorize text into predefined classes: spam detection, sentiment analysis, topic classification."}
                </p>
                <h3>
                  {"Named Entity Recognition (NER)"}
                </h3>
                <p>
                  {"Identify entities like names, organizations, locations in text."}
                </p>
                <h3>
                  {"Question Answering"}
                </h3>
                <p>
                  {"Extract answers from context passages or generate answers."}
                </p>
                <h3>
                  {"Text Summarization"}
                </h3>
                <div className="code-block">
                  <pre><code>{`summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

text = """
Your long article or document text here...
"""

summary = summarizer(text, max_length=130, min_length=30)
print(summary[0]['summary_text'])`}</code></pre>
                </div>
                <h3>
                  {"Translation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`translator = pipeline("translation_en_to_fr", model="t5-base")
result = translator("Hello, how are you?")
print(result[0]['translation_text'])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Working with Embeddings"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sentence_transformers import SentenceTransformer

# Load embedding model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Generate embeddings
sentences = [
    "Machine learning is fascinating",
    "I love artificial intelligence",
    "The weather is nice today"
]

embeddings = model.encode(sentences)

# Compute similarity
from sklearn.metrics.pairwise import cosine_similarity
similarity = cosine_similarity([embeddings[0]], [embeddings[1]])
print(f"Similarity: {similarity[0][0]:.2f}")  # High similarity`}</code></pre>
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
                    {" Fine-tuning beats training from scratch"}
                  </li>
                  <li>
                    <strong>
                      {"Choose the right model size:"}
                    </strong>
                    {" Bigger isn't always better for your use case"}
                  </li>
                  <li>
                    <strong>
                      {"Handle long texts:"}
                    </strong>
                    {" Most models have 512 token limits; chunk or use Longformer"}
                  </li>
                  <li>
                    <strong>
                      {"Use mixed precision:"}
                    </strong>
                    {" fp16 training for faster, cheaper training"}
                  </li>
                  <li>
                    <strong>
                      {"Data quality matters:"}
                    </strong>
                    {" Clean, representative training data is crucial"}
                  </li>
                  <li>
                    <strong>
                      {"Evaluate properly:"}
                    </strong>
                    {" Use held-out test sets and appropriate metrics"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master NLP with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers NLP from traditional methods to modern transformers. Build real text analysis projects with guidance from industry experts."}
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
                      {"Understand neural network foundations"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/pytorch" className="related-article-card">
                    <h4>
                      {"PyTorch Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Build models with PyTorch"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Basics"}
                    </h4>
                    {" "}
                    <p>
                      {"Core ML concepts and algorithms"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn NLP."} />
    </>
  );
}
