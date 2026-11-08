import AboutV1 from "@/components/about/AboutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import ProcessV1 from "@/components/process/ProcessV1";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

export const metadata = {
    title: "Tekni - About Us"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About Us" breadCrumb="about-us" />
                <AboutV1 />
                <ProcessV1 sectionClass="bg-gray bg-cover" />
                <PartnerV1 sectionClass="default-padding" />
                <TeamV1 hasBg={true} hasTitle={true} />
                <TestimonialV1 />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;