import { SectionCard, UnverifiedBadge } from "@/components/shared";
import { tractionDimensions } from "@/data/product";
import { Award } from "lucide-react";

export function TractionCards() {
  return (
    <SectionCard
      eyebrow="核心技术"
      title={
        <span className="flex flex-wrap items-center gap-2">
          五维牵引
          <UnverifiedBadge note="以下内容为宣传册宣称，尚未经第三方确认" />
        </span>
      }
      description="以下为宣传册宣称内容，照原文展示。"
      ocid="product.traction.section"
    >
      <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tractionDimensions.map((item, i) => (
          <li
            key={item.id}
            data-ocid={`product.traction.item.${i + 1}`}
            className="group flex flex-col rounded-lg border border-border bg-background p-4 transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card focus-within:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="kpi-number flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-primary text-sm font-semibold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {item.dimension}
              </h3>
            </div>
            <dl className="mt-4 flex flex-1 flex-col gap-3 text-sm">
              <div>
                <dt className="label-eyebrow">资料宣称</dt>
                <dd className="mt-1 font-medium text-primary">{item.claim}</dd>
              </div>
              <div>
                <dt className="label-eyebrow">设计说明</dt>
                <dd className="mt-1 break-words leading-relaxed text-foreground">
                  {item.design}
                </dd>
              </div>
              <div className="mt-auto border-t border-border pt-3">
                <dt className="label-eyebrow">鸣谢</dt>
                <dd className="mt-1 flex items-start gap-1.5 text-muted-foreground">
                  <Award
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 break-words">{item.credit}</span>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
