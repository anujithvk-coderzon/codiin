import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tailwind CSS - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/tailwind" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/tailwind",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptTailwindPage() {
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
                {"Tailwind CSS"}
              </h1>
              <p className="article-meta">
                {"Utility-first CSS framework for rapid UI development"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Introduction to Tailwind CSS"}
              </h2>
              <p>
                {"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS. Instead of predefined components, you compose designs using utility classes directly in your HTML."}
              </p>
              <h3>
                {"Installation"}
              </h3>
              <pre><code>{`# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Generate config files
npx tailwindcss init -p

# tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Add to your CSS file (src/index.css)
@tailwind base;
@tailwind components;
@tailwind utilities;`}</code></pre>
              <h2>
                {"Core Concepts"}
              </h2>
              <h3>
                {"Utility Classes"}
              </h3>
              <pre><code>{`<!-- Traditional CSS approach -->
<div class="card">
  <h2 class="card-title">Title</h2>
  <p class="card-text">Content</p>
</div>

<!-- Tailwind utility-first approach -->
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>`}</code></pre>
              <h3>
                {"Spacing (Margin & Padding)"}
              </h3>
              <pre><code>{`<!-- Padding -->
<div class="p-4">All sides: 1rem</div>
<div class="px-4">Horizontal: 1rem</div>
<div class="py-2">Vertical: 0.5rem</div>
<div class="pt-6 pb-4">Top: 1.5rem, Bottom: 1rem</div>
<div class="pl-8 pr-2">Left: 2rem, Right: 0.5rem</div>

<!-- Margin -->
<div class="m-4">All sides: 1rem</div>
<div class="mx-auto">Center horizontally</div>
<div class="mt-8 mb-4">Top: 2rem, Bottom: 1rem</div>
<div class="-mt-4">Negative margin: -1rem</div>

<!-- Space between children -->
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>  <!-- Has margin-top: 1rem -->
  <div>Item 3</div>  <!-- Has margin-top: 1rem -->
</div>

<!-- Spacing scale: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96 -->
<!-- 1 unit = 0.25rem = 4px (default) -->`}</code></pre>
              <h3>
                {"Colors"}
              </h3>
              <pre><code>{`<!-- Text colors -->
<p class="text-black">Black text</p>
<p class="text-white">White text</p>
<p class="text-gray-500">Gray 500</p>
<p class="text-blue-600">Blue 600</p>
<p class="text-red-500">Red 500</p>

<!-- Background colors -->
<div class="bg-white">White background</div>
<div class="bg-gray-100">Light gray</div>
<div class="bg-blue-500">Blue background</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-500">Gradient</div>

<!-- Border colors -->
<div class="border border-gray-300">Gray border</div>
<div class="border-2 border-blue-500">Blue border</div>

<!-- Opacity -->
<div class="bg-black/50">50% opacity black</div>
<div class="text-blue-500/75">75% opacity blue text</div>

<!-- Color scales: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 -->`}</code></pre>
              <h3>
                {"Typography"}
              </h3>
              <pre><code>{`<!-- Font size -->
<p class="text-xs">Extra small (0.75rem)</p>
<p class="text-sm">Small (0.875rem)</p>
<p class="text-base">Base (1rem)</p>
<p class="text-lg">Large (1.125rem)</p>
<p class="text-xl">Extra large (1.25rem)</p>
<p class="text-2xl">2XL (1.5rem)</p>
<p class="text-4xl">4XL (2.25rem)</p>

<!-- Font weight -->
<p class="font-light">Light (300)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>

<!-- Line height -->
<p class="leading-none">1</p>
<p class="leading-tight">1.25</p>
<p class="leading-normal">1.5</p>
<p class="leading-relaxed">1.625</p>
<p class="leading-loose">2</p>

<!-- Text alignment -->
<p class="text-left">Left</p>
<p class="text-center">Center</p>
<p class="text-right">Right</p>
<p class="text-justify">Justify</p>

<!-- Text decoration -->
<p class="underline">Underlined</p>
<p class="line-through">Strikethrough</p>
<p class="no-underline">No underline</p>

<!-- Text transform -->
<p class="uppercase">uppercase</p>
<p class="lowercase">LOWERCASE</p>
<p class="capitalize">capitalize words</p>`}</code></pre>
              <h2>
                {"Layout with Flexbox & Grid"}
              </h2>
              <h3>
                {"Flexbox"}
              </h3>
              <pre><code>{`<!-- Basic flex container -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Direction -->
<div class="flex flex-row">...</div>        <!-- Horizontal (default) -->
<div class="flex flex-col">...</div>        <!-- Vertical -->
<div class="flex flex-row-reverse">...</div> <!-- Reversed -->

<!-- Justify content (main axis) -->
<div class="flex justify-start">...</div>    <!-- Start -->
<div class="flex justify-center">...</div>   <!-- Center -->
<div class="flex justify-end">...</div>      <!-- End -->
<div class="flex justify-between">...</div>  <!-- Space between -->
<div class="flex justify-around">...</div>   <!-- Space around -->
<div class="flex justify-evenly">...</div>   <!-- Space evenly -->

<!-- Align items (cross axis) -->
<div class="flex items-start">...</div>      <!-- Start -->
<div class="flex items-center">...</div>     <!-- Center -->
<div class="flex items-end">...</div>        <!-- End -->
<div class="flex items-stretch">...</div>    <!-- Stretch -->
<div class="flex items-baseline">...</div>   <!-- Baseline -->

<!-- Center both axes -->
<div class="flex items-center justify-center h-screen">
  <p>Perfectly centered</p>
</div>

<!-- Flex wrap -->
<div class="flex flex-wrap">...</div>
<div class="flex flex-nowrap">...</div>

<!-- Flex grow/shrink -->
<div class="flex">
  <div class="flex-none w-20">Fixed width</div>
  <div class="flex-1">Takes remaining space</div>
  <div class="flex-none w-20">Fixed width</div>
</div>

<!-- Gap -->
<div class="flex gap-4">...</div>       <!-- Gap all sides -->
<div class="flex gap-x-4 gap-y-2">...</div> <!-- Different gaps -->`}</code></pre>
              <h3>
                {"CSS Grid"}
              </h3>
              <pre><code>{`<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

<!-- Column count -->
<div class="grid grid-cols-1">...</div>   <!-- 1 column -->
<div class="grid grid-cols-2">...</div>   <!-- 2 columns -->
<div class="grid grid-cols-4">...</div>   <!-- 4 columns -->
<div class="grid grid-cols-12">...</div>  <!-- 12 columns -->

<!-- Auto columns -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
  <!-- Responsive grid that fits as many 250px+ columns as possible -->
</div>

<!-- Column span -->
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-1">1 column</div>
  <div class="col-span-2">2 columns</div>
  <div class="col-span-1">1 column</div>
  <div class="col-span-4">Full width</div>
</div>

<!-- Rows -->
<div class="grid grid-rows-3 grid-flow-col">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

<!-- Row span -->
<div class="grid grid-cols-3 grid-rows-3 gap-4">
  <div class="row-span-2">Spans 2 rows</div>
  <div>Normal</div>
  <div class="col-span-2 row-span-2">2x2 area</div>
</div>`}</code></pre>
              <h2>
                {"Responsive Design"}
              </h2>
              <h3>
                {"Breakpoints"}
              </h3>
              <pre><code>{`<!-- Tailwind breakpoints (mobile-first) -->
<!-- sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px -->

<!-- Responsive classes -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on tablet, third on desktop -->
</div>

<!-- Responsive layout -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="md:w-1/3">Sidebar</div>
  <div class="md:w-2/3">Content</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>

<!-- Responsive typography -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>

<!-- Responsive spacing -->
<div class="p-4 sm:p-6 md:p-8 lg:p-12">
  <!-- Padding increases with screen size -->
</div>

<!-- Hide/show at breakpoints -->
<div class="hidden md:block">Only visible on medium screens and up</div>
<div class="md:hidden">Only visible on small screens</div>`}</code></pre>
              <h2>
                {"State Modifiers"}
              </h2>
              <h3>
                {"Hover, Focus, Active"}
              </h3>
              <pre><code>{`<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700 text-white">
  Hover me
</button>

<!-- Focus -->
<input class="border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" />

<!-- Active -->
<button class="bg-blue-500 active:bg-blue-800 text-white">
  Click me
</button>

<!-- Focus-within (when child is focused) -->
<div class="border focus-within:border-blue-500">
  <input class="outline-none" />
</div>

<!-- Disabled -->
<button class="bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed" disabled>
  Disabled
</button>

<!-- Group hover -->
<div class="group">
  <h3 class="text-gray-700 group-hover:text-blue-500">Card Title</h3>
  <p class="text-gray-500 group-hover:text-gray-700">Card content</p>
</div>

<!-- Peer modifiers -->
<input type="checkbox" class="peer" />
<label class="peer-checked:text-blue-500">Checkbox label</label>

<!-- Placeholder -->
<input class="placeholder:text-gray-400 placeholder:italic" placeholder="Enter text..." />

<!-- First/last child -->
<ul>
  <li class="first:pt-0 last:pb-0 py-2">Item 1</li>
  <li class="first:pt-0 last:pb-0 py-2">Item 2</li>
  <li class="first:pt-0 last:pb-0 py-2">Item 3</li>
</ul>

<!-- Odd/even -->
<tbody>
  <tr class="odd:bg-white even:bg-gray-50"><td>Row 1</td></tr>
  <tr class="odd:bg-white even:bg-gray-50"><td>Row 2</td></tr>
</tbody>`}</code></pre>
              <h2>
                {"Component Examples"}
              </h2>
              <h3>
                {"Button Variants"}
              </h3>
              <pre><code>{`<!-- Primary button -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Primary
</button>

<!-- Secondary button -->
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
  Secondary
</button>

<!-- Outline button -->
<button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Outline
</button>

<!-- Ghost button -->
<button class="text-blue-500 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
  Ghost
</button>

<!-- Button sizes -->
<button class="text-sm py-1 px-3 ...">Small</button>
<button class="py-2 px-4 ...">Medium</button>
<button class="text-lg py-3 px-6 ...">Large</button>

<!-- Button with icon -->
<button class="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
  <svg class="w-5 h-5" ...></svg>
  <span>With Icon</span>
</button>`}</code></pre>
              <h3>
                {"Card Component"}
              </h3>
              <pre><code>{`<!-- Basic card -->
<div class="bg-white rounded-xl shadow-lg overflow-hidden">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="Card image" />
  <div class="p-6">
    <span class="text-sm text-blue-500 font-medium">Category</span>
    <h3 class="text-xl font-bold text-gray-800 mt-1">Card Title</h3>
    <p class="text-gray-600 mt-2">
      Card description goes here. This is a sample card component.
    </p>
    <div class="flex items-center justify-between mt-4">
      <span class="text-gray-500 text-sm">5 min read</span>
      <button class="text-blue-500 hover:text-blue-700 font-medium">
        Read more →
      </button>
    </div>
  </div>
</div>

<!-- Card grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Card 1, 2, 3... -->
</div>`}</code></pre>
              <h3>
                {"Form Elements"}
              </h3>
              <pre><code>{`<!-- Input field -->
<div class="mb-4">
  <label class="block text-gray-700 font-medium mb-2">Email</label>
  <input
    type="email"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
    placeholder="Enter your email"
  />
</div>

<!-- Input with error -->
<div class="mb-4">
  <label class="block text-gray-700 font-medium mb-2">Password</label>
  <input
    type="password"
    class="w-full px-4 py-2 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
  />
  <p class="text-red-500 text-sm mt-1">Password is required</p>
</div>

<!-- Select -->
<select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Checkbox -->
<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
  <span class="text-gray-700">Remember me</span>
</label>

<!-- Toggle switch (custom) -->
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
</label>`}</code></pre>
              <h3>
                {"Navigation"}
              </h3>
              <pre><code>{`<!-- Navbar -->
<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <img class="h-8 w-auto" src="logo.svg" alt="Logo" />
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-gray-900 hover:text-blue-500 font-medium">Home</a>
        <a href="#" class="text-gray-500 hover:text-blue-500 font-medium">About</a>
        <a href="#" class="text-gray-500 hover:text-blue-500 font-medium">Services</a>
        <a href="#" class="text-gray-500 hover:text-blue-500 font-medium">Contact</a>
      </div>

      <div class="flex items-center">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Sign In
        </button>
      </div>
    </div>
  </div>
</nav>`}</code></pre>
              <h2>
                {"Customization"}
              </h2>
              <h3>
                {"tailwind.config.js"}
              </h3>
              <pre><code>{`// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Override defaults
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    // Extend defaults
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        brand: '#FF5A5F',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};`}</code></pre>
              <h3>
                {"Using @apply for Component Classes"}
              </h3>
              <pre><code>{`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply py-2 px-4 font-medium rounded-lg transition-colors;
  }

  .btn-primary {
    @apply btn bg-blue-500 text-white hover:bg-blue-600;
  }

  .btn-secondary {
    @apply btn bg-gray-200 text-gray-800 hover:bg-gray-300;
  }

  .input {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg
           focus:ring-2 focus:ring-blue-500 focus:border-transparent
           outline-none transition-all;
  }

  .card {
    @apply bg-white rounded-xl shadow-lg overflow-hidden;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}`}</code></pre>
              <h2>
                {"Tailwind CSS with React"}
              </h2>
              <pre><code>{`// Using className
function Button({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  return (
    <button className={\`py-2 px-4 rounded-lg font-medium transition-colors \${variants[variant]}\`}>
      {children}
    </button>
  );
}

// Using clsx/classnames for conditional classes
import clsx from 'clsx';

function Alert({ type, message }) {
  return (
    <div
      className={clsx(
        'p-4 rounded-lg',
        {
          'bg-green-100 text-green-800': type === 'success',
          'bg-red-100 text-red-800': type === 'error',
          'bg-yellow-100 text-yellow-800': type === 'warning',
          'bg-blue-100 text-blue-800': type === 'info',
        }
      )}
    >
      {message}
    </div>
  );
}

// tailwind-merge for overriding classes
import { twMerge } from 'tailwind-merge';

function Button({ className, ...props }) {
  return (
    <button
      className={twMerge(
        'bg-blue-500 text-white py-2 px-4 rounded',
        className // Can override base classes
      )}
      {...props}
    />
  );
}

// Usage
<Button className="bg-red-500">Red Button</Button>`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"Tailwind uses utility classes instead of custom CSS"}
                  </li>
                  <li>
                    {"Mobile-first responsive design with sm, md, lg, xl breakpoints"}
                  </li>
                  <li>
                    {"State modifiers like hover:, focus:, active: for interactions"}
                  </li>
                  <li>
                    {"Flexbox and Grid utilities for layouts"}
                  </li>
                  <li>
                    {"Customize with tailwind.config.js for colors, fonts, spacing"}
                  </li>
                  <li>
                    {"Use @apply to create reusable component classes"}
                  </li>
                  <li>
                    {"Use clsx/classnames for conditional class logic in React"}
                  </li>
                  <li>
                    {"Use tailwind-merge to safely override classes"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/async-programming" className="prev-article">
                {"← Async Programming"}
              </Link>
              <Link href="/full-stack-javascript/articles/mongodb-aggregation" className="next-article">
                {"MongoDB Aggregation →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
