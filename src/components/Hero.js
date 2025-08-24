"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const currentAge = new Date().getFullYear() - 2005;

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current || isMobile) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const posX = (clientX - centerX) / centerX;
      const posY = (clientY - centerY) / centerY;

      setMousePosition({ x: posX, y: posY });
      parallaxRef.current.style.transform = `translate(${posX * 25}px, ${
        posY * 25
      }px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Floating animation variants
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark py-20"
    >
      {/* Animated background elements with increased visual impact */}
      <div className="absolute inset-0">
        {/* Primary large gradient */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-[120px] animate-pulse"></div>

        {/* Secondary large gradient */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-secondary/40 to-transparent blur-[120px] animate-pulse"></div>

        {/* Small accent gradients */}
        <div className="absolute top-[30%] right-[20%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[30%] left-[20%] w-[15%] h-[15%] rounded-full bg-secondary/30 blur-[60px] animate-pulse"></div>
      </div>

      {/* Grid overlay for tech effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <span className="px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full text-sm text-primary font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse opacity-100"></span>
                Available for freelance work
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-white block">Hi, I&apos;m </span>
              <span className="text-gradient">Denis Bolba</span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.span
                className="relative bg-gradient-to-r from-primary/10 to-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Web Designer</span>
                <span className="absolute inset-0 rounded-full bg-primary/5 blur-sm"></span>
              </motion.span>
              <motion.span
                className="relative bg-gradient-to-r from-secondary/10 to-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Entrepreneur</span>
                <span className="absolute inset-0 rounded-full bg-secondary/5 blur-sm"></span>
              </motion.span>
              <motion.span
                className="relative bg-gradient-to-r from-primary/10 to-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Age: {currentAge}</span>
                <span className="absolute inset-0 rounded-full bg-primary/5 blur-sm"></span>
              </motion.span>
              <motion.span
                className="relative bg-gradient-to-r from-secondary/10 to-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Oradea, Romania</span>
                <span className="absolute inset-0 rounded-full bg-secondary/5 blur-sm"></span>
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <span className="font-medium">
                Creating stunning digital experiences
              </span>{" "}
              with passion and precision. I transform innovative ideas into
              beautiful, functional websites that drive results and{" "}
              <span className="text-primary">captivate audiences</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <motion.a
                href="#contact"
                className="group relative bg-gradient-custom text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-primary/50 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact me"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-custom opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
              <motion.a
                href="#projects"
                className="group relative bg-transparent border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View projects"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            </motion.div>

            {/* Stats counters */}
            <motion.div
              className="flex flex-wrap gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  85+
                </motion.div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  98%
                </motion.div>
                <div className="text-sm text-white/60">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.7 }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual Elements */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Designer Mockup/Visual Element */}
            <div className="relative w-full h-[500px]">
              {/* Main visual container */}
              <motion.div
                ref={parallaxRef}
                className="absolute inset-0 z-10"
                animate={floatingAnimation}
              >
                {/* Abstract design elements */}
                <div className="absolute top-[10%] right-[20%] w-24 h-24 rounded-lg bg-gradient-custom rotate-12 blur-sm opacity-80"></div>
                <div className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-full bg-gradient-custom blur-sm opacity-70"></div>

                {/* Code window mockup */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-dark/80 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Window header */}
                  <div className="h-8 bg-dark/70 border-b border-white/10 flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Code content */}
                  <div className="p-4 text-xs font-mono">
                    <div className="text-green-500 mb-1">
                      / Web developer and designer
                    </div>
                    <div>
                      <span className="text-purple-400">function</span>{" "}
                      <span className="text-blue-400">
                        createAmazingWebsite
                      </span>
                      () {`{`}
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">design</span> ={" "}
                      <span className="text-orange-400">
                        &quot;modern&quot;
                      </span>
                      ;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">tech</span> ={" "}
                      <span className="text-orange-400">
                        &quot;cutting-edge&quot;
                      </span>
                      ;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">results</span> ={" "}
                      <span className="text-orange-400">
                        &quot;exceptional&quot;
                      </span>
                      ;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span> {`{`}{" "}
                      design, tech, results {`}`};
                    </div>
                    <div>{`}`}</div>
                    <div className="mt-2">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">portfolio</span> =
                      createAmazingWebsite();
                    </div>
                    <div className="text-green-500 mt-1">
                      / Let&apos;s build something amazing together
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-[5%] right-[10%] w-12 h-12"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#6c7a89" />
                        <stop offset="100%" stopColor="#424e5a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-[15%] left-[5%] w-16 h-16"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="80"
                      height="80"
                      stroke="url(#grad2)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="grad2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#6c7a89" />
                        <stop offset="100%" stopColor="#424e5a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Background grid pattern */}
              <div className="absolute inset-0 -z-10">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="smallGrid"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                    <pattern
                      id="grid"
                      width="50"
                      height="50"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect width="50" height="50" fill="url(#smallGrid)" />
                      <path
                        d="M 50 0 L 0 0 0 50"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
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
        <div className="flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{
                y: [0, 13, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
