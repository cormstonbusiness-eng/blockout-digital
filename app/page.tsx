import Link from "next/link";

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
              HELLO, WE'RE <span className="text-orange">BLOCKOUT.</span>
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
              top: "16%",
              left: "6%",
              background: "var(--orange)",
              color: "#fff",
            }}
          >
            Websites
          </div>
          <div
            className="sticker"
            style={{ position: "absolute", top: "60%", left: "9%", rotate: "-8deg" }}
          >
            Branding
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
              stand up.
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
              <span className="eyebrow">Five things we're great at</span>
              <h2 className="h-xl" style={{ marginTop: "14px" }}>
                Pick a <span className="text-orange">block.</span>
              </h2>
            </div>
            <Link href="/services" className="btn btn--ink" data-magnetic>
              All services <span className="arr">→</span>
            </Link>
          </div>

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
              <h3 className="h-md" style={{ margin: 0 }}>Digital Marketing</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.5" }}>
                Strategic campaigns that get you seen by the right audience.
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
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad">
        <div className="wrap center">
          <span className="eyebrow reveal mx-auto" style={{ justifyContent: "center" }}>
            Why teams pick us
          </span>
          <h2 className="h-xl reveal mx-auto" data-d="1" style={{ margin: "14px auto 0", maxWidth: "16ch" }}>
            Big-agency thinking. No big-agency nonsense.
          </h2>
        </div>
        <div className="wrap grid-3" style={{ marginTop: "54px" }}>
          <div className="card reveal" data-d="1">
            <div className="display h-lg">01</div>
            <h3 className="h-md" style={{ margin: "10px 0" }}>
              Properly built
            </h3>
            <p>
              Designers and developers in the same room, so nothing gets lost in the handover.
            </p>
          </div>
          <div className="card reveal" data-d="2">
            <div className="display h-lg">02</div>
            <h3 className="h-md" style={{ margin: "10px 0" }}>
              Boldly different
            </h3>
            <p>
              We'd rather make you stand out than blend in. Safe is the only thing we won't do.
            </p>
          </div>
          <div className="card reveal" data-d="3">
            <div className="display h-lg">03</div>
            <h3 className="h-md" style={{ margin: "10px 0" }}>
              One roof
            </h3>
            <p>
              Web, brand, marketing, exhibitions and 3D – joined-up thinking, zero juggling agencies.
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTPILOT REVIEWS */}
      <section className="section-pad" style={{ background: "var(--ink)", borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap center">
          <span className="eyebrow reveal mx-auto" style={{ justifyContent: "center", color: "var(--orange)" }}>
            What clients say
          </span>
          <h2 className="h-xl reveal mx-auto" data-d="1" style={{ margin: "14px auto 28px", maxWidth: "18ch", color: "#fff" }}>
            Trusted by brilliant brands
          </h2>
          <div
            className="reveal"
            data-d="2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: "1.6rem", color: "var(--orange)" }}>
                  ★
                </span>
              ))}
            </div>
            <p style={{ fontSize: "1.05rem", fontWeight: "600", margin: 0, color: "#fff" }}>
              5.0 out of 5 based on reviews
            </p>
          </div>
        </div>

        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginTop: "48px",
          }}
        >
          <div style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "28px", boxShadow: "var(--shadow-pop)" }} className="reveal" data-d="1">
            <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: "1rem", color: "var(--orange)" }}>
                  ★
                </span>
              ))}
            </div>
            <p style={{ margin: 0, marginBottom: "12px", fontSize: "0.95rem", lineHeight: "1.6", minHeight: "60px", background: "var(--orange-tint)", padding: "12px", borderRadius: "8px", color: "var(--ink-soft)", fontStyle: "italic" }}>
              [Trustpilot review will appear here]
            </p>
            <p style={{ margin: 0, fontWeight: "600", fontSize: "0.9rem" }}>[Client Name]</p>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              [Company/Title]
            </p>
          </div>

          <div style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "28px", boxShadow: "var(--shadow-pop)" }} className="reveal" data-d="2">
            <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: "1rem", color: "var(--orange)" }}>
                  ★
                </span>
              ))}
            </div>
            <p style={{ margin: 0, marginBottom: "12px", fontSize: "0.95rem", lineHeight: "1.6", minHeight: "60px", background: "var(--orange-tint)", padding: "12px", borderRadius: "8px", color: "var(--ink-soft)", fontStyle: "italic" }}>
              [Trustpilot review will appear here]
            </p>
            <p style={{ margin: 0, fontWeight: "600", fontSize: "0.9rem" }}>[Client Name]</p>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              [Company/Title]
            </p>
          </div>

          <div style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "28px", boxShadow: "var(--shadow-pop)" }} className="reveal" data-d="3">
            <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: "1rem", color: "var(--orange)" }}>
                  ★
                </span>
              ))}
            </div>
            <p style={{ margin: 0, marginBottom: "12px", fontSize: "0.95rem", lineHeight: "1.6", minHeight: "60px", background: "var(--orange-tint)", padding: "12px", borderRadius: "8px", color: "var(--ink-soft)", fontStyle: "italic" }}>
              [Trustpilot review will appear here]
            </p>
            <p style={{ margin: 0, fontWeight: "600", fontSize: "0.9rem" }}>[Client Name]</p>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              [Company/Title]
            </p>
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="section-pad">
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "18px",
            }}
            className="reveal"
          >
            <div>
              <span className="eyebrow">Recent blockouts</span>
              <h2 className="h-xl" style={{ marginTop: "14px" }}>
                Work that <span className="text-orange">pops.</span>
              </h2>
            </div>
            <Link href="/portfolio" className="link-arrow">
              View all work →
            </Link>
          </div>
          <div className="grid-2" style={{ marginTop: "42px" }}>
            <Link href="/portfolio" className="reveal" data-d="1">
              <div className="placeholder" style={{ aspectRatio: "4/3" }}>
                <span>Project image · 1600×1200</span>
              </div>
              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <h3 className="h-md">Nimbus – brand & site</h3>
                <span className="pill">Branding</span>
              </div>
            </Link>
            <Link href="/portfolio" className="reveal" data-d="2">
              <div
                className="placeholder"
                style={{
                  aspectRatio: "4/3",
                  background: "repeating-linear-gradient(45deg,#16110d 0 14px,#221a14 14px 28px)",
                }}
              >
                <span>Project image · 1600×1200</span>
              </div>
              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <h3 className="h-md">Volt – expo stand</h3>
                <span className="pill">Exhibition</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
