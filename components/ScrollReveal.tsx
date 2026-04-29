"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "left" | "right" | "bottom" | "top";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const dirClass: Record<Direction, string> = {
  left:   "sr-from-left",
  right:  "sr-from-right",
  bottom: "sr-from-bottom",
  top:    "sr-from-top",
};

export default function ScrollReveal({
  children,
  direction = "bottom",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay ? `${delay}ms` : "";
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`sr-hidden ${dirClass[direction]} ${className}`}
    >
      {children}
    </div>
  );
}
