import AboutV4 from "@/components/about/AboutV4";
import BannerV4 from "@/components/banner/BannerV4";
import BlogV3 from "@/components/blog/BlogV3";
import FeatureV3 from "@/components/feature/FeatureV3";
import FooterV2 from "@/components/footer/FooterV2";
import HeaderV4 from "@/components/header/HeaderV4";
import PartnerV1 from "@/components/partner/PartnerV1";
import PriceV2 from "@/components/price/PriceV2";
import ProcessV2 from "@/components/process/ProcessV2";
import ProjectV4 from "@/components/project/ProjectV4";
import ServiceV4 from "@/components/services/ServiceV4";
import TestimonialV3 from "@/components/testimonial/TestimonialV3";

export const metadata = {
    title: "Tekni - Home 4"
};

const Home4Page = () => {
    return (
        <>
            <HeaderV4 />
            <BannerV4 />
            <FeatureV3 />
            <AboutV4 />
            <ProcessV2 />
            <ServiceV4 sectionClass="default-padding" />
            <ProjectV4 hasTitle={true} />
            <PriceV2 hasTitle={true} />
            <PartnerV1 sectionClass="default-padding" />
            <TestimonialV3 />
            <BlogV3 />
            <FooterV2 />
        </>
    );
};

export default Home4Page;