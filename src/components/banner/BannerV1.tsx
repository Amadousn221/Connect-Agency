"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import BannerV1Data from "@/assets/jsonData/banner/BannerV1Data.json"
import SingleBannerV1 from "./SingleBannerV1";

const BannerV1 = () => {
    return (
        <>
            <div className="banner-area banner-style-one shadow zoom-effect overflow-hidden text-light">
                <Swiper
                    className="banner-fade"
                    direction={"horizontal"}
                    loop={true}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true
                    }}
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}

                    // If we need pagination
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}

                    // Navigation arrows
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    modules={[Navigation, Keyboard, Autoplay, EffectFade]}
                >
                    {BannerV1Data.map(banner =>
                        <SwiperSlide key={banner.id} className='banner-style-one'>
                            <SingleBannerV1 banner={banner} />
                        </SwiperSlide>
                    )}
                    <div className="swiper-button-prev">
                        <i className="fas fa-angle-left" />
                    </div>
                    <div className="swiper-button-next">
                        <i className="fas fa-angle-right" />
                    </div>
                </Swiper>
            </div >
        </>
    );
};

export default BannerV1;