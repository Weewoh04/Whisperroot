import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import { creatures, getCreatureBySlug } from "@/data/creatures";

type CreatureDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return creatures.map((creature) => ({ slug: creature.slug }));
}

export async function generateMetadata({ params }: CreatureDetailPageProps) {
  const { slug } = await params;
  const creature = getCreatureBySlug(slug);

  return {
    title: creature ? `${creature.name} | Whisperroot Bestiary` : "Creature | Whisperroot"
  };
}

export default async function CreatureDetailPage({ params }: CreatureDetailPageProps) {
  const { slug } = await params;
  const creature = getCreatureBySlug(slug);

  if (!creature) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <PlaceholderImage
          label={creature.type}
          description={creature.imagePlaceholder}
          className="min-h-[420px] rounded-[2rem]"
        />
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            {[creature.environment, creature.rarity, creature.temperament].map((tag) => (
              <span key={tag} className="rounded-full border border-creamcap/10 bg-moss-900 px-4 py-2 text-sm text-creamcap/72">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-semibold text-creamcap sm:text-6xl">{creature.name}</h1>
          <p className="mt-6 text-lg leading-8 text-creamcap/72">{creature.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <section className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-5">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amberglow/82">
                Abilities
              </h2>
              <ul className="space-y-2 text-sm leading-6 text-creamcap/70">
                {creature.abilities.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-5">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amberglow/82">
                Unlocks
              </h2>
              <ul className="space-y-2 text-sm leading-6 text-creamcap/70">
                {creature.unlocks.map((unlock) => (
                  <li key={unlock}>{unlock}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
