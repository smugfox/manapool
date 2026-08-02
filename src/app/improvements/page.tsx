import type { CSSProperties } from "react";
import type { Metadata } from "next";
import SearchDemo from "@/components/SearchDemo";

export const metadata: Metadata = {
  title: "What I’d build",
  description:
    "The three highest-return design moves for manapool.com, with a working fix for the search defect.",
};

const tier = (m: "w" | "u" | "b" | "r" | "g") =>
  ({ "--tier": `var(--mana-${m})` }) as CSSProperties;

export default function ImprovementsPage() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="kicker">
          <span className="mana-strip" aria-hidden>
            <i className="w" /><i className="u" /><i className="b" /><i className="r" /><i className="g" />
          </span>
          <span className="label">Proposals · ranked by expected return</span>
        </div>
        <h1>
          What I&rsquo;d build, <em>in order.</em>
        </h1>
        <p className="standfirst">
          All three point at the same fact: <strong>the differentiator already
          exists</strong>. None of this is speculative redesign. Each item is scoped
          against what the site already does today.
        </p>
      </header>

      <div className="rungs">
        <article className="rung" style={tier("r")} id="search">
          <div className="top">
            <span className="idx num">0</span>
            <h3>First, the defect: give search a loading state</h3>
            <div className="tags">
              <span>Fix</span>
              <span>Small</span>
            </div>
          </div>
          <p>
            This precedes any redesign. The panel needs a skeleton on open, and it
            needs to hold the previous results visibly dimmed while the next query
            resolves. Below is the actual behaviour of manapool.com today, next to
            a working version of the fix.
          </p>
          <div className="ba">
            <div className="pane" style={tier("r")}>
              <div className="bar">Today, on manapool.com</div>
              <video autoPlay loop muted playsInline preload="metadata" aria-label="Screen recording of manapool.com search opening an empty, transparent suggestions panel">
                <source src="/media/search-no-loading-state.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pane" style={tier("g")}>
              <div className="bar">The fix, working — try it</div>
              <div className="inner">
                <SearchDemo />
              </div>
            </div>
          </div>
        </article>

        <article className="rung" style={tier("u")}>
          <div className="top">
            <span className="idx num">1</span>
            <h3>Homepage and optimizer storytelling</h3>
            <div className="tags">
              <span>Product design</span>
              <span>No engineering</span>
            </div>
          </div>
          <p>
            Reframe the funnel around &ldquo;paste a deck, spend less.&rdquo; The
            engine already works, so this is positioning and flow work. It is the
            cheapest large win at the top of the funnel.
          </p>
          <div className="ba">
            <div className="pane" style={tier("b")}>
              <div className="bar">Today&rsquo;s hero</div>
              <div className="inner">
                <p style={{ font: "var(--type-h3)", letterSpacing: "var(--type-h3-ls)" }}>
                  35 million MTG cards in stock, with the best Cart Optimizer in the
                  business.
                </p>
                <p className="demo-note">
                  The claim is asserted, never demonstrated. The optimizer is one
                  unlabelled link away.
                </p>
              </div>
            </div>
            <div className="pane" style={tier("g")}>
              <div className="bar">Proposed hero</div>
              <div className="inner">
                <p style={{ font: "var(--type-h3)", letterSpacing: "var(--type-h3-ls)" }}>
                  Paste your decklist. We find the cheapest way to buy it.
                </p>
                <p className="demo-note">
                  A live input, prefilled with a sample deck, running the real
                  optimizer. The proof is the pitch: $25.19 across 10 packages
                  becomes $15.41 across 2.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="rung" style={tier("u")}>
          <div className="top">
            <span className="idx num">2</span>
            <h3>Trust and pricing at the point of decision</h3>
            <div className="tags">
              <span>Product design</span>
              <span>Light engineering</span>
            </div>
          </div>
          <p>
            Marketplace-level buyer protection beside &ldquo;+ Add&rdquo;, and
            all-in pricing before the cart. Guest checkout already works; these are
            the two pieces missing around it. During the review, a twelve-card cart
            carried $11.30 of product and $13.50 of shipping. That number belongs in
            front of the buyer, as the reason to run the optimizer, not at the end
            as a surprise.
          </p>
        </article>

        <article className="rung" style={tier("b")}>
          <div className="top">
            <span className="idx num">3</span>
            <h3>A lightweight design system</h3>
            <div className="tags">
              <span>Design engineering</span>
              <span>Long-run payoff</span>
            </div>
          </div>
          <p>
            Tokens, a type scale and a component kit, so consistent, branded UI
            ships fast. On a small team, this work speeds up everything built after
            it. This site is the demonstration: every colour, type style and
            spacing step on these two pages comes from one token file, themed light
            and dark, with the five mana colours carrying all categorical meaning.
          </p>
        </article>
      </div>
    </div>
  );
}
