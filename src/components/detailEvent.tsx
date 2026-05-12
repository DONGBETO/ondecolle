"use client";

import { motion } from "framer-motion";

type Props = {
  event: {
    slug: string;
    title: string;
    content: string;
    youtubeId: string;
  };
};

export default function EventDetail({ event }: Props) {
  return (
    <section className="bg-gray-100 min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8"
        >
          {event.title}
        </motion.h1>

        {/* CONTENT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 mb-10 leading-relaxed"
        >
          {event.content}
        </motion.p>

        {/* VIDEO WRAPPER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="
            aspect-video
            rounded-2xl
            overflow-hidden
            shadow-2xl
            border
            border-gray-200
          "
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${event.youtubeId}`}
            title={event.title}
            allowFullScreen
          />
        </motion.div>

      </div>
    </section>
  );
}