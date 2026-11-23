import { ControlScreen } from "@/components/product/ControlScreen";
import { PatentsTable } from "@/components/product/PatentsTable";
import { TractionCards } from "@/components/product/TractionCards";
import { UseCaseCards } from "@/components/product/UseCaseCards";
import { PageHeader } from "@/components/shared";

export default function ProductPage() {
  return (
    <div data-ocid="product.page" className="flex flex-col gap-6">
      <PageHeader
        eyebrow="产品与技术"
        title="产品与技术"
        subtitle="五维牵引技术、知识产权、应用场景与操作界面，数据照 PDF 原文展示。"
      />
      <TractionCards />
      <PatentsTable />
      <UseCaseCards />
      <ControlScreen />
    </div>
  );
}
