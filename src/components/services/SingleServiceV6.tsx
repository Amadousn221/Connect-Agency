import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
    list: string[];
}

const SingleServiceV6 = ({ service }: { service: DataType }) => {
    const { id, icon, title, description, list } = service;

    return (
        <div className="item">
            <div className="icon">
                <Image
                    src={`/assets/img/icon/${icon}`}
                    alt="Service Icon"
                    width={120}
                    height={120}
                />
            </div>
            <h4>
                <Link href={`/services-details/${id}`}>
                    {title}
                </Link>
            </h4>
            <p>{description}</p>
            <ul>
                {list.map((li, index) => (
                    <li key={index}>{li}</li>
                ))}
            </ul>
        </div>
    );
};

export default SingleServiceV6;
