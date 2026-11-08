import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV4 from "@/components/team/TeamV4";

export const metadata = {
    title: "Tekni - Team 4"
};

const Team4Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Team Details" breadCrumb="team-4" />
                <TeamV4 fullTeam={true} />
            </LayoutV1>
        </>
    );
};

export default Team4Page;