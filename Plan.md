# DBD Nexus - Dead by Daylight Companion App

## Complete Project Specification for Claude Code

---

## 🎯 Project Overview

**DBD Nexus** is a comprehensive web-based companion application for Dead by Daylight players. The app provides build generation, match tracking, learning tools, and community features to enhance the DBD gaming experience.

### Target Users

- New DBD players learning the game
- Experienced players optimizing their builds
- Content creators and streamers
- Competitive players tracking performance
- Friend groups comparing stats

### Core Value Proposition

- **Smart Build Generation**: AI-powered build recommendations based on playstyle
- **Performance Tracking**: Detailed match analytics and progression
- **Learning Hub**: Interactive guides and skill development
- **Community Features**: Build sharing and friend comparisons

---

## 🎮 Application Features

### Phase 1: Build Tools (MVP)

#### Perk Randomizer

- Generate random builds for survivors (4 perks) and killers (4 perks)
- Filter by character, difficulty level, meta/fun builds
- "Surprise me" option for completely random builds
- Save favorite random builds

#### Build Generator

- Input preferences: playstyle, character, skill level
- Algorithm suggests optimal perk combinations
- Explains why perks work well together
- Multiple build suggestions with difficulty ratings

#### Build Analyzer

- Input existing build, get synergy analysis
- Identify perk conflicts and improvements
- Suggest counters for opponent builds
- Rate build effectiveness (1-10 scale)

#### Custom Tier Lists

- Drag-and-drop tier list creator for perks, killers, add-ons
- Save and share tier lists publicly
- Community voting on tier lists
- Filter by patch version/meta

### Phase 2: User System & Tracking

#### Match History Tracker

- Log match results: escape/death, bloodpoints, killer faced
- Track performance by killer/survivor
- Identify strongest and weakest matchups
- Export data for external analysis

#### Bloodpoint Calculator

- Calculate BP needed for prestiging
- Shrine of Secrets purchase planning
- Event BP multiplier calculations
- Progression planning tools

#### Daily Ritual Management

- Track active rituals
- Optimize ritual completion order
- Historical ritual completion data
- Ritual difficulty ratings

#### Personal Statistics Dashboard

- Win/loss rates by role
- Most played characters
- Average bloodpoints per match
- Performance trends over time
- Comparison with community averages

### Phase 3: Learning & Optimization

#### Killer Power Guide

- Interactive guides for each killer's power
- Counter-strategies for survivors
- Mind game tutorials
- Map-specific tips and tricks

#### New Player Progressive Guide

- Structured learning path from beginner to intermediate
- Achievement system for milestones
- Interactive tutorials with quizzes
- Skill assessment and recommendations

#### Build Recommendations Engine

- Machine learning from match history
- Suggests builds based on recent performance
- Adapts to current meta changes
- Personalized improvement suggestions

#### Meta Analysis Dashboard

- Current meta trends and statistics
- Patch impact analysis
- Perk usage statistics
- Win rate changes over time

### Phase 4: Community & Advanced Features

#### Friend System

- Add friends and compare statistics
- Private groups for tournament tracking
- Leaderboards within friend groups
- Challenge friends to improvement goals

#### Build Sharing Platform

- Publish builds with descriptions and guides
- Rate and comment on community builds
- Search builds by tags, playstyle, character
- Featured builds of the week

#### Shrine of Secrets Tracker

- Historical shrine data and predictions
- Notify when desired perks appear
- Calculate cost savings vs direct purchase
- Shrine appearance frequency statistics

#### DBD News Aggregator

- Official announcements and patch notes
- Community news from trusted sources
- Developer stream summaries
- Update notifications and impact analysis

#### Tournament Tools

- Bracket generator for private tournaments
- Score tracking and statistics
- Custom ruleset configuration
- Results sharing and archiving

---

## 🛠 Technical Specifications

### Technology Stack

- **Framework**: Next.js 15.5 (App Router, Turbopack)
- **Frontend**: React 19 (Server Components, Actions)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.1 (Oxide engine)
- **Components**: shadcn/ui CLI 3.0
- **State Management**: Zustand v5
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

### Performance Requirements

- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Build generation response < 500ms
- 95%+ uptime
- Mobile-responsive design
- PWA capabilities for offline use

### Browser Support

- Safari 16.4+
- Chrome 111+
- Firefox 128+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📊 Database Schema

### Core Tables

```sql
-- User Profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  main_role TEXT CHECK (main_role IN ('survivor', 'killer', 'both')),
  skill_level INTEGER CHECK (skill_level BETWEEN 1 AND 10),
  playstyle_tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Builds
CREATE TABLE builds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  name TEXT NOT NULL,
  description TEXT,
  role TEXT NOT NULL CHECK (role IN ('survivor', 'killer')),
  character_name TEXT,
  perks TEXT[4] NOT NULL,
  tags TEXT[],
  is_public BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Match History
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
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
  created_at TIMESTAMP DEFAULT NOW()
);

-- Daily Rituals
CREATE TABLE rituals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  ritual_text TEXT NOT NULL,
  ritual_type TEXT NOT NULL,
  bloodpoint_reward INTEGER NOT NULL,
  progress INTEGER DEFAULT 0,
  max_progress INTEGER NOT NULL,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Build Ratings
CREATE TABLE build_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  build_id UUID REFERENCES builds(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  review TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(build_id, user_id)
);

-- Tier Lists
CREATE TABLE tier_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('perks', 'killers', 'survivors', 'addons')),
  tier_data JSONB NOT NULL,
  is_public BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Friends System
CREATE TABLE friendships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID REFERENCES profiles(id),
  addressee_id UUID REFERENCES profiles(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'blocked')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(requester_id, addressee_id)
);
```

---

## 🎨 Design System

### Visual Theme

- **Primary Colors**: Deep purple (#6366f1), Amber gold (#f59e0b)
- **Accent Colors**: Electric blue (#06b6d4), Emerald (#10b981)
- **Semantic Colors**: Deep red (#dc2626) for killer, Green (#10b981) for survivor
- **Dark Theme**: Charcoal backgrounds (#1f2937) with high contrast text
- **Typography**: Inter font family for clean, modern look

### Component Guidelines

- Card-based design with subtle shadows and rounded corners
- Generous whitespace for readability
- Hover effects and micro-interactions
- Glass morphism for overlays and modals
- Consistent 8px spacing grid

### Mobile-First Approach

- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly button sizes (44px minimum)
- Swipe gestures for mobile navigation
- Progressive Web App features

---

## 🚀 Development Phases

### Phase 1: Foundation (Weeks 1-4)

**Goals**: Establish core infrastructure and basic build tools

**Deliverables**:

- [x] Next.js 15 project setup with TypeScript
- [x] Tailwind CSS v4.1 configuration
- [x] shadcn/ui component library integration
- [x] Supabase database setup
- [x] Basic authentication system
- [x] Perk database and data structures
- [x] Simple perk randomizer
- [x] Basic build generator with filters
- [x] Responsive layout and navigation

**Technical Tasks**:

```bash
# Setup commands
npx create-next-app@latest dbd-nexus --typescript --tailwind --app
npm install @supabase/supabase-js @supabase/ssr
npm install zustand lucide-react recharts
npx shadcn@latest init
```

### Phase 2: Enhanced Build System (Weeks 5-8)

**Goals**: Advanced build tools and analysis

**Deliverables**:

- [x] Build analyzer with synergy detection
- [x] Custom tier list creator
- [x] Build sharing with URLs
- [x] Save/favorite builds system
- [x] Build comparison tool
- [x] Advanced filtering and search

**Key Features**:

- Synergy scoring algorithm (1-100 scale)
- Drag-and-drop tier list interface
- Build export/import functionality
- Community rating system

### Phase 3: User Tracking (Weeks 9-12)

**Goals**: Personal analytics and progression tracking

**Deliverables**:

- [x] Match history logging system
- [x] Bloodpoint calculator
- [x] Daily ritual tracker
- [x] Personal statistics dashboard
- [x] Performance analytics
- [x] Data visualization charts

**Analytics Features**:

- Win/loss rate tracking
- Character performance analysis
- Bloodpoint optimization
- Progression goal setting

### Phase 4: Learning Hub (Weeks 13-16)

**Goals**: Educational content and skill development

**Deliverables**:

- [x] Interactive killer guides
- [x] New player tutorial system
- [x] Achievement/milestone tracking
- [x] Skill assessment tools
- [x] Meta analysis dashboard
- [x] Build recommendation engine

**Educational Content**:

- Step-by-step tutorials
- Interactive quizzes
- Video integration
- Progress tracking

### Phase 5: Community Features (Weeks 17-20)

**Goals**: Social features and advanced tools

**Deliverables**:

- [x] Friend system and comparisons
- [x] Public build gallery
- [x] Community ratings and reviews
- [x] Tournament bracket generator
- [x] News aggregation system
- [x] Mobile PWA optimization

**Community Tools**:

- Build sharing platform
- Leaderboards
- Group challenges
- Event calendars

---

## 📱 User Experience Flow

### New User Journey

1. **Landing Page**: Clear value proposition, feature highlights
2. **Sign Up**: Quick registration with playstyle questionnaire
3. **Onboarding**: Tutorial covering main features
4. **First Build**: Guided build generation based on preferences
5. **Match Logging**: Tutorial on tracking first match
6. **Dashboard**: Personalized homepage with relevant tools

### Core User Flows

```
Build Generation Flow:
Home → Build Tools → Select Role → Set Preferences → Generate → Analyze → Save/Share

Match Tracking Flow:
Dashboard → Add Match → Select Details → Input Results → View Analytics → Compare Progress

Learning Flow:
Guides → Select Topic → Interactive Tutorial → Quiz → Achievement → Next Topic
```

---

## 🎯 Success Metrics

### User Engagement

- Daily Active Users (target: 1,000+ within 6 months)
- Session Duration (target: 10+ minutes average)
- Builds Created per User (target: 5+ per month)
- Match Logs per User (target: 15+ per month)
- Return User Rate (target: 60%+ weekly retention)

### Technical Performance

- Page Load Speed (target: <2s)
- Build Generation Speed (target: <500ms)
- Database Query Performance (target: <100ms)
- Uptime (target: 99.5%)
- Mobile Performance Score (target: 90+)

### Community Growth

- Public Builds Shared (target: 10,000+ within 1 year)
- User-Generated Content (reviews, tier lists)
- Friend Connections (target: 50% of users have 1+ friend)
- Community Engagement (likes, comments, shares)

---

## 🔧 Development Guidelines

### Code Standards

- TypeScript strict mode enabled
- ESLint + Prettier configuration
- Conventional commit messages
- Component-driven development
- Test coverage for critical paths

### Performance Optimization

- Server Components by default
- Client Components only when necessary
- Image optimization with Next.js Image
- Database query optimization
- Caching strategies for static data

### Security Best Practices

- Row Level Security (RLS) on all tables
- Input validation and sanitization
- Rate limiting on API endpoints
- Secure authentication flows
- Environment variable management

### Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Alt text for all images

---

## 📋 Getting Started Checklist

### Environment Setup

- [ ] Node.js 20+ installed
- [ ] Git repository initialized
- [ ] Supabase project created
- [ ] Vercel account setup
- [ ] Environment variables configured

### First Sprint (Week 1)

- [ ] Create Next.js project with latest dependencies
- [ ] Set up Tailwind CSS v4.1 with custom theme
- [ ] Install and configure shadcn/ui components
- [ ] Create Supabase database schema
- [ ] Implement basic authentication
- [ ] Create perk data structure and sample data
- [ ] Build simple perk randomizer interface
- [ ] Deploy to Vercel for testing

### Data Requirements

- Complete perk database (400+ perks with metadata)
- Killer and survivor information
- Map details and statistics
- Shrine of Secrets historical data
- Meta tier information by patch

---

## 🎮 Game Data Structure

### Perk Data Model

```typescript
interface Perk {
  id: string;
  name: string;
  description: string;
  character: string;
  role: "survivor" | "killer";
  tier: 1 | 2 | 3;
  category: string[];
  synergies: string[]; // perk IDs that work well together
  counters: string[]; // perk IDs that counter this perk
  difficulty: "beginner" | "intermediate" | "advanced";
  meta_rating: number; // 1-10 current meta strength
  icon_url: string;
  unlocked_at: "start" | "teachable" | "shrine";
}
```

### Build Algorithm Logic

```typescript
interface BuildGenerator {
  role: "survivor" | "killer";
  character?: string;
  playstyle: string[]; // ['stealth', 'chase', 'gen-rush', etc.]
  difficulty: "beginner" | "intermediate" | "advanced";
  meta_focus: "meta" | "fun" | "balanced";
  avoid_perks?: string[]; // perks to exclude
}

// Scoring algorithm considers:
// - Perk synergies (+10 points per strong synergy)
// - Meta strength (weighted by meta_focus setting)
// - Difficulty appropriateness
// - Playstyle alignment
// - Character-specific bonuses
```

---

This comprehensive specification provides Claude Code with everything needed to build DBD Nexus from concept to completion. The modular approach allows for iterative development while maintaining a clear vision of the final product.
