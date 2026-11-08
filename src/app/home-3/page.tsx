import AboutV3 from "@/components/about/AboutV3";
import BannerV3 from "@/components/banner/BannerV3";
import BlogV4 from "@/components/blog/BlogV4";
import FeatureV2 from "@/components/feature/FeatureV2";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV3 from "@/components/header/HeaderV3";
import MissionV1 from "@/components/mission/MissionV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import ServiceV3 from "@/components/services/ServiceV3";
import TeamV2 from "@/components/team/TeamV2";
import TechnologyV1 from "@/components/technology/TechnologyV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

export const metadata = {
    title: "Tekni - Home 3"
};

const Home3Page = () => {
    return (
        <>
            <HeaderV3 />
            <BannerV3 />
            <FeatureV2 />
            <AboutV3 />
            <ServiceV3 />
            <TechnologyV1 />
            <TeamV2 />
            <PartnerV1 sectionClass="default-padding" />
            <MissionV1 />
            <TestimonialV1 />
            <BlogV4 />
            <FooterV1 />
        </>
    );
};

export default Home3Page;