import type { CSSProperties } from "react";
import ChapNav from "@/components/ChapNav";
import SearchDemo from "@/components/SearchDemo";

type Cat = "fix" | "conv" | "craft" | "good" | "meta";
const tier = (c: Cat) => ({ "--tier": `var(--cat-${c})` }) as CSSProperties;

/* the four conversion findings: medium blocks, fix as a full-width band */
const WINS = [
  {
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
    rx: "Put the optimizer on the homepage. Paste a deck, watch the price drop. That demo is worth more than any tagline, and it already works.",
  },
  {
    title: "Nobody new knows what “Mass entry” means",
    body: (
      <p>
        It&rsquo;s the main link to the optimizer, and it describes the input box
        instead of what you get out of it. The URL behind it is <b>/add-deck</b>,
        which honestly says it better.
      </p>
    ),
    rx: "Call it what it does: “Build a deck” or “Price a decklist”.",
  },
  {
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
    rx: "Put one line of buyer protection right next to add-to-cart — “Every order covered” with a link to the policy. It answers the question at the exact moment a new buyer is asking it.",
  },
  {
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
    rx: "Show real all-in prices earlier, and turn that shipping number into the sales pitch: paying more for shipping than cards? Run the optimizer.",
  },
];

const POLISH = [
  { what: "It looks like every other card site", why: "Default fonts, default blues and greens. Forgettable next to TCGplayer, Card Kingdom, Cardmarket.", fix: "A small visual system: type scale, spacing, an accent, real icons." },
  { what: "Spacing is inconsistent between screens", why: "Odd empty space inside components; gaps that don’t match page to page.", fix: "Shared spacing tokens. The drift stops for good." },
  { what: "The nav changes between pages", why: "Full menu on the homepage, hamburger everywhere else, same window width.", fix: "One shared header component." },
  { what: "URLs mix two naming styles", why: "/cards, /browse_sealed, /add-deck, /auth. Dashes and underscores side by side.", fix: "Pick one, redirect the old routes." },
];

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
          <span className="v num">1 bug</span>
          <span className="d">Anyone can reproduce it in the search box</span>
        </div>
        <div className="cell" data-cat="conv" style={tier("conv")}>
          <span className="label">Easy wins</span>
          <span className="v num">04</span>
          <span className="d">Where new buyers fall off</span>
        </div>
        <div className="cell" data-cat="craft" style={tier("craft")}>
          <span className="label">Polish</span>
          <span className="v num">04</span>
          <span className="d">Small stuff, displayed small</span>
        </div>
      </div>

      <div className="layout">
        <ChapNav />
        <main>
          <section className="chapter" id="good">
            <div className="head" style={tier("good")}>
              <span className="label">01 · The good parts</span>
              <h2>What already works</h2>
              <p>
                Nothing here is broken. The hard stuff is built and it works.
                This section is short on purpose.
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
                  <b>This is the killer feature.</b> I pasted a 12-card list and
                  it found three different ways to buy it, then told me which one
                  was cheapest.
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
                  <b>Browsing is good.</b> Big card images, lots of filters
                  (set, foil, condition, color, format), clear condition badges.
                  No complaints.
                </figcaption>
              </figure>
            </div>

            <ul className="keeps">
              <li>
                <span className="mk">A</span>
                <span>
                  <b>Deck entry works great.</b> Paste a list, it figures out the
                  format, shows card thumbnails as you type, and flags any line
                  it can&rsquo;t read.
                </span>
              </li>
              <li>
                <span className="mk">B</span>
                <span>
                  <b>The mobile card pages were actually designed for phones</b>,
                  not just squished down. Dense desktop columns become
                  tap-to-expand sections. Someone cared here.
                </span>
              </li>
              <li>
                <span className="mk">C</span>
                <span>
                  <b>The cart does a lot of smart things.</b> Groups by seller,
                  shows cheap-letter vs. tracked shipping, a free-shipping
                  progress bar, and a full fee breakdown.
                </span>
              </li>
              <li>
                <span className="mk">D</span>
                <span>
                  <b>Guest checkout just works.</b> Signed out, I went straight
                  to payment. No account wall. A lot of stores get this wrong.
                </span>
              </li>
            </ul>
          </section>

          <section className="chapter" id="bug">
            <div className="head" style={tier("fix")}>
              <span className="label">02 · The bug</span>
              <h2>Search looks broken the first time you use it</h2>
            </div>

            <article className="finding" style={tier("fix")}>
              <div className="prose">
                <p>
                  Type in the search box and a suggestion panel pops open with
                  nothing in it. You can see the homepage art right through it.
                  About a second later the results show up. No spinner, no
                  placeholder, nothing. For that second I assumed the site was
                  broken.
                </p>
                <p>
                  It gets worse. Type a second search and the panel keeps showing
                  your old results. I typed <b>counters</b> and it just sat there
                  listing <b>Light of Day</b>, <b>Light of Hope</b> and{" "}
                  <b>Light of Judgment</b>.
                </p>
              </div>

              <div className="fx-band">
                <span className="label">What I&rsquo;d do</span>
                <p>
                  Show a loading skeleton the moment the panel opens, and gray
                  out old results while new ones load. It&rsquo;s a small fix,
                  and I built it. That&rsquo;s it below on the right — try it.
                </p>
              </div>

              <div className="ba">
                <div className="pane" style={tier("fix")}>
                  <div className="bar">Today, on manapool.com — recorded live</div>
                  <video autoPlay loop muted playsInline preload="metadata" aria-label="Screen recording of manapool.com search: the suggestions panel opens fully empty and transparent, then results appear a second later">
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
          </section>

          <section className="chapter" id="wins">
            <div className="head" style={tier("conv")}>
              <span className="label">03 · Easy wins</span>
              <h2>Where new buyers fall off</h2>
              <p>
                Four things that cost sales, none of them hard to change. I ran
                into all four on my first visit.
              </p>
            </div>

            {WINS.map((w) => (
              <article className="finding" style={tier("conv")} key={w.title}>
                <span className="eyebrow">Conversion</span>
                <h3>{w.title}</h3>
                <div className="prose">{w.body}</div>
                <div className="fx-band">
                  <span className="label">What I&rsquo;d do</span>
                  <p>{w.rx}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="chapter" id="polish">
            <div className="head" style={tier("craft")}>
              <span className="label">04 · Polish</span>
              <h2>Small stuff, displayed small</h2>
              <p>
                None of these lose a sale on their own. Together they&rsquo;re
                why the site feels generic. A design system fixes all four at
                once.
              </p>
            </div>
            <div className="quick">
              {POLISH.map((p) => (
                <div className="row" key={p.what}>
                  <div className="what">
                    <b>{p.what}</b>
                    <span>{p.why}</span>
                  </div>
                  <div className="fix">{p.fix}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="chapter" id="method">
            <div className="head" style={tier("meta")}>
              <span className="label">05 · How I did this</span>
              <h2>Method, briefly</h2>
              <p>
                I went through the whole site on desktop (<b>1512px</b>) and
                phone (<b>390px</b>): homepage, search, browsing, a card page,
                the cart, checkout while signed out, and the
                deck-entry-to-optimizer flow with a real twelve-card list.
              </p>
              <p>
                I hit the search bug on four different queries before writing it
                up, and rechecked everything against the live site on{" "}
                <b>August 1, 2026</b>.
              </p>
              <p>No connection to Mana Pool. Nobody asked me to do this.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
