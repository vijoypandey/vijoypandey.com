# Artifact archives and editorial migration

## Archive landing copy
These are the sources, conversations and artifacts that shape the inquiry: my writing and podcasts, research papers, talks, interviews, mentions and selected projects. Their value here comes from the ideas they clarify—not whether I authored them.

## Canonical model
Each artifact has one durable canonical record with fields:
`id`, `title`, `type` (article, podcast, research, talk, mention, project), `published_at` when verified, `canonical_url`, `legacy_url` when applicable, `authors`, `summary`, `frontiers[]`, `topics[]`, `featured`, `source_status`.

A single artifact can be tagged to multiple frontiers: collective-intelligence, quantum-computing, physical-ai, boltzmann-computing. Topic tags are separate, extensible vocabulary.

Type archives are discoverable but absent from primary navigation. A frontier renders curated features and tagged artifacts. The homepage draws from the same canonical collection for Currently Exploring, Worth Revisiting and Recent Activity; never duplicate records.

## Migration requirements
Preserve existing public URLs, canonical source attribution and historical articles. Reconcile WordPress pages, research projects, podcasts, talks, mentions, patents and media references against verified sources before importing. Keep unknown dates and missing URLs blank rather than inventing them. Source material from the original site must be retained even when reframed.

The homepage's currently hardcoded sample activity and podcast entries must not be represented as published facts. Replace them only after verifying the source and destination links.

## Editorial safeguard
These files are staging copy and do not affect live routes. Approved design system is unchanged. Additional implementation and deployment verification are required to make them appear on the site.
