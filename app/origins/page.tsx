import SectionHeader from "@/components/SectionHeader";
import { origins } from "@/data/origins";

export default function OriginsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Character Origins"
        title="Choose The Magic That Raised You"
        description="Origins frame player identity, starting gifts, creature reactions, and early world relationships."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {origins.map((origin) => (
          <article key={origin.id} className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-6">
            <h2 className="text-2xl font-semibold text-creamcap">{origin.name}</h2>
            <p className="mt-3 text-sm leading-6 text-creamcap/68">{origin.summary}</p>
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-amberglow/82">Traits</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {origin.traits.map((trait) => (
                  <span key={trait} className="rounded-full border border-creamcap/10 px-3 py-1 text-xs text-creamcap/70">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-5 text-sm font-semibold text-violetcap">{origin.startingGift}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-creamcap/45">
              {origin.connectedEnvironments.join(" / ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
