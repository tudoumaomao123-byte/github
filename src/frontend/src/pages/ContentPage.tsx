import { AngleScoreChart } from "@/components/content/AngleScoreChart";
import { ScheduleTable } from "@/components/content/ScheduleTable";
import { ScriptTimeline } from "@/components/content/ScriptTimeline";
import { TopTopics } from "@/components/content/TopTopics";
import { TypeDonut } from "@/components/content/TypeDonut";
import { KpiCard, PageHeader, SectionCard } from "@/components/shared";
import {
  angleScoreTitle,
  angleScores,
  firstScript,
  scoringDimensions,
  topicLines,
  videoSchedule,
} from "@/data/content";
import { CalendarDays, Lightbulb, ListChecks, Trophy } from "lucide-react";

const topAngle = Math.max(...angleScores.map((a) => a.score));
const topicCount = topicLines.reduce((n, l) => n + l.topics.length, 0);

export default function ContentPage() {
  return (
    <div className="space-y-6" data-ocid="content.page">
      <PageHeader
        eyebrow="内容运营"
        title="内容运营"
        subtitle="选题评分、视频排期与首条脚本，数据照 PDF 原文展示。"
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard
          label="选题角度"
          value={angleScores.length}
          unit="个"
          icon={Lightbulb}
          index={0}
          ocid="content.kpi.angles.card"
        />
        <KpiCard
          label="最高角度评分"
          value={topAngle}
          unit="分"
          hint="满分 100"
          icon={Trophy}
          index={1}
          ocid="content.kpi.top.card"
        />
        <KpiCard
          label="高分选题"
          value={topicCount}
          unit="条"
          hint={`${topicLines.length} 条内容线`}
          icon={ListChecks}
          index={2}
          ocid="content.kpi.topics.card"
        />
        <KpiCard
          label="视频排期"
          value={videoSchedule.length}
          unit="条"
          icon={CalendarDays}
          index={3}
          ocid="content.kpi.schedule.card"
        />
      </div>

      <SectionCard
        eyebrow="选题评估"
        title={angleScoreTitle}
        description={`评分维度：${scoringDimensions.join("、")}`}
        index={1}
        ocid="content.angle.section"
      >
        <AngleScoreChart />
      </SectionCard>

      <SectionCard
        eyebrow="选题库"
        title="高分选题"
        description="按产品线、招商线、科普线分组"
        index={2}
        ocid="content.topics.section"
      >
        <TopTopics />
      </SectionCard>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <SectionCard
          eyebrow="发布节奏"
          title="视频排期"
          description="12 条视频的内容支柱、标题与目的"
          index={3}
          ocid="content.schedule.section"
        >
          <ScheduleTable />
        </SectionCard>
        <SectionCard
          eyebrow="内容结构"
          title="内容类型分布"
          description="按视频排期中的内容支柱统计"
          index={4}
          ocid="content.type.section"
        >
          <TypeDonut />
        </SectionCard>
      </div>

      <SectionCard
        eyebrow="首条视频脚本"
        title={firstScript.title}
        description="5 个时间段的环节、口播与画面字幕"
        index={5}
        ocid="content.script.section"
      >
        <ScriptTimeline />
      </SectionCard>
    </div>
  );
}
