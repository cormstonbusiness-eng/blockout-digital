import Link from "next/link";

export default function About() {
  return (
    <>
      {/* HERO - CRAIG PORTRAIT */}
      <section className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
        <div className="blob" data-parallax="34" style={{ width: "180px", height: "180px", top: "8%", right: "4%", opacity: ".9" }}></div>
        <div className="blob" data-parallax="-26" style={{ width: "90px", height: "90px", bottom: 0, left: "6%", background: "var(--ink)", animationDelay: "-2s" }}></div>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <span className="eyebrow reveal">Meet Craig</span>
            <h1 className="display h-lg reveal" data-d="1" style={{ marginTop: "16px", marginBottom: "24px" }}>
              11 years. Multiple <span className="text-orange">industries.</span>
            </h1>
            <p className="lead reveal" data-d="2" style={{ marginBottom: "20px", lineHeight: "1.7" }}>
              Craig Ormston is the founder and sole operator of Blockout Digital. A journey that started in architectural visualization evolved into something much bigger – a multifaceted career spanning 3D visualization, CAD design, exhibition design, and self-taught web development and digital strategy.
            </p>
            <p className="lead reveal" data-d="3" style={{ marginBottom: "20px", lineHeight: "1.7", color: "var(--ink-soft)" }}>
              That range isn't a scattered résumé – it's the foundation of everything. When you've designed for architects, engineered with CAD precision, built modular exhibition systems, and taught yourself web strategy from the ground up, you understand the full picture.
            </p>
          </div>

          <div className="reveal" data-d="1">
            <img src="/craig-portrait.jpg" alt="Craig Ormston" style={{ aspectRatio: "1/1", borderRadius: "var(--r-lg)", marginBottom: "20px", width: "100%", objectFit: "cover", border: "3px solid var(--ink)" }} />
            <h3 className="h-md">Craig Ormston</h3>
            <p style={{ color: "var(--orange)", fontWeight: 700, marginBottom: "12px" }}>Founder, Designer & Developer</p>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Architectural Visualization, CAD Design, Exhibition Design, 3D Rendering, Construction Documentation, Web Design, SEO, Digital Marketing & Full-Stack Strategy.
            </p>
          </div>
        </div>
      </section>

      {/* CRAIG'S JOURNEY */}
      <section className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">The journey</span>
            <h2 className="h-lg" style={{ marginTop: "16px", marginBottom: "32px" }}>
              11 years. 3 industries. 1 vision.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <div className="reveal" data-d="1">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2015 – Architectural Visualization (4 years)</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Started in the architectural visualization industry. Learning how to think spatially, tell stories through visuals, and deliver photorealistic renders that sell ideas. Every project was a blockout – building the structure before the polish.
              </p>
            </div>

            <div className="reveal" data-d="2">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2016 – Learning Begins</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Started teaching myself web design, SEO optimization, and social media marketing in spare time. This wasn't formal education – it was pure curiosity. Building sites, learning algorithms, understanding how to make brands visible online. And I haven't stopped.
              </p>
            </div>

            <div className="reveal" data-d="3">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2018-2021 – Newcastle University</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Returned to education while still working in archviz. A Computer Games 3D Art degree gave me formal foundation in digital creation, but by now I was learning more from real-world projects. Bridging theory with practical experience.
              </p>
            </div>

            <div className="reveal" data-d="4">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2021 – CAD Technician (2 years)</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Shifted focus to technical precision. Two years as a CAD Technician taught me how to think like an engineer, communicate through technical drawings, and build systems that actually work in the real world.
              </p>
            </div>

            <div className="reveal" data-d="5">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2024 – Exhibitions & Beyond (Present)</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Transitioned to the exhibitions industry as a 3D/2D Designer while relocating to Nuneaton. BeMatrix modular systems, construction drawings, electrical plans, photorealistic 3D renders, and print-ready artwork. This role brought everything together – technical precision meets creative vision meets real-world execution.
              </p>
            </div>

            <div className="reveal" data-d="1">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2026 – Blockout Digital Launches</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                After 11 years across multiple industries, the journey comes together. Blockout Digital is formed with a complete toolkit: architectural visualization, CAD precision, exhibition design expertise, web development, and 10 years of self-taught digital strategy. Now beginning the move back to Newcastle.
              </p>
            </div>
          </div>


          <div style={{ marginTop: "54px", padding: "36px", background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", boxShadow: "var(--shadow-pop)" }} className="reveal" data-d="1">
            <h3 className="h-md" style={{ margin: "0 0 16px" }}>The setbacks</h3>
            <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: "1.7" }}>
              Layoffs happened. Business decisions that weren't my own. But every time I bounced back, I learned something new. Every challenge pushed me to be better, more versatile, more resilient. Those moments aren't the end of the story – they're just another blockout on the way to something bigger.
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

      {/* COMING HOME */}
      <section className="section-pad" style={{ background: "var(--paper-warm)", borderTop: "3px solid var(--ink)" }}>
        <div className="wrap center">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Coming home</span>
            <h2 className="h-lg" style={{ marginTop: "16px", marginBottom: "28px", maxWidth: "20ch", marginLeft: "auto", marginRight: "auto" }}>
              Blockout returns to <span className="text-orange">Newcastle.</span>
            </h2>
            <p className="lead" style={{ maxWidth: "65ch", margin: "0 auto", color: "var(--ink-soft)" }}>
              Founded in 2026, Blockout Digital is relocating from Nuneaton back to Newcastle – the city where Craig was born and where this creative journey began. It's not just a geographic move. It's a return to roots with a complete toolkit and 11 years of hard-won expertise.
            </p>
            <p style={{ maxWidth: "65ch", margin: "28px auto 0", color: "var(--ink-soft)", lineHeight: "1.7", fontSize: "1.05rem" }}>
              Newcastle's creative community deserves design partners who understand both the artistry and the business. Blockout brings architectural visualization expertise, technical precision from CAD and exhibitions, web development skills, and a decade of digital strategy learning. Whether you're building something bold or leveling up what's already working, there's a studio ready to build your blockout – and the experience to make it real.
            </p>
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
        @media (max-width:780px){
          section .wrap[style*="grid-template-columns:1fr 1fr"]{ grid-template-columns:1fr !important; }
        }
        @media (max-width:640px){
          .reveal[style*="grid-template-columns: 1fr 1fr"]{ grid-template-columns: 1fr !important; gap: 28px !important; }
          .placeholder{ width: 100%; max-width: 100%; }
        }
      `}</style>
    </>
  );
}
