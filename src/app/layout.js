import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Denis Bolba | Web Designer & Entrepreneur",
  description:
    "Personal website of Denis Bolba, entrepreneur and web designer from Oradea, Romania.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
