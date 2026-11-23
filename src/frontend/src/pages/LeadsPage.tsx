import { LeadBoard, LeadFieldLegend } from "@/components/leads/LeadBoard";
import { LeadFunnel } from "@/components/leads/LeadFunnel";
import { KpiCard, PageHeader, SectionCard } from "@/components/shared";
import {
  funnelSteps,
  leadSourceNote,
  leadStages,
  totalLeads,
} from "@/data/leads";
import { Filter, Info, Layers, Users } from "lucide-react";

export default function LeadsPage() {
  return (
    <div data-ocid="leads.page" className="flex flex-col gap-6">
      <PageHeader
        eyebrow="获客与线索"
        title="获客与线索"
        subtitle="招商转化路径与线索阶段，数据照 PDF 原文展示。"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard
          label="当前线索"
          value={totalLeads}
          unit="条"
          icon={Users}
          hint="来源：企业号短视频留资入口"
          index={0}
          ocid="leads.kpi.item.1"
        />
        <KpiCard
          label="转化漏斗环节"
          value={funnelSteps.length}
          unit="步"
          icon={Filter}
          index={1}
          ocid="leads.kpi.item.2"
        />
        <KpiCard
          label="看板阶段"
          value={leadStages.length}
          unit="列"
          icon={Layers}
          index={2}
          ocid="leads.kpi.item.3"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        <SectionCard
          eyebrow="转化路径"
          title="招商转化漏斗"
          description="从内容曝光到区域权益调整的 10 个环节"
          index={3}
          ocid="leads.funnel.section"
          className="xl:col-span-3"
        >
          <LeadFunnel />
        </SectionCard>

        <SectionCard
          eyebrow="线索来源"
          title="留资说明"
          index={4}
          ocid="leads.source.section"
          className="xl:col-span-2"
        >
          <div className="flex flex-col gap-4">
            <div className="rounded-lg bg-gradient-primary p-5 text-primary-foreground">
              <div className="text-sm opacity-80">当前线索</div>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="kpi-number text-5xl font-semibold">
                  {totalLeads}
                </span>
                <span className="text-sm opacity-80">条</span>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-border bg-secondary/60 p-4">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-secondary-foreground">
                {leadSourceNote}
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard
        eyebrow="只读看板"
        title="线索看板"
        description={`当前线索 ${totalLeads} 条 · 共 ${leadStages.length} 个阶段`}
        index={5}
        ocid="leads.board.section"
      >
        <LeadFieldLegend />
        <LeadBoard />
      </SectionCard>
    </div>
  );
}
