export type Creature = {
  id: string;
  name: string;
  slug: string;
  type: string;
  temperament: string;
  rarity: string;
  environment: string;
  description: string;
  abilities: string[];
  unlocks: string[];
  imagePlaceholder: string;
};

export const creatures: Creature[] = [
  {
    id: "creature-mossmote",
    name: "Mossmote",
    slug: "mossmote",
    type: "Sprite",
    temperament: "Helpful",
    rarity: "Common",
    environment: "Mossglow Glen",
    description: "A thumb-sized moss spirit that gathers on kind travelers like living freckles of green light.",
    abilities: ["Reveals hidden footpaths", "Calms startled seedlings"],
    unlocks: ["Moss Lantern recipe", "Glen friendship token"],
    imagePlaceholder: "A tiny glowing green sprite with mossy antennae."
  },
  {
    id: "creature-lantern-snail",
    name: "Lantern Snail",
    slug: "lantern-snail",
    type: "Mollusk",
    temperament: "Gentle",
    rarity: "Common",
    environment: "Mossglow Glen",
    description: "A slow companion with a shell that fills with warm light after sunset.",
    abilities: ["Lights dark paths", "Finds sap beads"],
    unlocks: ["Shellglass lamp", "Night forage routes"],
    imagePlaceholder: "A cozy snail with an amber glass shell."
  },
  {
    id: "creature-velvet-bogling",
    name: "Velvet Bogling",
    slug: "velvet-bogling",
    type: "Amphibian",
    temperament: "Curious",
    rarity: "Uncommon",
    environment: "Sporefall Marsh",
    description: "A plush marsh hopper that stores healing mud in cheek pouches.",
    abilities: ["Cleanses minor poison", "Bounces across sinking peat"],
    unlocks: ["Bog balm", "Marsh stepping trick"],
    imagePlaceholder: "A round teal bog creature with velvet moss fur."
  },
  {
    id: "creature-mooncap-mender",
    name: "Mooncap Mender",
    slug: "mooncap-mender",
    type: "Fungus",
    temperament: "Nurturing",
    rarity: "Rare",
    environment: "Sporefall Marsh",
    description: "A walking mushroom healer that patches broken leaves and bruised feelings.",
    abilities: ["Restores wilted plants", "Brews restorative spore tea"],
    unlocks: ["Mooncap clinic visit", "Gentle remedy recipes"],
    imagePlaceholder: "A cream mushroom person carrying violet medicine bottles."
  },
  {
    id: "creature-cinderbun",
    name: "Cinderbun",
    slug: "cinderbun",
    type: "Mammal",
    temperament: "Skittish",
    rarity: "Common",
    environment: "Emberfern Hills",
    description: "A warm little burrower whose ears glow brighter when it trusts you.",
    abilities: ["Warms cold soil", "Detects heat vents"],
    unlocks: ["Toasty burrow upgrade", "Spice root trail"],
    imagePlaceholder: "A small rabbit-like creature with ember-tipped ears."
  },
  {
    id: "creature-ashwing-moth",
    name: "Ashwing Moth",
    slug: "ashwing-moth",
    type: "Insect",
    temperament: "Aloof",
    rarity: "Uncommon",
    environment: "Emberfern Hills",
    description: "A smoky moth that drifts over warm grasses and leaves starry ash in its wake.",
    abilities: ["Marks safe camp spots", "Carries tiny messages"],
    unlocks: ["Ash ink", "Campfire signal posts"],
    imagePlaceholder: "A broad-winged moth with smoky amber patterns."
  },
  {
    id: "creature-crystal-toad",
    name: "Crystal Toad",
    slug: "crystal-toad",
    type: "Amphibian",
    temperament: "Stoic",
    rarity: "Rare",
    environment: "Moonmilk Caverns",
    description: "A mineral-backed toad that speaks only through soft bell-like croaks.",
    abilities: ["Resonates with sealed doors", "Stabilizes cave echoes"],
    unlocks: ["Crystal tuning fork", "Cavern door songs"],
    imagePlaceholder: "A stone toad with violet crystals growing along its back."
  },
  {
    id: "creature-hushback-elk",
    name: "Hushback Elk",
    slug: "hushback-elk",
    type: "Beast",
    temperament: "Protective",
    rarity: "Legendary",
    environment: "Moonmilk Caverns",
    description: "An ancient elk whose antlers carry whole constellations of cave light.",
    abilities: ["Guides lost travelers", "Quietly opens rootshadow paths"],
    unlocks: ["Hushstep charm", "Ancient migration route"],
    imagePlaceholder: "A deep teal elk with glowing antlers in a silent cavern."
  },
  {
    id: "creature-dewkit",
    name: "Dewkit",
    slug: "dewkit",
    type: "Mammal",
    temperament: "Playful",
    rarity: "Common",
    environment: "Starlace Canopy",
    description: "A nimble treetop friend that collects night dew in its whiskers.",
    abilities: ["Finds canopy shortcuts", "Fetches cloudberries"],
    unlocks: ["Dew charm", "Branch sprint movement"],
    imagePlaceholder: "A bright-eyed treetop kit with sparkling whiskers."
  },
  {
    id: "creature-lacewing-sprite",
    name: "Lacewing Sprite",
    slug: "lacewing-sprite",
    type: "Sprite",
    temperament: "Mischievous",
    rarity: "Uncommon",
    environment: "Starlace Canopy",
    description: "A winged trickster that ties knots in vines to point toward secrets.",
    abilities: ["Reveals hidden nests", "Distracts thorny vines"],
    unlocks: ["Lacewing knot map", "Canopy prank emote"],
    imagePlaceholder: "A violet-winged sprite hovering beside blossom ropes."
  }
];

export function getCreatureBySlug(slug: string) {
  return creatures.find((creature) => creature.slug === slug);
}

export const creatureFilterOptions = {
  environments: Array.from(new Set(creatures.map((creature) => creature.environment))).sort(),
  types: Array.from(new Set(creatures.map((creature) => creature.type))).sort(),
  rarities: Array.from(new Set(creatures.map((creature) => creature.rarity))).sort(),
  temperaments: Array.from(new Set(creatures.map((creature) => creature.temperament))).sort()
};
