import Link from "next/link";
import TrustpilotReviews from "@/components/TrustpilotReviews";

export default function Home() {
  return (
    <>
      {/* HERO – MEGA TYPE + STICKERS */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 0 40px" }}>
        <div>
          <div className="wrap center" style={{ position: "relative", zIndex: 2 }}>
            <h1
              className="display reveal"
              data-d="2"
              style={{
                fontSize: "clamp(2.6rem,13vw,11rem)",
                margin: "10px 0",
                letterSpacing: "-.02em",
              }}
            >
              HELLO, I'M <span className="text-orange">BLOCKOUT.</span>
            </h1>
            <p className="lead mx-auto reveal" data-d="3" style={{ maxWidth: "50ch" }}>
              A full-service design studio for brands that would rather be loved than tolerated.
            </p>
            <div className="row reveal" data-d="4" style={{ justifyContent: "center", marginTop: "28px" }}>
              <Link href="/contact" className="btn btn--lg" data-magnetic>
                Start a Blockout <span className="arr">→</span>
              </Link>
            </div>
          </div>
          {/* draggable stickers */}
          <div
            className="sticker sticker--wiggle"
            style={{
              position: "absolute",
              top: "18%",
              left: "6%",
              background: "var(--orange)",
              color: "#fff",
            }}
          >
            Website Development
          </div>
          <div
            className="sticker"
            style={{ position: "absolute", top: "45%", left: "9%", rotate: "-8deg" }}
          >
            Branding
          </div>
          <div
            className="sticker"
            style={{
              position: "absolute",
              top: "70%",
              left: "5%",
              rotate: "4deg",
              background: "var(--ink)",
              color: "#fff",
            }}
          >
            SEO Optimisation
          </div>
          <div
            className="sticker sticker--wiggle"
            style={{
              position: "absolute",
              top: "22%",
              right: "7%",
              rotate: "6deg",
              background: "var(--ink)",
              color: "#fff",
            }}
          >
            3D Design
          </div>
          <div
            className="sticker"
            style={{
              position: "absolute",
              top: "66%",
              right: "8%",
              rotate: "5deg",
              background: "var(--orange)",
              color: "#fff",
            }}
          >
            Marketing
          </div>
          <div
            className="sticker"
            style={{ position: "absolute", top: "43%", right: "3%", rotate: "-4deg" }}
          >
            Exhibitions
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee__track">
          <span>WEBSITES</span>
          <span>BRANDING</span>
          <span>DIGITAL MARKETING</span>
          <span>EXHIBITION DESIGN</span>
          <span>3D DESIGN</span>
          <span>WEBSITES</span>
          <span>BRANDING</span>
          <span>DIGITAL MARKETING</span>
          <span>EXHIBITION DESIGN</span>
          <span>3D DESIGN</span>
        </div>
      </div>

      {/* ABOUT BLOCKOUT */}
      <section className="section-pad" style={{ background: "var(--paper-warm)", borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "center" }}>
          <div className="reveal">
            <span className="eyebrow">About Blockout</span>
            <h2 className="h-lg" style={{ marginTop: "16px", maxWidth: "20ch" }}>
              Bold design, <span className="text-orange">strategic</span> thinking.
            </h2>
            <p style={{ marginTop: "24px", fontSize: "1.05rem", lineHeight: "1.7", color: "var(--ink-soft)" }}>
              Blockout is a full-service design studio based in Nuneaton, Warwickshire. We're a one-man studio led by founder Craig Ormston, specializing in creating bold, strategic design solutions for brands that refuse to blend in.
            </p>
          </div>
          <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "36px", boxShadow: "var(--shadow-pop)" }}>
            <h3 className="h-md" style={{ margin: "0 0 16px" }}>What I deliver</h3>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--ink-soft)", lineHeight: "1.8" }}>
              <li>Websites</li>
              <li>Brand identity & strategy</li>
              <li>Digital marketing campaigns</li>
              <li>SEO Optimisation</li>
              <li>Exhibition & physical design</li>
              <li>3D visualization & renders</li>
            </ul>
            <p style={{ marginTop: "20px", fontSize: "0.95rem", color: "var(--ink-soft)" }}>
              From concept to delivery, we bring strategic mindset and uncompromising design standards to create work that stops people in their tracks.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "end" }}>
          <div className="reveal">
            <span className="eyebrow">What's a Blockout?</span>
            <h2 className="h-lg" style={{ marginTop: "16px", maxWidth: "18ch" }}>
              In design, a blockout is the rough draft – the bones
              before the beauty.
            </h2>
          </div>
          <div className="reveal" data-d="1">
            <p className="lead">
              We named ourselves after it because we believe the best work is built deliberately:
              structure first, sparkle second. No fluff, no guesswork – just bold ideas that actually
              stand up. This philosophy guides everything we do at Blockout Digital.
            </p>
            <Link href="/about" className="link-arrow" style={{ marginTop: "20px" }}>
              Meet the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "20px",
            }}
            className="reveal"
          >
            <div>
              <span className="eyebrow">Five things I'm great at</span>
              <h2 className="h-xl" style={{ marginTop: "14px" }}>
                Pick a <span className="text-orange">block.</span>
              </h2>
            </div>
            <Link href="/services" className="btn btn--ink" data-magnetic>
              All services <span className="arr">→</span>
            </Link>
          </div>

          <p className="lead reveal" style={{ maxWidth: "65ch", marginTop: "32px", color: "var(--ink-soft)" }}>
            All of my core services work independently or together as part of a complete brand ecosystem. I don't believe in one-size-fits-all solutions – I take time to understand your vision and goals.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "28px", marginTop: "48px" }}>
            <Link
              href="/services"
              className="card reveal"
              data-d="1"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3 className="h-md" style={{ margin: 0 }}>Websites</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                Fast, gorgeous sites built to load quick and convert visitors into clients.
              </p>
            </Link>
            <Link
              href="/services"
              className="card reveal"
              data-d="2"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3 className="h-md" style={{ margin: 0 }}>Branding</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.5" }}>
                Bold identities that stick with people long after they leave.
              </p>
            </Link>
            <Link
              href="/services"
              className="card reveal"
              data-d="3"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3 className="h-md" style={{ margin: 0 }}>Social Media Marketing</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.5" }}>
                Content that stops the scroll and builds your audience on social.
              </p>
            </Link>
            <Link
              href="/services"
              className="card reveal"
              data-d="1"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3 className="h-md" style={{ margin: 0 }}>Exhibition Design</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                Physical spaces that stop people in their tracks.
              </p>
            </Link>
            <Link
              href="/services"
              className="card reveal"
              data-d="2"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3 className="h-md" style={{ margin: 0 }}>3D Design</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                Photoreal renders and visualisations that bring ideas to life.
              </p>
            </Link>
            <Link
              href="/services"
              className="card reveal"
              data-d="3"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3 className="h-md" style={{ margin: 0 }}>SEO Optimisation</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.5" }}>
                Technical and content strategies that boost your visibility in search.
              </p>
            </Link>
          </div>

          <div style={{ marginTop: "54px", padding: "36px", background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", boxShadow: "var(--shadow-pop)" }} className="reveal" data-d="1">
            <h3 className="h-md" style={{ margin: "0 0 16px" }}>My approach</h3>
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: "1.7", color: "var(--ink-soft)" }}>
              My approach combines creative boldness with strategic thinking. Every design decision is made with intention and purpose, ensuring that your investment drives real business results. Whether you need a stunning website that converts, a distinctive brand identity, targeted marketing campaigns, an impactful physical space, or photorealistic 3D visualizations – I bring expertise, dedication, and uncompromising standards to every project.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad">
        <div className="wrap center">
          <span className="eyebrow reveal mx-auto" style={{ justifyContent: "center" }}>
            Why brands pick me
          </span>
          <h2 className="h-xl reveal mx-auto" data-d="1" style={{ margin: "14px auto 28px", maxWidth: "16ch" }}>
            Big-agency thinking. No big-agency nonsense.
          </h2>
          <p className="lead reveal" style={{ maxWidth: "65ch", margin: "0 auto" }}>
            Working with Blockout Digital means partnering with a designer who combines creative excellence with strategic vision. I bring the caliber of thinking you'd expect from a large agency, without the bureaucracy, inflated costs, or diluted attention. Here's what sets me apart.
          </p>
        </div>
        <div className="wrap grid-3" style={{ marginTop: "54px" }}>
          <div className="card reveal" data-d="1">
            <div className="display h-lg">01</div>
            <h3 className="h-md" style={{ margin: "10px 0" }}>
              Properly built
            </h3>
            <p>
              Designers and developers collaborate from day one. This ensures that strategic design decisions translate seamlessly into functional, performance-optimized implementations. Nothing gets lost in translation – we control every layer from concept to launch.
            </p>
          </div>
          <div className="card reveal" data-d="2">
            <div className="display h-lg">02</div>
            <h3 className="h-md" style={{ margin: "10px 0" }}>
              Boldly different
            </h3>
            <p>
              Average work won't cut it. We're committed to creating solutions that break through the noise and make a genuine impact. We question convention, push boundaries, and refuse to settle for work that merely passes. Your brand deserves to stand out.
            </p>
          </div>
          <div className="card reveal" data-d="3">
            <div className="display h-lg">03</div>
            <h3 className="h-md" style={{ margin: "10px 0" }}>
              One roof
            </h3>
            <p>
              All five core services live under one roof. Websites, branding, digital marketing, exhibition design, and 3D visualization work together as an integrated system. This holistic approach means your brand voice stays consistent across every touchpoint, and your message hits harder.
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTPILOT REVIEWS - Hidden until reviews are available */}
      {/* <section className="section-pad" style={{ background: "var(--ink)", borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap center">
          <span className="eyebrow reveal mx-auto" style={{ justifyContent: "center", color: "var(--orange)" }}>
            What clients say
          </span>
          <h2 className="h-xl reveal mx-auto" data-d="1" style={{ margin: "14px auto 28px", maxWidth: "18ch", color: "#fff" }}>
            Trusted by brilliant brands
          </h2>
          <TrustpilotReviews />
        </div>
      </section> */}

      {/* RESOURCES & SHARING */}
      <section className="section-pad" style={{ background: "var(--paper-warm)", borderTop: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "start" }}>
            <div className="reveal">
              <h3 className="h-md" style={{ marginBottom: "20px" }}>Learn more about design</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Design is constantly evolving. Stay updated with industry insights, trends, and best practices that shape modern branding and digital experiences.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="https://www.smashingmagazine.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)", fontWeight: "600", textDecoration: "none" }}>
                  Smashing Magazine – Web design & development →
                </a>
                <a href="https://www.aiga.org/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)", fontWeight: "600", textDecoration: "none" }}>
                  AIGA – Professional design organization →
                </a>
                <a href="https://www.interaction-design.org/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)", fontWeight: "600", textDecoration: "none" }}>
                  Interaction Design Foundation – Design resources →
                </a>
              </div>
            </div>
            <div className="reveal" data-d="1">
              <h3 className="h-md" style={{ marginBottom: "20px" }}>Share my work</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "20px", lineHeight: "1.7" }}>
                Know someone who needs bold design? Share Blockout Digital with your network on social media.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="https://www.linkedin.com/company/blockout-digital/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", background: "var(--orange)", color: "#fff", borderRadius: "50%", fontWeight: "700", textDecoration: "none" }} title="Share on LinkedIn">
                  in
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://blockout.digital&text=Check%20out%20Blockout%20Digital%20-%20bold%20design%20studio" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", background: "var(--orange)", color: "#fff", borderRadius: "50%", fontWeight: "700", textDecoration: "none" }} title="Share on X/Twitter">
                  𝕏
                </a>
                <a href="https://www.instagram.com/blockout.digital/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", background: "var(--orange)", color: "#fff", borderRadius: "50%", fontWeight: "700", textDecoration: "none", fontSize: "1.2rem" }} title="Follow on Instagram">
                  📷
                </a>
                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", background: "var(--orange)", color: "#fff", borderRadius: "50%", fontWeight: "700", textDecoration: "none", fontSize: "0.8rem" }} title="View on Behance">
                  Be
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
