
/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Anything wrapped like "[Add ...]" is a placeholder. Replace it, or leave it
 * out, before you go live. Nothing in this file has been invented: facts come
 * from your brief and your answers about the five videos.
 */

export const site = {
  name: "Akshada Sanap",
  shortName: "Akshada",
  url: "https://your-domain.com", // [Update] your live domain, used for SEO + sitemap
  email: "hello@your-domain.com", // [Placeholder] replace with your public email
  instagram: "https://www.instagram.com/akshsanap",
  instagramHandle: "@akshsanap",
  instagramFollowers: "33K+",
  positioning: ["Creator Manager", "Influencer Marketing Strategist", "Creative Partner", "Video Editor"],
  description:
    "Akshada Sanap is a creator manager and influencer marketing strategist. She handles brand deals, strategy, scripting, editing and execution behind the creator.",
  intro:
    "Five years behind creators and brands: sourcing the deals, planning the content, writing the scripts, cutting the edits and chasing the approvals, so the person on camera can just create.",
  stats: [
    { value: "5+", label: "years across influencer marketing, content and brand operations" },
    { value: "300+", label: "creators managed across campaigns" },
    { value: "33K+", label: "followers on my own page, @akshsanap" },
  ],
};

/** Every task a creator never has to think about. Used for the draggable pills. */
export const services = [
  "Brand deal sourcing",
  "Brand outreach and pitching",
  "Brand partnerships",
  "Negotiations",
  "Creator-brand communication",
  "Deal coordination",
  "Content calendars",
  "Content planning",
  "Creative concepts",
  "Scriptwriting",
  "Creative direction",
  "Content approvals",
  "Publishing coordination",
  "Campaign execution",
  "Performance tracking",
];

export const stages = [
  {
    n: 1,
    name: "Find",
    line: "Opportunities don't arrive on their own.",
    body: "I go looking for the right brands, build the pitch, and open the door.",
    tasks: ["Brand deal sourcing", "Brand outreach and pitching", "Brand partnerships"],
    color: "bg-lilac",
    note: "inbox: checked",
  },
  {
    n: 2,
    name: "Close",
    line: "Between hello and signed there's a lot of talking.",
    body: "Negotiation, creator-brand communication and deal coordination, so the creator hears about it once, when it's ready.",
    tasks: ["Negotiations", "Creator-brand communication", "Deal coordination"],
    color: "bg-butter",
    note: "terms: agreed",
  },
  {
    n: 3,
    name: "Plan",
    line: "A good idea still needs a calendar and a script.",
    body: "Content planning, creative concepts, scriptwriting and creative direction, laid out month by month.",
    tasks: ["Content calendars", "Content planning", "Creative concepts", "Scriptwriting", "Creative direction"],
    color: "bg-acid",
    note: "calendar: sorted",
  },
  {
    n: 4,
    name: "Ship",
    line: "Posting is the last 10% and the easiest to drop.",
    body: "Approvals, publishing coordination, campaign execution and performance tracking, so nothing slips and you know what worked.",
    tasks: ["Content approvals", "Publishing coordination", "Campaign execution", "Performance tracking"],
    color: "bg-tomato text-paper",
    note: "reel: live",
  },
];

/** "Strategy & social, shown not told". Swap placeholders for real screenshots/PDFs. */
export const strategyExamples = [
  { title: "Monthly content calendar", state: "[Add a real calendar screenshot or PDF]" },
  { title: "Content pillars", state: "[Add pillars from a real account]" },
  { title: "Script and hook bank", state: "[Add a script sample]" },
  { title: "Performance tracking", state: "[Add a tracker screenshot. Only verified numbers.]" },
];

/** Creators and creative work showcased in the portfolio. */
export const managedCreators = [
  {
    id: "c1",
    reel: "https://www.instagram.com/peg.darling/",
    tint: "bg-paper",
    name: "Manisha Chetri",
    handle: "@peg.darling",
    niche: "Creator",
    scope:
      "Her creative operations, handled end to end — content strategy, scripting, video editing, brand partnerships, deal management and content calendars.",
  },
  {
    id: "c2",
    reel: "https://www.instagram.com/yashkalraaa/",
    tint: "bg-acid",
    name: "Yash Kalra",
    handle: "@yashkalraaa",
    niche: "Creator",
    scope:
      "From the first line to the final cut — scriptwriting, video editing, brand integrations and collaboration management.",
  },
  {
    id: "c3",
    reel: "https://www.instagram.com/durjoydatta/",
    tint: "bg-butter",
    name: "Durojay Datta",
    handle: "@durjoydatta",
    niche: "Creator",
    scope:
      "Keeping his content sharp and consistent through video editing and thoughtful content calendar planning.",
  },
  {
    id: "c4",
    reel: "https://www.instagram.com/simrankaursadana/",
    tint: "bg-tomato",
    name: "Simran Kaur Sadana",
    handle: "@simrankaursadana",
    niche: "Creator",
    scope:
      "A complete creative and management partnership — from content strategy and planning to scripting, execution and everything behind the scenes.",
  },
  {
    id: "c5",
    reel: "https://www.instagram.com/akshsanap/",
    tint: "bg-paper",
    name: "Akshada Sanap",
    handle: "@akshsanap",
    niche: "Personal brand",
    scope:
      "My own brand, my own backend. I handle the entire journey — ideation, strategy, scripting, shooting, editing and publishing.",
  },
  {
    id: "c6",
    reel: "https://www.instagram.com/akshdoesaitoo/",
    tint: "bg-acid",
    name: "Aksh Does AI Too",
    handle: "@akshdoesaitoo",
    niche: "AI content",
    scope:
      "The creative execution behind the page — from scripting ideas to editing every piece of content.",
  },
  {
    id: "c7",
    reel: "https://www.instagram.com/shivangichauhan.20/",
    tint: "bg-butter",
    name: "Shivangi Chauhan",
    handle: "@shivangichauhan.20",
    niche: "Creator",
    scope:
      "Bringing her content to life through video editing, while managing brand partnerships and deal coordination.",
  },
];

export type Contribution = "Concept" | "Script" | "Editing";
export type VideoItem = {
  id: string;
  title: string;
  src: string;
  poster: string;
  aspect: string; // CSS aspect-ratio
  whose: "own" | "creator" | "sample";
  whoseLabel: string;
  role: Contribution[];
  note: string;
};

/** The five uploaded videos, with ownership as you confirmed it. */
export const videos: VideoItem[] = [
  {
    id: "raw-vs-edited",
    title: "Raw vs edited",
    src: "/videos/raw-vs-edited.mp4",
    poster: "/posters/raw-vs-edited.jpg",
    aspect: "9 / 16",
    whose: "creator",
    whoseLabel: "A creator's reel",
    role: ["Concept", "Script", "Editing"],
    note: "Split screen of the raw take beside the finished cut, with captions, cutaways and product moments added.",
  },
  {
    id: "motion-explainer",
    title: "Motion graphics explainer",
    src: "/videos/motion-explainer.mp4",
    poster: "/posters/motion-explainer.jpg",
    aspect: "9 / 16",
    whose: "creator",
    whoseLabel: "A creator's reel",
    role: ["Concept", "Script", "Editing"],
    note: "Talking head cut with animated folder-tab graphics and kinetic type.",
  },
  {
    id: "talking-head-story",
    title: "Talking head with b-roll",
    src: "/videos/talking-head-story.mp4",
    poster: "/posters/talking-head-story.jpg",
    aspect: "9 / 16",
    whose: "creator",
    whoseLabel: "A creator's reel",
    role: ["Editing"],
    note: "Intro, retakes, b-roll and text overlays. Editing only; the creator led concept and script.",
  },
  {
    id: "collage-reel",
    title: "Collage-style personality reel",
    src: "/videos/collage-reel.mp4",
    poster: "/posters/collage-reel.jpg",
    aspect: "9 / 16",
    whose: "own",
    whoseLabel: "My own page, @akshsanap",
    role: ["Concept", "Script", "Editing"],
    note: "Sticker and cut-out collage over a striped background, with serif and handwritten type.",
  },
  {
    id: "experimental-vlog",
    title: "Experimental vlog sample",
    src: "/videos/experimental-vlog.mp4",
    poster: "/posters/experimental-vlog.jpg",
    aspect: "4 / 3",
    whose: "sample",
    whoseLabel: "Sample, not for a client",
    role: ["Editing"],
    note: "A personal experiment in pacing and close-up storytelling.",
  },
];

export type CaseStudy = {
  slug: string;
  brand: string;
  tint: string;
  /** "placeholder" shows a clear banner on the case-study page. Flip to "live" once filled. */
  status: "placeholder" | "live";
  sector: string;
};

/** Brands you mentioned. Relationship details are NOT assumed; add them in each case study. */
export const caseStudies: CaseStudy[] = [
  { slug: "bingo", brand: "Bingo!", tint: "bg-butter", status: "placeholder", sector: "FMCG" },
  { slug: "yoga-bar", brand: "Yoga Bar", tint: "bg-acid", status: "placeholder", sector: "FMCG" },
  { slug: "yippee", brand: "YiPPee!", tint: "bg-lilac", status: "placeholder", sector: "FMCG" },
  { slug: "maggi", brand: "Maggi", tint: "bg-tomato", status: "placeholder", sector: "FMCG" },
  { slug: "smaaash-live", brand: "Smaaash Live", tint: "bg-lilac", status: "placeholder", sector: "[Sector]" },
  { slug: "doolally", brand: "Doolally", tint: "bg-butter", status: "placeholder", sector: "[Sector]" },
  { slug: "tokyo-matcha-bar", brand: "Tokyo Matcha Bar", tint: "bg-acid", status: "placeholder", sector: "[Sector]" },
  { slug: "muso", brand: "Muso", tint: "bg-tomato", status: "placeholder", sector: "[Sector]" },
];

/** The fields every case study fills in. Each can later become a Behance project. */
export const caseStudyFields = [
  { key: "overview", title: "Project overview", hint: "[Add 2 to 3 lines on the brand and the campaign]" },
  { key: "objective", title: "Objective", hint: "[Add the goal the brand set]" },
  { key: "role", title: "My role", hint: "[Add exactly what you were responsible for]" },
  { key: "strategy", title: "Strategy", hint: "[Add how you picked creators and shaped the brief]" },
  { key: "execution", title: "Execution", hint: "[Add the process: onboarding, approvals, publishing]" },
  { key: "creative", title: "Creative examples", hint: "[Add campaign creatives, reels, screenshots]" },
  { key: "results", title: "Results (verified only)", hint: "[Add numbers only if the brand confirmed them]" },
];

export const campaignFacts = [
  "300+ creators managed across campaigns",
  "One large-scale creator campaign, run end to end",
  "Several smaller campaigns, 200+ creators collectively",
];

export const campaignScope = [
  "Creator sourcing and onboarding",
  "Influencer negotiations",
  "Campaign strategy",
  "Briefing and approvals",
  "Publishing coordination",
  "Brand communication",
  "Campaign execution",
];

export const experience = [
  {
    role: "Independent freelancer",
    org: "Self-employed",
    when: "January 2024 to present",
    points: [
      "Run influencer marketing campaigns independently, managing 300+ creators across multiple campaigns.",
      "Work across brand partnerships and creator management: sourcing, onboarding, negotiations, briefing, approvals and publishing.",
      "Handle social media strategy and content execution, plus video editing, creative direction and content planning.",
    ],
  },
  {
    role: "Director of Influencer Marketing",
    org: "The Pixelate",
    when: "Project basis, alongside freelancing",
    points: ["Worked with The Pixelate on a project basis while freelancing independently."],
  },
];

export const sectors = ["FMCG", "Lifestyle", "Fashion", "Beauty", "Food", "Hospitality"];

export const offers = [
  {
    id: "creator-management",
    title: "Full-service creator management",
    for: "Creators",
    body: "I become your backend partner: deals, planning, scripts, approvals and the follow-up nobody wants to do.",
    includes: ["Brand sourcing and pitching", "Negotiation and deal coordination", "Content calendars and creative direction", "Publishing and performance tracking"],
  },
  {
    id: "influencer-marketing",
    title: "Influencer marketing for brands",
    for: "Brands",
    body: "Campaigns from creator sourcing to publishing, run with one point of contact on your side.",
    includes: ["Creator sourcing and onboarding", "Negotiation, briefing and approvals", "Campaign strategy and execution", "Brand communication"],
  },
  {
    id: "creative-direction",
    title: "Creative direction and content strategy",
    for: "Creators, brands and agencies",
    body: "Pillars, monthly calendars, campaign concepts, scripts, hooks and captions, ready to shoot.",
    includes: ["Content pillars", "Monthly calendars", "Campaign concepts", "Scripts, hooks and captions"],
  },
  {
    id: "video-editing",
    title: "Video editing and post-production",
    for: "Creators and agencies",
    body: "Short-form edits with real storytelling in them: reels, brand videos, lifestyle and travel.",
    includes: ["Instagram reels", "Brand and campaign videos", "Lifestyle and travel edits", "Motion graphics and captions"],
  },
  {
    id: "social-media",
    title: "Social media management",
    for: "Brands and creators",
    body: "Strategy through execution, with performance tracked so the next month is smarter.",
    includes: ["Social strategy", "Content execution", "Publishing", "Performance tracking"],
  },
];

export const pathways = [
  { who: "I'm a creator", line: "Looking for someone to run the business side.", subject: "Creator management enquiry" },
  { who: "I'm a brand", line: "Looking for an influencer campaign.", subject: "Influencer marketing enquiry" },
  { who: "I'm an agency", line: "Looking for creative and editing support.", subject: "Agency collaboration enquiry" },
];
