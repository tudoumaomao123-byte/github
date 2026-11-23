import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { UnverifiedBadge } from "./UnverifiedBadge";

export interface KpiCardProps {
  label: string;
  value: ReactNode;
  unit?: string;
  hint?: ReactNode;
  icon?: LucideIcon;
  unverified?: boolean;
  index?: number;
  className?: string;
  ocid?: string;
}

export function KpiCard({
  label,
  value,
  unit,
  hint,
  icon: Icon,
  unverified = false,
  index = 0,
  className,
  ocid,
}: KpiCardProps) {
  const style: CSSProperties = { animationDelay: `${index * 60}ms` };
  return (
    <div
      className={cn(
        "card-dash animate-fade-up flex min-w-0 flex-col gap-3 p-5 transition-smooth hover:shadow-elevated",
        className,
      )}
      style={style}
      data-ocid={ocid ?? `kpi.item.${index + 1}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-sm text-muted-foreground">{label}</span>
        {Icon && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-2">
        <span className="kpi-number text-3xl font-semibold text-foreground break-all md:text-4xl">
          {value}
        </span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        {unverified && <UnverifiedBadge className="ml-1" />}
      </div>
      {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}
