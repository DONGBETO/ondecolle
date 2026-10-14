"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Equipe from "@/src/components/equipe";
import Contact from "@/src/components/contact";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Contactez() {
  return (
    <motion.main className="overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero
          subtitle=""
          text=""
          description="Ensemble, on décolle est un mouvement citoyen en pleine croissance, un écosystème où chaque acteur joue un rôle clé dans la transformation de la jeunesse africaine. Que vous soyez un jeune avec un rêve, un expert souhaitant partager son savoir, ou une entité désireuse d'investir dans un avenir prometteur, votre place est à nos côtés."
          title="CONTACTS"
          image="/assets/images/team/team_image.jpg"
        />
      </motion.section>

      {/* EQUIPE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Equipe />
      </motion.section>

      {/* CONTACT */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9 }}
      >
        <Contact />
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