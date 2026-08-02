import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="wrap row">
        <Link href="/" className="brand">
          Mana Pool <span className="tag">Independent audit</span>
        </Link>
        <div className="links">
          <a href="/#plan">The plan</a>
          <a href="/#about">About me</a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
