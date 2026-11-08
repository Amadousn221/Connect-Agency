import Image from "next/image";
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    quoteIcon: string;
    thumb: string;
    name: string;
    position: string;
    reviewText: string;
    brandIcon: string;
    reviews: number;
    ratings: number;
    delay: string;
}

const SingleTestimonialV4 = ({ testimonial }: { testimonial: DataType }) => {
    const { quoteIcon, thumb, name, position, reviewText, brandIcon, reviews, ratings } = testimonial;

    return (
        <>
            <div className="testimonial-style-four">
                <div className="quote">
                    <Image
                        src={`/assets/img/icon/${quoteIcon}`}
                        alt="Quote Icon"
                        width={80}
                        height={60}
                    />
                </div>

                <div className="provider">
                    <div className="thumb">
                        <Image
                            src={`/assets/img/${thumb}`}
                            alt={name}
                            width={700}
                            height={700}
                        />
                    </div>

                    <div className="info">
                        <h4>{name}</h4>
                        <span>{position}</span>
                    </div>
                </div>

                <p>{reviewText}</p>

                <div className="bottom-info">
                    <div className="provider-brand">
                        <Image
                            src={`/assets/img/icon/${brandIcon}`}
                            alt="Brand Icon"
                            width={80}
                            height={25}
                        />
                        <span>{reviews} Reviews</span>
                    </div>

                    <div className="icon">
                        <RatingsStar ratings={ratings} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV4;