"use client";
import { motion } from "framer-motion";

/** Words rise out of a mask when scrolled into view. Used for section titles only. */
export default function RiseText({
  text, className = "", as: Tag = "h2",
}: { text: string; className?: string; as?: "h1" | "h2" | "h3" | "p" }) {
  const words = text.split(" ");
  const M = motion[Tag];
  return (
    <M className={className} aria-label={text}
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ staggerChildren: 0.07 }}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
          <motion.span className="inline-block"
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}>
            {w}{i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </M>
  );
}
