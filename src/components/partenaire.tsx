"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/src/utils/animation";
import { partners } from "../data/partenaires";


export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">
            NOS PARTENAIRES
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Nous collaborons avec des mécènes, sponsors, investisseurs et
            institutions engagés pour accompagner la jeunesse africaine dans la
            réalisation de projets ambitieux et durables.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={staggerItem}
              className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 hover:shadow-md transition duration-300 text-center"
            >
              {/* Logo */}
              <div className="relative w-28 h-16 mb-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                 {/* Nom */}
              <h3 className="text-sm font-semibold text-gray-800">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                {partner.desc}
              </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}