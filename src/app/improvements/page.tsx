import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The plan",
  description:
    "The short version: fix the search bug, put the optimizer on the homepage, answer the trust question, build a small design system.",
};

const tier = (c: "fix" | "conv" | "craft" | "good" | "meta") =>
  ({ "--tier": `var(--cat-${c})` }) as CSSProperties;

export default function PlanPage() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="kicker">
          <span className="label" style={tier("fix")}>
            The plan // four moves, in order
          </span>
        </div>
        <h1>
          If it were mine, <em>here&rsquo;s the order.</em>
        </h1>
        <p className="standfirst">
          The long version, with evidence, is <a href="/">the audit</a>. This is
          the short one.
        </p>
      </header>

      <ol className="plan">
        <li style={tier("fix")}>
          <span className="n num">0</span>
          <div>
            <h3>Fix the search bug</h3>
            <p>
              Skeleton on open, gray out stale results. A day of work, and the
              site stops looking broken at its most-used control.{" "}
              <a href="/#bug">The fix is already built and running here.</a>
            </p>
            <div className="tags">
              <span>Engineering</span>
              <span>Small</span>
            </div>
          </div>
        </li>
        <li style={tier("conv")}>
          <span className="n num">1</span>
          <div>
            <h3>Put the optimizer on the homepage</h3>
            <p>
              Paste a deck, watch the price drop — live, above the fold. $25.19
              across 10 packages becomes $15.41 across 2. Shown, not claimed.
            </p>
            <div className="tags">
              <span>Product design</span>
              <span>No engineering</span>
            </div>
          </div>
        </li>
        <li style={tier("conv")}>
          <span className="n num">2</span>
          <div>
            <h3>Answer &ldquo;can I trust this?&rdquo; before the cart</h3>
            <p>
              One line of buyer protection next to add-to-cart, and honest
              all-in prices before checkout. Guest checkout is already good;
              these are the two pieces missing around it.
            </p>
            <div className="tags">
              <span>Product design</span>
              <span>Light engineering</span>
            </div>
          </div>
        </li>
        <li style={tier("craft")}>
          <span className="n num">3</span>
          <div>
            <h3>A small design system</h3>
            <p>
              Tokens, a type scale, a component kit. Fixes all four polish items
              at once and speeds up everything built after it. This site runs on
              exactly that: one token file, two themes, color-coded severity.
            </p>
            <div className="tags">
              <span>Design engineering</span>
              <span>Pays off forever</span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
