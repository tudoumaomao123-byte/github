import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface ResponsiveTableProps {
  children: ReactNode;
  /** Minimum table width before horizontal scrolling kicks in, e.g. "min-w-[720px]". */
  minWidthClassName?: string;
  className?: string;
  caption?: string;
  ocid?: string;
}

/**
 * Wraps a <table> (or shadcn Table parts: thead/tbody children) so it scrolls
 * horizontally on narrow screens instead of overflowing the layout.
 * Children are rendered inside a styled <table>.
 */
export function ResponsiveTable({
  children,
  minWidthClassName = "min-w-[640px]",
  className,
  caption,
  ocid,
}: ResponsiveTableProps) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-md border border-border",
        className,
      )}
      data-ocid={ocid ?? "data.table"}
    >
      <table
        className={cn(
          "w-full border-collapse text-sm [&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:bg-muted [&_thead_th]:px-4 [&_thead_th]:py-2.5 [&_thead_th]:text-left [&_thead_th]:text-xs [&_thead_th]:font-semibold [&_thead_th]:text-muted-foreground [&_tbody_td]:border-t [&_tbody_td]:border-border [&_tbody_td]:px-4 [&_tbody_td]:py-3 [&_tbody_td]:align-top [&_tbody_tr]:transition-smooth [&_tbody_tr:hover]:bg-muted/40",
          minWidthClassName,
        )}
      >
        {caption && <caption className="sr-only">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}
