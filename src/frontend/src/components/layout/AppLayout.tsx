import { cn } from "@/lib/utils";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { NAV_ITEMS, findNavItem } from "./navItems";

function ProductChip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground",
        className,
      )}
      data-ocid="header.product_chip"
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-primary"
        aria-hidden="true"
      />
      <span>睡眠机器人 S</span>
      <span className="font-display tabular font-semibold">（¥398,000）</span>
    </div>
  );
}

function SidebarNav() {
  return (
    <nav aria-label="看板模块" className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            data-ocid={`nav.${item.ocid}.link`}
            activeOptions={{ exact: true }}
            className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-sidebar-foreground/80 transition-smooth hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
            activeProps={{
              className:
                "!bg-sidebar-primary !text-sidebar-primary-foreground font-medium shadow-elevated",
              "aria-current": "page",
            }}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function MobileTabs() {
  return (
    <nav
      aria-label="看板模块"
      className="flex gap-1.5 overflow-x-auto px-4 pb-3 [scrollbar-width:none]"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            data-ocid={`mobile_nav.${item.ocid}.tab`}
            activeOptions={{ exact: true }}
            className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-md px-3 text-sm text-sidebar-foreground/80 transition-smooth hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
            activeProps={{
              className:
                "!bg-sidebar-primary !text-sidebar-primary-foreground font-medium",
              "aria-current": "page",
            }}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = findNavItem(pathname);
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar bg-gradient-night lg:flex">
        <div className="px-5 pb-6 pt-7">
          <BrandMark />
          <div className="mt-5 rounded-md border border-sidebar-border bg-sidebar-accent/60 px-3 py-2.5">
            <div className="text-[11px] tracking-wider text-sidebar-foreground/60">
              招商产品
            </div>
            <div className="mt-0.5 text-sm font-medium text-sidebar-accent-foreground">
              睡眠机器人 S
            </div>
            <div className="font-display tabular text-sm text-sidebar-foreground">
              （¥398,000）
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3">
          <SidebarNav />
        </div>
        <div className="flex items-start gap-2 border-t border-sidebar-border px-5 py-4 text-[11px] leading-relaxed text-sidebar-foreground/60">
          <FileText
            className="mt-0.5 h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
          />
          <span>公开只读看板 · 数据源自两份 PDF 原文</span>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile brand bar + tabs */}
        <div className="sticky top-0 z-30 bg-sidebar bg-gradient-night lg:hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <BrandMark compact />
            <div className="text-right text-[11px] leading-tight text-sidebar-foreground/80">
              <div>睡眠机器人 S</div>
              <div className="font-display tabular">（¥398,000）</div>
            </div>
          </div>
          <MobileTabs />
        </div>

        {/* Desktop header */}
        <header className="sticky top-0 z-20 hidden items-center justify-between gap-4 border-b border-border bg-card px-8 py-4 shadow-subtle lg:flex">
          <div className="min-w-0">
            <div className="label-eyebrow">SEELEEP 招商数据看板</div>
            <div className="mt-1 truncate font-display text-lg font-semibold text-foreground">
              {current.label}
            </div>
          </div>
          <ProductChip />
        </header>

        <main
          className="flex-1 px-4 py-6 md:px-8 md:py-8"
          data-ocid="layout.main.section"
        >
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>

        <footer className="border-t border-border bg-muted/40 px-4 py-5 text-xs text-muted-foreground md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="flex flex-wrap items-center gap-1.5">
              数据照两份 PDF 原文展示，未确认内容标注
              <span className="badge-unverified">待核实</span>
            </p>
            <p>
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
                data-ocid="footer.caffeine.link"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
