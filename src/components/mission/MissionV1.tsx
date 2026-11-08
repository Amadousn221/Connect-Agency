import Image from "next/image";
import MissionTab from "../tab/MissionTab";

const MissionV1 = () => {
    return (
        <>
            <div className="mission-vision-style-one-area bg-cover bg-gray overflow-hidden default-padding" style={{ backgroundImage: 'url(/assets/img/shape/22.png)' }}>
                <div className="shape-top-left">
                    <Image src="/assets/img/shape/47.png" alt="Shape" width={905} height={475} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <MissionTab />
                        </div>
                        <div className="col-lg-6 pl-100 pl-md-15 pl-xs-15 mt-md-50 mt-xs-40">
                            <div className="thumb-style-two">
                                <Image data-aos="fade-up" src="/assets/img/about/7.jpg" alt="Image Not Found" width={635} height={810} />
                                <div className="card-style-one" data-aos="fade-down" data-aos-delay="100">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/16.png" alt="Image Not Found" width={130} height={100} />
                                    </div>
                                    <h4>Innovative IT Solutions for the Modern Workplace</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionV1;