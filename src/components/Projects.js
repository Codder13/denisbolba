"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Lavanda Florarie",
    category: "Web Design",
    image: "/images/project-1.jpg",
    altText: "Lavanda Florarie - Premium flower shop website",
    description:
      "Elegant e-commerce website for a premium flower shop featuring beautiful product galleries and seamless ordering.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "WordPress"],
    link: "https://lavandaflorarie.com",
  },
  {
    id: 2,
    title: "Bella Floraria",
    category: "UI/UX",
    image: "/images/project-2.jpg",
    altText: "Bella Floraria - Modern florist e-commerce platform",
    description:
      "Modern e-commerce platform for a florist with stunning floral arrangements showcase and intuitive shopping experience.",
    technologies: ["React", "GSAP", "Styled Components", "WordPress"],
    link: "https://bellafloraria.ro",
  },
  {
    id: 3,
    title: "Biciclete Copii",
    category: "Web App",
    image: "/images/project-3.jpg",
    altText: "Biciclete Copii - Children's bicycle store",
    description:
      "Specialized online store for children's bicycles with detailed product catalogs and safety information.",
    technologies: ["Next.js", "Node.js", "MongoDB", "WordPress"],
    link: "https://bicicletecopii.ro",
  },
  // {
  //   id: 4,
  //   title: "Travel Blog",
  //   category: "WordPress",
  //   image: "/images/project-1.svg",
  //   altText: "Travel blog website design",
  //   description:
  //     "Custom WordPress theme for a travel blog with advanced filtering and category management.",
  //   technologies: ["WordPress", "PHP", "JavaScript"],
  //   link: "#",
  // },
  // {
  //   id: 5,
  //   title: "Real Estate Platform",
  //   category: "Web App",
  //   image: "/images/project-2.svg",
  //   altText: "Real estate property listing platform",
  //   description:
  //     "Property listing website with advanced search filters and interactive maps.",
  //   technologies: ["React", "Redux", "Firebase"],
  //   link: "#",
  // },
  // {
  //   id: 6,
  //   title: "Fitness Tracker",
  //   category: "Mobile App",
  //   image: "/images/project-3.svg",
  //   altText: "Fitness tracking mobile app interface",
  //   description:
  //     "Mobile app design for tracking workouts, nutrition, and progress with data visualization.",
  //   technologies: ["Figma", "Adobe XD", "Sketch"],
  //   link: "#",
  // },
];

const categories = [
  "All",
  "Web Design",
  "UI/UX",
  "Web App",
  "WordPress",
  "Mobile App",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const filterAnimations = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-[120px] animate-pulse-slow"></div>
      <div className="absolute -right-40 bottom-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-secondary/20 to-transparent blur-[120px] animate-pulse-slow"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Animated shapes */}
      <motion.div
        className="absolute right-10 top-20 w-20 h-20 opacity-10 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20,20 L80,20 L80,80 L20,80 Z"
            stroke="url(#projGrad1)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="projGrad1"
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
            My work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Recent{" "}
            <span className="bg-gradient-custom text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Explore my latest web design and development projects. Each project
            represents my passion for creating beautiful, functional digital
            experiences.
          </p>
        </motion.div>

        {/* Enhanced Filter Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              custom={i}
              variants={filterAnimations}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeCategory === category
                  ? "bg-gradient-custom text-white border-transparent shadow-lg"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/30"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 bg-white"
                  layoutId="categoryUnderline"
                  style={{ width: "50%" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid with staggered animations */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
            hidden: {},
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group h-full"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
                hidden: { opacity: 0, y: 50 },
              }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredItem(project.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-primary/5">
                {/* Project Image with enhanced hover effect */}
                <div className="relative overflow-hidden h-56">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/20 to-dark/90 z-10"></div>

                  {/* Background image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-dark">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.altText}
                          width={400}
                          height={240}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                          priority={project.id <= 3}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.span
                      className="text-xs bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <motion.h3
                      className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-300 text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gradient-to-br from-white/5 to-white/10 text-primary/90 px-3 py-1 rounded-full border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium bg-gradient-custom text-transparent bg-clip-text group/link relative self-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>View Project</span>
                    <svg
                      className="ml-2 w-4 h-4 text-primary transition-transform duration-300 group-hover/link:translate-x-1"
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
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-custom group-hover/link:w-full transition-all duration-300"></span>
                  </motion.a>
                </div>

                {/* Hover effect corner */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-md blur-md opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced View More Button */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="group relative inline-flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 hover:border-white/30 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-white/10 overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View all projects in portfolio"
          >
            <span className="relative z-10 flex items-center">
              <span>View All Projects</span>
              <svg
                className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
