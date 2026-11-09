// Page /blog/categorie/[slug] : articles d'une catégorie (13 catégories indépendantes, voir content/blog.ts).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import { BLOG_INDEXABLE, blogCategories, getBlogPosts, getCategory } from "@/content/blog";

export function generateStaticParams() {
    return blogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategory(slug);
    if (!category) return { title: "Catégorie introuvable", robots: { index: false } };
    const { hasPublished } = getBlogPosts();
    return {
        title: `${category.name} : blog`,
        description: `Les articles du blog Connect Web dans la catégorie ${category.name}.`,
        robots: { index: BLOG_INDEXABLE && hasPublished, follow: BLOG_INDEXABLE && hasPublished },
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = getCategory(slug);
    if (!category) notFound();
    return <BlogListing title={category.name} activeSlug={category.slug} categoryName={category.name} />;
}
