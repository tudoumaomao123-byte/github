import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

export interface SectionCardProps {
  title?: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  /** Entrance stagger index; each step adds 60ms delay. */
  index?: number;
  ocid?: string;
}

export function SectionCard({
  title,
  description,
  eyebrow,
  actions,
  children,
  className,
  contentClassName,
  index = 0,
  ocid,
}: SectionCardProps) {
  const style: CSSProperties = { animationDelay: `${index * 60}ms` };
  return (
    <section
      className={cn(
        "card-dash animate-fade-up p-5 transition-smooth hover:shadow-elevated md:p-6",
        className,
      )}
      style={style}
      data-ocid={ocid ?? "section.card"}
    >
      {(title || actions || eyebrow) && (
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            {eyebrow && <div className="label-eyebrow mb-1">{eyebrow}</div>}
            {title && (
              <h2 className="text-base font-semibold text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className={cn("min-w-0", contentClassName)}>{children}</div>
    </section>
  );
}
