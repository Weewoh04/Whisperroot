import DevlogCard from "@/components/DevlogCard";
import SectionHeader from "@/components/SectionHeader";
import { devlogEntries } from "@/data/devlog";

export default function DevlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Devlog"
        title="Notes From The Hollow"
        description="A lightweight development journal for worldbuilding decisions, mechanic experiments, art direction, and crowdfunding updates."
      />
      <div className="space-y-5">
        {devlogEntries.map((entry) => (
          <DevlogCard key={entry.id} entry={entry} full />
        ))}
      </div>
    </section>
  );
}
