import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import useSubMenuToggle from "@/hooks/useSubMenuToggle";

interface DataType {
    navbarPlacement?: string;
}

const MainMenu = ({ navbarPlacement }: DataType) => {

    const [isOpen, setOpen] = useState(false);
    const { toggleSubMenu, isMenuOpen, getMenuStyle } = useSubMenuToggle();

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">

                <li className={`dropdown megamenu-fw megamenu-style-one ${isMenuOpen('home') ? 'on' : ''}`}>
                    <Link
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('home');
                        }}
                        scroll={false}
                    >
                        Home
                    </Link>
                    <ul
                        className="dropdown-menu megamenu-content"
                        role="menu"
                        style={getMenuStyle('home')}
                    >

                        <li>
                            <div className="col-menu-wrap">
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src="/assets/img/demo/home-1.jpg" alt="Image Not Found" width={600} height={500} />
                                        <div className="overlay">
                                            <Link href="/">Home 1</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/">Home It Solutions</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src="/assets/img/demo/home-2.jpg" alt="Image Not Found" width={600} height={500} />
                                        <div className="overlay">
                                            <Link href="/home-2">Home 2</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-2">Home Technology</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src="/assets/img/demo/home-3.jpg" alt="Image Not Found" width={600} height={500} />
                                        <div className="overlay">
                                            <Link href="/home-3">Home 3</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-3">Home Tech Solution</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src="/assets/img/demo/home-4.jpg" alt="Image Not Found" width={600} height={500} />
                                        <div className="overlay">
                                            <Link href="/home-4">Home 4</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-4">Home It Management</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src="/assets/img/demo/home-5.jpg" alt="Image Not Found" width={600} height={500} />
                                        <div className="overlay">
                                            <Link href="/home-5">Home 5</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-5">Home Data Science</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src="/assets/img/demo/home-6.jpg" alt="Image Not Found" width={600} height={500} />
                                        <div className="overlay">
                                            <Link href="/home-6">Home 6</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-6">Digital It Solution</Link></h6>
                                </div>
                            </div>
                            <div className="megamenu-banner">
                                <Image src="/assets/img/about/1.jpg" alt="Image Not Found" width={785} height={900} />
                                <Link href="#" className="popup-youtube video-play-button" onClick={() => setOpen(true)}>
                                    <i className="fas fa-play" />
                                </Link>
                                <h6 className="title"><Link href="/#">Watch Intro Video</Link></h6>
                            </div>
                        </li>

                    </ul>
                </li>

                <li className={`dropdown megamenu-fw megamenu-style-three ${isMenuOpen('pages') ? 'on' : ''}`}>
                    <Link
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('pages');
                        }}
                        scroll={false}
                    >
                        Pages
                    </Link>
                    <ul className="dropdown-menu megamenu-content" role="menu">
                        <li>
                            <div className="col-menu-wrap">
                                <div className={`col-menu ${isMenuOpen('about') ? 'on' : ''}`}>
                                    <h6 className="title"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleSubMenu('about');
                                        }}
                                    >
                                        About Pages
                                    </h6>
                                    <div
                                        className="content"
                                        style={getMenuStyle('about')}
                                    >
                                        <ul className="menu-col"
                                        >
                                            <li><Link href="/about-us">About Us</Link></li>
                                            <li><Link href="/about-us-2">About Us Two</Link></li>
                                            <li><Link href="/about-us-3">About Style Three</Link></li>
                                            <li><Link href="/about-us-4">About Style Four</Link></li>
                                            <li><Link href="/about-us-5">About Style Five</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={`col-menu ${isMenuOpen('projects') ? 'on' : ''}`}>
                                    <h6
                                        className="title"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleSubMenu('projects');
                                        }}
                                    >
                                        Projects
                                    </h6>
                                    <div
                                        className="content"
                                        style={getMenuStyle('projects')}
                                    >
                                        <ul className="menu-col">
                                            <li><Link href="/project">Project Style One</Link></li>
                                            <li><Link href="/project-2">Project Style Two</Link></li>
                                            <li><Link href="/project-3">Project Style Three</Link></li>
                                            <li><Link href="/project-details/1">Project Details</Link></li>
                                            <li><Link href="/faq">FAQ Page</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={`col-menu ${isMenuOpen('teams') ? 'on' : ''}`}>
                                    <h6 className="title"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleSubMenu('teams');
                                        }}
                                    >
                                        Team Pages
                                    </h6>
                                    <div
                                        className="content"
                                        style={getMenuStyle('teams')}
                                    >
                                        <ul className="menu-col">
                                            <li><Link href="/team">Team Style One</Link></li>
                                            <li><Link href="/team-2">Team Style Two</Link></li>
                                            <li><Link href="/team-3">Team Style Three</Link></li>
                                            <li><Link href="/team-4">Team Style Four</Link></li>
                                            <li><Link href="/team-details/1">Team Details</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={`col-menu ${isMenuOpen('others') ? 'on' : ''}`}>
                                    <h6 className="title"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleSubMenu('others');
                                        }}
                                    >
                                        Other Pages
                                    </h6>
                                    <div
                                        className="content"
                                        style={getMenuStyle('others')}
                                    >
                                        <ul className="menu-col">
                                            <li><Link href="/pricing">Pricing Style One</Link></li>
                                            <li><Link href="/pricing-2">Pricing Style Two</Link></li>
                                            <li><Link href="/contact-us">Contact Us</Link></li>
                                            <li><Link href="/terms-and-condition">Terms & Condition</Link></li>
                                            <li><Link href="/not-found">Error page</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('services') ? 'on' : ''}`}>
                    <Link
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('services');
                        }}
                        scroll={false}
                    >
                        Services
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('services')}
                    >
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/services-3">Services Version Three</Link></li>
                        <li><Link href="/services-4">Services Version Four</Link></li>
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('blog') ? 'on' : ''}`}>

                    <Link href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('blog');
                        }}
                        scroll={false}
                    >
                        Blog
                    </Link>

                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('blog')}
                    >
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Colum</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Colum</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li>

                <li><Link href="/contact-us">contact</Link></li>
            </ul>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
        </>
    );
};

export default MainMenu;