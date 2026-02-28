"use client"

import { motion } from "framer-motion"
import { CloudSun, Shirt, Umbrella, ChevronDown, Sparkles } from "lucide-react"

const packingItems = [
  { icon: Shirt, text: "Pack layers for Hallstatt!", color: "text-ocean" },
  { icon: Umbrella, text: "Light rain jacket recommended", color: "text-seafoam" },
  { icon: CloudSun, text: "Expect 18-24\u00B0C in late May", color: "text-sunshine" },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-beautiful-view-of-the-austrian-alps-4246/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark glass overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-ocean/30 via-transparent to-sunshine/25" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-sunshine/25 px-5 py-2"
          >
            <Sparkles className="h-4 w-4 text-coral" />
            <span className="text-sm font-bold tracking-wide text-foreground">
              Family Travel Planner
            </span>
          </motion.div>

          <h1 className="mb-6 text-balance text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Austria Family
            <br />
            <span className="bg-gradient-to-r from-ocean via-primary to-seafoam bg-clip-text text-transparent">
              Adventure 2026
            </span>
          </h1>
          <p className="mx-auto max-w-lg text-pretty text-lg text-muted-foreground sm:text-xl">
            {"Vienna \u2022 Salzburg \u2022 Innsbruck"}
            <br />
            <span className="font-bold text-foreground/80">22 May - 30 May 2026</span>
          </p>
        </motion.div>

        {/* Packing Widget */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-sm"
        >
          <div className="glass rounded-2xl p-5">
            <div className="mb-3 flex items-center gap-2">
              <CloudSun className="h-4 w-4 text-sunshine" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent-foreground">
                Packing Checklist
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {packingItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  className="flex items-center gap-3 rounded-xl bg-sunshine/10 px-4 py-2.5"
                >
                  <item.icon className={`h-4 w-4 shrink-0 ${item.color}`} />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#bookings"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            aria-label="Scroll to bookings"
          >
            <span className="text-xs font-semibold tracking-wide">Scroll to explore</span>
            <ChevronDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
