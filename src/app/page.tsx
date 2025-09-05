import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Target, Users, BookOpen, TrendingUp, Shield, Heart, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-3 py-1">
              ⚡ Now in Beta
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Master Dead by Daylight with{' '}
            <span className="text-primary">DBD Nexus</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate companion app for Dead by Daylight players. Generate builds, track matches, 
            learn strategies, and connect with the community.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/randomizer">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/guides">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything you need to dominate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From build generation to match tracking, we&apos;ve got all the tools to elevate your DBD experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Build Generator</CardTitle>
              </div>
              <CardDescription>
                AI-powered build recommendations tailored to your playstyle and skill level.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <Link href="/build-generator">Try Build Generator →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <CardTitle>Perk Randomizer</CardTitle>
              </div>
              <CardDescription>
                Generate random builds with filters for character, difficulty, and playstyle preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <Link href="/randomizer">Generate Random Build →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <CardTitle>Match Tracking</CardTitle>
              </div>
              <CardDescription>
                Track your matches, analyze performance, and identify areas for improvement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <Link href="/tracking">Start Tracking →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-success/20 hover:border-success/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-success/10">
                  <BookOpen className="h-5 w-5 text-success" />
                </div>
                <CardTitle>Learning Hub</CardTitle>
              </div>
              <CardDescription>
                Interactive guides, tutorials, and strategies to help you improve your gameplay.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <Link href="/guides">Explore Guides →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-killer/20 hover:border-killer/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-killer/10">
                  <Shield className="h-5 w-5 text-killer" />
                </div>
                <CardTitle>Build Analyzer</CardTitle>
              </div>
              <CardDescription>
                Analyze build synergies, identify weaknesses, and get optimization suggestions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <Link href="/build-analyzer">Analyze Build →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-muted hover:border-foreground/20 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-muted">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle>Community</CardTitle>
              </div>
              <CardDescription>
                Share builds, compare stats, and connect with other DBD players worldwide.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <Link href="/community">Join Community →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card/50 border-y">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground">Builds Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-muted-foreground">Matches Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">5K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success">400+</div>
              <div className="text-muted-foreground">Perks & Add-ons</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <Heart className="h-8 w-8 text-killer fill-killer" />
            </div>
            <CardTitle className="text-2xl">Ready to level up your DBD game?</CardTitle>
            <CardDescription className="text-lg">
              Join thousands of players who are already using DBD Nexus to dominate the Entity&apos;s realm.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/randomizer">
                <Clock className="mr-2 h-4 w-4" />
                Start Now - It&apos;s Free
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
