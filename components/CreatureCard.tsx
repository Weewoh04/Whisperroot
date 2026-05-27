import Link from "next/link";
import { Sparkles } from "lucide-react";
import type { Creature } from "@/data/creatures";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function CreatureCard({ creature }: { creature: Creature }) {
  return (
    <Link
      href={`/creatures/${creature.slug}`}
      className="group block overflow-hidden rounded-2xl border border-creamcap/10 bg-deepteal/45 transition hover:-translate-y-1 hover:border-violetcap/60 hover:shadow-violet"
    >
      <PlaceholderImage
        label={creature.type}
        description={creature.imagePlaceholder}
        className="h-44 rounded-none border-0 border-b border-creamcap/10"
      />
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {[creature.environment, creature.rarity, creature.temperament].map((tag) => (
            <span key={tag} className="rounded-full border border-creamcap/10 px-3 py-1 text-xs text-creamcap/70">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="flex items-center gap-2 text-xl font-semibold text-creamcap group-hover:text-violetcap">
          <Sparkles className="size-4" aria-hidden="true" />
          {creature.name}
        </h2>
        <p className="mt-3 text-sm leading-6 text-creamcap/66">{creature.description}</p>
      </div>
    </Link>
  );
}
