import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    category: string;
    title: string;
    description: string;
}


const SingleProjectV1 = ({ project }: { project: DataType }) => {
    const { id, thumb, category, title, description } = project;

    return (
        <>
            <div className="project-style-one">
                <div className="row align-bottom">
                    <div className="col-lg-7 pr-0 pr-md-15 pr-xs-15 pl-md-15 pl-xs-15">
                        <div className="thumb">
                            <Image src={`/assets/img/projects/${thumb}`} alt="Image Not Found" width={1000} height={667} />
                        </div>
                    </div>
                    <div className="col-lg-5 pl-0 pl-md-15 pl-xs-15 pr-md-15 pr-xs-15">
                        <div className="info">
                            <span>{category}</span>
                            <h2><Link href={`/project-details/${id}`}>{title}</Link></h2>
                            <p> {description}</p>
                            <Link className="btn-animation dark mt-10" href={`/project-details/${id}`}>
                                <i className="fas fa-arrow-right" />
                                <span>View Project</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;