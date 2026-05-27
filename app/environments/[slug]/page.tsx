import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import { environments, getEnvironmentBySlug } from "@/data/environments";

type EnvironmentDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return environments.map((environment) => ({ slug: environment.slug }));
}

export async function generateMetadata({ params }: EnvironmentDetailPageProps) {
  const { slug } = await params;
  const environment = getEnvironmentBySlug(slug);

  return {
    title: environment ? `${environment.name} | Whisperroot` : "Environment | Whisperroot"
  };
}

export default async function EnvironmentDetailPage({ params }: EnvironmentDetailPageProps) {
  const { slug } = await params;
  const environment = getEnvironmentBySlug(slug);

  if (!environment) {
    notFound();
  }

  const detailGroups = [
    { title: "Landmarks", items: environment.landmarks },
    { title: "Hazards", items: environment.hazards },
    { title: "Resources", items: environment.resources },
    { title: "Connected Origins", items: environment.connectedOrigins },
    { title: "Known Creatures", items: environment.creatures },
    { title: "Color Palette", items: environment.colorPalette }
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <PlaceholderImage
          label={environment.name}
          description={environment.imagePlaceholder}
          className="min-h-[420px] rounded-[2rem]"
        />
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amberglow">
            {environment.mood}
          </p>
          <h1 className="text-4xl font-semibold text-creamcap sm:text-6xl">{environment.name}</h1>
          <p className="mt-6 text-lg leading-8 text-creamcap/72">{environment.longDescription}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {detailGroups.map((group) => (
              <section key={group.title} className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-5">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amberglow/82">
                  {group.title}
                </h2>
                <ul className="space-y-2 text-sm leading-6 text-creamcap/70">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
