// Section « Blog » de l'accueil — base visuelle : BlogV1 (démo home-1, 3 cartes). Masquée tant qu'aucun article n'est
// publié ; en développement local uniquement, un aperçu fictif signalé par un bandeau la remplace.
// Pas de lien vers une page d'article inexistante ; image absente = fond aux couleurs du thème.
import Image from "next/image";
import Link from "next/link";
import { blogSection, posts, previewPosts } from "@/content/blog";

const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const HomeBlog = () => {
    const { eyebrow, title, minPublished } = blogSection;
    const published = posts.filter((post) => post.published);
    const isPreview = published.length < minPublished && process.env.NODE_ENV === "development";
    const items = published.length >= minPublished ? published.slice(0, 3) : isPreview ? previewPosts : [];
    if (items.length === 0) return null;

    return (
        <section className="home-blog-area default-padding bottom-less cw-blog" aria-labelledby="blog-titre">
            <div className="container">
                {isPreview && (
                    <p className="cw-preview-banner" role="note">
                        Aperçu de mise en page : contenu fictif visible seulement en développement local. Cette section reste masquée
                        tant qu&apos;aucun article n&apos;est publié.
                    </p>
                )}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="blog-titre" className="title">{title}</h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {items.map((post) => (
                        <div className="col-xl-4 col-md-6 mb-30" key={post.slug}>
                            <article className="blog-style-one">
                                <div className="thumb">
                                    {post.image && (
                                        post.pageReady ? (
                                            <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
                                                <Image src={post.image} alt="" width={800} height={600} />
                                            </Link>
                                        ) : (
                                            <Image src={post.image} alt="" width={800} height={600} />
                                        )
                                    )}
                                </div>
                                <div className="info">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>
                                                <svg className="cw-blog-user" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                                                    <circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" />
                                                </svg>
                                                <span>{post.author}</span>
                                            </li>
                                            <li><time dateTime={post.date}>{formatDate(post.date)}</time></li>
                                        </ul>
                                    </div>
                                    <h4>{post.pageReady ? <Link href={`/blog/${post.slug}`}>{post.title}</Link> : post.title}</h4>
                                    {post.pageReady && (
                                        <Link href={`/blog/${post.slug}`} className="btn-animate">
                                            <span className="circle"><span className="icon arrow" /></span>
                                            <span className="button-text">Lire la suite</span>
                                        </Link>
                                    )}
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;
