import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, caseStudyFields, site } from "@/content/site";
import Nav from "@/components/Nav";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) return {};
  return {
    title: `${c.brand} case study`,
    description: `${c.brand}: influencer campaign case study by ${site.name}.`,
    robots: c.status === "placeholder" ? { index: false, follow: false } : undefined,
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const i = caseStudies.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const c = caseStudies[i];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <Nav home="/" />
      <main id="main" className="min-h-screen px-4 pb-24 pt-28 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Link href="/#campaigns" className="underline underline-offset-4">Back to all campaigns</Link>

          <div className={`mt-6 rounded-[2rem] border-2 border-ink p-8 md:p-14 ${c.tint} ${c.tint.includes("tomato") ? "text-paper" : ""}`}>
            <p className="text-sm">{c.sector}</p>
            <h1 className="mt-3 font-display text-[clamp(3.5rem,13vw,10rem)] leading-[0.88]">{c.brand}</h1>
            <p className="mt-6 max-w-xl font-serif text-xl leading-snug">Influencer campaign case study by {site.name}.</p>
          </div>

          {c.status === "placeholder" && (
            <p role="note" className="mt-6 rounded-2xl border-2 border-dashed border-ink bg-butter p-5 font-serif text-lg leading-snug">
              This case study is a template. Fill each block in <code className="rounded bg-paper px-1.5">content/site.ts</code> and set its status to <code className="rounded bg-paper px-1.5">live</code> to publish it. Add no figure that the brand hasn&apos;t confirmed.
            </p>
          )}

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {caseStudyFields.map((f, idx) => (
              <section key={f.key} className={`rounded-[1.5rem] border-2 border-ink p-6 ${idx === 5 || idx === 6 ? "md:col-span-2" : ""}`}>
                <h2 className="font-serif text-2xl font-semibold">{f.title}</h2>
                <p className="mt-4 text-lg"><span className="placeholder-text">{f.hint}</span></p>
              </section>
            ))}
          </div>

          <Link href={`/work/${next.slug}`} className="mt-14 block rounded-[1.5rem] bg-ink p-6 text-paper hover:bg-tomato">
            <span className="text-sm">Next campaign</span>
            <span className="block font-display text-5xl leading-none">{next.brand}</span>
          </Link>
        </div>
      </main>
    </>
  );
}
