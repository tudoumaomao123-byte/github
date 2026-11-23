import { firstScript } from "@/data/content";
import { Clapperboard, Image, Mic } from "lucide-react";

export function ScriptTimeline() {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-md border border-border bg-muted/40 p-3">
          <div className="label-eyebrow mb-1">格式</div>
          <p className="text-sm text-foreground">{firstScript.format}</p>
        </div>
        <div className="rounded-md border border-border bg-muted/40 p-3">
          <div className="label-eyebrow mb-1">封面文案</div>
          <p className="text-sm font-medium text-foreground">
            {firstScript.cover}
          </p>
        </div>
      </div>
      <ol className="relative space-y-4 border-l-2 border-border pl-5 md:pl-6">
        {firstScript.segments.map((s, i) => (
          <li
            key={s.id}
            className="relative rounded-lg border border-border bg-background/60 p-4 transition-smooth hover:shadow-elevated"
            data-ocid={`content.script.item.${i + 1}`}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-5 h-3 w-3 rounded-full border-2 border-card bg-primary md:-left-[33px]"
            />
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="tabular inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                <Clapperboard className="h-3.5 w-3.5" aria-hidden="true" />
                {s.time}
              </span>
              <span className="font-semibold text-foreground">{s.stage}</span>
            </div>
            <dl className="grid gap-3 text-sm md:grid-cols-2">
              <div className="min-w-0">
                <dt className="mb-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                  口播
                </dt>
                <dd className="break-words leading-relaxed text-foreground">
                  {s.voice}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="mb-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Image className="h-3.5 w-3.5" aria-hidden="true" />
                  画面字幕
                </dt>
                <dd className="break-words leading-relaxed text-muted-foreground">
                  {s.visual}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
