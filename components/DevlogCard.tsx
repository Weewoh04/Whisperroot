import { CalendarDays } from "lucide-react";
import type { DevlogEntry } from "@/data/devlog";

export default function DevlogCard({ entry, full = false }: { entry: DevlogEntry; full?: boolean }) {
  return (
    <article id={entry.id} className="root-card scroll-mt-28 p-5 sm:p-6">
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
      <h2 className="relative font-serif text-xl font-semibold text-creamcap sm:text-2xl">{entry.title}</h2>
      <p className="mt-3 text-sm leading-6 text-creamcap/66">{entry.excerpt}</p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {entry.progressTags.map((tag) => (
          <span key={tag} className="rounded-full border border-amberglow/20 bg-amberglow/8 px-3 py-1 text-xs text-amberglow/82">
            {tag}
          </span>
        ))}
      </div>
      {!full ? (
        <a href={`/devlog#${entry.id}`} className="ancient-button ancient-button--ghost mt-5 text-xs">
          Read Entry
        </a>
      ) : null}
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
