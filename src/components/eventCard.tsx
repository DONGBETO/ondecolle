"use client";

import Image from "next/image";
import Link from "next/link";

import { Play } from "lucide-react";

import { motion } from "framer-motion";

type Props = {
  title: string;
  image: string;
  duration?: string;
  href: string;
  description?: string;
};

export default function EventCard({
  title,
  image,
  duration,
  href,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        rounded-2xl
        overflow-hidden
        shadow-lg
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <div className="relative w-full h-105 overflow-hidden">

        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

      </div>

      {/* OVERLAY */}
      <div className="
        absolute
        inset-0
        bg-linear-to-t
        from-black/90
        via-black/40
        to-black/10
        group-hover:from-black/95
        transition-all
        duration-500
      " />

      {/* PLAY BUTTON */}
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="absolute top-5 left-5 z-20"
      >
        <Link href={href}>
          <div
            className="
              w-14
              h-14
              rounded-full
              border
              border-white
              backdrop-blur-md
              bg-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            <Play size={22} fill="currentColor" />
          </div>
        </Link>
      </motion.div>

      {/* CONTENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-6
          z-10
        "
      >

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >

          <Link href={href}>
            <h3
              className="
                text-white
                text-2xl
                font-bold
                mb-3
                hover:text-yellow-400
                hover:underline
                transition
              "
            >
              {title}
            </h3>
          </Link>

          <p
            className="
              text-gray-200
              text-sm
              leading-relaxed
              opacity-0
              group-hover:opacity-100
              translate-y-4
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            {description}
          </p>

          <div
            className="
              mt-4
              text-gray-300
              text-sm
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
          >
            ⏱ {duration}
          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}