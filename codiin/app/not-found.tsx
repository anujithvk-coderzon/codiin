import Link from "next/link";
import GoBackButton from "@/components/GoBackButton";
import { PROGRAMS } from "@/lib/site";

const POPULAR = [
  "full-stack-java",
  "full-stack-javascript",
  "full-stack-python",
  "data-analytics",
  "data-science",
  "agentic-ai",
];

export default function NotFound() {
  const popular = POPULAR.map((slug) => PROGRAMS.find((p) => p.slug === slug)!);

  return (
    <main className="error-page">
      <div className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="error-links">
          <Link href="/" className="btn-primary">
            Go to Homepage
          </Link>
          <GoBackButton />
        </div>

        <div className="popular-links">
          <h3>Popular Programs</h3>
          <ul>
            {popular.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
