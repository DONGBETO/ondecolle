"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Projets from "@/src/components/Projets";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Projet() {
  return (
    <motion.main
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="visible"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <Hero
          subtitle=""
          text=""
          description="Ensemble, on décolle est un mouvement citoyen en pleine croissance, un écosystème où chaque acteur joue un rôle clé dans la transformation de la jeunesse africaine. Que vous soyez un jeune avec un rêve, un expert souhaitant partager son savoir, ou une entité désireuse d’investir dans un avenir prometteur, votre place est à nos côtés."
          title="PROJETS"
          image="/assets/images/team/team_image.jpg"
        />
      </motion.div>

      {/* PROJETS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.9 }}
      >
      <Projets />
      </motion.div>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </motion.main>
  );
}