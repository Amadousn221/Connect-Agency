import TeamV4Data from "@/assets/jsonData/team/TeamV4Data.json"
import SingleTeamV4 from "./SingleTeamV4";
import SplitText from "../animation/SplitText";

interface DataType {
    hasTitle?: boolean;
    fullTeam?: boolean;
}

const TeamV4 = ({ hasTitle, fullTeam }: DataType) => {

    // Conditional data
    const teamList = fullTeam ? TeamV4Data : TeamV4Data.slice(0, 4);

    return (
        <>
            <div className="team-style-four-area default-padding bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/55.png)' }}>

                {hasTitle && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Team Members</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Our awesome technology <br />Team experts
                                        </SplitText>
                                    </h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container">
                    <div className="team-style-two-items">
                        <div className="row">
                            {teamList.map(team =>
                                <div className="col-xl-3 col-lg-6 col-md-6 team-style-four-item" key={team.id}>
                                    <SingleTeamV4 team={team} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV4;