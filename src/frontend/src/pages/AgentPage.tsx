import { PassScale } from "@/components/agent/PassScale";
import { RoadmapTimeline } from "@/components/agent/RoadmapTimeline";
import { ScoreTable } from "@/components/agent/ScoreTable";
import { WeightChart } from "@/components/agent/WeightChart";
import { KpiCard, PageHeader, SectionCard } from "@/components/shared";
import {
  PASS_LINE,
  SCORE_TOTAL,
  roadmapPhases,
  roadmapTitle,
  scoreDimensions,
  scoreTitle,
} from "@/data/agent";
import { CalendarRange, Gauge, Layers, ShieldCheck } from "lucide-react";

export default function AgentPage() {
  return (
    <div className="space-y-6" data-ocid="agent.page">
      <PageHeader
        eyebrow="代理商准入评估"
        title="代理商准入评估"
        subtitle="代理准入评分维度与 90 天招商路线图，数据照 PDF 原文展示。"
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard
          label="评分满分"
          value={SCORE_TOTAL}
          unit="分"
          icon={Gauge}
          index={0}
          ocid="agent.kpi.total.card"
        />
        <KpiCard
          label="准入门槛"
          value={PASS_LINE}
          unit="分"
          icon={ShieldCheck}
          index={1}
          ocid="agent.kpi.pass.card"
        />
        <KpiCard
          label="评分维度"
          value={scoreDimensions.length}
          unit="项"
          icon={Layers}
          index={2}
          ocid="agent.kpi.dimensions.card"
        />
        <KpiCard
          label="路线图阶段"
          value={roadmapPhases.length}
          unit="个"
          hint="共 90 天"
          icon={CalendarRange}
          index={3}
          ocid="agent.kpi.phases.card"
        />
      </div>

      <SectionCard
        eyebrow="准入评分"
        title={scoreTitle}
        description="六项维度及其满分与评分依据"
        index={1}
        ocid="agent.score.section"
      >
        <ScoreTable />
      </SectionCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard
          eyebrow="权重分布"
          title="各维度满分占比"
          description="按满分 100 分计算各维度权重"
          index={2}
          ocid="agent.weight.section"
        >
          <WeightChart />
        </SectionCard>
        <SectionCard
          eyebrow="门槛刻度"
          title={`0 – ${SCORE_TOTAL} 分评分刻度`}
          description={`总分达到 ${PASS_LINE} 分方可准入`}
          index={3}
          ocid="agent.pass_scale.section"
        >
          <PassScale />
        </SectionCard>
      </div>

      <SectionCard
        eyebrow="招商推进"
        title={roadmapTitle}
        description="四个阶段的目标、判断标准与关键任务"
        index={4}
        ocid="agent.roadmap.section"
      >
        <RoadmapTimeline />
      </SectionCard>
    </div>
  );
}
