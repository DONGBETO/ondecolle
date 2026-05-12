"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: React.ReactNode;
  image: string;
  file: string;
  lang: "fr" | "en";
};

export default function BiblioCard({
  title,
  description,
  image,
  file,
  lang,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -10 }}
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >

      {/* IMAGE */}
      <div className="relative w-full h-[420px] overflow-hidden">

        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={title || "image bibliotheque"}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">

        {title && (
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            {description}
          </p>
        )}

        {/* BUTTON */}
        <motion.a
          href={file}
          download
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-flex
            items-center
            justify-center
            bg-yellow-400
            text-black
            px-5 py-2.5
            rounded-full
            text-sm
            font-semibold
            hover:bg-yellow-300
            transition
            shadow-sm
          "
        >
          {lang === "fr" ? "Télécharger gratuitement" : "Download for free"}
        </motion.a>

      </div>
    </motion.div>
  );
}