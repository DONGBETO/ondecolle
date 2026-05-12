"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { X } from 'lucide-react';


type Props = {
  event: {
    slug: string;
    title: string;
    content: string;
    youtubeId: string;

    gallery?: string[];
    statNumber?: number;
  };
};

export default function EventDetail({ event }: Props) {
const [open, setOpen] = useState(false);

const images = event.gallery ?? [];

const visibleCount = 4;
const hasMore = images.length > visibleCount;
const previewImages = hasMore ? images.slice(0, visibleCount) : images;
const remaining = images.length - visibleCount;

  return (
    <section className="bg-gray-100 min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-7xl px-4 md:px-8 mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8"
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

        {/* VIDEO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
  
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${event.youtubeId}`}
          title={event.title}
          allowFullScreen
        />
      </motion.div>

      {/* STAT À DROITE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg p-6"
      >
        <p className="text-gray-500 text-sm mb-2">Participants</p>

        <h2 className="text-4xl font-bold text-yellow-400">
          +{event.statNumber ?? 200}
        </h2>

        <p className="text-gray-500 text-sm mt-2 text-center">
          Personnes présentes à l’évènement
        </p>
      </motion.div>

    </div>

       {/* GALLERY TITLE */}
      {images.length > 0 && (
        <>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-yellow-400 mb-6"
          >
            Galerie photos de l'évènement
          </motion.h2>

          {/* PREVIEW GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setOpen(true)}
                className="relative h-44 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={img}
                  alt={`gallery-${index}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY +X sur la dernière image */}
                {hasMore && index === visibleCount - 1 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold">
                    +{remaining}
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </>
      )}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => setOpen(false)}
        >
          {/* CONTAINER */}
          <div
            className="relative w-full max-w-6xl bg-white/5 rounded-2xl p-4 md:p-6 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 bg-white text-black w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <X size={18} />
          </button>

            {/* GRID IMAGES */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-h-[80vh] overflow-y-auto">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative h-60 md:h-72 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`gallery-${i}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
    
  );
}

