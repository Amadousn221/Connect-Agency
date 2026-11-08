import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json"
import SingleServiceV1 from "./SingleServiceV1";
import Link from "next/link";
import SplitText from "../animation/SplitText.jsx"

const ServiceV1 = () => {
    return (
        <>
            <div className="services-style-one-area default-padding bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner.jpg)' }}>
                <div className="center-shape" style={{ backgroundImage: 'url(/assets/img/shape/5.png)' }} />
                <div className="service-style-one-items">
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-lg-8 mb-30 mb-xs-50 mb-md-50">
                                <h4 className="sub-title">Our Services</h4>
                                <h2 className="title split-text">

                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Technical solutions that revolutionize your business.
                                    </SplitText>

                                </h2>
                                <Link className="btn btn-theme btn-md radius animation" data-aos="fade-up" href="/services">View all services</Link>
                            </div>
                            {ServicesV1Data.slice(0, 1).map(service =>
                                <SingleServiceV1 service={service} key={service.id} />
                            )}
                        </div>
                        <div className="row align-center">
                            {ServicesV1Data.slice(1, 4).map(service =>
                                <SingleServiceV1 service={service} key={service.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV1;