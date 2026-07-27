import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "spaCy and NLTK: Complete Guide to NLP in Python",
  description: "Learn spaCy and NLTK for Natural Language Processing. Master tokenization, NER, POS tagging, and text processing with practical Python examples.",
  keywords: ["spaCy tutorial", "NLTK guide", "NLP Python", "tokenization", "named entity recognition", "POS tagging", "text processing"],
  alternates: { canonical: "/data-science/articles/spacy-nltk" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/spacy-nltk",
    title: "spaCy and NLTK: Complete Guide to NLP in Python",
    description: "Master spaCy and NLTK for natural language processing tasks with practical examples.",
    images: ["/images/spacy-nltk-article-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "spaCy and NLTK Guide | CODiiN",
    description: "Master NLP with spaCy and NLTK for text processing tasks.",
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
  "headline": "spaCy and NLTK: Complete Guide to NLP in Python",
  "description": "Comprehensive guide to using spaCy and NLTK for natural language processing",
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

export default function DataScienceSpacyNltkPage() {
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
                {"spaCy & NLTK"}
              </span>
            </div>
            <h1>
              {"spaCy and NLTK for NLP"}
            </h1>
            <p className="article-subtitle">
              {"The Complete Guide to Natural Language Processing in Python"}
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
                  {"Introduction to spaCy and NLTK"}
                </h2>
                <p>
                  {"Natural Language Processing (NLP) is the field of AI that enables computers to understand, interpret, and generate human language. Two of the most powerful Python libraries for NLP are "}
                  <strong>
                    {"spaCy"}
                  </strong>
                  {" and "}
                  <strong>
                    {"NLTK"}
                  </strong>
                  {" (Natural Language Toolkit)."}
                </p>
                <p>
                  <strong>
                    {"NLTK"}
                  </strong>
                  {", created in 2001, is a comprehensive library perfect for learning NLP concepts and research. "}
                  <strong>
                    {"spaCy"}
                  </strong>
                  {", released in 2015, is a modern, production-ready library optimized for speed and efficiency, making it ideal for building real-world applications."}
                </p>
                <p>
                  {"While both libraries can perform similar tasks, they have different philosophies: NLTK offers multiple algorithms for each task (educational), while spaCy provides the best algorithm for production use (practical)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use spaCy and NLTK?"}
                </h2>
                <p>
                  {"Processing human language requires solving several complex challenges:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Tokenization:"}
                    </strong>
                    {" Breaking text into words, sentences, or meaningful units"}
                  </li>
                  <li>
                    <strong>
                      {"Part-of-Speech Tagging:"}
                    </strong>
                    {" Identifying whether words are nouns, verbs, adjectives, etc."}
                  </li>
                  <li>
                    <strong>
                      {"Named Entity Recognition:"}
                    </strong>
                    {" Extracting names, dates, locations, organizations"}
                  </li>
                  <li>
                    <strong>
                      {"Dependency Parsing:"}
                    </strong>
                    {" Understanding grammatical structure and word relationships"}
                  </li>
                  <li>
                    <strong>
                      {"Lemmatization:"}
                    </strong>
                    {" Converting words to their base form (running → run)"}
                  </li>
                  <li>
                    <strong>
                      {"Text Preprocessing:"}
                    </strong>
                    {" Cleaning and normalizing text for analysis"}
                  </li>
                </ul>
                <p>
                  {"Both spaCy and NLTK provide robust solutions for these tasks, saving you from implementing complex linguistic algorithms from scratch."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Each Library"}
                </h2>
                <h3>
                  {"Use spaCy When:"}
                </h3>
                <ul>
                  <li>
                    {"Building production applications that need speed and efficiency"}
                  </li>
                  <li>
                    {"Processing large volumes of text"}
                  </li>
                  <li>
                    {"You need state-of-the-art NER and dependency parsing"}
                  </li>
                  <li>
                    {"Working with modern deep learning pipelines"}
                  </li>
                  <li>
                    {"You want a clean, object-oriented API"}
                  </li>
                </ul>
                <h3>
                  {"Use NLTK When:"}
                </h3>
                <ul>
                  <li>
                    {"Learning NLP concepts and exploring different algorithms"}
                  </li>
                  <li>
                    {"Conducting research and prototyping"}
                  </li>
                  <li>
                    {"You need access to classical NLP algorithms and corpora"}
                  </li>
                  <li>
                    {"Working on educational projects or teaching"}
                  </li>
                  <li>
                    {"You need specific linguistic resources or datasets"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with spaCy"}
                </h2>
                <h3>
                  {"Installation and Setup"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Install spaCy
pip install spacy

# Download a language model (English)
python -m spacy download en_core_web_sm

# For better accuracy, use the medium or large model
python -m spacy download en_core_web_md  # Medium
python -m spacy download en_core_web_lg  # Large`}</code></pre>
                </div>
                <h3>
                  {"Basic Text Processing with spaCy"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy

# Load the language model
nlp = spacy.load("en_core_web_sm")

# Process text
text = "Apple Inc. is planning to open a new store in New York City next month."
doc = nlp(text)

# Tokenization
print("Tokens:")
for token in doc:
    print(f"{token.text:15} {token.pos_:10} {token.dep_:10}")

# Output:
# Apple          PROPN      nsubj
# Inc.           PROPN      flat
# is             AUX        aux
# planning       VERB       ROOT
# to             PART       aux
# open           VERB       xcomp
# ...`}</code></pre>
                </div>
                <h3>
                  {"Named Entity Recognition (NER)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy

nlp = spacy.load("en_core_web_sm")
text = "Elon Musk founded SpaceX in 2002 and Tesla in 2003."
doc = nlp(text)

# Extract named entities
print("Named Entities:")
for ent in doc.ents:
    print(f"{ent.text:20} {ent.label_:15} {spacy.explain(ent.label_)}")

# Output:
# Elon Musk           PERSON          People, including fictional
# SpaceX              ORG             Companies, agencies, institutions
# 2002                DATE            Absolute or relative dates
# Tesla               ORG             Companies, agencies, institutions
# 2003                DATE            Absolute or relative dates`}</code></pre>
                </div>
                <h3>
                  {"Lemmatization and POS Tagging"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy

nlp = spacy.load("en_core_web_sm")
text = "The cats were running quickly through the beautiful gardens."
doc = nlp(text)

print("Token | Lemma | POS | Tag | Explanation")
print("-" * 60)
for token in doc:
    print(f"{token.text:10} | {token.lemma_:10} | {token.pos_:5} | "
          f"{token.tag_:5} | {spacy.explain(token.tag_)}")

# Output:
# The        | the        | DET   | DT    | determiner
# cats       | cat        | NOUN  | NNS   | noun, plural
# were       | be         | AUX   | VBD   | verb, past tense
# running    | run        | VERB  | VBG   | verb, gerund
# quickly    | quickly    | ADV   | RB    | adverb
# ...`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with NLTK"}
                </h2>
                <h3>
                  {"Installation and Setup"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Install NLTK
pip install nltk

# Download required data
import nltk
nltk.download('punkt')        # Tokenizer
nltk.download('averaged_perceptron_tagger')  # POS tagger
nltk.download('maxent_ne_chunker')  # NER
nltk.download('words')        # Word corpus
nltk.download('stopwords')    # Common stopwords
nltk.download('wordnet')      # WordNet lemmatizer`}</code></pre>
                </div>
                <h3>
                  {"Tokenization with NLTK"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import nltk
from nltk.tokenize import word_tokenize, sent_tokenize

text = """Natural Language Processing is fascinating.
          It enables computers to understand human language!"""

# Sentence tokenization
sentences = sent_tokenize(text)
print("Sentences:", sentences)
# Output: ['Natural Language Processing is fascinating.',
#          'It enables computers to understand human language!']

# Word tokenization
words = word_tokenize(text)
print("Words:", words)
# Output: ['Natural', 'Language', 'Processing', 'is', 'fascinating',
#          '.', 'It', 'enables', ...]`}</code></pre>
                </div>
                <h3>
                  {"POS Tagging with NLTK"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import nltk
from nltk.tokenize import word_tokenize

text = "Python is an excellent programming language for data science."
tokens = word_tokenize(text)

# POS tagging
pos_tags = nltk.pos_tag(tokens)
print(pos_tags)

# Output:
# [('Python', 'NNP'), ('is', 'VBZ'), ('an', 'DT'),
#  ('excellent', 'JJ'), ('programming', 'NN'),
#  ('language', 'NN'), ('for', 'IN'), ('data', 'NNS'),
#  ('science', 'NN'), ('.', '.')]`}</code></pre>
                </div>
                <h3>
                  {"Lemmatization and Stemming"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import nltk
from nltk.stem import PorterStemmer, WordNetLemmatizer
from nltk.tokenize import word_tokenize

# Stemming (faster, but less accurate)
stemmer = PorterStemmer()
words = ["running", "runs", "ran", "runner", "easily", "fairly"]
stems = [stemmer.stem(word) for word in words]
print("Stems:", stems)
# Output: ['run', 'run', 'ran', 'runner', 'easili', 'fairli']

# Lemmatization (slower, but more accurate)
lemmatizer = WordNetLemmatizer()
lemmas = [lemmatizer.lemmatize(word, pos='v') for word in words]
print("Lemmas:", lemmas)
# Output: ['run', 'run', 'run', 'runner', 'easily', 'fairly']`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Practical Use Cases"}
                </h2>
                <h3>
                  {"1. Text Preprocessing Pipeline"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy
from nltk.corpus import stopwords

nlp = spacy.load("en_core_web_sm")
stop_words = set(stopwords.words('english'))

def preprocess_text(text):
    """Clean and preprocess text for analysis"""
    # Process with spaCy
    doc = nlp(text.lower())

    # Remove stopwords, punctuation, and lemmatize
    tokens = [
        token.lemma_ for token in doc
        if not token.is_stop
        and not token.is_punct
        and token.is_alpha
    ]

    return ' '.join(tokens)

# Example usage
text = "The scientists are studying the effects of climate change!"
cleaned = preprocess_text(text)
print(cleaned)
# Output: "scientist study effect climate change"`}</code></pre>
                </div>
                <h3>
                  {"2. Information Extraction"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy

nlp = spacy.load("en_core_web_sm")

def extract_information(text):
    """Extract structured information from text"""
    doc = nlp(text)

    info = {
        'people': [],
        'organizations': [],
        'locations': [],
        'dates': [],
        'money': []
    }

    for ent in doc.ents:
        if ent.label_ == 'PERSON':
            info['people'].append(ent.text)
        elif ent.label_ == 'ORG':
            info['organizations'].append(ent.text)
        elif ent.label_ == 'GPE':
            info['locations'].append(ent.text)
        elif ent.label_ == 'DATE':
            info['dates'].append(ent.text)
        elif ent.label_ == 'MONEY':
            info['money'].append(ent.text)

    return info

# Example usage
text = """Apple Inc. announced on Monday that it will invest
          $500 million in a new facility in Austin, Texas."""

result = extract_information(text)
print(result)
# Output: {
#     'people': [],
#     'organizations': ['Apple Inc.'],
#     'locations': ['Austin', 'Texas'],
#     'dates': ['Monday'],
#     'money': ['$500 million']
# }`}</code></pre>
                </div>
                <h3>
                  {"3. Sentiment Analysis Preprocessing"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy
from collections import Counter

nlp = spacy.load("en_core_web_sm")

def analyze_text_features(text):
    """Extract features for sentiment analysis"""
    doc = nlp(text)

    features = {
        'num_words': len([t for t in doc if not t.is_punct]),
        'num_sentences': len(list(doc.sents)),
        'num_adjectives': len([t for t in doc if t.pos_ == 'ADJ']),
        'num_verbs': len([t for t in doc if t.pos_ == 'VERB']),
        'avg_word_length': sum(len(t.text) for t in doc) / len(doc),
        'entities': [(ent.text, ent.label_) for ent in doc.ents],
        'top_keywords': Counter([t.lemma_ for t in doc
                                if not t.is_stop and t.is_alpha]).most_common(5)
    }

    return features

# Example usage
review = """This product is absolutely amazing! The quality is
            outstanding and the customer service was excellent."""

features = analyze_text_features(review)
for key, value in features.items():
    print(f"{key}: {value}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced Features"}
                </h2>
                <h3>
                  {"Dependency Parsing with spaCy"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy

nlp = spacy.load("en_core_web_sm")
text = "The quick brown fox jumps over the lazy dog."
doc = nlp(text)

# Visualize dependencies
for token in doc:
    print(f"{token.text:10} <- {token.dep_:10} - {token.head.text}")

# Extract subject-verb-object relationships
def extract_svo(doc):
    subject = None
    verb = None
    obj = None

    for token in doc:
        if token.dep_ in ('nsubj', 'nsubjpass'):
            subject = token.text
        elif token.pos_ == 'VERB':
            verb = token.text
        elif token.dep_ in ('dobj', 'pobj'):
            obj = token.text

    return subject, verb, obj

print(extract_svo(doc))
# Output: ('fox', 'jumps', 'dog')`}</code></pre>
                </div>
                <h3>
                  {"Custom NER with spaCy"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import spacy
from spacy.training import Example

# Load blank model
nlp = spacy.blank("en")

# Create NER component
ner = nlp.add_pipe("ner")

# Add custom labels
ner.add_label("PRODUCT")
ner.add_label("BRAND")

# Training data format
TRAINING_DATA = [
    ("iPhone 15 is Apple's latest product",
     {"entities": [(0, 9, "PRODUCT"), (13, 18, "BRAND")]}),
    ("Samsung Galaxy is a popular smartphone",
     {"entities": [(0, 7, "BRAND"), (8, 14, "PRODUCT")]})
]

# Train the model (simplified example)
# In production, you would train for many iterations
# with proper train/test splits`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Performance Comparison"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import time
import spacy
import nltk
from nltk.tokenize import word_tokenize

# Sample text
text = "Natural language processing is amazing!" * 1000

# spaCy performance
nlp = spacy.load("en_core_web_sm")
start = time.time()
doc = nlp(text)
tokens_spacy = [token.text for token in doc]
spacy_time = time.time() - start
print(f"spaCy time: {spacy_time:.4f}s")

# NLTK performance
start = time.time()
tokens_nltk = word_tokenize(text)
nltk_time = time.time() - start
print(f"NLTK time: {nltk_time:.4f}s")

# spaCy is typically 3-10x faster for large texts`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Load models once:"}
                    </strong>
                    {" Loading spaCy models is expensive; do it once at startup, not per-request"}
                  </li>
                  <li>
                    <strong>
                      {"Use nlp.pipe() for batches:"}
                    </strong>
                    {" Process multiple documents together for better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Disable unused components:"}
                    </strong>
                    {" Disable pipeline components you don't need with nlp.select_pipes()"}
                  </li>
                  <li>
                    <strong>
                      {"Choose the right model size:"}
                    </strong>
                    {" Use sm for speed, md for balance, lg for accuracy"}
                  </li>
                  <li>
                    <strong>
                      {"Combine both libraries:"}
                    </strong>
                    {" Use spaCy for production and NLTK for specialized tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Preprocess carefully:"}
                    </strong>
                    {" Don't over-clean; preserve information needed for analysis"}
                  </li>
                  <li>
                    <strong>
                      {"Handle multiple languages:"}
                    </strong>
                    {" Both libraries support many languages with appropriate models"}
                  </li>
                  <li>
                    <strong>
                      {"Validate entity recognition:"}
                    </strong>
                    {" NER isn't perfect; validate critical extractions"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Pitfalls to Avoid"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Not downloading required models:"}
                    </strong>
                    {" Remember to download spaCy models and NLTK data"}
                  </li>
                  <li>
                    <strong>
                      {"Over-stemming:"}
                    </strong>
                    {" Stemming can be too aggressive; prefer lemmatization for accuracy"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring context:"}
                    </strong>
                    {" Some NLP tasks require sentence or document context"}
                  </li>
                  <li>
                    <strong>
                      {"Processing too much at once:"}
                    </strong>
                    {" Break large texts into chunks to avoid memory issues"}
                  </li>
                  <li>
                    <strong>
                      {"Not handling special characters:"}
                    </strong>
                    {" URLs, emails, and hashtags need special treatment"}
                  </li>
                  <li>
                    <strong>
                      {"Assuming perfect accuracy:"}
                    </strong>
                    {" NLP models make mistakes; always validate critical applications"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master NLP with Expert Guidance"}
                </h2>
                <p>
                  {"Our Data Science program covers Natural Language Processing in-depth, from fundamentals to advanced techniques. Learn to build real-world NLP applications with hands-on projects and personalized mentorship from industry experts."}
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
                  <Link href="/data-science/articles/text-embeddings" className="related-article-card">
                    <h4>
                      {"Text Embeddings: Word2Vec, GloVe & FastText"}
                    </h4>
                    {" "}
                    <p>
                      {"Learn vector representations of words for NLP tasks"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/nlp-transformers" className="related-article-card">
                    <h4>
                      {"NLP with Transformers: BERT, GPT, and More"}
                    </h4>
                    {" "}
                    <p>
                      {"Master modern transformer architectures for NLP"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Build neural networks for various AI applications"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about NLP and Data Science."} />
    </>
  );
}
