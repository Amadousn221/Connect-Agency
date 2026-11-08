import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    category: string;
    title: string;
    description: string;
    thumb: string;
}

const SingleProjectV4 = ({ project }: { project: DataType }) => {
    const { id, category, title, description, thumb } = project;

    return (
        <>
            <div className="project-style-two">
                <div className="thumb">
                    <Image src={`/assets/img/gallery/${thumb}`} alt="Image Not Found" width={600} height={675} />
                </div>
                <div className="content">
                    <span>{category}</span>
                    <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                    <p>
                        {description}
                    </p>
                    <Link href={`/project-details/${id}`} className="btn-arrow">
                        <Image src="/assets/img/icon/arrow-icon.svg" alt="Image Not Found" width={36} height={8} />
                        Read More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV4;