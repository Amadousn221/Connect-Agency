// Section « Blog » de l'accueil — base visuelle : BlogV1 (démo home-1, 3 cartes). Masquée tant qu'aucun article n'est
// publié ; en développement local uniquement, un aperçu fictif signalé par un bandeau la remplace.
// Pas de lien vers une page d'article inexistante ; image absente = fond aux couleurs du thème.
import Link from "next/link";
import BlogCard from "./BlogCard";
import { blogSection, posts, previewPosts, SHOW_EXAMPLES_IN_PRODUCTION } from "@/content/blog";

const HomeBlog = () => {
    const { eyebrow, title, minPublished } = blogSection;
    const published = posts.filter((post) => post.published);
    const showExamples = published.length < minPublished && (process.env.NODE_ENV === "development" || SHOW_EXAMPLES_IN_PRODUCTION);
    // Le bandeau explicatif n'existe qu'en développement local.
    const isPreview = showExamples && process.env.NODE_ENV === "development";
    const items = published.length >= minPublished ? published.slice(0, 3) : showExamples ? previewPosts : [];
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
                            <h4 className="cw-sub">{eyebrow}</h4>
                            <h2 id="blog-titre" className="title">{title}</h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {items.map((post) => (
                        <div className="col-xl-4 col-md-6 mb-30" key={post.slug}>
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
                <p className="text-center mt-20">
                    <Link className="btn btn-border-theme" href="/blog">Tous les articles</Link>
                </p>
            </div>
        </section>
    );
};

export default HomeBlog;
