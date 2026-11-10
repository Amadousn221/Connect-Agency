// Page de service — gabarit ServicePage. Non indexée tant que le site n'est pas validé (statut PROPOSÉ).
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { applicationsWebPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: applicationsWebPage.meta.title,
    description: applicationsWebPage.meta.description,
    alternates: { canonical: applicationsWebPage.canonical },
    robots: { index: false, follow: false },
};

export default function ApplicationsWebPage() {
    return <ServicePage page={applicationsWebPage} />;
}
