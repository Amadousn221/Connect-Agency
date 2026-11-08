import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BannerV5 = () => {
    return (
        <>
            <div className="banner-style-five-area bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-4.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="banner-style-five-info">
                                <h2>Get More Insight</h2>
                                <h2>With Effective</h2>
                                <div className="content">
                                    <h2><strong>Data Science</strong></h2>
                                    <p>
                                        Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious.
                                    </p>
                                    <div className="button">
                                        <Link className="btn btn-theme btn-md radius animation" href="/contact-us">Get Started</Link>
                                        <Link className="btn btn-border-dark btn-md radius animation" href="/about-us">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-style-five-thumb">
                                <Image src="/assets/img/illustration/7.png" alt="Image Not Found" width={580} height={685} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV5;