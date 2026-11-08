import AboutV4 from "@/components/about/AboutV4";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import ProcessV2 from "@/components/process/ProcessV2";
import TeamV3 from "@/components/team/TeamV3";
import TestimonialV4 from "@/components/testimonial/TestimonialV4";

export const metadata = {
    title: "Tekni - About Us 4"
};

const AboutUs4Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About Us 4" breadCrumb="about-us-4" />
                <AboutV4 />
                <ProcessV2 />
                <PartnerV1 sectionClass="default-padding" hasBg={true} />
                <TeamV3 hasTitle={true} />
                <TestimonialV4 />
            </LayoutV1>
        </>
    );
};

export default AboutUs4Page;