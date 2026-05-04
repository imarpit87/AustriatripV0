"use client"

import { motion } from "framer-motion"
import { Plane, Building2, ExternalLink, ArrowRight, Calendar } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className={`glass-premium rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

function FlightLeg({
  date,
  from,
  to,
  depart,
  arrive,
  flight,
  route,
  duration,
}: {
  date: string
  from: string
  to: string
  depart: string
  arrive: string
  flight: string
  route: string
  duration: string
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-ocean/5 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground">{date}</span>
        <span className="rounded-md bg-ocean/15 px-2 py-0.5 text-xs font-bold text-ocean">
          {flight}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-center">
          <p className="text-xl font-extrabold text-foreground">{from}</p>
          <p className="text-xs text-muted-foreground">{depart}</p>
        </div>
        <div className="flex flex-1 items-center gap-1">
          <div className="h-px flex-1 bg-ocean/30" />
          <Plane className="h-3.5 w-3.5 text-ocean" />
          <div className="h-px flex-1 bg-ocean/30" />
        </div>
        <div className="text-center">
          <p className="text-xl font-extrabold text-foreground">{to}</p>
          <p className="text-xs text-muted-foreground">{arrive}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-semibold text-muted-foreground">
        <span>{route}</span>
        <span>{duration}</span>
      </div>
    </div>
  )
}

function StayCard({
  city,
  dates,
  name,
  accentColor,
  bookingUrl,
  badgeLabel,
}: {
  city: string
  dates: string
  name: string
  accentColor: string
  bookingUrl: string
  badgeLabel?: string
}) {
  return (
    <BentoCard>
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentColor}`}>
          <Building2 className="h-5 w-5 text-foreground/80" />
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-tight text-foreground">{city}</h3>
          <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <p>{dates}</p>
          </div>
        </div>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{name}</p>
      <div className="flex items-center justify-between gap-2">
        <motion.a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-ocean transition-colors hover:text-ocean/80"
        >
          View on Booking.com
          <ExternalLink className="h-3 w-3" />
        </motion.a>
        {badgeLabel && (
          <span className="rounded-full bg-sunshine/25 px-3 py-1 text-xs font-bold text-accent-foreground">
            {badgeLabel}
          </span>
        )}
      </div>
    </BentoCard>
  )
}

export function BentoBookings() {
  return (
    <section id="bookings" className="relative py-24 sm:py-32">
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sunshine/8" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-ocean/5" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-ocean">
            Logistics
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Flights & Accommodations
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* Flights - spans 2 cols on large */}
          <BentoCard className="md:col-span-3">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean/15">
                <Plane className="h-5 w-5 text-ocean" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">Flights</h3>
                <p className="text-xs text-muted-foreground">Emirates from Dubai DXB Terminal 3</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <FlightLeg
                date="Friday, 22 May 2026"
                from="DXB"
                to="VIE"
                depart="08:55 T3"
                arrive="12:55 T3"
                flight="EK 127"
                route="Dubai DXB -> Vienna VIE"
                duration="6 hours"
              />
              <FlightLeg
                date="Saturday, 30 May 2026"
                from="VIE"
                to="DXB"
                depart="15:35 T3"
                arrive="23:10 T3"
                flight="EK 128"
                route="Vienna VIE -> Dubai DXB"
                duration="5 hours 35 minutes"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <ArrowRight className="h-3 w-3 text-ocean" />
              <span className="font-medium">Dubai DXB Terminal 3 to Vienna VIE Terminal 3 round trip - AED 13,398 for 2 adults + 2 children</span>
            </div>
          </BentoCard>

          {/* Vienna Stay */}
          <StayCard
            city="Vienna"
            dates="22 - 25 May"
            name="Colorful & Quiet Apartment, 10. Favoriten"
            accentColor="bg-coral/20"
            bookingUrl="https://www.booking.com/Share-MXYxH1"
          />

          {/* Salzburg Stay */}
          <StayCard
            city="Salzburg"
            dates="25 - 28 May"
            name="Hotel Haus Arenberg"
            accentColor="bg-meadow/20"
            bookingUrl="https://www.booking.com/hotel/at/haus-arenberg.html"
          />

          {/* Innsbruck Stay */}
          <StayCard
            city="Innsbruck"
            dates="28 - 30 May"
            name="Absteige Innsbruck - Zentrale Ferienapartments"
            accentColor="bg-seafoam/20"
            bookingUrl="https://www.booking.com/Share-Yedj7D"
            badgeLabel="Final Stop"
          />
        </motion.div>
      </div>
    </section>
  )
}
