import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { BuildYourBowl } from "@/components/BuildYourBowl";
import { Reveal } from "@/components/Reveal";
import heroBowl from "@/assets/hero-bowl.jpg";
import chickenWrap from "@/assets/chicken-wrap.jpg";
import omelet from "@/assets/omelet.jpg";
import hummus from "@/assets/hummus.jpg";
import chickenBowl from "@/assets/chicken-bowl.jpg";
import icedLatte from "@/assets/iced-latte.jpg";
import juicesSmoothies from "@/assets/juice.jpg";
import interior from "@/assets/interior.jpg";

const PHONE = "+251964666644";
const WHATSAPP = `https://wa.me/251900000000?text=${encodeURIComponent(
  "Hi Mezzeh! I'd like to reserve a table.",
)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "icon",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23173D25'/%3E%3Cpath d='M13 31h38c-2 13-9 21-19 21S15 44 13 31Z' fill='none' stroke='white' stroke-width='4'/%3E%3Cpath d='M19 31c3-7 8-11 13-11s11 4 13 11' fill='none' stroke='white' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M25 20c-2-5 0-8 4-11M39 20c2-4 0-7-3-10' fill='none' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E",
      },
    ],
    meta: [
      {
        title: "Mezzeh Salad Bar — Build-Your-Own Salads in Bole, Addis",
      },
      
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#build", label: "Build Your Bowl" },
  { href: "#favorites", label: "Fan Favorites" },
  { href: "#why", label: "Why Mezzeh" },
  { href: "#vibe", label: "The Vibe" },
  { href: "#visit", label: "Visit" },
];

const FAVORITES = [
  {
    name: "The Chicken Wrap",
    blurb:
      "The one people come back for. Warm flatbread, char-grilled chicken, crisp leaves, house sauce.",
    tag: "Most ordered",
    image: chickenWrap,
  },
  {
    name: "Stone Baked Omelet",
    blurb: "Breakfast built to linger over — baked till puffed, finished with fresh herbs.",
    tag: "Breakfast",
    image: omelet,
  },
  {
    name: "Curated Salads",
    blurb: "Crisp greens, vibrant vegetables, and a light dressing come together for a refreshing everyday salad.",
    tag: "Vegan",
    image: hummus,
  },
  {
    name: "Chicken Bowl",
    blurb: "Grain base, grilled chicken, avocado and roast vegetables. A full lunch, no heaviness.",
    tag: "Filling",
    image: chickenBowl,
  },
  {
    name: "Caramel Iced Latte",
    blurb: "Alongside the macchiato and mocha iced latte — the coffee side is no afterthought.",
    tag: "Café",
    image: icedLatte,
  },
  {
    name: "Juices & Smoothies",
    blurb: "Freshly pressed, blended, and served cold. A bright, healthy way to start or finish your meal.",
    tag: "Café",
    image: juicesSmoothies,
  },
];

const VALUES = [
  {
    title: "Genuinely fresh & healthy",
    body: "Organic dishes, vegan and vegetarian options, small plates. Nothing sitting around waiting for you.",
  },
  {
    title: "Great value",
    body: "Around ETB 800–1,000 a person. For Bole, that's a quietly excellent deal — and we intend to keep it that way.",
  },
  {
    title: "Quick & attentive",
    body: "Built for a real lunch break. Order, get looked after properly, and be back on your day.",
  },
];

const QUOTES = [
  { text: "The chicken wrap is the reason I keep coming back on Thursdays.", who: "Regular, Bole" },
  { text: "I picked every single thing in my bowl and it still came out balanced.", who: "First visit" },
  { text: "Small room, spotless, calm. Easy place to eat alone with a book.", who: "Solo lunch" },
  { text: "Better value than anything else on this street, honestly.", who: "Works nearby" },
  { text: "Staff noticed we were in a hurry and had us out in twenty minutes.", who: "Group of four" },
];

function Index() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
            Mezzeh<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="px-5 pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <div>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] text-balance-tight sm:text-6xl lg:text-7xl">
              Every bowl here is <span className="text-primary">an argument</span> you win with
              yourself.
            </h1>
            <p className="mt-5 max-w-lg font-serif text-lg leading-relaxed text-muted-foreground">
              Pick the greens. Pick the protein. Pick how far you take the toppings. We keep it
              fresh, fast and honestly priced — then get out of your way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Reserve a table
              </a>
              <a
                href="#favorites"
                className="rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                See the menu
              </a>
            </div>
            </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-lift">
              <img
                src={heroBowl}
                alt="A build-your-own salad bowl with chicken, avocado, tomatoes and chickpeas"
                width={1408}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-card px-5 py-3 shadow-soft sm:-left-8">
              <p className="font-display text-2xl font-bold text-primary">ETB 800–1,000</p>
              <p className="text-xs text-muted-foreground">typical spend per person</p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Bowl */}
      <section id="build" className="bg-secondary/50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              The signature move
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold sm:text-5xl">
              Build your bowl before you even arrive.
            </h2>
            <p className="mt-4 max-w-xl font-serif text-lg text-muted-foreground">
              Same four steps you'll walk through at the counter. Tap along, watch it stack up, and
              send us the order if you like what you see.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <BuildYourBowl />
          </Reveal>
        </div>
      </section>

      {/* Fan Favorites */}
      <section id="favorites" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Fan favorites</h2>
            <p className="mt-3 max-w-xl font-serif text-lg text-muted-foreground">
              Not the whole menu — just the things people order twice.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FAVORITES.map((item, i) => (
              <Reveal key={item.name} delay={i * 70}>
                <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-soft transition-transform hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      width={900}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold">{item.name}</h3>
                    <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground">
                      {item.blurb}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mezzeh */}
      <section id="why" className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <span className="font-display text-3xl font-extrabold text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The Vibe */}
      <section id="vibe" className="bg-primary px-5 py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={interior}
                alt="The bright, plant-filled interior of Mezzeh Salad Bar"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">The room</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed opacity-90">
              Small, spotless, plant-heavy, calm. The kind of place you can eat alone without
              feeling like you're taking up space, or pull two tables together for friends.
            </p>
            <p className="mt-4 font-serif text-lg leading-relaxed opacity-90">
              Between noon and two it genuinely packs out — which we take as the compliment it is.
              Message ahead and we'll hold you a table.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary"
            >
              Hold me a lunch table
            </a>
          </Reveal>
        </div>
      </section>

      {/* Guests */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">What guests say</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {QUOTES.map((q, i) => (
              <Reveal key={q.text} delay={i * 70}>
                <figure className="h-full rounded-3xl bg-secondary/60 p-6">
                  <blockquote className="font-serif text-lg leading-relaxed">"{q.text}"</blockquote>
                  <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {q.who}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-border bg-card p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="font-display text-4xl font-extrabold">Visit us</h2>
            <dl className="mt-7 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-primary">Where</dt>
                <dd className="mt-1 font-serif text-base text-muted-foreground">
                  Bole, Addis Ababa, Ethiopia
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Hours</dt>
                <dd className="mt-1 font-serif text-base text-muted-foreground">
                  Mon–Sat 7:30–22:00 · Sun 8:00–21:00
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Parking</dt>
                <dd className="mt-1 font-serif text-base text-muted-foreground">
                  Street parking, free and paid. Spaces get tight around lunch — give yourself an
                  extra five minutes.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Access</dt>
                <dd className="mt-1 font-serif text-base text-muted-foreground">
                  Wheelchair-accessible toilet on site.
                </dd>
              </div>
            </dl>
          </div>

          <div id="reserve" className="rounded-3xl bg-secondary/60 p-7">
            <h3 className="font-display text-2xl font-bold">Reserve or ask</h3>
            <p className="mt-2 font-serif text-base text-muted-foreground">
              Reservations are accepted and strongly recommended for weekday lunch.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Reserve on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex w-full items-center justify-center rounded-full border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Call {PHONE}
              </a>
              <a
                href="mailto:hello@mezzeh.et"
                className="flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                hello@mezzeh.et
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold">
              Mezzeh Salad Bar<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-muted-foreground">Bole, Addis Ababa · Daily from 7:30</p>
          </div>
          <div className="flex gap-5 text-sm text-muted-foreground">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary">
              Facebook
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-primary">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-4 transition-all duration-300 ${
          showSticky ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        </div>
    </div>
  );
}
