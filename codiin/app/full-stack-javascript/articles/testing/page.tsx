import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Testing with Jest & React Testing Library",
  description: "Learn testing in JavaScript with Jest and React Testing Library. Master unit tests, integration tests, mocking, and test-driven development.",
  keywords: ["Jest tutorial", "React Testing Library", "JavaScript testing", "unit tests", "TDD", "mocking", "test coverage"],
  alternates: { canonical: "/full-stack-javascript/articles/testing" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/testing",
    title: "Testing with Jest & React Testing Library",
    description: "Master JavaScript testing for reliable applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

export default function FullStackJavascriptTestingPage() {
  return (
    <>
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
                {"Testing"}
              </span>
            </div>
            <h1>
              {"Testing with Jest & RTL"}
            </h1>
            <p className="article-subtitle">
              {"Write Reliable, Maintainable Tests"}
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
                  {"Why Testing Matters"}
                </h2>
                <p>
                  {"Testing is your safety net. It catches bugs before they reach users, enables confident refactoring, and serves as living documentation for your code."}
                </p>
                <div className="code-block">
                  <pre><code>{`Testing Benefits:

WITHOUT TESTS                        WITH TESTS
─────────────────────────────────────────────────────────
"Did I break something?"             "All 150 tests pass!"
Manual testing after changes         Automated verification
Fear of refactoring                  Confident improvements
Bugs found in production             Bugs caught in development
"Works on my machine"                Works everywhere

Testing Pyramid:

        ▲
       /E\\          E2E Tests (few, slow, expensive)
      /───\\         - Full user flows
     / Int \\        Integration Tests (some)
    /───────\\       - Components working together
   /  Unit   \\      Unit Tests (many, fast, cheap)
  /───────────\\     - Individual functions/components
 ───────────────

Types of Tests:
• Unit: Test one function/component in isolation
• Integration: Test components working together
• E2E: Test full user journeys (Cypress, Playwright)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with Jest"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Jest
npm install --save-dev jest

# For TypeScript
npm install --save-dev jest @types/jest ts-jest

# package.json
{
    "scripts": {
        "test": "jest",
        "test:watch": "jest --watch",
        "test:coverage": "jest --coverage"
    }
}

// Basic test structure
// math.js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };

// math.test.js
const { add, multiply } = require('./math');

describe('Math functions', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('adds negative numbers', () => {
            expect(add(-1, -1)).toBe(-2);
        });

        test('adds zero', () => {
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('multiply', () => {
        test('multiplies two numbers', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test('multiplies by zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });
    });
});

// Run tests
npm test`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Jest Matchers"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Equality
expect(value).toBe(expected);           // Exact equality (===)
expect(value).toEqual(expected);        // Deep equality for objects
expect(value).toStrictEqual(expected);  // Strict deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3, 5);      // For floating point

// Strings
expect(string).toMatch(/pattern/);
expect(string).toContain('substring');

// Arrays
expect(array).toContain(item);
expect(array).toHaveLength(3);

// Objects
expect(object).toHaveProperty('key');
expect(object).toHaveProperty('key', 'value');
expect(object).toMatchObject({ partial: 'match' });

// Exceptions
expect(() => dangerousCall()).toThrow();
expect(() => dangerousCall()).toThrow('error message');
expect(() => dangerousCall()).toThrow(ErrorType);

// Negation
expect(value).not.toBe(other);

// Async matchers
await expect(asyncFn()).resolves.toBe(value);
await expect(asyncFn()).rejects.toThrow();

// Example
describe('User validation', () => {
    test('valid user object', () => {
        const user = {
            id: 1,
            name: 'Alice',
            email: 'alice@example.com',
            roles: ['user', 'admin']
        };

        expect(user).toHaveProperty('id');
        expect(user.name).toBe('Alice');
        expect(user.email).toMatch(/@/);
        expect(user.roles).toContain('admin');
        expect(user.roles).toHaveLength(2);
    });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Mocking"}
                </h2>
                <p>
                  {"Mocking lets you isolate code by replacing dependencies with controlled substitutes."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Mock functions
const mockFn = jest.fn();
mockFn('arg1', 'arg2');

expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
expect(mockFn).toHaveBeenCalledTimes(1);

// Return values
const mock = jest.fn()
    .mockReturnValue('default')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

mock(); // 'first call'
mock(); // 'second call'
mock(); // 'default'

// Mock implementations
const mockCalculate = jest.fn((a, b) => a + b);
expect(mockCalculate(2, 3)).toBe(5);

// Mocking modules
// api.js
export const fetchUser = async (id) => {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
};

// user.test.js
import { fetchUser } from './api';

jest.mock('./api');

test('displays user name', async () => {
    fetchUser.mockResolvedValue({ id: 1, name: 'Alice' });

    const user = await fetchUser(1);
    expect(user.name).toBe('Alice');
});

// Mocking with implementation
jest.mock('./api', () => ({
    fetchUser: jest.fn().mockResolvedValue({ id: 1, name: 'Alice' })
}));

// Spying on methods
const user = {
    getName: () => 'Alice'
};

const spy = jest.spyOn(user, 'getName');
user.getName();

expect(spy).toHaveBeenCalled();
spy.mockRestore();  // Restore original

// Mock timers
jest.useFakeTimers();

test('calls callback after delay', () => {
    const callback = jest.fn();
    setTimeout(callback, 1000);

    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalled();
});

jest.useRealTimers();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"React Testing Library"}
                </h2>
                <p>
                  {"RTL encourages testing components the way users interact with them."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install
npm install --save-dev @testing-library/react @testing-library/jest-dom

// setupTests.js
import '@testing-library/jest-dom';

// Button.jsx
function Button({ onClick, children, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('renders with text', () => {
        render(<Button>Click me</Button>);

        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click</Button>);

        fireEvent.click(screen.getByText('Click'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('is disabled when disabled prop is true', () => {
        render(<Button disabled>Submit</Button>);

        expect(screen.getByText('Submit')).toBeDisabled();
    });
});

// Queries priority (best to worst):
// 1. getByRole - accessible to everyone
// 2. getByLabelText - form fields
// 3. getByPlaceholderText - input placeholders
// 4. getByText - non-interactive elements
// 5. getByDisplayValue - current input value
// 6. getByAltText - images
// 7. getByTitle - title attribute
// 8. getByTestId - last resort

// Examples
screen.getByRole('button', { name: /submit/i });
screen.getByLabelText('Email');
screen.getByPlaceholderText('Enter your name');
screen.getByText(/welcome/i);
screen.getByAltText('Profile picture');
screen.getByTestId('custom-element');`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Testing Async Components"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// UserProfile.jsx
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser(userId).then(data => {
            setUser(data);
            setLoading(false);
        });
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    return <div>Welcome, {user.name}</div>;
}

// UserProfile.test.jsx
jest.mock('./api');

test('shows loading then user name', async () => {
    fetchUser.mockResolvedValue({ id: 1, name: 'Alice' });

    render(<UserProfile userId={1} />);

    // Initially shows loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for user to appear
    await waitFor(() => {
        expect(screen.getByText('Welcome, Alice')).toBeInTheDocument();
    });
});

// Using findBy (combines getBy + waitFor)
test('displays user after fetch', async () => {
    fetchUser.mockResolvedValue({ id: 1, name: 'Bob' });

    render(<UserProfile userId={1} />);

    // findBy waits for element to appear
    expect(await screen.findByText('Welcome, Bob')).toBeInTheDocument();
});

// Testing user interactions
test('form submission', async () => {
    const user = userEvent.setup();

    render(<LoginForm onSubmit={mockSubmit} />);

    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
    });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Testing Hooks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import { renderHook, act } from '@testing-library/react';

// useCounter.js
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}

// useCounter.test.js
describe('useCounter', () => {
    test('initializes with default value', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    test('initializes with custom value', () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10);
    });

    test('increments counter', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    test('decrements counter', () => {
        const { result } = renderHook(() => useCounter(5));

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(4);
    });

    test('resets to initial value', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => {
            result.current.increment();
            result.current.increment();
            result.current.reset();
        });

        expect(result.current.count).toBe(10);
    });
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Test Organization & Best Practices"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// File structure
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   └── Button.module.css
│   └── Form/
│       ├── Form.jsx
│       └── Form.test.jsx
├── hooks/
│   ├── useAuth.js
│   └── useAuth.test.js
└── utils/
    ├── helpers.js
    └── helpers.test.js

// Test structure - Arrange, Act, Assert
test('user can submit form', async () => {
    // Arrange - set up test data and render
    const mockSubmit = jest.fn();
    render(<ContactForm onSubmit={mockSubmit} />);

    // Act - perform user actions
    await userEvent.type(
        screen.getByLabelText('Name'),
        'John Doe'
    );
    await userEvent.click(
        screen.getByRole('button', { name: /submit/i })
    );

    // Assert - verify expected outcomes
    expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John Doe'
    });
});

// Best Practices:
// 1. Test behavior, not implementation
// ✗ expect(component.state.isOpen).toBe(true);
// ✓ expect(screen.getByRole('dialog')).toBeVisible();

// 2. Use accessible queries
// ✗ screen.getByTestId('submit-btn');
// ✓ screen.getByRole('button', { name: /submit/i });

// 3. One assertion per test (when practical)

// 4. Use describe blocks for organization
describe('LoginForm', () => {
    describe('validation', () => {
        test('shows error for invalid email', () => {});
        test('shows error for short password', () => {});
    });

    describe('submission', () => {
        test('calls onSubmit with credentials', () => {});
        test('shows loading state', () => {});
    });
});

// 5. Use beforeEach for common setup
describe('Dashboard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        fetchUser.mockResolvedValue({ id: 1, name: 'Test' });
    });

    test('...', () => {});
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Code Coverage"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Run with coverage
npm test -- --coverage

# jest.config.js
module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.js'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};

# Coverage report:
# ----------------------|---------|----------|---------|---------|
# File                  | % Stmts | % Branch | % Funcs | % Lines |
# ----------------------|---------|----------|---------|---------|
# All files             |   85.71 |    83.33 |   88.89 |   85.71 |
#  Button.jsx           |     100 |      100 |     100 |     100 |
#  Form.jsx             |   78.57 |       75 |   83.33 |   78.57 |
# ----------------------|---------|----------|---------|---------|

# Coverage types:
# Statements: executable statements executed
# Branches: if/else paths taken
# Functions: functions called
# Lines: lines of code executed`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Write Better Tests"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers testing in depth. Build reliable applications with expert guidance."}
                </p>
                <Link href="/full-stack-javascript" className="btn btn-primary">
                  {"Explore JavaScript Program"}
                </Link>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals."}
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}
