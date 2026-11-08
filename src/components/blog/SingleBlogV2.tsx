import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    tag: string;
    author: string;
    date: string;
    title: string;
    description: string;
    sectionClass: string;
    delay: string;
}

const SingleBlogV2 = ({ blog }: { blog: DataType }) => {
    const { thumb, tag, author, date, id, title, description, sectionClass, delay } = blog

    return (
        <>
            <div className={`blog-style-one solid ${sectionClass}`} data-aos="fade-up" data-aos-delay={delay}>
                <div className="thumb">
                    <Image src={`/assets/img/blog/${thumb}`} alt="Image Not Found" width={800} height={900} />
                    <div className="tags"><Link href="#" scroll={false}>{tag}</Link></div>
                    <div className="info">
                        <div className="blog-meta">
                            <ul>
                                <li>
                                    <Link href="#"><i className="fas fa-user" />{author}</Link>
                                </li>
                                <li>
                                    {date}
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h4>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV2;