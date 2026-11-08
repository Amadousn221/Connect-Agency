"use client"
import Image from "next/image";
import TestimonialV3Data from "@/assets/jsonData/testimonial/TestimonialV3Data.json"
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import SingleTestimonialV3 from "./SingleTestimonialV3";
import { useState } from "react";
import { Controller, FreeMode, Keyboard } from "swiper/modules";
import SplitText from "../animation/SplitText";

const TestimonialV3 = () => {

    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <div className="tesimoinial-style-three-area bg-dark text-light default-padding bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-5.jpg)' }}>
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
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="testimonial-style-three-items text-center">
                                <div className="review-cards">
                                    <div className="review-from">
                                        <Image src="/assets/img/icon/google.png" alt="Image Not Found" width={70} height={25} />
                                        <span>85 Review</span>
                                    </div>
                                    <div className="ratings">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>

                                <Swiper
                                    className="testimonial-style-three-carousel"
                                    spaceBetween={10}
                                    initialSlide={2}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    loop={true}
                                    loopAdditionalSlides={4}
                                    onSwiper={setMainSwiper}
                                    controller={{ control: thumbsSwiper }}
                                    modules={[Controller, Keyboard]}
                                >
                                    {TestimonialV3Data.testimonialData.map(data =>
                                        <SwiperSlide key={data.id}>
                                            <div className="testimonial-style-three">
                                                <p>
                                                    “{data.text}”
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>

                                <Swiper
                                    className="testimonial-bullet"
                                    spaceBetween={10}
                                    slidesPerView={'auto'}
                                    touchRatio={0.2}
                                    slideToClickedSlide={true}
                                    loop={true}
                                    loopAdditionalSlides={3}
                                    centeredSlides={true}
                                    onSwiper={setThumbsSwiper}
                                    controller={{ control: mainSwiper }}
                                    modules={[Controller, FreeMode, Keyboard]}
                                >
                                    {TestimonialV3Data.authorData.map(data =>
                                        <SwiperSlide key={data.id} >
                                            <SingleTestimonialV3 data={data} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV3;