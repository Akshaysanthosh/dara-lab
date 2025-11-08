import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dara Lab | Next-Generation AI Research",
  description: "A next-generation AI research lab based in Waterloo, building domain-specific reasoning models for high-stakes, information-dense environments. Combining machine reasoning, scientific computing, and advanced information ranking.",
  keywords: [
    "AI research lab",
    "machine learning",
    "domain-specific AI",
    "reasoning models",
    "Waterloo AI",
    "scientific computing",
    "information ranking",
    "geospatial intelligence",
  ],
  authors: [{ name: "Dara Lab" }],
  creator: "Dara Lab",
  publisher: "Dara Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daralab.ai",
    title: "Dara Lab | Next-Generation AI Research",
    description: "Building domain-specific reasoning models for high-stakes, information-dense environments.",
    siteName: "Dara Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dara Lab | Next-Generation AI Research",
    description: "Building domain-specific reasoning models for high-stakes, information-dense environments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}