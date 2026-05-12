"use client";

import { motion } from "framer-motion";

type Direction =
  | "left"
  | "right"
  | "up"
  | "down";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

export default function SlideIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: Props) {
  const initialAnimation = {
    opacity: 0,

    x:
      direction === "left"
        ? -80
        : direction === "right"
        ? 80
        : 0,

    y:
      direction === "up"
        ? 80
        : direction === "down"
        ? -80
        : 0,
  };

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}