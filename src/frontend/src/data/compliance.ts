export interface ComplianceRule {
  id: string;
  area: string;
  rule: string;
}

export interface OpenQuestion {
  id: string;
  question: string;
  status: "待确认";
}

export interface PendingItem {
  id: string;
  text: string;
}

export const complianceRules: ComplianceRule[] = [
  {
    id: "medical",
    area: "医疗/健康效果",
    rule: "未经充分证据及必要的监管审查，不宣称治疗失眠、治疗疾病、保证改善或特定临床效果。",
  },
  {
    id: "tech",
    area: "技术参数",
    rule: "压力、氧气、远红外等指标需有准确的产品资料、检测依据和适用条件。",
  },
  {
    id: "cases",
    area: "客户案例",
    rule: "必须核实真实合作关系、产品交付情况及对外使用授权；不得擅自借机构名称或标志背书。",
  },
  {
    id: "returns",
    area: "招商收益",
    rule: "不得承诺固定利润、保证回本、夸大订单或虚构代理商收益。",
  },
  {
    id: "channel",
    area: "渠道制度",
    rule: "区域独家、佣金、合同、收款、售后、价格管理和终端客户归属应有明确规则。",
  },
  {
    id: "marketing",
    area: "营销素材",
    rule: "机构示意画面不得伪装成已成交或已落地客户。",
  },
  {
    id: "science",
    area: "科普边界",
    rule: "科学睡眠知识与产品功效证明是两类不同证据，不能混用。",
  },
  {
    id: "model",
    area: "业务模式",
    rule: "避免以发展下级代理或收取加盟费作为主要收益来源。",
  },
];

const questionTexts = [
  "区域代理最终采用推荐佣金、经销、区域运营中心，还是混合模式？",
  "当前真实订单主要来自创始人关系、机构直销、代理推荐，还是其他来源？",
  "产品实际成本、渠道利润空间、交付及保修成本是多少？",
  "哪些产品参数、技术证明、检测报告和客户案例可以合法公开？",
  "是否已有可供拍摄的真实产品、展厅、安装和使用素材？",
  "总部能为区域代理提供哪些已经落实的培训、演示、售后与营销支持？",
  "谁承担招商线索筛选、商务会议、客户演示和CRM录入？",
  "第一批计划测试哪些区域，选择标准是什么？",
  "账号是否明确完全无人出镜，还是允许产品经理、技术人员、商务负责人出镜？",
  "是否已经建立合规的招商咨询入口与企业资料页？",
];

export const openQuestions: OpenQuestion[] = questionTexts.map(
  (question, i) => ({ id: `q${i + 1}`, question, status: "待确认" }),
);

export const pendingItems: PendingItem[] = [
  {
    id: "policy",
    text: "首批重点招商城市名单；代理合作门槛与政策细则；企业号内容发布节奏与分工；留资入口与线索分配方式",
  },
  {
    id: "institutions",
    text: "产品资料第21页四家机构（中国人寿、国家行政学院、中国工商银行、光大养老）是否为真实应用客户、能否公开使用名称与Logo",
  },
  {
    id: "brand",
    text: "北京旗舰店照片里的SHENPIX与SEELEEP是什么关系",
  },
  {
    id: "ui-modes",
    text: "操作界面四种模式名称与截图数值是否为当前版本，「SEELEEP生命补给舱」能否公开使用",
  },
];
