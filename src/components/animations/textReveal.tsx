"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

export default function TextReveal({
  text,
  className = "",
}: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={className}
    >
      {text}
    </motion.h2>
  );
}