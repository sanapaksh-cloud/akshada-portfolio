import Link from "next/link";
import { caseStudies, campaignFacts, campaignScope } from "@/content/site";
import RiseText from "./RiseText";

export default function Campaigns() {
  return (
    <section id="campaigns" className="scroll-mt-4 px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <RiseText text="Campaigns for brands" className="font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.92]" />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="space-y-3">
            {campaignFacts.map((f) => (
              <li key={f} className="border-b-2 border-ink pb-3 font-serif text-2xl font-semibold leading-tight md:text-3xl">{f}</li>
            ))}
          </ul>
          <div>
            <p className="font-serif text-xl leading-snug">What that looks like day to day:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {campaignScope.map((s) => (
                <li key={s} className="rounded-full border-2 border-ink bg-acid px-4 py-1.5 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-20 font-display text-4xl md:text-5xl">Brands and projects</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((c, i) => (
            <li key={c.slug}>
              <Link href={`/work/${c.slug}`}
                className={`group flex h-56 flex-col justify-between rounded-[1.5rem] border-2 border-ink p-5 transition-all duration-300 hover:-translate-y-1 hover:rounded-[3rem] focus-visible:-translate-y-1 ${c.tint} ${c.tint.includes("tomato") ? "text-paper" : ""} ${i % 3 === 1 ? "lg:mt-6" : ""}`}>
                <span className="text-sm">{c.sector}</span>
                <span>
                  <span className="block font-display text-4xl leading-none md:text-5xl">{c.brand}</span>
                  <span className="mt-2 block text-sm">{c.status === "live" ? "Read the case study" : "Case study in progress"}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
