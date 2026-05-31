import Link from "next/link";

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="section-pad" style={{ paddingBottom: "40px", position: "relative", overflow: "hidden" }}>
        <div className="blob" data-parallax="34" style={{ width: "180px", height: "180px", top: "8%", right: "4%", opacity: ".9" }}></div>
        <div className="blob" data-parallax="-26" style={{ width: "90px", height: "90px", bottom: 0, left: "6%", background: "var(--ink)", animationDelay: "-2s" }}></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow reveal">Our story</span>
          <h1 className="display h-hero reveal" data-d="1" style={{ marginTop: "16px", maxWidth: "20ch" }}>
            From rough drafts to <span className="text-orange">real work.</span>
          </h1>
          <p className="lead reveal" data-d="2" style={{ marginTop: "24px", maxWidth: "56ch" }}>
            Blockout Digital is built on 11 years of creative experience across multiple industries. Every role, every challenge, every project – they were all blockouts. Now it's time for the final piece.
          </p>
        </div>
      </section>

      {/* CRAIG'S JOURNEY */}
      <section className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">The journey</span>
            <h2 className="h-lg" style={{ marginTop: "16px", marginBottom: "32px" }}>
              11 years, 5 roles, 1 vision.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <div className="reveal" data-d="1">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2012 – Newcastle University</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Started with a degree in Computer Games 3D Art. Passion for digital creation, the dream of working in games, and a portfolio full of potential. What I didn't have was a job.
              </p>
            </div>

            <div className="reveal" data-d="2">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2013 – Architectural Visualization (4 years)</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Pivoted to architecture and spent 4 years as a 3D visualizer. Learning how to think spatially, tell stories through visuals, and deliver photorealistic renders. Every project was a blockout – building the structure before the polish.
              </p>
            </div>

            <div className="reveal" data-d="3">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2017 – The Move to Nuneaton</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Relocated for a CAD Technician role and spent 2 years mastering technical precision. Learned how to think like an engineer, communicate through technical drawings, and build systems that work.
              </p>
            </div>

            <div className="reveal" data-d="4">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2019 – Exhibitions & Beyond (3 years)</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Transitioned to the exhibitions industry as a 3D/2D Designer. BeMatrix modular systems, construction drawings, electrical plans, photorealistic 3D renders, and print-ready artwork. This role brought everything together – technical precision meets creative vision.
              </p>
            </div>

            <div className="reveal" data-d="5">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2022 – Learning in Spare Time</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Started teaching myself web design, SEO optimization, and social media marketing. Not in a formal setting – just pure curiosity and passion. Building sites, learning algorithms, understanding how to make brands visible online.
              </p>
            </div>

            <div className="reveal" data-d="6">
              <h3 className="h-md text-orange" style={{ marginBottom: "12px" }}>2024 – Blockout Digital</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Every role was a blockout. Every industry taught me something critical. Now, for the first time, I have the skills, experience, and clarity to do what I do best – create bold, strategic work that actually moves the needle for brands.
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

      {/* CRAIG */}
      <section className="section-pad">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Meet Craig</span>
            <h2 className="h-lg" style={{ marginTop: "16px", marginBottom: "24px" }}>
              11 years of experience. One person. Unlimited capability.
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
              Craig Ormston is the founder and sole operator of Blockout Digital. What started as searching for a single path in the games industry evolved into a multifaceted career spanning architecture, CAD design, exhibitions, web development, and digital marketing.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
              That breadth isn't a weakness – it's the superpower. When you've worked across multiple industries and disciplines, you understand the full picture. You know how to design for reality, not just aesthetics. You understand technical constraints, budget realities, and what actually makes a project succeed.
            </p>
            <p style={{ color: "var(--ink-soft)", lineHeight: "1.7" }}>
              Every skill Craig has gained – from 3D visualization to CAD precision, from technical documentation to web strategy – lives in every project Blockout takes on. You're not getting a designer. You're getting a full creative partner with a decade of hard-won experience.
            </p>
          </div>

          <div>
            <div className="reveal" data-d="1">
              <div className="placeholder" style={{ aspectRatio: "1/1", borderRadius: "var(--r-lg)", marginBottom: "20px" }}>
                <span>Craig Ormston Portrait</span>
              </div>
              <h3 className="h-md">Craig Ormston</h3>
              <p style={{ color: "var(--orange)", fontWeight: 700, marginBottom: "12px" }}>Founder, Designer & Developer</p>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                3D Art, Architectural Visualization, CAD Design, Exhibition Design, Web Design, SEO & Digital Strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="section-pad" style={{ background: "var(--paper-warm)", borderTop: "3px solid var(--ink)" }}>
        <div className="wrap center">
          <div className="reveal">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What's next</span>
            <h2 className="h-lg" style={{ marginTop: "16px", marginBottom: "28px", maxWidth: "20ch" }}>
              Back to where it started. <span className="text-orange">Newcastle.</span>
            </h2>
            <p className="lead" style={{ maxWidth: "65ch", margin: "0 auto", color: "var(--ink-soft)" }}>
              Blockout Digital is relocating back to Newcastle – the city where Craig was born and where his creative journey began. Currently based in Nuneaton, the move back north is about more than geography. It's about building something locally, investing in a community that shaped him, and proving that bold, strategic design can thrive anywhere.
            </p>
            <p style={{ maxWidth: "65ch", margin: "28px auto 0", color: "var(--ink-soft)", lineHeight: "1.7", fontSize: "1.05rem" }}>
              Newcastle has incredible creative talent and ambitious brands. Blockout is here to partner with them – to help local businesses get the design attention and strategic thinking they deserve. Whether you're building something new or ready to level up what you've already created, Blockout Digital is ready to build your blockout.
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
        @media (max-width:780px){ section .wrap[style*="grid-template-columns:1fr 1fr"]{ grid-template-columns:1fr !important; } }
      `}</style>
    </>
  );
}
