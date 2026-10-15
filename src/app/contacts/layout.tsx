import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Contactez l’équipe d’« Ensemble, on décolle » pour soumettre votre projet, devenir partenaire ou rejoindre la communauté.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
