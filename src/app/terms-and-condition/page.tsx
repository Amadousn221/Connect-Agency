import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TermsContent from "@/components/terms/TermsContent";

export const metadata = {
    title: "Tekni - Terms & Condition"
};

const TermsAndCondition = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Terms & Condition" breadCrumb="terms-and-condition" />
                <TermsContent />
            </LayoutV1>
        </>
    );
};

export default TermsAndCondition;