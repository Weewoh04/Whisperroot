"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sprout, X } from "lucide-react";
import AmbientToggle from "@/components/AmbientToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/origins", label: "Origins" },
  { href: "/environments", label: "Environments" },
  { href: "/creatures", label: "Bestiary" },
  { href: "/devlog", label: "Devlogs" },
  { href: "/lore", label: "World Lore" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-creamcap/10 bg-[rgba(3,7,6,0.72)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 text-creamcap" onClick={() => setOpen(false)}>
          <span className="pulse-root grid size-11 place-items-center rounded-full border border-amberglow/30 bg-moss-900 shadow-glow">
            <Sprout className="size-5 text-amberglow transition group-hover:scale-110" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-serif text-xl font-semibold tracking-wide glow-text">Whisperroot</span>
            <span className="block text-xs uppercase tracking-[0.24em] text-creamcap/55">World Hub</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-creamcap/10 bg-moss-950/58 p-1 xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} active={isActive(pathname, item.href)} />
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <AmbientToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-creamcap/10 bg-moss-950/70 text-creamcap/84 xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.28 }}
            className="border-t border-creamcap/10 bg-[rgba(3,7,6,0.88)] px-4 pb-5 pt-3 backdrop-blur-2xl xl:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    isActive(pathname, item.href)
                      ? "border-amberglow/40 bg-amberglow/12 text-amberglow"
                      : "border-creamcap/10 bg-creamcap/[0.04] text-creamcap/76"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <AmbientToggle />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  item,
  active
}: {
  item: { href: string; label: string };
  active: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`group relative rounded-full px-4 py-2 text-sm transition ${
        active ? "text-amberglow" : "text-creamcap/74 hover:text-creamcap"
      }`}
    >
      {item.label}
      <span
        className={`absolute inset-x-4 -bottom-0.5 h-px rounded-full bg-amberglow shadow-[0_0_14px_rgba(244,198,106,0.7)] transition ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}
