import { CalendarDays } from "lucide-react";
import type { DevlogEntry } from "@/data/devlog";

export default function DevlogCard({ entry, full = false }: { entry: DevlogEntry; full?: boolean }) {
  return (
    <article className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-5 transition hover:border-amberglow/35 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-amberglow/80">
        <span className="flex items-center gap-2">
          <CalendarDays className="size-4" aria-hidden="true" />
          {new Date(`${entry.date}T00:00:00`).toLocaleDateString("en", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}
        </span>
        <span>{entry.category}</span>
      </div>
      <h2 className="text-xl font-semibold text-creamcap sm:text-2xl">{entry.title}</h2>
      <p className="mt-3 text-sm leading-6 text-creamcap/66">{entry.excerpt}</p>
      {full ? (
        <div className="mt-6 space-y-5 border-t border-creamcap/10 pt-6 text-sm leading-7 text-creamcap/72 sm:text-base">
          {entry.body.map((block, index) => {
            if (block.type === "list") {
              return (
                <ul key={`${entry.id}-block-${index}`} className="grid gap-2 sm:grid-cols-2">
                  {block.items?.map((item) => (
                    <li key={item} className="rounded-2xl border border-creamcap/10 bg-creamcap/5 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return <p key={`${entry.id}-block-${index}`}>{block.content}</p>;
          })}
        </div>
      ) : null}
    </article>
  );
}
