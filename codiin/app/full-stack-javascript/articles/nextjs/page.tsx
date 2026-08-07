import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Next.js: The React Framework for Production",
  description: "Learn Next.js - the React framework for production. Master server-side rendering, static site generation, API routes, and the App Router.",
  keywords: ["Next.js tutorial", "server-side rendering", "SSR", "SSG", "React framework", "App Router", "API routes", "Vercel"],
  alternates: { canonical: "/full-stack-javascript/articles/nextjs" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/nextjs",
    title: "Next.js: The React Framework for Production",
    description: "Master Next.js for building fast, SEO-friendly React applications.",
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
  "headline": "Next.js: The React Framework for Production",
  "description": "Complete guide to Next.js for building production-ready React applications",
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

export default function FullStackJavascriptNextjsPage() {
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
                {"Next.js"}
              </span>
            </div>
            <h1>
              {"Next.js"}
            </h1>
            <p className="article-subtitle">
              {"The React Framework for Production"}
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
                  {"What is Next.js?"}
                </h2>
                <p>
                  {"Next.js is a React framework that gives you building blocks to create fast, full-stack web applications. It handles the complex configuration that React apps need for production, including routing, server-side rendering, and optimization."}
                </p>
                <p>
                  {"Created by Vercel, Next.js is used by companies like Netflix, TikTok, Twitch, Nike, and Notion to build their web applications."}
                </p>
                <div className="code-block">
                  <pre><code>{`React vs Next.js:

REACT (Library)                     NEXT.JS (Framework)
─────────────────────────────────────────────────────────

Client-side rendering only          Multiple rendering options:
                                    • Server-Side Rendering (SSR)
                                    • Static Site Generation (SSG)
                                    • Client-Side Rendering (CSR)

Manual routing setup                File-based routing built-in
(React Router)                      (automatic from file structure)

No built-in optimization            Automatic optimization:
                                    • Code splitting
                                    • Image optimization
                                    • Font optimization

Need separate API server            API routes built-in
(Express, etc.)                     (full-stack in one project)

Complex build configuration         Zero configuration
(webpack, babel)                    (just start coding)

SEO challenges                      SEO-friendly by default
(client-rendered content)           (server-rendered HTML)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Create a new Next.js project
npx create-next-app@latest my-app

# Options you'll be asked:
# ✔ Would you like to use TypeScript? Yes
# ✔ Would you like to use ESLint? Yes
# ✔ Would you like to use Tailwind CSS? Yes
# ✔ Would you like to use \`src/\` directory? Yes
# ✔ Would you like to use App Router? Yes
# ✔ Would you like to customize import alias? No

cd my-app
npm run dev

# Project structure (App Router):
my-app/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout (shared UI)
│       ├── page.tsx        # Home page (/)
│       ├── globals.css     # Global styles
│       ├── about/
│       │   └── page.tsx    # About page (/about)
│       └── blog/
│           ├── page.tsx    # Blog list (/blog)
│           └── [slug]/
│               └── page.tsx # Blog post (/blog/my-post)
├── public/                 # Static files
├── next.config.js          # Next.js configuration
└── package.json`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"File-Based Routing"}
                </h2>
                <p>
                  {"In Next.js, the file system IS your router. Create a file, get a route. It's that simple."}
                </p>
                <div className="code-block">
                  <pre><code>{`// File structure → Routes

app/
├── page.tsx                    → /
├── about/
│   └── page.tsx               → /about
├── blog/
│   ├── page.tsx               → /blog
│   └── [slug]/
│       └── page.tsx           → /blog/:slug (dynamic)
├── products/
│   ├── page.tsx               → /products
│   └── [category]/
│       └── [id]/
│           └── page.tsx       → /products/:category/:id
└── (marketing)/               → Route group (no URL impact)
    ├── pricing/
    │   └── page.tsx           → /pricing
    └── features/
        └── page.tsx           → /features

// Basic page component
// app/about/page.tsx
export default function AboutPage() {
    return (
        <main>
            <h1>About Us</h1>
            <p>Welcome to our company.</p>
        </main>
    );
}

// Dynamic route with params
// app/blog/[slug]/page.tsx
interface Props {
    params: { slug: string };
}

export default function BlogPost({ params }: Props) {
    return (
        <article>
            <h1>Blog Post: {params.slug}</h1>
        </article>
    );
}

// Multiple dynamic segments
// app/products/[category]/[id]/page.tsx
interface Props {
    params: { category: string; id: string };
}

export default function Product({ params }: Props) {
    const { category, id } = params;
    return <div>Product {id} in {category}</div>;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Layouts and Templates"}
                </h2>
                <p>
                  {"Layouts wrap pages and preserve state across navigation. They're perfect for shared UI like headers and sidebars."}
                </p>
                <div className="code-block">
                  <pre><code>{`// app/layout.tsx - Root layout (required)
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'My App',
    description: 'Built with Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <nav>{/* Navigation */}</nav>
                </header>
                <main>{children}</main>
                <footer>{/* Footer */}</footer>
            </body>
        </html>
    );
}

// app/dashboard/layout.tsx - Nested layout
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                {/* Dashboard navigation */}
            </aside>
            <section className="content">
                {children}
            </section>
        </div>
    );
}

// Layout nesting visualization:
//
// RootLayout (header, footer)
// └── DashboardLayout (sidebar)
//     └── page.tsx (content)

// app/loading.tsx - Loading UI
export default function Loading() {
    return (
        <div className="loading-spinner">
            Loading...
        </div>
    );
}

// app/error.tsx - Error boundary
'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}

// app/not-found.tsx - 404 page
export default function NotFound() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Could not find the requested page.</p>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Server Components vs Client Components"}
                </h2>
                <p>
                  {"Next.js 13+ uses React Server Components by default. Understanding when to use each is crucial."}
                </p>
                <div className="code-block">
                  <pre><code>{`SERVER COMPONENTS (Default)          CLIENT COMPONENTS
─────────────────────────────────────────────────────────

✓ Render on server                   ✓ Render on client
✓ Direct database access             ✓ Use React hooks
✓ Access backend resources           ✓ Event handlers
✓ Keep secrets on server             ✓ Browser APIs
✓ Smaller client bundle              ✓ Interactivity

Use for:                             Use for:
• Data fetching                      • onClick, onChange
• Database queries                   • useState, useEffect
• API calls                          • Forms
• Markdown rendering                 • Animations
• Static content                     • Third-party libraries

// Server Component (default)
// app/posts/page.tsx
async function getPosts() {
    const res = await fetch('https://api.example.com/posts');
    return res.json();
}

export default async function PostsPage() {
    const posts = await getPosts();  // Fetch on server!

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

// Client Component (add 'use client' directive)
// components/Counter.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

// Mixing Server and Client Components
// app/page.tsx (Server)
import Counter from '@/components/Counter';

async function getData() {
    const res = await fetch('https://api.example.com/data');
    return res.json();
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <h1>{data.title}</h1>   {/* Server rendered */}
            <Counter />              {/* Client component */}
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Fetching"}
                </h2>
                <p>
                  {"Next.js provides multiple ways to fetch data depending on your needs."}
                </p>
                <div className="code-block">
                  <pre><code>{`// 1. Server Components - Direct fetch (recommended)
// Automatically cached and deduplicated
async function getProduct(id: string) {
    const res = await fetch(\`https://api.example.com/products/\${id}\`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
}

export default async function ProductPage({
    params
}: {
    params: { id: string }
}) {
    const product = await getProduct(params.id);

    return (
        <div>
            <h1>{product.name}</h1>
            <p>\${product.price}</p>
        </div>
    );
}

// 2. Caching options
// Static (default) - cached indefinitely
fetch('https://api.example.com/data');

// Revalidate - refresh every 60 seconds
fetch('https://api.example.com/data', {
    next: { revalidate: 60 }
});

// Dynamic - no caching
fetch('https://api.example.com/data', {
    cache: 'no-store'
});

// 3. Page-level caching
// Static page (default)
export default async function Page() {
    const data = await getData();
    return <div>{data.content}</div>;
}

// Revalidate page every 60 seconds
export const revalidate = 60;

export default async function Page() {
    const data = await getData();
    return <div>{data.content}</div>;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// 4. Parallel data fetching
async function Page() {
    // Sequential (slow)
    const user = await getUser();
    const posts = await getPosts();  // Waits for user

    // Parallel (fast)
    const [user, posts] = await Promise.all([
        getUser(),
        getPosts()
    ]);

    return (/* ... */);
}

// 5. Streaming with Suspense
import { Suspense } from 'react';

async function SlowComponent() {
    const data = await fetchSlowData();
    return <div>{data}</div>;
}

export default function Page() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<Loading />}>
                <SlowComponent />
            </Suspense>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"API Routes"}
                </h2>
                <p>
                  {"Build your backend API directly in your Next.js project using Route Handlers."}
                </p>
                <div className="code-block">
                  <pre><code>{`// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET /api/users
export async function GET(request: NextRequest) {
    const users = await db.user.findMany();

    return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: NextRequest) {
    const body = await request.json();

    const user = await db.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(user, { status: 201 });
}

// app/api/users/[id]/route.ts
// GET /api/users/:id
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const user = await db.user.findUnique({
        where: { id: params.id }
    });

    if (!user) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(user);
}

// PUT /api/users/:id
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const body = await request.json();

    const user = await db.user.update({
        where: { id: params.id },
        data: body
    });

    return NextResponse.json(user);
}

// DELETE /api/users/:id
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    await db.user.delete({
        where: { id: params.id }
    });

    return new NextResponse(null, { status: 204 });
}

// Working with query parameters
// GET /api/search?q=hello&page=2
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const page = searchParams.get('page') || '1';

    const results = await search(query, parseInt(page));

    return NextResponse.json(results);
}

// Setting headers and cookies
export async function GET() {
    const response = NextResponse.json({ message: 'Hello' });

    response.headers.set('X-Custom-Header', 'value');
    response.cookies.set('token', 'abc123', {
        httpOnly: true,
        secure: true
    });

    return response;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Server Actions"}
                </h2>
                <p>
                  {"Server Actions allow you to run server code directly from client components - no API routes needed for simple mutations."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Inline server action
// app/posts/page.tsx
export default function PostsPage() {
    async function createPost(formData: FormData) {
        'use server';  // This runs on the server!

        const title = formData.get('title');
        const content = formData.get('content');

        await db.post.create({
            data: { title, content }
        });

        revalidatePath('/posts');
    }

    return (
        <form action={createPost}>
            <input name="title" placeholder="Title" />
            <textarea name="content" placeholder="Content" />
            <button type="submit">Create Post</button>
        </form>
    );
}

// Separate file for server actions
// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    // Validation
    if (!title || !content) {
        return { error: 'Title and content required' };
    }

    await db.post.create({
        data: { title, content }
    });

    revalidatePath('/posts');
    redirect('/posts');
}

export async function deletePost(id: string) {
    await db.post.delete({ where: { id } });
    revalidatePath('/posts');
}

// Using with client components
// components/DeleteButton.tsx
'use client';

import { deletePost } from '@/app/actions';
import { useTransition } from 'react';

export function DeleteButton({ postId }: { postId: string }) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
        startTransition(async () => {
            await deletePost(postId);
        });
    };

    return (
        <button onClick={handleDelete} disabled={isPending}>
            {isPending ? 'Deleting...' : 'Delete'}
        </button>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Navigation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Link component for client-side navigation
import Link from 'next/link';

function Navigation() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>

            {/* Dynamic routes */}
            <Link href={\`/products/\${productId}\`}>
                View Product
            </Link>

            {/* With query parameters */}
            <Link href="/search?q=next.js">
                Search
            </Link>

            {/* Prefetching (default: true) */}
            <Link href="/dashboard" prefetch={false}>
                Dashboard
            </Link>
        </nav>
    );
}

// Programmatic navigation
'use client';

import { useRouter } from 'next/navigation';

function SearchForm() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.search.value;

        // Navigate programmatically
        router.push(\`/search?q=\${query}\`);

        // Other methods
        router.replace('/login');  // Replace history
        router.back();             // Go back
        router.forward();          // Go forward
        router.refresh();          // Refresh current route
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="search" />
            <button>Search</button>
        </form>
    );
}

// usePathname and useSearchParams
'use client';

import { usePathname, useSearchParams } from 'next/navigation';

function ActiveLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={isActive ? 'active' : ''}
        >
            {children}
        </Link>
    );
}

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');

    return <h1>Results for: {query}</h1>;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Image Optimization"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import Image from 'next/image';

// Basic usage
function Avatar() {
    return (
        <Image
            src="/avatar.jpg"
            alt="User avatar"
            width={100}
            height={100}
        />
    );
}

// Fill container
function Hero() {
    return (
        <div className="hero" style={{ position: 'relative', height: '400px' }}>
            <Image
                src="/hero.jpg"
                alt="Hero image"
                fill
                style={{ objectFit: 'cover' }}
                priority  // Load immediately (above the fold)
            />
        </div>
    );
}

// External images (configure in next.config.js)
function ExternalImage() {
    return (
        <Image
            src="https://example.com/image.jpg"
            alt="External image"
            width={300}
            height={200}
        />
    );
}

// next.config.js
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
            },
        ],
    },
};

// Responsive images
function ResponsiveImage() {
    return (
        <Image
            src="/photo.jpg"
            alt="Responsive photo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
        />
    );
}

// Benefits of next/image:
// ✓ Automatic WebP/AVIF format conversion
// ✓ Lazy loading by default
// ✓ Prevents layout shift (CLS)
// ✓ Responsive sizing
// ✓ On-demand optimization`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Metadata and SEO"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Static metadata
// app/layout.tsx or app/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My App',
    description: 'Welcome to my app',
    keywords: ['next.js', 'react', 'javascript'],
    authors: [{ name: 'Your Name' }],
    openGraph: {
        title: 'My App',
        description: 'Welcome to my app',
        url: 'https://example.com',
        siteName: 'My App',
        images: [
            {
                url: 'https://example.com/og.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'My App',
        description: 'Welcome to my app',
        images: ['https://example.com/og.jpg'],
    },
};

// Dynamic metadata
// app/products/[id]/page.tsx
export async function generateMetadata({
    params
}: {
    params: { id: string }
}): Promise<Metadata> {
    const product = await getProduct(params.id);

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            images: [product.image],
        },
    };
}

// Title template
// app/layout.tsx
export const metadata: Metadata = {
    title: {
        default: 'My App',
        template: '%s | My App',  // Product Name | My App
    },
};

// app/about/page.tsx
export const metadata: Metadata = {
    title: 'About',  // Becomes "About | My App"
};`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Middleware"}
                </h2>
                <p>
                  {"Middleware runs before a request is completed, allowing you to modify the response, redirect, or add headers."}
                </p>
                <div className="code-block">
                  <pre><code>{`// middleware.ts (in project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Get the pathname
    const { pathname } = request.nextUrl;

    // Authentication check
    const token = request.cookies.get('token')?.value;

    if (pathname.startsWith('/dashboard') && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Add headers
    const response = NextResponse.next();
    response.headers.set('x-custom-header', 'my-value');

    return response;
}

// Configure which paths middleware runs on
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/api/:path*',
        '/((?!_next/static|favicon.ico).*)',
    ],
};

// Geo-based redirect
export function middleware(request: NextRequest) {
    const country = request.geo?.country || 'US';

    if (country === 'UK' && !request.nextUrl.pathname.startsWith('/uk')) {
        return NextResponse.redirect(new URL('/uk', request.url));
    }

    return NextResponse.next();
}

// Rate limiting example
const rateLimit = new Map();

export function middleware(request: NextRequest) {
    const ip = request.ip || 'anonymous';
    const now = Date.now();
    const windowMs = 60000; // 1 minute
    const maxRequests = 100;

    const requests = rateLimit.get(ip) || [];
    const recentRequests = requests.filter(time => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
        return new NextResponse('Too Many Requests', { status: 429 });
    }

    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);

    return NextResponse.next();
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deployment"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
npm i -g vercel
vercel

# Vercel automatically:
# ✓ Detects Next.js
# ✓ Configures build settings
# ✓ Enables edge functions
# ✓ Sets up CDN
# ✓ Provides preview deployments

# Deploy to other platforms:

# Docker
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

# Static export (no server features)
// next.config.js
module.exports = {
    output: 'export',
};

// Then: npm run build
// Output in 'out' directory

# Environment variables
# .env.local (for local development)
DATABASE_URL=postgres://...
API_KEY=secret

# Access in code
const dbUrl = process.env.DATABASE_URL;

# Client-side env vars (prefix with NEXT_PUBLIC_)
NEXT_PUBLIC_API_URL=https://api.example.com`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use Server Components by default:"}
                    </strong>
                    {" Only add 'use client' when you need interactivity"}
                  </li>
                  <li>
                    <strong>
                      {"Leverage caching:"}
                    </strong>
                    {" Use appropriate fetch caching strategies for your data"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize images:"}
                    </strong>
                    {" Always use next/image for automatic optimization"}
                  </li>
                  <li>
                    <strong>
                      {"Add metadata:"}
                    </strong>
                    {" Every page should have proper SEO metadata"}
                  </li>
                  <li>
                    <strong>
                      {"Use Server Actions:"}
                    </strong>
                    {" For simple mutations, prefer Server Actions over API routes"}
                  </li>
                  <li>
                    <strong>
                      {"Stream large responses:"}
                    </strong>
                    {" Use Suspense to show loading states while streaming"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors gracefully:"}
                    </strong>
                    {" Add error.tsx and loading.tsx to route segments"}
                  </li>
                  <li>
                    <strong>
                      {"Use middleware wisely:"}
                    </strong>
                    {" Keep middleware lightweight - it runs on every request"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Production Apps with Next.js"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers Next.js in depth. Build fast, SEO-friendly applications with expert guidance."}
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
                  <Link href="/full-stack-javascript/articles/react-router" className="related-article-card">
                    <h4>
                      {"React Router"}
                    </h4>
                    {" "}
                    <p>
                      {"Client-side routing basics"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/typescript" className="related-article-card">
                    <h4>
                      {"TypeScript"}
                    </h4>
                    {" "}
                    <p>
                      {"Type-safe Next.js development"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Next.js."} />
    </>
  );
}
