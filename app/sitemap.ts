import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { tours } from "@/lib/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages = ["", "/tours", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const tourPages = tours.map((t) => ({
    url: `${base}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...tourPages];
}
