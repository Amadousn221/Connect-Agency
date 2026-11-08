import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import Link from "next/link";

const FooterV2 = () => {
    return (
        <>
            <footer className="bg-dark footer-style-two text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-8.jpg)' }}>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Image className="logo" src="/assets/img/logo-light-solid.png" alt="Logo" width={180} height={60} />
                                    <p>
                                        Nirman has been operating the construction market since 2016. Providing services in the line construction area, our main objective is to provide quality.
                                    </p>
                                    <ul className="footer-social">
                                        <SocialShareV1 />
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Company</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Plans & Pricing</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link href="/services-details/1">IT Management</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/2">Cyber Security</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/3">Cloud Computing</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/4">IT Consulting</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/5">Backup & Recovery</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Get in touch</h4>
                                    <ul>
                                        <li>
                                            <i className="fas fa-map-marker-alt" />
                                            <p>
                                                1791 Yorkshire Circle Kitty Hawk, NC 27949, Old New York City
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fas fa-phone-alt" />
                                            <p>
                                                +012-345-6789 <br /> +012-345-6789
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope" />
                                            <p>
                                                jony@gmail.com <br /> info@example.com
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <Link href="https://themeforest.net/user/validthemes" target="_blank">validthemes</Link></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link href="/about-us">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;