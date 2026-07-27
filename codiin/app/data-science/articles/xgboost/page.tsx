import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "XGBoost: The Kaggle-Winning Algorithm",
  description: "Learn XGBoost - the gradient boosting algorithm that wins Kaggle competitions. Understand how it works, hyperparameter tuning, and best practices.",
  keywords: ["XGBoost tutorial", "gradient boosting", "Kaggle", "LightGBM", "CatBoost", "ensemble learning", "machine learning"],
  alternates: { canonical: "/data-science/articles/xgboost" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/xgboost",
    title: "XGBoost: The Kaggle-Winning Algorithm",
    description: "Master XGBoost for tabular data and machine learning competitions.",
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
  "headline": "XGBoost: The Kaggle-Winning Algorithm",
  "description": "Complete guide to XGBoost and gradient boosting",
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

export default function DataScienceXgboostPage() {
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
                {"XGBoost"}
              </span>
            </div>
            <h1>
              {"XGBoost"}
            </h1>
            <p className="article-subtitle">
              {"The Gradient Boosting Algorithm That Wins Competitions"}
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
                  {"What is XGBoost?"}
                </h2>
                <p>
                  {"XGBoost (eXtreme Gradient Boosting) is an optimized gradient boosting library designed for speed and performance. It has won numerous Kaggle competitions and is the go-to algorithm for tabular data in both competitions and production systems."}
                </p>
                <p>
                  {"XGBoost builds an ensemble of decision trees sequentially, where each tree corrects the errors of the previous ones. It's known for handling missing values, regularization, and parallel processing."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"How Gradient Boosting Works"}
                </h2>
                <ol>
                  <li>
                    {"Start with an initial prediction (often the mean)"}
                  </li>
                  <li>
                    {"Calculate residuals (errors)"}
                  </li>
                  <li>
                    {"Train a tree to predict the residuals"}
                  </li>
                  <li>
                    {"Add the tree's predictions to improve the model"}
                  </li>
                  <li>
                    {"Repeat with new residuals"}
                  </li>
                </ol>
                <p>
                  {"Each tree is small and weak, but together they form a powerful ensemble."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic Usage"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Prepare data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create DMatrix (XGBoost's optimized data structure)
dtrain = xgb.DMatrix(X_train, label=y_train)
dtest = xgb.DMatrix(X_test, label=y_test)

# Parameters
params = {
    'objective': 'binary:logistic',  # or 'multi:softmax' for multiclass
    'eval_metric': 'auc',
    'max_depth': 6,
    'learning_rate': 0.1,
    'n_estimators': 100
}

# Train
model = xgb.train(params, dtrain, num_boost_round=100)

# Predict
predictions = model.predict(dtest)
pred_labels = (predictions > 0.5).astype(int)

print(classification_report(y_test, pred_labels))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Sklearn API"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from xgboost import XGBClassifier, XGBRegressor

# Classification
clf = XGBClassifier(
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
    use_label_encoder=False,
    eval_metric='logloss'
)

clf.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=10)

# Predictions
predictions = clf.predict(X_test)
probabilities = clf.predict_proba(X_test)

# Regression
reg = XGBRegressor(
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1
)
reg.fit(X_train, y_train)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Hyperparameters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"n_estimators:"}
                    </strong>
                    {" Number of trees (100-1000)"}
                  </li>
                  <li>
                    <strong>
                      {"max_depth:"}
                    </strong>
                    {" Tree depth (3-10, deeper = more complex)"}
                  </li>
                  <li>
                    <strong>
                      {"learning_rate:"}
                    </strong>
                    {" Step size (0.01-0.3, lower = more trees needed)"}
                  </li>
                  <li>
                    <strong>
                      {"subsample:"}
                    </strong>
                    {" Row sampling (0.5-1.0)"}
                  </li>
                  <li>
                    <strong>
                      {"colsample_bytree:"}
                    </strong>
                    {" Column sampling (0.5-1.0)"}
                  </li>
                  <li>
                    <strong>
                      {"min_child_weight:"}
                    </strong>
                    {" Minimum sum of weights in a leaf"}
                  </li>
                  <li>
                    <strong>
                      {"gamma:"}
                    </strong>
                    {" Minimum loss reduction for split"}
                  </li>
                  <li>
                    <strong>
                      {"reg_alpha:"}
                    </strong>
                    {" L1 regularization"}
                  </li>
                  <li>
                    <strong>
                      {"reg_lambda:"}
                    </strong>
                    {" L2 regularization"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Hyperparameter Tuning"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import GridSearchCV, RandomizedSearchCV
import optuna

# Grid Search
param_grid = {
    'max_depth': [3, 5, 7],
    'learning_rate': [0.01, 0.1, 0.2],
    'n_estimators': [100, 200, 300],
    'subsample': [0.8, 0.9, 1.0]
}

grid_search = GridSearchCV(
    XGBClassifier(use_label_encoder=False, eval_metric='logloss'),
    param_grid, cv=5, scoring='roc_auc', n_jobs=-1
)
grid_search.fit(X_train, y_train)
print(f"Best params: {grid_search.best_params_}")

# Optuna (Bayesian optimization)
def objective(trial):
    params = {
        'max_depth': trial.suggest_int('max_depth', 3, 10),
        'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
        'n_estimators': trial.suggest_int('n_estimators', 100, 500),
        'subsample': trial.suggest_float('subsample', 0.6, 1.0),
        'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0),
    }

    model = XGBClassifier(**params, use_label_encoder=False, eval_metric='logloss')
    model.fit(X_train, y_train)
    predictions = model.predict(X_test)
    return accuracy_score(y_test, predictions)

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=50)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Feature Importance"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import matplotlib.pyplot as plt

# Built-in feature importance
xgb.plot_importance(model, max_num_features=20)
plt.tight_layout()
plt.show()

# Get importance scores
importance = model.get_score(importance_type='gain')  # or 'weight', 'cover'

# SHAP values for better interpretability
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Summary plot
shap.summary_plot(shap_values, X_test)

# Single prediction explanation
shap.force_plot(explainer.expected_value, shap_values[0], X_test.iloc[0])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LightGBM & CatBoost Alternatives"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# LightGBM - faster, handles large datasets
import lightgbm as lgb

lgb_model = lgb.LGBMClassifier(
    n_estimators=100,
    learning_rate=0.1,
    num_leaves=31,
    max_depth=-1
)
lgb_model.fit(X_train, y_train)

# CatBoost - handles categorical features natively
from catboost import CatBoostClassifier

cat_model = CatBoostClassifier(
    iterations=100,
    learning_rate=0.1,
    depth=6,
    cat_features=categorical_columns  # Pass categorical column indices/names
)
cat_model.fit(X_train, y_train, verbose=10)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start with defaults:"}
                    </strong>
                    {" XGBoost defaults are reasonable"}
                  </li>
                  <li>
                    <strong>
                      {"Use early stopping:"}
                    </strong>
                    {" Prevent overfitting"}
                  </li>
                  <li>
                    <strong>
                      {"Lower learning rate, more trees:"}
                    </strong>
                    {" Often improves performance"}
                  </li>
                  <li>
                    <strong>
                      {"Feature engineering matters:"}
                    </strong>
                    {" Good features beat hyperparameter tuning"}
                  </li>
                  <li>
                    <strong>
                      {"Cross-validation:"}
                    </strong>
                    {" Always validate properly"}
                  </li>
                  <li>
                    <strong>
                      {"Handle imbalanced data:"}
                    </strong>
                    {" Use scale_pos_weight parameter"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master XGBoost with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers XGBoost and gradient boosting in depth. Win competitions and build production models with expert guidance."}
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
                      {"Core ML concepts"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/scikit-learn" className="related-article-card">
                    <h4>
                      {"Scikit-learn"}
                    </h4>
                    {" "}
                    <p>
                      {"Essential ML library"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Prepare data for models"}
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
                {"Empowering the next generation of tech professionals."}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn XGBoost."} />
    </>
  );
}
