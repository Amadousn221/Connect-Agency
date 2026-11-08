// Page d'article /blog/[slug] : catégorie affichée et cliquable. Seuls les articles publiés et `pageReady` existent.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteLayout from "@/components/layouts/SiteLayout";
import { formatPostDate, getCategory, posts } from "@/content/blog";

const findPost = (slug: string) => posts.find((post) => post.slug === slug && post.published && post.pageReady);

export function generateStaticParams() {
    return posts.filter((post) => post.published && post.pageReady).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = findPost(slug);
    if (!post) return { title: "Article introuvable", robots: { index: false } };
    return { title: post.title };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = findPost(slug);
    if (!post) notFound();
    const category = getCategory(post.category);

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
                        {post.author} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    </p>
                </div>
            </section>
            <article className="default-padding cw-article">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {post.image && <Image className="cw-article-image" src={post.image} alt="" width={1200} height={675} />}
                            {(post.body ?? []).map((paragraph) => (
                                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                            ))}
                            <p>
                                <Link href="/blog">← Tous les articles</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </SiteLayout>
    );
}
