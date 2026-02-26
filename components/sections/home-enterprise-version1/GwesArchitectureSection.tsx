"use client";

import { Container } from "@/components/layout/Container";
export function GwesArchitectureSection() {
  return (
    <section className="gwes-section">
        <div
          className="gwes-diagram-wrapper bg-[radial-gradient(120%_120%_at_50%_0%,var(--leroux-flow-start)_0%,var(--leroux-flow-mid)_52%,var(--leroux-flow-end)_100%)]"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <svg
            viewBox="0 0 800 800"
            width="100%"
            height="100%"
            className="gwes-diagram"
            role="img"
            aria-labelledby="gwes-title gwes-desc"
            style={{
              maxWidth: "800px",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              userSelect: "none",
            }}
          >
            <title id="gwes-title">{"Global WealthES\u00AE - Wheel of Wealth"}</title>
            <desc id="gwes-desc">An interactive, 8-segment architecture wheel showcasing the core modules of the GWES platform.</desc>

            <defs>
              <style>{`
                .gwes-diagram {
                  --gwes-blue: #006fba;
                  --text-primary: #f8fafc;
                  --text-secondary: #86868b;
                  --line-subtle: rgba(255, 255, 255, 0.05);
                }

                @keyframes radiate {
                  0% { transform: scale(0.35); opacity: 0.8; stroke-width: 3px; }
                  100% { transform: scale(1.4); opacity: 0; stroke-width: 0.5px; }
                }

                @keyframes slow-spin {
                  100% { transform: rotate(360deg); }
                }

                .ambient-ring {
                  transform-origin: 400px 400px;
                  animation: slow-spin 120s linear infinite;
                }

                .radiant-ring {
                  fill: none;
                  stroke: var(--gwes-blue);
                  transform-origin: 400px 400px;
                  animation: radiate 8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
                }

                .radiant-ring.delay-1 { animation-delay: 2.6s; }
                .radiant-ring.delay-2 { animation-delay: 5.3s; }

                @media (prefers-reduced-motion: reduce) {
                  .ambient-ring, .radiant-ring {
                    animation: none !important;
                    opacity: 0.1;
                  }
                }

                .segment {
                  cursor: pointer;
                  outline: none;
                }

                .wedge {
                  fill: transparent;
                  stroke: var(--line-subtle);
                  stroke-width: 1px;
                  transition: fill 0.4s ease, stroke 0.4s ease;
                }

                .content-group {
                  pointer-events: none;
                }

                .seg-icon {
                  fill: none;
                  stroke: var(--text-secondary);
                  stroke-width: 1.5px;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  transition: stroke 0.3s ease, filter 0.3s ease;
                }

                .seg-text {
                  fill: var(--text-secondary);
                  font-size: 11px;
                  font-weight: 500;
                  letter-spacing: 0.05em;
                  text-transform: uppercase;
                  text-anchor: middle;
                  transition: fill 0.3s ease, text-shadow 0.3s ease;
                }

                .segment:hover .wedge,
                .segment:focus-visible .wedge {
                  fill: rgba(0, 111, 186, 0.05);
                  stroke: rgba(0, 111, 186, 0.6);
                }

                .segment:hover .seg-icon,
                .segment:focus-visible .seg-icon {
                  stroke: var(--text-primary);
                  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.3));
                }

                .segment:hover .seg-text,
                .segment:focus-visible .seg-text {
                  fill: var(--text-primary);
                  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
                }

                .center-hub-base {
                  fill: #000000;
                  stroke: var(--line-subtle);
                  stroke-width: 1px;
                }

                .center-hub-glass {
                  fill: rgba(0, 111, 186, 0.03);
                }

                .gwes-logo {
                  fill: var(--text-primary);
                  font-size: 26px;
                  font-weight: 300;
                  letter-spacing: 0.25em;
                  text-anchor: middle;
                  dominant-baseline: middle;
                }
              `}</style>
              <path
                id="wedge-shape"
                d="M 696.6 280.1 A 320 320 0 0 1 696.6 519.9 L 529.8 452.4 A 140 140 0 0 0 529.8 347.6 Z"
              />
              <filter id="hub-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="12"
                  floodColor="#000000"
                  floodOpacity="0.8"
                />
              </filter>
            </defs>

            <g className="ambient-ring" opacity="0.6">
              <circle
                cx="400"
                cy="400"
                r="335"
                fill="none"
                stroke="var(--line-subtle)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
            </g>

            <g id="aura" opacity="0.8">
              <circle className="radiant-ring" cx="400" cy="400" r="320" />
              <circle className="radiant-ring delay-1" cx="400" cy="400" r="320" />
              <circle className="radiant-ring delay-2" cx="400" cy="400" r="320" />
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Portfolio Management Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(0 400 400)" />
              <g className="content-group" transform="translate(630, 400)">
                <path className="seg-icon" d="M -12 -4 l 12 -6 l 12 6 l -12 6 z M -12 2 l 12 6 l 12 -6" />
                <text className="seg-text" y="24">Portfolio</text>
                <text className="seg-text" y="38">Management</text>
              </g>
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Account Administration Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(45 400 400)" />
              <g className="content-group" transform="translate(562, 562)">
                <path className="seg-icon" d="M -8 -10 h 16 v 20 h -16 z M -4 -4 h 8 M -4 2 h 4" />
                <text className="seg-text" y="24">Account</text>
                <text className="seg-text" y="38">Administration</text>
              </g>
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Fiduciary Duties Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(90 400 400)" />
              <g className="content-group" transform="translate(400, 630)">
                <path className="seg-icon" d="M -10 -10 l 10 -4 l 10 4 v 6 c 0 6 -10 12 -10 12 c 0 0 -10 -6 -10 -12 z" />
                <text className="seg-text" y="24">Fiduciary</text>
                <text className="seg-text" y="38">Duties</text>
              </g>
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Operations Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(135 400 400)" />
              <g className="content-group" transform="translate(238, 562)">
                <path className="seg-icon" d="M -6 -10 h 12 l 2 4 v 12 l -2 4 h -12 l -2 -4 v -12 z M -2 -2 h 4 v 4 h -4 z" />
                <text className="seg-text" y="28">Operations</text>
              </g>
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Global Family Office Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(180 400 400)" />
              <g className="content-group" transform="translate(170, 400)">
                <path className="seg-icon" d="M 0 -12 l -12 6 h 24 z M -8 -6 v 10 M 0 -6 v 10 M 8 -6 v 10 M -12 4 h 24" />
                <text className="seg-text" y="24">Global Family</text>
                <text className="seg-text" y="38">Office</text>
              </g>
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Reporting and Analytics Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(225 400 400)" />
              <g className="content-group" transform="translate(238, 238)">
                <path className="seg-icon" d="M -12 10 h 24 M -8 10 v -8 M 0 10 v -14 M 8 10 v -20" />
                <text className="seg-text" y="24">Reporting</text>
                <text className="seg-text" y="38">And Analytics</text>
              </g>
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Investment Planning and Proposal Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(270 400 400)" />
              <g className="content-group" transform="translate(400, 170)">
                <circle className="seg-icon" cx="0" cy="0" r="8" />
                <path className="seg-icon" d="M 0 -14 v 4 M 0 10 v 4 M -14 0 h 4 M 10 0 h 4" />
                <text className="seg-text" y="24">Investment Planning</text>
                <text className="seg-text" y="38">&amp; Proposal</text>
              </g>
            </g>

            <g className="segment" role="button" tabIndex={0} aria-label="Client Onboarding Module">
              <use href="#wedge-shape" className="wedge" transform="rotate(315 400 400)" />
              <g className="content-group" transform="translate(562, 238)">
                <circle className="seg-icon" cx="0" cy="-6" r="4" />
                <path className="seg-icon" d="M -10 8 c 0 -6 20 -6 20 0" />
                <text className="seg-text" y="24">Client</text>
                <text className="seg-text" y="38">Onboarding</text>
              </g>
            </g>

            <g style={{ pointerEvents: "none" }} filter="url(#hub-shadow)">
              <circle className="center-hub-base" cx="400" cy="400" r="130" />
              <circle className="center-hub-glass" cx="400" cy="400" r="130" />
              <circle
                cx="400"
                cy="400"
                r="115"
                fill="none"
                stroke="var(--line-subtle)"
                strokeDasharray="2 6"
              />
              <text className="gwes-logo" x="404" y="403">GWES</text>
            </g>
          </svg>
        </div>
    </section>
  );
}

