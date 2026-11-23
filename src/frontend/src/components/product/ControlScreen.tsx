import { SectionCard, UnverifiedBadge } from "@/components/shared";
import { controlModes, controlReadings, manualSettings } from "@/data/product";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ControlScreen() {
  const [mode, setMode] = useState(controlModes[0]);

  return (
    <SectionCard
      eyebrow="交互"
      title={
        <span className="flex flex-wrap items-center gap-2">
          操作界面示例
          <UnverifiedBadge note="宣传册截图示例值" />
        </span>
      }
      description="宣传册截图示例值，待核实。模式按钮仅用于高亮，读数保持示例值。"
      index={3}
      ocid="product.control.section"
    >
      <div className="overflow-hidden rounded-xl bg-gradient-night p-4 text-sidebar-foreground md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sidebar-border pb-3">
          <h3 className="text-sm font-semibold tracking-wide text-sidebar-accent-foreground">
            SEELEEP生命补给舱 控制屏
          </h3>
          <span className="font-mono text-xs text-sidebar-foreground/70">
            当前模式 · {mode}
          </span>
        </div>

        <fieldset className="mt-4">
          <legend className="sr-only">运行模式</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {controlModes.map((m, i) => {
              const active = m === mode;
              return (
                <button
                  key={m}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setMode(m)}
                  data-ocid={`product.control.mode.toggle.${i + 1}`}
                  className={cn(
                    "min-h-11 rounded-lg border px-3 py-2 text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring active:scale-[0.98]",
                    active
                      ? "border-sidebar-primary bg-sidebar-primary text-sidebar-primary-foreground shadow-elevated"
                      : "border-sidebar-border bg-sidebar-accent/60 text-sidebar-foreground hover:border-sidebar-primary/60 hover:bg-sidebar-accent",
                  )}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-5 grid gap-5 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-2 text-xs font-semibold tracking-[0.14em] text-sidebar-foreground/70">
              实时读数
            </div>
            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {controlReadings.map((r, i) => (
                <div
                  key={r.label}
                  data-ocid={`product.control.reading.item.${i + 1}`}
                  className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3 transition-smooth hover:bg-sidebar-accent"
                >
                  <dt className="text-xs text-sidebar-foreground/70">
                    {r.label}
                  </dt>
                  <dd className="mt-1.5 flex items-baseline gap-1">
                    <span className="kpi-number text-xl font-semibold text-sidebar-accent-foreground">
                      {r.value}
                    </span>
                    <span className="text-xs text-sidebar-foreground/70">
                      {r.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold tracking-[0.14em] text-sidebar-foreground/70">
              手动设置
            </div>
            <dl className="grid grid-cols-3 gap-2 lg:grid-cols-1">
              {manualSettings.map((s, i) => (
                <div
                  key={s.label}
                  data-ocid={`product.control.setting.item.${i + 1}`}
                  className="flex flex-col gap-1 rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3 lg:flex-row lg:items-center lg:justify-between"
                >
                  <dt className="text-xs text-sidebar-foreground/70">
                    {s.label}
                  </dt>
                  <dd className="flex items-baseline gap-1">
                    <span className="kpi-number text-lg font-semibold text-sidebar-accent-foreground">
                      {s.value}
                    </span>
                    <span className="text-xs text-sidebar-foreground/70">
                      {s.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
