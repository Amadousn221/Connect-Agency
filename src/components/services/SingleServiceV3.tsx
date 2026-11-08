import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const SingleServiceV3 = ({ service }: { service: DataType }) => {
    const { id, icon, title, description } = service;

    return (
        <>
            <div className="services-style-three">
                <div className="info">
                    <div className="icon">
                        <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={128} height={128} />
                    </div>
                    <h3><Link href={`/services-details/${id}`}>{title}</Link></h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;