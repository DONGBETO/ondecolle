import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import BiblioText from "@/src/components/biblio";
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
            title="Notre bibliothèque de ressources"
            image="/assets/images/hero_image_home.jpg"
          />
          <BiblioText
            title="Des ressources pour tous les besoins"
            paragraph = {
              <>
                <p>
                  Développez vos compétences, enrichissez vos connaissances et prenez votre avenir en
                  main grâce à la nouvelle <span className="font-bold text-blue-900">Bibliothèque Gratuite ! </span> Pensée comme un véritable accélérateur
                  de potentiel, cette plateforme vous donne un accès illimité à des outils, des études de
                  cas, des formations concises et des guides pratiques. De l’idéation au financement, en
                  passant par le développement personnel, trouvez les réponses à vos questions et les
                  ressources pour vous autonomiser. Il est temps de construire votre savoir, gratuitement.
                </p>
              </>
            } 
          />
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
