import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import EngagementSection from "@/src/components/engagement";
import Vision from "@/src/components/Vision";
import InitiativeSection from "@/src/components/initiative";
import Personnalite from "@/src/components/abouts";
import Footer from "@/src/components/Footer";
import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


export default function About() {
  return (
        <main>
          <Navbar />
          <Hero 
            text="Découvrez le mouvement citoyen"
            subtitle=" Le mouvement citoyen qui propulse la jeunesse africaine"
            title="ENSEMBLE, ON DÉCOLLE !"
            image="/assets/images/photo-densemble-vision.jpg"
          />
          <EngagementSection
            title="Notre engagement : Ensemble, on décolle !"
            description="est né d’une conviction profonde : celle que la jeunesse africaine est un moteur puissant de changement, d’innovation et de développement. Nous sommes un mouvement citoyen, apolitique et entièrement bénévole, dédié à détecter, former et propulser les jeunes talents porteurs d’idées et de projets concrets."
            highlight="Ensemble, on décolle"
          />
          <Vision
            title="NOTRE MISSION ET NOTRE VISION"
            image="/assets/images/photo-densemble-vision.jpg"
            paragraphs={
              <>
                <p>
                  Nous croyons qu’un jeune encadré, formé et soutenu peut devenir une
                  source de croissance, d’emploi et d’inspiration pour son pays.
                </p>

                <p>
                  <span className="font-semibold text-blue-900">
                    Notre mission :
                  </span>{" "}
                  Lever les freins (manque de moyens, d’encadrement, de réseau) qui
                  empêchent trop souvent les rêves de prendre leur envol. Nous offrons un
                  accompagnement humain, des formations concrètes, une mise en réseau
                  stratégique et un accès à des financements, le tout gratuitement et en
                  toute transparence.
                </p>

                <p>
                  <span className="font-semibold text-blue-900">
                    Notre Vision :
                  </span>{" "}
                  Bâtir une Afrique où chaque jeune, quel que soit son milieu, a la chance
                  de transformer son potentiel en succès et de devenir, à son tour, une
                  source d’inspiration et de prospérité pour sa communauté et son pays.
                </p>
              </>
            }
          />
          <InitiativeSection 
            title="Le pilote visionnaire derrière l'initiative"
            description="Ce mouvement est l'émanation de la passion et de la vision du Commandant Habib Aboukhedoud."
          />
          <Personnalite 
              image="/assets/images/Habib.jpg"
              title="QUI EST HABIB ABOUKHEDOUD ?"
              paragraphs={
                <>
                  <p>
                    <span className="font-semibold text-blue-900">
                      Habib Aboukhedoud
                    </span>{" "}
                    est un pilote de ligne chevronné béninois avec plus de 26 ans d’expérience et plus de
                    14 000 heures de vol. Commandant de bord, instructeur et examinateur, il a exercé dans
                    de grandes compagnies internationales telles que Turkish Airlines, Qatar Airways,
                    Rwandair, Arik Air et évolue aujourd’hui à Ethiopian Airlines.
                  </p>

                  <p>
                    Formé à la Oxford Aviation Academy de Londres et à la Pan Am Academy en Floride (USA),
                    il incarne l’excellence et la rigueur dans l’aviation mondiale. Il fut également
                    inspecteur externe des opérations aériennes au Bénin, garant de la sécurité et des
                    standards internationaux.
                  </p>

                  <p>
                    Au-delà de l’aviation, Habib est instructeur auprès des forces de défense et de
                    sécurité de la sous-région, partageant son savoir-faire en matière de discipline,
                    de leadership et de sécurité.
                  </p>

                  <p>
                    Philanthrope et mentor engagé, il inspire la jeunesse africaine à croire en ses
                    capacités, à se dépasser et à devenir les leaders de demain. Sa vie et ses actions
                    s’articulent autour d’une devise claire :
                  </p>

                  <p>
                    "S’unir pour servir, déterminé pour construire."
                  </p>

                  <p>
                    Décrire Habib Aboukhedoud en 4 mots : Humble, Rigoureux, Déterminé, Patriote.
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
