// Page de service — gabarit ServicePage. Non indexée tant que le site n'est pas validé (statut PROPOSÉ).
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { landingPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: landingPage.meta.title,
    description: landingPage.meta.description,
    alternates: { canonical: landingPage.canonical },
    robots: { index: false, follow: false },
};

export default function LandingPagePage() {
    return <ServicePage page={landingPage} />;
}
