"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Web Design", percentage: 95, color: "from-blue-400 to-indigo-500" },
  {
    name: "UI/UX Design",
    percentage: 90,
    color: "from-purple-400 to-pink-500",
  },
  { name: "HTML/CSS", percentage: 98, color: "from-orange-400 to-red-500" },
  { name: "JavaScript", percentage: 85, color: "from-yellow-400 to-amber-500" },
  { name: "React.js", percentage: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", percentage: 85, color: "from-indigo-400 to-violet-500" },
  { name: "WordPress", percentage: 100, color: "from-teal-400 to-cyan-500" },
  { name: "Figma", percentage: 90, color: "from-red-400 to-pink-500" },
];

const SkillBar = ({ name, percentage, index, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.h4
          className="text-white font-medium flex items-center gap-2"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span
            className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
          ></span>
          {name}
        </motion.h4>
        <motion.span
          className="text-gray-400 font-mono"
          animate={{
            scale: isHovered ? 1.1 : 1,
            color: isHovered
              ? "rgba(var(--primary-color-rgb), 1)"
              : "rgba(156, 163, 175, 1)",
          }}
          transition={{ duration: 0.2 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2.5 w-full bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute right-0 top-0 h-full w-1 bg-white/30"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-[120px] animate-pulse-slow"></div>
      <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-secondary/20 to-transparent blur-[120px] animate-pulse-slow"></div>

      {/* Tech pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-primary/90 text-sm font-medium inline-block mb-4">
            My expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="bg-gradient-custom text-transparent bg-clip-text">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            I&apos;ve developed a wide range of skills throughout my journey as
            a web designer and entrepreneur. Here&apos;s a glimpse of my
            technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-2 mb-20">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              index={index}
              color={skill.color}
            />
          ))}
        </div>

        <motion.div
          ref={skillsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

            {/* Glowing dot in the corner */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse"></div>

            <div className="w-16 h-16 mb-6 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 relative">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>

              {/* Subtle rays behind icon */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-primary transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-primary transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
              </div>
            </div>

            <motion.h3
              className="text-xl font-bold text-white mb-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Web Design
            </motion.h3>

            <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
              Creating beautiful, functional and responsive websites that
              provide exceptional user experiences.
            </p>

            <div className="h-0.5 w-12 bg-gradient-to-r from-primary/80 to-primary/0 rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
          </motion.div>

          <motion.div
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

            {/* Glowing dot in the corner */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary animate-pulse"></div>

            <div className="w-16 h-16 mb-6 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300 relative">
              <svg
                className="w-8 h-8 text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>

              {/* Subtle rays behind icon */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-secondary transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-secondary transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
              </div>
            </div>

            <motion.h3
              className="text-xl font-bold text-white mb-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              UI/UX Design
            </motion.h3>

            <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
              Designing intuitive interfaces and experiences that users love,
              focusing on accessibility and usability.
            </p>

            <div className="h-0.5 w-12 bg-gradient-to-r from-secondary/80 to-secondary/0 rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
          </motion.div>

          <motion.div
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

            {/* Glowing dot in the corner */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse"></div>

            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors duration-300 relative">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>

              {/* Subtle rays behind icon */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
              </div>
            </div>

            <motion.h3
              className="text-xl font-bold text-white mb-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Development
            </motion.h3>

            <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
              Building modern web applications with the latest technologies to
              deliver exceptional digital solutions.
            </p>

            <div className="h-0.5 w-12 bg-gradient-to-r from-white/80 to-white/0 rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <motion.div
              className="text-4xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              5+
            </motion.div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <motion.div
              className="text-4xl font-bold text-secondary mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              85+
            </motion.div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <motion.div
              className="text-4xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              60+
            </motion.div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <motion.div
              className="text-4xl font-bold text-secondary mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              12+
            </motion.div>
            <div className="text-sm text-gray-400">Awards Received</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
