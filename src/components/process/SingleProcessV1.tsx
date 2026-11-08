import Image from "next/image";

interface DataType {
    thumb: string;
    step: string;
    title: string;
    description: string;
    delay: number;
    animation: string;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
    const { thumb, step, title, description, delay } = process

    return (
        <>
            <div className="col-lg-4">
                <div className="process-style-one" data-aos="fade-up" data-aos-delay={delay}>
                    <div className="thumb">
                        <Image src={`/assets/img/about/${thumb}`} alt="Thumb" width={600} height={750} />
                        <span>{step}</span>
                    </div>
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleProcessV1;