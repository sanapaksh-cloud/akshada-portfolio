"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { offers, pathways, site } from "@/content/site";
import RiseText from "./RiseText";

export default function WorkWithMe() {
  const [open, setOpen] = useState<string | null>(offers[0].id);
  return (
    <section id="work-with-me" className="scroll-mt-4 bg-ink px-4 py-20 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <RiseText text="Work with me" className="font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.92]" />
        <p className="mt-6 max-w-2xl font-serif text-xl leading-snug md:text-2xl">Five ways to hire me. The first one is the main one.</p>

        <ul className="mt-12 border-t-2 border-paper">
          {offers.map((o, i) => {
            const isOpen = open === o.id;
            return (
              <li key={o.id} className="border-b-2 border-paper">
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`offer-${o.id}`} onClick={() => setOpen(isOpen ? null : o.id)}
                    className="flex w-full items-baseline justify-between gap-4 py-5 text-left">
                    <span className={`font-display leading-none ${i === 0 ? "text-4xl text-acid md:text-6xl" : "text-3xl md:text-5xl"}`}>{o.title}</span>
                    <span className="shrink-0 text-sm opacity-80">{isOpen ? "Hide" : "Details"}</span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`offer-${o.id}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="grid gap-6 pb-8 md:grid-cols-[1.2fr_1fr]">
                        <div>
                          <p className="font-hand text-2xl text-butter">For {o.for.toLowerCase()}</p>
                          <p className="mt-2 max-w-lg font-serif text-xl leading-snug">{o.body}</p>
                        </div>
                        <ul className="flex flex-wrap content-start gap-2">
                          {o.includes.map((x) => <li key={x} className="rounded-full border-2 border-paper px-3 py-1 text-sm">{x}</li>)}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <h3 className="mt-20 font-display text-4xl md:text-6xl">Start the conversation</h3>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {pathways.map((p, i) => (
            <li key={p.who}>
              <a href={`mailto:${site.email}?subject=${encodeURIComponent(p.subject)}`}
                className={`block h-full rounded-[1.5rem] p-6 text-ink transition-transform hover:-translate-y-1 hover:rotate-1 ${["bg-lilac", "bg-butter", "bg-acid"][i]}`}>
                <span className="block font-display text-4xl leading-none">{p.who}</span>
                <span className="mt-3 block font-serif text-lg leading-snug">{p.line}</span>
                <span className="mt-6 inline-block rounded-full bg-ink px-4 py-2 text-sm text-paper">Email me</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
