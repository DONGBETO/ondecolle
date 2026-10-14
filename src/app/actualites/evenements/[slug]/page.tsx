import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import EventDetail from "@/src/components/detailEvent";
import { events } from "@/src/data/event";
import Footer from "@/src/components/Footer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

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

export const dynamic = "force-static";

export default async function EventDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <main>
      <Navbar />

      <Hero
        title="Détails de l'évènement"
        image="/assets/images/team/team_image.jpg"
        overlay={true}
      />

      <EventDetail event={event} />

      <Footer />
    </main>
  );
}