export type BestiaryCategory =
  | "Ambient"
  | "Passive Wildlife"
  | "Territorial"
  | "Traversal"
  | "Corrupted"
  | "Ancient"
  | "Legendary";

export type BestiaryEnvironment =
  | "Rootkin Forest Village"
  | "The Fungal Kingdom"
  | "Bloomwild Canopies"
  | "Crystal Caverns"
  | "The Whispering Swamps"
  | "Dead Forest Sanctuary"
  | "Emberwild Basin"
  | "Rootwarden Sanctuary"
  | "Floating Sky Settlements"
  | "Ancient Deep Below";

export type BestiaryCreature = {
  id: string;
  name: string;
  slug: string;
  environment: BestiaryEnvironment;
  category: BestiaryCategory;
  temperament: string;
  gameplayRole: string;
  image: string;
  description: string;
  behavior: string;
  discovered: boolean;
};

export const bestiaryCategories: Array<"All" | BestiaryCategory> = [
  "All",
  "Ambient",
  "Passive Wildlife",
  "Territorial",
  "Traversal",
  "Corrupted",
  "Ancient",
  "Legendary"
];

export const bestiaryEnvironments: BestiaryEnvironment[] = [
  "Rootkin Forest Village",
  "The Fungal Kingdom",
  "Bloomwild Canopies",
  "Crystal Caverns",
  "The Whispering Swamps",
  "Dead Forest Sanctuary",
  "Emberwild Basin",
  "Rootwarden Sanctuary",
  "Floating Sky Settlements",
  "Ancient Deep Below"
];

export const environmentAccents: Record<
  BestiaryEnvironment,
  { primary: string; secondary: string; glow: string; mist: string }
> = {
  "Rootkin Forest Village": {
    primary: "#48b86f",
    secondary: "#f4b85f",
    glow: "rgba(72, 184, 111, 0.36)",
    mist: "rgba(244, 184, 95, 0.14)"
  },
  "The Fungal Kingdom": {
    primary: "#8b7df0",
    secondary: "#61d5d1",
    glow: "rgba(139, 125, 240, 0.34)",
    mist: "rgba(97, 213, 209, 0.16)"
  },
  "Bloomwild Canopies": {
    primary: "#f0a6c8",
    secondary: "#f7d46b",
    glow: "rgba(240, 166, 200, 0.33)",
    mist: "rgba(247, 212, 107, 0.14)"
  },
  "Crystal Caverns": {
    primary: "#78d8ff",
    secondary: "#d8e8ef",
    glow: "rgba(120, 216, 255, 0.32)",
    mist: "rgba(216, 232, 239, 0.13)"
  },
  "The Whispering Swamps": {
    primary: "#557f5f",
    secondary: "#9eddf2",
    glow: "rgba(158, 221, 242, 0.27)",
    mist: "rgba(85, 127, 95, 0.22)"
  },
  "Dead Forest Sanctuary": {
    primary: "#8f9ba4",
    secondary: "#b8e8ff",
    glow: "rgba(184, 232, 255, 0.25)",
    mist: "rgba(143, 155, 164, 0.17)"
  },
  "Emberwild Basin": {
    primary: "#ff8b3d",
    secondary: "#1b1714",
    glow: "rgba(255, 139, 61, 0.42)",
    mist: "rgba(255, 208, 109, 0.12)"
  },
  "Rootwarden Sanctuary": {
    primary: "#1f6e4a",
    secondary: "#d8c38f",
    glow: "rgba(216, 195, 143, 0.34)",
    mist: "rgba(31, 110, 74, 0.2)"
  },
  "Floating Sky Settlements": {
    primary: "#8ecaff",
    secondary: "#ffe3a1",
    glow: "rgba(142, 202, 255, 0.32)",
    mist: "rgba(255, 227, 161, 0.13)"
  },
  "Ancient Deep Below": {
    primary: "#15b8a6",
    secondary: "#f5c15f",
    glow: "rgba(21, 184, 166, 0.34)",
    mist: "rgba(245, 193, 95, 0.14)"
  }
};

const roleByCategory: Record<BestiaryCategory, string> = {
  Ambient: "Atmosphere / Navigation",
  "Passive Wildlife": "Ecosystem Life / Gentle Interaction",
  Territorial: "Environmental Pressure / Encounter Design",
  Traversal: "Movement / Route Discovery",
  Corrupted: "Threat / Story Wound",
  Ancient: "Mythic Lore / World Memory",
  Legendary: "Major Encounter / Living Landmark"
};

const temperamentByCategory: Record<BestiaryCategory, string> = {
  Ambient: "Harmless",
  "Passive Wildlife": "Gentle",
  Territorial: "Defensive",
  Traversal: "Bondable",
  Corrupted: "Unstable",
  Ancient: "Mysterious",
  Legendary: "Mythic"
};

const behaviorByCategory: Record<BestiaryCategory, string> = {
  Ambient: "Gathers near safe paths, old roots, lantern posts, and quiet pockets of magic.",
  "Passive Wildlife": "Avoids conflict unless startled, often revealing how the local ecosystem is supposed to function.",
  Territorial: "Guards nesting grounds, feeding routes, ruins, or wounded places with escalating warnings.",
  Traversal: "Can become a movement ally once studied, calmed, or helped through a local quest.",
  Corrupted: "Moves erratically around damaged roots, memory scars, and places where the Whisper sounds wrong.",
  Ancient: "Appears rarely, often tied to ruins, old songs, sealed gates, or major environmental mysteries.",
  Legendary: "Shapes the region around it and may function as a dungeon, questline, or living landmark."
};

const descriptionByCategory: Record<BestiaryCategory, string> = {
  Ambient: "A small atmospheric creature that makes the region feel alive and subtly guides attentive travelers.",
  "Passive Wildlife": "A gentle creature woven into the local food web, daily rhythms, and regional mood.",
  Territorial: "A protective creature that turns exploration into a careful reading of space, sound, and warning signs.",
  Traversal: "A creature connected to movement, shortcuts, verticality, or region-specific traversal rituals.",
  Corrupted: "A wounded or altered creature showing how the Worldroot's damage changes living things.",
  Ancient: "An old being connected to memory, myth, and the deeper history of Whisperroot.",
  Legendary: "A rare presence whose scale and mystery make it feel closer to a place than a simple creature."
};

const groupedCreatures: Record<BestiaryEnvironment, Partial<Record<BestiaryCategory, string[]>>> = {
  "Rootkin Forest Village": {
    Ambient: ["Lantern Bugs", "Root Fireflies", "Moss Beetles", "Dew Sprites"],
    "Passive Wildlife": ["Moss Deer", "Bark Rabbits", "Root Squirrels", "Vine Gliders"],
    Territorial: ["Thornboars", "Root Stags", "Canopy Talons"],
    Traversal: ["Vineback Grazers", "Branchrunners"],
    Corrupted: ["Hollow Rootlings", "Blackbark Wolves"],
    Ancient: ["The Sleeping Mossback", "The Elder Antler"]
  },
  "The Fungal Kingdom": {
    Ambient: ["Glow Gnats", "Spore Mites", "Puff Wisps"],
    "Passive Wildlife": ["Puffcaps", "Spore Turtles", "Glowtoads", "Mycelial Slugs"],
    Territorial: ["Fungal Crawlers", "Rotmaws", "Sporeback Stalkers"],
    Traversal: ["Bouncecaps", "Spore Whales", "Tunnel Drifters"],
    Corrupted: ["Moldbound", "Fungal Grotto Dwellers"],
    Ancient: ["The Deep Mycelium", "The Crowned Spore Whale"]
  },
  "Bloomwild Canopies": {
    Ambient: ["Petal Wisps", "Nectar Bees", "Bloom Sprites"],
    "Passive Wildlife": ["Blossom Deer", "Petal Foxes", "Sunmoths", "Nectar Drakes"],
    Territorial: ["Thornwing Raptors", "Bloom Serpents", "Razorvine Cats"],
    Traversal: ["Canopy Gliders", "Petal Rays"],
    Corrupted: ["Wilted Bloomers", "Thornhollow Beasts"],
    Ancient: ["The Moonbloom Serpent", "The Canopy Mother"]
  },
  "Crystal Caverns": {
    Ambient: ["Echo Moths", "Crystal Minnows", "Resonance Beetles"],
    "Passive Wildlife": ["Glass Crawlers", "Prism Bats", "Crystal Grazers"],
    Territorial: ["Shardmaws", "Resonant Stalkers", "Crystal Drakes"],
    Traversal: ["Crystal Serpents", "Echo Rays"],
    Corrupted: ["Fractured Ones", "Resonance Wraiths"],
    Ancient: ["The Sleeping Crystal Serpent", "The Glass Titan"]
  },
  "The Whispering Swamps": {
    Ambient: ["Glowflies", "Mire Gnats", "Fog Leeches"],
    "Passive Wildlife": ["Mosswart Frogs", "Reed Turtles", "Bog Cranes"],
    Territorial: ["Gulf Snapjaws", "Mudwalkers", "Bile Belchers", "Toxic Blooms"],
    Traversal: ["Mire Striders", "Swamp Skippers"],
    Corrupted: ["Root Leeches", "Bog Huskers", "Swamp Wisps"],
    Ancient: ["The Miremother", "The Drowned Choir Beast"]
  },
  "Dead Forest Sanctuary": {
    Ambient: ["Ash Moths", "Whisper Crows", "Dust Wisps"],
    "Passive Wildlife": ["Pale Hares", "Hollow Foxes", "Bone Antler Elk"],
    Territorial: ["Shadow Stalkers", "Deadroot Crawlers", "Hollow Wolves"],
    Traversal: ["Ash Runners", "Spirit Elk"],
    Corrupted: ["The Hollow Elk", "Griefbound"],
    Ancient: ["The Weeping Grove Titan", "The Black Antler King"]
  },
  "Emberwild Basin": {
    Ambient: ["Emberflies", "Ash Beetles", "Spark Mites"],
    "Passive Wildlife": ["Magma Toads", "Ash Hounds", "Ember Lizards"],
    Territorial: ["Lava Burrowers", "Cinder Drakes", "Flamehorn Rams"],
    Traversal: ["Ashstriders", "Emberbacks"],
    Corrupted: ["Burnt Hollow", "Molten Huskers"],
    Ancient: ["The Deepfire Colossus", "The Ember Maw"]
  },
  "Rootwarden Sanctuary": {
    Ambient: ["Warding Wisps", "Stone Beetles", "Root Lantern Moths"],
    "Passive Wildlife": ["Root Hounds", "Moss Rams", "Grove Owls"],
    Territorial: ["Root Constructs", "Ancient Sentinels", "Guardian Crawlers"],
    Traversal: ["Rootclimbers", "Tunnel Crawlers"],
    Corrupted: ["Broken Wardens", "Rootbound Horrors"],
    Ancient: ["The Gatekeeper", "The Rootway Leviathan"]
  },
  "Floating Sky Settlements": {
    Ambient: ["Cloud Wisps", "Skyfire Butterflies", "Wind Motes"],
    "Passive Wildlife": ["Cloud Deer", "Feather Drifters", "Sky Rays"],
    Territorial: ["Storm Talons", "Wind Serpents", "Thunder Kites"],
    Traversal: ["Sky Manta Rays", "Cloudwhales"],
    Corrupted: ["Stormbound", "Hollow Fliers"],
    Ancient: ["The Weeping Colossus", "The Sky Leviathan"]
  },
  "Ancient Deep Below": {
    Ambient: ["Deep Wisps", "Glow Worms", "Root Spiders"],
    "Passive Wildlife": ["Root Grazers", "Blind Titanshells", "Crystal Crawlers"],
    Territorial: ["Abyss Watchers", "Root Devourers", "Deep Maw Serpents"],
    Traversal: ["Leviathan Walkers", "Root Swimmers"],
    Corrupted: ["Whisperbound", "Hollow Giants"],
    Ancient: ["The Wounded Worldroot", "The First Sleeper", "The Root Below"]
  }
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/^the\s+/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeCreature(
  name: string,
  environment: BestiaryEnvironment,
  category: BestiaryCategory
): BestiaryCreature {
  const environmentSlug = slugify(environment);
  const creatureSlug = slugify(name);

  return {
    id: `${environmentSlug}-${creatureSlug}`,
    name,
    slug: creatureSlug,
    environment,
    category,
    temperament: temperamentByCategory[category],
    gameplayRole: roleByCategory[category],
    // Replace images by dropping files into /public/images/bestiary and updating this path if needed.
    image: `/images/bestiary/${creatureSlug}.jpg`,
    description: descriptionByCategory[category],
    behavior: behaviorByCategory[category],
    discovered: category === "Ambient" || category === "Passive Wildlife" || category === "Traversal"
  };
}

export const bestiaryCreatures: BestiaryCreature[] = Object.entries(groupedCreatures).flatMap(
  ([environment, categories]) =>
    Object.entries(categories).flatMap(([category, names]) =>
      (names ?? []).map((name) =>
        makeCreature(name, environment as BestiaryEnvironment, category as BestiaryCategory)
      )
    )
);
