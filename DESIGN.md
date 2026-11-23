# Design Brief

## Direction

深夜蓝控制台 (Midnight Console) — 以 SEELEEP 品牌蓝为骨架的公开只读招商数据看板，冷静、精确、高端健康科技感。

## Tone

Refined minimal data UI: 深海军蓝侧栏 + 浅冷灰蓝画布 + 白卡片，蓝色传达「平静与安宁」，克制装饰，信息密度优先。

## Differentiation

深色品牌侧栏（白色 SEELEEP 字标 + 细月牙图形）对比明亮数据区；全站统一琥珀色「待核实」徽章标注未确认数据。

## Color Palette

| Token      | OKLCH            | Role                                   |
| ---------- | ---------------- | -------------------------------------- |
| background | 0.975 0.006 255  | 冷灰蓝画布                             |
| foreground | 0.2 0.04 262     | 深海军蓝正文                           |
| card       | 1.0 0 0          | 白色数据卡片                           |
| primary    | 0.46 0.17 260    | 品牌蓝：激活态、主按钮、进度条         |
| accent     | 0.68 0.11 205    | 青蓝：次要高亮、漏斗末段               |
| muted      | 0.955 0.01 255   | 表头、斑马行、空状态底色               |
| sidebar    | 0.27 0.1 263     | 深夜蓝侧栏（品牌册蓝底白字）           |
| warning    | 0.8 0.15 75      | 「待核实」徽章 / 待决事项              |
| success    | 0.56 0.12 165    | 已完成决策、合规通过                   |
| chart-1..5 | 蓝 262→252→225→青190→琥珀75 | 单色蓝阶为主，琥珀仅作高分/强调 |

## Typography

- Display: Space Grotesk — KPI 数字、标题中的拉丁字母与数字（`.kpi-number` 等宽数字）
- Body: Figtree — UI 拉丁文本；中文统一回退 PingFang SC / Noto Sans SC / Microsoft YaHei
- Mono: JetBrains Mono — 操作界面示例读数、代码式数值
- Scale: page h1 `text-2xl md:text-3xl font-semibold`, card h2 `text-base font-semibold`, label `.label-eyebrow`, KPI `kpi-number text-3xl md:text-4xl font-semibold`, body `text-sm`

## Elevation & Depth

两层：画布 → 白卡片（`border` + `shadow-subtle`）；悬停/弹层使用 `shadow-elevated`，阴影带蓝色调，不用发光。

## Structural Zones

| Zone    | Background                  | Border           | Notes                                       |
| ------- | --------------------------- | ---------------- | ------------------------------------------- |
| Sidebar | `bg-sidebar` (深夜蓝)       | `border-sidebar-border` | 白字标 + 6 个模块导航，激活项 `bg-sidebar-primary` 圆角胶囊；移动端变抽屉/顶部横向标签 |
| Header  | `bg-card`                   | `border-b`       | 模块标题 + 「睡眠机器人 S ¥398,000」价格芯片 |
| Content | `bg-background`             | —                | 卡片网格；分区标题用 `.label-eyebrow`        |
| Footer  | `bg-muted/40`               | `border-t`       | 数据来源说明：两份 PDF 原文，未确认标注待核实 |

## Spacing & Rhythm

卡片内边距 20–24px，卡片间距 16–20px，分区间距 32px；KPI 行桌面 4 列（8 项两行），平板 2 列，手机 1–2 列。

## Component Patterns

- Buttons/Tabs: 6px 圆角，主色实心或 `bg-secondary` 浅底，hover 加深 0.04 L
- Cards: `.card-dash`（12px 圆角、白底、细边、subtle 阴影）；合作模式 A–D 卡用大号字母徽标
- Badges: `.badge-unverified`（琥珀描边 + 圆点 + 「待核实」）；状态徽章 6px 圆角，success/warning/secondary
- Tables: 无竖线，`bg-muted` 表头，行分隔线，数字列右对齐 `tabular`
- Empty state: 线索阶段数量 0 时，虚线边框 + 月牙图标 + 友好提示文字
- Charts: Recharts 颜色用 `oklch(var(--chart-n))`，漏斗/柱状/环形/权重条统一蓝阶

## Motion

- Entrance: 卡片 `animate-fade-up`，按 60ms 逐个错开
- Hover: `transition-smooth`，卡片 hover 换 `shadow-elevated`
- Decorative: 权重/评分条 `animate-bar-grow`（origin-left）；无循环动画

## Constraints

- 只用语义 token，不写原始色值；图表用 `oklch(var(--chart-n))`
- 所有数据照 PDF 原文，不编造；未确认项必须使用 `.badge-unverified`
- 浅色模式为主；不设登录、不设编辑入口

## Signature Detail

深夜蓝侧栏上的白色 SEELEEP 字标配细月牙线条，呼应睡眠品牌的「平静安宁」——品牌化导航细节。
