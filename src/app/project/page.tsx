import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProcessV2 from "@/components/process/ProcessV2";
import ProjectV3 from "@/components/project/ProjectV3";
import TeamV3 from "@/components/team/TeamV3";

export const metadata = {
    title: "Tekni - Project"
};

const ProjectPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Projects" breadCrumb="project" />
                <ProjectV3 />
                <ProcessV2 />
                <TeamV3 hasTitle={true} />
            </LayoutV1>
        </>
    );
};

export default ProjectPage;