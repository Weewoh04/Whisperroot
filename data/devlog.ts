export type DevlogEntry = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

export const devlogEntries: DevlogEntry[] = [
  {
    id: "devlog-001",
    title: "Planting the First Roots",
    date: "2026-05-12",
    category: "Worldbuilding",
    excerpt: "The first pass of Whisperroot focuses on gentle exploration, creature trust, and regions that feel hand-tended."
  },
  {
    id: "devlog-002",
    title: "Creature Trust Loops",
    date: "2026-05-18",
    category: "Design",
    excerpt: "Each creature relationship should unlock a practical comfort: routes, recipes, traversal help, or new ways to care for the world."
  },
  {
    id: "devlog-003",
    title: "A Cozy Map With Secrets",
    date: "2026-05-24",
    category: "Map",
    excerpt: "The world map is being shaped as a memory garden: readable at a glance, but rich with soft mysteries."
  }
];
