import { site } from "@/content/site";
import { Star } from "./Stickers";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-tomato px-4 pb-10 pt-24 text-paper md:px-10 md:pt-40">
      <Star className="absolute right-[6%] top-10 w-20 rotate-12 md:w-36" fill="#FFF0A3" />
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-3xl md:text-4xl">Creators, brands, agencies, anyone who needs a video edited.</p>
        <h2 className="mt-4 font-display text-[clamp(3.6rem,15vw,14rem)] leading-[0.85]">Let&apos;s go backstage.</h2>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a href={`mailto:${site.email}`} className="rounded-full bg-paper px-7 py-4 text-lg text-ink hover:bg-acid">{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-paper px-7 py-4 text-lg hover:bg-paper hover:text-ink">
            Instagram {site.instagramHandle}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <footer className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t-2 border-paper pt-5 text-sm">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <a href="#top" className="underline underline-offset-4">Back to the top</a>
        </footer>
      </div>
    </section>
  );
}
