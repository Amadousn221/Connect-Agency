import AboutV1 from "@/components/about/AboutV1";
import BannerV1 from "@/components/banner/BannerV1";
import ServiceV1 from "@/components/services/ServiceV1";
import ProcessV1 from "@/components/process/ProcessV1";
import WhyChooseV1 from "@/components/choose/WhyChooseV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import TeamV1 from "@/components/team/TeamV1";
import ProjectV1 from "@/components/project/ProjectV1";
import CtaV1 from "@/components/cta/CtaV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";
import BlogV1 from "@/components/blog/BlogV1";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Tekni - IT Solutions & Services Template"
};

const Home1Page = () => {
    return (
        <>
            <LayoutV1>
                <BannerV1 />
                <AboutV1 />
                <ServiceV1 />
                <ProcessV1 />
                <WhyChooseV1 />
                <PartnerV1 sectionClass="default-padding" />
                <TeamV1 hasBg={true} hasTitle={true} />
                <ProjectV1 />
                <CtaV1 />
                <TestimonialV1 />
                <BlogV1 hasBg={true} sectionClass="bg-gray" />
            </LayoutV1>
        </>
    );
};

export default Home1Page;