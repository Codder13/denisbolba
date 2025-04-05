"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xl">
                Your Image Here
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-white dark:border-dark rounded-lg z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Denis Bolba</h3>
            <p className="text-gray-300 mb-6">
              A passionate 19-year-old entrepreneur and web designer from
              Oradea, Romania. With a keen eye for design and a strong
              understanding of user experience, I create websites that not only
              look stunning but also deliver exceptional functionality.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web design began with a simple curiosity and has
              evolved into a professional career. I believe in creating digital
              experiences that leave a lasting impression and help businesses
              achieve their goals.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-white">Name:</h4>
                <p className="text-gray-300">Denis Bolba</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Age:</h4>
                <p className="text-gray-300">19 Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">From:</h4>
                <p className="text-gray-300">Oradea, Romania</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Email:</h4>
                <p className="text-gray-300">contact@denisbolba.com</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <svg
                className="ml-2 w-5 h-5"
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
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
