import {
  Bot,
  ClipboardCheck,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavPath =
  | "/"
  | "/leads"
  | "/content"
  | "/agent"
  | "/product"
  | "/compliance";

export interface NavItem {
  path: NavPath;
  label: string;
  short: string;
  icon: LucideIcon;
  ocid: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    path: "/",
    label: "招商总览",
    short: "总览",
    icon: LayoutDashboard,
    ocid: "overview",
  },
  {
    path: "/leads",
    label: "获客与线索",
    short: "线索",
    icon: Users,
    ocid: "leads",
  },
  {
    path: "/content",
    label: "内容运营",
    short: "内容",
    icon: Megaphone,
    ocid: "content",
  },
  {
    path: "/agent",
    label: "代理商准入评估",
    short: "代理商",
    icon: ClipboardCheck,
    ocid: "agent",
  },
  {
    path: "/product",
    label: "产品与技术",
    short: "产品",
    icon: Bot,
    ocid: "product",
  },
  {
    path: "/compliance",
    label: "合规与待决事项",
    short: "合规",
    icon: ShieldCheck,
    ocid: "compliance",
  },
];

export function findNavItem(pathname: string): NavItem {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return NAV_ITEMS.find((item) => item.path === clean) ?? NAV_ITEMS[0];
}
