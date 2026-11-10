// Section « Blog » de l'accueil — base visuelle : BlogV1 (démo home-1, 3 cartes). Masquée tant qu'aucun article n'est
// publié ; en développement local uniquement, un aperçu fictif signalé par un bandeau la remplace.
// Pas de lien vers une page d'article inexistante ; image absente = fond aux couleurs du thème.
import Link from "next/link";
import BlogCard from "./BlogCard";
import { blogSection, posts, previewPosts, SHOW_EXAMPLES_IN_PRODUCTION } from "@/content/blog";

const HomeBlog = () => {
    const { eyebrow, title, description, cta, minPublished } = blogSection;
    const published = posts.filter((post) => post.published);
    const showExamples = published.length < minPublished && (process.env.NODE_ENV === "development" || SHOW_EXAMPLES_IN_PRODUCTION);
    // Le bandeau explicatif n'existe qu'en développement local.
    const isPreview = showExamples && process.env.NODE_ENV === "development";
    const items = published.length >= minPublished ? published.slice(0, 3) : showExamples ? previewPosts : [];
    if (items.length === 0) return null;

    return (
        <section className="default-padding cw-blog" aria-labelledby="blog-titre">
            <div className="container">
                {isPreview && (
                    <p className="cw-preview-banner" role="note">
                        Aperçu de mise en page : contenu fictif visible seulement en développement local. Cette section reste masquée
                        tant qu&apos;aucun article n&apos;est publié.
                    </p>
                )}
                <div className="cw-blog-intro site-heading">
                    <h4 className="cw-sub">{eyebrow}</h4>
                    <h2 id="blog-titre" className="title">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="cw-blog-grid">
                    {items.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
                <p className="cw-blog-more">
                    <Link className="btn btn-md btn-border-theme" href="/blog">{cta}</Link>
                </p>
            </div>
        </section>
    );
};

export default HomeBlog;
