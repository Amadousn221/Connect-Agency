import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    author: string;
    date: string;
    title: string;
    tags: string[];
    delay: string;
}

const SingleBlogV3 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, author, date, title, tags } = blog

    return (
        <>
            <div className="blog-style-three">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} alt="Thumb" width={800} height={510} />
                    </Link>
                </div>
                <div className="info">
                    <div className="content">
                        <div className="blog-meta">
                            <ul>
                                <li>
                                    <Link href="#" scroll={false}>
                                        <i className="fas fa-user" /> {author}
                                    </Link>
                                </li>
                                <li>
                                    {date}
                                </li>
                            </ul>
                        </div>
                        <h2>
                            <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h2>
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <Link href="#" key={index} scroll={false}>{tag}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SingleBlogV3;