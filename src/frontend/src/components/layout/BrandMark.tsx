import { cn } from "@/lib/utils";

interface BrandMarkProps {
  compact?: boolean;
  className?: string;
}

/** SEELEEP 小月智能 wordmark with crescent line art, for dark navy surfaces. */
export function BrandMark({ compact = false, className }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-3 min-w-0", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={cn(
          "shrink-0 text-sidebar-foreground",
          compact ? "h-7 w-7" : "h-9 w-9",
        )}
      >
        <path
          d="M21.5 4.5A12 12 0 1 0 27.5 21 9.5 9.5 0 0 1 21.5 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="24.5" cy="8" r="1" className="fill-sidebar-primary" />
      </svg>
      <div className="min-w-0 leading-tight">
        <div
          className={cn(
            "font-display font-semibold tracking-[0.18em] text-sidebar-accent-foreground",
            compact ? "text-base" : "text-lg",
          )}
        >
          SEELEEP
        </div>
        <div className="text-[11px] tracking-[0.3em] text-sidebar-foreground/70">
          小月智能
        </div>
      </div>
    </div>
  );
}
