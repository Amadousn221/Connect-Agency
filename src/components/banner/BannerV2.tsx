"use client"
import BannerV2Data from "@/assets/jsonData/banner/BannerV2Data.json"
import { Swiper, SwiperSlide } from "swiper/react";
import SingleBannerV2 from "./SingleBannerV2";
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

const BannerV2 = () => {
    return (
        <>
            <div className="banner-area banner-style-two content-right overflow-hidden bg-cover" style={{ background: 'url(/assets/img/shape/banner-2.jpg)' }}>
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
                    modules={[EffectFade, Autoplay, Navigation]}
                >

                    {BannerV2Data.map(banner =>
                        <SwiperSlide
                            key={banner.id}
                            className="banner-style-two"
                        >
                            <SingleBannerV2 banner={banner} />
                        </SwiperSlide>
                    )}

                    {/* Navigation */}
                    <div className="swiper-nav-left">
                        <div className="swiper-button-prev">
                            <i className="fas fa-angle-left" />
                        </div>
                        <div className="swiper-button-next">
                            <i className="fas fa-angle-right" />
                        </div>
                    </div>
                </Swiper>
            </div >
        </>
    );
};

export default BannerV2;