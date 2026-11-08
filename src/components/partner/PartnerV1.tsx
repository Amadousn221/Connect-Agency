import Image from "next/image";

interface DataType {
    sectionClass?: string
    hasBg?: boolean
}

const PartnerV1 = ({ sectionClass, hasBg }: DataType) => {
    return (
        <>
            <div className={`partner-style-one-area  ${sectionClass ? sectionClass : ""} ${hasBg ? "partner-bg" : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="partner-map" data-aos="fade-up" style={{ backgroundImage: 'url(/assets/img/shape/map.png)' }}>
                                <h2 className="mask-text" style={{ backgroundImage: 'url(/assets/img/banner/6.jpg)' }}>80</h2>
                                <h4>Partners in world wide</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="partner-items" data-aos="fade-up" data-aos-delay="150">
                                <ul>
                                    <li><Image src="/assets/img/logo/1.png" alt="Image Not FOund" width={256} height={256} /></li>
                                    <li><Image src="/assets/img/logo/2.png" alt="Image Not FOund" width={256} height={256} /></li>
                                    <li><Image src="/assets/img/logo/7.png" alt="Image Not FOund" width={256} height={256} /></li>
                                    <li><Image src="/assets/img/logo/4.png" alt="Image Not FOund" width={256} height={256} /></li>
                                    <li><Image src="/assets/img/logo/5.png" alt="Image Not FOund" width={256} height={256} /></li>
                                    <li><Image src="/assets/img/logo/6.png" alt="Image Not FOund" width={256} height={256} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV1;