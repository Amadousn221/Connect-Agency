"use client"
import ServicesV3Data from "@/assets/jsonData/services/ServicesV3Data.json"
import SingleServiceV3 from "./SingleServiceV3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import SplitText from "../animation/SplitText";

const ServiceV3 = () => {
    return (
        <>
            <div className="services-style-three-area default-padding-top half-bg-dark" style={{ backgroundImage: 'url(/assets/img/shape/52.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
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
                                        Techincal solutions that helps Tech business.
                                    </SplitText>
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="services-carousel" data-aos="fade-up" data-aos-delay="100"
                                loop={true}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={true}

                                // If we need pagination
                                pagination={{
                                    el: '.services-pagination',
                                    type: 'fraction',
                                    clickable: true,
                                }}
                                // Navigation arrows
                                navigation={{
                                    nextEl: ".services-button-next",
                                    prevEl: ".services-button-prev"
                                }}
                                breakpoints={{
                                    800: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    1367: {
                                        slidesPerView: 3.6,
                                    },
                                }}
                                modules={[Pagination, Navigation, Keyboard, Autoplay]}
                            >
                                {ServicesV3Data.map(service =>
                                    <SwiperSlide key={service.id}>
                                        <SingleServiceV3 service={service} />
                                    </SwiperSlide>
                                )}

                                <div className="services-swiper-nav">
                                    {/* Pagination */}
                                    <div className="services-pagination" />
                                    <div className="services-button-prev" />
                                    <div className="services-button-next" />
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV3;