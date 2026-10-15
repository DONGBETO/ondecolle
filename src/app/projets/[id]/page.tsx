import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import ProjetDetail from "@/src/components/projetDetail";
import { projects } from "@/src/data/project";
import Footer from "@/src/components/Footer";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.id)
    .map((p) => ({ id: p.id as string }));
}

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

  // Description courte (les descriptions de projets sont longues et multi-lignes).
  const description = projet.description.trim().replace(/\s+/g, " ").slice(0, 160);
  const images = projet.image ? [projet.image] : undefined;

  return {
    title: `${projet.title} | Projets`,
    description,

    openGraph: {
      title: projet.title,
      description,
      images,
    },

    twitter: {
      card: "summary_large_image",
      title: projet.title,
      description,
      images,
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

      <Footer />
    </main>
  );
}