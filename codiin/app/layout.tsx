import VisitLogger from "@/components/VisitLogger";
import WelcomePopup from "@/components/WelcomePopup";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "CODiiN Tech Mentors Lab | Software Training & Mentorship in Kochi, Kerala",
    template: "%s | CODiiN",
  },
  description:
    "CODiiN Tech Mentors Lab - Premier software training and mentorship in Kochi. Expert guidance in Full Stack Development, Data Analytics, Data Engineering, Data Science, and Agentic AI.",
  authors: [{ name: "CODiiN Tech Mentors Lab" }],
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/img/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "msapplication-TileColor": "#6366f1",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Users must always be able to zoom — never lock this down.
  maximumScale: 5,
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        {/* In the root layout rather than on the home page, so a visitor who
            lands straight on /agentic-ai or /events from an ad is counted at
            all. The root layout survives client-side navigation, so this
            still fires once per visit and not once per internal link. */}
        <VisitLogger />
        <WelcomePopup />
      </body>
    </html>
  );
}
