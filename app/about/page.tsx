import Link from "next/link";

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="section-pad" style={{ paddingBottom: "40px", position: "relative", overflow: "hidden" }}>
        <div className="blob" data-parallax="34" style={{ width: "180px", height: "180px", top: "8%", right: "4%", opacity: ".9" }}></div>
        <div className="blob" data-parallax="-26" style={{ width: "90px", height: "90px", bottom: 0, left: "6%", background: "var(--ink)", animationDelay: "-2s" }}></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow reveal">About the studio</span>
          <h1 className="display h-hero reveal" data-d="1" style={{ marginTop: "16px", maxWidth: "15ch" }}>
            Hello, we're <span className="text-orange">Blockout.</span>
          </h1>
          <p className="lead reveal" data-d="2" style={{ marginTop: "24px", maxWidth: "56ch" }}>
            A small, mighty design studio that does the lot – websites, branding, marketing, exhibitions and 3D. We exist to make bold brands that people actually remember.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "center" }}>
          <div className="placeholder reveal" style={{ aspectRatio: "4/5" }}>
            <span>Studio photo · 1200×1500</span>
          </div>
          <div className="reveal" data-d="1">
            <span className="eyebrow">Our story</span>
            <h2 className="h-lg" style={{ margin: "14px 0 18px" }}>
              We started Blockout to do things <span className="underline-wiggle">properly</span> – and loudly.
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px" }}>
              A "blockout" is the rough draft a designer builds before the polish – the structure that everything beautiful gets built on. We loved that idea so much we named the whole studio after it.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              Because the best work isn't an accident. It's deliberate, built block by block, by people who actually care. No bloated retainers, no jargon, no boring. Just sharp ideas, made real.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div className="reveal center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What we believe</span>
            <h2 className="h-xl" style={{ marginTop: "14px" }}>
              Four bricks we never <span className="text-orange">skip.</span>
            </h2>
          </div>
          <div className="grid-4" style={{ marginTop: "48px" }}>
            <div className="card reveal" data-d="1">
              <div className="display h-lg text-orange">A</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Brave or bust</h3>
              <p style={{ color: "var(--ink-soft)" }}>Safe ideas don't get remembered. We push for the bold version, every time.</p>
            </div>
            <div className="card reveal" data-d="2">
              <div className="display h-lg text-orange">B</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Built to last</h3>
              <p style={{ color: "var(--ink-soft)" }}>Pretty is easy. We engineer work that performs long after launch day.</p>
            </div>
            <div className="card reveal" data-d="3">
              <div className="display h-lg text-orange">C</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Straight talk</h3>
              <p style={{ color: "var(--ink-soft)" }}>No jargon, no smoke. You'll always know exactly what we're doing and why.</p>
            </div>
            <div className="card reveal" data-d="4">
              <div className="display h-lg text-orange">D</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Genuinely fun</h3>
              <p style={{ color: "var(--ink-soft)" }}>If we're not enjoying it, it shows. So we make the process a good time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CREW */}
      <section className="section-pad">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">The founder</span>
            <h2 className="h-xl" style={{ marginTop: "14px" }}>One person, every skill.</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "18px", maxWidth: "56ch" }}>
              Blockout Digital is a solo studio founded and run by Craig Ormston. Full-stack design, development, and strategy — all delivered with meticulous attention to detail.
            </p>
          </div>
          <div style={{ marginTop: "42px" }} className="reveal">
            <div style={{ maxWidth: "300px" }}>
              <div className="placeholder" style={{ aspectRatio: "1/1", borderRadius: "var(--r-lg)", marginBottom: "16px" }}>
                <span>Portrait</span>
              </div>
              <h3 className="h-md">Craig Ormston</h3>
              <p style={{ color: "var(--orange)", fontWeight: 700 }}>Founder & Solo Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee marquee--ink">
        <div className="marquee__track">
          <span>EVERY GREAT PROJECT STARTS WITH A BLOCKOUT</span>
          <span>EVERY GREAT PROJECT STARTS WITH A BLOCKOUT</span>
        </div>
      </div>

      <style>{`
        @media (max-width:780px){ section .wrap[style*="grid-template-columns:1fr 1fr"]{ grid-template-columns:1fr !important; } }
      `}</style>
    </>
  );
}
