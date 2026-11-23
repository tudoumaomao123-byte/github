import type { OpenQuestion } from "@/data/compliance";
import { CircleDashed } from "lucide-react";

interface QuestionChecklistProps {
  questions: OpenQuestion[];
}

export function QuestionChecklist({ questions }: QuestionChecklistProps) {
  return (
    <ol
      className="divide-y divide-border overflow-hidden rounded-lg border border-border"
      data-ocid="compliance.questions.list"
    >
      {questions.map((q, i) => (
        <li
          key={q.id}
          className="flex flex-col gap-2 bg-card px-4 py-3.5 transition-smooth hover:bg-muted/60 focus-visible:relative focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:flex-row sm:items-center sm:gap-4"
          data-ocid={`compliance.question.item.${i + 1}`}
        >
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <CircleDashed
              className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="w-6 shrink-0 font-mono text-sm font-semibold tabular text-primary">
              {i + 1}.
            </span>
            <p className="min-w-0 break-words text-sm leading-relaxed text-foreground">
              {q.question}
            </p>
          </div>
          <span
            className="ml-[3.25rem] inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary sm:ml-0"
            data-ocid={`compliance.question.status.${i + 1}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {q.status}
          </span>
        </li>
      ))}
    </ol>
  );
}
