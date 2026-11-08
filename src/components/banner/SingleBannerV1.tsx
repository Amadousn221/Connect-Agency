import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id: number;
    bgImage: string;
    subTitle: string;
    title: string;
    buttonText: string;
    shapeImage: string;
}

const SingleBannerV1 = ({ banner }: { banner: DataType }) => {
    const { bgImage, subTitle, title, buttonText } = banner;

    return (
        <>
            <div className="banner-thumb bg-cover shadow theme" style={{ background: `url(/assets/img/banner/${bgImage})` }} />
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-8 offset-xl-4">
                        <div className="content">
                            <h4>{subTitle}</h4>
                            <h2>{title}</h2>
                            <div className="button mt-40">
                                <Link className="btn btn-theme btn-md radius animation" href="/about-us">{buttonText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src="/assets/img/shape/1.png" alt="Shape" width={800} height={630} />
            </div>
        </>
    );
};

export default SingleBannerV1;