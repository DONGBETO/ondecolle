"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Event from "@/src/components/event";
import EventSection from "@/src/components/eventSection";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
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
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 1 }}
      >
        <Hero
          subtitle=""
          text=""
          description=""
          title="Nos évènements"
          image="/assets/images/hero_image_home.jpg"
        />
      </motion.section>

      {/* EVENT INTRO */}
      <motion.section
        variants={fadeLeft}
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
              href: "https://www.facebook.com/habib.aboukhedoud",
              target: "_blank",
            },
            {
              icon: <FaInstagram size={18} />,
              href: "https://instagram.com/habib_aboukhedoud",
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
      </motion.section>
    </motion.main>
  );
}