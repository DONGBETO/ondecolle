"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Vision from "@/src/components/Vision";
import Objectif from "@/src/components/Objectif";
import PiliersSection from "@/src/components/PilierSection";
import ImpactSecteion from "@/src/components/ImpactSection";
import VideoSection from "@/src/components/videoSection";
import TestimonialSection from "@/src/components/TestimonialSection";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  fadeIn,
  scaleIn,
} from "@/src/utils/animation";

import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      {/* Navbar */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Navbar />
      </motion.div>

      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <Hero
          text=""
          title="ENSEMBLE, ON DÉCOLLE !"
          subtitle="Dans la discipline, la rigueur, la détermination et la foi."
          description="Parce que chaque rêve mérite une piste d’envol, nous aidons gratuitement les jeunes à transformer leurs idées en projets concrets, durables et financés."
          buttonText="DEVENIR PARTENAIRE"
          image="/assets/images/hero_image_home.jpg"
        />
      </motion.section>

      {/* Vision */}
      <motion.section
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Vision
          title="NOTRE VISION"
          image="/assets/images/photo-densemble-vision.jpg"
          paragraphs={
            <>
              <p>
                Nous croyons qu’un jeune encadré, formé et soutenu peut devenir une
                source de croissance, d’emploi et d’inspiration pour son pays.
              </p>

              <p>
                <span className="font-semibold text-blue-900">
                  Notre vision :
                </span>{" "}
                détecter, accompagner et propulser la jeunesse africaine vers le succès.
              </p>
            </>
          }
        />
      </motion.section>

      {/* Objectif */}
      <motion.section
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Objectif />
      </motion.section>

      {/* Piliers */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <PiliersSection />
      </motion.section>

      {/* Impact */}
      <motion.section
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
      <ImpactSecteion />
      </motion.section>

      {/* Video */}
      <motion.section
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
      <VideoSection />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
      <TestimonialSection />
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Footer
          logo="/assets/logos/logoo.png"
          description="Notre mission : détecter, accompagner et propulser la jeunesse africaine vers le succès."
          links={[
            { label: "Bibliothèque", href: "/actualites/bibliotheque" },
            { label: "Évènements", href: "/actualites/evenements" },
            { label: "Projets", href: "/projets" },
            { label: "Blog", href: "/actualites/blog" },
            { label: "Contacts", href: "/contacts" },
            { label: "À propos", href: "/a-propos" },
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
      </motion.footer>

    </main>
  );
}