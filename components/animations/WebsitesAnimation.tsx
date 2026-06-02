"use client";

export default function WebsitesAnimation() {
  return (
    <div className="reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)", overflow: "hidden" }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <style>{`
            @keyframes websiteFlow {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              10% {
                opacity: 1;
                transform: translateY(0);
              }
              25% {
                opacity: 1;
                transform: translateY(0);
              }
              35% {
                opacity: 0;
                transform: translateY(-20px);
              }
              100% {
                opacity: 0;
                transform: translateY(-20px);
              }
            }

            @keyframes arrowDraw {
              0% {
                stroke-dashoffset: 40;
              }
              20%, 100% {
                stroke-dashoffset: 0;
              }
            }

            @keyframes boxGlow {
              0%, 100% {
                box-shadow: 0 0 0px rgba(248, 80, 8, 0);
              }
              50% {
                box-shadow: 0 0 12px rgba(248, 80, 8, 0.4);
              }
            }

            .workflow-box {
              fill: var(--paper);
              stroke: var(--ink);
              stroke-width: 3;
              animation: websiteFlow 6s ease-in-out infinite;
            }

            .workflow-box:nth-child(2) {
              animation-delay: 0s;
            }

            .workflow-box:nth-child(3) {
              animation-delay: 1.2s;
            }

            .workflow-box:nth-child(4) {
              animation-delay: 2.4s;
            }

            .workflow-box:nth-child(5) {
              animation-delay: 3.6s;
            }

            .workflow-label {
              font-family: Baloo 2, sans-serif;
              font-size: 28px;
              font-weight: 700;
              fill: var(--ink);
              text-anchor: middle;
              animation: websiteFlow 6s ease-in-out infinite;
            }

            .workflow-label:nth-child(7) {
              animation-delay: 0s;
            }

            .workflow-label:nth-child(8) {
              animation-delay: 1.2s;
            }

            .workflow-label:nth-child(9) {
              animation-delay: 2.4s;
            }

            .workflow-label:nth-child(10) {
              animation-delay: 3.6s;
            }

            .arrow {
              stroke: var(--ink);
              stroke-width: 3;
              fill: none;
              stroke-linecap: round;
              stroke-dasharray: 40;
              animation: arrowDraw 6s ease-in-out infinite;
            }

            .arrow:nth-child(6) {
              animation-delay: 1.5s;
            }

            .arrow:last-child {
              animation-delay: 3s;
            }
          `}</style>
        </defs>

        {/* Background */}
        <rect width="400" height="400" fill="var(--paper)" />

        {/* Box 1 - Design */}
        <rect class="workflow-box" x="30" y="150" width="70" height="100" rx="8" />
        <text class="workflow-label" x="65" y="210">1</text>

        {/* Arrow 1 */}
        <path class="arrow" d="M 110 195 L 150 195" />

        {/* Box 2 - Code */}
        <rect class="workflow-box" x="160" y="150" width="70" height="100" rx="8" />
        <text class="workflow-label" x="195" y="210">2</text>

        {/* Arrow 2 */}
        <path class="arrow" d="M 240 195 L 280 195" />

        {/* Box 3 - Test */}
        <rect class="workflow-box" x="290" y="150" width="70" height="100" rx="8" />
        <text class="workflow-label" x="325" y="210">3</text>

        {/* Box 4 - Launch */}
        <rect class="workflow-box" x="160" y="280" width="70" height="100" rx="8" />
        <text class="workflow-label" x="195" y="340">4</text>

        {/* Connecting arrow (downward) */}
        <path class="arrow" d="M 325 250 Q 325 265, 195 265 Q 195 280, 195 300" />

        {/* Labels */}
        <text x="65" y="90" style={{ fontSize: "16px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>Design</text>
        <text x="195" y="90" style={{ fontSize: "16px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>Code</text>
        <text x="325" y="90" style={{ fontSize: "16px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>Test</text>
        <text x="195" y="400" style={{ fontSize: "16px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>Launch</text>
      </svg>
    </div>
  );
}
