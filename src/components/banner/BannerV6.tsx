"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const BannerV6 = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-box">
                <div className="banner-style-six-area shadow dark text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/banner/10.jpg)' }}>
                    <div className="shape">
                        <Image src="/assets/img/shape/13.png" alt="Image Not Found" width={1105} height={505} />
                    </div>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-lg-8">
                                <div className="banner-style-six-info">
                                    <h2>Cyber Security</h2>
                                    <div className="content">
                                        <h2><strong>Tech Solution.</strong></h2>
                                        <p>
                                            Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. Resolve parties but why she shewing. She sang know now perfectly.
                                        </p>
                                        <Link className="btn btn-theme btn-md radius animation" href="/contact-us">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="banner-style-six-video text-center">
                                    <Link href="#" className="popup-youtube video-play-button" onClick={() => setOpen(true)}>
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="HUozIpTODZQ" onClose={() => setOpen(false)} />
        </>
    );
};

export default BannerV6;