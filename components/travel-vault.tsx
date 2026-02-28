"use client"

import { motion } from "framer-motion"
import { Lock, ExternalLink, FileText, ShieldCheck } from "lucide-react"

export function TravelVault() {
  return (
    <section id="vault" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-ocean">
            Secure Access
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Travel Documents
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-lg"
        >
          <div className="glass overflow-hidden rounded-3xl">
            {/* Lock header */}
            <div className="flex items-center gap-3 border-b border-border/50 bg-sunshine/10 px-6 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ocean/15">
                <Lock className="h-4 w-4 text-ocean" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Requires Authentication
                </p>
                <p className="text-xs text-muted-foreground">
                  Encrypted OneDrive vault
                </p>
              </div>
              <ShieldCheck className="ml-auto h-5 w-5 text-meadow" />
            </div>

            {/* Content */}
            <div className="px-6 py-8 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-ocean/12"
              >
                <FileText className="h-8 w-8 text-ocean" />
              </motion.div>

              <p className="mb-6 text-sm font-medium leading-relaxed text-muted-foreground">
                Contains Visas, Passports, and Full Itineraries
              </p>

              <motion.a
                href="https://1drv.ms/f/c/41614dd49d662e23/IgA76ZY1P1S2SamflHWcB1_tAW3quo4elp6NabZkJau1HeY?e=UGtN8p"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-xl bg-ocean px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-shadow hover:shadow-xl"
              >
                Access OneDrive Vault
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
