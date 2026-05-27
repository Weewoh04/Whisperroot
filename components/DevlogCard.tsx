import { CalendarDays } from "lucide-react";
import type { DevlogEntry } from "@/data/devlog";

export default function DevlogCard({ entry }: { entry: DevlogEntry }) {
  return (
    <article className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-5 transition hover:border-amberglow/35">
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
      <h2 className="text-xl font-semibold text-creamcap">{entry.title}</h2>
      <p className="mt-3 text-sm leading-6 text-creamcap/66">{entry.excerpt}</p>
    </article>
  );
}
