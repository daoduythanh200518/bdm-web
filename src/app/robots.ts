import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

// Dùng chung SITE.url với canonical/og:url để tránh lệch domain
const BASE = SITE.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
