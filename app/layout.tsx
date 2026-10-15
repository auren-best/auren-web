import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { AUREN_URL } from "@/lib/config";
import { Footer, Header } from "@/components/chrome";
import "./globals.css";

const description =
  "Auren creates thoughtful, reliable software products for developers and modern digital businesses. Home of Zent, server monitoring.";

export const metadata: Metadata = {
  metadataBase: new URL(AUREN_URL),
  title: {
    default: "Auren — We build software that keeps things running.",
    template: "%s — Auren",
  },
  description,
  applicationName: "Auren",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Auren",
    title: "Auren — We build software that keeps things running.",
    description,
    url: AUREN_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Auren — We build software that keeps things running.",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Auren",
  url: AUREN_URL,
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-white text-black antialiased">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
