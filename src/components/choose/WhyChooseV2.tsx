"use client"
import Image from "next/image";
import Counter from "../counter/Counter";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
import SplitText from "../animation/SplitText";

const WhyChooseV2 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="choose-us-style-two-area default-padding-top overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="choose-us-style-two default-padding-bottom">
                                <div className="content">
                                    <h2 className="title">
                                        <SplitText
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Preparing for your success trusted source
                                        </SplitText>
                                    </h2>
                                    <div data-aos="fade-up" data-aos-delay="100">
                                        <p>
                                            We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment.
                                        </p>
                                        <ul className="list-style-one">
                                            <li>IT Consultancy</li>
                                            <li>Technical Support</li>
                                            <li>Atlantic silverside parrotfish barbeled</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="expertise text-light" data-aos="fade-up" data-aos-delay="200" style={{ backgroundImage: 'url(/assets/img/banner/7.jpg)' }}>
                                    <div className="left">
                                        <h2><strong>28</strong> Years of experience</h2>
                                    </div>
                                    <div className="right">
                                        <Link href="#" className="popup-youtube video-play-button-with-text" onClick={() => setOpen(true)}>
                                            <span><i className="fas fa-play" /> WATCH PROCESS</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-us-style-thumb">
                                <Image src="/assets/img/illustration/6.png" alt="Thumb" width={580} height={770} />
                                <div className="shape">
                                    <Image src="/assets/img/shape/8.png" alt="Shape" width={800} height={790} />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><Counter end={842} /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Worldwide Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="owhuBrGIOsE" onClose={() => setOpen(false)} />
        </>
    );
};

export default WhyChooseV2;