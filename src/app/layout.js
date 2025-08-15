import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Denis Bolba | Web Designer & Entrepreneur",
  description:
    "Personal website of Denis Bolba, entrepreneur and web designer from Oradea, Romania.",
  keywords: "web design, entrepreneur, portfolio, Denis Bolba, web development",
};

// Determine if we're in development mode
const isDevelopment = process.env.NODE_ENV === "development";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1c1c1c" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://umami.denisbolba.xyz/script.js"
          data-website-id="f0947877-6b8a-454a-b4b0-6af31493706b"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} ${isDevelopment ? "dev-mode" : ""}`}>
        {children}
        {isDevelopment && <div className="responsive-indicator" />}
      </body>
    </html>
  );
}
