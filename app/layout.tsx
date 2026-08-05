import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  // TODO (client) : définir metadataBase une fois le domaine de production connu.
  title: {
    default: "Connect Web — Agence digitale à Dakar",
    template: "%s | Connect Web",
  },
  description:
    "Agence digitale à Dakar : sites web, logiciels sur mesure, IA & automatisation, CRM/ERP, marketing et conseil, sous un même toit.",
};

/* Anti-FOUC : applique le thème sauvegardé avant l'hydration React */
const ANTI_FOUC = `(function(){try{var t=localStorage.getItem('cw-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" data-theme="dark" className={geist.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
