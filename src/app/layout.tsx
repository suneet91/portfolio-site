import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site-kappa-sable.vercel.app"),
  title: "Suneet Pal Kaur | Data & AI Engineer",
  description:
    "Data & AI Engineer building production RAG and agentic GenAI systems.",
  openGraph: {
    title: "Suneet Pal Kaur | Data & AI Engineer",
    description:
      "Data & AI Engineer building production RAG and agentic GenAI systems.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suneet Pal Kaur | Data & AI Engineer",
    description:
      "Data & AI Engineer building production RAG and agentic GenAI systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
