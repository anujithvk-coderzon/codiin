import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "OAuth 2.0 for Beginners: Complete Authorization Guide",
  description: "Learn OAuth 2.0 fundamentals - the industry standard for authorization. Understand flows, tokens, and how to implement OAuth in your Python applications.",
  keywords: ["OAuth 2.0 tutorial", "OAuth for beginners", "authorization", "authentication", "OAuth flows", "Python OAuth", "social login"],
  alternates: { canonical: "/full-stack-python/articles/oauth2" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/oauth2",
    title: "OAuth 2.0: Authorization for Modern Applications",
    description: "Master OAuth 2.0 to implement secure authorization in your applications.",
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
  "headline": "OAuth 2.0: Authorization for Modern Applications",
  "description": "Complete guide to OAuth 2.0 authorization",
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

export default function FullStackPythonOauth2Page() {
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
                {"OAuth 2.0"}
              </span>
            </div>
            <h1>
              {"OAuth 2.0"}
            </h1>
            <p className="article-subtitle">
              {"The Industry Standard for Authorization"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is OAuth 2.0?"}
                </h2>
                <p>
                  {"OAuth 2.0 is an authorization framework that allows applications to obtain limited access to user accounts on other services. It's what powers \"Login with Google,\" \"Login with GitHub,\" and similar features."}
                </p>
                <p>
                  {"Think of OAuth like a valet key for your car. Instead of giving someone your master key (password), you give them a special key that only opens the door and starts the engine - but can't open the trunk or glove box. OAuth lets you grant limited access to your data without sharing your password."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Authentication vs Authorization"}
                </h2>
                <p>
                  {"These terms are often confused:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Authentication (AuthN):"}
                    </strong>
                    {" Who are you? Proving your identity."}
                  </li>
                  <li>
                    <strong>
                      {"Authorization (AuthZ):"}
                    </strong>
                    {" What can you do? Granting permissions."}
                  </li>
                </ul>
                <p>
                  {"OAuth 2.0 is primarily about "}
                  <strong>
                    {"authorization"}
                  </strong>
                  {" - granting access to resources. OpenID Connect (OIDC), built on top of OAuth 2.0, adds authentication."}
                </p>
                <div className="code-block">
                  <pre><code>{`Traditional Login:
Username: john@example.com
Password: ********
→ Authentication (proves identity)

OAuth 2.0:
"App X wants to access your Google Calendar"
[Allow] [Deny]
→ Authorization (grants permission)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"OAuth 2.0 Roles"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Resource Owner:"}
                    </strong>
                    {" The user who owns the data (you!)"}
                  </li>
                  <li>
                    <strong>
                      {"Client:"}
                    </strong>
                    {" The application requesting access (your app)"}
                  </li>
                  <li>
                    <strong>
                      {"Authorization Server:"}
                    </strong>
                    {" Verifies identity and issues tokens (Google, GitHub)"}
                  </li>
                  <li>
                    <strong>
                      {"Resource Server:"}
                    </strong>
                    {" Hosts the protected data (Google Calendar API)"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`Example: App wants to read your Google Calendar

Resource Owner: You (the user)
Client: "Calendar Widget" app
Authorization Server: Google's OAuth server
Resource Server: Google Calendar API

Flow:
1. App asks you for permission
2. You approve on Google's site
3. Google gives app a token
4. App uses token to access your calendar`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"OAuth 2.0 Flows (Grant Types)"}
                </h2>
                <p>
                  {"Different scenarios require different flows:"}
                </p>
                <h3>
                  {"1. Authorization Code Flow (Most Common)"}
                </h3>
                <p>
                  {"Used by web applications with a backend server. Most secure for web apps."}
                </p>
                <div className="code-block">
                  <pre><code>{`┌──────────┐                              ┌─────────────────┐
│   User   │                              │  Authorization  │
│ (Browser)│                              │     Server      │
└────┬─────┘                              └────────┬────────┘
     │                                             │
     │  1. Click "Login with Google"               │
     │ ────────────────────────────────────────────>
     │                                             │
     │  2. Show Google login page                  │
     │ <────────────────────────────────────────────
     │                                             │
     │  3. User logs in and approves               │
     │ ────────────────────────────────────────────>
     │                                             │
     │  4. Redirect with authorization code        │
     │ <────────────────────────────────────────────
     │        (code=abc123)                        │
     │                                             │
┌────┴─────┐                                       │
│  Client  │  5. Exchange code for tokens          │
│ (Server) │ ──────────────────────────────────────>
│          │                                       │
│          │  6. Return access_token + refresh_token
│          │ <──────────────────────────────────────
└──────────┘`}</code></pre>
                </div>
                <h3>
                  {"2. Authorization Code + PKCE"}
                </h3>
                <p>
                  {"Enhanced security for mobile apps and SPAs. Prevents code interception attacks."}
                </p>
                <h3>
                  {"3. Client Credentials Flow"}
                </h3>
                <p>
                  {"For server-to-server communication. No user involved."}
                </p>
                <h3>
                  {"4. Implicit Flow (Deprecated)"}
                </h3>
                <p>
                  {"Was used for SPAs. Now replaced by Authorization Code + PKCE."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"OAuth 2.0 Tokens"}
                </h2>
                <h3>
                  {"Access Token"}
                </h3>
                <p>
                  {"Used to access protected resources. Short-lived (minutes to hours)."}
                </p>
                <h3>
                  {"Refresh Token"}
                </h3>
                <p>
                  {"Used to get new access tokens. Long-lived (days to months)."}
                </p>
                <h3>
                  {"ID Token (OpenID Connect)"}
                </h3>
                <p>
                  {"Contains user identity information. Used for authentication."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Token Response Example
{
    "access_token": "eyJhbGciOiJSUzI1NiIs...",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2g...",
    "scope": "read:profile read:email",
    "id_token": "eyJhbGciOiJSUzI1NiIs..."  // OpenID Connect
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Implementing OAuth 2.0 in Python"}
                </h2>
                <p>
                  {"Example: Google OAuth with FastAPI"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install: pip install fastapi authlib httpx python-dotenv

from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
from starlette.middleware.sessions import SessionMiddleware
import os

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key="your-secret-key")

# Configure OAuth
oauth = OAuth()
oauth.register(
    name='google',
    client_id=os.getenv('GOOGLE_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)

@app.get('/')
def home():
    return {'message': 'Go to /login to authenticate'}

@app.get('/login')
async def login(request: Request):
    redirect_uri = request.url_for('auth_callback')
    return await oauth.google.authorize_redirect(request, redirect_uri)

@app.get('/auth/callback')
async def auth_callback(request: Request):
    token = await oauth.google.authorize_access_token(request)
    user_info = token.get('userinfo')

    # Here you would:
    # 1. Find or create user in your database
    # 2. Create your own session/JWT
    # 3. Redirect to your app

    return {
        'email': user_info['email'],
        'name': user_info['name'],
        'picture': user_info['picture']
    }

@app.get('/logout')
def logout(request: Request):
    request.session.clear()
    return RedirectResponse(url='/')`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"OAuth 2.0 with GitHub"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# GitHub OAuth Example
import httpx
from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
import os

app = FastAPI()

GITHUB_CLIENT_ID = os.getenv('GITHUB_CLIENT_ID')
GITHUB_CLIENT_SECRET = os.getenv('GITHUB_CLIENT_SECRET')
REDIRECT_URI = 'http://localhost:8000/auth/github/callback'

@app.get('/login/github')
def login_github():
    # Step 1: Redirect to GitHub authorization
    github_auth_url = (
        f"https://github.com/login/oauth/authorize"
        f"?client_id={GITHUB_CLIENT_ID}"
        f"&redirect_uri={REDIRECT_URI}"
        f"&scope=read:user user:email"
    )
    return RedirectResponse(url=github_auth_url)

@app.get('/auth/github/callback')
async def github_callback(code: str):
    # Step 2: Exchange code for access token
    async with httpx.AsyncClient() as client:
        token_response = await client.post(
            'https://github.com/login/oauth/access_token',
            data={
                'client_id': GITHUB_CLIENT_ID,
                'client_secret': GITHUB_CLIENT_SECRET,
                'code': code,
                'redirect_uri': REDIRECT_URI
            },
            headers={'Accept': 'application/json'}
        )
        token_data = token_response.json()
        access_token = token_data['access_token']

        # Step 3: Use token to get user info
        user_response = await client.get(
            'https://api.github.com/user',
            headers={'Authorization': f'Bearer {access_token}'}
        )
        user = user_response.json()

        return {
            'github_id': user['id'],
            'username': user['login'],
            'name': user['name'],
            'avatar': user['avatar_url']
        }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Scopes: Limiting Access"}
                </h2>
                <p>
                  {"Scopes define what permissions the app is requesting:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Google Scopes
openid                    # Basic authentication
email                     # Read email address
profile                   # Read name and picture
https://www.googleapis.com/auth/calendar.readonly  # Read calendar
https://www.googleapis.com/auth/drive.file         # Access Drive files

# GitHub Scopes
read:user                 # Read user profile
user:email                # Read email
repo                      # Full access to repositories
public_repo              # Access public repos only

# Request Example
scope=openid+email+profile  # Request multiple scopes`}</code></pre>
                </div>
                <p>
                  {"Always request the minimum scopes needed. Users are more likely to approve limited access."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Common OAuth 2.0 Providers"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Google:"}
                    </strong>
                    {" Most widely used, supports OpenID Connect"}
                  </li>
                  <li>
                    <strong>
                      {"GitHub:"}
                    </strong>
                    {" Popular for developer tools"}
                  </li>
                  <li>
                    <strong>
                      {"Facebook:"}
                    </strong>
                    {" Social login"}
                  </li>
                  <li>
                    <strong>
                      {"Microsoft:"}
                    </strong>
                    {" Enterprise and consumer"}
                  </li>
                  <li>
                    <strong>
                      {"Twitter/X:"}
                    </strong>
                    {" Social media integration"}
                  </li>
                  <li>
                    <strong>
                      {"Apple:"}
                    </strong>
                    {" iOS apps (Sign in with Apple)"}
                  </li>
                  <li>
                    <strong>
                      {"Auth0:"}
                    </strong>
                    {" Identity as a service"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"OAuth 2.0 Security Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use HTTPS:"}
                    </strong>
                    {" Always. Never transmit tokens over HTTP."}
                  </li>
                  <li>
                    <strong>
                      {"Use PKCE:"}
                    </strong>
                    {" For all public clients (mobile, SPA)."}
                  </li>
                  <li>
                    <strong>
                      {"Validate redirect URIs:"}
                    </strong>
                    {" Only allow registered URIs."}
                  </li>
                  <li>
                    <strong>
                      {"Use state parameter:"}
                    </strong>
                    {" Prevents CSRF attacks."}
                  </li>
                  <li>
                    <strong>
                      {"Store tokens securely:"}
                    </strong>
                    {" Never in localStorage, use httpOnly cookies."}
                  </li>
                  <li>
                    <strong>
                      {"Short token lifetimes:"}
                    </strong>
                    {" Use refresh tokens for long sessions."}
                  </li>
                  <li>
                    <strong>
                      {"Validate tokens:"}
                    </strong>
                    {" Check signature, expiration, audience."}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# State parameter prevents CSRF
import secrets

@app.get('/login')
def login(request: Request):
    state = secrets.token_urlsafe(32)
    request.session['oauth_state'] = state

    auth_url = f"{AUTH_URL}?client_id={CLIENT_ID}&state={state}&..."
    return RedirectResponse(auth_url)

@app.get('/callback')
def callback(request: Request, state: str, code: str):
    # Verify state matches
    if state != request.session.get('oauth_state'):
        raise HTTPException(400, "Invalid state parameter")

    # Continue with token exchange...`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"OpenID Connect (OIDC)"}
                </h2>
                <p>
                  {"OIDC is an identity layer built on OAuth 2.0. While OAuth 2.0 handles authorization, OIDC adds authentication."}
                </p>
                <div className="code-block">
                  <pre><code>{`OAuth 2.0: "App can access your calendar" (authorization)
OIDC: "App knows you are john@example.com" (authentication)

OIDC adds:
- ID Token (JWT with user identity)
- UserInfo endpoint
- Standard scopes (openid, profile, email)
- Discovery document (.well-known/openid-configuration)`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master OAuth 2.0 with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers OAuth 2.0 and authentication in depth. Learn to implement secure social logins and API authorization with personalized guidance."}
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
                  <Link href="/full-stack-python/articles/jwt" className="related-article-card">
                    <h4>
                      {"JWT"}
                    </h4>
                    {" "}
                    <p>
                      {"Token-based authentication"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn OAuth 2.0."} />
    </>
  );
}
