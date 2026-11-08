import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    icon: string;
    title: string;
    price: number;
    discount: string;
    duration: string;
    buttonClass: string;
    buttonText: string;
    features: {
        text: string;
        icon: string;
        available: boolean;
    }[];
}

const SinglePriceV2 = ({ plan }: { plan: DataType }) => {
    const { icon, title, price, discount, duration, buttonClass, buttonText, features } = plan;

    return (
        <div className="pricing-style-two" data-aos="fade-up" data-aos-delay="">
            <div className="pricing-header">
                <div className="icon">
                    <Image
                        src={`/assets/img/icon/${icon}`}
                        alt="Image Not Found"
                        width={60}
                        height={60}
                    />
                </div>
                <h4>{title}</h4>
            </div>

            <div className="pricing-content">
                <div className="price">
                    <h2>
                        ${price} <strong className="discount">{discount}</strong>
                    </h2>
                    <span>{duration}</span>
                </div>

                <Link className={buttonClass} href="/contact-us">
                    {buttonText}
                </Link>

                <ul>
                    {features.map((item, index) => (
                        <li key={index}>
                            <i className={item.icon} /> {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SinglePriceV2;
