import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectV2 from "@/components/project/ProjectV2";

export const metadata = {
    title: "Tekni - Project 3"
};

const Project3Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Projects" breadCrumb="project-3" />
                <ProjectV2 />
            </LayoutV1>
        </>
    );
};

export default Project3Page;