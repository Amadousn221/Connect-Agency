import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FaqPageContent from "@/components/faq/FaqPageContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Tekni - Faq"
};

const FaqPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Frequently Asked Question" breadCrumb="faq" />
                <FaqPageContent />
            </LayoutV1>
        </>
    );
};

export default FaqPage;