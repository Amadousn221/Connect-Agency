"use client"
import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json"
import SingleTeamV2 from "./SingleTeamV2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import SplitText from "../animation/SplitText";

interface DataType {
    hasTitle?: boolean
}

const TeamV2 = ({ hasTitle }: DataType) => {
    return (
        <>
            <div className="team-style-two-area bg-gray default-padding" style={{ backgroundImage: 'url(/assets/img/shape/27.png)' }}>

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Team Members</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Meet our experts
                                        </SplitText>
                                    </h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="team-carousel"
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={15}
                                autoplay={true}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                // Navigation arrows
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    }
                                }}
                                modules={[Pagination, Navigation, Keyboard, Autoplay]}
                            >
                                {TeamV1Data.map(team =>
                                    <SwiperSlide key={team.id}>
                                        <SingleTeamV2 team={team} />
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

export default TeamV2;