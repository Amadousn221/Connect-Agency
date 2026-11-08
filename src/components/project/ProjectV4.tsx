"use client"
import Image from "next/image";
import ProjectV4Data from "@/assets/jsonData/project/ProjectV4Data.json"
import SingleProjectV4 from "./SingleProjectV4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

interface DataType {
    hasTitle?: boolean
}

const ProjectV4 = ({ hasTitle }: DataType) => {
    return (
        <>
            <div className="project-style-two-area default-padding bg-gray">

                {hasTitle &&
                    <>
                        <div className="banner-sahpe">
                            <Image src={`/assets/img/shape/24.png`} alt="Image Not Found" width={1920} height={185} />
                        </div>
                        <div className="container">
                            <div className="left-heading">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4 className="sub-title">Recent Projects</h4>
                                        <h2 className="title" data-aos="fade-up">Latest & most recent completed projects</h2>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1">
                                        <p>
                                            Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software development, product design, sed apor lored incididunt ut labored et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                <div className="container-stage container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="project-style-two-carousel"
                                loop={true}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={50}
                                autoplay={false}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 2,
                                    },
                                    1367: {
                                        slidesPerView: 2.3,
                                    },
                                }}

                                // Navigation arrows
                                navigation={{
                                    nextEl: ".project-two-next",
                                    prevEl: ".project-two-prev"
                                }}

                                modules={[Pagination, Navigation, Keyboard, Autoplay]}
                            >
                                {ProjectV4Data.map(project =>
                                    <SwiperSlide key={project.id}>
                                        <SingleProjectV4 project={project} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ProjectV4;