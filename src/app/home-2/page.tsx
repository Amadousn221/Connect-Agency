import AboutV2 from "@/components/about/AboutV2";
import BannerV2 from "@/components/banner/BannerV2";
import BlogV2 from "@/components/blog/BlogV2";
import WhyChooseV2 from "@/components/choose/WhyChooseV2";
import ContactV1 from "@/components/contact/ContactV1";
import FunFactV1 from "@/components/fact/FunFactV1";
import FeatureV1 from "@/components/feature/FeatureV1";
import FooterV2 from "@/components/footer/FooterV2";
import HeaderV2 from "@/components/header/HeaderV2";
import PartnerV1 from "@/components/partner/PartnerV1";
import ProjectV2 from "@/components/project/ProjectV2";
import ServiceV2 from "@/components/services/ServiceV2";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";

export const metadata = {
    title: "Tekni - Home 2"
};

const Home2Page = () => {
    return (
        <>
            <HeaderV2 />
            <BannerV2 />
            <FeatureV1 />
            <ServiceV2 hasTitle={true} />
            <PartnerV1 sectionClass="default-padding" />
            <AboutV2 />
            <WhyChooseV2 />
            <TestimonialV2 />
            <ProjectV2 hasTitle={true} />
            <ContactV1 />
            <FunFactV1 />
            <BlogV2 />
            <FooterV2 />
        </>
    );
};

export default Home2Page;