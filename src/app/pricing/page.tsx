import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import WhyChooseV1 from "@/components/choose/WhyChooseV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV1 from "@/components/price/PriceV1";
import TestimonialV4 from "@/components/testimonial/TestimonialV4";

export const metadata = {
    title: "Tekni - Pricing"
};

const PricingPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Pricing Plan" breadCrumb="pricing" />
                <PriceV1 />
                <WhyChooseV1 />
                <TestimonialV4 />
            </LayoutV1>
        </>
    );
};

export default PricingPage;