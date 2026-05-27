import AncientButton from "@/components/AncientButton";
import RootCard from "@/components/RootCard";
import SectionHeader from "@/components/SectionHeader";
import { BookOpen, Compass, ScrollText } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About Whisperroot"
        title="A cozy fantasy world with mystery under the moss."
        description="Whisperroot is an open-world cozy fantasy game concept about origin paths, creature ecosystems, ancient roots, environmental memory, and restoring a world that still remembers its wound."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Wonder First", "The game leads with beauty, curiosity, traversal, and discovery before danger presses in."],
          ["Living Ecosystems", "Creatures are designed as parts of environments, not just combat targets."],
          ["Development Archive", "This website is the world bible, bestiary, devlog, lore archive, and future support hub."]
        ].map(([title, text]) => (
          <RootCard key={title} className="p-6">
            <h2 className="relative font-serif text-2xl text-creamcap">{title}</h2>
            <p className="relative mt-3 text-sm leading-7 text-creamcap/68">{text}</p>
          </RootCard>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <AncientButton href="/origins" icon={Compass}>
          Choose Your Origin
        </AncientButton>
        <AncientButton href="/creatures" icon={BookOpen} variant="ghost">
          Explore the Bestiary
        </AncientButton>
        <AncientButton href="/devlog" icon={ScrollText} variant="ghost">
          Read Devlogs
        </AncientButton>
      </div>
    </section>
  );
}
