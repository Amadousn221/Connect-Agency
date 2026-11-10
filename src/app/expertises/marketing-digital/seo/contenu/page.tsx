// Page de service — gabarit ServicePage. Non indexée tant que le site n'est pas validé (statut PROPOSÉ).
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { seoContenuPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: seoContenuPage.meta.title,
    description: seoContenuPage.meta.description,
    alternates: { canonical: seoContenuPage.canonical },
    robots: { index: false, follow: false },
};

export default function SeoContenuPage() {
    return <ServicePage page={seoContenuPage} />;
}
