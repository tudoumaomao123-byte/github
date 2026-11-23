import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SCORE_TOTAL, scoreDimensions } from "@/data/agent";
import { Cell, Label, Pie, PieChart } from "recharts";

const chartConfig: ChartConfig = Object.fromEntries(
  scoreDimensions.map((d) => [d.id, { label: d.name, color: d.color }]),
);

const chartData = scoreDimensions.map((d) => ({
  id: d.id,
  name: d.name,
  value: d.maxScore,
  fill: d.color,
}));

export function WeightChart() {
  return (
    <div
      className="grid items-center gap-6 sm:grid-cols-[minmax(0,240px)_1fr]"
      data-ocid="agent.weight.chart_point"
    >
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[240px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey="id" hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="id"
            innerRadius="58%"
            outerRadius="92%"
            paddingAngle={2}
            strokeWidth={2}
          >
            {chartData.map((entry) => (
              <Cell key={entry.id} fill={entry.fill} />
            ))}
            <Label
              content={({ viewBox }) => {
                if (!viewBox || !("cx" in viewBox)) return null;
                const { cx, cy } = viewBox;
                return (
                  <text x={cx} y={cy} textAnchor="middle">
                    <tspan
                      x={cx}
                      dy="-0.2em"
                      className="fill-foreground font-display text-3xl font-bold"
                    >
                      {SCORE_TOTAL}
                    </tspan>
                    <tspan
                      x={cx}
                      dy="1.6em"
                      className="fill-muted-foreground text-xs"
                    >
                      满分
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <ul className="space-y-2.5">
        {scoreDimensions.map((d, i) => (
          <li
            key={d.id}
            className="group rounded-md px-2 py-1.5 transition-smooth hover:bg-muted/60"
            data-ocid={`agent.weight.item.${i + 1}`}
          >
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="inline-flex min-w-0 items-center gap-2 text-foreground">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-sm"
                  style={{ backgroundColor: d.color }}
                />
                <span className="truncate">{d.name}</span>
              </span>
              <span className="tabular shrink-0 font-semibold text-foreground">
                {d.maxScore}
                <span className="ml-0.5 text-xs font-normal text-muted-foreground">
                  分
                </span>
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full origin-left rounded-full transition-smooth group-hover:opacity-80"
                style={{
                  width: `${(d.maxScore / SCORE_TOTAL) * 100}%`,
                  backgroundColor: d.color,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
