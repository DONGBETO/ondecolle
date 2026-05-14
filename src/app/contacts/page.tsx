"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Equipe from "@/src/components/equipe";
import Contact from "@/src/components/contact";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

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
          image="/assets/images/hero_image_home.jpg"
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
        <Footer
          logo="/assets/logos/logoo.png"
          description="Notre mission : détecter, accompagner et propulser la jeunesse africaine vers le succès."
          links={[
            { label: "Bibliothèque", href: "/actualites/bibliotheque" },
            { label: "Évènements", href: "/actualites/evenements" },
            { label: "Projets", href: "/projets" },
            { label: "Blog", href: "/actualites/blog" },
            { label: "Contacts", href: "#" },
            { label: "À propos", href: "/a-propos" },
          ]}
          socials={[
            {
              icon: <FaFacebook size={18} />,
              href: "https://facebook.com",
              target: "_blank",
            },
            {
              icon: <FaInstagram size={18} />,
              href: "https://instagram.com",
              target: "_blank",
            },
            {
              icon: <FaLinkedin size={18} />,
              href: "https://linkedin.com",
              target: "_blank",
            },
            {
              icon: <Music2 size={18} />,
              href: "https://tiktok.com",
              target: "_blank",
            },
          ]}
        />
      </motion.section>

    </motion.main>
  );
}