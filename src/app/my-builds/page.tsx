'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { Settings, Plus, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function MyBuildsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">My Builds</h1>
        <p className="text-muted-foreground">
          Manage your saved Dead by Daylight builds
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-primary" />
            <CardTitle>Your Build Collection</CardTitle>
          </div>
          <CardDescription>
            Save and organize your favorite Dead by Daylight builds
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Settings className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">No builds saved yet</h3>
              <p className="text-muted-foreground">
                Start creating builds with our randomizer and save your favorites here!
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <Button asChild>
                <a href="/randomizer">
                  <Zap className="mr-2 h-4 w-4" />
                  Generate Random Build
                </a>
              </Button>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Create Manual Build
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}