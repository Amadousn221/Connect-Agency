import Image from "next/image";
import Counter from "../counter/Counter";
import ProgressV2Data from "@/assets/jsonData/progress/ProgressV2Data.json"
import ProgressV2 from "../progress/ProgressV2";

const WhyChooseV3 = () => {
    return (
        <>
            <div className="choose-us-style-three-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="choose-us-style-three-thumb">
                                <Image src="/assets/img/illustration/10.png" alt="Image Not Found" width={800} height={1040} />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1">
                            <div className="choose-us-style-three-info">
                                <h2 className="title" data-aos="fade-up">Get exclusive IT solutions and services for techni</h2>
                                <p>
                                    Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software development, product design, sed apor lored incididunt ut labored et dolore magna.
                                </p>
                                <div className="d-flex">
                                    <div className="left">
                                        <h4>Our Support Facility</h4>
                                        <ul className="list-style-one">
                                            <li>International Development Authority</li>
                                            <li>Cloud Based Services Free Spaces</li>
                                            <li>Expert Team Member</li>
                                            <li>100% Certified Company</li>
                                        </ul>
                                    </div>
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><Counter end={18} /></div>
                                            <div className="operator">K</div>
                                        </div>
                                        <span className="medium">Completed Projects</span>
                                    </div>
                                </div>
                                {ProgressV2Data.map(progress =>
                                    <ProgressV2 key={progress.id} progress={progress} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV3;