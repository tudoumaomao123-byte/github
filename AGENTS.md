# Project Guidance

## User Preferences

- 界面使用简体中文
- 网站以看板形式呈现两份文件的数据，可以在线公开查看
- 主色为品牌蓝
- 数据照 PDF 原文展示，未确认内容标注「待核实」

## Accepted Requirements

- 根据上传的两份文件做一个数据看板网站
- 网站可以在线查看

## Verified Commands

- **typecheck**: `pnpm typecheck`
- **fix**: `pnpm fix`
- **build**: `pnpm build`

## Learnings

- Dashboard data is static frontend data in src/frontend/src/data/*.ts copied verbatim from the two PDFs in .platform/attachments/; routes are / /leads /content /agent /product /compliance
- Shared components live in src/frontend/src/components/shared/index.ts (PageHeader, SectionCard, KpiCard, UnverifiedBadge, EmptyState, ResponsiveTable); KpiCard icon takes a LucideIcon component
- Biome rejects tabIndex on non-interactive elements like article or li; use hover styles only
- getApiDoc lives in src/backend/mixins/api-doc.mo and main.mo includes it after Expose
