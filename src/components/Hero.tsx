"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";

type Props = {
  text?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  image: string;
  overlay?: boolean;
};

function Hero({
  text = "",
  title = "",
  subtitle = "",
  description = "",
  buttonText = "",
  image = "",
  overlay = true,
}: Props) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background image animée */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt="hero"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      {overlay && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-blue-900/80"
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold text-white mb-4"
        >
          {text}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-yellow-300 mb-4 text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-gray-200 mb-6 text-xl max-w-7xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {buttonText && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 1,
              type: "spring",
            }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-6 py-3 text-2xl rounded-full font-semibold hover:bg-yellow-300 transition cursor-pointer"
          >
            {buttonText}
          </motion.button>
        )}

      </div>
    </section>
  );
}

export default memo(Hero);