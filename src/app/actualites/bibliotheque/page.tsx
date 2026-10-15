"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import BiblioText from "@/src/components/biblio";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Bibliotheque() {
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
          description=""
          title="Notre bibliothèque de ressources"
          image="/assets/images/team/team_image.jpg"
        />
      </motion.section>

      {/* TEXT SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <BiblioText
          title="Des ressources pour tous les besoins"
          paragraph={
            <>
              <p>
                Développez vos compétences, enrichissez vos connaissances et
                prenez votre avenir en main grâce à la nouvelle{" "}
                <span className="font-bold text-blue-900">
                  Bibliothèque Gratuite !
                </span>{" "}
                Pensée comme un véritable accélérateur de potentiel, cette
                plateforme vous donne un accès illimité à des outils, des études
                de cas, des formations concises et des guides pratiques.

                De l’idéation au financement, en passant par le développement
                personnel, trouvez les réponses à vos questions et les ressources
                pour vous autonomiser.
              </p>
            </>
          }
        />
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