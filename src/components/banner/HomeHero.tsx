// Hero de l'accueil — base visuelle : BannerV1 / SingleBannerV1 (démo home-1), choisie par Amadou le 08/11/2026.
// Une seule diapositive statique au lieu du carrousel automatique (docs/09 §4 : pas de slider automatique sans pause ;
// [07-ACC-1] ne contient qu'un message). Les classes swiper-slide-active/visible appliquent l'état final du thème
// sans charger Swiper.
import Image from "next/image";
import Link from "next/link";
import { homeHero } from "@/content/home";

const HomeHero = () => {
    const { eyebrow, title, text, primaryCta, secondaryCta, backgroundImage } = homeHero;

    return (
        <section className="banner-area banner-style-one shadow zoom-effect overflow-hidden text-light cw-hero" aria-labelledby="accueil-titre">
            <div className="swiper-slide swiper-slide-active swiper-slide-visible banner-style-one">
                <div
                    className={`banner-thumb bg-cover ${backgroundImage ? "shadow theme" : "cw-hero-gradient"}`}
                    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
                    aria-hidden="true"
                />
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 offset-xl-4">
                            <div className="content">
                                <p className="cw-hero-eyebrow">{eyebrow}</p>
                                <h1 id="accueil-titre">{title}</h1>
                                <p className="cw-hero-text">{text}</p>
                                <div className="button mt-40 cw-hero-buttons">
                                    <Link className="btn btn-theme btn-md radius animation" href={primaryCta.href}>
                                        {primaryCta.label}
                                    </Link>
                                    <Link className="btn btn-border-light btn-md radius animation" href={secondaryCta.href}>
                                        {secondaryCta.label}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-bg" aria-hidden="true">
                    <Image src="/assets/img/shape/1.png" alt="" width={800} height={630} />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
