import Image from "next/image";
import TechnologyV1Data from "@/assets/jsonData/technology/TechnologyV1Data.json";
import SingleTechnologyV1 from "./SingleTechnologyV1";
import SplitText from "../animation/SplitText";

const TechnologyV1 = () => {
    return (
        <>
            <div className="technology-index-area default-padding bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/20.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 pr-60 pr-md-15 pr-xs-15">
                            <div className="thumb-style-one" data-aos="fade-right">
                                <Image src="/assets/img/about/1.png" alt="Image Not Found" width={600} height={755} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="sub-title">Technology Index</h4>
                            <h2 className="title split-text">
                                <SplitText
                                    delay={10}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                >
                                    We’re using latest technology in projects
                                </SplitText>
                            </h2>
                            <div data-aos="fade-up" data-aos-delay="100">
                                <p>
                                    Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                                </p>
                                <ul className="tech-index-items">
                                    {TechnologyV1Data.map(tech =>
                                        <SingleTechnologyV1 key={tech.id} tech={tech} />
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

export default TechnologyV1;