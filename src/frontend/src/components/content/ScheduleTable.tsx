import { ResponsiveTable, UnverifiedBadge } from "@/components/shared";
import { videoSchedule } from "@/data/content";
import { PillarBadge } from "./PillarBadge";

export function ScheduleTable() {
  return (
    <ResponsiveTable
      minWidthClassName="min-w-[640px]"
      caption="视频排期"
      ocid="content.schedule.table"
    >
      <thead>
        <tr>
          <th className="w-12">#</th>
          <th className="w-24">支柱</th>
          <th>标题</th>
          <th className="w-32">目的</th>
        </tr>
      </thead>
      <tbody>
        {videoSchedule.map((row) => (
          <tr key={row.no} data-ocid={`content.schedule.row.${row.no}`}>
            <td className="tabular text-muted-foreground">{row.no}</td>
            <td>
              <PillarBadge pillar={row.pillar} />
            </td>
            <td className="text-foreground">{row.title}</td>
            <td>
              <span className="inline-flex flex-wrap items-center gap-1.5 text-foreground">
                {row.purpose}
                {row.unverified && <UnverifiedBadge note="草稿尚未确认" />}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </ResponsiveTable>
  );
}
