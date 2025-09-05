# DBD Nexus Setup Guide

## Prerequisites

- Node.js 20+ installed
- A Supabase account (free tier is fine)

## 1. Supabase Project Setup

### Create a new Supabase project:

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization and give it a name: `dbd-nexus`
4. Choose a region close to you
5. Generate a secure database password
6. Click "Create new project"

### Set up the database:

1. In your Supabase dashboard, go to the **SQL Editor**
2. Copy the contents of `database/schema.sql`
3. Paste it into the SQL editor and click "Run"
4. This will create all the necessary tables, policies, and functions

### Get your environment variables:

1. Go to **Settings** → **API**
2. Copy your:
   - Project URL (`NEXT_PUBLIC_SUPABASE_URL`)
   - `anon` public key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - `service_role` secret key (`SUPABASE_SERVICE_ROLE_KEY`)

## 2. Local Development Setup

### Install dependencies:
```bash
npm install
```

### Environment variables:
1. Copy `.env.local.example` to `.env.local`
2. Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Start development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app!

## 3. Authentication Setup

Authentication is already configured to work with Supabase Auth. Users can:

- Sign up with email/password
- Sign in with email/password
- Automatic profile creation
- Session management

## 4. Features Available

### Phase 1 (Current):
- ✅ Perk Randomizer with filters
- ✅ User authentication
- ✅ Profile management
- ✅ Responsive design
- ✅ Database structure ready

### Phase 2 (Next):
- Build saving and sharing
- Match history tracking
- Public build gallery
- Build rating system

## 5. Database Structure

The database includes these main tables:

- **profiles** - User profile information
- **builds** - Saved perk builds
- **matches** - Match history tracking
- **rituals** - Daily ritual management
- **build_ratings** - Community build ratings
- **tier_lists** - Custom tier lists
- **friendships** - Friend system

All tables have Row Level Security (RLS) enabled for data protection.

## 6. Development Commands

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format
npm run format:check

# Run all checks
npm run check

# Build for production
npm run build
```

## 7. Deployment

The app is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## 8. Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run check` to ensure code quality
5. Submit a pull request

## Need Help?

- Check the [Supabase Documentation](https://supabase.com/docs)
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Open an issue on GitHub if you encounter problems