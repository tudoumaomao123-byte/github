import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "mb-6 flex flex-col gap-3 animate-fade-up md:mb-8 md:flex-row md:items-end md:justify-between",
        className,
      )}
      data-ocid="page.header.section"
    >
      <div className="min-w-0">
        {eyebrow && <div className="label-eyebrow mb-2">{eyebrow}</div>}
        <h1 className="text-2xl font-semibold text-foreground md:text-3xl break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  );
}
