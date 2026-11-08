import ServicesV2Data from "@/assets/jsonData/services/ServicesV2Data.json"
import SingleServiceV2 from "./SingleServiceV2";
import SplitText from "../animation/SplitText";

interface DataType {
    hasTitle?: boolean;
}

const ServiceV2 = ({ hasTitle }: DataType) => {
    return (
        <>
            <div className="services-style-two-area default-padding bottom-less bg-cover bg-gray"
                style={{ backgroundImage: 'url(/assets/img/shape/27.png)' }}>

                {/* HasTitle */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">What we do</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Technical solutions that helps Tech business.
                                        </SplitText>
                                    </h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        {ServicesV2Data.map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServiceV2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV2;