// Page « Infrastructure & solutions IT » (/expertises/infrastructure-it) — gabarit ServicePage. Non indexée tant que le site n'est pas validé.
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { infrastructurePage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: infrastructurePage.meta.title,
    description: infrastructurePage.meta.description,
    alternates: { canonical: infrastructurePage.canonical },
    robots: { index: false, follow: false },
};

export default function InfrastructurePage() {
    return <ServicePage page={infrastructurePage} />;
}
