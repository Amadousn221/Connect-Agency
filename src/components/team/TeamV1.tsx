import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json";
import SingleTeamV1 from "./SingleTeamV1";
import SplitText from "../animation/SplitText";

interface DataType {
    hasTitle?: boolean;
    fullTeam?: boolean;
    hasBg?: boolean;
}

const TeamV1 = ({ hasTitle, fullTeam, hasBg }: DataType) => {

    // Conditional data
    const teamList = fullTeam ? TeamV1Data : TeamV1Data.slice(0, 4);

    return (
        <div
            className={`team-style-onea-rea default-padding-top pb-70 pb-xs-0 bg-cover ${hasBg ? "team1-bg" : ""}`}
        >
            {hasTitle && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Team Members</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={15}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Meet our experts
                                    </SplitText>
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container">
                <div className="row">
                    {teamList.map((team) => (
                        <div className="col-xl-3 col-md-6" key={team.id}>
                            <SingleTeamV1 team={team} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamV1;
