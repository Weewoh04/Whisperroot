import SectionHeader from "@/components/SectionHeader";
import SupportCTA from "@/components/SupportCTA";

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Support"
        title="Future Crowdfunding Grove"
        description="This page is ready for a newsletter provider, crowdfunding campaign, community links, media kit, or press contact when the project moves from world bible to public campaign."
      />
      <SupportCTA />
    </section>
  );
}
