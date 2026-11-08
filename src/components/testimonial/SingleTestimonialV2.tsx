import Image from "next/image";
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    title: string;
    ratings: number;
    text: string;
    name: string;
    location: string;
    logo: string;
    quoteImg: string;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { ratings, text, name, location, title } = testimonial

    return (
        <>
            <div className="testimonial-style-two">
                <Image src="/assets/img/shape/quote.png" alt="Quote" width={135} height={120} />
                <div className="top-info">
                    <h3>{title}</h3>
                    <div className="testimonial-rating">
                        <RatingsStar ratings={ratings} />
                    </div>
                </div>
                <div className="info">
                    <p>{text}</p>
                </div>
                <div className="provider">
                    <div className="content">
                        <h4>{name}</h4>
                        <span>{location}</span>
                    </div>
                    <div className="thumb">
                        <Image src="/assets/img/logo/01.png" alt="Logo" width={132} height={36} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;