import {
  ResponsiveTable,
  SectionCard,
  UnverifiedBadge,
} from "@/components/shared";
import { patents } from "@/data/product";

export function PatentsTable() {
  return (
    <SectionCard
      eyebrow="知识产权"
      title="专利与著作权"
      description={`资料列示 ${patents.length} 项，号码照原文展示。`}
      index={1}
      ocid="product.patents.section"
    >
      <ResponsiveTable
        minWidthClassName="min-w-[560px]"
        caption="专利与著作权列表"
        ocid="product.patents.table"
      >
        <thead>
          <tr>
            <th scope="col">号码</th>
            <th scope="col">类型</th>
            <th scope="col">备注</th>
          </tr>
        </thead>
        <tbody>
          {patents.map((p, i) => (
            <tr key={p.number} data-ocid={`product.patents.row.${i + 1}`}>
              <td className="font-mono text-[13px] font-medium text-foreground">
                {p.number}
              </td>
              <td className="text-foreground">{p.type}</td>
              <td className="text-muted-foreground">
                <span className="flex flex-wrap items-center gap-2">
                  {p.note}
                  {p.unverified && (
                    <UnverifiedBadge note="专利号位数异常，疑似截断" />
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </ResponsiveTable>
    </SectionCard>
  );
}
