"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "contact@denisbolba.com", // Your email
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
    // {
    //   icon: <FaLinkedinIn size={18} />,
    //   url: "https://linkedin.com/in/denisbolba",
    //   label: "LinkedIn Profile",
    //   color: "hover:bg-blue-600/20 hover:text-blue-500",
    // },
    // {
    //   icon: <FaDribbble size={18} />,
    //   url: "https://dribbble.com/denisbolba",
    //   label: "Dribbble Profile",
    //   color: "hover:bg-pink-600/20 hover:text-pink-500",
    // },
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

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute -left-40 top-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-[120px] animate-pulse-slow"></div>
      <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-secondary/20 to-transparent blur-[120px] animate-pulse-slow"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Animated shapes */}
      <motion.div
        className="absolute right-10 bottom-20 w-20 h-20 opacity-10 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
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
            stroke="url(#contactGrad1)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="contactGrad1"
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
        className="absolute left-10 top-40 w-16 h-16 opacity-10 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
            stroke="url(#contactGrad2)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="contactGrad2"
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
            Let&apos;s talk
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-custom text-transparent bg-clip-text">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Let&apos;s work together to bring your vision to life. Feel free to
            reach out for collaborations, consultations, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={formVariants}
            >
              <motion.div
                className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <FaEnvelope
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-400 mb-2">contact@denisbolba.com</p>
                    <a
                      href="mailto:contact@denisbolba.com"
                      className="text-primary hover:text-secondary transition-colors duration-300 text-sm flex items-center group-hover:translate-x-1 transform transition-transform"
                    >
                      Send an email
                      <svg
                        className="w-4 h-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/30 transition-colors duration-300">
                    <FaPhone
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-400 mb-2">+40 772 266 156</p>
                    <a
                      href="tel:+40772266156"
                      className="text-secondary hover:text-primary transition-colors duration-300 text-sm flex items-center group-hover:translate-x-1 transform transition-transform"
                    >
                      Call me
                      <svg
                        className="w-4 h-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gradient-custom rounded-lg flex items-center justify-center text-white shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors duration-300">
                    <FaMapMarkerAlt
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-400 mb-2">Oradea, Romania</p>
                    <a
                      href="https://maps.google.com/?q=Oradea,Romania"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors duration-300 text-sm flex items-center group-hover:translate-x-1 transform transition-transform"
                    >
                      View on map
                      <svg
                        className="w-4 h-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social media grid */}
              {/* <motion.div
                className="grid grid-cols-4 gap-4 mt-8"
                variants={itemVariants}
              >
                {/* {["twitter", "instagram", "linkedin", "github"].map( * /}
                {["instagram", "github", "youtube"].map((social) => (
                  <motion.a
                    key={social}
                    href={`https://${social}.com/denisbolba`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:text-primary hover:border-primary/30 border border-white/10 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{social}</span>
                    <i className={`fab fa-${social}`}></i>
                  </motion.a>
                ))}
              </motion.div> */}
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
          </div>

          {/* Enhanced Contact Form */}
          <motion.div
            ref={formRef}
            className="lg:col-span-2 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            {submitStatus === "success" ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 mb-8 max-w-md">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible. Looking forward to our conversation!
                </p>
                <motion.button
                  onClick={() => setSubmitStatus(null)}
                  className="inline-flex items-center text-sm bg-gradient-custom hover:opacity-90 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : submitStatus === "error" ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Oops! Something went wrong
                </h3>
                <p className="text-gray-300 mb-8 max-w-md">
                  There was an issue sending your message. Please try again or
                  contact me directly at contact@denisbolba.com
                </p>
                <motion.button
                  onClick={() => setSubmitStatus(null)}
                  className="inline-flex items-center text-sm bg-gradient-custom hover:opacity-90 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={formVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === "name" || formData.name
                          ? "-top-2.5 text-xs text-primary"
                          : "top-3.5 text-sm text-gray-400"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      className="w-full px-4 pt-3.5 pb-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === "email" || formData.email
                          ? "-top-2.5 text-xs text-primary"
                          : "top-3.5 text-sm text-gray-400"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      className="w-full px-4 pt-3.5 pb-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative">
                  <label
                    htmlFor="subject"
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === "subject" || formData.subject
                        ? "-top-2.5 text-xs text-primary"
                        : "top-3.5 text-sm text-gray-400"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    className="w-full px-4 pt-3.5 pb-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === "message" || formData.message
                        ? "-top-2.5 text-xs text-primary"
                        : "top-3.5 text-sm text-gray-400"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    rows={5}
                    className="w-full px-4 pt-3.5 pb-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-custom text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-primary/30 relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-custom opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>

                {/* Form footer message */}
                <motion.p
                  variants={itemVariants}
                  className="text-center text-gray-400 text-xs mt-4"
                >
                  Your information is secure and will never be shared with third
                  parties.
                </motion.p>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
