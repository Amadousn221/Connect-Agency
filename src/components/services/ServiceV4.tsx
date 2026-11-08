import Image from 'next/image';
import ServicesV4Data from "@/assets/jsonData/services/ServicesV4Data.json";
import SingleServiceV4 from './SingleServiceV4';
import SplitText from '../animation/SplitText';

interface DataType {
    hasTitle?: boolean
    sectionClass?: string
}

const ServiceV4 = ({ hasTitle, sectionClass }: DataType) => {
    return (
        <>
            <div className={`services-style-four-area ${sectionClass ? sectionClass : ""}`}>

                {hasTitle &&
                    <>
                        <div className="shape">
                            <Image src="/assets/img/shape/left-vecotr.png" alt="Image Not Found" width={480} height={445} />
                            <Image src="/assets/img/shape/right-vecotr.png" alt="Image Not Found" width={480} height={446} />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="site-heading text-center">
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
                                                Technical solutions that <br /> helps Tech business.
                                            </SplitText>
                                        </h2>
                                        <div className="devider" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-style-four-items">
                                <ul>
                                    {ServicesV4Data.map(service =>
                                        <SingleServiceV4 service={service} key={service.id} />
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

export default ServiceV4;