import Link from "next/link";
import { HeartHandshake, Mail } from "lucide-react";

export default function SupportCTA() {
  return (
    <section className="rounded-3xl border border-amberglow/24 bg-moss-900/80 p-6 shadow-glow sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amberglow">
            Keep The Roots Warm
          </p>
          <h2 className="text-2xl font-semibold text-creamcap sm:text-3xl">Follow Whisperroot as it grows.</h2>
          <p className="mt-4 text-sm leading-6 text-creamcap/68">
            Newsletter signup and support links are placeholders for now, ready for a future mailing list,
            crowdfunding page, store, or community space.
          </p>
        </div>
        <div className="space-y-3">
          <form className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              className="min-h-12 flex-1 rounded-full border border-creamcap/10 bg-moss-950 px-5 text-sm text-creamcap outline-none transition placeholder:text-creamcap/38 focus:border-amberglow/60"
            />
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amberglow px-5 text-sm font-semibold text-moss-950 transition hover:bg-creamcap"
            >
              <Mail className="size-4" aria-hidden="true" />
              Notify Me
            </button>
          </form>
          <div className="flex flex-wrap gap-3">
            {["Kickstarter", "Patreon", "Discord"].map((label) => (
              <Link
                key={label}
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-creamcap/10 px-4 py-2 text-sm text-creamcap/76 transition hover:border-violetcap/60 hover:text-violetcap"
              >
                <HeartHandshake className="size-4" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
