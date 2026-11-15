"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/content/site";
import { Star, FolderTab, Clapper } from "./Stickers";
import Magnetic from "./Magnetic";

const notes = [
  { t: "brand replied", x: "8%", y: "18%", r: -6 },
  { t: "script v3, approved", x: "60%", y: "12%", r: 4 },
  { t: "deal closed", x: "74%", y: "46%", r: -4 },
  { t: "calendar sorted", x: "6%", y: "62%", r: 5 },
  { t: "invoice sent", x: "38%", y: "78%", r: -3 },
  { t: "reel is live", x: "82%", y: "80%", r: 6 },
  { t: "follow-up done", x: "46%", y: "6%", r: 3 },
];

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 700], [0, -90]);
  const yB = useTransform(scrollY, [0, 700], [0, 60]);

  // Spotlight: follows the pointer, drifts on its own when idle (and on touch screens).
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = 0, raf = 0, tx = 0.5, ty = 0.5, cx = 0.5, cy = 0.5;
    const set = (x: number, y: number) => {
      el.style.setProperty("--sx", `${x * 100}%`);
      el.style.setProperty("--sy", `${y * 100}%`);
    };
    set(0.5, 0.65);
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width;
      ty = (e.clientY - r.top) / r.height;
      last = performance.now();
    };
    const tick = (t: number) => {
      if (!reduce && t - last > 2200) { // idle drift
        tx = 0.5 + Math.sin(t / 1900) * 0.3;
        ty = 0.62 + Math.cos(t / 2300) * 0.2;
      }
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      set(cx, cy);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    return () => { el.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);

  const line = (txt: string, i: number, className: string) => (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span className={`block ${className}`} initial={{ y: "105%" }} animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.2, 0.7, 0.1, 1] }}>{txt}</motion.span>
    </span>
  );

  const big = "font-display leading-[0.82] tracking-tight text-[clamp(4.6rem,30vw,17rem)]";
  const bigBack = "font-display leading-[0.82] tracking-tight text-[clamp(3rem,19vw,17rem)]";

  return (
    <section id="top" className="relative">
      <h1 className="sr-only">You create. I&apos;ll handle the rest. {site.name}, creator manager.</h1>

      {/* STAGE: what the audience sees */}
      <div ref={stage} className="relative h-[78svh] min-h-[560px] touch-pan-y overflow-hidden bg-lilac" style={{ ["--r" as string]: "clamp(150px, 24vw, 300px)" }}>
        <motion.div style={{ y: yA }} className="pointer-events-none absolute inset-0" aria-hidden>
          <FolderTab className="absolute left-[52%] top-[20%] w-12 -rotate-12 md:left-[34%] md:top-[16%] md:w-20" fill="#2F6BFF" />
          <FolderTab className="absolute left-[60%] top-[17%] w-12 rotate-6 md:left-[38%] md:top-[14%] md:w-20" fill="#F2452B" />
          <Star className="absolute right-[9%] top-[18%] w-14 rotate-12 md:w-24" />
          <Star className="absolute left-[8%] top-[22%] w-10 -rotate-12 md:bottom-[14%] md:left-[46%] md:top-auto md:w-16" fill="#D3F36B" />
        </motion.div>
        <motion.div style={{ y: yB }} className="pointer-events-none absolute right-[5%] top-[30%] md:bottom-[8%] md:top-auto md:right-[6%]" aria-hidden>
          <Clapper className="w-20 rotate-6 md:w-32" />
        </motion.div>

        <div aria-hidden className="relative z-10 flex h-full flex-col justify-end px-4 pb-6 pt-24 md:px-10">
          <p className="mb-3 max-w-xs font-hand text-2xl leading-6 md:text-3xl">Move around. See what&apos;s going on behind it.</p>
          {line("YOU", 0, `${big} text-butter [-webkit-text-stroke:2px_#16120F] md:[-webkit-text-stroke:3px_#16120F]`)}
          {line("CREATE.", 1, `${big} outline-text`)}
        </div>

        {/* BACKSTAGE: only visible inside the spotlight */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-20 bg-ink"
          style={{
            WebkitMaskImage: "radial-gradient(circle var(--r) at var(--sx) var(--sy), #000 62%, transparent 100%)",
            maskImage: "radial-gradient(circle var(--r) at var(--sx) var(--sy), #000 62%, transparent 100%)",
          }}>
          {notes.map((n) => (
            <span key={n.t} className="absolute whitespace-nowrap rounded-md bg-butter px-3 py-1 font-hand text-xl text-ink md:text-2xl"
              style={{ left: n.x, top: n.y, transform: `rotate(${n.r}deg)` }}>{n.t}</span>
          ))}
          <div className="flex h-full flex-col justify-end px-4 pb-6 pt-24 md:px-10">
            <span className="block overflow-hidden pb-[0.06em]"><span className={`block ${bigBack} text-acid`}>I&apos;LL HANDLE</span></span>
            <span className="block overflow-hidden pb-[0.06em]"><span className={`block ${bigBack} text-paper`}>THE REST.</span></span>
          </div>
        </div>
      </div>

      {/* The part of the hero that is always legible */}
      <div className="relative z-30 grid gap-8 border-t-2 border-ink bg-paper px-4 py-8 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-14 md:px-10 md:py-12">
        <div>
          <p className="font-hand text-3xl leading-7 text-tomato md:text-4xl">The part of creating nobody films.</p>
          <p className="mt-4 font-serif text-xl leading-snug md:text-2xl">
            <span className="font-semibold">{site.name}</span> is a creator manager. {site.intro}
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-sm leading-6">{site.positioning.join(", ")}.</p>
          <div className="flex flex-wrap gap-3">
            <Magnetic><a href="#what-i-do" className="inline-block rounded-full bg-ink px-6 py-3 text-paper hover:bg-tomato">See how it works</a></Magnetic>
            <Magnetic><a href="#contact" className="inline-block rounded-full border-2 border-ink px-6 py-3 hover:bg-acid">Say hello</a></Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
