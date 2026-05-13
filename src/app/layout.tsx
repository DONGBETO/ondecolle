import "./globals.css";
import { Poppins } from "next/font/google";
import Analytics from "@/src/components/analytic";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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