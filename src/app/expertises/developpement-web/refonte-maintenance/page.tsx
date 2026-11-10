// Page de service — gabarit ServicePage. Non indexée tant que le site n'est pas validé (statut PROPOSÉ).
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { refonteMaintenancePage } from "@/content/services-pages";

export const metadata: Metadata = {
    title: refonteMaintenancePage.meta.title,
    description: refonteMaintenancePage.meta.description,
    alternates: { canonical: refonteMaintenancePage.canonical },
    robots: { index: false, follow: false },
};

export default function RefonteMaintenancePage() {
    return <ServicePage page={refonteMaintenancePage} />;
}
