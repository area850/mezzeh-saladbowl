# Mezzeh Design Studio

Mezzeh Salad Bar — Website Build Prompt

A ready-to-use prompt for a coding AI (Claude Code, etc.) to generate a full single-page site.

1. Brief for the AI (paste this whole thing in)

Build a single-page, elevated, high-converting website for Mezzeh Salad Bar (also known to some guests as "Salad House"), a fresh/healthy casual restaurant and café in Bole, Addis Ababa, Ethiopia. This is a real business with no existing website — invent the full visual identity from scratch, grounded in the brand facts below. Do not use a generic AI-template look (no cream-background-with-terracotta-accent, no black-with-neon-accent, no broadsheet-hairline-newspaper layout) unless it's the genuine best fit — take one real design risk that's specific to this business.

Important honesty check: the client asked for "sexy, luxurious," but the real business is a small, casual, trendy salad bar and café — not fine dining. Translate "luxurious" as elevated, considered, premium-fresh (think: a design that feels like a boutique wellness/juice-bar brand you'd find in a design-forward city, not a gold-and-velvet restaurant). The site should still feel high-end and high-converting — just true to what a guest actually walks into. Note this framing back to the user rather than silently overriding it.

Brand facts to build from

Name: Mezzeh Salad Bar

Location: Bole, Addis Ababa. Street parking available (free and paid), can be somewhat hard to find a space — worth a small practical note on the site, not a hard problem like signage.

Space: small, clean, fresh, inviting. Reviewers repeatedly use "clean," "elegant," "cozy," "trendy," "calm vibes." Gets genuinely packed during lunch hours — that's a trust signal (busy = good), worth surfacing subtly (e.g., "book ahead for lunch").

Concept / core differentiator: a build-your-own salad bar — guests choose their own ingredients/components. This is the single most distinctive thing about the business and should anchor the site's signature visual moment. One reviewer specifically noted it would help to see photos next to each option when building a salad — treat that as a direct product cue: the site's salad-builder visual should be highly visual/photo-led, not just a text list.

Menu strengths (in order of how often praised):

Chicken wrap — called out repeatedly as excellent, "best I've ever had" by one guest.

Custom/build-your-own salad bowls — fresh, colorful, flavorful.

Coffee & espresso drinks — macchiato, caramel iced latte, mocha iced latte all get specific praise.

Stone Baked Omelet — a standout breakfast item.

Other liked items: hummus salad, falafel, chicken bowl, fish "gulash."

Cocktails are offered alongside coffee — worth a light mention (café-by-day, casual-drinks option) but not the headline.

Dietary/positioning strengths: healthy options, organic dishes, vegan and vegetarian options, small plates, quick bite — genuinely well-suited to health-conscious diners, solo diners, and people wanting a quick but quality meal.

Crowd: a mix of local regulars, tourists, and groups — flexible for solo lunch, a friend catch-up, or a small group.

Service tone: attentive, professional, swift, friendly — several reviews specifically praise staff responsiveness; a couple of isolated service hiccups exist (an order mix-up, food served room-temp near closing, music volume once too loud) but the overwhelming, recent pattern is positive and improving (ownership actively responds to and acts on feedback in reviews) — don't reference the complaints on the site, just let the confident, responsive-service tone inform the copy.

Price positioning: genuinely affordable — around ETB 800–1,000 per person, repeatedly called "reasonable" and "not expensive at all," especially relative to nearby Bole restaurants and cafés. Lead with "great value" as an active selling point, not something to downplay.

Accessibility: wheelchair-accessible toilet — worth a small mention in a practical-info footer.

Reservations: accepted — surface this clearly given the lunch-rush pattern.

Design direction (do this planning before writing code)

Palette — fresh and botanical rather than moody: think crisp whites/off-whites, a deep leafy green, a warm citrus or tomato accent (echoing fresh produce), and one grounding neutral (warm stone or charcoal) for text. Suggested starting point (name 4–6 real hex values): off-white/paper base, deep forest green, a bright citrus-orange or chili-red accent, warm charcoal for text, and a soft terracotta-adjacent but not the generic AI terracotta — pick something with more pink/tomato warmth if used. Avoid making it look like a generic wellness-brand template; ground choices in this specific menu (tomato, herb, citrus, olive tones) rather than abstract "healthy brand" colors.

Type — a confident, slightly editorial sans-serif for headlines (clean, modern, a little bit of character — not a default system font), paired with a warm, readable body sans or a humanist serif for longer descriptive text (menu blurbs, story section) to keep it from feeling clinical/corporate.

Signature element — a visual, photo-forward "Build Your Bowl" interactive moment: an illustrated or lightly interactive salad-builder showing base → protein → toppings → dressing, echoing the real in-store experience and directly answering the guest feedback about wanting visuals for each choice. This is the one place to spend the design's boldness — make it feel tactile and appetizing, not like a form.

Motion — restrained: soft scroll-reveals for menu items, a satisfying layered "build" animation for the signature bowl-builder section, gentle hover states. No excessive ambient animation — this brand's energy is "fresh and quick," not "moody and slow."

Photography — bright, natural light, close-up textures (fresh greens, glossy dressing, latte foam) rather than dark/candlelit — visually this brand is the tonal opposite of a moody fine-dining site, and that contrast should be intentional.

Site sections (single page, smooth-scroll nav)

Hero — name, one-line positioning written fresh by you (e.g. something around "fresh, built your way" — don't reuse this verbatim), primary CTA (Reserve a Table / Order / WhatsApp), secondary CTA (See Menu).

Build Your Bowl — the signature interactive/illustrated salad-builder moment (base greens → protein → toppings → dressing), photo-led per guest feedback.

Fan Favorites — a curated highlight menu, not the full menu: chicken wrap (headline item), Stone Baked Omelet, hummus salad, chicken bowl, coffee drinks (macchiato, caramel iced latte, mocha iced latte).

Why Mezzeh — 3 short value cards: Genuinely Fresh & Healthy (organic/vegan/vegetarian options), Great Value (ETB 800–1,000/person), Quick & Attentive Service.

The Vibe — short description of the small, clean, trendy Bole space; note it gets busy at lunch (social proof) and suggest reserving ahead.

What Guests Say — 4–5 short, paraphrased guest sentiments (do not copy exact review text verbatim — write original short lines capturing the same sentiment): the chicken wrap being a favorite, the build-your-own salad experience, clean and calm atmosphere, great value for Bole, friendly attentive staff.

Visit Us — address/area (Bole), parking note (street parking, arrive a little early as it can be tight), hours, wheelchair-accessible toilet note, reservation CTA.

Reserve / Contact — reservation form or WhatsApp/phone CTA, social links.

Footer — name, area, hours, socials.

Conversion requirements

Sticky/floating "Reserve a Table" CTA as the user scrolls, especially framed around lunch-rush urgency.

WhatsApp click-to-chat link alongside a phone number (standard expectation for Addis-area businesses).

Mobile-first: solo diners and tourists are likely finding this via phone/Instagram/Google Maps.

Fast load: keep the salad-builder interaction lightweight (CSS/SVG-based rather than heavy video).

Tech notes

Build as a single HTML/CSS/JS page (or React if the target environment is React/artifact-based) — no backend required for v1; reservation button can open a WhatsApp deep link or a simple mailto/form for now.

Build the "Build Your Bowl" section as inline SVG/CSS layered graphics so it can animate on scroll/interaction without heavy asset weight.

Structure the code so the "Fan Favorites" menu can later be swapped for real photography and a real menu-management flow without a rebuild.

2. Notes for you (not part of the AI prompt)

I reframed "sexy, luxurious" as "elevated and fresh" rather than literal fine-dining luxury — the reviews describe a small, clean, trendy, affordable salad bar, and a site that oversells opulence would set the wrong expectation walking in the door and could hurt trust/conversion rather than help it.

The build-your-own-salad feature is genuinely their strongest differentiator and directly ties to a piece of real customer feedback (wanting visuals per option) — that's why it's the signature design element rather than a generic hero shot.

If you want, I can build this out as a working artifact/site next — just say the word and pick a stack (plain HTML/CSS/JS vs. React).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mezzeh-saladbowl.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/55258934-0b25-4951-99ec-904333b3374a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
