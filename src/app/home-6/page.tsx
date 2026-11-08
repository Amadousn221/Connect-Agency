import AboutV5 from "@/components/about/AboutV5";
import BannerV6 from "@/components/banner/BannerV6";
import BlogV3 from "@/components/blog/BlogV3";
import WhyChooseV4 from "@/components/choose/WhyChooseV4";
import ExerciseV1 from "@/components/exercise/ExerciseV1";
import FooterV2 from "@/components/footer/FooterV2";
import HeaderV6 from "@/components/header/HeaderV6";
import PartnerV2 from "@/components/partner/PartnerV2";
import ProjectV3 from "@/components/project/ProjectV3";
import ServiceV6 from "@/components/services/ServiceV6";
import TeamV4 from "@/components/team/TeamV4";
import TechnologyV2 from "@/components/technology/TechnologyV2";

export const metadata = {
    title: "Tekni - Home 6"
};

const Home6Page = () => {
    return (
        <>
            <div className="color-style-two">
                <HeaderV6 />
                <BannerV6 />
                <PartnerV2 sectionClass="default-padding-top" />
                <AboutV5 />
                <ServiceV6 hasTitle={true} sectionClass="default-padding" hasBg={true} />
                <WhyChooseV4 />
                <ExerciseV1 />
                <TechnologyV2 />
                <TeamV4 hasTitle={true} />
                <ProjectV3 hasTitle={true} />
                <BlogV3 />
                <FooterV2 />
            </div>
        </>
    );
};

export default Home6Page;