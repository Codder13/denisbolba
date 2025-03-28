"use client";

import { useState, useEffect } from "react";

export default function Presentation({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Array.isArray(children) ? children : [children];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide((prev) => prev + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentSlide > 0) {
          setCurrentSlide((prev) => prev - 1);
        }
      } else if (e.key === "Home") {
        setCurrentSlide(0);
      } else if (e.key === "End") {
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative">
      {/* Only render the current slide */}
      {slides[currentSlide]}

      {/* Navigation controls */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        <button
          onClick={() =>
            currentSlide > 0 && setCurrentSlide((prev) => prev - 1)
          }
          className="bg-gray-800 text-white px-4 py-2 rounded-l-lg opacity-70 hover:opacity-100 transition-opacity"
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <div className="bg-gray-800 text-white px-4 py-2 opacity-70">
          {currentSlide + 1} / {slides.length}
        </div>
        <button
          onClick={() =>
            currentSlide < slides.length - 1 &&
            setCurrentSlide((prev) => prev + 1)
          }
          className="bg-gray-800 text-white px-4 py-2 rounded-r-lg opacity-70 hover:opacity-100 transition-opacity"
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
