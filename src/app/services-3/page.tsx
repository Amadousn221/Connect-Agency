import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import CtaV1 from "@/components/cta/CtaV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import PriceV2 from "@/components/price/PriceV2";
import ProcessV2 from "@/components/process/ProcessV2";
import ServiceV4 from "@/components/services/ServiceV4";
import TeamV3 from "@/components/team/TeamV3";

export const metadata = {
    title: "Tekni - Services 3"
};

const Service3Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Services" breadCrumb="services-2" />
                <ServiceV4 sectionClass="default-padding-top" />
                <ProcessV2 />
                <PriceV2 hasTitle={true} />
                <PartnerV1 sectionClass="default-padding-bottom bg-gray" />
                <CtaV1 />
                <TeamV3 hasTitle={true} />
            </LayoutV1>
        </>
    );
};

export default Service3Page;