import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { angleScores, scoringDimensions } from "@/data/content";
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";

const chartConfig: ChartConfig = {
  score: { label: "评分", color: "oklch(var(--chart-1))" },
};

const top = Math.max(...angleScores.map((a) => a.score));

export function AngleScoreChart() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-muted-foreground">评分维度：</span>
        {scoringDimensions.map((d) => (
          <span
            key={d}
            className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-foreground"
          >
            {d}
          </span>
        ))}
      </div>
      <div className="overflow-x-auto" data-ocid="content.angle.chart_point">
        <ChartContainer
          config={chartConfig}
          className="h-[360px] min-w-[560px] w-full"
        >
          <BarChart
            data={angleScores}
            layout="vertical"
            margin={{ left: 8, right: 40, top: 4, bottom: 4 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="angle"
              width={230}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={22}>
              {angleScores.map((a) => (
                <Cell
                  key={a.id}
                  fill={
                    a.score === top
                      ? "oklch(var(--chart-1))"
                      : "oklch(var(--chart-2))"
                  }
                />
              ))}
              <LabelList
                dataKey="score"
                position="right"
                className="fill-foreground"
                fontSize={12}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
      <ol className="grid gap-2 sm:grid-cols-2" data-ocid="content.angle.list">
        {angleScores.map((a, i) => (
          <li
            key={a.id}
            className="flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2 text-sm transition-smooth hover:bg-muted/50"
            data-ocid={`content.angle.item.${i + 1}`}
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="tabular w-5 shrink-0 text-xs text-muted-foreground">
                {i + 1}
              </span>
              <span className="break-words text-foreground">{a.angle}</span>
            </span>
            <span className="tabular shrink-0 font-semibold text-primary">
              {a.score}
              <span className="ml-0.5 text-xs font-normal text-muted-foreground">
                分
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
