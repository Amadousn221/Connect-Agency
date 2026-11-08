"use client";
import ProjectV2Data from "@/assets/jsonData/project/ProjectV2Data.json"
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import SplitText from "../animation/SplitText";

interface DataType {
    hasTitle?: boolean;
}

const ProjectV2 = ({ hasTitle }: DataType) => {

    const galleryRef = useRef(null);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = ProjectV2Data.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (loadedImagesCount === totalImages && galleryRef.current) {
            import('isotope-layout').then((Isotope) => {
                const iso = new Isotope.default(galleryRef.current!, {
                    itemSelector: '.gallery-item',
                    layoutMode: 'masonry',
                });

                setTimeout(() => {
                    iso.layout();
                }, 500);

                return () => {
                    iso.destroy();
                };
            });
        }
    }, [loadedImagesCount, totalImages]);

    const [activeProjectId, setActiveProjectId] = useState(ProjectV2Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveProjectId(id);
    };

    const handleMouseLeave = () => {
        // or keep active if you want
    };


    return (
        <>
            <div className="project-style-two-area bg-gray default-padding">

                {/* HasTitle */}

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Recent Gallery</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Latest & most recent <br /> completed projects
                                        </SplitText>
                                    </h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 gallery-content">
                                <div className="magnific-mix-gallery gallery-masonary">
                                    <div id="gallery-masonary" className="gallery-items colums-2" ref={galleryRef}>
                                        {ProjectV2Data.map(data =>

                                            <div className={`gallery-item ${activeProjectId === data.id ? 'active' : ''}`}

                                                key={data.id}
                                                onMouseEnter={() => handleMouseEnter(data.id)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <div className="gallery-style-one">
                                                    <Image
                                                        src={`/assets/img/gallery/${data.thumb}`}
                                                        alt="Thumb"
                                                        width={800}
                                                        height={900}
                                                        onLoad={handleImageLoad}
                                                    />
                                                    <div className="shape">
                                                        <Image src="/assets/img/shape/35.png" alt="Image Not Found" width={890} height={865} />
                                                    </div>
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <span>{data.category.join(", ")}</span>
                                                            <h4><Link href={`/project-details/${data.id}`}>{data.title}</Link></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="load-more-info text-center mt-60">
                                            <p>
                                                Are you interested to show more portfolios?
                                                <Link href="/project">Load More</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV2;