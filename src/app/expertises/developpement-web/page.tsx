// Page du pôle « Développement web & e-commerce » (/expertises/developpement-web) — gabarit ServicePage.
// Non indexée tant que le site n'est pas validé.
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { developpementWebPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: developpementWebPage.meta.title,
    description: developpementWebPage.meta.description,
    alternates: { canonical: developpementWebPage.canonical },
    robots: { index: false, follow: false },
};

export default function DeveloppementWebPage() {
    return <ServicePage page={developpementWebPage} />;
}
