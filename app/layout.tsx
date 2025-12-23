import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const clashGrotesk = localFont({
  src: "./ClashGrotesk-Medium.woff2",
  display: "swap",
  variable: "--font-clash-grotesk",
});

export const metadata: Metadata = {
  title: "Salt AI - Decentralized AI Funding",
  description: "A new economic primitive for funding decentralized AI. We track, rank and pay for the best open source decentralized LLMs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${clashGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
