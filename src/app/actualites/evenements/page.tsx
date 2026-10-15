"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Event from "@/src/components/event";
import EventSection from "@/src/components/eventSection";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Evenements() {
  return (
    <motion.main
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="visible"
        animate="show"
        transition={{ duration: 1 }}
      >
        <Hero
          subtitle=""
          text=""
          description=""
          title="Nos évènements"
          image="/assets/images/team/team_image.jpg"
        />
      </motion.section>

      {/* EVENT INTRO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9 }}
      >
        <Event
          title="Découvrez nos évènements"
          paragraph={
            <>
              <p>
                Nos événements sont des espaces de rencontre,
                d’apprentissage et d’opportunités.
                À travers des conférences, des ateliers pratiques
                et des sessions de mentorat, nous créons un
                environnement dynamique où les jeunes peuvent
                développer leurs compétences, élargir leur réseau
                et concrétiser leurs ambitions.

                Chaque événement est conçu pour{" "}
                <span className="text-blue-900">
                  inspirer, former et connecter
                </span>
                , afin de transformer des idées en projets
                réels et durables.
              </p>
            </>
          }
        />
      </motion.section>

      {/* EVENTS */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1 }}
      >
        <EventSection />
      </motion.section>

      {/* FOOTER */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.section>
    </motion.main>
  );
}