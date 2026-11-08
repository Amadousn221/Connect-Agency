import Image from "next/image";
import Link from "next/link";
import HeaderNewsLetter from "../form/HeaderNewsLetter";
import SocialShareV4 from "../social/SocialShareV4";

interface SidebarInfoProps {
    openInfoBar: () => void;
    isInfoOpen: boolean;
    closeInfoBar: () => void;
    searchOpen: () => void;
}

const SidebarInfo = ({ isInfoOpen, openInfoBar, closeInfoBar, searchOpen }: SidebarInfoProps) => {
    return (
        <>
            <div className="attr-right">
                <div className="attr-nav attr-box">
                    <ul>
                        <li className="search">
                            <Link href="#" onClick={searchOpen}>
                                <i className="far fa-search" />
                            </Link>
                        </li>
                        <li className="side-menu">
                            <Link href="#" scroll={false} onClick={openInfoBar}>
                                <span className="bar-1" />
                                <span className="bar-2" />
                                <span className="bar-3" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`side ${isInfoOpen ? "on" : ""}`}>
                <Link href="#" className="close-side" onClick={closeInfoBar}><i className="icon_close" /></Link>
                <div className="widget">
                    <div className="logo">
                        <Image src="/assets/img/logo-light-solid.png" alt="Logo" width={545} height={185} />
                    </div>
                    <p>
                        Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p>
                                    <strong>California, TX 70240</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <strong>support@validtheme.com</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Contact</p>
                                    <strong>+44-20-7328-4499</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4>Get Subscribed!</h4>
                    <HeaderNewsLetter />
                </div>
                <div className="widget social">
                    <ul className="link">
                        <SocialShareV4 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;