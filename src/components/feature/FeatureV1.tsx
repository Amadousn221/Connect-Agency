import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json"
import Image from "next/image";
import SingleFeatureV1 from "./SingleFeatureV1";
import SplitText from "../animation/SplitText";

const FeatureV1 = () => {
    return (
        <>
            <div className="feature-style-one-area half-angle-shape overflow-hidden default-padding">
                <div className="container">
                    <div className="row align-center">

                        <div className="col-lg-5">
                            <div className="feature-style-one-heading text-light">
                                <div className="arrow-shape">
                                    <Image src="/assets/img/shape/21.png" alt="Image not found" width={702} height={268} />
                                </div>
                                <h2 className="title split-text mb-25">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Discover Innovative Technical Solution
                                    </SplitText>
                                </h2>
                                <div data-aos="fade-up" data-aos-delay="150">
                                    <p>
                                        Our agency’s aim is always to take the product to market as quickly as possible and use iterative software development approach until we achieve all business goals and fulfil market & user needs
                                    </p>
                                    <ul className="list-card">
                                        <li>
                                            <h1>$3 Million</h1>
                                            <p>
                                                In value due to increased team productivity
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-1 pl-60 pl-md-15 pl-xs-10 mt-md-50 mt-xs-50">
                            {FeatureV1Data.map(feature =>
                                <SingleFeatureV1 feature={feature} key={feature.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;