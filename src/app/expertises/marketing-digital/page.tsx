// Page « Marketing digital & automatisation » (/expertises/marketing-digital) — gabarit ServicePage. Non indexée tant que le site n'est pas validé.
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { marketingPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: marketingPage.meta.title,
    description: marketingPage.meta.description,
    alternates: { canonical: marketingPage.canonical },
    robots: { index: false, follow: false },
};

export default function MarketingPage() {
    return <ServicePage page={marketingPage} />;
}
