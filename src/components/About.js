"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-0"></div>

      {/* Larger, more vibrant gradient blobs */}
      <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -right-20 bottom-40 w-80 h-80 rounded-full bg-gradient-to-bl from-secondary/20 to-transparent blur-[100px] animate-pulse-slow"></div>

      {/* Abstract shapes */}
      <motion.div
        className="absolute right-10 top-20 w-24 h-24 opacity-10 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
            stroke="url(#aboutGrad1)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="aboutGrad1"
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#6c7a89" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-10 bottom-20 w-32 h-32 opacity-10 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
            stroke="url(#aboutGrad2)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="url(#aboutGrad2)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="aboutGrad2"
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#6c7a89" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-primary/90 text-sm font-medium inline-block mb-4">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-custom text-transparent bg-clip-text">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto"></div>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Enhanced Image with 3D-like effect */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300 transform group-hover:scale-105"></div>
            <div className="w-full h-[400px] md:h-[450px] bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden p-1.5 relative z-10 border border-white/10 shadow-xl">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center text-white text-xl relative overflow-hidden">
                <span className="relative z-10">Your Image Here</span>
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-white/10 rounded-xl z-0"
              animate={{
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
            <div className="absolute top-6 -left-6 w-20 h-20 border-2 border-white/10 rounded-xl z-0"></div>
            <div className="absolute -bottom-4 left-1/3 w-8 h-8 bg-primary/30 rounded-full blur-md"></div>
          </motion.div>

          {/* Enhanced Content with better spacing and animations */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <motion.h3
                className="text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Denis <span className="text-primary">Bolba</span>
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A passionate 19-year-old{" "}
                <span className="text-primary font-medium">entrepreneur</span>{" "}
                and{" "}
                <span className="text-secondary font-medium">web designer</span>{" "}
                from Oradea, Romania. With a keen eye for design and a strong
                understanding of user experience, I create websites that not
                only look stunning but also deliver exceptional functionality.
              </motion.p>
              <motion.p
                className="text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                My journey in web design began with a simple curiosity and has
                evolved into a professional career. I believe in creating
                digital experiences that leave a lasting impression and help
                businesses achieve their goals.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h4 className="font-semibold text-primary mb-1">Name:</h4>
                <p className="text-white">Denis Bolba</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h4 className="font-semibold text-primary mb-1">Age:</h4>
                <p className="text-white">19 Years</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h4 className="font-semibold text-primary mb-1">From:</h4>
                <p className="text-white">Oradea, Romania</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h4 className="font-semibold text-primary mb-1">Email:</h4>
                <p className="text-white">contact@denisbolba.com</p>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              className="group inline-flex items-center bg-gradient-custom text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10 flex items-center">
                Contact Me
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
