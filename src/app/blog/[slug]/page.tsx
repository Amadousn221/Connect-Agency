// Page d'article /blog/[slug] : mise en page de la template « blog-single-with-sidebar » (article à gauche, colonne
// latérale à droite). Colonne latérale : appel à contacter, articles récents, catégories (les widgets de la template
// sans contenu réel — recherche, galerie, archives, réseaux, mots-clés — ne sont pas repris).
// Le corps de l'article est du HTML du dépôt (blog-articles.json), jamais du contenu saisi par un visiteur.
// Auteur et date de publication : affichés seulement une fois renseignés dans content/blog.ts (absents du pack).
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteLayout from "@/components/layouts/SiteLayout";
import {
    articleCtaHref,
    BLOG_INDEXABLE,
    formatPostDate,
    getCategory,
    getCategoryCounts,
    getPost,
    posts,
    SITE_URL,
} from "@/content/blog";

export function generateStaticParams() {
    return posts.filter((post) => post.published && post.pageReady).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return { title: "Article introuvable", robots: { index: false } };
    const title = post.seoTitle ?? post.title;
    const url = `${SITE_URL}/blog/${post.slug}`;
    return {
        title,
        description: post.description,
        alternates: { canonical: url },
        robots: { index: BLOG_INDEXABLE, follow: BLOG_INDEXABLE },
        openGraph: {
            type: "article",
            locale: "fr_FR",
            siteName: "Connect Web",
            title,
            description: post.description,
            url,
            images: post.image ? [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 675, alt: post.imageAlt ?? post.title }] : undefined,
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    const category = getCategory(post.category);
    const published = posts.filter((item) => item.published && item.pageReady);
    const index = published.findIndex((item) => item.slug === post.slug);
    const previous = published.length > 1 ? published[(index - 1 + published.length) % published.length] : null;
    const next = published.length > 1 ? published[(index + 1) % published.length] : null;
    const recent = published.filter((item) => item.slug !== post.slug).slice(0, 3);
    const ctaHref = articleCtaHref(post);

    return (
        <SiteLayout>
            <section className="cw-blog-head text-light">
                <div className="container">
                    <nav aria-label="Fil d'Ariane">
                        <ol className="cw-breadcrumb">
                            <li><Link href="/">Accueil</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li aria-current="page">{post.title}</li>
                        </ol>
                    </nav>
                    {category && (
                        <Link className="cw-blog-cat cw-blog-cat-inline" href={`/blog/categorie/${category.slug}`}>
                            {category.name}
                        </Link>
                    )}
                    <h1>{post.title}</h1>
                    <p className="cw-article-meta">
                        {[
                            post.author,
                            post.date ? formatPostDate(post.date) : null,
                            post.readingTime ? `${post.readingTime} min de lecture` : null,
                        ]
                            .filter(Boolean)
                            .join(" · ")}
                    </p>
                </div>
            </section>

            <div className="blog-area single full-blog right-sidebar full-blog default-padding cw-article">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <article className="blog-style-two item">
                                    <div className="blog-item-box">
                                        {post.image && (
                                            <div className="thumb">
                                                <Image src={post.image} alt={post.imageAlt ?? ""} width={1200} height={675} priority />
                                            </div>
                                        )}
                                        <div className="info">
                                            {post.toc && post.toc.length >= 5 && (
                                                <details className="cw-toc">
                                                    <summary>Sommaire de l&apos;article</summary>
                                                    <ul>
                                                        {post.toc.map((entry) => (
                                                            <li key={entry.id}>
                                                                <a href={`#${entry.id}`}>{entry.label}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            )}
                                            {post.bodyHtml && <div className="cw-article-body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />}
                                            {post.cta && (
                                                <p className="cw-article-cta">
                                                    <a className="btn btn-theme btn-md" href={ctaHref} target="_blank" rel="noopener noreferrer">
                                                        {post.cta}
                                                    </a>
                                                </p>
                                            )}
                                            {post.source && (
                                                <p className="cw-article-source">
                                                    Article de référence :{" "}
                                                    <a href={post.source.url} target="_blank" rel="noopener noreferrer">
                                                        {post.source.title}
                                                    </a>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </article>

                                {previous && next && (
                                    <div className="post-pagi-area">
                                        <div className="post-previous">
                                            <Link href={`/blog/${previous.slug}`}>
                                                <div className="icon"><i className="fas fa-angle-double-left" aria-hidden="true" /></div>
                                                <div className="nav-title">Article précédent <h5>{previous.title}</h5></div>
                                            </Link>
                                        </div>
                                        <div className="post-next">
                                            <Link href={`/blog/${next.slug}`}>
                                                <div className="nav-title">Article suivant <h5>{next.title}</h5></div>
                                                <div className="icon"><i className="fas fa-angle-double-right" aria-hidden="true" /></div>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                                <p className="cw-article-back">
                                    <Link href="/blog">← Tous les articles</Link>
                                </p>
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside aria-label="Informations complémentaires">
                                    <div className="sidebar-item cw-sidebar-cta">
                                        <h4 className="title">Un projet en tête ?</h4>
                                        <p>Parlez-nous de votre activité : nous partirons de vos besoins pour étudier la solution adaptée.</p>
                                        <a className="btn btn-theme btn-md" href={ctaHref} target="_blank" rel="noopener noreferrer">
                                            Discuter sur WhatsApp
                                        </a>
                                    </div>
                                    {recent.length > 0 && (
                                        <div className="sidebar-item recent-post">
                                            <h4 className="title">Articles récents</h4>
                                            <ul>
                                                {recent.map((item) => (
                                                    <li key={item.slug}>
                                                        {item.image && (
                                                            <div className="thumb">
                                                                <Link href={`/blog/${item.slug}`} tabIndex={-1} aria-hidden="true">
                                                                    <Image src={item.image} width={500} height={263} alt="" />
                                                                </Link>
                                                            </div>
                                                        )}
                                                        <div className="info">
                                                            {item.readingTime && (
                                                                <div className="meta-title">
                                                                    <span className="post-date">{item.readingTime} min de lecture</span>
                                                                </div>
                                                            )}
                                                            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="sidebar-item category">
                                        <h4 className="title">Catégories</h4>
                                        <div className="sidebar-info">
                                            <ul>
                                                {getCategoryCounts().map((item) => (
                                                    <li key={item.slug}>
                                                        <Link href={`/blog/categorie/${item.slug}`}>
                                                            {item.name} <span>{item.count}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
}
