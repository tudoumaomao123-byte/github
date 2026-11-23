import { SectionCard, UnverifiedBadge } from "@/components/shared";
import { useCaseScenarios, useCases } from "@/data/product";
import { MapPin } from "lucide-react";

export function UseCaseCards() {
  return (
    <SectionCard
      eyebrow="落地案例"
      title="应用场景"
      description="产品资料自述，待核实。"
      index={2}
      ocid="product.usecases.section"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-muted-foreground">适用场景</span>
        {useCaseScenarios.map((s) => (
          <span
            key={s}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {s}
          </span>
        ))}
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {useCases.map((u, i) => (
          <li
            key={u.id}
            data-ocid={`product.usecases.item.${i + 1}`}
            className="flex flex-col gap-2 rounded-lg border border-border bg-background p-4 transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex min-w-0 items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <h3 className="min-w-0 break-words text-sm font-semibold text-foreground">
                  {u.name}
                </h3>
              </div>
              <UnverifiedBadge note="产品资料自述，尚未确认" />
            </div>
            <span className="w-fit rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary">
              {u.kind}
            </span>
            <p className="break-words text-sm leading-relaxed text-muted-foreground">
              {u.note}
            </p>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
