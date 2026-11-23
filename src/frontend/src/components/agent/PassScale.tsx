import { PASS_LINE, SCORE_TOTAL, scoreDimensions } from "@/data/agent";

const ticks = [0, 25, 50, 75, 100];

export function PassScale() {
  const passPct = (PASS_LINE / SCORE_TOTAL) * 100;
  return (
    <div data-ocid="agent.pass_scale.panel">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          评分刻度 0 – {SCORE_TOTAL}，各维度按满分累加
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
          及格线 {PASS_LINE} 分
        </span>
      </div>

      <div className="relative pt-7">
        <div
          className="absolute top-0 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-1.5 py-0.5 text-[11px] font-semibold text-primary-foreground"
          style={{ left: `${passPct}%` }}
        >
          及格线 {PASS_LINE}
        </div>
        <div
          className="relative flex h-5 w-full overflow-hidden rounded-full bg-muted"
          role="img"
          aria-label={`评分刻度 0 至 ${SCORE_TOTAL} 分，及格线 ${PASS_LINE} 分`}
        >
          {scoreDimensions.map((d) => (
            <div
              key={d.id}
              title={`${d.name} ${d.maxScore} 分`}
              className="h-full border-r-2 border-card transition-smooth last:border-r-0 hover:opacity-75"
              style={{
                width: `${(d.maxScore / SCORE_TOTAL) * 100}%`,
                backgroundColor: d.color,
              }}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-6px] top-6 w-0.5 -translate-x-1/2 bg-foreground"
          style={{ left: `${passPct}%` }}
        />
        <div className="relative mt-2 h-4 text-[11px] text-muted-foreground">
          {ticks.map((t) => (
            <span
              key={t}
              className={`tabular absolute -translate-x-1/2 ${t === PASS_LINE ? "font-semibold text-foreground" : ""}`}
              style={{ left: `${t}%` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-muted/40 p-3">
          <div className="label-eyebrow">未达门槛</div>
          <div className="mt-1 text-sm text-foreground">
            0 – {PASS_LINE - 1} 分
          </div>
        </div>
        <div className="rounded-md border border-primary/30 bg-primary/5 p-3">
          <div className="label-eyebrow !text-primary">达到准入门槛</div>
          <div className="mt-1 text-sm text-foreground">
            {PASS_LINE} – {SCORE_TOTAL} 分
          </div>
        </div>
      </div>
    </div>
  );
}
