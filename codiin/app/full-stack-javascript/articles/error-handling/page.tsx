import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Error Handling - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/error-handling" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/error-handling",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptErrorHandlingPage() {
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
                {"Error Handling"}
              </h1>
              <p className="article-meta">
                {"Best practices for handling errors in Node.js and React applications"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"JavaScript Error Fundamentals"}
              </h2>
              <h3>
                {"Built-in Error Types"}
              </h3>
              <pre><code>{`// Error - base error type
throw new Error('Something went wrong');

// TypeError - wrong type
const obj = null;
obj.method(); // TypeError: Cannot read property 'method' of null

// ReferenceError - undefined variable
console.log(undefinedVar); // ReferenceError

// SyntaxError - invalid syntax (usually at parse time)
JSON.parse('invalid json'); // SyntaxError

// RangeError - value out of range
new Array(-1); // RangeError: Invalid array length

// Custom errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

throw new ValidationError('Email is required', 'email');`}</code></pre>
              <h3>
                {"Try-Catch-Finally"}
              </h3>
              <pre><code>{`// Basic try-catch
try {
  const data = JSON.parse(invalidJson);
} catch (error) {
  console.error('Parse error:', error.message);
}

// With finally (always runs)
try {
  await database.connect();
  await database.query('SELECT * FROM users');
} catch (error) {
  console.error('Database error:', error);
} finally {
  await database.disconnect(); // Always runs
}

// Catching specific errors
try {
  await someOperation();
} catch (error) {
  if (error instanceof ValidationError) {
    // Handle validation error
    console.log('Validation failed:', error.field);
  } else if (error instanceof NetworkError) {
    // Handle network error
    console.log('Network failed, retrying...');
  } else {
    // Re-throw unknown errors
    throw error;
  }
}

// Nested try-catch
try {
  try {
    riskyOperation();
  } catch (error) {
    // Handle or transform error
    throw new Error(\`Operation failed: \${error.message}\`);
  }
} catch (error) {
  // Handle transformed error
  console.error(error.message);
}`}</code></pre>
              <h2>
                {"Custom Error Classes"}
              </h2>
              <pre><code>{`// Base application error
class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();

    Error.captureStackTrace(this, this.constructor);
  }
}

// Specific error types
class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(\`\${resource} not found\`, 404);
  }
}

class ValidationError extends AppError {
  constructor(message, errors = []) {
    super(message, 400);
    this.errors = errors;
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

class ForbiddenError extends AppError {
  constructor(message = 'Access denied') {
    super(message, 403);
  }
}

class ConflictError extends AppError {
  constructor(message = 'Resource already exists') {
    super(message, 409);
  }
}

class RateLimitError extends AppError {
  constructor(retryAfter = 60) {
    super('Too many requests', 429);
    this.retryAfter = retryAfter;
  }
}

// Usage
if (!user) {
  throw new NotFoundError('User');
}

if (!isValid) {
  throw new ValidationError('Invalid input', [
    { field: 'email', message: 'Invalid email format' },
    { field: 'password', message: 'Password too short' },
  ]);
}`}</code></pre>
              <h2>
                {"Express.js Error Handling"}
              </h2>
              <h3>
                {"Error Handling Middleware"}
              </h3>
              <pre><code>{`// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  // Log error
  console.error({
    message: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString(),
    path: req.path,
    method: req.method,
    ip: req.ip,
  });

  // Operational errors (expected)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        ...(err.errors && { errors: err.errors }),
      },
    });
  }

  // Programming/unknown errors
  // Don't leak error details in production
  const message = process.env.NODE_ENV === 'production'
    ? 'Internal server error'
    : err.message;

  res.status(500).json({
    success: false,
    error: { message },
  });
};

// Async error wrapper (eliminates try-catch in routes)
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage in routes
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new NotFoundError('User');
  }
  res.json(user);
}));

// 404 handler (before error handler)
app.use((req, res, next) => {
  next(new NotFoundError('Endpoint'));
});

// Error handler (must be last)
app.use(errorHandler);`}</code></pre>
              <h3>
                {"Handling Specific Errors"}
              </h3>
              <pre><code>{`// Handle different error types
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = new AppError('Invalid ID format', 400);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = new ConflictError(\`\${field} already exists\`);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => ({
      field: e.path,
      message: e.message,
    }));
    error = new ValidationError('Validation failed', errors);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    error = new UnauthorizedError('Invalid token');
  }

  if (err.name === 'TokenExpiredError') {
    error = new UnauthorizedError('Token expired');
  }

  // Send response
  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      message: error.message,
      ...(error.errors && { errors: error.errors }),
    },
  });
};`}</code></pre>
              <h3>
                {"Request Validation"}
              </h3>
              <pre><code>{`// Using Joi for validation
const Joi = require('joi');

const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false, // Return all errors
    stripUnknown: true, // Remove unknown fields
  });

  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message,
    }));
    throw new ValidationError('Validation failed', errors);
  }

  req.body = value;
  next();
};

// Validation schemas
const schemas = {
  createUser: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    age: Joi.number().integer().min(0).max(150),
  }),

  updateUser: Joi.object({
    name: Joi.string().min(2).max(50),
    email: Joi.string().email(),
    age: Joi.number().integer().min(0).max(150),
  }).min(1), // At least one field required
};

// Usage
app.post('/users', validate(schemas.createUser), asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
}));`}</code></pre>
              <h2>
                {"React Error Handling"}
              </h2>
              <h3>
                {"Error Boundaries"}
              </h3>
              <pre><code>{`// components/ErrorBoundary.jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error('Error caught by boundary:', error);
    console.error('Component stack:', errorInfo.componentStack);

    // Send to error tracking service
    // errorTrackingService.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return this.props.fallback || (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={
            <ErrorBoundary fallback={<DashboardError />}>
              <Dashboard />
            </ErrorBoundary>
          } />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}`}</code></pre>
              <h3>
                {"React Error Boundary Hook (with react-error-boundary)"}
              </h3>
              <pre><code>{`// npm install react-error-boundary
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';

// Fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-fallback">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// Usage with reset capability
function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        // Log to error service
        logErrorToService(error, info);
      }}
      onReset={() => {
        // Reset app state
        queryClient.clear();
      }}
    >
      <MainApp />
    </ErrorBoundary>
  );
}

// Using useErrorBoundary hook
function DataComponent() {
  const { showBoundary } = useErrorBoundary();

  const handleClick = async () => {
    try {
      await riskyOperation();
    } catch (error) {
      // Trigger error boundary
      showBoundary(error);
    }
  };

  return <button onClick={handleClick}>Load Data</button>;
}`}</code></pre>
              <h3>
                {"API Error Handling in React"}
              </h3>
              <pre><code>{`// hooks/useApi.js
import { useState, useCallback } from 'react';

function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (apiCall) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiCall();
      return result;
    } catch (err) {
      const error = {
        message: err.response?.data?.error?.message || err.message,
        status: err.response?.status,
        errors: err.response?.data?.error?.errors,
      };
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
}

// Usage
function UserProfile({ userId }) {
  const { loading, error, request, clearError } = useApi();
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const data = await request(() => api.get(\`/users/\${userId}\`));
      setUser(data);
    } catch (err) {
      // Error already set by hook
    }
  };

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="error">
        <p>{error.message}</p>
        <button onClick={clearError}>Dismiss</button>
        <button onClick={loadUser}>Retry</button>
      </div>
    );
  }

  return <div>{user?.name}</div>;
}`}</code></pre>
              <h3>
                {"Form Error Handling"}
              </h3>
              <pre><code>{`// With React Hook Form
import { useForm } from 'react-hook-form';

function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post('/auth/signup', data);
    } catch (err) {
      // Handle validation errors from server
      if (err.response?.data?.error?.errors) {
        err.response.data.error.errors.forEach(({ field, message }) => {
          setError(field, { type: 'server', message });
        });
      } else {
        // Generic error
        setError('root', {
          type: 'server',
          message: err.response?.data?.error?.message || 'Signup failed'
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.root && (
        <div className="error-banner">{errors.root.message}</div>
      )}

      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
              message: 'Invalid email format'
            }
          })}
          placeholder="Email"
        />
        {errors.email && (
          <span className="error">{errors.email.message}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
          placeholder="Password"
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
}`}</code></pre>
              <h2>
                {"Global Error Handling"}
              </h2>
              <h3>
                {"Node.js Process Error Handlers"}
              </h3>
              <pre><code>{`// Handle uncaught exceptions (sync errors)
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);

  // Log to external service
  // logger.fatal(error);

  // Graceful shutdown
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);

  // Throw to trigger uncaughtException handler
  throw reason;
});

// Handle SIGTERM (graceful shutdown)
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');

  server.close(() => {
    console.log('Server closed');
    // Close database connections
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });

  // Force close after 30 seconds
  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 30000);
});`}</code></pre>
              <h3>
                {"Axios Error Interceptor"}
              </h3>
              <pre><code>{`// api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Network error
    if (!error.response) {
      return Promise.reject({
        message: 'Network error. Please check your connection.',
        isNetworkError: true,
      });
    }

    const { status, data } = error.response;

    // Handle specific status codes
    switch (status) {
      case 401:
        // Token expired or invalid
        localStorage.removeItem('token');
        window.location.href = '/login';
        break;

      case 403:
        // Forbidden - redirect or show message
        break;

      case 404:
        // Not found
        break;

      case 429:
        // Rate limited
        const retryAfter = error.response.headers['retry-after'];
        error.retryAfter = retryAfter;
        break;

      case 500:
        // Server error
        console.error('Server error:', data);
        break;
    }

    return Promise.reject(error);
  }
);

export default api;`}</code></pre>
              <h2>
                {"Error Logging and Monitoring"}
              </h2>
              <pre><code>{`// Simple logger
const logger = {
  error: (error, context = {}) => {
    const logEntry = {
      level: 'error',
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      ...context,
    };

    console.error(JSON.stringify(logEntry));

    // In production, send to logging service
    if (process.env.NODE_ENV === 'production') {
      // sendToLoggingService(logEntry);
    }
  },

  warn: (message, context = {}) => {
    console.warn(JSON.stringify({
      level: 'warn',
      message,
      timestamp: new Date().toISOString(),
      ...context,
    }));
  },

  info: (message, context = {}) => {
    console.log(JSON.stringify({
      level: 'info',
      message,
      timestamp: new Date().toISOString(),
      ...context,
    }));
  },
};

// Usage in error handler
const errorHandler = (err, req, res, next) => {
  logger.error(err, {
    path: req.path,
    method: req.method,
    userId: req.user?.id,
    body: req.body,
    query: req.query,
  });

  // ... send response
};

// React error logging
function logErrorToService(error, errorInfo) {
  const errorLog = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack,
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
  };

  // Send to backend or error tracking service
  fetch('/api/errors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(errorLog),
  }).catch(console.error);
}`}</code></pre>
              <h2>
                {"Best Practices"}
              </h2>
              <pre><code>{`// 1. Always handle errors - never swallow them
// Bad
try {
  await riskyOperation();
} catch (error) {
  // Silent failure - bad!
}

// Good
try {
  await riskyOperation();
} catch (error) {
  logger.error(error);
  throw error; // Or handle appropriately
}

// 2. Use specific error types
// Bad
throw new Error('Something went wrong');

// Good
throw new NotFoundError('User');
throw new ValidationError('Invalid email', [{ field: 'email', message: '...' }]);

// 3. Include context in errors
// Bad
throw new Error('Database error');

// Good
throw new Error(\`Failed to fetch user \${userId}: \${dbError.message}\`);

// 4. Fail fast - validate early
function createUser(data) {
  // Validate immediately
  if (!data.email) {
    throw new ValidationError('Email is required');
  }
  if (!isValidEmail(data.email)) {
    throw new ValidationError('Invalid email format');
  }

  // Proceed with operation
  return User.create(data);
}

// 5. Use error boundaries strategically in React
// Wrap different sections separately
<App>
  <ErrorBoundary><Header /></ErrorBoundary>
  <ErrorBoundary><MainContent /></ErrorBoundary>
  <ErrorBoundary><Sidebar /></ErrorBoundary>
</App>

// 6. Provide user-friendly error messages
// Internal: "ECONNREFUSED 127.0.0.1:5432"
// User sees: "Unable to connect to the database. Please try again later."

// 7. Never expose sensitive info in errors
// Bad (production)
res.status(500).json({
  error: error.stack, // Exposes internals!
  query: req.query,
});

// Good
res.status(500).json({
  error: 'Internal server error',
});`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"Create custom error classes for different error types"}
                  </li>
                  <li>
                    {"Use centralized error handling middleware in Express"}
                  </li>
                  <li>
                    {"Wrap async route handlers to catch promise rejections"}
                  </li>
                  <li>
                    {"Use Error Boundaries in React for UI error recovery"}
                  </li>
                  <li>
                    {"Handle unhandled rejections and uncaught exceptions at process level"}
                  </li>
                  <li>
                    {"Log errors with context for debugging"}
                  </li>
                  <li>
                    {"Provide user-friendly messages without exposing internals"}
                  </li>
                  <li>
                    {"Validate input early to fail fast"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/mongodb-aggregation" className="prev-article">
                {"← MongoDB Aggregation"}
              </Link>
              <Link href="/full-stack-javascript/articles/cicd" className="next-article">
                {"CI/CD with GitHub Actions →"}
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
