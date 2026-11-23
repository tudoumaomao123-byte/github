import { overviewSummary } from "@/data/overview";
import { Building2, Target, Video } from "lucide-react";

const chips = [
  {
    id: "product",
    icon: Target,
    text: `${overviewSummary.product} · ${overviewSummary.price}`,
  },
  { id: "goal", icon: Building2, text: overviewSummary.goal },
  { id: "channel", icon: Video, text: overviewSummary.channel },
];

export function SummaryBanner() {
  return (
    <section
      className="animate-fade-up relative overflow-hidden rounded-lg bg-gradient-night p-6 text-primary-foreground md:p-8"
      data-ocid="overview.summary.section"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-3xl">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
          招商目标
        </div>
        <p className="text-lg font-medium leading-relaxed md:text-xl">
          {overviewSummary.text}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {chips.map(({ id, icon: Icon, text }) => (
            <li
              key={id}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-sm"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
