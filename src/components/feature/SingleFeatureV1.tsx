import Image from "next/image";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
    delay: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { title, description, icon, delay } = feature

    return (
        <>
            <div className="feature-style-one" data-aos="fade-up" data-aos-delay={delay}>
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={128} height={128} />
                </div>
                <div className="info">
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV1;