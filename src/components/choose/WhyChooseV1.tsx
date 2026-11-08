import Image from "next/image";
import SplitText from "../animation/SplitText";

const WhyChooseV1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg" style={{ backgroundImage: 'url(/assets/img/banner/7.jpg)' }} />
                <div className="shape-left-top">
                    <Image src="/assets/img/shape/17.png" alt="Shape" width={335} height={245} />
                </div>
                <div className="text-invisible">Technology</div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80">
                            <div className="choose-us-style-one">
                                <h2 className="title split-text mb-35">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Be at the forefront of new innovation
                                    </SplitText>
                                </h2>
                                <ul className="list-item">
                                    <li data-aos="fade-up">
                                        <h4>Best Business Consulting </h4>
                                        <p>
                                            Seeing rather her you not esteem men settle genius excuse. International Deal say over you age from. Comparison new ham melancholy son themselves.
                                        </p>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="300">
                                        <h4>24/7 Customer Support </h4>
                                        <p>
                                            Together rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default WhyChooseV1;