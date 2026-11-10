// Accueil Connect Web — en cours d'assemblage (CW-041). Sections choisies par Amadou, une à une.
// Non indexé tant que l'accueil n'est pas validé et publiable.
import HomeAgency from "@/components/about/HomeAgency";
import HomeHero from "@/components/banner/HomeHero";
import HomeMethod from "@/components/choose/HomeMethod";
import HomeWhy from "@/components/choose/HomeWhy";
import HomeStats from "@/components/fact/HomeStats";
import HomeExpertises from "@/components/feature/HomeExpertises";
import HomeRealisations from "@/components/project/HomeRealisations";
import HomeTechnologies from "@/components/technology/HomeTechnologies";
import HomeBlog from "@/components/blog/HomeBlog";
import SiteContact from "@/components/contact/SiteContact";
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
            {/* Section « Ce que nous réalisons pour vous » masquée le 10/11/2026 (demande d'Amadou). Pour la rétablir : importer HomeServices
                (components/services/HomeServices.tsx, conservé) et l'afficher ici. */}
            <HomeTechnologies />
            <HomeWhy />
            <HomeMethod />
            <HomeStats />
            <HomeRealisations />
            <HomeBlog />
            <SiteContact />
        </SiteLayout>
    );
}
