import Link from "next/link";
import { Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-creamcap/10 bg-[rgba(3,7,6,0.72)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Sprout className="size-5 text-amberglow" aria-hidden="true" />
            <span className="font-semibold text-creamcap">Whisperroot World Hub</span>
          </div>
          <p className="max-w-xl text-sm leading-6 text-creamcap/65">
            A living reference for the open-world cozy fantasy game Whisperroot, with regions,
            creatures, origins, dev notes, and future support links gathered in one warm hollow.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {[
            { label: "World Map", href: "/world-map" },
            { label: "Bestiary", href: "/creatures" },
            { label: "Origins", href: "/origins" },
            { label: "World Lore", href: "/lore" },
            { label: "About", href: "/about" }
          ].map(({ label, href }) => {
            return (
              <Link
                key={label}
                href={href}
                className="rounded-full border border-creamcap/10 px-4 py-2 text-sm text-creamcap/70 transition hover:border-amberglow/40 hover:text-amberglow"
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
