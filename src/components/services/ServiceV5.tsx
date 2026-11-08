"use client"
import ServicesV5Data from "@/assets/jsonData/services/ServicesV5Data.json"
import SingleServiceV5 from "./SingleServiceV5";
import { useState } from "react";
import SplitText from "../animation/SplitText";

const ServiceV5 = () => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV5Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="services-style-five-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
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
                                        Techincal solutions that <br /> helps Tech business.
                                    </SplitText>
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ServicesV5Data.map(service =>
                            <div className={`col-xl-4 col-lg-6 col-md-6 mb-30 services-style-five hover-active-item ${activeServiceId === service.id ? 'active' : ''}`}
                                key={service.id}
                                onMouseEnter={() => handleMouseEnter(service.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <SingleServiceV5 key={service.id} service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV5;