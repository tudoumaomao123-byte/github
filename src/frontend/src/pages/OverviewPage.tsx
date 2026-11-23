import { CooperationModelCard } from "@/components/overview/CooperationModelCard";
import { SummaryBanner } from "@/components/overview/SummaryBanner";
import { TierBadge } from "@/components/overview/TierBadge";
import {
  KpiCard,
  PageHeader,
  ResponsiveTable,
  SectionCard,
  UnverifiedBadge,
} from "@/components/shared";
import {
  confirmedDecisions,
  cooperationModels,
  coreKpis,
  headlineStats,
  partnerTiers,
} from "@/data/overview";
import { CheckCircle2 } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="space-y-6" data-ocid="overview.page">
      <PageHeader
        eyebrow="招商总览"
        title="睡眠机器人 S · 区域代理招商总览"
        subtitle="汇总招商目标、核心指标、伙伴分级与合作模式，数据照 PDF 原文展示。"
      />

      <SummaryBanner />

      <div
        className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6"
        data-ocid="overview.stats.list"
      >
        {headlineStats.map((s, i) => (
          <KpiCard
            key={s.id}
            label={s.label}
            value={s.value}
            unit={s.unit}
            hint={s.hint}
            index={i}
            ocid={`overview.stat.item.${i + 1}`}
          />
        ))}
      </div>

      <SectionCard
        eyebrow="KPI"
        title="核心考核指标（KPI）"
        description="当前为启动前阶段，全部指标值为 0。"
        index={1}
        ocid="overview.kpi.section"
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {coreKpis.map((k, i) => (
            <div
              key={k.id}
              className="flex min-w-0 flex-col justify-between gap-3 rounded-md border border-border bg-muted/40 p-4 transition-smooth hover:border-primary/40 hover:bg-card"
              data-ocid={`overview.kpi.item.${i + 1}`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="tabular font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {k.name}
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {k.meaning}
                </p>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="kpi-number text-3xl font-semibold text-primary">
                  {k.value}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  启动前
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="渠道"
        title="合作伙伴分级"
        description="按核心资源划分优先梯队。"
        index={2}
        ocid="overview.partners.section"
      >
        <ResponsiveTable
          caption="合作伙伴分级"
          minWidthClassName="min-w-[600px]"
          ocid="overview.partners.table"
        >
          <thead>
            <tr>
              <th scope="col">伙伴类型</th>
              <th scope="col">核心资源</th>
              <th scope="col">梯队</th>
            </tr>
          </thead>
          <tbody>
            {partnerTiers.map((p, i) => (
              <tr key={p.id} data-ocid={`overview.partners.row.${i + 1}`}>
                <td className="font-medium text-foreground">{p.type}</td>
                <td className="text-muted-foreground">{p.resources}</td>
                <td>
                  <TierBadge tier={p.tier} />
                </td>
              </tr>
            ))}
          </tbody>
        </ResponsiveTable>
      </SectionCard>

      <SectionCard
        eyebrow="模式"
        title={
          <span className="inline-flex flex-wrap items-center gap-2">
            四种合作模式
            <UnverifiedBadge note="合作模式待最终拍板" />
          </span>
        }
        description="待最终拍板：A 与 D 标记为优先测试。"
        index={3}
        ocid="overview.models.section"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cooperationModels.map((m, i) => (
            <CooperationModelCard key={m.id} model={m} index={i} />
          ))}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="决策"
        title="已定决策"
        index={4}
        ocid="overview.decisions.section"
      >
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {confirmedDecisions.map((d, i) => (
            <li
              key={d}
              className="flex items-start gap-3 rounded-md border border-border p-4 transition-smooth hover:border-success/50 hover:bg-success/5"
              data-ocid={`overview.decisions.item.${i + 1}`}
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-success"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">{d}</span>
            </li>
          ))}
        </ol>
      </SectionCard>
    </div>
  );
}
