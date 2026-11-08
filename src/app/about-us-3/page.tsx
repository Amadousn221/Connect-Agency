import AboutV3 from '@/components/about/AboutV3';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FeatureV3 from '@/components/feature/FeatureV3';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PartnerV1 from '@/components/partner/PartnerV1';
import ProcessV2 from '@/components/process/ProcessV2';
import TeamV4 from '@/components/team/TeamV4';
import TestimonialV4 from '@/components/testimonial/TestimonialV4';

export const metadata = {
    title: "Tekni - About Us 3"
};

const AboutUs3page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About Us 3" breadCrumb="about-us-3" />
                <AboutV3 />
                <FeatureV3 sectionClass='default-padding full-border' />
                <ProcessV2 />
                <PartnerV1 hasBg={true} sectionClass="default-padding" />
                <TeamV4 hasTitle={true} />
                <TestimonialV4 />
            </LayoutV1>
        </>
    );
};

export default AboutUs3page;