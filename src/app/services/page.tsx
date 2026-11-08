import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import CtaV1 from "@/components/cta/CtaV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import PriceV1 from "@/components/price/PriceV1";
import ProcessV1 from "@/components/process/ProcessV1";
import ServiceV1 from "@/components/services/ServiceV1";
import TeamV1 from "@/components/team/TeamV1";

export const metadata = {
    title: "Tekni - Services"
};

const ServicesPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Services" breadCrumb="services" />
                <ServiceV1 />
                <ProcessV1 />
                <PartnerV1 sectionClass="default-padding" hasBg={true} />
                <TeamV1 hasTitle={true} />
                <CtaV1 />
                <PriceV1 hasTitle={true} hasBg={true} />
            </LayoutV1>
        </>
    );
};

export default ServicesPage;