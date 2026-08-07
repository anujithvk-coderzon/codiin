import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Feature Engineering: The Art of Data Preparation",
  description: "Learn Feature Engineering - the art of transforming raw data into powerful features. Handle missing values, encode categories, create new features for better ML models.",
  keywords: ["feature engineering", "data preprocessing", "missing values", "encoding", "feature selection", "machine learning features"],
  alternates: { canonical: "/data-science/articles/feature-engineering" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/feature-engineering",
    title: "Feature Engineering: The Art of Data Preparation",
    description: "Transform raw data into powerful features for machine learning.",
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
  "headline": "Feature Engineering: The Art of Data Preparation",
  "description": "Complete guide to feature engineering for machine learning",
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

export default function DataScienceFeatureEngineeringPage() {
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
                {"Feature Engineering"}
              </span>
            </div>
            <h1>
              {"Feature Engineering"}
            </h1>
            <p className="article-subtitle">
              {"The Art of Transforming Raw Data into Powerful Features"}
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
                  {"Why Feature Engineering Matters"}
                </h2>
                <p>
                  {"Feature engineering is often the difference between a mediocre model and a winning one. As the saying goes, \"garbage in, garbage out\" - but great features can transform the same data into gold."}
                </p>
                <p>
                  {"Kaggle grandmasters consistently emphasize that feature engineering, not algorithm selection, is what wins competitions. It's where domain knowledge meets data science."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Handling Missing Values"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer, KNNImputer

# Check missing values
print(df.isnull().sum())

# Drop rows/columns with too many missing values
df = df.dropna(thresh=len(df) * 0.5, axis=1)  # Drop cols with >50% missing

# Simple imputation
df['age'].fillna(df['age'].median(), inplace=True)
df['category'].fillna(df['category'].mode()[0], inplace=True)

# Sklearn imputers
imputer = SimpleImputer(strategy='median')  # or 'mean', 'most_frequent'
df[numeric_cols] = imputer.fit_transform(df[numeric_cols])

# KNN imputation (uses similar rows)
knn_imputer = KNNImputer(n_neighbors=5)
df[numeric_cols] = knn_imputer.fit_transform(df[numeric_cols])

# Create "missing" indicator feature
df['age_missing'] = df['age'].isnull().astype(int)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Encoding Categorical Variables"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import LabelEncoder, OneHotEncoder
import pandas as pd

# Label Encoding (for ordinal categories)
le = LabelEncoder()
df['size_encoded'] = le.fit_transform(df['size'])  # S->0, M->1, L->2

# One-Hot Encoding (for nominal categories)
df_encoded = pd.get_dummies(df, columns=['color', 'city'])

# Sklearn OneHotEncoder
ohe = OneHotEncoder(sparse=False, handle_unknown='ignore')
encoded = ohe.fit_transform(df[['category']])

# Target Encoding (mean of target per category)
target_means = df.groupby('category')['target'].mean()
df['category_target_encoded'] = df['category'].map(target_means)

# Frequency Encoding
freq = df['category'].value_counts(normalize=True)
df['category_freq'] = df['category'].map(freq)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Numerical Transformations"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import StandardScaler, MinMaxScaler, PowerTransformer
import numpy as np

# Standardization (mean=0, std=1)
scaler = StandardScaler()
df[numeric_cols] = scaler.fit_transform(df[numeric_cols])

# Min-Max Scaling (0-1 range)
minmax = MinMaxScaler()
df[numeric_cols] = minmax.fit_transform(df[numeric_cols])

# Log transformation (for skewed data)
df['log_income'] = np.log1p(df['income'])  # log(1+x) handles zeros

# Square root transformation
df['sqrt_value'] = np.sqrt(df['value'])

# Box-Cox transformation (requires positive values)
pt = PowerTransformer(method='box-cox')
df['transformed'] = pt.fit_transform(df[['positive_col']])

# Yeo-Johnson (handles negative values)
pt = PowerTransformer(method='yeo-johnson')
df['transformed'] = pt.fit_transform(df[['any_col']])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Creating New Features"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Mathematical combinations
df['price_per_sqft'] = df['price'] / df['sqft']
df['total_value'] = df['quantity'] * df['unit_price']
df['ratio'] = df['feature_a'] / (df['feature_b'] + 1)

# Date/time features
df['date'] = pd.to_datetime(df['date'])
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek
df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)
df['quarter'] = df['date'].dt.quarter
df['days_since_start'] = (df['date'] - df['date'].min()).dt.days

# Binning continuous variables
df['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 55, 100],
                          labels=['young', 'adult', 'middle', 'senior'])

# Interaction features
df['bedroom_bathroom'] = df['bedrooms'].astype(str) + '_' + df['bathrooms'].astype(str)

# Polynomial features
from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree=2, include_bias=False)
poly_features = poly.fit_transform(df[['x1', 'x2']])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Text Features"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer

# Basic text features
df['text_length'] = df['text'].str.len()
df['word_count'] = df['text'].str.split().str.len()
df['avg_word_length'] = df['text'].apply(lambda x: np.mean([len(w) for w in x.split()]))

# TF-IDF
tfidf = TfidfVectorizer(max_features=1000, stop_words='english')
tfidf_matrix = tfidf.fit_transform(df['text'])

# Count Vectorizer (Bag of Words)
count_vec = CountVectorizer(max_features=500)
count_matrix = count_vec.fit_transform(df['text'])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Feature Selection"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.feature_selection import SelectKBest, f_classif, mutual_info_classif
from sklearn.feature_selection import RFE
from sklearn.ensemble import RandomForestClassifier

# Correlation analysis
corr_matrix = df.corr()
high_corr = np.where(np.abs(corr_matrix) > 0.8)

# SelectKBest
selector = SelectKBest(f_classif, k=20)
X_selected = selector.fit_transform(X, y)
selected_features = X.columns[selector.get_support()]

# Mutual information
mi_selector = SelectKBest(mutual_info_classif, k=20)
X_mi = mi_selector.fit_transform(X, y)

# Feature importance from tree models
rf = RandomForestClassifier(n_estimators=100)
rf.fit(X, y)
importances = pd.Series(rf.feature_importances_, index=X.columns)
top_features = importances.nlargest(20)

# Recursive Feature Elimination
rfe = RFE(estimator=rf, n_features_to_select=15)
X_rfe = rfe.fit_transform(X, y)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Understand your data:"}
                    </strong>
                    {" EDA before engineering"}
                  </li>
                  <li>
                    <strong>
                      {"Prevent data leakage:"}
                    </strong>
                    {" Fit transformers on train data only"}
                  </li>
                  <li>
                    <strong>
                      {"Use pipelines:"}
                    </strong>
                    {" Ensure reproducibility"}
                  </li>
                  <li>
                    <strong>
                      {"Domain knowledge:"}
                    </strong>
                    {" The best features come from understanding the problem"}
                  </li>
                  <li>
                    <strong>
                      {"Iterate:"}
                    </strong>
                    {" Feature engineering is an iterative process"}
                  </li>
                  <li>
                    <strong>
                      {"Validate:"}
                    </strong>
                    {" Cross-validation to ensure features generalize"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Feature Engineering with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers feature engineering techniques that win competitions and solve real problems. Learn with hands-on projects and expert guidance."}
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
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Core ML concepts and algorithms"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/scikit-learn" className="related-article-card">
                    <h4>
                      {"Scikit-learn Library"}
                    </h4>
                    {" "}
                    <p>
                      {"Essential ML tools in Python"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/xgboost" className="related-article-card">
                    <h4>
                      {"XGBoost"}
                    </h4>
                    {" "}
                    <p>
                      {"Gradient boosting for tabular data"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Feature Engineering."} />
    </>
  );
}
