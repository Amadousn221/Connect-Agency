import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ContactV2 from "@/components/contact/ContactV2";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Map from "@/components/map/Map";

export const metadata = {
    title: "Tekni - Contact Us"
};

const ContactPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Contact Us" breadCrumb="contact-us" />
                <ContactV2 />
                <Map />
            </LayoutV1>
        </>
    );
};

export default ContactPage;