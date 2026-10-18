# Artifact collection — editorial contract

This directory is the **single source for artifact content** on vijoypandey.com. It is a flat directory: **one Markdown file per artifact**, regardless of type or frontier. No duplicated entries across frontiers. The Design & UX workstream owns the Astro collection configuration, rendering, search, and presentation; Content & Editorial owns the entries and descriptions.

## Intellectual direction

**Beyond the Bit: What Should the Network Carry Next?** The site investigates computing beyond the individual node across four frontiers. It is a personal intellectual home—**learning, questioning, and sharing before self-promotion**—not an Outshift/Cisco marketing site. Original essays, Coherent Cognition podcast conversations, Cisco/Outshift research, third-party interviews, and compelling outside research belong in the same conversation, selected by relevance to an idea rather than by who made them.

The homepage architecture remains **Thesis → Four Frontiers → Currently Exploring → Worth Revisiting → Recent Activity**. The approved **Scientific Enchantment** design is frozen. Keep the prose scientifically careful without rigidly labeling every observation as knowledge, belief, or speculation.

## Frontmatter schema (v1)

```yaml
---
title: "A verified artifact title"
date: 2026-10-01 # optional; only when known and verified
type: article # article | podcast | research | talk | mention | project
provenance: curated # personal | organizational | appearance | curated
frontiers: [think, move] # at least one; multiple allowed
url: "https://example.org/original" # original source link, if available
description: "A concise, human-written description of why this matters."
---
```

The values in this example are **illustrative**, not a real publication record. Do not invent dates, URLs, attribution, or claims.

**Frontier mapping, in site order:**
- `think` → Collective Intelligence
- `entangle` → Quantum Computing
- `move` → Physical AI
- `fluctuate` → Boltzmann Computing (including appropriately distinguished thermodynamic and oscillator work)

**Provenance** describes the artifact's relationship to Vijoy, not necessarily its byline:
- `personal`: independent writing, Coherent Cognition, personal social posts.
- `organizational`: Cisco or Outshift publications.
- `appearance`: third-party earned/paid media, interviews, or material featuring or attributing Vijoy.
- `curated`: someone else's work that Vijoy found worth sharing.

No granular topic taxonomy and no separate author/contributor database. Source attribution belongs in the description, content, and original link where useful. Provenance is not a visible sorting hierarchy.

## Body and source handling

Use the Markdown body for original articles when the text can legitimately be republished; otherwise provide original commentary or a useful annotation and link to the source. A two-line observation about someone else's paper does **not** convert that paper into a personally authored article: it remains `curated`. Commentary is optional, especially for historical imports. Preserve factual text, images, links, and publication history when migrating. Avoid copying full external copyrighted material without rights.

An existing index/collection page (e.g. `/distributed-superintelligence/`) is **not itself automatically one artifact**: extract its distinct entries as individual records. Preserve original public paths for articles and pages whenever possible, and record redirects where unavoidable.

## Rendering and discovery contract (Design & UX)

- Each Markdown artifact generates **one dedicated, indexable HTML page** with title, date if known, type, description, body/commentary and link to original source where applicable.
- Each frontier page leads with its intellectual narrative, then shows **all matching artifacts**, initially ~6–8, with progressive **Show More**. No separate frontier-artifact list page. All artifact links must be present in static HTML for crawlers.
- The same artifact may appear on multiple frontiers by its tags without copying the entry.
- Generate type archives (`/articles/`, `/podcasts/`, `/research/`, `/talks/`, `/mentions/`, `/projects/`). They are absent from primary navigation but reachable via relevant links, search and sitemap.
- Site-wide search covers titles, descriptions, and Markdown body content; the Design chat handles its UI.
- Homepage modules draw from this same collection: curated **Currently Exploring**, **Worth Revisiting**, and verified chronological **Recent Activity**. No invented sample publications.
- Build-time Astro static HTML, semantic markup, canonical URLs, sitemap, and search-crawlable links support human and AI search discoverability.

## Division of work

**Content & Editorial:** inventory original HTML/content and media; convert one artifact at a time; verify source metadata, preserve legacy paths; assign `type`, `provenance`, and one or more frontier tags; add commentary only where meaningful.

**Design & UX:** own `src/content.config.ts` (or the correct Astro collection registration), artifact/frontier/archive templates, progressive disclosure, search, responsive layout, accessibility, URL resolution and sitemap. Coordinate concurrent GitHub changes; preserve the approved design. A committed Markdown record does not automatically mean the content is published—verify build and deployment separately.

## First migration

Start with the existing [Distributed Superintelligence collection](https://vijoypandey.com/distributed-superintelligence/), separating its linked articles, research, podcasts and appearances into independent artifacts tagged `think` (and any additional frontier only if substantively relevant). Keep the legacy URL reachable.
