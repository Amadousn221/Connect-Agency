import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { Suspense } from "react";

export const metadata = {
    title: "Tekni - Blog Standard"
};

const BlogStandardPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Grid" breadCrumb="blog-2-column" />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <BlogStandardContent />
                </Suspense>
            </LayoutV1>
        </>
    );
};

export default BlogStandardPage;