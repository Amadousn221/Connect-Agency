import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    number: string;
    title: string;
    description: string;
    tags: string[];
    clientName: string;
}

const SingleProjectV3 = ({ project }: { project: DataType }) => {
    const { id, thumb, number, title, description, tags, clientName } = project;

    return (
        <>
            <div className="project-style-three-item">
                <div className="row">
                    <div className="col-xl-8 col-lg-6">
                        <Image src={`/assets/img/projects/${thumb}`} alt={title} width={1000} height={590} />
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="project-style-three-info">
                            <span>{number} / </span>
                            <h4>
                                <Link href={`/project-details/${id}`}>{title}</Link>
                            </h4>
                            <p>{description}</p>
                            <ul className="pf-tags">
                                {tags.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>
                            <div className="bottom">
                                <span>Client Name:</span>
                                <h5>{clientName}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV3;
