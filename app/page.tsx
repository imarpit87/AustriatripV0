import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BentoBookings } from "@/components/bento-bookings"
import { ItineraryTimeline } from "@/components/itinerary-timeline"
import { ExpenseDashboard } from "@/components/expense-dashboard"
import { TravelVault } from "@/components/travel-vault"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <BentoBookings />
      <ItineraryTimeline />
      <ExpenseDashboard />
      <TravelVault />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-sunshine/5 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold text-muted-foreground">
            Austria Family Adventure 2026 &middot; Vienna &middot; Salzburg &middot; Innsbruck
          </p>
        </div>
      </footer>
    </main>
  )
}
