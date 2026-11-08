import Image from "next/image";

interface DataType {
    id: number;
    thumb: string;
    icon: string;
    title: string;
    description: string;
    delay: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { thumb, icon, title, description, delay } = feature

    return (
        <>
            <div className="feature-style-two" data-aos="fade-up" data-aos-delay={delay}>
                <div className="thumb">
                    <Image src={`/assets/img/service/${thumb}`} alt="Image Not Found" width={600} height={350} />
                </div>
                <div className="info">
                    <i className={icon} />
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV2;