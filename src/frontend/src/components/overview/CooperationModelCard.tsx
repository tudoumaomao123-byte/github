import type { CooperationModel } from "@/data/overview";
import { cn } from "@/lib/utils";
import { AlertTriangle, Layers, ThumbsUp } from "lucide-react";

interface Props {
  model: CooperationModel;
  index: number;
}

export function CooperationModelCard({ model, index }: Props) {
  return (
    <article
      className={cn(
        "group flex min-w-0 flex-col rounded-lg border bg-card p-5 transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        model.priority
          ? "border-primary/40 bg-gradient-subtle"
          : "border-border",
      )}
      data-ocid={`overview.model.item.${index + 1}`}
    >
      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-md font-display text-lg font-semibold",
              model.priority
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground",
            )}
          >
            {model.code}
          </span>
          <h3 className="truncate text-base font-semibold text-foreground">
            {model.name}
          </h3>
        </div>
        {model.priority && (
          <span className="shrink-0 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium leading-none text-success">
            优先测试
          </span>
        )}
      </header>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            结构
          </dt>
          <dd className="text-foreground">{model.structure}</dd>
        </div>
        <div>
          <dt className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-success">
            <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
            优点
          </dt>
          <dd className="text-foreground">{model.pros}</dd>
        </div>
        <div>
          <dt className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
            风险
          </dt>
          <dd className="text-foreground">{model.risks}</dd>
        </div>
      </dl>
    </article>
  );
}
