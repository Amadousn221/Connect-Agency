import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProcessV2 from "@/components/process/ProcessV2";
import ProjectV4 from "@/components/project/ProjectV4";
import TeamV3 from "@/components/team/TeamV3";

export const metadata = {
    title: "Tekni - Project 2"
};

const Project2Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Projects" breadCrumb="project-2" />
                <ProjectV4 />
                <ProcessV2 />
                <TeamV3 hasTitle={true} />
            </LayoutV1>
        </>
    );
};

export default Project2Page;