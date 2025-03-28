// Slide.js - A component for rendering individual presentation slides
"use client";

import { useEffect } from "react";

export default function Slide({
  children,
  backgroundColor = "bg-white",
  textColor = "text-black",
  className = "",
}) {
  // Apply any slide-specific effects when the slide is shown
  useEffect(() => {
    // Animation or other effects can be added here
  }, []);

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center p-10 ${backgroundColor} ${textColor} ${className}`}
    >
      <div className="max-w-4xl w-full">{children}</div>
    </div>
  );
}
