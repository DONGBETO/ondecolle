"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjetCard";
import { projects } from "../data/project";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function ProjectsSection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-12"
        >
          NOS PROJETS
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                id={project.id}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}