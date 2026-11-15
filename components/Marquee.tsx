import { services } from "@/content/site";
import { Star } from "./Stickers";

export default function Marquee() {
  const items = [...services, ...services];
  return (
    <div aria-hidden className="marquee overflow-hidden border-y-2 border-ink bg-tomato py-3 text-paper">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap font-display text-3xl italic md:text-5xl">
        {items.concat(items).map((s, i) => (
          <span key={i} className="flex items-center gap-8">
            {s}
            <Star className="h-6 w-6 md:h-9 md:w-9" fill="#FFF0A3" />
          </span>
        ))}
      </div>
    </div>
  );
}
