import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Visibility Checker | Locully",
  description:
    "Check if AI platforms like ChatGPT, Gemini, and Perplexity recommend your brand. Free AI visibility score in seconds.",
  openGraph: {
    title: "AI Visibility Checker | Locully",
    description:
      "Is AI recommending your brand? Check your AI Visibility Score for free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
