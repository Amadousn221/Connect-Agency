// Filtre par catégorie : liens (pas de JavaScript requis), « Tous les articles » + 13 catégories indépendantes.
// Mobile : une rangée défilante horizontalement ; la catégorie active porte aria-current.
import Link from "next/link";
import { blogCategories } from "@/content/blog";

const BlogFilter = ({ active }: { active?: string }) => (
    <nav className="cw-blog-filter" aria-label="Catégories du blog">
        <ul>
            <li>
                <Link href="/blog" className={!active ? "is-active" : undefined} aria-current={!active ? "page" : undefined}>
                    Tous les articles
                </Link>
            </li>
            {blogCategories.map((category) => (
                <li key={category.slug}>
                    <Link
                        href={`/blog/categorie/${category.slug}`}
                        className={active === category.slug ? "is-active" : undefined}
                        aria-current={active === category.slug ? "page" : undefined}
                    >
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default BlogFilter;
