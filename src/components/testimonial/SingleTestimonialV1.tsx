import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    ratings: number;
    title: string;
    text: string;
    name: string;
    designation: string;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { ratings, title, text, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-style-one">
                <div className="item">
                    <div className="content">
                        <div className="rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                        <h2>{title}</h2>
                        <p>
                            “{text}”
                        </p>
                    </div>
                    <div className="provider">
                        <i className="flaticon-quote" />
                        <div className="info">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;