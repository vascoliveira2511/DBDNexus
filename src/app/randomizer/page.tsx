import { PerkRandomizer } from '@/components/features/PerkRandomizer'

export default function RandomizerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PerkRandomizer />
    </div>
  )
}

export const metadata = {
  title: 'Perk Randomizer - DBD Nexus',
  description: 'Generate random Dead by Daylight builds with customizable filters for survivors and killers.',
}