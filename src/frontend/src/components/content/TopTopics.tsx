import { topicLines } from "@/data/content";
import { PillarBadge } from "./PillarBadge";

export function TopTopics() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {topicLines.map((line) => (
        <article
          key={line.id}
          className="rounded-lg border border-border bg-background/60 p-4 transition-smooth hover:-translate-y-0.5 hover:shadow-elevated"
          data-ocid={`content.topics.${line.id}.card`}
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <h3 className="font-semibold text-foreground">{line.line}</h3>
            <PillarBadge pillar={line.pillar} />
          </div>
          <ul className="space-y-2">
            {line.topics.map((t, i) => (
              <li
                key={t.id}
                className="flex items-start justify-between gap-3 rounded-md px-2 py-1.5 text-sm transition-smooth hover:bg-muted/60"
                data-ocid={`content.topics.${line.id}.item.${i + 1}`}
              >
                <span className="min-w-0 break-words text-foreground">
                  {t.title}
                </span>
                {t.score !== undefined && (
                  <span className="tabular shrink-0 rounded bg-primary/10 px-1.5 py-0.5 text-xs font-semibold text-primary">
                    {t.score}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
