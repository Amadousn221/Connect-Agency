import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import WhyChooseV1 from "@/components/choose/WhyChooseV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import PriceV2 from "@/components/price/PriceV2";
import TestimonialV4 from "@/components/testimonial/TestimonialV4";

export const metadata = {
    title: "Tekni - Pricing 2"
};

const Pricing2page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Pricing Plan" breadCrumb="pricing-2" />
                <PriceV2 />
                <PartnerV1 sectionClass="default-padding" />
                <WhyChooseV1 />
                <TestimonialV4 />
            </LayoutV1>
        </>
    );
};

export default Pricing2page;