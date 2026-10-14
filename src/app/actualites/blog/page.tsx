import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Footer from "@/src/components/Footer";
import BlogContent from '@/src/components/blogContent';

import {
  MotionMain,
  MotionSection,
} from "@/src/components/motionWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, conseils et retours d’expérience pour aider la jeunesse africaine à entreprendre et à réussir.",
};

export default function Page() {

  return (
    <MotionMain className="overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <MotionSection
        variants={fadeUp}
        initial="visible"
        animate="show"
        transition={{ duration: 0.8 }}
      >
        <Hero
          subtitle=""
          text=""
          description=""
          title="Notre Blog"
          image="/assets/images/team/team_image.jpg"
        />
      </MotionSection>

      {/* BLOG SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
      <BlogContent />
      </MotionSection>

      {/* FOOTER */}
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </MotionSection>

    </MotionMain>
  );
}