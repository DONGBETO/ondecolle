import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Event from "@/src/components/event";
import EventSection from "@/src/components/eventSection"
import Footer from "@/src/components/Footer";
import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


export default function Projet() {
  return (
        <main>
          <Navbar />
          <Hero 
            subtitle=""
            text=""
            description=""
            title="Nos évènements"
            image="/assets/images/hero_image_home.jpg"
          />
          <Event
            title="Découvrez nos évènements"
            paragraph = {
              <>
                <p>
                  Nos événements sont des espaces de rencontre, d’apprentissage et d’opportunités.
                  À travers des conférences, des ateliers pratiques et des sessions de mentorat,
                  nous créons un environnement dynamique où les jeunes peuvent développer leurs
                  compétences, élargir leur réseau et concrétiser leurs ambitions. Chaque événement
                  est conçu pour <span className="text-blue-900">inspirer, former et connecter</span>,
                  afin de transformer des idées en projets
                  réels et durables.
                </p>
              </>
            } 
          />
          <EventSection />
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
  );
}
