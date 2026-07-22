"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/src/data/team";
import { fadeUp, staggerContainer, staggerItem } from "@/src/utils/animation";

export default function TeamSection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            NOTRE ÉQUIPE
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Une équipe engagée qui œuvre chaque jour pour accompagner et
            propulser la jeunesse africaine.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={member.image}
                alt={`Membre ${member.id}`}
                width={500}
                height={650}
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}