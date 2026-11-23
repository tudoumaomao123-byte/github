import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Moon } from "lucide-react";
import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: ReactNode;
  icon?: LucideIcon;
  action?: ReactNode;
  className?: string;
  ocid?: string;
}

export function EmptyState({
  title,
  description,
  icon: Icon = Moon,
  action,
  className,
  ocid,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/50 px-6 py-10 text-center",
        className,
      )}
      data-ocid={ocid ?? "empty_state"}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="font-display text-sm font-semibold text-foreground">
        {title}
      </div>
      {description && (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}
