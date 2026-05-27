"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Eye, Gem, Map, Mountain, Route, ShieldAlert, Trees, Waves } from "lucide-react";
import type { Environment, EnvironmentCategory } from "@/data/environments";

const filterTabs: Array<"All" | EnvironmentCategory> = [
  "All",
  "Settlements",
  "Forests",
  "Underground",
  "Dangerous",
  "Endgame"
];

const categoryIcons = {
  Settlements: Map,
  Forests: Trees,
  Underground: Gem,
  Dangerous: ShieldAlert,
  Endgame: Mountain
};

const motes = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 2 + (index % 5),
  duration: 8 + (index % 7),
  delay: (index % 10) * 0.28
}));

export default function EnvironmentsExperience({ environments }: { environments: Environment[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filterTabs)[number]>("All");
  const [selectedSlug, setSelectedSlug] = useState(environments[0]?.slug ?? "");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(environments[0]?.slug ?? null);

  const selectedEnvironment = useMemo(
    () => environments.find((environment) => environment.slug === selectedSlug) ?? environments[0],
    [environments, selectedSlug]
  );

  const filteredEnvironments = useMemo(() => {
    if (activeFilter === "All") {
      return environments;
    }

    return environments.filter((environment) => environment.category === activeFilter);
  }, [activeFilter, environments]);

  return (
    <div
      className="relative isolate overflow-hidden bg-[#030706] text-creamcap"
      style={
        {
          "--env-primary": selectedEnvironment.palette.primary,
          "--env-secondary": selectedEnvironment.palette.secondary,
          "--env-glow": selectedEnvironment.palette.glow,
          "--env-mist": selectedEnvironment.palette.mist
        } as CSSProperties
      }
    >
      <motion.div
        className="fixed inset-0 -z-30"
        animate={{
          background: [
            `radial-gradient(circle at 24% 18%, ${selectedEnvironment.palette.glow}, transparent 30rem), radial-gradient(circle at 78% 16%, ${selectedEnvironment.palette.mist}, transparent 34rem), linear-gradient(145deg, #030706 0%, #07130f 50%, #08131b 100%)`,
            `radial-gradient(circle at 30% 24%, ${selectedEnvironment.palette.glow}, transparent 36rem), radial-gradient(circle at 66% 20%, ${selectedEnvironment.palette.mist}, transparent 38rem), linear-gradient(145deg, #030706 0%, #07130f 50%, #08131b 100%)`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <EnvironmentMotes />
      <WorldrootVeins />

      <section className="relative flex min-h-[88vh] items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-20">
          <div className="environments-hero-map h-full w-full opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030706]/16 via-[#030706]/54 to-[#030706]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030706] to-transparent" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--env-secondary)]">
              Whisperroot Atlas
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-none text-creamcap drop-shadow-[0_0_34px_var(--env-glow)] sm:text-7xl lg:text-8xl">
              Explore the Living World
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-creamcap/76 sm:text-xl">
              Every forest, cavern, swamp, and sky ruin remembers what happened before the Whisper woke.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#environment-grid"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--env-secondary)] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#07130f] shadow-[0_0_30px_var(--env-glow)] transition hover:scale-[1.03]"
              >
                <Compass className="size-4" aria-hidden="true" />
                Begin Atlas
              </a>
              <Link
                href="/world-map"
                className="inline-flex items-center gap-2 rounded-full border border-creamcap/15 bg-creamcap/5 px-5 py-3 text-sm text-creamcap/80 backdrop-blur transition hover:border-[var(--env-secondary)] hover:text-[var(--env-secondary)]"
              >
                <Map className="size-4" aria-hidden="true" />
                World Map
              </Link>
            </div>
          </motion.div>

          <motion.aside
            className="rounded-[2rem] border border-creamcap/10 bg-[#09100d]/64 p-5 shadow-[0_0_70px_var(--env-glow)] backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEnvironment.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.32 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--env-secondary)]">
                  Attuned Region
                </p>
                <h2 className="mt-3 font-serif text-3xl text-creamcap">{selectedEnvironment.name}</h2>
                <p className="mt-3 text-sm leading-6 text-creamcap/68">{selectedEnvironment.loreHook}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-creamcap/64">
                  <span className="rounded-2xl border border-creamcap/10 bg-creamcap/5 p-3">
                    {selectedEnvironment.regionDifficulty}
                  </span>
                  <span className="rounded-2xl border border-creamcap/10 bg-creamcap/5 p-3">
                    {selectedEnvironment.discoveryLevel}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.aside>
        </div>
      </section>

      <section id="environment-grid" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--env-secondary)]">
              Regions
            </p>
            <h2 className="font-serif text-4xl font-semibold text-creamcap sm:text-6xl">
              Wonder at the edge of every path.
            </h2>
            <p className="mt-5 text-base leading-7 text-creamcap/66">
              Filter the atlas by settlement, forest, underground realm, danger route, or endgame myth.
              Hover or tap cards to shift the atmosphere, then expand them for lore and mechanics.
            </p>
          </div>

          <div className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-creamcap/10 bg-[#08100d]/72 p-2 backdrop-blur">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className="shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition"
                style={{
                  background: activeFilter === tab ? selectedEnvironment.palette.secondary : "transparent",
                  color: activeFilter === tab ? "#07130f" : "rgba(239, 228, 198, 0.68)"
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
          {filteredEnvironments.map((environment, index) => (
            <EnvironmentRegionCard
              key={environment.id}
              environment={environment}
              index={index}
              selected={environment.slug === selectedSlug}
              expanded={environment.slug === expandedSlug}
              onFocus={() => setSelectedSlug(environment.slug)}
              onToggle={() => {
                setSelectedSlug(environment.slug);
                setExpandedSlug((current) => (current === environment.slug ? null : environment.slug));
              }}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-creamcap/10 bg-[#09100d]/76 p-6 shadow-[0_0_70px_var(--env-glow)] backdrop-blur-xl sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--env-secondary)] to-transparent" />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--env-secondary)]">
                Worldroot Connection
              </p>
              <h2 className="font-serif text-3xl font-semibold text-creamcap sm:text-5xl">
                No region is truly alone.
              </h2>
            </div>
            <p className="text-base leading-8 text-creamcap/70">
              Beneath every shrine, market, swamp, and sky ruin, ancient glowing roots bind the
              world together. The Rootways remember migrations, wounds, promises, and songs.
              As players restore each region, the Worldroot grows brighter and forgotten paths
              reopen between places that were never meant to be severed.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function EnvironmentRegionCard({
  environment,
  index,
  selected,
  expanded,
  onFocus,
  onToggle
}: {
  environment: Environment;
  index: number;
  selected: boolean;
  expanded: boolean;
  onFocus: () => void;
  onToggle: () => void;
}) {
  const Icon = categoryIcons[environment.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.05, duration: 0.55 }}
      onMouseEnter={onFocus}
      onFocus={onFocus}
      className="group min-w-[88%] snap-center overflow-hidden rounded-[1.75rem] border bg-[#08100d]/86 shadow-2xl backdrop-blur-xl transition md:min-w-0"
      style={{
        borderColor: selected ? environment.palette.secondary : "rgba(239, 228, 198, 0.12)",
        boxShadow: selected ? `0 0 52px ${environment.palette.glow}` : "0 24px 80px rgba(0, 0, 0, 0.34)"
      }}
    >
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 180, damping: 18 }}>
        {/* Future asset swap: replace this placeholder artwork with next/image concept art or a video still. */}
        <div
          className="relative h-72 overflow-hidden"
          style={{
            background:
              `radial-gradient(circle at 34% 22%, ${environment.palette.glow}, transparent 10rem), ` +
              `radial-gradient(circle at 78% 72%, ${environment.palette.mist}, transparent 12rem), ` +
              `linear-gradient(145deg, ${environment.palette.primary}45, #050807 66%), ` +
              `linear-gradient(45deg, ${environment.palette.secondary}34, transparent)`
          }}
        >
          <div className="absolute inset-0 environments-card-texture opacity-80" />
          <motion.div
            className="absolute -bottom-14 left-8 h-52 w-52 rounded-full blur-3xl"
            style={{ background: environment.palette.glow }}
            animate={{ y: [0, -12, 0], opacity: [0.38, 0.68, 0.38] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-creamcap/15 bg-[#030706]/58 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-creamcap/78 backdrop-blur">
            <Icon className="size-4" style={{ color: environment.palette.secondary }} aria-hidden="true" />
            {environment.category}
          </div>
          <div className="absolute right-6 top-6 rounded-full border border-creamcap/15 bg-[#030706]/58 px-4 py-2 text-xs text-creamcap/72 backdrop-blur">
            {environment.regionDifficulty}
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs uppercase tracking-[0.22em] text-creamcap/58">{environment.biomeType}</p>
            <h3 className="mt-2 font-serif text-3xl font-semibold text-creamcap">{environment.name}</h3>
          </div>
        </div>

        <div className="space-y-5 p-6">
          <p className="text-sm leading-6 text-creamcap/70">{environment.mood}</p>
          <p className="text-sm leading-6 text-creamcap/58">{environment.shortDescription}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <MiniStat icon={Eye} label="Landmark" value={environment.majorLandmark} color={environment.palette.secondary} />
            <MiniStat icon={Route} label="Discovery" value={environment.discoveryLevel} color={environment.palette.secondary} />
          </div>

          <TagGroup label="Key Creatures" items={environment.creatures.slice(0, 4)} color={environment.palette.secondary} />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onToggle}
              className="flex-1 rounded-full border border-creamcap/14 px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-creamcap/82 transition hover:border-current"
              style={{ color: environment.palette.secondary }}
            >
              {expanded ? "Close Lore" : "Reveal Lore"}
            </button>
            <Link
              href={`/environments/${environment.slug}`}
              className="flex-1 rounded-full px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-[#050807] transition hover:scale-[1.02]"
              style={{ background: environment.palette.secondary }}
            >
              Enter Region
            </Link>
          </div>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-5 border-t border-creamcap/10 pt-5">
                  <InfoBlock label="Lore Hook" value={environment.loreHook} />
                  <TagGroup label="Gameplay Mechanics" items={environment.gameplayMechanics} color={environment.palette.secondary} />
                  <InfoBlock label="Visual Direction" value={environment.visualStyle} />
                  <p className="text-xs italic leading-5 text-creamcap/45">{environment.imagePlaceholder}</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
  color
}: {
  icon: typeof Eye;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-creamcap/10 bg-creamcap/5 p-3">
      <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-creamcap/38">
        <Icon className="size-4" style={{ color }} aria-hidden="true" />
        {label}
      </p>
      <p className="text-sm leading-5 text-creamcap/76">{value}</p>
    </div>
  );
}

function TagGroup({ label, items, color }: { label: string; items: string[]; color: string }) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-creamcap/10 bg-creamcap/5 px-3 py-1 text-xs text-creamcap/72">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-creamcap/38">{label}</p>
      <p className="text-sm leading-6 text-creamcap/74">{value}</p>
    </div>
  );
}

function EnvironmentMotes() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {motes.map((mote) => (
        <motion.span
          key={mote.id}
          className="absolute rounded-full bg-[var(--env-secondary)] shadow-[0_0_16px_var(--env-secondary)]"
          style={{
            left: mote.left,
            top: mote.top,
            width: mote.size,
            height: mote.size
          }}
          animate={{ y: [-12, -130], x: [0, mote.id % 2 ? 22 : -22], opacity: [0, 0.65, 0] }}
          transition={{
            duration: mote.duration,
            delay: mote.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function WorldrootVeins() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden opacity-60">
      {[0, 1, 2, 3, 4].map((root) => (
        <motion.div
          key={root}
          className="absolute h-36 w-[50rem] rounded-full border-t border-[var(--env-secondary)]/35 blur-[1px]"
          style={{
            left: `${-20 + root * 22}%`,
            top: `${16 + root * 16}%`,
            rotate: `${-18 + root * 8}deg`
          }}
          animate={{ x: [0, 28, 0], opacity: [0.14, 0.4, 0.14] }}
          transition={{ duration: 8 + root, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
