import EnvironmentCard from "@/components/EnvironmentCard";
import SectionHeader from "@/components/SectionHeader";
import { environments } from "@/data/environments";

export default function WorldMapPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="World Map"
        title="The Living Regions Of Whisperroot"
        description="Use this page as the future clickable map index. Each card is ready to become a map pin, travel node, or region preview."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {environments.map((environment) => (
          <EnvironmentCard key={environment.id} environment={environment} />
        ))}
      </div>
    </section>
  );
}
