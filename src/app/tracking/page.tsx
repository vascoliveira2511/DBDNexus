import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, Users, Trophy, Zap } from 'lucide-react'

export default function TrackingPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Match Tracking</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track your Dead by Daylight matches, analyze performance, and monitor your improvement over time.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <CardTitle>Coming Soon</CardTitle>
          </div>
          <CardDescription>
            Match tracking and statistics features are currently in development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Match Statistics</h3>
              <p className="text-sm text-muted-foreground">Track wins, kills, escapes, and more</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Build Performance</h3>
              <p className="text-sm text-muted-foreground">See which builds work best for you</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Monitor your improvement over time</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              For now, try our Perk Randomizer to discover new strategies!
            </p>
            <Button asChild>
              <a href="/randomizer">
                <Zap className="mr-2 h-4 w-4" />
                Try Perk Randomizer
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}