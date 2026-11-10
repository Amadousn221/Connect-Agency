// Page de service — gabarit ServicePage. Non indexée tant que le site n'est pas validé (statut PROPOSÉ).
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { shopifyWoocommercePage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: shopifyWoocommercePage.meta.title,
    description: shopifyWoocommercePage.meta.description,
    alternates: { canonical: shopifyWoocommercePage.canonical },
    robots: { index: false, follow: false },
};

export default function ShopifyWoocommercePage() {
    return <ServicePage page={shopifyWoocommercePage} />;
}
