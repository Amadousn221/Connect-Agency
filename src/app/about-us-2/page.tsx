import AboutV2 from '@/components/about/AboutV2';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PartnerV1 from '@/components/partner/PartnerV1';
import ProcessV2 from '@/components/process/ProcessV2';
import TeamV4 from '@/components/team/TeamV4';
import TestimonialV4 from '@/components/testimonial/TestimonialV4';

export const metadata = {
    title: "Tekni - About Us 2"
};

const AboutUs2Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About Us 2" breadCrumb="about-us-2" />
                <AboutV2 />
                <ProcessV2 />
                <PartnerV1 sectionClass="default-padding" hasBg={true} />
                <TeamV4 hasTitle={true} />
                <TestimonialV4 />
            </LayoutV1>
        </>
    );
};

export default AboutUs2Page;