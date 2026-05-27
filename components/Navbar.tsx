import Link from "next/link";
import { Compass, Heart, Map, Menu, Sprout } from "lucide-react";

const navItems = [
  { href: "/world-map", label: "Map" },
  { href: "/environments", label: "Environments" },
  { href: "/creatures", label: "Bestiary" },
  { href: "/origins", label: "Origins" },
  { href: "/devlog", label: "Devlog" },
  { href: "/support", label: "Support" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-creamcap/10 bg-moss-950/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-creamcap">
          <span className="grid size-10 place-items-center rounded-full border border-amberglow/30 bg-moss-800 shadow-glow">
            <Sprout className="size-5 text-amberglow" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-wide">Whisperroot</span>
            <span className="block text-xs uppercase tracking-[0.22em] text-creamcap/55">World Hub</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-creamcap/10 bg-moss-900/70 p-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-creamcap/76 transition hover:bg-creamcap/10 hover:text-creamcap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex lg:hidden">
          <Link
            href="/world-map"
            className="grid size-10 place-items-center rounded-full border border-creamcap/10 bg-moss-900 text-creamcap/80"
            aria-label="World map"
          >
            <Map className="size-5" />
          </Link>
          <Link
            href="/creatures"
            className="grid size-10 place-items-center rounded-full border border-creamcap/10 bg-moss-900 text-creamcap/80"
            aria-label="Creature bestiary"
          >
            <Compass className="size-5" />
          </Link>
          <Link
            href="/support"
            className="grid size-10 place-items-center rounded-full border border-amberglow/30 bg-amberglow text-moss-950"
            aria-label="Support Whisperroot"
          >
            <Heart className="size-5" />
          </Link>
        </div>

        <div className="grid size-10 place-items-center rounded-full border border-creamcap/10 bg-moss-900 text-creamcap/80 sm:hidden">
          <Menu className="size-5" aria-hidden="true" />
        </div>
      </nav>
      <div className="flex gap-2 overflow-x-auto px-4 pb-3 sm:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-creamcap/10 bg-moss-900 px-3 py-2 text-xs text-creamcap/76"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
