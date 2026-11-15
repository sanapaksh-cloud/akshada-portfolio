import { site, experience, sectors } from "@/content/site";
import RiseText from "./RiseText";
import { Tape } from "./Stickers";

export default function About() {
  return (
    <section id="about" className="scroll-mt-4 bg-acid px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="relative mx-auto w-full max-w-sm self-start md:mx-0">
          <Tape className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
          <div className="flex aspect-[4/5] rotate-[-2deg] items-center justify-center rounded-2xl border-2 border-dashed border-ink bg-paper p-6 text-center">
            <span className="placeholder-text">[Add a portrait or personal photo of you]</span>
          </div>
        </div>
        <div>
          <RiseText text="The person behind the creators" className="font-display text-[clamp(2.6rem,6.5vw,6rem)] leading-[0.95]" />
          <div className="mt-8 max-w-xl space-y-4 font-serif text-xl leading-snug">
            <p>I work where creativity, strategy and execution meet. Across five-plus years I have done the job from every side: running influencer campaigns for brands, planning and scripting content, editing videos myself, and managing creators end to end.</p>
            <p>My experience spans {sectors.slice(0, -1).join(", ").toLowerCase().replace("fmcg", "FMCG")} and {sectors[sectors.length - 1].toLowerCase()}.</p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {site.stats.map((s) => (
              <div key={s.value} className="rounded-2xl border-2 border-ink bg-paper p-4">
                <dt className="font-display text-4xl leading-none md:text-6xl">{s.value}</dt>
                <dd className="mt-2 text-xs leading-snug md:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-14 font-display text-4xl">Short professional background</h3>
          <ol className="mt-6 space-y-8 border-l-2 border-ink pl-6">
            {experience.map((e) => (
              <li key={e.role + e.org} className="relative">
                <span aria-hidden className="absolute -left-[2.05rem] top-2 h-3 w-3 rounded-full border-2 border-ink bg-tomato" />
                <p className="text-sm">{e.when}</p>
                <h4 className="font-serif text-2xl font-semibold leading-tight">{e.role}, {e.org}</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-snug">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
