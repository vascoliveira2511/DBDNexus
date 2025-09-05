import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Toaster } from '@/components/ui/sonner'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}