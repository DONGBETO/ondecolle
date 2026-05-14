import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import EventDetail from "@/src/components/detailEvent";
import { events } from "@/src/data/event";
import Footer from "@/src/components/Footer";
import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return {
      title: "Évènement introuvable",
      description: "Cet évènement n'existe pas.",
    };
  }

  return {
    title: `${event.title} | Évènements`,
    description: event.description,

    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.image],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.image],
    },
  };
}

type Props = {
  params: {
    slug: string;
  };
};

export const dynamic = "force-static";

export default async function EventDetailPage({
  params,
}: Props) {
  const { slug } = params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();
  return (
        <main>
          <Navbar />
          <Hero 
            title="Détails de l'évènement"
            image="/assets/images/hero_image_home.jpg"
            overlay={true}
          />
        <EventDetail event={event} />

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
              { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/habib.aboukhedoud?rdid=Qlwp9rC6zFwqE4bA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvTBznrbT%2F#", target: "_blank" },
              { icon: <FaInstagram size={18} />, href: "https://instagram.com/habib_aboukhedoud?igsh=MWxheWNzenFpeWl4Yg==", target: "_blank" },
              { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/habib-aboukhedoud-b7044a186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", target: "_blank" },
              { icon: <Music2 size={18} />, href: "https://www.tiktok.com/@habibaboukhedoud?_r=1&_t=ZM-923QmkKsrxT", target: "_blank" }, 
            ]}
        />
      </main>
  );
}
