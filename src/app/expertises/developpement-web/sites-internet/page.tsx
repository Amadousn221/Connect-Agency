// Page « Création de sites internet » (/expertises/developpement-web/sites-internet) — gabarit ServicePage.
// Regroupe les captures « conception de site web » et « site vitrine » de la référence. Non indexée tant que le site n'est pas validé.
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { sitesInternetPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: sitesInternetPage.meta.title,
    description: sitesInternetPage.meta.description,
    alternates: { canonical: sitesInternetPage.canonical },
    robots: { index: false, follow: false },
};

export default function SitesInternetPage() {
    return <ServicePage page={sitesInternetPage} />;
}
