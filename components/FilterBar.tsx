"use client";

type FilterBarProps = {
  filters: {
    environment: string;
    type: string;
    rarity: string;
    temperament: string;
  };
  options: {
    environments: string[];
    types: string[];
    rarities: string[];
    temperaments: string[];
  };
  onChange: (key: keyof FilterBarProps["filters"], value: string) => void;
};

const filterLabels = {
  environment: "Environment",
  type: "Type",
  rarity: "Rarity",
  temperament: "Temperament"
};

export default function FilterBar({ filters, options, onChange }: FilterBarProps) {
  const optionMap = {
    environment: options.environments,
    type: options.types,
    rarity: options.rarities,
    temperament: options.temperaments
  };

  return (
    <div className="grid gap-3 rounded-2xl border border-creamcap/10 bg-moss-900/72 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {(Object.keys(filters) as Array<keyof typeof filters>).map((key) => (
        <label key={key} className="text-sm text-creamcap/76">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-amberglow/78">
            {filterLabels[key]}
          </span>
          <select
            value={filters[key]}
            onChange={(event) => onChange(key, event.target.value)}
            className="w-full rounded-xl border border-creamcap/10 bg-moss-950 px-3 py-3 text-sm text-creamcap outline-none transition focus:border-amberglow/60"
          >
            <option value="All">All</option>
            {optionMap[key].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
