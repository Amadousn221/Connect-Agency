import Image from "next/image";
import CounterForm from "../form/CounterForm";

const ContactV2 = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden default-padding">
                <div className="contact-shape">
                    <Image src="/assets/img/shape/37.png" alt="Image Not Found" width={670} height={420} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-20">
                            <div className="contact-style-one-info">
                                <h2 className="split-text" data-aos="fade-up">Contact Information</h2>
                                <p data-aos="fade-up" data-aos-delay="100">
                                    Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                                </p>
                                <ul>
                                    <li data-aos="fade-up">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Hotline</h5>
                                            <a href="tel:+4733378901">+4733378901</a>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="300">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Our Location</h5>
                                            <p>
                                                55 Main Street, The Grand Avenue 2nd Block, <br /> New York City
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="500">
                                        <div className="icon">
                                            <i className="fas fa-envelope-open-text" />
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Official Email</h5>
                                            <a href="mailto:info@agrul.com.com">info@agrul.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                            <div className="contact-form-style-one">
                                <h5 className="sub-title">Have Questions?</h5>
                                <h2 className="title">Send us a Massage</h2>
                                <CounterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV2;