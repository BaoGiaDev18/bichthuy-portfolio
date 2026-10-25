"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades sections in as they scroll into view, and adds a soft shadow to the header after scrolling.
// Runs again after every client-side page change, so content on the new page is never left hidden.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      root.classList.remove("motion");
      return;
    }
    root.classList.add("motion");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    const watch = () => document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => io.observe(el));
    watch();

    // Catch sections that render a moment after the page change.
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: never leave anything hidden for long.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("in");
      });
    }, 1200);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
