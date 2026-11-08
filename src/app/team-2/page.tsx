import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV2 from "@/components/team/TeamV2";

export const metadata = {
    title: "Tekni - Team 2"
};

const Team2Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Team Members" breadCrumb="team-2" />
                <TeamV2 />
            </LayoutV1>
        </>
    );
};

export default Team2Page;