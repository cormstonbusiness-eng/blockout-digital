"use client";

export default function ThreeDAnimation() {
  return (
    <div className="reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)", overflow: "hidden" }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <style>{`
            @keyframes modelSpin {
              0% {
                transform: rotateX(0deg) rotateY(0deg);
              }
              50% {
                transform: rotateX(20deg) rotateY(180deg);
              }
              100% {
                transform: rotateX(0deg) rotateY(360deg);
              }
            }

            @keyframes lightingReveal {
              0% {
                opacity: 0;
                r: 0;
              }
              30% {
                opacity: 0;
                r: 0;
              }
              60% {
                opacity: 0.6;
                r: 100;
              }
              100% {
                opacity: 0.8;
                r: 120;
              }
            }

            @keyframes shadowGrow {
              0%, 30% {
                ry: 10;
                opacity: 0;
              }
              60% {
                ry: 20;
                opacity: 0.3;
              }
              100% {
                ry: 25;
                opacity: 0.5;
              }
            }

            @keyframes finalReveal {
              0%, 75% {
                opacity: 0;
              }
              90% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            .model-object {
              animation: modelSpin 7s ease-in-out infinite;
              transform-origin: center;
            }

            .lighting {
              fill: var(--orange);
              opacity: 0;
              animation: lightingReveal 7s ease-in-out infinite;
            }

            .shadow {
              fill: var(--ink-soft);
              opacity: 0;
              animation: shadowGrow 7s ease-in-out infinite;
            }

            .final-output {
              animation: finalReveal 7s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Background gradient */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "var(--paper)", stopOpacity: "1" }} />
            <stop offset="100%" style={{ stopColor: "var(--paper-warm)", stopOpacity: "1" }} />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="url(#bgGradient)" />

        {/* Lighting glow */}
        <circle class="lighting" cx="200" cy="150" r="0" />

        {/* Main 3D model (cube-like shape) */}
        <g class="model-object">
          <polygon points="140,100 260,100 280,200 120,200" fill="var(--orange)" stroke="var(--ink)" strokeWidth="2" />
          <polygon points="140,100 140,220 120,200" fill="var(--orange)" opacity="0.7" stroke="var(--ink)" strokeWidth="2" />
          <polygon points="260,100 280,200 280,220 260,120" fill="var(--orange)" opacity="0.85" stroke="var(--ink)" strokeWidth="2" />
        </g>

        {/* Shadow under model */}
        <ellipse class="shadow" cx="200" cy="280" rx="80" ry="0" />

        {/* Highlights for depth */}
        <ellipse class="lighting" cx="150" cy="130" rx="30" ry="15" opacity="0.4" />
        <ellipse class="lighting" cx="230" cy="180" rx="25" ry="12" opacity="0.3" />

        {/* Final rendered output */}
        <g class="final-output">
          <rect x="80" y="300" width="240" height="60" rx="8" fill="var(--ink)" />
          <circle cx="110" cy="330" r="8" fill="var(--orange)" />
          <circle cx="160" cy="325" r="8" fill="var(--orange)" />
          <circle cx="210" cy="335" r="8" fill="var(--orange)" />
          <circle cx="260" cy="328" r="8" fill="var(--orange)" />
          <circle cx="310" cy="332" r="8" fill="var(--orange)" />
        </g>

        {/* Title */}
        <text x="200" y="375" style={{ fontSize: "14px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>3D Visualization</text>
      </svg>
    </div>
  );
}
