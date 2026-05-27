import DevlogCard from "@/components/DevlogCard";
import SectionHeader from "@/components/SectionHeader";
import { devlogEntries } from "@/data/devlog";

export default function DevlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Devlogs"
        title="Expedition Notes"
        description="Development updates from the living archive: worldbuilding discoveries, biome experiments, creature philosophies, and the slow awakening of Whisperroot."
      />
      <div className="relative space-y-8">
        <div className="absolute bottom-8 left-4 top-2 hidden w-px bg-gradient-to-b from-transparent via-amberglow/55 to-transparent shadow-[0_0_18px_rgba(244,198,106,0.32)] sm:block" />
        {devlogEntries
          .slice()
          .reverse()
          .map((entry) => (
            <div key={entry.id} className="relative sm:pl-12">
              <span className="absolute left-2 top-7 hidden size-4 rounded-full border border-amberglow/50 bg-moss-950 shadow-[0_0_20px_rgba(244,198,106,0.45)] sm:block" />
              <DevlogCard entry={entry} full />
            </div>
          ))}
      </div>
    </section>
  );
}
