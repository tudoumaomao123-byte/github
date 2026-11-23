export interface HeadlineStat {
  id: string;
  label: string;
  value: string;
  unit?: string;
  hint?: string;
}

export interface CoreKpi {
  id: string;
  name: string;
  meaning: string;
  value: number;
}

export type PartnerTier =
  | "第一梯队"
  | "重点测试"
  | "项目型合作"
  | "需先核实产品准入"
  | "测试"
  | "谨慎"
  | "不作为核心节点";

export interface PartnerRow {
  id: string;
  type: string;
  resources: string;
  tier: PartnerTier;
}

export interface CooperationModel {
  id: string;
  code: string;
  name: string;
  structure: string;
  pros: string;
  risks: string;
  priority: boolean;
}

export const overviewSummary = {
  product: "睡眠机器人 S",
  price: "约 ¥398,000",
  goal: "招募区域代理",
  channel: "1 个企业号，不做创始人IP",
  text: "以短视频为获客主渠道，通过 1 个企业号（不做创始人IP）为睡眠机器人 S（约 ¥398,000）招募区域代理，建立全国区域渠道网络。",
};

export const headlineStats: HeadlineStat[] = [
  { id: "price", label: "产品定价（约）", value: "¥398,000", hint: "高端定位" },
  {
    id: "leads",
    label: "当前招商线索",
    value: "0",
    unit: "条",
    hint: "尚未启动投放",
  },
  {
    id: "videos",
    label: "视频排期",
    value: "12",
    unit: "条",
    hint: "企业号短视频",
  },
  {
    id: "roadmap",
    label: "路线图",
    value: "90",
    unit: "天",
    hint: "启动执行周期",
  },
  {
    id: "compliance",
    label: "合规底线",
    value: "8",
    unit: "条",
    hint: "内容与招商红线",
  },
  {
    id: "questions",
    label: "待确认关键问题",
    value: "10",
    unit: "个",
    hint: "需决策方确认",
  },
];

export const coreKpis: CoreKpi[] = [
  {
    id: "qualified-applications",
    name: "合格代理申请数",
    meaning: "具备真实行业资源与能力的有效申请",
    value: 0,
  },
  {
    id: "business-meetings",
    name: "代理商务会议数",
    meaning: "与合格渠道商的有效会谈",
    value: 0,
  },
  {
    id: "trial-agents",
    name: "试运营代理数",
    meaning: "已进入正式测试合作的伙伴",
    value: 0,
  },
  {
    id: "activation-rate",
    name: "代理激活率",
    meaning: "约定周期内产生合格终端商机的代理占比",
    value: 0,
  },
  {
    id: "opportunities-per-agent",
    name: "单代理合格商机数",
    meaning: "每个代理贡献的有效终端机会",
    value: 0,
  },
  {
    id: "first-order-cycle",
    name: "代理首单周期",
    meaning: "从合作开始到首笔真实终端订单的时间",
    value: 0,
  },
  {
    id: "channel-collection",
    name: "渠道回款额",
    meaning: "通过渠道带来的实际回款",
    value: 0,
  },
  {
    id: "channel-profit",
    name: "渠道贡献利润",
    meaning: "扣除可归属渠道成本后的贡献",
    value: 0,
  },
];

export const partnerTiers: PartnerRow[] = [
  {
    id: "eldercare-operator",
    type: "高端养老产业运营商",
    resources: "养老机构、康养社区、机构管理层",
    tier: "第一梯队",
  },
  {
    id: "equipment-integrator",
    type: "康养设备集成商",
    resources: "机构采购渠道、设备销售经验",
    tier: "第一梯队",
  },
  {
    id: "health-management",
    type: "高端健康管理机构",
    resources: "高净值会员、体验场景",
    tier: "重点测试",
  },
  {
    id: "eldercare-realestate",
    type: "养老地产及康养项目服务商",
    resources: "项目关系、机构客户",
    tier: "项目型合作",
  },
  {
    id: "medical-distributor",
    type: "高端医疗器械经销商",
    resources: "专业销售及机构网络",
    tier: "需先核实产品准入",
  },
  {
    id: "hnw-service",
    type: "高净值客户服务机构",
    resources: "私人客户和会员信任关系",
    tier: "测试",
  },
  {
    id: "c-end-franchise",
    type: "C端渠道 普通招商加盟商",
    resources: "招商及招募网络",
    tier: "谨慎",
  },
  {
    id: "traffic-agent",
    type: "纯流量型个人代理",
    resources: "粉丝、社群",
    tier: "不作为核心节点",
  },
];

export const cooperationModels: CooperationModel[] = [
  {
    id: "a",
    code: "A",
    name: "资源推荐型",
    structure: "总部签约收款，代理推荐客户获佣金",
    pros: "总部控制合同、价格、交付",
    risks: "代理激励需合理",
    priority: true,
  },
  {
    id: "b",
    code: "B",
    name: "经销型",
    structure: "代理按渠道价采购后转售",
    pros: "合作方积极性可能更强",
    risks: "库存、价格和售后责任复杂",
    priority: false,
  },
  {
    id: "c",
    code: "C",
    name: "区域运营中心",
    structure: "区域合作方承担展示、销售及部分服务",
    pros: "本地运营深度高",
    risks: "授权及绩效要求高",
    priority: false,
  },
  {
    id: "d",
    code: "D",
    name: "混合型",
    structure: "先资源合作，达标后升级经销或区域运营",
    pros: "可逐步验证合作能力",
    risks: "需清晰的升级标准",
    priority: true,
  },
];

export const confirmedDecisions: string[] = [
  "产品定价约39.8万元，走高端定位",
  "主攻区域渠道/代理招商，不直营零售先行",
  "获客主渠道为短视频",
  "只做一个企业号，不做创始人IP",
];
