import BannerV5 from "@/components/banner/BannerV5";
import BlogV1 from "@/components/blog/BlogV1";
import WhyChooseV3 from "@/components/choose/WhyChooseV3";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV5 from "@/components/header/HeaderV5";
import MissionV2 from "@/components/mission/MissionV2";
import PartnerV2 from "@/components/partner/PartnerV2";
import ProcessV3 from "@/components/process/ProcessV3";
import ServiceV5 from "@/components/services/ServiceV5";
import SkillV1 from "@/components/skills/SkillV1";
import TeamV3 from "@/components/team/TeamV3";
import TestimonialV4 from "@/components/testimonial/TestimonialV4";

export const metadata = {
    title: "Tekni - Home 5"
};

const Home5Page = () => {
    return (
        <>
            <HeaderV5 />
            <BannerV5 />
            <ServiceV5 />
            <MissionV2 />
            <WhyChooseV3 />
            <ProcessV3 />
            <SkillV1 />
            <TeamV3 hasTitle={true} />
            <TestimonialV4 />
            <PartnerV2 />
            <BlogV1 />
            <FooterV1 />
        </>
    );
};

export default Home5Page;