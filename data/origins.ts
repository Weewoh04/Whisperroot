export type Origin = {
  id: string;
  name: string;
  summary: string;
  traits: string[];
  startingGift: string;
  connectedEnvironments: string[];
};

export const origins: Origin[] = [
  {
    id: "rootborn",
    name: "Rootborn",
    summary: "Grounded wanderers who hear comfort, warning, and memory through living roots.",
    traits: ["Patient", "Resilient", "Good with woodland creatures"],
    startingGift: "Rootwhisper: sense nearby hidden paths.",
    connectedEnvironments: ["Mossglow Glen", "Starlace Canopy"]
  },
  {
    id: "fungalkin",
    name: "Fungalkin",
    summary: "Mycelium-touched caretakers who trade remedies, rumors, and cozy meals.",
    traits: ["Inventive", "Communal", "Resistant to spores"],
    startingGift: "Spore Satchel: craft gentle remedies from marsh finds.",
    connectedEnvironments: ["Sporefall Marsh"]
  },
  {
    id: "bloomfolk",
    name: "Bloomfolk",
    summary: "Bright, expressive folk who coax flowers into tools, bridges, and songs.",
    traits: ["Expressive", "Agile", "Strong with pollination magic"],
    startingGift: "Petalcall: invite plants to bloom for a short time.",
    connectedEnvironments: ["Mossglow Glen", "Emberfern Hills", "Starlace Canopy"]
  },
  {
    id: "ancient-blood",
    name: "Ancient Blood",
    summary: "Descendants of old pacts with stone, cave, river, and star-lit beasts.",
    traits: ["Perceptive", "Reverent", "Trusted by rare creatures"],
    startingGift: "Old Sign: read markings left by vanished guardians.",
    connectedEnvironments: ["Sporefall Marsh", "Moonmilk Caverns"]
  },
  {
    id: "emberborn",
    name: "Emberborn",
    summary: "Warm-hearted makers who carry hearth magic in their hands and voices.",
    traits: ["Bold", "Craft-focused", "Calm around heat"],
    startingGift: "Hearthspark: light safe campfires and warm cold soil.",
    connectedEnvironments: ["Emberfern Hills"]
  },
  {
    id: "rootwarden",
    name: "Rootwarden",
    summary: "Quiet guardians trained to mend old trails and protect sleeping places.",
    traits: ["Protective", "Observant", "Skilled with warding charms"],
    startingGift: "Ward Knot: soothe hazards without harming the wild.",
    connectedEnvironments: ["Mossglow Glen", "Moonmilk Caverns"]
  }
];
