"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const sectionElements = sections.map((id) => {
        const element = document.getElementById(id);
        if (element) {
          return {
            id,
            offsetTop: element.offsetTop - 100,
            offsetHeight: element.offsetHeight,
          };
        }
        return { id, offsetTop: 0, offsetHeight: 0 };
      });

      const scrollPosition = window.scrollY;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      url: "https://github.com/Codder13",
      label: "GitHub Profile",
      hoverColor: "hover:text-gray-300",
    },
    {
      icon: <FaYoutube size={18} />,
      url: "https://youtube.com/@denisbolba",
      label: "YouTube Channel",
      hoverColor: "hover:text-red-500",
    },
    {
      icon: <FaInstagram size={18} />,
      url: "https://instagram.com/denisbolba",
      label: "Instagram Profile",
      hoverColor: "hover:text-pink-500",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      url: "https://linkedin.com/in/denisbolba",
      label: "LinkedIn Profile",
      hoverColor: "hover:text-blue-500",
    },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Gradient border at the bottom */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-custom transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold relative group"
          href="#home"
          aria-label="Go to home section"
        >
          <span className="bg-gradient-custom text-transparent bg-clip-text">
            Denis Bolba
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-custom group-hover:w-full transition-all duration-300"></span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === link.href.substring(1)
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/10 -z-10"
                  layoutId="navIndicator"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </motion.a>
          ))}
          <motion.a
            variants={itemVariants}
            href="#contact"
            className="ml-2 px-5 py-2 text-sm font-medium bg-gradient-custom text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </motion.nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-400 ${link.hoverColor} transition-all duration-300`}
              aria-label={link.label}
              title={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-1 rounded-md focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5">
            <motion.span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                mobileMenuOpen ? "w-6 transform rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <motion.span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <motion.span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                mobileMenuOpen
                  ? "w-6 transform -rotate-45 -translate-y-2"
                  : "w-5"
              }`}
            />
          </div>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-dark/95 backdrop-blur-lg flex flex-col justify-center items-center z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav
                className="flex flex-col items-center space-y-6 mb-10"
                initial="hidden"
                animate="visible"
                variants={navVariants}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    custom={index}
                    href={link.href}
                    className={`text-2xl font-medium ${
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-gray-200"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="mt-4 px-8 py-3 text-base font-medium bg-gradient-custom text-white rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.a>
              </motion.nav>

              {/* Social Links in Mobile Menu */}
              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white ${link.hoverColor} transition-colors duration-300`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
