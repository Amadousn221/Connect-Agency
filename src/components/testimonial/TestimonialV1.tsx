"use client"
import Image from "next/image";
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json";
import SingleTestimonialV1 from "./SingleTestimonialV1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-style-one-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <div className="testimonial-thumb" data-aos="fade-up">
                                <div className="thumb-item">
                                    <Image src="/assets/img/illustration/5.png" alt="illustration" width={500} height={705} />
                                    <div className="mini-shape">
                                        <Image src="/assets/img/shape/19.png" alt="illustration" width={53} height={73} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <Swiper className="testimonial-carousel" data-aos-delay="100"
                                direction={"horizontal"}
                                loop={true}
                                autoplay={true}
                                modules={[Keyboard]}
                            >
                                {TestimonialV1Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV1 testimonial={testimonial} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;