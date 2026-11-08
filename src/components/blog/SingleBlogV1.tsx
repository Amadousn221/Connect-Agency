import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    author: string;
    date: string;
    title: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, author, date, title } = blog;

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} alt="Thumb" width={800} height={600} />
                    </Link>
                </div>
                <div className="info">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <span>By </span>
                                <Link href="#" scroll={false}>{author}</Link>
                            </li>
                            <li>
                                {date}
                            </li>
                        </ul>
                    </div>
                    <h4>
                        <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                    </h4>
                    <Link href={`/blog-single-with-sidebar/${id}`} className="btn-animate">
                        <span className="circle">
                            <span className="icon arrow" />
                        </span>
                        <span className="button-text">Read More</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;