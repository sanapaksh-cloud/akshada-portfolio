"use client";
import { stages, strategyExamples } from "@/content/site";
import RiseText from "./RiseText";
import { Tape } from "./Stickers";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-4 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-20 md:px-10 md:pt-32">
        <RiseText text="The backstage, in four stages" className="max-w-4xl font-display text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.95]" />
        <p className="mt-6 max-w-xl font-serif text-xl leading-snug md:text-2xl">
          Every creator deal moves through the same four stages. Most of it never shows up on camera.
        </p>
      </div>

      {/* Stacked cards: each one slides over the last */}
      <ol className="mx-auto max-w-6xl px-3 pb-24 md:px-10">
        {stages.map((s, i) => (
          <li key={s.name} className="sticky" style={{ top: `${5.5 + i * 1.1}rem`, marginBottom: i === stages.length - 1 ? 0 : "6rem" }}>
            <article className={`grid min-h-[26rem] gap-6 rounded-[2rem] border-2 border-ink p-6 text-ink md:grid-cols-[auto_1fr] md:gap-12 md:p-10 ${s.color}`}>
              <div className="flex items-start gap-4 md:flex-col md:gap-2">
                <span className="font-display text-7xl leading-none md:text-9xl">{s.n}</span>
                <h3 className="font-display text-5xl italic leading-none md:text-7xl">{s.name}</h3>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <p className="font-serif text-2xl font-semibold leading-tight md:text-4xl">{s.line}</p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed md:text-lg">{s.body}</p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {s.tasks.map((t) => (
                      <li key={t} className="rounded-full border-2 border-current px-3 py-1 text-sm">{t}</li>
                    ))}
                  </ul>
                  <span className="hidden rotate-3 rounded-md bg-butter px-3 py-1 font-hand text-2xl text-ink md:block">{s.note}</span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>

      {/* Strategy and social, shown not told */}
      <div className="bg-paper px-4 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <RiseText text="Strategy and social, shown not told" className="max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[0.98]" />
          <p className="mt-5 max-w-2xl font-serif text-xl leading-snug">
            Content strategy, pillars, monthly calendars, hooks, captions and scripts. Real examples go here as you add them.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strategyExamples.map((e, i) => (
              <li key={e.title} className={`relative rounded-2xl border-2 border-dashed border-ink p-5 ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <Tape className="absolute -top-3 left-6 -rotate-3" />
                <h3 className="font-serif text-xl font-semibold leading-tight">{e.title}</h3>
                <p className="mt-6 text-lg"><span className="placeholder-text">{e.state}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
