// Accueil Connect Web — en cours d'assemblage (CW-041). Sections choisies par Amadou, une à une.
// Non indexé tant que l'accueil n'est pas validé et publiable.
import HomeAgency from "@/components/about/HomeAgency";
import HomeHero from "@/components/banner/HomeHero";
import HomeMethod from "@/components/choose/HomeMethod";
import HomeWhy from "@/components/choose/HomeWhy";
import HomeStats from "@/components/fact/HomeStats";
import HomeExpertises from "@/components/feature/HomeExpertises";
import HomeRealisations from "@/components/project/HomeRealisations";
import HomeServices from "@/components/services/HomeServices";
import HomeBlog from "@/components/blog/HomeBlog";
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
            <HomeWhy />
            <HomeMethod />
            <HomeStats />
            <HomeRealisations />
            <HomeBlog />
        </SiteLayout>
    );
}
