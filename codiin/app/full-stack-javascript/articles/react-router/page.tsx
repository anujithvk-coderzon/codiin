import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "React Router: Navigation for Modern Web Apps",
  description: "Learn React Router for building multi-page applications. Master routing, navigation, nested routes, URL parameters, and protected routes in React.",
  keywords: ["React Router tutorial", "React navigation", "SPA routing", "nested routes", "URL parameters", "protected routes", "React Router v6"],
  alternates: { canonical: "/full-stack-javascript/articles/react-router" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/react-router",
    title: "React Router: Navigation for Modern Web Apps",
    description: "Master client-side routing in React applications with React Router.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "React Router: Navigation for Modern Web Apps",
  "description": "Complete guide to React Router for building multi-page React applications",
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

export default function FullStackJavascriptReactRouterPage() {
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
                {"React Router"}
              </span>
            </div>
            <h1>
              {"React Router & Navigation"}
            </h1>
            <p className="article-subtitle">
              {"Build Multi-Page React Applications"}
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
                  {"What is React Router?"}
                </h2>
                <p>
                  {"React Router is the standard routing library for React. It enables navigation between different views or pages in your React application without full page reloads, creating a smooth, app-like experience."}
                </p>
                <p>
                  {"Without React Router, clicking links would reload the entire page from the server. With React Router, only the components that need to change are updated, making your app feel instant and responsive."}
                </p>
                <div className="code-block">
                  <pre><code>{`Traditional Website vs React Router:

TRADITIONAL (Full Page Reload)
┌─────────────────────────────────┐
│  Click Link → Server Request    │
│      → Full HTML Response       │
│      → Entire Page Reloads      │
│      → White flash, slow        │
└─────────────────────────────────┘

REACT ROUTER (Client-Side)
┌─────────────────────────────────┐
│  Click Link → URL Changes       │
│      → React Updates Components │
│      → Instant, No Reload       │
│      → Smooth, Fast             │
└─────────────────────────────────┘

Benefits:
- Instant navigation
- Maintains app state
- Better user experience
- Works offline (with service workers)
- Enables animations between pages`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Installation & Setup"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install React Router
npm install react-router-dom

# Basic Setup - main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// App.jsx - Define routes
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Navigation with Link and NavLink"}
                </h2>
                <p>
                  {"Use Link and NavLink components instead of anchor tags for client-side navigation."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { Link, NavLink } from 'react-router-dom';

// Basic Link - like an anchor tag but no page reload
function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

// NavLink - adds active class automatically
function Navigation() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                }
            >
                About
            </NavLink>
        </nav>
    );
}

// With inline styles based on active state
<NavLink
    to="/dashboard"
    style={({ isActive }) => ({
        color: isActive ? "red" : "blue",
        fontWeight: isActive ? "bold" : "normal"
    })}
>
    Dashboard
</NavLink>

// Link with state (pass data to next page)
<Link
    to="/product/123"
    state={{ fromSearch: true, query: "laptops" }}
>
    View Product
</Link>

// Accessing state in destination component
import { useLocation } from 'react-router-dom';

function ProductPage() {
    const location = useLocation();
    const { fromSearch, query } = location.state || {};

    return (
        <div>
            {fromSearch && <p>You came from search: {query}</p>}
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"URL Parameters"}
                </h2>
                <p>
                  {"Dynamic segments in URLs let you create pages that respond to different data."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Define route with parameter (starts with :)
<Routes>
    <Route path="/users/:userId" element={<UserProfile />} />
    <Route path="/posts/:postId" element={<Post />} />
    <Route path="/products/:category/:productId" element={<Product />} />
</Routes>

// Access parameters with useParams hook
import { useParams } from 'react-router-dom';

function UserProfile() {
    const { userId } = useParams();
    // URL: /users/123 → userId = "123"

    return <h1>User Profile: {userId}</h1>;
}

function Product() {
    const { category, productId } = useParams();
    // URL: /products/electronics/456
    // category = "electronics", productId = "456"

    return (
        <div>
            <h1>Category: {category}</h1>
            <p>Product ID: {productId}</p>
        </div>
    );
}

// Real-world example: Fetch data based on URL
function UserProfile() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(\`/api/users/\${userId}\`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [userId]);  // Re-fetch when userId changes

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>User not found</p>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Query Parameters"}
                </h2>
                <p>
                  {"Query strings (like ?search=react&page=2) are handled with useSearchParams."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { useSearchParams } from 'react-router-dom';

function SearchResults() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Read query parameters
    const query = searchParams.get("q");        // ?q=react
    const page = searchParams.get("page");      // ?page=2
    const sort = searchParams.get("sort");      // ?sort=date

    // URL: /search?q=react&page=2&sort=date
    // query = "react", page = "2", sort = "date"

    return (
        <div>
            <h1>Search: {query}</h1>
            <p>Page: {page || 1}</p>

            {/* Update query parameters */}
            <button onClick={() => {
                setSearchParams({ q: query, page: Number(page) + 1 });
            }}>
                Next Page
            </button>
        </div>
    );
}

// Practical example: Filter and pagination
function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    const category = searchParams.get("category") || "all";
    const page = parseInt(searchParams.get("page")) || 1;
    const sort = searchParams.get("sort") || "name";

    useEffect(() => {
        fetch(\`/api/products?category=\${category}&page=\${page}&sort=\${sort}\`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [category, page, sort]);

    const updateFilters = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(key, value);
        if (key !== "page") newParams.set("page", "1");  // Reset page
        setSearchParams(newParams);
    };

    return (
        <div>
            <select
                value={category}
                onChange={(e) => updateFilters("category", e.target.value)}
            >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
            </select>

            {products.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}

            <button onClick={() => updateFilters("page", page + 1)}>
                Next Page
            </button>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Nested Routes"}
                </h2>
                <p>
                  {"Nested routes let you build complex layouts where child components render inside parent components."}
                </p>
                <div className="code-block">
                  <pre><code>{`// App.jsx - Define nested routes
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Route>
        </Routes>
    );
}

// Layout.jsx - Parent component with Outlet
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
            </header>

            <main>
                <Outlet />  {/* Child routes render here */}
            </main>

            <footer>Footer content</footer>
        </div>
    );
}

// Dashboard.jsx - Nested parent with its own Outlet
function Dashboard() {
    return (
        <div className="dashboard">
            <aside>
                <nav>
                    <Link to="/dashboard">Overview</Link>
                    <Link to="/dashboard/profile">Profile</Link>
                    <Link to="/dashboard/settings">Settings</Link>
                </nav>
            </aside>

            <section className="dashboard-content">
                <Outlet />  {/* Nested child routes render here */}
            </section>
        </div>
    );
}

// Visual structure:
// URL: /dashboard/settings
//
// ┌─────────────────────────────────────────┐
// │  Header (Layout)                        │
// ├─────────────────────────────────────────┤
// │  ┌──────────┬─────────────────────────┐ │
// │  │ Sidebar  │  Settings Component     │ │
// │  │ (Dash)   │  (rendered via Outlet)  │ │
// │  │          │                         │ │
// │  └──────────┴─────────────────────────┘ │
// ├─────────────────────────────────────────┤
// │  Footer (Layout)                        │
// └─────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Programmatic Navigation"}
                </h2>
                <p>
                  {"Navigate from code using the useNavigate hook."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await loginUser(email, password);

        if (success) {
            // Navigate to dashboard after login
            navigate('/dashboard');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* form fields */}
            <button type="submit">Login</button>
        </form>
    );
}

// Navigate with options
function ProductActions() {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await deleteProduct(id);

        // Replace current history entry (can't go back)
        navigate('/products', { replace: true });
    };

    const handleEdit = (id) => {
        // Pass state to destination
        navigate(\`/products/\${id}/edit\`, {
            state: { returnTo: '/products' }
        });
    };

    return (/* ... */);
}

// Go back/forward in history
function Navigation() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>
                Back
            </button>
            <button onClick={() => navigate(1)}>
                Forward
            </button>
            <button onClick={() => navigate(-2)}>
                Back 2 pages
            </button>
        </div>
    );
}

// Conditional navigation
function Checkout() {
    const navigate = useNavigate();
    const { cart } = useCart();

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/cart', {
                replace: true,
                state: { message: 'Your cart is empty' }
            });
        }
    }, [cart, navigate]);

    return <div>Checkout form...</div>;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Protected Routes"}
                </h2>
                <p>
                  {"Protect routes that require authentication using wrapper components."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { Navigate, useLocation } from 'react-router-dom';

// Auth context (simplified)
const useAuth = () => {
    return useContext(AuthContext);
};

// Protected Route wrapper component
function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        // Redirect to login, save attempted URL
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}

// Role-based protected route
function AdminRoute({ children }) {
    const { user } = useAuth();

    if (!user || user.role !== 'admin') {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}

// Using protected routes
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Protected routes */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            {/* Admin-only route */}
            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <AdminPanel />
                    </AdminRoute>
                }
            />
        </Routes>
    );
}

// Login component - redirect back after login
function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = async (credentials) => {
        await login(credentials);
        navigate(from, { replace: true });  // Go to original URL
    };

    return (
        <form onSubmit={handleLogin}>
            {/* login form */}
        </form>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Loading States and Error Handling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Using loader functions (React Router 6.4+)
import {
    createBrowserRouter,
    RouterProvider,
    useLoaderData,
    useNavigation
} from 'react-router-dom';

// Define loader function
async function userLoader({ params }) {
    const response = await fetch(\`/api/users/\${params.userId}\`);
    if (!response.ok) {
        throw new Response("User not found", { status: 404 });
    }
    return response.json();
}

// Create router with loaders
const router = createBrowserRouter([
    {
        path: "/users/:userId",
        element: <UserProfile />,
        loader: userLoader,
        errorElement: <ErrorPage />
    }
]);

// Root component
function App() {
    return <RouterProvider router={router} />;
}

// Component using loader data
function UserProfile() {
    const user = useLoaderData();  // Data from loader
    const navigation = useNavigation();

    // Show loading indicator during navigation
    if (navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}

// Error boundary component
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <h1>Page not found</h1>;
        }
        if (error.status === 401) {
            return <h1>Unauthorized</h1>;
        }
    }

    return (
        <div>
            <h1>Oops! Something went wrong</h1>
            <p>{error.message || "Unknown error"}</p>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Lazy Loading Routes"}
                </h2>
                <p>
                  {"Split your code and load routes only when needed for better performance."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </Suspense>
    );
}

// Loading component
function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
}

// Benefits:
// - Initial bundle is smaller
// - Each page loads only when visited
// - Better performance for large apps
// - Improved user experience

// With named exports
const Dashboard = lazy(() =>
    import('./pages/Dashboard').then(module => ({
        default: module.Dashboard
    }))
);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Scroll Restoration"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// Use in App
function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* routes */}
            </Routes>
        </BrowserRouter>
    );
}

// With React Router 6.4+ data routers
const router = createBrowserRouter(routes, {
    future: {
        v7_scrollRestoration: true
    }
});

// Or with ScrollRestoration component
import { ScrollRestoration } from 'react-router-dom';

function Root() {
    return (
        <>
            <Outlet />
            <ScrollRestoration />
        </>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Example: E-commerce App"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Complete routing setup for an e-commerce app
import { lazy, Suspense } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Orders = lazy(() => import('./pages/Orders'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Public routes */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    {/* Protected routes */}
                    <Route element={<ProtectedRoute />}>
                        <Route element={<MainLayout />}>
                            <Route path="/checkout" element={<Checkout />} />
                        </Route>

                        <Route element={<DashboardLayout />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                    </Route>

                    {/* Redirects */}
                    <Route path="/home" element={<Navigate to="/" replace />} />

                    {/* 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use nested routes:"}
                    </strong>
                    {" Keep related routes together for cleaner organization"}
                  </li>
                  <li>
                    <strong>
                      {"Lazy load routes:"}
                    </strong>
                    {" Improve initial load time by code splitting"}
                  </li>
                  <li>
                    <strong>
                      {"Use NavLink for navigation:"}
                    </strong>
                    {" Automatically handles active states"}
                  </li>
                  <li>
                    <strong>
                      {"Handle 404s:"}
                    </strong>
                    {" Always include a catch-all route for unknown URLs"}
                  </li>
                  <li>
                    <strong>
                      {"Protect sensitive routes:"}
                    </strong>
                    {" Use route guards for authentication"}
                  </li>
                  <li>
                    <strong>
                      {"Preserve scroll position:"}
                    </strong>
                    {" Implement scroll restoration for better UX"}
                  </li>
                  <li>
                    <strong>
                      {"Use meaningful URLs:"}
                    </strong>
                    {" Make URLs descriptive and user-friendly"}
                  </li>
                  <li>
                    <strong>
                      {"Handle loading states:"}
                    </strong>
                    {" Show feedback during navigation and data loading"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Complex React Apps"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers React Router and advanced patterns. Learn to build production-ready applications with expert guidance."}
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
                  <Link href="/full-stack-javascript/articles/react" className="related-article-card">
                    <h4>
                      {"React.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Master React fundamentals first"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/state-management" className="related-article-card">
                    <h4>
                      {"State Management"}
                    </h4>
                    {" "}
                    <p>
                      {"Context API and Redux"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/nextjs" className="related-article-card">
                    <h4>
                      {"Next.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Server-side routing with Next.js"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn React Router."} />
    </>
  );
}
