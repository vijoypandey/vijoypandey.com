import { frontiers, thesis } from './site';

export const images = {
  forestGatherings: 'Vijoy_A_group_of_small_figures_scattered_across_a_dark_forest_a8dd8c89-2421-49cf-966f-dd694cee1c15_2.png',
  collectiveForest: 'Vijoy_A_group_of_small_figures_scattered_across_a_dark_forest_0a326983-473f-499f-b09b-54b98756d633_1.png',
  forestBlue: 'Vijoy_A_group_of_small_figures_scattered_across_a_dark_forest_a8dd8c89-2421-49cf-966f-dd694cee1c15_1.png',
  forestWarm: 'Vijoy_A_group_of_small_figures_scattered_across_a_dark_forest_a67ee0a5-9c9e-47fb-951d-6226bc39d39e_2.png',
  settlement: 'Vijoy_A_small_distinctive_research_settlement_being_absorbed__3cd50f91-22d2-4493-a0bc-c2a3b6d954cf_0.png',
  beyondTheBit: 'Vijoy_A_small_distinctive_research_settlement_being_absorbed__1a93a8eb-4d84-48ad-a93f-69a9d79637ae_3.png',
  field: 'Vijoy_imagine_a_vast_field_undulating_in_shallow_ups_and_down_726460bd-0c31-40ba-8edb-b20372d64316_3.png',
  circus: 'Vijoy_an_old_fairy_tale_like_circus_environment_with_a_juggle_73c79214-bdcb-4919-a608-849e83856c5e_1.png',
  wheels: 'Vijoy_Several_large_mechanical_wheels_turn_beside_a_river._Mo_bfdffe5c-d0d3-4061-bfea-f680f53fe511_3.png',
  presence: 'Vijoy_A_single_sharply_defined_silhouette_stands_at_the_cente_c7a750b2-3902-4a78-9376-ca8ec0b1fa52_3.png',
} as const;

export const frontierWorlds = [
  {
    ...frontiers[0], slug: 'emergent-superintelligence', question: 'What happens when intelligence becomes collective?',
    image: images.collectiveForest, imageAlt: 'Small figures stand around separate pools of light beneath immense dark trees',
    note: 'Many presences, one unfolding question.', folioImage: images.forestBlue,
    folioAlt: 'Separate figures and small blue lights appear between forest trunks',
    body: 'Connecting capable agents is not the same as making them think together. How do shared meaning, intent and context emerge across their boundaries?',
    inquiry: 'Agents may complete their individual assignments yet fail collectively. Shared meaning, intent, authority and reasoning are the next coordination challenges.',
  },
  {
    ...frontiers[1], slug: 'quantum-computing', question: 'What happens when entanglement spans distance?',
    image: images.field, imageAlt: 'Small observers face an undulating landscape beneath an immense horizon',
    note: 'Connections across an unfamiliar landscape.', folioImage: images.settlement,
    folioAlt: 'A tiny settlement is held within enormous shadowed arches',
    body: 'Beyond any individual quantum processor lies the challenge of establishing entanglement, preserving fidelity and coordinating quantum systems at distance.',
    inquiry: 'Quantum networks must distribute entanglement and coordinate operations without copying arbitrary unknown quantum states.',
  },
  {
    ...frontiers[2], slug: 'physical-ai', question: 'What happens when intelligence moves?',
    image: images.presence, imageAlt: 'A lone figure stands before translucent presences and delicate threads',
    note: 'Intelligence enters the world.', folioImage: images.forestWarm,
    folioAlt: 'Small lights and figures occupy many levels of a warm, dark forest',
    body: 'Embodied intelligence acts in a world that never stops moving. Can machines align perception, intent and action across space and time?',
    inquiry: 'Shared world state, uncertainty, local autonomy, and safe coordinated action define an emerging systems frontier.',
  },
  {
    ...frontiers[3], slug: 'boltzmann-computing', question: 'What happens when matter itself computes?',
    image: images.wheels, imageAlt: 'Giant waterwheels turn beside a river beneath a pale moon and a small observer',
    note: 'A world held in motion.', folioImage: images.field,
    folioAlt: 'Small observers stand across a vast field of changing light',
    body: 'Thermodynamic fluctuations and coupled oscillators invite us to compute with physical dynamics. What would scaling these systems actually mean?',
    inquiry: 'Physical stochastic dynamics and oscillator phase relationships offer distinct routes to computation, with important open questions about practical advantage and scale.',
  },
] as const;

export const frontierPath = (slug: string) => `/${slug}/`;

export const openingSlides = [
  {
    number: '01',
    label: 'The central thesis',
    headline: thesis.title,
    body: thesis.body,
    image: images.beyondTheBit,
    imageAlt: 'Tiny travellers approach a suspended settlement among monumental arches',
    note: 'A world larger than its inhabitants',
    slug: null,
  },
  ...frontierWorlds.map((world, index) => ({
    number: String(index + 2).padStart(2, '0'),
    label: world.name,
    headline: world.question,
    body: world.body,
    image: world.image,
    imageAlt: world.imageAlt,
    note: world.note,
    slug: world.slug,
  })),
];
