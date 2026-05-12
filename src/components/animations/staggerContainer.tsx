"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function StaggerContainer({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}