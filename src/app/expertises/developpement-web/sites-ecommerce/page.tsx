// Page « Création de sites e-commerce » (/expertises/developpement-web/sites-ecommerce) — gabarit ServicePage.
// Non indexée tant que le site n'est pas validé.
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { sitesEcommercePage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: sitesEcommercePage.meta.title,
    description: sitesEcommercePage.meta.description,
    alternates: { canonical: sitesEcommercePage.canonical },
    robots: { index: false, follow: false },
};

export default function SitesEcommercePage() {
    return <ServicePage page={sitesEcommercePage} />;
}
