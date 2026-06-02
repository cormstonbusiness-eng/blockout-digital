"use client";

export default function ExhibitionAnimation() {
  return (
    <div className="reveal" data-d="1" style={{ aspectRatio: "1/1", borderRadius: "var(--r-xl)", overflow: "hidden" }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <style>{`
            @keyframes sketchDraw {
              0% {
                stroke-dashoffset: 200;
                opacity: 0;
              }
              15% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              40% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              55% {
                stroke-dashoffset: 200;
                opacity: 0;
              }
              100% {
                opacity: 0;
              }
            }

            @keyframes modelBuild {
              0%, 40% {
                opacity: 0;
              }
              55% {
                opacity: 0;
              }
              70% {
                opacity: 1;
              }
              100% {
                opacity: 1;
              }
            }

            @keyframes modelRotate {
              55%, 70% {
                transform: rotateY(0deg);
              }
              85%, 100% {
                transform: rotateY(360deg);
              }
            }

            @keyframes standFinal {
              0%, 85% {
                opacity: 0;
                transform: scale(0.8);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }

            .sketch-line {
              stroke: var(--ink-soft);
              stroke-width: 2;
              fill: none;
              stroke-dasharray: 200;
              stroke-dashoffset: 200;
              animation: sketchDraw 7s ease-in-out infinite;
            }

            .model-shape {
              fill: var(--orange);
              animation: modelBuild 7s ease-in-out infinite;
              transform-origin: center;
            }

            .model-shape-1 {
              animation: modelBuild 7s ease-in-out infinite;
            }

            .model-shape-2 {
              animation: modelBuild 7s ease-in-out infinite;
            }

            .stand-final {
              fill: var(--ink);
              animation: standFinal 7s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Background */}
        <rect width="400" height="400" fill="var(--paper)" />

        {/* Sketch lines (concept phase) */}
        <line className="sketch-line" x1="50" y1="100" x2="150" y2="100" />
        <line className="sketch-line" x1="50" y1="130" x2="200" y2="130" />
        <line className="sketch-line" x1="50" y1="160" x2="180" y2="160" />
        <path className="sketch-line" d="M 100 100 Q 100 200, 50 250" />

        {/* 3D Model shapes */}
        <rect className="model-shape model-shape-1" x="80" y="120" width="120" height="100" rx="8" style={{ animation: "modelBuild 7s ease-in-out infinite", animationDelay: "3.5s" }} />
        <polygon className="model-shape model-shape-2" points="140,80 200,120 200,200 140,160" style={{ animation: "modelBuild 7s ease-in-out infinite", animationDelay: "4s" }} fill="var(--orange)" opacity="0.7" />

        {/* Stand/Booth final */}
        <g className="stand-final">
          <rect x="60" y="240" width="280" height="120" rx="8" fill="var(--ink)" stroke="var(--ink)" strokeWidth="2" />
          <rect x="80" y="200" width="80" height="40" rx="4" fill="var(--orange)" />
          <rect x="240" y="200" width="80" height="40" rx="4" fill="var(--orange)" />
          <circle cx="120" cy="320" r="8" fill="var(--orange)" />
          <circle cx="200" cy="320" r="8" fill="var(--orange)" />
          <circle cx="280" cy="320" r="8" fill="var(--orange)" />
        </g>

        {/* Title */}
        <text x="200" y="375" style={{ fontSize: "14px", fill: "var(--ink-soft)", textAnchor: "middle", fontFamily: "Baloo 2, sans-serif" }}>Exhibition Process</text>
      </svg>
    </div>
  );
}
