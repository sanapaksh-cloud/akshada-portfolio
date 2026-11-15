"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { services } from "@/content/site";
import RiseText from "./RiseText";

const tints = ["bg-lilac", "bg-butter", "bg-acid", "bg-paper", "bg-tomato text-paper"];
const tilt = [-3, 2, -1, 3, -2, 1, 2, -3];

export default function WhatIDo() {
  const area = useRef<HTMLDivElement>(null);
  return (
    <section id="what-i-do" className="scroll-mt-4 px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <RiseText text="You focus on creating. I take care of everything happening around it." className="max-w-5xl font-display text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.95]" />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <p className="font-serif text-xl leading-snug md:text-2xl">
            Creator management is more than brand deals, and more than editing. I work as your backend partner: finding the work, shaping the content, and keeping every moving piece on schedule.
          </p>
          <p className="font-serif text-xl leading-snug md:text-2xl">
            You film, post and show up as yourself. The fifteen jobs below are mine. Drag them around: that&apos;s roughly what my week looks like.
          </p>
        </div>

        <div ref={area} className="mt-14 flex min-h-[22rem] flex-wrap content-start gap-3 rounded-[2.5rem] border-2 border-dashed border-ink p-5 md:gap-4 md:p-10">
          {services.map((s, i) => (
            <motion.button key={s} type="button" drag dragConstraints={area} dragElastic={0.25} dragMomentum={false}
              whileHover={{ scale: 1.06, rotate: 0 }} whileDrag={{ scale: 1.12, zIndex: 20, cursor: "grabbing" }}
              style={{ rotate: tilt[i % tilt.length] }}
              className={`cursor-grab touch-none select-none rounded-full border-2 border-ink px-5 py-2.5 text-base md:text-lg ${tints[i % tints.length]}`}>
              {s}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
