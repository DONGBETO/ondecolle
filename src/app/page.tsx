"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Vision from "@/src/components/Vision";
import Objectif from "@/src/components/Objectif";
import Partenaire from "../components/partenaire";
import PiliersSection from "@/src/components/PilierSection";
import ImpactSecteion from "@/src/components/ImpactSection";
import VideoSection from "@/src/components/videoSection";
import TestimonialSection from "@/src/components/TestimonialSection";
import Footer from "@/src/components/Footer";

import { motion } from "framer-motion";

import {
  fadeUp,
  fadeIn,
  scaleIn,
} from "@/src/utils/animation";

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      {/* Navbar */}
      <motion.div
        variants={fadeIn}
        initial="visible"
        animate="visible"
      >
        <Navbar />
      </motion.div>

      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="visible"
        animate="visible"
      >
        <Hero
          text=""
          title="ENSEMBLE, ON DÉCOLLE !"
          subtitle="Dans la discipline, la rigueur, la détermination et la foi."
          description="Parce que chaque rêve mérite une piste d’envol, nous aidons gratuitement les jeunes à transformer leurs idées en projets concrets, durables et financés."
          buttonText="DEVENIR PARTENAIRE"
          image="/assets/images/team/team_image.jpg"
        />
      </motion.section>

      {/* Vision */}
      <motion.section
        variants={fadeUp}
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
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Objectif />
      </motion.section>

      {/* Partenaires */}
      <motion.section
        variants={fadeUp}
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Partenaire />
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
        variants={fadeUp}
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
        <Footer />
      </motion.footer>

    </main>
  );
}