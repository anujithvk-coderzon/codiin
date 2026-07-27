import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Word Embeddings: Word2Vec, GloVe & FastText Complete Guide",
  description: "Learn Word2Vec, GloVe, and FastText for creating word embeddings. Master vector representations of text for natural language processing tasks.",
  keywords: ["Word2Vec", "GloVe", "FastText", "word embeddings", "text embeddings", "NLP vectors", "semantic similarity", "word vectors"],
  alternates: { canonical: "/data-science/articles/text-embeddings" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/text-embeddings",
    title: "Word Embeddings: Word2Vec, GloVe & FastText Guide",
    description: "Master word embeddings for NLP with practical examples of Word2Vec, GloVe, and FastText.",
    images: ["/images/text-embeddings-article-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Embeddings Guide | CODiiN",
    description: "Learn Word2Vec, GloVe, and FastText for NLP tasks.",
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
  "headline": "Word Embeddings: Word2Vec, GloVe & FastText Complete Guide",
  "description": "Comprehensive guide to word embeddings for natural language processing",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.codiin.com/img/codiin-logo.png"
    }
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-24"
} as const;

export default function DataScienceTextEmbeddingsPage() {
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
                {"Text Embeddings"}
              </span>
            </div>
            <h1>
              {"Word Embeddings: Word2Vec, GloVe & FastText"}
            </h1>
            <p className="article-subtitle">
              {"The Complete Guide to Vector Representations of Text"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"15 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Introduction to Word Embeddings"}
                </h2>
                <p>
                  {"Word embeddings are one of the most important breakthroughs in Natural Language Processing (NLP). They transform words from discrete symbols into continuous vectors of real numbers, capturing semantic meaning and relationships between words in a way that computers can understand and process."}
                </p>
                <p>
                  {"Before embeddings, words were represented using one-hot encoding, where each word is a vector of zeros with a single 1. For a vocabulary of 10,000 words, this creates sparse vectors of 10,000 dimensions. Embeddings compress this into dense vectors of typically 100-300 dimensions while capturing meaning."}
                </p>
                <p>
                  {"The three most popular word embedding techniques are "}
                  <strong>
                    {"Word2Vec"}
                  </strong>
                  {" (Google, 2013), "}
                  <strong>
                    {"GloVe"}
                  </strong>
                  {" (Stanford, 2014), and "}
                  <strong>
                    {"FastText"}
                  </strong>
                  {" (Facebook, 2016), each with unique strengths and use cases."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Word Embeddings?"}
                </h2>
                <p>
                  {"Word embeddings solve fundamental problems in NLP:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Semantic similarity:"}
                    </strong>
                    {" Similar words have similar vectors (king ≈ queen, Paris ≈ London)"}
                  </li>
                  <li>
                    <strong>
                      {"Reduced dimensionality:"}
                    </strong>
                    {" Dense 300-dimensional vectors vs. sparse 10,000+ dimensions"}
                  </li>
                  <li>
                    <strong>
                      {"Transfer learning:"}
                    </strong>
                    {" Pre-trained embeddings capture general language understanding"}
                  </li>
                  <li>
                    <strong>
                      {"Arithmetic relationships:"}
                    </strong>
                    {" Vector math captures relationships (king - man + woman ≈ queen)"}
                  </li>
                  <li>
                    <strong>
                      {"Better ML performance:"}
                    </strong>
                    {" Improved accuracy in classification, clustering, and generation tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Out-of-vocabulary handling:"}
                    </strong>
                    {" FastText can handle unseen words using subword information"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Word2Vec: Skip-gram and CBOW"}
                </h2>
                <p>
                  {"Word2Vec, developed by Tomas Mikolov at Google in 2013, introduced two efficient architectures for learning word embeddings from large text corpora:"}
                </p>
                <h3>
                  {"1. CBOW (Continuous Bag of Words)"}
                </h3>
                <p>
                  {"CBOW predicts a target word from its surrounding context words. It's faster and works well with smaller datasets."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Example: Predict "learning" from context
# Context: "I love [TARGET] machine learning"
# The model learns to predict the middle word from surrounding words`}</code></pre>
                </div>
                <h3>
                  {"2. Skip-gram"}
                </h3>
                <p>
                  {"Skip-gram does the opposite: it predicts context words from a target word. It's slower but works better with rare words and smaller datasets."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Example: Given "learning", predict context
# Target: "learning"
# Predictions: "I", "love", "machine", "models"`}</code></pre>
                </div>
                <h3>
                  {"Training Word2Vec"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from gensim.models import Word2Vec
from nltk.tokenize import word_tokenize
import nltk

# Sample corpus
sentences = [
    "the quick brown fox jumps over the lazy dog",
    "machine learning is a subset of artificial intelligence",
    "deep learning uses neural networks with many layers",
    "natural language processing enables computers to understand text"
]

# Tokenize sentences
tokenized = [word_tokenize(sent.lower()) for sent in sentences]

# Train Word2Vec model
# vector_size: dimension of word vectors
# window: maximum distance between current and predicted word
# min_count: ignore words with frequency lower than this
# sg: 0 for CBOW, 1 for Skip-gram
model = Word2Vec(
    sentences=tokenized,
    vector_size=100,
    window=5,
    min_count=1,
    sg=1,  # Use Skip-gram
    workers=4
)

# Save and load model
model.save("word2vec.model")
# model = Word2Vec.load("word2vec.model")

# Get vector for a word
vector = model.wv['learning']
print(f"Vector shape: {vector.shape}")
print(f"First 10 dimensions: {vector[:10]}")`}</code></pre>
                </div>
                <h3>
                  {"Using Pre-trained Word2Vec"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import gensim.downloader as api

# Load pre-trained Google News vectors (100B words, 3M vocab)
# This will download ~1.6GB on first use
model = api.load('word2vec-google-news-300')

# Find similar words
similar = model.most_similar('python', topn=5)
print("Words similar to 'python':")
for word, score in similar:
    print(f"  {word}: {score:.4f}")

# Output:
#   scripting: 0.6899
#   perl: 0.6814
#   java: 0.6489
#   programming: 0.6315
#   ruby: 0.6281

# Word arithmetic
result = model.most_similar(
    positive=['king', 'woman'],
    negative=['man'],
    topn=1
)
print(f"king - man + woman = {result[0][0]}")
# Output: queen

# Calculate similarity
similarity = model.similarity('dog', 'cat')
print(f"Similarity between dog and cat: {similarity:.4f}")
# Output: 0.7609`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GloVe: Global Vectors for Word Representation"}
                </h2>
                <p>
                  {"GloVe (Global Vectors), developed at Stanford in 2014, takes a different approach than Word2Vec. Instead of using a prediction-based model, GloVe uses matrix factorization on global word co-occurrence statistics."}
                </p>
                <p>
                  {"The key insight: the ratio of co-occurrence probabilities encodes meaning better than raw probabilities."}
                </p>
                <h3>
                  {"Using Pre-trained GloVe"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import gensim.downloader as api
import numpy as np

# Load pre-trained GloVe vectors
# Options: glove-wiki-gigaword-50, 100, 200, 300
#          glove-twitter-25, 50, 100, 200
glove = api.load('glove-wiki-gigaword-100')

# Get word vector
vector = glove['computer']
print(f"Vector shape: {vector.shape}")

# Find similar words
similar = glove.most_similar('algorithm', topn=5)
print("Words similar to 'algorithm':")
for word, score in similar:
    print(f"  {word}: {score:.4f}")

# Analogy task
result = glove.most_similar(
    positive=['paris', 'germany'],
    negative=['france'],
    topn=1
)
print(f"paris - france + germany = {result[0][0]}")
# Output: berlin`}</code></pre>
                </div>
                <h3>
                  {"Loading GloVe from Text Files"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np

def load_glove_vectors(file_path):
    """Load GloVe vectors from text file"""
    embeddings_dict = {}

    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            values = line.split()
            word = values[0]
            vector = np.asarray(values[1:], dtype='float32')
            embeddings_dict[word] = vector

    return embeddings_dict

# Load GloVe vectors
# Download from: https://nlp.stanford.edu/projects/glove/
glove_dict = load_glove_vectors('glove.6B.100d.txt')

# Use the vectors
vector = glove_dict.get('learning', None)
if vector is not None:
    print(f"Vector for 'learning': {vector[:10]}")

# Calculate cosine similarity
def cosine_similarity(vec1, vec2):
    return np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))

sim = cosine_similarity(glove_dict['king'], glove_dict['queen'])
print(f"Similarity between king and queen: {sim:.4f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FastText: Subword Embeddings"}
                </h2>
                <p>
                  {"FastText, developed by Facebook AI Research in 2016, improves on Word2Vec by representing words as bags of character n-grams. This allows it to generate embeddings for out-of-vocabulary words and better handle rare words and morphologically rich languages."}
                </p>
                <h3>
                  {"How FastText Works"}
                </h3>
                <p>
                  {"Instead of treating \"learning\" as a single token, FastText breaks it into:"}
                </p>
                <ul>
                  <li>
                    {"Character n-grams: <le, lea, ear, arn, rni, nin, ing, ng>"}
                  </li>
                  <li>
                    {"Full word: <learning>"}
                  </li>
                </ul>
                <p>
                  {"The final embedding is the sum of all n-gram embeddings, allowing the model to understand that \"learner\" and \"learning\" share similar meanings."}
                </p>
                <h3>
                  {"Training FastText"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from gensim.models import FastText
from nltk.tokenize import word_tokenize

# Sample corpus
sentences = [
    "machine learning algorithms learn from data",
    "deep learning is a powerful technique",
    "learners must practice consistently",
    "neural networks learn patterns automatically"
]

# Tokenize
tokenized = [word_tokenize(sent.lower()) for sent in sentences]

# Train FastText model
# min_n: min length of char n-grams
# max_n: max length of char n-grams
fasttext_model = FastText(
    sentences=tokenized,
    vector_size=100,
    window=5,
    min_count=1,
    min_n=3,      # Min character n-gram length
    max_n=6,      # Max character n-gram length
    sg=1,         # Skip-gram
    workers=4
)

# Get vector for in-vocabulary word
vector = fasttext_model.wv['learning']
print(f"Vector for 'learning': {vector[:5]}")

# Get vector for out-of-vocabulary word!
# This is the key advantage of FastText
oov_vector = fasttext_model.wv['learnings']  # Word not in training data
print(f"Vector for 'learnings' (OOV): {oov_vector[:5]}")

# FastText can generate meaningful embeddings for typos too
typo_vector = fasttext_model.wv['lerning']  # Typo
print(f"Vector for 'lerning' (typo): {typo_vector[:5]}")`}</code></pre>
                </div>
                <h3>
                  {"Using Pre-trained FastText"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import gensim.downloader as api

# Load pre-trained FastText model
# Available models: fasttext-wiki-news-subwords-300
fasttext = api.load('fasttext-wiki-news-subwords-300')

# Regular word
similar = fasttext.most_similar('science', topn=3)
print("Similar to 'science':")
for word, score in similar:
    print(f"  {word}: {score:.4f}")

# Out-of-vocabulary word (made-up brand name)
# FastText can still generate a meaningful embedding
oov_vector = fasttext['TechnoAI2024']
print(f"OOV vector shape: {oov_vector.shape}")

# Typo handling
similarity = fasttext.similarity('definately', 'definitely')
print(f"Similarity between typo and correct: {similarity:.4f}")
# FastText recognizes they're similar despite the typo!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Practical Applications"}
                </h2>
                <h3>
                  {"1. Text Classification with Embeddings"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from sklearn.linear_model import LogisticRegression
from gensim.models import Word2Vec

# Sample data
texts = [
    "this movie is excellent and amazing",
    "worst film ever made terrible acting",
    "great story wonderful cinematography",
    "boring and predictable waste of time"
]
labels = [1, 0, 1, 0]  # 1 = positive, 0 = negative

# Train Word2Vec
tokenized = [text.split() for text in texts]
w2v = Word2Vec(tokenized, vector_size=100, window=5, min_count=1)

# Create document embeddings by averaging word vectors
def document_vector(text, model):
    """Average word vectors to get document vector"""
    words = text.split()
    word_vectors = [model.wv[word] for word in words if word in model.wv]
    if len(word_vectors) == 0:
        return np.zeros(model.vector_size)
    return np.mean(word_vectors, axis=0)

# Convert texts to vectors
X = np.array([document_vector(text, w2v) for text in texts])
y = np.array(labels)

# Train classifier
classifier = LogisticRegression()
classifier.fit(X, y)

# Predict on new text
new_text = "amazing movie wonderful"
new_vector = document_vector(new_text, w2v).reshape(1, -1)
prediction = classifier.predict(new_vector)
print(f"Sentiment: {'Positive' if prediction[0] == 1 else 'Negative'}")`}</code></pre>
                </div>
                <h3>
                  {"2. Semantic Search"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import gensim.downloader as api
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# Load pre-trained model
model = api.load('glove-wiki-gigaword-100')

# Document corpus
documents = [
    "machine learning algorithms for data analysis",
    "deep neural networks and artificial intelligence",
    "cooking recipes for italian pasta dishes",
    "python programming and software development",
    "quantum physics and particle mechanics"
]

# Convert documents to vectors
def doc_vector(text, model):
    words = text.lower().split()
    vectors = [model[word] for word in words if word in model]
    if not vectors:
        return np.zeros(model.vector_size)
    return np.mean(vectors, axis=0)

doc_vectors = np.array([doc_vector(doc, model) for doc in documents])

# Search query
query = "AI and neural nets"
query_vector = doc_vector(query, model).reshape(1, -1)

# Calculate similarities
similarities = cosine_similarity(query_vector, doc_vectors)[0]

# Rank documents
ranked = sorted(enumerate(similarities), key=lambda x: x[1], reverse=True)

print(f"Search results for: '{query}'")
for idx, score in ranked:
    print(f"{score:.4f}: {documents[idx]}")

# Output:
# 0.8721: deep neural networks and artificial intelligence
# 0.7234: machine learning algorithms for data analysis
# 0.5012: python programming and software development
# ...`}</code></pre>
                </div>
                <h3>
                  {"3. Word Analogy Tasks"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import gensim.downloader as api

model = api.load('word2vec-google-news-300')

# Define analogy function
def analogy(word1, word2, word3, model, topn=3):
    """
    Solve analogy: word1 is to word2 as word3 is to ?
    Example: king is to queen as man is to woman
    """
    result = model.most_similar(
        positive=[word2, word3],
        negative=[word1],
        topn=topn
    )
    return result

# Examples
analogies = [
    ("king", "queen", "man"),
    ("france", "paris", "germany"),
    ("good", "better", "bad"),
    ("walking", "walked", "swimming")
]

for word1, word2, word3 in analogies:
    result = analogy(word1, word2, word3, model, topn=1)
    answer = result[0][0]
    score = result[0][1]
    print(f"{word1}:{word2} :: {word3}:{answer} (score: {score:.4f})")

# Output:
# king:queen :: man:woman (score: 0.7698)
# france:paris :: germany:berlin (score: 0.7845)
# good:better :: bad:worse (score: 0.7234)
# walking:walked :: swimming:swam (score: 0.6891)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Comparing Word2Vec, GloVe, and FastText"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import gensim.downloader as api
import time

# Load all three models
print("Loading models...")
w2v = api.load('word2vec-google-news-300')
glove = api.load('glove-wiki-gigaword-300')
fasttext = api.load('fasttext-wiki-news-subwords-300')

# Compare similarity scores
words = [('king', 'queen'), ('dog', 'cat'), ('python', 'java')]

print("\\nSimilarity Comparison:")
print(f"{'Pair':<20} {'Word2Vec':<12} {'GloVe':<12} {'FastText'}")
print("-" * 56)

for word1, word2 in words:
    w2v_sim = w2v.similarity(word1, word2)
    glove_sim = glove.similarity(word1, word2)
    ft_sim = fasttext.similarity(word1, word2)
    print(f"{word1}-{word2:<15} {w2v_sim:<12.4f} {glove_sim:<12.4f} {ft_sim:.4f}")

# Test OOV handling
oov_word = "COVID-19"
print(f"\\nOut-of-Vocabulary Test: '{oov_word}'")
print(f"Word2Vec: {oov_word in w2v}")
print(f"GloVe: {oov_word in glove}")
print(f"FastText: Can generate vector (always True)")

if oov_word not in fasttext:
    # FastText can still generate a vector
    vector = fasttext[oov_word]
    print(f"FastText generated vector: {vector.shape}")`}</code></pre>
                </div>
                <h3>
                  {"Choosing the Right Embedding"}
                </h3>
                <div className="table-wrap">
                  <table style={{ "width": "100%", "borderCollapse": "collapse", "margin": "20px 0" }}>
                    <tr style={{ "background": "#f0f0f0" }}>
                      <th style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Feature"}
                      </th>
                      <th style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Word2Vec"}
                      </th>
                      <th style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"GloVe"}
                      </th>
                      <th style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"FastText"}
                      </th>
                    </tr>
                    <tr>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        <strong>
                          {"Training Method"}
                        </strong>
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Prediction-based"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Count-based (matrix factorization)"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Prediction + subword"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        <strong>
                          {"OOV Handling"}
                        </strong>
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"No"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"No"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Yes"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        <strong>
                          {"Training Speed"}
                        </strong>
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Fast"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Slower"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Moderate"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        <strong>
                          {"Rare Words"}
                        </strong>
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Poor"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Moderate"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Excellent"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        <strong>
                          {"Best For"}
                        </strong>
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"General purpose, large corpus"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Semantic tasks, analogies"}
                      </td>
                      <td style={{ "padding": "10px", "border": "1px solid #ddd" }}>
                        {"Morphologically rich languages, typos"}
                      </td>
                    </tr>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use pre-trained embeddings:"}
                    </strong>
                    {" Start with pre-trained models unless you have domain-specific text"}
                  </li>
                  <li>
                    <strong>
                      {"Choose appropriate dimensions:"}
                    </strong>
                    {" 100-300 dimensions is typical; more isn't always better"}
                  </li>
                  <li>
                    <strong>
                      {"Fine-tune for your domain:"}
                    </strong>
                    {" Continue training on your specific corpus for better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Normalize vectors:"}
                    </strong>
                    {" Normalize embeddings before similarity calculations for consistency"}
                  </li>
                  <li>
                    <strong>
                      {"Handle OOV words:"}
                    </strong>
                    {" Use FastText for applications with many rare or out-of-vocabulary words"}
                  </li>
                  <li>
                    <strong>
                      {"Consider context:"}
                    </strong>
                    {" Modern transformers (BERT, GPT) provide contextual embeddings that may work better"}
                  </li>
                  <li>
                    <strong>
                      {"Evaluate on your task:"}
                    </strong>
                    {" Different embeddings perform differently; test on your specific use case"}
                  </li>
                  <li>
                    <strong>
                      {"Combine with other features:"}
                    </strong>
                    {" Embeddings work well combined with traditional features"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Limitations and Considerations"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"No context awareness:"}
                    </strong>
                    {" Each word has one embedding regardless of context (overcome by transformers)"}
                  </li>
                  <li>
                    <strong>
                      {"Bias in embeddings:"}
                    </strong>
                    {" Pre-trained embeddings can reflect societal biases in training data"}
                  </li>
                  <li>
                    <strong>
                      {"Memory requirements:"}
                    </strong>
                    {" Large vocabulary embeddings can consume significant memory"}
                  </li>
                  <li>
                    <strong>
                      {"Language specific:"}
                    </strong>
                    {" Most pre-trained embeddings are language-specific"}
                  </li>
                  <li>
                    <strong>
                      {"Static representations:"}
                    </strong>
                    {" Can't capture evolving word meanings over time"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master NLP and Text Embeddings"}
                </h2>
                <p>
                  {"Our Data Science program provides comprehensive coverage of NLP techniques, from classical word embeddings to modern transformer models. Get hands-on experience with real-world projects and expert mentorship."}
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
                  <Link href="/data-science/articles/spacy-nltk" className="related-article-card">
                    <h4>
                      {"spaCy and NLTK for NLP"}
                    </h4>
                    {" "}
                    <p>
                      {"Master text processing, tokenization, and NER"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/nlp-transformers" className="related-article-card">
                    <h4>
                      {"NLP with Transformers: BERT, GPT & More"}
                    </h4>
                    {" "}
                    <p>
                      {"Learn modern contextual embeddings with transformers"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Build neural networks for AI applications"}
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
                  <Link href="/full-stack-java">
                    {"Full Stack Java"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-dotnet">
                    {"Full Stack .NET"}
                  </Link>
                </li>
                <li>
                  <Link href="/hybrid-mobile-app">
                    {"Hybrid Mobile Apps"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Data & AI"}
              </h4>
              <ul>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
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
              <div className="social-links">
                <a href="https://www.facebook.com/CodiinTechnologies" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/codiin_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/codiin/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@codiin" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about word embeddings and Data Science."} />
    </>
  );
}
