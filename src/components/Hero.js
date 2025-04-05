"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const posX = (clientX - centerX) / centerX;
      const posY = (clientY - centerY) / centerY;

      parallaxRef.current.style.transform = `translate(${posX * 20}px, ${
        posY * 20
      }px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-secondary blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-gradient">Denis Bolba</span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium drop-shadow-md">
              Web Designer
            </span>
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium drop-shadow-md">
              Entrepreneur
            </span>
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium drop-shadow-md">
              Age: 19
            </span>
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium drop-shadow-md">
              Oradea, Romania
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white max-w-xl mb-10 leading-relaxed shadow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Creating stunning digital experiences with passion and precision.
            Transforming ideas into beautiful, functional websites.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href="#contact"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact me"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-transparent border-2 border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View projects"
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Parallax elements */}
      <div
        ref={parallaxRef}
        className="absolute right-0 bottom-0 lg:w-1/2 opacity-60 pointer-events-none"
      >
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g opacity="0.4">
            <circle
              cx="300"
              cy="300"
              r="150"
              stroke="url(#paint0_linear)"
              strokeWidth="3"
            />
            <circle
              cx="300"
              cy="300"
              r="200"
              stroke="url(#paint1_linear)"
              strokeWidth="3"
            />
            <circle
              cx="300"
              cy="300"
              r="250"
              stroke="url(#paint2_linear)"
              strokeWidth="3"
            />
            <circle
              cx="300"
              cy="300"
              r="100"
              stroke="url(#paint3_linear)"
              strokeWidth="3"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="150"
              y1="150"
              x2="450"
              y2="450"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6c7a89" />
              <stop offset="1" stopColor="#424e5a" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="100"
              y1="100"
              x2="500"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6c7a89" />
              <stop offset="1" stopColor="#424e5a" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="50"
              y1="50"
              x2="550"
              y2="550"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6c7a89" />
              <stop offset="1" stopColor="#424e5a" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="200"
              y1="200"
              x2="400"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6c7a89" />
              <stop offset="1" stopColor="#424e5a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default Hero;
