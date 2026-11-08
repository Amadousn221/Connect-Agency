import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    title: string;
    icon: string;
    iconLight: string;
}

const SingleTechnologyV2 = ({ tech }: { tech: DataType }) => {
    const { title, icon, iconLight } = tech;

    return (
        <>
            <div className="tech-index-two-item">
                <Link href="#" scroll={false}>
                    <div className="icon">
                        <Image src={`/assets/img/icon/${icon}`} alt="Imaeg Not Found" width={75} height={75} />
                        <Image src={`/assets/img/icon/${iconLight}`} alt="Imaeg Not Found" width={75} height={75} />
                    </div>
                    <h5>{title}</h5>
                </Link>
            </div>
        </>
    );
};

export default SingleTechnologyV2;