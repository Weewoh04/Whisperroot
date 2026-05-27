"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, ImageIcon, Search, Sparkles, Trash2, Upload, X } from "lucide-react";
import {
  bestiaryCategories,
  bestiaryEnvironments,
  environmentAccents,
  type BestiaryCategory,
  type BestiaryCreature,
  type BestiaryEnvironment
} from "@/data/bestiaryData";

type CategoryFilter = "All" | BestiaryCategory;
type EnvironmentFilter = "All Environments" | BestiaryEnvironment;
type DiscoveryFilter = "All" | "Discovered" | "Undiscovered";
type UploadedImages = Record<string, string>;

const uploadedImagesStorageKey = "whisperroot-bestiary-uploaded-images";

const particles = Array.from({ length: 38 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  top: `${(index * 43) % 100}%`,
  size: 2 + (index % 5),
  duration: 8 + (index % 7),
  delay: (index % 10) * 0.3
}));

export default function BestiaryExperience({ creatures }: { creatures: BestiaryCreature[] }) {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [environment, setEnvironment] = useState<EnvironmentFilter>("All Environments");
  const [discovery, setDiscovery] = useState<DiscoveryFilter>("All");
  const [search, setSearch] = useState("");
  const [sortAlpha, setSortAlpha] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(creatures[0]?.id ?? null);
  const [uploadedImages, setUploadedImages] = useState<UploadedImages>({});
  const [selectedEnvironment, setSelectedEnvironment] = useState<BestiaryEnvironment>(
    creatures[0]?.environment ?? "Rootkin Forest Village"
  );

  const accent = environmentAccents[selectedEnvironment];

  useEffect(() => {
    const storedImages = window.localStorage.getItem(uploadedImagesStorageKey);

    if (!storedImages) {
      return;
    }

    try {
      setUploadedImages(JSON.parse(storedImages) as UploadedImages);
    } catch {
      window.localStorage.removeItem(uploadedImagesStorageKey);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(uploadedImagesStorageKey, JSON.stringify(uploadedImages));
  }, [uploadedImages]);

  function handleImageUpload(creature: BestiaryCreature, file: File) {
    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result !== "string") {
        return;
      }

      setUploadedImages((current) => ({ ...current, [creature.id]: reader.result as string }));
    };

    reader.readAsDataURL(file);
  }

  function handleImageRemove(creature: BestiaryCreature) {
    setUploadedImages((current) => {
      const next = { ...current };
      delete next[creature.id];
      return next;
    });
  }

  const filteredCreatures = useMemo(() => {
    const term = search.trim().toLowerCase();

    const filtered = creatures.filter((creature) => {
      const matchesSearch = !term || creature.name.toLowerCase().includes(term);
      const matchesCategory = category === "All" || creature.category === category;
      const matchesEnvironment =
        environment === "All Environments" || creature.environment === environment;
      const matchesDiscovery =
        discovery === "All" ||
        (discovery === "Discovered" && creature.discovered) ||
        (discovery === "Undiscovered" && !creature.discovered);

      return matchesSearch && matchesCategory && matchesEnvironment && matchesDiscovery;
    });

    if (!sortAlpha) {
      return filtered;
    }

    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }, [category, creatures, discovery, environment, search, sortAlpha]);

  return (
    <div
      className="relative isolate overflow-hidden bg-[#030706] text-creamcap"
      style={
        {
          "--bestiary-primary": accent.primary,
          "--bestiary-secondary": accent.secondary,
          "--bestiary-glow": accent.glow,
          "--bestiary-mist": accent.mist
        } as CSSProperties
      }
    >
      <motion.div
        className="fixed inset-0 -z-30"
        animate={{
          background: [
            `radial-gradient(circle at 20% 18%, ${accent.glow}, transparent 28rem), radial-gradient(circle at 78% 16%, ${accent.mist}, transparent 32rem), linear-gradient(145deg, #030706 0%, #07130f 48%, #090d14 100%)`,
            `radial-gradient(circle at 28% 24%, ${accent.glow}, transparent 34rem), radial-gradient(circle at 68% 22%, ${accent.mist}, transparent 36rem), linear-gradient(145deg, #030706 0%, #07130f 48%, #090d14 100%)`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <BestiaryParticles />
      <BestiaryRoots />

      <BestiaryHero />

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CreatureFilters
          category={category}
          environment={environment}
          discovery={discovery}
          search={search}
          sortAlpha={sortAlpha}
          onCategoryChange={setCategory}
          onEnvironmentChange={(value) => {
            setEnvironment(value);
            if (value !== "All Environments") {
              setSelectedEnvironment(value);
            }
          }}
          onDiscoveryChange={setDiscovery}
          onSearchChange={setSearch}
          onSortChange={setSortAlpha}
          onClear={() => {
            setCategory("All");
            setEnvironment("All Environments");
            setDiscovery("All");
            setSearch("");
            setSortAlpha(true);
          }}
        />

        <div className="mt-8 flex items-center justify-between gap-4 text-sm text-creamcap/62">
          <p>
            Showing <span className="font-semibold text-creamcap">{filteredCreatures.length}</span> of{" "}
            {creatures.length} creatures
          </p>
          <p className="hidden sm:block">Images live in /public/images/bestiary</p>
        </div>

        <CreatureGrid
          creatures={filteredCreatures}
          expandedId={expandedId}
          uploadedImages={uploadedImages}
          onHoverEnvironment={setSelectedEnvironment}
          onImageUpload={handleImageUpload}
          onImageRemove={handleImageRemove}
          onToggle={(creature) => {
            setSelectedEnvironment(creature.environment);
            setExpandedId((current) => (current === creature.id ? null : creature.id));
          }}
        />
      </section>
    </div>
  );
}

function BestiaryHero() {
  return (
    <section className="relative flex min-h-[84vh] items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20">
        <div className="bestiary-hero h-full w-full opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030706]/18 via-[#030706]/52 to-[#030706]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--bestiary-secondary)]">
            Living Creature Archive
          </p>
          <h1 className="font-serif text-6xl font-semibold leading-none text-creamcap drop-shadow-[0_0_34px_var(--bestiary-glow)] sm:text-8xl">
            Bestiary
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-creamcap/78 sm:text-xl">
            Every creature in Whisperroot belongs to the world before it belongs to the player.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-creamcap/64">
            The beasts of Whisperroot are not simply enemies. They are companions, guardians,
            predators, echoes, memories, and ancient beings woven into the living systems of each
            environment.
          </p>
        </motion.div>

        <motion.aside
          className="rounded-[2rem] border border-creamcap/10 bg-[#09100d]/64 p-6 shadow-[0_0_70px_var(--bestiary-glow)] backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full border border-creamcap/15 bg-creamcap/5">
              <Eye className="size-6 text-[var(--bestiary-secondary)]" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--bestiary-secondary)]">
                Field Journal
              </p>
              <h2 className="font-serif text-2xl text-creamcap">Archive what the world remembers.</h2>
            </div>
          </div>
          <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--bestiary-secondary)] to-transparent" />
          <p className="mt-5 text-sm leading-6 text-creamcap/64">
            Search by name, filter by habitat, reveal hidden notes, and replace placeholders with
            creature art as each design is finished.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}

function CreatureFilters({
  category,
  environment,
  discovery,
  search,
  sortAlpha,
  onCategoryChange,
  onEnvironmentChange,
  onDiscoveryChange,
  onSearchChange,
  onSortChange,
  onClear
}: {
  category: CategoryFilter;
  environment: EnvironmentFilter;
  discovery: DiscoveryFilter;
  search: string;
  sortAlpha: boolean;
  onCategoryChange: (value: CategoryFilter) => void;
  onEnvironmentChange: (value: EnvironmentFilter) => void;
  onDiscoveryChange: (value: DiscoveryFilter) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: boolean) => void;
  onClear: () => void;
}) {
  return (
    <div className="rounded-[2rem] border border-creamcap/10 bg-[#09100d]/78 p-4 shadow-[0_0_46px_var(--bestiary-glow)] backdrop-blur-xl sm:p-5">
      <div className="grid gap-3 lg:grid-cols-[1.2fr_0.9fr_0.7fr_auto] lg:items-end">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--bestiary-secondary)]">
            Search
          </span>
          <span className="relative block">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-creamcap/38" />
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search creature names..."
              className="min-h-12 w-full rounded-full border border-creamcap/10 bg-[#030706]/82 pl-11 pr-4 text-sm text-creamcap outline-none transition placeholder:text-creamcap/34 focus:border-[var(--bestiary-secondary)]"
            />
          </span>
        </label>

        <SelectField
          label="Environment"
          value={environment}
          onChange={(value) => onEnvironmentChange(value as EnvironmentFilter)}
          options={["All Environments", ...bestiaryEnvironments]}
        />
        <SelectField
          label="Discovery"
          value={discovery}
          onChange={(value) => onDiscoveryChange(value as DiscoveryFilter)}
          options={["All", "Discovered", "Undiscovered"]}
        />
        <button
          type="button"
          onClick={onClear}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-creamcap/10 px-4 text-sm text-creamcap/70 transition hover:border-[var(--bestiary-secondary)] hover:text-[var(--bestiary-secondary)]"
        >
          <X className="size-4" aria-hidden="true" />
          Clear
        </button>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {bestiaryCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onCategoryChange(item)}
            className="shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition"
            style={{
              background: category === item ? "var(--bestiary-secondary)" : "rgba(239, 228, 198, 0.06)",
              color: category === item ? "#07130f" : "rgba(239, 228, 198, 0.7)"
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <label className="mt-5 flex items-center gap-3 text-sm text-creamcap/70">
        <input
          type="checkbox"
          checked={sortAlpha}
          onChange={(event) => onSortChange(event.target.checked)}
          className="size-4 accent-amberglow"
        />
        Sort alphabetically
      </label>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--bestiary-secondary)]">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full rounded-full border border-creamcap/10 bg-[#030706]/82 px-4 text-sm text-creamcap outline-none transition focus:border-[var(--bestiary-secondary)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function CreatureGrid({
  creatures,
  expandedId,
  uploadedImages,
  onHoverEnvironment,
  onImageUpload,
  onImageRemove,
  onToggle
}: {
  creatures: BestiaryCreature[];
  expandedId: string | null;
  uploadedImages: UploadedImages;
  onHoverEnvironment: (environment: BestiaryEnvironment) => void;
  onImageUpload: (creature: BestiaryCreature, file: File) => void;
  onImageRemove: (creature: BestiaryCreature) => void;
  onToggle: (creature: BestiaryCreature) => void;
}) {
  if (creatures.length === 0) {
    return (
      <div className="mt-8 rounded-[2rem] border border-creamcap/10 bg-[#09100d]/72 p-10 text-center text-creamcap/70">
        No creatures match those filters yet.
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {creatures.map((creature, index) => (
        <CreatureArchiveCard
          key={creature.id}
          creature={creature}
          index={index}
          expanded={expandedId === creature.id}
          uploadedImage={uploadedImages[creature.id]}
          onHover={() => onHoverEnvironment(creature.environment)}
          onImageUpload={(file) => onImageUpload(creature, file)}
          onImageRemove={() => onImageRemove(creature)}
          onToggle={() => onToggle(creature)}
        />
      ))}
    </div>
  );
}

function CreatureArchiveCard({
  creature,
  index,
  expanded,
  uploadedImage,
  onHover,
  onImageUpload,
  onImageRemove,
  onToggle
}: {
  creature: BestiaryCreature;
  index: number;
  expanded: boolean;
  uploadedImage?: string;
  onHover: () => void;
  onImageUpload: (file: File) => void;
  onImageRemove: () => void;
  onToggle: () => void;
}) {
  const accent = environmentAccents[creature.environment];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ delay: Math.min(index * 0.025, 0.25), duration: 0.5 }}
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group overflow-hidden rounded-[1.75rem] border bg-[#09100d]/82 shadow-2xl backdrop-blur-xl"
      style={{
        borderColor: expanded ? accent.secondary : "rgba(239, 228, 198, 0.12)",
        boxShadow: expanded ? `0 0 46px ${accent.glow}` : "0 22px 70px rgba(0, 0, 0, 0.3)"
      }}
    >
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 180, damping: 18 }}>
        <CreatureImage
          creature={creature}
          accent={accent}
          uploadedImage={uploadedImage}
          onImageUpload={onImageUpload}
          onImageRemove={onImageRemove}
        />
        <div className="space-y-5 p-5">
          <div className="flex flex-wrap gap-2">
            <DiscoveryBadge discovered={creature.discovered} accent={accent.secondary} />
            <span className="rounded-full border border-creamcap/10 bg-creamcap/5 px-3 py-1 text-xs text-creamcap/68">
              {creature.category}
            </span>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-creamcap/42">
              {creature.environment}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-creamcap">{creature.name}</h2>
          </div>

          <p className="text-sm leading-6 text-creamcap/68">{creature.description}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <JournalStat label="Temperament" value={creature.temperament} />
            <JournalStat label="Role" value={creature.gameplayRole} />
          </div>

          <button
            type="button"
            onClick={onToggle}
            className="w-full rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#050807] transition hover:scale-[1.02]"
            style={{ background: accent.secondary }}
          >
            {expanded ? "Close Entry" : "Open Entry"}
          </button>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-4 border-t border-creamcap/10 pt-5">
                  <JournalStat label="Behavior Notes" value={creature.behavior} />
                  <JournalStat
                    label={uploadedImage ? "Uploaded Image" : "Image Path"}
                    value={uploadedImage ? "Browser upload saved for this device" : creature.image}
                  />
                  <p className="text-xs leading-5 text-creamcap/45">
                    Uploads preview directly on this card and persist in this browser. For a permanent
                    site image, add the file under /public/images/bestiary and update the image path in
                    data/bestiaryData.ts.
                  </p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
}

function CreatureImage({
  creature,
  accent,
  uploadedImage,
  onImageUpload,
  onImageRemove
}: {
  creature: BestiaryCreature;
  accent: { primary: string; secondary: string; glow: string; mist: string };
  uploadedImage?: string;
  onImageUpload: (file: File) => void;
  onImageRemove: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imageSource = uploadedImage || creature.image;
  const showImage = imageSource && !failed;

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [imageSource]);

  return (
    <div
      className="relative h-64 overflow-hidden"
      style={{
        background:
          `radial-gradient(circle at 34% 24%, ${accent.glow}, transparent 10rem), ` +
          `linear-gradient(145deg, ${accent.primary}42, #050807 66%), ` +
          `linear-gradient(45deg, ${accent.secondary}2f, transparent)`
      }}
    >
      <div className="absolute inset-0 bestiary-card-texture opacity-80" />
      {showImage ? (
        // Future art replacement: update creature.image in data/bestiaryData.ts.
        <img
          src={imageSource}
          alt={creature.name}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}
      {!loaded || failed ? (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div>
            <ImageIcon className="mx-auto mb-3 size-10" style={{ color: accent.secondary }} aria-hidden="true" />
            <p className="font-serif text-2xl text-creamcap">Image Coming Soon</p>
            <p className="mt-2 text-xs leading-5 text-creamcap/54">{creature.image}</p>
          </div>
        </div>
      ) : null}
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-creamcap/50 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        <label className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-creamcap/15 bg-[#030706]/72 px-4 text-xs font-bold uppercase tracking-[0.12em] text-creamcap/82 backdrop-blur transition hover:border-current hover:text-creamcap">
          <Upload className="size-4" aria-hidden="true" />
          {uploadedImage ? "Replace Image" : "Upload Image"}
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (file) {
                onImageUpload(file);
              }

              event.currentTarget.value = "";
            }}
          />
        </label>
        {uploadedImage ? (
          <button
            type="button"
            onClick={onImageRemove}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-creamcap/15 bg-[#030706]/72 px-4 text-xs font-bold uppercase tracking-[0.12em] text-creamcap/74 backdrop-blur transition hover:border-red-300/50 hover:text-red-200"
          >
            <Trash2 className="size-4" aria-hidden="true" />
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
}

function DiscoveryBadge({ discovered, accent }: { discovered: boolean; accent: string }) {
  return (
    <motion.span
      className="inline-flex items-center gap-2 rounded-full border border-creamcap/10 bg-creamcap/5 px-3 py-1 text-xs text-creamcap/72"
      animate={discovered ? { boxShadow: [`0 0 0px ${accent}`, `0 0 18px ${accent}`, `0 0 0px ${accent}`] } : {}}
      transition={{ duration: 2.4, repeat: Infinity }}
    >
      <Sparkles className="size-3" style={{ color: accent }} aria-hidden="true" />
      {discovered ? "Discovered" : "Undiscovered"}
    </motion.span>
  );
}

function JournalStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-creamcap/10 bg-[#efe4c6]/[0.045] p-3">
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-creamcap/38">{label}</p>
      <p className="text-sm leading-5 text-creamcap/74">{value}</p>
    </div>
  );
}

function BestiaryParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[var(--bestiary-secondary)] shadow-[0_0_16px_var(--bestiary-secondary)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{ y: [-10, -126], x: [0, particle.id % 2 ? 20 : -20], opacity: [0, 0.65, 0] }}
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

function BestiaryRoots() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden opacity-60">
      {[0, 1, 2, 3].map((root) => (
        <motion.div
          key={root}
          className="absolute h-32 w-[48rem] rounded-full border-t border-[var(--bestiary-secondary)]/35 blur-[1px]"
          style={{
            left: `${-18 + root * 26}%`,
            top: `${18 + root * 18}%`,
            rotate: `${-16 + root * 8}deg`
          }}
          animate={{ x: [0, 26, 0], opacity: [0.14, 0.38, 0.14] }}
          transition={{ duration: 8 + root, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
