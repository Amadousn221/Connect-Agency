// Page de liste du blog (tous les articles ou une catégorie) : bandeau, filtre, grille de 3 colonnes (mise en page de la
// template blog-3-column) ou message de catégorie vide. Pas de pagination tant qu'il y a moins de 7 articles.
import Link from "next/link";
import { getBlogPosts } from "@/content/blog";
import SiteLayout from "../layouts/SiteLayout";
import BlogCard from "./BlogCard";
import BlogFilter from "./BlogFilter";

interface Props {
    title: string;
    activeSlug?: string;
    categoryName?: string;
}

const BlogListing = ({ title, activeSlug, categoryName }: Props) => {
    const { items, isPreview } = getBlogPosts();
    const list = activeSlug ? items.filter((post) => post.category === activeSlug) : items;

    return (
        <SiteLayout>
            <section className="cw-blog-head text-light">
                <div className="container">
                    <nav aria-label="Fil d'Ariane">
                        <ol className="cw-breadcrumb">
                            <li><Link href="/">Accueil</Link></li>
                            {categoryName ? (
                                <>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li aria-current="page">{categoryName}</li>
                                </>
                            ) : (
                                <li aria-current="page">Blog</li>
                            )}
                        </ol>
                    </nav>
                    <h1>{title}</h1>
                </div>
            </section>
            <section className="blog-area blog-grid default-padding cw-blog-page">
                <div className="container">
                    {isPreview && (
                        <p className="cw-preview-banner" role="note">
                            Aperçu de mise en page : articles fictifs affichés en développement.
                        </p>
                    )}
                    <BlogFilter active={activeSlug} />
                    {list.length > 0 ? (
                        <div className="blog-item-box">
                            <div className="row">
                                {list.map((post) => (
                                    <div className="col-xl-4 col-md-6 single-item" key={post.slug}>
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="cw-blog-empty" role="status">
                            <h2>
                                {categoryName ? `Aucun article dans la catégorie « ${categoryName} » pour le moment.` : "Aucun article pour le moment."}
                            </h2>
                            <p>Nous publierons bientôt de nouveaux contenus. Vous pouvez consulter les autres catégories.</p>
                            {activeSlug && (
                                <Link className="btn btn-theme" href="/blog">Voir tous les articles</Link>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
};

export default BlogListing;
