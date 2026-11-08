import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamDetailsContent from "@/components/team/TeamDetailsContent";
import TeamV4Data from "@/assets/jsonData/team/TeamV4Data.json";

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

export const metadata = {
    title: "Tekni - Team Details"
};

const TeamDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamV4Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Team Members" breadCrumb="team-details" />
                {data && <TeamDetailsContent teamInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default TeamDetailsPage;