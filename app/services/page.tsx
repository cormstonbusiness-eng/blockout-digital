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
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>HTML & CSS development
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Next.JS & PHP development
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Custom animations
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>E-commerce
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>CMS & content
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Performance & SEO optimisations
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Hosting & maintenance
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Complete custom build
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Build my site <span className="arr">→</span>
            </Link>
          </div>
          <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "36px", boxShadow: "var(--shadow-pop)" }}>
            <h3 className="h-md" style={{ margin: "0 0 20px" }}>What you get</h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              A fully custom-built website designed to convert. From initial UX/UI design through to launch and beyond, I handle everything – HTML & CSS, Next.JS, PHP, custom animations that delight, and optimizations that make your site lightning fast.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              I build complete custom solutions tailored to your goals. E-commerce functionality, content management systems, SEO optimization, and ongoing hosting & maintenance are all included in my process. No cookie-cutter templates. No compromises.
            </p>
            <div style={{ paddingTop: "16px", borderTop: "2px solid var(--paper-warm)" }}>
              <p style={{ color: "var(--orange)", fontWeight: "700", margin: "12px 0 0", fontSize: "0.9rem" }}>Performance • SEO • Custom Build • Hosting Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 02 BRANDING */}
      <section id="branding" className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap svc" style={{ gridAutoFlow: "dense" }}>
          <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "36px", boxShadow: "var(--shadow-pop)", gridColumn: "2" }}>
            <h3 className="h-md" style={{ margin: "0 0 20px" }}>What you get</h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              A complete brand identity system built from strategy to execution. I start with understanding your vision, values, and market position – then craft a distinctive logo, refined color palette, typography system, and comprehensive brand guidelines that ensure consistency everywhere your brand appears.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Beyond the logo, I develop your full brand ecosystem: guidelines for usage, website branding standards, social media branding, and collateral assets. Everything works together to create a cohesive brand experience that people remember and recognize instantly.
            </p>
            <div style={{ paddingTop: "16px", borderTop: "2px solid var(--paper-warm)" }}>
              <p style={{ color: "var(--orange)", fontWeight: "700", margin: "12px 0 0", fontSize: "0.9rem" }}>Logo • Guidelines • Identity System • Social Branding</p>
            </div>
          </div>
          <div className="reveal" data-d="1">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>02</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>Branding</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Identities people actually remember – from the big idea down to the last pixel.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Logo development
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Brand guideline development
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Website branding
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Social media branding
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
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>Social Media Marketing</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Content that gets noticed. Strategic posts and creative assets that build your audience and drive engagement.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Content strategy
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Social media posts
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Graphics & templates
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Content creation
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Community management
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Growth planning
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Grow my audience <span className="arr">→</span>
            </Link>
          </div>
          <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "36px", boxShadow: "var(--shadow-pop)" }}>
            <h3 className="h-md" style={{ margin: "0 0 20px" }}>What you get</h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Strategic content that builds your audience and drives real engagement. I develop a tailored content strategy for your platforms, then handle everything from content creation and design through to posting and community management. Your content tells your story – consistently, authentically, and strategically.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              From eye-catching graphics and templates to community engagement and growth planning, I manage the full content lifecycle. Whether you need regular posting schedules, campaign launches, or audience growth strategies, I create content that stops the scroll and builds genuine connections with your audience.
            </p>
            <div style={{ paddingTop: "16px", borderTop: "2px solid var(--paper-warm)" }}>
              <p style={{ color: "var(--orange)", fontWeight: "700", margin: "12px 0 0", fontSize: "0.9rem" }}>Strategy • Content Creation • Graphics • Community Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 04 EXHIBITIONS */}
      <section id="exhibitions" className="section-pad bg-warm" style={{ borderBlock: "3px solid var(--ink)" }}>
        <div className="wrap svc" style={{ gridAutoFlow: "dense" }}>
          <ExhibitionAnimation />
          <div className="reveal" data-d="1">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>04</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>Exhibition Design</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Stands that stop people mid-stride – designed to draw a crowd and start conversations.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Concept design & rendering
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Graphics & print-ready artwork
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Electrical drawings
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Construction drawings (beMatrix)
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>On-site design support
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Design my stand <span className="arr">→</span>
            </Link>
          </div>
          <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "36px", boxShadow: "var(--shadow-pop)", gridColumn: "2" }}>
            <h3 className="h-md" style={{ margin: "0 0 20px" }}>What you get</h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Exhibition stands that stop people in their tracks. From initial concept design and photorealistic 3D rendering through to print-ready artwork and on-site support, I manage every aspect of your exhibition presence. Every detail is designed to maximize impact and engagement.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              I handle graphics manipulation and production-ready artwork, electrical drawings for technical requirements, and construction drawings specifically for the beMatrix modular system. With on-site design support, I ensure your stand executes flawlessly and achieves your goals in real-time.
            </p>
            <div style={{ paddingTop: "16px", borderTop: "2px solid var(--paper-warm)" }}>
              <p style={{ color: "var(--orange)", fontWeight: "700", margin: "12px 0 0", fontSize: "0.9rem" }}>Concept • Rendering • Print Artwork • Electrical & Construction Drawings</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 05 3D */}
      <section id="threed" className="section-pad">
        <div className="wrap svc">
          <div className="reveal">
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--orange)", lineHeight: ".8" }}>05</div>
            <h2 className="h-xl" style={{ margin: "10px 0 16px" }}>3D Design</h2>
            <p className="lead" style={{ marginBottom: "18px" }}>Ideas you can almost touch. Photoreal renders that bring concepts to life.</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Project visualisation
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Architectural rendering
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>Exhibitions rendering
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>3D asset development
              </li>
              <li style={{ fontFamily: "var(--display)", fontWeight: 600, paddingLeft: "1.4em", position: "relative" }}>
                <span style={{ color: "var(--orange)", position: "absolute", left: 0 }}>-</span>CGI for marketing campaigns
              </li>
            </ul>
            <Link href="/contact" className="btn" data-magnetic style={{ marginTop: "26px" }}>
              Render my idea <span className="arr">→</span>
            </Link>
          </div>
          <div className="reveal" data-d="1" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "36px", boxShadow: "var(--shadow-pop)" }}>
            <h3 className="h-md" style={{ margin: "0 0 20px" }}>What you get</h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Photoreal 3D visualizations that bring your ideas to life before they're built. From architectural renderings and project visualizations to exhibition display renderings and complete 3D asset development, I create stunning visuals that communicate your vision with impact and clarity.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "16px", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Whether you need renders for presentations, marketing campaigns, or visualization purposes, I deliver high-quality CGI that impresses stakeholders and helps you make confident decisions. Each render is meticulously crafted with attention to lighting, materials, and detail – bringing your concepts to life in stunning photorealistic quality.
            </p>
            <div style={{ paddingTop: "16px", borderTop: "2px solid var(--paper-warm)" }}>
              <p style={{ color: "var(--orange)", fontWeight: "700", margin: "12px 0 0", fontSize: "0.9rem" }}>Photorealistic • Asset Development • Architectural • Marketing CGI</p>
            </div>
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
