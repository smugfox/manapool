"use client";

import { useEffect, useRef, useState } from "react";

type Card = { name: string; set: string; price: string };

const CARDS: Card[] = [
  { name: "Lightning Bolt", set: "Ravnica: Clue Edition", price: "$1.49" },
  { name: "Light of Day", set: "Battle for Zendikar", price: "$0.15" },
  { name: "Light of Hope", set: "Modern Horizons 3", price: "$0.12" },
  { name: "Counterspell", set: "Commander Masters", price: "$2.16" },
  { name: "Counterbalance", set: "Coldsnap", price: "$8.40" },
  { name: "Countersquall", set: "Conflux", price: "$0.79" },
  { name: "Llanowar Elves", set: "Dominaria", price: "$0.25" },
  { name: "Dark Ritual", set: "Mystical Archive", price: "$2.99" },
  { name: "Swords to Plowshares", set: "Eternal Masters", price: "$3.10" },
  { name: "Brainstorm", set: "Mystical Archive", price: "$1.85" },
];

/** The proposed fix for finding 01, working: skeleton on open, previous
 * results held dimmed while the next query resolves. Latency is simulated
 * at 650ms — slower than the real endpoint, so the states are visible. */
export default function SearchDemo() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (!q.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    timer.current = setTimeout(() => {
      const needle = q.trim().toLowerCase();
      setResults(CARDS.filter((c) => c.name.toLowerCase().includes(needle)).slice(0, 4));
      setLoading(false);
    }, 650);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [q]);

  const open = q.trim().length > 0;
  const showStale = loading && results.length > 0;
  const showSkeleton = loading && results.length === 0;

  return (
    <div className="demo-search">
      <input
        className="inp"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Try “light”, then change it to “counter”…"
        aria-label="Demo card search"
      />
      {open && (
        <div className={`demo-results${showStale ? " is-stale" : ""}`} aria-live="polite">
          {showSkeleton ? (
            <>
              {[0, 1, 2].map((i) => (
                <div className="demo-skel" key={i} aria-hidden>
                  <i className="a" />
                  <i className="b" />
                  <i className="c" />
                </div>
              ))}
            </>
          ) : results.length > 0 ? (
            results.map((c) => (
              <div className="demo-row" key={c.name}>
                <span className="thumb" aria-hidden />
                <span>
                  <span className="nm">{c.name}</span>
                  <br />
                  <span className="st">{c.set}</span>
                </span>
                <span className="pr num">{c.price}</span>
              </div>
            ))
          ) : (
            <div className="demo-skel" style={{ padding: "12px 14px" }}>
              <span className="st">No cards match &ldquo;{q}&rdquo;.</span>
            </div>
          )}
        </div>
      )}
      <p className="demo-note">
        Latency is simulated at 650ms, slower than the real endpoint, so the states
        are visible: skeleton on first open, previous results dimmed while a new
        query resolves.
      </p>
    </div>
  );
}
