import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/json-ld";
import "@/styles/globals.css";

// Police d'affichage : Space Grotesk en attendant Clash Display / General Sans
// (fichiers .woff2 auto-hébergés à fournir par le client — cf. prompt d'intégration §4).
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO (client) : définir metadataBase une fois le domaine de production connu.
  title: {
    default: "Connect Web — Agence digitale à Dakar | Sites, e-commerce, IA & automatisation",
    template: "%s | Connect Web",
  },
  description:
    "Agence digitale à Dakar. Sites web, e-commerce, IA, automatisation, CRM/ERP. Une seule équipe pour digitaliser votre entreprise.",
  openGraph: {
    title: "Connect Web — Agence digitale à Dakar",
    description:
      "Sites web, e-commerce, IA, automatisation, CRM/ERP. Une seule équipe pour digitaliser votre entreprise.",
    locale: "fr_SN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070C11" },
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
  ],
};

/* Anti-FOUC : applique le thème sauvegardé avant l'hydration React */
const ANTI_FOUC = `(function(){try{var t=localStorage.getItem('cw-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
