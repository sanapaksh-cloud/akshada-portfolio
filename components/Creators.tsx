
"use client";
import { managedCreators, site } from "@/content/site";
import RiseText from "./RiseText";

export default function Creators() {
  return (
    <section id="creators" className="scroll-mt-4 bg-lilac py-20 [contain:paint] md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-10">
        <RiseText text="The people behind the work" className="font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.92]" />
        <p className="mt-6 max-w-2xl font-serif text-xl leading-snug md:text-2xl">
          These are the creators I manage on a full-fledged basis. Their content belongs to them. What I handle for each of them is listed on their card.
        </p>
      </div>

      <ul className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 pt-4 md:gap-8 md:px-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]" aria-label="Managed creators">
        {managedCreators.map((c, i) => (
          <li key={c.id} className={`group w-[78vw] max-w-[22rem] shrink-0 snap-center sm:w-[22rem] ${i % 2 ? "mt-8" : ""}`}>
            <article className={`flex h-[30rem] flex-col justify-between rounded-[1.75rem] border-2 border-ink p-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[-1.5deg] ${c.tint} ${c.tint.includes("tomato") ? "text-paper" : ""}`}>
              <div>
                <p className="font-display text-7xl leading-none">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight"><span className="placeholder-text !text-[0.8em]">{c.name}</span></h3>
                <p className="mt-2 text-sm">{c.handle} <span className="opacity-60">{c.niche}</span></p>
              </div>
              <div>
                <p className="text-sm font-semibold">What I handle</p>
                <p className="mt-1 text-sm leading-snug"><span className="placeholder-text !text-[1em]">{c.scope}</span></p>
                <a href={c.reel} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-ink px-5 py-2.5 text-sm text-paper hover:bg-paper hover:text-ink">
                  Go Stalk Their Profile →<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          </li>
        ))}
        <li className="w-4 shrink-0 md:w-10" aria-hidden />
      </ul>

      {/* Separate on purpose: my own page, not a managed creator */}
      <div className="mx-auto mt-14 max-w-6xl px-4 md:px-10">
        <div className="relative grid gap-6 rounded-[2rem] border-2 border-ink bg-ink p-7 text-paper md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="font-hand text-3xl text-acid">Not a client. This one&apos;s mine.</p>
            <h3 className="mt-2 font-display text-5xl leading-none md:text-7xl">{site.instagramHandle}</h3>
            <p className="mt-4 max-w-lg font-serif text-lg leading-snug">
              My own page, {site.instagramFollowers} followers. It is separate from the creators I manage, and it&apos;s where I make content for myself.
            </p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="justify-self-start rounded-full bg-acid px-6 py-3 text-ink hover:bg-butter md:justify-self-end">
            Visit my page<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
