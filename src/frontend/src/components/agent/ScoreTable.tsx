import { ResponsiveTable } from "@/components/shared";
import { SCORE_TOTAL, scoreDimensions, scoreTitle } from "@/data/agent";

export function ScoreTable() {
  const total = scoreDimensions.reduce((sum, d) => sum + d.maxScore, 0);
  return (
    <ResponsiveTable
      caption={scoreTitle}
      minWidthClassName="min-w-[560px]"
      ocid="agent.score.table"
    >
      <thead>
        <tr>
          <th scope="col">维度</th>
          <th scope="col" className="!text-right">
            满分
          </th>
          <th scope="col">评分依据</th>
        </tr>
      </thead>
      <tbody>
        {scoreDimensions.map((d, i) => (
          <tr key={d.id} data-ocid={`agent.score.row.${i + 1}`}>
            <td className="font-medium text-foreground">
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-sm"
                  style={{ backgroundColor: d.color }}
                />
                {d.name}
              </span>
            </td>
            <td className="kpi-number text-right text-base font-semibold text-primary">
              {d.maxScore}
            </td>
            <td className="text-muted-foreground">{d.basis}</td>
          </tr>
        ))}
        <tr className="bg-secondary/60" data-ocid="agent.score.total_row">
          <td className="font-semibold text-foreground">合计</td>
          <td className="kpi-number text-right text-lg font-bold text-primary">
            {total === SCORE_TOTAL ? SCORE_TOTAL : total}
          </td>
          <td className="text-muted-foreground">六项维度满分合计</td>
        </tr>
      </tbody>
    </ResponsiveTable>
  );
}
