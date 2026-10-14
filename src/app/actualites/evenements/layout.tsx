import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Évènements",
  description:
    "Conférences, ateliers et rencontres organisés avec le Commandant Habib Aboukhedoud et les jeunes du Bénin.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
