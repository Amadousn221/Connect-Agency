"use client"
import Image from "next/image";
import HeaderTopV1 from "./HeaderTopV1";
import Link from "next/link";
import MainMenu from "./MainMenu";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import useStickyMenu from "@/hooks/useStickyMenu";

const HeaderV1 = () => {

    const { isOpens, openMenu, closeMenu } = useSidebarMenu();
    const isMenuSticky = useStickyMenu();

    return (
        <>
            <HeaderTopV1 />

            <header>
                <nav className={`navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs white navbar-fixed on menu-center no-full ${isMenuSticky ? "sticked" : "no-background"}`}>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-xl-2 col-lg-3 col-md-2 col-sm-1 col-1">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                        <i className="fa fa-bars" />
                                    </button>
                                    <Link className="navbar-brand" href="/">
                                        <Image src="/assets/img/logo.png" className="logo" alt="Logo" width={545} height={185} />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-4 col-sm-4 col-4">
                                <div className={`collapse navbar-collapse collapse-mobile ${isOpens ? "show" : ""}`} id="navbar-menu">
                                    <Image src="/assets/img/logo.png" alt="Logo" width={545} height={185} />

                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                        <i className="fa fa-times" />
                                    </button>
                                    <MainMenu navbarPlacement="navbar-center" />
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7">
                                <div className="attr-right">
                                    <div className="attr-nav">
                                        <ul>
                                            <li className="button">
                                                <Link href="/contact-us">Get consultant</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overlay-screen" />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;