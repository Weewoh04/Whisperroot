import { BookOpen, Compass, Feather, Map, ScrollText, Sparkles } from "lucide-react";
import AncientButton from "@/components/AncientButton";
import DevlogCard from "@/components/DevlogCard";
import EnvironmentCard from "@/components/EnvironmentCard";
import GlowDivider from "@/components/GlowDivider";
import PlaceholderImage from "@/components/PlaceholderImage";
import RootCard from "@/components/RootCard";
import SectionHeader from "@/components/SectionHeader";
import { bestiaryCreatures } from "@/data/bestiaryData";
import { devlogEntries } from "@/data/devlog";
import { environments } from "@/data/environments";

const pillars = [
  {
    title: "The World Remembers",
    text: "Whisperroot is shaped by living roots, buried ruins, memory echoes, and ecosystems that react to what players restore.",
    icon: Sparkles
  },
  {
    title: "Choose Your Origin",
    text: "Six playable origins begin with different emotions, abilities, opening paths, and relationships to the Worldroot.",
    icon: Feather
  },
  {
    title: "Creatures Are Not Just Enemies",
    text: "Beasts can be companions, guardians, predators, traversal allies, warnings, or ancient beings the world grew around.",
    icon: BookOpen
  }
];

export default function HomePage() {
  const featuredEnvironments = environments.slice(0, 3);
  const featuredCreatures = bestiaryCreatures.slice(0, 3);
  const latestDevlogs = devlogEntries.slice(-2).reverse();

  return (
    <div className="overflow-hidden">
      <section className="relative">
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-amberglow">
              Enter The Living World
            </p>
            <h1 className="font-serif text-6xl font-semibold leading-none text-creamcap glow-text sm:text-8xl lg:text-9xl">
              Whisperroot
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-creamcap/78">
              A living world of roots, ruins, creatures, and forgotten memory.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-creamcap/62">
              Wonder comes first here. Danger waits underneath, tangled in old rootways, haunted
              swamps, crystal memories, and creatures that belong to the world before they belong to
              the player.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <AncientButton href="/environments" icon={Map}>
                Enter the World
              </AncientButton>
              <AncientButton href="/origins" icon={Compass} variant="ghost">
                Choose Your Origin
              </AncientButton>
              <AncientButton href="/creatures" icon={BookOpen} variant="ghost">
                Explore the Bestiary
              </AncientButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-amberglow/10 blur-3xl pulse-root" />
            <PlaceholderImage
              label="The Worldroot Stirs"
              description="Future cinematic key art: glowing roots beneath forests, caverns, swamps, and sky ruins."
              className="relative min-h-[460px] rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      <GlowDivider />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The World Remembers"
          title="A site that behaves like a living archive."
          description="The Whisperroot hub gathers origins, environments, creature ecosystems, lore fragments, and real development notes as the world slowly wakes up."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map(({ title, text, icon: Icon }) => (
            <RootCard key={title} className="p-6">
              <div className="relative">
                <Icon className="mb-5 size-7 text-amberglow" aria-hidden="true" />
                <h2 className="font-serif text-2xl text-creamcap">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-creamcap/66">{text}</p>
              </div>
            </RootCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Explore Living Environments"
            title="Every biome is a portal."
            description="Regions are built around mood, movement, creatures, landmarks, and the memory of what happened before the Whisper woke."
          />
          <div className="flex lg:justify-end">
            <AncientButton href="/environments" icon={Map} variant="ghost">
              Explore Environments
            </AncientButton>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredEnvironments.map((environment) => (
            <EnvironmentCard key={environment.id} environment={environment} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Living Bestiary"
          title="Creature ecosystems, not encounter lists."
          description="The archive tracks ambient life, passive wildlife, territorial threats, traversal allies, corrupted wounds, and ancient beings."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {featuredCreatures.map((creature) => (
            <RootCard key={creature.id} className="p-5">
              <div className="relative">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amberglow/78">
                  {creature.environment}
                </p>
                <h2 className="font-serif text-2xl text-creamcap">{creature.name}</h2>
                <p className="mt-3 text-sm leading-6 text-creamcap/66">{creature.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-creamcap/68">
                  <span className="rounded-full border border-creamcap/10 px-3 py-1">{creature.category}</span>
                  <span className="rounded-full border border-creamcap/10 px-3 py-1">{creature.temperament}</span>
                </div>
              </div>
            </RootCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Development Journal"
            title="Expedition notes from the world waking up."
            description="Real devlogs track the project as systems, biomes, creature philosophies, and the website itself take shape."
          />
          <AncientButton href="/devlog" icon={ScrollText} variant="ghost">
            Read Devlogs
          </AncientButton>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {latestDevlogs.map((entry) => (
            <DevlogCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
