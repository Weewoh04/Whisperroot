export type Origin = {
  id: string;
  name: string;
  theme: string;
  startingRegion: string;
  gameplayStyle: string;
  passiveTraits: string[];
  activeAbility: {
    name: string;
    description: string;
  };
  lateGameEvolution: string;
  environmentalAffinity: string;
  visualStyle: string;
  symbol: "root" | "spore" | "bloom" | "crystal" | "ember" | "warden";
  palette: {
    primary: string;
    secondary: string;
    glow: string;
    mist: string;
  };
  imagePlaceholder: string;
};

export const origins: Origin[] = [
  {
    id: "rootborn",
    name: "Rootborn",
    theme: "Forest-connected beings deeply tied to the Worldroot.",
    startingRegion: "Rootkin Forest Village",
    gameplayStyle: "Exploration / Creature Bonding / Nature Traversal",
    passiveTraits: ["Forest Affinity", "Creature Trust", "Natural Gatherer"],
    activeAbility: {
      name: "Rootsense",
      description: "Reveal hidden roots, pathways, and buried objects."
    },
    lateGameEvolution: "Worldsong",
    environmentalAffinity: "Ancient forests, rootways, mossy groves",
    visualStyle: "Warm greens, glowing amber roots, moss, lantern insects.",
    symbol: "root",
    palette: {
      primary: "#6faa5f",
      secondary: "#f4b85f",
      glow: "rgba(244, 184, 95, 0.46)",
      mist: "rgba(111, 170, 95, 0.18)"
    },
    imagePlaceholder: "A moss-cloaked forest heir standing before glowing amber Worldroot veins."
  },
  {
    id: "fungalkin",
    name: "Fungalkin",
    theme: "Symbiotic wanderers connected to ancient fungal networks.",
    startingRegion: "The Fungal Kingdom",
    gameplayStyle: "Stealth / Healing / Memory Discovery",
    passiveTraits: ["Spore Resistance", "Glowspore Body", "Symbiotic Healing"],
    activeAbility: {
      name: "Spore Drift",
      description: "Reveal hidden creatures and memory echoes with glowing spores."
    },
    lateGameEvolution: "Mycelial Link",
    environmentalAffinity: "Fungal caverns, damp marshes, hidden memory groves",
    visualStyle: "Bioluminescent blues, mushrooms, spores, underground glow.",
    symbol: "spore",
    palette: {
      primary: "#61d5d1",
      secondary: "#8b7df0",
      glow: "rgba(97, 213, 209, 0.42)",
      mist: "rgba(139, 125, 240, 0.18)"
    },
    imagePlaceholder: "A blue-lit fungal wanderer surrounded by drifting spores and towering caps."
  },
  {
    id: "bloomfolk",
    name: "Bloomfolk",
    theme: "Canopy-dwelling beings infused with life magic.",
    startingRegion: "Bloomwild Canopies",
    gameplayStyle: "Healing / Gliding / Support Magic",
    passiveTraits: ["Gentle Presence", "Petal Glide", "Bloomcraft"],
    activeAbility: {
      name: "Bloomcall",
      description: "Summon magical flowers that heal and illuminate."
    },
    lateGameEvolution: "Verdant Awakening",
    environmentalAffinity: "Canopies, flower bridges, sunlit vine paths",
    visualStyle: "Soft pinks, flowers, petals, golden light, magical vines.",
    symbol: "bloom",
    palette: {
      primary: "#f0a6c8",
      secondary: "#f7d46b",
      glow: "rgba(240, 166, 200, 0.42)",
      mist: "rgba(247, 212, 107, 0.16)"
    },
    imagePlaceholder: "A petal-winged canopy guardian gliding through golden blossoms."
  },
  {
    id: "ancient-blood",
    name: "Ancient Blood",
    theme: "Descendants of the forgotten civilization that wounded the world.",
    startingRegion: "Crystal Cavern Ruins",
    gameplayStyle: "Lore Discovery / Ancient Technology / Resonance Powers",
    passiveTraits: ["Ancient Recognition", "Resonance Sight", "Forgotten Tongue"],
    activeAbility: {
      name: "Echo Memory",
      description: "Replay fragments of the past to reveal secrets."
    },
    lateGameEvolution: "Resonant Shift",
    environmentalAffinity: "Crystal ruins, buried temples, resonance gates",
    visualStyle: "Ancient crystal ruins, glowing runes, cold blues, forgotten technology.",
    symbol: "crystal",
    palette: {
      primary: "#78b8ff",
      secondary: "#bca2ff",
      glow: "rgba(120, 184, 255, 0.44)",
      mist: "rgba(188, 162, 255, 0.15)"
    },
    imagePlaceholder: "A rune-marked descendant before cold blue crystal machinery."
  },
  {
    id: "emberborn",
    name: "Emberborn",
    theme: "Survivors forged within volcanic lands and ancient fire.",
    startingRegion: "Emberwild Basin",
    gameplayStyle: "Aggressive Traversal / Mobility / Environmental Survival",
    passiveTraits: ["Heat Resistance", "Endless Ember", "Ashwalker"],
    activeAbility: {
      name: "Cinderstep",
      description: "Dash forward in a burst of embers."
    },
    lateGameEvolution: "Heartfire Surge",
    environmentalAffinity: "Volcanic basins, ash fields, molten root scars",
    visualStyle: "Volcanic stone, embers, ash storms, molten orange glow.",
    symbol: "ember",
    palette: {
      primary: "#ff8b3d",
      secondary: "#ffd06d",
      glow: "rgba(255, 139, 61, 0.48)",
      mist: "rgba(255, 208, 109, 0.14)"
    },
    imagePlaceholder: "A fire-forged traveler crossing black stone under molten orange light."
  },
  {
    id: "rootwarden",
    name: "Rootwarden",
    theme: "Ancient protectors guarding the sacred Rootways.",
    startingRegion: "Rootwarden Sanctuary",
    gameplayStyle: "Defense / Traversal / Environmental Control",
    passiveTraits: ["Guardian Instinct", "Rootway Training", "Hardened Spirit"],
    activeAbility: {
      name: "Rootbind",
      description: "Summon roots to restrain enemies and stabilize structures."
    },
    lateGameEvolution: "Ancient Warden Form",
    environmentalAffinity: "Sacred rootways, stone sanctuaries, fog-heavy ruins",
    visualStyle: "Ancient armor, roots, foggy sanctuaries, sacred stone ruins.",
    symbol: "warden",
    palette: {
      primary: "#9aaf8f",
      secondary: "#d8c38f",
      glow: "rgba(216, 195, 143, 0.38)",
      mist: "rgba(154, 175, 143, 0.16)"
    },
    imagePlaceholder: "An ancient armored protector standing among roots, fog, and sacred stones."
  }
];
