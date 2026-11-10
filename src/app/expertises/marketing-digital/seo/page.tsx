// Page « Référencement naturel (SEO) » (/expertises/marketing-digital/seo) — gabarit ServicePage. Non indexée tant que le site n'est pas validé.
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { seoPage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: seoPage.meta.title,
    description: seoPage.meta.description,
    alternates: { canonical: seoPage.canonical },
    robots: { index: false, follow: false },
};

export default function SeoPage() {
    return <ServicePage page={seoPage} />;
}
