import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, TrendingUp, Zap } from 'lucide-react'

export default function BuildAnalyzerPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Build Analyzer</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Analyze your builds for synergy, effectiveness, and optimization opportunities. Get detailed insights into perk combinations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <CardTitle>Coming Soon</CardTitle>
          </div>
          <CardDescription>
            Advanced build analysis tools are currently in development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Synergy Analysis</h3>
              <p className="text-sm text-muted-foreground">Identify powerful perk combinations</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Effectiveness Rating</h3>
              <p className="text-sm text-muted-foreground">Score builds based on current meta</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Optimization Tips</h3>
              <p className="text-sm text-muted-foreground">Suggestions to improve your builds</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              For now, try our Perk Randomizer to experiment with builds!
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