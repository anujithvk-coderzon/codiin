import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Time Series Analysis: Forecasting the Future",
  description: "Learn Time Series Analysis and Forecasting - ARIMA, Prophet, LSTM, trend analysis, seasonality, and building prediction models for business metrics.",
  keywords: ["time series tutorial", "forecasting", "ARIMA", "Prophet", "LSTM", "trend analysis", "seasonality", "prediction"],
  alternates: { canonical: "/data-science/articles/time-series" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/time-series",
    title: "Time Series Analysis: Forecasting the Future",
    description: "Master time series forecasting with ARIMA, Prophet, and deep learning.",
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
  "headline": "Time Series Analysis: Forecasting the Future",
  "description": "Complete guide to time series analysis and forecasting",
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

export default function DataScienceTimeSeriesPage() {
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
                {"Time Series"}
              </span>
            </div>
            <h1>
              {"Time Series Analysis"}
            </h1>
            <p className="article-subtitle">
              {"Forecasting the Future with Data"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Time Series Analysis?"}
                </h2>
                <p>
                  {"Time series analysis involves studying data points collected over time to identify patterns, trends, and seasonality. It's essential for forecasting future values in domains like finance, sales, weather, and resource planning."}
                </p>
                <p>
                  {"Unlike regular ML where observations are independent, time series data has temporal dependencies - what happens today depends on what happened yesterday."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Components of Time Series"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Trend:"}
                    </strong>
                    {" Long-term increase or decrease in the data"}
                  </li>
                  <li>
                    <strong>
                      {"Seasonality:"}
                    </strong>
                    {" Regular patterns that repeat (daily, weekly, yearly)"}
                  </li>
                  <li>
                    <strong>
                      {"Cyclical:"}
                    </strong>
                    {" Longer-term fluctuations without fixed period"}
                  </li>
                  <li>
                    <strong>
                      {"Noise:"}
                    </strong>
                    {" Random variation that can't be explained"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose

# Decompose time series
result = seasonal_decompose(df['sales'], model='multiplicative', period=12)

# Plot components
result.plot()

# Access individual components
trend = result.trend
seasonal = result.seasonal
residual = result.resid`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Stationarity"}
                </h2>
                <p>
                  {"Many time series methods require stationary data (constant mean and variance over time):"}
                </p>
                <div className="code-block">
                  <pre><code>{`from statsmodels.tsa.stattools import adfuller

# Augmented Dickey-Fuller test
def check_stationarity(series):
    result = adfuller(series.dropna())
    print(f'ADF Statistic: {result[0]:.4f}')
    print(f'p-value: {result[1]:.4f}')
    if result[1] <= 0.05:
        print("Series is stationary")
    else:
        print("Series is non-stationary")

# Make stationary with differencing
df['sales_diff'] = df['sales'].diff()

# Or log transformation
df['sales_log'] = np.log(df['sales'])
df['sales_log_diff'] = df['sales_log'].diff()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"ARIMA Models"}
                </h2>
                <p>
                  {"ARIMA (AutoRegressive Integrated Moving Average) is a classical forecasting method:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from statsmodels.tsa.arima.model import ARIMA
from pmdarima import auto_arima

# Auto ARIMA to find best parameters
auto_model = auto_arima(
    df['sales'],
    seasonal=True,
    m=12,  # Monthly seasonality
    trace=True,
    suppress_warnings=True
)
print(auto_model.summary())

# Fit ARIMA with found parameters
model = ARIMA(df['sales'], order=(1, 1, 1), seasonal_order=(1, 1, 1, 12))
fitted = model.fit()

# Forecast
forecast = fitted.forecast(steps=12)

# Confidence intervals
forecast_df = fitted.get_forecast(steps=12)
conf_int = forecast_df.conf_int()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Prophet by Facebook"}
                </h2>
                <p>
                  {"Prophet handles seasonality, holidays, and missing data automatically:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from prophet import Prophet

# Prepare data (must have 'ds' and 'y' columns)
df_prophet = df.rename(columns={'date': 'ds', 'sales': 'y'})

# Create and fit model
model = Prophet(
    yearly_seasonality=True,
    weekly_seasonality=True,
    daily_seasonality=False,
    seasonality_mode='multiplicative'
)

# Add custom seasonality
model.add_seasonality(name='monthly', period=30.5, fourier_order=5)

# Add holidays
model.add_country_holidays(country_name='US')

model.fit(df_prophet)

# Create future dates
future = model.make_future_dataframe(periods=365)

# Predict
forecast = model.predict(future)

# Plot
model.plot(forecast)
model.plot_components(forecast)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LSTM for Time Series"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import torch
import torch.nn as nn
from sklearn.preprocessing import MinMaxScaler

# Prepare sequences
def create_sequences(data, seq_length):
    xs, ys = [], []
    for i in range(len(data) - seq_length):
        x = data[i:(i + seq_length)]
        y = data[i + seq_length]
        xs.append(x)
        ys.append(y)
    return np.array(xs), np.array(ys)

# Scale data
scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(df[['sales']])

# Create sequences
seq_length = 30
X, y = create_sequences(scaled_data, seq_length)

# LSTM Model
class LSTMModel(nn.Module):
    def __init__(self, input_size=1, hidden_size=64, num_layers=2):
        super().__init__()
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, 1)

    def forward(self, x):
        lstm_out, _ = self.lstm(x)
        return self.fc(lstm_out[:, -1, :])

model = LSTMModel()
criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Evaluation Metrics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from sklearn.metrics import mean_absolute_error, mean_squared_error
import numpy as np

def evaluate_forecast(actual, predicted):
    mae = mean_absolute_error(actual, predicted)
    mse = mean_squared_error(actual, predicted)
    rmse = np.sqrt(mse)
    mape = np.mean(np.abs((actual - predicted) / actual)) * 100

    print(f"MAE: {mae:.2f}")
    print(f"RMSE: {rmse:.2f}")
    print(f"MAPE: {mape:.2f}%")

    return {'mae': mae, 'rmse': rmse, 'mape': mape}`}</code></pre>
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
                    {" Visualize trends, seasonality, anomalies"}
                  </li>
                  <li>
                    <strong>
                      {"Use proper train/test split:"}
                    </strong>
                    {" Time-based split, not random"}
                  </li>
                  <li>
                    <strong>
                      {"Handle missing values:"}
                    </strong>
                    {" Interpolation, forward fill"}
                  </li>
                  <li>
                    <strong>
                      {"Feature engineering:"}
                    </strong>
                    {" Lag features, rolling statistics"}
                  </li>
                  <li>
                    <strong>
                      {"Cross-validation:"}
                    </strong>
                    {" Use time series cross-validation"}
                  </li>
                  <li>
                    <strong>
                      {"Ensemble methods:"}
                    </strong>
                    {" Combine multiple models"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Time Series with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Data Science program covers time series analysis from basics to advanced forecasting. Build real prediction systems with guidance from industry experts."}
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
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"LSTM and sequence models"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/statistics" className="related-article-card">
                    <h4>
                      {"Statistics for Data Science"}
                    </h4>
                    {" "}
                    <p>
                      {"Statistical foundations"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Time Series."} />
    </>
  );
}
