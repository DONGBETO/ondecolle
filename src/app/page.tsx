import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Vision from "@/src/components/Vision";
import Objectif from "@/src/components/Objectif";
import PiliersSection from "@/src/components/PilierSection";
import ImpactSecteion from "@/src/components/ImpactSection";
import VideoSection from "@/src/components/videoSection";
import TestimonialSection from "@/src/components/TestimonialSection";
import Footer from "@/src/components/Footer";
import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";



export default function Home() {
  return (
    <>
    <main>
      <Navbar />
      <Hero
        text=""
        title="ENSEMBLE, ON DÉCOLLE !"
        subtitle="Dans la discipline, la rigueur, la détermination et la foi."
        description="Parce que chaque rêve mérite une piste d’envol, nous aidons gratuitement les jeunes à transformer leurs idées en projets concrets, durables et financés."
        buttonText="DEVENIR PARTENAIRE"
        image="/assets/images/hero_image_home.jpg"
      />      
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
      <Objectif />
      <PiliersSection />
      <ImpactSecteion />
      <VideoSection />
      <TestimonialSection />
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
          { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/habib.aboukhedoud?rdid=Qlwp9rC6zFwqE4bA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvTBznrbT%2F#", target: "_blank" },
          { icon: <FaInstagram size={18} />, href: "https://instagram.com/habib_aboukhedoud?igsh=MWxheWNzenFpeWl4Yg==", target: "_blank" },
          { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/habib-aboukhedoud-b7044a186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", target: "_blank" },
          { icon: <Music2 size={18} />, href: "https://www.tiktok.com/@habibaboukhedoud?_r=1&_t=ZM-923QmkKsrxT", target: "_blank" }, 
        ]}
      />
    </main>
  </>
  );
}