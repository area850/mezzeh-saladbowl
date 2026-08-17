import { useState } from "react";
import bowlLoaded from "@/assets/bowl-loaded.png.asset.json";
import bowlTossed from "@/assets/bowl-tossed.png.asset.json";

type Option = {
  id: string;
  name: string;
  note: string;
  colors: string[];
  shape: "leaf" | "chunk" | "scatter" | "drizzle";
};

type Step = {
  key: string;
  label: string;
  hint: string;
  options: Option[];
};

export const STEPS: Step[] = [
  {
    key: "base",
    label: "Base greens",
    hint: "Pick your foundation",
    options: [
      { id: "romaine", name: "Crisp romaine", note: "Cool + crunchy", colors: ["#4f9d43", "#7cc35f", "#a7dd7f"], shape: "leaf" },
      { id: "spinach", name: "Baby spinach", note: "Soft, iron-rich", colors: ["#2f6f36", "#4b8c46", "#6fae5c"], shape: "leaf" },
      { id: "mixed", name: "Mixed leaves", note: "House blend", colors: ["#57a04a", "#8d3f52", "#9ecf72"], shape: "leaf" },
      { id: "quinoa", name: "Quinoa grain", note: "Extra filling", colors: ["#d8bd83", "#c2a163", "#eddcb4"], shape: "scatter" },
    ],
  },
  {
    key: "protein",
    label: "Protein",
    hint: "Add the substance",
    options: [
      { id: "chicken", name: "Grilled chicken", note: "Char-marked", colors: ["#d7a45d", "#b87b3c", "#f0c98d"], shape: "chunk" },
      { id: "falafel", name: "Falafel", note: "Vegan favourite", colors: ["#8b7a35", "#6d6027", "#a99a52"], shape: "chunk" },
      { id: "fish", name: "Pan fish", note: "Light + flaky", colors: ["#e4d5c1", "#cbb69c", "#f3e9dc"], shape: "chunk" },
      { id: "chickpea", name: "Spiced chickpeas", note: "Vegan", colors: ["#e0b96b", "#c9a052", "#f2d79b"], shape: "scatter" },
    ],
  },
  {
    key: "toppings",
    label: "Toppings",
    hint: "Colour and crunch",
    options: [
      { id: "tomato", name: "Cherry tomato", note: "Sweet + juicy", colors: ["#d64432", "#ef6250", "#b52f22"], shape: "scatter" },
      { id: "avocado", name: "Avocado", note: "Creamy", colors: ["#8fc04f", "#b9d97c", "#6d9c38"], shape: "chunk" },
      { id: "beet", name: "Roast beetroot", note: "Earthy", colors: ["#8e2f57", "#a8436d", "#6f2043"], shape: "chunk" },
      { id: "feta", name: "Feta crumble", note: "Salty finish", colors: ["#f7f2e7", "#e6dcc9", "#fffdf7"], shape: "scatter" },
      { id: "cabbage", name: "Red cabbage", note: "Crunch", colors: ["#7c3f77", "#9c5b93", "#5f2c5c"], shape: "scatter" },
      { id: "olive", name: "Green olives", note: "Briny", colors: ["#93a24a", "#7b8a37", "#b3bf6d"], shape: "scatter" },
    ],
  },
  {
    key: "dressing",
    label: "Dressing",
    hint: "Tie it together",
    options: [
      { id: "tahini", name: "Lemon tahini", note: "House pour", colors: ["#f1e3c4", "#e2cfa4", "#faf1dc"], shape: "drizzle" },
      { id: "vinaigrette", name: "Herb vinaigrette", note: "Bright + light", colors: ["#c9d97f", "#aec563", "#e0ecab"], shape: "drizzle" },
      { id: "chili", name: "Chili citrus", note: "A little heat", colors: ["#e2673a", "#cf5127", "#f18c60"], shape: "drizzle" },
    ],
  },
];

function IngredientSwatch({ option }: { option: Option }) {
  const [a, b, c] = option.colors;
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill={a} opacity="0.16" />
      {option.shape === "leaf" && (
        <>
          <path d="M14 40c0-14 12-24 26-25-1 15-11 26-26 25z" fill={a} />
          <path d="M26 46c3-10 12-16 22-16-3 11-12 18-22 16z" fill={b} opacity="0.9" />
          <path d="M20 44c8-4 14-11 17-18" stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      )}
      {option.shape === "chunk" && (
        <>
          <rect x="12" y="20" width="24" height="16" rx="5" fill={a} transform="rotate(-12 24 28)" />
          <rect x="28" y="30" width="22" height="15" rx="5" fill={b} transform="rotate(9 39 37)" />
          <rect x="20" y="14" width="16" height="10" rx="4" fill={c} opacity="0.85" />
        </>
      )}
      {option.shape === "scatter" && (
        <>
          <circle cx="22" cy="24" r="8" fill={a} />
          <circle cx="41" cy="30" r="10" fill={b} />
          <circle cx="28" cy="43" r="7" fill={c} />
          <circle cx="45" cy="17" r="4.5" fill={a} opacity="0.7" />
        </>
      )}
      {option.shape === "drizzle" && (
        <>
          <path d="M10 24c8 10 16-6 24 4s14-4 20 6" stroke={a} strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M10 40c8 8 16-4 24 4s14-2 20 4" stroke={b} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
        </>
      )}
    </svg>
  );
}

function BowlPreview({ picks }: { picks: Record<string, Option | undefined> }) {
  const tossed = picks['dressing']?.id !== "tahini" || picks['base']?.id === "mixed";
  const photo = tossed ? bowlTossed.url : bowlLoaded.url;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-muted">
      <img
        key={photo}
        src={photo}
        alt="A freshly made Mezzeh salad bowl"
        loading="lazy"
        className="aspect-square w-full animate-drop-in object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/60 to-transparent p-3">
        {STEPS.map((s) => {
          const pick = picks[s.key];
          if (!pick) return null;
          return (
            <span
              key={s.key}
              className="flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: pick.colors[0] }}
              />
              {pick.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function BuildYourBowl() {
  const [picks, setPicks] = useState<Record<string, Option | undefined>>({
    base: STEPS[0]?.options[0],
    protein: STEPS[1]?.options[0],
    toppings: STEPS[2]?.options[0],
    dressing: STEPS[3]?.options[0],
  });

  const summary = STEPS.map((s) => picks[s.key]?.name).filter(Boolean).join(" · ");
  const waMessage = encodeURIComponent(`Hi Mezzeh! I'd like a bowl: ${summary}`);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
      <div className="lg:sticky lg:top-24">
        <div className="rounded-3xl bg-card p-6 shadow-lift">
          <BowlPreview picks={picks} />
          <p className="mt-4 font-serif text-lg text-foreground">{summary}</p>
          <a
            href={`https://wa.me/251900000000?text=${waMessage}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Send this bowl on WhatsApp
          </a>
        </div>
      </div>

      <div className="space-y-8">
        {STEPS.map((step, i) => (
          <div key={step.key}>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
              <h3 className="font-display text-xl font-bold">{step.label}</h3>
              <span className="text-sm text-muted-foreground">{step.hint}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {step.options.map((opt) => {
                const active = picks[step.key]?.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPicks((p) => ({ ...p, [step.key]: opt }))}
                    aria-pressed={active}
                    className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft ${
                      active
                        ? "border-primary bg-primary/5 shadow-soft"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <IngredientSwatch option={opt} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium">{opt.name}</span>
                      <span className="block truncate text-xs text-muted-foreground">{opt.note}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
