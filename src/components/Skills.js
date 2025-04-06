"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Web Design", percentage: 95 },
  { name: "UI/UX Design", percentage: 90 },
  { name: "HTML/CSS", percentage: 98 },
  { name: "JavaScript", percentage: 85 },
  { name: "React.js", percentage: 80 },
  { name: "Next.js", percentage: 85 },
  { name: "WordPress", percentage: 100 },
  { name: "Figma", percentage: 90 },
];

const SkillBar = ({ name, percentage, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-medium">{name}</h4>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          style={{
            background:
              "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

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
      {/* Decorative elements */}
      <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -right-40 bottom-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            I&apos;ve developed a wide range of skills throughout my journey as
            a web designer and entrepreneur. Here&apos;s a glimpse of my
            technical expertise.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
        >
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div
            className="bg-dark/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 mb-6 bg-primary/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Web Design</h3>
            <p className="text-gray-400">
              Creating beautiful, functional and responsive websites that
              provide exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            className="bg-dark/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 mb-6 bg-primary/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
            <p className="text-gray-400">
              Designing intuitive interfaces and experiences that users love,
              focusing on accessibility and usability.
            </p>
          </motion.div>

          <motion.div
            className="bg-dark/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 mb-6 bg-primary/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
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
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Development</h3>
            <p className="text-gray-400">
              Building modern web applications with the latest technologies to
              deliver exceptional digital solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
