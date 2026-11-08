import Link from "next/link";

interface DataType {
    title: string;
    icon: string;
    link: string;
}

const SingleTechnologyV1 = ({ tech }: { tech: DataType }) => {
    const { title, icon, link } = tech;

    const isValidLink = link && link !== "#";

    return (
        <>
            <li>
                <Link href={link} scroll={false}
                    target={isValidLink ? "_blank" : undefined}
                    rel={isValidLink ? "noopener noreferrer" : undefined}
                >
                    <div className="left">
                        <div className="icon">
                            <i className={icon} />
                        </div>
                        <h4>{title}</h4>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default SingleTechnologyV1;