import type { PartnerTier } from "@/data/overview";
import { cn } from "@/lib/utils";

const tierStyles: Record<PartnerTier, string> = {
  第一梯队: "bg-primary text-primary-foreground border-primary",
  重点测试: "bg-primary/10 text-primary border-primary/30",
  项目型合作: "bg-accent/15 text-accent-foreground border-accent/40",
  需先核实产品准入: "bg-warning/15 text-warning-foreground border-warning/50",
  测试: "bg-secondary text-secondary-foreground border-border",
  谨慎: "bg-destructive/10 text-destructive border-destructive/30",
  不作为核心节点:
    "bg-muted text-muted-foreground border-border line-through decoration-muted-foreground/50",
};

export function TierBadge({ tier }: { tier: PartnerTier }) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        tierStyles[tier],
      )}
    >
      {tier}
    </span>
  );
}
