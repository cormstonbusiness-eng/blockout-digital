import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Blockout Digital Work & Case Studies",
  description: "Bold, strategic design work across websites, branding, exhibitions, and 3D visualization. Coming soon with detailed case studies.",
  keywords: ["portfolio", "case studies", "design work", "examples"],
  openGraph: {
    title: "Portfolio — Blockout Digital",
    description: "Bold design portfolio. Website design, branding, exhibitions, and 3D visualization.",
    url: "https://blockoutdigital.com/portfolio",
    type: "website",
  },
};

export default function Portfolio() {
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
          <div className="reveal">
            <span className="eyebrow">My work</span>
            <h1 className="display h-xl reveal" data-d="1" style={{ margin: "14px 0 28px", maxWidth: "26ch" }}>
              Portfolio <span className="text-orange">coming soon.</span>
            </h1>
          </div>
          <p className="lead reveal" style={{ maxWidth: "60ch", marginBottom: "48px", margin: "0 auto 48px" }}>
            I'm being intentional about the work I showcase and the relationships I build. Right now, I'm focused on forging meaningful partnerships with brands that share my vision for bold, uncompromising design. I'm looking for partners who are ready to invest in something special – brands that trust the process and understand that great work takes vision, strategy, and commitment.
          </p>
          <div className="reveal" style={{ background: "#fff", border: "3px solid var(--ink)", borderRadius: "var(--r-lg)", padding: "48px", boxShadow: "var(--shadow-pop)", maxWidth: "550px", margin: "0 auto" }}>
            <h3 className="h-md" style={{ margin: "0 0 16px" }}>Ready to build something unmissable?</h3>
            <p style={{ color: "var(--ink-soft)", margin: "0 0 24px", lineHeight: "1.6" }}>
              If you're serious about creating work that stops people in their tracks, let's talk about your vision. I'm selective about who I work with, and I'm looking for partners ready to do bold work.
            </p>
            <Link href="/contact" className="btn btn--lg" data-magnetic style={{ display: "inline-block" }}>
              Start a project <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
