import type { NextConfig } from "next";

// Pages de démonstration de la template Tekni (faux textes, images grises). Elles restent dans le dépôt jusqu'à la
// validation de l'assemblage (CLAUDE.md), mais ne doivent pas être publiques : en production, elles redirigent vers
// l'accueil. En développement, elles restent accessibles pour comparer avec la démo.
// Quand une vraie page porte l'un de ces préfixes, retirer ou restreindre la règle correspondante.
const demoPrefixes = ["about-us", "pricing", "project", "services", "team"];
const demoRoutes = [
  "/home-:n",
  "/blog-:n",
  "/blog-:n/:id",
  ...demoPrefixes.flatMap((prefix) => [`/${prefix}`, `/${prefix}-:n`, `/${prefix}-:n/:id`]),
  "/contact-us",
  "/faq",
  "/terms-and-condition",
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    if (process.env.NODE_ENV !== "production") return [];
    return demoRoutes.map((source) => ({ source, destination: "/", permanent: false }));
  },
};

export default nextConfig;
