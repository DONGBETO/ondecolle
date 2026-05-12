
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Blogs from "@/src/components/Blog";
import Footer from "@/src/components/Footer";

import {
  MotionMain,
  MotionSection,
} from "@/src/components/motionWrapper";

import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {

  const params = await searchParams;
  return (
    <MotionMain className="overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <MotionSection
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
      >
        <Hero
          subtitle=""
          text=""
          description=""
          title="Notre Blog"
          image="/assets/images/hero_image_home.jpg"
        />
      </MotionSection>

      {/* BLOG SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
      <Blogs page={params?.page} />
      </MotionSection>

      {/* FOOTER */}
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
      </MotionSection>

    </MotionMain>
  );
}