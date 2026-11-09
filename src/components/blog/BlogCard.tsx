// Carte d'article : mise en page de la template (blog-3-column, SingleBlog3Column) avec la catégorie en badge cliquable.
// Auteur et date n'apparaissent que s'ils sont renseignés (le pack d'articles n'en fournit pas) ; la durée de lecture
// est affichée à la place.
import Image from "next/image";
import Link from "next/link";
import { formatPostDate, getCategory, type BlogPost } from "@/content/blog";

const BlogCard = ({ post }: { post: BlogPost }) => {
    const category = getCategory(post.category);
    const href = `/blog/${post.slug}`;
    return (
        <article className="blog-style-one">
            <div className="thumb">
                {post.image &&
                    (post.pageReady ? (
                        <Link href={href} tabIndex={-1} aria-hidden="true">
                            <Image src={post.image} alt="" width={800} height={600} />
                        </Link>
                    ) : (
                        <Image src={post.image} alt="" width={800} height={600} />
                    ))}
            </div>
            <div className="info">
                <div className="blog-meta">
                    <ul className="cw-card-meta">
                        {category && (
                            <li className="cw-card-cat">
                                <Link href={`/blog/categorie/${category.slug}`}>{category.name}</Link>
                            </li>
                        )}
                        {post.author && (
                            <li>
                                <i className="fas fa-user" aria-hidden="true" />
                                <span>{post.author}</span>
                            </li>
                        )}
                        {post.date && (
                            <li>
                                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                            </li>
                        )}
                        {post.readingTime && (
                            <li>
                                <i className="far fa-clock" aria-hidden="true" />
                                <span>{post.readingTime} min de lecture</span>
                            </li>
                        )}
                    </ul>
                </div>
                <h3>{post.pageReady ? <Link href={href}>{post.title}</Link> : post.title}</h3>
                {post.pageReady && (
                    <Link href={href} className="btn-simple">
                        <i className="fas fa-angle-right" aria-hidden="true" /> Lire la suite
                    </Link>
                )}
            </div>
        </article>
    );
};

export default BlogCard;
