"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-initialize reveals on page change
    const initReveal = () => {
      const els = document.querySelectorAll(".reveal");
      const animOn = document.documentElement.classList.contains("anim");
      const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

      if (reduce || !animOn || !("IntersectionObserver" in window)) {
        return;
      }

      // Remove old observers
      els.forEach((el) => {
        el.classList.remove("in");
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      els.forEach((e) => io.observe(e));
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initReveal, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
