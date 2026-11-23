export interface FunnelStep {
  id: string;
  label: string;
}

export interface LeadStage {
  id: string;
  label: string;
  count: number;
  tone: "primary" | "accent" | "success" | "muted" | "destructive";
}

export interface LeadField {
  id: string;
  label: string;
}

/** 招商转化漏斗 — 顺序照 PDF 原文 */
export const funnelSteps: FunnelStep[] = [
  { id: "video", label: "短视频内容" },
  { id: "consult", label: "区域合作咨询/表单" },
  { id: "screen", label: "代理资质初筛" },
  { id: "review", label: "商务沟通与产品资料审核" },
  { id: "evaluate", label: "产品体验/客户需求评估" },
  { id: "trial", label: "试运营合作（可约定90天测试）" },
  { id: "client", label: "真实终端客户开发" },
  { id: "quote", label: "演示、报价、采购评估" },
  { id: "order", label: "终端订单、交付、回款" },
  { id: "retro", label: "绩效复盘与区域权益调整" },
];

/** 线索看板阶段与当前数量（文件中均为 0） */
export const leadStages: LeadStage[] = [
  { id: "new", label: "新线索", count: 0, tone: "primary" },
  { id: "screening", label: "资质初筛", count: 0, tone: "primary" },
  { id: "talk", label: "商务沟通", count: 0, tone: "accent" },
  { id: "trial", label: "试运营", count: 0, tone: "accent" },
  { id: "partner", label: "正式合作", count: 0, tone: "success" },
  { id: "paused", label: "暂缓", count: 0, tone: "muted" },
  { id: "rejected", label: "不通过", count: 0, tone: "destructive" },
];

/** 线索记录字段 */
export const leadFields: LeadField[] = [
  { id: "agent", label: "意向代理/机构" },
  { id: "city", label: "所在城市" },
  { id: "source", label: "来源内容" },
  { id: "stage", label: "意向阶段" },
  { id: "next", label: "下一步" },
];

export const leadSourceNote =
  "线索来自企业号短视频的留资入口；目前内容尚未开始发布。";

export const totalLeads = leadStages.reduce((sum, s) => sum + s.count, 0);
