"use client";

import { useMemo, useState } from "react";
import CreatureCard from "@/components/CreatureCard";
import FilterBar from "@/components/FilterBar";
import type { Creature } from "@/data/creatures";

type Filters = {
  environment: string;
  type: string;
  rarity: string;
  temperament: string;
};

export default function BestiaryExplorer({
  creatures,
  options
}: {
  creatures: Creature[];
  options: {
    environments: string[];
    types: string[];
    rarities: string[];
    temperaments: string[];
  };
}) {
  const [filters, setFilters] = useState<Filters>({
    environment: "All",
    type: "All",
    rarity: "All",
    temperament: "All"
  });

  const filteredCreatures = useMemo(() => {
    return creatures.filter((creature) => {
      return (
        (filters.environment === "All" || creature.environment === filters.environment) &&
        (filters.type === "All" || creature.type === filters.type) &&
        (filters.rarity === "All" || creature.rarity === filters.rarity) &&
        (filters.temperament === "All" || creature.temperament === filters.temperament)
      );
    });
  }, [creatures, filters]);

  return (
    <div className="space-y-8">
      <FilterBar
        filters={filters}
        options={options}
        onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCreatures.map((creature) => (
          <CreatureCard key={creature.id} creature={creature} />
        ))}
      </div>
      {filteredCreatures.length === 0 ? (
        <div className="rounded-2xl border border-creamcap/10 bg-moss-900/72 p-8 text-center text-creamcap/70">
          No creatures match those filters yet.
        </div>
      ) : null}
    </div>
  );
}
