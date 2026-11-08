"use client"
import BrandV2Data from "@/assets/jsonData/brand/BrandV2Data.json"
import Image from "next/image";
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

interface DataType {
    sectionClass?: string;
}

const PartnerV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`brand-style-two-carousel default-padding-bottom bg-gray text-center ${sectionClass ? sectionClass : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-style-two-items">
                                <h4>Our partner is more then 5K+</h4>
                                <Swiper className="brand-two-carousel"
                                    loop={true}
                                    freeMode={true}
                                    grabCursor={true}
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    autoplay={false}
                                    breakpoints={{
                                        800: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1250: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                    modules={[Keyboard, Autoplay]}
                                >
                                    {BrandV2Data.map(brand =>
                                        <SwiperSlide key={brand.id}>
                                            <Image src={`/assets/img/brand/${brand.thumb}`} alt="Image Not Found" width={300} height={100} />
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

export default PartnerV2;