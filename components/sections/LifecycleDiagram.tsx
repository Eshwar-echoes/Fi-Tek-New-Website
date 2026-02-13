"use client";


// Define or import the type from a shared types file if available
export type PlatformDomainId = string;

interface EcosystemDiagramProps {
  activeDomain: PlatformDomainId;
  onSelect: (id: PlatformDomainId) => void;
}

// 8 domains arranged in a radial pattern around center
// Center at 250,250 with radius 120 pixels from center
const DOMAINS = [
  { id: "trading" as PlatformDomainId, cx: 250, cy: 60, r: 45, label: "Trading" },

  { id: "accounting" as PlatformDomainId, cx: 370, cy: 110, r: 45, label: "Accounting" },

  { id: "settlement" as PlatformDomainId, cx: 410, cy: 250, r: 45, label: "Settlement" },

  { id: "integration" as PlatformDomainId, cx: 370, cy: 390, r: 45, label: "Integration" },

  { id: "automation" as PlatformDomainId, cx: 250, cy: 440, r: 45, label: "Automation" },

  { id: "reporting" as PlatformDomainId, cx: 130, cy: 390, r: 45, label: "Reporting" },

  { id: "data" as PlatformDomainId, cx: 90, cy: 250, r: 45, label: "Data" },

  { id: "familyoffice" as PlatformDomainId, cx: 130, cy: 110, r: 45, label: "Family Office" },
];



export function EcosystemDiagram({ activeDomain, onSelect }: Readonly<EcosystemDiagramProps>) {
  const handleKeyDown = (domainId: PlatformDomainId, e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(domainId);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-(--surface-muted) to-(--surface-base) rounded-lg border border-(--border-subtle) p-4 md:p-6">
      <section
        aria-label="Platform ecosystem diagram with 8 integrated domains"
        className="w-full"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full max-w-md h-auto mx-auto"
        >
        {/* Connection lines from center to domains */}
        {DOMAINS.map((domain) => (
          <line
            key={`line-${domain.id}`}
            x1="250"
            y1="250"
            x2={domain.cx}
            y2={domain.cy}
            stroke={activeDomain === domain.id ? "#000000" : "#d1d5db"}
            strokeWidth={activeDomain === domain.id ? "1.5" : "1"}
            opacity={activeDomain === domain.id ? "0.6" : "1"}
            pointerEvents="none"
          />
        ))}

        {/* Domain circles with visible labels and interactivity */}
        {DOMAINS.map((domain) => (
          <g key={domain.id}>
            {/* Connection line accent for active domain */}
            {activeDomain === domain.id && (
              <line
                x1="250"
                y1="250"
                x2={domain.cx}
                y2={domain.cy}
                stroke="#000000"
                strokeWidth="2"
                opacity="0.5"
                pointerEvents="none"
              />
            )}

            {/* Center circle - ALWAYS LAST */}
            <circle cx="250" cy="250" r="35" fill="var(--surface-muted)" stroke="var(--text-primary)" strokeWidth="2" />

            <text x="250" y="245" textAnchor="middle" dominantBaseline="middle" className="text-xs font-bold">
              Global
            </text>

            <text x="250" y="258" textAnchor="middle" dominantBaseline="middle" className="text-xs font-bold">
              WealthES™
            </text>

            {/* Domain circle - interactive */}
            <circle
              cx={domain.cx}
              cy={domain.cy}
              r={domain.r}
              fill={activeDomain === domain.id ? "var(--surface-muted)" : "var(--surface-base)"}
              stroke={activeDomain === domain.id ? "var(--text-black)" : "var(--border-subtle)"}
              strokeWidth={activeDomain === domain.id ? 2 : 1.5}
              onClick={() => onSelect(domain.id)}
              onKeyDown={(e) => handleKeyDown(domain.id, e)}
              tabIndex={0}
              role="button"
              aria-pressed={activeDomain === domain.id}
              aria-label={`Select ${domain.label} domain`}
              className="cursor-pointer transition-all duration-200 hover:stroke-(--text-primary) hover:fill-(--surface-muted) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--text-black)"
            />

            {/* Subtle active state indicator */}
            {activeDomain === domain.id && (
              <circle
                cx={domain.cx}
                cy={domain.cy}
                r={domain.r + 6}
                fill="none"
                stroke="#000000"
                strokeWidth="0.5"
                opacity="0.15"
                pointerEvents="none"
              />
            )}

            {/* Visible domain label inside circle */}
            <text
              x={domain.cx}
              y={domain.cy}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-semibold pointer-events-none select-none"
              fill="var(--text-primary)"
              style={{
                fontSize: "12px",
                lineHeight: 1.2,
              }}
            >
              {domain.label}
            </text>
          </g>
        ))}
      </svg>
      </section>
    </div>
  );
}
