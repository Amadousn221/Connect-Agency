import MissionV2Data from "@/assets/jsonData/mission/MissionV2Data.json"
import MissionV2TabContent from "./MissionV2TabContent";
import MissionV2TabNav from "./MissionV2TabNav";
import SplitText from "../animation/SplitText";

const MissionV2 = () => {
    return (
        <>
            <div className="mission-vison-area default-padding bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-6.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">About Company</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Big data analysis and <br /> real time data solutions
                                    </SplitText>
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mission-vision-items">
                                <div className="mission-vission-navs text-center">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        {MissionV2Data.tabNav.map(data =>
                                            <MissionV2TabNav data={data} key={data.id} />
                                        )}
                                    </ul>
                                </div>
                                <div className="mission-style-two-tab-content">
                                    <div className="tab-content" id="myTabContent">
                                        {MissionV2Data.tabContent.map(data =>
                                            <MissionV2TabContent data={data} key={data.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionV2;