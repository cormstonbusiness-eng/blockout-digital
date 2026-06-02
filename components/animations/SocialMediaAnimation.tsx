"use client";

export default function SocialMediaAnimation() {
  return (
    <div className="reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)", overflow: "hidden" }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <style>{`
            @keyframes cardCascade {
              0% {
                opacity: 0;
                transform: translateY(-40px);
              }
              15% {
                opacity: 1;
                transform: translateY(0);
              }
              85% {
                opacity: 1;
                transform: translateY(0);
              }
              100% {
                opacity: 0;
                transform: translateY(-40px);
              }
            }

            @keyframes engagementRise {
              0% {
                transform: scaleY(0);
                opacity: 0;
              }
              40% {
                transform: scaleY(0);
                opacity: 0;
              }
              60% {
                transform: scaleY(1);
                opacity: 1;
              }
              100% {
                transform: scaleY(1);
                opacity: 1;
              }
            }

            @keyframes spreadGrow {
              0%, 40% {
                r: 0;
                opacity: 0;
              }
              60%, 100% {
                opacity: 1;
              }
            }

            .content-card {
              fill: var(--paper);
              stroke: var(--ink);
              stroke-width: 2;
              animation: cardCascade 6.5s ease-in-out infinite;
            }

            .card-1 {
              animation-delay: 0s;
            }

            .card-2 {
              animation-delay: 0.8s;
            }

            .card-3 {
              animation-delay: 1.6s;
            }

            .engagement-bar {
              fill: var(--orange);
              animation: engagementRise 6.5s ease-in-out infinite;
              transform-origin: bottom;
            }

            .engagement-bar:nth-child(5) {
              animation-delay: 0.5s;
            }

            .engagement-bar:nth-child(6) {
              animation-delay: 1s;
            }

            .engagement-bar:nth-child(7) {
              animation-delay: 1.5s;
            }

            .spread-circle {
              fill: none;
              stroke: var(--orange);
              stroke-width: 2;
              animation: spreadGrow 6.5s ease-out infinite;
            }

            .spread-1 {
              animation-delay: 3s;
            }

            .spread-2 {
              animation-delay: 3.3s;
            }

            .spread-3 {
              animation-delay: 3.6s;
            }
          `}</style>
        </defs>

        {/* Background */}
        <rect width="400" height="400" fill="var(--paper)" />

        {/* Content cards */}
        <rect class="content-card card-1" x="50" y="50" width="300" height="60" rx="6" />
        <rect class="content-card card-2" x="50" y="140" width="300" height="60" rx="6" />
        <rect class="content-card card-3" x="50" y="230" width="300" height="60" rx="6" />

        {/* Engagement bars */}
        <rect class="engagement-bar engagement-bar" x="280" y="280" width="20" height="30" rx="3" />
        <rect class="engagement-bar engagement-bar" x="310" y="275" width="20" height="35" rx="3" />
        <rect class="engagement-bar engagement-bar" x="340" y="270" width="20" height="40" rx="3" />

        {/* Spread circles (engagement growth) */}
        <circle class="spread-circle spread-1" cx="200" cy="350" r="20" />
        <circle class="spread-circle spread-2" cx="200" cy="350" r="40" />
        <circle class="spread-circle spread-3" cx="200" cy="350" r="60" />

        {/* Title */}
        <text x="200" y="370" style={{ fontSize: "14px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>Content & Growth</text>
      </svg>
    </div>
  );
}
