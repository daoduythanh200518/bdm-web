import type { MetadataRoute } from "next";
import { SERVICE_DETAILS } from "@/data/services";
import { NEWS } from "@/data/news";
import { SITE } from "@/config/site";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/gioi-thieu`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/dich-vu`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/bao-gia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/bao-gia/bao`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/tin-tuc`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/lien-he`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(SERVICE_DETAILS).map(
    (slug) => ({
      url: `${BASE}/dich-vu/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  const newsRoutes: MetadataRoute.Sitemap = NEWS.map((n) => ({
    url: `${BASE}/tin-tuc/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...newsRoutes];
}
