"use client";

export default function BrandingAnimation() {
  return (
    <div className="reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)", overflow: "hidden" }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <style>{`
            @keyframes brandingBuild {
              0% {
                opacity: 0;
                transform: scale(0.5);
              }
              15% {
                opacity: 1;
                transform: scale(1);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes brandingFill {
              0% {
                fill: var(--paper);
              }
              30% {
                fill: var(--paper);
              }
              50% {
                fill: var(--orange);
              }
              100% {
                fill: var(--orange);
              }
            }

            @keyframes typographyAppear {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 0;
              }
              70% {
                opacity: 1;
              }
              100% {
                opacity: 1;
              }
            }

            @keyframes systemGrow {
              0% {
                stroke-dashoffset: 100;
                opacity: 0;
              }
              60% {
                stroke-dashoffset: 100;
                opacity: 0;
              }
              80% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              100% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
            }

            .brand-circle {
              animation: brandingBuild 7s ease-in-out infinite, brandingFill 7s ease-in-out infinite;
            }

            .brand-system {
              stroke: var(--orange);
              fill: none;
              stroke-width: 2;
              stroke-dasharray: 100;
              stroke-dashoffset: 100;
              animation: systemGrow 7s ease-in-out infinite;
            }

            .typo-text {
              font-family: Baloo 2, sans-serif;
              font-size: 12px;
              fill: var(--ink);
              animation: typographyAppear 7s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Background */}
        <rect width="400" height="400" fill="var(--paper)" />

        {/* Main brand circle */}
        <circle class="brand-circle" cx="200" cy="200" r="80" stroke="var(--ink)" strokeWidth="3" />

        {/* System circles around main */}
        <circle class="brand-system" cx="200" cy="200" r="130" />
        <circle class="brand-system" cx="200" cy="200" r="160" />

        {/* Color palette dots */}
        <circle class="typo-text" cx="100" cy="120" r="8" fill="var(--orange)" style={{ animation: "typographyAppear 7s ease-in-out infinite", animationDelay: "4.2s" }} />
        <circle class="typo-text" cx="130" cy="100" r="8" fill="var(--ink)" style={{ animation: "typographyAppear 7s ease-in-out infinite", animationDelay: "4.4s" }} />
        <circle class="typo-text" cx="160" cy="95" r="8" fill="var(--ink-soft)" style={{ animation: "typographyAppear 7s ease-in-out infinite", animationDelay: "4.6s" }} />

        {/* Typography samples */}
        <text class="typo-text" x="70" y="280" style={{ fontSize: "14px", fontWeight: "700", animation: "typographyAppear 7s ease-in-out infinite", animationDelay: "4.8s" }}>Bold</text>
        <text class="typo-text" x="140" y="280" style={{ fontSize: "14px", fontWeight: "500", animation: "typographyAppear 7s ease-in-out infinite", animationDelay: "5s" }}>Medium</text>
        <text class="typo-text" x="230" y="280" style={{ fontSize: "14px", fontWeight: "400", animation: "typographyAppear 7s ease-in-out infinite", animationDelay: "5.2s" }}>Regular</text>

        {/* Title */}
        <text x="200" y="370" style={{ fontSize: "16px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>Brand Identity</text>
      </svg>
    </div>
  );
}
