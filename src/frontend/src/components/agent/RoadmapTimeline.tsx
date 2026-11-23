import { roadmapPhases } from "@/data/agent";
import { CheckCircle2, Flag, Target } from "lucide-react";

export function RoadmapTimeline() {
  return (
    <ol className="relative" data-ocid="agent.roadmap.list">
      {roadmapPhases.map((phase, i) => {
        const isLast = i === roadmapPhases.length - 1;
        return (
          <li
            key={phase.id}
            className="relative pb-8 pl-12 last:pb-0 md:pl-16"
            data-ocid={`agent.roadmap.item.${i + 1}`}
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[15px] top-9 w-0.5 bg-border md:left-[19px]"
              />
            )}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-subtle ring-4 ring-card md:h-10 md:w-10"
            >
              {i + 1}
            </span>

            <article className="rounded-lg border border-border bg-card p-4 transition-smooth focus-within:ring-2 focus-within:ring-ring hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated md:p-5">
              <header className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
                  阶段 · {phase.period}
                </span>
                <h3 className="text-base font-semibold text-foreground md:text-lg">
                  {phase.goal}
                </h3>
              </header>

              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="flex gap-2">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="label-eyebrow">目标</dt>
                    <dd className="mt-0.5 text-sm text-foreground">
                      {phase.goal}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Flag className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div className="min-w-0">
                    <dt className="label-eyebrow">判断标准</dt>
                    <dd className="mt-0.5 text-sm text-foreground">
                      {phase.criterion}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-4 border-t border-border pt-3">
                <div className="label-eyebrow mb-2">关键任务</div>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {phase.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2 rounded px-1 py-0.5 text-sm text-foreground transition-smooth hover:bg-muted/60"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                      <span className="min-w-0 break-words">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
