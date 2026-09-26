import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Circuits&Soles — Streetwear Marketplace",
  description: "Community-first streetwear catalog. Shop verified drops + culture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-bg-primary text-text-primary">{children}</body>
    </html>
  );
}
