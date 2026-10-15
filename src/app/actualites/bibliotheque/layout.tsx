import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibliothèque",
  description:
    "Téléchargez gratuitement nos ressources : livres, guides et outils pour développer vos compétences et vos projets.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
