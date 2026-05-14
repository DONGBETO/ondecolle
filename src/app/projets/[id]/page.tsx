import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import ProjetDetail from "@/src/components/projetDetail";
import { projects } from "@/src/data/project";
import Footer from "@/src/components/Footer";
import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const projet = projects.find((p) => p.id === id);

  if (!projet) {
    return {
      title: "Projet introuvable",
      description: "Ce projet n'existe pas.",
    };
  }

  return {
    title: `${projet.title} | Projets`,
    description: projet.description,

    openGraph: {
      title: projet.title,
      description: projet.description,
      images: [projet.image || ""],
    },

    twitter: {
      card: "summary_large_image",
      title: projet.title,
      description: projet.description,
      images: [projet.image || ""],
    },
  };
}

export default async function Projet({
  params,
}: Props) {
  const { id } = await params;

  const projet = projects.find((p) => p.id === id);

  if (!projet) return notFound();

  return (
    <main>
      <Navbar />

      <Hero
        title={projet.title}
        image={projet.image || "/assets/images/hero_image_home.jpg"}
        overlay={true}
      />

      <ProjetDetail
        title={projet.title}
        description={projet.description}
      />

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
            href: "https://www.facebook.com/habib.aboukhedoud?rdid=Qlwp9rC6zFwqE4bA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvTBznrbT%2F#",
            target: "_blank",
          },
          {
            icon: <FaInstagram size={18} />,
            href: "https://instagram.com/habib_aboukhedoud?igsh=MWxheWNzenFpeWl4Yg==",
            target: "_blank",
          },
          {
            icon: <FaLinkedin size={18} />,
            href: "https://www.linkedin.com/in/habib-aboukhedoud-b7044a186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            target: "_blank",
          },
          {
            icon: <Music2 size={18} />,
            href: "https://www.tiktok.com/@habibaboukhedoud?_r=1&_t=ZM-923QmkKsrxT",
            target: "_blank",
          },
        ]}
      />
    </main>
  );
}