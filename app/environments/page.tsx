import EnvironmentCard from "@/components/EnvironmentCard";
import SectionHeader from "@/components/SectionHeader";
import { environments } from "@/data/environments";

export default function EnvironmentsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Environments"
        title="Region Field Guide"
        description="Mood, hazards, landmarks, resources, and origin connections for each area in the Whisperroot world bible."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {environments.map((environment) => (
          <EnvironmentCard key={environment.id} environment={environment} />
        ))}
      </div>
    </section>
  );
}
