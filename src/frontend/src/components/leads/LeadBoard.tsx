import { EmptyState } from "@/components/shared";
import { type LeadStage, leadFields, leadStages } from "@/data/leads";
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

const toneDot: Record<LeadStage["tone"], string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  success: "bg-success",
  muted: "bg-muted-foreground",
  destructive: "bg-destructive",
};

export function LeadFieldLegend() {
  return (
    <div data-ocid="leads.board.legend" className="mb-4">
      <div className="label-eyebrow mb-2">线索记录字段</div>
      <ul className="flex flex-wrap gap-2">
        {leadFields.map((f, i) => (
          <li
            key={f.id}
            data-ocid={`leads.legend.item.${i + 1}`}
            className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-smooth hover:border-primary/40 hover:bg-primary/10"
          >
            {f.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LeadBoard() {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-2 md:-mx-6 md:px-6">
      <ul
        data-ocid="leads.board.list"
        className="grid auto-cols-[minmax(13rem,1fr)] grid-flow-col gap-3 xl:auto-cols-auto xl:grid-flow-row xl:grid-cols-7"
      >
        {leadStages.map((s, i) => (
          <li
            key={s.id}
            data-ocid={`leads.board.item.${i + 1}`}
            className="flex min-w-0 flex-col gap-3 rounded-lg border border-border bg-muted/40 p-3 transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-elevated"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="flex min-w-0 items-center gap-2">
                <span
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full",
                    toneDot[s.tone],
                  )}
                  aria-hidden="true"
                />
                <span className="truncate text-sm font-semibold text-foreground">
                  {s.label}
                </span>
              </span>
              <span
                className="rounded-full bg-card px-2 py-0.5 font-mono text-xs font-semibold tabular text-muted-foreground"
                aria-label={`${s.label} ${s.count} 条`}
              >
                {s.count}
              </span>
            </div>
            <EmptyState
              icon={Inbox}
              title="暂无线索"
              description="该阶段尚无记录"
              className="px-3 py-6"
              ocid={`leads.board.empty_state.${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
