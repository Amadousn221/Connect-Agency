"use client";
import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import useStickyMenu from "@/hooks/useStickyMenu";

const HeaderV2 = () => {

    const { isOpens, openMenu, closeMenu } = useSidebarMenu();
    const isMenuSticky = useStickyMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark on menu-center no-full ${isMenuSticky ? "sticked" : "no-background"}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src="/assets/img/logo.png" className="logo" alt="Logo" width={545} height={185} />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse collapse-mobile ${isOpens ? "show" : ""}`} id="navbar-menu">
                            <div className="collapse-header">
                                <Image src="/assets/img/logo.png" alt="Logo" width={545} height={185} />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                    <i className="fa fa-times" />
                                </button>
                            </div>
                            <MainMenu navbarPlacement="navbar-center" />
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="contact">
                                        <div className="call">
                                            <div className="icon">
                                                <i className="fas fa-comments-alt-dollar" />
                                            </div>
                                            <div className="info">
                                                <p>Have any Questions?</p>
                                                <h5><a href="mailto:info@crysta.com">info@bestup.com</a></h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-screen" />
                </nav>
            </header>
        </>
    );
};

export default HeaderV2;