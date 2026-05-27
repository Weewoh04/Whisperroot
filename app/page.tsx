import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Map } from "lucide-react";
import CreatureCard from "@/components/CreatureCard";
import DevlogCard from "@/components/DevlogCard";
import EnvironmentCard from "@/components/EnvironmentCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeader from "@/components/SectionHeader";
import SupportCTA from "@/components/SupportCTA";
import { creatures } from "@/data/creatures";
import { devlogEntries } from "@/data/devlog";
import { environments } from "@/data/environments";

export default function HomePage() {
  const featuredEnvironments = environments.slice(0, 3);
  const featuredCreatures = creatures.slice(0, 3);
  const latestDevlogs = devlogEntries.slice(0, 2);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amberglow">
              Open-World Cozy Fantasy
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-creamcap sm:text-7xl">
              Whisperroot
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-creamcap/72">
              Explore a moss-lit living world, befriend gentle creatures, uncover old root magic,
              and help a strange forest remember how to heal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/world-map"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-amberglow px-5 text-sm font-semibold text-moss-950 transition hover:bg-creamcap"
              >
                <Map className="size-4" aria-hidden="true" />
                Explore Map
              </Link>
              <Link
                href="/creatures"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-creamcap/14 bg-moss-900/70 px-5 text-sm font-semibold text-creamcap transition hover:border-violetcap/60 hover:text-violetcap"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                Open Bestiary
              </Link>
              <Link
                href="/support"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-creamcap/14 px-5 text-sm font-semibold text-creamcap/80 transition hover:border-amberglow/50 hover:text-amberglow"
              >
                <HeartHandshake className="size-4" aria-hidden="true" />
                Support
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="World Key Art"
            description="Replace this with cozy key art of Whisperroot's glowing forest, marsh, caverns, and canopy."
            className="min-h-[420px] rounded-[2rem]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Game Pitch"
          title="A gentle wilderness that remembers what you do."
          description="Whisperroot blends cozy collection, creature trust, light crafting, and secrets tucked into a fantasy ecosystem. The world hub keeps the design bible visible as regions, origins, and creature relationships grow."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Befriend creatures through care", "Unlock routes with gentle magic", "Restore places without conquering them"].map(
            (pitch) => (
              <div key={pitch} className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-5">
                <div className="mb-4 h-1 w-20 rounded-full bg-amberglow/70" />
                <h2 className="text-lg font-semibold text-creamcap">{pitch}</h2>
              </div>
            )
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Regions" title="Featured Environments" />
        <div className="grid gap-5 md:grid-cols-3">
          {featuredEnvironments.map((environment) => (
            <EnvironmentCard key={environment.id} environment={environment} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Bestiary" title="Featured Creatures" />
        <div className="grid gap-5 md:grid-cols-3">
          {featuredCreatures.map((creature) => (
            <CreatureCard key={creature.id} creature={creature} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="Devlog" title="Latest Notes" />
          <Link href="/devlog" className="inline-flex items-center gap-2 text-sm font-semibold text-amberglow">
            Read devlog
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {latestDevlogs.map((entry) => (
            <DevlogCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SupportCTA />
      </section>
    </div>
  );
}
