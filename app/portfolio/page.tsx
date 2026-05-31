"use client";

import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "web", "brand", "marketing", "exhibition", "3d"];
  const works = [
    { id: 1, cat: "brand", title: "Nimbus", subtitle: "brand & site", tag: "Branding" },
    { id: 2, cat: "exhibition", title: "Volt Expo", subtitle: "", tag: "Exhibition", striped: true },
    { id: 3, cat: "web", title: "Fernweh Travel", subtitle: "", tag: "Website" },
    { id: 4, cat: "3d", title: "Orbit Drinks", subtitle: "", tag: "3D", striped: true },
    { id: 5, cat: "marketing", title: "Bloom & Co", subtitle: "", tag: "Marketing" },
    { id: 6, cat: "web", title: "Pixel Pantry", subtitle: "", tag: "Website", striped: true },
    { id: 7, cat: "brand", title: "Kestrel Studio", subtitle: "", tag: "Branding" },
    { id: 8, cat: "3d", title: "Halo Footwear", subtitle: "", tag: "3D", striped: true },
    { id: 9, cat: "exhibition", title: "Maker Faire", subtitle: "", tag: "Exhibition" },
  ];

  const filteredWorks = activeCategory === "all" ? works : works.filter(w => w.cat === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="section-pad" style={{ paddingBottom: "30px", position: "relative", overflow: "hidden" }}>
        <div className="blob" data-parallax="30" style={{ width: "150px", height: "150px", top: "14%", right: "5%", background: "var(--ink)" }}></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow reveal">Selected work</span>
          <h1 className="display h-hero reveal" data-d="1" style={{ marginTop: "16px", maxWidth: "14ch" }}>
            Blockouts we're <span className="text-orange">proud</span> of.
          </h1>
          <p className="lead reveal" data-d="2" style={{ marginTop: "24px", maxWidth: "50ch" }}>
            A peek at recent projects. (These are placeholders – drop in your own and they'll shine.)
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section style={{ paddingBottom: "30px" }}>
        <div className="wrap">
          <div className="chips reveal" id="filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`chip ${activeCategory === cat ? "on" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ paddingBottom: "clamp(64px,9vw,140px)" }}>
        <div className="wrap">
          <div className="work-grid" id="work-grid">
            {filteredWorks.map((work) => (
              <Link key={work.id} href="/contact" className="work reveal" data-d={work.id % 3 === 0 ? "2" : work.id % 3 === 1 ? "1" : "2"}>
                <div
                  className="placeholder work__img"
                  style={{
                    aspectRatio: "4/3",
                    background: work.striped ? "repeating-linear-gradient(45deg,#16110d 0 14px,#221a14 14px 28px)" : undefined,
                  }}
                >
                  <span>1600×1200</span>
                </div>
                <div className="work__meta">
                  <h3 className="h-md">{work.title}</h3>
                  <span className="pill">{work.tag}</span>
                </div>
              </Link>
            ))}
          </div>
          {filteredWorks.length === 0 && (
            <p id="no-results" style={{ display: "block", textAlign: "center", padding: "40px", fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.4rem" }}>
              Nothing here yet – try another block …
            </p>
          )}
        </div>
      </section>

      <style>{`
        .work-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:30px; }
        .work{ display:block; }
        .work__img{ transition:transform .25s var(--ease-bounce), box-shadow .25s var(--ease-bounce); }
        .work:hover .work__img{ transform:translate(-4px,-4px); box-shadow:var(--shadow-pop-lg); }
        .work__meta{ display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:14px; }
        @media (max-width:900px){ .work-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:560px){ .work-grid{ grid-template-columns:1fr; } }
      `}</style>
    </>
  );
}
