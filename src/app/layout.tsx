import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import Analytics from "@/src/components/analytic";
import { GA_MEASUREMENT_ID } from "@/src/lib/gtag";
import { siteConfig } from "@/src/config/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // Permet d'utiliser des chemins relatifs pour les images Open Graph / Twitter.
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: ["Fondation", "Jeunesse", "Entrepreneuriat", "Bénin", "Ensemble on décolle"],

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        {/* GOOGLE ANALYTICS */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Analytics />

        {children}
      </body>
    </html>
  );
}
