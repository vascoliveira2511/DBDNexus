-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Profiles
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  main_role TEXT CHECK (main_role IN ('survivor', 'killer', 'both')),
  skill_level INTEGER CHECK (skill_level BETWEEN 1 AND 10),
  playstyle_tags TEXT[],
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Builds
CREATE TABLE IF NOT EXISTS builds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  role TEXT NOT NULL CHECK (role IN ('survivor', 'killer')),
  character_name TEXT,
  perks TEXT[4] NOT NULL,
  tags TEXT[],
  is_public BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  synergy_score INTEGER CHECK (synergy_score BETWEEN 0 AND 100),
  difficulty_rating TEXT CHECK (difficulty_rating IN ('beginner', 'intermediate', 'advanced')),
  meta_strength INTEGER CHECK (meta_strength BETWEEN 1 AND 10),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Match History
CREATE TABLE IF NOT EXISTS matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('survivor', 'killer')),
  character_used TEXT NOT NULL,
  perks_used TEXT[4],
  result TEXT NOT NULL,
  bloodpoints INTEGER,
  map_name TEXT,
  killer_faced TEXT, -- for survivor matches
  escape_method TEXT, -- for survivor matches
  kills_count INTEGER, -- for killer matches
  match_duration INTEGER, -- in seconds
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Daily Rituals
CREATE TABLE IF NOT EXISTS rituals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  ritual_text TEXT NOT NULL,
  ritual_type TEXT NOT NULL,
  bloodpoint_reward INTEGER NOT NULL,
  progress INTEGER DEFAULT 0,
  max_progress INTEGER NOT NULL,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Build Ratings
CREATE TABLE IF NOT EXISTS build_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  build_id UUID REFERENCES builds(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  review TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(build_id, user_id)
);

-- Tier Lists
CREATE TABLE IF NOT EXISTS tier_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('perks', 'killers', 'survivors', 'addons')),
  tier_data JSONB NOT NULL,
  is_public BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Friends System
CREATE TABLE IF NOT EXISTS friendships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  addressee_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'blocked')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(requester_id, addressee_id)
);

-- Build Likes (for tracking which users liked which builds)
CREATE TABLE IF NOT EXISTS build_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  build_id UUID REFERENCES builds(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(build_id, user_id)
);

-- User Build Collections (saved builds)
CREATE TABLE IF NOT EXISTS saved_builds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  build_id UUID REFERENCES builds(id) ON DELETE CASCADE,
  folder_name TEXT DEFAULT 'Favorites',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, build_id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_username ON profiles(username);
CREATE INDEX IF NOT EXISTS idx_builds_user_id ON builds(user_id);
CREATE INDEX IF NOT EXISTS idx_builds_public ON builds(is_public) WHERE is_public = true;
CREATE INDEX IF NOT EXISTS idx_builds_role ON builds(role);
CREATE INDEX IF NOT EXISTS idx_builds_created_at ON builds(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_matches_user_id ON matches(user_id);
CREATE INDEX IF NOT EXISTS idx_matches_created_at ON matches(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rituals_user_id ON rituals(user_id);
CREATE INDEX IF NOT EXISTS idx_build_ratings_build_id ON build_ratings(build_id);
CREATE INDEX IF NOT EXISTS idx_friendships_requester ON friendships(requester_id);
CREATE INDEX IF NOT EXISTS idx_friendships_addressee ON friendships(addressee_id);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE builds ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE rituals ENABLE ROW LEVEL SECURITY;
ALTER TABLE build_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE tier_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE friendships ENABLE ROW LEVEL SECURITY;
ALTER TABLE build_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_builds ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Builds policies
CREATE POLICY "Public builds are viewable by everyone" ON builds
  FOR SELECT USING (is_public = true OR auth.uid() = user_id);

CREATE POLICY "Users can insert their own builds" ON builds
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own builds" ON builds
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own builds" ON builds
  FOR DELETE USING (auth.uid() = user_id);

-- Matches policies
CREATE POLICY "Users can view own matches" ON matches
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own matches" ON matches
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own matches" ON matches
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own matches" ON matches
  FOR DELETE USING (auth.uid() = user_id);

-- Rituals policies
CREATE POLICY "Users can view own rituals" ON rituals
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own rituals" ON rituals
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own rituals" ON rituals
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own rituals" ON rituals
  FOR DELETE USING (auth.uid() = user_id);

-- Build ratings policies
CREATE POLICY "Everyone can view build ratings" ON build_ratings
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can rate builds" ON build_ratings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own ratings" ON build_ratings
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own ratings" ON build_ratings
  FOR DELETE USING (auth.uid() = user_id);

-- Tier lists policies
CREATE POLICY "Public tier lists are viewable by everyone" ON tier_lists
  FOR SELECT USING (is_public = true OR auth.uid() = user_id);

CREATE POLICY "Users can insert their own tier lists" ON tier_lists
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tier lists" ON tier_lists
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tier lists" ON tier_lists
  FOR DELETE USING (auth.uid() = user_id);

-- Friendships policies
CREATE POLICY "Users can view friendships involving them" ON friendships
  FOR SELECT USING (auth.uid() = requester_id OR auth.uid() = addressee_id);

CREATE POLICY "Users can send friend requests" ON friendships
  FOR INSERT WITH CHECK (auth.uid() = requester_id);

CREATE POLICY "Users can update friendships involving them" ON friendships
  FOR UPDATE USING (auth.uid() = requester_id OR auth.uid() = addressee_id);

CREATE POLICY "Users can delete friendships involving them" ON friendships
  FOR DELETE USING (auth.uid() = requester_id OR auth.uid() = addressee_id);

-- Build likes policies
CREATE POLICY "Everyone can view build likes" ON build_likes
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can like builds" ON build_likes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their own likes" ON build_likes
  FOR DELETE USING (auth.uid() = user_id);

-- Saved builds policies
CREATE POLICY "Users can view own saved builds" ON saved_builds
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can save builds" ON saved_builds
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own saved builds" ON saved_builds
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved builds" ON saved_builds
  FOR DELETE USING (auth.uid() = user_id);

-- Functions and Triggers

-- Function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'username');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_builds_updated_at ON builds;
CREATE TRIGGER update_builds_updated_at
    BEFORE UPDATE ON builds
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_tier_lists_updated_at ON tier_lists;
CREATE TRIGGER update_tier_lists_updated_at
    BEFORE UPDATE ON tier_lists
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_friendships_updated_at ON friendships;
CREATE TRIGGER update_friendships_updated_at
    BEFORE UPDATE ON friendships
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();