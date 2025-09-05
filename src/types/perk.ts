export type Role = 'survivor' | 'killer'

export type PerkTier = 1 | 2 | 3

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type UnlockMethod = 'start' | 'teachable' | 'shrine'

export interface Perk {
  id: string
  name: string
  description: string
  character: string
  role: Role
  tier: PerkTier
  category: string[]
  synergies: string[] // perk IDs that work well together
  counters: string[] // perk IDs that counter this perk
  difficulty: Difficulty
  meta_rating: number // 1-10 current meta strength
  icon_url: string
  unlocked_at: UnlockMethod
  teachable_level?: number // level at which the perk becomes teachable
}

export type Playstyle = 
  | 'stealth'
  | 'chase'
  | 'gen-rush'
  | 'altruistic'
  | 'aggressive'
  | 'defensive'
  | 'information'
  | 'endgame'
  | 'control'
  | 'mobility'

export type MetaFocus = 'meta' | 'fun' | 'balanced'

export interface BuildGenerator {
  role: Role
  character?: string
  playstyle: Playstyle[]
  difficulty: Difficulty
  meta_focus: MetaFocus
  avoid_perks?: string[] // perks to exclude
}

export interface Build {
  id: string
  name: string
  description?: string
  role: Role
  character?: string
  perks: [string, string, string, string] // exactly 4 perk IDs
  tags: string[]
  synergy_score?: number // calculated score 1-100
  difficulty_rating?: Difficulty
  meta_strength?: number // 1-10
  created_at: Date
  updated_at: Date
}

export interface BuildAnalysis {
  synergy_score: number // 1-100
  strengths: string[]
  weaknesses: string[]
  recommendations: string[]
  counter_builds?: string[] // build IDs that counter this build
  similar_builds?: string[] // build IDs that are similar
}

export interface Character {
  id: string
  name: string
  role: Role
  lore: string
  unique_perks: string[] // perk IDs
  power_name?: string // for killers
  power_description?: string
  portrait_url: string
  released_date: Date
  dlc?: string
}