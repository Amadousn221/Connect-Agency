import Link from "next/link";
import SplitText from "../animation/SplitText";
import AchievementFact from "../fact/AchievementFact";
import AchievementData from "@/assets/jsonData/achievement/AchievementData.json"

const CtaV1 = () => {
    return (
        <>
            <div className="request-call-back-area bg-dark text-light default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h2 className="">
                                <SplitText
                                    delay={10}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                >Looking for First-Class<br />Business Consultant?
                                </SplitText>
                            </h2>
                            <Link className="btn btn-theme btn-md radius animation" data-aos="fade-up" data-aos-delay="100" href="/contact-us">Request a Call</Link>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="achivement-counter text-light">
                                <ul>
                                    {AchievementData.map(achievement =>
                                        <AchievementFact achievement={achievement} key={achievement.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaV1;