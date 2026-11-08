import Image from "next/image";

interface DataType {
    id: number;
    shape: string;
    icon: string;
    title: string;
    titleLast: string;
    description: string;
}

const SingleFeatureV3 = ({ feature }: { feature: DataType }) => {
    const { shape, icon, title, titleLast, description } = feature;

    return (
        <>
            <div className="shape">
                <Image src={`/assets/img/shape/${shape}`} alt="Image Not Found" width={205} height={155} />
            </div>
            <div className="item">
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={100} height={100} />
                </div>
                <h4>{title} <br /> {titleLast}</h4>
                <p>
                    {description}
                </p>
            </div>
        </>
    );
};

export default SingleFeatureV3;