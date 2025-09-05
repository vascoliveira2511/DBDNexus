import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, Users, Heart, Zap } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Community Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow Dead by Daylight players, share builds, and participate in community events.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <CardTitle>Coming Soon</CardTitle>
          </div>
          <CardDescription>
            Community features and social tools are currently in development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Build Sharing</h3>
              <p className="text-sm text-muted-foreground">Share and discover community builds</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Tournaments</h3>
              <p className="text-sm text-muted-foreground">Participate in community events</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Player Profiles</h3>
              <p className="text-sm text-muted-foreground">Showcase your achievements and builds</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              For now, try our Perk Randomizer and start building your collection!
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