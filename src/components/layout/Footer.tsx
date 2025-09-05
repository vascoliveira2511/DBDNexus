import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Twitter, MessageCircle, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-card/60 backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground text-xs font-bold">
                DBD
              </div>
              <h3 className="font-semibold">Nexus</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate companion app for Dead by Daylight players. Track, build, and improve your game.
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://twitter.com" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://discord.com" aria-label="Discord">
                  <MessageCircle className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Build Tools */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Build Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/randomizer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Perk Randomizer
                </Link>
              </li>
              <li>
                <Link href="/build-generator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Build Generator
                </Link>
              </li>
              <li>
                <Link href="/build-analyzer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Build Analyzer
                </Link>
              </li>
              <li>
                <Link href="/tier-lists" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tier Lists
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tracking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Match Tracking
                </Link>
              </li>
              <li>
                <Link href="/statistics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Statistics
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                  Learning Guides
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-muted-foreground hover:text-foreground transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-killer fill-killer" />
            <span>for the DBD community</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>© 2025 DBD Nexus</span>
          </div>
        </div>
      </div>
    </footer>
  )
}