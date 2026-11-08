import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { Suspense } from "react";

export const metadata = {
    title: "Tekni - Blog 2 Column"
};

const Blog2ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Grid" breadCrumb="blog-2-column" />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <Blog2ColumnContent />
                </Suspense>
            </LayoutV1>
        </>
    );
};

export default Blog2ColumnPage;