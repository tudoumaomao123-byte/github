import { cn } from "@/lib/utils";

export interface UnverifiedBadgeProps {
  className?: string;
  /** Optional tooltip explaining what is unconfirmed. */
  note?: string;
}

/** Amber badge marking content not yet confirmed in the source PDFs. */
export function UnverifiedBadge({ className, note }: UnverifiedBadgeProps) {
  return (
    <span
      className={cn("badge-unverified shrink-0", className)}
      title={note ?? "该内容尚未确认，待核实"}
      data-ocid="unverified.badge"
    >
      待核实
    </span>
  );
}
