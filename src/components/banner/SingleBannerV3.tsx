import Image from "next/image";
import RatingsStar from "../utilities/RatingsStar";
import Link from "next/link";

interface DataType {
    id: number;
    bannerImage: string;
    shapeImage: string;
    subtitle: string;
    title: string;
    ratings: number;
    ratingText: string;
    buttonText: string;
}

const SingleBannerV3 = ({ banner }: { banner: DataType }) => {
    const { bannerImage, shapeImage, subtitle, title, ratings, ratingText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover" style={{ background: `url(/assets/img/banner/${bannerImage})` }} />
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 col-lg-7 col-md-10">
                        <div className="content">
                            <h4>{subtitle}</h4>
                            <h2>{title}</h2>
                            <ul>
                                <li>
                                    <div className="cusotmer-rating">
                                        <RatingsStar ratings={ratings} />
                                    </div>
                                    ({ratings},/5) {ratingText}
                                </li>
                            </ul>
                            <div className="button">
                                <Link className="btn btn-theme btn-md animation" href="/contact-us">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape">
                <Image src={`/assets/img/shape/${shapeImage}`} alt="Shape" width={465} height={465} />
            </div>
        </>
    );
};

export default SingleBannerV3;