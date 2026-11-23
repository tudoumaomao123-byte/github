import { type Pillar, pillarColors } from "@/data/content";

export function PillarBadge({ pillar }: { pillar: Pillar }) {
  const color = pillarColors[pillar];
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium text-foreground"
      style={{
        borderColor: color,
        backgroundColor: `color-mix(in oklch, ${color} 14%, transparent)`,
      }}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {pillar}
    </span>
  );
}
