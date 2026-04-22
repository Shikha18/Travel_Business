"use client";

import Link, { type LinkProps } from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { useLocale } from "@/lib/use-i18n";
import { buildLocaleHref } from "@/lib/i18n";

type Props = Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: string;
    children?: ReactNode;
  };

/**
 * Like <Link>, but automatically carries the current `?lang=` query param
 * across internal navigation so the language selection persists.
 *
 * For external URLs (http/https/mailto/tel), pass-through unchanged.
 */
const LocaleLink = forwardRef<HTMLAnchorElement, Props>(function LocaleLink(
  { href, children, ...rest },
  ref
) {
  const locale = useLocale();

  const isExternal =
    /^(https?:|mailto:|tel:|#)/i.test(href) || href.startsWith("//");

  const finalHref = isExternal ? href : buildLocaleHref(href, locale);

  return (
    <Link href={finalHref} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

export default LocaleLink;
