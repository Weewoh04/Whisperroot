export type DevlogEntry = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  progressTags: string[];
  body: Array<{
    type: "paragraph" | "list";
    content?: string;
    items?: string[];
  }>;
};

export const devlogEntries: DevlogEntry[] = [
  {
    id: "devlog-001",
    title: "Whisperroot Devlog #001: The Worldroot Awakens",
    date: "2026-05-18",
    category: "Worldbuilding",
    progressTags: ["Worldroot", "Regions", "Scope"],
    excerpt:
      "The first real day Whisperroot started feeling less like an idea and more like an actual world.",
    body: [
      {
        type: "paragraph",
        content:
          "Today was the first real day Whisperroot started feeling less like an idea and more like an actual world."
      },
      {
        type: "paragraph",
        content:
          "The main focus was establishing the core environments and emotional direction of the game. Instead of building combat systems first, I wanted to figure out what the world itself should feel like to explore."
      },
      {
        type: "paragraph",
        content: "A lot of time was spent developing the major regions:"
      },
      {
        type: "list",
        items: [
          "Rootkin Forest Village",
          "The Fungal Kingdom",
          "Crystal Caverns",
          "The Whispering Swamps",
          "Ancient Deep Below",
          "Floating Sky Settlements",
          "Hollow Basin"
        ]
      },
      {
        type: "paragraph",
        content: "The biggest realization today: Whisperroot works best when wonder comes before danger."
      },
      {
        type: "paragraph",
        content:
          "That changed the direction of the entire project. Instead of designing enemies first, I started thinking about ecosystems, ancient creatures, forgotten places, and environmental storytelling. Combat still exists, but the world itself should feel alive enough that players want to understand it - not just fight through it."
      },
      {
        type: "paragraph",
        content:
          "The Hollow Basin also became the central hub for the game today. It's now envisioned as a massive crossroads settlement built around an exposed section of the Worldroot itself, where all origins eventually converge."
      },
      {
        type: "paragraph",
        content:
          "One of my favorite moments from development today was conceptualizing Ancient Deep Below: a massive buried civilization wrapped around gigantic glowing roots beneath the world. It immediately felt like the emotional center of the game's mystery."
      },
      {
        type: "paragraph",
        content:
          "Current challenge: scope management. There are so many ideas already that I need to stay focused on building vertical slices instead of trying to create the whole world at once."
      },
      {
        type: "paragraph",
        content:
          "Next step: building the Origins system and the opening sequences for each playable path."
      }
    ]
  },
  {
    id: "devlog-002",
    title: "Whisperroot Devlog #002: Choosing Your Origin",
    date: "2026-05-20",
    category: "Origins",
    progressTags: ["Origins", "Traversal", "Great Whisper"],
    excerpt:
      "Today was focused entirely on the player origins and how differently each one experiences the world.",
    body: [
      {
        type: "paragraph",
        content:
          "Today was focused entirely on the player origins and how differently each one experiences the world."
      },
      {
        type: "paragraph",
        content: "The six playable origins are now:"
      },
      {
        type: "list",
        items: ["Rootborn", "Fungalkin", "Bloomfolk", "Ancient Blood", "Emberborn", "Rootwarden"]
      },
      {
        type: "paragraph",
        content:
          "The goal is for these to feel much deeper than standard fantasy \"races.\""
      },
      {
        type: "paragraph",
        content: "Each origin changes:"
      },
      {
        type: "list",
        items: [
          "Intro sequence",
          "Starting location",
          "Abilities",
          "Traversal",
          "Dialogue",
          "Environmental interactions",
          "Emotional tone"
        ]
      },
      {
        type: "paragraph",
        content:
          "Every path now begins with its own cinematic introduction before eventually converging into the larger story after the Great Whisper event."
      },
      {
        type: "paragraph",
        content:
          "A huge amount of time today went into figuring out how each origin emotionally views the world."
      },
      {
        type: "paragraph",
        content: "For example:"
      },
      {
        type: "list",
        items: [
          "Rootborn feel spiritually connected to the forests.",
          "Fungalkin interact with living memory networks underground.",
          "Ancient Blood characters begin isolated inside abandoned crystal ruins.",
          "Rootwardens are trained to fear what lies beneath the Rootways."
        ]
      },
      {
        type: "paragraph",
        content:
          "One of the strongest additions today was the realization that Whisperroot should treat creatures as ecosystems rather than simple enemies."
      },
      {
        type: "paragraph",
        content:
          "That decision completely shifted the combat philosophy. The game now leans much more toward exploration, traversal, mystery, atmosphere, and environmental storytelling instead of constant combat encounters."
      },
      {
        type: "paragraph",
        content:
          "The Great Whisper event was also finalized today: a massive pulse through the Worldroot that awakens ancient systems, creatures, and forgotten pathways across the world."
      },
      {
        type: "paragraph",
        content:
          "Next step: developing the Whispering Swamps biome and its ecosystem creatures."
      }
    ]
  },
  {
    id: "devlog-003",
    title: "Whisperroot Devlog #003: The Whispering Swamps",
    date: "2026-05-23",
    category: "Biome Design",
    progressTags: ["Swamps", "Creatures", "Fog"],
    excerpt:
      "The Whispering Swamps became more than a poison area: a psychologically dangerous region that feels like it remembers things.",
    body: [
      {
        type: "paragraph",
        content:
          "Today was entirely dedicated to building the Whispering Swamps and honestly... this biome became way more unsettling than expected."
      },
      {
        type: "paragraph",
        content:
          "The swamp is no longer just a \"poison area.\" It's becoming one of the most psychologically dangerous regions in Whisperroot."
      },
      {
        type: "paragraph",
        content: "The main design goal: make players feel like the swamp remembers things."
      },
      {
        type: "paragraph",
        content: "New swamp creatures were designed today including:"
      },
      {
        type: "list",
        items: [
          "Toxic Bloom",
          "Mudwalker",
          "Gulf Snapjaw",
          "Root Leech",
          "Swamp Wisp",
          "Bog Hag",
          "Bile Belcher",
          "Mosswart Frog",
          "Swamp Skeeter",
          "Fungal Grotto Dweller"
        ]
      },
      {
        type: "paragraph",
        content:
          "The biggest breakthrough was realizing these shouldn't behave like traditional enemies."
      },
      {
        type: "paragraph",
        content: "Most swamp encounters now focus on:"
      },
      {
        type: "list",
        items: [
          "Stalking behavior",
          "Environmental tension",
          "Ambushes",
          "Hallucinations",
          "Sound design",
          "Visibility control"
        ]
      },
      {
        type: "paragraph",
        content:
          "Rather than direct combat, the swamp itself is becoming the threat."
      },
      {
        type: "paragraph",
        content:
          "Fog mechanics were expanded heavily today. Certain \"Whisper Fog\" events now distort reality temporarily, causing players to see false pathways, memory echoes, or creatures that may not actually exist."
      },
      {
        type: "paragraph",
        content:
          "The Sunken Cathedral was also conceptualized as the swamp's major dungeon: a partially submerged ancient structure swallowed during the original collapse of the world."
      },
      {
        type: "paragraph",
        content:
          "Another huge addition: the Miremother. A colossal buried swamp creature that entire sections of the biome unknowingly rest upon."
      },
      {
        type: "paragraph",
        content:
          "Current challenge: maintaining atmosphere without making exploration frustrating. The swamp needs to feel dangerous and oppressive while still rewarding curiosity."
      },
      {
        type: "paragraph",
        content:
          "Next step: building the Hollow Basin hub and the first major questline convergence point."
      }
    ]
  },
  {
    id: "devlog-004",
    title: "Whisperroot Devlog #004: Building the World Outside the Game",
    date: "2026-05-26",
    category: "Development Hub",
    progressTags: ["Website", "Community", "Workflow"],
    excerpt:
      "Today shifted from pure worldbuilding into creating a home for Whisperroot outside the game itself.",
    body: [
      {
        type: "paragraph",
        content:
          "Today shifted away from pure worldbuilding and into something equally important: creating a home for Whisperroot outside the game itself."
      },
      {
        type: "paragraph",
        content:
          "The focus today was planning and structuring the official Whisperroot website - not just as a promotional page, but as an actual development hub for the project."
      },
      {
        type: "paragraph",
        content: "The goal is for the site to serve multiple purposes at once:"
      },
      {
        type: "list",
        items: [
          "Track development progress",
          "Organize environments, creatures, and lore",
          "Document systems and gameplay ideas",
          "Share devlogs",
          "Eventually build community support and crowdfunding",
          "Create a central place for people discovering the project"
        ]
      },
      {
        type: "paragraph",
        content:
          "One major realization today: Whisperroot already feels much larger than a simple indie side project."
      },
      {
        type: "paragraph",
        content: "There are now:"
      },
      {
        type: "list",
        items: [
          "Multiple civilizations",
          "Fully distinct biomes",
          "Origin-based intros",
          "Creature ecosystems",
          "Major world lore",
          "Traversal systems",
          "Emotional gameplay pillars",
          "Cinematic story structure"
        ]
      },
      {
        type: "paragraph",
        content:
          "At this point, organization became necessary."
      },
      {
        type: "paragraph",
        content: "The current plan is to build the website using:"
      },
      {
        type: "list",
        items: [
          "Next.js",
          "Tailwind CSS",
          "Vercel deployment",
          "GitHub for version tracking",
          "Codex-assisted development workflows"
        ]
      },
      {
        type: "paragraph",
        content:
          "The website itself is being designed almost like an extension of the game world."
      },
      {
        type: "paragraph",
        content:
          "Instead of a standard \"indie dev website,\" the idea is to make it feel atmospheric and alive:"
      },
      {
        type: "list",
        items: [
          "Glowing roots beneath pages",
          "Cinematic environment showcases",
          "Interactive origin pages",
          "Animated lore sections",
          "World maps",
          "Creature archives",
          "Development timelines",
          "Eventually public world journals and soundtrack previews"
        ]
      },
      {
        type: "paragraph",
        content:
          "Another important discussion today centered around \"finding the crowd.\""
      },
      {
        type: "paragraph",
        content:
          "Whisperroot feels niche in a good way."
      },
      {
        type: "paragraph",
        content: "The project seems strongest for players who love:"
      },
      {
        type: "list",
        items: [
          "Atmospheric exploration",
          "Mysterious fantasy worlds",
          "Environmental storytelling",
          "Emotional discovery",
          "Creature ecosystems",
          "Cozy-but-unsettling experiences"
        ]
      },
      {
        type: "paragraph",
        content: "Games like:"
      },
      {
        type: "list",
        items: [
          "Ori and the Will of the Wisps",
          "Journey",
          "Hollow Knight",
          "Subnautica",
          "Shadow of the Colossus"
        ]
      },
      {
        type: "paragraph",
        content:
          "Keep coming up repeatedly as emotional reference points."
      },
      {
        type: "paragraph",
        content:
          "One of the most exciting parts of today was realizing that the website itself can become part of the game's development story: a living archive showing the world slowly awakening over time."
      },
      {
        type: "paragraph",
        content:
          "Current challenge: keeping scope manageable while still preserving the scale and wonder Whisperroot needs to feel unique. The temptation to build everything at once is very real."
      },
      {
        type: "paragraph",
        content:
          "Next step: building the first polished vertical slice focused on the Rootborn intro and early forest exploration."
      }
    ]
  }
];
