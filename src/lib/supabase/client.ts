import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!url || !key || url === 'https://placeholder.supabase.co') {
    // Return a mock client for development when Supabase is not configured
    console.warn('Supabase not configured - using mock client for development')
    return null
  }
  
  return createBrowserClient(url, key)
}