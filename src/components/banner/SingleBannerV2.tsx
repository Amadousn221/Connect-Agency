import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    titleFirst: string;
    titleLast: string;
    description: string;
    buttonText: string;
    thumb: string;
    shape: string;
}

const SingleBannerV2 = ({ banner }: { banner: DataType }) => {
    const { titleFirst, titleLast, description, thumb } = banner

    return (
        <>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 col-lg-9">
                        <div className="content">
                            <h2>{titleFirst} <br /> {titleLast}</h2>
                            <p>
                                {description}
                            </p>
                            <div className="button">
                                <Link className="btn btn-theme btn-md radius animation" href="/contact-us">Get Consultant</Link>
                            </div>
                            <div className="shape-circle" />
                        </div>
                    </div>
                </div>

                <div className="banner-thumb">
                    <Image src={`/assets/img/illustration/${thumb}`} alt="illustration" width={800} height={800} />
                </div>
            </div>
            <div className="banner-shape-right" style={{ background: 'url(/assets/img/shape/2.png)' }} />
        </>
    );
};

export default SingleBannerV2;