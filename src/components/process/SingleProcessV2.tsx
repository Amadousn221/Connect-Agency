import Image from "next/image";

interface DataType {
    number: string;
    title: string;
    description: string;
    icon: string;
}

const SingleProcessV2 = ({ process }: { process: DataType }) => {
    const { number, title, description, icon } = process;

    return (
        <>
            <div className="process-style-two">
                <span>{number}</span>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={50} height={50} />
                </div>
            </div>
        </>
    );
};

export default SingleProcessV2;