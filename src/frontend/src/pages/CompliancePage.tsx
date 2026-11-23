import { QuestionChecklist } from "@/components/compliance/QuestionChecklist";
import { RuleCard } from "@/components/compliance/RuleCard";
import { PageHeader, SectionCard, UnverifiedBadge } from "@/components/shared";
import {
  complianceRules,
  openQuestions,
  pendingItems,
} from "@/data/compliance";

export default function CompliancePage() {
  return (
    <div className="space-y-6" data-ocid="compliance.page">
      <PageHeader
        eyebrow="合规与待决事项"
        title="合规与待决事项"
        subtitle="合规底线、待解决关键问题与待核实事项，内容照 PDF 原文展示。"
      />

      <SectionCard
        eyebrow="Compliance"
        title={`合规底线（${complianceRules.length}条）`}
        description="对外宣传、招商与渠道合作须遵守的基本规则。"
        index={0}
        ocid="compliance.rules.section"
      >
        <ul
          className="grid gap-3 md:grid-cols-2"
          data-ocid="compliance.rules.list"
        >
          {complianceRules.map((rule, i) => (
            <RuleCard key={rule.id} rule={rule} position={i + 1} />
          ))}
        </ul>
      </SectionCard>

      <SectionCard
        eyebrow="Open questions"
        title={`待解决关键问题（${openQuestions.length}个）`}
        description="需由项目方确认后才能推进的关键决策。"
        index={1}
        ocid="compliance.questions.section"
      >
        <QuestionChecklist questions={openQuestions} />
      </SectionCard>

      <SectionCard
        eyebrow="To verify"
        title="其他待核实事项"
        description="资料中尚未确认、对外使用前需核实的内容。"
        index={2}
        ocid="compliance.pending.section"
      >
        <ul className="space-y-2" data-ocid="compliance.pending.list">
          {pendingItems.map((item, i) => (
            <li
              key={item.id}
              className="flex flex-col gap-2 rounded-lg border border-warning/40 bg-warning/5 px-4 py-3 transition-smooth hover:border-warning hover:bg-warning/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-row sm:items-start sm:justify-between sm:gap-4"
              data-ocid={`compliance.pending.item.${i + 1}`}
            >
              <p className="min-w-0 break-words text-sm leading-relaxed text-foreground">
                {item.text}
              </p>
              <UnverifiedBadge className="w-fit" />
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
