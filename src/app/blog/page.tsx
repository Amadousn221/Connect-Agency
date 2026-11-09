// Page /blog : tous les articles + filtre par catégorie.
import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";
import { BLOG_INDEXABLE, getBlogPosts } from "@/content/blog";

export function generateMetadata(): Metadata {
    const { hasPublished } = getBlogPosts();
    return {
        title: "Blog",
        description: "Conseils et actualités de Connect Web : sites web, e-commerce, outils métiers, marketing digital et informatique.",
        robots: { index: BLOG_INDEXABLE && hasPublished, follow: BLOG_INDEXABLE && hasPublished },
    };
}

export default function BlogPage() {
    return <BlogListing title="Blog" />;
}
