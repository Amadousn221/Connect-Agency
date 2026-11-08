import BlogWithSidebarContent from "@/components/blog/BlogWithSidebarContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { Suspense } from "react";

export const metadata = {
    title: "Tekni - Blog With Sidebar"
};

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Grid" breadCrumb="blog-with-sidebar" />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <BlogWithSidebarContent />
                </Suspense>
            </LayoutV1>
        </>
    );
};

export default BlogWithSidebarPage;