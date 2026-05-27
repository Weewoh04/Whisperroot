import { ChevronDown } from "lucide-react";
import GlowDivider from "@/components/GlowDivider";
import RootCard from "@/components/RootCard";
import SectionHeader from "@/components/SectionHeader";

const fragments = [
  {
    title: "The Worldroot",
    text: "The Worldroot is the ancient living system beneath Whisperroot, binding forests, ruins, caverns, swamps, sky islands, and sleeping things into one memory-bearing organism."
  },
  {
    title: "The Great Whisper",
    text: "A massive pulse through the Worldroot awakens old systems, forgotten pathways, creatures, and origin abilities across the living world."
  },
  {
    title: "The Ancient Collapse",
    text: "Something wounded the world long before the player arrives. Ruins, crystal echoes, dead forests, and buried leviathans all point back to that fracture."
  },
  {
    title: "The Six Origins",
    text: "Rootborn, Fungalkin, Bloomfolk, Ancient Blood, Emberborn, and Rootwarden each inherit a different relationship to the world and its buried memory."
  },
  {
    title: "The Hollow Basin",
    text: "A sacred central hub built around the exposed Heartroot, where markets, factions, shrines, bridges, companions, and origin paths converge."
  },
  {
    title: "The Ancient Deep Below",
    text: "The deepest layer of Whisperroot: colossal roots, forgotten temples, sleeping beings, teal waterways, and the wounded core of the Worldroot."
  }
];

export default function LorePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="World Lore"
        title="Ancient Fragments"
        description="Recovered notes from the roots: incomplete, luminous, and not always safe to understand."
      />
      <GlowDivider />
      <div className="space-y-4">
        {fragments.map((fragment) => (
          <details key={fragment.title} className="group">
            <summary className="root-card flex cursor-pointer list-none items-center justify-between gap-4 p-5">
              <span className="relative font-serif text-2xl text-creamcap">{fragment.title}</span>
              <ChevronDown className="relative size-5 text-amberglow transition group-open:rotate-180" />
            </summary>
            <RootCard className="mt-2 p-5">
              <p className="relative text-base leading-8 text-creamcap/72">{fragment.text}</p>
            </RootCard>
          </details>
        ))}
      </div>
    </section>
  );
}
