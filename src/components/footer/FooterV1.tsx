import Image from "next/image";
import Link from "next/link";
import NewsLetterForm from "../form/NewsLetterForm";
import SocialShareV1 from "../social/SocialShareV1";

const FooterV1 = () => {
    return (
        <>
            <footer className="bg-dark text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-8.jpg)' }}>
                <div className="footer-shape">
                    <div className="item">
                        <Image src="/assets/img/shape/7.png" alt="Shape" width={282} height={748} />
                    </div>
                    <div className="item">
                        <Image src="/assets/img/shape/9.png" alt="Shape" width={100} height={100} />
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Image className="logo" src="/assets/img/logo-light-solid.png" alt="Logo" width={545} height={185} />
                                    <p>
                                        Excellence decisively nay man twins impression maximum contrasted remarkably is perfect.
                                    </p>
                                    <div className="opening-hours">
                                        <h5>Opening Hours</h5>
                                        <ul>
                                            <li>
                                                <div className="working-day">Monday – Sunday:</div>
                                                <div className="marker" />
                                                <div className="working-hour">2pm – 2pm</div>
                                            </li>
                                            <li>
                                                <div className="working-day">Sunday:</div>
                                                <div className="marker" />
                                                <div className="working-hour">Off Day</div>
                                            </li>
                                        </ul>
                                    </div>
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
                                            <Link href="/services-details/4">Backup & Recovery</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <h4 className="widget-title">Newsletter</h4>
                                <p>
                                    Join our subscribers list to get the latest <br /> news and special offers.
                                </p>
                                <div className="f-item newsletter">
                                    <NewsLetterForm />
                                </div>
                                <ul className="footer-social">
                                    <SocialShareV1 />
                                </ul>
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

export default FooterV1;