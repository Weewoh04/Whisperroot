"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AudioLines,
  Flower2,
  Gem,
  Leaf,
  Mountain,
  Shield,
  Sparkles,
  Sprout
} from "lucide-react";
import type { Origin } from "@/data/origins";

const iconMap = {
  root: Sprout,
  spore: Sparkles,
  bloom: Flower2,
  crystal: Gem,
  ember: Mountain,
  warden: Shield
};

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: 2 + (index % 4),
  duration: 7 + (index % 6),
  delay: (index % 9) * 0.35
}));

export default function OriginsExperience({ origins }: { origins: Origin[] }) {
  const [selectedId, setSelectedId] = useState(origins[0]?.id ?? "");
  const [expandedId, setExpandedId] = useState<string | null>(origins[0]?.id ?? null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const selectedOrigin = useMemo(
    () => origins.find((origin) => origin.id === selectedId) ?? origins[0],
    [origins, selectedId]
  );

  return (
    <div
      className="relative isolate overflow-hidden bg-[#030706] text-creamcap"
      style={
        {
          "--origin-primary": selectedOrigin.palette.primary,
          "--origin-secondary": selectedOrigin.palette.secondary,
          "--origin-glow": selectedOrigin.palette.glow,
          "--origin-mist": selectedOrigin.palette.mist
        } as CSSProperties
      }
    >
      <motion.div
        className="fixed inset-0 -z-20 transition-colors duration-700"
        animate={{
          background: [
            `radial-gradient(circle at 24% 18%, ${selectedOrigin.palette.glow}, transparent 26rem), radial-gradient(circle at 80% 12%, ${selectedOrigin.palette.mist}, transparent 30rem), linear-gradient(140deg, #030706 0%, #07130f 46%, #0b1018 100%)`,
            `radial-gradient(circle at 30% 26%, ${selectedOrigin.palette.glow}, transparent 30rem), radial-gradient(circle at 70% 20%, ${selectedOrigin.palette.mist}, transparent 34rem), linear-gradient(140deg, #030706 0%, #07130f 46%, #0b1018 100%)`
          ]
        }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      />

      <ParticleField />
      <FloatingRoots />

      <section className="relative flex min-h-[88vh] items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="origins-hero-art h-full w-full opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030706]/20 via-[#030706]/50 to-[#030706]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030706] to-transparent" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--origin-secondary)]">
              Whisperroot Origins
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-none text-creamcap drop-shadow-[0_0_32px_var(--origin-glow)] sm:text-7xl lg:text-8xl">
              Choose Your Origin
            </h1>
            <p className="mt-7 max-w-2xl whitespace-pre-line text-lg leading-8 text-creamcap/78 sm:text-xl">
              {"Before the Whisper awakened...\nevery path began somewhere."}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#origin-selection"
                className="rounded-full bg-[var(--origin-secondary)] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#07130f] shadow-[0_0_30px_var(--origin-glow)] transition hover:scale-[1.03]"
              >
                View Origins
              </a>
              <button
                type="button"
                onClick={() => setAudioEnabled((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full border border-creamcap/15 bg-creamcap/5 px-5 py-3 text-sm text-creamcap/80 backdrop-blur transition hover:border-[var(--origin-secondary)] hover:text-[var(--origin-secondary)]"
                aria-pressed={audioEnabled}
              >
                <AudioLines className="size-4" aria-hidden="true" />
                Ambient {audioEnabled ? "On" : "Off"}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-creamcap/10 bg-[#09100d]/62 p-5 shadow-[0_0_70px_var(--origin-glow)] backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedOrigin.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--origin-secondary)]">
                  Selected Path
                </p>
                <h2 className="mt-3 font-serif text-3xl text-creamcap">{selectedOrigin.name}</h2>
                <p className="mt-3 text-sm leading-6 text-creamcap/70">{selectedOrigin.theme}</p>
                <div className="mt-5 h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--origin-secondary)] to-transparent" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="origin-selection" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--origin-secondary)]">
            Origin Selection
          </p>
          <h2 className="font-serif text-4xl font-semibold text-creamcap sm:text-6xl">
            Six bloodlines. Six first songs.
          </h2>
          <p className="mt-5 text-base leading-7 text-creamcap/66">
            Hover or tap an origin to let the background attune to its magic. Open the lore panel
            to compare passives, active abilities, evolutions, and starting regions.
          </p>
        </div>

        <div className="flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
          {origins.map((origin, index) => (
            <OriginCard
              key={origin.id}
              origin={origin}
              index={index}
              selected={selectedId === origin.id}
              expanded={expandedId === origin.id}
              onFocus={() => setSelectedId(origin.id)}
              onToggle={() => {
                setSelectedId(origin.id);
                setExpandedId((current) => (current === origin.id ? null : origin.id));
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function OriginCard({
  origin,
  index,
  selected,
  expanded,
  onFocus,
  onToggle
}: {
  origin: Origin;
  index: number;
  selected: boolean;
  expanded: boolean;
  onFocus: () => void;
  onToggle: () => void;
}) {
  const Icon = iconMap[origin.symbol];

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      onMouseEnter={onFocus}
      onFocus={onFocus}
      className="group min-w-[86%] snap-center overflow-hidden rounded-[1.75rem] border bg-[#09100d]/82 shadow-2xl backdrop-blur-xl transition md:min-w-0"
      style={{
        borderColor: selected ? origin.palette.secondary : "rgba(239, 228, 198, 0.12)",
        boxShadow: selected ? `0 0 54px ${origin.palette.glow}` : "0 24px 80px rgba(0, 0, 0, 0.32)"
      }}
    >
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="relative"
      >
        {/* Future asset swap: replace this placeholder div with an optimized next/image or video poster. */}
        <div
          className="relative h-72 overflow-hidden"
          style={{
            background:
              `radial-gradient(circle at 36% 18%, ${origin.palette.glow}, transparent 9rem), ` +
              `linear-gradient(145deg, ${origin.palette.primary}52, #050807 64%), ` +
              `linear-gradient(45deg, ${origin.palette.secondary}38, transparent)`
          }}
        >
          <div className="absolute inset-0 origins-card-texture opacity-70" />
          <motion.div
            className="absolute -bottom-12 left-8 h-48 w-48 rounded-full blur-3xl"
            style={{ background: origin.palette.glow }}
            animate={{ y: [0, -14, 0], opacity: [0.42, 0.66, 0.42] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute left-6 top-6 grid size-16 place-items-center rounded-full border border-creamcap/20 bg-[#030706]/56 shadow-[0_0_32px_var(--origin-glow)] backdrop-blur">
            <Icon className="size-8" style={{ color: origin.palette.secondary }} aria-hidden="true" />
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs uppercase tracking-[0.22em] text-creamcap/58">{origin.startingRegion}</p>
            <h3 className="mt-2 font-serif text-3xl font-semibold text-creamcap">{origin.name}</h3>
          </div>
        </div>

        <div className="space-y-5 p-6">
          <p className="text-sm leading-6 text-creamcap/70">{origin.theme}</p>
          <InfoBlock label="Gameplay Style" value={origin.gameplayStyle} />

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: origin.palette.secondary }}>
              Passive Abilities
            </p>
            <div className="flex flex-wrap gap-2">
              {origin.passiveTraits.map((trait) => (
                <span key={trait} className="rounded-full border border-creamcap/10 bg-creamcap/5 px-3 py-1 text-xs text-creamcap/72">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onToggle}
            className="w-full rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#050807] shadow-[0_0_28px_rgba(255,255,255,0.12)] transition hover:scale-[1.02]"
            style={{ background: origin.palette.secondary }}
          >
            Begin This Path
          </button>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-4 border-t border-creamcap/10 pt-5">
                  <InfoBlock
                    label={`Active Ability: ${origin.activeAbility.name}`}
                    value={origin.activeAbility.description}
                  />
                  <InfoBlock label="Late-Game Evolution" value={origin.lateGameEvolution} />
                  <InfoBlock label="Environmental Affinity" value={origin.environmentalAffinity} />
                  <InfoBlock label="Visual Direction" value={origin.visualStyle} />
                  <p className="text-xs italic leading-5 text-creamcap/48">{origin.imagePlaceholder}</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-creamcap/38">{label}</p>
      <p className="text-sm leading-6 text-creamcap/75">{value}</p>
    </div>
  );
}

function ParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[var(--origin-secondary)] shadow-[0_0_16px_var(--origin-secondary)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{ y: [-20, -120], x: [0, particle.id % 2 ? 18 : -18], opacity: [0, 0.75, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function FloatingRoots() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-55">
      {[0, 1, 2, 3].map((root) => (
        <motion.div
          key={root}
          className="absolute h-28 w-[42rem] rounded-full border-t border-[var(--origin-secondary)]/40 blur-[1px]"
          style={{
            left: `${-15 + root * 25}%`,
            top: `${18 + root * 18}%`,
            rotate: `${-16 + root * 9}deg`
          }}
          animate={{ x: [0, 24, 0], opacity: [0.18, 0.42, 0.18] }}
          transition={{ duration: 8 + root, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
