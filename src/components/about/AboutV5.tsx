import React from 'react';
import Counter from '../counter/Counter';
import Image from 'next/image';
import Link from 'next/link';
import SplitText from '../animation/SplitText';

const AboutV5 = () => {
    return (
        <>
            <div className="about-style-five-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 pr-70 pr-md-15 pr-xs-15">
                            <div className="about-style-five-left-info">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><Counter end={846} /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <h4>Satisfied Customers
                                        <Link href="/contact-us">
                                            <i className="fas fa-long-arrow-right" />
                                        </Link>
                                    </h4>
                                </div>
                                <Image src="/assets/img/about/3.png" alt="Image Not Found" width={615} height={355} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-style-five-right-info">
                                <h4 className="sub-title">About Company</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Discover Innovative Solutions & Technology
                                    </SplitText>
                                </h2>
                                <p>
                                    Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom.
                                </p>
                                <div className="list-card">
                                    <h4>Our Support Facility</h4>
                                    <p>
                                        We help businesses thrive by acting as custom software incidents
                                    </p>
                                    <ul className="list-style-two">
                                        <li>Cloud based services free spaces</li>
                                        <li>Expert team member</li>
                                        <li>100% certified company</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV5;