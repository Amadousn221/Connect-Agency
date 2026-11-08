import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
    delay: number;
}

const SingleServiceV1 = ({ service }: { service: DataType }) => {
    const { id, icon, title, description, delay } = service;

    return (
        <>
            <div className="col-lg-4 mb-30">
                <div className="services-style-one-item" data-aos="fade-up" data-aos-delay={delay}>
                    <div className="icon">
                        <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={256} height={256} />
                    </div>
                    <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                    <p>
                        {description}
                    </p>
                    <Link href={`/services-details/${id}`} className="round-btn">
                        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 17L17 1H7.8" stroke="white" strokeWidth={2} />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV1;