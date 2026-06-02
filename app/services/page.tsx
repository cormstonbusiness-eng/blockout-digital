import Link from "next/link";

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="section-pad" style={{ paddingBottom: "30px", position: "relative", overflow: "hidden" }}>
        <div className="blob" data-parallax="30" style={{ width: "160px", height: "160px", top: "12%", right: "6%" }}></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow reveal">Five services from one designer</span>
          <h1 className="display h-hero reveal" data-d="1" style={{ marginTop: "16px", maxWidth: "16ch" }}>
            Everything you need to <span className="text-orange">stand out.</span>
          </h1>
          <p className="lead reveal" data-d="2" style={{ marginTop: "24px", maxWidth: "54ch" }}>
            No juggling five agencies. I build the whole thing – joined-up, on-brand and built to perform.
          </p>
          <div className="tag-row reveal" data-d="3" style={{ marginTop: "26px" }}>
            <Link href="#websites" className="pill">01 Websites</Link>
            <Link href="#branding" className="pill">02 Branding</Link>
            <Link href="#marketing" className="pill">03 Marketing</Link>
            <Link href="#exhibitions" className="pill">04 Exhibitions</Link>
            <Link href="#threed" className="pill">05 3D Design</Link>
          </div>
        </div>
      </section>

      {/* SERVICE 01 WEBSITES */}
      <section id="websites" className="section-pad">
        <div className="wrap svc">
          <div className="reveal">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>01</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>Websites</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Fast, gorgeous sites that load quick, look unreal and turn visitors into customers.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>UX & UI design
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Webflow & custom build
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>E-commerce
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>CMS & content
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Performance & SEO
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Care & hosting
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Build my site <span className="arr">→</span>
            </Link>
          </div>
          <div className="placeholder reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)" }}>
            <span>Web mockup · 1400×1400</span>
          </div>
        </div>
      </section>

      {/* SERVICE 02 BRANDING */}
      <section id="branding" className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap svc" style={{ gridAutoFlow: "dense" }}>
          <div className="placeholder reveal" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)", background: "repeating-linear-gradient(45deg,#16110d 0 14px,#221a14 14px 28px)", gridColumn: "2" }}>
            <span>Brand boards · 1400×1400</span>
          </div>
          <div className="reveal" data-d="1">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>02</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>Branding</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Identities people actually remember – from the big idea down to the last pixel.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Strategy & positioning
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Logo & identity
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Visual systems
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Tone of voice
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Guidelines
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Brand collateral
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Build my brand <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE 03 MARKETING */}
      <section id="marketing" className="section-pad">
        <div className="wrap svc">
          <div className="reveal">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>03</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>Digital Marketing</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Get seen by the right humans. Campaigns that earn attention and drive real results.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Paid social & search
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>SEO & content
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Email & CRM
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Social & creative
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Analytics
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Always-on growth
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Grow my audience <span className="arr">→</span>
            </Link>
          </div>
          <div className="placeholder reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)" }}>
            <span>Campaign visual · 1400×1400</span>
          </div>
        </div>
      </section>

      {/* SERVICE 04 EXHIBITIONS */}
      <section id="exhibitions" className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap svc" style={{ gridAutoFlow: "dense" }}>
          <div className="placeholder reveal" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)", background: "repeating-linear-gradient(45deg,#16110d 0 14px,#221a14 14px 28px)", gridColumn: "2" }}>
            <span>Stand render · 1400×1400</span>
          </div>
          <div className="reveal" data-d="1">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>04</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>Exhibition Design</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Stands that stop people mid-stride – designed to draw a crowd and start conversations.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Concept & spatial design
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Stand graphics
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>3D visualisation
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Build management
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Signage & wayfinding
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>On-site support
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Design my stand <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE 05 3D */}
      <section id="threed" className="section-pad">
        <div className="wrap svc">
          <div className="reveal">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>05</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>3D Design</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Ideas you can almost touch. Photoreal renders and motion that make products pop.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Product visualisation
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>3D animation
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Architectural renders
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>CGI for campaigns
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>AR & interactive
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Motion graphics
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Render my idea <span className="arr">→</span>
            </Link>
          </div>
          <div className="placeholder reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)" }}>
            <span>3D render · 1400×1400</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-ink" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap">
          <div className="reveal center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>How we work</span>
            <h2 className="h-xl text-paper" style={{ marginTop: "14px" }}>
              From blockout to <span className="text-orange">brilliant.</span>
            </h2>
          </div>
          <div className="grid-4" style={{ marginTop: "48px" }}>
            <div className="card card--ink reveal" data-d="1" style={{ borderColor: "var(--orange)" }}>
              <div className="display h-lg text-orange">1</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Discover</h3>
              <p style={{ color: "#cabfb6" }}>We dig into your goals, audience and the problem worth solving.</p>
            </div>
            <div className="card card--ink reveal" data-d="2" style={{ borderColor: "var(--orange)" }}>
              <div className="display h-lg text-orange">2</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Blockout</h3>
              <p style={{ color: "#cabfb6" }}>The rough structure – wireframes, routes, the bones of the idea.</p>
            </div>
            <div className="card card--ink reveal" data-d="3" style={{ borderColor: "var(--orange)" }}>
              <div className="display h-lg text-orange">3</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Build</h3>
              <p style={{ color: "#cabfb6" }}>Design and develop in lockstep, with you in the loop throughout.</p>
            </div>
            <div className="card card--ink reveal" data-d="4" style={{ borderColor: "var(--orange)" }}>
              <div className="display h-lg text-orange">4</div>
              <h3 className="h-md" style={{ margin: "8px 0" }}>Launch</h3>
              <p style={{ color: "#cabfb6" }}>We ship it, measure it, and keep making it better.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .svc{ display:grid; grid-template-columns:1fr 1fr; gap:54px; align-items:center; }
        @media (max-width:780px){ .svc{ grid-template-columns:1fr; gap: 40px; } }
        @media (max-width:640px){ .svc{ gap: 28px; } }
      `}</style>
    </>
  );
}
