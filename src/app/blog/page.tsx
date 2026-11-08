// Page /blog : tous les articles + filtre par catégorie.
import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";
import { getBlogPosts } from "@/content/blog";

export function generateMetadata(): Metadata {
    const { hasPublished } = getBlogPosts();
    return {
        title: "Blog",
        description: "Conseils et actualités de Connect Web : sites web, e-commerce, outils métiers, marketing digital et informatique.",
        robots: { index: hasPublished, follow: hasPublished },
    };
}

export default function BlogPage() {
    return <BlogListing title="Blog" />;
}
