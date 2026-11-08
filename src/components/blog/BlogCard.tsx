// Carte d'article (base SingleBlogV1) avec la catégorie en badge cliquable vers sa page.
import Image from "next/image";
import Link from "next/link";
import { formatPostDate, getCategory, type BlogPost } from "@/content/blog";

const BlogCard = ({ post }: { post: BlogPost }) => {
    const category = getCategory(post.category);
    return (
        <article className="blog-style-one">
            <div className="thumb">
                {post.image &&
                    (post.pageReady ? (
                        <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
                            <Image src={post.image} alt="" width={800} height={600} />
                        </Link>
                    ) : (
                        <Image src={post.image} alt="" width={800} height={600} />
                    ))}
                {category && (
                    <Link className="cw-blog-cat" href={`/blog/categorie/${category.slug}`}>
                        {category.name}
                    </Link>
                )}
            </div>
            <div className="info">
                <div className="blog-meta">
                    <ul>
                        <li>
                            <svg className="cw-blog-user" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 21a8 8 0 0 1 16 0" />
                            </svg>
                            <span>{post.author}</span>
                        </li>
                        <li>
                            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                        </li>
                    </ul>
                </div>
                <h3>{post.pageReady ? <Link href={`/blog/${post.slug}`}>{post.title}</Link> : post.title}</h3>
                {post.pageReady && (
                    <Link href={`/blog/${post.slug}`} className="btn-animate">
                        <span className="circle">
                            <span className="icon arrow" />
                        </span>
                        <span className="button-text">Lire la suite</span>
                    </Link>
                )}
            </div>
        </article>
    );
};

export default BlogCard;
