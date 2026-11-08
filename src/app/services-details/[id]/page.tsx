import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json"
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";

export const metadata = {
    title: "Tekni - Services Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ServicesV1Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Services" breadCrumb="services-details" />
                {data && <ServiceDetailsContent serviceInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsPage;