import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "JWT for Beginners: Complete Guide to Token Authentication",
  description: "Learn JWT (JSON Web Tokens) fundamentals - secure authentication for modern web applications. Understand how JWTs work, their structure, and implementation in Python.",
  keywords: ["JWT tutorial", "JSON Web Tokens", "authentication", "authorization", "token-based auth", "Python JWT", "FastAPI JWT", "Django JWT"],
  alternates: { canonical: "/full-stack-python/articles/jwt" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/jwt",
    title: "JWT: JSON Web Tokens for Beginners",
    description: "Master JWT authentication for building secure web applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JWT: JSON Web Tokens for Beginners",
  "description": "Complete guide to JWT authentication",
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

export default function FullStackPythonJwtPage() {
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
              <Link href="/full-stack-python">
                {"Full Stack Python"}
              </Link>
              {" / "}
              <span>
                {"JWT"}
              </span>
            </div>
            <h1>
              {"JWT (JSON Web Tokens)"}
            </h1>
            <p className="article-subtitle">
              {"Secure Token-Based Authentication"}
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
                  {"What is JWT?"}
                </h2>
                <p>
                  {"JWT (JSON Web Token) is a compact, URL-safe way to represent claims between two parties. It's commonly used for authentication and information exchange in web applications."}
                </p>
                <p>
                  {"Think of a JWT like a movie ticket. The ticket contains information about you (seat number, movie, time), is signed by the theater (so it can't be forged), and is presented at the door to prove you're allowed in."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use JWT?"}
                </h2>
                <p>
                  {"Traditional session-based authentication stores user info on the server. JWT stores it in the token itself."}
                </p>
                <h3>
                  {"Session-Based Auth (Traditional)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`1. User logs in with username/password
2. Server creates session, stores in database
3. Server sends session ID in cookie
4. Client sends session ID with each request
5. Server looks up session in database to verify

Problem: Server must store all sessions
Problem: Doesn't scale well across multiple servers`}</code></pre>
                </div>
                <h3>
                  {"Token-Based Auth (JWT)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`1. User logs in with username/password
2. Server creates JWT with user info, signs it
3. Server sends JWT to client
4. Client stores JWT and sends with each request
5. Server verifies signature - no database lookup needed!

Advantage: Stateless - server doesn't store anything
Advantage: Scales easily across multiple servers`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JWT Structure"}
                </h2>
                <p>
                  {"A JWT consists of three parts separated by dots:"}
                </p>
                <div className="code-block">
                  <pre><code>{`xxxxx.yyyyy.zzzzz
  │      │      │
  │      │      └── Signature
  │      └── Payload
  └── Header

Example JWT:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE1MTYyMzkwMjJ9.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`}</code></pre>
                </div>
                <h3>
                  {"1. Header"}
                </h3>
                <p>
                  {"Contains the token type and signing algorithm."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Decoded header
{
  "alg": "HS256",  // Algorithm used
  "typ": "JWT"     // Token type
}`}</code></pre>
                </div>
                <h3>
                  {"2. Payload"}
                </h3>
                <p>
                  {"Contains the claims - statements about the user and additional data."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Decoded payload
{
  "sub": "1234567890",    // Subject (user ID)
  "name": "John Doe",     // Custom claim
  "email": "john@example.com",
  "role": "admin",
  "iat": 1516239022,      // Issued at (timestamp)
  "exp": 1516242622       // Expiration (timestamp)
}`}</code></pre>
                </div>
                <h3>
                  {"3. Signature"}
                </h3>
                <p>
                  {"Created by encoding header and payload, then signing with a secret key."}
                </p>
                <div className="code-block">
                  <pre><code>{`HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-secret-key
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JWT in Python"}
                </h2>
                <p>
                  {"Using the PyJWT library:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install PyJWT
pip install PyJWT

# Creating a JWT
import jwt
from datetime import datetime, timedelta

SECRET_KEY = "your-secret-key-keep-it-safe"

def create_token(user_id: int, username: str) -> str:
    payload = {
        "sub": user_id,              # Subject (user identifier)
        "username": username,
        "iat": datetime.utcnow(),    # Issued at
        "exp": datetime.utcnow() + timedelta(hours=24)  # Expires in 24 hours
    }

    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token

# Verifying a JWT
def verify_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        raise Exception("Token has expired")
    except jwt.InvalidTokenError:
        raise Exception("Invalid token")

# Usage
token = create_token(123, "john_doe")
print(f"Token: {token}")

data = verify_token(token)
print(f"User ID: {data['sub']}, Username: {data['username']}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JWT with FastAPI"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
import jwt
from datetime import datetime, timedelta

app = FastAPI()
security = HTTPBearer()

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

class LoginRequest(BaseModel):
    username: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

# Fake user database
fake_users = {
    "john": {"password": "secret123", "user_id": 1}
}

def create_access_token(user_id: int, username: str) -> str:
    payload = {
        "sub": user_id,
        "username": username,
        "exp": datetime.utcnow() + timedelta(hours=24)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token has expired"
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )

@app.post("/login", response_model=TokenResponse)
def login(request: LoginRequest):
    user = fake_users.get(request.username)
    if not user or user["password"] != request.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )

    token = create_access_token(user["user_id"], request.username)
    return TokenResponse(access_token=token)

@app.get("/protected")
def protected_route(current_user: dict = Depends(get_current_user)):
    return {
        "message": f"Hello, {current_user['username']}!",
        "user_id": current_user["sub"]
    }

@app.get("/profile")
def get_profile(current_user: dict = Depends(get_current_user)):
    return {
        "user_id": current_user["sub"],
        "username": current_user["username"]
    }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Access Tokens vs Refresh Tokens"}
                </h2>
                <p>
                  {"A common pattern uses two types of tokens:"}
                </p>
                <h3>
                  {"Access Token"}
                </h3>
                <ul>
                  <li>
                    {"Short-lived (15 minutes to 1 hour)"}
                  </li>
                  <li>
                    {"Used for API requests"}
                  </li>
                  <li>
                    {"Contains user info"}
                  </li>
                </ul>
                <h3>
                  {"Refresh Token"}
                </h3>
                <ul>
                  <li>
                    {"Long-lived (days to weeks)"}
                  </li>
                  <li>
                    {"Used only to get new access tokens"}
                  </li>
                  <li>
                    {"Stored securely (httpOnly cookie)"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`def create_tokens(user_id: int, username: str):
    # Access token - short lived
    access_payload = {
        "sub": user_id,
        "username": username,
        "type": "access",
        "exp": datetime.utcnow() + timedelta(minutes=15)
    }
    access_token = jwt.encode(access_payload, SECRET_KEY, algorithm="HS256")

    # Refresh token - long lived
    refresh_payload = {
        "sub": user_id,
        "type": "refresh",
        "exp": datetime.utcnow() + timedelta(days=7)
    }
    refresh_token = jwt.encode(refresh_payload, SECRET_KEY, algorithm="HS256")

    return access_token, refresh_token

@app.post("/refresh")
def refresh_access_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])

        if payload.get("type") != "refresh":
            raise HTTPException(status_code=401, detail="Invalid token type")

        # Create new access token
        new_access_token = create_access_token(payload["sub"], payload.get("username", ""))
        return {"access_token": new_access_token}

    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Refresh token expired")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JWT Security Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use HTTPS:"}
                    </strong>
                    {" Always transmit tokens over encrypted connections."}
                  </li>
                  <li>
                    <strong>
                      {"Keep secrets secret:"}
                    </strong>
                    {" Never expose your secret key. Use environment variables."}
                  </li>
                  <li>
                    <strong>
                      {"Set expiration:"}
                    </strong>
                    {" Always include an exp claim. Short-lived tokens are safer."}
                  </li>
                  <li>
                    <strong>
                      {"Validate all claims:"}
                    </strong>
                    {" Check exp, iss (issuer), aud (audience) as needed."}
                  </li>
                  <li>
                    <strong>
                      {"Use strong algorithms:"}
                    </strong>
                    {" HS256 minimum, RS256 for distributed systems."}
                  </li>
                  <li>
                    <strong>
                      {"Don't store sensitive data:"}
                    </strong>
                    {" Payloads can be decoded. Don't include passwords!"}
                  </li>
                  <li>
                    <strong>
                      {"Store tokens safely:"}
                    </strong>
                    {" In browsers, use httpOnly cookies or secure storage."}
                  </li>
                  <li>
                    <strong>
                      {"Implement token revocation:"}
                    </strong>
                    {" Have a way to invalidate tokens if needed."}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# BAD - Secret in code
SECRET_KEY = "my-secret-key"

# GOOD - Secret from environment
import os
SECRET_KEY = os.environ.get("JWT_SECRET_KEY")

# BAD - Sensitive data in payload
payload = {
    "user_id": 123,
    "password": "secret123",  # NEVER DO THIS!
    "credit_card": "1234..."  # NEVER DO THIS!
}

# GOOD - Only necessary identifiers
payload = {
    "sub": 123,  # User ID
    "role": "admin",
    "exp": datetime.utcnow() + timedelta(hours=1)
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common JWT Claims"}
                </h2>
                <div className="code-block">
                  <pre><code>{`{
  // Registered claims (standard)
  "iss": "your-app",           // Issuer
  "sub": "user-123",           // Subject (user ID)
  "aud": "your-api",           // Audience
  "exp": 1516242622,           // Expiration time
  "nbf": 1516239022,           // Not valid before
  "iat": 1516239022,           // Issued at
  "jti": "unique-token-id",    // JWT ID (for revocation)

  // Public claims (custom but registered)
  "name": "John Doe",
  "email": "john@example.com",

  // Private claims (your own)
  "role": "admin",
  "permissions": ["read", "write"]
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"JWT vs Sessions: When to Use What"}
                </h2>
                <h3>
                  {"Use JWT when:"}
                </h3>
                <ul>
                  <li>
                    {"Building APIs consumed by mobile apps or SPAs"}
                  </li>
                  <li>
                    {"Need stateless authentication"}
                  </li>
                  <li>
                    {"Microservices architecture"}
                  </li>
                  <li>
                    {"Cross-domain authentication needed"}
                  </li>
                </ul>
                <h3>
                  {"Use Sessions when:"}
                </h3>
                <ul>
                  <li>
                    {"Traditional server-rendered web apps"}
                  </li>
                  <li>
                    {"Need immediate token revocation"}
                  </li>
                  <li>
                    {"Smaller scale, single server"}
                  </li>
                  <li>
                    {"Less complexity needed"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master JWT with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers JWT authentication in depth. Learn to build secure APIs with proper authentication using FastAPI and Django with personalized guidance."}
                </p>
                <Link href="/full-stack-python" className="btn btn-primary">
                  {"Explore Full Stack Python Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-python/articles/oauth2" className="related-article-card">
                    <h4>
                      {"OAuth 2.0"}
                    </h4>
                    {" "}
                    <p>
                      {"Authorization framework"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/fastapi" className="related-article-card">
                    <h4>
                      {"FastAPI"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern Python API framework"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/rest-apis-python" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Build APIs with Python"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn JWT authentication."} />
    </>
  );
}
