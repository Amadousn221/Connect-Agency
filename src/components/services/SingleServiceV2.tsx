import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    icon: string;
    title: string;
    description: string;
    delay: string;
}

const SingleServiceV2 = ({ service }: { service: DataType }) => {
    const { id, thumb, icon, title, description, delay } = service;

    return (
        <>
            <div className="services-style-two active" data-aos="fade-up" data-aos-delay={delay}>
                <div className="thumb">
                    <Image src={`/assets/img/service/${thumb}`} alt="Thumb" width={800} height={600} />
                    <div className="title">
                        <Link href={`/services-details/${id}`}>
                            <div className="icon">
                                <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={60} height={60} />
                            </div>
                            <h4>{title}</h4>
                        </Link>
                    </div>
                </div>
                <div className="info">
                    <p>{description}</p>
                    <div className="button">
                        <Link href={`/services-details/${id}`}>Read More</Link>
                        <div className="devider" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV2;