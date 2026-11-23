export interface TractionDimension {
  id: string;
  dimension: string;
  claim: string;
  design: string;
  credit: string;
}

export const tractionDimensions: TractionDimension[] = [
  {
    id: "force",
    dimension: "力牵引",
    claim: "气道通畅，呼吸更充分",
    design: "头部与背部支撑可随体重与睡姿变化调节",
    credit: "日本国立山口大学江钟伟教授",
  },
  {
    id: "bionic",
    dimension: "仿生牵引",
    claim: "卸掉身上各种受力",
    design:
      "一体联动多关节仿生机械架；376cm半径弧形压弹式支撑条、5cm厚蜂巢状透水缓冲垫、2cm厚软性立体外套，四重释压",
    credit: "—",
  },
  {
    id: "vibration",
    dimension: "振波牵引",
    claim: "减轻生理和心理的疲劳",
    design:
      "六频段振波垂直锤击；引用2007年国家体育总局体育科研所低频音波测试（第10分钟脑电呈α波）",
    credit: "中科院声学所匡正博士",
  },
  {
    id: "thermal",
    dimension: "温差牵引",
    claim: "让身体快速休眠",
    design: "全透气蜂巢结构；被窝温度监控，必要时触发7-14微米远红外波",
    credit: "中科院材料所刘宜伟教授",
  },
  {
    id: "pressure",
    dimension: "压强牵引",
    claim: "向血液增补8倍溶解氧",
    design:
      "近4立方米高强度密封空间，150kPa压强；溶解氧0.3→2.6 ml/100ml血液（1.5ATA纯氧）",
    credit: "新加坡南洋理工大学Mingke Yang博士",
  },
];

export interface PatentRecord {
  number: string;
  type: string;
  note: string;
  unverified: boolean;
}

export const patents: PatentRecord[] = [
  {
    number: "ZL202210332245.9",
    type: "国家发明专利",
    note: "仿生牵引相关",
    unverified: false,
  },
  {
    number: "ZL201910587136.X",
    type: "国家发明专利",
    note: "仿生/温差牵引相关",
    unverified: false,
  },
  {
    number: "ZL2015107322513",
    type: "国家发明专利",
    note: "号码疑似截断",
    unverified: true,
  },
  {
    number: "ZL2014102583955",
    type: "国家发明专利",
    note: "号码疑似截断",
    unverified: true,
  },
  {
    number: "软著登字第9695197号",
    type: "计算机软件著作权",
    note: "操作软件",
    unverified: false,
  },
];

export const useCaseScenarios = ["高端康养", "疗愈", "办公室休息"];

export interface UseCase {
  id: string;
  name: string;
  kind: string;
  note: string;
}

export const useCases: UseCase[] = [
  {
    id: "beijing",
    name: "北京旗舰店",
    kind: "旗舰店",
    note: "照片舱体印有SHENPIX，与SEELEEP关系待确认",
  },
  {
    id: "wenzhou",
    name: "浙江温州运营中心",
    kind: "运营中心",
    note: "总裁的高效休息方式",
  },
  {
    id: "chengdu",
    name: "成都亚洲中心",
    kind: "酒店场景",
    note: "五星级酒店的全国运营中心（成都分公司）",
  },
  {
    id: "taikang",
    name: "泰康之家—燕园",
    kind: "重要客户",
    note: "资料列为重要客户/应用客户",
  },
  {
    id: "zju",
    name: "浙大康复医院",
    kind: "合作",
    note: "资料列为重要合作",
  },
  {
    id: "greentown",
    name: "绿城康养地产（杭州陶然里）",
    kind: "应用合作",
    note: "资料列为应用合作",
  },
];

export const controlModes = ["轻松体验", "深度睡眠", "高效复能", "超级补能"];

export interface Reading {
  label: string;
  value: string;
  unit: string;
}

export const controlReadings: Reading[] = [
  { label: "效氧浓度", value: "22", unit: "%" },
  { label: "温度", value: "23", unit: "℃" },
  { label: "湿度", value: "31", unit: "%" },
  { label: "舱内压力", value: "150", unit: "kPa" },
  { label: "制氧浓度", value: "96", unit: "%" },
  { label: "氧流量", value: "3.8", unit: "L/min" },
  { label: "倒计时", value: "60", unit: "min" },
];

export const manualSettings: Reading[] = [
  { label: "压力", value: "150", unit: "kPa" },
  { label: "时间", value: "60", unit: "min" },
  { label: "空调", value: "26", unit: "℃" },
];
