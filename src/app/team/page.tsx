import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV1 from "@/components/team/TeamV1";

export const metadata = {
    title: "Tekni - Team"
};

const TeamPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Team Members" breadCrumb="team" />
                <TeamV1 fullTeam={true} />
            </LayoutV1>
        </>
    );
};

export default TeamPage;