export type Environment = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  mood: string;
  colorPalette: string[];
  creatures: string[];
  landmarks: string[];
  hazards: string[];
  resources: string[];
  connectedOrigins: string[];
  imagePlaceholder: string;
};

export const environments: Environment[] = [
  {
    id: "env-mossglow-glen",
    name: "Mossglow Glen",
    slug: "mossglow-glen",
    shortDescription: "A lantern-soft woodland where old roots hum beneath every footstep.",
    longDescription:
      "Mossglow Glen is the first remembered place of Whisperroot: a sheltered woodland of breathing moss, hollow logs, and amber-lit rootways. It is gentle on new wanderers, but the forest notices kindness and neglect in equal measure.",
    mood: "Welcoming, luminous, sleepy",
    colorPalette: ["Moss green", "Warm amber", "Mushroom cream"],
    creatures: ["Mossmote", "Lantern Snail"],
    landmarks: ["The Listening Stump", "Amberroot Bridge", "Little Hearth Hollow"],
    hazards: ["Dream pollen fog", "Root tangles", "Shy thorn brambles"],
    resources: ["Glowmoss", "Sap beads", "Soft bark", "Dewberries"],
    connectedOrigins: ["Rootborn", "Bloomfolk", "Rootwarden"],
    imagePlaceholder: "A glowing mossy forest hollow with tiny root-lanterns."
  },
  {
    id: "env-sporefall-marsh",
    name: "Sporefall Marsh",
    slug: "sporefall-marsh",
    shortDescription: "A misty wetland of giant caps, medicinal fungi, and soft blue lights.",
    longDescription:
      "Sporefall Marsh shifts every morning as mushrooms bloom, sink, and reappear in slow circles. Its pools preserve old memories, and its fungal villages trade remedies, songs, and carefully bottled weather.",
    mood: "Mysterious, humid, healing",
    colorPalette: ["Deep teal", "Violet", "Creamcap white"],
    creatures: ["Velvet Bogling", "Mooncap Mender"],
    landmarks: ["The Mycelium Bell", "Mistcup Ferry", "Bluecap Clinics"],
    hazards: ["Sinking peat", "Confusion spores", "Mirror pools"],
    resources: ["Mooncap spores", "Bog clay", "Reed silk", "Medicinal lichen"],
    connectedOrigins: ["Fungalkin", "Ancient Blood"],
    imagePlaceholder: "A violet mushroom marsh with glowing pools and reed lanterns."
  },
  {
    id: "env-emberfern-hills",
    name: "Emberfern Hills",
    slug: "emberfern-hills",
    shortDescription: "Rolling hills where warm ferns glow like banked campfire coals.",
    longDescription:
      "The Emberfern Hills are cozy from a distance and restless up close. Buried hearthstones pulse beneath the grass, attracting crafters, tea-makers, and creatures with sparks in their fur or feathers.",
    mood: "Warm, restless, brave",
    colorPalette: ["Fern green", "Coal red", "Honey amber"],
    creatures: ["Cinderbun", "Ashwing Moth"],
    landmarks: ["Hearthstone Rings", "The Copper Picnic", "Fernfire Lookout"],
    hazards: ["Sudden heat vents", "Ash gusts", "Crackling seed pods"],
    resources: ["Emberfern fronds", "Copper seeds", "Warm stone", "Spice roots"],
    connectedOrigins: ["Emberborn", "Bloomfolk"],
    imagePlaceholder: "Amber hills covered in glowing ferns and curled smoke."
  },
  {
    id: "env-moonmilk-caverns",
    name: "Moonmilk Caverns",
    slug: "moonmilk-caverns",
    shortDescription: "Cream-colored caves where mineral streams sing under violet crystal.",
    longDescription:
      "Moonmilk Caverns curl under Whisperroot like a quiet second sky. The cave walls hold painted histories, crystal gardens, and old migration routes used by creatures that prefer hush to daylight.",
    mood: "Quiet, ancient, reverent",
    colorPalette: ["Mushroom cream", "Crystal violet", "Stone teal"],
    creatures: ["Crystal Toad", "Hushback Elk"],
    landmarks: ["The Painted Dripstone", "Milkglass Falls", "Rootshadow Gate"],
    hazards: ["Echo loops", "Slippery mineral shelves", "Sleeping stone doors"],
    resources: ["Moonmilk", "Violet crystal", "Cave tea leaves", "Silver clay"],
    connectedOrigins: ["Ancient Blood", "Rootwarden"],
    imagePlaceholder: "A cream limestone cavern with violet crystals and glowing streams."
  },
  {
    id: "env-starlace-canopy",
    name: "Starlace Canopy",
    slug: "starlace-canopy",
    shortDescription: "A high forest roof woven with blossoms, rope bridges, and night dew.",
    longDescription:
      "Starlace Canopy is the airy crown of the old forest. Its branches carry wind gardens, observatories, and pollen trails that reveal themselves only to patient climbers and trusted companions.",
    mood: "Airy, playful, watchful",
    colorPalette: ["Leaf green", "Star white", "Soft violet"],
    creatures: ["Dewkit", "Lacewing Sprite"],
    landmarks: ["The Petal Observatory", "Windbraid Bridges", "Nestmarket"],
    hazards: ["Slippery dew", "High winds", "Mischief vines"],
    resources: ["Starlace petals", "Cloudberries", "Feather reeds", "Night dew"],
    connectedOrigins: ["Bloomfolk", "Rootborn"],
    imagePlaceholder: "A treetop village of blossoms, bridges, and tiny star lights."
  }
];

export function getEnvironmentBySlug(slug: string) {
  return environments.find((environment) => environment.slug === slug);
}
