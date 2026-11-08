"use client";
import TestimonialV2Data from "@/assets/jsonData/testimonial/TestimonialV2Data.json"
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonialV2 from "./SingleTestimonialV2";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import SplitText from "../animation/SplitText";

const TestimonialV2 = () => {
    return (
        <>
            <div className="testimonials-style-two-area bg-dark default-padding-top half-shape-light-bottom" style={{ backgroundImage: 'url(/assets/img/shape/34.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-light text-center">
                                <h4 className="sub-title">Testimonials</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Clients Feedback
                                    </SplitText>
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="testimonial-style-two-carousel" data-aos-delay="100"
                                loop={true}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={50}
                                autoplay={true}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    }
                                }}
                                modules={[Pagination, Keyboard, Autoplay]}
                            >
                                {TestimonialV2Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV2 testimonial={testimonial} />
                                    </SwiperSlide>
                                )}
                                <div className="swiper-pagination" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TestimonialV2;