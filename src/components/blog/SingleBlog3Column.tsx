import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    author: string;
    date: string;
    title: string;
}

const SingleBlog3Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, author, date, title } = blog;

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image
                            src={`/assets/img/blog/${thumb}`}
                            alt="Thumb"
                            width={800}
                            height={600}
                        />
                    </Link>
                </div>

                <div className="info">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <i className="fas fa-user" />
                                <Link href={`/blog-single-with-sidebar/${id}`}>{author}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h3>
                        <Link href={`/blog-single-with-sidebar/${id}`}>
                            {title}
                        </Link>
                    </h3>

                    <Link
                        href={`/blog-single-with-sidebar/${id}`}
                        className="btn-simple"
                    >
                        <i className="fas fa-angle-right" /> Read more
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;
