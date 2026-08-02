"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function SiteNav() {
  const path = usePathname();
  return (
    <nav className="site-nav">
      <div className="wrap row">
        <Link href="/" className="brand">
          Mana Pool <span className="tag">Independent audit</span>
        </Link>
        <div className="links">
          <Link href="/" className={path === "/" ? "active" : undefined}>
            The audit
          </Link>
          <Link
            href="/improvements"
            className={path === "/improvements" ? "active" : undefined}
          >
            What I&rsquo;d build
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
