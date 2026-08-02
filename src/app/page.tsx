import type { CSSProperties } from "react";

type Cat = "fix" | "conv" | "craft" | "good" | "meta";

type Finding = {
  idx: string;
  cat: Cat;
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
    cat: "fix",
    sev: "Fix first",
    tags: ["Search", "Reproducible"],
    title: "Search looks broken the first time you use it",
    body: (
      <>
        <p>
          Type in the search box and a suggestion panel pops open with nothing in
          it. You can see the homepage art right through it. About a second later
          the results show up. No spinner, no placeholder, nothing. For that
          second I assumed the site was broken.
        </p>
        <p>
          It gets worse. Type a second search and the panel keeps showing your
          old results. I typed <b>counters</b> and it just sat there listing{" "}
          <b>Light of Day</b>, <b>Light of Hope</b> and <b>Light of Judgment</b>.
        </p>
      </>
    ),
    rxLabel: "What I’d do",
    rx: (
      <>
        Show a loading skeleton the moment the panel opens, and gray out old
        results while new ones load. It&rsquo;s a small fix, and I built it:{" "}
        <a href="/improvements#search">there&rsquo;s a working version on the next page</a>.
      </>
    ),
    evidence: (
      <figure className="evidence">
        <video autoPlay loop muted playsInline preload="metadata" aria-label="Screen recording of manapool.com search: the suggestions panel opens fully empty and transparent, then results appear a second later">
          <source src="/media/search-no-loading-state.mp4" type="video/mp4" />
        </video>
        <figcaption>
          Recorded on the live site. Panel open, nothing in it. No spinner, no
          border, just the artwork showing through.
        </figcaption>
      </figure>
    ),
  },
  {
    idx: "02",
    cat: "conv",
    sev: "Conversion",
    tags: ["Homepage", "Positioning"],
    title: "The homepage never shows you the good part",
    body: (
      <p>
        The homepage says{" "}
        <em>
          &ldquo;35 million MTG cards in stock, with the best Cart Optimizer in
          the business.&rdquo;
        </em>{" "}
        Okay. But it never shows you. The only way in is a little link called
        &ldquo;Mass entry&rdquo;, and I didn&rsquo;t click it for a while because
        I had no idea what it was. The best feature on the site is the hardest
        one to find.
      </p>
    ),
    rxLabel: "What I’d do",
    rx: (
      <>
        Put the optimizer on the homepage. Paste a deck, watch the price drop.
        That demo is worth more than any tagline, and it already works.
      </>
    ),
  },
  {
    idx: "03",
    cat: "conv",
    sev: "Conversion",
    tags: ["Navigation", "Copy"],
    title: "Nobody new knows what “Mass entry” means",
    body: (
      <p>
        It&rsquo;s the main link to the optimizer, and it describes the input box
        instead of what you get out of it. The URL behind it is{" "}
        <b>/add-deck</b>, which honestly says it better.
      </p>
    ),
    rxLabel: "What I’d do",
    rx: (
      <>
        Call it what it does: &ldquo;Build a deck&rdquo; or &ldquo;Price a
        decklist&rdquo;.
      </>
    ),
  },
  {
    idx: "04",
    cat: "conv",
    sev: "Conversion",
    tags: ["Listings", "Trust"],
    title: "I wasn’t sure I could trust the sellers",
    body: (
      <p>
        Each seller shows a verified badge, a sales count and a location, which
        helps. But nowhere near the &ldquo;+ Add&rdquo; button does the site say
        what happens if my card shows up damaged, or never shows up at all. No
        buyer protection, no condition guarantee, no return policy. For a first
        order from a store I&rsquo;d never heard of, that&rsquo;s the thing I
        actually wanted to know.
      </p>
    ),
    rxLabel: "What I’d do",
    rx: (
      <>
        Put one line of buyer protection right next to add-to-cart —
        &ldquo;Every order covered&rdquo; with a link to the policy. That answers
        the question at the exact moment a new buyer is asking it.
      </>
    ),
  },
  {
    idx: "05",
    cat: "conv",
    sev: "Conversion",
    tags: ["Pricing"],
    title: "The fees and shipping show up at the end",
    body: (
      <>
        <p>
          There&rsquo;s a &ldquo;Singles Fee&rdquo; you only learn about at the
          cart. So prices everywhere else look a little cheaper than they really
          are, which is exactly the kind of thing TCGplayer or Cardmarket could
          poke at.
        </p>
        <p>
          My own cart made the case. Twelve cards:{" "}
          <b>$11.30 of cards, $13.50 of shipping</b>, split across ten packages.
          The shipping cost more than the cards. The optimizer exists to fix
          exactly that, and I only found out at the very end.
        </p>
      </>
    ),
    rxLabel: "What I’d do",
    rx: (
      <>
        Show real all-in prices earlier, and turn that shipping number into the
        sales pitch: &ldquo;paying more for shipping than cards? Run the
        optimizer.&rdquo;
      </>
    ),
  },
  {
    idx: "06",
    cat: "craft",
    sev: "Craft",
    tags: ["Brand", "Design engineering"],
    title: "It looks like every other card site",
    body: (
      <p>
        Blue buttons, green buttons, default-looking fonts and grids. Nothing is
        ugly. It&rsquo;s just forgettable next to TCGplayer, Card Kingdom and
        Cardmarket.
      </p>
    ),
    rxLabel: "What I’d do",
    rx: (
      <>
        A basic visual system: a type scale, consistent spacing, an actual accent
        color, real icons. Not a rebrand — a coat of intent.
      </>
    ),
  },
  {
    idx: "07",
    cat: "craft",
    sev: "Craft",
    tags: ["Consistency"],
    title: "Spacing is inconsistent between screens",
    body: (
      <p>
        There&rsquo;s odd empty space inside some components, and gaps that
        don&rsquo;t match from page to page. It looks like each screen was spaced
        by hand instead of from shared values.
      </p>
    ),
    rxLabel: "What I’d do",
    rx: <>Shared spacing tokens. Boring, quick, and the drift stops for good.</>,
  },
  {
    idx: "08",
    cat: "craft",
    sev: "Craft",
    tags: ["Navigation"],
    title: "The nav changes between pages",
    body: (
      <p>
        At the same window width, the homepage shows the full menu and every
        other page collapses it into a hamburger. Small thing, but new visitors
        notice something feels off before they can say what.
      </p>
    ),
    rxLabel: "What I’d do",
    rx: <>One shared header component, used everywhere.</>,
  },
  {
    idx: "09",
    cat: "craft",
    sev: "Craft",
    tags: ["URL hygiene"],
    title: "URLs mix two naming styles",
    body: (
      <p>
        <b>/cards</b>, <b>/browse_sealed</b>, <b>/add-deck</b>, <b>/auth</b>.
        Dashes and underscores side by side. Cosmetic.
      </p>
    ),
    rxLabel: "What I’d do",
    rx: <>Pick one style, redirect the old routes, move on.</>,
  },
];

const tier = (c: Cat) => ({ "--tier": `var(--cat-${c})` }) as CSSProperties;

export default function AuditPage() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="kicker">
          <span className="label" style={tier("fix")}>
            Audit // manapool.com · first visit · checked against the live site, Aug 2026
          </span>
        </div>
        <h1>
          I used Mana Pool for the first time. <em>Here&rsquo;s what I found.</em>
        </h1>
        <p className="standfirst">
          Short version: <strong>the cart optimizer is the best reason to shop
          here</strong>, and you&rsquo;d never know it from the homepage. One
          real bug, four things that lose new buyers, four bits of polish. Most
          of what&rsquo;s below is about closing that gap.
        </p>
      </header>

      <div className="band">
        <div className="cell" data-cat="good" style={tier("good")}>
          <span className="label">The good news</span>
          <span className="v">Strong</span>
          <span className="d">The optimizer and deck tools really work</span>
        </div>
        <div className="cell" data-cat="fix" style={tier("fix")}>
          <span className="label">Fix first</span>
          <span className="v num">01</span>
          <span className="d">A search bug anyone can reproduce</span>
        </div>
        <div className="cell" data-cat="conv" style={tier("conv")}>
          <span className="label">Easy wins</span>
          <span className="v num">04</span>
          <span className="d">Where new buyers fall off</span>
        </div>
        <div className="cell" data-cat="craft" style={tier("craft")}>
          <span className="label">Polish</span>
          <span className="v num">04</span>
          <span className="d">Small stuff that adds up</span>
        </div>
      </div>

      <section className="section" id="strengths">
        <div className="head" style={tier("good")}>
          <span className="label">01 · The good parts</span>
          <h2>What already works</h2>
          <p>
            Nothing here is broken. The hard stuff is built and it works. This
            section is short on purpose.
          </p>
        </div>

        <div className="plates">
          <figure className="plate">
            <img
              src="/media/opt.jpg"
              alt="Mana Pool cart optimizer showing three optimization strategies and a reduced order total"
            />
            <figcaption>
              <span className="cap-label label">The cart optimizer</span>
              <b>This is the killer feature.</b> I pasted a 12-card list and it
              found three different ways to buy it, then told me which one was
              cheapest.
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
              <span className="cap-label label">Browsing</span>
              <b>Browsing is good.</b> Big card images, lots of filters (set,
              foil, condition, color, format), clear condition badges. No
              complaints.
            </figcaption>
          </figure>
        </div>

        <ul className="keeps">
          <li>
            <span className="mk">A</span>
            <span>
              <b>Deck entry works great.</b> Paste a list, it figures out the
              format, shows card thumbnails as you type, and flags any line it
              can&rsquo;t read.
            </span>
          </li>
          <li>
            <span className="mk">B</span>
            <span>
              <b>The mobile card pages were actually designed for phones</b>, not
              just squished down. Dense desktop columns become tap-to-expand
              sections. Someone cared here.
            </span>
          </li>
          <li>
            <span className="mk">C</span>
            <span>
              <b>The cart does a lot of smart things.</b> Groups by seller, shows
              cheap-letter vs. tracked shipping, a free-shipping progress bar,
              and a full fee breakdown.
            </span>
          </li>
          <li>
            <span className="mk">D</span>
            <span>
              <b>Guest checkout just works.</b> Signed out, I went straight to
              payment. No account wall. A lot of stores get this wrong.
            </span>
          </li>
        </ul>
      </section>

      <section className="section" id="findings">
        <div className="head" style={tier("fix")}>
          <span className="label">02 · The problems</span>
          <h2>What I&rsquo;d fix, in order</h2>
          <p>
            One real bug, four things that lose new buyers, four bits of polish.
            I ran into every one of these myself. Each problem comes with what
            I&rsquo;d do about it.
          </p>
        </div>

        <div className="finds">
          {FINDINGS.map((f) => (
            <article className="find" style={tier(f.cat)} key={f.idx}>
              <span className="idx num">{f.idx}</span>
              <div className="body">
                <h3>{f.title}</h3>
                <div className="duo">
                  <div className="problem">{f.body}</div>
                  {f.rx && (
                    <aside className="fix-card">
                      <span className="label">{f.rxLabel}</span>
                      <p>{f.rx}</p>
                    </aside>
                  )}
                </div>
                {f.evidence}
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
        <div className="head" style={tier("meta")}>
          <span className="label">03 · How I did this</span>
          <h2>Method, briefly</h2>
          <p>
            I went through the whole site on desktop (<b>1512px</b>) and phone
            (<b>390px</b>): homepage, search, browsing, a card page, the cart,
            checkout while signed out, and the deck-entry-to-optimizer flow with
            a real twelve-card list.
          </p>
          <p>
            I hit the search bug on four different queries before writing it up,
            and rechecked everything against the live site on{" "}
            <b>August 1, 2026</b>.
          </p>
          <p>No connection to Mana Pool. Nobody asked me to do this.</p>
        </div>
      </section>
    </div>
  );
}
