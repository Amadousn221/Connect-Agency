import Image from "next/image";
import ProcessV1Data from "@/assets/jsonData/process/ProcessV1Data.json";
import SingleProcessV1 from "./SingleProcessV1";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string
}

const ProcessV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`process-style-one-area text-center default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="large-shape">
                    <Image src="/assets/img/shape/11.png" alt="Shape" width={450} height={970} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Our Process</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Steps of Recruitment <br /> work process
                                    </SplitText>
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ProcessV1Data.map(process =>
                            <SingleProcessV1 process={process} key={process.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV1;