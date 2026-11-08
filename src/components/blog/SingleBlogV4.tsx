import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    authorName: string;
    authorImage: string;
    date: string;
    title: string;
    delay: string;
}

const SingleBlogV4 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, title, authorName, authorImage, date } = blog;

    return (
        <>
            <div className="blog-style-four">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} alt="Thumb" width={800} height={600} />
                    </Link>
                    <div className="author">
                        <div className="name">
                            <span>By </span><Link href="#" scroll={false}>{authorName}</Link>
                        </div>
                        <div className="avadar">
                            <Image src={`/assets/img/teams/${authorImage}`} alt="Image Not Found" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <i className="fas fa-clock" /> {date}
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

export default SingleBlogV4;