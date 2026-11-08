import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import ProjectV2Data from "@/assets/jsonData/project/ProjectV2Data.json"

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ProjectV2Data.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Projects" breadCrumb="project-details" />
                {data && <ProjectDetailsContent projectInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;