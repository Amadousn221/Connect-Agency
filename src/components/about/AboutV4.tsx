import Image from "next/image";
import AboutV4Data from "@/assets/jsonData/about/AboutV4Data.json"

const AboutV4 = () => {
    return (
        <>
            <div className="about-style-four-area default-padding">
                <div className="container">
                    <div className="left-heading">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="sub-title">About Company</h4>
                                <h2 className="title" data-aos="fade-up">
                                    Choose thebest IT service company in the city.
                                </h2>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <p>
                                    Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software development, product design, sed apor lored incididunt ut labored et dolore magna.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="about-style-four-thumb">
                                <Image src="/assets/img/about/9.jpg" alt="Image Not Found" width={740} height={520} />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-style-four-info">
                                <div className="about-list-box">
                                    <ul className="about-four-list">
                                        {AboutV4Data.map(about =>
                                            <li key={about.id}>
                                                <div className="icon">
                                                    <Image src="/assets/img/icon/21.png" alt="Image Not Found" width={50} height={50} />
                                                </div>
                                                <h4>High Quality Work</h4>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="thumb">
                                    <Image src="/assets/img/about/10.jpg" alt="Image Not Found" width={520} height={290} />
                                    <div className="clients-card">
                                        <div className="clients">
                                            <Image src="/assets/img/teams/5.jpg" alt="Image Not Found" width={1000} height={1000} />
                                            <Image src="/assets/img/teams/6.jpg" alt="Image Not Found" width={1000} height={1000} />
                                            <Image src="/assets/img/teams/7.jpg" alt="Image Not Found" width={1000} height={1000} />
                                            <i className="fas fa-plus" />
                                        </div>
                                        <h5>459K  REVIEWS</h5>
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

export default AboutV4;