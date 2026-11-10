// Page du pôle « Digitalisation & Solutions Métiers » (/expertises/digitalisation) — gabarit ServicePage, comme la page
// Développement web & e-commerce (référence demandée par Amadou le 10/11/2026). Contenus : content/services-pages.ts.
// L'ancienne page (hero, scénarios interactifs, formulaire) est remplacée ; ses composants et son contenu
// (components/digitalisation, content/digitalisation.ts) restent dans le dépôt.
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { digitalisationPageData } from "@/content/services-pages";

export const metadata: Metadata = {
    title: digitalisationPageData.meta.title,
    description: digitalisationPageData.meta.description,
    alternates: { canonical: digitalisationPageData.canonical },
    robots: { index: false, follow: false },
};

export default function DigitalisationPage() {
    return <ServicePage page={digitalisationPageData} />;
}
