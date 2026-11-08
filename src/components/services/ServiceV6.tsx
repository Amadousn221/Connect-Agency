"use client"
import ServicesV6Data from '@/assets/jsonData/services/ServicesV6Data.json'
import SingleServiceV6 from './SingleServiceV6';
import { useState } from 'react';
import SplitText from '../animation/SplitText';

interface DataType {
    hasTitle?: boolean
    hasBg?: boolean
    sectionClass?: string
}

const ServiceV6 = ({ hasTitle, hasBg, sectionClass }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV6Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`services-style-six-area bottom-less bg-gray ${sectionClass ? sectionClass : ""} ${hasBg ? "service6-bg" : ""}`}>

                {/* HasTitle */}

                {hasTitle &&
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
                                            Techincal solutions that <br />helps Tech business.
                                        </SplitText>
                                    </h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="services-style-six-items">
                        <div className="row">
                            {ServicesV6Data.map(service =>
                                <div className={`col-lg-4 col-md-6 mb-30 services-style-six-item hover-active-item ${activeServiceId === service.id ? 'active' : ''}`}
                                    key={service.id}
                                    onMouseEnter={() => handleMouseEnter(service.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SingleServiceV6 service={service} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV6;