"use client";

import { motion, Variants } from "framer-motion";

type AnimationDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: AnimationDirection;
  once?: boolean;
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
}: Props) {
  const variants: Variants = {
    hidden: {
      opacity: 0,

      ...(direction === "up" && { y: 60 }),
      ...(direction === "down" && { y: -60 }),
      ...(direction === "left" && { x: 60 }),
      ...(direction === "right" && { x: -60 }),
      ...(direction === "scale" && { scale: 0.9 }),
    },

    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,

      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}