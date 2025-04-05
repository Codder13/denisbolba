"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // Development helper to check for accessibility issues
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Only run in development mode
      const checkA11y = () => {
        // Check for images without alt text
        const imagesWithoutAlt = document.querySelectorAll("img:not([alt])");
        if (imagesWithoutAlt.length > 0) {
          console.warn(
            "⚠️ Accessibility Issue: Found images without alt text:",
            imagesWithoutAlt
          );
        }

        // Check for interactive elements without proper labels
        const buttonsWithoutLabels = document.querySelectorAll(
          "button:not([aria-label]):not(:has(*))"
        );
        if (buttonsWithoutLabels.length > 0) {
          console.warn(
            "⚠️ Accessibility Issue: Found buttons without labels:",
            buttonsWithoutLabels
          );
        }

        // Check for color contrast in development mode
        console.log(
          "🔍 Run the Lighthouse audit in Chrome DevTools to check color contrast issues"
        );
      };

      // Run the check after the page has loaded
      setTimeout(checkA11y, 1000);
    }
  }, []);

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
