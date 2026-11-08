import Image from "next/image";

interface DataType {
    id: number;
    title: string;
    icon: string;
    description: string;
}

const SingleProcessV3 = ({ process }: { process: DataType }) => {
    const { title, icon, description } = process;

    return (
        <>
            <div className="process-style-three">
                <h4>{title}</h4>
                <div className="info">
                    <div className="icon">
                        <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={60} height={60} />
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default SingleProcessV3;