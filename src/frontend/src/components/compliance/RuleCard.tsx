import type { ComplianceRule } from "@/data/compliance";
import { ShieldCheck } from "lucide-react";

interface RuleCardProps {
  rule: ComplianceRule;
  position: number;
}

export function RuleCard({ rule, position }: RuleCardProps) {
  return (
    <li
      className="group relative flex gap-4 rounded-lg border border-border bg-card p-4 transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      data-ocid={`compliance.rule.item.${position}`}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-sm font-semibold tabular text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground"
        aria-hidden="true"
      >
        {String(position).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center gap-1.5">
          <ShieldCheck
            className="h-3.5 w-3.5 text-primary"
            aria-hidden="true"
          />
          <h3 className="text-sm font-semibold text-foreground">{rule.area}</h3>
        </div>
        <p className="break-words text-sm leading-relaxed text-muted-foreground">
          {rule.rule}
        </p>
      </div>
    </li>
  );
}
