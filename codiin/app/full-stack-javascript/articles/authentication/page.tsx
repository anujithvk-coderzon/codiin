import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Authentication: JWT & Passport.js",
  description: "Learn authentication in Node.js with JWT and Passport.js. Master tokens, sessions, OAuth, password hashing, and secure authentication patterns.",
  keywords: ["JWT authentication", "Passport.js", "Node.js authentication", "OAuth", "bcrypt", "access tokens", "refresh tokens", "session management"],
  alternates: { canonical: "/full-stack-javascript/articles/authentication" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/authentication",
    title: "Authentication: JWT & Passport.js",
    description: "Master secure authentication in Node.js applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Authentication: JWT & Passport.js",
  "description": "Complete guide to authentication in Node.js applications",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-25",
  "dateModified": "2024-12-25"
} as const;

export default function FullStackJavascriptAuthenticationPage() {
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
              <Link href="/full-stack-javascript">
                {"Full Stack JavaScript"}
              </Link>
              {" / "}
              <span>
                {"Authentication"}
              </span>
            </div>
            <h1>
              {"Authentication"}
            </h1>
            <p className="article-subtitle">
              {"JWT & Passport.js"}
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
                  {"What is Authentication?"}
                </h2>
                <p>
                  {"Authentication is the process of verifying who a user is. It's how your application knows that the person accessing it is actually who they claim to be."}
                </p>
                <div className="code-block">
                  <pre><code>{`Authentication vs Authorization:

AUTHENTICATION (AuthN)              AUTHORIZATION (AuthZ)
─────────────────────────────────────────────────────────
"Who are you?"                      "What can you do?"

Verifies identity                   Checks permissions
Login/password                      Roles and permissions
Proves you are you                  Grants/denies access

Example:                            Example:
Logging into your                   Admin can delete users,
bank account                        Regular user cannot

Both are needed for secure applications!

Common Authentication Methods:

1. SESSION-BASED (Traditional)
   Client ────login────► Server
          ◄───cookie────
   Client ────cookie───► Server (validates session)

2. TOKEN-BASED (JWT)
   Client ────login────► Server
          ◄───token────
   Client ────token────► Server (validates token)

3. OAUTH (Third-party)
   Client ──►Google──► Your Server
          ◄─token─┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Password Hashing with bcrypt"}
                </h2>
                <p>
                  {"Never store passwords in plain text. Always hash them with a strong algorithm like bcrypt."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install bcrypt
npm install bcrypt

// Password hashing
import bcrypt from 'bcrypt';

// Hash a password (during registration)
async function hashPassword(plainPassword) {
    const saltRounds = 10;  // Cost factor (higher = slower but more secure)
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
}

// Verify a password (during login)
async function verifyPassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

// Usage in registration
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        email,
        password: hashedPassword
    });

    res.status(201).json({ message: 'User registered successfully' });
});

// Usage in login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Password correct - generate token or session
    res.json({ message: 'Login successful' });
});

// Why bcrypt?
// ✓ Salted - each password gets unique salt
// ✓ Slow by design - prevents brute force
// ✓ Adjustable cost - can increase as hardware improves
// ✗ Never use: MD5, SHA1, plain text!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JSON Web Tokens (JWT)"}
                </h2>
                <p>
                  {"JWT is a compact, self-contained way to securely transmit information between parties as a JSON object."}
                </p>
                <div className="code-block">
                  <pre><code>{`JWT Structure:
─────────────────────────────────────────────────────────

header.payload.signature

HEADER (Algorithm & Token Type)
{
    "alg": "HS256",
    "typ": "JWT"
}

PAYLOAD (Claims/Data)
{
    "sub": "user123",        // Subject (user ID)
    "name": "John Doe",
    "role": "admin",
    "iat": 1516239022,       // Issued at
    "exp": 1516242622        // Expiration
}

SIGNATURE
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret
)

Result:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

# Install jsonwebtoken
npm install jsonwebtoken

// JWT implementation
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '1h';

// Generate token
function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };

    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
}

// Verify token
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { valid: true, decoded };
    } catch (error) {
        return { valid: false, error: error.message };
    }
}

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find and verify user
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user);

    res.json({
        message: 'Login successful',
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        }
    });
});

// Auth middleware
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const { valid, decoded, error } = verifyToken(token);

    if (!valid) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decoded;
    next();
}

// Protected route
app.get('/profile', authenticate, (req, res) => {
    res.json({ user: req.user });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Access & Refresh Tokens"}
                </h2>
                <p>
                  {"Use short-lived access tokens with refresh tokens for better security."}
                </p>
                <div className="code-block">
                  <pre><code>{`Token Strategy:
─────────────────────────────────────────────────────────

ACCESS TOKEN                        REFRESH TOKEN
Short-lived (15 min)                Long-lived (7 days)
Stored in memory                    Stored in httpOnly cookie
Used for API requests               Used to get new access token
Stateless                           Stored in database

Flow:
1. Login → Get both tokens
2. Use access token for requests
3. Access token expires → Use refresh token to get new one
4. Refresh token expires → User must login again

// Token generation
const ACCESS_TOKEN_EXPIRES = '15m';
const REFRESH_TOKEN_EXPIRES = '7d';

function generateTokens(user) {
    const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRES }
    );

    const refreshToken = jwt.sign(
        { id: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRES }
    );

    return { accessToken, refreshToken };
}

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    // Store refresh token in database
    await RefreshToken.create({
        token: refreshToken,
        userId: user._id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    // Send refresh token in httpOnly cookie
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
    });

    res.json({ accessToken });
});

// Refresh endpoint
app.post('/refresh', async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token required' });
    }

    // Verify refresh token exists in database
    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedToken) {
        return res.status(401).json({ error: 'Invalid refresh token' });
    }

    // Verify token is valid
    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(decoded.id);

        // Generate new access token
        const accessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: ACCESS_TOKEN_EXPIRES }
        );

        res.json({ accessToken });
    } catch (error) {
        // Delete invalid refresh token
        await RefreshToken.deleteOne({ token: refreshToken });
        res.status(401).json({ error: 'Invalid refresh token' });
    }
});

// Logout endpoint
app.post('/logout', async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    // Delete refresh token from database
    await RefreshToken.deleteOne({ token: refreshToken });

    // Clear cookie
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully' });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Passport.js Basics"}
                </h2>
                <p>
                  {"Passport is authentication middleware for Node.js. It supports 500+ authentication strategies including local, OAuth, and more."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install passport
npm install passport passport-local passport-jwt

// passport/config.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

// Local Strategy (username/password)
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return done(null, false, { message: 'User not found' });
            }

            const isValid = await bcrypt.compare(password, user.password);

            if (!isValid) {
                return done(null, false, { message: 'Invalid password' });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

// JWT Strategy
passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
        try {
            const user = await User.findById(payload.id);

            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }
));

export default passport;

// app.js
import express from 'express';
import passport from './passport/config.js';

const app = express();

app.use(express.json());
app.use(passport.initialize());

// Login with Local Strategy
app.post('/login',
    passport.authenticate('local', { session: false }),
    (req, res) => {
        const token = generateToken(req.user);
        res.json({ token, user: req.user });
    }
);

// Protected route with JWT Strategy
app.get('/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json({ user: req.user });
    }
);

// Error handling for authentication
app.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ error: info.message });
        }
        req.user = user;
        next();
    })(req, res, next);
}, (req, res) => {
    const token = generateToken(req.user);
    res.json({ token });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"OAuth with Passport (Google)"}
                </h2>
                <p>
                  {"Allow users to login with their Google account."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install Google OAuth strategy
npm install passport-google-oauth20

// passport/google.js
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import User from '../models/User.js';

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Check if user exists
            let user = await User.findOne({ googleId: profile.id });

            if (user) {
                return done(null, user);
            }

            // Check if email is already registered
            user = await User.findOne({ email: profile.emails[0].value });

            if (user) {
                // Link Google account to existing user
                user.googleId = profile.id;
                await user.save();
                return done(null, user);
            }

            // Create new user
            user = await User.create({
                googleId: profile.id,
                email: profile.emails[0].value,
                name: profile.displayName,
                avatar: profile.photos[0]?.value
            });

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

// Routes
// Redirect to Google
app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// Google callback
app.get('/auth/google/callback',
    passport.authenticate('google', {
        session: false,
        failureRedirect: '/login?error=google_failed'
    }),
    (req, res) => {
        // Generate JWT token
        const token = generateToken(req.user);

        // Redirect to frontend with token
        res.redirect(\`\${process.env.FRONTEND_URL}/auth/callback?token=\${token}\`);
    }
);

// Frontend handling (React)
// pages/auth/callback.jsx
function AuthCallback() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            localStorage.setItem('token', token);
            router.push('/dashboard');
        } else {
            router.push('/login?error=auth_failed');
        }
    }, []);

    return <div>Completing login...</div>;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Role-Based Access Control (RBAC)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// User model with roles
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['user', 'editor', 'admin'],
        default: 'user'
    }
});

// Role-based middleware
function authorize(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Not authorized' });
        }

        next();
    };
}

// Usage
app.get('/users',
    passport.authenticate('jwt', { session: false }),
    authorize('admin'),
    async (req, res) => {
        const users = await User.find();
        res.json(users);
    }
);

app.put('/posts/:id',
    passport.authenticate('jwt', { session: false }),
    authorize('editor', 'admin'),
    async (req, res) => {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    }
);

// Permission-based access (more granular)
const permissions = {
    admin: ['create', 'read', 'update', 'delete', 'manage_users'],
    editor: ['create', 'read', 'update'],
    user: ['read']
};

function hasPermission(permission) {
    return (req, res, next) => {
        const userPermissions = permissions[req.user.role] || [];

        if (!userPermissions.includes(permission)) {
            return res.status(403).json({ error: 'Permission denied' });
        }

        next();
    };
}

app.delete('/posts/:id',
    authenticate,
    hasPermission('delete'),
    async (req, res) => {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    }
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Frontend Authentication (React)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for existing token on mount
        const token = localStorage.getItem('accessToken');
        if (token) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    async function fetchUser() {
        try {
            const response = await api.get('/auth/me');
            setUser(response.data.user);
        } catch (error) {
            localStorage.removeItem('accessToken');
        } finally {
            setLoading(false);
        }
    }

    async function login(email, password) {
        const response = await api.post('/auth/login', { email, password });
        const { accessToken, user } = response.data;

        localStorage.setItem('accessToken', accessToken);
        setUser(user);
        navigate('/dashboard');
    }

    async function register(name, email, password) {
        await api.post('/auth/register', { name, email, password });
        await login(email, password);
    }

    async function logout() {
        try {
            await api.post('/auth/logout');
        } finally {
            localStorage.removeItem('accessToken');
            setUser(null);
            navigate('/login');
        }
    }

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}

// services/api.js - Axios with interceptors
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true  // For cookies
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
});

// Handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const response = await api.post('/auth/refresh');
                const { accessToken } = response.data;

                localStorage.setItem('accessToken', accessToken);
                originalRequest.headers.Authorization = \`Bearer \${accessToken}\`;

                return api(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem('accessToken');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;

// components/LoginForm.jsx
function LoginForm() {
    const { login } = useAuth();
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            await login(email, password);
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <input name="email" type="email" required />
            <input name="password" type="password" required />
            <button type="submit">Login</button>
        </form>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Security Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Hash passwords:"}
                    </strong>
                    {" Always use bcrypt with salt rounds >= 10"}
                  </li>
                  <li>
                    <strong>
                      {"Use HTTPS:"}
                    </strong>
                    {" Never transmit tokens over plain HTTP"}
                  </li>
                  <li>
                    <strong>
                      {"Short-lived access tokens:"}
                    </strong>
                    {" 15 minutes max for access tokens"}
                  </li>
                  <li>
                    <strong>
                      {"Secure refresh tokens:"}
                    </strong>
                    {" Store in httpOnly cookies, not localStorage"}
                  </li>
                  <li>
                    <strong>
                      {"Rate limit login:"}
                    </strong>
                    {" Prevent brute force attacks"}
                  </li>
                  <li>
                    <strong>
                      {"Validate input:"}
                    </strong>
                    {" Sanitize all user input to prevent injection"}
                  </li>
                  <li>
                    <strong>
                      {"Use secure headers:"}
                    </strong>
                    {" helmet.js for Express security headers"}
                  </li>
                  <li>
                    <strong>
                      {"Rotate secrets:"}
                    </strong>
                    {" Have a plan to rotate JWT secrets"}
                  </li>
                  <li>
                    <strong>
                      {"Logout everywhere:"}
                    </strong>
                    {" Implement token blacklisting for logout"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor failed attempts:"}
                    </strong>
                    {" Log and alert on suspicious activity"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Security packages
npm install helmet express-rate-limit express-mongo-sanitize

// Security middleware setup
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';

// Security headers
app.use(helmet());

// Rate limiting for auth routes
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 5,                     // 5 attempts
    message: 'Too many login attempts, please try again later'
});

app.use('/auth/login', authLimiter);
app.use('/auth/register', authLimiter);

// Prevent NoSQL injection
app.use(mongoSanitize());

// Password requirements
const passwordSchema = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
};

function validatePassword(password) {
    // Use a library like password-validator
    return validator.validate(password, passwordSchema);
}`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Secure Applications"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers authentication in depth. Learn to build secure applications with expert guidance."}
                </p>
                <Link href="/full-stack-javascript" className="btn btn-primary">
                  {"Explore JavaScript Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-javascript/articles/expressjs" className="related-article-card">
                    <h4>
                      {"Express.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Build backend APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/mongodb" className="related-article-card">
                    <h4>
                      {"MongoDB"}
                    </h4>
                    {" "}
                    <p>
                      {"Store user data securely"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/rest-apis" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Design secure API endpoints"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Authentication."} />
    </>
  );
}
