"use client"
import BannerV3Data from "@/assets/jsonData/banner/BannerV3Data.json"
import SingleBannerV3 from "./SingleBannerV3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";

const BannerV3 = () => {
    return (
        <>
            <div className="banner-area bg-gray banner-style-three-area overflow-hidden">
                <Swiper className="banner-style-two-carousel"
                    direction={"horizontal"}
                    loop={true}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true
                    }}
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
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
                    modules={[Pagination, Navigation, Keyboard, Autoplay, EffectFade]}
                >
                    {BannerV3Data.map(banner =>
                        <SwiperSlide className="banner-style-three" key={banner.id} >
                            <SingleBannerV3 banner={banner} />
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

export default BannerV3;