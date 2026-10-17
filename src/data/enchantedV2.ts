import { frontiers, thesis } from './site';

export const images = {
  forestGatherings: 'Vijoy_A_group_of_small_figures_scattered_across_a_dark_forest_a8dd8c89-2421-49cf-966f-dd694cee1c15_2.png',
  forestBlue: 'Vijoy_A_group_of_small_figures_scattered_across_a_dark_forest_a8dd8c89-2421-49cf-966f-dd694cee1c15_1.png',
  forestWarm: 'Vijoy_A_group_of_small_figures_scattered_across_a_dark_forest_a67ee0a5-9c9e-47fb-951d-6226bc39d39e_2.png',
  settlement: 'Vijoy_A_small_distinctive_research_settlement_being_absorbed__3cd50f91-22d2-4493-a0bc-c2a3b6d954cf_0.png',
  field: 'Vijoy_imagine_a_vast_field_undulating_in_shallow_ups_and_down_726460bd-0c31-40ba-8edb-b20372d64316_3.png',
  circus: 'Vijoy_an_old_fairy_tale_like_circus_environment_with_a_juggle_73c79214-bdcb-4919-a608-849e83856c5e_1.png',
  presence: 'Vijoy_A_single_sharply_defined_silhouette_stands_at_the_cente_c7a750b2-3902-4a78-9376-ca8ec0b1fa52_3.png',
} as const;

export const frontierWorlds = [
  {
    ...frontiers[0],
    slug: 'collective-intelligence',
    question: 'What happens when intelligence becomes collective?',
    image: images.forestGatherings,
    imageAlt: 'Tiny figures gather on lit platforms among immense dark trees',
    folioImage: images.forestBlue,
    folioAlt: 'Separate figures and small blue lights appear between forest trunks',
    body: 'What changes when thinking entities share context and coordinate action? The path from isolated agents to connected systems is an inquiry into what intelligence can become together.',
    inquiry: 'The path from isolated agents to connected systems can pass through islands of shared context, coordination, and new collective behavior. Emergence remains a question to investigate, not a guaranteed result.',
  },
  {
    ...frontiers[1],
    slug: 'boltzmann-computing',
    question: 'What happens when matter itself computes?',
    image: images.circus,
    imageAlt: 'A performer balances on a wheel beneath suspended weights and fine strings',
    folioImage: images.field,
    folioAlt: 'Small observers stand across a vast field of changing light',
    body: 'Thermodynamics and oscillator dynamics invite a different question: what kinds of computation can arise from the behavior of physical systems themselves?',
    inquiry: 'Physical processes can become part of a computational method. Thermodynamic systems and oscillator dynamics are distinct avenues of inquiry, with their useful behavior to be established by research and experiments.',
  },
  {
    ...frontiers[2],
    slug: 'quantum-computing',
    question: 'What happens when entanglement spans distance?',
    image: images.field,
    imageAlt: 'Small observers face an undulating landscape beneath an immense horizon',
    folioImage: images.settlement,
    folioAlt: 'A tiny settlement is held within enormous shadowed arches',
    body: 'The challenge extends beyond any one quantum processor. How might coherence and entanglement be preserved and distributed as quantum systems grow into networks?',
    inquiry: 'A quantum network asks how processors might connect while preserving the fragile states that make them useful. The illustration suggests scale and possibility; the evidence must come from real devices and experiments.',
  },
  {
    ...frontiers[3],
    slug: 'physical-ai',
    question: 'What happens when intelligence moves?',
    image: images.presence,
    imageAlt: 'A lone figure stands before translucent presences and delicate threads',
    folioImage: images.forestWarm,
    folioAlt: 'Small lights and figures occupy many levels of a warm, dark forest',
    body: 'Embodied intelligence encounters space, time, and other actors. This frontier explores how individual machines might become coordinated physical systems.',
    inquiry: 'Movement makes intelligence physical: perception, timing, and coordination must work in a shared environment. The frontier asks how individual machines might act together across that world.',
  },
] as const;

export const openingSlides = [
  {
    number: '01',
    label: 'The central thesis',
    headline: thesis.title,
    body: thesis.body,
    image: images.settlement,
    imageAlt: 'A small research settlement among monumental shadowed arches and tiny travellers',
    slug: null,
  },
  ...frontierWorlds.map((world, index) => ({
    number: String(index + 2).padStart(2, '0'),
    label: world.name,
    headline: world.question,
    body: world.body,
    image: world.image,
    imageAlt: world.imageAlt,
    slug: world.slug,
  })),
];
