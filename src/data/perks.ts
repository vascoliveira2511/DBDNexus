import { Perk, Character } from '@/types/perk'

export const survivorPerks: Perk[] = [
  {
    id: 'borrowed-time',
    name: 'Borrowed Time',
    description:
      'When unhooking another Survivor, they gain Endurance for a limited time, protecting them from one damage state.',
    character: 'William "Bill" Overbeck',
    role: 'survivor',
    tier: 2,
    category: ['altruistic', 'endgame'],
    synergies: ['we-will-make-it', 'kindred', 'guardian'],
    counters: ['make-your-choice', 'exposed'],
    difficulty: 'intermediate',
    meta_rating: 8,
    icon_url: '/icons/perks/borrowed-time.png',
    unlocked_at: 'teachable',
    teachable_level: 35,
  },
  {
    id: 'decisive-strike',
    name: 'Decisive Strike',
    description:
      'After being unhooked, you can stun the killer if they grab you within a limited time window.',
    character: 'Laurie Strode',
    role: 'survivor',
    tier: 3,
    category: ['anti-tunnel', 'endgame'],
    synergies: ['off-the-record', 'dead-hard', 'deliverance'],
    counters: ['pyramid-head-cage', 'forced-penance'],
    difficulty: 'intermediate',
    meta_rating: 9,
    icon_url: '/icons/perks/decisive-strike.png',
    unlocked_at: 'teachable',
    teachable_level: 40,
  },
  {
    id: 'self-care',
    name: 'Self-Care',
    description:
      'You can heal yourself without a med-kit, but at reduced speed.',
    character: 'Claudette Morel',
    role: 'survivor',
    tier: 1,
    category: ['healing', 'solo'],
    synergies: ['botany-knowledge', 'desperate-measures'],
    counters: ['sloppy-butcher', 'coulrophobia'],
    difficulty: 'beginner',
    meta_rating: 4,
    icon_url: '/icons/perks/self-care.png',
    unlocked_at: 'teachable',
    teachable_level: 40,
  },
  {
    id: 'sprint-burst',
    name: 'Sprint Burst',
    description:
      'When starting to run, break into a sprint at increased speed for a short duration.',
    character: 'Meg Thomas',
    role: 'survivor',
    tier: 2,
    category: ['chase', 'mobility'],
    synergies: ['vigil', 'fixated'],
    counters: ['exhaustion-effects', 'blood-echo'],
    difficulty: 'beginner',
    meta_rating: 7,
    icon_url: '/icons/perks/sprint-burst.png',
    unlocked_at: 'teachable',
    teachable_level: 35,
  },
  {
    id: 'dead-hard',
    name: 'Dead Hard',
    description:
      'When injured, press the action button to become invulnerable for a short time.',
    character: 'David King',
    role: 'survivor',
    tier: 3,
    category: ['chase', 'endurance'],
    synergies: ['decisive-strike', 'off-the-record'],
    counters: ['exhaustion-effects', 'blood-echo'],
    difficulty: 'advanced',
    meta_rating: 8,
    icon_url: '/icons/perks/dead-hard.png',
    unlocked_at: 'teachable',
    teachable_level: 35,
  },
  {
    id: 'prove-thyself',
    name: 'Prove Thyself',
    description:
      'When working on generators with other survivors, gain bonus bloodpoints and efficiency.',
    character: 'Dwight Fairfield',
    role: 'survivor',
    tier: 1,
    category: ['generators', 'teamwork'],
    synergies: ['better-together', 'leader'],
    counters: ['pop-goes-the-weasel', 'regression-perks'],
    difficulty: 'beginner',
    meta_rating: 6,
    icon_url: '/icons/perks/prove-thyself.png',
    unlocked_at: 'teachable',
    teachable_level: 30,
  },
]

export const killerPerks: Perk[] = [
  {
    id: 'barbecue-and-chili',
    name: 'Barbecue & Chilli',
    description:
      'After hooking a survivor, see the auras of other survivors far away from the hook.',
    character: 'Herman "The Cannibal" Carter',
    role: 'killer',
    tier: 3,
    category: ['aura-reading', 'information'],
    synergies: ['pop-goes-the-weasel', 'thrilling-tremors'],
    counters: ['distortion', 'lockers'],
    difficulty: 'intermediate',
    meta_rating: 7,
    icon_url: '/icons/perks/barbecue-and-chili.png',
    unlocked_at: 'teachable',
    teachable_level: 35,
  },
  {
    id: 'hex-ruin',
    name: 'Hex: Ruin',
    description:
      'Generators automatically regress when not being worked on. Effect ends if the totem is cleansed.',
    character: 'Sally Smithson "The Nurse"',
    role: 'killer',
    tier: 3,
    category: ['hex', 'generator-control'],
    synergies: ['hex-undying', 'surveillance'],
    counters: ['small-game', 'detective-hunch'],
    difficulty: 'intermediate',
    meta_rating: 6,
    icon_url: '/icons/perks/hex-ruin.png',
    unlocked_at: 'teachable',
    teachable_level: 35,
  },
  {
    id: 'nurses-calling',
    name: "Nurse's Calling",
    description:
      'See the auras of survivors while they are healing or being healed within a certain range.',
    character: 'Sally Smithson "The Nurse"',
    role: 'killer',
    tier: 2,
    category: ['aura-reading', 'information'],
    synergies: ['sloppy-butcher', 'coulrophobia'],
    counters: ['distortion', 'no-healing-builds'],
    difficulty: 'intermediate',
    meta_rating: 7,
    icon_url: '/icons/perks/nurses-calling.png',
    unlocked_at: 'teachable',
    teachable_level: 30,
  },
  {
    id: 'noed',
    name: 'Hex: No One Escapes Death',
    description:
      'Once the exit gates are powered, gain increased movement speed and instantly down healthy survivors.',
    character: 'Generic',
    role: 'killer',
    tier: 1,
    category: ['hex', 'endgame'],
    synergies: ['bitter-murmur', 'blood-warden'],
    counters: ['small-game', 'do-bones'],
    difficulty: 'beginner',
    meta_rating: 5,
    icon_url: '/icons/perks/noed.png',
    unlocked_at: 'start',
  },
  {
    id: 'pop-goes-the-weasel',
    name: 'Pop Goes the Weasel',
    description:
      'After hooking a survivor, the next generator you kick loses significant progress instantly.',
    character: 'Kenneth "The Clown" Chase',
    role: 'killer',
    tier: 3,
    category: ['generator-control', 'regression'],
    synergies: ['barbecue-and-chili', 'thrilling-tremors'],
    counters: ['repressed-alliance', 'blast-mine'],
    difficulty: 'intermediate',
    meta_rating: 8,
    icon_url: '/icons/perks/pop-goes-the-weasel.png',
    unlocked_at: 'teachable',
    teachable_level: 40,
  },
]

export const characters: Character[] = [
  {
    id: 'dwight-fairfield',
    name: 'Dwight Fairfield',
    role: 'survivor',
    lore: 'A nervous leader who worked in corporate before being taken by the Entity.',
    unique_perks: ['prove-thyself', 'leader', 'bond'],
    portrait_url: '/portraits/dwight-fairfield.png',
    released_date: new Date('2016-06-14'),
  },
  {
    id: 'meg-thomas',
    name: 'Meg Thomas',
    role: 'survivor',
    lore: 'A athletic survivor who excels at running and evading the killer.',
    unique_perks: ['sprint-burst', 'quick-and-quiet', 'adrenaline'],
    portrait_url: '/portraits/meg-thomas.png',
    released_date: new Date('2016-06-14'),
  },
  {
    id: 'claudette-morel',
    name: 'Claudette Morel',
    role: 'survivor',
    lore: 'A botanist with healing expertise and knowledge of plants.',
    unique_perks: ['self-care', 'botany-knowledge', 'empathy'],
    portrait_url: '/portraits/claudette-morel.png',
    released_date: new Date('2016-06-14'),
  },
  {
    id: 'the-trapper',
    name: 'The Trapper',
    role: 'killer',
    lore: 'Evan MacMillan was the heir to a coal mining company before becoming a killer.',
    unique_perks: ['unnerving-presence', 'brutal-strength', 'agitation'],
    power_name: 'Bear Trap',
    power_description: 'Set deadly traps around the map to catch survivors.',
    portrait_url: '/portraits/the-trapper.png',
    released_date: new Date('2016-06-14'),
  },
  {
    id: 'the-nurse',
    name: 'The Nurse',
    role: 'killer',
    lore: 'Sally Smithson was a nurse at an asylum before becoming a supernatural killer.',
    unique_perks: ['stridor', 'thanatophobia', 'nurses-calling'],
    power_name: 'Spencer\'s Last Breath',
    power_description: 'Teleport through walls and obstacles to catch survivors.',
    portrait_url: '/portraits/the-nurse.png',
    released_date: new Date('2016-08-18'),
    dlc: 'The Last Breath Chapter',
  },
]

export const allPerks = [...survivorPerks, ...killerPerks]

// Helper functions
export const getPerksByRole = (role: 'survivor' | 'killer') => 
  allPerks.filter(perk => perk.role === role)

export const getPerkById = (id: string) => 
  allPerks.find(perk => perk.id === id)

export const getCharacterById = (id: string) => 
  characters.find(character => character.id === id)

export const getCharactersByRole = (role: 'survivor' | 'killer') =>
  characters.filter(character => character.role === role)