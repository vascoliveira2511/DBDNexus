import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Target, Zap } from 'lucide-react'

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Strategy Guides</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn advanced strategies, perk synergies, and gameplay tips from the community and experts.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <CardTitle>Coming Soon</CardTitle>
          </div>
          <CardDescription>
            Comprehensive guides and tutorials are currently being developed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Build Guides</h3>
              <p className="text-sm text-muted-foreground">In-depth perk combination strategies</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Gameplay Tips</h3>
              <p className="text-sm text-muted-foreground">Advanced tactics for survivors and killers</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Community Wisdom</h3>
              <p className="text-sm text-muted-foreground">Tips and tricks from experienced players</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              For now, try our Perk Randomizer to experiment with new strategies!
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