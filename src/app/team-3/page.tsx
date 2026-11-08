import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV3 from "@/components/team/TeamV3";

export const metadata = {
    title: "Tekni - Team 3"
};

const Team3Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Team Members" breadCrumb="team-3" />
                <TeamV3 fullTeam={true} />
            </LayoutV1>
        </>
    );
};

export default Team3Page;