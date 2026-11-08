// Accueil Connect Web — en cours d'assemblage (CW-041). Sections choisies par Amadou, une à une.
// Non indexé tant que l'accueil n'est pas validé et publiable.
import HomeAgency from "@/components/about/HomeAgency";
import HomeHero from "@/components/banner/HomeHero";
import HomeMethod from "@/components/choose/HomeMethod";
import HomeExpertises from "@/components/feature/HomeExpertises";
import HomeServices from "@/components/services/HomeServices";
import HomeSituations from "@/components/services/HomeSituations";
import SiteLayout from "@/components/layouts/SiteLayout";

export const metadata = {
    robots: { index: false, follow: false },
};

export default function HomePage() {
    return (
        <SiteLayout>
            <HomeHero />
            <HomeAgency />
            <HomeExpertises />
            <HomeServices />
            <HomeSituations />
            <HomeMethod />
        </SiteLayout>
    );
}
