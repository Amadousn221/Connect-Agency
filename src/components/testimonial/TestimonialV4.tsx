"use client";
import TestimonialV4Data from '@/assets/jsonData/testimonial/TestimonialV4Data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleTestimonialV4 from './SingleTestimonialV4';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import SplitText from '../animation/SplitText';

const TestimonialV4 = () => {
    return (
        <>
            <div className="tesimoinial-style-four-area bg-gray default-padding bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/38.png)' }}>
                <div className="container">
                    <div className="left-heading">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="sub-title">Testimonials</h4>
                                <h2 className="title">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        What client says <br />about our services
                                    </SplitText>
                                </h2>
                            </div>
                            <div className="col-lg-5 offset-lg-1 text-end">
                                <div className="testimonial-four-swiper-nav">
                                    <div className="testimonial-four-prev"><i className="fas fa-angle-left" /></div>
                                    <div className="testimonial-four-next"><i className="fas fa-angle-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-112">
                            <Swiper className="testimonial-style-four-carousel"
                                loop={true}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={50}
                                autoplay={true}
                                navigation={{
                                    nextEl: '.testimonial-four-next',
                                    prevEl: '.testimonial-four-prev',
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
                                modules={[Navigation, Keyboard, Autoplay]}
                            >
                                {TestimonialV4Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV4 testimonial={testimonial} />
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

export default TestimonialV4;