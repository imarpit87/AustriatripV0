"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MapPin,
  Rocket,
  ChevronDown,
  Train,
  Bed,
  UtensilsCrossed,
  Sparkles,
  Star,
  Ship,
  TreePine,
  Landmark,
  Snowflake,
  Palette,
  Camera,
  Youtube,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type EntryType = "Travel" | "Rest" | "Activity" | "Meal" | "Flight"

interface TimeEntry {
  time: string
  type: EntryType
  label: string
  kidEnergy?: boolean
  videoUrl?: string
}

interface ItineraryDay {
  day: number
  date: string
  weekday: string
  city: string
  subtitle: string
  icon: React.ElementType
  iconBg: string
  entries: TimeEntry[]
}

/* ------------------------------------------------------------------ */
/* Data (all 9 days)                                                   */
/* ------------------------------------------------------------------ */

const itineraryData: ItineraryDay[] = [
  {
    day: 1,
    date: "22 May",
    weekday: "Friday",
    city: "Vienna",
    subtitle: "Arrival & Old Town",
    icon: Landmark,
    iconBg: "bg-ocean",
    entries: [
      { time: "12:10 - 14:00", type: "Travel", label: "Arrive VIE + transfer to apartment (CAT/S-Bahn or Taxi)" },
      { time: "14:00 - 16:00", type: "Rest", label: "Lunch + rest at apartment" },
      { time: "16:00 - 19:00", type: "Activity", label: "Vienna Old Town stroll (Stephansplatz)", videoUrl: "https://www.youtube.com/watch?v=Bz68Zr3Dz4g" },
      { time: "19:00 - 20:30", type: "Meal", label: "Vegetarian/Indian-friendly dinner" },
    ],
  },
  {
    day: 2,
    date: "23 May",
    weekday: "Saturday",
    city: "Vienna",
    subtitle: "Schonbrunn & Danube Island",
    icon: TreePine,
    iconBg: "bg-meadow",
    entries: [
      { time: "09:00 - 09:45", type: "Travel", label: "Metro to Schonbrunn area" },
      { time: "09:45 - 12:30", type: "Activity", label: "Schonbrunn Gardens + Zoo", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=YKz9FO6QXKM" },
      { time: "12:30 - 14:30", type: "Rest", label: "Lunch + mid-day rest at apartment" },
      { time: "16:30 - 19:00", type: "Activity", label: "Danube Island play time (parks, cycling paths)", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=dHIo62hr1FA" },
      { time: "19:00 - 20:30", type: "Meal", label: "Dinner (cook or eat out)" },
    ],
  },
  {
    day: 3,
    date: "24 May",
    weekday: "Sunday",
    city: "Vienna",
    subtitle: "Prater & ZOOM Museum",
    icon: Sparkles,
    iconBg: "bg-sunshine",
    entries: [
      { time: "10:00 - 13:00", type: "Activity", label: "Prater Park + amusement rides", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=y83Y3-W_Ne0" },
      { time: "13:00 - 15:30", type: "Rest", label: "Lunch + nap/rest at apartment" },
      { time: "16:00 - 18:00", type: "Activity", label: "ZOOM Children's Museum (interactive exhibits)", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=5GhkMvk2-ik" },
      { time: "18:30 - 20:00", type: "Meal", label: "Veg-friendly dinner near stay" },
    ],
  },
  {
    day: 4,
    date: "25 May",
    weekday: "Monday",
    city: "Vienna to Salzburg",
    subtitle: "Train to Salzburg & Mirabell",
    icon: Train,
    iconBg: "bg-ocean",
    entries: [
      { time: "08:30 - 09:15", type: "Travel", label: "Check-out + reach Wien Hbf" },
      { time: "09:28 - 11:53", type: "Travel", label: "OBB Railjet Train: Wien Hbf to Salzburg Hbf" },
      { time: "12:00 - 13:00", type: "Travel", label: "Transfer + check-in (Hotel Haus Arenberg)" },
      { time: "13:00 - 16:00", type: "Rest", label: "Lunch + rest" },
      { time: "16:00 - 18:30", type: "Activity", label: "Mirabell Gardens + Old Town stroll", videoUrl: "https://www.youtube.com/watch?v=5K0yyEJRXB8" },
      { time: "19:00 - 20:30", type: "Meal", label: "Veg-friendly dinner in Old Town" },
    ],
  },
  {
    day: 5,
    date: "26 May",
    weekday: "Tuesday",
    city: "Salzburg",
    subtitle: "Hellbrunn & Wolfgangsee",
    icon: Palette,
    iconBg: "bg-coral",
    entries: [
      { time: "09:30 - 10:00", type: "Travel", label: "Travel to Hellbrunn Palace" },
      { time: "10:00 - 12:00", type: "Activity", label: "Hellbrunn Palace & Trick Fountains", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=J-FGbL3_ND4" },
      { time: "12:00 - 13:00", type: "Travel", label: "Pick up rental car from Salzburg" },
      { time: "13:00 - 18:00", type: "Activity", label: "Drive to Wolfgangsee (St. Gilgen), lake walk + optional cable car", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=lwSfFZZ14Gk" },
      { time: "19:00 - 20:30", type: "Meal", label: "Dinner" },
    ],
  },
  {
    day: 6,
    date: "27 May",
    weekday: "Wednesday",
    city: "Hallstatt Day Trip",
    subtitle: "Fairy-tale Lakeside Village",
    icon: Ship,
    iconBg: "bg-seafoam",
    entries: [
      { time: "08:30 - 09:45", type: "Travel", label: "Drive to Hallstatt (~1 to 1.25 hr)" },
      { time: "10:00 - 13:00", type: "Activity", label: "Hallstatt lakeside walk + viewpoints", videoUrl: "https://www.youtube.com/watch?v=aOzc--B05NY" },
      { time: "13:00 - 14:00", type: "Rest", label: "Lunch (picnic by the lake)" },
      { time: "14:00 - 15:30", type: "Activity", label: "Optional Skywalk", videoUrl: "https://www.youtube.com/watch?v=BiQ2M8olTeE" },
      { time: "16:00 - 17:15", type: "Travel", label: "Drive back to Salzburg" },
    ],
  },
  {
    day: 7,
    date: "28 May",
    weekday: "Thursday",
    city: "Salzburg to Innsbruck",
    subtitle: "Alpine Coaster & Golden Roof",
    icon: Rocket,
    iconBg: "bg-coral",
    entries: [
      { time: "08:00 - 08:45", type: "Travel", label: "Return rental car near Salzburg Hbf" },
      { time: "09:56 - 11:44", type: "Travel", label: "OBB Railjet Train: Salzburg Hbf to Innsbruck Hbf" },
      { time: "11:45 - 12:30", type: "Travel", label: "Check-in (Absteige Innsbruck)" },
      { time: "12:30 - 15:00", type: "Rest", label: "Rest + lunch" },
      { time: "16:00 - 18:00", type: "Activity", label: "Mieders Alpine Coaster (Serlesbahnen)", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=eLEuIc-hKbA" },
      { time: "18:30 - 20:00", type: "Activity", label: "Innsbruck Old Town evening stroll (Golden Roof)", videoUrl: "https://www.youtube.com/watch?v=k3X4P5iBDHk" },
      { time: "20:00 - 21:00", type: "Meal", label: "Dinner" },
    ],
  },
  {
    day: 8,
    date: "29 May",
    weekday: "Friday",
    city: "Innsbruck",
    subtitle: "Stubai Glacier & Swarovski",
    icon: Snowflake,
    iconBg: "bg-seafoam",
    entries: [
      { time: "08:00 - 09:15", type: "Travel", label: "Bus/shuttle to Stubai valley" },
      { time: "09:15 - 12:30", type: "Activity", label: "Stubai Glacier (guaranteed snow play)", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=mH2Y-rqfzTo" },
      { time: "12:30 - 13:45", type: "Travel", label: "Return to Innsbruck" },
      { time: "13:45 - 15:00", type: "Rest", label: "Lunch + rest" },
      { time: "15:30 - 17:30", type: "Activity", label: "Swarovski Crystal Worlds + Play Tower", kidEnergy: true, videoUrl: "https://www.youtube.com/watch?v=q-FoUrqSUQg" },
      { time: "17:30 - 18:15", type: "Travel", label: "Shuttle return to Innsbruck" },
      { time: "19:00 - 20:30", type: "Meal", label: "Dinner" },
    ],
  },
  {
    day: 9,
    date: "30 May",
    weekday: "Saturday",
    city: "Innsbruck to Home",
    subtitle: "Naschmarkt & Departure",
    icon: Camera,
    iconBg: "bg-sunshine",
    entries: [
      { time: "08:00 - 08:45", type: "Travel", label: "Check-out + reach Innsbruck Hbf" },
      { time: "09:14 - 13:30", type: "Travel", label: "OBB Railjet Train: Innsbruck Hbf to Wien Hbf" },
      { time: "13:30 - 16:30", type: "Rest", label: "Rest + late lunch" },
      { time: "16:30 - 18:00", type: "Activity", label: "Naschmarkt (souvenirs + early dinner)", videoUrl: "https://www.youtube.com/watch?v=1md9KcnhrUk" },
      { time: "19:00 - 20:00", type: "Travel", label: "Transfer to Vienna Airport" },
      { time: "22:25", type: "Flight", label: "Depart VIE on G9228" },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const typeConfig: Record<EntryType, { icon: React.ElementType; color: string; bg: string }> = {
  Travel: { icon: Train, color: "text-ocean", bg: "bg-ocean/12" },
  Rest: { icon: Bed, color: "text-meadow", bg: "bg-meadow/12" },
  Activity: { icon: Sparkles, color: "text-coral", bg: "bg-coral/12" },
  Meal: { icon: UtensilsCrossed, color: "text-sunshine", bg: "bg-sunshine/15" },
  Flight: { icon: Train, color: "text-ocean", bg: "bg-ocean/12" },
}

/* ------------------------------------------------------------------ */
/* Kid Energy Badge                                                    */
/* ------------------------------------------------------------------ */

function KidEnergyBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider"
      style={{
        background: "linear-gradient(135deg, oklch(0.88 0.17 90 / 0.35), oklch(0.70 0.16 30 / 0.3))",
        color: "oklch(0.45 0.12 30)",
        animation: "kid-glow 2.5s ease-in-out infinite",
      }}
    >
      <Star className="h-2.5 w-2.5 fill-current" />
      Kid Energy
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Day Accordion Card                                                  */
/* ------------------------------------------------------------------ */

function DayCard({ day, index }: { day: ItineraryDay; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const kidCount = (day.entries ?? []).filter((e) => e.kidEnergy).length
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-premium rounded-2xl overflow-hidden">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5 sm:px-6 sm:py-5"
          aria-expanded={open}
        >
          {/* Day icon */}
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-lg ${day.iconBg}`}>
            <day.icon className="h-5 w-5" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-ocean/15 px-2 py-0.5 text-xs font-extrabold tracking-wide text-ocean">
                Day {day.day}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {day.weekday}, {day.date}
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                <MapPin className="h-3 w-3 text-coral" />
                {day.city}
              </span>
            </div>
            <h3 className="mt-1 text-sm font-bold text-foreground sm:text-base">{day.subtitle}</h3>
          </div>

          {/* Meta */}
          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            {kidCount > 0 && (
              <span className="flex items-center gap-1 rounded-full bg-sunshine/20 px-2.5 py-1 text-[10px] font-bold text-accent-foreground">
                <Rocket className="h-3 w-3 text-coral" />
                {kidCount}
              </span>
            )}
            <span className="rounded-full bg-secondary/60 px-2.5 py-1 text-[10px] font-bold text-muted-foreground">
              {(day.entries ?? []).length} stops
            </span>
          </div>

          {/* Chevron */}
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </button>

        {/* Content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 px-5 py-4 sm:px-6 sm:py-5">
                <div className="relative flex flex-col gap-3">
                  <div className="pointer-events-none absolute left-[22px] top-1 bottom-1 w-px bg-gradient-to-b from-ocean/40 via-ocean/25 to-transparent" />
                  {(day.entries ?? []).map((entry, i) => {
                    const cfg = typeConfig[entry.type] ?? typeConfig.Activity
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                        className="group relative flex items-start gap-4 rounded-2xl px-3 py-3 pl-8 transition-colors hover:bg-white/5"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-1.5 top-4 h-3 w-3 rounded-full border border-ocean/40 bg-background shadow-[0_0_0_4px_rgba(15,23,42,0.85)] transition-colors group-hover:border-ocean group-hover:bg-ocean" />

                        {/* Time */}
                        <span className="w-[92px] shrink-0 pt-0.5 font-mono text-xs font-semibold tabular-nums text-muted-foreground/80 sm:w-[110px]">
                          {entry.time}
                        </span>

                        <div className="flex flex-1 items-start gap-4">
                          <div className="flex min-w-0 flex-1 flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              {/* Type pill */}
                              <div
                                className={`flex h-6 shrink-0 items-center gap-1 rounded-md px-2 text-[10px] font-bold uppercase tracking-wider ${cfg.bg} ${cfg.color}`}
                              >
                                <cfg.icon className="h-3 w-3" />
                                {entry.type}
                              </div>

                              {/* Label + badge */}
                              <span className="text-sm font-medium leading-snug tracking-tight text-foreground/90">
                                {entry.label}
                              </span>
                              {entry.kidEnergy && <KidEnergyBadge />}
                            </div>

                            {entry.videoUrl && (
                              <a
                                href={entry.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-100 hover:text-blue-800"
                              >
                                <Youtube className="h-4 w-4" />
                                Watch video
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Main Section                                                        */
/* ------------------------------------------------------------------ */

export function ItineraryTimeline() {
  return (
    <section id="itinerary" className="relative py-24 sm:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-sunshine/6" />
        <div className="absolute bottom-1/4 -right-24 h-72 w-72 rounded-full bg-seafoam/6" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-ocean">
            Day by Day
          </p>
          <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Full Itinerary
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
            {"9 days, 3 cities, countless memories. Tap each day to reveal the full schedule. Look for the "}
            <span className="inline-flex items-center gap-1 font-bold text-accent-foreground">
              <Star className="inline h-3 w-3 fill-current text-coral" />
              Kid Energy
            </span>
            {" badge for family-favourite activities."}
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {(itineraryData ?? []).map((day, index) => (
            <DayCard key={day.day} day={day} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
