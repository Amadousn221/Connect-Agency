// Page de service — gabarit ServicePage. Non indexée tant que le site n'est pas validé (statut PROPOSÉ).
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { seoAuditPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: seoAuditPage.meta.title,
    description: seoAuditPage.meta.description,
    alternates: { canonical: seoAuditPage.canonical },
    robots: { index: false, follow: false },
};

export default function SeoAuditPage() {
    return <ServicePage page={seoAuditPage} />;
}
