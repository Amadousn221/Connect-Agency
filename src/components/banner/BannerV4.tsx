import Image from "next/image";
import Link from "next/link";

const BannerV4 = () => {
    return (
        <>
            <div className="banner-style-four-area bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-3.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-10">
                            <div className="banner-four-top-info">
                                <h4>Smart Technology</h4>
                                <h2>Innovation of <strong>Tech Solution</strong></h2>
                                <Image src="/assets/img/about/8.jpg" alt="Image Not Found" width={300} height={140} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="banner-four-bottom-info">
                                <div className="thumb">
                                    <Image src="/assets/img/illustration/1.png" alt="Image Not Found" width={800} height={800} />
                                </div>
                                <div className="info">
                                    <p>
                                        We provide the most responsive and effective IT design for companies and businesses worldwide. Get the most out of your teams operations that create amazing UI/UX experiences.
                                    </p>
                                </div>
                                <div className="button">
                                    <Link className="btn-circle" href="/contact-us"><i className="fas fa-long-arrow-right" /> Lets talk</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV4;