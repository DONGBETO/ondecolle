// Configuration centrale du site : à modifier ici une seule fois
// plutôt que dans chaque page.

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  // Fourni automatiquement par Vercel en production.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Fondation Habib",
  movement: "Ensemble, on décolle",
  url: resolveSiteUrl(),
  description:
    "Plateforme officielle de la Fondation Habib dédiée à la jeunesse, l’innovation et l’entrepreneuriat.",
  ogImage: "/assets/images/team/team_image.jpg",
  logo: "/assets/logos/logoo.png",
  mission:
    "Notre mission : détecter, accompagner et propulser la jeunesse africaine vers le succès.",
  contact: {
    email: "contact@ondecolle.com",
    phone: "+229 01 61 93 93 10",
    address: "Cotonou - Fidjrossè (Bénin)",
  },
  socials: {
    facebook: "https://www.facebook.com/habib.aboukhedoud",
    instagram: "https://www.instagram.com/habib_aboukhedoud",
    linkedin: "https://www.linkedin.com/in/habib-aboukhedoud-b7044a186",
    tiktok: "https://www.tiktok.com/@habibaboukhedoud",
  },
};

export const navLinks = [
  { label: "Bibliothèque", href: "/actualites/bibliotheque" },
  { label: "Évènements", href: "/actualites/evenements" },
  { label: "Projets", href: "/projets" },
  { label: "Blog", href: "/actualites/blog" },
  { label: "Contacts", href: "/contacts" },
  { label: "À propos", href: "/a-propos" },
];
