import Link from "next/link";

interface DataType {
    id: number;
    title: string;
    description: string;
    price: {
        amount: number;
        currency: string;
        duration: string;
        label: string;
    };
    features: {
        text: string;
        enabled: boolean;
    }[];
    button: {
        text: string;
        variant: string;
    };
    isActive: boolean;
    delay: number
}

const SinglePriceV1 = ({ plan }: { plan: DataType }) => {
    const {
        title,
        description,
        price: { amount, currency, duration, label },
        features,
        button: { text: buttonText, variant },
        isActive,
        delay
    } = plan;

    return (
        <div
            className={`pricing-style-one wow fadeInUp ${isActive ? "active" : ""}`}
            data-aos-delay={delay}
            style={{ backgroundImage: "url(/assets/img/shape/15.webp)" }}
        >
            <div className="pricing-header">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>

            <div className="pricing-content">
                <div className="price">
                    {label ? (
                        <h2><strong>{label}</strong></h2>
                    ) : (
                        <h2>
                            <sup>{currency}</sup>
                            {amount} <sub>/ {duration}</sub>
                        </h2>
                    )}
                </div>

                <ul>
                    {features.map(({ text, enabled }, index) => (
                        <li key={index}>
                            <i
                                className={`fas ${enabled ? "fa-check-circle" : "fa-times-circle"
                                    }`}
                            />{" "}
                            {text}
                        </li>
                    ))}
                </ul>

                <Link
                    className={`btn mt-25 btn-sm btn-${variant} animation`}
                    href="/contact-us"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

export default SinglePriceV1;
