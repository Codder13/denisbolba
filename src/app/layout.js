import { Inter } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

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
    <PlausibleProvider
      domain="web.denisbolba.com"
      customDomain="https://plausible.denisbolba.com"
    >
      <html lang="en" className="scroll-smooth">
        {" "}
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#1c1c1c" />
          <link rel="icon" href="/favicon.ico" />
        </head>{" "}
        <body
          className={`${inter.className} ${isDevelopment ? "dev-mode" : ""}`}
        >
          {children}
          {isDevelopment && <div className="responsive-indicator" />}
        </body>
      </html>
    </PlausibleProvider>
  );
}
