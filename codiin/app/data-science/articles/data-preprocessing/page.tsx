import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Data Preprocessing Guide: Cleaning & Transforming Data",
  description: "Learn Data Preprocessing techniques - data cleaning, normalization, encoding, handling missing values, outliers, and feature scaling with Python.",
  keywords: ["data preprocessing", "data cleaning", "missing values", "outliers", "normalization", "feature scaling", "encoding", "data transformation"],
  alternates: { canonical: "/data-science/articles/data-preprocessing" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/data-preprocessing",
    title: "Data Preprocessing: Complete Guide to Data Cleaning",
    description: "Master data preprocessing techniques including handling missing values, outliers, normalization, and encoding.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Data Preprocessing: Complete Guide to Data Cleaning",
  "description": "Comprehensive guide to data preprocessing techniques including cleaning, normalization, and transformation",
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

export default function DataScienceDataPreprocessingPage() {
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
                {"Data Preprocessing"}
              </span>
            </div>
            <h1>
              {"Data Preprocessing"}
            </h1>
            <p className="article-subtitle">
              {"The Essential Guide to Cleaning and Transforming Data"}
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
                  {"What is Data Preprocessing?"}
                </h2>
                <p>
                  {"Data preprocessing is the critical process of transforming raw data into a clean, structured format suitable for machine learning models. It's often said that data scientists spend 80% of their time on data preparation - and for good reason."}
                </p>
                <p>
                  {"Real-world data is messy: it contains missing values, outliers, inconsistent formats, and irrelevant features. Models trained on poorly preprocessed data will produce unreliable results, regardless of algorithm sophistication. Quality data preprocessing is the foundation of successful machine learning projects."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Data Preprocessing Matters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Improved Model Performance:"}
                    </strong>
                    {" Clean data leads to better predictions and higher accuracy"}
                  </li>
                  <li>
                    <strong>
                      {"Faster Training:"}
                    </strong>
                    {" Proper scaling and encoding reduce computational overhead"}
                  </li>
                  <li>
                    <strong>
                      {"Reduced Bias:"}
                    </strong>
                    {" Handling outliers and imbalanced data prevents skewed models"}
                  </li>
                  <li>
                    <strong>
                      {"Better Interpretability:"}
                    </strong>
                    {" Standardized features make models easier to understand"}
                  </li>
                  <li>
                    <strong>
                      {"Robust Predictions:"}
                    </strong>
                    {" Consistent data formats ensure reliable production performance"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"1. Handling Missing Values"}
                </h2>
                <p>
                  {"Missing data is one of the most common problems. Your strategy depends on the amount and pattern of missingness."}
                </p>
                <h3>
                  {"Understanding Missing Data"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np

# Check for missing values
print(df.isnull().sum())

# Visualize missing data percentage
missing_percent = (df.isnull().sum() / len(df)) * 100
print(missing_percent[missing_percent > 0].sort_values(ascending=False))

# Visualize missing data patterns
import missingno as msno
msno.matrix(df)  # Shows patterns of missingness`}</code></pre>
                </div>
                <h3>
                  {"Strategies for Handling Missing Values"}
                </h3>
                <h4>
                  {"Option 1: Remove Missing Data"}
                </h4>
                <p>
                  {"Use when missing data is minimal (<5%) and randomly distributed."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Remove rows with any missing values
df_clean = df.dropna()

# Remove rows where specific column is missing
df_clean = df.dropna(subset=['important_column'])

# Remove columns with too many missing values (>50%)
threshold = len(df) * 0.5
df_clean = df.dropna(axis=1, thresh=threshold)`}</code></pre>
                </div>
                <h4>
                  {"Option 2: Simple Imputation"}
                </h4>
                <div className="code-block">
                  <pre><code>{`from sklearn.impute import SimpleImputer

# Numerical features: fill with mean/median
imputer_num = SimpleImputer(strategy='median')
df['age'] = imputer_num.fit_transform(df[['age']])

# Categorical features: fill with most frequent value
imputer_cat = SimpleImputer(strategy='most_frequent')
df['category'] = imputer_cat.fit_transform(df[['category']])

# Or use pandas directly
df['salary'].fillna(df['salary'].median(), inplace=True)
df['city'].fillna(df['city'].mode()[0], inplace=True)`}</code></pre>
                </div>
                <h4>
                  {"Option 3: Advanced Imputation"}
                </h4>
                <div className="code-block">
                  <pre><code>{`from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer, KNNImputer

# Iterative imputation (models each feature with missing values)
iterative_imputer = IterativeImputer(max_iter=10, random_state=42)
df_imputed = pd.DataFrame(
    iterative_imputer.fit_transform(df),
    columns=df.columns
)

# KNN Imputation (uses similar samples)
knn_imputer = KNNImputer(n_neighbors=5)
df_imputed = pd.DataFrame(
    knn_imputer.fit_transform(df),
    columns=df.columns
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"2. Handling Outliers"}
                </h2>
                <p>
                  {"Outliers are extreme values that can distort model training. They can be errors or genuine rare events."}
                </p>
                <h3>
                  {"Detecting Outliers"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import matplotlib.pyplot as plt
import seaborn as sns

# Visualize outliers with box plots
plt.figure(figsize=(12, 6))
df.boxplot(column=['age', 'salary', 'score'])
plt.show()

# Statistical detection: Z-score method
from scipy import stats
z_scores = np.abs(stats.zscore(df['salary']))
outliers = df[z_scores > 3]  # Values beyond 3 standard deviations

# IQR (Interquartile Range) method
Q1 = df['salary'].quantile(0.25)
Q3 = df['salary'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
outliers = df[(df['salary'] < lower_bound) | (df['salary'] > upper_bound)]`}</code></pre>
                </div>
                <h3>
                  {"Handling Outliers"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Option 1: Remove outliers
df_clean = df[(df['salary'] >= lower_bound) & (df['salary'] <= upper_bound)]

# Option 2: Cap outliers (winsorization)
df['salary'] = df['salary'].clip(lower=lower_bound, upper=upper_bound)

# Option 3: Transform data (log transformation)
df['salary_log'] = np.log1p(df['salary'])  # log(1 + x) to handle zeros

# Option 4: Robust scaling (less sensitive to outliers)
from sklearn.preprocessing import RobustScaler
scaler = RobustScaler()
df['salary_scaled'] = scaler.fit_transform(df[['salary']])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"3. Feature Scaling and Normalization"}
                </h2>
                <p>
                  {"Machine learning algorithms perform better when features are on similar scales. This is crucial for distance-based algorithms and gradient descent."}
                </p>
                <h3>
                  {"Standardization (Z-score Normalization)"}
                </h3>
                <p>
                  {"Transforms features to have mean=0 and std=1. Use when data follows normal distribution."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Use same scaling parameters

# Creates features with mean=0, std=1
# Formula: (x - mean) / std`}</code></pre>
                </div>
                <h3>
                  {"Min-Max Normalization"}
                </h3>
                <p>
                  {"Scales features to a fixed range [0, 1]. Use when you need bounded values."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)

# Formula: (x - min) / (max - min)
# Result: all values between 0 and 1`}</code></pre>
                </div>
                <h3>
                  {"Robust Scaling"}
                </h3>
                <p>
                  {"Uses median and IQR, less sensitive to outliers."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import RobustScaler

scaler = RobustScaler()
X_scaled = scaler.fit_transform(X)

# Formula: (x - median) / IQR
# Better for data with outliers`}</code></pre>
                </div>
                <h3>
                  {"When to Use Each Scaler"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"StandardScaler:"}
                    </strong>
                    {" Most common. Use for normally distributed data, algorithms like SVM, KNN, PCA"}
                  </li>
                  <li>
                    <strong>
                      {"MinMaxScaler:"}
                    </strong>
                    {" Use when you need bounded ranges (e.g., neural networks with sigmoid/tanh)"}
                  </li>
                  <li>
                    <strong>
                      {"RobustScaler:"}
                    </strong>
                    {" Use when data has outliers that you want to keep"}
                  </li>
                  <li>
                    <strong>
                      {"No Scaling:"}
                    </strong>
                    {" Tree-based models (Random Forest, XGBoost) don't need scaling"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"4. Encoding Categorical Variables"}
                </h2>
                <p>
                  {"Machine learning models need numerical input. Convert categorical variables appropriately based on their nature."}
                </p>
                <h3>
                  {"One-Hot Encoding"}
                </h3>
                <p>
                  {"Use for nominal categories (no inherent order). Creates binary columns for each category."}
                </p>
                <div className="code-block">
                  <pre><code>{`import pandas as pd

# Pandas get_dummies
df_encoded = pd.get_dummies(df, columns=['city', 'department'])

# Scikit-learn OneHotEncoder (better for pipelines)
from sklearn.preprocessing import OneHotEncoder

encoder = OneHotEncoder(sparse=False, handle_unknown='ignore')
encoded = encoder.fit_transform(df[['city', 'department']])

# Get feature names
feature_names = encoder.get_feature_names_out(['city', 'department'])
df_encoded = pd.DataFrame(encoded, columns=feature_names)`}</code></pre>
                </div>
                <h3>
                  {"Label Encoding"}
                </h3>
                <p>
                  {"Use for ordinal categories (has order). Assigns integers to categories."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import LabelEncoder

# For ordinal features with order
le = LabelEncoder()
df['education_encoded'] = le.fit_transform(df['education'])
# Example: 'High School'=0, 'Bachelor'=1, 'Master'=2, 'PhD'=3

# For target variable in classification
y_encoded = le.fit_transform(y)

# Decode back to original labels
y_original = le.inverse_transform(y_encoded)`}</code></pre>
                </div>
                <h3>
                  {"Ordinal Encoding"}
                </h3>
                <p>
                  {"Use when you want to specify custom ordering."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.preprocessing import OrdinalEncoder

# Define custom order
categories = [['Low', 'Medium', 'High']]
encoder = OrdinalEncoder(categories=categories)
df['priority_encoded'] = encoder.fit_transform(df[['priority']])

# Or use pandas map for simple cases
priority_map = {'Low': 0, 'Medium': 1, 'High': 2}
df['priority_encoded'] = df['priority'].map(priority_map)`}</code></pre>
                </div>
                <h3>
                  {"Target Encoding"}
                </h3>
                <p>
                  {"Replace categories with target mean. Use carefully to avoid data leakage."}
                </p>
                <div className="code-block">
                  <pre><code>{`from category_encoders import TargetEncoder

# Use only on training data, then transform test data
encoder = TargetEncoder()
X_train_encoded = encoder.fit_transform(X_train['category'], y_train)
X_test_encoded = encoder.transform(X_test['category'])

# Adds regularization to prevent overfitting on rare categories`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"5. Feature Transformation"}
                </h2>
                <p>
                  {"Transform features to better meet model assumptions and improve performance."}
                </p>
                <h3>
                  {"Log Transformation"}
                </h3>
                <p>
                  {"Reduces right skewness, handles wide value ranges."}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np

# Log transformation (for positive values)
df['income_log'] = np.log1p(df['income'])  # log(1 + x) handles zeros

# Square root transformation (milder than log)
df['price_sqrt'] = np.sqrt(df['price'])

# Box-Cox transformation (finds best power transformation)
from scipy.stats import boxcox
df['transformed'], lambda_param = boxcox(df['skewed_feature'])`}</code></pre>
                </div>
                <h3>
                  {"Binning/Discretization"}
                </h3>
                <p>
                  {"Convert continuous variables into categorical bins."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Equal-width binning
df['age_group'] = pd.cut(df['age'], bins=5, labels=['Very Young', 'Young', 'Middle', 'Senior', 'Elderly'])

# Custom bins
bins = [0, 18, 35, 50, 65, 100]
labels = ['Child', 'Young Adult', 'Adult', 'Middle Age', 'Senior']
df['age_category'] = pd.cut(df['age'], bins=bins, labels=labels)

# Quantile-based binning (equal frequency)
df['income_quartile'] = pd.qcut(df['income'], q=4, labels=['Q1', 'Q2', 'Q3', 'Q4'])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"6. Handling Duplicates"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check for duplicates
duplicates = df.duplicated()
print(f"Number of duplicates: {duplicates.sum()}")

# View duplicate rows
print(df[df.duplicated(keep=False)])

# Remove duplicates (keep first occurrence)
df_clean = df.drop_duplicates()

# Remove duplicates based on specific columns
df_clean = df.drop_duplicates(subset=['customer_id', 'date'])

# Remove duplicates keeping last occurrence
df_clean = df.drop_duplicates(keep='last')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Preprocessing Pipeline"}
                </h2>
                <p>
                  {"Put it all together with scikit-learn's Pipeline for reproducible preprocessing."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer

# Define feature types
numeric_features = ['age', 'salary', 'experience']
categorical_features = ['city', 'department', 'education']

# Numeric pipeline
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

# Categorical pipeline
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

# Combine transformers
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Use in a full pipeline with a model
from sklearn.ensemble import RandomForestClassifier

full_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier())
])

# Fit and predict (preprocessing happens automatically)
full_pipeline.fit(X_train, y_train)
predictions = full_pipeline.predict(X_test)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Understand Your Data First:"}
                    </strong>
                    {" Always perform EDA before preprocessing"}
                  </li>
                  <li>
                    <strong>
                      {"Split Before Preprocessing:"}
                    </strong>
                    {" Split train/test sets first to prevent data leakage"}
                  </li>
                  <li>
                    <strong>
                      {"Fit on Training Only:"}
                    </strong>
                    {" Calculate statistics (mean, std) on training data only"}
                  </li>
                  <li>
                    <strong>
                      {"Document Decisions:"}
                    </strong>
                    {" Keep track of why you chose specific preprocessing steps"}
                  </li>
                  <li>
                    <strong>
                      {"Use Pipelines:"}
                    </strong>
                    {" Ensure consistent preprocessing on new data"}
                  </li>
                  <li>
                    <strong>
                      {"Validate Results:"}
                    </strong>
                    {" Check that preprocessing improved model performance"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Time Series Carefully:"}
                    </strong>
                    {" Don't shuffle or use future data for past predictions"}
                  </li>
                  <li>
                    <strong>
                      {"Consider Domain Knowledge:"}
                    </strong>
                    {" Some outliers might be genuine important events"}
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
                      {"Data Leakage:"}
                    </strong>
                    {" Fitting scalers on entire dataset including test data"}
                  </li>
                  <li>
                    <strong>
                      {"Over-preprocessing:"}
                    </strong>
                    {" Removing too much data or creating too many features"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring Test Set:"}
                    </strong>
                    {" Preprocessing that works on training might fail on new data"}
                  </li>
                  <li>
                    <strong>
                      {"Wrong Encoding:"}
                    </strong>
                    {" One-hot encoding ordinal features, or label encoding nominal ones"}
                  </li>
                  <li>
                    <strong>
                      {"Scaling Tree Models:"}
                    </strong>
                    {" Unnecessary for Random Forest, XGBoost, etc."}
                  </li>
                  <li>
                    <strong>
                      {"Forgetting to Save Preprocessing Objects:"}
                    </strong>
                    {" Can't preprocess new data in production"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Data Preprocessing with Expert Guidance"}
                </h2>
                <p>
                  {"Our Data Science program covers comprehensive data preprocessing techniques with hands-on projects. Learn to clean and transform real-world messy data."}
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
                  <Link href="/data-science/articles/eda" className="related-article-card">
                    <h4>
                      {"Exploratory Data Analysis (EDA)"}
                    </h4>
                    {" "}
                    <p>
                      {"Understand your data before preprocessing with powerful visualization techniques"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering: The Art of Data Preparation"}
                    </h4>
                    {" "}
                    <p>
                      {"Create powerful features from preprocessed data"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Build models with your clean, preprocessed data"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Data Preprocessing."} />
    </>
  );
}
