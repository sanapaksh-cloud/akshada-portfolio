"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { videos, type VideoItem } from "@/content/site";
import RiseText from "./RiseText";

const filters = [
  { id: "all", label: "Everything" },
  { id: "creator", label: "For creators" },
  { id: "own", label: "My own page" },
  { id: "sample", label: "Samples" },
] as const;

const badge: Record<VideoItem["whose"], string> = { creator: "bg-lilac", own: "bg-acid", sample: "bg-butter" };

function Card({ v, open }: { v: VideoItem; open: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const play = () => { ref.current?.play().catch(() => {}); };
  const stop = () => { if (ref.current) { ref.current.pause(); ref.current.currentTime = 0; } };
  return (
    <li className="min-w-0">
      <button type="button" onClick={open} onMouseEnter={play} onMouseLeave={stop} onFocus={play} onBlur={stop}
        className="group block w-full text-left" aria-label={`Open ${v.title}`}>
        <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-ink bg-ink transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-[1.02]" style={{ aspectRatio: v.aspect }}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video ref={ref} src={v.src} poster={v.poster} muted loop playsInline preload="none" className="h-full w-full object-cover" />
          <span className={`absolute left-3 top-3 rounded-full border-2 border-ink px-3 py-1 text-xs text-ink ${badge[v.whose]}`}>{v.whoseLabel}</span>
          <span className="absolute bottom-3 right-3 rounded-full bg-paper px-3 py-1 text-xs text-ink">Open</span>
        </div>
        <h3 className="mt-3 font-serif text-lg font-semibold leading-tight">{v.title}</h3>
        <p className="text-sm">My part: {v.role.join(", ")}</p>
      </button>
    </li>
  );
}

function Viewer({ list, index, setIndex, close }: { list: VideoItem[]; index: number; setIndex: (i: number) => void; close: () => void }) {
  const v = list[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const step = useCallback((d: number) => setIndex((index + d + list.length) % list.length), [index, list.length, setIndex]);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prevOverflow; };
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [close, step]);

  return (
    <motion.div role="dialog" aria-modal="true" aria-label={v.title}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-3 md:p-8" data-lenis-prevent
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="grid max-h-full w-full max-w-5xl gap-5 overflow-auto md:grid-cols-[auto_1fr] md:items-center md:gap-10">
        <motion.div key={v.id} initial={{ scale: 0.94, rotate: -1.5 }} animate={{ scale: 1, rotate: 0 }}
          className="mx-auto w-full overflow-hidden rounded-[1.5rem] border-2 border-paper bg-ink"
          style={{ aspectRatio: v.aspect, maxHeight: "78svh", maxWidth: v.aspect === "9 / 16" ? "min(100%, 44svh)" : "min(100%, 70vw)" }}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video key={v.id} src={v.src} poster={v.poster} controls autoPlay playsInline className="h-full w-full object-contain" />
        </motion.div>
        <div className="text-paper">
          <span className={`inline-block rounded-full border-2 border-ink px-3 py-1 text-sm text-ink ${badge[v.whose]}`}>{v.whoseLabel}</span>
          <h3 className="mt-4 font-display text-5xl leading-none md:text-6xl">{v.title}</h3>
          <p className="mt-4 font-serif text-lg leading-snug">{v.note}</p>
          <p className="mt-4 text-sm">My part: {v.role.join(", ")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => step(-1)} className="rounded-full border-2 border-paper px-5 py-2 hover:bg-paper hover:text-ink">Previous</button>
            <button type="button" onClick={() => step(1)} className="rounded-full border-2 border-paper px-5 py-2 hover:bg-paper hover:text-ink">Next</button>
            <span className="text-sm opacity-70">{index + 1} of {list.length}</span>
            <button ref={closeRef} type="button" onClick={close} className="ml-auto rounded-full bg-tomato px-5 py-2 text-paper hover:bg-acid hover:text-ink">Close</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EditingStudio() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const list = filter === "all" ? videos : videos.filter((v) => v.whose === filter);
  const lastFocus = useRef<HTMLElement | null>(null);

  return (
    <section id="editing" className="scroll-mt-4 bg-butter px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <RiseText text="Editing studio" className="font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.92]" />
        <p className="mt-6 max-w-2xl font-serif text-xl leading-snug md:text-2xl">
          Editing is how I back up the strategy. Every video is labelled with whose page it belongs to and what I actually did on it.
        </p>

        <div role="group" aria-label="Filter videos" className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => { setFilter(f.id); setOpenIdx(null); }}
              className={`rounded-full border-2 border-ink px-4 py-2 text-sm ${filter === f.id ? "bg-ink text-paper" : "hover:bg-paper"}`}>{f.label}</button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 items-end gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {list.map((v, i) => (
            <Card key={v.id} v={v} open={() => { lastFocus.current = document.activeElement as HTMLElement; setOpenIdx(i); }} />
          ))}
        </ul>
      </div>

      <AnimatePresence onExitComplete={() => lastFocus.current?.focus()}>
        {openIdx !== null && <Viewer list={list} index={openIdx} setIndex={setOpenIdx} close={() => setOpenIdx(null)} />}
      </AnimatePresence>
    </section>
  );
}
