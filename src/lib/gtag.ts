// Google Analytics 4 — configuration centralisée.
// L'ID peut être surchargé via NEXT_PUBLIC_GA_ID (ex. pour un environnement de test).
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-QNVS3YYHHR";

// Envoie une page vue (navigation côté client).
export const pageview = (url: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
};

type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

// Envoie un évènement personnalisé.
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
