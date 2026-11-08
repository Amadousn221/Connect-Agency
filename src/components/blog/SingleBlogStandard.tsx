import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    date: string;
    author: string;
    title: string;
    description: string;
    btnText: string;
}

const SingleBlogStandard = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, author, title, description, btnText } = blog;

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Link href={`/blog-single/${id}`}>
                        <Image
                            src={`/assets/img/blog/${thumb}`}
                            alt="Thumb"
                            width={1075}
                            height={565}
                        />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link href="#">
                                    <i className="far fa-calendar-alt" /> {date}
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="far fa-user-circle" /> {author}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h2>
                        <Link href={`/blog-single/${id}`}>{title}</Link>
                    </h2>
                    <p>{description}</p>
                    <Link className="btn mt-10 btn-md circle btn-theme animation" href={`/blog-single/${id}`}>
                        {btnText}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;
