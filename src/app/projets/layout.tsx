import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets portés par « Ensemble, on décolle » pour accompagner, connecter et propulser la jeunesse africaine.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
