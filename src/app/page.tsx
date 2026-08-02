import type { CSSProperties } from "react";

type Mana = "w" | "u" | "b" | "r" | "g";

type Finding = {
  idx: string;
  mana: Mana;
  sev: string;
  tags: string[];
  title: string;
  body: React.ReactNode;
  rx?: React.ReactNode;
  rxLabel?: string;
  evidence?: React.ReactNode;
};

const FINDINGS: Finding[] = [
  {
    idx: "01",
    mana: "r",
    sev: "Fix first",
    tags: ["Search", "Reproducible"],
    title: "Search autocomplete has no loading state at all",
    body: (
      <>
        <p>
          On first open the suggestions panel appears <em>immediately but empty</em>.
          The hero art shows through it. Results paint roughly a second later, with
          no spinner or skeleton in between. For a full second the site looks broken
          at its single most-used control.
        </p>
        <p>
          The second failure is worse. On a follow-up query the panel keeps showing
          the <em>previous</em> query&rsquo;s results, with nothing marking them as
          stale. I typed <b>counters</b> and the panel sat there listing{" "}
          <b>Light of Day</b>, <b>Light of Hope</b> and <b>Light of Judgment</b>.
        </p>
      </>
    ),
    rxLabel: "Fix",
    rx: (
      <>
        Render a skeleton row on open, and dim the previous results until the next
        query resolves. The fix is small.{" "}
        <a href="/improvements#search">A working version is on the improvements page.</a>
      </>
    ),
    evidence: (
      <figure className="evidence">
        <video autoPlay loop muted playsInline preload="metadata" aria-label="Screen recording of manapool.com search: the suggestions panel opens fully empty and transparent, then results appear a second later">
          <source src="/media/search-no-loading-state.mp4" type="video/mp4" />
        </video>
        <figcaption>
          Live capture, warm cache. The panel opens with nothing in it. No spinner,
          no skeleton, no border against the artwork.
        </figcaption>
      </figure>
    ),
  },
  {
    idx: "02",
    mana: "u",
    sev: "Conversion",
    tags: ["Homepage", "Positioning"],
    title: "The homepage buries the one thing that makes Mana Pool different",
    body: (
      <p>
        The hero is stock battle art plus{" "}
        <em>
          &ldquo;35 million MTG cards in stock, with the best Cart Optimizer in the
          business.&rdquo;
        </em>{" "}
        The optimizer is the reason to choose this store over any other, and it sits
        behind a single link labelled &ldquo;Mass entry&rdquo;. It is never{" "}
        <em>shown</em>. The most valuable feature is the least visible.
      </p>
    ),
    rxLabel: "Recommend",
    rx: (
      <>
        Lead with a live &ldquo;paste your deck, we find the cheapest way to buy
        it&rdquo; moment. The demo needs no new engineering.
      </>
    ),
  },
  {
    idx: "03",
    mana: "u",
    sev: "Conversion",
    tags: ["Navigation", "Copy"],
    title: "“Mass entry” is insider jargon for the marquee feature",
    body: (
      <p>
        No buyer reads &ldquo;Mass entry&rdquo; as &ldquo;build a deck and spend
        less.&rdquo; The label names the input method, and it is the primary entry
        point to the optimizer. The route behind it is already <b>/add-deck</b>. The
        URL is clearer than the label.
      </p>
    ),
    rxLabel: "Recommend",
    rx: <>Rename it for the outcome: &ldquo;Build a deck&rdquo;, or &ldquo;Price a decklist&rdquo;.</>,
  },
  {
    idx: "04",
    mana: "u",
    sev: "Conversion",
    tags: ["Listings", "Trust"],
    title: "Per-seller credibility is good; marketplace-level assurance is missing",
    body: (
      <p>
        Seller rows carry real signal: a verified badge, lifetime sales count,
        location and a free-shipping flag. There is no <em>marketplace</em> promise
        anywhere near the &ldquo;+ Add&rdquo; control. No buyer protection, no
        condition-accuracy guarantee, no return terms. Multi-seller marketplaces
        live or die on that distinction, and the per-seller badge is the signal a
        hesitant buyer trusts least.
      </p>
    ),
    rxLabel: "Recommend",
    rx: <>Put one compact, marketplace-wide protection line beside add-to-cart.</>,
  },
  {
    idx: "05",
    mana: "u",
    sev: "Conversion",
    tags: ["Pricing"],
    title: "Fees appear only once the cart is built",
    body: (
      <>
        <p>
          The Singles Fee surfaces at the cart and nowhere earlier. All-in pricing
          shown up front reduces the surprise that drives abandonment. It is also
          the ground TCGplayer or Cardmarket would choose to attack.
        </p>
        <p>
          A cart I built during this review made the point: twelve cards,{" "}
          <b>$11.30 of product against $13.50 of shipping</b>, across ten packages.
          Shipping cost more than the cards. The optimizer exists to fix exactly
          this, and the buyer meets the number after the cart is already full.
        </p>
      </>
    ),
    rxLabel: "Recommend",
    rx: (
      <>
        Show all-in pricing earlier, and put the shipping gap in front of the buyer
        as a reason to run the optimizer.
      </>
    ),
  },
  {
    idx: "06",
    mana: "b",
    sev: "Craft",
    tags: ["Brand", "Design engineering"],
    title: "The visual brand is undifferentiated",
    body: (
      <p>
        Default blue and green, system typography, generic grids. It works, and it
        is forgettable next to TCGplayer, Card Kingdom and Cardmarket. A light
        visual system would fix it: a type scale, a spacing rhythm, a distinctive
        accent, real iconography.
      </p>
    ),
  },
  {
    idx: "07",
    mana: "b",
    sev: "Craft",
    tags: ["Consistency"],
    title: "Layouts are spaced by hand",
    body: (
      <p>
        Empty vertical space inside components and small inconsistencies across
        screens point to per-screen spacing decisions with no shared tokens. A
        design system removes this kind of drift.
      </p>
    ),
  },
  {
    idx: "08",
    mana: "b",
    sev: "Craft",
    tags: ["Navigation"],
    title: "Navigation differs between home and interior pages",
    body: (
      <p>
        At the same 1512px viewport, the homepage shows a full text navigation and
        interior pages collapse to a hamburger. Minor, and a design system would
        prevent it.
      </p>
    ),
  },
  {
    idx: "09",
    mana: "b",
    sev: "Craft",
    tags: ["URL hygiene"],
    title: "The URL scheme mixes conventions",
    body: (
      <p>
        Routes mix kebab-case and snake_case (<b>/cards</b>, <b>/browse_sealed</b>,{" "}
        <b>/add-deck</b>, <b>/auth</b>); normalise with redirects when convenient.
      </p>
    ),
  },
];

const tier = (m: Mana) => ({ "--tier": `var(--mana-${m})` }) as CSSProperties;

export default function AuditPage() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="kicker">
          <span className="mana-strip" aria-hidden>
            <i className="w" /><i className="u" /><i className="b" /><i className="r" /><i className="g" />
          </span>
          <span className="label">Marketplace teardown · Magic: The Gathering</span>
        </div>
        <h1>
          A great engine, <em>sold like a spreadsheet.</em>
        </h1>
        <p className="standfirst">
          Mana Pool has already built the hard part:{" "}
          <strong>a cart optimizer that saves buyers real money</strong>. The site
          presents it like a database front-end. This audit is about closing that
          gap.
        </p>
      </header>

      <div className="band">
        <div className="cell" data-mana="g" style={tier("g")}>
          <span className="label">Core engine</span>
          <span className="v">Strong</span>
          <span className="d">Optimizer and mass-entry are best-in-class</span>
        </div>
        <div className="cell" data-mana="r" style={tier("r")}>
          <span className="label">Fix first</span>
          <span className="v num">01</span>
          <span className="d">Reproducible search-latency defect</span>
        </div>
        <div className="cell" data-mana="u" style={tier("u")}>
          <span className="label">Conversion levers</span>
          <span className="v num">04</span>
          <span className="d">Positioning, trust and pricing</span>
        </div>
        <div className="cell" data-mana="b" style={tier("b")}>
          <span className="label">Craft &amp; system</span>
          <span className="v num">04</span>
          <span className="d">Undifferentiated surface, no design system</span>
        </div>
      </div>

      <section className="section" id="strengths">
        <div className="head" style={tier("g")}>
          <span className="label">01 · What is strong</span>
          <h2>The hard parts already work</h2>
          <p>
            A competent, function-first product. Nothing is broken, and the parts
            that are hard to build already work well. Protect these.
          </p>
        </div>

        <div className="plates">
          <figure className="plate">
            <img
              src="/media/opt.jpg"
              alt="Mana Pool cart optimizer showing three optimization strategies and a reduced order total"
            />
            <figcaption>
              <span className="cap-label label">Plate 01 · Cart optimizer</span>
              <b>The optimizer is the best reason to shop here.</b> Three
              strategies, progressive results, and it disables the redundant option
              when carts match.
              <span className="swing">
                <s>$25.19 · 10 packages</s> → $15.41 · 2 packages
              </span>
            </figcaption>
          </figure>
          <figure className="plate">
            <img
              src="/media/browse.jpg"
              alt="Mana Pool singles browse page with card art grid and a deep filter rail"
            />
            <figcaption>
              <span className="cap-label label">Plate 02 · Browse</span>
              <b>The browse experience is clean.</b> Large readable card art, a deep
              filter rail (set, foil, condition, colour identity, format), stock and
              condition badges, and a rarity colour strip. This page does its job.
            </figcaption>
          </figure>
        </div>

        <ul className="keeps">
          <li>
            <span className="mk">A</span>
            <span>
              <b>Mass-entry parsing works.</b> Decklists parse live, with card
              thumbnails, multi-format support, a format legend and an invalid-line
              preview.
            </span>
          </li>
          <li>
            <span className="mk">B</span>
            <span>
              <b>Mobile card detail was rebuilt for the small screen.</b> Dense
              desktop columns become tap-to-expand accordions. Someone cared here.
            </span>
          </li>
          <li>
            <span className="mk">C</span>
            <span>
              <b>Cart mechanics are mature.</b> Seller grouping, Letter versus
              Tracked shipping tiers, a free-shipping progress bar, loyalty rewards
              and an itemised fee breakdown.
            </span>
          </li>
          <li>
            <span className="mk">D</span>
            <span>
              <b>Guest checkout already works.</b> Signed out, the cart goes
              straight through to payment. There is no account wall.
            </span>
          </li>
        </ul>
      </section>

      <section className="section" id="findings">
        <div className="head" style={tier("r")}>
          <span className="label">02 · Findings</span>
          <h2>Ranked by what to fix first</h2>
          <p>
            Ordered by impact against effort: one reproducible defect, four
            conversion levers, four craft items. I reproduced each finding on the
            live site.
          </p>
        </div>

        <div className="finds">
          {FINDINGS.map((f) => (
            <article className="find" style={tier(f.mana)} key={f.idx}>
              <span className="idx num">{f.idx}</span>
              <div className="body">
                <h3>{f.title}</h3>
                {f.body}
                {f.evidence}
                {f.rx && (
                  <div className="rx">
                    <span className="label">{f.rxLabel}</span>
                    {f.rx}
                  </div>
                )}
              </div>
              <div className="meta">
                <span className="sev">{f.sev}</span>
                {f.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="method">
        <div className="head" style={tier("w")}>
          <span className="label">03 · Method</span>
          <h2>How this was produced</h2>
          <p>
            I walked the live site at <b>1512px</b> and <b>390px</b>: homepage,
            search and autocomplete, singles browse, a card&rsquo;s seller-listing
            page, add-to-cart, the full cart, the signed-out checkout entry, and the
            mass-entry to optimizer flow with a real twelve-card list.
          </p>
          <p>
            I ranked findings by confidence as well as impact. I hit the search bug
            on four separate queries before writing it up, and I re-verified every
            finding against the live site on <b>1 August 2026</b>.
          </p>
          <p>I have no affiliation with Mana Pool, and nobody commissioned this.</p>
        </div>
      </section>
    </div>
  );
}
