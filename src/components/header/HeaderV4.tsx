"use client";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import MainMenu from "./MainMenu";
import Image from "next/image";
import useSearchBar from "@/hooks/useSearchBar";
import useStickyMenu from "@/hooks/useStickyMenu";
import useSidebarMenu from "@/hooks/useSidebarMenu";

const HeaderV4 = () => {

    const { isOpens, openMenu, closeMenu } = useSidebarMenu();
    const isMenuSticky = useStickyMenu();
    const { openSearch, searchOpen, searchClose } = useSearchBar();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark navbar-style-two on menu-center no-full ${isMenuSticky ? "sticked" : "no-background"}`}>
                    <HeaderSearch openSearch={openSearch} searchClose={searchClose} searchOpen={searchOpen} />
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
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                            <MainMenu navbarPlacement="navbar-center" />
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="search">
                                        <Link href="#" onClick={searchOpen}>
                                            <i className="far fa-search" />
                                        </Link>
                                    </li>
                                    <li className="button">
                                        <Link href="/contact-us">Get consultant</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpens ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV4;