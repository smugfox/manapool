import type { CSSProperties } from "react";
import type { Metadata } from "next";
import SearchDemo from "@/components/SearchDemo";

export const metadata: Metadata = {
  title: "What I’d build",
  description:
    "The three things I’d do first for manapool.com, including a working fix for the search bug.",
};

const tier = (c: "fix" | "conv" | "craft" | "good" | "meta") =>
  ({ "--tier": `var(--cat-${c})` }) as CSSProperties;

export default function ImprovementsPage() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="kicker">
          <span className="label" style={tier("fix")}>
            Proposals // what I&rsquo;d do first
          </span>
        </div>
        <h1>
          What I&rsquo;d build, <em>in order.</em>
        </h1>
        <p className="standfirst">
          None of this is a redesign for its own sake.{" "}
          <strong>The good stuff is already built</strong> — these are the three
          things I&rsquo;d do to let it show, plus the bug fix that comes before
          any of them.
        </p>
      </header>

      <div className="rungs">
        <article className="rung" style={tier("fix")} id="search">
          <div className="top">
            <span className="idx num">0</span>
            <h3>First, fix the search bug</h3>
            <div className="tags">
              <span>Fix</span>
              <span>Small</span>
            </div>
          </div>
          <p>
            Before any design work. The panel needs a loading skeleton when it
            opens, and old results should gray out while new ones load. Left:
            the live site today. Right: the fix, working. Go ahead and type in
            it.
          </p>
          <div className="ba">
            <div className="pane" style={tier("fix")}>
              <div className="bar">Today, on manapool.com</div>
              <video autoPlay loop muted playsInline preload="metadata" aria-label="Screen recording of manapool.com search opening an empty, transparent suggestions panel">
                <source src="/media/search-no-loading-state.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pane" style={tier("good")}>
              <div className="bar">The fix, working — try it</div>
              <div className="inner">
                <SearchDemo />
              </div>
            </div>
          </div>
        </article>

        <article className="rung" style={tier("conv")}>
          <div className="top">
            <span className="idx num">1</span>
            <h3>Put the optimizer on the homepage</h3>
            <div className="tags">
              <span>Product design</span>
              <span>No engineering</span>
            </div>
          </div>
          <p>
            The pitch writes itself: paste a deck, watch it get cheaper. The
            engine already works, so this is layout and copy, not new
            engineering.
          </p>
          <div className="ba">
            <div className="pane" style={tier("craft")}>
              <div className="bar">Today&rsquo;s hero</div>
              <div className="inner">
                <p style={{ font: "var(--type-h3)", letterSpacing: "var(--type-h3-ls)" }}>
                  35 million MTG cards in stock, with the best Cart Optimizer in
                  the business.
                </p>
                <p className="demo-note">
                  The claim is there, but you never see it happen. The optimizer
                  is one unexplained link away.
                </p>
              </div>
            </div>
            <div className="pane" style={tier("good")}>
              <div className="bar">Proposed hero</div>
              <div className="inner">
                <p style={{ font: "var(--type-h3)", letterSpacing: "var(--type-h3-ls)" }}>
                  Paste your decklist. We find the cheapest way to buy it.
                </p>
                <p className="demo-note">
                  A live input, prefilled with a sample deck, running the real
                  optimizer. $25.19 across 10 packages becomes $15.41 across 2.
                  Shown, not claimed.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="rung" style={tier("conv")}>
          <div className="top">
            <span className="idx num">2</span>
            <h3>Answer &ldquo;can I trust this?&rdquo; before the cart</h3>
            <div className="tags">
              <span>Product design</span>
              <span>Light engineering</span>
            </div>
          </div>
          <p>
            Buyer protection next to the Add button, and honest all-in prices
            before the cart. Guest checkout is already good — these are the two
            missing pieces around it. My twelve-card cart had $11.30 of cards
            and $13.50 of shipping. That number should be a reason to run the
            optimizer, not a surprise at checkout.
          </p>
        </article>

        <article className="rung" style={tier("craft")}>
          <div className="top">
            <span className="idx num">3</span>
            <h3>A small design system</h3>
            <div className="tags">
              <span>Design engineering</span>
              <span>Pays off forever</span>
            </div>
          </div>
          <p>
            Tokens, a type scale, and a small component kit, so screens stop
            being spaced by hand. This site is the demo: every color, font size
            and gap on these two pages comes from one token file, with a dark
            and a light theme and color-coded severity throughout.
          </p>
        </article>
      </div>
    </div>
  );
}
