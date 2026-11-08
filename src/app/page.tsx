// Accueil Connect Web — en cours d'assemblage (CW-041). Sections choisies par Amadou, une à une.
// Non indexé tant que l'accueil n'est pas validé et publiable.
import HomeAgency from "@/components/about/HomeAgency";
import HomeHero from "@/components/banner/HomeHero";
import SiteLayout from "@/components/layouts/SiteLayout";

export const metadata = {
    robots: { index: false, follow: false },
};

export default function HomePage() {
    return (
        <SiteLayout>
            <HomeHero />
            <HomeAgency />
        </SiteLayout>
    );
}
