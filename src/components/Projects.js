"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "Web Design",
    image: "/images/project-1.jpg",
    altText: "E-commerce website design mockup",
    description:
      "A fully responsive e-commerce website with modern design and seamless user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Site",
    category: "UI/UX",
    image: "/images/project-2.jpg",
    altText: "Portfolio website for a photographer",
    description:
      "Creative portfolio website for a photographer with stunning image galleries and smooth transitions.",
    technologies: ["React", "GSAP", "Styled Components"],
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Booking App",
    category: "Web App",
    image: "/images/project-3.jpg",
    altText: "Restaurant booking application interface",
    description:
      "Online booking system for restaurants with table reservation and menu management.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 4,
    title: "Travel Blog",
    category: "WordPress",
    image: "/images/project-4.jpg",
    altText: "Travel blog website design",
    description:
      "Custom WordPress theme for a travel blog with advanced filtering and category management.",
    technologies: ["WordPress", "PHP", "JavaScript"],
    link: "#",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web App",
    image: "/images/project-5.jpg",
    altText: "Real estate property listing platform",
    description:
      "Property listing website with advanced search filters and interactive maps.",
    technologies: ["React", "Redux", "Firebase"],
    link: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    category: "Mobile App",
    image: "/images/project-6.jpg",
    altText: "Fitness tracking mobile app interface",
    description:
      "Mobile app design for tracking workouts, nutrition, and progress with data visualization.",
    technologies: ["Figma", "Adobe XD", "Sketch"],
    link: "#",
  },
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

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-60 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Explore my latest web design and development projects. Each project
            represents my passion for creating beautiful, functional digital
            experiences.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-xl bg-dark/50 backdrop-blur-sm border border-white/10"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredItem(project.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20"></div>
                <div className="absolute inset-0 bg-dark/60"></div>
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
                  {/* Image with proper alt text */}
                  <Image
                    src={project.image}
                    alt={project.altText}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                    priority={project.id <= 3} // Prioritize loading the first 3 images
                  />
                  <span className="text-gradient font-bold absolute inset-0 flex items-center justify-center bg-dark/70">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/5 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-gradient"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                  <svg
                    className="ml-2 w-4 h-4"
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
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredItem === project.id ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-white/10 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View all projects in portfolio"
          >
            View All Projects
            <svg
              className="ml-2 w-5 h-5"
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
