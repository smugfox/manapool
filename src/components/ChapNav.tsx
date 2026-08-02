"use client";

import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "good", label: "The good parts" },
  { id: "bug", label: "The bug" },
  { id: "wins", label: "Easy wins" },
  { id: "polish", label: "Polish" },
  { id: "method", label: "Method" },
];

/** Sticky chapter rail with scroll-spy. Hidden under 1100px via CSS. */
export default function ChapNav() {
  const [active, setActive] = useState("good");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          seen.set(e.target.id, e.isIntersecting && e.boundingClientRect.top < window.innerHeight * 0.6);
        }
        for (let i = CHAPTERS.length - 1; i >= 0; i--) {
          if (seen.get(CHAPTERS[i].id)) {
            setActive(CHAPTERS[i].id);
            return;
          }
        }
      },
      { rootMargin: "-15% 0px -55% 0px" }
    );
    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <nav className="chapnav" aria-label="Chapters">
      <ol>
        {CHAPTERS.map((c) => (
          <li key={c.id}>
            <a href={`#${c.id}`} aria-current={active === c.id ? "true" : undefined}>
              {c.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
