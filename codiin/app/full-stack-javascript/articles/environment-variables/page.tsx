import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Environment Variables - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/environment-variables" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/environment-variables",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptEnvironmentVariablesPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <div className="container">
          <article className="article-content">
            <header className="article-header">
              <Link href="/full-stack-javascript" className="back-link">
                {"← Back to Full Stack JavaScript"}
              </Link>
              <h1>
                {"Environment Variables"}
              </h1>
              <p className="article-meta">
                {"Managing configuration across different environments"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Why Environment Variables?"}
              </h2>
              <p>
                {"Environment variables allow you to configure applications differently based on the environment (development, staging, production) without changing code. They're essential for storing sensitive data like API keys, database credentials, and feature flags."}
              </p>
              <h3>
                {"What Should Be Environment Variables"}
              </h3>
              <pre><code>{`// Environment-specific configuration:
- Database connection strings
- API keys and secrets
- Third-party service credentials
- Feature flags
- Server ports
- API URLs (different for dev/prod)
- Logging levels
- Cache settings

// NOT environment variables:
- Business logic
- Static configuration (that never changes)
- UI constants`}</code></pre>
              <h2>
                {"Node.js Environment Variables"}
              </h2>
              <h3>
                {"Using dotenv"}
              </h3>
              <pre><code>{`# Install dotenv
npm install dotenv

# .env file (project root)
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key-here
API_KEY=abc123
REDIS_URL=redis://localhost:6379

# Load in your app (as early as possible)
// index.js or app.js
require('dotenv').config();

// Or with ES modules
import 'dotenv/config';

// Access variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;

console.log(\`Server running on port \${port}\`);`}</code></pre>
              <h3>
                {"Environment-Specific Files"}
              </h3>
              <pre><code>{`# File structure
.env                # Default/shared values
.env.local          # Local overrides (git ignored)
.env.development    # Development environment
.env.production     # Production environment
.env.test           # Test environment

# Load based on NODE_ENV
// config/dotenv.js
const path = require('path');
require('dotenv').config({
  path: path.resolve(process.cwd(), \`.env.\${process.env.NODE_ENV || 'development'}\`)
});

// Or use dotenv-flow
npm install dotenv-flow

// Automatically loads in order:
// .env, .env.local, .env.{NODE_ENV}, .env.{NODE_ENV}.local
require('dotenv-flow').config();`}</code></pre>
              <h3>
                {"Configuration Module Pattern"}
              </h3>
              <pre><code>{`// config/index.js
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,

  db: {
    url: process.env.DATABASE_URL,
    options: {
      maxPoolSize: parseInt(process.env.DB_POOL_SIZE, 10) || 10,
    },
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  },

  redis: {
    url: process.env.REDIS_URL,
    ttl: parseInt(process.env.REDIS_TTL, 10) || 3600,
  },

  email: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.EMAIL_FROM || 'noreply@example.com',
  },

  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',
    s3Bucket: process.env.AWS_S3_BUCKET,
  },

  // Feature flags
  features: {
    newDashboard: process.env.FEATURE_NEW_DASHBOARD === 'true',
    betaFeatures: process.env.FEATURE_BETA === 'true',
  },

  // Environment checks
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
};

module.exports = config;

// Usage
const config = require('./config');

mongoose.connect(config.db.url, config.db.options);
app.listen(config.port);`}</code></pre>
              <h3>
                {"Validation with Joi"}
              </h3>
              <pre><code>{`// config/validate.js
const Joi = require('joi');

const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3000),

  DATABASE_URL: Joi.string().required()
    .description('MongoDB connection string'),

  JWT_SECRET: Joi.string().required().min(32)
    .description('JWT secret key'),

  JWT_EXPIRES_IN: Joi.string().default('7d'),

  REDIS_URL: Joi.string().uri().required(),

  SMTP_HOST: Joi.string().when('NODE_ENV', {
    is: 'production',
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),

  AWS_ACCESS_KEY_ID: Joi.string().when('NODE_ENV', {
    is: 'production',
    then: Joi.required(),
  }),
}).unknown(); // Allow other env vars

const { error, value } = envSchema.validate(process.env);

if (error) {
  console.error('Environment validation error:');
  console.error(error.details.map(d => \`  - \${d.message}\`).join('\\n'));
  process.exit(1);
}

module.exports = value;

// config/index.js
const env = require('./validate');

const config = {
  port: env.PORT,
  db: { url: env.DATABASE_URL },
  // ...
};`}</code></pre>
              <h2>
                {"React Environment Variables"}
              </h2>
              <h3>
                {"Create React App"}
              </h3>
              <pre><code>{`# .env files for CRA
.env                    # Loaded in all environments
.env.local              # Local overrides (gitignored)
.env.development        # Development (npm start)
.env.development.local  # Local dev overrides
.env.production         # Production (npm run build)
.env.production.local   # Local prod overrides
.env.test               # Test (npm test)

# Variable naming - MUST start with REACT_APP_
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_GOOGLE_MAPS_KEY=your-api-key
REACT_APP_FEATURE_FLAG=true

# Access in code
const apiUrl = process.env.REACT_APP_API_URL;
const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const featureEnabled = process.env.REACT_APP_FEATURE_FLAG === 'true';

// Built-in variables
process.env.NODE_ENV  // 'development', 'production', or 'test'
process.env.PUBLIC_URL // URL where app is served`}</code></pre>
              <h3>
                {"Vite Environment Variables"}
              </h3>
              <pre><code>{`# .env files for Vite
.env                # Loaded in all modes
.env.local          # Loaded in all modes, gitignored
.env.[mode]         # Loaded in specific mode
.env.[mode].local   # Loaded in specific mode, gitignored

# Variable naming - MUST start with VITE_
VITE_API_URL=http://localhost:4000/api
VITE_APP_TITLE=My App
VITE_ENABLE_ANALYTICS=true

# Access in code
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;

// Built-in variables
import.meta.env.MODE      // 'development', 'production'
import.meta.env.BASE_URL  // Base URL
import.meta.env.PROD      // boolean
import.meta.env.DEV       // boolean
import.meta.env.SSR       // boolean (server-side rendering)

// Type definitions (env.d.ts)
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_ENABLE_ANALYTICS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}`}</code></pre>
              <h3>
                {"Next.js Environment Variables"}
              </h3>
              <pre><code>{`# .env files for Next.js
.env                # All environments
.env.local          # Local overrides (gitignored)
.env.development    # Development
.env.production     # Production
.env.test           # Testing

# Server-side only (default)
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=secret-key

# Client-side exposed (prefix with NEXT_PUBLIC_)
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_ANALYTICS_ID=UA-123456

# Access server-side (API routes, getServerSideProps)
export async function getServerSideProps() {
  const dbUrl = process.env.DATABASE_URL;
  // ...
}

// Access client-side
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Runtime configuration (next.config.js)
module.exports = {
  env: {
    customKey: 'my-value', // Available as process.env.customKey
  },
  // Or use publicRuntimeConfig/serverRuntimeConfig
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  serverRuntimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
  },
};`}</code></pre>
              <h2>
                {"Configuration Patterns"}
              </h2>
              <h3>
                {"API Configuration"}
              </h3>
              <pre><code>{`// config/api.js
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:4000/api',
    timeout: 30000,
  },
  staging: {
    baseURL: 'https://staging-api.myapp.com/api',
    timeout: 15000,
  },
  production: {
    baseURL: 'https://api.myapp.com/api',
    timeout: 10000,
  },
};

const env = process.env.NODE_ENV || 'development';

export const apiConfig = {
  ...API_CONFIG[env],
  // Override with env vars if set
  baseURL: process.env.REACT_APP_API_URL || API_CONFIG[env].baseURL,
};

// api/client.js
import axios from 'axios';
import { apiConfig } from '../config/api';

export const apiClient = axios.create(apiConfig);`}</code></pre>
              <h3>
                {"Feature Flags"}
              </h3>
              <pre><code>{`// config/features.js
const features = {
  newCheckout: process.env.REACT_APP_FEATURE_NEW_CHECKOUT === 'true',
  darkMode: process.env.REACT_APP_FEATURE_DARK_MODE === 'true',
  betaFeatures: process.env.REACT_APP_FEATURE_BETA === 'true',
  maxUploadSize: parseInt(process.env.REACT_APP_MAX_UPLOAD_SIZE, 10) || 5242880,
};

export default features;

// Usage in components
import features from '../config/features';

function Checkout() {
  if (features.newCheckout) {
    return <NewCheckout />;
  }
  return <LegacyCheckout />;
}

// Feature flag hook
function useFeature(featureName) {
  return features[featureName] ?? false;
}

function Component() {
  const hasDarkMode = useFeature('darkMode');
  // ...
}`}</code></pre>
              <h3>
                {"Multi-Environment Setup"}
              </h3>
              <pre><code>{`# .env.development
REACT_APP_API_URL=http://localhost:4000
REACT_APP_LOG_LEVEL=debug
REACT_APP_MOCK_API=true

# .env.staging
REACT_APP_API_URL=https://staging-api.myapp.com
REACT_APP_LOG_LEVEL=info
REACT_APP_MOCK_API=false

# .env.production
REACT_APP_API_URL=https://api.myapp.com
REACT_APP_LOG_LEVEL=error
REACT_APP_MOCK_API=false

// scripts in package.json
{
  "scripts": {
    "start": "react-scripts start",
    "start:staging": "env-cmd -f .env.staging react-scripts start",
    "build": "react-scripts build",
    "build:staging": "env-cmd -f .env.staging react-scripts build",
    "build:production": "env-cmd -f .env.production react-scripts build"
  }
}`}</code></pre>
              <h2>
                {"Security Best Practices"}
              </h2>
              <pre><code>{`# 1. Never commit secrets to git
# .gitignore
.env
.env.local
.env.*.local
*.pem
*.key

# 2. Use .env.example for documentation
# .env.example (committed to git)
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-here
# Add descriptions
# STRIPE_KEY=pk_test_xxx  # Get from Stripe Dashboard

# 3. Different secrets per environment
# Development uses test/dev credentials
# Production uses real credentials stored in secret manager

# 4. Rotate secrets regularly
# Update JWT_SECRET periodically
# Rotate API keys after team changes

# 5. Validate required variables on startup
const required = ['DATABASE_URL', 'JWT_SECRET'];
for (const varName of required) {
  if (!process.env[varName]) {
    console.error(\`Missing required env var: \${varName}\`);
    process.exit(1);
  }
}

# 6. Don't log secrets
// Bad
console.log('Config:', process.env);

// Good - sanitize logs
console.log('Config:', {
  port: config.port,
  dbHost: config.db.host,
  // Don't log: password, secret, apiKey
});

# 7. Use secret managers in production
// AWS Secrets Manager, HashiCorp Vault, etc.
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();

async function getSecret(secretName) {
  const data = await secretsManager.getSecretValue({
    SecretId: secretName
  }).promise();
  return JSON.parse(data.SecretString);
}`}</code></pre>
              <h2>
                {"Docker and CI/CD"}
              </h2>
              <h3>
                {"Docker Environment Variables"}
              </h3>
              <pre><code>{`# Dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Don't hardcode - pass at runtime
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    env_file:
      - .env.production
    depends_on:
      - mongodb
      - redis

  mongodb:
    image: mongo:7
    environment:
      MONGO_INITDB_ROOT_USERNAME: \${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: \${MONGO_PASS}

# Run with env file
docker run --env-file .env.production myapp

# Or pass individual vars
docker run -e NODE_ENV=production -e PORT=3000 myapp`}</code></pre>
              <h3>
                {"GitHub Actions"}
              </h3>
              <pre><code>{`# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Build
        run: npm run build
        env:
          # From repository secrets
          REACT_APP_API_URL: \${{ secrets.API_URL }}
          REACT_APP_ANALYTICS_ID: \${{ secrets.ANALYTICS_ID }}

      - name: Deploy
        env:
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: |
          aws s3 sync build/ s3://my-bucket

# Using environment-specific secrets
jobs:
  deploy-staging:
    environment: staging
    steps:
      - run: echo "Deploying with \${{ secrets.API_KEY }}"

  deploy-production:
    environment: production
    steps:
      - run: echo "Deploying with \${{ secrets.API_KEY }}"`}</code></pre>
              <h2>
                {"Troubleshooting"}
              </h2>
              <pre><code>{`// Debug environment loading
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('All env vars:', Object.keys(process.env));

// Common issues:

// 1. Variable not loaded
// - Check file location (.env in project root)
// - Check variable name prefix (REACT_APP_, VITE_, NEXT_PUBLIC_)
// - Restart dev server after changes

// 2. Wrong value
// - Check for typos
// - Check if .env.local is overriding
// - Check loading order

// 3. Works locally, fails in production
// - Verify secrets are set in deployment platform
// - Check build-time vs runtime variables
// - Client-side vars must be set at build time

// 4. Undefined in browser
// - React/Vite: only prefixed vars are exposed
// - Check if rebuilding after adding vars

// Helper to debug
function debugEnv() {
  const envVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith('REACT_APP_'))
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value?.substring(0, 10) + '...'
    }), {});

  console.table(envVars);
}`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"Use dotenv for Node.js environment variables"}
                  </li>
                  <li>
                    {"React/Vite/Next.js have specific prefixes for client-exposed vars"}
                  </li>
                  <li>
                    {"Never commit .env files with secrets to version control"}
                  </li>
                  <li>
                    {"Validate required environment variables on startup"}
                  </li>
                  <li>
                    {"Use environment-specific files (.env.development, .env.production)"}
                  </li>
                  <li>
                    {"Create a centralized config module for type safety"}
                  </li>
                  <li>
                    {"Use secret managers in production for sensitive data"}
                  </li>
                  <li>
                    {"Remember client-side vars are visible to users"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/cicd" className="prev-article">
                {"← CI/CD with GitHub Actions"}
              </Link>
              <Link href="/full-stack-javascript/articles/file-uploads" className="next-article">
                {"File Uploads →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>
            {"© 2024 Codiin. All rights reserved."}
          </p>
        </div>
      </footer>

    </>
  );
}
