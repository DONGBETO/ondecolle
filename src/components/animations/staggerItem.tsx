"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function StaggerItem({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },

        visible: {
          opacity: 1,
          y: 0,

          transition: {
            duration: 0.5,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}