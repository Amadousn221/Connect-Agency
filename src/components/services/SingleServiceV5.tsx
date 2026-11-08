import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    shape: string;
    icon: string;
    title: string;
    description: string;
    features: string[];
}

const SingleServiceV5 = ({ service }: { service: DataType }) => {
    const { id, shape, icon, title, description, features } = service;

    return (
        <>
            <div className="item">
                <div className="shape">
                    <Image src={`/assets/img/shape/${shape}`} alt="Image Not Found" width={270} height={180} />
                </div>
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={80} height={80} />
                </div>
                <h4>
                    <Link href={`/services-details/${id}`}>{title}</Link>
                </h4>
                <p>{description}</p>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SingleServiceV5;