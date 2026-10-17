# vijoypandey.com — Design Language v0.1

**Status:** Approved creative direction; detailed UI specifications remain experimental. This is not a final or frozen design system.  
**Companion:** [Site Architecture v1.0](./SITE_ARCHITECTURE.md)

## North star — approved verbatim

> **The website should feel like opening an extraordinary illustrated book about worlds that don't yet fully exist.**

This is an illustrated book of scientific wonders: **magical, fantastical, surprising, and intellectually serious**. Quantum phenomena, thermodynamics, coordinated intelligence, and embodied machines should evoke genuine wonder. The science is not fantasy; the imagery can feel fantastical.

**Operating distinction:** The imagery evokes what might be possible. The writing explains what we know. The evidence shows what we've built.

## Character and art direction

- An **old illustrated fairy tale / expedition into natural philosophy**, not a conventional technology or executive website.
- Monumental environments and architecture alongside tiny human figures; exaggerated scale, flattened or warped perspective, uncanny but carefully composed spatial relationships.
- Strong atmospheric depth; fine graphite, engraving, stippling, textured paper or painterly grain; restrained and earthy color.
- Visual metaphors, not literal diagrams or claims of physical mechanisms. Avoid implying a speculative depiction is established research.
- Dark woods, improbable settlements, delicate threads, energy fields, vast landscapes, motion and uncertainty. Elegance and mystery, never kitsch.
- A world that unfolds across pages; different frontiers can have different landscapes while retaining one consistent authored visual voice.
- Prefer real authored Midjourney artwork provided by Vijoy over auto-generated geometric filler. Do **not** generate substitutes without approval.

## Palette — provisional

Visual restraint in the interface offsets intensity of artwork.

- Main canvas: warm ivory, parchment, beige, light stone and nuanced gray.
- Main text: deep charcoal / warm near-black, never stark neon.
- Dark interludes: warm ink-black or charcoal, to give large images atmosphere.
- Accent: sparse rust, amber, forest green or muted slate **drawn from the artwork**.
- Avoid bright pastels, lavender-heavy background blocks, highly saturated template palettes, gradients, neon blue, glowing network grids.

No exact hex values are locked yet.

## Typography — approved direction

- **Editorial serif** for major headings: elegant, expressive, book-like, with intentional scale.
- **Clean sans-serif** for body, navigation, and descriptions: legible even in long technical essays.
- Restrained small metadata; monospace only when genuinely useful for references or technical labels.
- Images and typography share attention: don't let oversized novelty type compete with intricate illustration.
- Avoid generic tech-dashboard typography and all-caps labels everywhere.

Specific font families, sizes and spacing are pending prototype approval.

## Layout and rhythm

- The design should reward **visual exploration**: full-size, visually striking images, page-like pacing, shifts between dark and light, bold but disciplined composition.
- Hero: compelling illustration + one clean, readable intellectual thesis. A split composition is worth testing; **not yet locked**.
- Frontiers: powerful artwork paired with a title and the locked subtitle; avoid four generic equal-sized app cards as the only expression.
- Currently Exploring: distinctive media treatment in reusable blocks.
- Worth Revisiting: one selected artifact with an image-led editorial treatment.
- Recent Activity: quiet, dated, text-forward list as a counterbalance.
- Build a repeatable system that works for both sparse and rich frontiers and for automatic editorial additions.
- Preserve intended image compositions and focal points. Avoid aggressive cropping, especially when tiny figures establish scale. Support multiple aspect ratios.
- Do not put dense body text over intricate artwork. Keep contrast, readability, mobile breakpoints, and reduced-motion accessibility.

## Interaction

Navigation remains **Thesis** (overview + four frontier dropdown) and **About** (Personal, Work, Contact), per architecture v1.0. Interaction should be subtle: page reveals, small motions, visual transitions like turning a page or entering a new landscape. No gratuitous parallax or animations that delay reading. A static build must remain excellent.

## Image asset plan (7 supplied reference images; upload into repository pending)

Intended repo directory: `public/images/design-exploration/`. File basenames below are proposed stable IDs, **not claims that the binaries have been committed**.

| ID | Proposed filename | Motif and composition |
|---|---|---|
| 01 | `forest-lit-gatherings.png` | Towering trunks, lit platforms, dispersed figures; collective activity at immense scale |
| 02 | `settlement-in-vast-architecture.png` | A small city/settlement amid giant shadowed arches; monumental scale and emergence |
| 03 | `undulating-field.png` | Horizon, glowing valleys and small observers; states, fluctuations and possibility |
| 04 | `single-figure-collective-presence.png` | Lone silhouette, translucent forms and threads; relationship between individual and collective |
| 05 | `forest-warm-lights.png` | Forest elevations with amber lanterns; distributed presences |
| 06 | `forest-blue-lights.png` | Dark forest with blue-lit niches; repetition, separation, connection |
| 07 | `circus-oscillator-balance.png` | Unusual circus with a tightrope performer and suspended weights; dynamic balance |

Artwork assignments to particular frontiers are **provisional**. Do not assume an illustration proves or literally represents a scientific phenomenon.

## Implementation direction — not yet approval

Build a fourth experiment **Scientific Enchantment**, informed by the earlier Visual Atlas composition, but with muted neutral surfaces, serif/sans contrast, actual supplied images, and stronger storybook pacing. Use the five homepage sections exactly as specified in `SITE_ARCHITECTURE.md`. Keep current production homepage and existing prototypes unchanged until approval.

Review desktop and mobile, including art crops and contrast. Do not create a final locked `DESIGN_SYSTEM.md` until Vijoy approves a prototype.

## Anti-patterns

Generic AI/enterprise landing page; stock robots, brains and glowing circuitry; neon quantum imagery; cookie-cutter square cards; tiny artwork thumbnails; arbitrary dramatic cropping; constant motion; an overwhelming wall of illustration; fantasy claims presented as established science.

## Decision control

This document captures the approved **feeling** and evolving visual hypothesis. The site architecture remains authoritative. Any agent-driven content update must respect the final design system once approved. This file may evolve during visual experiments only with Vijoy's direction.
