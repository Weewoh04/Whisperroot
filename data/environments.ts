export type EnvironmentCategory = "Settlements" | "Forests" | "Underground" | "Dangerous" | "Endgame";

export type Environment = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  mood: string;
  biomeType: string;
  category: EnvironmentCategory;
  colorPalette: string[];
  creatures: string[];
  gameplayMechanics: string[];
  majorLandmark: string;
  loreHook: string;
  visualStyle: string;
  discoveryLevel: string;
  regionDifficulty: string;
  landmarks: string[];
  hazards: string[];
  resources: string[];
  connectedOrigins: string[];
  imagePlaceholder: string;
  palette: {
    primary: string;
    secondary: string;
    glow: string;
    mist: string;
  };
};

export const environments: Environment[] = [
  {
    id: "env-hollow-basin",
    name: "The Hollow Basin",
    slug: "the-hollow-basin",
    shortDescription: "A sacred central hub built around the exposed glowing Heartroot.",
    longDescription:
      "A massive hollowed basin built around an exposed glowing Heartroot. All origins eventually gather here. Markets, bridges, shrines, waterfalls, faction banners, and root platforms fill the space.",
    mood: "Alive, crowded, sacred, ancient",
    biomeType: "Central Hub / Common Ground",
    category: "Settlements",
    colorPalette: ["Glowing teal", "Root amber", "Market banner red"],
    creatures: ["Lantern bugs", "Root stags", "Tiny ambient sprites", "Companion creatures"],
    gameplayMechanics: ["Player hub", "Faction quests", "Trading", "Crafting", "Companion management", "Story convergence"],
    majorLandmark: "The Heartroot",
    loreHook: "All paths lead here. All stories begin again.",
    visualStyle: "Glowing teal roots, waterfalls, wooden bridges, lanterns, banners, crowded fantasy market.",
    discoveryLevel: "Open after first origin chapter",
    regionDifficulty: "Haven",
    landmarks: ["The Heartroot", "Moonwater Market", "Faction Banner Walk"],
    hazards: ["Crowded ledges", "Unstable root lifts", "Old shrine locks"],
    resources: ["Trade tokens", "Heartroot sap", "Bridge timber", "Companion charms"],
    connectedOrigins: ["Rootborn", "Fungalkin", "Bloomfolk", "Ancient Blood", "Emberborn", "Rootwarden"],
    imagePlaceholder: "A vast basin of teal roots, waterfalls, bridges, lanterns, and crowded market platforms.",
    palette: {
      primary: "#29d5c7",
      secondary: "#f1bb63",
      glow: "rgba(41, 213, 199, 0.36)",
      mist: "rgba(241, 187, 99, 0.13)"
    }
  },
  {
    id: "env-rootkin-forest-village",
    name: "Rootkin Forest Village",
    slug: "rootkin-forest-village",
    shortDescription: "A warm settlement grown into enormous roots, ancient trunks, and lantern-lit canopy bridges.",
    longDescription:
      "A village grown into enormous living roots and ancient trees. Homes are woven into trunks, lantern insects glow at night, and root bridges connect the canopy.",
    mood: "Warm, safe, mystical, alive",
    biomeType: "Starting Forest Settlement",
    category: "Forests",
    colorPalette: ["Warm green", "Amber light", "Moss shadow"],
    creatures: ["Moss deer", "Lantern insects", "Root squirrels", "Forest spirits"],
    gameplayMechanics: ["Beginner exploration", "Climbing", "Gathering", "Creature bonding", "Rootsense tutorial"],
    majorLandmark: "The Heartroot Tree",
    loreHook: "The trees have started whispering again.",
    visualStyle: "Warm greens, amber light, moss, hanging lanterns, cozy tree homes.",
    discoveryLevel: "Origin start",
    regionDifficulty: "Gentle",
    landmarks: ["The Heartroot Tree", "Lantern Insect Walk", "Rootkin Hearthring"],
    hazards: ["Sleepy thornbrush", "High root bridges", "Whispering bark doors"],
    resources: ["Glowmoss", "Sap beads", "Forest herbs", "Lantern husks"],
    connectedOrigins: ["Rootborn", "Bloomfolk", "Rootwarden"],
    imagePlaceholder: "Cozy homes woven into giant roots under amber lantern insects and mossy bridges.",
    palette: {
      primary: "#6faa5f",
      secondary: "#f4b85f",
      glow: "rgba(244, 184, 95, 0.38)",
      mist: "rgba(111, 170, 95, 0.16)"
    }
  },
  {
    id: "env-fungal-kingdom",
    name: "The Fungal Kingdom",
    slug: "the-fungal-kingdom",
    shortDescription: "A thinking underground civilization of bioluminescent mushrooms, spores, and memory networks.",
    longDescription:
      "A vast underground kingdom of towering mushrooms, glowing spores, fungal bridges, and living mycelial networks. The entire biome seems to think and remember.",
    mood: "Dreamlike, strange, intelligent, beautiful",
    biomeType: "Bioluminescent Underground Civilization",
    category: "Underground",
    colorPalette: ["Bioluminescent blue", "Violet", "Spore green"],
    creatures: ["Puffcaps", "Spore whales", "Fungal grotto dwellers", "Mycelial crawlers"],
    gameplayMechanics: ["Spore drift", "Memory echoes", "Bounce mushrooms", "Toxic spore resistance", "Hidden fungal paths"],
    majorLandmark: "The Mycelial Crown",
    loreHook: "The fungus remembers what the world buried.",
    visualStyle: "Purple, blue, green bioluminescence, glowing mushrooms, drifting spores, underground lakes.",
    discoveryLevel: "Early hidden route",
    regionDifficulty: "Curious",
    landmarks: ["The Mycelial Crown", "Glowcap Reservoir", "Spore Choir Vault"],
    hazards: ["Toxic bloom clouds", "Sleep spores", "Living maze bridges"],
    resources: ["Glowspores", "Mooncap fiber", "Memory dew", "Fungal resin"],
    connectedOrigins: ["Fungalkin", "Ancient Blood"],
    imagePlaceholder: "Towering blue and violet mushrooms above an underground lake full of drifting spores.",
    palette: {
      primary: "#61d5d1",
      secondary: "#8b7df0",
      glow: "rgba(97, 213, 209, 0.38)",
      mist: "rgba(139, 125, 240, 0.17)"
    }
  },
  {
    id: "env-bloomwild-canopies",
    name: "Bloomwild Canopies",
    slug: "bloomwild-canopies",
    shortDescription: "A radiant treetop world of flowers, floating petals, vine bridges, and healing light.",
    longDescription:
      "A high forest canopy filled with giant blooming flowers, vine bridges, floating petals, sunlit platforms, and creatures nesting inside massive blossoms.",
    mood: "Gentle, radiant, airy, enchanted",
    biomeType: "Flowering Canopy World",
    category: "Forests",
    colorPalette: ["Soft pink", "Golden light", "Leaf green"],
    creatures: ["Petal gliders", "Blossom moths", "Nectar sprites", "Canopy deer"],
    gameplayMechanics: ["Gliding", "Petal traversal", "Healing flowers", "Creature calming", "Vertical exploration"],
    majorLandmark: "The Moonbloom Shrine",
    loreHook: "The petals are falling too early.",
    visualStyle: "Soft pinks, gold light, giant flowers, floating petals, glowing pollen.",
    discoveryLevel: "Mid canopy ascent",
    regionDifficulty: "Graceful",
    landmarks: ["The Moonbloom Shrine", "Petalfall Bridges", "Nectar Bell Towers"],
    hazards: ["Sudden wind shears", "Wilting platforms", "Pollen mirages"],
    resources: ["Moonbloom petals", "Nectar glass", "Vine silk", "Golden pollen"],
    connectedOrigins: ["Bloomfolk", "Rootborn"],
    imagePlaceholder: "Sunlit giant blossoms, petal bridges, glowing pollen, and treetop creature nests.",
    palette: {
      primary: "#f0a6c8",
      secondary: "#f7d46b",
      glow: "rgba(240, 166, 200, 0.34)",
      mist: "rgba(247, 212, 107, 0.15)"
    }
  },
  {
    id: "env-crystal-caverns",
    name: "Crystal Caverns",
    slug: "crystal-caverns",
    shortDescription: "Quiet resonance ruins where blue crystals preserve voices from the past.",
    longDescription:
      "A vast system of glowing crystal caverns, underground lakes, ancient ruins, and resonance chambers. The crystals preserve voices from the past.",
    mood: "Sacred, quiet, echoing, mysterious",
    biomeType: "Resonant Underground Ruins",
    category: "Underground",
    colorPalette: ["Cold blue", "Crystal violet", "Ancient stone"],
    creatures: ["Crystal serpents", "Echo bats", "Glass minnows", "Resonance moths"],
    gameplayMechanics: ["Light reflection puzzles", "Sound resonance", "Ancient machinery", "Echo Memory", "Crystal bridge activation"],
    majorLandmark: "The Sleeping Crystal Serpent",
    loreHook: "The crystals remember voices that should be gone.",
    visualStyle: "Blue crystals, reflective water, ancient stone, glowing runes, sacred silence.",
    discoveryLevel: "Midgame resonance key",
    regionDifficulty: "Measured",
    landmarks: ["The Sleeping Crystal Serpent", "Mirrorlake Ruins", "Resonance Chamber"],
    hazards: ["Echo loops", "Fracturing crystal bridges", "Rune-locked machinery"],
    resources: ["Resonance shards", "Blue crystal", "Rune dust", "Glasswater"],
    connectedOrigins: ["Ancient Blood", "Rootwarden"],
    imagePlaceholder: "Cold blue crystal ruins reflected in still water around a sleeping crystal serpent.",
    palette: {
      primary: "#78b8ff",
      secondary: "#bca2ff",
      glow: "rgba(120, 184, 255, 0.38)",
      mist: "rgba(188, 162, 255, 0.14)"
    }
  },
  {
    id: "env-whispering-swamps",
    name: "The Whispering Swamps",
    slug: "the-whispering-swamps",
    shortDescription: "A haunted marsh where fog bends reality and lights are never fully trustworthy.",
    longDescription:
      "A dangerous swamp where fog bends reality, lanterns lead travelers astray, and the water hides ancient creatures. The swamp remembers what others forgot.",
    mood: "Foggy, unsettling, alive, haunted",
    biomeType: "Haunted Marsh / Memory Biome",
    category: "Dangerous",
    colorPalette: ["Dark green", "Ghost light", "Black water"],
    creatures: ["Toxic Bloom", "Mudwalker", "Gulf Snapjaw", "Swamp Wisp", "Bog Hag", "Bile Belcher", "Mosswart Frog", "Swamp Skeeter", "Root Leech"],
    gameplayMechanics: ["Fog navigation", "Lantern management", "Hallucinations", "Hidden water threats", "Sound-based tracking", "Swamp memory zones"],
    majorLandmark: "The Sunken Cathedral",
    loreHook: "Never follow lights in the fog.",
    visualStyle: "Dark greens, glowing swamp lights, fog, moss, black water, ruined wooden walkways.",
    discoveryLevel: "Danger route",
    regionDifficulty: "Perilous",
    landmarks: ["The Sunken Cathedral", "Wispwater Docks", "Broken Bell Causeway"],
    hazards: ["False lanterns", "Blackwater ambushes", "Memory hallucinations", "Toxic blooms"],
    resources: ["Swamp oil", "Wisp reeds", "Bog iron", "Cathedral moss"],
    connectedOrigins: ["Fungalkin", "Ancient Blood"],
    imagePlaceholder: "Black swamp water, ruined walkways, thick fog, and green lantern lights around a sunken cathedral.",
    palette: {
      primary: "#3b7f5a",
      secondary: "#9ff1b8",
      glow: "rgba(159, 241, 184, 0.29)",
      mist: "rgba(59, 127, 90, 0.22)"
    }
  },
  {
    id: "env-dead-forest-sanctuary",
    name: "Dead Forest Sanctuary",
    slug: "dead-forest-sanctuary",
    shortDescription: "A wounded ancient forest of ash, black trees, broken shrines, and mourning echoes.",
    longDescription:
      "A silent forest of blackened trees, ash-covered roots, broken shrines, and memory echoes. The land feels like it is mourning something.",
    mood: "Lonely, wounded, tragic, ancient",
    biomeType: "Corrupted Ancient Forest",
    category: "Dangerous",
    colorPalette: ["Ash gray", "Pale blue", "Black bark"],
    creatures: ["Hollow Elk", "Shadow moths", "Deadroot crawlers", "Ash spirits"],
    gameplayMechanics: ["Corruption cleansing", "Memory echoes", "Stealth", "Emotional story discovery", "Purification puzzles"],
    majorLandmark: "The Hollow Elk Grove",
    loreHook: "Something wounded the world here.",
    visualStyle: "Black trees, gray fog, pale blue glow, ash, dead leaves, haunted beauty.",
    discoveryLevel: "Late story wound",
    regionDifficulty: "Sorrowful",
    landmarks: ["The Hollow Elk Grove", "Ashen Prayer Rings", "Broken Root Shrine"],
    hazards: ["Corruption thorns", "Ash blindness", "Mourning echoes"],
    resources: ["Pale ash", "Broken shrine stone", "Spirit resin", "Cleansed bark"],
    connectedOrigins: ["Rootwarden", "Ancient Blood"],
    imagePlaceholder: "Blackened trees and broken shrines under gray fog with pale blue spirit light.",
    palette: {
      primary: "#7d98aa",
      secondary: "#b8e8ff",
      glow: "rgba(184, 232, 255, 0.27)",
      mist: "rgba(125, 152, 170, 0.18)"
    }
  },
  {
    id: "env-emberwild-basin",
    name: "Emberwild Basin",
    slug: "emberwild-basin",
    shortDescription: "A volcanic canyon settlement of molten rivers, forge lanterns, and unstable stone bridges.",
    longDescription:
      "A volcanic basin of molten rivers, cracked stone bridges, ash storms, forge settlements, and ancient fire-root structures buried beneath the lava.",
    mood: "Harsh, fiery, resilient, unstable",
    biomeType: "Volcanic Canyon Settlement",
    category: "Dangerous",
    colorPalette: ["Molten orange", "Black volcanic rock", "Ash gray"],
    creatures: ["Ember lizards", "Ash beetles", "Fire moths", "Volcanic burrowers"],
    gameplayMechanics: ["Heat resistance", "Cinderstep dash", "Stamina traversal", "Lava hazards", "Bridge repair events"],
    majorLandmark: "The Deep Forge",
    loreHook: "The deep fire remembers us.",
    visualStyle: "Molten orange, black volcanic rock, ash, forge lanterns, lava rivers.",
    discoveryLevel: "Heat-gated route",
    regionDifficulty: "Volatile",
    landmarks: ["The Deep Forge", "Cinderstep Span", "Ashstorm Watch"],
    hazards: ["Lava surges", "Ash storms", "Collapsing basalt bridges"],
    resources: ["Forge glass", "Ember ore", "Ash silk", "Fire-root charcoal"],
    connectedOrigins: ["Emberborn"],
    imagePlaceholder: "Black volcanic rock, lava rivers, forge settlements, and orange embers in ash storms.",
    palette: {
      primary: "#ff8b3d",
      secondary: "#ffd06d",
      glow: "rgba(255, 139, 61, 0.42)",
      mist: "rgba(255, 208, 109, 0.12)"
    }
  },
  {
    id: "env-rootwarden-sanctuary",
    name: "Rootwarden Sanctuary",
    slug: "rootwarden-sanctuary",
    shortDescription: "A hidden guardian stronghold around sealed Rootways, sacred stone, and green-gold fog.",
    longDescription:
      "A hidden sanctuary built around sealed Rootways, ancient stone halls, fog-covered training grounds, and root-carved gates guarded for generations.",
    mood: "Sacred, disciplined, hidden, old",
    biomeType: "Ancient Guardian Stronghold",
    category: "Settlements",
    colorPalette: ["Green-gold", "Sacred stone", "Fog white"],
    creatures: ["Root constructs", "Guardian beetles", "Warding sprites", "Ancient root hounds"],
    gameplayMechanics: ["Rootbind", "Defensive combat", "Corruption resistance", "Ancient gate puzzles", "Rootway traversal"],
    majorLandmark: "The Lower Rootway Gate",
    loreHook: "If the roots whisper, do not answer.",
    visualStyle: "Ancient stone, sacred roots, fog, worn banners, green-gold light.",
    discoveryLevel: "Guardian oath",
    regionDifficulty: "Disciplined",
    landmarks: ["The Lower Rootway Gate", "Warden Training Stones", "Oathbanner Hall"],
    hazards: ["Trial constructs", "Ancient wards", "Rootway pressure locks"],
    resources: ["Warden bark", "Gate stone", "Oath thread", "Sacred moss"],
    connectedOrigins: ["Rootwarden", "Rootborn"],
    imagePlaceholder: "Ancient root-carved gates, worn banners, sacred stone halls, and foggy training grounds.",
    palette: {
      primary: "#9aaf8f",
      secondary: "#d8c38f",
      glow: "rgba(216, 195, 143, 0.35)",
      mist: "rgba(154, 175, 143, 0.18)"
    }
  },
  {
    id: "env-floating-sky-settlements",
    name: "Floating Sky Settlements",
    slug: "floating-sky-settlements",
    shortDescription: "Aerial islands, wind currents, astronomy towers, and lonely golden ruins above the world.",
    longDescription:
      "Floating islands suspended above the world, connected by wind currents, root bridges, ancient astronomy towers, and sky creature migration paths.",
    mood: "Free, breathtaking, lonely, celestial",
    biomeType: "Aerial Islands / Ancient Sky Ruins",
    category: "Settlements",
    colorPalette: ["Sky blue", "Golden light", "Cloud white"],
    creatures: ["Sky manta rays", "Cloud moths", "Wind deer", "Floating reef creatures"],
    gameplayMechanics: ["Gliding", "Sky riding", "Wind currents", "Aerial puzzles", "Vertical exploration"],
    majorLandmark: "The Weeping Colossus",
    loreHook: "The sky broke before the world forgot.",
    visualStyle: "Clouds, floating islands, ancient towers, golden light, blue sky, drifting ruins.",
    discoveryLevel: "High traversal mastery",
    regionDifficulty: "Breathtaking",
    landmarks: ["The Weeping Colossus", "Starwheel Tower", "Windroot Bridges"],
    hazards: ["Broken wind currents", "Falling ruins", "Thin-air stamina drains"],
    resources: ["Cloudstone", "Sky reef pearl", "Windroot fiber", "Sunlit brass"],
    connectedOrigins: ["Bloomfolk", "Ancient Blood"],
    imagePlaceholder: "Floating islands, cloud bridges, ancient towers, and golden light around a weeping colossus.",
    palette: {
      primary: "#8ecaff",
      secondary: "#ffd77a",
      glow: "rgba(142, 202, 255, 0.34)",
      mist: "rgba(255, 215, 122, 0.13)"
    }
  },
  {
    id: "env-ancient-deep-below",
    name: "Ancient Deep Below",
    slug: "ancient-deep-below",
    shortDescription: "The endgame buried world around colossal ruins, golden roots, and the wounded Worldroot.",
    longDescription:
      "The deepest layer of Whisperroot. A buried world of ancient ruins, colossal root systems, sleeping beings, glowing waterways, and the wounded core of the Worldroot.",
    mood: "Massive, sacred, terrifying, forgotten",
    biomeType: "Endgame Underground World / Ancient Civilization",
    category: "Endgame",
    colorPalette: ["Golden roots", "Deep teal", "Temple shadow"],
    creatures: ["Ancient root leviathans", "Deep wisps", "Crystal-backed giants", "Dormant titans"],
    gameplayMechanics: ["Reality distortion", "Ancient machinery", "Final root restoration", "Massive traversal puzzles", "Memory reconstruction"],
    majorLandmark: "The Wounded Worldroot",
    loreHook: "The roots remember. The whispers never left.",
    visualStyle: "Dark caverns, glowing golden roots, teal waterways, colossal ruins, ancient temples, enormous scale.",
    discoveryLevel: "Endgame",
    regionDifficulty: "Mythic",
    landmarks: ["The Wounded Worldroot", "Titan Sleep Vaults", "First Root Temple"],
    hazards: ["Reality folds", "Ancient defense engines", "Rootsong storms"],
    resources: ["Worldroot light", "Deep crystal", "Ancient glyph cores", "Titan moss"],
    connectedOrigins: ["Rootborn", "Fungalkin", "Bloomfolk", "Ancient Blood", "Emberborn", "Rootwarden"],
    imagePlaceholder: "Colossal underground temples, golden roots, teal waterways, and the wounded Worldroot at impossible scale.",
    palette: {
      primary: "#15b8a6",
      secondary: "#f5c15f",
      glow: "rgba(245, 193, 95, 0.35)",
      mist: "rgba(21, 184, 166, 0.18)"
    }
  }
];

export function getEnvironmentBySlug(slug: string) {
  return environments.find((environment) => environment.slug === slug);
}
