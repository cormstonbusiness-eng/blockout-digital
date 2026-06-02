import Link from "next/link";

export default function HowWeWork() {
  return (
    <>
      {/* HERO */}
      <section className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="blob"
          data-parallax="36"
          style={{
            width: "200px",
            height: "200px",
            top: "6%",
            left: "-50px",
            opacity: ".85",
          }}
        ></div>
        <div
          className="blob"
          data-parallax="-28"
          style={{
            width: "90px",
            height: "90px",
            bottom: "8%",
            right: "4%",
            background: "var(--ink)",
            animationDelay: "-2s",
          }}
        ></div>

        <div className="wrap center" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow reveal">My process</span>
          <h1 className="display h-xl reveal" data-d="1" style={{ margin: "14px 0 28px", maxWidth: "20ch" }}>
            Top-tier design, <span className="text-orange">without the price tag.</span>
          </h1>
          <p className="lead reveal" style={{ maxWidth: "60ch", margin: "0 auto 48px" }}>
            I believe great design shouldn't cost a fortune. By combining strategic thinking with streamlined processes, I deliver premium websites and branding that rival agencies charging 3x more.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-pad" style={{ background: "var(--paper-warm)", borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "48px" }}>
            <span className="eyebrow">My blockout approach</span>
            <h2 className="h-xl" style={{ marginTop: "14px", maxWidth: "24ch" }}>
              Strategy first, <span className="text-orange">fluff never.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "start" }}>
            <div className="reveal" data-d="1">
              <h3 className="h-md" style={{ marginBottom: "16px" }}>I start with understanding</h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "24px" }}>
                No cookie-cutter templates. I dive deep into your brand, your market, and your goals. I ask the hard questions so I understand exactly what you're trying to achieve. This strategic foundation means every design decision matters.
              </p>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.7" }}>
                This upfront clarity saves time, prevents revisions, and ensures I'm building the right thing – not just a pretty thing.
              </p>
            </div>

            <div className="reveal" data-d="2">
              <h3 className="h-md" style={{ marginBottom: "16px" }}>I eliminate waste</h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "24px" }}>
                Many agencies waste months in unnecessary meetings, design explorations, and over-engineering. I don't. I've refined my process to focus on what actually moves the needle: research, strategy, and execution.
              </p>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.7" }}>
                Working solo means faster turnarounds and lower overhead – savings I pass directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "48px", textAlign: "center", maxWidth: "65ch", marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow">The real talk</span>
            <h2 className="h-xl" style={{ marginTop: "14px" }}>
              You're not paying for <span className="text-orange">overhead.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "28px", boxShadow: "var(--shadow-pop)" }}>
              <h3 className="h-md" style={{ margin: "0 0 12px", color: "var(--orange)" }}>One person, full power</h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                No bloated team, no account managers, no endless rounds of approval. You work directly with Craig – the designer making your work. That means faster decisions and better communication.
              </p>
            </div>

            <div className="reveal" data-d="2" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "28px", boxShadow: "var(--shadow-pop)" }}>
              <h3 className="h-md" style={{ margin: "0 0 12px", color: "var(--orange)" }}>All skills, one designer</h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Web design, branding, marketing, 3D, SEO – all handled in-house by someone who understands the entire ecosystem. No subcontracting, no marking up freelance work.
              </p>
            </div>

            <div className="reveal" data-d="3" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "28px", boxShadow: "var(--shadow-pop)" }}>
              <h3 className="h-md" style={{ margin: "0 0 12px", color: "var(--orange)" }}>Selective projects</h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                I'm picky about who I work with. That means I'm fully invested in your success, not juggling multiple projects. Better work, lower costs, faster delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section-pad" style={{ background: "var(--paper-warm)", borderTop: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "48px", maxWidth: "55ch" }}>
            <span className="eyebrow">Your journey with me</span>
            <h2 className="h-xl" style={{ marginTop: "14px" }}>
              From idea to <span className="text-orange">launch.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gap: "24px" }}>
            <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "32px", boxShadow: "var(--shadow-pop)" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--orange)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#fff", flexShrink: 0 }}>1</div>
                <div>
                  <h3 className="h-md" style={{ margin: "0 0 8px" }}>Discovery & Strategy</h3>
                  <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.6" }}>
                    We listen, ask tough questions, and understand your vision, market, and competitors. This foundation guides everything that follows.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal" data-d="2" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "32px", boxShadow: "var(--shadow-pop)" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--orange)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#fff", flexShrink: 0 }}>2</div>
                <div>
                  <h3 className="h-md" style={{ margin: "0 0 8px" }}>Design & Development</h3>
                  <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.6" }}>
                    Strategic thinking meets beautiful execution. We design systems, not just pages. Every element has purpose. Development is clean, fast, and built to last.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal" data-d="3" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "32px", boxShadow: "var(--shadow-pop)" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--orange)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#fff", flexShrink: 0 }}>3</div>
                <div>
                  <h3 className="h-md" style={{ margin: "0 0 8px" }}>Testing & Launch</h3>
                  <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.6" }}>
                    Nothing ships until it's right. We test across devices, optimize for performance, and ensure everything works flawlessly. Then we launch with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "32px", boxShadow: "var(--shadow-pop)" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--orange)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#fff", flexShrink: 0 }}>4</div>
                <div>
                  <h3 className="h-md" style={{ margin: "0 0 8px" }}>Support & Growth</h3>
                  <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.6" }}>
                    Launch is the beginning. I'm here for support, optimization, and helping you grow. Your success is my success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="wrap center">
          <div className="reveal" style={{ marginBottom: "48px", maxWidth: "55ch", margin: "0 auto 48px" }}>
            <h2 className="h-xl" style={{ marginBottom: "16px" }}>
              Ready to get <span className="text-orange">started?</span>
            </h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Let's talk about your project. No long pitches, no corporate nonsense – just honest conversation about what you need and how we can help.
            </p>
          </div>
          <Link href="/contact" className="btn btn--lg" data-magnetic>
            Start a project <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
