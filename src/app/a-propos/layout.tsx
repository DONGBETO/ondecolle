import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le mouvement citoyen « Ensemble, on décolle » : notre engagement, notre mission, notre vision et notre équipe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
