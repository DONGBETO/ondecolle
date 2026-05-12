"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HoverCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}