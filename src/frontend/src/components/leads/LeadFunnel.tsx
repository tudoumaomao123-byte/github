import { funnelSteps } from "@/data/leads";
import type { CSSProperties } from "react";

const MAX = 100;
const MIN = 46;

export function LeadFunnel() {
  const step = (MAX - MIN) / (funnelSteps.length - 1);
  return (
    <figure data-ocid="leads.funnel.chart" className="m-0">
      <figcaption className="sr-only">
        招商转化漏斗，共 {funnelSteps.length} 个环节，按顺序排列
      </figcaption>
      <ol className="flex flex-col items-center gap-1.5">
        {funnelSteps.map((s, i) => {
          const style: CSSProperties = {
            width: `${MAX - step * i}%`,
            opacity: 1 - i * 0.045,
          };
          return (
            <li
              key={s.id}
              style={style}
              data-ocid={`leads.funnel.item.${i + 1}`}
              className="group min-w-[15rem] max-w-full"
            >
              <div className="flex min-h-11 items-center gap-3 rounded-md bg-gradient-primary px-3 py-2 text-primary-foreground shadow-subtle transition-smooth group-hover:-translate-y-0.5 group-hover:shadow-elevated">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 font-mono text-xs font-semibold tabular">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 break-words text-sm font-medium leading-snug">
                  {s.label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        条形宽度仅表示环节先后形态，不代表实际数量。
      </p>
    </figure>
  );
}
