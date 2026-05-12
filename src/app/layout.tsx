import "./globals.css";
import { Poppins } from "next/font/google";
import Analytics from "@/src/components/analytic";
import type { Metadata } from "next";
import SEO from "@/src/config/next-seo.config";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fondation Habib",

  description:
    "Plateforme officielle de la Fondation Habib dédiée à la jeunesse, l’innovation et l’entrepreneuriat.",

  keywords: [
    "Fondation",
    "Jeunesse",
    "Entrepreneuriat",
    "Bénin",
  ],

  openGraph: {
    title: "Fondation Habib",

    description:
      "Plateforme officielle de la Fondation Habib.",

    url: "https://monsite.com",

    siteName: "Fondation Habib",

    images: [
      {
        url: "/assets/images/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Fondation Habib",
      },
    ],

    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Fondation Habib",

    description:
      "Plateforme officielle de la Fondation Habib.",

    images: ["/assets/images/cover.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">

      <head>

        {/* GOOGLE ANALYTICS SCRIPT */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QNVS3YYHHR"></script>


        {/* GOOGLE ANALYTICS CONFIG */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-QNVS3YYHHR');
          `}
        </Script>

      </head>

      <body className={poppins.className}>

        <Analytics />

        {children}

      </body>
    </html>
  );
}