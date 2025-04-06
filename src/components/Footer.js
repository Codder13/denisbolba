"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      url: "https://github.com/Codder13",
      label: "GitHub Profile",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      icon: <FaYoutube size={18} />,
      url: "https://youtube.com/@denisbolba",
      label: "YouTube Channel",
      color: "hover:bg-red-600/20 hover:text-red-500",
    },
    {
      icon: <FaInstagram size={18} />,
      url: "https://instagram.com/denisbolba",
      label: "Instagram Profile",
      color: "hover:bg-purple-600/20 hover:text-purple-500",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      url: "https://linkedin.com/in/denisbolba",
      label: "LinkedIn Profile",
      color: "hover:bg-blue-600/20 hover:text-blue-500",
    },
    {
      icon: <FaDribbble size={18} />,
      url: "https://dribbble.com/denisbolba",
      label: "Dribbble Profile",
      color: "hover:bg-pink-600/20 hover:text-pink-500",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Web Design", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "WordPress", href: "#" },
    { name: "Consulting", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer ref={footerRef} className="bg-dark relative overflow-hidden pt-20">
      {/* Enhanced decorative elements */}
      <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-[120px] opacity-50"></div>
      <div className="absolute -right-40 top-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-secondary/10 to-transparent blur-[120px] opacity-50"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      {/* Animated shapes */}
      <motion.div
        className="absolute left-10 top-20 w-16 h-16 opacity-5 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            stroke="url(#footerGrad1)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="footerGrad1"
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

      {/* Enhanced top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 h-10">
        <svg
          className="relative block w-full h-full"
          data-name="divider"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            fillOpacity="0.05"
          ></path>
        </svg>
      </div>

      {/* Main Footer with enhanced design */}
      <div className="container mx-auto px-4 pb-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-10"
          animate={isInView ? "visible" : "hidden"}
          initial="hidden"
          variants={containerVariants}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <motion.div
                className="text-3xl font-bold mb-2 inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Denis Bolba
              </motion.div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <p className="text-gray-400 mb-8">
              Web designer and entrepreneur from Oradea, Romania. Creating
              stunning digital experiences with a focus on user-centered design
              and functionality.
            </p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 transition-all duration-300 border border-white/5 ${link.color}`}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <svg
                      className="w-3 h-3 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center"
                  >
                    <svg
                      className="w-3 h-3 mr-2 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-2"></span>
              Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to my newsletter to receive updates on my latest
              projects, insights, and exclusive offers.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 pl-5 pr-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all duration-300"
              />
              <motion.button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </motion.button>

              <p className="mt-3 text-xs text-gray-500">
                I respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Copyright Section */}
      <div className="border-t border-white/10 py-6 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-400 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear}{" "}
            <span className="text-primary font-medium">Denis Bolba</span>. All
            rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll to top button */}
      <motion.a
        href="#home"
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg z-50 group relative"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="group-hover:translate-y-[-2px] transition-transform duration-300"
        >
          <path
            d="M10 3.33301L10 16.6663M10 3.33301L4.16669 9.16634M10 3.33301L15.8334 9.16634"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark px-3 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-white/10 backdrop-blur-sm">
          Scroll to top
        </span>
      </motion.a>
    </footer>
  );
};

export default Footer;
