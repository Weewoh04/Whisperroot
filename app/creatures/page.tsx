import BestiaryExplorer from "@/components/BestiaryExplorer";
import SectionHeader from "@/components/SectionHeader";
import { creatureFilterOptions, creatures } from "@/data/creatures";

export default function CreaturesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Bestiary"
        title="Creature Trust Archive"
        description="Filter by home region, creature type, rarity, and temperament. Each entry is built from local data so the bestiary can grow alongside the game design."
      />
      <BestiaryExplorer creatures={creatures} options={creatureFilterOptions} />
    </section>
  );
}
