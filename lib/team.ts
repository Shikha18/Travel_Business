/**
 * Team members — the source of truth for the /about/team/[slug] route
 * and the hover cards on /about. Keep slugs stable: they appear in URLs.
 *
 * The biographical text itself lives in lib/translations.ts (the
 * `about.founder.*` / `about.partner.*` keys). This file only describes
 * WHICH member maps to WHICH translation-key prefix, plus contact /
 * visual defaults that aren't locale-dependent.
 */

import { siteConfig } from "./site-config";

export type TeamMember = {
  /** URL slug — part of /about/team/[slug] */
  slug: string;
  /** Translation-key prefix, e.g. "about.founder" or "about.partner" */
  prefix: "about.founder" | "about.partner";
  fullName: string;
  firstName: string;
  flag: string;
  photo: string;
  /** Accent color used in ring / chip / quote block */
  accent: "saffron" | "teal";
  /** Initials-placeholder gradient (Tailwind class) */
  gradient: string;
  /** Social / contact (blank strings hide the button) */
  instagram: string;
  instagramHandle: string;
  linkedin: string;
  email: string;
  whatsapp: string;
};

export const team: TeamMember[] = [
  {
    slug: "shikha",
    prefix: "about.founder",
    fullName: siteConfig.founder.name,
    firstName: siteConfig.founder.firstName,
    flag: siteConfig.founder.flag,
    photo: siteConfig.founder.photo,
    accent: "saffron",
    gradient: "from-saffron-300 via-saffron-500 to-terracotta-600",
    instagram: siteConfig.founder.instagram,
    instagramHandle: siteConfig.founder.instagramHandle,
    linkedin: siteConfig.founder.linkedin,
    email: siteConfig.founder.email,
    whatsapp: siteConfig.founder.whatsapp,
  },
  {
    slug: "melissa",
    prefix: "about.partner",
    fullName: siteConfig.partner.name,
    firstName: siteConfig.partner.firstName,
    flag: siteConfig.partner.flag,
    photo: siteConfig.partner.photo,
    accent: "teal",
    gradient: "from-teal-300 via-teal-500 to-ink-700",
    instagram: siteConfig.partner.instagram,
    instagramHandle: siteConfig.partner.instagramHandle,
    linkedin: siteConfig.partner.linkedin,
    email: siteConfig.partner.email,
    whatsapp: siteConfig.partner.whatsapp,
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
