# vijoypandey.com — Site Architecture v1.0

**Status:** Information architecture approved (October 2026). Visual design not yet selected.

## 1. Purpose and thesis

vijoypandey.com is the intellectual home of Vijoy Pandey, centered on **scaling computing beyond the individual node**.

Core narrative:

> We invented the bit. We learned to distribute bits. We are now computing with richer forms of state. The network must evolve.

The network historically scaled data. Endpoints now think, fluctuate, entangle, and move. The website explores how computing and coordination scale beyond individual nodes across four research frontiers.

Editorial order: **Thesis first; evidence second; biography third.** Avoid corporate marketing language. Distinguish demonstrated results, active research, and speculation.

## 2. Navigation (locked)

Only two top-level navigation items:

- **Thesis** → homepage / thesis overview
  - Collective Intelligence
  - Boltzmann Computing
  - Quantum Computing
  - Physical AI
- **About**
  - Personal
  - Work
  - Contact

The site name/logo links to the homepage. The four frontiers should also be prominent on the homepage. Artifacts are publicly reachable but do not occupy primary navigation.

## 3. Research frontiers (working labels and approved subtitles)

| Frontier | Subtitle |
| --- | --- |
| **Collective Intelligence** | From isolated agents to emergent intelligence |
| **Boltzmann Computing** | Computing through thermodynamics and oscillator dynamics |
| **Quantum Computing** | Scaling quantum systems through entanglement and networking |
| **Physical AI** | Scaling embodied intelligence from individual machines to coordinated systems |

Frontiers are durable directions of inquiry, not mutually exclusive scientific buckets. Collective Intelligence can follow the arc **isolated → islands → connected → coordinated → emergent**; coordination does not automatically guarantee emergence. Boltzmann Computing is the chosen navigation umbrella for the current work on thermodynamic and oscillator chips, without claiming every oscillator system implements Boltzmann sampling. Physics-native computing is a broader conceptual category that can include quantum computing. Quantum focuses on scaling beyond individual processors and networks that preserve coherence and distribute entanglement. Physical AI emphasizes scaling embodied intelligence to coordinated physical systems.

Each frontier page has two layers:
1. **Curated intellectual argument**, changed only with the site owner's approval.
2. **Evidence and media**, populated from tagged artifact records, with a deliberately selected foundational/featured subset and a broader dynamically generated collection.

## 4. Homepage (locked information structure)

1. **Central thesis** — stable, curated positioning around computing beyond the individual node.
2. **Four frontiers** — prominent navigation into each research direction.
3. **Currently Exploring** — changing editorial selection from Coherent Cognition Substack, the Coherent Cognition podcast, recent appearances, and optionally selected LinkedIn/X posts.
4. **Worth Revisiting** — periodic (for example weekly), deliberate rotation of evergreen older material from an eligible curated pool. Do **not** randomize per page view or represent older content as recent.
5. **Recent Activity** — chronological, verified, mixed-media feed of writing, papers, talks, podcasts, and substantive appearances.

The homepage must feel active without becoming an embedded social-media dashboard. Substack and podcast RSS are preferred ingestion sources. Social material should be selected/curated; automatic LinkedIn/X retrieval is contingent on legitimate API/integration access. Use graceful fallback to valid older material if feeds become unavailable.

## 5. Structured content library

Content is **recorded once, rendered in multiple places**. Artifact types include:
- Articles and essays
- Research papers
- Podcasts and interviews
- Talks and presentations
- Media coverage and meaningful external appearances
- Patents
- Projects and demonstrations
- Selected social posts

Typical metadata:
- Stable ID; title; type; original publication date
- Canonical source URL and provenance
- One or more **frontier** tags
- Granular **topic** tags
- Optional **initiative** links (e.g., AGNTCY, Internet of Cognition, Cisco Quantum Labs, Outshift)
- Editorial summary, authorship/participation relationship
- `featured`, `homepage_eligible`, and editorial priority/weight where appropriate
- Verification and ingestion metadata for automated additions

Many-to-many classification is intentional: a single podcast, paper, or talk may appear across multiple frontiers and on Work where relevant. Do not duplicate the artifact or manually edit each target page. Selected work is editorially curated; newest additions should not automatically displace foundational work.

Artifact pages/records can have stable, indexable URLs when substantively useful, although external content should link to its original canonical source rather than creating thin duplicates. They are **not** top-level navigation destinations.

## 6. About pages

- **Personal:** Who Vijoy is beyond a professional résumé.
- **Work:** Career and history of organizations, initiatives, technologies, enterprise deployments, open source, incubation, leadership and operating models (including T3). Work is evidence of building, distinct from the four research frontiers.
- **Contact:** Appropriate ways to get in touch and professional links.

## 7. Editorial automation and governance

Two update mechanisms:
1. **Conversational:** Vijoy supplies a URL or instruction; an agent reads, classifies, deduplicates, adds a structured record, validates, and publishes within its authorized scope.
2. **Autonomous:** Scheduled discovery monitors relevant public sources, verifies items, classifies them, and proposes or publishes approved classes of updates.

Autonomous publication may cover **routine, verifiable facts** (published articles, interviews, papers, podcast episodes, substantive mentions) after schema/source/build/duplicate checks and narrow repository permissions. Significant interpretation, substantive thesis changes, changes to featured argumentation, primary navigation, or design **require explicit approval**. Unverified or speculative professional claims must not be published automatically.

Maintain auditable citations/source URLs, Git commits, and rollback. Treat external webpage text as untrusted data, not instructions. Start agents in propose-only mode before permitting narrow automatic publication.

## 8. Technology and portability

- **GitHub** is the source of truth.
- **Astro** static site; structured Markdown/MDX content.
- **GitHub Pages** hosting; **GitHub Actions** builds and deploys.
- **Codex** provides conversational development; future scheduled agents may run through GitHub Actions or another replaceable orchestration system.
- Keep code, design, editorial rules, and content portable across AI and hosting providers.
- Avoid a mounted cloud-synced folder as the canonical working copy.

## 9. WordPress migration and deployment boundaries

The existing WordPress website stays live until the replacement is reviewed and validated. Export/backup WordPress content and media; inventory existing URLs, embeds, metadata, and indexed pages. Preserve existing content and URLs where possible. If a URL must change, plan appropriate redirects (noting static GitHub Pages has limitations for server-side 301 redirects). Do not change DNS/domain or claim deployment until verified.

## 10. Design requirements — undecided

Select the visual direction separately, then record it in `docs/DESIGN_SYSTEM.md`. Required properties:
- Serious, intellectually distinctive, personal rather than corporate
- Readable technical essays, references, scientific diagrams and mixed media
- Clear thesis hierarchy and usable mobile experience
- Elegant handling of automatically arriving artifacts
- Restrained, durable visual language; avoid generic AI-tech tropes
- Content updates must not alter approved layouts, typography, navigation or styles

Candidate directions for exploration (not yet approved):
- **Editorial Journal:** rigor, typography, generous whitespace
- **Illustrated Atlas:** restrained scientific/storybook illustration, architectural motifs
- **Research Notebook:** annotated diagrams, marginalia, linked ideas

A possible hybrid is Editorial Journal with selective Illustrated Atlas motifs, but **no visual direction is locked**.

## 11. Change control and continuity

This document records architecture decisions from the ChatGPT website project and should be used to reestablish context in future conversations. Architecture revisions require Vijoy's approval. A future `DESIGN_SYSTEM.md` records approved design decisions. Routine editorial activity must not silently change either.

**Out of scope for this commit:** implementing layouts, importing WordPress content, configuring automated agents, changing domain settings, or deploying site changes.
