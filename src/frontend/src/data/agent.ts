export interface ScoreDimension {
  id: string;
  name: string;
  maxScore: number;
  basis: string;
  color: string;
}

export const SCORE_TOTAL = 100;
export const PASS_LINE = 75;

export const scoreTitle = "代理准入评分（满分100，门槛75分）";

export const scoreDimensions: ScoreDimension[] = [
  {
    id: "terminal",
    name: "终端客户资源",
    maxScore: 30,
    basis: "客户真实性、可触达性、决策链关系",
    color: "oklch(var(--chart-1))",
  },
  {
    id: "deal",
    name: "既往成交能力",
    maxScore: 25,
    basis: "高客单价产品/服务成交经验",
    color: "oklch(var(--chart-2))",
  },
  {
    id: "industry",
    name: "行业适配程度",
    maxScore: 15,
    basis: "对养老、康养、健康管理行业的理解",
    color: "oklch(var(--chart-3))",
  },
  {
    id: "local",
    name: "本地服务能力",
    maxScore: 15,
    basis: "演示、培训、交付协调能力",
    color: "oklch(var(--chart-4))",
  },
  {
    id: "finance",
    name: "资金及经营稳定性",
    maxScore: 10,
    basis: "合规经营与持续经营能力",
    color: "oklch(var(--chart-5))",
  },
  {
    id: "brand",
    name: "品牌与合规意识",
    maxScore: 5,
    basis: "是否遵守统一宣传和服务标准",
    color: "oklch(var(--muted-foreground))",
  },
];

export interface RoadmapPhase {
  id: string;
  period: string;
  goal: string;
  criterion: string;
  tasks: string[];
}

export const roadmapTitle = "90 天路线图";

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    period: "第1-15天",
    goal: "确定招商模型",
    criterion: "能清晰解释合作机制",
    tasks: [
      "确认代理画像与准入评分门槛",
      "确定合作结构（A/D优先测试）",
      "完成佣金与成本测算",
      "制定区域政策与独家授予原则",
      "明确交付、安装、培训、售后责任划分",
    ],
  },
  {
    id: "phase-2",
    period: "第16-30天",
    goal: "搭建内容与招商素材",
    criterion: "完成首批内容与承接",
    tasks: [
      "完成企业号定位与简介",
      "完成产品实拍素材",
      "制作首批招商短视频",
      "整理可公开的技术资料包",
      "上线咨询表单并接入CRM",
    ],
  },
  {
    id: "phase-3",
    period: "第31-60天",
    goal: "验证渠道需求",
    criterion: "出现合格代理与终端商机",
    tasks: [
      "按排期发布视频并复盘数据",
      "定向触达目标区域合作方",
      "开展商务会谈与资质初筛",
      "筛选2-3家试运营伙伴",
      "记录每家伙伴的终端商机进展",
    ],
  },
  {
    id: "phase-4",
    period: "第61-90天",
    goal: "验证终端销售",
    criterion: "能看到真实推进而非仅签约",
    tasks: [
      "协助代理拜访终端机构",
      "完成产品演示与采购评估支持",
      "走通报价、合同与交付流程演练",
      "复盘代理活跃度与商机质量",
      "形成是否复制到新区域的决策材料",
    ],
  },
];
