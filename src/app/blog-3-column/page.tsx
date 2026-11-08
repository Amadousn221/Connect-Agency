import Blog3ColumnContent from "@/components/blog/Blog3ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { Suspense } from "react";

export const metadata = {
    title: "Tekni - Blog 3 Column"
};


const Blog3ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Grid" breadCrumb="blog-3-column" />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <Blog3ColumnContent />
                </Suspense>
            </LayoutV1>
        </>
    );
};

export default Blog3ColumnPage;