import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    shapeImage: string;
    category: string[];
    title: string;
}

const SingleProjectV2 = ({ project }: { project: DataType }) => {
    const { id, thumb, category, title } = project;

    return (
        <>
            <div className="gallery-item wow fadeInUp" data-aos-delay="100">
                <div className="gallery-style-one">
                    <Image src={`/assets/img/gallery/${thumb}`} alt="Thumb" width={800} height={900} />
                    <div className="shape">
                        <Image src="/assets/img/shape/35.png" alt="Image Not Found" width={890} height={865} />
                    </div>
                    <div className="overlay">
                        <div className="content">
                            <span>{category.join(", ")}</span>
                            <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV2;