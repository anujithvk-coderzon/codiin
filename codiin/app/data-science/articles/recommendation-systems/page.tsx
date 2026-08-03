import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Recommendation Systems: Collaborative & Content-Based Filtering",
  description: "Learn Recommendation Systems - collaborative filtering, content-based filtering, matrix factorization, and building recommenders with Python for personalized suggestions.",
  keywords: ["recommendation systems", "collaborative filtering", "content-based filtering", "matrix factorization", "recommender systems", "personalization", "Netflix recommendations"],
  alternates: { canonical: "/data-science/articles/recommendation-systems" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/recommendation-systems",
    title: "Recommendation Systems: Complete Guide to Personalization",
    description: "Master recommendation systems with collaborative filtering, content-based methods, and hybrid approaches.",
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
  "headline": "Recommendation Systems: Complete Guide to Personalization",
  "description": "Comprehensive guide to building recommendation systems with collaborative and content-based filtering",
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

export default function DataScienceRecommendationSystemsPage() {
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
                {"Recommendation Systems"}
              </span>
            </div>
            <h1>
              {"Recommendation Systems"}
            </h1>
            <p className="article-subtitle">
              {"Build Personalized Recommenders Like Netflix and Amazon"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"22 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What are Recommendation Systems?"}
                </h2>
                <p>
                  {"Recommendation systems are algorithms designed to suggest relevant items to users based on their preferences, behavior, and similar users' choices. They power the \"You might also like\" features on Netflix, Amazon, Spotify, YouTube, and virtually every modern platform."}
                </p>
                <p>
                  {"These systems analyze vast amounts of data about user interactions (ratings, clicks, purchases, views) to predict what items a user will enjoy next. They're one of the most successful applications of machine learning in e-commerce and content platforms."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Recommendation Systems Matter"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Increased Revenue:"}
                    </strong>
                    {" Amazon attributes 35% of revenue to recommendations"}
                  </li>
                  <li>
                    <strong>
                      {"User Engagement:"}
                    </strong>
                    {" Netflix estimates 80% of watched content comes from recommendations"}
                  </li>
                  <li>
                    <strong>
                      {"Reduced Choice Overload:"}
                    </strong>
                    {" Help users navigate millions of options"}
                  </li>
                  <li>
                    <strong>
                      {"Personalization:"}
                    </strong>
                    {" Create unique experiences for each user"}
                  </li>
                  <li>
                    <strong>
                      {"Discovery:"}
                    </strong>
                    {" Expose users to items they wouldn't find otherwise"}
                  </li>
                  <li>
                    <strong>
                      {"Retention:"}
                    </strong>
                    {" Keep users engaged with relevant content"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Types of Recommendation Systems"}
                </h2>
                <p>
                  {"There are three main approaches to building recommenders:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Collaborative Filtering:"}
                    </strong>
                    {" \"Users who liked this also liked that\""}
                  </li>
                  <li>
                    <strong>
                      {"Content-Based Filtering:"}
                    </strong>
                    {" \"Since you liked X, you'll like Y (which is similar)\""}
                  </li>
                  <li>
                    <strong>
                      {"Hybrid Systems:"}
                    </strong>
                    {" Combine both approaches for better results"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"1. Collaborative Filtering"}
                </h2>
                <p>
                  {"Collaborative filtering makes recommendations based on user behavior patterns. It assumes users who agreed in the past will agree in the future."}
                </p>
                <h3>
                  {"User-Based Collaborative Filtering"}
                </h3>
                <p>
                  {"Find similar users and recommend what they liked."}
                </p>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Sample data: user-item ratings matrix
ratings = pd.DataFrame({
    'user_id': [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
    'item_id': [1, 2, 3, 1, 2, 4, 2, 3, 4, 1, 3, 4],
    'rating': [5, 3, 4, 4, 5, 3, 4, 5, 4, 5, 4, 5]
})

# Create user-item matrix
user_item_matrix = ratings.pivot(index='user_id', columns='item_id', values='rating')
user_item_matrix = user_item_matrix.fillna(0)

print(user_item_matrix)
#         item_id    1    2    3    4
# user_id
# 1             5.0  3.0  4.0  0.0
# 2             4.0  5.0  0.0  3.0
# 3             0.0  4.0  5.0  4.0
# 4             5.0  0.0  4.0  5.0

# Calculate user similarity (cosine similarity)
user_similarity = cosine_similarity(user_item_matrix)
user_similarity_df = pd.DataFrame(
    user_similarity,
    index=user_item_matrix.index,
    columns=user_item_matrix.index
)

print(user_similarity_df)

# Recommend items for user 1
def get_user_recommendations(user_id, n_recommendations=3):
    # Get similar users (excluding the user themselves)
    similar_users = user_similarity_df[user_id].sort_values(ascending=False)[1:]

    # Get items the user hasn't rated
    user_ratings = user_item_matrix.loc[user_id]
    unrated_items = user_ratings[user_ratings == 0].index

    # Calculate predicted ratings for unrated items
    predictions = {}
    for item in unrated_items:
        # Weighted average of similar users' ratings
        numerator = 0
        denominator = 0
        for similar_user, similarity in similar_users.items():
            if user_item_matrix.loc[similar_user, item] > 0:
                numerator += similarity * user_item_matrix.loc[similar_user, item]
                denominator += similarity

        if denominator > 0:
            predictions[item] = numerator / denominator

    # Sort and return top N
    recommendations = sorted(predictions.items(), key=lambda x: x[1], reverse=True)
    return recommendations[:n_recommendations]

recommendations = get_user_recommendations(1)
print(f"Recommendations for User 1: {recommendations}")`}</code></pre>
                </div>
                <h3>
                  {"Item-Based Collaborative Filtering"}
                </h3>
                <p>
                  {"Find similar items and recommend them. More stable than user-based for large datasets."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Calculate item similarity (transpose the matrix)
item_similarity = cosine_similarity(user_item_matrix.T)
item_similarity_df = pd.DataFrame(
    item_similarity,
    index=user_item_matrix.columns,
    columns=user_item_matrix.columns
)

print(item_similarity_df)

# Recommend similar items to what user liked
def get_item_based_recommendations(user_id, n_recommendations=3):
    # Get items the user has rated highly (4 or 5 stars)
    user_ratings = user_item_matrix.loc[user_id]
    liked_items = user_ratings[user_ratings >= 4].index

    # Find similar items
    similar_items = {}
    for item in liked_items:
        similarities = item_similarity_df[item].sort_values(ascending=False)[1:]
        for similar_item, similarity in similarities.items():
            # Only recommend items user hasn't rated
            if user_ratings[similar_item] == 0:
                if similar_item in similar_items:
                    similar_items[similar_item] += similarity
                else:
                    similar_items[similar_item] = similarity

    # Sort and return top N
    recommendations = sorted(similar_items.items(), key=lambda x: x[1], reverse=True)
    return recommendations[:n_recommendations]

recommendations = get_item_based_recommendations(1)
print(f"Item-based recommendations for User 1: {recommendations}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"2. Matrix Factorization"}
                </h2>
                <p>
                  {"Decompose the user-item matrix into lower-dimensional latent factors. Powers Netflix recommendations."}
                </p>
                <h3>
                  {"SVD (Singular Value Decomposition)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from scipy.sparse.linalg import svds

# Perform SVD
U, sigma, Vt = svds(user_item_matrix.values, k=2)  # k = number of latent factors

# Convert sigma to diagonal matrix
sigma = np.diag(sigma)

# Reconstruct the full matrix (predicted ratings)
predicted_ratings = np.dot(np.dot(U, sigma), Vt)
predicted_ratings_df = pd.DataFrame(
    predicted_ratings,
    index=user_item_matrix.index,
    columns=user_item_matrix.columns
)

print("Predicted ratings:")
print(predicted_ratings_df)

# Recommend items for a user
def svd_recommendations(user_id, n_recommendations=3):
    user_ratings = user_item_matrix.loc[user_id]
    predictions = predicted_ratings_df.loc[user_id]

    # Get items user hasn't rated
    unrated_items = user_ratings[user_ratings == 0].index

    # Sort predictions for unrated items
    recommendations = predictions[unrated_items].sort_values(ascending=False)
    return recommendations.head(n_recommendations)

print(svd_recommendations(1))`}</code></pre>
                </div>
                <h3>
                  {"Using Surprise Library"}
                </h3>
                <p>
                  {"Surprise is a Python library specifically for recommendation systems."}
                </p>
                <div className="code-block">
                  <pre><code>{`from surprise import Dataset, Reader, SVD, KNNBasic
from surprise.model_selection import cross_validate, train_test_split
from surprise import accuracy

# Prepare data
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(ratings[['user_id', 'item_id', 'rating']], reader)

# Split into train and test
trainset, testset = train_test_split(data, test_size=0.2)

# SVD (Matrix Factorization)
svd = SVD(n_factors=20, n_epochs=20, lr_all=0.005, reg_all=0.02)
svd.fit(trainset)

# Make predictions
predictions = svd.test(testset)
accuracy.rmse(predictions)

# Predict rating for a specific user-item pair
prediction = svd.predict(uid=1, iid=4)
print(f"Predicted rating for User 1, Item 4: {prediction.est:.2f}")

# Get top N recommendations for a user
def get_top_n_recommendations(user_id, n=5):
    # Get all items
    all_items = ratings['item_id'].unique()

    # Get items user has already rated
    rated_items = ratings[ratings['user_id'] == user_id]['item_id'].values

    # Predict ratings for unrated items
    predictions = []
    for item_id in all_items:
        if item_id not in rated_items:
            pred = svd.predict(user_id, item_id)
            predictions.append((item_id, pred.est))

    # Sort by predicted rating
    predictions.sort(key=lambda x: x[1], reverse=True)
    return predictions[:n]

recommendations = get_top_n_recommendations(1)
print(f"Top recommendations: {recommendations}")

# Cross-validation
results = cross_validate(svd, data, measures=['RMSE', 'MAE'], cv=5)
print(f"Average RMSE: {results['test_rmse'].mean():.3f}")
print(f"Average MAE: {results['test_mae'].mean():.3f}")`}</code></pre>
                </div>
                <h3>
                  {"Alternative Algorithms"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from surprise import SVDpp, NMF, KNNWithMeans

# SVD++ (improved SVD with implicit feedback)
svdpp = SVDpp(n_factors=20)
svdpp.fit(trainset)

# NMF (Non-negative Matrix Factorization)
nmf = NMF(n_factors=15)
nmf.fit(trainset)

# KNN with means (user-based collaborative filtering)
knn = KNNWithMeans(k=40, sim_options={'name': 'cosine', 'user_based': True})
knn.fit(trainset)

# Compare algorithms
algorithms = [SVD(), SVDpp(), NMF(), KNNWithMeans()]
for algo in algorithms:
    results = cross_validate(algo, data, measures=['RMSE'], cv=3, verbose=False)
    print(f"{algo.__class__.__name__}: RMSE = {results['test_rmse'].mean():.3f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"3. Content-Based Filtering"}
                </h2>
                <p>
                  {"Recommend items similar to what the user liked based on item features."}
                </p>
                <h3>
                  {"Feature-Based Recommendations"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Sample movie data
movies = pd.DataFrame({
    'movie_id': [1, 2, 3, 4, 5],
    'title': ['The Matrix', 'John Wick', 'Inception', 'Interstellar', 'The Prestige'],
    'genres': ['Action Sci-Fi', 'Action Thriller', 'Sci-Fi Thriller',
               'Sci-Fi Drama', 'Mystery Thriller'],
    'director': ['Wachowski', 'Stahelski', 'Nolan', 'Nolan', 'Nolan'],
    'actors': ['Reeves Fishburne', 'Reeves McShane', 'DiCaprio Cotillard',
               'McConaughey Hathaway', 'Bale Jackman']
})

# Combine features into single description
movies['description'] = (movies['genres'] + ' ' +
                         movies['director'] + ' ' +
                         movies['actors'])

# Create TF-IDF matrix
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(movies['description'])

# Calculate similarity between movies
movie_similarity = cosine_similarity(tfidf_matrix)
movie_similarity_df = pd.DataFrame(
    movie_similarity,
    index=movies['title'],
    columns=movies['title']
)

print(movie_similarity_df)

# Get recommendations for a movie
def get_content_recommendations(movie_title, n_recommendations=3):
    # Get similarity scores
    similar_scores = movie_similarity_df[movie_title].sort_values(ascending=False)

    # Exclude the movie itself and return top N
    recommendations = similar_scores[1:n_recommendations+1]
    return recommendations

recommendations = get_content_recommendations('Inception')
print(f"\\nMovies similar to Inception:")
print(recommendations)`}</code></pre>
                </div>
                <h3>
                  {"User Profile Building"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Build user profile based on watched movies
user_watches = pd.DataFrame({
    'user_id': [1, 1, 1, 2, 2],
    'movie_id': [1, 2, 3, 3, 4],
    'rating': [5, 4, 5, 5, 4]
})

def build_user_profile(user_id):
    # Get movies user liked (rated 4+)
    liked_movies = user_watches[
        (user_watches['user_id'] == user_id) &
        (user_watches['rating'] >= 4)
    ]['movie_id']

    # Get TF-IDF vectors for liked movies
    liked_indices = [i for i, mid in enumerate(movies['movie_id'])
                     if mid in liked_movies.values]

    # Average the TF-IDF vectors (create user profile)
    user_profile = tfidf_matrix[liked_indices].mean(axis=0)

    return user_profile

def recommend_for_user(user_id, n_recommendations=3):
    # Build user profile
    user_profile = build_user_profile(user_id)

    # Calculate similarity between user profile and all movies
    similarities = cosine_similarity(user_profile, tfidf_matrix).flatten()

    # Get movies user hasn't watched
    watched_movies = user_watches[
        user_watches['user_id'] == user_id
    ]['movie_id'].values

    # Create recommendations
    recommendations = []
    for idx, sim in enumerate(similarities):
        movie_id = movies.iloc[idx]['movie_id']
        if movie_id not in watched_movies:
            recommendations.append((movies.iloc[idx]['title'], sim))

    # Sort and return top N
    recommendations.sort(key=lambda x: x[1], reverse=True)
    return recommendations[:n_recommendations]

user_recs = recommend_for_user(1)
print(f"\\nRecommendations for User 1:")
for title, score in user_recs:
    print(f"{title}: {score:.3f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"4. Hybrid Recommendation Systems"}
                </h2>
                <p>
                  {"Combine collaborative and content-based filtering for better results."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Simple weighted hybrid
def hybrid_recommendations(user_id, movie_title, alpha=0.5):
    """
    alpha: weight for collaborative filtering (1-alpha for content-based)
    """
    # Get collaborative filtering score
    collab_recs = get_user_recommendations(user_id)

    # Get content-based score
    content_recs = get_content_recommendations(movie_title)

    # Combine scores
    hybrid_scores = {}

    # Add collaborative scores
    for item, score in collab_recs:
        hybrid_scores[item] = alpha * score

    # Add content-based scores
    for item, score in content_recs.items():
        if item in hybrid_scores:
            hybrid_scores[item] += (1 - alpha) * score
        else:
            hybrid_scores[item] = (1 - alpha) * score

    # Sort and return
    recommendations = sorted(hybrid_scores.items(),
                           key=lambda x: x[1], reverse=True)
    return recommendations

# More sophisticated: use content features as additional input to collaborative filtering
from sklearn.ensemble import GradientBoostingRegressor

def train_hybrid_model():
    # Prepare features combining collaborative and content-based
    features = []
    labels = []

    for _, row in user_watches.iterrows():
        user_id = row['user_id']
        movie_id = row['movie_id']
        rating = row['rating']

        # User features (from collaborative filtering)
        user_vector = user_item_matrix.loc[user_id].values

        # Movie features (from content-based)
        movie_idx = movies[movies['movie_id'] == movie_id].index[0]
        movie_vector = tfidf_matrix[movie_idx].toarray().flatten()

        # Combine features
        combined = np.concatenate([user_vector, movie_vector])
        features.append(combined)
        labels.append(rating)

    # Train model
    model = GradientBoostingRegressor(n_estimators=100, random_state=42)
    model.fit(features, labels)

    return model`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"5. Evaluation Metrics"}
                </h2>
                <p>
                  {"Measure recommendation quality."}
                </p>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import mean_squared_error, mean_absolute_error

# RMSE and MAE (for rating prediction)
y_true = [5, 4, 3, 5, 4]
y_pred = [4.8, 4.2, 3.1, 4.9, 3.8]

rmse = np.sqrt(mean_squared_error(y_true, y_pred))
mae = mean_absolute_error(y_true, y_pred)

print(f"RMSE: {rmse:.3f}")
print(f"MAE: {mae:.3f}")

# Precision@K and Recall@K (for top-N recommendations)
def precision_at_k(recommended, relevant, k):
    recommended_k = recommended[:k]
    relevant_and_recommended = set(recommended_k) & set(relevant)
    return len(relevant_and_recommended) / k

def recall_at_k(recommended, relevant, k):
    recommended_k = recommended[:k]
    relevant_and_recommended = set(recommended_k) & set(relevant)
    return len(relevant_and_recommended) / len(relevant) if relevant else 0

# Example
recommended_items = [1, 2, 3, 4, 5]
relevant_items = [2, 4, 6, 8]

prec_5 = precision_at_k(recommended_items, relevant_items, k=5)
rec_5 = recall_at_k(recommended_items, relevant_items, k=5)

print(f"Precision@5: {prec_5:.3f}")
print(f"Recall@5: {rec_5:.3f}")

# Mean Average Precision (MAP)
def average_precision(recommended, relevant):
    hits = 0
    sum_precisions = 0

    for i, item in enumerate(recommended):
        if item in relevant:
            hits += 1
            precision_at_i = hits / (i + 1)
            sum_precisions += precision_at_i

    return sum_precisions / len(relevant) if relevant else 0

ap = average_precision(recommended_items, relevant_items)
print(f"Average Precision: {ap:.3f}")

# NDCG (Normalized Discounted Cumulative Gain)
from sklearn.metrics import ndcg_score

y_true = [[1, 0, 1, 0, 1]]  # Relevance scores
y_pred = [[0.9, 0.4, 0.8, 0.3, 0.7]]  # Predicted scores

ndcg = ndcg_score(y_true, y_pred)
print(f"NDCG: {ndcg:.3f}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"6. Handling Cold Start Problem"}
                </h2>
                <p>
                  {"What to recommend to new users or new items with no interaction history?"}
                </p>
                <h3>
                  {"New User Cold Start"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Popularity-based:"}
                    </strong>
                    {" Recommend most popular items"}
                  </li>
                  <li>
                    <strong>
                      {"Onboarding questions:"}
                    </strong>
                    {" Ask about preferences explicitly"}
                  </li>
                  <li>
                    <strong>
                      {"Demographic-based:"}
                    </strong>
                    {" Use age, location, gender to find similar users"}
                  </li>
                  <li>
                    <strong>
                      {"Content-based:"}
                    </strong>
                    {" If user provides preferences, use content features"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Popularity-based recommendations for new users
def get_popular_items(n=5):
    item_popularity = ratings.groupby('item_id')['rating'].agg(['mean', 'count'])

    # Filter items with minimum number of ratings
    popular = item_popularity[item_popularity['count'] >= 3]

    # Sort by average rating
    popular = popular.sort_values('mean', ascending=False)

    return popular.head(n)

popular_items = get_popular_items()
print("Popular items for new users:")
print(popular_items)`}</code></pre>
                </div>
                <h3>
                  {"New Item Cold Start"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Content-based:"}
                    </strong>
                    {" Use item features to find similar items"}
                  </li>
                  <li>
                    <strong>
                      {"Hybrid approach:"}
                    </strong>
                    {" Combine with collaborative when enough data"}
                  </li>
                  <li>
                    <strong>
                      {"Exploration:"}
                    </strong>
                    {" Show new items to diverse user segments"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start Simple:"}
                    </strong>
                    {" Begin with popularity-based or simple collaborative filtering"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Sparsity:"}
                    </strong>
                    {" Most user-item matrices are 90%+ sparse"}
                  </li>
                  <li>
                    <strong>
                      {"Implicit Feedback:"}
                    </strong>
                    {" Use clicks, views, time spent (not just ratings)"}
                  </li>
                  <li>
                    <strong>
                      {"Diversity:"}
                    </strong>
                    {" Don't just recommend similar items - provide variety"}
                  </li>
                  <li>
                    <strong>
                      {"Freshness:"}
                    </strong>
                    {" Include recent items, don't over-optimize for old content"}
                  </li>
                  <li>
                    <strong>
                      {"Explainability:"}
                    </strong>
                    {" Tell users why you're recommending something"}
                  </li>
                  <li>
                    <strong>
                      {"A/B Testing:"}
                    </strong>
                    {" Test recommendations in production with real users"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Pre-compute similarities, use approximation for large datasets"}
                  </li>
                  <li>
                    <strong>
                      {"Privacy:"}
                    </strong>
                    {" Be transparent about data usage"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid Filter Bubbles:"}
                    </strong>
                    {" Occasionally recommend outside user's comfort zone"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-World Applications"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"E-commerce:"}
                    </strong>
                    {" Product recommendations (Amazon)"}
                  </li>
                  <li>
                    <strong>
                      {"Streaming:"}
                    </strong>
                    {" Movies and shows (Netflix, Disney+)"}
                  </li>
                  <li>
                    <strong>
                      {"Music:"}
                    </strong>
                    {" Song and playlist recommendations (Spotify, Apple Music)"}
                  </li>
                  <li>
                    <strong>
                      {"Social Media:"}
                    </strong>
                    {" Friend suggestions, content feed (Facebook, Instagram)"}
                  </li>
                  <li>
                    <strong>
                      {"News:"}
                    </strong>
                    {" Article recommendations (Google News, Medium)"}
                  </li>
                  <li>
                    <strong>
                      {"Job Portals:"}
                    </strong>
                    {" Job recommendations (LinkedIn)"}
                  </li>
                  <li>
                    <strong>
                      {"Dating Apps:"}
                    </strong>
                    {" Match suggestions (Tinder, Bumble)"}
                  </li>
                  <li>
                    <strong>
                      {"Food Delivery:"}
                    </strong>
                    {" Restaurant recommendations (Uber Eats, DoorDash)"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Recommendation Systems Like the Pros"}
                </h2>
                <p>
                  {"Our Data Science program covers recommendation systems in depth with real-world projects. Learn to build Netflix-style recommenders from scratch."}
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
                      {"Build the foundation for understanding recommender algorithms"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/feature-engineering" className="related-article-card">
                    <h4>
                      {"Feature Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Create powerful features for content-based filtering"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/nlp-transformers" className="related-article-card">
                    <h4>
                      {"NLP & Transformers"}
                    </h4>
                    {" "}
                    <p>
                      {"Use text embeddings for advanced content recommendations"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Recommendation Systems."} />
    </>
  );
}
