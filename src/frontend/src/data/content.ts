export type Pillar = "招商" | "产品" | "科普";

export const pillarColors: Record<Pillar, string> = {
  招商: "oklch(var(--chart-1))",
  产品: "oklch(var(--chart-3))",
  科普: "oklch(var(--chart-5))",
};

export const angleScoreTitle = "选题角度评分（满分100）";
export const scoringDimensions = [
  "受众精准度",
  "钩子强度",
  "信任建立",
  "转化潜力",
  "可执行性",
];

export interface AngleScore {
  id: string;
  angle: string;
  score: number;
}

export const angleScores: AngleScore[] = [
  { id: "a1", angle: "养老机构资源如何商业化", score: 90 },
  { id: "a2", angle: "为什么有客户资源也卖不出高端设备", score: 89 },
  { id: "a3", angle: "40万元设备究竟卖给谁", score: 85 },
  { id: "a4", angle: "为什么我们不急着招100个代理", score: 85 },
  { id: "a5", angle: "养老机构为什么愿意采购高端设备", score: 84 },
  { id: "a6", angle: "区域代理到底需要总部提供什么", score: 84 },
  { id: "a7", angle: "一台40万元设备的商业价值怎么算", score: 82 },
  { id: "a8", angle: "银发经济背后的高端康养机会", score: 69 },
];

export interface TopicItem {
  id: string;
  title: string;
  score?: number;
}

export interface TopicLine {
  id: string;
  line: string;
  pillar: Pillar;
  topics: TopicItem[];
}

export const topicLines: TopicLine[] = [
  {
    id: "product",
    line: "产品线",
    pillar: "产品",
    topics: [
      {
        id: "p1",
        title: "代理商第一次介绍这台设备，应该讲哪三个重点？",
        score: 94,
      },
      {
        id: "p2",
        title: "一台40万元的睡眠机器人，到底有什么不同？",
        score: 92,
      },
      { id: "p3", title: "为什么我们不把它叫作普通按摩床？", score: 90 },
    ],
  },
  {
    id: "invest",
    line: "招商线",
    pillar: "招商",
    topics: [
      { id: "i1", title: "一个区域代理商，第一单应该从哪里开始？", score: 96 },
      {
        id: "i2",
        title: "如果你手里有十几家养老机构客户，还能做什么新业务？",
        score: 95,
      },
      {
        id: "i3",
        title: "代理商最担心的库存、售后和客户开发问题，怎么解决？",
        score: 95,
      },
    ],
  },
  {
    id: "science",
    line: "科普线",
    pillar: "科普",
    topics: [
      { id: "s1", title: "为什么老年人的睡眠结构会发生变化？" },
      { id: "s2", title: "养老机构如何了解入住长者的睡眠需求？" },
      { id: "s3", title: "睡眠质量和睡眠时长是一回事吗？" },
      { id: "s4", title: "为什么有些人睡了8小时仍觉得疲惫？" },
      { id: "s5", title: "康养机构提供睡眠相关服务，需要注意什么？" },
      { id: "s6", title: "哪些睡眠问题需要专业医疗评估？" },
    ],
  },
];

export interface ScheduleRow {
  no: number;
  pillar: Pillar;
  title: string;
  purpose: string;
  unverified?: boolean;
}

export const videoSchedule: ScheduleRow[] = [
  {
    no: 1,
    pillar: "招商",
    title: "如果你手里有十几家养老机构客户，还能做什么新业务？",
    purpose: "精准吸引",
  },
  {
    no: 2,
    pillar: "产品",
    title: "一台40万元的睡眠机器人，到底有什么不同？",
    purpose: "产品认知",
  },
  {
    no: 3,
    pillar: "科普",
    title: "为什么老年人的睡眠结构会发生变化？",
    purpose: "专业认知",
  },
  {
    no: 4,
    pillar: "招商",
    title: "为什么我们不急着招100个代理商？",
    purpose: "渠道信任",
  },
  {
    no: 5,
    pillar: "产品",
    title: "为什么我们不把它叫作普通按摩床？",
    purpose: "产品差异",
  },
  {
    no: 6,
    pillar: "招商",
    title: "40万元的设备，区域代理怎么开展业务？",
    purpose: "商业模式",
  },
  {
    no: 7,
    pillar: "科普",
    title: "养老机构如何了解入住长者的睡眠需求？",
    purpose: "机构场景",
  },
  {
    no: 8,
    pillar: "产品",
    title: "代理商第一次介绍产品，应该讲什么？",
    purpose: "销售赋能",
    unverified: true,
  },
  {
    no: 9,
    pillar: "招商",
    title: "一个区域代理商，第一单从哪里开始？",
    purpose: "商务转化",
  },
  {
    no: 10,
    pillar: "科普",
    title: "睡眠质量和睡眠时长有什么区别？",
    purpose: "专业信任",
  },
  {
    no: 11,
    pillar: "产品",
    title: "高端康养设备，为什么需要现场体验？",
    purpose: "采购信任",
  },
  {
    no: 12,
    pillar: "招商",
    title: "什么样的企业适合成为小月智能区域合作伙伴？",
    purpose: "代理筛选",
  },
];

export const pillarOrder: Pillar[] = ["招商", "产品", "科普"];

export const typeDistribution = pillarOrder.map((p) => ({
  pillar: p,
  count: videoSchedule.filter((r) => r.pillar === p).length,
  color: pillarColors[p],
}));

export const firstScript = {
  title: "手里有养老机构客户，还能拓展什么新业务？",
  format: "9:16 竖屏 · 目标55-65秒 · 企业版（不做创始人IP）",
  cover:
    "手里有养老机构客户，还能做什么生意？—40万元睡眠机器人｜区域合作新思路",
  segments: [
    {
      id: "seg1",
      time: "0-7秒",
      stage: "精准切入",
      voice:
        "如果你手里有十几家养老机构客户，你有没有想过，还能给他们提供什么新产品？",
      visual:
        "真实商务沟通/产品与机构场景示意；字幕：手里有十几家养老机构客户？",
    },
    {
      id: "seg2",
      time: "7-17秒",
      stage: "客户资源价值",
      voice:
        "对于已经深耕养老、康养行业的企业来说，开发新客户并不容易。但在现有客户基础上，拓展新的产品和服务，也是一种值得研究的增长方式。",
      visual:
        "机构服务、资料沟通、客户接待；字幕：现有客户，还有新业务空间吗？",
    },
    {
      id: "seg3",
      time: "17-33秒",
      stage: "产品出现",
      voice:
        "这是小月智能推出的高端睡眠机器人。产品整合了身体支撑、温度调节、振动等设计模块，面向有相应需求和使用条件的高端康养场景。",
      visual: "设备全景、内部结构、操作界面；字幕：小月智能高端睡眠机器人",
    },
    {
      id: "seg4",
      time: "33-47秒",
      stage: "渠道合作逻辑",
      voice:
        "一台接近40万元的设备，需要的不只是产品介绍，更需要了解客户需求、采购流程和本地服务。因此，我们正在探索与区域康养企业建立合作。",
      visual:
        "设备与机构场景交替、商务流程示意；字幕：高客单价，更需要懂客户的人",
    },
    {
      id: "seg5",
      time: "47-60秒",
      stage: "招商转化",
      voice:
        "总部提供产品与技术支持，区域合作伙伴发挥本地客户资源与市场服务优势。如果你正在服务养老机构、康养中心或高端健康管理客户，欢迎与小月智能交流区域合作机会。",
      visual: "设备、企业品牌、合作信息；字幕：开放区域康养合作交流",
    },
  ],
};
