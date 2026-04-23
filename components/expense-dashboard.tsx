"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import type { TooltipProps } from "recharts"
import {
  Plane,
  Building2,
  UtensilsCrossed,
  Ticket,
  Train,
  ShieldQuestion,
} from "lucide-react"

const budgetData = [
  {
    name: "Flights",
    value: 9292,
    color: "#3B82F6",
    bgColor: "rgba(59, 130, 246, 0.15)",
    icon: Plane,
  },
  {
    name: "Accommodations",
    value: 7449,
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.15)",
    icon: Building2,
  },
  {
    name: "Food & Groceries",
    value: 4320,
    color: "#F59E0B",
    bgColor: "rgba(245, 158, 11, 0.15)",
    icon: UtensilsCrossed,
  },
  {
    name: "Attractions",
    value: 2650,
    color: "#F97316",
    bgColor: "rgba(249, 115, 22, 0.15)",
    icon: Ticket,
  },
  {
    name: "Transport",
    value: 5600,
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.15)",
    icon: Train,
  },
  {
    name: "Misc / Buffer",
    value: 2000,
    color: "#84CC16",
    bgColor: "rgba(132, 204, 22, 0.15)",
    icon: ShieldQuestion,
  },
]

const total = budgetData.reduce((sum, item) => sum + item.value, 0)

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    const item = payload[0]
    return (
      <div className="glass rounded-xl px-4 py-3">
        <p className="text-sm font-bold text-foreground">{item.name}</p>
        <p className="text-xs text-muted-foreground">
          AED {item.value?.toLocaleString()}
        </p>
      </div>
    )
  }
  return null
}

export function ExpenseDashboard() {
  return (
    <section id="budget" className="relative py-24 sm:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-12 right-0 h-64 w-64 rounded-full bg-meadow/6" />
        <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-sunshine/8" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-ocean">
            Financials
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Expense Dashboard
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass mx-auto max-w-4xl rounded-3xl p-8 sm:p-10"
        >
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Donut Chart */}
            <div className="relative h-64 w-64 shrink-0 sm:h-72 sm:w-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="85%"
                    paddingAngle={3}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {budgetData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className="transition-opacity hover:opacity-80"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              {/* Center label */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Total
                </span>
                <span className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  AED {total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Budget Breakdown
              </h3>
              <div className="flex flex-col gap-3">
                {budgetData.map((item, i) => {
                  const pct = ((item.value / total) * 100).toFixed(1)
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="flex items-center gap-4 rounded-xl bg-secondary/40 px-4 py-3"
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        <item.icon
                          className="h-4 w-4"
                          style={{ color: item.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                        </p>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">
                          AED {item.value.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">{pct}%</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
