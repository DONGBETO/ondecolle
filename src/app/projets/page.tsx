"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Projets from "@/src/components/Projets";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

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
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <Hero
          subtitle=""
          text=""
          description="Ensemble, on décolle est un mouvement citoyen en pleine croissance, un écosystème où chaque acteur joue un rôle clé dans la transformation de la jeunesse africaine. Que vous soyez un jeune avec un rêve, un expert souhaitant partager son savoir, ou une entité désireuse d’investir dans un avenir prometteur, votre place est à nos côtés."
          title="PROJETS"
          image="/assets/images/hero_image_home.jpg"
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
        <Footer
          logo="/assets/logos/logoo.png"
          description="Notre mission : détecter, accompagner et propulser la jeunesse africaine vers le succès."
          links={[
            { label: "Bibliothèque", href: "#" },
            { label: "Évènements", href: "#" },
            { label: "Projets", href: "#" },
            { label: "Contacts", href: "#" },
            { label: "À propos", href: "#" },
          ]}
          socials={[
            {
              icon: <FaFacebook size={18} />,
              href: "https://www.facebook.com/habib.aboukhedoud?rdid=Qlwp9rC6zFwqE4bA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvTBznrbT%2F#",
              target: "_blank",
            },
            {
              icon: <FaInstagram size={18} />,
              href: "https://instagram.com/habib_aboukhedoud?igsh=MWxheWNzenFpeWl4Yg==",
              target: "_blank",
            },
            {
              icon: <FaLinkedin size={18} />,
              href: "https://www.linkedin.com/in/habib-aboukhedoud-b7044a186",
              target: "_blank",
            },
            {
              icon: <Music2 size={18} />,
              href: "https://www.tiktok.com/@habibaboukhedoud",
              target: "_blank",
            },
          ]}
        />
      </motion.div>
    </motion.main>
  );
}