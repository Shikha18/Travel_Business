import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { journeys } from "@/lib/journeys";
import { team } from "@/lib/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages = ["", "/journeys", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const tourPages = journeys.map((j) => ({
    url: `${base}/journeys/${j.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const teamPages = team.map((m) => ({
    url: `${base}/about/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...tourPages, ...teamPages];
}
