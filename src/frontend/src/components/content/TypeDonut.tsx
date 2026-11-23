import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { typeDistribution, videoSchedule } from "@/data/content";
import { Cell, Label, Pie, PieChart } from "recharts";

const chartConfig: ChartConfig = Object.fromEntries(
  typeDistribution.map((d) => [d.pillar, { label: d.pillar, color: d.color }]),
);

const total = videoSchedule.length;

export function TypeDonut() {
  return (
    <div
      className="grid items-center gap-6 sm:grid-cols-[minmax(0,220px)_1fr]"
      data-ocid="content.type.chart_point"
    >
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[220px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey="pillar" hideLabel />}
          />
          <Pie
            data={typeDistribution}
            dataKey="count"
            nameKey="pillar"
            innerRadius="58%"
            outerRadius="92%"
            paddingAngle={2}
            strokeWidth={2}
          >
            {typeDistribution.map((d) => (
              <Cell key={d.pillar} fill={d.color} />
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
                      {total}
                    </tspan>
                    <tspan
                      x={cx}
                      dy="1.6em"
                      className="fill-muted-foreground text-xs"
                    >
                      条视频
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <ul className="space-y-2" data-ocid="content.type.list">
        {typeDistribution.map((d, i) => (
          <li
            key={d.pillar}
            className="flex items-center justify-between gap-3 rounded-md px-2 py-2 text-sm transition-smooth hover:bg-muted/60"
            data-ocid={`content.type.item.${i + 1}`}
          >
            <span className="inline-flex items-center gap-2 text-foreground">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: d.color }}
              />
              {d.pillar}
            </span>
            <span className="tabular font-semibold text-foreground">
              {d.count}
              <span className="ml-0.5 text-xs font-normal text-muted-foreground">
                条
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
