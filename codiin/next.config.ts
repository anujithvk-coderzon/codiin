import type { NextConfig } from "next";

const COURSE_SLUGS = [
  "full-stack-javascript",
  "full-stack-python",
  "full-stack-java",
  "full-stack-dotnet",
  "hybrid-mobile-app",
  "data-analytics",
  "data-engineering",
  "data-science",
  "agentic-ai",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy .html URLs keep their inbound links and search rankings.
      { source: "/index.html", destination: "/", permanent: true },
      ...COURSE_SLUGS.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
      // /agentic-ai/articles/rag.html -> /agentic-ai/articles/rag
      {
        source: "/:course/articles/:slug.html",
        destination: "/:course/articles/:slug",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-service.html",
        destination: "/terms-of-service",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Ported from the original .htaccess
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
