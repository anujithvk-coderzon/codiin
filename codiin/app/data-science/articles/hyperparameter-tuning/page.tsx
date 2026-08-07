import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Hyperparameter Tuning Guide",
  description: "Master Hyperparameter Tuning - Grid Search, Random Search, Bayesian Optimization with Optuna. Optimize your ML models for best performance.",
  keywords: ["hyperparameter tuning", "grid search", "random search", "Optuna", "Bayesian optimization", "ML optimization"],
  alternates: { canonical: "/data-science/articles/hyperparameter-tuning" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/hyperparameter-tuning",
    title: "Hyperparameter Tuning: Optimize Your ML Models",
    description: "Learn systematic approaches to find the best model parameters.",
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
  "headline": "Hyperparameter Tuning: Optimize Your ML Models",
  "description": "Complete guide to hyperparameter optimization",
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

export default function DataScienceHyperparameterTuningPage() {
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
                {"Hyperparameter Tuning"}
              </span>
            </div>
            <h1>
              {"Hyperparameter Tuning"}
            </h1>
            <p className="article-subtitle">
              {"Systematic Model Optimization"}
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
                  {"Parameters vs Hyperparameters"}
                </h2>
                <p>
                  <strong>
                    {"Parameters"}
                  </strong>
                  {" are learned from data during training (e.g., neural network weights). "}
                  <strong>
                    {"Hyperparameters"}
                  </strong>
                  {" are set before training and control the learning process."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Examples of hyperparameters:

# Random Forest
# - n_estimators: number of trees
# - max_depth: tree depth
# - min_samples_split: minimum samples to split

# Neural Networks
# - learning_rate: step size for gradient descent
# - batch_size: samples per gradient update
# - num_layers: network depth

# XGBoost
# - learning_rate: shrinkage
# - max_depth: tree depth
# - n_estimators: boosting rounds

# Why tune?
# Default hyperparameters rarely give best results
# Proper tuning can improve accuracy by 5-20%!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Grid Search"}
                </h2>
                <p>
                  {"Exhaustively search through all combinations of specified hyperparameters."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

# Define parameter grid
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [5, 10, 15, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# This will try 3 * 4 * 3 * 3 = 108 combinations!

model = RandomForestClassifier(random_state=42)

grid_search = GridSearchCV(
    model,
    param_grid,
    cv=5,                    # 5-fold cross-validation
    scoring='f1',            # Metric to optimize
    n_jobs=-1,               # Use all CPU cores
    verbose=2
)

grid_search.fit(X_train, y_train)

# Best results
print(f"Best parameters: {grid_search.best_params_}")
print(f"Best score: {grid_search.best_score_:.4f}")

# Use best model
best_model = grid_search.best_estimator_
predictions = best_model.predict(X_test)

# Pros: Thorough, guaranteed to find best in grid
# Cons: Very slow, exponential growth with parameters`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Random Search"}
                </h2>
                <p>
                  {"Randomly sample from parameter distributions. Often better than grid search!"}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

# Define parameter distributions
param_dist = {
    'n_estimators': randint(100, 500),
    'max_depth': randint(3, 20),
    'min_samples_split': randint(2, 20),
    'min_samples_leaf': randint(1, 10),
    'max_features': uniform(0.1, 0.9)  # Continuous
}

random_search = RandomizedSearchCV(
    RandomForestClassifier(random_state=42),
    param_distributions=param_dist,
    n_iter=50,               # Number of random combinations
    cv=5,
    scoring='f1',
    n_jobs=-1,
    random_state=42,
    verbose=2
)

random_search.fit(X_train, y_train)

print(f"Best parameters: {random_search.best_params_}")
print(f"Best score: {random_search.best_score_:.4f}")

# Why Random Search is often better:
# - Same compute budget explores more values per parameter
# - Some parameters matter more than others
# - Not all combinations need to be tested`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Bayesian Optimization with Optuna"}
                </h2>
                <p>
                  {"Intelligently explore the parameter space using probabilistic models. The state-of-the-art approach."}
                </p>
                <div className="code-block">
                  <pre><code>{`# pip install optuna
import optuna
from sklearn.model_selection import cross_val_score

def objective(trial):
    # Define hyperparameter search space
    params = {
        'n_estimators': trial.suggest_int('n_estimators', 100, 500),
        'max_depth': trial.suggest_int('max_depth', 3, 20),
        'min_samples_split': trial.suggest_int('min_samples_split', 2, 20),
        'min_samples_leaf': trial.suggest_int('min_samples_leaf', 1, 10),
        'max_features': trial.suggest_float('max_features', 0.1, 1.0)
    }

    model = RandomForestClassifier(**params, random_state=42)
    score = cross_val_score(model, X_train, y_train, cv=5, scoring='f1')
    return score.mean()

# Create study and optimize
study = optuna.create_study(direction='maximize')  # Maximize F1
study.optimize(objective, n_trials=100, show_progress_bar=True)

# Results
print(f"Best trial: {study.best_trial.params}")
print(f"Best score: {study.best_value:.4f}")

# Train final model with best params
best_model = RandomForestClassifier(**study.best_trial.params, random_state=42)
best_model.fit(X_train, y_train)

# Visualize optimization
optuna.visualization.plot_optimization_history(study)
optuna.visualization.plot_param_importances(study)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Optuna for Deep Learning"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import optuna
import tensorflow as tf
from tensorflow import keras

def create_model(trial):
    # Architecture hyperparameters
    n_layers = trial.suggest_int('n_layers', 1, 4)
    units = trial.suggest_int('units', 32, 256)
    dropout = trial.suggest_float('dropout', 0.1, 0.5)
    learning_rate = trial.suggest_float('learning_rate', 1e-5, 1e-2, log=True)

    model = keras.Sequential()
    model.add(keras.layers.Input(shape=(X_train.shape[1],)))

    for i in range(n_layers):
        model.add(keras.layers.Dense(units, activation='relu'))
        model.add(keras.layers.Dropout(dropout))

    model.add(keras.layers.Dense(1, activation='sigmoid'))

    model.compile(
        optimizer=keras.optimizers.Adam(learning_rate),
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    return model

def objective(trial):
    model = create_model(trial)

    # Training hyperparameters
    batch_size = trial.suggest_int('batch_size', 16, 128)

    # Pruning callback (stop unpromising trials early)
    pruning_callback = optuna.integration.TFKerasPruningCallback(
        trial, 'val_accuracy'
    )

    history = model.fit(
        X_train, y_train,
        epochs=50,
        batch_size=batch_size,
        validation_split=0.2,
        callbacks=[pruning_callback],
        verbose=0
    )

    return max(history.history['val_accuracy'])

study = optuna.create_study(
    direction='maximize',
    pruner=optuna.pruners.MedianPruner()  # Early stop bad trials
)
study.optimize(objective, n_trials=50)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"XGBoost Tuning Guide"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import xgboost as xgb
import optuna

def objective(trial):
    params = {
        'objective': 'binary:logistic',
        'eval_metric': 'auc',
        'booster': 'gbtree',

        # Most important parameters
        'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
        'n_estimators': trial.suggest_int('n_estimators', 100, 1000),
        'max_depth': trial.suggest_int('max_depth', 3, 10),

        # Regularization
        'reg_alpha': trial.suggest_float('reg_alpha', 1e-8, 10, log=True),
        'reg_lambda': trial.suggest_float('reg_lambda', 1e-8, 10, log=True),

        # Tree-specific
        'min_child_weight': trial.suggest_int('min_child_weight', 1, 10),
        'subsample': trial.suggest_float('subsample', 0.5, 1.0),
        'colsample_bytree': trial.suggest_float('colsample_bytree', 0.5, 1.0),
    }

    model = xgb.XGBClassifier(**params, random_state=42, n_jobs=-1)
    score = cross_val_score(model, X_train, y_train, cv=5, scoring='roc_auc')
    return score.mean()

# Tuning order recommendation:
# 1. n_estimators, learning_rate (most important)
# 2. max_depth, min_child_weight
# 3. subsample, colsample_bytree
# 4. reg_alpha, reg_lambda (regularization)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Practical Tips"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start with defaults:"}
                    </strong>
                    {" Get a baseline before tuning"}
                  </li>
                  <li>
                    <strong>
                      {"Focus on important parameters:"}
                    </strong>
                    {" Not all hyperparameters matter equally"}
                  </li>
                  <li>
                    <strong>
                      {"Use Random Search first:"}
                    </strong>
                    {" Quick exploration of the search space"}
                  </li>
                  <li>
                    <strong>
                      {"Then Bayesian optimization:"}
                    </strong>
                    {" For fine-tuning promising regions"}
                  </li>
                  <li>
                    <strong>
                      {"Always use cross-validation:"}
                    </strong>
                    {" Single train-test split is unreliable"}
                  </li>
                  <li>
                    <strong>
                      {"Set a time budget:"}
                    </strong>
                    {" Diminishing returns after certain point"}
                  </li>
                  <li>
                    <strong>
                      {"Log your experiments:"}
                    </strong>
                    {" Use MLflow or Weights & Biases"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Parameter Ranges"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Random Forest
param_dist_rf = {
    'n_estimators': (100, 500),
    'max_depth': (5, 30),
    'min_samples_split': (2, 20),
    'min_samples_leaf': (1, 10),
    'max_features': ['sqrt', 'log2', 0.3, 0.5, 0.7]
}

# XGBoost / LightGBM
param_dist_xgb = {
    'learning_rate': (0.01, 0.3),
    'n_estimators': (100, 1000),
    'max_depth': (3, 10),
    'min_child_weight': (1, 10),
    'subsample': (0.5, 1.0),
    'colsample_bytree': (0.5, 1.0),
    'reg_alpha': (1e-8, 10),  # Log scale
    'reg_lambda': (1e-8, 10)  # Log scale
}

# Neural Networks
param_dist_nn = {
    'learning_rate': (1e-5, 1e-2),  # Log scale
    'batch_size': [16, 32, 64, 128],
    'hidden_layers': (1, 5),
    'units_per_layer': (32, 512),
    'dropout': (0.0, 0.5)
}`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Hyperparameter Tuning"}
                </h2>
                <p>
                  {"Our Data Science program teaches systematic model optimization techniques."}
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
                  <Link href="/data-science/articles/model-evaluation" className="related-article-card">
                    <h4>
                      {"Model Evaluation"}
                    </h4>
                    {" "}
                    <p>
                      {"Metrics and validation strategies"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/xgboost" className="related-article-card">
                    <h4>
                      {"XGBoost"}
                    </h4>
                    {" "}
                    <p>
                      {"Gradient boosting mastery"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Core ML concepts"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Hyperparameter Tuning."} />
    </>
  );
}
