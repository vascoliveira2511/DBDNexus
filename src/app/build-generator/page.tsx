import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, Bot, Target } from 'lucide-react'

export default function BuildGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">AI Build Generator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get personalized build recommendations powered by AI. Tell us your playstyle and we&apos;ll create the perfect build for you.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle>Coming Soon</CardTitle>
          </div>
          <CardDescription>
            Our AI-powered build generator is currently in development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Playstyle Analysis</h3>
              <p className="text-sm text-muted-foreground">AI analyzes your preferred playstyle</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Smart Recommendations</h3>
              <p className="text-sm text-muted-foreground">Personalized build suggestions</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Bot className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">Gets better with community feedback</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              For now, try our Perk Randomizer to discover new builds!
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