import AboutV5 from "@/components/about/AboutV5";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProcessV1 from "@/components/process/ProcessV1";
import SkillV1 from "@/components/skills/SkillV1";
import TeamV3 from "@/components/team/TeamV3";
import TestimonialV4 from "@/components/testimonial/TestimonialV4";

export const metadata = {
    title: "Tekni - About Us 5"
};

const AboutUs5Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About Us 5" breadCrumb="about-us-5" />
                <AboutV5 />
                <SkillV1 />
                <ProcessV1 sectionClass="bg-gray" />
                <TeamV3 hasTitle={true} />
                <TestimonialV4 />
            </LayoutV1>
        </>
    );
};

export default AboutUs5Page;