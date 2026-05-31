"use client";

import Link from "next/link";

export default function Journal() {
  return (
    <>
      {/* HERO */}
      <section className="section-pad" style={{ paddingBottom: "30px", position: "relative", overflow: "hidden" }}>
        <div className="blob" data-parallax="30" style={{ width: "150px", height: "150px", top: "10%", right: "6%" }}></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow reveal">The journal</span>
          <h1 className="display h-hero reveal" data-d="1" style={{ marginTop: "16px", maxWidth: "14ch" }}>
            Notes from the <span className="text-orange">studio.</span>
          </h1>
          <p className="lead reveal" data-d="2" style={{ marginTop: "24px", maxWidth: "52ch" }}>
            Opinions, how-tos and the odd hot take on design, brand and building things that pop.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <Link href="#" className="card reveal feature">
            <div className="placeholder feature__img">
              <span>Featured image · 1400×1000</span>
            </div>
            <div className="feature__body">
              <div className="tag-row">
                <span className="pill pill--orange">Featured</span>
                <span className="pill">Branding</span>
              </div>
              <h2 className="h-lg" style={{ margin: "16px 0" }}>
                Why your rebrand should start with a blockout, not a logo
              </h2>
              <p style={{ color: "var(--ink-soft)", maxWidth: "54ch" }}>
                Everyone wants to jump to the shiny mark. Here's why the boring structural bit is the part that actually makes brands stick.
              </p>
              <div className="row" style={{ marginTop: "20px", gap: "14px" }}>
                <span style={{ fontWeight: 700 }}>Priya Shah</span>
                |
                <span style={{ color: "var(--ink-soft)" }}>6 min read</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* POSTS GRID */}
      <section style={{ paddingBottom: "clamp(64px,9vw,140px)" }}>
        <div className="wrap">
          <div className="grid-3">
            <Link href="#" className="card reveal post" data-d="1">
              <div className="placeholder post__img">
                <span>900×600</span>
              </div>
              <span className="pill" style={{ marginTop: "16px" }}>Web</span>
              <h3 className="h-md" style={{ margin: "12px 0 8px" }}>7 micro-interactions that make a site feel alive</h3>
              <p style={{ color: "var(--ink-soft)" }}>Small touches, big personality.</p>
              <div className="post__foot">
                Joss Kane | 4 min
              </div>
            </Link>
            <Link href="#" className="card reveal post" data-d="2">
              <div className="placeholder post__img" style={{ background: "repeating-linear-gradient(45deg,#16110d 0 14px,#221a14 14px 28px)" }}>
                <span>900×600</span>
              </div>
              <span className="pill" style={{ marginTop: "16px" }}>3D</span>
              <h3 className="h-md" style={{ margin: "12px 0 8px" }}>Photoreal on a budget: our render workflow</h3>
              <p style={{ color: "var(--ink-soft)" }}>How we fake expensive beautifully.</p>
              <div className="post__foot">
                Marco Bello | 8 min
              </div>
            </Link>
            <Link href="#" className="card reveal post" data-d="3">
              <div className="placeholder post__img">
                <span>900×600</span>
              </div>
              <span className="pill" style={{ marginTop: "16px" }}>Marketing</span>
              <h3 className="h-md" style={{ margin: "12px 0 8px" }}>Stop boosting posts. Do this instead.</h3>
              <p style={{ color: "var(--ink-soft)" }}>A saner approach to paid social.</p>
              <div className="post__foot">
                Sam Rivers | 5 min
              </div>
            </Link>
            <Link href="#" className="card reveal post" data-d="1">
              <div className="placeholder post__img" style={{ background: "repeating-linear-gradient(45deg,#16110d 0 14px,#221a14 14px 28px)" }}>
                <span>900×600</span>
              </div>
              <span className="pill" style={{ marginTop: "16px" }}>Exhibitions</span>
              <h3 className="h-md" style={{ margin: "12px 0 8px" }}>Designing a stand people actually queue for</h3>
              <p style={{ color: "var(--ink-soft)" }}>Lessons from the show floor.</p>
              <div className="post__foot">
                Sam Rivers | 6 min
              </div>
            </Link>
            <Link href="#" className="card reveal post" data-d="2">
              <div className="placeholder post__img">
                <span>900×600</span>
              </div>
              <span className="pill" style={{ marginTop: "16px" }}>Brand</span>
              <h3 className="h-md" style={{ margin: "12px 0 8px" }}>Colour theory, but make it bold</h3>
              <p style={{ color: "var(--ink-soft)" }}>Why we're obsessed with orange.</p>
              <div className="post__foot">
                Priya Shah | 3 min
              </div>
            </Link>
            <Link href="#" className="card reveal post" data-d="3">
              <div className="placeholder post__img" style={{ background: "repeating-linear-gradient(45deg,#16110d 0 14px,#221a14 14px 28px)" }}>
                <span>900×600</span>
              </div>
              <span className="pill" style={{ marginTop: "16px" }}>Studio</span>
              <h3 className="h-md" style={{ margin: "12px 0 8px" }}>A week in the life of a Blockout build</h3>
              <p style={{ color: "var(--ink-soft)" }}>Behind the scenes, unfiltered.</p>
              <div className="post__foot">
                The Crew | 7 min
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ink section-pad" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap-tight center">
          <h2 className="h-xl text-paper reveal">
            Get the good stuff, <span className="text-orange">monthly.</span>
          </h2>
          <p className="lead reveal" data-d="1" style={{ color: "#cabfb6", margin: "16px auto 28px", maxWidth: "46ch" }}>
            One tidy email a month. Ideas, work and the occasional strong opinion. No spam, ever.
          </p>
          <form
            className="news-form reveal"
            data-d="2"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector("input") as HTMLInputElement;
              const ok = e.currentTarget.querySelector(".news-ok") as HTMLElement;
              if (ok && input) {
                ok.style.display = "inline-flex";
                input.value = "";
              }
            }}
          >
            <input type="email" placeholder="you@company.com" required aria-label="Email" />
            <button className="btn btn--lg" type="submit" data-magnetic>
              Subscribe <span className="arr">→</span>
            </button>
            <span className="news-ok pill pill--orange" style={{ display: "none" }}>
              You're in!
            </span>
          </form>
        </div>
      </section>

      <style>{`
        .feature{ display:grid; grid-template-columns:1.1fr 1fr; gap:0; padding:0; overflow:hidden; }
        .feature__img{ border:none; border-right:3px solid var(--ink); border-radius:0; min-height:100%; aspect-ratio:auto; }
        .feature__body{ padding:36px; }
        .post__img{ aspect-ratio:3/2; border-radius:var(--r-md); }
        .post{ display:flex; flex-direction:column; }
        .post__foot{ margin-top:16px; font-weight:700; font-size:.95rem; color:var(--ink); }
        .news-form{ display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .news-form input{ font-family:var(--body); font-size:1.05rem; padding:.85em 1.2em; border-radius:999px; border:3px solid var(--orange); min-width:280px; background:#fff; }
        .news-form input:focus{ outline:none; box-shadow:4px 4px 0 var(--orange); }
        @media (max-width:780px){ .feature{ grid-template-columns:1fr; } .feature__img{ border-right:none; border-bottom:3px solid var(--ink); aspect-ratio:16/10; } }
      `}</style>
    </>
  );
}
