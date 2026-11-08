"use client"
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ErrorPageContent from "@/components/error/ErrorPageContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

const ErrorPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Error Page" breadCrumb="error" />
                <ErrorPageContent />
            </LayoutV1>
        </>
    );
};

export default ErrorPage;