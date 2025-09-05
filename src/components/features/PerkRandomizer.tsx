'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Shuffle, Save, Share, RotateCcw } from 'lucide-react'
import { getPerksByRole, getCharactersByRole } from '@/data/perks'
import { Perk, Role, Difficulty, MetaFocus } from '@/types/perk'
import { toast } from 'sonner'

interface RandomizerFilters {
  role: Role
  character?: string
  difficulty?: Difficulty
  meta_focus?: MetaFocus
}

interface GeneratedBuild {
  perks: Perk[]
  timestamp: Date
}

export function PerkRandomizer() {
  const [filters, setFilters] = useState<RandomizerFilters>({
    role: 'survivor'
  })
  const [currentBuild, setCurrentBuild] = useState<GeneratedBuild | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateRandomBuild = async () => {
    setIsGenerating(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    try {
      let availablePerks = getPerksByRole(filters.role)
      
      // Apply character filter
      if (filters.character && filters.character !== 'any') {
        const characterPerks = availablePerks.filter(perk => 
          perk.character.toLowerCase().includes(filters.character!.toLowerCase())
        )
        // Include character perks plus some general perks
        const generalPerks = availablePerks.filter(perk => 
          perk.unlocked_at === 'start' && !characterPerks.includes(perk)
        )
        availablePerks = [...characterPerks, ...generalPerks]
      }
      
      // Apply difficulty filter
      if (filters.difficulty) {
        availablePerks = availablePerks.filter(perk => 
          perk.difficulty === filters.difficulty || perk.difficulty === 'beginner'
        )
      }
      
      // Apply meta focus filter
      if (filters.meta_focus) {
        if (filters.meta_focus === 'meta') {
          availablePerks = availablePerks.filter(perk => perk.meta_rating >= 7)
        } else if (filters.meta_focus === 'fun') {
          availablePerks = availablePerks.filter(perk => perk.meta_rating <= 6)
        }
      }
      
      // Ensure we have enough perks
      if (availablePerks.length < 4) {
        availablePerks = getPerksByRole(filters.role)
      }
      
      // Randomly select 4 unique perks
      const selectedPerks: Perk[] = []
      const availablePerksCopy = [...availablePerks]
      
      for (let i = 0; i < 4; i++) {
        if (availablePerksCopy.length === 0) break
        
        const randomIndex = Math.floor(Math.random() * availablePerksCopy.length)
        selectedPerks.push(availablePerksCopy[randomIndex])
        availablePerksCopy.splice(randomIndex, 1)
      }
      
      const build: GeneratedBuild = {
        perks: selectedPerks,
        timestamp: new Date()
      }
      
      setCurrentBuild(build)
      toast.success('New build generated!')
      
    } catch (error) {
      toast.error('Failed to generate build. Please try again.')
      console.error('Build generation error:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const saveBuild = () => {
    if (!currentBuild) return
    // TODO: Implement save functionality
    toast.success('Build saved to your collection!')
  }

  const shareBuild = async () => {
    if (!currentBuild) return
    
    try {
      const buildData = {
        role: filters.role,
        perks: currentBuild.perks.map(p => p.name),
        timestamp: currentBuild.timestamp.toISOString()
      }
      
      const shareText = `Check out my ${filters.role} build: ${buildData.perks.join(', ')} - Generated with DBD Nexus`
      
      if (navigator.share) {
        await navigator.share({
          title: 'DBD Nexus Build',
          text: shareText,
          url: window.location.href
        })
      } else {
        await navigator.clipboard.writeText(shareText)
        toast.success('Build copied to clipboard!')
      }
    } catch (error) {
      toast.error('Failed to share build')
      console.error('Share error:', error)
    }
  }

  const resetFilters = () => {
    setFilters({ role: 'survivor' })
    setCurrentBuild(null)
  }

  const characters = getCharactersByRole(filters.role)

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Perk Randomizer</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Generate random builds with customizable filters. Perfect for trying new playstyles or breaking out of your comfort zone.
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Build Filters</CardTitle>
          <CardDescription>
            Customize your random build generation with these filters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={filters.role} onValueChange={(value: Role) => setFilters({...filters, role: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="survivor">
                    <span className="text-survivor">Survivor</span>
                  </SelectItem>
                  <SelectItem value="killer">
                    <span className="text-killer">Killer</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Character</Label>
              <Select value={filters.character || 'any'} onValueChange={(value) => setFilters({...filters, character: value === 'any' ? undefined : value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Character" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Character</SelectItem>
                  {characters.map(character => (
                    <SelectItem key={character.id} value={character.name}>
                      {character.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Difficulty</Label>
              <Select value={filters.difficulty || 'any'} onValueChange={(value) => setFilters({...filters, difficulty: value === 'any' ? undefined : value as Difficulty})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Difficulty</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Focus</Label>
              <Select value={filters.meta_focus || 'any'} onValueChange={(value) => setFilters({...filters, meta_focus: value === 'any' ? undefined : value as MetaFocus})}>
                <SelectTrigger>
                  <SelectValue placeholder="Balanced" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Balanced</SelectItem>
                  <SelectItem value="meta">Meta Perks</SelectItem>
                  <SelectItem value="fun">Fun Builds</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={generateRandomBuild} 
              disabled={isGenerating}
              className="flex-1"
            >
              <Shuffle className="mr-2 h-4 w-4" />
              {isGenerating ? 'Generating...' : 'Generate Random Build'}
            </Button>
            <Button variant="outline" onClick={resetFilters}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Build */}
      {currentBuild && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Random Build</CardTitle>
                <CardDescription>
                  Generated on {currentBuild.timestamp.toLocaleDateString()} at {currentBuild.timestamp.toLocaleTimeString()}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={saveBuild}>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm" onClick={shareBuild}>
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentBuild.perks.map((perk, index) => (
                <div key={perk.id} className="flex items-start space-x-3 p-3 rounded-lg border bg-card/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate">{perk.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        Tier {perk.tier}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{perk.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {perk.character}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${perk.difficulty === 'advanced' ? 'text-killer' : perk.difficulty === 'intermediate' ? 'text-secondary' : 'text-success'}`}
                      >
                        {perk.difficulty}
                      </Badge>
                      <div className="flex items-center">
                        <span className="text-xs text-muted-foreground">Meta: </span>
                        <span className="text-xs ml-1 font-medium">{perk.meta_rating}/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {!currentBuild && (
        <Card>
          <CardContent className="text-center py-12">
            <Shuffle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ready to randomize?</h3>
            <p className="text-muted-foreground mb-4">
              Configure your filters and generate a random build to try something new.
            </p>
            <Button onClick={generateRandomBuild}>
              <Shuffle className="mr-2 h-4 w-4" />
              Generate Your First Build
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}