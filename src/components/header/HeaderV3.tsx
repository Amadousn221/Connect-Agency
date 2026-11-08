"use client";
import Image from "next/image";
import MainMenu from "./MainMenu";
import Link from "next/link";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import useStickyMenu from "@/hooks/useStickyMenu";
import useSidebarInfo from "@/hooks/useSidebarInfo";
import SidebarInfo from "./SidebarInfo";
import HeaderTopV2 from "./HeaderTopV2";
import HeaderSearch from "./HeaderSearch";
import useSearchBar from "@/hooks/useSearchBar";

const HeaderV3 = () => {

    const { isOpens, openMenu, closeMenu } = useSidebarMenu();
    const isMenuSticky = useStickyMenu();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const { openSearch, searchOpen, searchClose } = useSearchBar();

    return (
        <>
            <HeaderTopV2 />
            <header>
                <nav className={`navbar mobile-sidenav navbar-theme-secodnary navbar-common navbar-sticky navbar-default validnavs on no-full ${isMenuSticky ? "sticked" : "no-background"}`}>

                    <HeaderSearch openSearch={openSearch} searchClose={searchClose} searchOpen={searchOpen} />

                    <div className="container nav-box d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src="/assets/img/logo-light-solid.png" className="logo logo-display" alt="Logo" width={545} height={185} />
                                <Image src="/assets/img/logo.png" className="logo logo-scrolled" alt="Logo" width={545} height={185} />
                            </Link>
                        </div>

                        <div className="main-nav-content">
                            <div className={`collapse navbar-collapse collapse-mobile ${isOpens ? "show" : ""}`} id="navbar-menu">

                                <Image src="/assets/img/logo.png" alt="Logo" width={545} height={185} />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                    <i className="fa fa-times" />
                                </button>
                                <MainMenu navbarPlacement="navbar-right" />
                            </div>

                            {/* Sidebar Info */}
                            <SidebarInfo openInfoBar={openInfoBar} isInfoOpen={isInfoOpen} closeInfoBar={closeInfoBar} searchOpen={searchOpen} />
                            <div className="overlay-screen" />
                        </div>
                    </div>

                    <div className={`overlay-screen ${isOpens ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV3;