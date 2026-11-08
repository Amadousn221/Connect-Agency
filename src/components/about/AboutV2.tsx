import Image from "next/image";
import AboutListData from "@/assets/jsonData/about/AboutListData.json"
import AboutList from "./AboutList";
import SplitText from "../animation/SplitText";

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding overflow-hidden bg-gray">
                <div className="shape">
                    <Image src="/assets/img/shape/10.png" alt="Shape" width={315} height={290} />
                </div>

                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-style-two-thumb">
                                <Image data-aos="fade-up" src="/assets/img/about/5.jpg" alt="Image Not Found" width={720} height={1000} />
                                <Image data-aos="fade-down" data-aos-delay="100" src="/assets/img/about/6.jpg" alt="Image Not Found" width={600} height={750} />
                                <div className="certification" data-aos="fade-up" data-aos-delay="250">
                                    <Image src="/assets/img/icon/10.png" alt="Image Not Found" width={256} height={256} />
                                    <h4> Certified Company</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pl-50 pl-md-15 pl-xs-15">
                            <div className="about-style-two-info">
                                <h4 className="sub-title">About our company</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Discover Innovative Solution & Technology
                                    </SplitText>
                                </h2>
                                {AboutListData.map(list =>
                                    <AboutList list={list} key={list.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;