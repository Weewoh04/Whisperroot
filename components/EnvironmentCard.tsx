import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Environment } from "@/data/environments";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function EnvironmentCard({ environment }: { environment: Environment }) {
  return (
    <Link
      href={`/environments/${environment.slug}`}
      className="group block overflow-hidden rounded-2xl border border-creamcap/10 bg-moss-900/72 shadow-glow transition hover:-translate-y-1 hover:border-amberglow/40"
    >
      <PlaceholderImage
        label={environment.name}
        description={environment.imagePlaceholder}
        className="h-48 rounded-none border-0 border-b border-creamcap/10"
      />
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amberglow/80">
          <MapPin className="size-4" aria-hidden="true" />
          {environment.mood}
        </div>
        <h2 className="text-xl font-semibold text-creamcap group-hover:text-amberglow">
          {environment.name}
        </h2>
        <p className="mt-3 text-sm leading-6 text-creamcap/66">{environment.shortDescription}</p>
      </div>
    </Link>
  );
}
