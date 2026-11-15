"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";

const links = [
  { href: "#what-i-do", label: "What I do" },
  { href: "#process", label: "Backstage" },
  { href: "#creators", label: "Creators" },
  { href: "#editing", label: "Editing" },
  { href: "#campaigns", label: "Campaigns" },
  { href: "#about", label: "About" },
  { href: "#work-with-me", label: "Work with me" },
];

export default function Nav({ home = "" }: { home?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <nav aria-label="Main" className="flex w-full max-w-6xl items-center justify-between rounded-full border-2 border-ink bg-paper/90 py-2 pl-5 pr-2 backdrop-blur">
        <a href={`${home}#top`} className="font-display text-xl leading-none">{site.name}</a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={`${home}${l.href}`} className="rounded-full px-3 py-1.5 text-sm hover:bg-acid focus-visible:bg-acid">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href={`${home}#contact`} className="hidden rounded-full bg-ink px-4 py-2 text-sm text-paper hover:bg-tomato lg:block">Say hello</a>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}
          className="rounded-full bg-ink px-4 py-2 text-sm text-paper lg:hidden">{open ? "Close" : "Menu"}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            className="absolute inset-x-3 top-[4.2rem] rounded-3xl border-2 border-ink bg-lilac p-5 lg:hidden">
            <ul className="space-y-1">
              {[...links, { href: "#contact", label: "Say hello" }].map((l) => (
                <li key={l.href}>
                  <a href={`${home}${l.href}`} onClick={() => setOpen(false)} className="block py-1 font-display text-4xl">{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
