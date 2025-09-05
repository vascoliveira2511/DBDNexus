export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          main_role: 'survivor' | 'killer' | 'both' | null
          skill_level: number | null
          playstyle_tags: string[] | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          main_role?: 'survivor' | 'killer' | 'both' | null
          skill_level?: number | null
          playstyle_tags?: string[] | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          main_role?: 'survivor' | 'killer' | 'both' | null
          skill_level?: number | null
          playstyle_tags?: string[] | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      builds: {
        Row: {
          id: string
          user_id: string | null
          name: string
          description: string | null
          role: 'survivor' | 'killer'
          character_name: string | null
          perks: [string, string, string, string]
          tags: string[] | null
          is_public: boolean | null
          likes_count: number | null
          views_count: number | null
          synergy_score: number | null
          difficulty_rating: 'beginner' | 'intermediate' | 'advanced' | null
          meta_strength: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          description?: string | null
          role: 'survivor' | 'killer'
          character_name?: string | null
          perks: [string, string, string, string]
          tags?: string[] | null
          is_public?: boolean | null
          likes_count?: number | null
          views_count?: number | null
          synergy_score?: number | null
          difficulty_rating?: 'beginner' | 'intermediate' | 'advanced' | null
          meta_strength?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          description?: string | null
          role?: 'survivor' | 'killer'
          character_name?: string | null
          perks?: [string, string, string, string]
          tags?: string[] | null
          is_public?: boolean | null
          likes_count?: number | null
          views_count?: number | null
          synergy_score?: number | null
          difficulty_rating?: 'beginner' | 'intermediate' | 'advanced' | null
          meta_strength?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      matches: {
        Row: {
          id: string
          user_id: string | null
          role: 'survivor' | 'killer'
          character_used: string
          perks_used: [string, string, string, string] | null
          result: string
          bloodpoints: number | null
          map_name: string | null
          killer_faced: string | null
          escape_method: string | null
          kills_count: number | null
          match_duration: number | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          role: 'survivor' | 'killer'
          character_used: string
          perks_used?: [string, string, string, string] | null
          result: string
          bloodpoints?: number | null
          map_name?: string | null
          killer_faced?: string | null
          escape_method?: string | null
          kills_count?: number | null
          match_duration?: number | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          role?: 'survivor' | 'killer'
          character_used?: string
          perks_used?: [string, string, string, string] | null
          result?: string
          bloodpoints?: number | null
          map_name?: string | null
          killer_faced?: string | null
          escape_method?: string | null
          kills_count?: number | null
          match_duration?: number | null
          notes?: string | null
          created_at?: string
        }
      }
      rituals: {
        Row: {
          id: string
          user_id: string | null
          ritual_text: string
          ritual_type: string
          bloodpoint_reward: number
          progress: number | null
          max_progress: number
          completed: boolean | null
          completed_at: string | null
          expires_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          ritual_text: string
          ritual_type: string
          bloodpoint_reward: number
          progress?: number | null
          max_progress: number
          completed?: boolean | null
          completed_at?: string | null
          expires_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          ritual_text?: string
          ritual_type?: string
          bloodpoint_reward?: number
          progress?: number | null
          max_progress?: number
          completed?: boolean | null
          completed_at?: string | null
          expires_at?: string | null
          created_at?: string
        }
      }
      build_ratings: {
        Row: {
          id: string
          build_id: string | null
          user_id: string | null
          rating: number | null
          review: string | null
          created_at: string
        }
        Insert: {
          id?: string
          build_id?: string | null
          user_id?: string | null
          rating?: number | null
          review?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          build_id?: string | null
          user_id?: string | null
          rating?: number | null
          review?: string | null
          created_at?: string
        }
      }
      tier_lists: {
        Row: {
          id: string
          user_id: string | null
          title: string
          description: string | null
          category: 'perks' | 'killers' | 'survivors' | 'addons'
          tier_data: Json
          is_public: boolean | null
          likes_count: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          title: string
          description?: string | null
          category: 'perks' | 'killers' | 'survivors' | 'addons'
          tier_data: Json
          is_public?: boolean | null
          likes_count?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          title?: string
          description?: string | null
          category?: 'perks' | 'killers' | 'survivors' | 'addons'
          tier_data?: Json
          is_public?: boolean | null
          likes_count?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      friendships: {
        Row: {
          id: string
          requester_id: string | null
          addressee_id: string | null
          status: 'pending' | 'accepted' | 'blocked' | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          requester_id?: string | null
          addressee_id?: string | null
          status?: 'pending' | 'accepted' | 'blocked' | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          requester_id?: string | null
          addressee_id?: string | null
          status?: 'pending' | 'accepted' | 'blocked' | null
          created_at?: string
          updated_at?: string
        }
      }
      build_likes: {
        Row: {
          id: string
          build_id: string | null
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          build_id?: string | null
          user_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          build_id?: string | null
          user_id?: string | null
          created_at?: string
        }
      }
      saved_builds: {
        Row: {
          id: string
          user_id: string | null
          build_id: string | null
          folder_name: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          build_id?: string | null
          folder_name?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          build_id?: string | null
          folder_name?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}