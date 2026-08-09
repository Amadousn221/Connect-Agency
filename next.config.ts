import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder mockups (public/mockups/*.svg) — safe, first-party assets only.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
